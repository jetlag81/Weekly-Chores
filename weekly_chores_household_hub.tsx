// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Award,
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleCheck,
  Clock,
  Crown,
  Filter as Funnel,
  Gift,
  GitMerge,
  Info,
  Layers,
  LayoutGrid,
  ListTodo,
  Pen,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Square,
  SquareCheckBig,
  Trash2,
  Trophy,
  Users,
  X
} from 'lucide-react';

const STORAGE_KEY = 'weekly_chores_canvas_sheet_data_v3';

export const INITIAL_SHEET_DATA = [
  {
    "index_": 0,
    "name": "Printable Weekly Schedule",
    "data": [
      {
        "index_": 0,
        "row": [
          "Chore Schedule",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 1,
        "row": [
          "FOR THE WEEK OF:",
          "MON",
          null,
          "TUE",
          null,
          "WED",
          null,
          "THU",
          null,
          "FRI",
          null,
          "SAT",
          null,
          "SUN",
          null
        ]
      },
      {
        "index_": 2,
        "row": [
          "2026-10-19",
          "19",
          null,
          "20",
          null,
          "21",
          null,
          "22",
          null,
          "23",
          null,
          "24",
          null,
          "25",
          null
        ]
      },
      {
        "index_": 3,
        "row": [
          "TASK",
          "WHO\nDay 1",
          "DONE \nDay 1",
          "WHO \nDAY 2",
          "DONE \nDAY 2",
          "WHO \nDAY 3",
          "DONE  \nDAY 3",
          "WHO \nDAY 4",
          "DONE\nDAY 4",
          "WHO\nDAY 5",
          "DONE\nDAY 5",
          "WHO\nDAY 6",
          "DONE\nDAY 6",
          "WHO\nDAY 7",
          "DONE \nDAY 7"
        ]
      },
      {
        "index_": 4,
        "row": [
          "Daily Tasks",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 5,
        "row": [
          "Empty the Litter Box \n(Morning & Evening)",
          "Meghan",
          false,
          "Sydney",
          false,
          "Cadence",
          false,
          "Mason",
          false,
          "Thom",
          false,
          "Meghan",
          false,
          "Sydney",
          false
        ]
      },
      {
        "index_": 6,
        "row": [
          "Feed the Herd \n(Breakfast & Supper)",
          "Sydney",
          false,
          "Cadence",
          false,
          "Mason",
          false,
          "Thom",
          false,
          "Meghan",
          false,
          "Sydney",
          false,
          "Cadence",
          false
        ]
      },
      {
        "index_": 7,
        "row": [
          "Empty Dishwasher (Before Supper) \n- Put away clean dishes; Load any dirty ones",
          "Cadence",
          false,
          "Mason",
          false,
          "Thom",
          false,
          "Meghan",
          false,
          "Sydney",
          false,
          "Cadence",
          false,
          "Mason",
          false
        ]
      },
      {
        "index_": 8,
        "row": [
          "Make Supper: Plan Ahead!",
          "Mason",
          false,
          "Thom",
          false,
          "Meghan",
          false,
          "Sydney",
          false,
          "Cadence",
          false,
          "Mason",
          false,
          "Thom",
          false
        ]
      },
      {
        "index_": 9,
        "row": [
          "Dinner Dishes & Kitchen Clean-up \n- Put away food; Load dishwasher; Wipe surfaces",
          "Thom",
          false,
          "Meghan",
          false,
          "Sydney",
          false,
          "Cadence",
          false,
          "Mason",
          false,
          "Thom",
          false,
          "Meghan",
          false
        ]
      },
      {
        "index_": 10,
        "row": [
          "Weekly Tasks",
          "Description",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "Initials / Assigned",
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 11,
        "row": [
          "Personal Laundry",
          "(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away",
          false,
          null,
          false,
          null,
          false,
          null,
          null,
          "SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",
          null,
          null,
          false,
          null,
          false
        ]
      },
      {
        "index_": 12,
        "row": [
          "Tidy Bedrooms / Personal Spaces",
          "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum",
          false,
          null,
          false,
          null,
          false,
          null,
          null,
          "SG: ____  CV: ____  MV: ____  KV: ____  KG: ____",
          null,
          null,
          false,
          null,
          false
        ]
      },
      {
        "index_": 13,
        "row": [
          "Clean Up Basement",
          "- Pick Up, Organize, Dust & Vacuum",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "Who: _____________________",
          null,
          null,
          null,
          "Done: ______",
          false
        ]
      },
      {
        "index_": 14,
        "row": [
          "Herd Feeding Station Deep Clean",
          "- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "Who: _____________________",
          null,
          null,
          null,
          "Done: ______",
          false
        ]
      },
      {
        "index_": 18,
        "row": [
          "Weekly Sign-Off",
          "Parent Initials:",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "_________",
          false
        ]
      }
    ]
  },
  {
    "index_": 1,
    "name": "Household Hub (Background Data)",
    "data": [
      {
        "index_": 0,
        "row": [
          "HOUSEHOLD HUB & MASTER DIRECTORY",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 1,
        "row": [
          "Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 3,
        "row": [
          "HOUSEHOLD MEMBERS",
          null,
          null,
          null,
          null,
          null,
          "MASTER CHORE REGISTRY & ALLOCATION RULES",
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 4,
        "row": [
          "Name",
          "Role",
          "Occupancy",
          "Special Rotation Groups",
          "Active Status",
          null,
          "Chore",
          "Member / Group",
          "Frequency",
          "Suggested Days",
          "Details / Notes",
          null
        ]
      },
      {
        "index_": 5,
        "row": [
          "Thom",
          "Supreme Overlord",
          "Full-Time",
          "Parents, Non-Casual, All",
          true,
          null,
          "Empty the Litter Box (Morning & Evening)",
          "Non-Casual",
          "Daily",
          "N/A",
          "Scoop waste, refresh litter, dispose of waste.",
          null
        ]
      },
      {
        "index_": 6,
        "row": [
          "Meghan",
          "Supreme Overlord",
          "Full-Time",
          "Parents, Non-Casual, All",
          true,
          null,
          "Feed the Herd (Breakfast & Supper)",
          "Non-Casual",
          "Daily",
          "N/A",
          "Feed all animals the appropriate food and portions.",
          null
        ]
      },
      {
        "index_": 7,
        "row": [
          "Sydney",
          "Minion",
          "Full-Time",
          "Kids, Non-Casual, All",
          true,
          null,
          "Empty Dishwasher",
          "All Non-Casual",
          "Daily",
          "Mon – Sun",
          "Put away clean dishes, Load any dirty dishes",
          null
        ]
      },
      {
        "index_": 8,
        "row": [
          "Cadence",
          "Minion",
          "Bi-Weekly",
          "Kids, Non-Casual, All",
          true,
          null,
          "Make Supper: Plan Ahead!",
          "Non-Casual",
          "Daily",
          "Mon – Sun",
          "Think of a menu, make a list if items are needed, prepare & serve (try to have a plan in place by at least the day before)",
          null
        ]
      },
      {
        "index_": 9,
        "row": [
          "Mason",
          "Minion",
          "Bi-Weekly",
          "Kids, Non-Casual, All",
          true,
          null,
          "Dinner Dishes & Kitchen Cleanup",
          "Non-Casual",
          "Daily",
          "N/A",
          "Load dishwasher, put leftovers in containers & put away, wash & dry any extra dishes, wipe counters, table, stove & other surfaces",
          null
        ]
      },
      {
        "index_": 10,
        "row": [
          "Koda",
          "Minion",
          "Casual",
          "All",
          true,
          null,
          "Tidy Bedrooms / Personal Spaces",
          "Kids",
          "Once a Week",
          "Saturday",
          "Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space)",
          null
        ]
      },
      {
        "index_": 11,
        "row": [
          "Keyanna",
          "Minion",
          "Casual",
          "All",
          true,
          null,
          "Laundry",
          "All",
          "Once a Week",
          "Saturday",
          "Wash, dry, fold & put away (each kid responsible for their own items)",
          null
        ]
      },
      {
        "index_": 12,
        "row": [
          null,
          null,
          null,
          null,
          null,
          null,
          "Clean Basement (Pick Up, Dust, Vacuum)",
          "Non-Casual",
          "Once a Week",
          "Sunday",
          "Pick up mess & laundry, dust surfaces, vacuum floors",
          null
        ]
      },
      {
        "index_": 13,
        "row": [
          "OCCUPANCY CATEGORIES",
          null,
          null,
          null,
          null,
          null,
          "Herd Feeding Station Deep Clean",
          "All",
          "Once a Week",
          "Sunday",
          "Wash & sanitize pet bowls, vacuum feeding mat",
          null
        ]
      },
      {
        "index_": 14,
        "row": [
          "Type",
          "Description",
          "Rules",
          null,
          "Active Status",
          null,
          "Curbside Recycling",
          "Thom",
          "Bi-Weekly",
          "Thursday Evening (required)",
          "Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)",
          null
        ]
      },
      {
        "index_": 15,
        "row": [
          "Full-Time",
          "Constant Residency",
          "Included in all weekly/monthly schedulings",
          null,
          true,
          null,
          "Curbside Waste",
          "Non-Casual",
          "Bi-Weekly",
          "Thursday Evening (required)",
          "Roll waste bin to curb Thursday evening for Friday pickup (alternating weeks)",
          null
        ]
      },
      {
        "index_": 16,
        "row": [
          "Bi-Weekly",
          "Half-Time Residency",
          "Included in weekly/monthly schedulings when in residence, Use \"Custody Schedule Rotation\" data",
          null,
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 17,
        "row": [
          "Casual",
          "Periodic Residency",
          "Manually added to any schedules",
          null,
          true,
          null,
          "SCHEDULE CONFIGURATIONS",
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 18,
        "row": [
          "SPECIAL ROTATION GROUPS",
          null,
          null,
          null,
          null,
          null,
          "Active Week Start Date",
          "2026-10-19",
          "Printable Weekly Schedule",
          null,
          null,
          null
        ]
      },
      {
        "index_": 19,
        "row": [
          "Name",
          "Members",
          null,
          null,
          "Active Status",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 20,
        "row": [
          "All",
          "Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",
          null,
          null,
          true,
          null,
          "Custody Schedule Rotation",
          "Kids Week",
          "Bi-Weekly Schedule",
          null,
          "Mason, Cadence",
          null
        ]
      },
      {
        "index_": 21,
        "row": [
          "Kids",
          "Sydney, Cadence, Mason",
          null,
          null,
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 22,
        "row": [
          "Parents",
          "Thom, Meghan",
          null,
          null,
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 23,
        "row": [
          "Non-Casual",
          "Thom, Meghan, Sydney, Cadence, Mason",
          null,
          null,
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 26,
        "row": [
          "Pet Name",
          "Dog / Cat",
          "Routine",
          "Care Responsibilities",
          "Active Status",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 27,
        "row": [
          "Ellie",
          "Dog",
          "Morning & Evening",
          "Feed morning/evening, let outside, walk frequently, fresh water",
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 28,
        "row": [
          "Lewis",
          "Dog",
          "Morning & Evening",
          "Feed morning/evening, let outside, walk frequently, fresh water",
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 29,
        "row": [
          "Casey",
          "Cat",
          "Morning & Evening",
          "Feed morning/evening, scoop litter box, fresh water",
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 30,
        "row": [
          "Gigi",
          "Cat",
          "Morning & Evening",
          "Feed morning/evening, scoop litter box, fresh water",
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 31,
        "row": [
          "Sloane",
          "Cat",
          "Morning & Evening",
          "Feed morning/evening, scoop litter box, fresh water",
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 32,
        "row": [
          "Scoob",
          "Cat",
          "Morning & Evening",
          "Feed morning/evening, scoop litter box, fresh water",
          true,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      {
        "index_": 33,
        "row": [
          null,
          null,
          null,
          null,
          false,
          null,
          "Weekly Sign-Off & Inspection",
          "Parents",
          "Once a Week",
          "Sunday",
          "Rigorously review completed tasks, administer severe punishments if not done satisfactorily, sign off if work is acceptible",
          null
        ]
      },
      {
        "index_": 34,
        "row": [
          null,
          null,
          null,
          null,
          false,
          null,
          "Empty Dishwasher",
          "All Non-Casual",
          "Daily",
          "Mon – Sun",
          null,
          null
        ]
      }
    ]
  }
];

var DAY_STYLES = [{
  name: "Monday",
  short: "Mon",
  color: "#8E283A",
  lightBg: "#FDF2F4",
  border: "#F8B4BD"
}, {
  name: "Tuesday",
  short: "Tue",
  color: "#1A638B",
  lightBg: "#F0F7FB",
  border: "#A6D2ED"
}, {
  name: "Wednesday",
  short: "Wed",
  color: "#C45508",
  lightBg: "#FEF6F0",
  border: "#FBD3B6"
}, {
  name: "Thursday",
  short: "Thu",
  color: "#3D7841",
  lightBg: "#F2F8F3",
  border: "#B6DFBA"
}, {
  name: "Friday",
  short: "Fri",
  color: "#584B79",
  lightBg: "#F5F3F9",
  border: "#CDC3E6"
}, {
  name: "Saturday",
  short: "Sat",
  color: "#B81B6C",
  lightBg: "#FDF2F8",
  border: "#F8B4DB"
}, {
  name: "Sunday",
  short: "Sun",
  color: "#0C7B83",
  lightBg: "#EFF9FA",
  border: "#9EE1E6"
}];
var MEMBER_COLOR_PALETTES = [{
  color: "#8B5CF6",
  bg: "#EDE9FE",
  text: "#6D28D9"
},
// Violet
{
  color: "#2563EB",
  bg: "#DBEAFE",
  text: "#1D4ED8"
},
// Blue
{
  color: "#0D9488",
  bg: "#CCFBF1",
  text: "#0F766E"
},
// Teal
{
  color: "#EC4899",
  bg: "#FCE7F3",
  text: "#BE185D"
},
// Pink
{
  color: "#EA580C",
  bg: "#FFEDD5",
  text: "#C2410C"
},
// Orange
{
  color: "#0284C7",
  bg: "#E0F2FE",
  text: "#0369A1"
},
// Sky
{
  color: "#D97706",
  bg: "#FEF3C7",
  text: "#B45309"
},
// Amber
{
  color: "#10B981",
  bg: "#D1FAE5",
  text: "#047857"
},
// Emerald
{
  color: "#6366F1",
  bg: "#EEF2FF",
  text: "#4338CA"
}
// Indigo
];
var PRESET_MEMBER_COLORS = {
  "meghan": {
    color: "#8B5CF6",
    bg: "#EDE9FE",
    text: "#6D28D9"
  },
  "thom": {
    color: "#2563EB",
    bg: "#DBEAFE",
    text: "#1D4ED8"
  },
  "sydney": {
    color: "#0D9488",
    bg: "#CCFBF1",
    text: "#0F766E"
  },
  "cadence": {
    color: "#EC4899",
    bg: "#FCE7F3",
    text: "#BE185D"
  },
  "mason": {
    color: "#EA580C",
    bg: "#FFEDD5",
    text: "#C2410C"
  },
  "koda": {
    color: "#0284C7",
    bg: "#E0F2FE",
    text: "#0369A1"
  },
  "keyanna": {
    color: "#D97706",
    bg: "#FEF3C7",
    text: "#B45309"
  }
};
function normalizeTaskName(title) {
  if (!title) return "";
  return String(title).toLowerCase().replace(/[•\-\–\—\(\)\:\,\/]/g, " ").replace(/\s+/g, " ").trim();
}
function getChoreCanonicalKey(title) {
  if (!title) return "";
  const lower = String(title).toLowerCase();
  if (lower.includes("litter")) return "litter_box";
  if (lower.includes("herd") && (lower.includes("breakfast") || lower.includes("supper") || lower.includes("feed the herd"))) return "feed_herd";
  if (lower.includes("dishwasher") && lower.includes("empty")) return "empty_dishwasher";
  if (lower.includes("supper") || lower.includes("dinner") && lower.includes("plan")) return "make_supper";
  if (lower.includes("dishes") || lower.includes("kitchen cleanup")) return "dinner_dishes";
  if (lower.includes("bedroom") || lower.includes("personal spaces")) return "tidy_bedrooms";
  if (lower.includes("laundry")) return "laundry";
  if (lower.includes("basement")) return "clean_basement";
  if (lower.includes("feeding station") || lower.includes("deep clean") && lower.includes("feeding")) return "feeding_station_deep_clean";
  if (lower.includes("recycling")) return "curbside_recycling";
  if (lower.includes("waste")) return "curbside_waste";
  if (lower.includes("sign-off") || lower.includes("sign off") || lower.includes("inspection")) return "weekly_sign_off";
  if (lower.includes("walk") && lower.includes("dog")) return "walk_dogs";
  return normalizeTaskName(title);
}
function isBedroomChore(title) {
  const lower = String(title || "").toLowerCase();
  return lower.includes("tidy bedroom") || lower.includes("tidy up bedroom") || lower.includes("tidy bedrooms") || lower.includes("personal spaces");
}
function isLaundryChore(title) {
  const lower = String(title || "").toLowerCase();
  return lower.includes("laundry");
}
function isKidsChecklistChore(title) {
  return isBedroomChore(title) || isLaundryChore(title);
}
function isCleanBasementChore(title) {
  const lower = String(title || "").toLowerCase();
  return lower.includes("clean basement") || lower.includes("basement");
}
function isHerdFeedingStationChore(title) {
  const lower = String(title || "").toLowerCase();
  return lower.includes("feeding station") || lower.includes("herd feeding") || lower.includes("deep clean") && lower.includes("feeding");
}
function isSignOffChore(title) {
  const lower = String(title || "").toLowerCase();
  return lower.includes("sign-off") || lower.includes("sign off") || lower.includes("inspection");
}
function isStreamlinedWeeklyTask(title, choreFreq) {
  if (isCleanBasementChore(title) || isHerdFeedingStationChore(title)) return true;
  if (choreFreq && choreFreq.frequency === "weekly" && !isKidsChecklistChore(title) && !isSignOffChore(title)) {
    return true;
  }
  return false;
}
function getSpecificKidForChore(title) {
  const t = String(title || "");
  const match = t.match(/tidy bedroom:\s*([A-Za-z]+)/i);
  return match ? match[1].trim() : null;
}
function getBiWeeklyStatus(year, month, day) {
  const target = new Date(year, month, day, 12, 0, 0);
  const anchor = new Date(2026, 9, 18, 12, 0, 0);
  const diffDays = Math.round((target.getTime() - anchor.getTime()) / (1e3 * 60 * 60 * 24));
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
function getWeekBiWeeklySummary(week, biWeeklyNames = "Cadence & Mason") {
  if (!week || week.length < 7) return null;
  const sunday = week[6];
  const monday = week[0];
  const monStatus = getBiWeeklyStatus(monday.year, monday.month, monday.day);
  const sunStatus = getBiWeeklyStatus(sunday.year, sunday.month, sunday.day);
  if (sunStatus.isArrivalDay) {
    return {
      text: `${biWeeklyNames} arrive Sunday at 5:00 PM`,
      badgeBg: "bg-pink-50 text-pink-700 border-pink-200"
    };
  } else if (monStatus.isPresent && monStatus.isFullStay) {
    return {
      text: `${biWeeklyNames} here this week (leave Sun 5 PM)`,
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    };
  } else {
    return {
      text: `${biWeeklyNames} away this week (next back on Sunday)`,
      badgeBg: "bg-slate-100 text-slate-500 border-slate-200"
    };
  }
}
function isBiWeeklyInResidenceForWeek(weekDays) {
  if (!weekDays || weekDays.length < 6) return false;
  const sat = weekDays[5] || weekDays[weekDays.length - 1];
  const st = getBiWeeklyStatus(sat.year, sat.month, sat.day);
  return st.isFullStay || st.isDepartureDay;
}
function getSundaySupperAssignee(year, month, day, parents = ["Thom", "Meghan"]) {
  const d = new Date(year, month, day, 12, 0, 0);
  const anchorSunday = new Date(2026, 9, 11, 12, 0, 0);
  const diffWeeks = Math.round((d.getTime() - anchorSunday.getTime()) / (1e3 * 60 * 60 * 24 * 7));
  const pList = parents && parents.length > 0 ? parents : ["Thom", "Meghan"];
  const normalizedIndex = (diffWeeks % pList.length + pList.length) % pList.length;
  return pList[normalizedIndex];
}
var HOUSE_PETS = [{
  name: "Ellie",
  kind: "Dog",
  icon: "\u{1F415}"
}, {
  name: "Lewis",
  kind: "Dog",
  icon: "\u{1F415}"
}, {
  name: "Casey",
  kind: "Cat",
  icon: "\u{1F408}"
}, {
  name: "Gigi",
  kind: "Cat",
  icon: "\u{1F408}"
}, {
  name: "Sloane",
  kind: "Cat",
  icon: "\u{1F408}"
}, {
  name: "Scoob",
  kind: "Cat",
  icon: "\u{1F408}"
}];
var CHORE_CATEGORIES = [{
  id: "Pet Care",
  name: "Pet Care",
  icon: "\u{1F43E}",
  bg: "bg-amber-50",
  text: "text-amber-800",
  border: "border-amber-200",
  dot: "#D97706"
}, {
  id: "Kitchen",
  name: "Kitchen",
  icon: "\u{1F37D}\uFE0F",
  bg: "bg-emerald-50",
  text: "text-emerald-800",
  border: "border-emerald-200",
  dot: "#059669"
}, {
  id: "Bedrooms",
  name: "Bedrooms",
  icon: "\u{1F6CF}\uFE0F",
  bg: "bg-pink-50",
  text: "text-pink-800",
  border: "border-pink-200",
  dot: "#DB2777"
}, {
  id: "Household",
  name: "Household",
  icon: "\u{1F3E0}",
  bg: "bg-blue-50",
  text: "text-blue-800",
  border: "border-blue-200",
  dot: "#2563EB"
}, {
  id: "Common Areas",
  name: "Common Areas",
  icon: "\u{1F6CB}\uFE0F",
  bg: "bg-purple-50",
  text: "text-purple-800",
  border: "border-purple-200",
  dot: "#7C3AED"
}, {
  id: "Administration",
  name: "Administration",
  icon: "\u{1F4CB}",
  bg: "bg-slate-100",
  text: "text-slate-700",
  border: "border-slate-300",
  dot: "#475569"
}];
var DEFAULT_MASTER_CHORES = [{
  title: "Empty the Litter Box (Morning & Evening)",
  category: "Pet Care",
  freq: {
    frequency: "daily",
    dayOfWeek: 0
  },
  targetDay: "Mon \u2013 Sun",
  rotationGroup: "Kids Rotation",
  notes: "Morning & evening scoop, waste disposal"
}, {
  title: "Feed the Herd (Breakfast & Supper)",
  category: "Pet Care",
  freq: {
    frequency: "daily",
    dayOfWeek: 0
  },
  targetDay: "Mon \u2013 Sun",
  rotationGroup: "Kids Rotation",
  notes: "Morning & evening feeding, refresh water bowls"
}, {
  title: "Make Supper: Plan Ahead!",
  category: "Kitchen",
  freq: {
    frequency: "daily",
    dayOfWeek: 0
  },
  targetDay: "Mon \u2013 Sun",
  rotationGroup: "Parents & Kids",
  notes: "Meal prep, cooking, family dinner"
}, {
  title: "Dinner Dishes & Kitchen Cleanup",
  category: "Kitchen",
  freq: {
    frequency: "daily",
    dayOfWeek: 0
  },
  targetDay: "Mon \u2013 Sun",
  rotationGroup: "Kids Rotation",
  notes: "Clear table, dishwasher, wipe counters & sink"
}, {
  title: "Tidy Bedrooms & Checklist",
  category: "Bedrooms",
  who: "Each Child",
  freq: {
    frequency: "weekly",
    dayOfWeek: 5
  },
  targetDay: "Saturday",
  rotationGroup: "All Occupants",
  notes: "Pick up mess & laundry, dust surfaces, vacuum floors"
}, {
  title: "Laundry (Wash, Fold, Put Away)",
  category: "Household",
  who: "Sydney",
  freq: {
    frequency: "weekly",
    dayOfWeek: 5
  },
  targetDay: "Saturday",
  rotationGroup: "Sydney",
  notes: "Linens, clothes, fold and put in drawers"
}, {
  title: "Clean Basement & Rec Room",
  category: "Common Areas",
  freq: {
    frequency: "weekly",
    dayOfWeek: 5
  },
  targetDay: "Saturday",
  rotationGroup: "All Kids",
  notes: "Tidy items, organize games, vacuum carpet"
}, {
  title: "Weekly Sign-Off & Inspection",
  category: "Administration",
  who: "Parents",
  freq: {
    frequency: "weekly",
    dayOfWeek: 6
  },
  targetDay: "Sunday",
  rotationGroup: "Parents",
  notes: "Check off bedroom tidiness and completed chores"
}, {
  title: "Herd Feeding Station Deep Clean",
  category: "Pet Care",
  freq: {
    frequency: "weekly",
    dayOfWeek: 6
  },
  targetDay: "Sunday",
  rotationGroup: "Full-Time Roster",
  notes: "Wash & sanitize pet bowls, wipe feeding mat"
}, {
  title: "Curbside Recycling",
  category: "Household",
  freq: {
    frequency: "biweekly",
    dayOfWeek: 3
  },
  targetDay: "Thursday Evening",
  rotationGroup: "All Non-Casual",
  notes: "Roll recycling bin to curb Thursday evening; active Thursday, Oct 15 (alternates bi-weekly with waste)"
}, {
  title: "Curbside Waste",
  category: "Household",
  freq: {
    frequency: "biweekly",
    dayOfWeek: 3
  },
  targetDay: "Thursday Evening",
  rotationGroup: "All Non-Casual",
  notes: "Roll waste bin to curb Thursday evening; active following Thursday, Oct 22 (alternates bi-weekly with recycling)"
}, {
  title: "Walk Dogs: Ellie & Lewis (Morning & Evening walk)",
  category: "Pet Care",
  freq: {
    frequency: "daily",
    dayOfWeek: 0
  },
  targetDay: "Mon \u2013 Sun",
  rotationGroup: "Kids Rotation",
  notes: "Morning & evening walk for Ellie & Lewis"
}];
function isCurbsideActiveOnDate(taskName, year, month, day) {
  const lower = String(taskName || "").toLowerCase();
  const isRecycling = lower.includes("recycling");
  const isWaste = lower.includes("waste");
  if (!isRecycling && !isWaste) return true;
  const targetDate = new Date(year, month, day, 12, 0, 0);
  const recyclingAnchor = new Date(2026, 9, 15, 12, 0, 0);
  const diffDays = Math.round((targetDate.getTime() - recyclingAnchor.getTime()) / (1e3 * 60 * 60 * 24));
  const diffWeeks = Math.round(diffDays / 7);
  const cycleIndex = (diffWeeks % 2 + 2) % 2;
  if (isRecycling) {
    return cycleIndex === 0;
  }
  if (isWaste) {
    return cycleIndex === 1;
  }
  return true;
}
function getCurbsideStatusForDate(taskName, year, month, day) {
  const lower = String(taskName || "").toLowerCase();
  const isRecycling = lower.includes("recycling");
  const isWaste = lower.includes("waste");
  if (!isRecycling && !isWaste) return null;
  const targetDate = new Date(year, month, day, 12, 0, 0);
  const dayOfWeek = targetDate.getDay();
  const recyclingAnchor = new Date(2026, 9, 15, 12, 0, 0);
  const diffDays = Math.round((targetDate.getTime() - recyclingAnchor.getTime()) / (1e3 * 60 * 60 * 24));
  const diffWeeks = Math.round(diffDays / 7);
  const cycleIndex = (diffWeeks % 2 + 2) % 2;
  const isScheduledToday = dayOfWeek === 4 && (isRecycling ? cycleIndex === 0 : cycleIndex === 1);
  const isOppositeThursday = dayOfWeek === 4 && (isRecycling ? cycleIndex === 1 : cycleIndex === 0);
  return {
    isCurbside: true,
    isRecycling,
    isWaste,
    isScheduledToday,
    isOppositeThursday,
    cycleIndex,
    nextScheduledText: isRecycling ? cycleIndex === 0 ? "Today (Oct 15)" : "Next Thursday (Oct 29)" : cycleIndex === 1 ? "Today" : "Next Thu (Oct 22)"
  };
}
function getInitialChoreFrequency(taskName) {
  const lower = String(taskName || "").toLowerCase().trim();
  if (lower.includes("recycling") || lower.includes("waste")) {
    return {
      frequency: "biweekly",
      dayOfWeek: 3
    };
  }
  if (lower.includes("sign-off") || lower.includes("inspection") || lower.includes("deep clean") || lower.includes("feeding station")) {
    return {
      frequency: "weekly",
      dayOfWeek: 6
    };
  }
  if (lower.includes("tidy bedroom") || lower.includes("clean basement") || lower.includes("laundry")) {
    return {
      frequency: "weekly",
      dayOfWeek: 5
    };
  }
  return {
    frequency: "daily",
    dayOfWeek: 0
  };
}
function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}
function formatDateKey(year, month, day) {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}
function parseDateKey(val) {
  if (val === null || val === void 0 || val === "") return null;
  if (val instanceof Date) {
    return {
      year: val.getFullYear(),
      month: val.getMonth(),
      day: val.getDate()
    };
  }
  if (typeof val === "number") {
    if (val > 3e4 && val < 6e4) {
      const dateMs = (val - 25569) * 86400 * 1e3;
      const d = new Date(dateMs);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth(),
        day: d.getUTCDate()
      };
    }
    return null;
  }
  const str = String(val).trim();
  if (!str.includes("-")) {
    const num = Number(str);
    if (!isNaN(num) && num > 3e4 && num < 6e4) {
      const d = new Date((num - 25569) * 86400 * 1e3);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth(),
        day: d.getUTCDate()
      };
    }
    return null;
  }
  const parts = str.split("-").map(Number);
  if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return null;
  return {
    year: parts[0],
    month: parts[1] - 1,
    day: parts[2]
  };
}
function getMondayOfDate(year, month, day) {
  const d = new Date(year, month, day);
  const dayOfWeek = d.getDay();
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(year, month, day + diff);
  return {
    year: monday.getFullYear(),
    month: monday.getMonth(),
    day: monday.getDate()
  };
}
function getWeekDaysForDate(year, month, day) {
  const mon = getMondayOfDate(year, month, day);
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(mon.year, mon.month, mon.day + i);
    const y = d.getFullYear();
    const m = d.getMonth();
    const dateNum = d.getDate();
    weekDays.push({
      year: y,
      month: m,
      day: dateNum,
      dateKey: formatDateKey(y, m, dateNum),
      isCurrentMonth: true,
      dayOfWeekIndex: i
    });
  }
  return weekDays;
}
function generateWeekAssignments(startDateStr, choresList = DEFAULT_MASTER_CHORES) {
  const parsedStart = parseDateKey(startDateStr) || {
    year: 2026,
    month: 9,
    day: 12
  };
  const weekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);
  const parents = ["Thom", "Meghan"];
  const fullTimeKids = ["Sydney"];
  const allKids = ["Sydney", "Cadence", "Mason"];
  const fullTimeRoster = ["Thom", "Meghan", "Sydney"];
  const allNonCasual = ["Thom", "Meghan", "Sydney", "Cadence", "Mason"];
  const scheduleMap = {};
  weekDays.forEach((dayObj, dayIdx) => {
    const dKey = dayObj.dateKey;
    scheduleMap[dKey] = {};
    const bwStatus = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);
    const areKidsInResidence = bwStatus.isFullStay || bwStatus.isDepartureDay;
    const dailyRotation = areKidsInResidence ? allNonCasual : fullTimeRoster;
    const kids = areKidsInResidence ? allKids : fullTimeKids;
    const dayStartOffset = dayIdx % dailyRotation.length;
    let dailyCounter = 0;
    choresList.forEach((cr, choreIdx) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const taskTitle = cr.task || cr.title || ((_a = cr.row) == null ? void 0 : _a[0]) || "";
      const tLower = taskTitle.toLowerCase();
      const freq = getInitialChoreFrequency(taskTitle);
      let isScheduled = false;
      const isDeepClean = tLower.includes("deep clean") || tLower.includes("feeding station");
      const isRecycling = tLower.includes("recycling");
      const isWaste = tLower.includes("waste");
      if (isDeepClean) {
        isScheduled = dayIdx === 6;
      } else if (isRecycling) {
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);
      } else if (isWaste) {
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);
      } else if (freq.frequency === "daily" || ((_b = cr.frequency) == null ? void 0 : _b.toLowerCase().includes("daily")) && !((_c = cr.frequency) == null ? void 0 : _c.toLowerCase().includes("once"))) {
        isScheduled = true;
      } else if (freq.frequency === "biweekly" || ((_d = cr.frequency) == null ? void 0 : _d.toLowerCase().includes("bi"))) {
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate(taskTitle, dayObj.year, dayObj.month, dayObj.day);
      } else if (freq.frequency === "weekly" || ((_e = cr.frequency) == null ? void 0 : _e.toLowerCase().includes("weekly")) && !((_f = cr.frequency) == null ? void 0 : _f.toLowerCase().includes("bi")) || ((_g = cr.frequency) == null ? void 0 : _g.toLowerCase().includes("once"))) {
        const targetDayLower = String(cr.targetDay || "").toLowerCase();
        const scheduledDay = targetDayLower.includes("sunday") ? 6 : targetDayLower.includes("thursday") ? 3 : 5;
        isScheduled = dayIdx === scheduledDay;
      }
      let assignedWho = "";
      if (!isScheduled) {
        assignedWho = "";
      } else if (isBedroomChore(taskTitle)) {
        assignedWho = areKidsInResidence ? "Each Child" : "Sydney";
      } else if (dayIdx === 6 && tLower.includes("supper")) {
        assignedWho = getSundaySupperAssignee(dayObj.year, dayObj.month, dayObj.day, parents);
      } else if (tLower.includes("sign-off") || tLower.includes("inspection")) {
        assignedWho = parents[dayIdx % parents.length];
      } else if (tLower.includes("basement")) {
        assignedWho = kids[(dayStartOffset + 1) % kids.length];
      } else if (tLower.includes("laundry")) {
        assignedWho = kids[dayStartOffset % kids.length];
      } else if (isDeepClean) {
        assignedWho = dailyRotation[(dayStartOffset + 1) % dailyRotation.length];
      } else if (tLower.includes("recycling")) {
        assignedWho = dailyRotation[(dayStartOffset + 3) % dailyRotation.length];
      } else if (tLower.includes("waste")) {
        assignedWho = dailyRotation[(dayStartOffset + 2) % dailyRotation.length];
      } else {
        assignedWho = dailyRotation[(dayStartOffset + dailyCounter) % dailyRotation.length];
        dailyCounter++;
      }
      const choreKey = cr.index_ !== void 0 ? cr.index_ : 5 + choreIdx;
      const entry = {
        who: assignedWho,
        done: false,
        kidsDone: {}
      };
      scheduleMap[dKey][choreKey] = entry;
      if (cr.index_ !== void 0) {
        scheduleMap[dKey][cr.index_] = entry;
      }
      if (taskTitle) {
        scheduleMap[dKey][taskTitle] = entry;
        scheduleMap[dKey][tLower] = entry;
      }
    });
  });
  return scheduleMap;
}
function extractWeekFromSheet(sheetRows, startDateStr) {
  const parsedStart = parseDateKey(startDateStr) || {
    year: 2026,
    month: 9,
    day: 12
  };
  const weekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);
  const scheduleMap = {};
  weekDays.forEach(dayObj => {
    scheduleMap[dayObj.dateKey] = {};
  });
  if (!sheetRows || !Array.isArray(sheetRows)) return scheduleMap;
  sheetRows.forEach(r => {
    if (r.index_ < 4 || !r.row || r.row.length === 0) return;
    const taskTitle = String(r.row[0] || "").trim();
    const taskLowerCheck = taskTitle.toLowerCase();
    if (!taskTitle || taskTitle.startsWith("\u2022") || taskLowerCheck === "daily tasks" || taskLowerCheck === "weekly tasks" || taskTitle.toUpperCase().includes("SECTION") || taskTitle.toUpperCase().includes("ONCE-A-WEEK") || taskTitle.toUpperCase().includes("ROSTER") || taskTitle.toUpperCase().includes("PET CARE")) {
      return;
    }
    const tLower = taskTitle.toLowerCase();
    const cKey = getChoreCanonicalKey(taskTitle);
    const choreKey = r.index_;
    weekDays.forEach((dayObj, dayIdx) => {
      const whoCol = 1 + dayIdx * 2;
      const doneCol = 2 + dayIdx * 2;
      const rawCellWho = r.row[whoCol] !== void 0 && r.row[whoCol] !== null ? String(r.row[whoCol]).trim() : "";
      const isPlaceholderOrDesc = rawCellWho.startsWith("-") || rawCellWho.startsWith("(") || rawCellWho.startsWith("SG:") || rawCellWho.startsWith("Done:") || rawCellWho.startsWith("Parent Initials") || rawCellWho.startsWith("___") || /^Who:\s*_+$/i.test(rawCellWho);
      const cellWho = isPlaceholderOrDesc ? "" : rawCellWho.replace(/^Who:\s*/i, "").trim();
      const cellDone = r.row[doneCol] === true || String(r.row[doneCol]).toLowerCase() === "true";
      const entry = {
        who: cellWho,
        done: cellDone,
        kidsDone: {}
      };
      if (isKidsChecklistChore(taskTitle)) {
        if (r.row[2] === true || String(r.row[2]).toLowerCase() === "true") entry.kidsDone["Sydney"] = true;
        if (r.row[4] === true || String(r.row[4]).toLowerCase() === "true") entry.kidsDone["Cadence"] = true;
        if (r.row[6] === true || String(r.row[6]).toLowerCase() === "true") entry.kidsDone["Mason"] = true;
        if (r.row[12] === true || String(r.row[12]).toLowerCase() === "true") entry.kidsDone["Koda"] = true;
        if (r.row[14] === true || String(r.row[14]).toLowerCase() === "true") entry.kidsDone["Keyanna"] = true;
      }
      scheduleMap[dayObj.dateKey][choreKey] = entry;
      scheduleMap[dayObj.dateKey][taskTitle] = entry;
      scheduleMap[dayObj.dateKey][tLower] = entry;
      if (cKey) {
        scheduleMap[dayObj.dateKey][cKey] = entry;
      }
    });
  });
  return scheduleMap;
}
function App({
  data,
  updateItem,
  deleteItem,
  insertItem,
  moveItem,
  followLink
}) {
  var _a, _b, _c;
  const [deletedChoreKeys, setDeletedChoreKeys] = useState(() => new Set());
  const [choreEdits, setChoreEdits] = useState({});
  const [customAddedChores, setCustomAddedChores] = useState([]);
  const [customMasterChores, setCustomMasterChores] = useState([]);
  const [choreOrderOverrides, setChoreOrderOverrides] = useState(null);
  const [editingPrintableChore, setEditingPrintableChore] = useState(null);
  const [deletingChoreTarget, setDeletingChoreTarget] = useState(null);
  const printableEnvelope = useMemo(() => {
    if (!data || !Array.isArray(data)) return null;
    return data.find(d => {
      const name = String(d.name || "").toLowerCase();
      return (name.includes("printable") || name.includes("weekly") && name.includes("schedule")) && !name.includes("hub");
    }) || data[0];
  }, [data]);
  const hubEnvelope = useMemo(() => {
    if (!data || !Array.isArray(data)) return null;
    return data.find(d => {
      const name = String(d.name || "").toLowerCase();
      return name.includes("hub") || name.includes("household") || name.includes("directory") || name.includes("roster");
    }) || (data.length > 1 ? data[1] : data[0]);
  }, [data]);
  const printableRangeIndex = (_a = printableEnvelope == null ? void 0 : printableEnvelope.index_) != null ? _a : 0;
  const hubRangeIndex = (_b = hubEnvelope == null ? void 0 : hubEnvelope.index_) != null ? _b : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
  const hubSheet = hubEnvelope || {
    data: []
  };
  const printableSheet = printableEnvelope || {
    data: []
  };
  const choreRangeIndex = printableRangeIndex;
  const rosterRangeIndex = hubRangeIndex;
  const rosterSheet = hubSheet;
  const rawRows = (printableSheet == null ? void 0 : printableSheet.data) || [];
  const findPrintableRow = (taskTitle, fallbackIndex) => {
    if (!(printableSheet == null ? void 0 : printableSheet.data) || printableSheet.data.length === 0) return null;
    const cKey = getChoreCanonicalKey(taskTitle);
    const norm = normalizeTaskName(taskTitle);
    if (cKey) {
      const canonicalMatch = printableSheet.data.find(r => {
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;
        return getChoreCanonicalKey(r.row[0]) === cKey;
      });
      if (canonicalMatch) return canonicalMatch;
    }
    if (norm) {
      const exactMatch = printableSheet.data.find(r => {
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;
        return normalizeTaskName(r.row[0]) === norm;
      });
      if (exactMatch) return exactMatch;
      const partialMatch = printableSheet.data.find(r => {
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;
        const rNorm = normalizeTaskName(r.row[0]);
        return rNorm.startsWith(norm) || norm.startsWith(rNorm) || rNorm.includes(norm) || norm.includes(rNorm);
      });
      if (partialMatch) return partialMatch;
    }
    if (fallbackIndex !== void 0 && fallbackIndex !== null) {
      const byIdx = printableSheet.data.find(r => r.index_ === fallbackIndex && r.index_ >= 4);
      if (byIdx) return byIdx;
    }
    return null;
  };
  const getPrintableRowIndex = (taskTitle, fallbackIndex) => {
    const row = findPrintableRow(taskTitle, fallbackIndex);
    return row ? row.index_ : fallbackIndex;
  };
  const findHubChoreRow = (taskTitle, fallbackIndex) => {
    if (!(hubSheet == null ? void 0 : hubSheet.data) || hubSheet.data.length === 0) return null;
    const cKey = getChoreCanonicalKey(taskTitle);
    const norm = normalizeTaskName(taskTitle);
    if (cKey) {
      const canonicalMatch = hubSheet.data.find(r => {
        if (r.index_ < 5 || !r.row || !r.row[6]) return false;
        return getChoreCanonicalKey(r.row[6]) === cKey;
      });
      if (canonicalMatch) return canonicalMatch;
    }
    if (norm) {
      const exactMatch = hubSheet.data.find(r => {
        if (r.index_ < 5 || !r.row || !r.row[6]) return false;
        return normalizeTaskName(r.row[6]) === norm;
      });
      if (exactMatch) return exactMatch;
      const partialMatch = hubSheet.data.find(r => {
        if (r.index_ < 5 || !r.row || !r.row[6]) return false;
        const rNorm = normalizeTaskName(r.row[6]);
        return rNorm.startsWith(norm) || norm.startsWith(rNorm) || rNorm.includes(norm) || norm.includes(rNorm);
      });
      if (partialMatch) return partialMatch;
    }
    if (fallbackIndex !== void 0 && fallbackIndex !== null) {
      const byIdx = hubSheet.data.find(r => r.index_ === fallbackIndex && r.index_ >= 5);
      if (byIdx) return byIdx;
    }
    return null;
  };
  const getHubRowIndex = (taskTitle, fallbackIndex) => {
    const row = findHubChoreRow(taskTitle, fallbackIndex);
    return row ? row.index_ : fallbackIndex;
  };
  const hubScheduleConfig = useMemo(() => {
    const rRows = rosterSheet.data || [];
    let activeWeekStart = "2026-10-12";
    let custodyRotation = "Kids Week";
    let custodyMembers = "Mason, Cadence";
    let wasteRotation = "Bi-Weekly Schedule continuing on from first Friday specified";
    let wasteMembers = "Non-Casual";
    rRows.forEach(r => {
      if (!r.row) return;
      const paramCol = String(r.row[6] || "").toLowerCase().trim();
      const valCol = r.row[7];
      const scopeCol = String(r.row[8] || "").trim();
      const membersCol = String(r.row[10] || "").trim();
      if (paramCol.includes("active week")) {
        const parsed = parseDateKey(valCol);
        if (parsed) {
          activeWeekStart = formatDateKey(parsed.year, parsed.month, parsed.day);
        } else if (valCol) {
          activeWeekStart = String(valCol).trim();
        }
      } else if (paramCol.includes("custody schedule")) {
        if (valCol) custodyRotation = String(valCol).trim();
        if (membersCol) custodyMembers = membersCol;
      } else if (paramCol.includes("waste") || paramCol.includes("recycling")) {
        if (scopeCol) wasteRotation = scopeCol;
        if (membersCol) wasteMembers = membersCol;
      }
    });
    return {
      activeWeekStart,
      custodyRotation,
      custodyMembers,
      wasteRotation,
      wasteMembers
    };
  }, [rosterSheet]);
  const hubOccupancyCategories = useMemo(() => {
    const rRows = rosterSheet.data || [];
    const cats = [];
    rRows.forEach(r => {
      if (!r.row || r.index_ < 14 || r.index_ > 18) return;
      const col0 = String(r.row[0] || "").trim();
      if (!col0 || col0.toLowerCase() === "type" || col0.toLowerCase().includes("occupancy")) return;
      cats.push({
        type: col0,
        description: String(r.row[1] || "").trim(),
        rules: String(r.row[2] || "").trim(),
        active: r.row[4] !== false && String(r.row[4]).toLowerCase() !== "false"
      });
    });
    if (cats.length > 0) return cats;
    return [{
      type: "Full-Time",
      description: "Constant Residency",
      rules: "Included in all weekly/monthly schedulings",
      active: true
    }, {
      type: "Bi-Weekly",
      description: "Half-Time Residency",
      rules: 'Included in weekly/monthly schedulings when in residence, Use "Custody Schedule Rotation" data',
      active: true
    }, {
      type: "Casual",
      description: "Periodic Residency",
      rules: "Manually added to any schedules",
      active: true
    }];
  }, [rosterSheet]);
  const hubSpecialGroups = useMemo(() => {
    const rRows = rosterSheet.data || [];
    const groups = [];
    rRows.forEach(r => {
      if (!r.row || r.index_ < 20 || r.index_ > 25) return;
      const col0 = String(r.row[0] || "").trim();
      if (!col0 || col0.toLowerCase() === "name" || col0.toLowerCase().includes("special rotation")) return;
      groups.push({
        name: col0,
        members: String(r.row[1] || "").trim(),
        active: r.row[4] !== false && String(r.row[4]).toLowerCase() !== "false"
      });
    });
    if (groups.length > 0) return groups;
    return [{
      name: "All",
      members: "Thom, Meghan, Sydney, Cadence, Mason, Koda, Keyanna",
      active: true
    }, {
      name: "Kids",
      members: "Sydney, Cadence, Mason",
      active: true
    }, {
      name: "Parents",
      members: "Thom, Meghan",
      active: true
    }, {
      name: "Non-Casual",
      members: "Thom, Meghan, Sydney, Cadence, Mason",
      active: true
    }];
  }, [rosterSheet]);
  const familyMembers = useMemo(() => {
    const rRows = rosterSheet.data || [];
    const memberRows = rRows.filter(r => {
      if (r.index_ < 4 || r.index_ > 12) return false;
      if (!r.row || !r.row[0]) return false;
      const rawName = String(r.row[0]).trim();
      const lower = rawName.toLowerCase();
      if (lower === "household members" || lower === "name" || lower.includes("directory") || lower.includes("occupancy")) {
        return false;
      }
      return true;
    });
    if (memberRows.length === 0) {
      return [{
        id: "Thom",
        name: "Thom",
        role: "Overseer Supreme",
        residency: "Full-Time",
        type: "regular",
        specialGroups: "Parents, Non-Casual, All",
        active: true,
        color: "#2563EB",
        bg: "#DBEAFE",
        text: "#1D4ED8",
        index_: 5
      }, {
        id: "Meghan",
        name: "Meghan",
        role: "Overseer Supreme",
        residency: "Full-Time",
        type: "regular",
        specialGroups: "Parents, Non-Casual, All",
        active: true,
        color: "#8B5CF6",
        bg: "#EDE9FE",
        text: "#6D28D9",
        index_: 6
      }, {
        id: "Sydney",
        name: "Sydney",
        role: "Minion",
        residency: "Full-Time",
        type: "regular",
        specialGroups: "Kids, Non-Casual, All",
        active: true,
        color: "#0D9488",
        bg: "#CCFBF1",
        text: "#0F766E",
        index_: 7
      }, {
        id: "Cadence",
        name: "Cadence",
        role: "Minion",
        residency: "Bi-Weekly",
        type: "biweekly",
        specialGroups: "Kids, Non-Casual, All",
        active: true,
        color: "#EC4899",
        bg: "#FCE7F3",
        text: "#BE185D",
        index_: 8
      }, {
        id: "Mason",
        name: "Mason",
        role: "Minion",
        residency: "Bi-Weekly",
        type: "biweekly",
        specialGroups: "Kids, Non-Casual, All",
        active: true,
        color: "#EA580C",
        bg: "#FFEDD5",
        text: "#C2410C",
        index_: 9
      }, {
        id: "Koda",
        name: "Koda",
        role: "Minion",
        residency: "Casual",
        type: "casual",
        specialGroups: "All",
        active: true,
        color: "#0284C7",
        bg: "#E0F2FE",
        text: "#0369A1",
        index_: 10
      }, {
        id: "Keyanna",
        name: "Keyanna",
        role: "Minion",
        residency: "Casual",
        type: "casual",
        specialGroups: "All",
        active: true,
        color: "#D97706",
        bg: "#FEF3C7",
        text: "#B45309",
        index_: 11
      }];
    }
    return memberRows.map((r, i) => {
      const rawName = String(r.row[0] || "").trim();
      const rawRole = String(r.row[1] || "").trim() || (["thom", "meghan"].includes(rawName.toLowerCase()) ? "Overseer Supreme" : "Minion");
      const rawResidency = String(r.row[2] || "").trim();
      const rawSpecialGroups = String(r.row[3] || "").trim();
      const isActive = r.row[4] === true || String(r.row[4]).toLowerCase() === "true";
      const cleanRes = rawResidency.toLowerCase();
      let type = "regular";
      if (cleanRes.includes("bi-weekly") || cleanRes.includes("biweekly")) {
        type = "biweekly";
      } else if (cleanRes.includes("casual")) {
        type = "casual";
      }
      const palette = PRESET_MEMBER_COLORS[rawName.toLowerCase()] || MEMBER_COLOR_PALETTES[i % MEMBER_COLOR_PALETTES.length];
      return {
        id: rawName,
        name: rawName,
        role: rawRole,
        residency: rawResidency || (type === "biweekly" ? "Bi-Weekly" : type === "casual" ? "Casual" : "Full-Time"),
        type,
        specialGroups: rawSpecialGroups,
        schedule: type === "biweekly" ? "Bi-Weekly Schedule (Arrives Sun Oct 18 5 PM)" : type === "casual" ? "Periodic Residency (Manual Add)" : "Constant Residency (Full-Time)",
        active: isActive,
        color: palette.color,
        bg: palette.bg,
        text: palette.text,
        index_: r.index_
      };
    });
  }, [rosterSheet]);
  const kidsList = useMemo(() => {
    return familyMembers.filter(m => {
      const roleLower = String(m.role || "").toLowerCase();
      return !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("admin") && !roleLower.includes("mom") && !roleLower.includes("dad");
    }).map(m => m.name);
  }, [familyMembers]);
  const allKidsList = useMemo(() => {
    const fallbackKids = ["Sydney", "Cadence", "Mason", "Koda", "Keyanna"];
    const merged = Array.from(new Set([...kidsList, ...fallbackKids]));
    return merged.length > 0 ? merged : fallbackKids;
  }, [kidsList]);
  const rosterPets = useMemo(() => {
    const rRows = rosterSheet.data || [];
    const petHeaderRow = rRows.find(r => {
      var _a2;
      const cell0 = String(((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim();
      return cell0.includes("pet care profile") || cell0 === "pet name";
    });
    if (petHeaderRow) {
      const petRows = rRows.filter(r => {
        if (r.index_ <= petHeaderRow.index_) return false;
        if (!r.row || !r.row[0]) return false;
        const name = String(r.row[0]).trim();
        const lower = name.toLowerCase();
        return lower !== "pet name" && !lower.includes("profile");
      });
      if (petRows.length > 0) {
        return petRows.map(r => {
          const rawName = String(r.row[0]).trim();
          const rawType = String(r.row[1] || "").trim();
          const rawRoutine = String(r.row[2] || "").trim();
          const rawCare = String(r.row[3] || "").trim();
          const isActive = r.row[4] !== false && String(r.row[4]).toLowerCase() !== "false";
          const isDog = ["ellie", "lewis"].includes(rawName.toLowerCase()) || rawType.toLowerCase().includes("dog");
          const type = rawType.toLowerCase() === "dog" || rawType.toLowerCase() === "cat" ? rawType : isDog ? "Dog" : "Cat";
          const routine = rawRoutine || "Morning & Evening";
          const isPersonName = ["meghan", "thom", "sydney"].includes(rawCare.toLowerCase());
          const care = !rawCare || isPersonName ? isDog ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water" : rawCare;
          return {
            name: rawName,
            type,
            routine,
            care,
            active: isActive,
            icon: isDog ? "\u{1F415}" : "\u{1F408}",
            index_: r.index_
          };
        });
      }
    }
    return HOUSE_PETS.map((p, idx) => ({
      name: p.name,
      type: p.kind,
      routine: "Morning & Evening",
      care: p.kind === "Dog" ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water",
      active: true,
      icon: p.icon,
      index_: 15 + idx
    }));
  }, [rosterSheet]);
  const hubMasterChores = useMemo(() => {
    const rRows = rosterSheet.data || [];
    let chores = [];
    const seenCanonicalKeys = new Set();
    const seenNames = new Set();
    rRows.forEach(r => {
      if (!r.row || r.index_ < 5) return;
      const taskVal = r.row[6] !== void 0 && r.row[6] !== null ? String(r.row[6]).trim() : "";
      if (!taskVal) return;
      const tLower = taskVal.toLowerCase();
      const norm = normalizeTaskName(taskVal);
      const cKey = getChoreCanonicalKey(taskVal);
      if (tLower === "chore" || tLower === "parameter" || tLower.includes("schedule configuration") || tLower.includes("active week") || tLower.includes("waste / recycling") || tLower.includes("custody schedule") || tLower.includes("pet care profile") || tLower.includes("special rotation") || tLower.includes("occupancy categories") || tLower.includes("household member")) {
        return;
      }
      if (seenCanonicalKeys.has(cKey) || seenNames.has(norm)) {
        return;
      }
      if (deletedChoreKeys.has(String(r.index_)) || deletedChoreKeys.has(tLower) || deletedChoreKeys.has(norm) || deletedChoreKeys.has(cKey)) {
        return;
      }
      const col7 = String(r.row[7] || "").trim();
      const col8 = String(r.row[8] || "").trim();
      const col9 = String(r.row[9] || "").trim();
      const col10 = String(r.row[10] || "").trim();
      const col11 = String(r.row[11] || "").trim();
      const isCol7Category = CHORE_CATEGORIES.some(c => c.name.toLowerCase() === col7.toLowerCase());
      const rotationGroup = isCol7Category ? col10 || "All Non-Casual" : col7 || "All Non-Casual";
      const frequency = col8 || (cKey.includes("curbside") ? "Bi-Weekly" : cKey.includes("deep_clean") || cKey.includes("sign_off") || cKey.includes("bedroom") || cKey.includes("laundry") || cKey.includes("basement") ? "Once a Week" : "Daily");
      const targetDay = col9 === "N/A" || !col9 ? frequency === "Daily" ? "Mon \u2013 Sun" : "Saturday" : col9;
      const notes = isCol7Category ? col11 : col10;
      let category = isCol7Category ? col7 : col11 && CHORE_CATEGORIES.some(c => c.name.toLowerCase() === col11.toLowerCase()) ? col11 : "Household";
      if (!isCol7Category && category === "Household") {
        if (tLower.includes("litter") || tLower.includes("feed") || tLower.includes("herd") || tLower.includes("walk")) {
          category = "Pet Care";
        } else if (tLower.includes("supper") || tLower.includes("dishes") || tLower.includes("dishwasher") || tLower.includes("kitchen") || tLower.includes("cook")) {
          category = "Kitchen";
        } else if (tLower.includes("bedroom")) {
          category = "Bedrooms";
        } else if (tLower.includes("basement")) {
          category = "Common Areas";
        } else if (tLower.includes("sign-off") || tLower.includes("inspection")) {
          category = "Administration";
        }
      }
      seenCanonicalKeys.add(cKey);
      seenNames.add(norm);
      chores.push({
        index_: r.index_,
        task: taskVal,
        canonicalKey: cKey,
        category,
        frequency,
        targetDay: targetDay === "N/A" ? "Mon \u2013 Sun" : targetDay,
        rotationGroup,
        notes,
        source: "hub_master_registry"
      });
    });
    if (printableSheet == null ? void 0 : printableSheet.data) {
      printableSheet.data.forEach(pr => {
        if (pr.index_ < 4 || !pr.row || !pr.row[0]) return;
        const pTask = String(pr.row[0]).trim();
        const pNorm = normalizeTaskName(pTask);
        const pKey = getChoreCanonicalKey(pTask);
        if (!pNorm || pNorm === "daily tasks" || pNorm === "weekly tasks" || pNorm.includes("section") || pNorm.includes("once a week") || pNorm.includes("bedroom checklist") || pNorm.includes("pet care routine") || pNorm.startsWith("\u2022") || seenCanonicalKeys.has(pKey) || seenNames.has(pNorm) || deletedChoreKeys.has(pNorm) || deletedChoreKeys.has(pKey) || deletedChoreKeys.has(String(pr.index_))) {
          return;
        }
        seenCanonicalKeys.add(pKey);
        seenNames.add(pNorm);
        const freqInfo = getInitialChoreFrequency(pTask);
        const isWeekly = freqInfo.frequency === "weekly";
        const isBi = freqInfo.frequency === "biweekly";
        chores.push({
          index_: pr.index_,
          task: pTask,
          canonicalKey: pKey,
          category: "Household",
          frequency: isBi ? "Bi-Weekly" : isWeekly ? "Once a Week" : "Daily",
          targetDay: isBi ? "Thursday Evening" : isWeekly ? "Saturday" : "Mon \u2013 Sun",
          rotationGroup: pr.row[1] || "All Non-Casual",
          notes: "",
          source: "printable_sheet"
        });
      });
    }
    if (customMasterChores.length > 0) {
      customMasterChores.forEach(cmc => {
        const cmcNorm = normalizeTaskName(cmc.task);
        const cmcKey = getChoreCanonicalKey(cmc.task);
        if (!seenCanonicalKeys.has(cmcKey) && !seenNames.has(cmcNorm) && !deletedChoreKeys.has(String(cmc.index_)) && !deletedChoreKeys.has(cmcNorm) && !deletedChoreKeys.has(cmcKey)) {
          seenCanonicalKeys.add(cmcKey);
          seenNames.add(cmcNorm);
          chores.push(cmc);
        }
      });
    }
    if (chores.length === 0) {
      chores = DEFAULT_MASTER_CHORES.map((c, idx) => {
        var _a2, _b2;
        return {
          index_: 5 + idx,
          task: c.title,
          category: c.category || "Household",
          frequency: ((_a2 = c.freq) == null ? void 0 : _a2.frequency) === "weekly" ? "Once a Week" : ((_b2 = c.freq) == null ? void 0 : _b2.frequency) === "biweekly" ? "Bi-Weekly" : "Daily",
          targetDay: c.targetDay || "Mon \u2013 Sun",
          rotationGroup: c.rotationGroup || "Non-Casual",
          notes: c.notes || "",
          source: "default"
        };
      });
    }
    if (choreOrderOverrides && Array.isArray(choreOrderOverrides) && choreOrderOverrides.length > 0) {
      chores.sort((a, b) => {
        const nameA = (a.task || "").toLowerCase().trim();
        const nameB = (b.task || "").toLowerCase().trim();
        const idxA = choreOrderOverrides.indexOf(nameA);
        const idxB = choreOrderOverrides.indexOf(nameB);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
        return 0;
      });
    }
    return chores;
  }, [rosterSheet, customMasterChores, choreOrderOverrides, deletedChoreKeys]);
  const getMember = useMemo(() => {
    return name => {
      if (!name) return null;
      const clean = String(name).trim().toLowerCase();
      return familyMembers.find(m => m.name.toLowerCase() === clean || m.id.toLowerCase() === clean || clean === "mom" && (m.name.toLowerCase().includes("megh") || m.role.toLowerCase().includes("mom") || m.role.toLowerCase().includes("parent")) || clean === "dad" && (m.name.toLowerCase() === "thom" || m.role.toLowerCase().includes("dad") || m.role.toLowerCase().includes("parent"))) || null;
    };
  }, [familyMembers]);
  const biWeeklyNamesString = useMemo(() => {
    const bw = familyMembers.filter(m => m.type === "biweekly").map(m => m.name);
    return bw.length > 0 ? bw.join(" & ") : "Cadence & Mason";
  }, [familyMembers]);
  const sheetStartDateStr = useMemo(() => {
    if (hubScheduleConfig == null ? void 0 : hubScheduleConfig.activeWeekStart) {
      return hubScheduleConfig.activeWeekStart;
    }
    return "2026-10-12";
  }, [hubScheduleConfig]);
  const initialDateObj = useMemo(() => {
    return parseDateKey(sheetStartDateStr) || {
      year: 2024,
      month: 6,
      day: 15
    };
  }, [sheetStartDateStr]);
  const printableScheduleItems = useMemo(() => {
    const rawPrintable = (printableSheet == null ? void 0 : printableSheet.data) || [];
    let items = [];
    if (rawPrintable.length === 0) {
      const dailyChores = hubMasterChores.filter(c => c.frequency.toLowerCase().includes("daily"));
      const weeklyChores = hubMasterChores.filter(c => !c.frequency.toLowerCase().includes("daily"));
      items.push({
        isSectionHeader: true,
        headerType: "daily",
        index_: 4,
        title: "Daily Tasks"
      });
      dailyChores.forEach(c => {
        items.push({
          isSectionHeader: false,
          index_: c.index_,
          row: [c.task, "", false, "", false, "", false, "", false, "", false, "", false, "", false],
          task: c.task,
          category: c.category,
          frequency: c.frequency,
          targetDay: c.targetDay,
          rotationGroup: c.rotationGroup,
          notes: c.notes
        });
      });
      if (weeklyChores.length > 0) {
        items.push({
          isSectionHeader: true,
          headerType: "weekly",
          index_: 999,
          title: "Weekly Tasks",
          descHeader: "Description",
          rightHeader: "Initials / Assigned"
        });
        weeklyChores.forEach(c => {
          items.push({
            isSectionHeader: false,
            index_: c.index_,
            row: [c.task, c.rotationGroup === "Kids" ? "Each Child" : "", false, "", false, "", false, "", false, "", false, "", false, "", false],
            task: c.task,
            category: c.category,
            frequency: c.frequency,
            targetDay: c.targetDay,
            rotationGroup: c.rotationGroup,
            notes: c.notes
          });
        });
      }
    } else {
      rawPrintable.forEach(r => {
        if (r.index_ < 4) return;
        if (!r.row || r.row.length === 0) return;
        const cell0 = r.row[0] !== void 0 && r.row[0] !== null ? String(r.row[0]).trim() : "";
        if (!cell0) return;
        const lower0 = cell0.toLowerCase();
        if (lower0.includes("pet care routine") || lower0.includes("household roster") || lower0.includes("bi-weekly schedule") || lower0.startsWith("\u2022")) {
          return;
        }
        if (lower0 === "daily tasks") {
          items.push({
            isSectionHeader: true,
            headerType: "daily",
            index_: r.index_,
            title: "Daily Tasks"
          });
          return;
        }
        const isBanner = (lower0 === "weekly tasks" || lower0.includes("once-a-week") || lower0.includes("bedroom checklist") || lower0.includes("weekly chores")) && !lower0.includes("empty dishwasher");
        if (isBanner) {
          items.push({
            isSectionHeader: true,
            headerType: "weekly",
            index_: r.index_,
            title: "Weekly Tasks",
            descHeader: r.row[1] || "Description",
            rightHeader: r.row[9] || "Initials / Assigned"
          });
          return;
        }
        items.push({
          isSectionHeader: false,
          index_: r.index_,
          row: r.row,
          task: cell0
        });
      });
      const hasDailyBanner = items.some(it => it.isSectionHeader && it.headerType === "daily");
      if (!hasDailyBanner && items.length > 0) {
        items.unshift({
          isSectionHeader: true,
          headerType: "daily",
          index_: 4,
          title: "Daily Tasks"
        });
      }
      const hasWeeklyBanner = items.some(it => it.isSectionHeader && it.headerType === "weekly");
      if (!hasWeeklyBanner) {
        const firstWeeklyIdx = items.findIndex(it => {
          if (it.isSectionHeader) return false;
          const tLower = (it.task || "").toLowerCase();
          return tLower.includes("clean basement") || tLower.includes("clean up basement") || tLower.includes("feeding station") || tLower.includes("tidy bedroom") || tLower.includes("laundry");
        });
        if (firstWeeklyIdx !== -1) {
          items.splice(firstWeeklyIdx, 0, {
            isSectionHeader: true,
            headerType: "weekly",
            index_: 998,
            title: "Weekly Tasks",
            descHeader: "Description",
            rightHeader: "Initials / Assigned"
          });
        }
      }
    }
    if (customAddedChores.length > 0) {
      customAddedChores.forEach(cac => {
        const alreadyIn = items.some(it => it.task && it.task.toLowerCase().trim() === cac.task.toLowerCase().trim());
        if (!alreadyIn) {
          items.push({
            isSectionHeader: false,
            index_: cac.index_,
            row: cac.row,
            task: cac.task,
            category: cac.category,
            frequency: cac.frequency,
            targetDay: cac.targetDay,
            rotationGroup: cac.rotationGroup,
            notes: cac.notes
          });
        }
      });
    }
    return items.filter(item => {
      if (item.isSectionHeader) return true;
      const idKey = String(item.index_);
      const taskKey = String(item.task || "").toLowerCase().trim();
      if (deletedChoreKeys.has(idKey) || deletedChoreKeys.has(taskKey)) {
        return false;
      }
      return true;
    }).map(item => {
      if (item.isSectionHeader) return item;
      const edit = choreEdits[item.index_] || choreEdits[String(item.task || "").toLowerCase().trim()];
      if (!edit) return item;
      const updatedTask = edit.task || item.task;
      const updatedRow = edit.row ? [...edit.row] : [...(item.row || [])];
      updatedRow[0] = updatedTask;
      return {
        ...{
          ...item
        },
        task: updatedTask,
        row: updatedRow,
        category: edit.category || item.category,
        frequency: edit.frequency || item.frequency,
        targetDay: edit.targetDay || item.targetDay,
        rotationGroup: edit.rotationGroup || item.rotationGroup,
        notes: edit.notes || item.notes
      };
    });
  }, [printableSheet, hubMasterChores, customAddedChores, deletedChoreKeys, choreEdits]);
  const choreRows = useMemo(() => {
    const rawPrintableChores = printableScheduleItems.filter(item => !item.isSectionHeader).map(item => {
      const title = item.task;
      const hubMatch = hubMasterChores.find(h => {
        const hTask = h.task.toLowerCase().trim();
        const tLower = title.toLowerCase().trim();
        if (tLower === hTask) return true;
        if (h.index_ === item.index_) return true;
        return false;
      }) || hubMasterChores.find(h => {
        const hTask = h.task.toLowerCase().trim();
        const tLower = title.toLowerCase().trim();
        if (tLower.includes("deep clean") && hTask.includes("deep clean")) return true;
        if (tLower.includes("feed the herd") && hTask.includes("feed the herd")) return true;
        return tLower.includes(hTask) || hTask.includes(tLower) || tLower.includes("dishes") && hTask.includes("dishes") || tLower.includes("litter") && hTask.includes("litter") || tLower.includes("supper") && hTask.includes("supper") || tLower.includes("basement") && hTask.includes("basement") || tLower.includes("laundry") && hTask.includes("laundry") || tLower.includes("sign-off") && hTask.includes("sign-off");
      });
      let category = (hubMatch == null ? void 0 : hubMatch.category) || "Household";
      let frequency = (hubMatch == null ? void 0 : hubMatch.frequency) || "Daily";
      let targetDay = (hubMatch == null ? void 0 : hubMatch.targetDay) || "Mon \u2013 Sun";
      let rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "Kids Rotation";
      let notes = (hubMatch == null ? void 0 : hubMatch.notes) || "";
      if (title.toLowerCase().includes("deep clean") || title.toLowerCase().includes("feeding station")) {
        category = "Pet Care";
        frequency = "Once a Week";
        targetDay = "Sunday";
        rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "All";
        notes = (hubMatch == null ? void 0 : hubMatch.notes) || "Wash & sanitize pet bowls, vacuum feeding mat";
      } else if (title.toLowerCase().includes("recycling")) {
        category = "Household";
        frequency = "Bi-Weekly";
        targetDay = "Thursday Evening";
        rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "All Non-Casual";
        notes = (hubMatch == null ? void 0 : hubMatch.notes) || "Roll recycling bin to curb Thursday evening; active Oct 15 (alternates bi-weekly with waste)";
      } else if (title.toLowerCase().includes("waste")) {
        category = "Household";
        frequency = "Bi-Weekly";
        targetDay = "Thursday Evening";
        rotationGroup = (hubMatch == null ? void 0 : hubMatch.rotationGroup) || "All Non-Casual";
        notes = (hubMatch == null ? void 0 : hubMatch.notes) || "Roll waste bin to curb Thursday evening; active following Thu Oct 22 (alternates bi-weekly with recycling)";
      } else if (title.toLowerCase().includes("litter") || title.toLowerCase().includes("feed")) {
        category = "Pet Care";
      } else if (title.toLowerCase().includes("supper") || title.toLowerCase().includes("dishes")) {
        category = "Kitchen";
      } else if (isBedroomChore(title)) {
        category = "Bedrooms";
        frequency = "Once a Week";
        targetDay = "Saturday";
        const kid = getSpecificKidForChore(title);
        rotationGroup = kid || "Each Child";
      } else if (title.toLowerCase().includes("basement")) {
        category = "Common Areas";
        frequency = "Once a Week";
        targetDay = "Saturday";
        rotationGroup = "All Kids";
      } else if (title.toLowerCase().includes("laundry")) {
        category = "Household";
        frequency = "Once a Week";
        targetDay = "Saturday";
        rotationGroup = "Sydney";
      } else if (title.toLowerCase().includes("sign-off")) {
        category = "Administration";
        frequency = "Once a Week";
        targetDay = "Sunday";
        rotationGroup = "Parents";
      }
      return {
        index_: item.index_,
        row: item.row,
        task: title,
        category,
        frequency,
        targetDay,
        rotationGroup,
        notes
      };
    });
    if (rawPrintableChores.length > 0) return rawPrintableChores;
    return DEFAULT_MASTER_CHORES.map((c, i) => {
      var _a2, _b2;
      return {
        index_: 4 + i,
        row: [c.title, null, false, null, false, null, false, null, false, null, false, null, false, null, false],
        task: c.title,
        category: c.category,
        frequency: ((_a2 = c.freq) == null ? void 0 : _a2.frequency) === "weekly" ? "Once a Week" : ((_b2 = c.freq) == null ? void 0 : _b2.frequency) === "biweekly" ? "Bi-Weekly" : "Daily",
        targetDay: c.targetDay,
        rotationGroup: c.rotationGroup,
        notes: c.notes
      };
    });
  }, [printableScheduleItems, hubMasterChores]);
  const [activeTab, setActiveTab] = useState("matrix");
  const [selectedYear, setSelectedYear] = useState(() => initialDateObj.year);
  const [selectedMonth, setSelectedMonth] = useState(() => initialDateObj.month);
  const [activeSyncWeek, setActiveSyncWeek] = useState(() => sheetStartDateStr);
  const [selectedAssigneeFilter, setSelectedAssigneeFilter] = useState("ALL");
  const [activeDayModal, setActiveDayModal] = useState(null);
  const [showAutoAssignModal, setShowAutoAssignModal] = useState(false);
  const [showNewChoreModal, setShowNewChoreModal] = useState(false);
  const [showAddRemoveChoreModal, setShowAddRemoveChoreModal] = useState(false);
  const [addRemoveMode, setAddRemoveMode] = useState("add");
  const [selectedRemoveIndices, setSelectedRemoveIndices] = useState([]);
  const [removeSearchQuery, setRemoveSearchQuery] = useState("");
  const [editingChoreIndex, setEditingChoreIndex] = useState(null);
  const [editChoreTitle, setEditChoreTitle] = useState("");
  const [editChoreFreq, setEditChoreFreq] = useState("daily");
  const [editChoreDay, setEditChoreDay] = useState(5);
  const [editChoreRotationGroup, setEditChoreRotationGroup] = useState("All Non-Casual");
  const [showCombineModal, setShowCombineModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [combineTargetA, setCombineTargetA] = useState(null);
  const [combineTargetB, setCombineTargetB] = useState(null);
  const [customCombinedTitle, setCustomCombinedTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [notice, setNotice] = useState(null);
  const [monthlyIncentive, setMonthlyIncentive] = useState("$15 Allowance Bonus & Choice of Friday Family Dinner");
  const [isEditingIncentive, setIsEditingIncentive] = useState(false);
  const [incentiveDraft, setIncentiveDraft] = useState("$15 Allowance Bonus & Choice of Friday Family Dinner");
  const [masterCategoryFilter, setMasterCategoryFilter] = useState("ALL");
  const [masterFrequencyFilter, setMasterFrequencyFilter] = useState("ALL");
  const [masterSearchQuery, setMasterSearchQuery] = useState("");
  const [editingMasterIndex, setEditingMasterIndex] = useState(null);
  const [masterInlineDraft, setMasterInlineDraft] = useState(null);
  const [showInlineAddForm, setShowInlineAddForm] = useState(false);
  const [newMasterDraft, setNewMasterDraft] = useState({
    task: "",
    category: "Household",
    frequency: "Daily",
    targetDay: "Mon \u2013 Sun",
    rotationGroup: "All Non-Casual",
    notes: ""
  });
  const filteredMasterChores = useMemo(() => {
    return hubMasterChores.filter(ch => {
      if (masterCategoryFilter !== "ALL" && ch.category.toLowerCase() !== masterCategoryFilter.toLowerCase()) {
        return false;
      }
      if (masterFrequencyFilter !== "ALL") {
        const fLow = ch.frequency.toLowerCase();
        const filterLow = masterFrequencyFilter.toLowerCase();
        if (filterLow === "daily" && !fLow.includes("daily")) return false;
        if (filterLow === "once a week" && (!fLow.includes("weekly") || fLow.includes("bi"))) return false;
        if (filterLow === "bi-weekly" && !fLow.includes("bi")) return false;
      }
      if (masterSearchQuery) {
        const q = masterSearchQuery.toLowerCase();
        const match = ch.task.toLowerCase().includes(q) || ch.category.toLowerCase().includes(q) || ch.rotationGroup.toLowerCase().includes(q) || ch.notes.toLowerCase().includes(q) || ch.targetDay.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [hubMasterChores, masterCategoryFilter, masterFrequencyFilter, masterSearchQuery]);
  const [hubChoreSearch, setHubChoreSearch] = useState("");
  const [showAddPetModal, setShowAddPetModal] = useState(false);
  const [newPetDraft, setNewPetDraft] = useState({
    name: "",
    type: "Dog",
    routine: "Morning & Evening",
    care: ""
  });
  useEffect(() => {
    if (sheetStartDateStr && sheetStartDateStr !== "2024-07-15") {
      setActiveSyncWeek(sheetStartDateStr);
    }
  }, [sheetStartDateStr]);
  useEffect(() => {
    if ((printableSheet == null ? void 0 : printableSheet.data) || (hubSheet == null ? void 0 : hubSheet.data)) {
      setCustomMasterChores(prev => prev.filter(cmc => {
        var _a2, _b2;
        const norm = normalizeTaskName(cmc.task);
        const inHub = (_a2 = hubSheet.data) == null ? void 0 : _a2.some(r => r.row && normalizeTaskName(r.row[6]) === norm);
        const inP = (_b2 = printableSheet.data) == null ? void 0 : _b2.some(r => r.row && normalizeTaskName(r.row[0]) === norm);
        return !inHub && !inP;
      }));
      setCustomAddedChores(prev => prev.filter(cac => {
        var _a2;
        const norm = normalizeTaskName(cac.task);
        const inP = (_a2 = printableSheet.data) == null ? void 0 : _a2.some(r => r.row && normalizeTaskName(r.row[0]) === norm);
        return !inP;
      }));
    }
  }, [printableSheet.data, hubSheet.data]);
  const [choreFrequencies, setChoreFrequencies] = useState({});
  const [tasksCadenceFilter, setTasksCadenceFilter] = useState("ALL");
  const getChoreFreq = cr => {
    var _a2;
    const title = (cr == null ? void 0 : cr.task) || ((_a2 = cr == null ? void 0 : cr.row) == null ? void 0 : _a2[0]) || "";
    if (choreFrequencies[title]) return choreFrequencies[title];
    if (choreFrequencies[cr == null ? void 0 : cr.index_]) return choreFrequencies[cr == null ? void 0 : cr.index_];
    const titleLower = String(title || "").toLowerCase();
    if (titleLower.includes("recycling") || titleLower.includes("waste")) {
      return {
        frequency: "biweekly",
        dayOfWeek: 3
      };
    }
    if (titleLower.includes("deep clean") || titleLower.includes("feeding station")) {
      return {
        frequency: "weekly",
        dayOfWeek: 6
      };
    }
    const hubMatch = hubMasterChores.find(h => h.index_ === (cr == null ? void 0 : cr.index_) || h.task.toLowerCase() === title.toLowerCase());
    if (hubMatch) {
      const fLower = String(hubMatch.frequency || "").toLowerCase();
      const tLower = String(hubMatch.targetDay || "").toLowerCase();
      if (fLower.includes("bi-weekly") || fLower.includes("biweekly")) {
        return {
          frequency: "biweekly",
          dayOfWeek: 3
        };
      }
      if (fLower.includes("weekly") || fLower.includes("once")) {
        const dayIdx = tLower.includes("sunday") ? 6 : tLower.includes("thursday") ? 3 : tLower.includes("friday") ? 4 : 5;
        return {
          frequency: "weekly",
          dayOfWeek: dayIdx
        };
      }
      return {
        frequency: "daily",
        dayOfWeek: 0
      };
    }
    return getInitialChoreFrequency(title);
  };
  const handleSetChoreFrequency = (taskName, choreIndex, frequency, dayOfWeek = 5) => {
    var _a2;
    setChoreFrequencies(prev => ({
      ...{
        ...prev
      },
      [taskName]: {
        frequency,
        dayOfWeek
      }
    }));
    setNotice(`Set "${taskName}" to ${frequency === "weekly" ? `Once a Week (${(_a2 = DAY_STYLES[dayOfWeek]) == null ? void 0 : _a2.name})` : "Daily"}`);
    setTimeout(() => setNotice(null), 3500);
  };
  const [monthSchedule, setMonthSchedule] = useState(() => {
    var _a2, _b2;
    const rawPrintable = ((_a2 = data == null ? void 0 : data.find(d => {
      const name = String(d.name || "").toLowerCase();
      return (name.includes("printable") || name.includes("weekly") && name.includes("schedule")) && !name.includes("hub");
    })) == null ? void 0 : _a2.data) || ((_b2 = data == null ? void 0 : data[0]) == null ? void 0 : _b2.data) || [];
    return extractWeekFromSheet(rawPrintable, "2026-10-12");
  });
  const handleAutoAssignCurrentWeek = () => {
    const targetStartDate = activeSyncWeek || "2026-10-12";
    const newSchedule = generateWeekAssignments(targetStartDate, choreRows);
    setMonthSchedule(prev => ({
      ...{
        ...prev
      },
      ...newSchedule
    }));
    if (printableRangeIndex >= 0) {
      const parsedStart = parseDateKey(targetStartDate) || {
        year: 2026,
        month: 9,
        day: 12
      };
      choreRows.forEach(cr => {
        var _a2, _b2, _c2, _d, _e, _f;
        const pRow = findPrintableRow(cr.task, cr.index_);
        if (!pRow) return;
        const rowUpdates = new Array(15).fill(void 0);
        let hasChanges = false;
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
          const d = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayOffset);
          const dKey = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());
          const assignedWho = ((_b2 = (_a2 = newSchedule[dKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.who) || ((_d = (_c2 = newSchedule[dKey]) == null ? void 0 : _c2[cr.task]) == null ? void 0 : _d.who) || ((_f = (_e = newSchedule[dKey]) == null ? void 0 : _e[getChoreCanonicalKey(cr.task)]) == null ? void 0 : _f.who);
          if (assignedWho) {
            const whoCol = 1 + dayOffset * 2;
            rowUpdates[whoCol] = assignedWho;
            hasChanges = true;
          }
        }
        if (hasChanges) {
          updateItem(printableRangeIndex, pRow.index_, rowUpdates);
        }
      });
    }
    setNotice(`Distributed & assigned all scheduled chores for week of ${targetStartDate} across Thom, Meghan, Sydney, Cadence, and Mason (Sunday Supper assigned to parents)!`);
    setTimeout(() => setNotice(null), 4500);
  };
  const activeWeekDays = useMemo(() => {
    const p = parseDateKey(activeSyncWeek) || {
      year: 2026,
      month: 9,
      day: 12
    };
    return getWeekDaysForDate(p.year, p.month, p.day);
  }, [activeSyncWeek]);
  const activeWeekBwSummary = useMemo(() => {
    return getWeekBiWeeklySummary(activeWeekDays, biWeeklyNamesString);
  }, [activeWeekDays, biWeeklyNamesString]);
  const isBiWeeklyHereThisWeek = useMemo(() => {
    return isBiWeeklyInResidenceForWeek(activeWeekDays);
  }, [activeWeekDays]);
  const activeWeeklyKids = useMemo(() => {
    return familyMembers.filter(m => {
      const roleLower = String(m.role || "").toLowerCase();
      const isKid = !roleLower.includes("parent") && !roleLower.includes("overseer");
      if (!isKid) return false;
      if (m.type === "regular") return true;
      if (m.type === "biweekly") return isBiWeeklyHereThisWeek;
      return false;
    }).map(m => m.name);
  }, [familyMembers, isBiWeeklyHereThisWeek]);
  const casualKidsList = useMemo(() => {
    const list = familyMembers.filter(m => {
      const roleLower = String(m.role || "").toLowerCase();
      const isKid = !roleLower.includes("parent") && !roleLower.includes("overseer");
      return isKid && m.type === "casual";
    }).map(m => m.name);
    return list.length > 0 ? list : ["Koda", "Keyanna"];
  }, [familyMembers]);
  useEffect(() => {
    if (!(printableSheet == null ? void 0 : printableSheet.data) || printableSheet.data.length === 0) return;
    const fromSheet = extractWeekFromSheet(printableSheet.data, activeSyncWeek || sheetStartDateStr || "2026-10-12");
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      Object.keys(fromSheet).forEach(dKey => {
        next[dKey] = {
          ...{
            ...(next[dKey] || {})
          },
          ...fromSheet[dKey]
        };
      });
      return next;
    });
  }, [printableSheet, activeSyncWeek, sheetStartDateStr]);
  const calendarWeeks = useMemo(() => {
    const daysInCurrentMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();
    const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const weeks = [];
    let currentWeek = [];
    for (let i = offset - 1; i >= 0; i--) {
      const prevDate = daysInPrevMonth - i;
      const prevMonthIdx = selectedMonth === 0 ? 11 : selectedMonth - 1;
      const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
      currentWeek.push({
        year: prevYear,
        month: prevMonthIdx,
        day: prevDate,
        dateKey: formatDateKey(prevYear, prevMonthIdx, prevDate),
        isCurrentMonth: false,
        dayOfWeekIndex: currentWeek.length
      });
    }
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      currentWeek.push({
        year: selectedYear,
        month: selectedMonth,
        day,
        dateKey: formatDateKey(selectedYear, selectedMonth, day),
        isCurrentMonth: true,
        dayOfWeekIndex: currentWeek.length
      });
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      let nextDay = 1;
      const nextMonthIdx = selectedMonth === 11 ? 0 : selectedMonth + 1;
      const nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
      while (currentWeek.length < 7) {
        currentWeek.push({
          year: nextYear,
          month: nextMonthIdx,
          day: nextDay,
          dateKey: formatDateKey(nextYear, nextMonthIdx, nextDay),
          isCurrentMonth: false,
          dayOfWeekIndex: currentWeek.length
        });
        nextDay++;
      }
      weeks.push(currentWeek);
    }
    return weeks;
  }, [selectedYear, selectedMonth]);
  const isWeekSyncedToSheet = week => {
    var _a2;
    const mondayKey = (_a2 = week[0]) == null ? void 0 : _a2.dateKey;
    return mondayKey === activeSyncWeek;
  };
  const getChoreStatus = (dateKey, choreIndex, choreTitle) => {
    const dayData = monthSchedule[dateKey];
    if (!dayData) return {
      who: "",
      done: false,
      kidsDone: {}
    };
    const s = dayData[choreIndex] || (choreTitle ? dayData[choreTitle] : null) || (choreTitle ? dayData[choreTitle.toLowerCase()] : null);
    if (!s) return {
      who: "",
      done: false,
      kidsDone: {}
    };
    return {
      who: s.who !== void 0 && s.who !== null ? String(s.who) : "",
      done: !!s.done,
      kidsDone: s.kidsDone || {}
    };
  };
  const getKidsPresentOnDate = dateKey => {
    const parsed = parseDateKey(dateKey);
    if (!parsed) return kidsList;
    const bwStatus = getBiWeeklyStatus(parsed.year, parsed.month, parsed.day);
    const areKidsInResidence = bwStatus.isFullStay || bwStatus.isDepartureDay;
    return kidsList.filter(kidName => {
      const member = getMember(kidName);
      if (member && member.type === "biweekly") {
        return areKidsInResidence;
      }
      return true;
    });
  };
  const handleToggleKidBedroom = (dateKey, choreIndex, kidName) => {
    const current = getChoreStatus(dateKey, choreIndex);
    const prevKids = current.kidsDone || {};
    const newKidState = !prevKids[kidName];
    const updatedKids = {
      ...{
        ...prevKids
      },
      [kidName]: newKidState
    };
    const presentKids = getKidsPresentOnDate(dateKey);
    const allPresentDone = presentKids.length > 0 && presentKids.every(k => updatedKids[k]);
    handleUpdateChore(dateKey, choreIndex, {
      kidsDone: updatedKids,
      done: allPresentDone,
      who: allPresentDone ? "All Kids" : "Each Child"
    });
  };
  const getWeeklyKidsStatus = (choreIndex, taskTitle) => {
    const result = {};
    allKidsList.forEach(k => {
      result[k] = false;
    });
    const cr = choreRows.find(r => {
      var _a2;
      return r.index_ === choreIndex || taskTitle && String(r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim() === String(taskTitle).toLowerCase().trim();
    });
    if (cr && cr.row) {
      if (cr.row[2] === true || String(cr.row[2]).toLowerCase() === "true") result["Sydney"] = true;
      if (cr.row[4] === true || String(cr.row[4]).toLowerCase() === "true") result["Cadence"] = true;
      if (cr.row[6] === true || String(cr.row[6]).toLowerCase() === "true") result["Mason"] = true;
      if (cr.row[12] === true || String(cr.row[12]).toLowerCase() === "true") result["Koda"] = true;
      if (cr.row[14] === true || String(cr.row[14]).toLowerCase() === "true") result["Keyanna"] = true;
    }
    activeWeekDays.forEach(d => {
      const s = getChoreStatus(d.dateKey, choreIndex, taskTitle);
      if (s.kidsDone) {
        Object.keys(s.kidsDone).forEach(k => {
          if (s.kidsDone[k]) result[k] = true;
        });
      }
      if (s.who === "All Kids" && s.done) {
        allKidsList.forEach(k => {
          var _a2;
          if (((_a2 = s.kidsDone) == null ? void 0 : _a2[k]) !== false) result[k] = true;
        });
      } else if (s.who && s.done) {
        const names = s.who.split(/[,&]+/).map(n => n.trim().toLowerCase());
        allKidsList.forEach(k => {
          if (names.includes(k.toLowerCase())) result[k] = true;
        });
      }
    });
    return result;
  };
  const handleToggleWeeklyKidChore = (choreIndex, kidName, taskTitle) => {
    const currentKidsDone = getWeeklyKidsStatus(choreIndex, taskTitle);
    const newKidState = !currentKidsDone[kidName];
    const updatedKids = {
      ...{
        ...currentKidsDone
      },
      [kidName]: newKidState
    };
    const doneCount = allKidsList.filter(k => updatedKids[k]).length;
    const allDone = doneCount === allKidsList.length && allKidsList.length > 0;
    const anyDone = doneCount > 0;
    let whoLabel = "Each Child";
    if (allDone) {
      whoLabel = "All Kids";
    } else if (anyDone) {
      const doneNames = allKidsList.filter(k => updatedKids[k]);
      whoLabel = doneNames.length <= 2 ? doneNames.join(" & ") : `${doneNames.length} Kids`;
    }
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      activeWeekDays.forEach(d => {
        const curDay = next[d.dateKey] || {};
        const curChore = curDay[choreIndex] || {
          who: "",
          done: false,
          kidsDone: {}
        };
        next[d.dateKey] = {
          ...{
            ...curDay
          },
          [choreIndex]: {
            ...{
              ...curChore
            },
            who: whoLabel,
            done: anyDone,
            kidsDone: updatedKids
          }
        };
        if (taskTitle) {
          next[d.dateKey][taskTitle] = next[d.dateKey][choreIndex];
          next[d.dateKey][taskTitle.toLowerCase()] = next[d.dateKey][choreIndex];
        }
      });
      return next;
    });
    const pRowIdx = getPrintableRowIndex(taskTitle, choreIndex);
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {
      const updateRow = new Array(15).fill(void 0);
      const kLower = kidName.toLowerCase();
      if (kLower === "sydney") {
        updateRow[2] = newKidState;
      } else if (kLower === "koda") {
        updateRow[12] = newKidState;
      } else if (kLower === "keyanna") {
        updateRow[14] = newKidState;
      } else if (kLower === "cadence") {
        updateRow[4] = newKidState;
      } else if (kLower === "mason") {
        updateRow[6] = newKidState;
      }
      updateItem(printableRangeIndex, pRowIdx, updateRow);
    }
  };
  const handleSetAllKidsWeeklyChore = (choreIndex, taskTitle, allDoneState) => {
    const currentStatus = getWeeklyKidsStatus(choreIndex, taskTitle);
    const updatedKids = {
      ...currentStatus
    };
    const kidsToToggle = activeWeeklyKids.length > 0 ? activeWeeklyKids : ["Sydney"];
    kidsToToggle.forEach(k => {
      updatedKids[k] = allDoneState;
    });
    const whoLabel = allDoneState ? "All Kids" : "Each Child";
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      activeWeekDays.forEach(d => {
        const curDay = next[d.dateKey] || {};
        const curChore = curDay[choreIndex] || {
          who: "",
          done: false,
          kidsDone: {}
        };
        next[d.dateKey] = {
          ...{
            ...curDay
          },
          [choreIndex]: {
            ...{
              ...curChore
            },
            who: whoLabel,
            done: allDoneState,
            kidsDone: updatedKids
          }
        };
        if (taskTitle) {
          next[d.dateKey][taskTitle] = next[d.dateKey][choreIndex];
          next[d.dateKey][taskTitle.toLowerCase()] = next[d.dateKey][choreIndex];
        }
      });
      return next;
    });
    const pRowIdx = getPrintableRowIndex(taskTitle, choreIndex);
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {
      const updateRow = new Array(15).fill(void 0);
      updateRow[2] = allDoneState;
      if (isBiWeeklyHereThisWeek) {
        updateRow[4] = allDoneState;
        updateRow[6] = allDoneState;
      }
      updateRow[12] = allDoneState;
      updateRow[14] = allDoneState;
      updateItem(printableRangeIndex, pRowIdx, updateRow);
    }
  };
  const getSingleWeeklyStatus = (choreIndex, taskTitle) => {
    let who = "";
    let done = false;
    const cr = choreRows.find(r => {
      var _a2;
      return r.index_ === choreIndex || taskTitle && String(r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim() === String(taskTitle).toLowerCase().trim();
    });
    if (cr && cr.row) {
      const isValidWhoString = val => {
        if (!val) return false;
        const s = String(val).trim();
        if (!s || s.startsWith("-") || s.startsWith("(") || s.startsWith("SG:") || s.startsWith("Done:") || s.startsWith("Parent Initials") || s.startsWith("___") || /^Who:\s*_+$/i.test(s)) {
          return false;
        }
        return true;
      };
      const tLower = String(taskTitle || cr.task || "").toLowerCase();
      if (tLower.includes("basement") || tLower.includes("feeding station") || tLower.includes("deep clean") || tLower.includes("sign-off")) {
        if (cr.row[14] === true || String(cr.row[14]).toLowerCase() === "true") done = true;
        const col9Text = String(cr.row[9] || "").replace(/^Who:\s*/i, "").trim();
        const col1Text = String(cr.row[1] || "").trim();
        const candidateText = isValidWhoString(col9Text) ? col9Text : isValidWhoString(col1Text) ? col1Text : "";
        if (candidateText) {
          const matchWho = familyMembers.find(m => candidateText.toLowerCase().includes(m.name.toLowerCase()));
          if (matchWho) who = matchWho.name;
          else if (candidateText.toLowerCase().includes("parents")) who = "Parents";
          else who = candidateText;
        }
      }
      for (let dayIdx = 6; dayIdx >= 0; dayIdx--) {
        const w = cr.row[1 + dayIdx * 2];
        const d = cr.row[2 + dayIdx * 2];
        if (isValidWhoString(w) && !who) who = String(w).replace(/^Who:\s*/i, "").trim();
        if ((d === true || String(d).toLowerCase() === "true") && !done) done = true;
      }
    }
    if (activeWeekDays && activeWeekDays.length > 0) {
      for (let i = activeWeekDays.length - 1; i >= 0; i--) {
        const d = activeWeekDays[i];
        const s = getChoreStatus(d.dateKey, choreIndex, taskTitle);
        if (s.who && !who) who = s.who;
        if (s.done) done = true;
      }
    }
    if (!isBiWeeklyHereThisWeek && (who === "Cadence" || who === "Mason")) {
      who = "";
    }
    return {
      who,
      done
    };
  };
  const handleUpdateSingleWeeklyChore = (choreIndex, taskTitle, patch) => {
    const current = getSingleWeeklyStatus(choreIndex, taskTitle);
    const updatedWho = "who" in patch ? patch.who : current.who;
    const updatedDone = "done" in patch ? patch.done : current.done;
    const tLower = String(taskTitle || "").toLowerCase();
    const cKey = getChoreCanonicalKey(taskTitle);
    const dayOffset = tLower.includes("recycling") || tLower.includes("waste") || tLower.includes("curbside") ? 3 : tLower.includes("basement") || tLower.includes("saturday") ? 5 : 6;
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      activeWeekDays.forEach(d => {
        const curDay = next[d.dateKey] || {};
        const curChore = curDay[choreIndex] || {
          who: "",
          done: false,
          kidsDone: {}
        };
        const updatedEntry = {
          ...{
            ...curChore
          },
          who: updatedWho,
          done: updatedDone
        };
        next[d.dateKey] = {
          ...{
            ...curDay
          },
          [choreIndex]: updatedEntry
        };
        if (taskTitle) {
          next[d.dateKey][taskTitle] = updatedEntry;
          next[d.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;
        }
        if (cKey) {
          next[d.dateKey][cKey] = updatedEntry;
        }
      });
      return next;
    });
    setChoreEdits(prev => {
      const cur = prev[choreIndex] || {};
      const targetChore = choreRows.find(r => r.index_ === choreIndex);
      const existingRow = [...(cur.row || (targetChore == null ? void 0 : targetChore.row) || new Array(15).fill(""))];
      const whoCol = 1 + dayOffset * 2;
      const doneCol = 2 + dayOffset * 2;
      if ("who" in patch) existingRow[whoCol] = updatedWho;
      if ("done" in patch) existingRow[doneCol] = updatedDone;
      const tKey = String(taskTitle || (targetChore == null ? void 0 : targetChore.task) || "").toLowerCase().trim();
      const updatedObj = {
        ...{
          ...cur
        },
        row: existingRow,
        rotationGroup: updatedWho,
        who: updatedWho
      };
      return {
        ...{
          ...{
            ...{
              ...prev
            },
            [choreIndex]: updatedObj
          },
          ...(tKey ? {
            [tKey]: updatedObj
          } : {})
        },
        ...(cKey ? {
          [cKey]: updatedObj
        } : {})
      };
    });
    const pRow = findPrintableRow(taskTitle, choreIndex);
    if (printableRangeIndex >= 0 && pRow) {
      const pRowIdx = pRow.index_;
      const updateRow = new Array(15).fill(void 0);
      if (cKey === "clean_basement" || cKey === "feeding_station_deep_clean") {
        if ("who" in patch) updateRow[9] = updatedWho ? `Who: ${updatedWho}` : "Who: _____________________";
        if ("done" in patch) updateRow[14] = updatedDone;
      } else if (cKey === "weekly_sign_off") {
        if ("who" in patch) updateRow[9] = updatedWho;
        if ("done" in patch) updateRow[14] = updatedDone;
      } else {
        const whoCol = 1 + dayOffset * 2;
        const doneCol = 2 + dayOffset * 2;
        if ("who" in patch) updateRow[whoCol] = updatedWho;
        if ("done" in patch) updateRow[doneCol] = updatedDone;
      }
      updateItem(printableRangeIndex, pRowIdx, updateRow);
    }
    const hRowIdx = getHubRowIndex(taskTitle, choreIndex);
    if (hubRangeIndex >= 0 && "who" in patch && hRowIdx !== void 0 && hRowIdx !== null) {
      const updateHub = new Array(12).fill(void 0);
      updateHub[7] = updatedWho;
      updateItem(hubRangeIndex, hRowIdx, updateHub);
    }
    setNotice(`Updated "${taskTitle || "Chore"}": Assigned to ${updatedWho || "unassigned"}`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const signOffChore = useMemo(() => {
    return choreRows.find(cr => {
      var _a2;
      return isSignOffChore(cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]));
    }) || {
      index_: 12,
      task: "Weekly Sign-Off & Inspection",
      rotationGroup: "Parents",
      category: "Administration"
    };
  }, [choreRows]);
  const signOffStatus = useMemo(() => {
    return getSingleWeeklyStatus(signOffChore == null ? void 0 : signOffChore.index_, signOffChore == null ? void 0 : signOffChore.task);
  }, [signOffChore, monthSchedule, activeWeekDays]);
  const handleToggleWeeklySignOff = () => {
    if (!signOffChore) return;
    const current = getSingleWeeklyStatus(signOffChore.index_, signOffChore.task);
    const nextDone = !current.done;
    const nextWho = current.who || "Parents";
    handleUpdateSingleWeeklyChore(signOffChore.index_, signOffChore.task, {
      done: nextDone,
      who: nextWho
    });
    setNotice(nextDone ? "Weekly Sign-Off & Inspection completed and verified for the week!" : "Weekly Sign-Off reset to pending.");
    setTimeout(() => setNotice(null), 3500);
  };
  const handleToggleKidChore = (dateKey, choreIndex, kidName, taskTitle, dayIdx) => {
    const current = getChoreStatus(dateKey, choreIndex, taskTitle);
    const prevKids = current.kidsDone || {};
    const newKidState = !prevKids[kidName];
    const updatedKids = {
      ...{
        ...prevKids
      },
      [kidName]: newKidState
    };
    const doneCount = allKidsList.filter(k => updatedKids[k]).length;
    const allDone = doneCount === allKidsList.length && allKidsList.length > 0;
    const anyDone = doneCount > 0;
    let whoLabel = "Each Child";
    if (allDone) {
      whoLabel = "All Kids";
    } else if (anyDone) {
      const doneNames = allKidsList.filter(k => updatedKids[k]);
      whoLabel = doneNames.length <= 2 ? doneNames.join(" & ") : `${doneNames.length} Kids`;
    }
    setMonthSchedule(prev => {
      const curDay = prev[dateKey] || {};
      const curChore = curDay[choreIndex] || {
        who: "",
        done: false,
        kidsDone: {}
      };
      return {
        ...{
          ...prev
        },
        [dateKey]: {
          ...{
            ...curDay
          },
          [choreIndex]: {
            ...{
              ...curChore
            },
            who: whoLabel,
            done: anyDone,
            kidsDone: updatedKids
          }
        }
      };
    });
    if (printableRangeIndex >= 0 && dayIdx !== void 0) {
      const whoCol = 1 + dayIdx * 2;
      const doneCol = 2 + dayIdx * 2;
      const updateRow = new Array(15).fill(void 0);
      updateRow[whoCol] = whoLabel;
      updateRow[doneCol] = anyDone;
      updateItem(printableRangeIndex, choreIndex, updateRow);
    }
  };
  const handleUpdateChore = (dateKey, choreIndex, patch) => {
    var _a2;
    const targetChore = choreRows.find(r => r.index_ === choreIndex);
    const choreTask = (targetChore == null ? void 0 : targetChore.task) || "";
    const norm = normalizeTaskName(choreTask);
    setMonthSchedule(prev => {
      const currentDay = prev[dateKey] || {};
      const currentChore = currentDay[choreIndex] || (norm ? currentDay[norm] : null) || {
        who: "",
        done: false
      };
      const updated = {
        ...{
          ...currentChore
        },
        ...patch
      };
      const nextDay = {
        ...{
          ...currentDay
        },
        [choreIndex]: updated
      };
      if (choreTask) nextDay[choreTask] = updated;
      if (norm) nextDay[norm] = updated;
      return {
        ...{
          ...prev
        },
        [dateKey]: nextDay
      };
    });
    const pRow = findPrintableRow(choreTask, choreIndex);
    if (printableRangeIndex >= 0 && pRow) {
      const parsedStart = parseDateKey(activeSyncWeek);
      const parsedTarget = parseDateKey(dateKey);
      if (parsedStart && parsedTarget) {
        const startDateObj = new Date(parsedStart.year, parsedStart.month, parsedStart.day);
        const targetDateObj = new Date(parsedTarget.year, parsedTarget.month, parsedTarget.day);
        const diffTime = targetDateObj.getTime() - startDateObj.getTime();
        const diffDays = Math.round(diffTime / (1e3 * 3600 * 24));
        if (diffDays >= 0 && diffDays < 7) {
          const whoCol = 1 + diffDays * 2;
          const doneCol = 2 + diffDays * 2;
          const updateArray = new Array(15).fill(void 0);
          updateArray[0] = choreTask || ((_a2 = pRow.row) == null ? void 0 : _a2[0]);
          if ("who" in patch) {
            updateArray[whoCol] = patch.who;
          }
          if ("done" in patch) {
            updateArray[doneCol] = patch.done;
          }
          updateItem(printableRangeIndex, pRow.index_, updateArray);
        }
      }
    }
  };
  const handleUpdatePrintableCell = (rowIndex_, dayIdx, field, value, taskTitle) => {
    var _a2, _b2, _c2;
    const colIdx = field === "who" ? 1 + dayIdx * 2 : 2 + dayIdx * 2;
    const parsedStart = parseDateKey(activeSyncWeek) || {
      year: 2026,
      month: 9,
      day: 12
    };
    const d = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx, 12, 0, 0);
    const dateKey = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());
    const tTitle = taskTitle || ((_a2 = choreRows.find(r => r.index_ === rowIndex_)) == null ? void 0 : _a2.task) || "";
    const cKey = getChoreCanonicalKey(tTitle);
    setMonthSchedule(prev => {
      const curDay = prev[dateKey] || {};
      const curChore = curDay[rowIndex_] || (tTitle ? curDay[tTitle] : null) || (cKey ? curDay[cKey] : null) || {
        who: "",
        done: false,
        kidsDone: {}
      };
      const updatedChore = {
        ...{
          ...curChore
        },
        [field]: value
      };
      const nextDay = {
        ...{
          ...curDay
        },
        [rowIndex_]: updatedChore
      };
      if (tTitle) {
        nextDay[tTitle] = updatedChore;
        nextDay[tTitle.toLowerCase().trim()] = updatedChore;
      }
      if (cKey) {
        nextDay[cKey] = updatedChore;
      }
      return {
        ...{
          ...prev
        },
        [dateKey]: nextDay
      };
    });
    setChoreEdits(prev => {
      const cur = prev[rowIndex_] || (tTitle ? prev[tTitle.toLowerCase().trim()] : null) || (cKey ? prev[cKey] : null) || {};
      const targetChore = choreRows.find(r => {
        var _a3;
        return r.index_ === rowIndex_ || tTitle && String(r.task || ((_a3 = r.row) == null ? void 0 : _a3[0]) || "").toLowerCase().trim() === tTitle.toLowerCase().trim();
      });
      const existingRow = [...(cur.row || (targetChore == null ? void 0 : targetChore.row) || new Array(15).fill(""))];
      existingRow[colIdx] = value;
      const updatedObj = {
        ...{
          ...{
            ...cur
          },
          row: existingRow
        },
        ...(field === "who" ? {
          who: value
        } : {
          done: value
        })
      };
      const nextEdits = {
        ...{
          ...prev
        },
        [rowIndex_]: updatedObj
      };
      if (tTitle) {
        nextEdits[tTitle.toLowerCase().trim()] = updatedObj;
      }
      if (cKey) {
        nextEdits[cKey] = updatedObj;
      }
      return nextEdits;
    });
    const pRow = findPrintableRow(tTitle, rowIndex_);
    if (printableRangeIndex >= 0 && pRow) {
      const updateRow = new Array(15).fill(void 0);
      updateRow[colIdx] = value;
      updateItem(printableRangeIndex, pRow.index_, updateRow);
    }
    const hRow = findHubChoreRow(tTitle, rowIndex_);
    if (hubRangeIndex >= 0 && field === "who" && hRow) {
      const updateHub = new Array(12).fill(void 0);
      updateHub[7] = value;
      updateItem(hubRangeIndex, hRow.index_, updateHub);
    }
    setNotice(field === "who" ? `Assigned "${tTitle || "Chore"}" (${(_b2 = DAY_STYLES[dayIdx]) == null ? void 0 : _b2.name}) to ${value || "unassigned"}` : `Marked "${tTitle || "Chore"}" (${(_c2 = DAY_STYLES[dayIdx]) == null ? void 0 : _c2.name}) as ${value ? "completed \u2713" : "pending"}`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleSetSyncWeek = week => {
    var _a2;
    if (!week || week.length === 0) return;
    const monday = week[0];
    if (!monday) return;
    const newStartDateStr = monday.dateKey;
    setActiveSyncWeek(newStartDateStr);
    setSelectedYear(monday.year);
    setSelectedMonth(monday.month);
    const fullWeek = week.length === 7 ? week : getWeekDaysForDate(monday.year, monday.month, monday.day);
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const d = fullWeek[dayOffset];
        if (!d) continue;
        if (!next[d.dateKey]) next[d.dateKey] = {};
        choreRows.forEach(cr => {
          var _a3, _b2, _c2;
          if (!next[d.dateKey][cr.index_]) {
            const whoCol = 1 + dayOffset * 2;
            const doneCol = 2 + dayOffset * 2;
            const rawWho = (_a3 = cr.row) == null ? void 0 : _a3[whoCol];
            const whoVal = rawWho !== void 0 && rawWho !== null ? String(rawWho) : "";
            const doneVal = ((_b2 = cr.row) == null ? void 0 : _b2[doneCol]) === true || String((_c2 = cr.row) == null ? void 0 : _c2[doneCol]).toLowerCase() === "true";
            next[d.dateKey][cr.index_] = {
              who: whoVal,
              done: doneVal,
              kidsDone: {}
            };
          }
        });
      }
      return next;
    });
    if (printableRangeIndex >= 0) {
      choreRows.forEach(cr => {
        var _a3;
        const rowUpdates = new Array(15).fill(void 0);
        let hasChanges = false;
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
          const d = fullWeek[dayOffset];
          if (d && ((_a3 = monthSchedule[d.dateKey]) == null ? void 0 : _a3[cr.index_])) {
            const s = monthSchedule[d.dateKey][cr.index_];
            rowUpdates[1 + dayOffset * 2] = s.who || "";
            rowUpdates[2 + dayOffset * 2] = s.done ? true : false;
            hasChanges = true;
          }
        }
        if (hasChanges) {
          updateItem(printableRangeIndex, cr.index_, rowUpdates);
        }
      });
    }
    if (hubRangeIndex >= 0) {
      const configRow = (_a2 = hubSheet == null ? void 0 : hubSheet.data) == null ? void 0 : _a2.find(r => r.row && String(r.row[6] || "").toLowerCase().includes("active week"));
      if (configRow) {
        const updateRow = new Array(9).fill(void 0);
        updateRow[7] = newStartDateStr;
        updateItem(hubRangeIndex, configRow.index_, updateRow);
      }
    }
    setNotice(`Synced active week to ${newStartDateStr} (${fullWeek[0].dateKey} \u2013 ${fullWeek[6].dateKey})`);
    setTimeout(() => setNotice(null), 3500);
  };
  const handleAddNewMasterChore = choreData => {
    var _a2, _b2, _c2, _d, _e;
    const {
      task,
      category = "Household",
      frequency = "Daily",
      targetDay = "Mon \u2013 Sun",
      rotationGroup = "All Non-Casual",
      notes = ""
    } = choreData;
    if (!task || !task.trim()) return;
    const cleanTask = task.trim();
    const cleanNorm = normalizeTaskName(cleanTask);
    const isDaily = frequency.toLowerCase().includes("daily");
    const existingP = findPrintableRow(cleanTask);
    if (existingP && printableRangeIndex >= 0) {
      const updateRow = new Array(15).fill(void 0);
      updateRow[0] = cleanTask;
      if (rotationGroup) updateRow[1] = rotationGroup === "Each Child" ? "Each Child" : rotationGroup;
      updateItem(printableRangeIndex, existingP.index_, updateRow);
    } else if (printableRangeIndex >= 0) {
      const newPrintableRow = [cleanTask, rotationGroup === "Each Child" ? "Each Child" : rotationGroup || "", false, "", false, "", false, "", false, "", false, "", false, "", false];
      let insertPIdx = void 0;
      if (isDaily) {
        const weeklyRow = (_a2 = printableSheet.data) == null ? void 0 : _a2.find(r => r.index_ >= 4 && r.row && (normalizeTaskName(r.row[0]).includes("clean basement") || normalizeTaskName(r.row[0]).includes("once a week")));
        insertPIdx = weeklyRow ? weeklyRow.index_ : void 0;
      } else {
        const footerRow = (_b2 = printableSheet.data) == null ? void 0 : _b2.find(r => r.index_ >= 8 && r.row && (String(r.row[0] || "").toLowerCase().includes("pet care") || String(r.row[0] || "").startsWith("\u2022")));
        insertPIdx = footerRow ? footerRow.index_ : void 0;
      }
      insertItem(printableRangeIndex, insertPIdx, newPrintableRow);
    }
    const existingH = findHubChoreRow(cleanTask);
    const newHubRow = new Array(12).fill(void 0);
    newHubRow[6] = cleanTask;
    newHubRow[7] = rotationGroup || "All Non-Casual";
    newHubRow[8] = frequency;
    newHubRow[9] = targetDay;
    newHubRow[10] = notes;
    newHubRow[11] = category;
    if (existingH && hubRangeIndex >= 0) {
      updateItem(hubRangeIndex, existingH.index_, newHubRow);
      (_c2 = hubSheet.data) == null ? void 0 : _c2.forEach(r => {
        if (r.index_ !== existingH.index_ && r.row && normalizeTaskName(r.row[6]) === cleanNorm) {
          if (r.row[0]) {
            const clearRow = new Array(12).fill(void 0);
            clearRow[6] = "";
            clearRow[7] = "";
            clearRow[8] = "";
            clearRow[9] = "";
            clearRow[10] = "";
            clearRow[11] = "";
            updateItem(hubRangeIndex, r.index_, clearRow);
          } else {
            deleteItem(hubRangeIndex, r.index_);
          }
        }
      });
    } else if (hubRangeIndex >= 0) {
      const emptyChoreRow = (_d = hubSheet.data) == null ? void 0 : _d.find(r => r.index_ >= 5 && r.index_ < 17 && (!r.row || !r.row[6] || String(r.row[6]).trim() === ""));
      if (emptyChoreRow) {
        updateItem(hubRangeIndex, emptyChoreRow.index_, newHubRow);
      } else {
        const configRow = (_e = hubSheet.data) == null ? void 0 : _e.find(r => r.row && String(r.row[6] || "").toLowerCase().includes("schedule configuration"));
        const insertHubIdx = configRow ? configRow.index_ : void 0;
        insertItem(hubRangeIndex, insertHubIdx, newHubRow);
      }
    }
    const fLower = frequency.toLowerCase();
    const tLower = targetDay.toLowerCase();
    const freqType = fLower.includes("bi-weekly") || fLower.includes("biweekly") ? "biweekly" : fLower.includes("weekly") || fLower.includes("once") ? "weekly" : "daily";
    const dayIdx = tLower.includes("sunday") ? 6 : tLower.includes("thursday") ? 3 : 5;
    const resolvedIndex = existingP ? existingP.index_ : existingH ? existingH.index_ : 2e3 + Date.now() % 1e5;
    const newChoreObj = {
      index_: resolvedIndex,
      task: cleanTask,
      category,
      frequency,
      targetDay,
      rotationGroup: rotationGroup || "All Non-Casual",
      notes,
      source: "user_added",
      row: [cleanTask, rotationGroup || "", false, "", false, "", false, "", false, "", false, "", false, "", false]
    };
    if (!existingH && !existingP) {
      setCustomMasterChores(prev => [...prev, newChoreObj]);
      setCustomAddedChores(prev => [...prev, newChoreObj]);
    }
    setDeletedChoreKeys(prev => {
      const next = new Set(prev);
      next.delete(cleanNorm);
      next.delete(cleanTask.toLowerCase().trim());
      return next;
    });
    setChoreOrderOverrides(prev => prev ? [...prev, cleanTask.toLowerCase().trim()] : null);
    setChoreFrequencies(prev => ({
      ...{
        ...prev
      },
      [cleanTask]: {
        frequency: freqType,
        dayOfWeek: dayIdx
      }
    }));
    setShowInlineAddForm(false);
    setShowNewChoreModal(false);
    setShowAddRemoveChoreModal(false);
    setNewMasterDraft({
      task: "",
      category: "Household",
      frequency: "Daily",
      targetDay: "Mon \u2013 Sun",
      rotationGroup: "All Non-Casual",
      notes: ""
    });
    setNotice(`Added "${cleanTask}" to schedule and master registry!`);
    setTimeout(() => setNotice(null), 3500);
  };
  const handleAddNewChore = (choreName, details = {}) => {
    var _a2;
    if (!choreName || !choreName.trim()) return;
    const cleanName = choreName.trim();
    const defWho = details.defaultWho || "All Non-Casual";
    const freqVal = details.frequency || "daily";
    const dayVal = details.dayOfWeek !== void 0 ? details.dayOfWeek : 5;
    const freqType = freqVal === "weekly" ? "Once a Week" : freqVal === "biweekly" ? "Bi-Weekly" : "Daily";
    const targetDayVal = freqVal === "weekly" ? (_a2 = DAY_STYLES[dayVal]) == null ? void 0 : _a2.name : freqVal === "biweekly" ? "Thursday Evening" : "Mon \u2013 Sun";
    const choreCat = details.category || "Household";
    handleAddNewMasterChore({
      task: cleanName,
      category: choreCat,
      frequency: freqType,
      targetDay: targetDayVal,
      rotationGroup: defWho,
      notes: details.notes || ""
    });
  };
  const handleUpdateMasterChore = (choreIndex, patch) => {
    var _a2, _b2;
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === choreIndex);
    const oldTitle = patch.oldTask || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[6]) || patch.task;
    const hRowIdx = getHubRowIndex(oldTitle, choreIndex);
    if (hubRangeIndex >= 0 && hRowIdx !== void 0 && hRowIdx !== null) {
      const updateRow = new Array(12).fill(void 0);
      if ("task" in patch) updateRow[6] = patch.task;
      if ("rotationGroup" in patch) updateRow[7] = patch.rotationGroup;
      if ("frequency" in patch) updateRow[8] = patch.frequency;
      if ("targetDay" in patch) updateRow[9] = patch.targetDay;
      if ("notes" in patch) updateRow[10] = patch.notes;
      if ("category" in patch) updateRow[11] = patch.category;
      updateItem(hubRangeIndex, hRowIdx, updateRow);
    }
    const pRowIdx = getPrintableRowIndex(oldTitle, choreIndex);
    if (printableRangeIndex >= 0 && "task" in patch && pRowIdx !== void 0 && pRowIdx !== null) {
      const updateP = new Array(15).fill(void 0);
      updateP[0] = patch.task;
      updateItem(printableRangeIndex, pRowIdx, updateP);
    }
    if (patch.frequency || patch.targetDay) {
      const taskName = patch.task || oldTitle || "";
      if (taskName) {
        const fLower = String(patch.frequency || "").toLowerCase();
        const tLower = String(patch.targetDay || "").toLowerCase();
        const freqType = fLower.includes("bi-weekly") || fLower.includes("biweekly") ? "biweekly" : fLower.includes("weekly") || fLower.includes("once") ? "weekly" : "daily";
        const dayIdx = tLower.includes("sunday") ? 6 : tLower.includes("thursday") ? 3 : tLower.includes("friday") ? 4 : 5;
        setChoreFrequencies(prev => ({
          ...{
            ...prev
          },
          [taskName]: {
            frequency: freqType,
            dayOfWeek: dayIdx
          }
        }));
      }
    }
    setEditingMasterIndex(null);
    setMasterInlineDraft(null);
    setNotice(`Updated "${patch.task || "chore"}" in schedule and master registry!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleDeleteMasterChore = (choreIndex, taskTitle) => {
    var _a2;
    const norm = normalizeTaskName(taskTitle);
    if (hubRangeIndex >= 0) {
      (_a2 = hubSheet.data) == null ? void 0 : _a2.forEach(r => {
        if (r.index_ < 5 || !r.row || !r.row[6]) return;
        if (normalizeTaskName(r.row[6]) === norm || r.index_ === choreIndex) {
          if (r.row[0]) {
            const clearRow = new Array(12).fill(void 0);
            clearRow[6] = "";
            clearRow[7] = "";
            clearRow[8] = "";
            clearRow[9] = "";
            clearRow[10] = "";
            clearRow[11] = "";
            updateItem(hubRangeIndex, r.index_, clearRow);
          } else {
            deleteItem(hubRangeIndex, r.index_);
          }
        }
      });
    }
    const pRow = findPrintableRow(taskTitle, choreIndex);
    if (printableRangeIndex >= 0 && pRow) {
      deleteItem(printableRangeIndex, pRow.index_);
    }
    const cleanTitle = String(taskTitle || "").toLowerCase().trim();
    setCustomMasterChores(prev => prev.filter(c => c.index_ !== choreIndex && (!cleanTitle || c.task.toLowerCase().trim() !== cleanTitle)));
    setDeletedChoreKeys(prev => {
      const next = new Set(prev);
      if (choreIndex !== void 0 && choreIndex !== null) next.add(String(choreIndex));
      if (cleanTitle) next.add(cleanTitle);
      return next;
    });
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      Object.keys(next).forEach(dKey => {
        if (next[dKey] && next[dKey][choreIndex]) {
          const dayCopy = {
            ...next[dKey]
          };
          delete dayCopy[choreIndex];
          next[dKey] = dayCopy;
        }
      });
      return next;
    });
    if (editingMasterIndex === choreIndex) {
      setEditingMasterIndex(null);
      setMasterInlineDraft(null);
    }
    setNotice(`Removed "${taskTitle || "chore"}" from Household Hub Master Chore Registry`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleSavePrintableChoreEdit = (choreIndex, editData) => {
    var _a2, _b2;
    const cleanTitle = (editData.task || "").trim();
    if (!cleanTitle) return;
    const oldTitle = editData.oldTask || cleanTitle;
    setChoreEdits(prev => {
      const next = {
        ...prev
      };
      next[choreIndex] = {
        ...{
          ...editData
        },
        task: cleanTitle
      };
      if (oldTitle) {
        next[String(oldTitle).toLowerCase().trim()] = {
          ...{
            ...editData
          },
          task: cleanTitle
        };
      }
      next[cleanTitle.toLowerCase().trim()] = {
        ...{
          ...editData
        },
        task: cleanTitle
      };
      return next;
    });
    const freqType = editData.frequency === "Once a Week" ? "weekly" : editData.frequency === "Bi-Weekly" ? "biweekly" : "daily";
    const dayIdx = editData.dayOfWeek !== void 0 ? editData.dayOfWeek : ((_a2 = editData.targetDay) == null ? void 0 : _a2.toLowerCase().includes("sunday")) ? 6 : ((_b2 = editData.targetDay) == null ? void 0 : _b2.toLowerCase().includes("thursday")) ? 3 : 5;
    setChoreFrequencies(prev => ({
      ...{
        ...prev
      },
      [cleanTitle]: {
        frequency: freqType,
        dayOfWeek: dayIdx
      },
      [choreIndex]: {
        frequency: freqType,
        dayOfWeek: dayIdx
      }
    }));
    const pRowIdx = getPrintableRowIndex(oldTitle, choreIndex);
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {
      const updateRow = new Array(15).fill(void 0);
      updateRow[0] = cleanTitle;
      updateItem(printableRangeIndex, pRowIdx, updateRow);
    }
    const hRowIdx = getHubRowIndex(oldTitle, choreIndex);
    if (hubRangeIndex >= 0 && hRowIdx !== void 0 && hRowIdx !== null) {
      const updateRow = new Array(12).fill(void 0);
      updateRow[6] = cleanTitle;
      if (editData.rotationGroup) updateRow[7] = editData.rotationGroup;
      if (editData.frequency) updateRow[8] = editData.frequency;
      if (editData.targetDay) updateRow[9] = editData.targetDay;
      if (editData.notes !== void 0) updateRow[10] = editData.notes;
      if (editData.category) updateRow[11] = editData.category;
      updateItem(hubRangeIndex, hRowIdx, updateRow);
    }
    if (oldTitle && oldTitle !== cleanTitle) {
      setMonthSchedule(prev => {
        const next = {
          ...prev
        };
        Object.keys(next).forEach(dKey => {
          if (next[dKey] && next[dKey][oldTitle]) {
            const dayCopy = {
              ...next[dKey]
            };
            dayCopy[cleanTitle] = dayCopy[oldTitle];
            dayCopy[cleanTitle.toLowerCase()] = dayCopy[oldTitle];
            next[dKey] = dayCopy;
          }
        });
        return next;
      });
    }
    setEditingPrintableChore(null);
    setNotice(`Updated chore: "${cleanTitle}"`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleDeletePrintableChore = (choreIndex, taskTitle) => {
    var _a2, _b2;
    const title = taskTitle || "";
    setDeletedChoreKeys(prev => {
      const next = new Set(prev);
      if (choreIndex !== void 0 && choreIndex !== null) next.add(String(choreIndex));
      if (title) next.add(title.toLowerCase().trim());
      return next;
    });
    const pRowIdx = getPrintableRowIndex(title, choreIndex);
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {
      deleteItem(printableRangeIndex, pRowIdx);
    }
    const hRowIdx = getHubRowIndex(title, choreIndex);
    if (hubRangeIndex >= 0 && hRowIdx !== void 0 && hRowIdx !== null) {
      const existingRow = (_a2 = hubSheet.data) == null ? void 0 : _a2.find(r => r.index_ === hRowIdx);
      if ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) {
        const clearRow = new Array(12).fill(void 0);
        clearRow[6] = "";
        clearRow[7] = "";
        clearRow[8] = "";
        clearRow[9] = "";
        clearRow[10] = "";
        clearRow[11] = "";
        updateItem(hubRangeIndex, hRowIdx, clearRow);
      } else {
        deleteItem(hubRangeIndex, hRowIdx);
      }
    }
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      Object.keys(next).forEach(dKey => {
        if (next[dKey]) {
          const dayCopy = {
            ...next[dKey]
          };
          if (choreIndex !== void 0) delete dayCopy[choreIndex];
          if (title) {
            delete dayCopy[title];
            delete dayCopy[title.toLowerCase().trim()];
          }
          next[dKey] = dayCopy;
        }
      });
      return next;
    });
    setDeletingChoreTarget(null);
    if (editingPrintableChore && editingPrintableChore.index_ === choreIndex) {
      setEditingPrintableChore(null);
    }
    setNotice(`Removed chore: "${title || "Chore"}" from schedule`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleDeleteChore = (choreIndex, name) => {
    handleDeletePrintableChore(choreIndex, name);
  };
  const handleBatchDeleteChores = () => {
    if (selectedRemoveIndices.length === 0) return;
    const count = selectedRemoveIndices.length;
    selectedRemoveIndices.forEach(idx => {
      var _a2;
      const cr = choreRows.find(r => r.index_ === idx);
      handleDeletePrintableChore(idx, (cr == null ? void 0 : cr.task) || ((_a2 = cr == null ? void 0 : cr.row) == null ? void 0 : _a2[0]) || "");
    });
    setSelectedRemoveIndices([]);
    setShowAddRemoveChoreModal(false);
    setNotice(`Successfully removed ${count} chore(s) from master list`);
    setTimeout(() => setNotice(null), 3500);
  };
  const handleRenameChore = (choreIndex, newName) => {
    if (!newName || !newName.trim()) return;
    const clean = newName.trim();
    if (printableRangeIndex >= 0) {
      const updateRow = new Array(15).fill(void 0);
      updateRow[0] = clean;
      updateItem(printableRangeIndex, choreIndex, updateRow);
    }
    setChoreEdits(prev => ({
      ...{
        ...prev
      },
      [choreIndex]: {
        ...{
          ...(prev[choreIndex] || {})
        },
        task: clean
      }
    }));
  };
  const handleStartEditChore = chore => {
    var _a2, _b2;
    const title = chore.task || ((_a2 = chore.row) == null ? void 0 : _a2[0]) || "";
    const freq = getChoreFreq(chore);
    setEditingChoreIndex(chore.index_);
    setEditChoreTitle(title);
    setEditChoreFreq(freq.frequency || "daily");
    setEditChoreDay(freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5);
    setEditChoreRotationGroup(chore.rotationGroup || "All Non-Casual");
    setEditingPrintableChore({
      ...{
        ...chore
      },
      originalTask: title,
      task: title,
      category: chore.category || "Household",
      frequency: freq.frequency === "weekly" ? "Once a Week" : freq.frequency === "biweekly" ? "Bi-Weekly" : "Daily",
      targetDay: chore.targetDay || (freq.frequency === "weekly" ? (_b2 = DAY_STYLES[freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5]) == null ? void 0 : _b2.name : "Mon \u2013 Sun"),
      rotationGroup: chore.rotationGroup || "All Non-Casual",
      notes: chore.notes || "",
      dayOfWeek: freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5
    });
  };
  const handleSaveChoreEdit = () => {
    var _a2;
    if (editingChoreIndex === null) return;
    const cleanTitle = editChoreTitle.trim();
    if (cleanTitle) {
      handleSavePrintableChoreEdit(editingChoreIndex, {
        task: cleanTitle,
        frequency: editChoreFreq === "weekly" ? "Once a Week" : editChoreFreq === "biweekly" ? "Bi-Weekly" : "Daily",
        targetDay: ((_a2 = DAY_STYLES[editChoreDay]) == null ? void 0 : _a2.name) || "Mon \u2013 Sun",
        rotationGroup: editChoreRotationGroup,
        dayOfWeek: editChoreDay
      });
    }
    setEditingChoreIndex(null);
  };
  const handleMoveChore = (choreItemOrIndex, direction) => {
    const currentList = [...hubMasterChores];
    const listIndex = currentList.findIndex(r => {
      if (typeof choreItemOrIndex === "object" && choreItemOrIndex !== null) {
        return r === choreItemOrIndex || r.index_ !== void 0 && r.index_ === choreItemOrIndex.index_ || normalizeTaskName(r.task) === normalizeTaskName(choreItemOrIndex.task);
      }
      return r.index_ === choreItemOrIndex || String(r.index_) === String(choreItemOrIndex) || normalizeTaskName(r.task) === normalizeTaskName(String(choreItemOrIndex));
    });
    if (listIndex === -1) return;
    const targetListIndex = direction === "up" ? listIndex - 1 : listIndex + 1;
    if (targetListIndex < 0 || targetListIndex >= currentList.length) return;
    const itemCurrent = currentList[listIndex];
    const itemTarget = currentList[targetListIndex];
    const choreName = itemCurrent.task || "Chore";
    currentList[listIndex] = itemTarget;
    currentList[targetListIndex] = itemCurrent;
    const newOverrides = currentList.map(c => normalizeTaskName(c.task));
    setChoreOrderOverrides(newOverrides);
    if (printableRangeIndex >= 0) {
      const pCurrent = findPrintableRow(itemCurrent.task, itemCurrent.index_);
      const pTarget = findPrintableRow(itemTarget.task, itemTarget.index_);
      if (pCurrent && pTarget && pCurrent.index_ !== pTarget.index_) {
        const rowDataA = [...(pCurrent.row || [])];
        const rowDataB = [...(pTarget.row || [])];
        updateItem(printableRangeIndex, pCurrent.index_, rowDataB);
        updateItem(printableRangeIndex, pTarget.index_, rowDataA);
      }
    }
    if (hubRangeIndex >= 0) {
      const rCurrent = findHubChoreRow(itemCurrent.task, itemCurrent.index_);
      const rTarget = findHubChoreRow(itemTarget.task, itemTarget.index_);
      if (rCurrent && rTarget && rCurrent.index_ !== rTarget.index_) {
        const rowCurrent = rCurrent.row || [];
        const rowTarget = rTarget.row || [];
        const updateCurrent = new Array(12).fill(void 0);
        const updateTarget = new Array(12).fill(void 0);
        for (let c = 6; c <= 11; c++) {
          updateCurrent[c] = rowTarget[c] !== void 0 ? rowTarget[c] : "";
          updateTarget[c] = rowCurrent[c] !== void 0 ? rowCurrent[c] : "";
        }
        updateItem(hubRangeIndex, rCurrent.index_, updateCurrent);
        updateItem(hubRangeIndex, rTarget.index_, updateTarget);
      }
    }
    setNotice(`Reordered: Moved "${choreName}" ${direction}! Synchronized with Printable Weekly Schedule and Household Hub.`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleCombineChores = (choreAIndex, choreBIndex, overrideTitle) => {
    var _a2, _b2, _c2, _d, _e, _f;
    const choreA = choreRows.find(r => r.index_ === choreAIndex);
    const choreB = choreRows.find(r => r.index_ === choreBIndex);
    if (!choreA || !choreB || choreAIndex === choreBIndex) return;
    const mergedTitle = (overrideTitle == null ? void 0 : overrideTitle.trim()) || `${choreA.row[1]} & ${choreB.row[1]}`;
    if (choreRangeIndex >= 0) {
      const updateRow = new Array(16).fill(void 0);
      updateRow[1] = mergedTitle;
      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const whoCol = 2 + dayOffset * 2;
        const doneCol = 3 + dayOffset * 2;
        const whoA = ((_a2 = choreA.row) == null ? void 0 : _a2[whoCol]) || "";
        const whoB = ((_b2 = choreB.row) == null ? void 0 : _b2[whoCol]) || "";
        const doneA = ((_c2 = choreA.row) == null ? void 0 : _c2[doneCol]) === true || String((_d = choreA.row) == null ? void 0 : _d[doneCol]).toLowerCase() === "true";
        const doneB = ((_e = choreB.row) == null ? void 0 : _e[doneCol]) === true || String((_f = choreB.row) == null ? void 0 : _f[doneCol]).toLowerCase() === "true";
        updateRow[whoCol] = whoA || whoB || "";
        updateRow[doneCol] = doneA || doneB;
      }
      updateItem(choreRangeIndex, choreA.index_, updateRow);
      deleteItem(choreRangeIndex, choreB.index_);
    }
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      Object.keys(next).forEach(dKey => {
        const dayData = {
          ...next[dKey]
        };
        const statusA = dayData[choreA.index_] || {
          who: "",
          done: false
        };
        const statusB = dayData[choreB.index_] || {
          who: "",
          done: false
        };
        dayData[choreA.index_] = {
          who: statusA.who || statusB.who || "",
          done: statusA.done || statusB.done
        };
        delete dayData[choreB.index_];
        next[dKey] = dayData;
      });
      return next;
    });
    setShowCombineModal(false);
    setNotice(`Combined into: "${mergedTitle}"`);
    setTimeout(() => setNotice(null), 4e3);
  };
  const handleAutoAssignMonth = (regularSelected, biWeeklySelected) => {
    const regular = regularSelected || [];
    const biWeekly = biWeeklySelected || [];
    if (regular.length === 0 && biWeekly.length === 0) return;
    const updated = {
      ...monthSchedule
    };
    let dayStartOffset = 0;
    calendarWeeks.forEach(week => {
      week.forEach(dayObj => {
        if (!dayObj.isCurrentMonth) return;
        const dKey = dayObj.dateKey;
        if (!updated[dKey]) updated[dKey] = {};
        const biWeeklyStatus = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);
        const areKidsInResidence = biWeeklyStatus.isFullStay || biWeeklyStatus.isDepartureDay;
        const dayMembers = [...regular];
        if (areKidsInResidence) {
          dayMembers.push(...biWeekly);
        }
        if (dayMembers.length === 0) return;
        const scheduledChoresForDay = choreRows.filter(cr => {
          var _a2;
          const taskT = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";
          const tLow = taskT.toLowerCase();
          const freq = getChoreFreq(cr);
          if (tLow.includes("deep clean") || tLow.includes("feeding station")) {
            return dayObj.dayOfWeekIndex === 6;
          }
          if (tLow.includes("recycling")) {
            return dayObj.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);
          }
          if (tLow.includes("waste")) {
            return dayObj.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);
          }
          if (freq.frequency === "biweekly") {
            return dayObj.dayOfWeekIndex === freq.dayOfWeek && isCurbsideActiveOnDate(taskT, dayObj.year, dayObj.month, dayObj.day);
          }
          if (freq.frequency === "weekly") {
            return dayObj.dayOfWeekIndex === freq.dayOfWeek;
          }
          return true;
        });
        const nonCasualWorkers = dayMembers.filter(name => {
          const mem = getMember(name);
          return mem && mem.type !== "casual";
        });
        const activeWorkers = nonCasualWorkers.length > 0 ? nonCasualWorkers : dayMembers;
        const kidsWorkers = activeWorkers.filter(name => {
          const mem = getMember(name);
          const roleLower = String((mem == null ? void 0 : mem.role) || "").toLowerCase();
          return !roleLower.includes("parent") && !roleLower.includes("overseer");
        });
        let choreAssignCounter = 0;
        scheduledChoresForDay.forEach(cr => {
          var _a2;
          const current = updated[dKey][cr.index_] || {
            who: "",
            done: false,
            kidsDone: {}
          };
          const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";
          const groupLower = String(cr.rotationGroup || "").toLowerCase();
          const tLower = taskTitle.toLowerCase();
          if (isBedroomChore(taskTitle)) {
            updated[dKey][cr.index_] = {
              who: areKidsInResidence ? "Each Child" : "Sydney",
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }
          if (dayObj.dayOfWeekIndex === 6 && tLower.includes("supper")) {
            const overseers = familyMembers.filter(m => m.role === "Overseer Supreme" || String(m.role || "").toLowerCase().includes("parent")).map(m => m.name);
            const parentList = overseers.length > 0 ? overseers : ["Thom", "Meghan"];
            const sundayCook = getSundaySupperAssignee(dayObj.year, dayObj.month, dayObj.day, parentList);
            updated[dKey][cr.index_] = {
              who: sundayCook,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }
          if (groupLower === "parents" || groupLower.includes("parent") && !groupLower.includes("kid") && !groupLower.includes("non-casual") && !groupLower.includes("all")) {
            const overseers = familyMembers.filter(m => m.role === "Overseer Supreme" || String(m.role || "").toLowerCase().includes("parent")).map(m => m.name);
            const parentAssignee = overseers.length > 0 ? overseers[(dayStartOffset + choreAssignCounter) % overseers.length] : "Thom";
            choreAssignCounter++;
            updated[dKey][cr.index_] = {
              who: parentAssignee,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }
          if (groupLower === "kids" && kidsWorkers.length > 0) {
            const kidAssignee = kidsWorkers[(dayStartOffset + choreAssignCounter) % kidsWorkers.length];
            choreAssignCounter++;
            updated[dKey][cr.index_] = {
              who: kidAssignee,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }
          const assignedPerson = activeWorkers[(dayStartOffset + choreAssignCounter) % activeWorkers.length];
          choreAssignCounter++;
          updated[dKey][cr.index_] = {
            who: assignedPerson,
            done: current.done,
            kidsDone: current.kidsDone || {}
          };
        });
        dayStartOffset = (dayStartOffset + 1) % dayMembers.length;
      });
    });
    setMonthSchedule(updated);
    if (printableRangeIndex >= 0) {
      calendarWeeks.forEach(week => {
        if (isWeekSyncedToSheet(week)) {
          choreRows.forEach(cr => {
            var _a2;
            const rowUpdates = new Array(15).fill(void 0);
            let hasChanges = false;
            for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
              const d = week[dayOffset];
              if (d && ((_a2 = updated[d.dateKey]) == null ? void 0 : _a2[cr.index_])) {
                const whoCol = 1 + dayOffset * 2;
                rowUpdates[whoCol] = updated[d.dateKey][cr.index_].who || "";
                hasChanges = true;
              }
            }
            if (hasChanges) {
              updateItem(printableRangeIndex, cr.index_, rowUpdates);
            }
          });
        }
      });
    }
    setShowAutoAssignModal(false);
    setNotice(`Auto-assigned & populated Printable Weekly Schedule for ${MONTH_NAMES[selectedMonth]} ${selectedYear}!`);
    setTimeout(() => setNotice(null), 4500);
  };
  const handleUpdatePetChoresToRoster = () => {
    if (choreRangeIndex >= 0) {
      const feedRow = choreRows.find(cr => String(cr.row[1]).toLowerCase().includes("feed"));
      if (feedRow) {
        const updateRow = new Array(16).fill(void 0);
        updateRow[1] = "Feed Ellie & Lewis (dogs), Casey, Gigi, Sloan & Scoob (cats) - Breakfast & Supper";
        updateItem(choreRangeIndex, feedRow.index_, updateRow);
      }
      const litterRow = choreRows.find(cr => String(cr.row[1]).toLowerCase().includes("litter"));
      if (litterRow) {
        const updateRow = new Array(16).fill(void 0);
        updateRow[1] = "Empty Litter Boxes for Cats (Casey, Gigi, Sloan & Scoob) - Morning & Evening";
        updateItem(choreRangeIndex, litterRow.index_, updateRow);
      }
      const walkRow = choreRows.find(cr => String(cr.row[1]).toLowerCase().includes("walk"));
      if (!walkRow) {
        const newRow = [null, "Walk Dogs: Ellie & Lewis (Morning & Evening walk)", "", false, "", false, "", false, "", false, "", false, "", false, "", false];
        insertItem(choreRangeIndex, void 0, newRow);
      }
    }
    setNotice("Updated pet-related chores to reflect Ellie, Lewis, Casey, Gigi, Sloan, and Scoob!");
    setTimeout(() => setNotice(null), 4e3);
  };
  const handleUpdateRosterMember = (rowIndex_, patch) => {
    var _a2, _b2;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);
    const updateRow = new Array(12).fill(void 0);
    if ("name" in patch) updateRow[0] = patch.name;
    if ("role" in patch) updateRow[1] = patch.role;
    if ("residency" in patch) updateRow[2] = patch.residency;
    if ("schedule" in patch) updateRow[3] = patch.schedule;
    if ("active" in patch) updateRow[4] = patch.active;
    updateItem(targetRange, rowIndex_, updateRow);
    setNotice(`Updated "${patch.name || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) || "member"}" in Household Hub!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleAddRosterMember = (name, role, residency, schedule) => {
    var _a2;
    if (!name || !name.trim()) return;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const cleanName = name.trim();
    const cleanRole = role ? role.trim() : "Family Member";
    const cleanRes = residency || "Full-Time";
    const cleanSchedule = schedule ? schedule.trim() : "Daily chore rotation & bedroom checklist";
    const petHeader = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => {
      var _a3;
      const c0 = String(((_a3 = r.row) == null ? void 0 : _a3[0]) || "").toLowerCase().trim();
      return c0.includes("pet care profile") || c0.includes("pet name");
    });
    const insertIdx = petHeader ? petHeader.index_ : void 0;
    const newRow = [cleanName, cleanRole, cleanRes, cleanSchedule, true, null, void 0, void 0, void 0, void 0, void 0, void 0];
    insertItem(targetRange, insertIdx, newRow);
    setShowAddMemberModal(false);
    setNotice(`Added "${cleanName}" to Household Hub!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleDeleteRosterMember = (rowIndex_, name) => {
    var _a2, _b2;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);
    if ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[6]) {
      const clearRow = new Array(12).fill(void 0);
      clearRow[0] = "";
      clearRow[1] = "";
      clearRow[2] = "";
      clearRow[3] = "";
      clearRow[4] = false;
      updateItem(targetRange, rowIndex_, clearRow);
    } else {
      deleteItem(targetRange, rowIndex_);
    }
    setNotice(`Removed "${name}" from Household Hub`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleUpdateRosterPet = (rowIndex_, patch) => {
    var _a2, _b2;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);
    const updateRow = new Array(12).fill(void 0);
    if ("name" in patch) updateRow[0] = patch.name;
    if ("type" in patch) updateRow[1] = patch.type;
    if ("routine" in patch) updateRow[2] = patch.routine;
    if ("care" in patch) updateRow[3] = patch.care;
    if ("active" in patch) updateRow[4] = patch.active;
    updateItem(targetRange, rowIndex_, updateRow);
    setNotice(`Updated pet "${patch.name || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) || "profile"}" in Household Hub!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleAddRosterPet = (name, type, routine, care) => {
    if (!name || !name.trim()) return;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const cleanName = name.trim();
    const cleanType = type || "Dog";
    const cleanRoutine = routine || "Morning & Evening";
    const cleanCare = care || (cleanType === "Dog" ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water");
    const newRow = [cleanName, cleanType, cleanRoutine, cleanCare, true, null, void 0, void 0, void 0, void 0, void 0, void 0];
    insertItem(targetRange, void 0, newRow);
    setShowAddPetModal(false);
    setNewPetDraft({
      name: "",
      type: "Dog",
      routine: "Morning & Evening",
      care: ""
    });
    setNotice(`Added pet "${cleanName}" to Household Hub!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleDeleteRosterPet = (rowIndex_, petName) => {
    var _a2, _b2;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const existingRow = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => r.index_ === rowIndex_);
    if ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[6]) {
      const clearRow = new Array(12).fill(void 0);
      clearRow[0] = "";
      clearRow[1] = "";
      clearRow[2] = "";
      clearRow[3] = "";
      clearRow[4] = false;
      updateItem(targetRange, rowIndex_, clearRow);
    } else {
      deleteItem(targetRange, rowIndex_);
    }
    setNotice(`Removed pet "${petName}" from Household Hub`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const monthStats = useMemo(() => {
    let totalScheduled = 0;
    let totalCompleted = 0;
    const assigneeCounts = {};
    familyMembers.forEach(m => {
      assigneeCounts[m.name] = {
        total: 0,
        done: 0
      };
    });
    calendarWeeks.forEach(week => {
      week.forEach(day => {
        if (!day.isCurrentMonth) return;
        choreRows.forEach(cr => {
          var _a2, _b2;
          const taskT = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";
          const tLow = taskT.toLowerCase();
          const freq = getChoreFreq(cr);
          let isScheduledDay = false;
          if (tLow.includes("deep clean") || tLow.includes("feeding station")) {
            isScheduledDay = day.dayOfWeekIndex === 6;
          } else if (tLow.includes("recycling")) {
            isScheduledDay = day.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("recycling", day.year, day.month, day.day);
          } else if (tLow.includes("waste")) {
            isScheduledDay = day.dayOfWeekIndex === 3 && isCurbsideActiveOnDate("waste", day.year, day.month, day.day);
          } else if (freq.frequency === "daily") {
            isScheduledDay = true;
          } else if (freq.frequency === "weekly") {
            isScheduledDay = day.dayOfWeekIndex === freq.dayOfWeek;
          } else if (freq.frequency === "biweekly") {
            isScheduledDay = day.dayOfWeekIndex === freq.dayOfWeek && isCurbsideActiveOnDate(taskT, day.year, day.month, day.day);
          }
          const status = getChoreStatus(day.dateKey, cr.index_, cr.task || ((_b2 = cr.row) == null ? void 0 : _b2[0]));
          const hasActivity = (status == null ? void 0 : status.done) || (status == null ? void 0 : status.who);
          if (!isScheduledDay && !hasActivity) return;
          totalScheduled++;
          const isDone = status == null ? void 0 : status.done;
          const who = status == null ? void 0 : status.who;
          if (isDone) totalCompleted++;
          if (who) {
            const member = getMember(who);
            if (member && assigneeCounts[member.name]) {
              assigneeCounts[member.name].total++;
              if (isDone) assigneeCounts[member.name].done++;
            }
          }
        });
      });
    });
    const completionRate = totalScheduled > 0 ? Math.round(totalCompleted / totalScheduled * 100) : 0;
    return {
      totalScheduled,
      totalCompleted,
      completionRate,
      assigneeCounts
    };
  }, [calendarWeeks, choreRows, monthSchedule, familyMembers, getMember]);
  const rankedMembers = useMemo(() => {
    return [...familyMembers].map(m => {
      const stat = monthStats.assigneeCounts[m.name] || {
        total: 0,
        done: 0
      };
      const pct = stat.total > 0 ? Math.round(stat.done / stat.total * 100) : 0;
      return {
        ...{
          ...m
        },
        done: stat.done,
        total: stat.total,
        pct
      };
    }).sort((a, b) => {
      if (b.done !== a.done) return b.done - a.done;
      return b.pct - a.pct;
    });
  }, [familyMembers, monthStats]);
  const topPerformer = useMemo(() => {
    if (rankedMembers.length === 0) return null;
    if (rankedMembers[0].done === 0) return null;
    return rankedMembers[0];
  }, [rankedMembers]);
  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(y => y - 1);
    } else {
      setSelectedMonth(m => m - 1);
    }
  };
  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(y => y + 1);
    } else {
      setSelectedMonth(m => m + 1);
    }
  };
  const handleCurrentMonth = () => {
    setSelectedYear(2026);
    setSelectedMonth(9);
  };
  const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {notice && (
        <div className="no-print bg-emerald-600 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all">
          <div className="flex items-center gap-2">
            <CircleCheck className="w-4 h-4 text-emerald-200" />
            <span>{notice}</span>
          </div>
          <button onClick={() => setNotice(null)} className="text-emerald-100 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <header className="no-print bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Chore Schedule</h1>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  Monthly Template & Sync
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {"Interactive Chore Calendar w/ Printable Sheet \u2022 Week of "}
                {activeSyncWeek}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
              <button
                onClick={handlePrevMonth}
                className="p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="px-3 text-sm font-semibold text-slate-800 min-w-[130px] text-center select-none">
                {MONTH_NAMES[selectedMonth]} {selectedYear}
              </div>
              <button
                onClick={handleNextMonth}
                className="p-1.5 hover:bg-white rounded-md text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleCurrentMonth}
                className="ml-1 text-xs px-2 py-1 rounded bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-medium transition"
              >
                Today
              </button>
            </div>
            <button
              onClick={() => setShowAutoAssignModal(true)}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Auto-Assign</span>
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("month")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "month" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Monthly Calendar</span>
            </button>
            <button
              onClick={() => setActiveTab("matrix")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "matrix" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Printable Weekly Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab("tasks")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "tasks" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <ListTodo className="w-3.5 h-3.5" />
              <span>Master Chores ({choreRows.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "stats" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Leaderboard & Stats</span>
            </button>
            <button
              onClick={() => setActiveTab("roster")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === "roster"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/60"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Household Hub ({familyMembers.length})</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6"><div className="no-print bg-white rounded-xl border border-slate-200 p-3 mb-4 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs"><div className="flex flex-wrap items-center gap-3"><div className="flex items-center gap-1.5 font-bold text-slate-800"><Users className="w-4 h-4 text-indigo-600" /><span>Household Roster:</span></div><div className="flex flex-wrap items-center gap-1.5"><span className="text-[10px] font-bold text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Supreme Overlords:</span>{familyMembers.filter(m => m.role === "Supreme Overlord").map(m => <span key={m.id} className="px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-300" style={{
              backgroundColor: m.bg,
              color: m.text
            }} title="Supreme Overlord (= Parent \u2022 Included in Daily Chores)">{m.name}{" "}<span className="text-[9px] font-normal opacity-85"></span></span>)}<span className="text-slate-300 mx-1">{"\u2022"}</span><span className="text-[10px] font-bold text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">Minions:</span>{familyMembers.filter(m => m.role === "Minion").map(m => <span key={m.id} className="px-2 py-0.5 rounded-full font-medium text-[11px] border" style={{
              backgroundColor: m.bg,
              color: m.text,
              borderColor: m.type === "biweekly" ? "#F8B4BD" : m.type === "casual" ? "#A6D2ED" : "#E2E8F0"
            }} title={`${m.name} (${m.residency} Minion = Kid)`}>{m.name}{m.type === "biweekly" ? <span className="opacity-75 text-[9px] ml-0.5 font-bold"></span> : null}{m.type === "casual" ? <span className="opacity-75 text-[9px] ml-0.5 font-bold"></span> : null}</span>)}</div></div><div className="flex items-center gap-2"><div className="flex items-center gap-1.5 bg-amber-50/90 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-lg"><span className="font-bold">Feed the Herd:</span><span>{"\u{1F415} Ellie, Lewis (Dogs)"}</span><span className="text-amber-300">{"\u2022"}</span><span>{"\u{1F408} Casey, Gigi, Sloane, Scoob (Cats)"}</span></div></div></div><div className="no-print bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4"><div className="flex items-center gap-6"><div><p className="text-xs text-slate-500 font-medium">Month Overview</p><div className="flex items-baseline gap-2 mt-0.5"><span className="text-xl font-bold text-slate-900">{monthStats.totalCompleted}{" / "}{monthStats.totalScheduled}</span><span className="text-xs text-slate-500">completed</span></div></div><div className="hidden sm:block w-36"><div className="flex justify-between text-xs text-slate-600 mb-1 font-medium"><span>Progress</span><span>{monthStats.completionRate}%</span></div><div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden"><div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{
                width: `${monthStats.completionRate}%`
              }} /></div></div></div><div className="flex items-center gap-3 text-xs"><div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /><span>{"Active Week: "}<strong>{activeSyncWeek}</strong>{" \u2022 "}{(activeWeekBwSummary == null ? void 0 : activeWeekBwSummary.text) || "Cadence & Mason arrive Sun Oct 18 @ 5 PM"}</span></div><button onClick={() => {
            const currentWeek = getWeekDaysForDate(2026, 9, 12);
            handleSetSyncWeek(currentWeek);
            handleAutoAssignCurrentWeek();
            setActiveTab("matrix");
          }} className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold rounded-lg transition" title="Sync and distribute chores for current week (Oct 12 \u2013 Oct 18, 2026)">Sync & Distribute Week</button></div></div>{activeTab === "month" && <div className="space-y-4"><div className="grid grid-cols-7 gap-2 text-center">{DAY_STYLES.map((day, idx) => <div key={day.name} className="py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center" style={{
            backgroundColor: day.color
          }}><span>{day.name}</span><span className="text-[10px] font-normal opacity-90 hidden sm:inline">{"Day "}{idx + 1}</span></div>)}</div><div className="space-y-3">{calendarWeeks.map((week, weekIdx) => {
            const synced = isWeekSyncedToSheet(week);
            return <div key={weekIdx} className={`bg-white rounded-xl border transition-all ${synced ? "border-rose-400 ring-2 ring-rose-200 shadow-md" : "border-slate-200 shadow-sm hover:border-slate-300"}`}><div className="bg-slate-50/80 px-3 py-1.5 border-b border-slate-100 rounded-t-xl flex items-center justify-between text-xs"><div className="flex items-center gap-2"><span className="font-semibold text-slate-700">{"Week "}{weekIdx + 1}</span><span className="text-slate-400">{"\u2022"}</span><span className="text-slate-500">{week[0].month + 1}/{week[0].day}{" \u2013 "}{week[6].month + 1}/{week[6].day}</span>{(() => {
                    const summary = getWeekBiWeeklySummary(week, biWeeklyNamesString);
                    if (!summary) return null;
                    return <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${summary.badgeBg}`}>{summary.text}</span>;
                  })()}{synced ? <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300"><span className="w-1.5 h-1.5 rounded-full bg-rose-600" />Live Synced with Sheet</span> : <button onClick={() => handleSetSyncWeek(week)} className="text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1">Set as Sheet Week</button>}</div><div className="text-[11px] text-slate-500">{week.reduce((acc, d) => {
                    const count = choreRows.filter(cr => {
                      var _a2, _b2;
                      return (_b2 = (_a2 = monthSchedule[d.dateKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;
                    }).length;
                    return acc + count;
                  }, 0)}{" "}chores completed</div></div><div className="grid grid-cols-7 divide-x divide-slate-100">{week.map((dayObj, dayIdx) => {
                  const {
                    dateKey,
                    day,
                    isCurrentMonth
                  } = dayObj;
                  const dayStyle = DAY_STYLES[dayIdx];
                  const dayChores = choreRows.filter(cr => {
                    var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
                    const freq = getChoreFreq(cr);
                    const tLow = (cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "").toLowerCase();
                    if (tLow.includes("deep clean") || tLow.includes("feeding station")) {
                      const isScheduledDay = dayIdx === 6;
                      const hasActivity = ((_c2 = (_b2 = monthSchedule[dateKey]) == null ? void 0 : _b2[cr.index_]) == null ? void 0 : _c2.done) || ((_e = (_d = monthSchedule[dateKey]) == null ? void 0 : _d[cr.index_]) == null ? void 0 : _e.who);
                      if (!isScheduledDay && !hasActivity) return false;
                    } else if (tLow.includes("recycling")) {
                      const isScheduledDay = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);
                      const hasActivity = ((_g = (_f = monthSchedule[dateKey]) == null ? void 0 : _f[cr.index_]) == null ? void 0 : _g.done) || ((_i = (_h = monthSchedule[dateKey]) == null ? void 0 : _h[cr.index_]) == null ? void 0 : _i.who);
                      if (!isScheduledDay && !hasActivity) return false;
                    } else if (tLow.includes("waste")) {
                      const isScheduledDay = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);
                      const hasActivity = ((_k = (_j = monthSchedule[dateKey]) == null ? void 0 : _j[cr.index_]) == null ? void 0 : _k.done) || ((_m = (_l = monthSchedule[dateKey]) == null ? void 0 : _l[cr.index_]) == null ? void 0 : _m.who);
                      if (!isScheduledDay && !hasActivity) return false;
                    } else if (freq.frequency === "weekly") {
                      const isScheduledDay = dayIdx === freq.dayOfWeek;
                      const hasActivity = ((_o = (_n = monthSchedule[dateKey]) == null ? void 0 : _n[cr.index_]) == null ? void 0 : _o.done) || ((_q = (_p = monthSchedule[dateKey]) == null ? void 0 : _p[cr.index_]) == null ? void 0 : _q.who);
                      if (!isScheduledDay && !hasActivity) return false;
                    } else if (freq.frequency === "biweekly") {
                      const isScheduledDay = dayIdx === freq.dayOfWeek && isCurbsideActiveOnDate(cr.task || ((_r = cr.row) == null ? void 0 : _r[0]), dayObj.year, dayObj.month, dayObj.day);
                      const hasActivity = ((_t = (_s = monthSchedule[dateKey]) == null ? void 0 : _s[cr.index_]) == null ? void 0 : _t.done) || ((_v = (_u = monthSchedule[dateKey]) == null ? void 0 : _u[cr.index_]) == null ? void 0 : _v.who);
                      if (!isScheduledDay && !hasActivity) return false;
                    }
                    if (selectedAssigneeFilter === "ALL") return true;
                    const st = (_w = monthSchedule[dateKey]) == null ? void 0 : _w[cr.index_];
                    const whoStr = String((st == null ? void 0 : st.who) || "").toLowerCase();
                    const filterMem = familyMembers.find(m => m.id === selectedAssigneeFilter || m.name === selectedAssigneeFilter);
                    const filterName = ((filterMem == null ? void 0 : filterMem.name) || selectedAssigneeFilter).toLowerCase();
                    if (isBedroomChore(cr.row[1])) {
                      return kidsList.some(k => k.toLowerCase() === filterName);
                    }
                    if (!(st == null ? void 0 : st.who)) return false;
                    if (whoStr === filterName) return true;
                    if ((whoStr === "all kids" || whoStr === "each child") && kidsList.some(k => k.toLowerCase() === filterName)) {
                      return true;
                    }
                    if ((whoStr === "all non-casual" || whoStr === "all non casual") && filterMem && filterMem.type !== "casual") {
                      return true;
                    }
                    if ((whoStr === "parents" || whoStr === "parents only") && filterMem && String(filterMem.role || "").toLowerCase().includes("parent")) {
                      return true;
                    }
                    const mem = getMember(st.who);
                    return st.who === selectedAssigneeFilter || (mem == null ? void 0 : mem.id) === selectedAssigneeFilter || (mem == null ? void 0 : mem.name) === selectedAssigneeFilter;
                  });
                  const doneCount = dayChores.filter(cr => {
                    var _a2, _b2;
                    return (_b2 = (_a2 = monthSchedule[dateKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;
                  }).length;
                  const isAllDone = dayChores.length > 0 && doneCount === dayChores.length;
                  return <div key={dateKey} className={`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${isCurrentMonth ? "bg-white" : "bg-slate-50/80 border-dashed border-slate-200"}`}><div><div className="flex items-center justify-between mb-1.5"><span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${isCurrentMonth ? "bg-slate-100 text-slate-800" : "bg-slate-200/70 text-slate-700"}`}>{day}</span><div className="flex items-center gap-1">{dayChores.length > 0 && <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${isAllDone ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"}`}>{doneCount}/{dayChores.length}</span>}<button onClick={() => setActiveDayModal(dateKey)} className="p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition" title="Open day details"><Pen className="w-2.5 h-2.5" /></button></div></div>{(() => {
                        const status = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);
                        if (status.isArrivalDay) {
                          return <div className="text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs" title="Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay"><span>{"\u{1F3E0} Cadence & Mason arrive 5 PM"}</span></div>;
                        } else if (status.isDepartureDay) {
                          return <div className="text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs" title="Cadence & Mason depart today at 5:00 PM"><span>{"\u{1F44B} Cadence & Mason leave 5 PM"}</span></div>;
                        }
                        return null;
                      })()}<div className="space-y-1">{dayChores.slice(0, 3).map(cr => {
                          var _a2, _b2;
                          const status = getChoreStatus(dateKey, cr.index_, cr.task || cr.row[0]);
                          const assignee = getMember(status.who);
                          const freq = getChoreFreq(cr);
                          return <div key={cr.index_} className={`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${status.done ? "bg-emerald-50/70 border-emerald-200 text-slate-500" : freq.frequency === "weekly" ? "bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs" : "bg-white border-slate-200 hover:border-slate-300 text-slate-800 shadow-2xs"}`}><div className="flex items-center justify-between gap-1 w-full"><div className="flex items-center gap-1 min-w-0 flex-1"><button onClick={() => handleUpdateChore(dateKey, cr.index_, {
                                  done: !status.done
                                })} className="shrink-0 text-slate-400 hover:text-emerald-600 focus:outline-none">{status.done ? <SquareCheckBig className="w-3.5 h-3.5 text-emerald-600" /> : <Square className="w-3.5 h-3.5 hover:text-slate-600" />}</button><span className={`truncate text-[10px] font-medium leading-tight ${status.done ? "line-through" : ""}`}>{cr.task || cr.row[0]}</span></div><div className="flex items-center gap-1 shrink-0">{freq.frequency === "weekly" && <span className="text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase" title="Once-a-week task">1x/wk</span>}{getSpecificKidForChore(cr.task || cr.row[0]) ? <span className="shrink-0 text-[8px] px-1 py-0.2 rounded font-bold" style={{
                                  backgroundColor: ((_a2 = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _a2.bg) || "#FCE7F3",
                                  color: ((_b2 = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _b2.text) || "#BE185D"
                                }}>{getSpecificKidForChore(cr.task || cr.row[0])}</span> : isBedroomChore(cr.task || cr.row[0]) ? <span className="shrink-0 text-[8px] px-1 py-0.2 rounded font-bold bg-pink-100 text-pink-700" title="Each child cleans own bedroom">Own Rooms</span> : status.who ? <span className="shrink-0 text-[9px] px-1 py-0.2 rounded font-semibold" style={{
                                  backgroundColor: (assignee == null ? void 0 : assignee.bg) || "#F1F5F9",
                                  color: (assignee == null ? void 0 : assignee.text) || "#475569"
                                }} title={String(status.who)}>{String(status.who).slice(0, 2)}</span> : <button onClick={() => setActiveDayModal(dateKey)} className="shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 px-0.5" title="Assign person">+</button>}</div></div>{isBedroomChore(cr.task || cr.row[0]) && !getSpecificKidForChore(cr.task || cr.row[0]) && <div className="pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1">{getKidsPresentOnDate(dateKey).map(kidName => {
                                var _a3;
                                const isKidDone = !!((_a3 = status.kidsDone) == null ? void 0 : _a3[kidName]);
                                const kidMember = getMember(kidName);
                                return <button key={kidName} type="button" onClick={e => {
                                  e.stopPropagation();
                                  handleToggleKidBedroom(dateKey, cr.index_, kidName);
                                }} className={`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${isKidDone ? "bg-emerald-100 text-emerald-800 border-emerald-300 line-through" : "bg-white/90 text-slate-700 border-slate-300 hover:border-pink-300"}`} title={`Click to toggle ${kidName}'s room`}><span className="w-1.5 h-1.5 rounded-full inline-block" style={{
                                    backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#888"
                                  }} /><span>{kidName}</span>{isKidDone ? "\u2713" : ""}</button>;
                              })}</div>}</div>;
                        })}{dayChores.length > 3 && <button onClick={() => setActiveDayModal(dateKey)} className="w-full text-center text-[10px] font-semibold text-indigo-600 hover:text-indigo-800 hover:underline pt-0.5">+{dayChores.length - 3}{" more"}</button>}{dayChores.length === 0 && <div className="text-[10px] text-slate-400 italic py-2 text-center">No chores</div>}</div></div><button onClick={() => setActiveDayModal(dateKey)} className="mt-2 w-full py-1 text-[10px] text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded text-center font-semibold transition">Manage Day</button></div>;
                  return (
                    <div
                      key={dateKey}
                      className={`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${
                        isCurrentMonth ? "bg-white" : "bg-slate-50/80 border-dashed border-slate-200"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                              isCurrentMonth ? "bg-slate-100 text-slate-800" : "bg-slate-200/70 text-slate-700"
                            }`}
                          >
                            {day}
                          </span>
                          {dayChores.length > 0 && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                              {dayChores.length} chores
                            </span>
                          )}
                        </div>
                        {(() => {
                          const status = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);
                          if (status.isArrivalDay) {
                            return (
                              <div
                                className="text-[9px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs"
                                title="Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay"
                              >
                                <span>{"\u{1F3E0} Cadence & Mason arrive 5 PM"}</span>
                              </div>
                            );
                          } else if (status.isDepartureDay) {
                            return (
                              <div
                                className="text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs"
                                title="Cadence & Mason depart today at 5:00 PM"
                              >
                                <span>{"\u{1F44B} Cadence & Mason leave 5 PM"}</span>
                              </div>
                            );
                          }
                          return null;
                        })()}
                        <div className="space-y-1">
                          {dayChores.map(cr => {
                            var _a2, _b2;
                            const status = getChoreStatus(dateKey, cr.index_, cr.task || cr.row[0]);
                            const assignee = getMember(status.who);
                            const freq = getChoreFreq(cr);
                            const rawTaskTitle = cr.task || cr.row[0] || "";
                            const shortTitle = String(rawTaskTitle).split(/\r?\n/)[0].trim();
                            return (
                              <div
                                key={cr.index_}
                                className={`text-[11px] p-1 rounded-md border flex flex-col gap-1 ${
                                  freq.frequency === "weekly"
                                    ? "bg-purple-50/60 border-purple-200 text-purple-950 shadow-2xs"
                                    : "bg-white border-slate-200 text-slate-800 shadow-2xs"
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1 w-full">
                                  <span className="truncate text-[10px] font-medium leading-tight flex-1 min-w-0" title={rawTaskTitle}>
                                    {shortTitle}
                                  </span>
                                  <div className="flex items-center gap-1 shrink-0">
                                    {freq.frequency === "weekly" && (
                                      <span
                                        className="text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 text-purple-700 uppercase"
                                        title="Once-a-week task"
                                      >
                                        1x/wk
                                      </span>
                                    )}
                                    {getSpecificKidForChore(rawTaskTitle) ? (
                                      <span
                                        className="shrink-0 text-[8.5px] px-1.5 py-0.2 rounded font-bold"
                                        style={{
                                          backgroundColor:
                                            ((_a2 = getMember(getSpecificKidForChore(rawTaskTitle))) == null ? void 0 : _a2.bg) || "#FCE7F3",
                                          color:
                                            ((_b2 = getMember(getSpecificKidForChore(rawTaskTitle))) == null ? void 0 : _b2.text) || "#BE185D"
                                        }}
                                      >
                                        {getSpecificKidForChore(rawTaskTitle)}
                                      </span>
                                    ) : isBedroomChore(rawTaskTitle) ? (
                                      <span
                                        className="shrink-0 text-[8.5px] px-1.5 py-0.2 rounded font-bold bg-pink-100 text-pink-700"
                                        title="Each child cleans own bedroom"
                                      >
                                        Own Rooms
                                      </span>
                                    ) : status.who ? (
                                      <span
                                        className="shrink-0 text-[9px] px-1.5 py-0.2 rounded font-semibold"
                                        style={{
                                          backgroundColor: (assignee == null ? void 0 : assignee.bg) || "#F1F5F9",
                                          color: (assignee == null ? void 0 : assignee.text) || "#475569"
                                        }}
                                        title={String(status.who)}
                                      >
                                        {String(status.who)}
                                      </span>
                                    ) : (
                                      <span className="shrink-0 text-[8.5px] text-slate-400 italic px-1">Unassigned</span>
                                    )}
                                  </div>
                                </div>
                                {isBedroomChore(rawTaskTitle) && !getSpecificKidForChore(rawTaskTitle) && (
                                  <div className="pt-0.5 border-t border-purple-200/60 flex flex-wrap gap-1">
                                    {getKidsPresentOnDate(dateKey).map(kidName => {
                                      const kidMember = getMember(kidName);
                                      return (
                                        <span
                                          key={kidName}
                                          className="text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border bg-white/90 text-slate-700 border-slate-200"
                                        >
                                          <span
                                            className="w-1.5 h-1.5 rounded-full inline-block"
                                            style={{ backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#888" }}
                                          />
                                          <span>{kidName}</span>
                                        </span>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                          {dayChores.length === 0 && (
                            <div className="text-[10px] text-slate-400 italic py-2 text-center">No chores</div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}</div></div>;
          })}</div></div>}{activeTab === "matrix" && <div className="space-y-4"><div id="printable-schedule-card" className="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden"><div className="no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3"><div><div className="flex items-center gap-2"><h2 className="text-base font-bold text-slate-900">Printable Weekly Schedule</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />{"Active Week: "}{activeSyncWeek}{" \u2022 "}{(activeWeekBwSummary == null ? void 0 : activeWeekBwSummary.text) || "Cadence & Mason arrive Sun Oct 18 @ 5 PM"}</span></div><p className="text-xs text-slate-500 mt-0.5">{"Single-page Letter Landscape layout matching Weekly Chores Original - Printed.pdf"}</p></div><div className="flex flex-wrap items-center gap-2"><div className="relative"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search schedule chores..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500" /></div><button onClick={() => {
                  const parsedStart = parseDateKey(sheetStartDateStr) || { year: 2026, month: 9, day: 19 };
                  const weekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);
                  setMonthSchedule(prev => {
                    const next = { ...prev };
                    weekDays.forEach(d => {
                      next[d.dateKey] = {};
                    });
                    return next;
                  });
                  setChoreEdits({});
                  if (printableRangeIndex >= 0 && printableSheet && Array.isArray(printableSheet.data)) {
                    printableSheet.data.forEach(r => {
                      if (r.index_ >= 5 && r.index_ <= 9) {
                        const blankRow = new Array(15).fill(null);
                        blankRow[0] = r.row[0];
                        for (let dIdx = 0; dIdx < 7; dIdx++) {
                          blankRow[1 + dIdx * 2] = "";
                          blankRow[2 + dIdx * 2] = false;
                        }
                        updateItem(printableRangeIndex, r.index_, blankRow);
                      }
                    });
                  }
                  setNotice("Cleared daily WHO/DONE assignments for a blank printable template!");
                  setTimeout(() => setNotice(null), 3000);
                }} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition shadow-2xs" title="Clear WHO/DONE cells to print a blank fill-in sheet"><span>Clear Names (Blank Sheet)</span></button><button onClick={handleAutoAssignCurrentWeek} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-lg hover:bg-amber-100 transition shadow-2xs" title="Automatically distribute chores across active members for current week"><Sparkles className="w-3.5 h-3.5 text-amber-600" /><span>Distribute Current Week</span></button><button onClick={() => window.print()} className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-2xs cursor-pointer" title="Print 1-page Letter Landscape schedule"><span>🖨️ Print Schedule</span></button></div></div><div className="overflow-x-auto"><table id="printable-schedule-table" className="w-full table-fixed border-collapse text-left text-xs" style={{ borderColor: "#C55A11" }}><colgroup><col style={{ width: "21%" }} />{DAY_STYLES.map(d => <React.Fragment key={`col-${d.name}`}><col style={{ width: "7.5%" }} /><col style={{ width: "3.78%" }} /></React.Fragment>)}</colgroup><thead><tr style={{ backgroundColor: "#002060", borderBottom: "3px solid #FFFFFF" }}><th colSpan={15} className="py-2 px-3 text-left text-xl font-bold text-white tracking-tight">Chore Schedule</th></tr><tr><th className="p-0 align-top bg-white" style={{ borderRight: "2px solid #FFFFFF" }}><div className="text-[10px] text-slate-500 font-semibold py-1.5 text-center uppercase tracking-wider bg-white">FOR THE WEEK OF:</div><div className="text-lg font-bold py-1.5 text-center text-white" style={{ backgroundColor: "#002060" }}>{(() => {
                      const p = parseDateKey(sheetStartDateStr);
                      return p ? `${p.month + 1}/${p.day}/${p.year}` : sheetStartDateStr || "10/19/2026";
                    })()}</div></th>{DAY_STYLES.map((d, dayIdx) => {
                    const parsedStart = parseDateKey(sheetStartDateStr) || {
                      year: 2026,
                      month: 9,
                      day: 19
                    };
                    const colDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx);
                    const dayNumber = colDate.getDate();
                    return <th key={d.name} colSpan={2} className="py-1.5 px-1 text-center text-white font-bold align-middle" style={{
                      backgroundColor: d.color,
                      borderRight: dayIdx < 6 ? "2px solid #FFFFFF" : "none"
                    }}><div className="text-xs font-bold uppercase tracking-wider">{d.short.toUpperCase()}</div><div className="text-sm font-bold leading-tight mt-1">{dayNumber}</div></th>;
                  })}</tr><tr className="bg-white text-[8.5px] font-bold text-slate-900" style={{ borderTop: "2px solid #FFFFFF", borderBottom: "2px solid #C55A11" }}><th className="py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px]">TASK</th>{DAY_STYLES.map(d => <React.Fragment key={`sub-${d.name}`}><th className="py-0.5 px-1 text-left uppercase font-bold">WHO</th><th className="py-0.5 px-1 text-right uppercase font-bold">DONE</th></React.Fragment>)}</tr></thead><tbody>{printableScheduleItems.filter(item => {
                  if (searchQuery && !item.isSectionHeader) {
                    if (!(item.task || "").toLowerCase().includes(searchQuery.toLowerCase())) return false;
                  }
                  if (!item.isSectionHeader && isSignOffChore(item.task)) {
                    return false;
                  }
                  return true;
                }).map((item, idx) => {
                  var _a2, _b2;
                  if (item.isSectionHeader) {
                    if (item.headerType === "daily") {
                      return <tr key={`header-daily-${item.index_}`} style={{ backgroundColor: "#002060", borderBottom: "1.5px solid #C55A11" }}><td colSpan={15} className="py-1.5 px-3 font-bold text-sm text-white">Daily Tasks</td></tr>;
                    }
                    return <tr key={`header-weekly-${item.index_}`} style={{ backgroundColor: "#002060", borderTop: "1.5px solid #002060", borderBottom: "1.5px solid #C55A11" }} className="text-white font-bold"><td className="py-1.5 px-3 text-sm font-bold">Weekly Tasks</td><td colSpan={8} className="py-1.5 px-2.5 text-xs font-bold">Description</td><td colSpan={6} className="py-1.5 px-2.5 text-xs font-bold">Initials / Assigned</td></tr>;
                  }
                  const cr = item;
                  const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "Chore";
                  const titleLines = String(taskTitle).split(/\r?\n/).map(s => s.trim()).filter(Boolean);
                  const mainTitle = titleLines[0] || taskTitle;
                  const subTitle = titleLines.slice(1).join(" ");
                  const choreFreq = getChoreFreq(cr);
                  const isSpecialKidChore = getSpecificKidForChore(taskTitle);
                  const isKidsChecklistTask = isKidsChecklistChore(taskTitle) && !isSpecialKidChore;
                  const isStreamlined = isStreamlinedWeeklyTask(taskTitle, choreFreq);
                  const rawDescription = ((_b2 = cr.row) == null ? void 0 : _b2[1]) && (isKidsChecklistTask || isStreamlined) && !familyMembers.some(m => m.name.toLowerCase() === String(cr.row[1]).trim().toLowerCase()) ? String(cr.row[1]).trim() : isLaundryChore(taskTitle) ? "(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away" : isBedroomChore(taskTitle) ? "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum" : isCleanBasementChore(taskTitle) ? "- Pick Up, Organize, Dust & Vacuum" : isHerdFeedingStationChore(taskTitle) ? "- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste" : cr.notes || "";
                  return <tr key={`row-${cr.index_}-${taskTitle}`} className="bg-white hover:bg-slate-50/60 transition-colors" style={{ borderBottom: "1px solid #C55A11" }}><td className="py-1.5 px-2 text-slate-900 bg-white align-middle" style={{ borderLeft: "1px solid #C55A11", borderRight: "1.5px solid #475569" }}><div className="leading-tight text-slate-900 font-semibold text-[11px]">{mainTitle}</div>{subTitle && <div className="text-[9.5px] text-slate-700 font-normal mt-0.5 leading-tight">{subTitle}</div>}</td>{isKidsChecklistTask ? (() => {
                      const weeklyKidsDone = getWeeklyKidsStatus(cr.index_, taskTitle);
                      const minionInitials = [
                        { code: "SG", name: "Sydney" },
                        { code: "CV", name: "Cadence" },
                        { code: "MV", name: "Mason" },
                        { code: "KV", name: "Koda" },
                        { code: "KG", name: "Keyanna" }
                      ];
                      return <React.Fragment><td colSpan={8} className="py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white" style={{ borderRight: "1.5px solid #475569" }}>{rawDescription}</td><td colSpan={6} className="py-1.5 px-2.5 align-middle bg-white" style={{ borderRight: "1px solid #C55A11" }}><div className="flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900">{minionInitials.map(m => {
                            const isDone = !!weeklyKidsDone[m.name];
                            return <button key={m.code} type="button" onClick={() => handleToggleWeeklyKidChore(cr.index_, m.name, taskTitle)} className="inline-flex items-baseline gap-0.5 cursor-pointer hover:text-indigo-700" title={`${m.name} (${m.code}) — Click to toggle`}><span>{m.code}:</span><span className={`inline-block min-w-[26px] text-center border-b border-slate-700 ${isDone ? "text-emerald-700 font-bold" : "text-transparent select-none"}`}>{isDone ? "\u2713" : "____"}</span></button>;
                          })}</div></td></React.Fragment>;
                    })() : isStreamlined ? (() => {
                      const singleStatus = getSingleWeeklyStatus(cr.index_, taskTitle);
                      const cleanWho = singleStatus.who && !singleStatus.who.startsWith("Who:") && !singleStatus.who.startsWith("Assigned:") ? singleStatus.who : "";
                      return <React.Fragment><td colSpan={8} className="py-1.5 px-2.5 text-[11px] text-slate-900 font-medium align-middle bg-white" style={{ borderRight: "1.5px solid #475569" }}>{rawDescription}</td><td colSpan={4} className="py-1.5 px-2.5 align-middle bg-white" style={{ borderRight: "1.5px solid #475569" }}><div className="flex items-baseline gap-1.5 text-[11px]"><span className="font-semibold text-slate-900 shrink-0">Who:</span><select value={cleanWho} onChange={e => handleUpdateSingleWeeklyChore(cr.index_, taskTitle, {
                              who: e.target.value
                            })} className="flex-1 min-w-0 text-[11px] py-0 px-1 border-b border-slate-700 bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer"><option value=""></option><optgroup label="Full-Time Occupants">{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants">{familyMembers.filter(m => m.type === "biweekly").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Casual Assignees">{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Special Groups"><option value="All Non-Casual">All Non-Casual</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option></optgroup></select></div></td><td colSpan={2} className="py-1.5 px-2 align-middle bg-white text-left" style={{ borderRight: "1px solid #C55A11" }}><button type="button" onClick={() => handleUpdateSingleWeeklyChore(cr.index_, taskTitle, {
                            done: !singleStatus.done
                          })} className="inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 cursor-pointer w-full" title="Click to toggle Done"><span>Done:</span><span className={`inline-block flex-1 min-w-[32px] text-center border-b border-slate-700 ${singleStatus.done ? "text-emerald-700 font-bold" : "text-transparent select-none"}`}>{singleStatus.done ? "\u2713" : "______"}</span></button></td></React.Fragment>;
                    })() : (/* BRANCH C: Standard Daily Chores (Mon-Sun Columns) */
                    DAY_STYLES.map((d, dayIdx) => {
                      var _a3, _b3, _c2, _d;
                      const whoCol = 1 + dayIdx * 2;
                      const doneCol = 2 + dayIdx * 2;
                      const parsedStart = parseDateKey(sheetStartDateStr) || {
                        year: 2026,
                        month: 9,
                        day: 19
                      };
                      const colDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx);
                      const colDateKey = formatDateKey(colDate.getFullYear(), colDate.getMonth(), colDate.getDate());
                      const cellStatus = getChoreStatus(colDateKey, cr.index_, taskTitle);
                      const editRow = ((_a3 = choreEdits[cr.index_]) == null ? void 0 : _a3.row) || (taskTitle ? (_b3 = choreEdits[taskTitle.toLowerCase().trim()]) == null ? void 0 : _b3.row : null);
                      const curRowWho = (editRow == null ? void 0 : editRow[whoCol]) !== void 0 ? editRow[whoCol] : (_c2 = cr.row) == null ? void 0 : _c2[whoCol];
                      const curRowDone = (editRow == null ? void 0 : editRow[doneCol]) !== void 0 ? editRow[doneCol] : (_d = cr.row) == null ? void 0 : _d[doneCol];
                      const whoVal = curRowWho !== void 0 && curRowWho !== null ? String(curRowWho).trim() : (cellStatus == null ? void 0 : cellStatus.who) ? String(cellStatus.who).trim() : "";
                      const isDone = curRowDone !== void 0 && curRowDone !== null ? curRowDone === true || String(curRowDone).toLowerCase() === "true" : !!(cellStatus == null ? void 0 : cellStatus.done);
                      return <React.Fragment key={d.name}><td className="p-1 text-center align-middle bg-white" style={{ borderRight: "1px solid #94A3B8" }}><select value={whoVal} onChange={e => {
                              handleUpdatePrintableCell(cr.index_, dayIdx, "who", e.target.value, taskTitle);
                            }} className="w-full text-[11px] py-1 px-0.5 bg-transparent font-semibold text-slate-900 text-center focus:outline-none cursor-pointer"><option value=""></option><optgroup label="Full-Time Occupants">{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants">{familyMembers.filter(m => m.type === "biweekly").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Casual Assignees">{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name}>{m.name}</option>)}</optgroup><optgroup label="Special Groups"><option value="Non-Casual">Non-Casual</option><option value="All Non-Casual">All Non-Casual</option><option value="Each Child">Each Child</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option></optgroup>{whoVal && !familyMembers.some(m => m.name === whoVal) && !["Non-Casual", "All Non-Casual", "Each Child", "All Kids", "Parents"].includes(whoVal) && <option value={whoVal}>{whoVal}</option>}</select></td><td className="p-1 text-center align-middle bg-white" style={{ borderRight: dayIdx < 6 ? "1.5px solid #475569" : "1px solid #C55A11" }}><button type="button" onClick={() => {
                            handleUpdatePrintableCell(cr.index_, dayIdx, "done", !isDone, taskTitle);
                          }} className="w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 focus:outline-none cursor-pointer" title={isDone ? "Mark as not done" : "Mark as done"}>{isDone ? <span className="text-emerald-700 font-black text-xs">{"\u2713"}</span> : <span className="text-slate-300 print:hidden text-[10px]">☐</span>}</button></td></React.Fragment>;
                    }))}</tr>;
                })}{/* Decorative 7-Day Color Band matching Weekly Chores Original - Printed.pdf */}
                <tr className="h-14"><td style={{ backgroundColor: "#002060" }} />{DAY_STYLES.map(d => <td key={`band-${d.name}`} colSpan={2} style={{ backgroundColor: d.color }} />)}</tr>
                {/* Weekly Sign-Off Row matching Weekly Chores Original - Printed.pdf */}
                <tr className="bg-white text-slate-900" style={{ borderTop: "1px solid #475569", borderBottom: "2.5px solid #C55A11" }}><td className="py-2 px-2.5 font-semibold text-xs text-slate-900 bg-white" style={{ borderLeft: "1px solid #C55A11", borderRight: "1.5px solid #475569" }}>Weekly Sign-Off</td><td colSpan={12} className="py-2 px-3 text-right font-semibold text-xs text-slate-900 bg-white" style={{ borderRight: "1.5px solid #475569" }}>Parent Initials:</td><td colSpan={2} className="py-2 px-2 text-center bg-white" style={{ borderRight: "1px solid #C55A11" }}><button type="button" onClick={handleToggleWeeklySignOff} className="inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900" title="Click to toggle Parent Sign-Off"><span className={`inline-block min-w-[56px] border-b border-slate-800 ${signOffStatus.done ? "text-emerald-700 font-bold" : "text-transparent select-none"}`}>{signOffStatus.done ? "\u2713 TV / MV" : "_________"}</span></button></td></tr></tbody></table></div></div><div className="no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs"><div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2"><div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-indigo-900">HOUSEHOLD ROSTER</span><span className="text-[10px] text-slate-400 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed"><div><strong className="text-slate-900">{"\u2022 Full-Time:"}</strong>{" "}{familyMembers.filter(m => m.type === "regular").map(m => m.name).join(", ") || "Sydney, Thom, Meghan"}</div><div><strong className="text-pink-900">{"\u2022 Bi-Weekly:"}</strong>{" "}{familyMembers.filter(m => m.type === "biweekly").map(m => m.name).join(" & ") || "Cadence & Mason"}</div><div><strong className="text-sky-900">{"\u2022 Casual:"}</strong>{" "}{familyMembers.filter(m => m.type === "casual").map(m => m.name).join(", ") || "Koda, Keyanna"}</div></div></div><div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2"><div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-pink-900">BI-WEEKLY SCHEDULE</span><span className="text-[10px] text-slate-400 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed"><div>{"\u2022 Cadence & Mason: Alternating bi-weekly schedule"}</div><div>{"\u2022 Status this week: Not here \u2022 Arrive Sunday, Oct. 18 @ 5:00 PM"}</div><div>{"\u2022 Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}</div><div>{"\u2022 Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}</div><div>{"\u2022 On-weeks (Starts Oct 19): Included in daily chore rotations"}</div></div></div><div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-2"><div className="font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-amber-900">{'PET CARE ROUTINE ("FEED THE HERD")'}</span><span className="text-[10px] text-slate-400 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed"><div>{"\u2022 Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}</div><div>{"\u2022 Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}</div><div>{"\u2022 Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}</div><div>{"\u2022 Routine: Daily feeding, fresh water & station cleanup"}</div></div></div></div></div>}{activeTab === "tasks" && <div className="max-w-5xl mx-auto space-y-5"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs"><ListTodo className="w-4 h-4" /></div><h2 className="text-lg font-bold text-slate-900">Master Chores Template & Registry</h2><span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Live Backed by Household Hub</span></div><p className="text-xs text-slate-500 mt-1">Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet.</p></div><div className="flex flex-wrap items-center gap-2"><button onClick={() => {
                setAddRemoveMode("add");
                setEditingChoreIndex(null);
                setShowAddRemoveChoreModal(true);
              }} className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer" title="Add, edit, or remove master chores"><Plus className="w-4 h-4" /><span>Add / Edit Chore</span></button><button onClick={() => setShowInlineAddForm(prev => !prev)} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition cursor-pointer" title="Toggle quick inline chore entry form"><span>{showInlineAddForm ? "Hide Quick Add" : "\u26A1 Quick Inline Add"}</span></button><button onClick={() => {
                var _a2, _b2, _c2, _d;
                setCombineTargetA(((_a2 = hubMasterChores[2]) == null ? void 0 : _a2.index_) || ((_b2 = choreRows[0]) == null ? void 0 : _b2.index_));
                setCombineTargetB(((_c2 = hubMasterChores[3]) == null ? void 0 : _c2.index_) || ((_d = choreRows[1]) == null ? void 0 : _d.index_));
                setCustomCombinedTitle("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)");
                setShowCombineModal(true);
              }} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 transition"><GitMerge className="w-3.5 h-3.5 text-purple-600" /><span>Combine Chores</span></button><button onClick={handleUpdatePetChoresToRoster} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg hover:bg-amber-100 transition" title="Update pet chores to reflect Ellie, Lewis, Casey, Gigi, Sloan, and Scoob"><span>{"\u{1F43E} Sync Pet Chores"}</span></button></div></div>{showInlineAddForm && <div className="my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn"><div className="flex items-center justify-between pb-2 border-b border-indigo-200"><div className="font-bold text-sm text-indigo-900 flex items-center gap-1.5"><Plus className="w-4 h-4 text-indigo-600" /><span>Add New Master Chore to Household Hub</span></div><button onClick={() => setShowInlineAddForm(false)} className="text-slate-400 hover:text-slate-700 p-1"><X className="w-4 h-4" /></button></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs"><div className="md:col-span-2"><label className="block font-bold text-slate-700 mb-1">{"Chore Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={newMasterDraft.task} onChange={e => setNewMasterDraft(prev => ({
                  ...{
                    ...prev
                  },
                  task: e.target.value
                }))} onKeyDown={e => {
                  if (e.key === "Enter" && newMasterDraft.task.trim()) {
                    handleAddNewMasterChore(newMasterDraft);
                  }
                }} placeholder="e.g. Empty dishwasher, sanitize counters, sweep porch..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /></div><div><label className="block font-bold text-slate-700 mb-1">Category</label><select value={newMasterDraft.category} onChange={e => setNewMasterDraft(prev => ({
                  ...{
                    ...prev
                  },
                  category: e.target.value
                }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500">{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon}{" "}{c.name}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={newMasterDraft.frequency} onChange={e => {
                  const val = e.target.value;
                  setNewMasterDraft(prev => ({
                    ...{
                      ...prev
                    },
                    frequency: val,
                    targetDay: val === "Daily" ? "Mon \u2013 Sun" : val === "Bi-Weekly" ? "Thursday Evening" : "Saturday"
                  }));
                }} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Target Day(s)</label><input type="text" value={newMasterDraft.targetDay} onChange={e => setNewMasterDraft(prev => ({
                  ...{
                    ...prev
                  },
                  targetDay: e.target.value
                }))} placeholder="e.g. Mon \u2013 Sun, Saturday, Thursday Evening..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium" /></div><div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={newMasterDraft.rotationGroup} onChange={e => setNewMasterDraft(prev => ({
                  ...{
                    ...prev
                  },
                  rotationGroup: e.target.value
                }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div><div className="md:col-span-3"><label className="block font-bold text-slate-700 mb-1">Operational Notes / Routine</label><input type="text" value={newMasterDraft.notes} onChange={e => setNewMasterDraft(prev => ({
                  ...{
                    ...prev
                  },
                  notes: e.target.value
                }))} placeholder="Instructions, supplies, details or timing notes..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium" /></div></div><div className="flex justify-end gap-2 pt-2 border-t border-indigo-200"><button type="button" onClick={() => setShowInlineAddForm(false)} className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition">Cancel</button><button type="button" onClick={() => handleAddNewMasterChore(newMasterDraft)} disabled={!newMasterDraft.task.trim()} className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" /><span>Add Chore to Master List</span></button></div></div>}<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4"><div className="p-3 bg-slate-50 rounded-xl border border-slate-200"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Total Template Chores</span><div className="text-xl font-bold text-slate-900 mt-0.5">{hubMasterChores.length}{" Tasks"}</div><span className="text-[11px] text-slate-500">All registered tasks</span></div><div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200"><span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Daily Chores</span><div className="text-xl font-bold text-blue-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("daily")).length}{" Tasks"}</div><span className="text-[11px] text-blue-600">Mon – Sun rotation</span></div><div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200"><span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">Once a Week</span><div className="text-xl font-bold text-purple-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("weekly") || c.frequency.toLowerCase().includes("once")).length}{" Tasks"}</div><span className="text-[11px] text-purple-600">Saturday & Sunday deep tasks</span></div><div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200"><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Bi-Weekly Tasks</span><div className="text-xl font-bold text-amber-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("bi-weekly") || c.frequency.toLowerCase().includes("biweekly")).length}{" Tasks"}</div><span className="text-[11px] text-amber-700">Split Curbside Recycling & Waste</span></div></div><div className="p-3.5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs"><div className="flex items-start gap-2.5"><span className="text-lg">{"\u{1F69B}"}</span><div><span className="font-bold text-amber-900 block">Alternating Bi-Weekly Curbside Schedule Active</span><span className="text-[11px] text-amber-800"><strong>Thursday, October 15:</strong>{" Curbside Recycling scheduled & assigned (curb prep for Friday Oct 16)."}<br /><strong>Following Thursday (October 22):</strong>{" Curbside Waste scheduled & assigned (curb prep for Friday Oct 23)."}<br />Tasks alternate bi-weekly every 2 weeks on Thursday evenings.</span></div></div><div className="flex items-center gap-2 self-start md:self-auto shrink-0"><span className="px-2 py-1 rounded-md bg-white border border-amber-300 font-semibold text-[11px] text-amber-900 shadow-2xs">Thu Evening Curb Prep</span><span className="px-2 py-1 rounded-md bg-white border border-amber-300 font-semibold text-[11px] text-amber-900 shadow-2xs">Fri Morning Pickup</span></div></div><div className="mt-4 pt-4 border-t border-slate-200 space-y-3"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="relative flex-1 max-w-md"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" /><input type="text" placeholder="Search chores by name, category, group, or notes..." value={masterSearchQuery} onChange={e => setMasterSearchQuery(e.target.value)} className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500" />{masterSearchQuery && <button onClick={() => setMasterSearchQuery("")} className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"><X className="w-3.5 h-3.5" /></button>}</div><div className="flex items-center gap-1.5 text-xs"><span className="text-slate-500 font-semibold mr-1">Frequency:</span><button onClick={() => setMasterFrequencyFilter("ALL")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "ALL" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All</button><button onClick={() => setMasterFrequencyFilter("Daily")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "Daily" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>Daily</button><button onClick={() => setMasterFrequencyFilter("Once a Week")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "Once a Week" ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-700 hover:bg-purple-100"}`}>Weekly</button><button onClick={() => setMasterFrequencyFilter("Bi-Weekly")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "Bi-Weekly" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 hover:bg-amber-100"}`}>Bi-Weekly</button></div></div><div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs"><span className="text-slate-400 font-semibold mr-1 shrink-0">Category:</span><button onClick={() => setMasterCategoryFilter("ALL")} className={`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${masterCategoryFilter === "ALL" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All Categories ({hubMasterChores.length})</button>{CHORE_CATEGORIES.map(cat => {
                const count = hubMasterChores.filter(c => c.category.toLowerCase() === cat.name.toLowerCase()).length;
                return <button key={cat.id} onClick={() => setMasterCategoryFilter(cat.name)} className={`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${masterCategoryFilter === cat.name ? "ring-2 ring-slate-800 shadow-xs" : "opacity-85 hover:opacity-100"} ${cat.bg} ${cat.text} ${cat.border}`}><span>{cat.icon}</span><span>{cat.name}</span><span className="text-[10px] opacity-75">({count})</span></button>;
              })}</div></div></div><div className="space-y-3">{filteredMasterChores.map((ch, idx) => {
            var _a2;
            const isEditing = editingMasterIndex === ch.index_;
            const catConfig = CHORE_CATEGORIES.find(c => c.name.toLowerCase() === ch.category.toLowerCase()) || CHORE_CATEGORIES[3];
            const isBiWeekly = ch.frequency.toLowerCase().includes("bi-weekly") || ch.frequency.toLowerCase().includes("biweekly");
            const isCurbsideRecycling = ch.task.toLowerCase().includes("recycling");
            const isCurbsideWaste = ch.task.toLowerCase().includes("waste");
            return <div key={`${ch.index_ || ch.task}-${idx}`} className={`bg-white rounded-xl border transition-all ${isEditing ? "border-indigo-400 ring-2 ring-indigo-100 shadow-md p-4" : "border-slate-200 hover:border-slate-300 shadow-xs p-4"}`}>{!isEditing ? <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs"><div className="flex items-start gap-3 flex-1 min-w-0"><span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">{idx + 1}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold text-sm text-slate-900 leading-snug">{ch.task}</h3><span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${catConfig.bg} ${catConfig.text} ${catConfig.border}`}><span>{catConfig.icon}</span><span>{ch.category}</span></span><span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${isBiWeekly ? "bg-amber-50 text-amber-800 border-amber-200" : ch.frequency.toLowerCase().includes("daily") ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-purple-50 text-purple-700 border-purple-200"}`}>{ch.frequency}</span></div><div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-600"><div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /><span className="font-medium text-slate-500">Target Day:</span><span className="font-bold text-slate-800 px-1.5 py-0.5 rounded bg-slate-100">{ch.targetDay}</span></div><div className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-slate-400" /><span className="font-medium text-slate-500">Rotation Group:</span><span className={`font-semibold px-1.5 py-0.5 rounded border ${ch.rotationGroup === "All Non-Casual" ? "bg-purple-100 text-purple-900 border-purple-300 font-bold" : "text-indigo-700 bg-indigo-50 border-indigo-100"}`} title={ch.rotationGroup === "All Non-Casual" ? "Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda and Keyanna; no other group is equivalent)" : void 0}>{ch.rotationGroup}{ch.rotationGroup === "All Non-Casual" && <span className="ml-1 text-[9px] font-normal text-purple-700 hidden sm:inline">(5 non-casual)</span>}</span></div></div>{ch.notes && <p className="mt-2 text-[11px] text-slate-600 bg-slate-50/80 p-2 rounded-lg border border-slate-100 leading-relaxed"><span className="font-semibold text-slate-700">Instructions:</span>{" "}{ch.notes}</p>}{(isCurbsideRecycling || isCurbsideWaste) && <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-amber-900 bg-amber-50/90 border border-amber-200 px-2 py-1 rounded-md"><span>{"\u2139\uFE0F"}</span><span>{isCurbsideRecycling ? "Alternating Friday pickup starts Oct 16. Curb task set for preceding Thursday evening." : "Alternating Friday pickup starts Oct 23. Curb task set for preceding Thursday evening."}</span></div>}</div></div><div className="flex items-center gap-1.5 shrink-0 self-end md:self-start pt-2 md:pt-0"><button type="button" onClick={() => {
                    setEditingMasterIndex(ch.index_);
                    setMasterInlineDraft({
                      ...ch
                    });
                  }} className="px-2.5 py-1.5 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition" title="Edit chore details"><Pen className="w-3.5 h-3.5" /><span>Edit</span></button><button type="button" onClick={() => handleMoveChore(ch, "up")} disabled={idx === 0} className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded transition cursor-pointer" title="Move chore up"><ArrowUp className="w-4 h-4" /></button><button type="button" onClick={() => handleMoveChore(ch, "down")} disabled={idx === filteredMasterChores.length - 1} className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded transition cursor-pointer" title="Move chore down"><ArrowDown className="w-4 h-4" /></button><button type="button" onClick={() => handleDeleteMasterChore(ch.index_, ch.task)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded transition" title={`Remove "${ch.task}"`}><Trash2 className="w-3.5 h-3.5" /></button></div></div> : /* INLINE EDIT MODE: DIRECT COMPREHENSIVE EDITOR */<div className="space-y-3 text-xs"><div className="flex items-center justify-between pb-2 border-b border-indigo-200"><span className="font-bold text-indigo-900 flex items-center gap-1.5"><Pen className="w-3.5 h-3.5 text-indigo-600" /><span>Editing #{idx + 1}{": "}{ch.task}</span></span><span className="text-[10px] font-semibold text-slate-400">{"Sheet Row Index: "}{ch.index_}</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3"><div className="md:col-span-2"><label className="block font-bold text-slate-700 mb-1">{"Task Title "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={(masterInlineDraft == null ? void 0 : masterInlineDraft.task) || ""} onChange={e => setMasterInlineDraft(prev => ({
                      ...{
                        ...prev
                      },
                      task: e.target.value
                    }))} className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" /></div><div><label className="block font-bold text-slate-700 mb-1">Category</label><select value={(masterInlineDraft == null ? void 0 : masterInlineDraft.category) || "Household"} onChange={e => setMasterInlineDraft(prev => ({
                      ...{
                        ...prev
                      },
                      category: e.target.value
                    }))} className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500">{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon}{" "}{c.name}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={(masterInlineDraft == null ? void 0 : masterInlineDraft.frequency) || "Daily"} onChange={e => {
                      const val = e.target.value;
                      setMasterInlineDraft(prev => ({
                        ...{
                          ...prev
                        },
                        frequency: val,
                        targetDay: val === "Daily" ? "Mon \u2013 Sun" : val === "Bi-Weekly" ? "Thursday Evening" : prev.targetDay
                      }));
                    }} className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Target Day(s)</label><input type="text" value={(masterInlineDraft == null ? void 0 : masterInlineDraft.targetDay) || ""} onChange={e => setMasterInlineDraft(prev => ({
                      ...{
                        ...prev
                      },
                      targetDay: e.target.value
                    }))} placeholder="e.g. Mon \u2013 Sun, Saturday, Thursday Evening..." className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" /></div><div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={(masterInlineDraft == null ? void 0 : masterInlineDraft.rotationGroup) || "All Non-Casual"} onChange={e => setMasterInlineDraft(prev => ({
                      ...{
                        ...prev
                      },
                      rotationGroup: e.target.value
                    }))} className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select><p className="text-[10px] text-slate-500 mt-1 leading-snug">{"\u{1F4A1} "}<strong>All Non-Casual:</strong>{" Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna). "}<em>No equivalent currently exists among existing groups</em>.</p></div><div className="md:col-span-3"><label className="block font-bold text-slate-700 mb-1">Operational Notes</label><input type="text" value={(masterInlineDraft == null ? void 0 : masterInlineDraft.notes) || ""} onChange={e => setMasterInlineDraft(prev => ({
                      ...{
                        ...prev
                      },
                      notes: e.target.value
                    }))} placeholder="Operational details, supplies or timing notes..." className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500" /></div></div><div className="flex items-center justify-between pt-2 border-t border-indigo-200"><button type="button" onClick={() => handleDeleteMasterChore(ch.index_, ch.task)} className="px-3 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-1 transition"><Trash2 className="w-3.5 h-3.5" /><span>Remove Chore</span></button><div className="flex items-center gap-2"><button type="button" onClick={() => {
                      setEditingMasterIndex(null);
                      setMasterInlineDraft(null);
                    }} className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition">Cancel</button><button type="button" onClick={() => handleUpdateMasterChore(ch.index_, masterInlineDraft)} disabled={!((_a2 = masterInlineDraft == null ? void 0 : masterInlineDraft.task) == null ? void 0 : _a2.trim())} className="px-4 py-1.5 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-xs transition disabled:opacity-40">Save Changes</button></div></div></div>}</div>;
          })}{hubMasterChores.length === 0 && <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500"><ListTodo className="w-8 h-8 text-slate-300 mx-auto mb-2" /><p className="font-semibold">No chores found in Master Template</p><button onClick={() => setShowInlineAddForm(true)} className="mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg">Add First Chore</button></div>}</div></div>}{activeTab === "stats" && <div className="max-w-4xl mx-auto space-y-6"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"><div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Scheduled Chores</span><Calendar className="w-4 h-4 text-slate-400" /></div><div className="text-2xl font-bold text-slate-900 mt-2">{monthStats.totalScheduled}</div><p className="text-xs text-slate-500 mt-1">{"Total across "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</p></div><div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Completed Chores</span><CircleCheck className="w-4 h-4 text-emerald-500" /></div><div className="text-2xl font-bold text-emerald-600 mt-2">{monthStats.totalCompleted}</div><p className="text-xs text-slate-500 mt-1">{monthStats.completionRate}% completion rate</p></div><div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Active Tasks</span><ListTodo className="w-4 h-4 text-indigo-500" /></div><div className="text-2xl font-bold text-indigo-600 mt-2">{choreRows.length}</div><p className="text-xs text-slate-500 mt-1">Daily & weekly routines</p></div><div className="bg-gradient-to-br from-amber-50 to-orange-50/70 p-4 rounded-xl border border-amber-300 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-bold text-amber-900">Current Top Performer</span><Crown className="w-4 h-4 text-amber-600" /></div><div className="text-xl font-black text-amber-950 mt-2 truncate">{topPerformer ? topPerformer.name : "TBD"}</div><p className="text-xs text-amber-800 mt-1 truncate">{topPerformer ? `${topPerformer.done} chores finished` : "Track chores to rank"}</p></div></div><div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner"><Trophy className="w-6 h-6 text-amber-200" /></div><div><div className="flex items-center gap-2"><span className="text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">Monthly Incentive Prize</span><span className="text-xs opacity-90">{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</span></div><h3 className="text-base font-extrabold mt-0.5">Top Performer Reward & Recognition</h3></div></div><div className="flex items-center gap-2"><button onClick={() => {
                setIsEditingIncentive(prev => !prev);
                setIncentiveDraft(monthlyIncentive);
              }} className="text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700" /><span>{isEditingIncentive ? "Cancel Edit" : "Customize Incentive"}</span></button></div></div>{!isEditingIncentive ? <div className="pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"><div className="space-y-1"><div className="text-amber-100 font-medium">Incentive for Highest Monthly Chore Completions:</div><div className="text-sm font-black text-white flex items-center gap-2"><Gift className="w-4 h-4 text-amber-200 shrink-0" /><span>{monthlyIncentive}</span></div></div>{topPerformer && <div className="bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20"><Crown className="w-4 h-4 text-amber-200 shrink-0" /><div><div className="text-[10px] text-amber-100 uppercase tracking-wider font-bold">Leading Candidate</div><div className="font-extrabold text-xs text-white">{topPerformer.name}{" ("}{topPerformer.done}{" finished \u2022 "}{topPerformer.pct}%)</div></div></div>}</div> : <div className="pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20"><label className="block font-bold text-white mb-1">Set Monthly Reward / Incentive Prize for the Top Performer:</label><div className="flex gap-2"><input type="text" value={incentiveDraft} onChange={e => setIncentiveDraft(e.target.value)} placeholder="e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass..." className="flex-1 p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300" /><button onClick={() => {
                if (incentiveDraft.trim()) {
                  setMonthlyIncentive(incentiveDraft.trim());
                  setIsEditingIncentive(false);
                  setNotice(`Updated Monthly Incentive: "${incentiveDraft.trim()}"`);
                  setTimeout(() => setNotice(null), 3e3);
                }
              }} className="px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition">Save Prize</button></div><div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-1"><span className="opacity-80">Quick ideas:</span><button onClick={() => setIncentiveDraft("$15 Allowance Bonus & Pizza Night Pick")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">{"$15 + Pizza Night"}</button><button onClick={() => setIncentiveDraft("1-Day Chore Exemption Pass & Movie Pick")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">1-Day Chore Pass</button><button onClick={() => setIncentiveDraft("$20 Gift Card & Weekend Treat")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">{"$20 Gift Card"}</button><button onClick={() => setIncentiveDraft("Family Ice Cream Outing of Their Choice")} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white">Ice Cream Outing</button></div></div>}</div><div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200"><div><div className="flex items-center gap-2"><h3 className="text-base font-bold text-slate-900">Family Members Completion</h3><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Unified Roster ({rankedMembers.length}{" Members)"}</span></div><p className="text-xs text-slate-500 mt-0.5">{"Monthly Total Tracker ranked by total chores completed for "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}. All household members are displayed together in a single unified leaderboard.</p></div><div className="flex items-center gap-2 text-xs text-slate-500"><Award className="w-4 h-4 text-amber-500" /><span className="font-semibold text-slate-700">Ranked by Monthly Completions</span></div></div><div className="space-y-3">{rankedMembers.map((m, idx) => {
              const isFirst = idx === 0 && m.done > 0;
              const isSecond = idx === 1 && m.done > 0;
              const isThird = idx === 2 && m.done > 0;
              return <div key={m.id} className={`p-3.5 rounded-xl border transition-all ${isFirst ? "border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-sm" : "border-slate-200 bg-slate-50/40 hover:bg-white hover:border-slate-300"}`}><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5"><div className="flex items-center gap-3"><div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${isFirst ? "bg-amber-500 text-white shadow-xs" : isSecond ? "bg-slate-300 text-slate-800" : isThird ? "bg-amber-700/80 text-white" : "bg-slate-100 text-slate-500"}`}>{isFirst ? <Crown className="w-4 h-4" /> : `#${idx + 1}`}</div><div className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full shrink-0" style={{
                        backgroundColor: m.color
                      }} /><span className="font-bold text-sm text-slate-900">{m.name}</span>{m.role && <span className="text-xs text-slate-500 font-normal">({m.role}{" = "}{m.role === "Supreme Overlord" ? "Parent" : "Kid"})</span>}<span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${m.type === "biweekly" ? "bg-pink-50 text-pink-700 border-pink-200" : m.type === "casual" ? "bg-sky-50 text-sky-700 border-sky-200" : "bg-slate-100 text-slate-600 border-slate-200"}`}>{m.residency}</span>{isFirst && <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs"><span>{"\u{1F3C6}"}</span><span>{"Top Performer \u2022 Incentive Winner"}</span></span>}</div></div><div className="flex items-center gap-3 self-end sm:self-auto text-xs"><div className="text-right"><span className="font-extrabold text-sm text-slate-900">{m.done}</span><span className="text-slate-500">{" / "}{m.total}{" completed"}</span></div><span className={`font-black text-xs px-2 py-0.5 rounded-md ${m.pct >= 80 ? "bg-emerald-100 text-emerald-800" : m.pct >= 50 ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"}`}>{m.pct}%</span></div></div><div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden"><div className="h-2.5 rounded-full transition-all duration-500" style={{
                    width: `${m.pct}%`,
                    backgroundColor: isFirst ? "#D97706" : m.color
                  }} /></div>{isFirst && <div className="mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-medium"><div className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700 shrink-0" /><span>{"Qualifying Reward: "}<strong>{monthlyIncentive}</strong></span></div><span className="font-bold text-amber-700">{"Rank #1 in "}{MONTH_NAMES[selectedMonth]}</span></div>}</div>;
            })}</div></div><div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm"><h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5"><span>{"\u{1F43E} House Pets Overview"}</span></h4><div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">{HOUSE_PETS.map(pet => <div key={pet.name} className="bg-white p-2.5 rounded-lg border border-amber-100 flex items-center gap-2"><span className="text-base">{pet.icon}</span><div><div className="font-bold text-slate-800">{pet.name}</div><div className="text-[10px] text-slate-500">{pet.kind}</div></div></div>)}</div></div></div>}{activeTab === "roster" && <div className="max-w-5xl mx-auto space-y-6"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-slate-900">Household Hub & Master Directory</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Linked: Household Hub (Background Data)</span></div><p className="text-xs text-slate-500 mt-0.5">Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files.</p></div><div className="flex items-center gap-2"><span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200">{"Active Week: "}<strong>{hubScheduleConfig.activeWeekStart}</strong></span><span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200">{"Custody: "}<strong>{hubScheduleConfig.custodyRotation}</strong></span></div></div><div className="my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-600" /><h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950">Household Hub Rules & Parameter Analysis</h3></div><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Live Analytical Summary</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs"><div className="p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1"><span className="font-bold text-indigo-900 flex items-center gap-1.5"><span>{"\u{1F451}"}</span>{" Overseer Supreme (Parent) & Minions (Kids)"}</span><p className="text-[11px] text-slate-600 leading-relaxed"><strong>Thom & Meghan</strong>{" are humorously designated "}<em>Overseer Supreme</em>{" (= Parent) and actively share daily chores. "}<strong>Sunday Supper Rule:</strong>{" On Sundays, "}<em>Make Supper: Plan Ahead!</em>{" is always assigned exclusively to the parents, alternating between Thom and Meghan. They also conduct the Sunday "}<strong>Weekly Sign-Off & Inspection</strong>.</p></div><div className="p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1"><span className="font-bold text-pink-900 flex items-center gap-1.5"><span>{"\u{1F3E0}"}</span>{" Custody Rotation: Kids Week"}</span><p className="text-[11px] text-slate-600 leading-relaxed">{"For active week "}<strong>{hubScheduleConfig.activeWeekStart}</strong>{", "}<strong>Cadence & Mason</strong>{" are away and arrive on "}<strong>Sunday, Oct. 18th at 5:00 PM</strong>, alternating bi-weekly from then on. Current week chores are distributed among the full-time roster (Thom, Meghan, Sydney).</p></div><div className="p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1"><span className="font-bold text-amber-900 flex items-center gap-1.5"><span>{"\u{1F69B}"}</span>{" Alternating Curbside Schedule"}</span><p className="text-[11px] text-slate-600 leading-relaxed">{"Curbside tasks alternate bi-weekly on Thursday evenings for the "}<strong>Non-Casual</strong>{" group: "}<strong>Thursday, Oct 15</strong>{" is "}<em>Recycling</em>, the following Thursday (<strong>Oct 22</strong>{") is "}<em>Waste</em>, alternating continuously every 2 weeks.</p></div></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4"><div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl"><div className="text-[10px] font-bold text-purple-900 uppercase tracking-wider">Full-Time Occupants</div><div className="text-lg font-extrabold text-purple-950 mt-0.5">{familyMembers.filter(m => m.type === "regular").length}{" Members"}</div><div className="text-[11px] text-purple-700 truncate mt-0.5">{familyMembers.filter(m => m.type === "regular").map(m => m.name).join(", ")}</div></div><div className="p-3 bg-pink-50/70 border border-pink-200 rounded-xl"><div className="text-[10px] font-bold text-pink-900 uppercase tracking-wider">Bi-Weekly Occupants</div><div className="text-lg font-extrabold text-pink-950 mt-0.5">{familyMembers.filter(m => m.type === "biweekly").length}{" Members"}</div><div className="text-[11px] text-pink-700 truncate mt-0.5">{familyMembers.filter(m => m.type === "biweekly").map(m => m.name).join(" & ")}{" (Kids Week)"}</div></div><div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl"><div className="text-[10px] font-bold text-sky-900 uppercase tracking-wider">Casual Assignees</div><div className="text-lg font-extrabold text-sky-950 mt-0.5">{familyMembers.filter(m => m.type === "casual").length}{" Members"}</div><div className="text-[11px] text-sky-700 truncate mt-0.5">{familyMembers.filter(m => m.type === "casual").map(m => m.name).join(", ")}{" (Manual Add)"}</div></div><div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl"><div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">Feed the Herd</div><div className="text-lg font-extrabold text-amber-950 mt-0.5">{rosterPets.length}{" Pets"}</div><div className="text-[11px] text-amber-800 truncate mt-0.5">{rosterPets.map(p => p.name).join(", ")}</div></div></div><div className="space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600" /><h3 className="text-sm font-bold text-slate-900">Household Members</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">{"Rows 5\u201311 \u2022 Linked Data"}</span></div><span className="text-xs text-slate-500">{familyMembers.length}{" Registered Occupants"}</span></div><div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Name</th><th className="p-3">Role</th><th className="p-3">Occupancy</th><th className="p-3">Special Rotation Groups</th><th className="p-3 text-center">Active Status</th></tr></thead><tbody className="divide-y divide-slate-200">{familyMembers.map(member => <tr key={member.index_} className="hover:bg-slate-50/70 transition"><td className="p-3 font-semibold text-slate-800"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full shrink-0" style={{
                          backgroundColor: member.color
                        }} /><span className="font-bold text-slate-900">{member.name}</span></div></td><td className="p-3"><span className={`px-2 py-0.5 rounded font-bold text-[11px] flex items-center gap-1 w-fit ${member.role === "Supreme Overlord" ? "bg-amber-100 text-amber-900 border border-amber-300" : "bg-indigo-50 text-indigo-800 border border-indigo-200"}`}><span>{member.role}</span><span className="text-[9px] font-normal opacity-75">({member.role === "Supreme Overlord" ? "Parent" : "Kid"})</span></span></td><td className="p-3"><span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${member.type === "biweekly" ? "bg-pink-50 text-pink-700 border border-pink-200" : member.type === "casual" ? "bg-sky-50 text-sky-700 border border-sky-200" : "bg-slate-100 text-slate-700 border border-slate-200"}`}>{member.residency}</span></td><td className="p-3 text-slate-700 font-medium">{member.specialGroups || "All"}</td><td className="p-3 text-center">{member.active ? <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"><CircleCheck className="w-3.5 h-3.5 text-emerald-600" />Active</span> : <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200"><Circle className="w-3.5 h-3.5 text-slate-400" />Inactive</span>}</td></tr>)}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Layers className="w-4 h-4 text-purple-600" /><h3 className="text-sm font-bold text-slate-900">Occupancy Categories & Rules</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Rows 14–17</span></div></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{hubOccupancyCategories.map(cat => <div key={cat.type} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs"><div className="flex items-center justify-between"><span className="font-bold text-sm text-slate-900">{cat.type}</span><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Active</span></div><div className="text-[11px] font-semibold text-indigo-700">{cat.description}</div><p className="text-[11px] text-slate-600 leading-snug"><strong>Rule:</strong>{" "}{cat.rules}</p></div>)}</div></div><div className="mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs"><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-600" /><span>Special Rotation Groups</span></h3><span className="text-[10px] text-slate-500 font-semibold">Rows 20–25</span></div><div className="space-y-2">{hubSpecialGroups.map(grp => <div key={grp.name} className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><div className="flex items-center justify-between"><span className="font-bold text-slate-900">{grp.name}</span><span className="text-[10px] text-slate-400 font-medium">Group</span></div><div className="text-[11px] text-slate-600 mt-1 leading-snug">{grp.members}</div></div>)}</div></div><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Settings2 className="w-4 h-4 text-purple-600" /><span>Schedule Configurations</span></h3><span className="text-[10px] text-slate-500 font-semibold">Rows 18–21</span></div><div className="space-y-2"><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Active Week Start Date</span><div className="text-sm font-extrabold text-indigo-600 mt-0.5">{hubScheduleConfig.activeWeekStart}</div><span className="text-[10px] text-slate-500">Scope: Printable Weekly Schedule</span></div><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Custody Schedule Rotation</span><div className="text-sm font-extrabold text-pink-600 mt-0.5">{hubScheduleConfig.custodyRotation}</div><span className="text-[10px] text-slate-500">{"Bi-Weekly Schedule \u2022 Members: "}{hubScheduleConfig.custodyMembers}</span></div><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Waste / Recycling Schedule Rotation</span><div className="text-xs font-semibold text-slate-700 mt-0.5">{hubScheduleConfig.wasteRotation}</div><span className="text-[10px] text-slate-500">{"Alternating weeks \u2022 Members: "}{hubScheduleConfig.wasteMembers}</span></div></div></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"><div><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><ListTodo className="w-4 h-4 text-indigo-600" /><span>Master Chore Registry & Allocation Rules</span><span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{hubMasterChores.length}{" Tasks \u2022 Rows 5\u201315 (Cols 6\u201310)"}</span></h3></div><div className="relative"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search chores or rules..." value={hubChoreSearch} onChange={e => setHubChoreSearch(e.target.value)} className="pl-8 pr-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 w-48" /></div></div><div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Chore</th><th className="p-3">Member / Group</th><th className="p-3">Frequency</th><th className="p-3">Suggested Days</th><th className="p-3">Details / Notes</th></tr></thead><tbody className="divide-y divide-slate-200">{hubMasterChores.filter(ch => hubChoreSearch ? ch.task.toLowerCase().includes(hubChoreSearch.toLowerCase()) || ch.rotationGroup.toLowerCase().includes(hubChoreSearch.toLowerCase()) || ch.notes.toLowerCase().includes(hubChoreSearch.toLowerCase()) : true).map((ch, idx) => <tr key={`${ch.index_}-${idx}`} className="hover:bg-slate-50/70 transition"><td className="p-3 font-bold text-slate-900 min-w-[200px]">{ch.task}</td><td className="p-3"><span className={`px-2 py-0.5 rounded text-[11px] font-bold ${ch.rotationGroup === "Parents" ? "bg-amber-100 text-amber-900 border border-amber-300" : ch.rotationGroup === "Kids" ? "bg-pink-100 text-pink-900 border border-pink-300" : "bg-indigo-50 text-indigo-800 border border-indigo-200"}`}>{ch.rotationGroup}</span></td><td className="p-3 font-semibold text-slate-800">{ch.frequency}</td><td className="p-3 text-slate-700 font-medium">{ch.targetDay}</td><td className="p-3 text-slate-600 leading-snug min-w-[250px]">{ch.notes || "\u2014"}</td></tr>)}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><span>{'\u{1F43E} Pet Care Profiles & Feeding Routines ("Feed the Herd")'}</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{rosterPets.length}{" Profiles \u2022 Rows 28\u201333"}</span></h3></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">{rosterPets.map(pet => <div key={pet.index_} className="p-3.5 bg-amber-50/40 border border-amber-200 rounded-xl space-y-2 shadow-2xs"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><span className="text-lg">{pet.icon}</span><span className="font-bold text-sm text-slate-900">{pet.name}</span></div><span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-100 text-amber-800 border border-amber-300">{pet.type}</span></div><div><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Routine:</span><div className="text-xs text-slate-800 font-semibold">{pet.routine}</div></div><div><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Care Responsibilities:</span><p className="text-xs text-slate-700 leading-snug mt-0.5">{pet.care}</p></div></div>)}</div></div></div></div>}</main>{activeDayModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div><span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Day Schedule</span><h3 className="text-base font-bold">{(() => {
                const parsed = parseDateKey(activeDayModal);
                if (!parsed) return activeDayModal;
                const d = new Date(parsed.year, parsed.month, parsed.day);
                return d.toLocaleDateString(void 0, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                });
              })()}</h3></div><button onClick={() => setActiveDayModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs"><span className="text-slate-600 font-medium">{choreRows.filter(cr => {
              var _a2, _b2;
              return (_b2 = (_a2 = monthSchedule[activeDayModal]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;
            }).length}{" of"}{" "}{choreRows.length}{" completed"}</span><div className="flex gap-2"><button onClick={() => {
              choreRows.forEach(cr => {
                handleUpdateChore(activeDayModal, cr.index_, {
                  done: true
                });
              });
            }} className="px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 rounded font-medium transition">Mark All Done</button><button onClick={() => {
              choreRows.forEach(cr => {
                handleUpdateChore(activeDayModal, cr.index_, {
                  done: false
                });
              });
            }} className="px-2 py-1 bg-slate-200 text-slate-700 hover:bg-slate-300 rounded font-medium transition">Reset All</button></div></div><div className="p-4 overflow-y-auto space-y-2 flex-1">{choreRows.map(cr => {
            var _a2, _b2, _c2, _d, _e;
            const status = getChoreStatus(activeDayModal, cr.index_);
            const freq = getChoreFreq(cr);
            const parsed = parseDateKey(activeDayModal);
            const dayOfWeekIdx = parsed ? (new Date(parsed.year, parsed.month, parsed.day).getDay() + 6) % 7 : 0;
            const taskTitleStr = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";
            const tLowStr = taskTitleStr.toLowerCase();
            const isScheduledForToday = (() => {
              if (tLowStr.includes("deep clean") || tLowStr.includes("feeding station")) {
                return dayOfWeekIdx === 6;
              }
              if (tLowStr.includes("recycling")) {
                return dayOfWeekIdx === 3 && parsed && isCurbsideActiveOnDate("recycling", parsed.year, parsed.month, parsed.day);
              }
              if (tLowStr.includes("waste")) {
                return dayOfWeekIdx === 3 && parsed && isCurbsideActiveOnDate("waste", parsed.year, parsed.month, parsed.day);
              }
              if (freq.frequency === "daily") return true;
              if (freq.frequency === "weekly") return dayOfWeekIdx === freq.dayOfWeek;
              if (freq.frequency === "biweekly") return dayOfWeekIdx === freq.dayOfWeek && parsed && isCurbsideActiveOnDate(taskTitleStr, parsed.year, parsed.month, parsed.day);
              return false;
            })();
            return <div key={cr.index_} className={`p-2.5 rounded-xl border flex flex-col gap-2 transition ${status.done ? "bg-emerald-50/60 border-emerald-200" : freq.frequency === "weekly" && isScheduledForToday ? "bg-purple-50/60 border-purple-200" : "bg-white border-slate-200 hover:border-slate-300"}`}><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2.5 flex-1 min-w-0"><button onClick={() => handleUpdateChore(activeDayModal, cr.index_, {
                    done: !status.done
                  })} className="text-slate-400 hover:text-emerald-600 focus:outline-none">{status.done ? <SquareCheckBig className="w-5 h-5 text-emerald-600" /> : <Square className="w-5 h-5" />}</button><div className="flex items-center gap-1.5 min-w-0"><span className={`text-xs font-semibold truncate ${status.done ? "line-through text-slate-500" : "text-slate-800"}`}>{cr.task || cr.row[0]}</span>{freq.frequency === "weekly" && <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${isScheduledForToday ? "bg-purple-100 text-purple-700 border border-purple-200" : "bg-slate-100 text-slate-500"}`}>{isScheduledForToday ? "1x/wk (Today)" : `1x/wk (${(_b2 = DAY_STYLES[freq.dayOfWeek]) == null ? void 0 : _b2.short})`}</span>}</div></div>{getSpecificKidForChore(cr.task || cr.row[0]) ? <div className="text-[11px] font-bold px-2 py-1 rounded border shrink-0" style={{
                  backgroundColor: ((_c2 = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _c2.bg) || "#FCE7F3",
                  color: ((_d = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _d.text) || "#BE185D",
                  borderColor: (((_e = getMember(getSpecificKidForChore(cr.task || cr.row[0]))) == null ? void 0 : _e.color) || "#ec4899") + "50"
                }}>{getSpecificKidForChore(cr.task || cr.row[0])}</div> : isBedroomChore(cr.task || cr.row[0]) ? <div className="text-[11px] font-bold px-2 py-1 rounded bg-pink-100 text-pink-700 border border-pink-200 shrink-0">Each Child</div> : <select value={status.who} onChange={e => handleUpdateChore(activeDayModal, cr.index_, {
                  who: e.target.value
                })} className="text-xs p-1.5 rounded-lg bg-white border border-slate-300 font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs" style={{
                  color: status.who ? "#0f172a" : "#334155"
                }}><option value="" style={{
                    color: "#64748b",
                    backgroundColor: "#FFFFFF"
                  }}>Unassigned</option><optgroup label="Full-Time Occupants" style={{
                    color: "#0f172a",
                    backgroundColor: "#F1F5F9",
                    fontWeight: "bold"
                  }}>{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name} style={{
                      color: "#0f172a",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600"
                    }}>{m.name}{m.role ? ` (${m.role})` : ""}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants" style={{
                    color: "#0f172a",
                    backgroundColor: "#F1F5F9",
                    fontWeight: "bold"
                  }}>{familyMembers.filter(m => m.type === "biweekly").map(m => {
                      const parsed2 = parseDateKey(activeDayModal);
                      const bw = parsed2 ? getBiWeeklyStatus(parsed2.year, parsed2.month, parsed2.day) : null;
                      const note = (bw == null ? void 0 : bw.isArrivalDay) ? " (Arrives 5 PM)" : (bw == null ? void 0 : bw.isDepartureDay) ? " (Leaves 5 PM)" : (bw == null ? void 0 : bw.isPresent) ? " (Here)" : " (Away)";
                      return <option key={m.id} value={m.name} style={{
                        color: "#0f172a",
                        backgroundColor: "#FFFFFF",
                        fontWeight: "600"
                      }}>{m.name}{note}</option>;
                    })}</optgroup><optgroup label="Casual Assignees (Lesser Scale)" style={{
                    color: "#0f172a",
                    backgroundColor: "#F1F5F9",
                    fontWeight: "bold"
                  }}>{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name} style={{
                      color: "#0f172a",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600"
                    }}>{m.name}</option>)}</optgroup><optgroup label="Special Groups" style={{
                    color: "#0f172a",
                    backgroundColor: "#F1F5F9",
                    fontWeight: "bold"
                  }}><option value="All Non-Casual" style={{
                      color: "#4338CA",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "bold"
                    }}>All Non-Casual</option><option value="Each Child" style={{
                      color: "#0f172a",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600"
                    }}>Each Child</option><option value="All Kids" style={{
                      color: "#0f172a",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600"
                    }}>All Kids</option><option value="Thom / Meghan" style={{
                      color: "#0f172a",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600"
                    }}>Thom / Meghan</option><option value="Parents" style={{
                      color: "#0f172a",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600"
                    }}>Parents</option></optgroup>{status.who && !familyMembers.some(m => m.name === status.who) && !["All Non-Casual", "Each Child", "All Kids", "Thom / Meghan", "Parents"].includes(status.who) && <option value={status.who} style={{
                    color: "#0f172a",
                    backgroundColor: "#FFFFFF",
                    fontWeight: "600"
                  }}>{status.who}</option>}</select>}</div>{isBedroomChore(cr.task || cr.row[0]) && !getSpecificKidForChore(cr.task || cr.row[0]) && <div className="bg-pink-50/70 border border-pink-200 rounded-lg p-2 mt-1"><div className="text-[11px] font-bold text-pink-900 mb-1.5 flex items-center justify-between"><span>Individual Bedrooms to Clean:</span><span className="text-[10px] text-pink-600 font-normal">Each child cleans own space</span></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">{getKidsPresentOnDate(activeDayModal).map(kidName => {
                    var _a3;
                    const isKidDone = !!((_a3 = status.kidsDone) == null ? void 0 : _a3[kidName]);
                    const kidMember = getMember(kidName);
                    return <button key={kidName} type="button" onClick={() => handleToggleKidBedroom(activeDayModal, cr.index_, kidName)} className={`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${isKidDone ? "bg-emerald-100/80 border-emerald-300 text-emerald-900 line-through" : "bg-white border-pink-200 text-slate-800 hover:bg-pink-50"}`}><div className="flex items-center gap-1.5 truncate"><span className="w-2.5 h-2.5 rounded-full shrink-0" style={{
                          backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#ec4899"
                        }} /><span className="font-semibold truncate">{kidName}'s Room</span></div><span className="font-bold ml-1">{isKidDone ? "\u2713" : "\u25CB"}</span></button>;
                  })}</div></div>}</div>;
          })}</div><div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end"><button onClick={() => setActiveDayModal(null)} className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition">Done</button></div></div></div>}{showAutoAssignModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-200" /><h3 className="text-base font-bold">Auto-Assign Monthly Template</h3></div><button onClick={() => setShowAutoAssignModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 text-xs"><p className="text-slate-600">Distribute daily tasks evenly across household occupants so{" "}<strong>everyone has a chore on each day</strong>{" instead of one person handling all tasks, for"}{" "}<strong>{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</strong>.</p><div><label className="font-bold text-slate-800 block mb-1.5">Full-Time Occupants (Included in Daily Chore Distribution):</label><div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">{familyMembers.filter(m => m.type === "regular").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"><input type="checkbox" defaultChecked id={`assignee-${m.id}`} className="rounded text-indigo-600 focus:ring-indigo-500" /><span className="w-3 h-3 rounded-full" style={{
                  backgroundColor: m.color
                }} /><span className="font-medium text-slate-800">{m.name}</span>{m.role && <span className="text-[10px] text-slate-500">({m.role === "Overseer Supreme" ? "Parent" : "Kid"})</span>}</label>)}</div><div className="flex items-center justify-between mb-1.5"><label className="font-bold text-pink-800 block">Bi-Weekly Occupants (Active During Stay Weeks Only):</label><span className="text-[10px] font-semibold text-pink-600 bg-pink-50 border border-pink-200 px-1.5 py-0.5 rounded">{"Back Sunday, Oct. 18 @ 5:00 PM"}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">{familyMembers.filter(m => m.type === "biweekly").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-pink-200 bg-pink-50/40 hover:bg-pink-50 cursor-pointer"><input type="checkbox" defaultChecked id={`assignee-${m.id}`} className="rounded text-pink-600 focus:ring-pink-500" /><span className="w-3 h-3 rounded-full" style={{
                  backgroundColor: m.color
                }} /><span className="font-medium text-slate-800">{m.name}</span><span className="text-[10px] text-pink-700 bg-pink-100 px-1 rounded font-semibold">Bi-weekly only</span></label>)}</div><div className="p-3 bg-sky-50/60 border border-sky-200 rounded-xl mb-3"><div className="flex items-center justify-between mb-1"><span className="font-bold text-sky-900 text-xs">Casual Members (Manual Add-Ins Only):</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-300">Excluded from Auto-Assign</span></div><div className="flex flex-wrap items-center gap-2 mt-1.5">{familyMembers.filter(m => m.type === "casual").map(m => <span key={m.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-sky-200 text-sky-900 shadow-2xs"><span className="w-2 h-2 rounded-full" style={{
                    backgroundColor: m.color
                  }} /><span>{m.name}</span></span>)}</div><p className="text-[11px] text-sky-700 mt-2 leading-relaxed">{'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'}</p></div></div><div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-pink-900 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-pink-600 mt-0.5" /><span><strong>Daily Distribution:</strong>{" Each day's tasks are handed out so all available family members (including Thom & Meghan as Overseer Supreme = Parent) share the daily chores evenly. "}{biWeeklyNamesString}{" are included during stay weeks and skipped on away weeks."}</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAutoAssignModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {
            const regSelected = familyMembers.filter(m => {
              var _a2;
              return m.type === "regular" && ((_a2 = document.getElementById(`assignee-${m.id}`)) == null ? void 0 : _a2.checked);
            }).map(m => m.name);
            const bwSelected = familyMembers.filter(m => {
              var _a2;
              return m.type === "biweekly" && ((_a2 = document.getElementById(`assignee-${m.id}`)) == null ? void 0 : _a2.checked);
            }).map(m => m.name);
            handleAutoAssignMonth(regSelected, bwSelected);
          }} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition">Distribute Daily Chores</button></div></div></div>}{(showAddRemoveChoreModal || showNewChoreModal) && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><ListTodo className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Add / Edit Master Chores</h3><p className="text-[11px] text-slate-400">Add new tasks, edit existing chores, or remove from the schedule</p></div></div><button onClick={() => {
            setShowAddRemoveChoreModal(false);
            setShowNewChoreModal(false);
            setSelectedRemoveIndices([]);
            setEditingChoreIndex(null);
          }} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="flex border-b border-slate-200 bg-slate-100/70 p-1"><button type="button" onClick={() => {
            setAddRemoveMode("add");
            setEditingChoreIndex(null);
          }} className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${addRemoveMode === "add" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600 hover:text-slate-900"}`}><Plus className="w-3.5 h-3.5" /><span>+ Add New Chore</span></button><button type="button" onClick={() => setAddRemoveMode("edit")} className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${addRemoveMode === "edit" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600 hover:text-slate-900"}`}><Pen className="w-3.5 h-3.5" /><span>{"\u270F\uFE0F Edit Chore ("}{choreRows.length})</span></button></div>{addRemoveMode === "add" && <div className="p-5 space-y-4 overflow-y-auto flex-1"><div><label className="block text-xs font-bold text-slate-700 mb-1">{"Chore / Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" id="new-chore-title-input" placeholder="e.g. Clean oven, sweep patio, sanitize counters..." autoFocus onKeyDown={e => {
              if (e.key === "Enter") {
                const freqEl = document.getElementById("new-chore-frequency");
                const dayEl = document.getElementById("new-chore-day");
                const whoEl = document.getElementById("new-chore-who");
                handleAddNewChore(e.currentTarget.value, {
                  frequency: freqEl ? freqEl.value : "daily",
                  dayOfWeek: dayEl ? Number(dayEl.value) : 5,
                  defaultWho: whoEl ? whoEl.value : ""
                });
              }
            }} className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select id="new-chore-frequency" defaultValue="daily" onChange={e => {
                const dayContainer = document.getElementById("day-select-container");
                if (dayContainer) {
                  dayContainer.style.display = e.target.value === "weekly" ? "block" : "none";
                }
              }} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="daily">Daily (Every Day)</option><option value="weekly">Once a Week</option><option value="biweekly">Bi-Weekly (Curbside schedule)</option></select></div><div id="day-select-container" style={{
              display: "none"
            }}><label className="block font-bold text-slate-700 mb-1">Target Day</label><select id="new-chore-day" defaultValue="5" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500">{DAY_STYLES.map((d, i) => <option key={d.name} value={i}>{"Every "}{d.name}</option>)}</select></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label className="block font-bold text-slate-700 mb-1">Category</label><select id="new-chore-category" defaultValue="Household" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="Household">Household</option><option value="Kitchen">Kitchen</option><option value="Pet Care">Pet Care</option><option value="Bedrooms">Bedrooms</option><option value="Common Areas">Common Areas</option><option value="Administration">Administration</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Default Rotation Group</label><select id="new-chore-who" defaultValue="All Non-Casual" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="">Rotating / Unassigned</option><option value="Kids Rotation">Kids Rotation</option><option value="All Kids">All Kids (Shared)</option><option value="Each Child">Each Child (Own Space)</option><option value="Full-Time Roster">Full-Time Roster</option><option value="Parents">Parents Only</option><option value="All Occupants">All Occupants</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select><p className="text-[10px] text-slate-500 mt-1 leading-snug">{"\u{1F4A1} "}<strong>All Non-Casual:</strong>{" Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."}</p></div></div><div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span>Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory.</span></div></div>}{(addRemoveMode === "edit" || addRemoveMode === "remove") && <div className="p-5 space-y-4 overflow-y-auto flex-1">{editingChoreIndex !== null ? /* SUB-VIEW A: DETAILED CHORE EDITOR WITH IN-LINE REMOVE */<div className="space-y-4 text-xs"><div className="flex items-center justify-between pb-2 border-b border-slate-200"><button type="button" onClick={() => setEditingChoreIndex(null)} className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition"><ChevronLeft className="w-4 h-4" /><span>Back to All Chores</span></button><span className="text-[11px] font-bold text-slate-400 uppercase">Editing Item #{choreRows.findIndex(r => r.index_ === editingChoreIndex) + 1}</span></div><div><label className="block font-bold text-slate-700 mb-1">{"Chore Title / Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={editChoreTitle} onChange={e => setEditChoreTitle(e.target.value)} className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold" placeholder="Chore task title..." autoFocus /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={editChoreFreq} onChange={e => setEditChoreFreq(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="daily">Daily (Every Day)</option><option value="weekly">Once a Week</option><option value="biweekly">Bi-Weekly</option></select></div>{editChoreFreq === "weekly" ? <div><label className="block font-bold text-slate-700 mb-1">Target Day</label><select value={editChoreDay} onChange={e => setEditChoreDay(Number(e.target.value))} className="w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500">{DAY_STYLES.map((d, i) => <option key={d.name} value={i}>{"Every "}{d.name}</option>)}</select></div> : <div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editChoreRotationGroup} onChange={e => setEditChoreRotationGroup(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div>}</div>{editChoreFreq === "weekly" && <div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editChoreRotationGroup} onChange={e => setEditChoreRotationGroup(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div>}<div className="p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span><strong>Rotation Group Clarification:</strong>{" "}<em>All Non-Casual</em>{" covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. "}<strong>No equivalent currently exists among the other groups</strong>{" (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."}</span></div><div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between"><span className="font-semibold text-slate-700">List Order Position:</span><div className="flex items-center gap-1.5"><button type="button" onClick={() => handleMoveChore(editingChoreIndex, "up")} className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700"><ArrowUp className="w-3.5 h-3.5" />{" Move Up"}</button><button type="button" onClick={() => handleMoveChore(editingChoreIndex, "down")} className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700"><ArrowDown className="w-3.5 h-3.5" />{" Move Down"}</button></div></div><div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between"><div><div className="font-bold text-rose-900">Remove This Chore</div><div className="text-[11px] text-rose-700">Delete this chore from the schedule and spreadsheet</div></div><button type="button" onClick={() => {
                handleDeleteChore(editingChoreIndex, editChoreTitle);
                setEditingChoreIndex(null);
              }} className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition"><Trash2 className="w-3.5 h-3.5" /><span>Remove Chore</span></button></div></div> : /* SUB-VIEW B: MASTER CHORES LIST FOR EDITING & REMOVAL */<div className="space-y-3"><div className="flex items-center justify-between gap-2"><div className="relative flex-1"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search or filter chores to edit or remove..." value={removeSearchQuery} onChange={e => setRemoveSearchQuery(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500" /></div><button type="button" onClick={() => {
                if (selectedRemoveIndices.length === choreRows.length) {
                  setSelectedRemoveIndices([]);
                } else {
                  setSelectedRemoveIndices(choreRows.map(r => r.index_));
                }
              }} className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap">{selectedRemoveIndices.length === choreRows.length ? "Deselect All" : "Select All"}</button></div>{selectedRemoveIndices.length > 0 && <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between text-xs"><span className="font-bold text-rose-800">{selectedRemoveIndices.length}{" chore(s) selected"}</span><button type="button" onClick={handleBatchDeleteChores} className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md shadow-xs transition flex items-center gap-1"><Trash2 className="w-3.5 h-3.5" /><span>Remove Selected</span></button></div>}<div className="divide-y divide-slate-100 border border-slate-200 rounded-xl max-h-64 overflow-y-auto">{choreRows.filter(cr => removeSearchQuery ? (cr.task || cr.row[0] || "").toLowerCase().includes(removeSearchQuery.toLowerCase()) : true).map((cr, idx) => {
                var _a2;
                const isSelected = selectedRemoveIndices.includes(cr.index_);
                const freq = getChoreFreq(cr);
                const choreLabel = cr.task || cr.row[0] || "Chore";
                return <div key={cr.index_} className="p-2.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition text-xs"><div className="flex items-center gap-2.5 flex-1 min-w-0"><input type="checkbox" checked={isSelected} onChange={() => {
                      setSelectedRemoveIndices(prev => isSelected ? prev.filter(i => i !== cr.index_) : [...prev, cr.index_]);
                    }} className="rounded text-rose-600 focus:ring-rose-500" title="Select for batch removal" /><div className="min-w-0 flex-1"><span className="font-semibold text-slate-800 truncate block">{idx + 1}{". "}{choreLabel}</span><div className="flex items-center gap-1.5 mt-0.5"><span className="text-[10px] text-slate-500">{freq.frequency === "weekly" ? `Once a week (${(_a2 = DAY_STYLES[freq.dayOfWeek]) == null ? void 0 : _a2.name})` : "Daily task"}</span></div></div></div><div className="flex items-center gap-1 shrink-0"><button type="button" onClick={() => handleStartEditChore(cr)} className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg flex items-center gap-1 transition" title="Edit chore details"><Pen className="w-3.5 h-3.5" /><span>Edit</span></button><button type="button" onClick={() => handleDeleteChore(cr.index_, choreLabel)} className="p-1.5 text-rose-500 hover:text-white hover:bg-rose-600 rounded-lg transition" title={`Remove "${choreLabel}"`}><Trash2 className="w-3.5 h-3.5" /></button></div></div>;
              })}</div></div>}</div>}<div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between"><span className="text-[11px] text-slate-500 font-medium">{choreRows.length}{" active master chores"}</span><div className="flex gap-2"><button type="button" onClick={() => {
              setShowAddRemoveChoreModal(false);
              setShowNewChoreModal(false);
              setSelectedRemoveIndices([]);
              setEditingChoreIndex(null);
            }} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Close</button>{addRemoveMode === "add" ? <button type="button" onClick={() => {
              const titleInput = document.getElementById("new-chore-title-input");
              const freqEl = document.getElementById("new-chore-frequency");
              const dayEl = document.getElementById("new-chore-day");
              const whoEl = document.getElementById("new-chore-who");
              const catEl = document.getElementById("new-chore-category");
              if (titleInput && titleInput.value.trim()) {
                handleAddNewChore(titleInput.value, {
                  frequency: freqEl ? freqEl.value : "daily",
                  dayOfWeek: dayEl ? Number(dayEl.value) : 5,
                  defaultWho: whoEl ? whoEl.value : "All Non-Casual",
                  category: catEl ? catEl.value : "Household"
                });
              }
            }} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition">Add Chore</button> : editingChoreIndex !== null ? <button type="button" onClick={handleSaveChoreEdit} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition">Save Changes</button> : selectedRemoveIndices.length > 0 && <button type="button" onClick={handleBatchDeleteChores} className="px-4 py-2 text-xs font-bold bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-sm transition">Remove Selected ({selectedRemoveIndices.length})</button>}</div></div></div></div>}{showCombineModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><GitMerge className="w-5 h-5 text-purple-200" /><h3 className="text-base font-bold">Combine Chores</h3></div><button onClick={() => setShowCombineModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 text-xs"><p className="text-slate-600">Merge two chores into a single consolidated task. Assigned family members and completed checkmarks will be combined together seamlessly.</p><div><label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Suggested Combinations:</label><div className="grid grid-cols-1 sm:grid-cols-2 gap-2"><button type="button" onClick={() => {
                if (choreRows[4] && choreRows[5]) {
                  setCombineTargetA(choreRows[4].index_);
                  setCombineTargetB(choreRows[5].index_);
                  setCustomCombinedTitle("Dinner Dishes & Kitchen Cleanup (Put away food, load dishwasher, wipe surfaces)");
                }
              }} className="p-2 text-left rounded-lg border border-purple-200 bg-purple-50/60 hover:bg-purple-100 transition"><div className="font-bold text-purple-900 flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-600" /><span>Chores #5 & #6 (Dinner)</span></div><div className="text-[10px] text-purple-700 truncate mt-0.5">Dinner Dishes + Put away food</div></button><button type="button" onClick={() => {
                if (choreRows[0] && choreRows[1]) {
                  setCombineTargetA(choreRows[0].index_);
                  setCombineTargetB(choreRows[1].index_);
                  setCustomCombinedTitle("Tidy bedroom & vacuum floors, bring laundry downstairs");
                }
              }} className="p-2 text-left rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"><div className="font-bold text-slate-800 flex items-center gap-1"><Sparkles className="w-3 h-3 text-slate-500" /><span>Rows 5 & 6 (Bedroom)</span></div><div className="text-[10px] text-slate-600 truncate mt-0.5">Tidy up bedroom + Vacuum floors</div></button></div></div><div><label className="block font-bold text-slate-700 mb-1">Primary Chore (Retains Position):</label><select value={combineTargetA != null ? combineTargetA : ""} onChange={e => {
              const val = Number(e.target.value);
              setCombineTargetA(val);
              const choreA = choreRows.find(r => r.index_ === val);
              const choreB = choreRows.find(r => r.index_ === combineTargetB);
              if (choreA && choreB) {
                setCustomCombinedTitle(`${choreA.row[1]} & ${choreB.row[1]}`);
              }
            }} className="w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500">{choreRows.map((cr, idx) => <option key={cr.index_} value={cr.index_}>#{idx + 1}{": "}{cr.row[1]}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Chore to Merge In & Remove:</label><select value={combineTargetB != null ? combineTargetB : ""} onChange={e => {
              const val = Number(e.target.value);
              setCombineTargetB(val);
              const choreA = choreRows.find(r => r.index_ === combineTargetA);
              const choreB = choreRows.find(r => r.index_ === val);
              if (choreA && choreB) {
                setCustomCombinedTitle(`${choreA.row[1]} & ${choreB.row[1]}`);
              }
            }} className="w-full text-xs p-2 rounded-lg border border-slate-300 font-medium text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500">{choreRows.map((cr, idx) => <option key={cr.index_} value={cr.index_} disabled={cr.index_ === combineTargetA}>#{idx + 1}{": "}{cr.row[1]}{" "}{cr.index_ === combineTargetA ? "(Cannot merge into itself)" : ""}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">New Combined Chore Title:</label><input type="text" value={customCombinedTitle} onChange={e => setCustomCombinedTitle(e.target.value)} placeholder="Enter name for the combined chore..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 font-medium" /></div><div className="bg-purple-50 border border-purple-200 rounded-lg p-2.5 text-purple-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-purple-600 mt-0.5" /><span>The combined chore replaces the primary item in the spreadsheet. All schedule completions and assignments from both chores will be safely preserved.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowCombineModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {
            if (combineTargetA !== null && combineTargetB !== null && combineTargetA !== combineTargetB) {
              handleCombineChores(combineTargetA, combineTargetB, customCombinedTitle);
            }
          }} disabled={combineTargetA === combineTargetB || !combineTargetA || !combineTargetB} className="px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40">Merge & Combine Chores</button></div></div></div>}{showAddMemberModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-indigo-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-indigo-200" /><h3 className="text-base font-bold">Add Household Member</h3></div><button onClick={() => setShowAddMemberModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-3.5 text-xs"><div><label className="block font-bold text-slate-700 mb-1">Full Name</label><input type="text" id="new-member-name" placeholder="e.g. Alex, Jordan..." autoFocus className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Role / Relationship</label><input type="text" id="new-member-role" placeholder="e.g. Family Member, Parent / Admin..." defaultValue="Family Member" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Residency Type</label><select id="new-member-residency" defaultValue="Full-Time" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="Full-Time">Full-Time (Regular weekly chore rotation)</option><option value="Bi-Weekly">Bi-Weekly (Alternating weeks Sun 5 PM – Sun 5 PM)</option><option value="Casual">Casual (Lesser scale rotation frequency)</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Schedule Details</label><input type="text" id="new-member-schedule" placeholder="e.g. Daily rotation & bedroom checklist..." defaultValue="Daily chore rotation & bedroom checklist" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 text-indigo-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span>Adding this member appends a new row to the Household Roster spreadsheet and immediately links them across all dashboard views.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAddMemberModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {
            const nameInput = document.getElementById("new-member-name");
            const roleInput = document.getElementById("new-member-role");
            const resInput = document.getElementById("new-member-residency");
            const schedInput = document.getElementById("new-member-schedule");
            if (nameInput && nameInput.value.trim()) {
              handleAddRosterMember(nameInput.value, roleInput ? roleInput.value : "", resInput ? resInput.value : "Full-Time", schedInput ? schedInput.value : "");
            }
          }} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition">Add to Household Roster</button></div></div></div>}{showAddPetModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-amber-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-xl">{"\u{1F43E}"}</span><h3 className="text-base font-bold">Add Pet Care Profile</h3></div><button onClick={() => setShowAddPetModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-3.5 text-xs"><div><label className="block font-bold text-slate-700 mb-1">{"Pet Name "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={newPetDraft.name} onChange={e => setNewPetDraft(prev => ({
              ...{
                ...prev
              },
              name: e.target.value
            }))} placeholder="e.g. Buster, Milo..." autoFocus className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Type / Breed</label><select value={newPetDraft.type} onChange={e => setNewPetDraft(prev => ({
              ...{
                ...prev
              },
              type: e.target.value
            }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white"><option value="Dog">{"Dog \u{1F415}"}</option><option value="Cat">{"Cat \u{1F408}"}</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Feeding Routine</label><input type="text" value={newPetDraft.routine} onChange={e => setNewPetDraft(prev => ({
              ...{
                ...prev
              },
              routine: e.target.value
            }))} placeholder="e.g. Morning & Evening, Twice daily..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Care Responsibilities</label><textarea rows={2} value={newPetDraft.care} onChange={e => setNewPetDraft(prev => ({
              ...{
                ...prev
              },
              care: e.target.value
            }))} placeholder="e.g. Feed breakfast & supper, outdoor routine, fresh water bowls..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug" /></div><div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" /><span>Adding this pet writes directly into the Pet Care Profiles section of the 'Household Hub' spreadsheet tab.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAddPetModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => handleAddRosterPet(newPetDraft.name, newPetDraft.type, newPetDraft.routine, newPetDraft.care)} disabled={!newPetDraft.name.trim()} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40">Save Pet to Household Hub</button></div></div></div>}{editingPrintableChore && <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs"><Pen className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Edit Chore Details</h3><p className="text-[11px] text-slate-400">Update chore name, cadence, rotation group, or notes</p></div></div><button onClick={() => setEditingPrintableChore(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs"><div><label className="block font-bold text-slate-800 mb-1">{"Chore Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={editingPrintableChore.task} onChange={e => setEditingPrintableChore(prev => ({
              ...{
                ...prev
              },
              task: e.target.value
            }))} placeholder="Chore task description..." className="w-full text-sm p-2.5 rounded-lg border border-slate-300 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Category</label><select value={editingPrintableChore.category || "Household"} onChange={e => setEditingPrintableChore(prev => ({
                ...{
                  ...prev
                },
                category: e.target.value
              }))} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500">{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon}{" "}{c.name}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={editingPrintableChore.frequency || "Daily"} onChange={e => {
                const val = e.target.value;
                setEditingPrintableChore(prev => ({
                  ...{
                    ...prev
                  },
                  frequency: val,
                  targetDay: val === "Daily" ? "Mon \u2013 Sun" : val === "Bi-Weekly" ? "Thursday Evening" : "Saturday"
                }));
              }} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Target Day</label><input type="text" value={editingPrintableChore.targetDay || "Mon \u2013 Sun"} onChange={e => setEditingPrintableChore(prev => ({
                ...{
                  ...prev
                },
                targetDay: e.target.value
              }))} placeholder="e.g. Mon \u2013 Sun, Saturday, Sunday, Thursday Evening..." className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500" /></div><div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editingPrintableChore.rotationGroup || "All Non-Casual"} onChange={e => setEditingPrintableChore(prev => ({
                ...{
                  ...prev
                },
                rotationGroup: e.target.value
              }))} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Each Child">Each Child (Own Space)</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div></div><div><label className="block font-bold text-slate-700 mb-1">Operational Notes / Routine</label><textarea rows={2} value={editingPrintableChore.notes || ""} onChange={e => setEditingPrintableChore(prev => ({
              ...{
                ...prev
              },
              notes: e.target.value
            }))} placeholder="Operational details, supplies, or instructions..." className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug" /></div><div className="pt-2 border-t border-slate-100 flex items-center justify-between"><div><div className="font-bold text-rose-900 text-xs">Delete this chore</div><div className="text-[10px] text-slate-500">Remove from Printable Weekly Schedule</div></div><button type="button" onClick={() => {
              handleDeletePrintableChore(editingPrintableChore.index_, editingPrintableChore.task);
            }} className="px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-200 rounded-lg flex items-center gap-1.5 transition"><Trash2 className="w-3.5 h-3.5" /><span>Delete Chore</span></button></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between"><span className="text-[11px] text-slate-400 font-medium">Real-time schedule update</span><div className="flex gap-2"><button type="button" onClick={() => setEditingPrintableChore(null)} className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition">Cancel</button><button type="button" onClick={() => {
              handleSavePrintableChoreEdit(editingPrintableChore.index_, {
                task: editingPrintableChore.task,
                oldTask: editingPrintableChore.originalTask || editingPrintableChore.task,
                category: editingPrintableChore.category,
                frequency: editingPrintableChore.frequency,
                targetDay: editingPrintableChore.targetDay,
                rotationGroup: editingPrintableChore.rotationGroup,
                notes: editingPrintableChore.notes,
                dayOfWeek: editingPrintableChore.dayOfWeek
              });
            }} disabled={!((_c = editingPrintableChore.task) == null ? void 0 : _c.trim())} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition disabled:opacity-40">Save Changes</button></div></div></div></div>}{deletingChoreTarget && <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-rose-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Trash2 className="w-5 h-5 text-rose-200" /><h3 className="text-base font-bold">Delete Chore</h3></div><button onClick={() => setDeletingChoreTarget(null)} className="p-1 rounded-lg text-rose-200 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 text-xs text-slate-700 space-y-3"><p>{"Are you sure you want to remove "}<strong className="text-slate-900 font-bold">{'"'}{deletingChoreTarget.task}{'"'}</strong>{" from the Printable Weekly Schedule?"}</p><div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-900 leading-relaxed">This will delete the chore and clear its scheduled assignments for this week. This update takes effect immediately.</div></div><div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 text-xs"><button type="button" onClick={() => setDeletingChoreTarget(null)} className="px-3 py-1.5 font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition">Cancel</button><button type="button" onClick={() => {
            handleDeletePrintableChore(deletingChoreTarget.index_, deletingChoreTarget.task);
          }} className="px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition">Delete Chore</button></div></div></div>}</div>
  );
}
var ErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
    window.parent.postMessage({
      type: "ERROR",
      payload: {
        error: error ? error.toString() : "Unknown rendering error"
      }
    }, "*");
  }
  render() {
    if (this.state.hasError) return <p>Something went wrong.</p>;
    return this.props.children;
  }
};

export default function AppWrapper() {
  const [sheetData, setSheetData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load sheetData from localStorage:', e);
    }
    return INITIAL_SHEET_DATA;
  });
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sheetData));
    } catch (e) {
      console.warn('Failed to persist sheetData to localStorage:', e);
    }
  }, [sheetData]);

  useEffect(() => {
    let readyIntervalId = null;
    const handleMessage = event => {
      const { type, payload } = event.data || {};
      if (type === "SYNC_DATA") {
        if (readyIntervalId) {
          clearInterval(readyIntervalId);
          readyIntervalId = null;
        }
        if (Array.isArray(payload) && payload.length > 0) {
          setSheetData(payload);
        }
        setIsReady(true);
      }
    };
    window.addEventListener("message", handleMessage);
    const sendReady = () => {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: "CHILD_READY",
          payload: {
            version: 3
          }
        }, "*");
      }
    };
    sendReady();
    let attempts = 0;
    readyIntervalId = setInterval(() => {
      attempts++;
      if (attempts >= 50) {
        clearInterval(readyIntervalId);
        readyIntervalId = null;
        return;
      }
      sendReady();
    }, 100);
    return () => {
      if (readyIntervalId) clearInterval(readyIntervalId);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const renderStart = performance.now();
    let innerRafId = null;
    const outerRafId = requestAnimationFrame(() => {
      innerRafId = requestAnimationFrame(() => {
        const renderDuration = performance.now() - renderStart;
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({
            type: "RENDER_COMPLETE",
            payload: {
              status: "success",
              renderDurationMs: renderDuration
            }
          }, "*");
        }
      });
    });
    return () => {
      cancelAnimationFrame(outerRafId);
      if (innerRafId) {
        cancelAnimationFrame(innerRafId);
      }
    };
  }, [sheetData, isReady]);

  const updateItem = (rangeIndex_, rowIndex_, rowArray) => {
    setSheetData(prev => {
      if (!Array.isArray(prev)) return prev;
      return prev.map((range, idx) => {
        const rIdx = range.index_ !== undefined ? range.index_ : idx;
        if (rIdx !== rangeIndex_) return range;
        const rows = Array.isArray(range.data) ? [...range.data] : [];
        const existingPos = rows.findIndex(r => r.index_ === rowIndex_);
        if (existingPos >= 0) {
          const oldRow = Array.isArray(rows[existingPos].row) ? [...rows[existingPos].row] : [];
          const maxLen = Math.max(oldRow.length, Array.isArray(rowArray) ? rowArray.length : 0);
          const mergedRow = new Array(maxLen).fill(null);
          for (let i = 0; i < maxLen; i++) {
            mergedRow[i] = (rowArray && rowArray[i] !== undefined) ? rowArray[i] : (oldRow[i] !== undefined ? oldRow[i] : null);
          }
          rows[existingPos] = { ...rows[existingPos], row: mergedRow };
        } else {
          const cleanRow = (rowArray || []).map(v => v === undefined ? null : v);
          rows.push({ index_: rowIndex_, row: cleanRow });
          rows.sort((a, b) => a.index_ - b.index_);
        }
        return { ...range, data: rows };
      });
    });

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "PATCH",
        payload: {
          rangeIndex_,
          rowIndex_,
          row: rowArray
        }
      }, "*");
    }
  };

  const deleteItem = (rangeIndex_, rowIndex_) => {
    setSheetData(prev => {
      if (!Array.isArray(prev)) return prev;
      return prev.map((range, idx) => {
        const rIdx = range.index_ !== undefined ? range.index_ : idx;
        if (rIdx !== rangeIndex_) return range;
        const rows = (range.data || []).filter(r => r.index_ !== rowIndex_);
        return { ...range, data: rows };
      });
    });

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "DELETE",
        payload: {
          rangeIndex_,
          rowIndex_
        }
      }, "*");
    }
  };

  const insertItem = (rangeIndex_, rowIndex_, rowArray) => {
    setSheetData(prev => {
      if (!Array.isArray(prev)) return prev;
      return prev.map((range, idx) => {
        const rIdx = range.index_ !== undefined ? range.index_ : idx;
        if (rIdx !== rangeIndex_) return range;
        const rows = Array.isArray(range.data) ? [...range.data] : [];
        const cleanRow = (rowArray || []).map(v => v === undefined ? null : v);
        if (rowIndex_ !== undefined && rowIndex_ !== null) {
          const shifted = rows.map(r => r.index_ >= rowIndex_ ? { ...r, index_: r.index_ + 1 } : r);
          shifted.push({ index_: rowIndex_, row: cleanRow });
          shifted.sort((a, b) => a.index_ - b.index_);
          return { ...range, data: shifted };
        } else {
          const maxIdx = rows.reduce((max, r) => Math.max(max, r.index_ || 0), 0);
          rows.push({ index_: maxIdx + 1, row: cleanRow });
          return { ...range, data: rows };
        }
      });
    });

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "INSERT",
        payload: {
          rangeIndex_,
          rowIndex_,
          row: rowArray
        }
      }, "*");
    }
  };

  const moveItem = (fromRangeIndex_, fromRowIndex_, toRangeIndex_, toRowIndex_) => {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "MOVE",
        payload: {
          fromRangeIndex_,
          fromRowIndex_,
          toRangeIndex_,
          toRowIndex_
        }
      }, "*");
    }
  };

  const followLink = url => {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "FOLLOW_LINK",
        payload: { url }
      }, "*");
    } else if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  if (!isReady) {
    return <div className="loading">Waiting for data...</div>;
  }

  return (
    <div id="app-container" className="h-full w-full">
      <ErrorBoundary>
        <App
          data={sheetData}
          updateItem={updateItem}
          deleteItem={deleteItem}
          insertItem={insertItem}
          moveItem={moveItem}
          followLink={followLink}
        />
      </ErrorBoundary>
    </div>
  );
}
