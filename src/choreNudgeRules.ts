// Master Chore Auto-Nudge & Timing Rules Engine
// Allows parents to configure scheduled reminders per chore (e.g. Empty Dishwasher at 4:30 PM before supper)
// and automatically fires alerts to assigned kids if the task is still uncompleted.

import { broadcastLocalUpdate } from "./firebaseSync";
import { sendParentNudge } from "./nudgeSystem";
import { saveActivityEvent, playHouseholdRemoteChime } from "./activityFeed";
import { getChoreCanonicalKey, normalizeTaskName } from "./choreUtils";

export interface ChoreNudgeConfig {
  enabled: boolean;
  time: string; // 24-hour "HH:mm", e.g. "16:30"
  targetWindow?: string; // e.g. "After School (3:30 PM – 5:30 PM)"
  message?: string; // e.g. "Friendly reminder to empty the dishwasher before supper! 🍽️"
  days?: number[]; // [0..6] (0=Monday..6=Sunday) or undefined for all days chore is active
}

export interface AutoNudgeLogEntry {
  id: string;
  dateKey: string;
  choreKey: string;
  kidName: string;
  timestamp: number;
  timeSent: string;
}

const STORAGE_KEY_NUDGE_RULES = "weekly_chores_nudge_rules_v1";
const STORAGE_KEY_NUDGE_LOG = "weekly_chores_nudge_sent_log_v1";

// Default sensible rules pre-configured for the household (opt-in by default to prevent unwanted popups on page reload)
export const DEFAULT_CHORE_NUDGE_RULES: Record<string, ChoreNudgeConfig> = {
  empty_dishwasher: {
    enabled: false,
    time: "16:30",
    targetWindow: "After School (3:30 PM – 5:30 PM)",
    message: "Friendly reminder to empty the dishwasher before supper! 🍽️"
  },
  empty_the_dishwasher: {
    enabled: false,
    time: "16:30",
    targetWindow: "After School (3:30 PM – 5:30 PM)",
    message: "Friendly reminder to empty the dishwasher before supper! 🍽️"
  },
  tidy_bedrooms: {
    enabled: false,
    time: "17:00",
    targetWindow: "Before Dinner (5:00 PM)",
    message: "Time for a quick bedroom check! Make sure floors and bed are tidy. 🛏️"
  },
  clean_basement: {
    enabled: false,
    time: "18:00",
    targetWindow: "Evening (6:00 PM)",
    message: "Don't forget to pick up the basement before settling in for the evening! 🧸"
  },
  curbside_waste_recycling: {
    enabled: false,
    time: "19:00",
    targetWindow: "Thursday Evening (7:00 PM)",
    message: "Time to bring the curbside bins out to the curb! 🗑️"
  },
  feed_the_herd: {
    enabled: false,
    time: "17:30",
    targetWindow: "Dinner Time (5:30 PM)",
    message: "Herd feeding station check: please feed pets and refresh water! 🐾"
  },
  feed_herd: {
    enabled: false,
    time: "17:30",
    targetWindow: "Dinner Time (5:30 PM)",
    message: "Herd feeding station check: please feed pets and refresh water! 🐾"
  }
};

// Preset quick times for easy one-click parent selection
export const QUICK_NUDGE_TIME_PRESETS = [
  { label: "Morning", time: "08:00", display: "8:00 AM", window: "Morning Routine" },
  { label: "After School", time: "15:45", display: "3:45 PM", window: "Right After School" },
  { label: "Before Supper", time: "16:30", display: "4:30 PM", window: "Before Supper (3:30 – 5:30 PM)" },
  { label: "Dinner Time", time: "17:30", display: "5:30 PM", window: "Dinner Time" },
  { label: "Evening", time: "18:30", display: "6:30 PM", window: "Evening Wind-Down" },
  { label: "Bedtime Check", time: "20:00", display: "8:00 PM", window: "Before Bedtime" }
];

// Helper: Format "16:30" to "4:30 PM"
export function formatTime24To12(time24: string): string {
  if (!time24 || !time24.includes(":")) return time24 || "";
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  if (isNaN(h) || isNaN(m)) return time24;
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  const minFormatted = m < 10 ? `0${m}` : `${m}`;
  return `${h}:${minFormatted} ${ampm}`;
}

// 1. Get all stored rules (merged with defaults)
export function getAllChoreNudgeRules(): Record<string, ChoreNudgeConfig> {
  if (typeof window === "undefined") return { ...DEFAULT_CHORE_NUDGE_RULES };
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NUDGE_RULES);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      ...DEFAULT_CHORE_NUDGE_RULES,
      ...parsed
    };
  } catch {
    return { ...DEFAULT_CHORE_NUDGE_RULES };
  }
}

// 2. Get rule for a specific chore (matches by canonical key, normalized name, or exact title)
export function getChoreNudgeRule(choreTitle: string): ChoreNudgeConfig | null {
  if (!choreTitle) return null;
  const all = getAllChoreNudgeRules();
  const cKey = getChoreCanonicalKey(choreTitle);
  const norm = normalizeTaskName(choreTitle);
  const clean = choreTitle.toLowerCase().trim();

  return (
    all[cKey] ||
    all[norm] ||
    all[clean] ||
    all[choreTitle] ||
    null
  );
}

// 3. Save rule for a chore
export function saveChoreNudgeRule(choreTitle: string, config: ChoreNudgeConfig): void {
  if (typeof window === "undefined" || !choreTitle) return;
  try {
    const all = getAllChoreNudgeRules();
    const cKey = getChoreCanonicalKey(choreTitle);
    all[cKey] = config;
    localStorage.setItem(STORAGE_KEY_NUDGE_RULES, JSON.stringify(all));

    // Broadcast across windows and network
    broadcastLocalUpdate({
      type: "CHORE_NUDGE_RULE_UPDATED",
      choreKey: cKey,
      choreTitle,
      config
    });
  } catch (err) {
    console.error("Failed to save chore nudge rule:", err);
  }
}

// 4. Sent Nudge Log tracking (prevents duplicate nudges on the same day)
export function getStoredNudgeSentLog(): AutoNudgeLogEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NUDGE_LOG);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function recordNudgeSent(entry: AutoNudgeLogEntry): void {
  if (typeof window === "undefined") return;
  try {
    const current = getStoredNudgeSentLog();
    const updated = [entry, ...current.filter(e => e.id !== entry.id)].slice(0, 100);
    localStorage.setItem(STORAGE_KEY_NUDGE_LOG, JSON.stringify(updated));
  } catch {}
}

export function hasNudgeBeenSentToday(dateKey: string, choreKey: string, kidName: string): boolean {
  const log = getStoredNudgeSentLog();
  const cKey = getChoreCanonicalKey(choreKey);
  const kClean = (kidName || "").toLowerCase().trim();

  return log.some(
    e =>
      e.dateKey === dateKey &&
      (e.choreKey === cKey || e.choreKey === choreKey) &&
      (!kClean || e.kidName.toLowerCase().trim() === kClean)
  );
}

// 5. Automated Nudge Evaluator
// Call periodically (e.g. every 30-60 seconds in the active app)
export interface NudgeEvaluationParams {
  dateKey: string;
  dayChores: Array<{
    choreIndex: number;
    taskTitle: string;
    who: string;
    done: boolean;
    kidsDone?: Record<string, boolean>;
  }>;
  familyMembers: Array<{ id: string; name: string; role?: string; type?: string }>;
  now?: Date;
  onNudgeDispatched?: (kidName: string, choreTitle: string, time: string) => void;
}

export function evaluateAndDispatchAutoNudges(params: NudgeEvaluationParams): number {
  const now = params.now || new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentMinutesFromMidnight = currentHours * 60 + currentMinutes;

  let dispatchedCount = 0;

  params.dayChores.forEach(item => {
    // If chore is already done, no need to nudge!
    if (item.done) return;

    const rule = getChoreNudgeRule(item.taskTitle);
    if (!rule || !rule.enabled || !rule.time) return;

    // Parse rule scheduled time
    const [ruleHStr, ruleMStr] = rule.time.split(":");
    const ruleH = parseInt(ruleHStr, 10);
    const ruleM = parseInt(ruleMStr, 10);
    if (isNaN(ruleH) || isNaN(ruleM)) return;

    const ruleMinutesFromMidnight = ruleH * 60 + ruleM;

    // Fire if current time is within [ruleTime, ruleTime + 90 min]
    const diff = currentMinutesFromMidnight - ruleMinutesFromMidnight;
    if (diff < 0 || diff > 90) return;

    const cKey = getChoreCanonicalKey(item.taskTitle);

    // Identify target kids
    const who = (item.who || "").trim();
    const whoLower = who.toLowerCase();

    let targetKids: string[] = [];

    if (whoLower === "all kids" || whoLower === "each child" || whoLower === "all non-casual" || whoLower === "kids rotation") {
      targetKids = params.familyMembers
        .filter(m => {
          const r = String(m.role || "").toLowerCase();
          return !r.includes("overseer") && !r.includes("supreme") && !r.includes("parent");
        })
        .map(m => m.name);
    } else if (who) {
      targetKids = [who];
    } else {
      // Default to all kids if unassigned
      targetKids = params.familyMembers
        .filter(m => m.type !== "casual" && !String(m.role || "").toLowerCase().includes("parent"))
        .map(m => m.name);
    }

    targetKids.forEach(kidName => {
      // Check if this kid already completed their individual part (e.g. bedroom check)
      if (item.kidsDone && item.kidsDone[kidName]) return;

      // Check if already nudged today
      if (hasNudgeBeenSentToday(params.dateKey, cKey, kidName)) return;

      // Dispatch auto-nudge!
      const time12 = formatTime24To12(rule.time);
      const customMsg = rule.message || `Friendly reminder to ${item.taskTitle} (${time12})!`;
      const headline = `⏰ ${item.taskTitle} (${time12})`;

      sendParentNudge({
        targetKid: kidName,
        type: "nudge",
        headline,
        message: customMsg,
        fromParent: "Parents Thom & Meghan"
      });

      // Record sent log
      recordNudgeSent({
        id: `auto_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        dateKey: params.dateKey,
        choreKey: cKey,
        kidName,
        timestamp: Date.now(),
        timeSent: time12
      });

      // Log activity event
      saveActivityEvent({
        id: `act-nudge-${Date.now()}`,
        timestamp: Date.now(),
        kidName,
        taskTitle: `⏰ Auto-nudge sent for "${item.taskTitle}" (${time12})`,
        action: "nudge",
        dateKey: params.dateKey
      });

      playHouseholdRemoteChime();
      params.onNudgeDispatched?.(kidName, item.taskTitle, time12);
      dispatchedCount++;
    });
  });

  return dispatchedCount;
}

