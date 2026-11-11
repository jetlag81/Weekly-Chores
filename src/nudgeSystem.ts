// Household Hub Parent Nudge & Inspection Feedback System
// Dispatches real-time playful "Meh" and "Good Job" GIFs across parent and kid devices.

import { getRandomGoodJobGif, getRandomMehGif } from "./gifCelebrations";
import { broadcastLocalUpdate } from "./firebaseSync";
import { saveActivityEvent, playHouseholdRemoteChime } from "./activityFeed";

export interface ParentNudgeEvent {
  id: string;
  timestamp: number;
  fromParent: string;
  targetKid: string;
  type: "praise" | "nudge";
  headline: string;
  message: string;
  gifUrl: string;
  acknowledged?: boolean;
}

const STORAGE_KEY_NUDGES = "weekly_chores_parent_nudges_v1";

export const PRAISE_PRESETS = [
  { headline: "Room Looks Spotless! ⭐", message: "Fantastic job keeping your bedroom tidy and organized!" },
  { headline: "Laundry Hero! 🧺", message: "Awesome work folding and putting away all your laundry!" },
  { headline: "Chore Champion! 🚀", message: "Way to crush your chores early! Super proud of you!" },
  { headline: "Pet Care Superstar! 🐾", message: "Thanks for taking such good care of the herd & pets!" }
];

export const NUDGE_PRESETS = [
  { headline: "Bed Needs Tidy! 🛏️", message: "Your bed is still unmade! Needs a quick tidy up please." },
  { headline: "Clothes on Floor! 👕", message: "Laundry / hamper check: please fold and put clothes away." },
  { headline: "Herd Station Check! 🐾", message: "Don't forget the herd feeding station & litter scoop!" },
  { headline: "Kitchen Calling! 🍽️", message: "Dishwasher needs to be unloaded and kitchen wiped down." },
  { headline: "Trash / Recycling! 🗑️", message: "Take out the trash and recycling bins before bedtime." }
];

export function getStoredParentNudges(): ParentNudgeEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NUDGES);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveParentNudge(nudge: ParentNudgeEvent): ParentNudgeEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const cur = getStoredParentNudges();
    const updated = [nudge, ...cur.filter(n => n.id !== nudge.id)].slice(0, 50);
    localStorage.setItem(STORAGE_KEY_NUDGES, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function markNudgeAcknowledged(nudgeId: string): void {
  if (typeof window === "undefined") return;
  try {
    const cur = getStoredParentNudges();
    const updated = cur.map(n => n.id === nudgeId ? { ...n, acknowledged: true } : n);
    localStorage.setItem(STORAGE_KEY_NUDGES, JSON.stringify(updated));
    broadcastLocalUpdate({
      type: "PARENT_NUDGE_ACKNOWLEDGED",
      nudgeId
    });
  } catch {}
}

export function sendParentNudge(params: {
  targetKid: string;
  type: "praise" | "nudge";
  headline?: string;
  message?: string;
  fromParent?: string;
  gifUrl?: string;
}): ParentNudgeEvent {
  const fromParent = params.fromParent || "Parents Thom & Meghan";
  const gifUrl = params.gifUrl || (params.type === "praise" ? getRandomGoodJobGif() : getRandomMehGif());
  
  const headline = params.headline || (params.type === "praise" ? "Awesome Job! ⭐" : "Minion Nudge! 🧹");
  const message = params.message || (params.type === "praise" ? "Keep up the fantastic work!" : "Time for a quick chore touch-up!");

  const nudge: ParentNudgeEvent = {
    id: `nudge_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    fromParent,
    targetKid: params.targetKid,
    type: params.type,
    headline,
    message,
    gifUrl,
    acknowledged: false
  };

  // 1. Save to local storage
  saveParentNudge(nudge);

  // 2. Broadcast nudge across devices
  broadcastLocalUpdate({
    type: "PARENT_NUDGE_SENT",
    nudge
  });

  const activityEvent = {
    id: nudge.id,
    timestamp: nudge.timestamp,
    kidName: params.targetKid,
    taskTitle: params.type === "praise" ? `⭐ Praise from ${fromParent}: "${message}"` : `🧹 Nudge from ${fromParent}: "${message}"`,
    action: "signoff" as const
  };

  // 3. Log to activity feed and broadcast activity event
  saveActivityEvent(activityEvent);
  broadcastLocalUpdate({
    type: "ACTIVITY_LOGGED",
    event: activityEvent
  });

  // 4. Play ambient household chime
  playHouseholdRemoteChime();

  return nudge;
}

