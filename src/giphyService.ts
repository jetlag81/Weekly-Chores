// Giphy API Service with Strict Family-Friendly (G-Rating) Guardrails
// Provides dynamic, randomized celebratory and nudge GIFs for chore completions and parent feedback.
// Strictly enforces rating=g on all queries for 100% kid-safe content.
// Automatically falls back to curated local GIFs if offline or if no key is configured.

import {
  getRandomGoodJobGif,
  getRandomAlmostGif,
  getRandomMehGif
} from "./gifCelebrations";

const STORAGE_KEY_GIPHY_KEY = "weekly_chores_giphy_api_key_v1";
export const DEFAULT_GIPHY_KEY = "sBcdu85NlnmjGPxyhrsP3zsOijhh0Ybw";

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
    // Clear in-memory caches to refresh with new key
    giphyQueues.goodJob = [];
    giphyQueues.almost = [];
    giphyQueues.nudge = [];
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

/**
 * Searches Giphy with mandatory G-rating enforcement.
 * Suitable for searching custom GIFs inside the Parent Nudge Modal.
 */
export async function searchFamilyGiphyGifs(
  query: string,
  limit: number = 15
): Promise<GiphyGifItem[]> {
  const apiKey = getStoredGiphyApiKey();
  if (!apiKey || !query.trim()) return [];

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      q: query.trim(),
      limit: String(limit),
      rating: MANDATORY_FAMILY_RATING, // STRICT G-RATING ENFORCED
      lang: "en"
    });

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?${params.toString()}`);
    if (!res.ok) return [];

    const json = await res.json();
    return parseGiphyApiResponse(json.data);
  } catch (err) {
    console.warn("Giphy search failed (offline or rate limited):", err);
    return [];
  }
}

/**
 * Background preloader that fills the in-memory queue with fresh G-rated celebration GIFs
 */
export async function preloadGiphyCelebrations(): Promise<void> {
  if (isFetchingQueue || typeof window === "undefined") return;
  const apiKey = getStoredGiphyApiKey();
  if (!apiKey) return;

  isFetchingQueue = true;
  try {
    // Fill Good Job queue if needed
    if (giphyQueues.goodJob.length < 5) {
      const term = pickRandomTerm(PRAISE_SEARCH_TERMS);
      const items = await searchFamilyGiphyGifs(term, 15);
      if (items.length > 0) {
        giphyQueues.goodJob.push(...items.sort(() => Math.random() - 0.5));
      }
    }

    // Fill Almost queue if needed
    if (giphyQueues.almost.length < 4) {
      const term = pickRandomTerm(ALMOST_SEARCH_TERMS);
      const items = await searchFamilyGiphyGifs(term, 10);
      if (items.length > 0) {
        giphyQueues.almost.push(...items.sort(() => Math.random() - 0.5));
      }
    }

    // Fill Nudge queue if needed
    if (giphyQueues.nudge.length < 4) {
      const term = pickRandomTerm(NUDGE_SEARCH_TERMS);
      const items = await searchFamilyGiphyGifs(term, 10);
      if (items.length > 0) {
        giphyQueues.nudge.push(...items.sort(() => Math.random() - 0.5));
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
 * For "meh" / "nudge", prioritizes the hilarious original local Meh folder by default
 * to preserve the classic unimpressed tone unless Giphy is explicitly requested.
 * For "goodJob" and "almost", pops from the preloaded Giphy queue or falls back to local GIFs.
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
    // Trigger non-blocking background top-up if queue running low
    if (queue.length < 4) {
      setTimeout(() => preloadGiphyCelebrations(), 500);
    }
    if (item?.url) return item.url;
  }

  // Trigger preload for next time
  setTimeout(() => preloadGiphyCelebrations(), 500);

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
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        return { success: false, error: "Invalid Giphy API key. Please check your key from developers.giphy.com." };
      }
      return { success: false, error: `Giphy API returned error status ${res.status}` };
    }

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

// Auto-bootstrap preload on script load in browser
if (typeof window !== "undefined") {
  setTimeout(() => {
    preloadGiphyCelebrations();
  }, 1000);
}

