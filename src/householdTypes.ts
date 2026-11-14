// Shared Household Types, Day Styles, and Date Utilities
import { isDescriptionOrPlaceholderText, getChoreCanonicalKey, normalizeTaskName } from './choreUtils';

export { isDescriptionOrPlaceholderText };

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export interface DayStyle {
  name: string;
  short: string;
  color: string;
  lightBg: string;
  border: string;
}

export const DAY_STYLES: DayStyle[] = [
  {
    name: "Monday",
    short: "Mon",
    color: "#8E283A",
    lightBg: "#FDF2F4",
    border: "#F8B4BD"
  },
  {
    name: "Tuesday",
    short: "Tue",
    color: "#1A638B",
    lightBg: "#F0F7FB",
    border: "#A6D2ED"
  },
  {
    name: "Wednesday",
    short: "Wed",
    color: "#C45508",
    lightBg: "#FEF6F0",
    border: "#FBD3B6"
  },
  {
    name: "Thursday",
    short: "Thu",
    color: "#3D7841",
    lightBg: "#F2F8F3",
    border: "#B6DFBA"
  },
  {
    name: "Friday",
    short: "Fri",
    color: "#584B79",
    lightBg: "#F5F3F9",
    border: "#CDC3E6"
  },
  {
    name: "Saturday",
    short: "Sat",
    color: "#B81B6C",
    lightBg: "#FDF2F8",
    border: "#F8B4DB"
  },
  {
    name: "Sunday",
    short: "Sun",
    color: "#0C7B83",
    lightBg: "#EFF9FA",
    border: "#9EE1E6"
  }
];

function pad(n: number): string {
  return n < 10 ? "0" + n : "" + n;
}

export function formatDateKey(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

export function parseDateKey(val: any): { year: number; month: number; day: number } | null {
  if (val === null || val === undefined || val === "") return null;
  if (val instanceof Date) {
    return {
      year: val.getFullYear(),
      month: val.getMonth(),
      day: val.getDate()
    };
  }
  if (typeof val === "number") {
    if (val > 30000 && val < 60000) {
      const dateMs = (val - 25569) * 86400 * 1000;
      const d = new Date(dateMs);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth(),
        day: d.getUTCDate()
      };
    }
    const d = new Date(val);
    if (!isNaN(d.getTime())) {
      return {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate()
      };
    }
  }
  const s = String(val).trim();
  const isoMatch = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    return {
      year: parseInt(isoMatch[1], 10),
      month: parseInt(isoMatch[2], 10) - 1,
      day: parseInt(isoMatch[3], 10)
    };
  }
  const usMatch = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (usMatch) {
    let y = parseInt(usMatch[3], 10);
    if (y < 100) y += 2000;
    return {
      year: y,
      month: parseInt(usMatch[1], 10) - 1,
      day: parseInt(usMatch[2], 10)
    };
  }
  return null;
}

export function toFirstName(val: string | null | undefined): string {
  if (!val) return "";
  const clean = String(val).replace(/^Who:\s*/i, "").replace(/^Assigned:\s*/i, "").trim();
  if (!clean) return "";
  if (isDescriptionOrPlaceholderText(clean)) return "";
  const lower = clean.toLowerCase();
  if (lower.startsWith("thom")) return "Thom";
  if (lower.startsWith("megh")) return "Meghan";
  if (lower.startsWith("syd")) return "Sydney";
  if (lower.startsWith("cad")) return "Cadence";
  if (lower.startsWith("mas")) return "Mason";
  if (lower.startsWith("kod")) return "Koda";
  if (lower.startsWith("key")) return "Keyanna";
  return clean.split(/\s+/)[0];
}

export function isBedroomChore(title: string | null | undefined): boolean {
  const lower = String(title || "").toLowerCase();
  return lower.includes("tidy bedroom") || lower.includes("tidy up bedroom") || lower.includes("tidy bedrooms") || lower.includes("personal spaces");
}

export function isLaundryChore(title: string | null | undefined): boolean {
  const lower = String(title || "").toLowerCase();
  return lower.includes("laundry");
}

export function isKidsChecklistChore(title: string | null | undefined): boolean {
  return isBedroomChore(title) || isLaundryChore(title);
}

export function isCleanBasementChore(title: string | null | undefined): boolean {
  const lower = String(title || "").toLowerCase();
  return lower.includes("clean basement") || lower.includes("basement");
}

export function isHerdFeedingStationChore(title: string | null | undefined): boolean {
  const lower = String(title || "").toLowerCase();
  return lower.includes("feeding station") || lower.includes("herd feeding") || (lower.includes("deep clean") && lower.includes("feeding"));
}

export function isSignOffChore(title: string | null | undefined): boolean {
  const lower = String(title || "").toLowerCase();
  return lower.includes("sign-off") || lower.includes("sign off") || lower.includes("inspection");
}

export function isStreamlinedWeeklyTask(title: string | null | undefined, choreFreq?: any): boolean {
  if (isKidsChecklistChore(title) || isSignOffChore(title)) return false;
  if (isCleanBasementChore(title) || isHerdFeedingStationChore(title)) return true;
  const lower = String(title || "").toLowerCase();
  if (lower.includes("curbside") || lower.includes("recycling") || lower.includes("waste")) return true;
  if (choreFreq && (choreFreq.frequency === "weekly" || choreFreq.frequency === "biweekly")) {
    return true;
  }
  return false;
}

export function getBiWeeklyStatus(year: number, month: number, day: number) {
  const targetUtc = Date.UTC(year, month, day);
  const anchorUtc = Date.UTC(2026, 9, 18);
  const diffDays = Math.round((targetUtc - anchorUtc) / (1000 * 60 * 60 * 24));
  const cycleIndex = (diffDays % 14 + 14) % 14;
  if (cycleIndex === 0) {
    return {
      isPresent: true,
      label: "Arrives 5 PM",
      fullLabel: "Cadence & Mason arrive today at 5:00 PM (Start of Kids Week)",
      cycleIndex,
      isArrivalDay: true,
      isDepartureDay: false,
      isFullStay: false
    };
  } else if (cycleIndex >= 1 && cycleIndex <= 6) {
    return {
      isPresent: true,
      label: "Here (Kids Week)",
      fullLabel: "Cadence & Mason are here this week (Kids Week)",
      cycleIndex,
      isArrivalDay: false,
      isDepartureDay: false,
      isFullStay: true
    };
  } else if (cycleIndex === 7) {
    return {
      isPresent: true,
      label: "Leaves 5 PM",
      fullLabel: "Cadence & Mason depart today at 5:00 PM (End of Kids Week)",
      cycleIndex,
      isArrivalDay: false,
      isDepartureDay: true,
      isFullStay: false
    };
  } else {
    return {
      isPresent: false,
      label: "Away (Off Week)",
      fullLabel: "Cadence & Mason are away this week (Off week)",
      cycleIndex,
      isArrivalDay: false,
      isDepartureDay: false,
      isFullStay: false
    };
  }
}

export function getChoreFreq(cr: any): { frequency: "daily" | "weekly" | "biweekly"; dayOfWeek?: number } {
  const title = (cr?.task) || (cr?.row?.[0]) || "";
  const titleLower = String(title || "").toLowerCase();
  if (titleLower.includes("recycling") || titleLower.includes("waste")) {
    return { frequency: "biweekly", dayOfWeek: 3 };
  }
  if (titleLower.includes("deep clean") || titleLower.includes("feeding station")) {
    return { frequency: "weekly", dayOfWeek: 6 };
  }
  if (titleLower.includes("basement")) {
    return { frequency: "weekly", dayOfWeek: 5 };
  }
  return { frequency: "daily", dayOfWeek: 0 };
}

