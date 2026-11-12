// Giphy API Service with Strict Family-Friendly (G-Rating) Guardrails & Quota Rate-Limiter
// Provides dynamic, randomized celebratory and nudge GIFs for chore completions and parent feedback.
// Strictly enforces rating=g on all queries for 100% kid-safe content.
// Automatically monitors hourly API call volume (100 calls/hr free tier limit), caches responses,
// suppresses redundant background fetches, and seamlessly falls back to curated local GIFs.

import { useState, useEffect } from "react";
import {
  getRandomGoodJobGif,
  getRandomAlmostGif,
  getRandomMehGif
} from "./gifCelebrations";

const STORAGE_KEY_GIPHY_KEY = "weekly_chores_giphy_api_key_v1";
const STORAGE_KEY_CALL_LOG = "weekly_chores_giphy_call_log_v1";
const STORAGE_KEY_SEARCH_CACHE = "weekly_chores_giphy_search_cache_v1";
const STORAGE_KEY_QUEUES = "weekly_chores_giphy_queues_v1";

export const DEFAULT_GIPHY_KEY = "sBcdu85NlnmjGPxyhrsP3zsOijhh0Ybw";

// Giphy Developer Free Tier Quota Limits:
export const HOURLY_RATE_LIMIT = 100;
export const SOFT_RATE_LIMIT = 80; // Above 80 calls/hr, pause background preloading
export const HARD_RATE_LIMIT = 95; // Above 95 calls/hr, block API calls to protect from 429 lockouts

// STRICT FAMILY-FRIENDLY GUARDRAIL:
// Giphy's "g" rating is equivalent to MPAA G: suitable for all audiences, strictly filtering out
// any mature, suggestive, vulgar, or violence-related media.
export const MANDATORY_FAMILY_RATING = "g";

export interface GiphyGifItem {
  id: string;
  title: string;
  url: string; // High-quality animated GIF
  previewUrl: string; // Small/Downsized thumbnail
  webpUrl?: string;
}

export interface GiphyCallRecord {
  timestamp: number;
  endpoint: string;
  query?: string;
  success: boolean;
  status?: number;
}

export interface GiphyUsageStats {
  callsInLastHour: number;
  limit: number;
  remaining: number;
  percentUsed: number;
  resetInMinutes: number;
  isThrottled: boolean;
  isNearLimit: boolean;
  recentCalls: GiphyCallRecord[];
  isCached: boolean;
}

// Memory and cache structures
interface CachedSearchResult {
  timestamp: number;
  results: GiphyGifItem[];
}

interface CachedQueues {
  timestamp: number;
  goodJob: GiphyGifItem[];
  almost: GiphyGifItem[];
  nudge: GiphyGifItem[];
}

const SEARCH_CACHE_TTL_MS = 3 * 60 * 60 * 1000; // 3 hours cache for search results
const QUEUE_CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours cache for preloaded queue items

// In-memory rotating queues for 0ms instantaneous celebration popups
const giphyQueues: {
  goodJob: GiphyGifItem[];
  almost: GiphyGifItem[];
  nudge: GiphyGifItem[];
} = {
  goodJob: [],
  almost: [],
  nudge: []
};

let isFetchingQueue = false;
let throttleUntilTimestamp = 0; // Set if Giphy returns 429

// --- Call Log & Rate Limiting Helpers ---

function getCallLog(): GiphyCallRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CALL_LOG);
    if (!raw) return [];
    const list: GiphyCallRecord[] = JSON.parse(raw);
    const oneHourAgo = Date.now() - 3600 * 1000;
    // Purge calls older than 60 minutes
    const valid = list.filter((item) => item.timestamp > oneHourAgo);
    if (valid.length !== list.length) {
      localStorage.setItem(STORAGE_KEY_CALL_LOG, JSON.stringify(valid));
    }
    return valid;
  } catch {
    return [];
  }
}

function recordGiphyCall(
  endpoint: string,
  query?: string,
  success: boolean = true,
  status?: number
): void {
  if (typeof window === "undefined") return;
  try {
    const log = getCallLog();
    log.push({
      timestamp: Date.now(),
      endpoint,
      query,
      success,
      status
    });
    // Keep max 200 recent records
    const trimmed = log.slice(-200);
    localStorage.setItem(STORAGE_KEY_CALL_LOG, JSON.stringify(trimmed));
    notifyUsageUpdated();
  } catch {}
}

export function notifyUsageUpdated(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("giphy_usage_updated"));
  }
}

export function getGiphyUsageStats(): GiphyUsageStats {
  const log = getCallLog();
  const count = log.length;
  const remaining = Math.max(0, HOURLY_RATE_LIMIT - count);
  const percentUsed = Math.min(100, Math.round((count / HOURLY_RATE_LIMIT) * 100));

  let resetInMinutes = 0;
  if (log.length > 0) {
    const oldestTimestamp = log[0].timestamp;
    const msUntilOldestExpires = Math.max(0, oldestTimestamp + 3600 * 1000 - Date.now());
    resetInMinutes = Math.ceil(msUntilOldestExpires / 60000);
  }

  const isRateLimitedByGiphy = Date.now() < throttleUntilTimestamp;
  const isThrottled = count >= HARD_RATE_LIMIT || isRateLimitedByGiphy;
  const isNearLimit = count >= SOFT_RATE_LIMIT;

  return {
    callsInLastHour: count,
    limit: HOURLY_RATE_LIMIT,
    remaining,
    percentUsed,
    resetInMinutes,
    isThrottled,
    isNearLimit,
    recentCalls: log.slice(-10).reverse(),
    isCached: true
  };
}

export function clearGiphyCallLog(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY_CALL_LOG);
    throttleUntilTimestamp = 0;
    notifyUsageUpdated();
  } catch {}
}

export function clearGiphyCache(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY_SEARCH_CACHE);
    localStorage.removeItem(STORAGE_KEY_QUEUES);
    giphyQueues.goodJob = [];
    giphyQueues.almost = [];
    giphyQueues.nudge = [];
    notifyUsageUpdated();
  } catch {}
}

export function canMakeGiphyCall(isBackground: boolean = false): boolean {
  if (Date.now() < throttleUntilTimestamp) {
    return false;
  }
  const stats = getGiphyUsageStats();
  if (isBackground && stats.isNearLimit) {
    // Suppress background preloading when approaching 80+ calls/hr
    return false;
  }
  if (stats.isThrottled) {
    // Block all outbound calls at 95+ calls/hr
    return false;
  }
  return true;
}

/**
 * React hook to subscribe to live Giphy quota stats and hourly rate limits
 */
export function useGiphyUsage(): GiphyUsageStats {
  const [stats, setStats] = useState<GiphyUsageStats>(() => getGiphyUsageStats());

  useEffect(() => {
    const handleUpdate = () => setStats(getGiphyUsageStats());
    window.addEventListener("giphy_usage_updated", handleUpdate);
    const interval = setInterval(handleUpdate, 20000); // 20s tick to keep countdown fresh
    return () => {
      window.removeEventListener("giphy_usage_updated", handleUpdate);
      clearInterval(interval);
    };
  }, []);

  return stats;
}

// --- API Key Management ---

export function getStoredGiphyApiKey(): string {
  if (typeof window === "undefined") {
    return (
      (typeof process !== "undefined" && process.env?.VITE_GIPHY_API_KEY) ||
      DEFAULT_GIPHY_KEY
    );
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY_GIPHY_KEY);
    if (saved && saved.trim()) return saved.trim();
  } catch {}

  const envKey = (import.meta as any).env?.VITE_GIPHY_API_KEY;
  if (envKey && String(envKey).trim()) return String(envKey).trim();

  return DEFAULT_GIPHY_KEY;
}

export function saveStoredGiphyApiKey(key: string): void {
  if (typeof window === "undefined") return;
  try {
    const clean = key.trim();
    if (clean) {
      localStorage.setItem(STORAGE_KEY_GIPHY_KEY, clean);
    } else {
      localStorage.removeItem(STORAGE_KEY_GIPHY_KEY);
    }
    // Clear caches to refresh with new key
    clearGiphyCache();
    preloadGiphyCelebrations();
  } catch {}
}

export function isGiphyConfigured(): boolean {
  return Boolean(getStoredGiphyApiKey());
}

// Curated wholesome, positive, and kid-safe search terms for chore workflows
const PRAISE_SEARCH_TERMS = [
  "good job cartoon",
  "great job celebration",
  "excited high five",
  "happy dance celebration",
  "you rock cartoon",
  "awesome work cartoon",
  "snoopy happy dance",
  "minions celebrate",
  "thumbs up cartoon",
  "victory dance happy",
  "celebrate winner kids"
];

const ALMOST_SEARCH_TERMS = [
  "almost there cheering",
  "so close exciting",
  "keep going cartoon",
  "you can do it cheering",
  "almost done funny"
];

const NUDGE_SEARCH_TERMS = [
  "meh reaction",
  "unimpressed reaction",
  "eye roll funny",
  "disappointed funny",
  "whatever reaction",
  "facepalm reaction",
  "shrug idk funny",
  "kermit shaking head",
  "disappointed dog funny",
  "bored reaction funny",
  "do better funny",
  "seriously reaction funny"
];

function pickRandomTerm(terms: string[]): string {
  return terms[Math.floor(Math.random() * terms.length)];
}

function parseGiphyApiResponse(data: any[]): GiphyGifItem[] {
  if (!Array.isArray(data)) return [];
  const items: GiphyGifItem[] = [];

  for (const item of data) {
    const images = item.images || {};
    // Prefer downsized or fixed_height for faster mobile loading, fallback to original
    const url =
      images.downsized?.url ||
      images.fixed_height?.url ||
      images.original?.url ||
      "";
    const previewUrl =
      images.fixed_height_small?.url ||
      images.downsized_small?.url ||
      images.preview_gif?.url ||
      url;

    if (url) {
      items.push({
        id: item.id || `gif-${Math.random()}`,
        title: item.title || "Celebration GIF",
        url,
        previewUrl,
        webpUrl: images.fixed_height?.webp || images.original?.webp
      });
    }
  }

  return items;
}

// --- Persistent Search Result Cache ---

function getCachedSearchResult(query: string): GiphyGifItem[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SEARCH_CACHE);
    if (!raw) return null;
    const cacheMap: Record<string, CachedSearchResult> = JSON.parse(raw);
    const key = query.trim().toLowerCase();
    const entry = cacheMap[key];
    if (entry && Date.now() - entry.timestamp < SEARCH_CACHE_TTL_MS) {
      return entry.results;
    }
  } catch {}
  return null;
}

function setCachedSearchResult(query: string, results: GiphyGifItem[]): void {
  if (typeof window === "undefined" || !results.length) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SEARCH_CACHE);
    const cacheMap: Record<string, CachedSearchResult> = raw ? JSON.parse(raw) : {};
    const key = query.trim().toLowerCase();
    cacheMap[key] = {
      timestamp: Date.now(),
      results: results.slice(0, 25)
    };
    // Keep max 35 distinct search terms cached
    const keys = Object.keys(cacheMap);
    if (keys.length > 35) {
      delete cacheMap[keys[0]];
    }
    localStorage.setItem(STORAGE_KEY_SEARCH_CACHE, JSON.stringify(cacheMap));
  } catch {}
}

// --- Persistent Queue Cache ---

function loadQueuesFromStorage(): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_QUEUES);
    if (!raw) return;
    const cached: CachedQueues = JSON.parse(raw);
    if (Date.now() - cached.timestamp < QUEUE_CACHE_TTL_MS) {
      if (Array.isArray(cached.goodJob) && cached.goodJob.length > 0) {
        giphyQueues.goodJob = cached.goodJob;
      }
      if (Array.isArray(cached.almost) && cached.almost.length > 0) {
        giphyQueues.almost = cached.almost;
      }
      if (Array.isArray(cached.nudge) && cached.nudge.length > 0) {
        giphyQueues.nudge = cached.nudge;
      }
    }
  } catch {}
}

function saveQueuesToStorage(): void {
  if (typeof window === "undefined") return;
  try {
    const cached: CachedQueues = {
      timestamp: Date.now(),
      goodJob: giphyQueues.goodJob.slice(0, 20),
      almost: giphyQueues.almost.slice(0, 15),
      nudge: giphyQueues.nudge.slice(0, 15)
    };
    localStorage.setItem(STORAGE_KEY_QUEUES, JSON.stringify(cached));
  } catch {}
}

/**
 * Searches Giphy with mandatory G-rating enforcement, quota tracking, and response caching.
 */
export async function searchFamilyGiphyGifs(
  query: string,
  limit: number = 15
): Promise<GiphyGifItem[]> {
  const qClean = query.trim();
  if (!qClean) return [];

  // Check persistent cache first to save quota
  const cached = getCachedSearchResult(qClean);
  if (cached && cached.length > 0) {
    return cached.slice(0, limit);
  }

  // Check rate limit safety before firing an external network request
  if (!canMakeGiphyCall(false)) {
    console.warn(`[Giphy Rate Limiter] Blocked search for "${qClean}" — hourly limit reached or throttled.`);
    return [];
  }

  const apiKey = getStoredGiphyApiKey();
  if (!apiKey) return [];

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      q: qClean,
      limit: String(limit),
      rating: MANDATORY_FAMILY_RATING, // STRICT G-RATING ENFORCED
      lang: "en"
    });

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?${params.toString()}`);

    if (res.status === 429) {
      // 429 Too Many Requests from Giphy
      throttleUntilTimestamp = Date.now() + 15 * 60 * 1000; // Backoff 15 mins
      recordGiphyCall("search", qClean, false, 429);
      console.warn("[Giphy Rate Limiter] 429 Too Many Requests. Cooling down for 15 minutes.");
      return [];
    }

    if (!res.ok) {
      recordGiphyCall("search", qClean, false, res.status);
      return [];
    }

    recordGiphyCall("search", qClean, true, res.status);
    const json = await res.json();
    const items = parseGiphyApiResponse(json.data);

    if (items.length > 0) {
      setCachedSearchResult(qClean, items);
    }

    return items;
  } catch (err) {
    recordGiphyCall("search", qClean, false);
    console.warn("[Giphy Service] Search failed (offline or network error):", err);
    return [];
  }
}

/**
 * Background preloader that fills the queue with fresh G-rated celebration GIFs
 * Smartly respects rate limits and skips requests if cached queues are already healthy.
 */
export async function preloadGiphyCelebrations(): Promise<void> {
  if (isFetchingQueue || typeof window === "undefined") return;

  // Make sure existing storage is loaded first
  loadQueuesFromStorage();

  // If queues already have enough healthy GIFs in cache, don't burn calls
  const isHealthy =
    giphyQueues.goodJob.length >= 6 &&
    giphyQueues.almost.length >= 4 &&
    giphyQueues.nudge.length >= 4;

  if (isHealthy) {
    return;
  }

  // Ensure we do not exceed hourly quota
  if (!canMakeGiphyCall(true)) {
    return;
  }

  const apiKey = getStoredGiphyApiKey();
  if (!apiKey) return;

  isFetchingQueue = true;
  try {
    // Fill Good Job queue if lowest
    if (giphyQueues.goodJob.length < 5 && canMakeGiphyCall(true)) {
      const term = pickRandomTerm(PRAISE_SEARCH_TERMS);
      const items = await searchFamilyGiphyGifs(term, 15);
      if (items.length > 0) {
        giphyQueues.goodJob.push(...items.sort(() => Math.random() - 0.5));
        saveQueuesToStorage();
      }
    }

    // Fill Almost queue if needed and quota allows
    if (giphyQueues.almost.length < 4 && canMakeGiphyCall(true)) {
      const term = pickRandomTerm(ALMOST_SEARCH_TERMS);
      const items = await searchFamilyGiphyGifs(term, 10);
      if (items.length > 0) {
        giphyQueues.almost.push(...items.sort(() => Math.random() - 0.5));
        saveQueuesToStorage();
      }
    }

    // Fill Nudge queue if needed and quota allows
    if (giphyQueues.nudge.length < 4 && canMakeGiphyCall(true)) {
      const term = pickRandomTerm(NUDGE_SEARCH_TERMS);
      const items = await searchFamilyGiphyGifs(term, 10);
      if (items.length > 0) {
        giphyQueues.nudge.push(...items.sort(() => Math.random() - 0.5));
        saveQueuesToStorage();
      }
    }
  } catch {
    // Ignore background prefetch errors
  } finally {
    isFetchingQueue = false;
  }
}

/**
 * Synchronously retrieves a celebration or nudge GIF URL.
 * Prioritizes the preloaded Giphy queue; if queue is low or hourly limit is reached,
 * it seamlessly returns high-quality curated local GIFs.
 */
export function getRandomGiphyOrFallbackGif(
  category: "goodJob" | "almost" | "meh" | "nudge" = "goodJob",
  preferGiphyForMeh: boolean = false
): string {
  // Stay true to the original Meh folder for nudges unless parent specifically requests Giphy
  if ((category === "meh" || category === "nudge") && !preferGiphyForMeh) {
    return getRandomMehGif();
  }

  const qKey = category === "almost" ? "almost" : category === "goodJob" ? "goodJob" : "nudge";
  const queue = giphyQueues[qKey];

  if (queue && queue.length > 0) {
    const item = queue.shift();
    saveQueuesToStorage();

    // Trigger non-blocking background top-up ONLY if queue running very low and under soft limit
    if (queue.length < 3 && canMakeGiphyCall(true)) {
      setTimeout(() => preloadGiphyCelebrations(), 1000);
    }
    if (item?.url) return item.url;
  }

  // If under limit, top up for next time
  if (canMakeGiphyCall(true)) {
    setTimeout(() => preloadGiphyCelebrations(), 1000);
  }

  // Instant fallback to curated local library
  if (category === "almost") return getRandomAlmostGif();
  if (category === "meh" || category === "nudge") return getRandomMehGif();
  return getRandomGoodJobGif();
}

/**
 * Test a Giphy API key and verify connection with family rating
 */
export async function testGiphyApiKey(
  apiKey: string
): Promise<{ success: boolean; sampleUrl?: string; error?: string }> {
  if (!apiKey || !apiKey.trim()) {
    return { success: false, error: "Please enter a Giphy API key." };
  }

  try {
    const params = new URLSearchParams({
      api_key: apiKey.trim(),
      q: "thumbs up",
      limit: "1",
      rating: MANDATORY_FAMILY_RATING
    });

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?${params.toString()}`);
    if (res.status === 429) {
      recordGiphyCall("test", "thumbs up", false, 429);
      throttleUntilTimestamp = Date.now() + 15 * 60 * 1000;
      return {
        success: false,
        error: "Giphy API hourly rate limit (100 calls/hr) reached. Please wait for the quota window to reset."
      };
    }

    if (!res.ok) {
      recordGiphyCall("test", "thumbs up", false, res.status);
      if (res.status === 401 || res.status === 403) {
        return { success: false, error: "Invalid Giphy API key. Please check your key from developers.giphy.com." };
      }
      return { success: false, error: `Giphy API returned error status ${res.status}` };
    }

    recordGiphyCall("test", "thumbs up", true, res.status);
    const json = await res.json();
    const items = parseGiphyApiResponse(json.data);
    if (items.length > 0 && items[0].url) {
      return { success: true, sampleUrl: items[0].url };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Failed to reach Giphy API. Check network connection." };
  }
}

// Initial bootstrap: load persistent queues, only prefetch if quota allows and queues empty
if (typeof window !== "undefined") {
  loadQueuesFromStorage();
  setTimeout(() => {
    if (canMakeGiphyCall(true)) {
      preloadGiphyCelebrations();
    }
  }, 2000);
}
