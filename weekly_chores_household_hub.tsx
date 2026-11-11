// @ts-nocheck
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Award,
  Calendar,
  CalendarDays,
  Check,
  ChevronDown,
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
  Settings,
  Settings2,
  Sparkles,
  Lock,
  Square,
  SquareCheckBig,
  Trash2,
  Trophy,
  Users,
  Smartphone,
  Cloud,
  Volume2,
  VolumeX,
  Download,
  ShieldCheck,
  Bell,
  DollarSign,
  X,
  Camera
} from 'lucide-react';
import {
  getStoredDeviceSession,
  saveDeviceSession,
  subscribeToRealtimeSync,
  broadcastLocalUpdate,
  syncChoreToFirestore,
  subscribeToFirestoreSchedule,
  getStoredFirebaseConfig,
  redeemKidInvite,
  playChoreCompletionSound,
  type DeviceSession
} from "./src/firebaseSync";
import { MinionDashboard } from "./src/MinionDashboard";
import { InviteModal } from "./src/InviteModal";
import { KidPairingScreen } from "./src/KidPairingScreen";
import { FirebaseSettingsModal } from "./src/FirebaseSettingsModal";
import { InstallPwaModal } from "./src/InstallPwaModal";
import { ParentInspectionModal } from "./src/ParentInspectionModal";
import { AllowanceLedgerModal } from "./src/AllowanceLedgerModal";
import { ParentNudgeModal } from "./src/ParentNudgeModal";
import { ParentRewardPayoutModal } from "./src/ParentRewardPayoutModal";
import { ParentMobileDashboard } from "./src/ParentMobileDashboard";
import { ParentPhotoReviewModal } from "./src/ParentPhotoReviewModal";
import { ParentPhotoInboxModal } from "./src/ParentPhotoInboxModal";
import {
  getPhotoProofForChore,
  getPendingPhotoProofsCount,
  hasPendingPhotoRequest,
  savePhotoRequest,
  saveChorePhotoProof,
  type ChorePhotoProof,
  type ChorePhotoRequest
} from "./src/chorePhotoTypes";
import { ThemeToggle } from "./src/ThemeToggle";
import { getEffectiveTheme, subscribeTheme } from "./src/themeManager";
import { HouseholdSettingsModal } from "./src/HouseholdSettingsModal";
import { HouseholdActivityDrawer } from "./src/HouseholdActivityDrawer";
import { ActivityToast } from "./src/ActivityToast";
import {
  type HouseholdActivityEvent,
  getStoredActivityLog,
  saveActivityEvent,
  clearActivityLog,
  playHouseholdRemoteChime
} from "./src/activityFeed";
import { isStandalone } from "./src/pwaManager";
import { getChoreCanonicalKey, normalizeTaskName } from "./src/choreUtils";
import {
  getChoreNudgeRule,
  saveChoreNudgeRule,
  formatTime24To12,
  QUICK_NUDGE_TIME_PRESETS,
  evaluateAndDispatchAutoNudges,
  type ChoreNudgeConfig
} from "./src/choreNudgeRules";
import {
  speakParentHouseholdSummary,
  stopSpeaking,
  isSpeaking,
  subscribeSpeechState,
  isSpeechSupported
} from "./src/voiceSpeech";
import { UserProfileModal } from "./src/UserProfileModal";
import { DatePickerDropdown } from "./src/DatePickerDropdown";
import {
  getUserProfile,
  saveUserProfile,
  calculateAge,
  getAgeTier,
  generateInitials,
  getDaysUntilBirthday,
  getStoredActiveParentAdmin,
  saveActiveParentAdmin,
  type UserProfile,
  type ProfileTierOverride
} from "./src/userProfiles";

const STORAGE_KEY = 'weekly_chores_canvas_sheet_data_v5';

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
          "Wash, Dry, Fold & Put Away (Each Minion Does Their Own)",
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
          "Pick Up Mess / laundry, Organize, Dust & Vacuum (Each Minion Does Their Own)",
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
          "Pick Up Mess; Dust Surfaces; Vacuum Floors & Litter Box Area",
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
          "Wash & Sanitize Bowls; Vacuum Feeding Mat",
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
        "index_": 15,
        "row": [
          "Curbside Recycling",
          "Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)",
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
          "Non-Casual",
          "Daily",
          "Mon – Sun",
          "Put away clean dishes, Load any dirty dishes",
          "Kitchen"
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
          "Non-Casual",
          "Bi-Weekly",
          "Thursday Evening",
          "Roll recycling bin to curb Thursday evening for Friday pickup (alternating weeks)",
          "Household"
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
          "Thursday Evening",
          "Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)",
          "Household"
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
          "Walk Dogs: Ellie & Lewis",
          "Non-Casual",
          "Daily",
          "Mon – Sun",
          "Walk Ellie & Lewis",
          "Pet Care"
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
        "index_": 34,
        "row": [
          null,
          null,
          null,
          null,
          false,
          null,
          "Empty Dishwasher",
          "Non-Casual",
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
var PRESET_MEMBER_COLORS: Record<string, {
  color: string;
  bg: string;
  text: string;
  darkBg: string;
  darkText: string;
  darkBorder: string;
}> = {
  "meghan": {
    color: "#8B5CF6",
    bg: "#EDE9FE",
    text: "#6D28D9",
    darkBg: "rgba(139, 92, 246, 0.22)",
    darkText: "#DDD6FE",
    darkBorder: "#8B5CF6"
  },
  "thom": {
    color: "#2563EB",
    bg: "#DBEAFE",
    text: "#1D4ED8",
    darkBg: "rgba(37, 99, 235, 0.22)",
    darkText: "#BFDBFE",
    darkBorder: "#3B82F6"
  },
  "sydney": {
    color: "#0D9488",
    bg: "#CCFBF1",
    text: "#0F766E",
    darkBg: "rgba(13, 148, 136, 0.22)",
    darkText: "#99F6E4",
    darkBorder: "#14B8A6"
  },
  "cadence": {
    color: "#EC4899",
    bg: "#FCE7F3",
    text: "#BE185D",
    darkBg: "rgba(236, 72, 153, 0.22)",
    darkText: "#FBCFE8",
    darkBorder: "#F472B6"
  },
  "mason": {
    color: "#EA580C",
    bg: "#FFEDD5",
    text: "#C2410C",
    darkBg: "rgba(234, 88, 12, 0.22)",
    darkText: "#FED7AA",
    darkBorder: "#FB923C"
  },
  "koda": {
    color: "#0284C7",
    bg: "#E0F2FE",
    text: "#0369A1",
    darkBg: "rgba(2, 132, 199, 0.22)",
    darkText: "#BAE6FD",
    darkBorder: "#38BDF8"
  },
  "keyanna": {
    color: "#D97706",
    bg: "#FEF3C7",
    text: "#B45309",
    darkBg: "rgba(217, 119, 6, 0.22)",
    darkText: "#FDE68A",
    darkBorder: "#FBBF24"
  }
};
var PRESET_PET_COLORS: Record<string, {
  color: string;
  bg: string;
  text: string;
  border: string;
  darkBg: string;
  darkText: string;
  darkBorder: string;
}> = {
  "ellie": {
    color: "#E11D48",
    bg: "#FFE4E6",
    text: "#BE123C",
    border: "#FECDD3",
    darkBg: "rgba(225, 29, 72, 0.22)",
    darkText: "#FECDD3",
    darkBorder: "#FB7185"
  },
  "lewis": {
    color: "#059669",
    bg: "#D1FAE5",
    text: "#047857",
    border: "#A7F3D0",
    darkBg: "rgba(5, 150, 105, 0.22)",
    darkText: "#A7F3D0",
    darkBorder: "#34D399"
  },
  "casey": {
    color: "#7C3AED",
    bg: "#EDE9FE",
    text: "#6D28D9",
    border: "#DDD6FE",
    darkBg: "rgba(124, 58, 237, 0.22)",
    darkText: "#DDD6FE",
    darkBorder: "#A78BFA"
  },
  "gigi": {
    color: "#DB2777",
    bg: "#FCE7F3",
    text: "#BE185D",
    border: "#FBCFE8",
    darkBg: "rgba(219, 39, 119, 0.22)",
    darkText: "#FBCFE8",
    darkBorder: "#F472B6"
  },
  "sloane": {
    color: "#0284C7",
    bg: "#E0F2FE",
    text: "#0369A1",
    border: "#BAE6FD",
    darkBg: "rgba(2, 132, 199, 0.22)",
    darkText: "#BAE6FD",
    darkBorder: "#38BDF8"
  },
  "sloan": {
    color: "#0284C7",
    bg: "#E0F2FE",
    text: "#0369A1",
    border: "#BAE6FD",
    darkBg: "rgba(2, 132, 199, 0.22)",
    darkText: "#BAE6FD",
    darkBorder: "#38BDF8"
  },
  "scoob": {
    color: "#EA580C",
    bg: "#FFEDD5",
    text: "#C2410C",
    border: "#FED7AA",
    darkBg: "rgba(234, 88, 12, 0.22)",
    darkText: "#FED7AA",
    darkBorder: "#FB923C"
  }
};

function getMemberBadgeStyle(member: any, isDark: boolean): React.CSSProperties {
  if (!member) return {};
  const nameKey = String(member.name || member.id || "").toLowerCase();
  const preset = PRESET_MEMBER_COLORS[nameKey];
  if (isDark) {
    return {
      backgroundColor: member.darkBg || preset?.darkBg || (member.color ? `${member.color}2e` : "rgba(30, 41, 59, 0.8)"),
      color: member.darkText || preset?.darkText || "#F1F5F9",
      borderColor: member.darkBorder || preset?.darkBorder || member.color || "#475569"
    };
  }
  return {
    backgroundColor: member.bg || preset?.bg || "#F1F5F9",
    color: member.text || preset?.text || "#334155",
    borderColor: member.type === "biweekly" ? "#F8B4BD" : member.type === "casual" ? "#A6D2ED" : (preset?.color || member.color || "#CBD5E1")
  };
}

function getPetBadgeStyle(pet: any, isDark: boolean): React.CSSProperties {
  if (!pet) return {};
  const nameKey = String(pet.name || "").toLowerCase();
  const preset = PRESET_PET_COLORS[nameKey];
  if (isDark) {
    return {
      backgroundColor: pet.darkBg || preset?.darkBg || (pet.color ? `${pet.color}2e` : "rgba(30, 41, 59, 0.8)"),
      color: pet.darkText || preset?.darkText || "#F1F5F9",
      borderColor: pet.darkBorder || preset?.darkBorder || pet.border || pet.color || "#475569"
    };
  }
  return {
    backgroundColor: pet.bg || preset?.bg || "#F1F5F9",
    color: pet.text || preset?.text || "#334155",
    borderColor: pet.border || preset?.border || "#CBD5E1"
  };
}
// normalizeTaskName and getChoreCanonicalKey are imported from ./src/choreUtils
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
  if (isKidsChecklistChore(title) || isSignOffChore(title)) return false;
  if (isCleanBasementChore(title) || isHerdFeedingStationChore(title)) return true;
  const lower = String(title || "").toLowerCase();
  if (lower.includes("curbside") || lower.includes("recycling") || lower.includes("waste")) return true;
  if (choreFreq && (choreFreq.frequency === "weekly" || choreFreq.frequency === "biweekly")) {
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
  const targetUtc = Date.UTC(year, month, day);
  const anchorUtc = Date.UTC(2026, 9, 18);
  const diffDays = Math.round((targetUtc - anchorUtc) / (1e3 * 60 * 60 * 24));
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
  category: "Household",
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
  if (lower.includes("tidy bedroom") || lower.includes("personal spaces") || lower.includes("basement") || lower.includes("laundry")) {
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
  if (str.includes("/")) {
    const parts = str.split("/").map(Number);
    if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
      if (parts[0] > 1000) {
        // YYYY/MM/DD
        return { year: parts[0], month: parts[1] - 1, day: parts[2] };
      } else {
        // MM/DD/YYYY
        const y = parts[2] < 100 ? 2000 + parts[2] : parts[2];
        return { year: y, month: parts[0] - 1, day: parts[1] };
      }
    }
  }
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
function getCurrentWeekMonday() {
  const now = new Date();
  const mon = getMondayOfDate(now.getFullYear(), now.getMonth(), now.getDate());
  return {
    ...mon,
    todayYear: now.getFullYear(),
    todayMonth: now.getMonth(),
    todayDay: now.getDate(),
    dateKey: formatDateKey(mon.year, mon.month, mon.day)
  };
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
  const weekNum = Math.floor(parsedStart.day / 7);

  const areKidsInResidenceThisWeek = isBiWeeklyInResidenceForWeek(weekDays);
  const availableKidsThisWeek = areKidsInResidenceThisWeek ? allKids : fullTimeKids;
  const availableWorkersThisWeek = areKidsInResidenceThisWeek ? allNonCasual : fullTimeRoster;

  const basementWorker = availableKidsThisWeek[(weekNum + 1) % availableKidsThisWeek.length];
  const deepCleanWorker = availableWorkersThisWeek[(weekNum + 2) % availableWorkersThisWeek.length];
  const recyclingWorker = availableWorkersThisWeek[(weekNum + 3) % availableWorkersThisWeek.length];
  const wasteWorker = availableWorkersThisWeek[(weekNum + 4) % availableWorkersThisWeek.length];

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
      const isBasement = tLower.includes("basement");

      if (isDeepClean) {
        isScheduled = dayIdx === 6;
      } else if (isRecycling) {
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);
      } else if (isWaste) {
        isScheduled = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);
      } else if (isBasement) {
        isScheduled = dayIdx === 5;
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
      } else if (isKidsChecklistChore(taskTitle)) {
        // Tidy Bedrooms and Laundry Tasks are individual minion checklists: DO NOT auto-assign to a single person!
        assignedWho = "";
      } else if (dayIdx === 6 && tLower.includes("supper")) {
        assignedWho = getSundaySupperAssignee(dayObj.year, dayObj.month, dayObj.day, parents);
      } else if (tLower.includes("sign-off") || tLower.includes("inspection")) {
        assignedWho = parents[dayIdx % parents.length];
      } else if (isBasement) {
        assignedWho = basementWorker;
      } else if (isDeepClean) {
        assignedWho = deepCleanWorker;
      } else if (isRecycling) {
        assignedWho = recyclingWorker;
      } else if (isWaste) {
        assignedWho = wasteWorker;
      } else {
        const groupLower = String(cr.rotationGroup || "").toLowerCase();
        if (groupLower.includes("parent") && !groupLower.includes("kid") && !groupLower.includes("non-casual") && !groupLower.includes("all")) {
          assignedWho = parents[(dayStartOffset + dailyCounter) % parents.length];
        } else if (groupLower.includes("kid")) {
          assignedWho = kids[(dayStartOffset + dailyCounter) % kids.length];
        } else if (groupLower === "sydney" || groupLower === "cadence" || groupLower === "mason") {
          if (groupLower === "sydney") {
            assignedWho = "Sydney";
          } else if (areKidsInResidence) {
            assignedWho = groupLower === "cadence" ? "Cadence" : "Mason";
          } else {
            assignedWho = kids[(dayStartOffset + dailyCounter) % kids.length];
          }
        } else {
          assignedWho = dailyRotation[(dayStartOffset + dailyCounter) % dailyRotation.length];
        }
        dailyCounter++;
      }

      // Strict safeguard: ensure Cadence or Mason can NEVER be assigned when not in residence on this date
      if (!areKidsInResidence && (assignedWho === "Cadence" || assignedWho === "Mason")) {
        assignedWho = kids[0] || "Sydney";
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
        const cKey = getChoreCanonicalKey(taskTitle);
        if (cKey) {
          scheduleMap[dKey][cKey] = entry;
        }
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
      let cellWho = isPlaceholderOrDesc ? "" : rawCellWho.replace(/^Who:\s*/i, "").trim();
      if (cellWho === "Cadence" || cellWho === "Mason") {
        const bw = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);
        if (!bw.isFullStay && !bw.isDepartureDay) {
          cellWho = "";
        }
      }
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
  const [deviceSession, setDeviceSession] = useState(() => getStoredDeviceSession());
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showPairingScreen, setShowPairingScreen] = useState(false);
  const [showFirebaseModal, setShowFirebaseModal] = useState(false);
  const [showPwaModal, setShowPwaModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [showAllowanceLedger, setShowAllowanceLedger] = useState(false);
  const [showNudgeModal, setShowNudgeModal] = useState(false);
  const [nudgeModalTarget, setNudgeModalTarget] = useState<{ kid?: string; type?: "praise" | "nudge" } | null>(null);
  const [showRewardPayoutModal, setShowRewardPayoutModal] = useState(false);
  const [rewardPayoutKid, setRewardPayoutKid] = useState<string>("Sydney");
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showPhotoInboxModal, setShowPhotoInboxModal] = useState(false);
  const [selectedReviewProof, setSelectedReviewProof] = useState<ChorePhotoProof | null>(null);
  const [photoRequestsVersion, setPhotoRequestsVersion] = useState(0);
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [profileModalTarget, setProfileModalTarget] = useState<string | null>(null);
  const [profilesVersion, setProfilesVersion] = useState(0);
  const [activeParentAdmin, setActiveParentAdmin] = useState<"Thom" | "Meghan">(() => getStoredActiveParentAdmin());
  const [lastInspectedKid, setLastInspectedKid] = useState<string | null>(null);
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(() => getEffectiveTheme());

  useEffect(() => {
    setEffectiveTheme(getEffectiveTheme());
    return subscribeTheme((eff) => {
      setEffectiveTheme(eff);
    });
  }, []);
  const isDark = effectiveTheme === "dark";

  useEffect(() => {
    const handleProfileSync = () => {
      setProfilesVersion(v => v + 1);
    };
    const handleAdminSync = (e: any) => {
      if (e?.detail === "Thom" || e?.detail === "Meghan") {
        setActiveParentAdmin(e.detail);
      } else {
        setActiveParentAdmin(getStoredActiveParentAdmin());
      }
    };
    window.addEventListener("household_profile_updated", handleProfileSync);
    window.addEventListener("household_active_admin_updated", handleAdminSync);
    window.addEventListener("storage", handleProfileSync);
    return () => {
      window.removeEventListener("household_profile_updated", handleProfileSync);
      window.removeEventListener("household_active_admin_updated", handleAdminSync);
      window.removeEventListener("storage", handleProfileSync);
    };
  }, []);

  const handleSwitchActiveAdmin = (admin: "Thom" | "Meghan") => {
    setActiveParentAdmin(admin);
    saveActiveParentAdmin(admin);
    setNotice(`Switched active admin hub to ${admin}! 👑`);
    setTimeout(() => setNotice(null), 3000);
  };

  const handleOpenParentPage = (parentName: string) => {
    const cleanParent: "Thom" | "Meghan" = parentName.toLowerCase().includes("meghan") ? "Meghan" : "Thom";
    setActiveParentAdmin(cleanParent);
    saveActiveParentAdmin(cleanParent);
    const adminSession: DeviceSession = {
      role: "admin",
      parentName: cleanParent,
      householdId: deviceSession.householdId || "household_family_hub",
      deviceId: deviceSession.deviceId || "local_dev",
      parentPin: "1234"
    };
    saveDeviceSession(adminSession);
    setDeviceSession(adminSession);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete("kid");
      url.searchParams.set("parent", cleanParent);
      window.history.replaceState({}, document.title, url.toString());
    } catch {}
    setNotice(`Opened ${cleanParent}'s Admin Hub page! 👑`);
    setTimeout(() => setNotice(null), 3000);
  };

  const handleOpenKidPage = (kidName: string) => {
    setLastInspectedKid(kidName);
    const parentAdmin = activeParentAdmin || deviceSession.parentName || "Thom";
    const kidSession: DeviceSession = {
      role: "kid",
      kidName,
      householdId: deviceSession.householdId || "household_family_hub",
      deviceId: deviceSession.deviceId || "local_dev",
      parentPin: deviceSession.parentPin || "1234",
      viewingAsParent: parentAdmin
    };
    saveDeviceSession(kidSession);
    setDeviceSession(kidSession);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete("parent");
      url.searchParams.set("kid", kidName);
      url.searchParams.set("fromParent", parentAdmin);
      window.history.replaceState({}, document.title, url.toString());
    } catch {}
    setNotice(`Viewing ${kidName}'s Minion page as ${parentAdmin}! 🎒`);
    setTimeout(() => setNotice(null), 3000);
  };

  // Parent View Mode Preference: "mobile" vs "table" (stored in localStorage)
  const [parentViewPreference, setParentViewPreference] = useState<"mobile" | "table">(() => {
    try {
      const saved = localStorage.getItem("parent_view_mode_preference");
      if (saved === "table" || saved === "mobile") return saved;
      if (typeof window !== "undefined" && (window.innerWidth < 768 || isStandalone())) {
        return "mobile";
      }
      return "table";
    } catch {
      return "table";
    }
  });

  const toggleParentViewMode = () => {
    setParentViewPreference(prev => {
      const next = prev === "mobile" ? "table" : "mobile";
      try {
        localStorage.setItem("parent_view_mode_preference", next);
      } catch {}
      return next;
    });
  };

  // Real-Time Household Activity State & Logging
  const [activities, setActivities] = useState(() => getStoredActivityLog());
  const [showActivityDrawer, setShowActivityDrawer] = useState(false);
  const [activeToastEvent, setActiveToastEvent] = useState(null);

  const logHouseholdActivity = useCallback((event) => {
    const fullEvent = {
      ...event,
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      deviceId: (deviceSession == null ? void 0 : deviceSession.deviceId) || "local_dev"
    };
    const updated = saveActivityEvent(fullEvent);
    setActivities(updated);
    broadcastLocalUpdate({
      type: "ACTIVITY_LOGGED",
      event: fullEvent
    });
  }, [deviceSession]);

  useEffect(() => {
    return subscribeSpeechState(speaking => setIsSpeakingAudio(speaking));
  }, []);

  // Handle URL query parameters for instant pairing or kid switching: ?join=CODE, ?kid=NAME, ?mode=parent
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const joinCode = params.get("join") || params.get("code") || params.get("invite");
    const kidParam = params.get("kid") || params.get("minion");
    const modeParam = params.get("mode");

    if (joinCode) {
      const cur = getStoredDeviceSession();
      redeemKidInvite(joinCode.toUpperCase().trim(), cur.deviceId).then(res => {
        if (res.success && res.invite) {
          const newSession: DeviceSession = {
            role: "kid",
            householdId: res.invite.householdId,
            kidName: res.invite.kidName,
            deviceId: cur.deviceId,
            parentPin: "1234"
          };
          saveDeviceSession(newSession);
          setDeviceSession(newSession);
          setShowPairingScreen(false);
          setNotice(`🎉 Connected to ${res.invite.kidName}'s Minion Mode!`);
          setTimeout(() => setNotice(null), 4000);
        } else if (kidParam) {
          // Graceful fallback: activate Minion mode for this kid directly
          const newSession: DeviceSession = {
            role: "kid",
            householdId: cur.householdId || "household_family_hub",
            kidName: kidParam,
            deviceId: cur.deviceId,
            parentPin: "1234"
          };
          saveDeviceSession(newSession);
          setDeviceSession(newSession);
          setShowPairingScreen(false);
          setNotice(`🎉 Connected to ${kidParam}'s Minion Mode!`);
          setTimeout(() => setNotice(null), 4000);
        }
      });
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    } else if (params.get("parent") || params.get("admin") || (modeParam === "parent" && params.get("user"))) {
      const pParam = params.get("parent") || params.get("admin") || params.get("user") || "";
      const cleanParent: "Thom" | "Meghan" = pParam.toLowerCase().includes("meghan") ? "Meghan" : "Thom";
      setActiveParentAdmin(cleanParent);
      saveActiveParentAdmin(cleanParent);
      const cur = getStoredDeviceSession();
      const newSession: DeviceSession = {
        role: "admin",
        parentName: cleanParent,
        householdId: cur.householdId || "household_family_hub",
        deviceId: cur.deviceId,
        parentPin: "1234"
      };
      saveDeviceSession(newSession);
      setDeviceSession(newSession);
      setShowPairingScreen(false);
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("kid");
        url.searchParams.set("parent", cleanParent);
        window.history.replaceState({}, document.title, url.toString());
      } catch {}
    } else if (kidParam) {
      const cur = getStoredDeviceSession();
      const fromParent = (params.get("fromParent") || params.get("parentOrigin") || "") as "Thom" | "Meghan" | "";
      const validFromParent: "Thom" | "Meghan" | undefined =
        fromParent === "Thom" || fromParent === "Meghan" ? fromParent : cur.viewingAsParent;
      const newSession: DeviceSession = {
        role: "kid",
        householdId: cur.householdId || "household_family_hub",
        kidName: kidParam,
        deviceId: cur.deviceId,
        parentPin: "1234",
        viewingAsParent: validFromParent
      };
      saveDeviceSession(newSession);
      setDeviceSession(newSession);
      setShowPairingScreen(false);
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("parent");
        url.searchParams.set("kid", kidParam);
        if (validFromParent) {
          url.searchParams.set("fromParent", validFromParent);
        }
        window.history.replaceState({}, document.title, url.toString());
      } catch {}
    } else if (modeParam === "parent" || modeParam === "admin") {
      const cur = getStoredDeviceSession();
      const activeAdmin: "Thom" | "Meghan" = cur.parentName || getStoredActiveParentAdmin() || "Thom";
      setActiveParentAdmin(activeAdmin);
      const newSession: DeviceSession = {
        role: "admin",
        parentName: activeAdmin,
        householdId: cur.householdId || "household_family_hub",
        deviceId: cur.deviceId,
        parentPin: "1234"
      };
      saveDeviceSession(newSession);
      setDeviceSession(newSession);
      setShowPairingScreen(false);
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("kid");
        url.searchParams.set("parent", activeAdmin);
        window.history.replaceState({}, document.title, url.toString());
      } catch {}
    }
  }, []);

  // Real-time Firestore Cloud subscription across physically separate devices
  useEffect(() => {
    const householdId = (deviceSession == null ? void 0 : deviceSession.householdId) || "household_family_hub";
    const unsubFirestore = subscribeToFirestoreSchedule(householdId, (dateKey, remoteChores) => {
      if (!remoteChores) return;
      setMonthSchedule(prev => {
        const currentDay = prev[dateKey] || {};
        const nextDay = { ...currentDay };
        Object.keys(remoteChores).forEach(cIdx => {
          if (cIdx !== "lastUpdated") {
            nextDay[cIdx] = { ...(currentDay[cIdx] || {}), ...remoteChores[cIdx] };
          }
        });
        return {
          ...prev,
          [dateKey]: nextDay
        };
      });
    });

    return () => {
      if (unsubFirestore) unsubFirestore();
    };
  }, [deviceSession == null ? void 0 : deviceSession.householdId]);

  useEffect(() => {
    const unsub = subscribeToRealtimeSync((msg: any) => {
      if (!msg) return;
      if (msg.type === "ACTIVITY_LOGGED" && msg.event) {
        setActivities(prev => {
          const updated = [msg.event, ...prev.filter(e => e.id !== msg.event.id)].slice(0, 100);
          try {
            localStorage.setItem("weekly_chores_activity_log_v1", JSON.stringify(updated));
          } catch {}
          return updated;
        });

        // If the event came from another device and is a completion or signoff, play remote chime and display toast!
        const myDeviceId = (deviceSession == null ? void 0 : deviceSession.deviceId) || "local_dev";
        if (msg.event.deviceId !== myDeviceId && msg.event.action !== "uncompleted") {
          playHouseholdRemoteChime();
          setActiveToastEvent(msg.event);
        }
        return;
      }
      if (msg.type === "INCENTIVE_UPDATED") {
        if (msg.monthlyIncentive) {
          setMonthlyIncentive(msg.monthlyIncentive);
          try { localStorage.setItem("weekly_chores_monthly_incentive", msg.monthlyIncentive); } catch {}
        }
        if (msg.monthlyGoalTarget) {
          setMonthlyGoalTarget(msg.monthlyGoalTarget);
          try { localStorage.setItem("weekly_chores_monthly_target", String(msg.monthlyGoalTarget)); } catch {}
        }
        return;
      }
      if (msg.type === "CHORE_UPDATED") {
        const cKey = msg.canonicalKey || (msg.taskTitle ? getChoreCanonicalKey(msg.taskTitle) : "");
        const norm = msg.normKey || (msg.taskTitle ? normalizeTaskName(msg.taskTitle) : "");
        setMonthSchedule(prev => {
          const currentDay = prev[msg.dateKey] || {};
          const currentChore = (cKey ? currentDay[cKey] : null) ||
            currentDay[msg.choreIndex] ||
            (msg.originalIndex !== undefined ? currentDay[msg.originalIndex] : null) ||
            (norm ? currentDay[norm] : null) || { who: "", done: false };
          const updated = { ...currentChore, ...msg.patch };
          const nextDay = {
            ...currentDay,
            [msg.choreIndex]: updated
          };
          if (msg.originalIndex !== undefined) {
            nextDay[msg.originalIndex] = updated;
          }
          if (msg.taskTitle) {
            nextDay[msg.taskTitle] = updated;
            nextDay[msg.taskTitle.toLowerCase()] = updated;
            nextDay[msg.taskTitle.toLowerCase().trim()] = updated;
          }
          if (cKey) nextDay[cKey] = updated;
          if (norm) nextDay[norm] = updated;
          return {
            ...prev,
            [msg.dateKey]: nextDay
          };
        });

        // Update choreEdits so printable table matrix updates immediately
        if (msg.choreIndex !== undefined && msg.dateKey) {
          const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr);
          const parsedTarget = parseDateKey(msg.dateKey);
          if (parsedStart && parsedTarget) {
            const startDay = new Date(parsedStart.year, parsedStart.month, parsedStart.day, 12, 0, 0);
            const targetDay = new Date(parsedTarget.year, parsedTarget.month, parsedTarget.day, 12, 0, 0);
            const diffDays = Math.round((targetDay.getTime() - startDay.getTime()) / (1e3 * 60 * 60 * 24));
            if (diffDays >= 0 && diffDays < 7) {
              const whoCol = 1 + diffDays * 2;
              const doneCol = 2 + diffDays * 2;
              setChoreEdits(prev => {
                const cur = prev[msg.choreIndex] || (cKey ? prev[cKey] : null) || {};
                const pRow = findPrintableRow(msg.taskTitle, msg.choreIndex);
                const existingRow = [...(cur.row || (pRow == null ? void 0 : pRow.row) || new Array(15).fill(""))];
                if ("who" in msg.patch) existingRow[whoCol] = msg.patch.who;
                if ("done" in msg.patch) existingRow[doneCol] = msg.patch.done;
                const updatedObj = {
                  ...cur,
                  row: existingRow,
                  ...msg.patch
                };
                const nextEdits = {
                  ...prev,
                  [msg.choreIndex]: updatedObj
                };
                if (cKey) nextEdits[cKey] = updatedObj;
                if (msg.taskTitle) nextEdits[msg.taskTitle.toLowerCase().trim()] = updatedObj;
                return nextEdits;
              });

              // Keep printableSheet in sync with incoming broadcasts so extracted sheet data stays accurate
              const pRow = findPrintableRow(msg.taskTitle, msg.choreIndex);
              if (printableRangeIndex >= 0 && pRow) {
                const updateArray = new Array(15).fill(void 0);
                if ("who" in msg.patch) updateArray[whoCol] = msg.patch.who;
                if ("done" in msg.patch) updateArray[doneCol] = msg.patch.done;
                updateItem(printableRangeIndex, pRow.index_, updateArray);
              }
            }
          }
        }
      } else if (msg.type === "SINGLE_WEEKLY_CHORE_UPDATED") {
        setMonthSchedule(prev => {
          const next = { ...prev };
          (msg.activeWeekDays || []).forEach((dKey: string) => {
            const curDay = next[dKey] || {};
            const curChore = curDay[msg.choreIndex] || { who: "", done: false };
            const updated = { ...curChore, ...msg.patch };
            next[dKey] = {
              ...curDay,
              [msg.choreIndex]: updated
            };
            if (msg.taskTitle) {
              next[dKey][msg.taskTitle] = updated;
              next[dKey][msg.taskTitle.toLowerCase()] = updated;
              next[dKey][msg.taskTitle.toLowerCase().trim()] = updated;
            }
          });
          return next;
        });
      } else if (msg.type === "WEEKLY_KID_CHORE_UPDATED") {
        const cKey = msg.taskTitle ? getChoreCanonicalKey(msg.taskTitle) : "";
        const norm = msg.taskTitle ? normalizeTaskName(msg.taskTitle) : "";
        setMonthSchedule(prev => {
          const next = { ...prev };
          (msg.activeWeekDays || []).forEach((dKey: string) => {
            const curDay = next[dKey] || {};
            const curChore = curDay[msg.choreIndex] || (cKey ? curDay[cKey] : null) || { who: "", done: false, kidsDone: {} };
            const updated = {
              ...curChore,
              who: msg.whoLabel,
              done: msg.anyDone,
              kidsDone: msg.updatedKids
            };
            next[dKey] = {
              ...curDay,
              [msg.choreIndex]: updated
            };
            if (cKey === "tidy_bedrooms") {
              next[dKey][10] = updated;
              next[dKey][12] = updated;
            } else if (cKey === "laundry") {
              next[dKey][11] = updated;
            }
            if (msg.taskTitle) {
              next[dKey][msg.taskTitle] = updated;
              next[dKey][msg.taskTitle.toLowerCase()] = updated;
              next[dKey][msg.taskTitle.toLowerCase().trim()] = updated;
            }
            if (cKey) next[dKey][cKey] = updated;
            if (norm) next[dKey][norm] = updated;
          });
          return next;
        });
      } else if (msg.type === "KID_UNPAIRED") {
        setDeviceSession((prev: any) => {
          if (prev.role === "kid" && prev.kidName?.toLowerCase() === msg.kidName?.toLowerCase()) {
            return { role: "admin", householdId: prev.householdId || "household_family_hub", deviceId: prev.deviceId, parentPin: "1234" };
          }
          return prev;
        });
      } else if (msg.type === "ALL_DEVICES_RESET") {
        setDeviceSession((prev: any) => ({ role: "admin", householdId: "household_family_hub", deviceId: prev.deviceId, parentPin: "1234" }));
      } else if (msg.type === "PHOTO_REQUESTED") {
        if (msg.request) savePhotoRequest(msg.request);
        setPhotoRequestsVersion(v => v + 1);
      } else if (msg.type === "PHOTO_PROOF_SUBMITTED") {
        if (msg.proof) {
          saveChorePhotoProof(msg.proof);
          setNotice(`📸 ${msg.proof.kidName} submitted photo proof for "${msg.proof.taskTitle}"!`);
          setTimeout(() => setNotice(null), 4000);
          playHouseholdRemoteChime();
        }
        setPhotoRequestsVersion(v => v + 1);
      } else if (msg.type === "PHOTO_PROOF_VERIFIED") {
        if (msg.proof) saveChorePhotoProof(msg.proof);
        setPhotoRequestsVersion(v => v + 1);
      }
    });
    return unsub;
  }, []);
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
    if (!taskTitle && fallbackIndex !== void 0 && fallbackIndex !== null) {
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
    if (!taskTitle && fallbackIndex !== void 0 && fallbackIndex !== null) {
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
      if (!r.row || r.index_ < 14 || r.index_ > 17) return;
      const col0 = String(r.row[0] || "").trim();
      if (!col0 || col0.toLowerCase() === "type" || col0.toLowerCase().includes("occupancy") || col0.toLowerCase().includes("special rotation")) return;
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
  const familyMembers = useMemo(() => {
    const rRows = rosterSheet.data || [];
    const memberRows = rRows.filter(r => {
      const isAddedMemberRow = Boolean(r.row && r.row[5] === "MEMBER_ROW");
      if (!isAddedMemberRow && (r.index_ < 4 || r.index_ > 12)) return false;
      if (!r.row || !r.row[0]) return false;
      const rawName = String(r.row[0]).trim();
      if (!rawName) return false;
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
  const hubSpecialGroups = useMemo(() => {
    const groupNames = ["All", "Kids", "Parents", "Non-Casual"];
    return groupNames.map(groupName => {
      const matchedMembers = familyMembers
        .filter(m => {
          const parsed = String(m.specialGroups || "")
            .split(",")
            .map(s => s.trim().toLowerCase())
            .filter(Boolean);
          return parsed.includes(groupName.toLowerCase());
        })
        .map(m => m.name);
      return {
        name: groupName,
        members: matchedMembers.length > 0 ? matchedMembers.join(", ") : "None",
        active: true
      };
    });
  }, [familyMembers]);
  const kidsList = useMemo(() => {
    return familyMembers.filter(m => {
      if (m.active === false) return false;
      const roleLower = String(m.role || "").toLowerCase();
      return !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("overlord") && !roleLower.includes("admin") && !roleLower.includes("mom") && !roleLower.includes("dad");
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
        if (r.row[5] === "MEMBER_ROW") return false;
        const name = String(r.row[0]).trim();
        const lower = name.toLowerCase();
        return lower !== "pet name" && !lower.includes("profile");
      });
      return petRows.map((r, i) => {
        const rawName = String(r.row[0]).trim();
        const rawType = String(r.row[1] || "").trim();
        const rawRoutine = String(r.row[2] || "").trim();
        const rawCare = String(r.row[3] || "").trim();
        const isActive = r.row[4] !== false && String(r.row[4]).toLowerCase() !== "false";
        const defaultIsDog = ["ellie", "lewis"].includes(rawName.toLowerCase());
        const type = rawType || (defaultIsDog ? "Dog" : "Cat");
        const typeLower = type.toLowerCase();
        const isDog = typeLower.includes("dog");
        const icon = isDog ? "\u{1F415}" : typeLower.includes("cat") ? "\u{1F408}" : typeLower.includes("bird") ? "\u{1F426}" : typeLower.includes("fish") ? "\u{1F41F}" : "\u{1F43E}";
        const routine = rawRoutine || "Morning & Evening";
        const isPersonName = ["meghan", "thom", "sydney"].includes(rawCare.toLowerCase());
        const care = !rawCare || isPersonName ? isDog ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water" : rawCare;
        const palette = PRESET_PET_COLORS[rawName.toLowerCase()] || MEMBER_COLOR_PALETTES[i % MEMBER_COLOR_PALETTES.length];
        return {
          name: rawName,
          type,
          routine,
          care,
          active: isActive,
          icon,
          color: palette.color,
          bg: palette.bg,
          text: palette.text,
          border: palette.border || palette.color,
          index_: r.index_
        };
      });
    }
    return HOUSE_PETS.map((p, idx) => {
      const palette = PRESET_PET_COLORS[p.name.toLowerCase()] || MEMBER_COLOR_PALETTES[idx % MEMBER_COLOR_PALETTES.length];
      return {
        name: p.name,
        type: p.kind,
        routine: "Morning & Evening",
        care: p.kind === "Dog" ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water",
        active: true,
        icon: p.icon,
        color: palette.color,
        bg: palette.bg,
        text: palette.text,
        border: palette.border || palette.color,
        index_: 15 + idx
      };
    });
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
      if (tLower === "chore" || tLower === "parameter" || tLower.includes("schedule configuration") || tLower.includes("active week") || tLower.includes("waste / recycling") || tLower.includes("custody schedule") || tLower.includes("pet care profile") || tLower.includes("special rotation") || tLower.includes("occupancy categories") || tLower.includes("household member") || isSignOffChore(taskVal) || cKey === "weekly_sign_off") {
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
      const rawGroup = isCol7Category ? col10 || "Non-Casual" : col7 || "Non-Casual";
      const normalizeRotationGroup = (grp: string) => {
        const gLow = String(grp || "").trim().toLowerCase();
        if (!gLow || gLow === "all non-casual" || gLow === "non-casual" || gLow === "parents & kids" || gLow === "full-time roster") return "Non-Casual";
        if (gLow === "kids" || gLow === "kids rotation" || gLow === "all kids") return "Kids";
        if (gLow === "parents") return "Parents";
        if (gLow === "all" || gLow === "all occupants") return "All";
        return String(grp).trim();
      };
      const rotationGroup = normalizeRotationGroup(rawGroup);
      const rawFreq = col8 || (cKey.includes("curbside") ? "Bi-Weekly" : cKey.includes("deep_clean") || cKey.includes("sign_off") || cKey.includes("bedroom") || cKey.includes("laundry") || cKey.includes("basement") ? "Once a Week" : "Daily");
      const freqLower = rawFreq.toLowerCase();
      const frequency = freqLower.includes("bi") ? "Bi-Weekly" : freqLower.includes("once") || freqLower.includes("weekly") ? "Once a Week" : "Daily";
      const rawTarget = col9 === "N/A" || !col9 ? frequency === "Daily" ? "Mon \u2013 Sun" : frequency === "Bi-Weekly" ? "Thursday Evening" : "Saturday" : col9;
      const targetDay = rawTarget.replace(/\s*\(required\)/i, "").trim() || "Mon \u2013 Sun";
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
          category = "Household";
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
        const pLower = pTask.toLowerCase();
        const pNorm = normalizeTaskName(pTask);
        const pKey = getChoreCanonicalKey(pTask);
        if (!pNorm || pNorm === "daily tasks" || pNorm === "weekly tasks" || pNorm.includes("section") || pNorm.includes("once a week") || pNorm.includes("bedroom checklist") || pNorm.includes("pet care routine") || pNorm.startsWith("\u2022") || isSignOffChore(pTask) || pKey === "weekly_sign_off" || seenCanonicalKeys.has(pKey) || seenNames.has(pNorm) || deletedChoreKeys.has(pNorm) || deletedChoreKeys.has(pKey) || deletedChoreKeys.has(String(pr.index_))) {
          return;
        }
        seenCanonicalKeys.add(pKey);
        seenNames.add(pNorm);
        const freqInfo = getInitialChoreFrequency(pTask);
        const isWeekly = freqInfo.frequency === "weekly";
        const isBi = freqInfo.frequency === "biweekly";
        let inferredCat = "Household";
        let inferredNotes = "";
        if (pLower.includes("litter") || pLower.includes("feed") || pLower.includes("herd") || pLower.includes("walk")) {
          inferredCat = "Pet Care";
          if (pLower.includes("walk")) inferredNotes = "Morning & evening walk for Ellie & Lewis";
        } else if (pLower.includes("supper") || pLower.includes("dishes") || pLower.includes("dishwasher") || pLower.includes("kitchen")) {
          inferredCat = "Kitchen";
        } else if (pLower.includes("bedroom")) {
          inferredCat = "Bedrooms";
        } else if (pLower.includes("basement")) {
          inferredCat = "Household";
        } else if (pLower.includes("sign-off") || pLower.includes("inspection")) {
          inferredCat = "Administration";
        }
        chores.push({
          index_: pr.index_,
          task: pTask,
          canonicalKey: pKey,
          category: inferredCat,
          frequency: isBi ? "Bi-Weekly" : isWeekly ? "Once a Week" : "Daily",
          targetDay: isBi ? "Thursday Evening" : isWeekly ? "Saturday" : "Mon \u2013 Sun",
          rotationGroup: "Non-Casual",
          notes: inferredNotes,
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
      chores = DEFAULT_MASTER_CHORES.filter(c => !isSignOffChore(c.title)).map((c, idx) => {
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
      const findOrderIdx = c => {
        const norm = normalizeTaskName(c.task);
        const idx = choreOrderOverrides.indexOf(norm);
        if (idx !== -1) return idx;
        const rawLower = (c.task || "").toLowerCase().trim();
        const rawIdx = choreOrderOverrides.indexOf(rawLower);
        if (rawIdx !== -1) return rawIdx;
        const cKey = getChoreCanonicalKey(c.task);
        if (cKey) {
          const cIdx = choreOrderOverrides.findIndex(k => getChoreCanonicalKey(k) === cKey);
          if (cIdx !== -1) return cIdx;
        }
        return -1;
      };
      chores.sort((a, b) => {
        const idxA = findOrderIdx(a);
        const idxB = findOrderIdx(b);
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

    const isChoreDaily = (taskName: string, freqStr?: string) => {
      const cKey = getChoreCanonicalKey(taskName);
      if (cKey === "litter_box" || cKey === "feed_herd" || cKey === "empty_dishwasher" || cKey === "make_supper" || cKey === "dinner_dishes" || cKey === "walk_dogs") {
        return true;
      }
      if (cKey === "curbside_recycling" || cKey === "curbside_waste" || cKey === "clean_basement" || cKey === "feeding_station_deep_clean" || cKey === "tidy_bedrooms" || cKey === "laundry") {
        return false;
      }
      const f = String(freqStr || "").toLowerCase();
      if (f.includes("bi") || f.includes("once") || f.includes("week")) return false;
      if (f.includes("daily")) return true;
      const freqInfo = getInitialChoreFrequency(taskName);
      return freqInfo.frequency === "daily";
    };

    const dailyItems: any[] = [];
    const weeklyItems: any[] = [];
    const seenKeys = new Set<string>();

    hubMasterChores.forEach(c => {
      if (isSignOffChore(c.task)) return;
      const cKey = getChoreCanonicalKey(c.task);
      const norm = normalizeTaskName(c.task);
      if (seenKeys.has(cKey) || seenKeys.has(norm)) return;
      seenKeys.add(cKey);
      seenKeys.add(norm);

      const existingRow = rawPrintable.find(r => {
        if (r.index_ < 4 || !r.row || !r.row[0]) return false;
        const rTask = String(r.row[0]).trim();
        return getChoreCanonicalKey(rTask) === cKey || normalizeTaskName(rTask) === norm;
      });

      const isDaily = isChoreDaily(c.task, c.frequency);
      let rowData = existingRow?.row ? [...existingRow.row] : null;
      if (rowData) {
        if (!isDaily && c.notes && String(c.notes).trim()) {
          rowData[1] = String(c.notes).trim();
        }
      } else {
        if (isDaily) {
          rowData = [c.task, "", false, "", false, "", false, "", false, "", false, "", false, "", false];
        } else if (isKidsChecklistChore(c.task)) {
          rowData = [c.task, c.notes || "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum", false, null, false, null, false, null, null, "SG: ____  CV: ____  MV: ____  KV: ____  KG: ____", null, null, false, null, false];
        } else {
          const desc = c.notes || (cKey.includes("recycling") ? "- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)" : cKey.includes("waste") ? "- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)" : "- Pick Up, Organize, Dust & Vacuum");
          rowData = [c.task, desc, null, null, null, null, null, null, null, "Who: _____________________", null, null, null, "Done: ______", false];
        }
      }

      const itemObj = {
        isSectionHeader: false,
        index_: existingRow ? existingRow.index_ : c.index_,
        row: rowData,
        task: c.task,
        category: c.category,
        frequency: c.frequency,
        targetDay: c.targetDay,
        rotationGroup: c.rotationGroup,
        notes: c.notes
      };

      if (isDaily) {
        dailyItems.push(itemObj);
      } else {
        weeklyItems.push(itemObj);
      }
    });

    rawPrintable.forEach(r => {
      if (r.index_ < 4 || !r.row || !r.row[0]) return;
      const cell0 = String(r.row[0]).trim();
      const lower0 = cell0.toLowerCase();
      if (!cell0 || lower0 === "daily tasks" || lower0 === "weekly tasks" || lower0.includes("once-a-week") || lower0.includes("bedroom checklist") || lower0.includes("pet care routine") || lower0.includes("household roster") || lower0.includes("bi-weekly schedule") || lower0.startsWith("\u2022") || isSignOffChore(cell0)) {
        return;
      }
      const cKey = getChoreCanonicalKey(cell0);
      const norm = normalizeTaskName(cell0);
      if (seenKeys.has(cKey) || seenKeys.has(norm)) return;
      seenKeys.add(cKey);
      seenKeys.add(norm);

      const isDaily = isChoreDaily(cell0);
      const itemObj = {
        isSectionHeader: false,
        index_: r.index_,
        row: r.row,
        task: cell0
      };
      if (isDaily) {
        dailyItems.push(itemObj);
      } else {
        weeklyItems.push(itemObj);
      }
    });

    if (customAddedChores.length > 0) {
      customAddedChores.forEach(cac => {
        const cKey = getChoreCanonicalKey(cac.task);
        const norm = normalizeTaskName(cac.task);
        if (seenKeys.has(cKey) || seenKeys.has(norm)) return;
        seenKeys.add(cKey);
        seenKeys.add(norm);
        const isDaily = isChoreDaily(cac.task, cac.frequency);
        const itemObj = {
          isSectionHeader: false,
          index_: cac.index_,
          row: cac.row,
          task: cac.task,
          category: cac.category,
          frequency: cac.frequency,
          targetDay: cac.targetDay,
          rotationGroup: cac.rotationGroup,
          notes: cac.notes
        };
        if (isDaily) {
          dailyItems.push(itemObj);
        } else {
          weeklyItems.push(itemObj);
        }
      });
    }

    const items: any[] = [];
    items.push({
      isSectionHeader: true,
      headerType: "daily",
      index_: 4,
      title: "Daily Tasks"
    });
    items.push(...dailyItems);

    items.push({
      isSectionHeader: true,
      headerType: "weekly",
      index_: 10,
      title: "Weekly Tasks",
      descHeader: "Description",
      rightHeader: "Initials / Assigned"
    });
    items.push(...weeklyItems);

    items.push({
      isSectionHeader: false,
      index_: 18,
      row: ["Weekly Sign-Off & Inspection", "Parents", false, null, null, null, null, null, null, "Thom / Meghan", null, null, null, null, null],
      task: "Weekly Sign-Off & Inspection",
      category: "Administration",
      frequency: "Once a Week",
      targetDay: "Sunday",
      rotationGroup: "Parents",
      notes: "Check off bedroom tidiness and completed chores"
    });

    return items.filter(item => {
      if (item.isSectionHeader || isSignOffChore(item.task)) return true;
      const idKey = String(item.index_);
      const taskKey = String(item.task || "").toLowerCase().trim();
      const norm = normalizeTaskName(item.task);
      const cKey = getChoreCanonicalKey(item.task);
      if (deletedChoreKeys.has(idKey) || deletedChoreKeys.has(taskKey) || deletedChoreKeys.has(norm) || deletedChoreKeys.has(cKey)) {
        return false;
      }
      return true;
    }).map(item => {
      if (item.isSectionHeader) return item;
      const edit = choreEdits[item.index_] || choreEdits[String(item.task || "").toLowerCase().trim()] || (item.task ? choreEdits[getChoreCanonicalKey(item.task)] : null);
      if (!edit) return item;
      const updatedTask = edit.task || item.task;
      const updatedRow = edit.row ? [...edit.row] : [...(item.row || [])];
      updatedRow[0] = updatedTask;
      return {
        ...item,
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
      const cKey = getChoreCanonicalKey(title);
      const tNorm = normalizeTaskName(title);
      const hubMatch = hubMasterChores.find(h => {
        if (cKey && getChoreCanonicalKey(h.task) === cKey) return true;
        if (tNorm && normalizeTaskName(h.task) === tNorm) return true;
        const hTask = h.task.toLowerCase().trim();
        const tLower = title.toLowerCase().trim();
        return tLower === hTask;
      }) || hubMasterChores.find(h => {
        const hTask = h.task.toLowerCase().trim();
        const tLower = title.toLowerCase().trim();
        if (tLower.includes("deep clean") && hTask.includes("deep clean")) return true;
        if (tLower.includes("feed the herd") && hTask.includes("feed the herd")) return true;
        return tLower.includes(hTask) || hTask.includes(tLower) || (tLower.includes("dishes") && hTask.includes("dishes")) || (tLower.includes("litter") && hTask.includes("litter")) || (tLower.includes("supper") && hTask.includes("supper")) || (tLower.includes("basement") && hTask.includes("basement")) || (tLower.includes("laundry") && hTask.includes("laundry")) || (tLower.includes("sign-off") && hTask.includes("sign-off"));
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
        category = "Household";
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
  const currentWeekInfo = useMemo(() => getCurrentWeekMonday(), []);
  const [activeTab, setActiveTab] = useState("matrix");
  const [selectedYear, setSelectedYear] = useState(() => currentWeekInfo.todayYear);
  const [selectedMonth, setSelectedMonth] = useState(() => currentWeekInfo.todayMonth);
  const [activeSyncWeek, setActiveSyncWeek] = useState(() => currentWeekInfo.dateKey);
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
  const [openMemberGroupDropdown, setOpenMemberGroupDropdown] = useState(null);
  const [newMemberGroups, setNewMemberGroups] = useState(["Kids", "Non-Casual", "All"]);
  const [newMemberBirthday, setNewMemberBirthday] = useState("");
  const [combineTargetA, setCombineTargetA] = useState(null);
  const [combineTargetB, setCombineTargetB] = useState(null);
  const [customCombinedTitle, setCustomCombinedTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [notice, setNotice] = useState(null);
  const [monthlyIncentive, setMonthlyIncentive] = useState(() => {
    try {
      const saved = localStorage.getItem("weekly_chores_monthly_incentive");
      return saved || "$15 Allowance Bonus & Choice of Friday Family Dinner";
    } catch {
      return "$15 Allowance Bonus & Choice of Friday Family Dinner";
    }
  });
  const [monthlyGoalTarget, setMonthlyGoalTarget] = useState<number>(() => {
    try {
      const saved = localStorage.getItem("weekly_chores_monthly_target");
      return saved ? Number(saved) : 25;
    } catch {
      return 25;
    }
  });
  const [isEditingIncentive, setIsEditingIncentive] = useState(false);
  const [incentiveDraft, setIncentiveDraft] = useState("$15 Allowance Bonus & Choice of Friday Family Dinner");
  const [targetDraft, setTargetDraft] = useState(25);
  const [masterCategoryFilter, setMasterCategoryFilter] = useState("ALL");
  const [masterFrequencyFilter, setMasterFrequencyFilter] = useState("ALL");
  const [masterSearchQuery, setMasterSearchQuery] = useState("");
  const [editingMasterIndex, setEditingMasterIndex] = useState(null);
  const [masterInlineDraft, setMasterInlineDraft] = useState(null);
  const [openTargetDayDropdown, setOpenTargetDayDropdown] = useState<string | number | null>(null);
  const [showInlineAddForm, setShowInlineAddForm] = useState(false);
  const [newMasterDraft, setNewMasterDraft] = useState({
    task: "",
    category: "Household",
    frequency: "Daily",
    targetDay: "Mon \u2013 Sun",
    selectedTargetDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    customTargetEnabled: false,
    customTargetText: "",
    rotationGroup: "Non-Casual",
    notes: "",
    nudgeEnabled: false,
    nudgeTime: "16:30",
    nudgeWindow: "",
    nudgeMessage: ""
  });
  const handleSaveAsDefault = async () => {
    try {
      const rawData = localStorage.getItem(STORAGE_KEY);
      const dataToSave = rawData ? JSON.parse(rawData) : data;
      const res = await fetch('/__save-config?asDefault=true', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sheetData: dataToSave }),
      });
      const resJson = await res.json();
      if (resJson.ok) {
        setNotice('✓ Current browser setup saved as the new default in code and weekly-chores-config.json!');
      } else {
        setNotice(`⚠️ Save failed: ${resJson.error}`);
      }
    } catch (e: any) {
      setNotice(`⚠️ Save failed: ${e?.message || String(e)}`);
    }
    setTimeout(() => setNotice(null), 4000);
  };

  const handleExportConfig = () => {
    try {
      const rawData = localStorage.getItem(STORAGE_KEY);
      const dataToSave = rawData ? JSON.parse(rawData) : data;
      const payload = {
        sheetData: dataToSave,
        version: '5.0',
        exportedAt: new Date().toISOString(),
        appName: 'Weekly Chores & Household Hub',
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `weekly-chores-config-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      fetch('/__save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});

      setNotice('✓ Configuration file exported and saved to workspace!');
      setTimeout(() => setNotice(null), 3500);
    } catch (e: any) {
      setNotice(`⚠️ Export failed: ${e?.message || String(e)}`);
      setTimeout(() => setNotice(null), 3500);
    }
  };

  const handleImportConfigFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        const dataToLoad = parsed.sheetData || (Array.isArray(parsed) ? parsed : null);
        if (Array.isArray(dataToLoad) && dataToLoad.length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToLoad));
          window.postMessage({ type: 'SYNC_DATA', payload: dataToLoad }, '*');
          setNotice(`✓ Loaded configuration from "${file.name}"!`);
        } else {
          setNotice('⚠️ Invalid configuration file: Missing sheetData');
        }
      } catch (err: any) {
        setNotice(`⚠️ Failed to parse config file: ${err?.message || String(err)}`);
      }
      setTimeout(() => setNotice(null), 4000);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const ALL_WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const parseTargetDayState = (rawTargetDay: string) => {
    const clean = String(rawTargetDay || "").trim();
    if (!clean || clean === "Mon \u2013 Sun" || clean === "Mon - Sun" || clean.toLowerCase() === "daily") {
      return {
        selectedDays: [...ALL_WEEK_DAYS],
        customEnabled: false,
        customText: ""
      };
    }
    const parts = clean.split(",").map(s => s.trim()).filter(Boolean);
    const selectedDays: string[] = [];
    const customParts: string[] = [];
    parts.forEach(p => {
      const matchedDay = ALL_WEEK_DAYS.find(d => d.toLowerCase() === p.toLowerCase());
      if (matchedDay) {
        if (!selectedDays.includes(matchedDay)) selectedDays.push(matchedDay);
      } else {
        customParts.push(p);
      }
    });
    return {
      selectedDays: ALL_WEEK_DAYS.filter(d => selectedDays.includes(d)),
      customEnabled: customParts.length > 0,
      customText: customParts.join(", ")
    };
  };
  const formatTargetDayState = (selectedDays: string[], customEnabled: boolean, customText: string) => {
    const orderedDays = ALL_WEEK_DAYS.filter(d => selectedDays.includes(d));
    const dayPart = orderedDays.length === 7 ? "Mon \u2013 Sun" : orderedDays.join(", ");
    const cleanCustom = String(customText || "").trim();
    if (customEnabled && cleanCustom) {
      return dayPart ? `${dayPart}, ${cleanCustom}` : cleanCustom;
    }
    return dayPart || "Mon \u2013 Sun";
  };
  const filteredMasterChores = useMemo(() => {
    return hubMasterChores.filter(ch => {
      if (masterCategoryFilter !== "ALL" && (ch.category || "").toLowerCase() !== masterCategoryFilter.toLowerCase()) {
        return false;
      }
      if (masterFrequencyFilter !== "ALL") {
        const fLow = (ch.frequency || "").toLowerCase();
        const filterLow = masterFrequencyFilter.toLowerCase();
        if (filterLow === "daily" && !fLow.includes("daily")) return false;
        if ((filterLow === "once a week" || filterLow === "weekly") && ((!fLow.includes("once") && !fLow.includes("weekly")) || fLow.includes("bi"))) return false;
        if (filterLow === "bi-weekly" && !fLow.includes("bi")) return false;
      }
      if (masterSearchQuery) {
        const q = masterSearchQuery.toLowerCase();
        const match = (ch.task || "").toLowerCase().includes(q) || (ch.category || "").toLowerCase().includes(q) || (ch.rotationGroup || "").toLowerCase().includes(q) || (ch.notes || "").toLowerCase().includes(q) || (ch.targetDay || "").toLowerCase().includes(q);
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
    care: "",
    active: true
  });
  const [editingPetIndex, setEditingPetIndex] = useState<number | null>(null);
  const [petEditDraft, setPetEditDraft] = useState({
    name: "",
    routine: "",
    care: ""
  });
  const [editingMemberIndex, setEditingMemberIndex] = useState<number | null>(null);
  const [memberEditName, setMemberEditName] = useState("");
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
    if (titleLower.includes("basement")) {
      return {
        frequency: "weekly",
        dayOfWeek: 5
      };
    }
    const cKey = getChoreCanonicalKey(title);
    const hubMatch = hubMasterChores.find(h => (cKey && getChoreCanonicalKey(h.task) === cKey) || normalizeTaskName(h.task) === normalizeTaskName(title) || h.task.toLowerCase() === title.toLowerCase());
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
    return extractWeekFromSheet(rawPrintable, getCurrentWeekMonday().dateKey);
  });
  const handleAutoAssignCurrentWeek = () => {
    const targetStartDate = activeSyncWeek || getCurrentWeekMonday().dateKey;
    const newSchedule = generateWeekAssignments(targetStartDate, choreRows);
    const parsedStart = parseDateKey(targetStartDate) || {
      year: 2026,
      month: 9,
      day: 12
    };
    const targetWeekDays = getWeekDaysForDate(parsedStart.year, parsedStart.month, parsedStart.day);
    const editsPatch = {};

    if (printableRangeIndex >= 0) {
      choreRows.forEach(cr => {
        var _a2, _b2, _c2, _d, _e, _f;
        const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";
        const pRow = findPrintableRow(taskTitle, cr.index_);
        if (!pRow) return;

        // Skip Tidy Bedrooms and Laundry Tasks (they are personal minion checklists, not single-person tasks)
        if (isKidsChecklistChore(taskTitle)) {
          return;
        }

        const choreFreq = getChoreFreq(cr);
        const isStreamlined = isStreamlinedWeeklyTask(taskTitle, choreFreq);

        const rowUpdates = new Array(15).fill(void 0);
        let hasChanges = false;
        let weeklyAssignedWho = "";

        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
          const d = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayOffset);
          const dKey = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());
          let assignedWho = ((_b2 = (_a2 = newSchedule[dKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.who) || ((_d = (_c2 = newSchedule[dKey]) == null ? void 0 : _c2[cr.task]) == null ? void 0 : _d.who) || ((_f = (_e = newSchedule[dKey]) == null ? void 0 : _e[getChoreCanonicalKey(cr.task)]) == null ? void 0 : _f.who) || "";
          if (assignedWho === "Cadence" || assignedWho === "Mason") {
            const bw = getBiWeeklyStatus(d.getFullYear(), d.getMonth(), d.getDate());
            if (!bw.isFullStay && !bw.isDepartureDay) {
              assignedWho = "";
            }
          }
          const whoCol = 1 + dayOffset * 2;
          rowUpdates[whoCol] = assignedWho;
          hasChanges = true;
          if (isStreamlined && assignedWho && !weeklyAssignedWho) {
            weeklyAssignedWho = assignedWho;
          }
        }

        if (isStreamlined) {
          rowUpdates[9] = weeklyAssignedWho ? `Who: ${weeklyAssignedWho}` : "Who: _____________________";
          hasChanges = true;

          editsPatch[cr.index_] = {
            ...(choreEdits[cr.index_] || {}),
            who: weeklyAssignedWho,
            rotationGroup: weeklyAssignedWho
          };
          if (taskTitle) {
            editsPatch[taskTitle.toLowerCase().trim()] = {
              ...(choreEdits[taskTitle.toLowerCase().trim()] || {}),
              who: weeklyAssignedWho,
              rotationGroup: weeklyAssignedWho
            };
          }

          // Propagate weekly assignment across all days of this week in newSchedule so getSingleWeeklyStatus finds it immediately
          targetWeekDays.forEach(dObj => {
            if (newSchedule[dObj.dateKey]) {
              const prevEntry = newSchedule[dObj.dateKey][cr.index_] || { done: false, kidsDone: {} };
              const updatedEntry = { ...prevEntry, who: weeklyAssignedWho };
              newSchedule[dObj.dateKey][cr.index_] = updatedEntry;
              if (taskTitle) {
                newSchedule[dObj.dateKey][taskTitle] = updatedEntry;
                newSchedule[dObj.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;
              }
            }
          });
        }

        if (hasChanges) {
          updateItem(printableRangeIndex, pRow.index_, rowUpdates);
        }
      });
    }

    setMonthSchedule(prev => ({
      ...{
        ...prev
      },
      ...newSchedule
    }));

    if (Object.keys(editsPatch).length > 0) {
      setChoreEdits(prev => ({
        ...prev,
        ...editsPatch
      }));
    }

    setNotice(`Distributed daily & weekly scheduled chores for week of ${targetStartDate} across active household members (Tidy Bedrooms & Laundry remain individual checklists)!`);
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
      if (m.active === false) return false;
      const roleLower = String(m.role || "").toLowerCase();
      const isKid = !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("overlord");
      if (!isKid) return false;
      if (m.type === "regular") return true;
      if (m.type === "biweekly") return isBiWeeklyHereThisWeek;
      return false;
    }).map(m => m.name);
  }, [familyMembers, isBiWeeklyHereThisWeek]);
  const casualKidsList = useMemo(() => {
    const list = familyMembers.filter(m => {
      if (m.active === false) return false;
      const roleLower = String(m.role || "").toLowerCase();
      const isKid = !roleLower.includes("parent") && !roleLower.includes("overseer") && !roleLower.includes("overlord");
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
        const curDay = prev[dKey] || {};
        // fromSheet provides the sheet baseline; preserve curDay modifications so live user edits are never wiped!
        const mergedDay = { ...fromSheet[dKey] };
        Object.keys(curDay).forEach(k => {
          if (curDay[k] !== undefined && curDay[k] !== null) {
            mergedDay[k] = curDay[k];
          }
        });
        next[dKey] = mergedDay;
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
    const cKey = choreTitle ? getChoreCanonicalKey(choreTitle) : "";
    const norm = choreTitle ? normalizeTaskName(choreTitle) : "";
    const s = dayData ? (
      (cKey ? dayData[cKey] : null) ||
      dayData[choreIndex] ||
      (choreTitle ? dayData[choreTitle] : null) ||
      (choreTitle ? dayData[choreTitle.toLowerCase()] : null) ||
      (choreTitle ? dayData[choreTitle.toLowerCase().trim()] : null) ||
      (norm ? dayData[norm] : null)
    ) : null;

    if (s && (s.done !== undefined || s.who !== undefined || (s.kidsDone && Object.keys(s.kidsDone).length > 0))) {
      let resolvedWho = s.who !== void 0 && s.who !== null ? String(s.who) : "";
      if (resolvedWho === "Cadence" || resolvedWho === "Mason") {
        const pDate = parseDateKey(dateKey);
        if (pDate) {
          const bw = getBiWeeklyStatus(pDate.year, pDate.month, pDate.day);
          if (!bw.isFullStay && !bw.isDepartureDay) {
            resolvedWho = "";
          }
        }
      }
      return {
        who: resolvedWho,
        done: s.done !== undefined ? !!s.done : undefined,
        kidsDone: s.kidsDone || {},
        hasExplicitRecord: true
      };
    }

    // Fallback: resolve from sheet row or choreEdits for this date column
    let fallbackWho = "";
    let fallbackDone = undefined;
    let foundInSheet = false;
    const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr);
    const parsedTarget = parseDateKey(dateKey);
    if (parsedStart && parsedTarget) {
      const startDateObj = new Date(parsedStart.year, parsedStart.month, parsedStart.day, 12, 0, 0);
      const targetDateObj = new Date(parsedTarget.year, parsedTarget.month, parsedTarget.day, 12, 0, 0);
      const diffDays = Math.round((targetDateObj.getTime() - startDateObj.getTime()) / (1e3 * 60 * 60 * 24));
      if (diffDays >= 0 && diffDays < 7) {
        const whoCol = 1 + diffDays * 2;
        const doneCol = 2 + diffDays * 2;
        const edit = choreEdits[choreIndex] || (cKey ? choreEdits[cKey] : null) || (norm ? choreEdits[norm] : null);
        const cr = choreRows.find(r => r.index_ === choreIndex || (cKey && getChoreCanonicalKey(r.task) === cKey) || (norm && normalizeTaskName(r.task) === norm));
        const row = (edit == null ? void 0 : edit.row) || (cr == null ? void 0 : cr.row);
        if (row) {
          foundInSheet = true;
          if (row[whoCol] !== undefined && row[whoCol] !== null) {
            const rawW = String(row[whoCol]).trim();
            const isDesc = rawW.startsWith("-") || rawW.startsWith("(") || rawW.startsWith("SG:") || rawW.startsWith("Done:") || rawW.startsWith("Parent Initials") || rawW.startsWith("___") || /^Who:\s*_+$/i.test(rawW);
            fallbackWho = isDesc ? "" : rawW.replace(/^Who:\s*/i, "").trim();
            if (fallbackWho === "Cadence" || fallbackWho === "Mason") {
              const bw = getBiWeeklyStatus(parsedTarget.year, parsedTarget.month, parsedTarget.day);
              if (!bw.isFullStay && !bw.isDepartureDay) {
                fallbackWho = "";
              }
            }
          }
          if (row[doneCol] !== undefined && row[doneCol] !== null) {
            fallbackDone = row[doneCol] === true || String(row[doneCol]).toLowerCase() === "true";
          }
        }
      }
    }

    return {
      who: fallbackWho,
      done: fallbackDone !== undefined ? fallbackDone : false,
      kidsDone: {},
      hasExplicitRecord: foundInSheet
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
    const cKey = taskTitle ? getChoreCanonicalKey(taskTitle) : "";
    const norm = taskTitle ? normalizeTaskName(taskTitle) : "";
    const cr = choreRows.find(r => {
      var _a2;
      const rTask = r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "";
      if (r.index_ === choreIndex) return true;
      if (taskTitle && rTask.toLowerCase().trim() === String(taskTitle).toLowerCase().trim()) return true;
      if (cKey && getChoreCanonicalKey(rTask) === cKey) return true;
      if (norm && normalizeTaskName(rTask) === norm) return true;
      return false;
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
      if (s.kidsDone && Object.keys(s.kidsDone).length > 0) {
        Object.keys(s.kidsDone).forEach(k => {
          result[k] = !!s.kidsDone[k];
        });
      } else if (s.who === "All Kids" && s.done) {
        allKidsList.forEach(k => {
          result[k] = true;
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
    if (newKidState) {
      playChoreCompletionSound();
      logHouseholdActivity({
        kidName,
        taskTitle: taskTitle || "Weekly Checklist",
        action: "completed"
      });
    } else {
      logHouseholdActivity({
        kidName,
        taskTitle: taskTitle || "Weekly Checklist",
        action: "uncompleted"
      });
    }
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
    const cKey = taskTitle ? getChoreCanonicalKey(taskTitle) : "";
    const norm = taskTitle ? normalizeTaskName(taskTitle) : "";
    setMonthSchedule(prev => {
      const next = {
        ...prev
      };
      activeWeekDays.forEach(d => {
        const curDay = next[d.dateKey] || {};
        const curChore = curDay[choreIndex] || (cKey ? curDay[cKey] : null) || {
          who: "",
          done: false,
          kidsDone: {}
        };
        const updatedEntry = {
          ...curChore,
          who: whoLabel,
          done: anyDone,
          kidsDone: updatedKids
        };
        next[d.dateKey] = {
          ...curDay,
          [choreIndex]: updatedEntry
        };
        if (cKey === "tidy_bedrooms") {
          next[d.dateKey][10] = updatedEntry;
          next[d.dateKey][12] = updatedEntry;
        } else if (cKey === "laundry") {
          next[d.dateKey][11] = updatedEntry;
        }
        if (taskTitle) {
          next[d.dateKey][taskTitle] = updatedEntry;
          next[d.dateKey][taskTitle.toLowerCase()] = updatedEntry;
          next[d.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;
        }
        if (cKey) next[d.dateKey][cKey] = updatedEntry;
        if (norm) next[d.dateKey][norm] = updatedEntry;
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
    broadcastLocalUpdate({
      type: "WEEKLY_KID_CHORE_UPDATED",
      choreIndex,
      kidName,
      taskTitle,
      newKidState,
      updatedKids,
      activeWeekDays: activeWeekDays.map(d => d.dateKey),
      whoLabel,
      anyDone
    });
    syncChoreToFirestore(
      (deviceSession == null ? void 0 : deviceSession.householdId) || "household_family_hub",
      activeWeekDays[0]?.dateKey || "weekly",
      choreIndex,
      { kidsDone: updatedKids, who: whoLabel, done: anyDone }
    );
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
    broadcastLocalUpdate({
      type: "WEEKLY_KID_CHORE_UPDATED",
      choreIndex,
      kidName,
      taskTitle,
      newKidState,
      updatedKids,
      activeWeekDays: activeWeekDays.map(d => d.dateKey),
      whoLabel,
      anyDone
    });
    syncChoreToFirestore(
      (deviceSession == null ? void 0 : deviceSession.householdId) || "household_family_hub",
      activeWeekDays[0]?.dateKey || "weekly",
      choreIndex,
      { kidsDone: updatedKids, who: whoLabel, done: anyDone }
    );
  };
  const getSingleWeeklyStatus = (choreIndex, taskTitle) => {
    let who = "";
    let done = false;
    const tLower = String(taskTitle || "").toLowerCase().trim();
    const cKey = getChoreCanonicalKey(taskTitle);

    const isMemberOrSpecialGroup = (val) => {
      if (!val) return false;
      const s = String(val).replace(/^Who:\s*/i, "").replace(/^Assigned:\s*/i, "").trim();
      if (!s || s.startsWith("-") || s.startsWith("(") || s.startsWith("SG:") || s.startsWith("Done:") || s.startsWith("Parent Initials") || s.startsWith("___") || /^_+$/.test(s)) {
        return false;
      }
      const sLow = s.toLowerCase();
      if (familyMembers.some(m => m.name.toLowerCase() === sLow)) return true;
      if (sLow === "parents" || sLow === "all kids" || sLow === "all non-casual" || sLow === "each child" || sLow.includes("meghan") || sLow.includes("thom")) return true;
      return false;
    };

    const getCanonicalMemberName = (val) => {
      if (!val) return "";
      const s = String(val).replace(/^Who:\s*/i, "").replace(/^Assigned:\s*/i, "").trim();
      const match = familyMembers.find(m => m.name.toLowerCase() === s.toLowerCase());
      if (match) return match.name;
      if (s.toLowerCase().includes("parents")) return "Parents";
      if (s.toLowerCase().includes("all kids")) return "All Kids";
      if (s.toLowerCase().includes("all non-casual")) return "All Non-Casual";
      return s;
    };

    // 1. Check choreEdits first (immediate state / patch)
    const edit = choreEdits[choreIndex] || (tLower ? choreEdits[tLower] : null) || (cKey ? choreEdits[cKey] : null);
    if (edit && edit.who && isMemberOrSpecialGroup(edit.who)) {
      who = getCanonicalMemberName(edit.who);
    }
    if (edit && edit.done !== undefined) {
      done = !!edit.done;
    }

    // 2. Check activeWeekDays in monthSchedule (populated by Auto-Assign)
    if (!who && activeWeekDays && activeWeekDays.length > 0) {
      for (let i = activeWeekDays.length - 1; i >= 0; i--) {
        const d = activeWeekDays[i];
        const s = getChoreStatus(d.dateKey, choreIndex, taskTitle);
        if (s.who && isMemberOrSpecialGroup(s.who)) {
          who = getCanonicalMemberName(s.who);
          break;
        }
        if (s.done) done = true;
      }
    }

    // 3. Check underlying sheet row (Sheet 0 column 9 = "Who: Name" or designated day columns)
    const cr = choreRows.find(r => {
      var _a2;
      return r.index_ === choreIndex || taskTitle && String(r.task || ((_a2 = r.row) == null ? void 0 : _a2[0]) || "").toLowerCase().trim() === tLower;
    });
    if (cr && cr.row) {
      if (cr.row[14] === true || String(cr.row[14]).toLowerCase() === "true") {
        done = true;
      }
      if (!who) {
        // Col 9 is the designated Who cell for weekly tasks in Sheet 0
        const col9Text = String(cr.row[9] || "").replace(/^Who:\s*/i, "").trim();
        if (isMemberOrSpecialGroup(col9Text)) {
          who = getCanonicalMemberName(col9Text);
        } else {
          // Check day columns [13, 11, 7, 5, 3] — NEVER column 1 which is Description!
          for (const colIdx of [13, 11, 7, 5, 3]) {
            const val = String(cr.row[colIdx] || "").replace(/^Who:\s*/i, "").trim();
            if (isMemberOrSpecialGroup(val)) {
              who = getCanonicalMemberName(val);
              break;
            }
          }
        }
      }
    }

    // 4. Bi-weekly custody check: if Cadence or Mason are assigned on an off-week, clear it
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
    const pRow = findPrintableRow(taskTitle);
    if (printableRangeIndex >= 0 && pRow) {
      const pRowIdx = pRow.index_;
      const updateRow = new Array(15).fill(void 0);
      if (cKey === "clean_basement" || cKey === "feeding_station_deep_clean" || cKey === "curbside_recycling" || cKey === "curbside_waste") {
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
    broadcastLocalUpdate({
      type: "SINGLE_WEEKLY_CHORE_UPDATED",
      choreIndex,
      taskTitle,
      patch,
      activeWeekDays: (activeWeekDays || []).map(d => d.dateKey)
    });
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
    if (nextDone) {
      logHouseholdActivity({
        kidName: `Parent ${activeParentAdmin}`,
        taskTitle: `Weekly Sign-Off & Inspection (Approved by ${activeParentAdmin} ✓)`,
        action: "signoff"
      });
    }
    setNotice(nextDone ? "Weekly Sign-Off & Inspection completed and verified for the week!" : "Weekly Sign-Off reset to pending.");
    setTimeout(() => setNotice(null), 3500);
  };
  const handleToggleKidChore = (dateKey, choreIndex, kidName, taskTitle, dayIdx) => {
    const rawTitle = taskTitle || "";
    const rawCKey = rawTitle ? getChoreCanonicalKey(rawTitle) : "";
    const rawNorm = rawTitle ? normalizeTaskName(rawTitle) : "";

    const targetChore = choreRows.find(r => {
      if (r.index_ === choreIndex) return true;
      if (rawCKey && getChoreCanonicalKey(r.task) === rawCKey) return true;
      if (rawTitle && String(r.task || "").toLowerCase().trim() === rawTitle.toLowerCase().trim()) return true;
      if (rawNorm && normalizeTaskName(r.task) === rawNorm) return true;
      return false;
    });

    const choreTask = (targetChore == null ? void 0 : targetChore.task) || rawTitle || "";
    const cKey = getChoreCanonicalKey(choreTask);
    const norm = normalizeTaskName(choreTask);
    const effectiveIndex = targetChore ? targetChore.index_ : choreIndex;

    const current = getChoreStatus(dateKey, effectiveIndex, choreTask);
    const whoStr = String(current.who || "").trim();
    const whoLower = whoStr.toLowerCase();
    const hasKidsDone = current.kidsDone && Object.keys(current.kidsDone).length > 0;
    const isGroupChore = hasKidsDone || whoLower === "all kids" || whoLower === "each child" || whoLower === "all non-casual";

    let nextDone = false;
    let patch = {};

    if (isGroupChore) {
      const prevKids = current.kidsDone || {};
      const newKidState = !prevKids[kidName];
      nextDone = newKidState;
      const updatedKids = {
        ...prevKids,
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
      patch = {
        who: whoLabel,
        done: anyDone,
        kidsDone: updatedKids
      };
    } else {
      nextDone = !current.done;
      patch = {
        who: current.who || kidName,
        done: nextDone
      };
    }

    if (nextDone) {
      playChoreCompletionSound();
      logHouseholdActivity({
        kidName,
        taskTitle: choreTask || "Chore",
        action: "completed",
        dateKey
      });
    } else {
      logHouseholdActivity({
        kidName,
        taskTitle: choreTask || "Chore",
        action: "uncompleted",
        dateKey
      });
    }

    setMonthSchedule(prev => {
      const currentDay = prev[dateKey] || {};
      const currentChore = (cKey ? currentDay[cKey] : null) ||
        currentDay[choreIndex] ||
        currentDay[effectiveIndex] ||
        (norm ? currentDay[norm] : null) || {};

      const updated = {
        ...currentChore,
        ...patch
      };

      const nextDay = {
        ...currentDay,
        [choreIndex]: updated,
        [effectiveIndex]: updated
      };
      if (choreTask) {
        nextDay[choreTask] = updated;
        nextDay[choreTask.toLowerCase()] = updated;
        nextDay[choreTask.toLowerCase().trim()] = updated;
      }
      if (cKey) nextDay[cKey] = updated;
      if (norm) nextDay[norm] = updated;

      return {
        ...prev,
        [dateKey]: nextDay
      };
    });

    broadcastLocalUpdate({
      type: "CHORE_UPDATED",
      dateKey,
      choreIndex: effectiveIndex,
      originalIndex: choreIndex,
      patch,
      taskTitle: choreTask,
      normKey: norm,
      canonicalKey: cKey
    });

    syncChoreToFirestore(
      (deviceSession == null ? void 0 : deviceSession.householdId) || "household_family_hub",
      dateKey,
      effectiveIndex,
      patch
    );

    const pRow = findPrintableRow(choreTask, effectiveIndex);
    if (printableRangeIndex >= 0 && pRow) {
      const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr);
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
          updateArray[0] = choreTask || (pRow.row ? pRow.row[0] : void 0);
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

  const handleRequestPhoto = (kidName: string, taskTitle: string, choreIndex: number, dateKey: string) => {
    const req: ChorePhotoRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      dateKey,
      choreIndex,
      kidName,
      taskTitle,
      requestedBy: activeParentAdmin,
      requestedAt: Date.now(),
      fulfilled: false
    };
    savePhotoRequest(req);
    setPhotoRequestsVersion(v => v + 1);
    broadcastLocalUpdate({
      type: "PHOTO_REQUESTED",
      request: req
    });
    saveActivityEvent({
      id: `act-req-${Date.now()}`,
      timestamp: Date.now(),
      kidName,
      taskTitle: `Requested live photo proof for "${taskTitle}"! 📸`,
      action: "photo_requested",
      dateKey
    });
    playHouseholdRemoteChime();
    setNotice(`📸 Requested photo proof from ${kidName} for "${taskTitle}"`);
    setTimeout(() => setNotice(null), 3500);
  };
  const handleUpdateChore = (dateKey, choreIndex, patch, optionalTaskTitle) => {
    var _a2;
    const rawTitle = optionalTaskTitle || "";
    const rawCKey = rawTitle ? getChoreCanonicalKey(rawTitle) : "";
    const rawNorm = rawTitle ? normalizeTaskName(rawTitle) : "";

    const targetChore = choreRows.find(r => {
      if (r.index_ === choreIndex) return true;
      if (rawCKey && getChoreCanonicalKey(r.task) === rawCKey) return true;
      if (rawTitle && String(r.task || "").toLowerCase().trim() === rawTitle.toLowerCase().trim()) return true;
      if (rawNorm && normalizeTaskName(r.task) === rawNorm) return true;
      return false;
    });

    const choreTask = (targetChore == null ? void 0 : targetChore.task) || rawTitle || "";
    const cKey = getChoreCanonicalKey(choreTask);
    const norm = normalizeTaskName(choreTask);
    const effectiveIndex = targetChore ? targetChore.index_ : choreIndex;

    setMonthSchedule(prev => {
      const currentDay = prev[dateKey] || {};
      const currentChore = (cKey ? currentDay[cKey] : null) ||
        currentDay[choreIndex] ||
        currentDay[effectiveIndex] ||
        (norm ? currentDay[norm] : null) || {
          who: "",
          done: false
        };
      const updated = {
        ...currentChore,
        ...patch
      };
      const nextDay = {
        ...currentDay,
        [choreIndex]: updated,
        [effectiveIndex]: updated
      };
      if (choreTask) {
        nextDay[choreTask] = updated;
        nextDay[choreTask.toLowerCase()] = updated;
        nextDay[choreTask.toLowerCase().trim()] = updated;
      }
      if (cKey) nextDay[cKey] = updated;
      if (norm) nextDay[norm] = updated;
      return {
        ...prev,
        [dateKey]: nextDay
      };
    });

    broadcastLocalUpdate({
      type: "CHORE_UPDATED",
      dateKey,
      choreIndex: effectiveIndex,
      originalIndex: choreIndex,
      patch,
      taskTitle: choreTask,
      normKey: norm,
      canonicalKey: cKey
    });

    syncChoreToFirestore(
      (deviceSession == null ? void 0 : deviceSession.householdId) || "household_family_hub",
      dateKey,
      effectiveIndex,
      patch
    );

    const pRow = findPrintableRow(choreTask, effectiveIndex);
    if (printableRangeIndex >= 0 && pRow) {
      const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr);
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
    broadcastLocalUpdate({
      type: "CHORE_UPDATED",
      dateKey,
      choreIndex: rowIndex_,
      patch: { [field]: value },
      taskTitle: tTitle,
      normKey: cKey
    });
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
            let whoVal = rawWho !== void 0 && rawWho !== null ? String(rawWho).trim() : "";
            if (whoVal === "Cadence" || whoVal === "Mason") {
              const bw = getBiWeeklyStatus(d.year, d.month, d.day);
              if (!bw.isFullStay && !bw.isDepartureDay) {
                whoVal = "";
              }
            }
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
    setChoreOrderOverrides(prev => prev ? [...prev, normalizeTaskName(cleanTask)] : null);
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
    if (choreData.nudgeEnabled !== undefined) {
      saveChoreNudgeRule(cleanTask, {
        enabled: Boolean(choreData.nudgeEnabled),
        time: choreData.nudgeTime || "16:30",
        targetWindow: choreData.nudgeWindow || "",
        message: choreData.nudgeMessage || ""
      });
    }
    setNewMasterDraft({
      task: "",
      category: "Household",
      frequency: "Daily",
      targetDay: "Mon \u2013 Sun",
      selectedTargetDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      customTargetEnabled: false,
      customTargetText: "",
      rotationGroup: "All Non-Casual",
      notes: "",
      nudgeEnabled: false,
      nudgeTime: "16:30",
      nudgeWindow: "",
      nudgeMessage: ""
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
      updateRow[6] = patch.task || oldTitle || "";
      if ("rotationGroup" in patch) updateRow[7] = patch.rotationGroup;
      if ("frequency" in patch) updateRow[8] = patch.frequency;
      if ("targetDay" in patch) updateRow[9] = patch.targetDay;
      if ("notes" in patch) updateRow[10] = patch.notes;
      if ("category" in patch) updateRow[11] = patch.category;
      updateItem(hubRangeIndex, hRowIdx, updateRow);
    }
    setCustomMasterChores(prev => prev.map(cmc => {
      if (cmc.index_ === choreIndex || normalizeTaskName(cmc.task) === normalizeTaskName(oldTitle)) {
        return {
          ...cmc,
          ...patch,
          task: patch.task || cmc.task
        };
      }
      return cmc;
    }));
    if (patch.task && oldTitle && normalizeTaskName(patch.task) !== normalizeTaskName(oldTitle)) {
      const oldNorm = normalizeTaskName(oldTitle);
      const newNorm = normalizeTaskName(patch.task);
      setChoreOrderOverrides(prev => prev ? prev.map(k => k === oldNorm ? newNorm : k) : null);
    }
    const pRowIdx = getPrintableRowIndex(oldTitle);
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {
      const updateP = new Array(15).fill(void 0);
      if ("task" in patch) updateP[0] = patch.task;
      if ("notes" in patch) updateP[1] = patch.notes;
      if ("task" in patch || "notes" in patch) {
        updateItem(printableRangeIndex, pRowIdx, updateP);
      }
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
    setNotice(`Updated "${patch.task || oldTitle || "chore"}" in schedule and master registry!`);
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
    const pRow = findPrintableRow(taskTitle);
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
    if (editData.task && oldTitle && normalizeTaskName(editData.task) !== normalizeTaskName(oldTitle)) {
      const oldNorm = normalizeTaskName(oldTitle);
      const newNorm = normalizeTaskName(editData.task);
      setChoreOrderOverrides(prev => prev ? prev.map(k => k === oldNorm ? newNorm : k) : null);
    }
    const pRowIdx = getPrintableRowIndex(oldTitle);
    if (printableRangeIndex >= 0 && pRowIdx !== void 0 && pRowIdx !== null) {
      const updateRow = new Array(15).fill(void 0);
      updateRow[0] = cleanTitle;
      if (editData.notes !== void 0) updateRow[1] = editData.notes;
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
    if (editingPrintableChore) {
      saveChoreNudgeRule(cleanTitle, {
        enabled: Boolean(editingPrintableChore.nudgeEnabled),
        time: editingPrintableChore.nudgeTime || "16:30",
        targetWindow: editingPrintableChore.nudgeWindow || "",
        message: editingPrintableChore.nudgeMessage || ""
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
    const existingNudgeRule = getChoreNudgeRule(title);
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
      dayOfWeek: freq.dayOfWeek !== void 0 ? freq.dayOfWeek : 5,
      nudgeEnabled: existingNudgeRule?.enabled ?? false,
      nudgeTime: existingNudgeRule?.time || "16:30",
      nudgeWindow: existingNudgeRule?.targetWindow || "",
      nudgeMessage: existingNudgeRule?.message || ""
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
    const matchChore = (r, target) => {
      if (typeof target === "object" && target !== null) {
        return r === target || normalizeTaskName(r.task) === normalizeTaskName(target.task);
      }
      return r.index_ === target || String(r.index_) === String(target) || normalizeTaskName(r.task) === normalizeTaskName(String(target));
    };
    const visibleList = typeof choreItemOrIndex === "object" && choreItemOrIndex !== null && filteredMasterChores.length > 0 ? filteredMasterChores : hubMasterChores;
    const visibleIdx = visibleList.findIndex(r => matchChore(r, choreItemOrIndex));
    if (visibleIdx === -1) return;
    const targetVisibleIdx = direction === "up" ? visibleIdx - 1 : visibleIdx + 1;
    if (targetVisibleIdx < 0 || targetVisibleIdx >= visibleList.length) return;
    const itemCurrent = visibleList[visibleIdx];
    const itemTarget = visibleList[targetVisibleIdx];
    const currentList = [...hubMasterChores];
    const listIndex = currentList.findIndex(r => matchChore(r, itemCurrent));
    const targetListIndex = currentList.findIndex(r => matchChore(r, itemTarget));
    if (listIndex === -1 || targetListIndex === -1) return;
    const choreName = itemCurrent.task || "Chore";
    currentList[listIndex] = itemTarget;
    currentList[targetListIndex] = itemCurrent;
    const newOverrides = currentList.map(c => normalizeTaskName(c.task));
    setChoreOrderOverrides(newOverrides);
    if (printableRangeIndex >= 0) {
      const pCurrent = findPrintableRow(itemCurrent.task);
      const pTarget = findPrintableRow(itemTarget.task);
      const weeklyBanner = (printableSheet == null ? void 0 : printableSheet.data) == null ? void 0 : printableSheet.data.find(r => r.row && String(r.row[0] || "").toLowerCase().trim() === "weekly tasks");
      const bannerIdx = weeklyBanner ? weeklyBanner.index_ : 10;
      const inSamePrintableSection = pCurrent && pTarget && ((pCurrent.index_ < bannerIdx && pTarget.index_ < bannerIdx) || (pCurrent.index_ > bannerIdx && pTarget.index_ > bannerIdx));
      if (pCurrent && pTarget && pCurrent.index_ !== pTarget.index_ && inSamePrintableSection) {
        const rowDataA = [...(pCurrent.row || [])];
        const rowDataB = [...(pTarget.row || [])];
        updateItem(printableRangeIndex, pCurrent.index_, rowDataB);
        updateItem(printableRangeIndex, pTarget.index_, rowDataA);
      }
    }
    if (hubRangeIndex >= 0) {
      const rCurrent = findHubChoreRow(itemCurrent.task);
      const rTarget = findHubChoreRow(itemTarget.task);
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
    let weeklyKidCounter = 0;
    let weeklyCleanerCounter = 0;
    let weeklyCurbsideCounter = 0;
    const editsPatch = {};

    calendarWeeks.forEach(week => {
      week.forEach(dayObj => {
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
          if (tLow.includes("basement")) {
            return dayObj.dayOfWeekIndex === 5;
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

          // 1. Tidy Bedrooms and Laundry Tasks: Excluded from auto-assign (multi-kid personal checklists)
          if (isKidsChecklistChore(taskTitle)) {
            updated[dKey][cr.index_] = {
              who: "",
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }

          // 2. Sunday Supper: Parent rule
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

          // 3. Weekly tasks: Clean Basement (Kids), Feeding Station Deep Clean (Active Workers), Curbside (Active Workers), Sign-Off (Parents)
          if (tLower.includes("basement")) {
            const kidPool = kidsWorkers.length > 0 ? kidsWorkers : (areKidsInResidence ? ["Sydney", "Cadence", "Mason"] : ["Sydney"]);
            const assignee = kidPool.length > 0 ? kidPool[weeklyKidCounter % kidPool.length] : "Sydney";
            updated[dKey][cr.index_] = {
              who: assignee,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            weeklyKidCounter++;
            return;
          }
          if (tLower.includes("deep clean") || tLower.includes("feeding station")) {
            const assignee = activeWorkers[weeklyCleanerCounter % activeWorkers.length];
            updated[dKey][cr.index_] = {
              who: assignee,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            weeklyCleanerCounter++;
            return;
          }
          if (tLower.includes("recycling") || tLower.includes("waste")) {
            const assignee = activeWorkers[weeklyCurbsideCounter % activeWorkers.length];
            updated[dKey][cr.index_] = {
              who: assignee,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            weeklyCurbsideCounter++;
            return;
          }
          if (tLower.includes("sign-off") || tLower.includes("inspection")) {
            updated[dKey][cr.index_] = {
              who: "Parents",
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }

          // 4. Daily tasks & general chores
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
          if ((groupLower === "kids" || groupLower.includes("kid")) && kidsWorkers.length > 0) {
            let kidAssignee = kidsWorkers[(dayStartOffset + choreAssignCounter) % kidsWorkers.length];
            choreAssignCounter++;
            if (!areKidsInResidence && (kidAssignee === "Cadence" || kidAssignee === "Mason")) {
              kidAssignee = kidsWorkers.find(k => k !== "Cadence" && k !== "Mason") || "Sydney";
            }
            updated[dKey][cr.index_] = {
              who: kidAssignee,
              done: current.done,
              kidsDone: current.kidsDone || {}
            };
            return;
          }
          let assignedPerson = activeWorkers[(dayStartOffset + choreAssignCounter) % activeWorkers.length];
          choreAssignCounter++;
          if (!areKidsInResidence && (assignedPerson === "Cadence" || assignedPerson === "Mason")) {
            assignedPerson = kidsWorkers.find(k => k !== "Cadence" && k !== "Mason") || activeWorkers.find(k => k !== "Cadence" && k !== "Mason") || "Sydney";
          }
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
            const taskTitle = cr.task || ((_a2 = cr.row) == null ? void 0 : _a2[0]) || "";
            // Skip Tidy Bedrooms and Laundry Tasks
            if (isKidsChecklistChore(taskTitle)) {
              return;
            }
            const pRow = findPrintableRow(taskTitle, cr.index_);
            if (!pRow) return;

            const choreFreq = getChoreFreq(cr);
            const isStreamlined = isStreamlinedWeeklyTask(taskTitle, choreFreq);

            const rowUpdates = new Array(15).fill(void 0);
            let hasChanges = false;
            let weeklyAssignedWho = "";

            for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
              const d = week[dayOffset];
              let assignedWho = (d && updated[d.dateKey]?.[cr.index_]?.who) || "";
              if (assignedWho === "Cadence" || assignedWho === "Mason") {
                if (d) {
                  const bw = getBiWeeklyStatus(d.year, d.month, d.day);
                  if (!bw.isFullStay && !bw.isDepartureDay) {
                    assignedWho = "";
                  }
                }
              }
              const whoCol = 1 + dayOffset * 2;
              rowUpdates[whoCol] = assignedWho;
              hasChanges = true;
              if (isStreamlined && assignedWho && !weeklyAssignedWho) {
                weeklyAssignedWho = assignedWho;
              }
            }

            if (isStreamlined) {
              rowUpdates[9] = weeklyAssignedWho ? `Who: ${weeklyAssignedWho}` : "Who: _____________________";
              hasChanges = true;

              editsPatch[cr.index_] = {
                ...(choreEdits[cr.index_] || {}),
                who: weeklyAssignedWho,
                rotationGroup: weeklyAssignedWho
              };
              if (taskTitle) {
                editsPatch[taskTitle.toLowerCase().trim()] = {
                  ...(choreEdits[taskTitle.toLowerCase().trim()] || {}),
                  who: weeklyAssignedWho,
                  rotationGroup: weeklyAssignedWho
                };
              }

              // Propagate weekly assignment across all days of this week in updated
              week.forEach(dObj => {
                if (dObj && updated[dObj.dateKey]) {
                  const prevEntry = updated[dObj.dateKey][cr.index_] || { done: false, kidsDone: {} };
                  const updatedEntry = { ...prevEntry, who: weeklyAssignedWho };
                  updated[dObj.dateKey][cr.index_] = updatedEntry;
                  if (taskTitle) {
                    updated[dObj.dateKey][taskTitle] = updatedEntry;
                    updated[dObj.dateKey][taskTitle.toLowerCase().trim()] = updatedEntry;
                  }
                }
              });
            }

            if (hasChanges) {
              updateItem(printableRangeIndex, pRow.index_, rowUpdates);
            }
          });
        }
      });
    }

    if (Object.keys(editsPatch).length > 0) {
      setChoreEdits(prev => ({
        ...prev,
        ...editsPatch
      }));
    }

    setShowAutoAssignModal(false);
    setNotice(`Auto-assigned daily & weekly tasks for ${MONTH_NAMES[selectedMonth]} ${selectedYear}! (Tidy Bedrooms & Laundry remain individual checklists)`);
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
    if ("specialGroups" in patch) updateRow[3] = patch.specialGroups;
    else if ("schedule" in patch) updateRow[3] = patch.schedule;
    if ("active" in patch) updateRow[4] = patch.active;
    updateItem(targetRange, rowIndex_, updateRow);
    setNotice(`Updated "${patch.name || ((_b2 = existingRow == null ? void 0 : existingRow.row) == null ? void 0 : _b2[0]) || "member"}" in Household Hub!`);
    setTimeout(() => setNotice(null), 3e3);
  };
  const handleAddRosterMember = (name, role, residency, specialGroups, active = true) => {
    var _a2;
    if (!name || !name.trim()) return;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const cleanName = name.trim();
    const cleanRole = role ? role.trim() : "Minion";
    const cleanRes = residency || "Full-Time";
    const defaultGroups = cleanRes === "Casual" ? "All" : cleanRole === "Supreme Overlord" ? "Parents, Non-Casual, All" : "Kids, Non-Casual, All";
    const cleanGroups = specialGroups ? specialGroups.trim() : defaultGroups;
    const emptySlot = (_a2 = rosterSheet.data) == null ? void 0 : _a2.find(r => {
      if (r.index_ < 5 || r.index_ > 12) return false;
      return !r.row || !r.row[0] || !String(r.row[0]).trim();
    });
    if (emptySlot) {
      const updateRow = new Array(12).fill(void 0);
      updateRow[0] = cleanName;
      updateRow[1] = cleanRole;
      updateRow[2] = cleanRes;
      updateRow[3] = cleanGroups;
      updateRow[4] = active;
      updateRow[5] = "MEMBER_ROW";
      updateItem(targetRange, emptySlot.index_, updateRow);
    } else {
      const newRow = [cleanName, cleanRole, cleanRes, cleanGroups, active, "MEMBER_ROW", null, null, null, null, null, null];
      insertItem(targetRange, void 0, newRow);
    }
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
  const handleAddRosterPet = (name, type, routine, care, active = true) => {
    if (!name || !name.trim()) return;
    const targetRange = hubRangeIndex >= 0 ? hubRangeIndex : (data == null ? void 0 : data.length) > 1 ? 1 : 0;
    const cleanName = name.trim();
    const cleanType = type || "Dog";
    const cleanRoutine = routine || "Morning & Evening";
    const cleanCare = care || (cleanType === "Dog" ? "Feed breakfast & supper, outdoor routine, fresh water" : "Feed morning/evening, scoop litter box, fresh water");
    const newRow = [cleanName, cleanType, cleanRoutine, cleanCare, active, "PET_ROW", void 0, void 0, void 0, void 0, void 0, void 0];
    insertItem(targetRange, void 0, newRow);
    setShowAddPetModal(false);
    setNewPetDraft({
      name: "",
      type: "Dog",
      routine: "Morning & Evening",
      care: "",
      active: true
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
          } else if (tLow.includes("basement")) {
            isScheduledDay = day.dayOfWeekIndex === 5;
          } else if (freq.frequency === "daily") {
            isScheduledDay = true;
          } else if (freq.frequency === "weekly") {
            isScheduledDay = day.dayOfWeekIndex === freq.dayOfWeek;
          } else if (freq.frequency === "biweekly") {
            isScheduledDay = day.dayOfWeekIndex === freq.dayOfWeek && isCurbsideActiveOnDate(taskT, day.year, day.month, day.day);
          }
          const status = getChoreStatus(day.dateKey, cr.index_, cr.task || ((_b2 = cr.row) == null ? void 0 : _b2[0]));
          const hasActivity = (status == null ? void 0 : status.done) || (status == null ? void 0 : status.who) || (status == null ? void 0 : status.kidsDone);
          if (!isScheduledDay && !hasActivity) return;
          totalScheduled++;
          const isDone = status == null ? void 0 : status.done;
          const who = status == null ? void 0 : status.who;
          const kidsDone = (status == null ? void 0 : status.kidsDone) || {};
          if (isDone) totalCompleted++;

          if (who) {
            const member = getMember(who);
            if (member && assigneeCounts[member.name]) {
              assigneeCounts[member.name].total++;
              if (isDone) assigneeCounts[member.name].done++;
            } else if (who === "Each Child" || who === "All Kids") {
              familyMembers.forEach(m => {
                if (m.type !== "casual" && assigneeCounts[m.name]) {
                  assigneeCounts[m.name].total++;
                  if (kidsDone[m.name] || isDone) {
                    assigneeCounts[m.name].done++;
                  }
                }
              });
            } else if (who === "Non-Casual" || who === "All Non-Casual") {
              familyMembers.forEach(m => {
                if (m.type === "regular" && assigneeCounts[m.name]) {
                  assigneeCounts[m.name].total++;
                  if (kidsDone[m.name] || isDone) {
                    assigneeCounts[m.name].done++;
                  }
                }
              });
            }
          }
          // Also credit any explicitly recorded kidsDone
          Object.entries(kidsDone).forEach(([kName, kDone]) => {
            if (kDone && assigneeCounts[kName] && who !== "Each Child" && who !== "All Kids" && who !== "Non-Casual") {
              assigneeCounts[kName].done++;
            }
          });
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
    return familyMembers
      .filter(m => {
        const nameLower = (m.name || "").toLowerCase().trim();
        const roleLower = String(m.role || "").toLowerCase();
        if (nameLower === "thom" || nameLower === "meghan") return false;
        if (roleLower.includes("overlord") || roleLower.includes("overseer") || roleLower.includes("parent")) return false;
        return true;
      })
      .map(m => {
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
    const cur = getCurrentWeekMonday();
    setSelectedYear(cur.todayYear);
    setSelectedMonth(cur.todayMonth);
    setActiveSyncWeek(cur.dateKey);
  };
  useEffect(() => {
    if (activeTab === "month") {
      const cur = getCurrentWeekMonday();
      setSelectedYear(cur.todayYear);
      setSelectedMonth(cur.todayMonth);
      setActiveSyncWeek(cur.dateKey);
      setTimeout(() => {
        const el = document.getElementById("active-calendar-week");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    }
  }, [activeTab]);

  // Master Chore Template: Auto-Nudge Evaluation Interval (Runs every 60s)
  useEffect(() => {
    const runAutoNudgeCheck = () => {
      try {
        const curMonday = getCurrentWeekMonday().dateKey;
        const weekData = (monthSchedule && monthSchedule[curMonday]) || {};
        const todayIdx = new Date().getDay(); // 0 is Sunday, 1 is Monday ...
        // Day index matching sheet convention: 0 is Monday ... 6 is Sunday
        const dayIdx = todayIdx === 0 ? 6 : todayIdx - 1;
        const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const dayName = DAY_NAMES[dayIdx];

        // Collect all chores for today
        const dayChores = (choreRows || []).map((row: any) => {
          const taskTitle = row.task || "";
          const who = row.who || "";
          const choreKey = `${row.id}_${dayIdx}`;
          const isDone = Boolean(weekData[choreKey]);
          return {
            taskId: row.id,
            taskTitle,
            who,
            dayName,
            done: isDone,
          };
        });

        evaluateAndDispatchAutoNudges({
          currentWeekKey: curMonday,
          dayName,
          dayChores,
          familyMembers: familyMembers || [],
          onNudgeDispatched: (kidName, choreTitle, time) => {
            saveActivityEvent({
              type: "nudge",
              actorName: "Household Hub",
              actorRole: "parent",
              targetName: kidName,
              choreTitle: `${choreTitle} (Auto: ${time})`,
              details: `Auto-nudge triggered according to Master Chore schedule (${time})`
            });
          }
        });
      } catch (err) {
        console.error("Error evaluating auto-nudges:", err);
      }
    };

    runAutoNudgeCheck();
    const intervalId = setInterval(runAutoNudgeCheck, 60000);
    return () => clearInterval(intervalId);
  }, [monthSchedule, choreRows, familyMembers]);

  const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (showPairingScreen) {
    return (
      <KidPairingScreen
        onPairedSuccess={(newSession) => {
          setDeviceSession(newSession);
          setShowPairingScreen(false);
        }}
        onContinueAsParent={(parentName) => {
          const chosen = parentName || activeParentAdmin || "Thom";
          const adminSession: DeviceSession = {
            role: "admin",
            parentName: chosen,
            householdId: "household_family_hub",
            deviceId: "local_dev",
            parentPin: "1234"
          };
          saveDeviceSession(adminSession);
          setDeviceSession(adminSession);
          setActiveParentAdmin(chosen);
          saveActiveParentAdmin(chosen);
          setShowPairingScreen(false);
          try {
            const url = new URL(window.location.href);
            url.searchParams.delete("kid");
            url.searchParams.set("parent", chosen);
            window.history.replaceState({}, document.title, url.toString());
          } catch {}
        }}
      />
    );
  }

  if (deviceSession.role === "kid" && deviceSession.kidName) {
    const activeFromParent = deviceSession.viewingAsParent || (typeof window !== "undefined" ? ((new URLSearchParams(window.location.search).get("fromParent") as any) || undefined) : undefined);
    return (
      <MinionDashboard
        kidName={deviceSession.kidName}
        familyMembers={familyMembers}
        monthSchedule={monthSchedule}
        hubMasterChores={hubMasterChores}
        monthlyIncentive={monthlyIncentive}
        monthlyGoalTarget={monthlyGoalTarget || 25}
        rankedMembers={rankedMembers}
        topPerformer={topPerformer}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        onUpdateChore={handleUpdateChore}
        onToggleWeeklyKidChore={handleToggleWeeklyKidChore}
        getWeeklyKidsStatus={getWeeklyKidsStatus}
        formatDateKey={formatDateKey}
        activeSyncWeek={activeSyncWeek}
        activeWeekDays={activeWeekDays}
        allKidsList={allKidsList}
        signOffStatus={signOffStatus}
        onToggleWeeklySignOff={handleToggleWeeklySignOff}
        onToggleKidChore={handleToggleKidChore}
        getChoreStatus={getChoreStatus}
        viewingAsParent={activeFromParent}
        onKidSwitched={(kName) => {
          setLastInspectedKid(kName);
          setDeviceSession(prev => ({ ...prev, role: "kid", kidName: kName, viewingAsParent: activeFromParent }));
          try {
            const url = new URL(window.location.href);
            url.searchParams.set("kid", kName);
            if (activeFromParent) {
              url.searchParams.set("fromParent", activeFromParent);
            }
            window.history.replaceState({}, document.title, url.toString());
          } catch {}
        }}
        onExitMinionMode={() => {
          const chosen = activeFromParent || activeParentAdmin || "Thom";
          const returnedKid = deviceSession.kidName;
          if (returnedKid) {
            setLastInspectedKid(returnedKid);
          }
          const adminSession: DeviceSession = {
            role: "admin",
            parentName: chosen,
            householdId: deviceSession.householdId || "household_family_hub",
            deviceId: deviceSession.deviceId || "local_dev",
            parentPin: "1234"
          };
          saveDeviceSession(adminSession);
          setDeviceSession(adminSession);
          setActiveParentAdmin(chosen);
          saveActiveParentAdmin(chosen);
          try {
            const url = new URL(window.location.href);
            url.searchParams.delete("kid");
            url.searchParams.delete("fromParent");
            url.searchParams.set("parent", chosen);
            window.history.replaceState({}, document.title, url.toString());
          } catch {}
          setNotice(`Returned to ${chosen}'s Admin Hub! 👑`);
          setTimeout(() => setNotice(null), 3000);
        }}
      />
    );
  }

  // Streamlined Dedicated Mobile Parent Command Hub (when parent preference is mobile or on small screens)
  if (parentViewPreference === "mobile") {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
        <ParentMobileDashboard
          familyMembers={familyMembers}
          allKidsList={allKidsList}
          activeSyncWeek={activeSyncWeek}
          activeWeekDays={activeWeekDays}
          monthSchedule={monthSchedule}
          hubMasterChores={hubMasterChores}
          signOffStatus={signOffStatus}
          onToggleWeeklySignOff={handleToggleWeeklySignOff}
          onToggleKidChore={handleToggleKidChore}
          onToggleWeeklyKidChore={handleToggleWeeklyKidChore}
          getChoreStatus={getChoreStatus}
          getWeeklyKidsStatus={getWeeklyKidsStatus}
          monthlyIncentive={monthlyIncentive}
          monthlyGoalTarget={monthlyGoalTarget || 25}
          topPerformer={topPerformer}
          onOpenInspection={() => setShowInspectionModal(true)}
          onOpenLedger={() => setShowAllowanceLedger(true)}
          onOpenNudgeModal={(kName, type) => {
            setNudgeModalTarget(kName ? { kid: kName, type: type || "nudge" } : null);
            setShowNudgeModal(true);
          }}
          onOpenRewardModal={(kName) => {
            setRewardPayoutKid(kName || allKidsList[0] || "Sydney");
            setShowRewardPayoutModal(true);
          }}
          onOpenActivityFeed={() => setShowActivityDrawer(true)}
          onSwitchToMinionMode={(kName) => {
            const target = kName || allKidsList[0] || "Sydney";
            setLastInspectedKid(target);
            const parentAdmin = activeParentAdmin || deviceSession.parentName || "Thom";
            const kidSession: DeviceSession = {
              role: "kid",
              kidName: target,
              householdId: deviceSession.householdId || "household_family_hub",
              deviceId: deviceSession.deviceId || "local_dev",
              parentPin: "1234",
              viewingAsParent: parentAdmin
            };
            saveDeviceSession(kidSession);
            setDeviceSession(kidSession);
            try {
              const url = new URL(window.location.href);
              url.searchParams.delete("parent");
              url.searchParams.set("kid", target);
              url.searchParams.set("fromParent", parentAdmin);
              window.history.replaceState({}, document.title, url.toString());
            } catch {}
            setNotice(`Viewing ${target}'s Minion page as ${parentAdmin}! 🎒`);
            setTimeout(() => setNotice(null), 3000);
          }}
          onToggleDesktopView={toggleParentViewMode}
          activitiesCount={activities.length}
          activeParentAdmin={activeParentAdmin}
          onSwitchParentAdmin={handleSwitchActiveAdmin}
          lastInspectedKid={lastInspectedKid}
        />

        {/* Sunday Parent Inspection & Sign-off Modal */}
        {showInspectionModal && (
          <ParentInspectionModal
            isOpen={showInspectionModal}
            onClose={() => setShowInspectionModal(false)}
            activeSyncWeek={activeSyncWeek}
            activeWeekDays={activeWeekDays}
            familyMembers={familyMembers}
            allKidsList={allKidsList}
            monthSchedule={monthSchedule}
            signOffStatus={signOffStatus}
            onToggleWeeklySignOff={handleToggleWeeklySignOff}
            onToggleWeeklyKidChore={handleToggleWeeklyKidChore}
            getWeeklyKidsStatus={getWeeklyKidsStatus}
            onToggleKidChore={handleToggleKidChore}
            monthlyIncentive={monthlyIncentive}
            monthlyGoalTarget={monthlyGoalTarget || 25}
            topPerformer={topPerformer}
            activeParentAdmin={activeParentAdmin}
          />
        )}

        {/* Household Real-Time Activity Drawer */}
        <HouseholdActivityDrawer
          isOpen={showActivityDrawer}
          onClose={() => setShowActivityDrawer(false)}
          activities={activities}
          onClearActivities={() => {
            clearActivityLog();
            setActivities([]);
          }}
          familyMembers={familyMembers}
          allKidsList={allKidsList}
        />

        {/* Floating Real-Time Remote Activity Toast */}
        <ActivityToast
          event={activeToastEvent}
          familyMembers={familyMembers}
          onClose={() => setActiveToastEvent(null)}
          onOpenFeed={() => setShowActivityDrawer(true)}
        />

        {/* Household Allowance Ledger & History Modal */}
        {showAllowanceLedger && (
          <AllowanceLedgerModal
            isOpen={showAllowanceLedger}
            onClose={() => setShowAllowanceLedger(false)}
            familyMembers={familyMembers}
            onOpenRewardModal={(kName) => {
              setShowAllowanceLedger(false);
              setRewardPayoutKid(kName || allKidsList[0] || "Sydney");
              setShowRewardPayoutModal(true);
            }}
          />
        )}

        {/* Parent Digital Reward & Payout Modal */}
        {showRewardPayoutModal && (
          <ParentRewardPayoutModal
            isOpen={showRewardPayoutModal}
            onClose={() => setShowRewardPayoutModal(false)}
            allKidsList={allKidsList}
            initialKid={rewardPayoutKid}
            onOpenLedger={() => {
              setShowRewardPayoutModal(false);
              setShowAllowanceLedger(true);
            }}
            onPayoutRecorded={(kName, amt, platform) => {
              setNotice(`🎁 Recorded $${amt} ${platform} digital gift card payout for ${kName}!`);
              setTimeout(() => setNotice(null), 4000);
            }}
          />
        )}

        {/* Parent Nudge & Feedback Modal */}
        {showNudgeModal && (
          <ParentNudgeModal
            isOpen={showNudgeModal}
            onClose={() => {
              setShowNudgeModal(false);
              setNudgeModalTarget(null);
            }}
            allKidsList={allKidsList}
            initialKid={nudgeModalTarget?.kid}
            initialType={nudgeModalTarget?.type}
            onNudgeSent={(targetKid, type) => {
              setActivities(getStoredActivityLog());
              setNotice(type === "praise" ? `⭐ Praise sent to ${targetKid}!` : `🧹 Nudge sent to ${targetKid}!`);
              setTimeout(() => setNotice(null), 4000);
            }}
            onSwitchToKid={(targetKid) => {
              setLastInspectedKid(targetKid);
              const cur = getStoredDeviceSession();
              const parentAdmin = activeParentAdmin || cur.parentName || "Thom";
              const newSession: DeviceSession = {
                role: "kid",
                householdId: cur.householdId || "household_family_hub",
                kidName: targetKid,
                deviceId: cur.deviceId,
                parentPin: cur.parentPin || "1234",
                viewingAsParent: parentAdmin
              };
              saveDeviceSession(newSession);
              setDeviceSession(newSession);
              setShowNudgeModal(false);
              setNudgeModalTarget(null);
              try {
                const url = new URL(window.location.href);
                url.searchParams.delete("parent");
                url.searchParams.set("kid", targetKid);
                url.searchParams.set("fromParent", parentAdmin);
                window.history.replaceState({}, document.title, url.toString());
              } catch {}
              setNotice(`Viewing ${targetKid}'s Minion page as ${parentAdmin}! 🎒`);
              setTimeout(() => setNotice(null), 3500);
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {notice && (
        <div className="no-print bg-emerald-600 dark:bg-emerald-700 text-white px-4 py-2.5 text-sm font-medium flex items-center justify-between shadow-md transition-all">
          <div className="flex items-center gap-2">
            <CircleCheck className="w-4 h-4 text-emerald-200" />
            <span>{notice}</span>
          </div>
          <button onClick={() => setNotice(null)} className="text-emerald-100 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <header className="no-print bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col xl:flex-row xl:items-center justify-between gap-3">
          {/* Left: Brand Identity & Active Parent Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 via-amber-500 to-teal-500 flex items-center justify-center text-white shadow-md shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  {activeParentAdmin}&apos;s Admin Hub
                </h1>
                
                {/* Active Parent Switcher Toggle */}
                <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                  {(["Thom", "Meghan"] as const).map(parent => (
                    <button
                      key={parent}
                      type="button"
                      onClick={() => handleSwitchActiveParent(parent)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-black transition cursor-pointer flex items-center gap-1 ${
                        activeParentAdmin === parent
                          ? "bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-2xs"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                      title={`Switch to ${parent}'s Admin Hub`}
                    >
                      <span>👑</span>
                      <span>{parent}</span>
                    </button>
                  ))}
                </div>

                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hidden sm:inline">
                  Monthly Sync
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Chore Hub • Week of {activeSyncWeek}
              </p>
            </div>
          </div>

          {/* Right: Core Parent Actions & Controls */}
          <div className="flex flex-wrap items-center gap-2 justify-end">
            {/* Month Navigator */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 rounded-xl p-1 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
              <button
                onClick={handlePrevMonth}
                className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="px-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 min-w-[110px] text-center select-none">
                {MONTH_NAMES[selectedMonth]} {selectedYear}
              </div>
              <button
                onClick={handleNextMonth}
                className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleCurrentMonth}
                className="ml-1 text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 font-bold transition shadow-2xs cursor-pointer"
              >
                Today
              </button>
            </div>

            {/* Sunday Inspection */}
            <button
              type="button"
              onClick={() => setShowInspectionModal(true)}
              className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 border rounded-xl transition cursor-pointer shadow-2xs ${
                signOffStatus.done
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60"
                  : "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-700/60 hover:bg-amber-100 dark:hover:bg-amber-900/60"
              }`}
              title="Conduct Sunday room inspection and sign off weekly allowances"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Inspection</span>
              <span
                className={`text-[9px] font-black px-1.5 py-0.2 rounded font-mono ${
                  signOffStatus.done
                    ? "bg-emerald-200 dark:bg-emerald-900/80 text-emerald-950 dark:text-emerald-100"
                    : "bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100"
                }`}
              >
                {signOffStatus.done ? "✓ Done" : "Pending"}
              </span>
            </button>

            {/* Photo Proofs */}
            <button
              type="button"
              onClick={() => setShowPhotoInboxModal(true)}
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 rounded-xl transition cursor-pointer shadow-2xs relative"
              title="Review chore completion photos submitted by kids"
            >
              <Camera className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Photo Proofs</span>
              {getPendingPhotoProofsCount() > 0 && (
                <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-rose-500 text-white font-mono animate-pulse">
                  {getPendingPhotoProofsCount()}
                </span>
              )}
            </button>

            {/* Nudge */}
            <button
              type="button"
              onClick={() => setShowNudgeModal(true)}
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 bg-orange-50 dark:bg-orange-950/40 hover:bg-orange-100 dark:hover:bg-orange-900/60 text-orange-900 dark:text-orange-300 border border-orange-300 dark:border-orange-700/60 rounded-xl transition cursor-pointer shadow-2xs"
              title="Send Remote Nudge or Praise to Kids"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
              <span>Nudge</span>
            </button>

            {/* Ledger */}
            <button
              type="button"
              onClick={() => setShowAllowanceLedger(true)}
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 rounded-xl transition cursor-pointer shadow-2xs"
              title="Open Household Allowance Ledger & Payment History"
            >
              <DollarSign className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Ledger</span>
            </button>

            {/* Rewards */}
            <button
              type="button"
              onClick={() => {
                setRewardPayoutKid(allKidsList[0] || "Sydney");
                setShowRewardPayoutModal(true);
              }}
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-700/60 rounded-xl transition cursor-pointer shadow-2xs"
              title="Open Kid Reward Accounts & 1-Click Digital Gift Card Payouts"
            >
              <Gift className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Rewards</span>
            </button>

            {/* Subtle Divider */}
            <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-0.5 hidden sm:block" />

            {/* Activity Feed Bell */}
            <button
              type="button"
              onClick={() => setShowActivityDrawer(true)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-2xs relative"
              title="Open Live Household Activity Feed"
            >
              <Bell className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              {activities.length > 0 && (
                <span className="absolute -top-1 -right-1 text-[9px] font-black px-1.5 py-0.2 rounded-full bg-indigo-600 text-white font-mono shadow-xs">
                  {activities.length > 99 ? "99+" : activities.length}
                </span>
              )}
            </button>

            {/* Cloud Sync Status */}
            <button
              type="button"
              onClick={() => setShowFirebaseModal(true)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-2xs"
              title={getStoredFirebaseConfig() ? "Cloud Sync: Connected & Live" : "Cloud Sync: Setup"}
            >
              <Cloud className={`w-4 h-4 ${getStoredFirebaseConfig() ? "text-emerald-500" : "text-amber-500"}`} />
            </button>

            {/* Mobile View Toggle */}
            <button
              type="button"
              onClick={toggleParentViewMode}
              className="flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl transition cursor-pointer shadow-2xs"
              title="Switch to Mobile Parent View"
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline">Mobile</span>
            </button>

            {/* Settings & Theme Menu Dropdown */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setShowSettingsMenu((prev) => !prev)}
                className={`p-2 rounded-xl border transition cursor-pointer shadow-2xs ${
                  showSettingsMenu
                    ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
                title="Household Settings & Theme"
                aria-expanded={showSettingsMenu}
              >
                <Settings className="w-4 h-4" />
              </button>

              {showSettingsMenu && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setShowSettingsMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 z-40 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2.5 space-y-2.5 animate-fadeIn">
                    <div className="px-1 text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Theme
                    </div>

                    {/* Nested Theme Buttons */}
                    <div>
                      <ThemeToggle variant="pill" className="w-full flex" />
                    </div>

                    <div className="border-t border-slate-100 dark:border-slate-800" />

                    <button
                      type="button"
                      onClick={() => {
                        setShowSettingsMenu(false);
                        setShowSettingsModal(true);
                      }}
                      className="w-full px-2.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-between transition cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Settings2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span>All Household Settings</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Sub-bar: Views & Tools */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab("month")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "month"
                  ? "bg-slate-900 dark:bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Monthly Calendar</span>
            </button>
            <button
              onClick={() => setActiveTab("matrix")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "matrix"
                  ? "bg-slate-900 dark:bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Weekly Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab("stats")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "stats"
                  ? "bg-slate-900 dark:bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Leaderboard & Stats</span>
            </button>
            <button
              onClick={() => setActiveTab("roster")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === "roster"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-indigo-700 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200/60 dark:border-indigo-800/60"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Household Hub ({familyMembers.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAutoAssignModal(true)}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800/60 rounded-lg transition cursor-pointer shadow-2xs"
              title="Auto-Assign chores across family members"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Auto-Assign</span>
            </button>

            <button
              type="button"
              onClick={() => setShowInviteModal(true)}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60 rounded-lg transition cursor-pointer shadow-2xs"
              title="Generate a 6-character invite code to pair a kid's phone, tablet, or PC"
            >
              <Smartphone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span className="hidden sm:inline">Invite Device</span>
            </button>

            {!isStandalone() && (
              <button
                type="button"
                onClick={() => setShowPwaModal(true)}
                className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200 dark:border-purple-800/60 rounded-lg transition cursor-pointer shadow-2xs"
                title="Install Weekly Chores Hub to your Home Screen or Desktop"
              >
                <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span className="hidden sm:inline">Install</span>
              </button>
            )}

            {isSpeechSupported() && (
              <button
                type="button"
                onClick={() => {
                  if (isSpeakingAudio) {
                    stopSpeaking();
                  } else {
                    speakParentHouseholdSummary(
                      activeSyncWeek || "Current Week",
                      choreRows.length,
                      monthStats.totalCompleted,
                      topPerformer ? topPerformer.name : undefined
                    );
                  }
                }}
                className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg transition cursor-pointer shadow-2xs ${
                  isSpeakingAudio
                    ? "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 animate-pulse"
                    : "bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800/60"
                }`}
                title={isSpeakingAudio ? "Stop voice narration" : "Speak household chore summary aloud"}
              >
                {isSpeakingAudio ? <VolumeX className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />}
                <span className="hidden sm:inline">{isSpeakingAudio ? "Stop Voice" : "Voice"}</span>
              </button>
            )}

            <a
              href="/Workflow_Diagrams_Export.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition cursor-pointer shadow-2xs no-underline"
              title="Open Architecture & Workflow diagrams"
            >
              <span>📊</span>
              <span className="hidden sm:inline">Diagrams</span>
            </a>

            <button
              onClick={() => {
                const firstKid = familyMembers.find(m => m.active !== false && m.role !== "Supreme Overlord" && m.role !== "Overseer Supreme")?.name || "Sydney";
                const kidSession = { role: "kid", kidName: firstKid, householdId: deviceSession.householdId || "household_family_hub", deviceId: deviceSession.deviceId || "local_dev" };
                saveDeviceSession(kidSession);
                setDeviceSession(kidSession);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800 transition cursor-pointer shadow-2xs"
              title="Preview or switch to the Kid Interface (Minion Mode)"
            >
              <span>🎒</span>
              <span>Minion Mode</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6"><div className="no-print bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 mb-4 shadow-2xs space-y-2.5 text-xs transition-colors"><div className="flex flex-wrap items-center gap-3"><div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 min-w-[130px]"><Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" /><span>Household Roster:</span></div><div className="flex flex-wrap items-center gap-1.5"><span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800/60">Supreme Overlords:</span>{familyMembers.filter(m => m.active !== false && (m.role === "Supreme Overlord" || m.role === "Overseer Supreme")).map(m => <span key={m.id} className="px-2.5 py-0.5 rounded-full font-semibold text-[11px] border transition shadow-2xs" style={getMemberBadgeStyle(m, isDark)} title="Supreme Overlord (= Parent • Included in Daily Chores)">{m.name}</span>)}<span className="text-slate-300 dark:text-slate-600 mx-1">{"•"}</span><span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase bg-indigo-50 dark:bg-indigo-950/50 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800/60">Minions:</span>{familyMembers.filter(m => m.active !== false && m.role !== "Supreme Overlord" && m.role !== "Overseer Supreme").map(m => <span key={m.id} className="px-2.5 py-0.5 rounded-full font-semibold text-[11px] border transition shadow-2xs" style={getMemberBadgeStyle(m, isDark)} title={`${m.name} (${m.residency} Minion = Kid)`}>{m.name}</span>)}</div></div><div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800"><div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 min-w-[130px]"><span className="w-4 text-center shrink-0">{"\u{1F43E}"}</span><span>{"\"The Herd\":"}</span></div><div className="flex flex-wrap items-center gap-1.5"><span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800/60">Dogs:</span>{rosterPets.filter(p => p.active !== false && p.type.toLowerCase().includes("dog")).map(p => <span key={`${p.index_}-${p.name}`} className="px-2.5 py-0.5 rounded-full font-semibold text-[11px] border transition shadow-2xs" style={getPetBadgeStyle(p, isDark)} title={`${p.name} (${p.type} • ${p.routine})`}>{p.icon}{" "}{p.name}</span>)}<span className="text-slate-300 dark:text-slate-600 mx-1">{"•"}</span><span className="text-[10px] font-bold text-orange-800 dark:text-orange-300 uppercase bg-orange-50 dark:bg-orange-950/50 px-1.5 py-0.5 rounded border border-orange-200 dark:border-orange-800/60">Cats:</span>{rosterPets.filter(p => p.active !== false && p.type.toLowerCase().includes("cat")).map(p => <span key={`${p.index_}-${p.name}`} className="px-2.5 py-0.5 rounded-full font-medium text-[11px] border transition shadow-2xs" style={getPetBadgeStyle(p, isDark)} title={`${p.name} (${p.type} • ${p.routine})`}>{p.icon}{" "}{p.name}</span>)}{rosterPets.some(p => p.active !== false && !p.type.toLowerCase().includes("dog") && !p.type.toLowerCase().includes("cat")) && <><span className="text-slate-300 dark:text-slate-600 mx-1">{"•"}</span><span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">Other Pets:</span>{rosterPets.filter(p => p.active !== false && !p.type.toLowerCase().includes("dog") && !p.type.toLowerCase().includes("cat")).map(p => <span key={`${p.index_}-${p.name}`} className="px-2.5 py-0.5 rounded-full font-medium text-[11px] border transition shadow-2xs" style={getPetBadgeStyle(p, isDark)} title={`${p.name} (${p.type} • ${p.routine})`}>{p.icon}{" "}{p.name}</span>)}</>}</div></div></div><div className="no-print bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 mb-5 shadow-sm flex flex-wrap items-center justify-between gap-4 transition-colors"><div className="flex items-center gap-6"><div><p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Month Overview</p><div className="flex items-baseline gap-2 mt-0.5"><span className="text-xl font-bold text-slate-900 dark:text-white">{monthStats.totalCompleted}{" / "}{monthStats.totalScheduled}</span><span className="text-xs text-slate-500 dark:text-slate-400">completed</span></div></div><div className="hidden sm:block w-36"><div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium"><span>Progress</span><span>{monthStats.completionRate}%</span></div><div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{
        width: `${monthStats.completionRate}%`
      }} /></div></div></div><div className="flex items-center gap-3 text-xs"><div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded-lg"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /><span>{"Active Week: "}<strong>{activeSyncWeek}</strong>{" • "}{(activeWeekBwSummary == null ? void 0 : activeWeekBwSummary.text) || "Cadence & Mason arrive Sun Oct 18 @ 5 PM"}</span></div><button onClick={() => {
        const cur = getCurrentWeekMonday();
        const currentWeek = getWeekDaysForDate(cur.year, cur.month, cur.day);
        handleSetSyncWeek(currentWeek);
        handleAutoAssignCurrentWeek();
        setActiveTab("matrix");
      }} className="px-2.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold rounded-lg transition" title={`Sync and distribute chores for current week (${activeSyncWeek})`}>Sync & Distribute Week</button></div></div>{activeTab === "month" && <div className="space-y-4"><div className="grid grid-cols-7 gap-2 text-center">{DAY_STYLES.map((day, idx) => <div key={day.name} className="py-2.5 px-1 rounded-t-lg font-bold text-xs uppercase tracking-wider text-white shadow-sm flex flex-col items-center justify-center" style={{
        backgroundColor: day.color
      }}><span>{day.name}</span><span className="text-[10px] font-normal opacity-90 hidden sm:inline">{"Day "}{idx + 1}</span></div>)}</div><div className="space-y-3">{calendarWeeks.map((week, weekIdx) => {
        const synced = isWeekSyncedToSheet(week);
        const isCurrentCalendarWeek = week[0].dateKey === currentWeekInfo.dateKey;
        return <div key={weekIdx} id={synced ? "active-calendar-week" : void 0} className={`bg-white dark:bg-slate-900 rounded-xl border transition-all ${synced ? "border-rose-400 ring-2 ring-rose-200 dark:ring-rose-950/60 shadow-md" : "border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700"}`}><div className="bg-slate-50/80 dark:bg-slate-800/70 px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 rounded-t-xl flex items-center justify-between text-xs"><div className="flex items-center gap-2"><span className="font-semibold text-slate-700 dark:text-slate-200">{"Week "}{weekIdx + 1}</span><span className="text-slate-400">{"•"}</span><span className="text-slate-500 dark:text-slate-400">{week[0].month + 1}/{week[0].day}{" – "}{week[6].month + 1}/{week[6].day}</span>{isCurrentCalendarWeek && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">Current Week</span>}{(() => {
          const summary = getWeekBiWeeklySummary(week, biWeeklyNamesString);
          if (!summary) return null;
          return <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${summary.badgeBg}`}>{summary.text}</span>;
        })()}{synced ? <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 px-2 py-0.5 rounded-full border border-rose-300 dark:border-rose-800"><span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400" />Live Synced with Sheet</span> : <button onClick={() => handleSetSyncWeek(week)} className="text-[11px] font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline flex items-center gap-1">Set as Sheet Week</button>}</div><div className="text-[11px] text-slate-500 dark:text-slate-400">{week.reduce((acc, d) => {
          const count = choreRows.filter(cr => {
            var _a2, _b2;
            return (_b2 = (_a2 = monthSchedule[d.dateKey]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;
          }).length;
          return acc + count;
        }, 0)}{" "}chores completed</div></div><div className="grid grid-cols-7 divide-x divide-slate-100 dark:divide-slate-800">{week.map((dayObj, dayIdx) => {
          const {
            dateKey,
            day,
            isCurrentMonth
          } = dayObj;
          const dayStyle = DAY_STYLES[dayIdx];
          const dayChores = choreRows.filter(cr => {
            const freq = getChoreFreq(cr);
            const taskTitle = cr.task || cr.row?.[0] || "";
            const tLow = taskTitle.toLowerCase();
            if (tLow.includes("deep clean") || tLow.includes("feeding station")) {
              const isScheduledDay = dayIdx === 6;
              const hasActivity = monthSchedule[dateKey]?.[cr.index_]?.done || monthSchedule[dateKey]?.[cr.index_]?.who;
              if (!isScheduledDay && !hasActivity) return false;
            } else if (tLow.includes("recycling")) {
              const isScheduledDay = dayIdx === 3 && isCurbsideActiveOnDate("recycling", dayObj.year, dayObj.month, dayObj.day);
              const hasActivity = monthSchedule[dateKey]?.[cr.index_]?.done || monthSchedule[dateKey]?.[cr.index_]?.who;
              if (!isScheduledDay && !hasActivity) return false;
            } else if (tLow.includes("waste")) {
              const isScheduledDay = dayIdx === 3 && isCurbsideActiveOnDate("waste", dayObj.year, dayObj.month, dayObj.day);
              const hasActivity = monthSchedule[dateKey]?.[cr.index_]?.done || monthSchedule[dateKey]?.[cr.index_]?.who;
              if (!isScheduledDay && !hasActivity) return false;
            } else if (tLow.includes("basement")) {
              const isScheduledDay = dayIdx === 5;
              const hasActivity = monthSchedule[dateKey]?.[cr.index_]?.done || monthSchedule[dateKey]?.[cr.index_]?.who;
              if (!isScheduledDay && !hasActivity) return false;
            } else if (freq.frequency === "weekly") {
              const isScheduledDay = dayIdx === freq.dayOfWeek;
              const hasActivity = monthSchedule[dateKey]?.[cr.index_]?.done || monthSchedule[dateKey]?.[cr.index_]?.who;
              if (!isScheduledDay && !hasActivity) return false;
            } else if (freq.frequency === "biweekly") {
              const isScheduledDay = dayIdx === freq.dayOfWeek && isCurbsideActiveOnDate(taskTitle, dayObj.year, dayObj.month, dayObj.day);
              const hasActivity = monthSchedule[dateKey]?.[cr.index_]?.done || monthSchedule[dateKey]?.[cr.index_]?.who;
              if (!isScheduledDay && !hasActivity) return false;
            }
            if (selectedAssigneeFilter === "ALL") return true;
            const st = monthSchedule[dateKey]?.[cr.index_];
            const whoStr = String((st == null ? void 0 : st.who) || "").toLowerCase();
            const filterMem = familyMembers.find(m => m.id === selectedAssigneeFilter || m.name === selectedAssigneeFilter);
            const filterName = ((filterMem == null ? void 0 : filterMem.name) || selectedAssigneeFilter).toLowerCase();
            if (isBedroomChore(tLow)) {
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
          return <div key={dateKey} className={`min-h-[160px] p-2 flex flex-col justify-between transition-colors ${isCurrentMonth ? "bg-white dark:bg-slate-900" : "bg-slate-50/80 dark:bg-slate-950/60 border-dashed border-slate-200 dark:border-slate-800"}`}><div><div className="flex items-center justify-between mb-1.5"><span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${isCurrentMonth ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200" : "bg-slate-200/70 dark:bg-slate-850 text-slate-700 dark:text-slate-400"}`}>{day}</span><div className="flex items-center gap-1">{dayChores.length > 0 && <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${isAllDone ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`}>{doneCount}/{dayChores.length}</span>}<button onClick={() => setActiveDayModal(dateKey)} className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Open day details"><Pen className="w-2.5 h-2.5" /></button></div></div>{(() => {
            const status = getBiWeeklyStatus(dayObj.year, dayObj.month, dayObj.day);
            if (status.isArrivalDay) {
              return <div className="text-[9px] font-semibold text-pink-700 dark:text-pink-300 bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800/60 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs" title="Cadence & Mason arrive today at 5:00 PM for their bi-weekly stay"><span>{"\u{1F3E0} Cadence & Mason arrive 5 PM"}</span></div>;
            } else if (status.isDepartureDay) {
              return <div className="text-[9px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 rounded px-1.5 py-0.5 mb-1.5 flex items-center gap-1 leading-tight shadow-2xs" title="Cadence & Mason depart today at 5:00 PM"><span>{"\u{1F44B} Cadence & Mason leave 5 PM"}</span></div>;
            }
            return null;
          })()}<div className="space-y-1">{dayChores.slice(0, 3).map(cr => {
            var _a2, _b2;
            const choreTitle = cr.task || cr.row?.[0] || "";
            const status = getChoreStatus(dateKey, cr.index_, choreTitle);
            const proof = getPhotoProofForChore(dateKey, cr.index_);
            const assignee = getMember(status.who);
            const freq = getChoreFreq(cr);
            const specificKid = getSpecificKidForChore(choreTitle);
            const targetKidName = specificKid || status.who || "All Kids";
            const isPhotoRequested = targetKidName ? hasPendingPhotoRequest(dateKey, cr.index_, targetKidName) : false;
            return <div key={cr.index_} className={`group text-[11px] p-1 rounded-md border flex flex-col gap-1 transition ${status.done ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60 text-slate-500 dark:text-slate-400" : freq.frequency === "weekly" ? "bg-purple-50/60 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/60 text-purple-950 dark:text-purple-200 shadow-2xs" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 shadow-2xs"}`}><div className="flex items-center justify-between gap-1 w-full"><div className="flex items-center gap-1 min-w-0 flex-1"><button onClick={() => handleUpdateChore(dateKey, cr.index_, {
              done: !status.done
            })} className="shrink-0 text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none">{status.done ? <SquareCheckBig className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Square className="w-3.5 h-3.5 hover:text-slate-600 dark:hover:text-slate-300" />}</button><span className={`truncate text-[10px] font-medium leading-tight ${status.done ? "line-through text-slate-400 dark:text-slate-500" : ""}`}>{choreTitle}</span></div><div className="flex items-center gap-1 shrink-0">{proof ? <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedReviewProof(proof); }} className="shrink-0 p-0.5 rounded text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50" title="View submitted chore photo proof"><Camera className="w-3 h-3" /></button> : status.done && targetKidName ? (isPhotoRequested ? <span className="shrink-0 text-[8px] font-bold px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60" title={`Photo proof requested from ${targetKidName}`}>📸 Asked</span> : <button type="button" onClick={(e) => { e.stopPropagation(); handleRequestPhoto(targetKidName, choreTitle, cr.index_, dateKey); }} className="shrink-0 text-[8px] font-bold px-1 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition cursor-pointer" title={`Request live photo proof from ${targetKidName}`}>📸 Ask</button>) : null}{freq.frequency === "weekly" && <span className="text-[8px] font-bold px-1 py-0.2 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 uppercase" title="Once-a-week task">1x/wk</span>}{getSpecificKidForChore(choreTitle) ? <span className="shrink-0 text-[8px] px-1.5 py-0.5 rounded font-bold border transition shadow-2xs" style={getMemberBadgeStyle(getMember(getSpecificKidForChore(choreTitle)), isDark)}>{getSpecificKidForChore(choreTitle)}</span> : isBedroomChore(choreTitle) ? <span className="shrink-0 text-[8px] px-1.5 py-0.5 rounded font-bold bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 border border-pink-200 dark:border-pink-800" title="Each child cleans own bedroom">Own Rooms</span> : status.who ? <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded font-bold border transition shadow-2xs" style={getMemberBadgeStyle(assignee, isDark)} title={String(status.who)}>{String(status.who).slice(0, 2)}</span> : <button onClick={() => setActiveDayModal(dateKey)} className="shrink-0 text-[9px] text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-0.5" title="Assign person">+</button>}</div></div>{isBedroomChore(choreTitle) && !getSpecificKidForChore(choreTitle) && <div className="pt-0.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap gap-1">{getKidsPresentOnDate(dateKey).map(kidName => {
              var _a3;
              const isKidDone = !!((_a3 = status.kidsDone) == null ? void 0 : _a3[kidName]);
              const kidMember = getMember(kidName);
              return <button key={kidName} type="button" onClick={e => {
                e.stopPropagation();
                handleToggleKidBedroom(dateKey, cr.index_, kidName);
              }} className={`text-[8.5px] px-1 py-0.5 rounded font-semibold flex items-center gap-0.5 border transition ${isKidDone ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 line-through" : "bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-pink-300"}`} title={`Click to toggle ${kidName}'s room`}><span className="w-1.5 h-1.5 rounded-full inline-block" style={{
                backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#888"
              }} /><span>{kidName}</span>{isKidDone ? "\u2713" : ""}</button>;
            })}</div>}</div>;
          })}{dayChores.length > 3 && <button onClick={() => setActiveDayModal(dateKey)} className="w-full text-center text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline pt-0.5">+{dayChores.length - 3}{" more"}</button>}{dayChores.length === 0 && <div className="text-[10px] text-slate-400 dark:text-slate-500 italic py-2 text-center">No chores</div>}</div></div><button onClick={() => setActiveDayModal(dateKey)} className="mt-2 w-full py-1 text-[10px] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700 rounded text-center font-semibold transition">Manage Day</button></div>;
        })}</div></div>;
      })}</div></div>}{activeTab === "matrix" && <div className="space-y-4"><div id="printable-schedule-card" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 shadow-sm overflow-hidden"><div className="no-print p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3"><div><div className="flex items-center gap-2"><h2 className="text-base font-bold text-slate-900 dark:text-white">Weekly Schedule</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800/60 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />{"Active Week: "}{activeSyncWeek}{" • "}{(activeWeekBwSummary == null ? void 0 : activeWeekBwSummary.text) || "Cadence & Mason arrive Sun Oct 18 @ 5 PM"}</span></div><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{"Single-page Letter Landscape Layout - Printed.pdf"}</p></div><div className="flex flex-wrap items-center gap-2"><div className="relative"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search schedule chores..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500" /></div><button onClick={() => {
        const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || { year: 2026, month: 9, day: 19 };
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
            } else if (r.index_ >= 13 && r.index_ <= 15) {
              const blankWeekly = new Array(15).fill(void 0);
              blankWeekly[9] = "Who: _____________________";
              blankWeekly[14] = false;
              updateItem(printableRangeIndex, r.index_, blankWeekly);
            }
          });
        }
        setNotice("Cleared daily & weekly WHO/DONE assignments for a blank printable template!");
        setTimeout(() => setNotice(null), 3000);
      }} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/80 transition shadow-2xs cursor-pointer" title="Clear WHO/DONE cells to print a blank fill-in sheet"><span>Clear Names (Blank Sheet)</span></button><button onClick={handleAutoAssignCurrentWeek} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/60 transition shadow-2xs cursor-pointer" title="Automatically distribute chores across active members for current week"><Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /><span>Distribute Current Week</span></button><button onClick={() => window.print()} className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 bg-slate-900 dark:bg-indigo-600 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-indigo-500 transition shadow-2xs cursor-pointer" title="Print 1-page Letter Landscape schedule"><span>🖨️ Print Schedule</span></button></div></div><div className="overflow-x-auto"><table id="printable-schedule-table" className="w-full table-fixed border-collapse text-left text-xs" style={{ borderColor: "#C55A11" }}><colgroup><col style={{ width: "21%" }} />{DAY_STYLES.map(d => <React.Fragment key={`col-${d.name}`}><col style={{ width: "7.5%" }} /><col style={{ width: "3.78%" }} /></React.Fragment>)}</colgroup><thead><tr style={{ backgroundColor: "#002060", borderBottom: isDark ? "2px solid #334155" : "1.5px solid rgba(255, 255, 255, 0.5)" }}><th colSpan={15} className="py-2 px-3 text-left text-xl font-bold text-white tracking-tight">Chore Schedule</th></tr><tr><th className="p-0 align-top bg-white dark:bg-slate-900" style={{ borderRight: isDark ? "2px solid #334155" : "2px solid #FFFFFF" }}><div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold py-1.5 text-center uppercase tracking-wider bg-white dark:bg-slate-900">FOR THE WEEK OF:</div><div className="text-lg font-bold py-1.5 text-center text-white" style={{ backgroundColor: "#002060" }}>{(() => {
        const p = parseDateKey(activeSyncWeek || sheetStartDateStr);
        return p ? `${p.month + 1}/${p.day}/${p.year}` : activeSyncWeek || sheetStartDateStr || "10/19/2026";
      })()}</div></th>{DAY_STYLES.map((d, dayIdx) => {
        const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || {
          year: 2026,
          month: 9,
          day: 19
        };
        const colDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx);
        const dayNumber = colDate.getDate();
        return <th key={d.name} colSpan={2} className="py-1.5 px-1 text-center text-white font-bold align-middle" style={{
          backgroundColor: d.color,
          borderRight: dayIdx < 6 ? (isDark ? "2px solid #334155" : "2px solid #FFFFFF") : "none"
        }}><div className="text-xs font-bold uppercase tracking-wider">{d.short.toUpperCase()}</div><div className="text-sm font-bold leading-tight mt-1">{dayNumber}</div></th>;
      })}</tr><tr className="bg-white dark:bg-slate-900 text-[8.5px] font-bold text-slate-900 dark:text-slate-100" style={{ borderTop: isDark ? "2px solid #334155" : "2px solid #FFFFFF", borderBottom: "2px solid #C55A11" }}><th className="py-0.5 px-2 text-left uppercase tracking-wider font-extrabold text-[9px] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">TASK</th>{DAY_STYLES.map(d => <React.Fragment key={`sub-${d.name}`}><th className="py-0.5 px-1 text-center uppercase font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">WHO</th><th className="py-0.5 px-1 text-center font-bold bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" title="Done"><SquareCheckBig className="w-3 h-3 mx-auto text-slate-800 dark:text-slate-200" /></th></React.Fragment>)}</tr></thead><tbody>{printableScheduleItems.filter(item => {
        if (searchQuery && !item.isSectionHeader) {
          if (!(item.task || "").toLowerCase().includes(searchQuery.toLowerCase())) return false;
        }
        if (!item.isSectionHeader && isSignOffChore(item.task)) {
          return false;
        }
        if (!item.isSectionHeader) {
          const tLower = (item.task || "").toLowerCase();
          const isCurbside = tLower.includes("curbside") || tLower.includes("recycling") || tLower.includes("waste");
          if (isCurbside) {
            const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || { year: 2026, month: 9, day: 19 };
            const thuDate = (activeWeekDays && activeWeekDays[3]) || {
              year: parsedStart.year,
              month: parsedStart.month,
              day: parsedStart.day + 3
            };
            if (thuDate && !isCurbsideActiveOnDate(item.task, thuDate.year, thuDate.month, thuDate.day)) {
              return false;
            }
          }
        }
        return true;
      }).map((item, idx) => {
        var _a2, _b2;
        if (item.isSectionHeader) {
          if (item.headerType === "daily") {
            return <tr key={`header-daily-${item.index_}`} className="section-header-row" style={{ backgroundColor: "#002060", borderBottom: "1.5px solid #C55A11" }}><td colSpan={15} className="py-1.5 px-3 font-bold text-sm text-white">Daily Tasks</td></tr>;
          }
          return <tr key={`header-weekly-${item.index_}`} className="section-header-row text-white font-bold" style={{ backgroundColor: "#002060", borderTop: "1.5px solid #002060", borderBottom: "1.5px solid #C55A11" }}><td className="py-1.5 px-3 text-sm font-bold">Weekly Tasks</td><td colSpan={8} className="py-1.5 px-2.5 text-xs font-bold">Description</td><td colSpan={6} className="py-1.5 px-2.5 text-xs font-bold">Initials / Assigned</td></tr>;
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
        const rawDescription = (cr.notes && String(cr.notes).trim())
          ? String(cr.notes).trim()
          : ((_b2 = cr.row) == null ? void 0 : _b2[1]) && (isKidsChecklistTask || isStreamlined) && !familyMembers.some(m => m.name.toLowerCase() === String(cr.row[1]).trim().toLowerCase())
            ? String(cr.row[1]).trim()
            : isLaundryChore(taskTitle)
              ? "(Each Minion Does Their Own) - Wash, Dry, Fold & Put Away"
              : isBedroomChore(taskTitle)
                ? "(Each Minion Does Their Own) - Pick Up Mess / laundry, Organize, Dust & Vacuum"
                : isCleanBasementChore(taskTitle)
                  ? "- Pick Up, Organize, Dust & Vacuum"
                  : isHerdFeedingStationChore(taskTitle)
                    ? "- Clean & Sanitize Bowls, Vacuum & Wipe Space, Dispose of Waste"
                    : taskTitle.toLowerCase().includes("recycling")
                      ? "- Roll recycling bin to curb Thursday evening for Friday pickup (Bi-Weekly)"
                      : taskTitle.toLowerCase().includes("waste")
                        ? "- Roll waste bin to curb Thursday evening for Friday pickup (Bi-Weekly)"
                        : "";
        return <tr key={`row-${cr.index_}-${taskTitle}`} className="chore-row bg-white dark:bg-slate-900 hover:bg-slate-50/60 dark:hover:bg-slate-800/60 transition-colors" style={{ borderBottom: "1px solid #C55A11" }}><td className="py-1.5 px-2 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 align-middle" style={{ borderLeft: "1px solid #C55A11", borderRight: isDark ? "1.5px solid #334155" : "1.5px solid #475569" }}><div className="leading-tight text-slate-900 dark:text-slate-100 font-semibold text-[11px]">{mainTitle}</div>{subTitle && <div className="text-[9.5px] text-slate-700 dark:text-slate-400 font-normal mt-0.5 leading-tight">{subTitle}</div>}</td>{isKidsChecklistTask ? (() => {
          const weeklyKidsDone = getWeeklyKidsStatus(cr.index_, taskTitle);
          const minionInitials = [
            { code: "SG", name: "Sydney" },
            { code: "CV", name: "Cadence" },
            { code: "MV", name: "Mason" },
            { code: "KV", name: "Koda" },
            { code: "KG", name: "Keyanna" }
          ];
          return <React.Fragment><td colSpan={8} className="py-1.5 px-2.5 text-[11px] text-slate-900 dark:text-slate-200 font-medium align-middle bg-white dark:bg-slate-900" style={{ borderRight: isDark ? "1.5px solid #334155" : "1.5px solid #475569" }}>{rawDescription}</td><td colSpan={6} className="py-1.5 px-2.5 align-middle bg-white dark:bg-slate-900" style={{ borderRight: "1px solid #C55A11" }}><div className="flex items-center justify-between gap-1 text-[11px] font-semibold text-slate-900 dark:text-slate-200">{minionInitials.map(m => {
            const isDone = !!weeklyKidsDone[m.name];
            const kidMember = getMember(m.name);
            return <button key={m.code} type="button" onClick={() => handleToggleWeeklyKidChore(cr.index_, m.name, taskTitle)} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold border transition cursor-pointer hover:opacity-85 shadow-2xs" style={getMemberBadgeStyle(kidMember, isDark)} title={`${m.name} (${m.code}) — Click to toggle`}><span>{m.code}</span><span className={`inline-block min-w-[14px] text-center ${isDone ? "text-emerald-700 dark:text-emerald-300 font-black" : "opacity-40"}`}>{isDone ? "✓" : "—"}</span></button>;
          })}</div></td></React.Fragment>;
        })() : isStreamlined ? (() => {
          const singleStatus = getSingleWeeklyStatus(cr.index_, taskTitle);
          const cleanWho = singleStatus.who && !singleStatus.who.startsWith("Who:") && !singleStatus.who.startsWith("Assigned:") ? singleStatus.who : "";
          const streamlinedMember = getMember(cleanWho);
          return <React.Fragment><td colSpan={8} className="py-1.5 px-2.5 text-[11px] text-slate-900 dark:text-slate-200 font-medium align-middle bg-white dark:bg-slate-900" style={{ borderRight: isDark ? "1.5px solid #334155" : "1.5px solid #475569" }}>{rawDescription}</td><td colSpan={4} className="py-1.5 px-2.5 align-middle bg-white dark:bg-slate-900" style={{ borderRight: isDark ? "1.5px solid #334155" : "1.5px solid #475569" }}><div className="flex items-baseline gap-1.5 text-[11px]"><span className="font-semibold text-slate-900 dark:text-slate-200 shrink-0">Who:</span><div className={`flex-1 min-w-0 rounded px-1 ${streamlinedMember ? "border shadow-2xs" : ""}`} style={streamlinedMember ? getMemberBadgeStyle(streamlinedMember, isDark) : undefined}><select value={cleanWho} onChange={e => handleUpdateSingleWeeklyChore(cr.index_, taskTitle, {
            who: e.target.value
          })} className="w-full text-[11px] py-0.5 px-0 bg-transparent font-bold focus:outline-none cursor-pointer" style={{ color: streamlinedMember ? (isDark ? streamlinedMember.darkText || "#F1F5F9" : streamlinedMember.text || "#334155") : (isDark ? "#F1F5F9" : "#0F172A") }}><option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"></option><optgroup label="Full-Time Occupants" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{m.name}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{familyMembers.filter(m => m.type === "biweekly").map(m => <option key={m.id} value={m.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{m.name}</option>)}</optgroup><optgroup label="Casual Assignees" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{m.name}</option>)}</optgroup><optgroup label="Special Groups" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"><option value="All Non-Casual" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">All Non-Casual</option><option value="All Kids" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">All Kids</option><option value="Parents" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Parents</option></optgroup></select></div></div></td><td colSpan={2} className="py-1.5 px-2 align-middle bg-white dark:bg-slate-900 text-left" style={{ borderRight: "1px solid #C55A11" }}><button type="button" onClick={() => handleUpdateSingleWeeklyChore(cr.index_, taskTitle, {
            done: !singleStatus.done
          })} className="inline-flex items-baseline gap-1 font-semibold text-[11px] text-slate-900 dark:text-slate-200 cursor-pointer w-full" title="Click to toggle Done"><span>Done:</span><span className={`inline-block flex-1 min-w-[32px] text-center border-b ${isDark ? "border-slate-500" : "border-slate-700"} ${singleStatus.done ? "text-emerald-700 dark:text-emerald-400 font-bold" : "text-transparent select-none"}`}>{singleStatus.done ? "✓" : "______"}</span></button></td></React.Fragment>;
        })() : (/* BRANCH C: Standard Daily Chores (Mon-Sun Columns) */
          DAY_STYLES.map((d, dayIdx) => {
            var _a3, _b3, _c2, _d;
            const whoCol = 1 + dayIdx * 2;
            const doneCol = 2 + dayIdx * 2;
            const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || {
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
            let whoVal = (cellStatus && cellStatus.who !== undefined && cellStatus.who !== "")
              ? String(cellStatus.who).trim()
              : curRowWho !== void 0 && curRowWho !== null
                ? String(curRowWho).trim()
                : "";
            if (whoVal === "Cadence" || whoVal === "Mason") {
              const bw = getBiWeeklyStatus(colDate.getFullYear(), colDate.getMonth(), colDate.getDate());
              if (!bw.isFullStay && !bw.isDepartureDay) {
                whoVal = "";
              }
            }
            const isDone = (cellStatus && cellStatus.hasExplicitRecord)
              ? !!cellStatus.done
              : curRowDone !== void 0 && curRowDone !== null
                ? curRowDone === true || String(curRowDone).toLowerCase() === "true"
                : (cellStatus ? !!cellStatus.done : false);
            const cellMember = getMember(whoVal);
            const badgeStyle = cellMember ? getMemberBadgeStyle(cellMember, isDark) : undefined;
            return <React.Fragment key={d.name}><td className="p-1 text-center align-middle bg-white dark:bg-slate-900" style={{ borderRight: isDark ? "1px solid #334155" : "1px solid #94A3B8" }}><div className={`w-full rounded px-1 py-0.5 transition ${cellMember ? "border shadow-2xs" : ""}`} style={badgeStyle}><select value={whoVal} onChange={e => {
              handleUpdatePrintableCell(cr.index_, dayIdx, "who", e.target.value, taskTitle);
            }} className="w-full text-[11px] py-0.5 px-0 bg-transparent font-bold text-center focus:outline-none cursor-pointer" style={{ color: cellMember ? (isDark ? cellMember.darkText || "#F1F5F9" : cellMember.text || "#334155") : (isDark ? "#F1F5F9" : "#0F172A") }}><option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"></option><optgroup label="Full-Time Occupants" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{familyMembers.filter(m => m.type === "regular").map(m => <option key={m.id} value={m.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{m.name}</option>)}</optgroup><optgroup label="Bi-Weekly Occupants" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{familyMembers.filter(m => m.type === "biweekly").map(m => <option key={m.id} value={m.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{m.name}</option>)}</optgroup><optgroup label="Casual Assignees" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{familyMembers.filter(m => m.type === "casual").map(m => <option key={m.id} value={m.name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{m.name}</option>)}</optgroup><optgroup label="Special Groups" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"><option value="Non-Casual" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Non-Casual</option><option value="All Non-Casual" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">All Non-Casual</option><option value="Each Child" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Each Child</option><option value="All Kids" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">All Kids</option><option value="Parents" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Parents</option></optgroup>{whoVal && !familyMembers.some(m => m.name === whoVal) && !["Non-Casual", "All Non-Casual", "Each Child", "All Kids", "Parents"].includes(whoVal) && <option value={whoVal} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{whoVal}</option>}</select></div></td><td className="p-1 text-center align-middle bg-white dark:bg-slate-900" style={{ borderRight: dayIdx < 6 ? (isDark ? "1.5px solid #334155" : "1.5px solid #475569") : "1px solid #C55A11" }}><button type="button" onClick={() => {
              handleUpdatePrintableCell(cr.index_, dayIdx, "done", !isDone, taskTitle);
            }} className="w-full h-6 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer" title={isDone ? "Mark as not done" : "Mark as done"}>{isDone ? <span className="text-emerald-700 dark:text-emerald-400 font-black text-xs">{"✓"}</span> : <span className="text-slate-300 dark:text-slate-600 print:hidden text-[10px]">☐</span>}</button></td></React.Fragment>;
          }))}</tr>;
      })}{/* Decorative 7-Day Color Band matching Weekly Chores Original - Printed.pdf */}
          <tr className="h-14 print:h-5 color-band-row"><td style={{ backgroundColor: "#002060" }} />{DAY_STYLES.map(d => <td key={`band-${d.name}`} colSpan={2} style={{ backgroundColor: d.color }} />)}</tr>
          {/* Weekly Sign-Off Row matching Weekly Chores Original - Printed.pdf */}
          <tr className="sign-off-row bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100" style={{ borderTop: isDark ? "1px solid #334155" : "1px solid #475569", borderBottom: "2.5px solid #C55A11" }}><td className="py-2 px-2.5 font-semibold text-xs text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900" style={{ borderLeft: "1px solid #C55A11", borderRight: isDark ? "1.5px solid #334155" : "1.5px solid #475569" }}>Weekly Sign-Off</td><td colSpan={12} className="py-2 px-3 text-right font-semibold text-xs text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900" style={{ borderRight: isDark ? "1.5px solid #334155" : "1.5px solid #475569" }}>Parent Initials:</td><td colSpan={2} className="py-2 px-2 text-center bg-white dark:bg-slate-900" style={{ borderRight: "1px solid #C55A11" }}><button type="button" onClick={() => setShowInspectionModal(true)} className="inline-flex items-center justify-center w-full cursor-pointer font-semibold text-xs text-slate-900 dark:text-slate-100 hover:opacity-80 transition" title="Click to open Parent Sunday Inspection & Sign-Off"><span className={`inline-block min-w-[56px] border-b ${isDark ? "border-slate-400" : "border-slate-800"} ${signOffStatus.done ? "text-emerald-700 dark:text-emerald-400 font-bold" : "text-transparent select-none"}`}>{signOffStatus.done ? "✓ TV / MV" : "_________"}</span></button></td></tr></tbody></table></div></div><div className="no-print grid grid-cols-1 md:grid-cols-3 gap-4 text-xs"><div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm space-y-2 transition-colors"><div className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-indigo-900 dark:text-indigo-300">HOUSEHOLD ROSTER</span><span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed"><div><strong className="text-slate-900 dark:text-white">{"• Full-Time:"}</strong>{" "}{familyMembers.filter(m => m.type === "regular").map(m => m.name).join(", ") || "Sydney, Thom, Meghan"}</div><div><strong className="text-pink-900 dark:text-pink-300">{"• Bi-Weekly:"}</strong>{" "}{familyMembers.filter(m => m.type === "biweekly").map(m => m.name).join(" & ") || "Cadence & Mason"}</div><div><strong className="text-sky-900 dark:text-sky-300">{"• Casual:"}</strong>{" "}{familyMembers.filter(m => m.type === "casual").map(m => m.name).join(", ") || "Koda, Keyanna"}</div></div></div><div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm space-y-2 transition-colors"><div className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-pink-900 dark:text-pink-300">BI-WEEKLY SCHEDULE</span><span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed"><div>{"• Cadence & Mason: Alternating bi-weekly schedule"}</div><div>{"• Status this week: Not here • Arrive Sunday, Oct. 18 @ 5:00 PM"}</div><div>{"• Transitions: Sundays @ 5:00 PM (alternating bi-weekly from Oct 18)"}</div><div>{"• Off-weeks (This week): Chores split among full-time roster (Thom, Meghan, Sydney)"}</div><div>{"• On-weeks (Starts Oct 19): Included in daily chore rotations"}</div></div></div><div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm space-y-2 transition-colors"><div className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center justify-between"><span className="uppercase tracking-wider text-[11px] text-amber-900 dark:text-amber-300">{'PET CARE ROUTINE ("FEED THE HERD")'}</span><span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">Sheet Row 19–22</span></div><div className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed"><div>{"• Cats (Litter Crew): Morning & evening feeding, scoop litter box daily"}</div><div>{"• Family Dog(s): Morning & evening feeding, outdoor routine, fresh water"}</div><div>{"• Herd Feeding Station: Refill all water bowls daily, wipe station, dispose waste"}</div><div>{"• Routine: Daily feeding, fresh water & station cleanup"}</div></div></div></div></div>}{activeTab === "stats" && <div className="max-w-4xl mx-auto space-y-6"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"><div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Scheduled Chores</span><Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" /></div><div className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{monthStats.totalScheduled}</div><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{"Total across "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</p></div><div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Completed Chores</span><CircleCheck className="w-4 h-4 text-emerald-500" /></div><div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-2">{monthStats.totalCompleted}</div><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{monthStats.completionRate}% completion rate</p></div><div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Active Tasks</span><ListTodo className="w-4 h-4 text-indigo-500 dark:text-indigo-400" /></div><div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">{choreRows.length}</div><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Daily & weekly routines</p></div><div className="bg-gradient-to-br from-amber-50 dark:from-amber-950/40 to-orange-50/70 dark:to-orange-950/30 p-4 rounded-xl border border-amber-300 dark:border-amber-800 shadow-sm transition-colors"><div className="flex items-center justify-between"><span className="text-xs font-bold text-amber-900 dark:text-amber-300">Current Top Performer</span><Crown className="w-4 h-4 text-amber-600 dark:text-amber-400" /></div><div className="text-xl font-black text-amber-950 dark:text-amber-100 mt-2 truncate">{topPerformer ? topPerformer.name : "TBD"}</div><p className="text-xs text-amber-800 dark:text-amber-300 mt-1 truncate">{topPerformer ? `${topPerformer.done} chores finished` : "Track chores to rank"}</p></div></div><div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl text-white p-5 shadow-md"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/20"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner"><Trophy className="w-6 h-6 text-amber-200" /></div><div><div className="flex items-center gap-2"><span className="text-xs font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">Monthly Incentive Prize</span><span className="text-xs opacity-90">{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</span></div><h3 className="text-base font-extrabold mt-0.5">Top Performer Reward & Recognition</h3></div></div><div className="flex items-center gap-2"><button onClick={() => {
            setIsEditingIncentive(prev => !prev);
            setIncentiveDraft(monthlyIncentive);
            setTargetDraft(monthlyGoalTarget || 25);
          }} className="text-xs font-bold px-3 py-1.5 bg-white text-amber-900 hover:bg-amber-50 rounded-lg shadow-sm transition flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700" /><span>{isEditingIncentive ? "Cancel Edit" : "Customize Incentive & Goal"}</span></button></div></div>{!isEditingIncentive ? <div className="pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"><div className="space-y-1"><div className="text-amber-100 font-medium">Incentive for Highest Monthly Chore Completions:</div><div className="text-sm font-black text-white flex items-center gap-2"><Gift className="w-4 h-4 text-amber-200 shrink-0" /><span>{monthlyIncentive}</span><span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full text-amber-100">Target: {monthlyGoalTarget} Chores</span></div></div>{topPerformer && <div className="bg-white/15 px-3 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2.5 self-start md:self-auto border border-white/20"><Crown className="w-4 h-4 text-amber-200 shrink-0" /><div><div className="text-[10px] text-amber-100 uppercase tracking-wider font-bold">Leading Candidate</div><div className="font-extrabold text-xs text-white">{topPerformer.name}{" ("}{topPerformer.done}{" finished • "}{topPerformer.pct}%)</div></div></div>}</div> : <div className="pt-3 space-y-3 text-xs bg-black/15 p-3 rounded-xl mt-3 border border-white/20"><div className="grid grid-cols-1 md:grid-cols-3 gap-2"><div className="md:col-span-2 space-y-1"><label className="block font-bold text-white text-[11px]">Set Monthly Reward / Incentive Prize for the Top Performer:</label><input type="text" value={incentiveDraft} onChange={e => setIncentiveDraft(e.target.value)} placeholder="e.g. $15 Allowance Bonus, Pizza Night Pick, 1-Day Chore Pass..." className="w-full p-2 bg-white text-slate-900 font-semibold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300" /></div><div className="space-y-1"><label className="block font-bold text-white text-[11px]">Monthly Goal Target (Chores):</label><input type="number" min="5" max="100" value={targetDraft} onChange={e => setTargetDraft(Math.max(1, Number(e.target.value) || 25))} className="w-full p-2 bg-white text-slate-900 font-bold rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-amber-300" /></div></div><div className="flex justify-end gap-2 pt-1"><button onClick={() => {
            if (incentiveDraft.trim()) {
              const cleaned = incentiveDraft.trim();
              const targetNum = targetDraft || 25;
              setMonthlyIncentive(cleaned);
              setMonthlyGoalTarget(targetNum);
              try {
                localStorage.setItem("weekly_chores_monthly_incentive", cleaned);
                localStorage.setItem("weekly_chores_monthly_target", String(targetNum));
              } catch {}
              broadcastLocalUpdate({
                type: "INCENTIVE_UPDATED",
                monthlyIncentive: cleaned,
                monthlyGoalTarget: targetNum
              });
              setIsEditingIncentive(false);
              setNotice(`Updated Monthly Incentive: "${cleaned}" (${targetNum} chores target)`);
              setTimeout(() => setNotice(null), 3e3);
            }
          }} className="px-4 py-2 bg-white text-amber-900 font-extrabold rounded-lg hover:bg-amber-50 transition cursor-pointer shadow-xs">Save Prize &amp; Goal</button></div><div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-1"><span className="opacity-80">Quick ideas:</span><button onClick={() => { setIncentiveDraft("$15 Allowance Bonus & Pizza Night Pick"); setTargetDraft(25); }} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white cursor-pointer">{"$15 + Pizza Night (25)"}</button><button onClick={() => { setIncentiveDraft("1-Day Chore Exemption Pass & Movie Pick"); setTargetDraft(30); }} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white cursor-pointer">1-Day Chore Pass (30)</button><button onClick={() => { setIncentiveDraft("$20 Gift Card & Weekend Treat"); setTargetDraft(35); }} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white cursor-pointer">{"$20 Gift Card (35)"}</button><button onClick={() => { setIncentiveDraft("Family Ice Cream Outing of Their Choice"); setTargetDraft(20); }} className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white cursor-pointer">Ice Cream Outing (20)</button></div></div>}</div><div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm transition-colors"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800"><div><div className="flex items-center gap-2"><h3 className="text-base font-bold text-slate-900 dark:text-white">Family Members Completion</h3><span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">Kids & Minions ({rankedMembers.length}{" Members)"}</span></div><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{"Monthly Total Tracker ranked by total chores completed for "}{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}. Kids and minions completion leaderboard competing for the monthly reward.</p></div><div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"><Award className="w-4 h-4 text-amber-500" /><span className="font-semibold text-slate-700 dark:text-slate-300">Ranked by Monthly Completions</span></div></div><div className="space-y-3">{rankedMembers.map((m, idx) => {
            const isFirst = idx === 0 && m.done > 0;
            const isSecond = idx === 1 && m.done > 0;
            const isThird = idx === 2 && m.done > 0;
            return <div key={m.id} className={`p-3.5 rounded-xl border transition-all ${isFirst ? "border-amber-400 bg-amber-50/40 dark:bg-amber-950/30 ring-1 ring-amber-300 dark:ring-amber-900/60 shadow-sm" : "border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`}><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5"><div className="flex items-center gap-3"><div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${isFirst ? "bg-amber-500 text-white shadow-xs" : isSecond ? "bg-slate-300 text-slate-800" : isThird ? "bg-amber-700/80 text-white" : "bg-slate-100 text-slate-500"}`}>{isFirst ? <Crown className="w-4 h-4" /> : `#${idx + 1}`}</div><div className="flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full shrink-0" style={{
              backgroundColor: m.color
            }} /><span className="font-bold text-sm text-slate-900 dark:text-white">{m.name}</span>{m.role && <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">({m.role}{" = "}{m.role === "Supreme Overlord" ? "Parent" : "Kid"})</span>}<span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${m.type === "biweekly" ? "bg-pink-50 text-pink-700 border-pink-200" : m.type === "casual" ? "bg-sky-50 text-sky-700 border-sky-200" : "bg-slate-100 text-slate-600 border-slate-200"}`}>{m.residency}</span>{isFirst && <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1 shadow-2xs"><span>{"\u{1F3C6}"}</span><span>{"Top Performer • Incentive Winner"}</span></span>}</div></div><div className="flex items-center gap-3 self-end sm:self-auto text-xs"><div className="text-right"><span className="font-extrabold text-sm text-slate-900 dark:text-white">{m.done}</span><span className="text-slate-500 dark:text-slate-400">{" / "}{m.total}{" completed"}</span></div><span className={`font-black text-xs px-2 py-0.5 rounded-md ${m.pct >= 80 ? "bg-emerald-100 text-emerald-800" : m.pct >= 50 ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-600"}`}>{m.pct}%</span></div></div><div className="w-full bg-slate-200/80 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden"><div className="h-2.5 rounded-full transition-all duration-500" style={{
              width: `${m.pct}%`,
              backgroundColor: isFirst ? "#D97706" : m.color
            }} /></div>{isFirst && <div className="mt-2 pt-2 border-t border-amber-200/60 dark:border-amber-900/60 flex items-center justify-between text-[11px] text-amber-900 dark:text-amber-300 font-medium"><div className="flex items-center gap-1.5"><Gift className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" /><span>{"Qualifying Reward: "}<strong>{monthlyIncentive}</strong></span></div><span className="font-bold text-amber-700 dark:text-amber-400">{"Rank #1 in "}{MONTH_NAMES[selectedMonth]}</span></div>}</div>;
          })}</div></div></div>}{activeTab === "roster" && <div className="max-w-5xl mx-auto space-y-6"><div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200"><div><div className="flex items-center gap-2"><h2 className="text-lg font-bold text-slate-900">Household Hub Master Data</h2><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Linked: Monthly Calendar & Printable Weekly Schedule</span></div><p className="text-xs text-slate-500 mt-0.5">Centralized household administration: Family member roster & occupancy, pet care routines, and chore allocation master files.</p></div><div className="flex flex-wrap items-center gap-2"><span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200">{"Selected Week: "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong></span><span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 font-semibold rounded-lg border border-pink-200">{"Kids Week: "}<strong>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong></span><button type="button" onClick={handleSaveAsDefault} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-2xs transition cursor-pointer" title="Save current browser setup as the permanent default in code (.tsx) and weekly-chores-config.json"><span>💾</span><span>Save as Default</span></button><button type="button" onClick={handleExportConfig} className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Download / export current configuration backup file (.json)"><span>⬇️</span><span>Export Config</span></button><label className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 shadow-2xs transition cursor-pointer" title="Import / restore a configuration file (.json)"><span>⬆️</span><span>Import Config</span><input type="file" accept=".json" onChange={handleImportConfigFile} className="hidden" /></label></div></div><div className="my-5 p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-2xs space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-indigo-600" /><h3 className="text-xs font-bold uppercase tracking-wider text-indigo-950">Special Rules & Parameters</h3></div><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Live Analytical Summary</span></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{(() => {
            const activeOverlords = familyMembers.filter(m => m.active !== false && (m.role === "Supreme Overlord" || m.role === "Overseer Supreme")).map(m => m.name);
            const overlordsLabel = activeOverlords.length > 0 ? activeOverlords.join(" & ") : "None";
            const activeFullTime = familyMembers.filter(m => m.active !== false && m.type === "regular").map(m => m.name);
            const activeBiWeekly = familyMembers.filter(m => m.active !== false && m.type === "biweekly").map(m => m.name);
            const activeHereThisWeek = isBiWeeklyHereThisWeek ? [...activeFullTime, ...activeBiWeekly] : activeFullTime;
            return <><div className="p-3 bg-white/90 rounded-lg border border-indigo-100 shadow-2xs space-y-1"><span className="font-bold text-indigo-900 flex items-center gap-1.5"><span>{"\u{1F451}"}</span>{"Supreme Overlords (Parents) & Minions (Kids)"}</span><p className="text-[11px] text-slate-600 leading-relaxed"><strong>{overlordsLabel}</strong>{", AKA "}<em>Supreme Overlords</em>{", actively share daily chores with the "}<strong>Kids</strong>{", AKA "}<em>Minions</em>.<br /><strong>Sunday Supper Rule:</strong>{" On Sundays, "}<em>Make Supper</em>{" is always assigned exclusively to "}<strong>{overlordsLabel}</strong>.<br />{"They also conduct the Sunday "}<strong>Weekly Sign-Off & Inspection</strong>.</p></div><div className="p-3 bg-white/90 rounded-lg border border-pink-100 shadow-2xs space-y-1"><span className="font-bold text-pink-900 flex items-center gap-1.5"><span>{"\u{1F3E0}"}</span>{" Custody Rotation: Kids Week"}</span><p className="text-[11px] text-slate-600 leading-relaxed">{"For selected week, "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong>{", Kids Week = "}<strong className={isBiWeeklyHereThisWeek ? "text-emerald-700" : "text-rose-700"}>{isBiWeeklyHereThisWeek ? "Active" : "Inactive"}</strong>.<br /><strong>{activeBiWeekly.length > 0 ? activeBiWeekly.join(" & ") : "Bi-Weekly Occupants"}</strong>{" are on a bi-weekly rotation between our house and their mother's house. They arrive and leave on alternating Sundays at "}<strong>5:00 PM</strong>{". "}{isBiWeeklyHereThisWeek ? `Chores for this week are distributed across all ${activeHereThisWeek.length} active household members (${activeHereThisWeek.join(", ")}).` : `Chores for this week are distributed among the full-time roster (${activeFullTime.join(", ")}).`}</p></div></>;
          })()}<div className="p-3 bg-white/90 rounded-lg border border-amber-100 shadow-2xs space-y-1"><span className="font-bold text-amber-900 flex items-center gap-1.5"><span>{"\u{1F69B}"}</span>{" Alternating Curbside Schedule"}</span><p className="text-[11px] text-slate-600 leading-relaxed">{"Curbside tasks alternate bi-weekly on Thursday evenings for the "}<strong>Full-Time</strong>{" & "}<strong>Bi-Weekly</strong>{" occupants."}<br />{(() => {
            const thu = activeWeekDays[3] || activeWeekDays[0];
            const wasteActive = thu ? isCurbsideActiveOnDate("Curbside Waste", thu.year, thu.month, thu.day) : false;
            const recyclingActive = thu ? isCurbsideActiveOnDate("Curbside Recycling", thu.year, thu.month, thu.day) : true;
            return <>{"For selected week, "}<strong>{activeSyncWeek || hubScheduleConfig.activeWeekStart}</strong>{":"}<br />{"Waste = "}<strong className={wasteActive ? "text-emerald-700" : "text-rose-700"}>{wasteActive ? "Active" : "Inactive"}</strong><br />{"Recycling = "}<strong className={recyclingActive ? "text-emerald-700" : "text-rose-700"}>{recyclingActive ? "Active" : "Inactive"}</strong></>;
          })()}</p></div></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4"><div className="p-3 bg-purple-50/70 border border-purple-200 rounded-xl"><div className="text-[10px] font-bold text-purple-900 uppercase tracking-wider">Full-Time Occupants</div><div className="text-[8px] italic text-purple-800 leading-tight" style={{ fontSize: "8px" }}>(Eternally working)</div><div className="text-lg font-extrabold text-purple-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "regular").length}{" Members"}</div><div className="text-[11px] text-purple-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "regular").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-pink-50/70 border border-pink-200 rounded-xl"><div className="text-[10px] font-bold text-pink-900 uppercase tracking-wider">Bi-Weekly Occupants</div><div className="text-[8px] italic text-pink-800 leading-tight" style={{ fontSize: "8px" }}>(Half-Timers)</div><div className="text-lg font-extrabold text-pink-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "biweekly").length}{" Members"}</div><div className="text-[11px] text-pink-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "biweekly").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-sky-50/70 border border-sky-200 rounded-xl"><div className="text-[10px] font-bold text-sky-900 uppercase tracking-wider">Casual Assignees</div><div className="text-[8px] italic text-sky-800 leading-tight" style={{ fontSize: "8px" }}>(Manually added to schedule)</div><div className="text-lg font-extrabold text-sky-950 mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "casual").length}{" Members"}</div><div className="text-[11px] text-sky-700 break-words leading-snug mt-0.5">{familyMembers.filter(m => m.active !== false && m.type === "casual").map(m => m.name).join(", ") || "None"}</div></div><div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl"><div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">The Herd</div><div className="text-[8px] italic text-amber-800 leading-tight" style={{ fontSize: "8px" }}>(Various beasts)</div><div className="text-lg font-extrabold text-amber-950 mt-0.5">{rosterPets.filter(p => p.active !== false).length}{" Pets"}</div><div className="text-[11px] text-amber-800 break-words leading-snug mt-0.5">{rosterPets.filter(p => p.active !== false).map(p => p.name).join(", ") || "None"}</div></div></div><div className="space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><Users className="w-4 h-4 text-indigo-600" /><h3 className="text-sm font-bold text-slate-900">Household Members</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">{"Rows 5\u201311 \u2022 Linked Data"}</span></div><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{familyMembers.length}{" Registered Occupants"}</span><button type="button" onClick={() => setShowAddMemberModal(true)} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-xs transition cursor-pointer" title="Add a new household member"><Plus className="w-3.5 h-3.5" /><span>Add Member</span></button></div></div><div className="overflow-x-auto min-w-0 border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs min-w-[850px]"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Member</th><th className="p-3">Age & Tier</th><th className="p-3">Birthday</th><th className="p-3">Email</th><th className="p-3">Role</th><th className="p-3">Occupancy</th><th className="p-3">Special Rotation Groups</th><th className="p-3 text-center">Active Status</th><th className="p-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-200">{familyMembers.map(member => {
            const roleVal = member.role === "Supreme Overlord" || member.role === "Overseer Supreme" ? "Supreme Overlord" : "Minion";
            const resVal = member.type === "biweekly" ? "Bi-Weekly" : member.type === "casual" ? "Casual" : "Full-Time";
            const allGroupTypes = ["Parents", "Kids", "Non-Casual", "All"];
            const selectedGroups = String(member.specialGroups || "")
              .split(",")
              .map(s => s.trim())
              .filter(Boolean);
            const isDropdownOpen = openMemberGroupDropdown === member.index_;
            const isEditingMember = editingMemberIndex === member.index_;
            const memberProfile = getUserProfile(member.name, member);
            const memberAge = calculateAge(memberProfile.birthday);
            const memberTier = getAgeTier(memberAge, member.role, memberProfile.tierOverride);
            const hasOverride = Boolean(memberProfile.tierOverride && memberProfile.tierOverride !== "auto");
            const memberBdayDays = getDaysUntilBirthday(memberProfile.birthday);
            const canManageEmail = memberTier === "teen" || memberTier === "adult";

            const saveMemberInlineEdit = () => {
              const cleanName = memberEditName.trim() || member.name;
              handleUpdateRosterMember(member.index_, {
                name: cleanName
              });
              setEditingMemberIndex(null);
            };
            const toggleGroupType = (grpType: string) => {
              const currentSet = new Set(selectedGroups);
              if (currentSet.has(grpType)) {
                currentSet.delete(grpType);
              } else {
                currentSet.add(grpType);
              }
              const nextOrdered = allGroupTypes.filter(g => currentSet.has(g));
              handleUpdateRosterMember(member.index_, {
                specialGroups: nextOrdered.join(", ")
              });
            };
            return <tr key={`${member.index_}-${member.name}`} className={`transition ${isEditingMember ? "bg-indigo-50/50" : "hover:bg-slate-50/70"}`}><td className="p-3 font-semibold text-slate-800"><div className="flex items-center gap-2.5"><button type="button" onClick={() => setProfileModalTarget(member.name)} className="relative w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 flex items-center justify-center text-sm shadow-2xs shrink-0 hover:scale-105 transition cursor-pointer" title="Edit avatar and profile"><span>{memberProfile.avatarEmoji || (member.role === "Supreme Overlord" || member.role === "Overseer Supreme" ? "👑" : "🌟")}</span><span className="absolute -bottom-1 -right-1 px-1 py-0.2 rounded bg-white text-slate-900 font-mono font-black text-[8px] border border-slate-200 shadow-2xs">{memberProfile.initials || generateInitials(member.name)}</span></button><div className="min-w-0">{isEditingMember ? <input type="text" value={memberEditName} onChange={e => setMemberEditName(e.target.value)} onKeyDown={e => { if (e.key === "Enter") saveMemberInlineEdit(); if (e.key === "Escape") setEditingMemberIndex(null); }} className="w-32 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus /> : <button type="button" onClick={() => setProfileModalTarget(member.name)} className="font-bold text-slate-900 hover:text-indigo-600 transition flex items-center gap-1 text-left cursor-pointer truncate"><span>{memberProfile.firstName || member.name}</span>{memberProfile.lastName && <span className="text-slate-400 font-medium text-[11px]">{memberProfile.lastName}</span>}</button>}{memberProfile.bio && <div className="text-[10px] text-slate-500 italic truncate max-w-[140px]">"{memberProfile.bio}"</div>}</div></div></td><td className="p-3"><button type="button" onClick={() => setProfileModalTarget(member.name)} className="text-left cursor-pointer group space-y-1 block" title={`Click to edit ${member.name}'s profile and tier`}><div className="flex items-center gap-1.5"><span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 transition">{memberAge !== null ? `${memberAge} yrs old` : <span className="text-slate-400 font-normal italic">Age unset</span>}</span></div><div className="flex items-center gap-1 flex-wrap">{memberTier === "adult" ? <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-purple-100 text-purple-900 border border-purple-200 dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-800 shadow-2xs"><span>👑</span><span>Adult</span></span> : memberTier === "teen" ? <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-900 border border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800 shadow-2xs" title="Teen Autonomy (12+) • Profile & Email enabled"><span>⚡</span><span>Teen (12+)</span></span> : <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800 shadow-2xs" title="Junior Explorer (≤11) • High Visual Stimulation"><span>🌟</span><span>Junior (≤11)</span></span>}{hasOverride && <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-900 shadow-2xs" title="Tier manually overridden by parent admin"><span>⚙️</span><span>Override</span></span>}</div></button></td><td className="p-3">{memberProfile.birthday ? <button type="button" onClick={() => setProfileModalTarget(member.name)} className="text-left cursor-pointer group" title="Click to edit birthday"><div className="font-mono text-[11px] text-slate-700 group-hover:text-indigo-600 font-medium">{memberProfile.birthday}</div>{memberBdayDays !== null && <div className="text-[10px] font-bold text-pink-600 flex items-center gap-0.5"><span>🎂</span><span>{memberBdayDays === 0 ? "Today!" : `in ${memberBdayDays}d`}</span></div>}</button> : <button type="button" onClick={() => setProfileModalTarget(member.name)} className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-2 py-0.5 rounded-md border border-slate-200 transition cursor-pointer">+ Set Date</button>}</td><td className="p-3">{memberProfile.email ? <button type="button" onClick={() => setProfileModalTarget(member.name)} className="font-mono text-[11px] text-slate-700 hover:text-indigo-600 truncate max-w-[150px] text-left cursor-pointer block" title={`Click to edit email (${memberProfile.email})`}>{memberProfile.email}</button> : canManageEmail ? <button type="button" onClick={() => setProfileModalTarget(member.name)} className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded-md border border-indigo-200 transition cursor-pointer">+ Add Email</button> : <button type="button" onClick={() => setProfileModalTarget(member.name)} className="text-[10px] font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 transition cursor-pointer flex items-center gap-1" title="Restricted for junior minions (Parent managed in this modal)"><Lock className="w-3 h-3 text-slate-400" /><span>Parent Only</span></button>}</td><td className="p-3"><select value={roleVal} onChange={e => handleUpdateRosterMember(member.index_, { role: e.target.value })} className={`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${roleVal === "Supreme Overlord" ? "bg-amber-100 text-amber-900 border border-amber-300" : "bg-indigo-50 text-indigo-800 border border-indigo-200"}`}><option value="Supreme Overlord">Supreme Overlord (Parent)</option><option value="Minion">Minion (Kid)</option></select></td><td className="p-3"><select value={resVal} onChange={e => handleUpdateRosterMember(member.index_, { residency: e.target.value })} className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${resVal === "Bi-Weekly" ? "bg-pink-50 text-pink-700 border border-pink-200" : resVal === "Casual" ? "bg-sky-50 text-sky-700 border border-sky-200" : "bg-slate-100 text-slate-700 border border-slate-200"}`}><option value="Full-Time">Full-Time</option><option value="Bi-Weekly">Bi-Weekly</option><option value="Casual">Casual</option></select></td><td className="p-3 relative"><button type="button" onClick={() => setOpenMemberGroupDropdown(isDropdownOpen ? null : member.index_)} className="w-full min-w-[180px] flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"><span className="truncate">{selectedGroups.length > 0 ? selectedGroups.join(", ") : "None selected"}</span><ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${isDropdownOpen ? "rotate-180 text-indigo-600" : ""}`} /></button>{isDropdownOpen && <><div className="fixed inset-0 z-20" onClick={() => setOpenMemberGroupDropdown(null)} /><div className="absolute left-3 top-full mt-1 z-30 w-48 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1"><div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">Rotation Groups</div>{allGroupTypes.map(grpType => {
              const isChecked = selectedGroups.includes(grpType);
              return <label key={grpType} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => toggleGroupType(grpType)} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={`text-xs ${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}`}>{grpType}</span></label>;
            })}</div></>}</td><td className="p-3 text-center"><select value={member.active ? "true" : "false"} onChange={e => handleUpdateRosterMember(member.index_, { active: e.target.value === "true" })} className={`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${member.active ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : "text-slate-500 bg-slate-100 border border-slate-200"}`}><option value="true">{"\u2713 Active"}</option><option value="false">{"\u25CB Inactive"}</option></select></td><td className="p-3 text-right"><div className="inline-flex items-center justify-end gap-1">{roleVal === "Supreme Overlord" ? (<button type="button" onClick={() => handleOpenParentPage(member.name)} className="px-2 py-1 text-[11px] font-extrabold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition cursor-pointer flex items-center gap-1 shadow-2xs mr-1" title={`Open ${member.name}'s dedicated Admin Hub page`}><span>👑</span><span>Page ↗</span></button>) : (<button type="button" onClick={() => handleOpenKidPage(member.name)} className="px-2 py-1 text-[11px] font-extrabold text-indigo-950 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition cursor-pointer flex items-center gap-1 shadow-2xs mr-1" title={`Open ${member.name}'s dedicated Minion page`}><span>🎒</span><span>Page ↗</span></button>)}<button type="button" onClick={() => setProfileModalTarget(member.name)} className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer" title={`Edit profile, birthday, email & avatar for ${member.name}`}>👤</button>{isEditingMember ? <><button type="button" onClick={saveMemberInlineEdit} className="p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer" title="Save name"><Check className="w-3.5 h-3.5" /></button><button type="button" onClick={() => setEditingMemberIndex(null)} className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer" title="Cancel"><X className="w-3.5 h-3.5" /></button></> : <button type="button" onClick={() => {
              setEditingMemberIndex(member.index_);
              setMemberEditName(member.name);
            }} className="p-1.5 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition cursor-pointer" title={`Rename ${member.name}`}><Pen className="w-3.5 h-3.5" /></button>}<button type="button" onClick={() => handleDeleteRosterMember(member.index_, member.name)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer" title={`Remove ${member.name} from Household Members`}><Trash2 className="w-3.5 h-3.5" /></button></div></td></tr>;
          })}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><span className="text-base">{"\u{1F43E}"}</span><h3 className="text-sm font-bold text-slate-900">Household Pets</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{"Rows 27\u201332 \u2022 Linked Data"}</span></div><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{rosterPets.length}{" Registered Pets"}</span><button type="button" onClick={() => setShowAddPetModal(true)} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-xs transition cursor-pointer" title="Add a new household pet member"><Plus className="w-3.5 h-3.5" /><span>Add Member</span></button></div></div><div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3">Name</th><th className="p-3">Species</th><th className="p-3">Feeding Routine</th><th className="p-3">Care Responsibilities</th><th className="p-3 text-center">Active Status</th><th className="p-3 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-200">{rosterPets.map(pet => {
            const speciesOptions = ["Dog", "Cat", "Bird", "Fish", "Small Pet", "Other"];
            const currentSpecies = pet.type || "Dog";
            if (!speciesOptions.includes(currentSpecies)) {
              speciesOptions.unshift(currentSpecies);
            }
            const isEditingPet = editingPetIndex === pet.index_;
            const savePetInlineEdit = () => {
              const cleanName = petEditDraft.name.trim() || pet.name;
              handleUpdateRosterPet(pet.index_, {
                name: cleanName,
                routine: petEditDraft.routine.trim(),
                care: petEditDraft.care.trim()
              });
              setEditingPetIndex(null);
            };
            return <tr key={`${pet.index_}-${pet.name}`} className={`transition ${isEditingPet ? "bg-amber-50/60 dark:bg-amber-950/40" : "hover:bg-slate-50/70 dark:hover:bg-slate-800/50"}`}><td className="p-3 font-semibold text-slate-800 dark:text-slate-200"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: pet.color }} /><span className="text-base shrink-0">{pet.icon}</span>{isEditingPet ? <input type="text" value={petEditDraft.name} onChange={e => setPetEditDraft(prev => ({ ...prev, name: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") savePetInlineEdit(); if (e.key === "Escape") setEditingPetIndex(null); }} className="w-28 px-2 py-1 text-xs font-bold text-slate-900 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" autoFocus /> : <span className="px-2 py-0.5 rounded-full font-bold text-[11px] border transition shadow-2xs" style={getPetBadgeStyle(pet, isDark)}>{pet.name}</span>}</div></td><td className="p-3"><select value={currentSpecies} onChange={e => handleUpdateRosterPet(pet.index_, { type: e.target.value })} className={`px-2.5 py-1 rounded-lg font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${currentSpecies === "Dog" ? "bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800" : currentSpecies === "Cat" ? "bg-orange-50 text-orange-800 border border-orange-200 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800" : "bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700"}`}>{speciesOptions.map(sp => <option key={sp} value={sp}>{sp}</option>)}</select></td><td className="p-3 font-medium text-slate-700 dark:text-slate-300">{isEditingPet ? <input type="text" value={petEditDraft.routine} onChange={e => setPetEditDraft(prev => ({ ...prev, routine: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") savePetInlineEdit(); if (e.key === "Escape") setEditingPetIndex(null); }} className="w-full min-w-[130px] px-2 py-1 text-xs font-medium text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" /> : pet.routine}</td><td className="p-3 text-slate-600 dark:text-slate-400 max-w-md">{isEditingPet ? <input type="text" value={petEditDraft.care} onChange={e => setPetEditDraft(prev => ({ ...prev, care: e.target.value }))} onKeyDown={e => { if (e.key === "Enter") savePetInlineEdit(); if (e.key === "Escape") setEditingPetIndex(null); }} className="w-full min-w-[220px] px-2 py-1 text-xs text-slate-800 bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" /> : pet.care}</td><td className="p-3 text-center"><select value={pet.active ? "true" : "false"} onChange={e => handleUpdateRosterPet(pet.index_, { active: e.target.value === "true" })} className={`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 ${pet.active ? "text-emerald-700 bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800" : "text-slate-500 bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"}`}><option value="true">{"\u2713 Active"}</option><option value="false">{"\u25CB Inactive"}</option></select></td><td className="p-3 text-right"><div className="inline-flex items-center justify-end gap-1">{isEditingPet ? <><button type="button" onClick={savePetInlineEdit} className="p-1.5 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition cursor-pointer" title="Save changes"><Check className="w-3.5 h-3.5" /></button><button type="button" onClick={() => setEditingPetIndex(null)} className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer" title="Cancel editing"><X className="w-3.5 h-3.5" /></button></> : <button type="button" onClick={() => {
              setEditingPetIndex(pet.index_);
              setPetEditDraft({
                name: pet.name,
                routine: pet.routine,
                care: pet.care
              });
            }} className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/50 rounded-lg transition cursor-pointer" title={`Edit ${pet.name}`}><Pen className="w-3.5 h-3.5" /></button>}<button type="button" onClick={() => handleDeleteRosterPet(pet.index_, pet.name)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition cursor-pointer" title={`Remove ${pet.name} from Household Pets`}><Trash2 className="w-3.5 h-3.5" /></button></div></td></tr>;
          })}</tbody></table></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Layers className="w-4 h-4 text-purple-600" /><h3 className="text-sm font-bold text-slate-900">Occupancy Categories & Rules</h3><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Rows 14–17</span></div></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">{hubOccupancyCategories.map(cat => <div key={cat.type} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 shadow-2xs"><div className="flex items-center justify-between"><span className="font-bold text-sm text-slate-900">{cat.type}</span><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Active</span></div><div className="text-[11px] font-semibold text-indigo-700">{cat.description}</div><p className="text-[11px] text-slate-600 leading-snug"><strong>Rule:</strong>{" "}{cat.rules}</p></div>)}</div></div><div className="mt-8 pt-5 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs"><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-600" /><span>Special Rotation Groups</span></h3><span className="text-[10px] text-slate-500 font-semibold">Rows 20–25</span></div><div className="space-y-2">{hubSpecialGroups.map(grp => <div key={grp.name} className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><div className="flex items-center justify-between"><span className="font-bold text-slate-900">{grp.name}</span><span className="text-[10px] text-slate-400 font-medium">Group</span></div><div className="text-[11px] text-slate-600 mt-1 leading-snug">{grp.members}</div></div>)}</div></div><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Settings2 className="w-4 h-4 text-purple-600" /><span>Schedule Configurations</span></h3><span className="text-[10px] text-slate-500 font-semibold">Rows 18–21</span></div><div className="space-y-2"><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Active Week Start Date</span><div className="text-sm font-extrabold text-indigo-600 mt-0.5">{hubScheduleConfig.activeWeekStart}</div><span className="text-[10px] text-slate-500">Scope: Printable Weekly Schedule</span></div><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Custody Schedule Rotation</span><div className="text-sm font-extrabold text-pink-600 mt-0.5">{hubScheduleConfig.custodyRotation}</div><span className="text-[10px] text-slate-500">{"Bi-Weekly Schedule \u2022 Members: "}{hubScheduleConfig.custodyMembers}</span></div><div className="p-2.5 rounded-lg border border-slate-200 bg-white shadow-2xs"><span className="font-bold text-slate-900 block">Waste / Recycling Schedule Rotation</span><div className="text-xs font-semibold text-slate-700 mt-0.5">{hubScheduleConfig.wasteRotation}</div><span className="text-[10px] text-slate-500">{"Alternating weeks \u2022 Members: "}{hubScheduleConfig.wasteMembers}</span></div></div></div></div><div className="mt-8 pt-5 border-t border-slate-200 space-y-4"><div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs"><ListTodo className="w-4 h-4" /></div><h3 className="text-base font-bold text-slate-900">Master Chores Template & Registry</h3><span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{hubMasterChores.length}{" Tasks \u2022 Rows 5\u201315 (Cols 6\u201310)"}</span></div><p className="text-xs text-slate-500 mt-1">Central chore configuration defining categories, target days, frequencies, and rotation groups. Changes made here persist directly back to the spreadsheet.</p></div><div className="flex flex-wrap items-center gap-2"><button onClick={() => {
            setShowInlineAddForm(prev => !prev);
          }} className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer" title="Add a new master chore">{showInlineAddForm ? <><X className="w-4 h-4" /><span>Close Add Chore</span></> : <><Plus className="w-4 h-4" /><span>Add Chore</span></>}</button></div></div>{showInlineAddForm && <div className="my-4 p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/50 shadow-md space-y-3 transition-all animate-fadeIn"><div className="flex items-center justify-between pb-2 border-b border-indigo-200"><div className="font-bold text-sm text-indigo-900 flex items-center gap-1.5"><Plus className="w-4 h-4 text-indigo-600" /><span>Add New Master Chore to Household Hub</span></div><button onClick={() => setShowInlineAddForm(false)} className="text-slate-400 hover:text-slate-700 p-1"><X className="w-4 h-4" /></button></div><div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs"><div className="md:col-span-2"><label className="block font-bold text-slate-700 mb-1">{"Chore Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={newMasterDraft.task} onChange={e => setNewMasterDraft(prev => ({
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
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500">{CHORE_CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.icon}{" "}{c.name}</option>)}</select></div><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={newMasterDraft.frequency} onChange={e => {
            const val = e.target.value;
            setNewMasterDraft(prev => ({
              ...{
                ...prev
              },
              frequency: val,
              targetDay: val === "Daily" ? "Mon \u2013 Sun" : val === "Bi-Weekly" ? "Thursday Evening" : "Saturday"
            }));
          }} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><option value="Daily">Daily</option><option value="Once a Week">Once a Week</option><option value="Bi-Weekly">Bi-Weekly</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Target Day(s)</label><select value={newMasterDraft.targetDay} onChange={e => setNewMasterDraft(prev => ({
            ...{
              ...prev
            },
            targetDay: e.target.value
          }))} className="hidden" /><div className="relative"><button type="button" onClick={() => setOpenTargetDayDropdown(openTargetDayDropdown === "NEW_CHORE" ? null : "NEW_CHORE")} className="w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"><span className="truncate">{newMasterDraft.targetDay || "Select days..."}</span><ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${openTargetDayDropdown === "NEW_CHORE" ? "rotate-180 text-indigo-600" : ""}`} /></button>{openTargetDayDropdown === "NEW_CHORE" && <><div className="fixed inset-0 z-20" onClick={() => setOpenTargetDayDropdown(null)} /><div className="absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1"><div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">Select Day(s)</div>{ALL_WEEK_DAYS.map(dayName => { const currentDays = newMasterDraft.selectedTargetDays || parseTargetDayState(newMasterDraft.targetDay).selectedDays; const isChecked = currentDays.includes(dayName); return <label key={dayName} className="flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => { const set = new Set(currentDays); if (set.has(dayName)) set.delete(dayName); else set.add(dayName); const nextDays = ALL_WEEK_DAYS.filter(d => set.has(d)); const nextTarget = formatTargetDayState(nextDays, Boolean(newMasterDraft.customTargetEnabled), newMasterDraft.customTargetText || ""); setNewMasterDraft(prev => ({ ...prev, selectedTargetDays: nextDays, targetDay: nextTarget })); }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={`text-xs ${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}`}>{dayName}</span></label>; })}<div className="pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1"><label className="flex items-center gap-2.5 cursor-pointer select-none"><input type="checkbox" checked={Boolean(newMasterDraft.customTargetEnabled)} onChange={e => { const nextCustom = e.target.checked; const currentDays = newMasterDraft.selectedTargetDays || parseTargetDayState(newMasterDraft.targetDay).selectedDays; const nextTarget = formatTargetDayState(currentDays, nextCustom, newMasterDraft.customTargetText || ""); setNewMasterDraft(prev => ({ ...prev, customTargetEnabled: nextCustom, targetDay: nextTarget })); }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={`text-xs ${newMasterDraft.customTargetEnabled ? "font-bold text-indigo-950" : "font-medium text-slate-700"}`}>Custom</span></label><input type="text" value={newMasterDraft.customTargetText || ""} onChange={e => { const val = e.target.value; const currentDays = newMasterDraft.selectedTargetDays || []; const nextTarget = formatTargetDayState(currentDays, true, val); setNewMasterDraft(prev => ({ ...prev, customTargetEnabled: true, customTargetText: val, targetDay: nextTarget })); }} placeholder="e.g. Thursday Evening..." className="w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500" /></div></div></>}</div></div><div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={newMasterDraft.rotationGroup === "All Non-Casual" ? "Non-Casual" : newMasterDraft.rotationGroup} onChange={e => setNewMasterDraft(prev => ({
            ...{
              ...prev
            },
            rotationGroup: e.target.value
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"><optgroup label="Special Rotation Groups"><option value="Non-Casual">Non-Casual</option><option value="Kids">Kids</option><option value="Parents">Parents</option><option value="All">All</option></optgroup><optgroup label="Individual Members">{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</optgroup></select></div><div className="md:col-span-3"><label className="block font-bold text-slate-700 mb-1">Operational Notes / Routine</label><input type="text" value={newMasterDraft.notes} onChange={e => setNewMasterDraft(prev => ({
            ...{
              ...prev
            },
            notes: e.target.value
          }))} placeholder="Instructions, supplies, details or timing notes..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium" /></div><div className="md:col-span-3 p-3 bg-amber-50/70 border border-amber-200/90 rounded-xl space-y-2.5"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"><label className="flex items-center gap-2 font-bold text-xs text-amber-950 cursor-pointer select-none"><input type="checkbox" checked={Boolean(newMasterDraft.nudgeEnabled)} onChange={e => setNewMasterDraft(prev => ({ ...prev, nudgeEnabled: e.target.checked }))} className="w-4 h-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500 cursor-pointer" /><span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-600" /><span>Enable Scheduled Auto-Nudge Reminder</span></span></label>{newMasterDraft.nudgeEnabled && <div className="flex items-center gap-2 text-xs"><span className="font-bold text-amber-900">Reminder Time:</span><input type="time" value={newMasterDraft.nudgeTime || "16:30"} onChange={e => setNewMasterDraft(prev => ({ ...prev, nudgeTime: e.target.value }))} className="px-2 py-1 text-xs font-bold bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500" /><span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">{formatTime24To12(newMasterDraft.nudgeTime || "16:30")}</span></div>}</div>{newMasterDraft.nudgeEnabled && <div className="space-y-2 pt-1 border-t border-amber-200/70 text-xs"><div className="flex items-center gap-1.5 flex-wrap"><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mr-1">Quick Presets:</span>{QUICK_NUDGE_TIME_PRESETS.map(preset => <button key={preset.time} type="button" onClick={() => setNewMasterDraft(prev => ({ ...prev, nudgeTime: preset.time, nudgeWindow: preset.window, nudgeMessage: prev.nudgeMessage || `Friendly reminder: please ${prev.task || "complete this chore"} (${preset.display})! ⏰` }))} className={`px-2 py-1 rounded-lg text-[10px] font-bold transition border ${newMasterDraft.nudgeTime === preset.time ? "bg-amber-600 text-white border-amber-700 shadow-xs" : "bg-white text-amber-900 border-amber-200 hover:bg-amber-100/70"}`}>{preset.label} ({preset.display})</button>)}</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2"><div><label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">Target Time Window (shown on kid's chore card)</label><input type="text" value={newMasterDraft.nudgeWindow || ""} onChange={e => setNewMasterDraft(prev => ({ ...prev, nudgeWindow: e.target.value }))} placeholder="e.g. After School (3:30 – 5:30 PM), Before Supper..." className="w-full px-2.5 py-1 text-xs bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium" /></div><div><label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">Custom Nudge Message / Prompt</label><input type="text" value={newMasterDraft.nudgeMessage || ""} onChange={e => setNewMasterDraft(prev => ({ ...prev, nudgeMessage: e.target.value }))} placeholder="e.g. Friendly reminder to empty the dishwasher before supper! 🍽️" className="w-full px-2.5 py-1 text-xs bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium" /></div></div></div>}</div></div><div className="flex justify-end gap-2 pt-2 border-t border-indigo-200"><button type="button" onClick={() => setShowInlineAddForm(false)} className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition">Cancel</button><button type="button" onClick={() => handleAddNewMasterChore({ ...newMasterDraft, rotationGroup: newMasterDraft.rotationGroup === "All Non-Casual" ? "Non-Casual" : newMasterDraft.rotationGroup })} disabled={!newMasterDraft.task.trim()} className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition flex items-center gap-1.5"><Plus className="w-3.5 h-3.5" /><span>Add Chore to Master List</span></button></div></div>}<div className="grid grid-cols-2 sm:grid-cols-4 gap-3"><div className="p-3 bg-slate-50 rounded-xl border border-slate-200"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Total Template Chores</span><div className="text-xl font-bold text-slate-900 mt-0.5">{hubMasterChores.length}{" Tasks"}</div><span className="text-[11px] text-slate-500">All registered tasks</span></div><div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200"><span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Daily Chores</span><div className="text-xl font-bold text-blue-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("daily")).length}{" Tasks"}</div><span className="text-[11px] text-blue-600">Mon – Sun rotation</span></div><div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200"><span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">Once a Week</span><div className="text-xl font-bold text-purple-900 mt-0.5">{hubMasterChores.filter(c => { const f = (c.frequency || "").toLowerCase(); return (f.includes("weekly") || f.includes("once")) && !f.includes("bi"); }).length}{" Tasks"}</div><span className="text-[11px] text-purple-600">Saturday & Sunday deep tasks</span></div><div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200"><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Bi-Weekly Tasks</span><div className="text-xl font-bold text-amber-900 mt-0.5">{hubMasterChores.filter(c => c.frequency.toLowerCase().includes("bi-weekly") || c.frequency.toLowerCase().includes("biweekly")).length}{" Tasks"}</div><span className="text-[11px] text-amber-700">Split Curbside Recycling & Waste</span></div></div><div className="pt-2 space-y-3"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div className="relative flex-1 max-w-md"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" /><input type="text" placeholder="Search chores by name, category, group, or notes..." value={masterSearchQuery} onChange={e => setMasterSearchQuery(e.target.value)} className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500" />{masterSearchQuery && <button onClick={() => setMasterSearchQuery("")} className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"><X className="w-3.5 h-3.5" /></button>}</div><div className="flex items-center gap-1.5 text-xs"><span className="text-slate-500 font-semibold mr-1">Frequency:</span><button onClick={() => setMasterFrequencyFilter("ALL")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "ALL" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All</button><button onClick={() => setMasterFrequencyFilter("Daily")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "Daily" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>Daily</button><button onClick={() => setMasterFrequencyFilter("Once a Week")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "Once a Week" ? "bg-purple-600 text-white" : "bg-purple-50 text-purple-700 hover:bg-purple-100"}`}>Weekly</button><button onClick={() => setMasterFrequencyFilter("Bi-Weekly")} className={`px-2.5 py-1 rounded-md font-semibold transition ${masterFrequencyFilter === "Bi-Weekly" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 hover:bg-amber-100"}`}>Bi-Weekly</button></div></div><div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs"><span className="text-slate-400 font-semibold mr-1 shrink-0">Category:</span><button onClick={() => setMasterCategoryFilter("ALL")} className={`px-2.5 py-1 rounded-full font-semibold shrink-0 transition ${masterCategoryFilter === "ALL" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All Categories ({hubMasterChores.length})</button>{CHORE_CATEGORIES.map(cat => {
            const count = hubMasterChores.filter(c => c.category.toLowerCase() === cat.name.toLowerCase()).length;
            return <button key={cat.id} onClick={() => setMasterCategoryFilter(cat.name)} className={`px-2.5 py-1 rounded-full font-semibold shrink-0 transition flex items-center gap-1.5 border ${masterCategoryFilter === cat.name ? "ring-2 ring-slate-800 shadow-xs" : "opacity-85 hover:opacity-100"} ${cat.bg} ${cat.text} ${cat.border}`}><span>{cat.icon}</span><span>{cat.name}</span><span className="text-[10px] opacity-75">({count})</span></button>;
          })}</div></div><div className="overflow-x-auto min-w-0 border border-slate-200 rounded-xl shadow-2xs"><table className="w-full text-left text-xs min-w-[650px]"><thead className="bg-slate-100/80 text-slate-700 border-b border-slate-200 font-bold uppercase text-[10px] tracking-wider"><tr><th className="p-3 w-10 text-center">#</th><th className="p-3">Chore / Task</th><th className="p-3">Category</th><th className="p-3">Frequency</th><th className="p-3">Target Day(s)</th><th className="p-3">Rotation Group</th><th className="p-3">Auto-Nudge ⏰</th><th className="p-3 text-right">Actions</th></tr></thead><tbody>{filteredMasterChores.map((ch, idx) => {
            const isEditing = editingMasterIndex === ch.index_;
            const catConfig = CHORE_CATEGORIES.find(c => c.name.toLowerCase() === (ch.category || "").toLowerCase()) || CHORE_CATEGORIES[3];
            const draftCatConfig = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.category)
              ? CHORE_CATEGORIES.find(c => c.name.toLowerCase() === masterInlineDraft.category.toLowerCase()) || catConfig
              : catConfig;
            const freqVal = (ch.frequency || "").toLowerCase().includes("bi") ? "Bi-Weekly" : (ch.frequency || "").toLowerCase().includes("once") || (ch.frequency || "").toLowerCase().includes("weekly") ? "Once a Week" : "Daily";
            const draftFreqVal = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.frequency) ? masterInlineDraft.frequency : freqVal;
            const currentTargetDay = ch.targetDay || (freqVal === "Daily" ? "Mon \u2013 Sun" : freqVal === "Bi-Weekly" ? "Thursday Evening" : "Saturday");
            const draftTargetDay = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.targetDay) !== void 0 ? masterInlineDraft.targetDay : currentTargetDay;
            const parsedTargetState = parseTargetDayState(draftTargetDay);
            const draftSelectedDays: string[] = isEditing && Array.isArray(masterInlineDraft == null ? void 0 : masterInlineDraft.selectedTargetDays)
              ? masterInlineDraft.selectedTargetDays
              : parsedTargetState.selectedDays;
            const draftCustomEnabled: boolean = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.customTargetEnabled) !== void 0
              ? Boolean(masterInlineDraft.customTargetEnabled)
              : parsedTargetState.customEnabled;
            const draftCustomText: string = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.customTargetText) !== void 0
              ? masterInlineDraft.customTargetText
              : parsedTargetState.customText;
            const isTargetDayOpen = isEditing && openTargetDayDropdown === ch.index_;
            const groupVal = ch.rotationGroup || "Non-Casual";
            const draftGroupVal = isEditing && (masterInlineDraft == null ? void 0 : masterInlineDraft.rotationGroup) ? masterInlineDraft.rotationGroup : groupVal;
            const saveChoreInlineEdit = () => {
              const cleanTask = ((masterInlineDraft == null ? void 0 : masterInlineDraft.task) || "").trim() || ch.task;
              const cleanNotes = ((masterInlineDraft == null ? void 0 : masterInlineDraft.notes) || "").trim();
              const resolvedTargetDay = formatTargetDayState(draftSelectedDays, draftCustomEnabled, draftCustomText);
              setOpenTargetDayDropdown(null);
              handleUpdateMasterChore(ch.index_, {
                oldTask: ch.task,
                task: cleanTask,
                category: draftCatConfig.name,
                frequency: draftFreqVal,
                targetDay: resolvedTargetDay,
                rotationGroup: draftGroupVal,
                notes: cleanNotes
              });
              saveChoreNudgeRule(cleanTask, {
                enabled: Boolean(masterInlineDraft?.nudgeEnabled),
                time: masterInlineDraft?.nudgeTime || "16:30",
                targetWindow: masterInlineDraft?.nudgeWindow || "",
                message: masterInlineDraft?.nudgeMessage || ""
              });
            };
            const nudgeRule = getChoreNudgeRule(ch.task);

            if (isEditing) {
              return (
                <tr key={`edit-${ch.index_ || ch.task}-${idx}`} className="border-y-2 border-indigo-500 bg-indigo-50/70 shadow-xs">
                  <td colSpan={8} className="p-4 sm:p-5">
                    <div className="space-y-3.5 max-w-4xl">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-indigo-200">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
                              <Pen className="w-3.5 h-3.5 text-indigo-600" />
                              <span>Editing Master Chore: <span className="underline decoration-indigo-300">{ch.task}</span></span>
                            </div>
                            <p className="text-[11px] text-slate-500">Configure chore details, cadence, rotation, and auto-nudges</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setOpenTargetDayDropdown(null);
                              setEditingMasterIndex(null);
                              setMasterInlineDraft(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                          >
                            Cancel (Esc)
                          </button>
                          <button
                            type="button"
                            onClick={saveChoreInlineEdit}
                            disabled={!masterInlineDraft?.task?.trim()}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save Changes</span>
                          </button>
                        </div>
                      </div>

                      {/* Form Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="md:col-span-2">
                          <label className="block font-bold text-slate-700 mb-1">
                            Chore Task Description <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={masterInlineDraft?.task || ""}
                            onChange={e => setMasterInlineDraft(prev => ({ ...prev, task: e.target.value }))}
                            onKeyDown={e => {
                              if (e.key === "Enter") saveChoreInlineEdit();
                              if (e.key === "Escape") {
                                setOpenTargetDayDropdown(null);
                                setEditingMasterIndex(null);
                                setMasterInlineDraft(null);
                              }
                            }}
                            placeholder="e.g. Empty dishwasher, sweep porch..."
                            className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            autoFocus
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Category</label>
                          <select
                            value={draftCatConfig.name}
                            onChange={e => setMasterInlineDraft(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                          >
                            {CHORE_CATEGORIES.map(c => (
                              <option key={c.id} value={c.name}>{c.icon} {c.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Frequency</label>
                          <select
                            value={draftFreqVal}
                            onChange={e => {
                              const nextFreq = e.target.value;
                              const nextTarget = nextFreq === "Daily" ? "Mon – Sun" : nextFreq === "Bi-Weekly" ? "Thursday Evening" : draftTargetDay === "Mon – Sun" ? "Saturday" : draftTargetDay;
                              const nextParsed = parseTargetDayState(nextTarget);
                              setMasterInlineDraft(prev => ({
                                ...prev,
                                frequency: nextFreq,
                                targetDay: nextTarget,
                                selectedTargetDays: nextParsed.selectedDays,
                                customTargetEnabled: nextParsed.customEnabled,
                                customTargetText: nextParsed.customText
                              }));
                            }}
                            className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                          >
                            <option value="Daily">Daily</option>
                            <option value="Once a Week">Once a Week</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Target Day(s)</label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setOpenTargetDayDropdown(isTargetDayOpen ? null : ch.index_)}
                              className="w-full flex items-center justify-between gap-2 text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 hover:border-indigo-400 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <span className="truncate">{formatTargetDayState(draftSelectedDays, draftCustomEnabled, draftCustomText)}</span>
                              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${isTargetDayOpen ? "rotate-180 text-indigo-600" : ""}`} />
                            </button>
                            {isTargetDayOpen && (
                              <>
                                <div className="fixed inset-0 z-20" onClick={() => setOpenTargetDayDropdown(null)} />
                                <div className="absolute left-0 top-full mt-1 z-30 w-60 bg-white rounded-xl border border-slate-200 shadow-xl p-2 space-y-1">
                                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">Select Day(s)</div>
                                  {ALL_WEEK_DAYS.map(dayName => {
                                    const isChecked = draftSelectedDays.includes(dayName);
                                    return (
                                      <label key={dayName} className="flex items-center gap-2.5 px-2 py-1 rounded-lg hover:bg-indigo-50/70 cursor-pointer select-none transition">
                                        <input
                                          type="checkbox"
                                          checked={isChecked}
                                          onChange={() => {
                                            const set = new Set(draftSelectedDays);
                                            if (set.has(dayName)) set.delete(dayName);
                                            else set.add(dayName);
                                            const nextDays = ALL_WEEK_DAYS.filter(d => set.has(d));
                                            const nextTarget = formatTargetDayState(nextDays, draftCustomEnabled, draftCustomText);
                                            setMasterInlineDraft(prev => ({
                                              ...prev,
                                              selectedTargetDays: nextDays,
                                              targetDay: nextTarget
                                            }));
                                          }}
                                          className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                        />
                                        <span className={`text-xs ${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}`}>{dayName}</span>
                                      </label>
                                    );
                                  })}
                                  <div className="pt-1.5 mt-1 border-t border-slate-100 space-y-1.5 px-2 pb-1">
                                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                                      <input
                                        type="checkbox"
                                        checked={draftCustomEnabled}
                                        onChange={e => {
                                          const nextCustom = e.target.checked;
                                          const nextTarget = formatTargetDayState(draftSelectedDays, nextCustom, draftCustomText);
                                          setMasterInlineDraft(prev => ({
                                            ...prev,
                                            customTargetEnabled: nextCustom,
                                            targetDay: nextTarget
                                          }));
                                        }}
                                        className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                      />
                                      <span className={`text-xs ${draftCustomEnabled ? "font-bold text-indigo-950" : "font-medium text-slate-700"}`}>Custom</span>
                                    </label>
                                    <input
                                      type="text"
                                      value={draftCustomText}
                                      onChange={e => {
                                        const val = e.target.value;
                                        const nextTarget = formatTargetDayState(draftSelectedDays, true, val);
                                        setMasterInlineDraft(prev => ({
                                          ...prev,
                                          customTargetEnabled: true,
                                          customTargetText: val,
                                          targetDay: nextTarget
                                        }));
                                      }}
                                      onKeyDown={e => { if (e.key === "Enter") { setOpenTargetDayDropdown(null); } }}
                                      placeholder="e.g. Thursday Evening..."
                                      className="w-full px-2 py-1 text-xs text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Rotation Group</label>
                          <select
                            value={draftGroupVal}
                            onChange={e => setMasterInlineDraft(prev => ({ ...prev, rotationGroup: e.target.value }))}
                            className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                          >
                            <optgroup label="Special Rotation Groups">
                              <option value="Non-Casual">Non-Casual</option>
                              <option value="Kids">Kids</option>
                              <option value="Parents">Parents</option>
                              <option value="All">All</option>
                            </optgroup>
                            <optgroup label="Individual Members">
                              {familyMembers.map(m => (
                                <option key={m.id} value={m.name}>{m.name}</option>
                              ))}
                            </optgroup>
                          </select>
                        </div>
                        <div className="md:col-span-3">
                          <label className="block font-bold text-slate-700 mb-1">Operational Notes / Routine</label>
                          <input
                            type="text"
                            value={masterInlineDraft?.notes || ""}
                            onChange={e => setMasterInlineDraft(prev => ({ ...prev, notes: e.target.value }))}
                            onKeyDown={e => {
                              if (e.key === "Enter") saveChoreInlineEdit();
                            }}
                            placeholder="Instructions, supplies, details or timing notes..."
                            className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                          />
                        </div>
                        <div className="md:col-span-3 p-3 bg-amber-50/70 border border-amber-200/90 rounded-xl space-y-2.5">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <label className="flex items-center gap-2 font-bold text-xs text-amber-950 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={Boolean(masterInlineDraft?.nudgeEnabled)}
                                onChange={e => setMasterInlineDraft(prev => ({ ...prev, nudgeEnabled: e.target.checked }))}
                                className="w-4 h-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                              />
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-amber-600" />
                                <span>Enable Scheduled Auto-Nudge Reminder</span>
                              </span>
                            </label>
                            {masterInlineDraft?.nudgeEnabled && (
                              <div className="flex items-center gap-2 text-xs">
                                <span className="font-bold text-amber-900">Reminder Time:</span>
                                <input
                                  type="time"
                                  value={masterInlineDraft?.nudgeTime || "16:30"}
                                  onChange={e => setMasterInlineDraft(prev => ({ ...prev, nudgeTime: e.target.value }))}
                                  className="px-2 py-1 text-xs font-bold bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                                  {formatTime24To12(masterInlineDraft?.nudgeTime || "16:30")}
                                </span>
                              </div>
                            )}
                          </div>
                          {masterInlineDraft?.nudgeEnabled && (
                            <div className="space-y-2 pt-1 border-t border-amber-200/70 text-xs">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mr-1">Quick Presets:</span>
                                {QUICK_NUDGE_TIME_PRESETS.map(preset => (
                                  <button
                                    key={preset.time}
                                    type="button"
                                    onClick={() => setMasterInlineDraft(prev => ({
                                      ...prev,
                                      nudgeTime: preset.time,
                                      nudgeWindow: preset.window,
                                      nudgeMessage: prev?.nudgeMessage || `Friendly reminder: please ${((masterInlineDraft == null ? void 0 : masterInlineDraft.task) || ch.task) || "complete this chore"} (${preset.display})! ⏰`
                                    }))}
                                    className={`px-2 py-1 rounded-lg text-[10px] font-bold transition border cursor-pointer ${masterInlineDraft?.nudgeTime === preset.time ? "bg-amber-600 text-white border-amber-700 shadow-xs" : "bg-white text-amber-900 border-amber-200 hover:bg-amber-100/70"}`}
                                  >
                                    {preset.label} ({preset.display})
                                  </button>
                                ))}
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                  <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">
                                    Target Time Window (shown on kid's chore card)
                                  </label>
                                  <input
                                    type="text"
                                    value={masterInlineDraft?.nudgeWindow || ""}
                                    onChange={e => setMasterInlineDraft(prev => ({ ...prev, nudgeWindow: e.target.value }))}
                                    placeholder="e.g. After School (3:30 – 5:30 PM), Before Supper..."
                                    className="w-full px-2.5 py-1 text-xs bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">
                                    Custom Nudge Message / Prompt
                                  </label>
                                  <input
                                    type="text"
                                    value={masterInlineDraft?.nudgeMessage || ""}
                                    onChange={e => setMasterInlineDraft(prev => ({ ...prev, nudgeMessage: e.target.value }))}
                                    placeholder="e.g. Friendly reminder to empty the dishwasher before supper! 🍽️"
                                    className="w-full px-2.5 py-1 text-xs bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer Controls */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-indigo-200">
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <span className="text-[11px] font-medium">Reorder:</span>
                          <button
                            type="button"
                            onClick={() => handleMoveChore(ch, "up")}
                            disabled={idx === 0}
                            className="p-1 text-slate-600 hover:text-indigo-600 hover:bg-white rounded border border-slate-200 disabled:opacity-20 transition cursor-pointer"
                            title="Move chore up"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMoveChore(ch, "down")}
                            disabled={idx === filteredMasterChores.length - 1}
                            className="p-1 text-slate-600 hover:text-indigo-600 hover:bg-white rounded border border-slate-200 disabled:opacity-20 transition cursor-pointer"
                            title="Move chore down"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-slate-300 mx-1">|</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteMasterChore(ch.index_, ch.task)}
                            className="text-rose-600 hover:text-rose-800 text-[11px] font-semibold flex items-center gap-1 hover:underline ml-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Delete chore</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setOpenTargetDayDropdown(null);
                              setEditingMasterIndex(null);
                              setMasterInlineDraft(null);
                            }}
                            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={saveChoreInlineEdit}
                            disabled={!masterInlineDraft?.task?.trim()}
                            className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save Changes</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }

            return (
              <React.Fragment key={`${ch.index_ || ch.task}-${idx}`}>
                <tr className={`transition ${idx > 0 ? "border-t border-slate-200" : ""} hover:bg-slate-50/70`}>
                  <td className="px-3 pt-3 pb-1.5 text-center align-middle">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold inline-flex items-center justify-center text-[10px]">{idx + 1}</span>
                  </td>
                  <td className="px-3 pt-3 pb-1.5 font-semibold text-slate-800 min-w-[180px] align-middle">
                    <span className="font-bold text-slate-900 leading-snug">{ch.task}</span>
                  </td>
                  <td className="px-3 pt-3 pb-1.5 align-middle">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] border ${catConfig.bg} ${catConfig.text} ${catConfig.border}`}>
                      <span>{catConfig.icon}</span>
                      <span>{catConfig.name}</span>
                    </span>
                  </td>
                  <td className="px-3 pt-3 pb-1.5 align-middle">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${freqVal === "Bi-Weekly" ? "bg-amber-50 text-amber-800 border-amber-200" : freqVal === "Daily" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-purple-50 text-purple-700 border-purple-200"}`}>
                      {freqVal}
                    </span>
                  </td>
                  <td className="px-3 pt-3 pb-1.5 align-middle">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 text-slate-800 border border-slate-200">
                      {currentTargetDay}
                    </span>
                  </td>
                  <td className="px-3 pt-3 pb-1.5 align-middle">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-[11px] border ${groupVal === "Non-Casual" ? "bg-purple-50 text-purple-800 border-purple-200" : groupVal === "Kids" ? "bg-indigo-50 text-indigo-800 border-indigo-200" : groupVal === "Parents" ? "bg-amber-100 text-amber-900 border-amber-300" : groupVal === "All" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-sky-50 text-sky-800 border-sky-200"}`}>
                      {groupVal}
                    </span>
                  </td>
                  <td className="px-3 pt-3 pb-1.5 align-middle">
                    {nudgeRule?.enabled ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold text-[11px] bg-amber-50 text-amber-900 border border-amber-200" title={`Auto-nudge at ${formatTime24To12(nudgeRule.time)}`}>
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{formatTime24To12(nudgeRule.time)}</span>
                        {nudgeRule.targetWindow ? (
                          <span className="text-[10px] text-amber-700/80 font-normal hidden lg:inline">({nudgeRule.targetWindow})</span>
                        ) : null}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium text-slate-400 bg-slate-50 border border-slate-200/60">Off</span>
                    )}
                  </td>
                  <td className="px-3 pt-3 pb-1.5 text-right whitespace-nowrap align-middle">
                    <div className="inline-flex items-center justify-end gap-1">
                      <button type="button" onClick={() => handleMoveChore(ch, "up")} disabled={idx === 0} className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer" title="Move chore up">
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button type="button" onClick={() => handleMoveChore(ch, "down")} disabled={idx === filteredMasterChores.length - 1} className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-20 rounded-lg transition cursor-pointer" title="Move chore down">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const initTargetState = parseTargetDayState(currentTargetDay);
                          const existingRule = getChoreNudgeRule(ch.task);
                          setOpenTargetDayDropdown(null);
                          setEditingMasterIndex(ch.index_);
                          setMasterInlineDraft({
                            task: ch.task || "",
                            category: catConfig.name,
                            frequency: freqVal,
                            targetDay: currentTargetDay,
                            selectedTargetDays: initTargetState.selectedDays,
                            customTargetEnabled: initTargetState.customEnabled,
                            customTargetText: initTargetState.customText,
                            rotationGroup: groupVal,
                            notes: ch.notes || "",
                            nudgeEnabled: existingRule?.enabled ?? false,
                            nudgeTime: existingRule?.time || "16:30",
                            nudgeWindow: existingRule?.targetWindow || "",
                            nudgeMessage: existingRule?.message || ""
                          });
                        }}
                        className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition cursor-pointer"
                        title={`Edit ${ch.task}`}
                      >
                        <Pen className="w-3.5 h-3.5" />
                      </button>
                      <button type="button" onClick={() => handleDeleteMasterChore(ch.index_, ch.task)} className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition cursor-pointer" title={`Remove "${ch.task}"`}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="px-3 pb-3 pt-0" />
                  <td colSpan={7} className="px-3 pb-3 pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[11px] text-slate-600 leading-snug">
                      <div>
                        <span className="font-bold text-slate-700">Instructions / Notes:</span>{" "}
                        {ch.notes || <span className="italic text-slate-400">No instructions</span>}
                      </div>
                      {nudgeRule?.enabled && (
                        <div className="flex items-center gap-1.5 text-amber-800 shrink-0 text-[11px] font-medium bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>Auto-Nudge: <strong>{formatTime24To12(nudgeRule.time)}</strong></span>
                          {nudgeRule.targetWindow && <span className="text-amber-700/80">({nudgeRule.targetWindow})</span>}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}</tbody></table>{filteredMasterChores.length === 0 && <div className="p-8 text-center bg-white text-slate-500"><ListTodo className="w-8 h-8 text-slate-300 mx-auto mb-2" /><p className="font-semibold">No chores match the current filters</p>{hubMasterChores.length === 0 ? <button onClick={() => setShowInlineAddForm(true)} className="mt-3 text-xs font-bold px-3 py-1.5 bg-indigo-600 text-white rounded-lg">Add First Chore</button> : <button onClick={() => { setMasterCategoryFilter("ALL"); setMasterFrequencyFilter("ALL"); setMasterSearchQuery(""); }} className="mt-3 text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg">Reset Filters</button>}</div>}</div></div></div></div>}</main>{activeDayModal && <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div><span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Day Schedule</span><h3 className="text-base font-bold">{(() => {
            const parsed = parseDateKey(activeDayModal);
            if (!parsed) return activeDayModal;
            const d = new Date(parsed.year, parsed.month, parsed.day);
            return d.toLocaleDateString(void 0, {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            });
          })()}</h3></div><button onClick={() => setActiveDayModal(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs"><span className="text-slate-600 dark:text-slate-300 font-medium">{choreRows.filter(cr => {
            var _a2, _b2;
            return (_b2 = (_a2 = monthSchedule[activeDayModal]) == null ? void 0 : _a2[cr.index_]) == null ? void 0 : _b2.done;
          }).length}{" of"}{" "}{choreRows.length}{" completed"}</span><div className="flex gap-2"><button onClick={() => {
            choreRows.forEach(cr => {
              handleUpdateChore(activeDayModal, cr.index_, {
                done: true
              });
            });
          }} className="px-2 py-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900 rounded font-medium transition">Mark All Done</button><button onClick={() => {
            choreRows.forEach(cr => {
              handleUpdateChore(activeDayModal, cr.index_, {
                done: false
              });
            });
          }} className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 rounded font-medium transition">Reset All</button></div></div><div className="p-4 overflow-y-auto space-y-2 flex-1">{choreRows.map(cr => {
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
            const proof = getPhotoProofForChore(activeDayModal, cr.index_);
            const specificKid = getSpecificKidForChore(taskTitleStr);
            const targetKidName = specificKid || status.who || "All Kids";
            const isPhotoRequested = targetKidName ? hasPendingPhotoRequest(activeDayModal, cr.index_, targetKidName) : false;
            return <div key={cr.index_} className={`p-2.5 rounded-xl border flex flex-col gap-2 transition ${status.done ? "bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800" : freq.frequency === "weekly" && isScheduledForToday ? "bg-purple-50/60 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"}`}><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2.5 flex-1 min-w-0"><button onClick={() => handleUpdateChore(activeDayModal, cr.index_, {
              done: !status.done
            })} className="text-slate-400 hover:text-emerald-600 focus:outline-none">{status.done ? <SquareCheckBig className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> : <Square className="w-5 h-5" />}</button><div className="flex items-center gap-1.5 min-w-0"><span className={`text-xs font-semibold truncate ${status.done ? "line-through text-slate-500 dark:text-slate-400" : "text-slate-800 dark:text-slate-100"}`}>{cr.task || cr.row[0]}</span>{freq.frequency === "weekly" && <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${isScheduledForToday ? "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`}>{isScheduledForToday ? "1x/wk (Today)" : `1x/wk (${(_b2 = DAY_STYLES[freq.dayOfWeek]) == null ? void 0 : _b2.short})`}</span>}</div></div><div className="flex items-center gap-1.5 shrink-0">{proof ? <button type="button" onClick={(e) => { e.stopPropagation(); setSelectedReviewProof(proof); }} className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition cursor-pointer" title="View submitted chore photo proof"><Camera className="w-3 h-3" /><span>{proof.verified ? "Photo ⭐" : "Photo 📸"}</span></button> : status.done && targetKidName ? (isPhotoRequested ? <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 animate-pulse" title={`Photo proof requested from ${targetKidName}`}><Camera className="w-3 h-3 text-amber-600" /><span>Photo Asked ⏳</span></span> : <button type="button" onClick={(e) => { e.stopPropagation(); handleRequestPhoto(targetKidName, taskTitleStr, cr.index_, activeDayModal); }} className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 transition cursor-pointer" title={`Request live camera photo proof from ${targetKidName}`}><Camera className="w-3 h-3 text-amber-600" /><span>Request Photo 📸</span></button>) : null}{getSpecificKidForChore(cr.task || cr.row[0]) ? <div className="text-[11px] font-bold px-2 py-1 rounded border shrink-0 transition shadow-2xs" style={getMemberBadgeStyle(getMember(getSpecificKidForChore(cr.task || cr.row[0])), isDark)}>{getSpecificKidForChore(cr.task || cr.row[0])}</div> : isBedroomChore(cr.task || cr.row[0]) ? <div className="text-[11px] font-bold px-2 py-1 rounded border shrink-0" style={isDark ? { backgroundColor: "rgba(244, 114, 182, 0.18)", color: "#f472b6", borderColor: "rgba(244, 114, 182, 0.4)" } : { backgroundColor: "#fce7f3", color: "#be185d", borderColor: "#fbcfe8" }}>Each Child</div> : <select value={status.who} onChange={e => handleUpdateChore(activeDayModal, cr.index_, {
              who: e.target.value
            })} className="text-xs p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-bold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 shrink-0 shadow-2xs" style={status.who && getMember(status.who) ? getMemberBadgeStyle(getMember(status.who), isDark) : undefined}><option value="" style={{
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
            }}>{status.who}</option>}</select>}</div></div>{isBedroomChore(cr.task || cr.row[0]) && !getSpecificKidForChore(cr.task || cr.row[0]) && <div className="bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/60 rounded-lg p-2 mt-1"><div className="text-[11px] font-bold text-pink-900 dark:text-pink-300 mb-1.5 flex items-center justify-between"><span>Individual Bedrooms to Clean:</span><span className="text-[10px] text-pink-600 dark:text-pink-400 font-normal">Each child cleans own space</span></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">{getKidsPresentOnDate(activeDayModal).map(kidName => {
              var _a3;
              const isKidDone = !!((_a3 = status.kidsDone) == null ? void 0 : _a3[kidName]);
              const kidMember = getMember(kidName);
              return <button key={kidName} type="button" onClick={() => handleToggleKidBedroom(activeDayModal, cr.index_, kidName)} className={`p-1.5 rounded-lg border text-left text-xs flex items-center justify-between transition ${isKidDone ? "bg-emerald-100/80 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 line-through" : "bg-white dark:bg-slate-900 border-pink-200 dark:border-pink-900/60 text-slate-800 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-slate-800"}`}><div className="flex items-center gap-1.5 truncate"><span className="w-2.5 h-2.5 rounded-full shrink-0" style={{
                backgroundColor: (kidMember == null ? void 0 : kidMember.color) || "#ec4899"
              }} /><span className="font-semibold truncate">{kidName}'s Room</span></div><span className="font-bold ml-1">{isKidDone ? "\u2713" : "\u25CB"}</span></button>;
            })}</div></div>}</div>;
          })}</div><div className="p-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex justify-end"><button onClick={() => setActiveDayModal(null)} className="px-4 py-2 bg-slate-900 dark:bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-indigo-500 transition">Done</button></div></div></div>}{showAutoAssignModal && <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"><div className="p-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white flex items-center justify-between"><div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-200" /><h3 className="text-base font-bold">Auto-Assign Schedule</h3></div><button onClick={() => setShowAutoAssignModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 text-xs text-slate-700 dark:text-slate-300"><p className="text-slate-600 dark:text-slate-400">Distribute daily tasks and weekly routines (Clean Basement, Feeding Station Deep Clean, Curbside Waste & Recycling) evenly across household occupants for <strong>{MONTH_NAMES[selectedMonth]}{" "}{selectedYear}</strong>.<br /><span className="text-[11px] text-slate-500 italic mt-1 inline-block">Note: Tidy Bedrooms and Laundry Tasks remain individual minion checklists where each child does their own.</span></p><div><label className="font-bold text-slate-800 dark:text-slate-200 block mb-1.5">Full-Time Occupants (Included in Chore Distribution):</label><div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">{familyMembers.filter(m => m.type === "regular").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"><input type="checkbox" defaultChecked id={`assignee-${m.id}`} className="rounded text-indigo-600 focus:ring-indigo-500" /><span className="w-3 h-3 rounded-full" style={{
            backgroundColor: m.color
          }} /><span className="font-medium text-slate-800 dark:text-slate-200">{m.name}</span>{m.role && <span className="text-[10px] text-slate-500">({m.role === "Overseer Supreme" ? "Parent" : "Kid"})</span>}</label>)}</div><div className="flex items-center justify-between mb-1.5"><label className="font-bold text-pink-800 dark:text-pink-300 block">Bi-Weekly Occupants (Active During Stay Weeks Only):</label><span className="text-[10px] font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-800 px-1.5 py-0.5 rounded">{"Back Sunday, Oct. 18 @ 5:00 PM"}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">{familyMembers.filter(m => m.type === "biweekly").map(m => <label key={m.id} className="flex items-center gap-2 p-2 rounded-lg border border-pink-200 dark:border-pink-800 bg-pink-50/40 dark:bg-pink-950/20 hover:bg-pink-50 dark:hover:bg-pink-950/40 cursor-pointer"><input type="checkbox" defaultChecked id={`assignee-${m.id}`} className="rounded text-pink-600 focus:ring-pink-500" /><span className="w-3 h-3 rounded-full" style={{
            backgroundColor: m.color
          }} /><span className="font-medium text-slate-800 dark:text-slate-200">{m.name}</span><span className="text-[10px] text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-950/60 px-1 rounded font-semibold">Bi-weekly only</span></label>)}</div><div className="p-3 bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl mb-3"><div className="flex items-center justify-between mb-1"><span className="font-bold text-sky-900 dark:text-sky-200 text-xs">Casual Members (Manual Add-Ins Only):</span><span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800">Excluded from Auto-Assign</span></div><div className="flex flex-wrap items-center gap-2 mt-1.5">{familyMembers.filter(m => m.type === "casual").map(m => <span key={m.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border shadow-2xs" style={getMemberBadgeStyle(m, isDark)}><span className="w-2 h-2 rounded-full" style={{
            backgroundColor: m.color
          }} /><span>{m.name}</span></span>)}</div><p className="text-[11px] text-sky-700 dark:text-sky-300 mt-2 leading-relaxed">{'Casual members are kept out of automated rotations and remain available in the "WHO" dropdowns for manual assignment anytime they are present.'}</p></div></div><div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-lg p-3 text-pink-900 dark:text-pink-200 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-pink-600 dark:text-pink-400 mt-0.5" /><span><strong>Daily & Weekly Distribution:</strong>{" Tasks are handed out so all available family members share the daily and weekly chores evenly. "}{biWeeklyNamesString}{" are included during stay weeks and skipped on away weeks. Tidy Bedrooms and Laundry Tasks remain individual checklists."}</span></div></div><div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-2"><button onClick={() => setShowAutoAssignModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition">Cancel</button><button onClick={() => {
            const regSelected = familyMembers.filter(m => {
              var _a2;
              return m.type === "regular" && ((_a2 = document.getElementById(`assignee-${m.id}`)) == null ? void 0 : _a2.checked);
            }).map(m => m.name);
            const bwSelected = familyMembers.filter(m => {
              var _a2;
              return m.type === "biweekly" && ((_a2 = document.getElementById(`assignee-${m.id}`)) == null ? void 0 : _a2.checked);
            }).map(m => m.name);
            handleAutoAssignMonth(regSelected, bwSelected);
          }} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition">Distribute Daily & Weekly Chores</button></div></div></div>}{(showAddRemoveChoreModal || showNewChoreModal) && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white"><ListTodo className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Add / Edit Master Chores</h3><p className="text-[11px] text-slate-400">Add new tasks, edit existing chores, or remove from the schedule</p></div></div><button onClick={() => {
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
          }}><label className="block font-bold text-slate-700 mb-1">Target Day</label><select id="new-chore-day" defaultValue="5" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500">{DAY_STYLES.map((d, i) => <option key={d.name} value={i}>{"Every "}{d.name}</option>)}</select></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label className="block font-bold text-slate-700 mb-1">Category</label><select id="new-chore-category" defaultValue="Household" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="Household">Household</option><option value="Kitchen">Kitchen</option><option value="Pet Care">Pet Care</option><option value="Bedrooms">Bedrooms</option><option value="Common Areas">Common Areas</option><option value="Administration">Administration</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Default Rotation Group</label><select id="new-chore-who" defaultValue="All Non-Casual" className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="">Rotating / Unassigned</option><option value="Kids Rotation">Kids Rotation</option><option value="All Kids">All Kids (Shared)</option><option value="Each Child">Each Child (Own Space)</option><option value="Full-Time Roster">Full-Time Roster</option><option value="Parents">Parents Only</option><option value="All Occupants">All Occupants</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select><p className="text-[10px] text-slate-500 mt-1 leading-snug">{"\u{1F4A1} "}<strong>All Non-Casual:</strong>{" Covers Sydney, Cadence, Mason, Thom, and Meghan (excludes casuals Koda & Keyanna; no other existing group is equivalent)."}</p></div></div><div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span>Adding this chore appends a row to the master schedule and synchronizes across all weekly calendar views and the Household Hub directory.</span></div></div>}{(addRemoveMode === "edit" || addRemoveMode === "remove") && <div className="p-5 space-y-4 overflow-y-auto flex-1">{editingChoreIndex !== null ? /* SUB-VIEW A: DETAILED CHORE EDITOR WITH IN-LINE REMOVE */ <div className="space-y-4 text-xs"><div className="flex items-center justify-between pb-2 border-b border-slate-200"><button type="button" onClick={() => setEditingChoreIndex(null)} className="flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition"><ChevronLeft className="w-4 h-4" /><span>Back to All Chores</span></button><span className="text-[11px] font-bold text-slate-400 uppercase">Editing Item #{choreRows.findIndex(r => r.index_ === editingChoreIndex) + 1}</span></div><div><label className="block font-bold text-slate-700 mb-1">{"Chore Title / Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={editChoreTitle} onChange={e => setEditChoreTitle(e.target.value)} className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 font-semibold" placeholder="Chore task title..." autoFocus /></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Frequency</label><select value={editChoreFreq} onChange={e => setEditChoreFreq(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="daily">Daily (Every Day)</option><option value="weekly">Once a Week</option><option value="biweekly">Bi-Weekly</option></select></div>{editChoreFreq === "weekly" ? <div><label className="block font-bold text-slate-700 mb-1">Target Day</label><select value={editChoreDay} onChange={e => setEditChoreDay(Number(e.target.value))} className="w-full p-2 rounded-lg border border-purple-300 bg-purple-50 font-semibold text-purple-900 focus:ring-1 focus:ring-purple-500">{DAY_STYLES.map((d, i) => <option key={d.name} value={i}>{"Every "}{d.name}</option>)}</select></div> : <div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editChoreRotationGroup} onChange={e => setEditChoreRotationGroup(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div>}</div>{editChoreFreq === "weekly" && <div><label className="block font-bold text-slate-700 mb-1">Rotation Group</label><select value={editChoreRotationGroup} onChange={e => setEditChoreRotationGroup(e.target.value)} className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500"><option value="All Non-Casual">All Non-Casual (Sydney, Cadence, Mason, Thom, Meghan)</option><option value="Kids Rotation">Kids Rotation</option><option value="Parents & Kids">Parents & Kids</option><option value="All Occupants">All Occupants</option><option value="All Kids">All Kids</option><option value="Parents">Parents</option><option value="Full-Time Roster">Full-Time Roster</option>{familyMembers.map(m => <option key={m.id} value={m.name}>{m.name}{" ("}{m.residency})</option>)}</select></div>}<div className="p-2.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px] text-indigo-950 flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" /><span><strong>Rotation Group Clarification:</strong>{" "}<em>All Non-Casual</em>{" covers Sydney, Cadence, Mason, Thom, and Meghan, while excluding casual members Koda and Keyanna. "}<strong>No equivalent currently exists among the other groups</strong>{" (Full-Time Roster excludes Cadence & Mason; Kids Rotation and All Kids exclude Thom & Meghan; All Occupants includes casual members)."}</span></div><div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between"><span className="font-semibold text-slate-700">List Order Position:</span><div className="flex items-center gap-1.5"><button type="button" onClick={() => handleMoveChore(editingChoreIndex, "up")} className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700"><ArrowUp className="w-3.5 h-3.5" />{" Move Up"}</button><button type="button" onClick={() => handleMoveChore(editingChoreIndex, "down")} className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-md hover:bg-slate-100 flex items-center gap-1 transition text-slate-700"><ArrowDown className="w-3.5 h-3.5" />{" Move Down"}</button></div></div><div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between"><div><div className="font-bold text-rose-900">Remove This Chore</div><div className="text-[11px] text-rose-700">Delete this chore from the schedule and spreadsheet</div></div><button type="button" onClick={() => {
            handleDeleteChore(editingChoreIndex, editChoreTitle);
            setEditingChoreIndex(null);
          }} className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg shadow-2xs flex items-center gap-1.5 transition"><Trash2 className="w-3.5 h-3.5" /><span>Remove Chore</span></button></div></div> : /* SUB-VIEW B: MASTER CHORES LIST FOR EDITING & REMOVAL */ <div className="space-y-3"><div className="flex items-center justify-between gap-2"><div className="relative flex-1"><Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" /><input type="text" placeholder="Search or filter chores to edit or remove..." value={removeSearchQuery} onChange={e => setRemoveSearchQuery(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500" /></div><button type="button" onClick={() => {
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
          }} disabled={combineTargetA === combineTargetB || !combineTargetA || !combineTargetB} className="px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm transition disabled:opacity-40">Merge & Combine Chores</button></div></div></div>}{showAddMemberModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"><div className="p-4 bg-indigo-600 text-white flex items-center justify-between shrink-0"><div className="flex items-center gap-2"><Users className="w-5 h-5 text-indigo-200" /><div><h3 className="text-base font-bold">Add Household Member</h3><p className="text-[11px] text-indigo-100">Profile, age split autonomy & rotation settings</p></div></div><button onClick={() => setShowAddMemberModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-3.5 text-xs overflow-y-auto flex-1"><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">{"First Name "}<span className="text-rose-500">{"*"}</span></label><input type="text" id="new-member-first-name" placeholder="e.g. Sydney, Mason..." autoFocus className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Last Name</label><input type="text" id="new-member-last-name" placeholder="e.g. Smith..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Birthday</label><DatePickerDropdown value={newMemberBirthday} onChange={setNewMemberBirthday} placeholder="MM/DD/YYYY" /></div><div><label className="block font-bold text-slate-700 mb-1">Email Address</label><input type="email" id="new-member-email" placeholder="e.g. kid@family.com" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800" /></div></div><div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 text-[11px] space-y-1"><div className="font-bold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-indigo-600" /><span>Age Split & Autonomy Policy</span></div><p className="text-slate-600 leading-snug"><strong>12 & Up (Teen/Adult):</strong> Full profile autonomy with personal email alerts enabled.<br /><strong>11 & Under (Junior Minion):</strong> Extra visual stimulation (badges & stars) with email restricted to parent management.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label className="block font-bold text-slate-700 mb-1">Role</label><select id="new-member-role" defaultValue="Minion" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="Supreme Overlord">Supreme Overlord (Parent)</option><option value="Minion">Minion (Kid)</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Occupancy</label><select id="new-member-residency" defaultValue="Full-Time" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="Full-Time">Full-Time (Constant Residency)</option><option value="Bi-Weekly">Bi-Weekly (Half-Time Residency)</option><option value="Casual">Casual (Periodic Residency)</option></select></div></div><div><label className="block font-bold text-slate-700 mb-1">Special Rotation Groups</label><div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg border border-slate-300 bg-slate-50/50">{["Parents", "Kids", "Non-Casual", "All"].map(grpType => {
            const isChecked = newMemberGroups.includes(grpType);
            return <label key={grpType} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white border border-slate-200 hover:border-indigo-300 cursor-pointer select-none transition"><input type="checkbox" checked={isChecked} onChange={() => {
              setNewMemberGroups(prev => {
                const nextSet = new Set(prev);
                if (nextSet.has(grpType)) {
                  nextSet.delete(grpType);
                } else {
                  nextSet.add(grpType);
                }
                return ["Parents", "Kids", "Non-Casual", "All"].filter(g => nextSet.has(g));
              });
            }} className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" /><span className={`text-xs ${isChecked ? "font-bold text-indigo-950" : "font-medium text-slate-700"}`}>{grpType}</span></label>;
          })}</div></div><div><label className="block font-bold text-slate-700 mb-1">Active Status</label><select id="new-member-active" defaultValue="true" className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-white"><option value="true">Active</option><option value="false">Inactive</option></select></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 shrink-0"><button onClick={() => setShowAddMemberModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => {
            const firstNameInput = document.getElementById("new-member-first-name") as HTMLInputElement | null;
            const lastNameInput = document.getElementById("new-member-last-name") as HTMLInputElement | null;
            const bdayInput = document.getElementById("new-member-birthday") as HTMLInputElement | null;
            const emailInput = document.getElementById("new-member-email") as HTMLInputElement | null;
            const roleInput = document.getElementById("new-member-role") as HTMLSelectElement | null;
            const resInput = document.getElementById("new-member-residency") as HTMLSelectElement | null;
            const activeInput = document.getElementById("new-member-active") as HTMLSelectElement | null;

            const fName = firstNameInput?.value.trim() || "";
            const lName = lastNameInput?.value.trim() || "";
            const fullName = [fName, lName].filter(Boolean).join(" ");
            if (fullName) {
              const roleVal = roleInput ? roleInput.value : "Minion";
              const resVal = resInput ? resInput.value : "Full-Time";
              const activeVal = activeInput ? activeInput.value === "true" : true;
              handleAddRosterMember(
                fullName,
                roleVal,
                resVal,
                newMemberGroups.length > 0 ? newMemberGroups.join(", ") : "All",
                activeVal
              );
              saveUserProfile({
                id: fullName.toLowerCase(),
                name: fullName,
                firstName: fName,
                lastName: lName,
                birthday: newMemberBirthday || "",
                email: emailInput?.value.trim() || "",
                role: roleVal,
                residency: resVal
              });
              setNewMemberBirthday("");
              setProfilesVersion(v => v + 1);
              setShowAddMemberModal(false);
            }
          }} className="px-4 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition cursor-pointer">Add to Household Roster</button></div></div></div>}{showAddPetModal && <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"><div className="p-4 bg-amber-600 text-white flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-xl">{"\u{1F43E}"}</span><h3 className="text-base font-bold">Add Household Pet Member</h3></div><button onClick={() => setShowAddPetModal(false)} className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-3.5 text-xs"><div><label className="block font-bold text-slate-700 mb-1">{"Pet Name "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={newPetDraft.name} onChange={e => setNewPetDraft(prev => ({
            ...{
              ...prev
            },
            name: e.target.value
          }))} placeholder="e.g. Buster, Milo..." autoFocus className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Species</label><select value={newPetDraft.type} onChange={e => setNewPetDraft(prev => ({
            ...{
              ...prev
            },
            type: e.target.value
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white"><option value="Dog">{"Dog \u{1F415}"}</option><option value="Cat">{"Cat \u{1F408}"}</option><option value="Bird">{"Bird \u{1F426}"}</option><option value="Fish">{"Fish \u{1F41F}"}</option><option value="Small Pet">{"Small Pet \u{1F43E}"}</option><option value="Other">{"Other \u{1F43E}"}</option></select></div><div><label className="block font-bold text-slate-700 mb-1">Feeding Routine</label><input type="text" value={newPetDraft.routine} onChange={e => setNewPetDraft(prev => ({
            ...{
              ...prev
            },
            routine: e.target.value
          }))} placeholder="e.g. Morning & Evening, Twice daily..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800" /></div><div><label className="block font-bold text-slate-700 mb-1">Care Responsibilities</label><textarea rows={2} value={newPetDraft.care} onChange={e => setNewPetDraft(prev => ({
            ...{
              ...prev
            },
            care: e.target.value
          }))} placeholder="e.g. Feed breakfast & supper, outdoor routine, fresh water bowls..." className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 resize-none leading-snug" /></div><div><label className="block font-bold text-slate-700 mb-1">Active Status</label><select value={newPetDraft.active !== false ? "true" : "false"} onChange={e => setNewPetDraft(prev => ({
            ...{
              ...prev
            },
            active: e.target.value === "true"
          }))} className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800 bg-white"><option value="true">Active</option><option value="false">Inactive</option></select></div><div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-900 text-[11px] flex items-start gap-2"><Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" /><span>Adding this pet writes directly into the Household Pets section of the 'Household Hub' spreadsheet tab.</span></div></div><div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2"><button onClick={() => setShowAddPetModal(false)} className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition">Cancel</button><button onClick={() => handleAddRosterPet(newPetDraft.name, newPetDraft.type, newPetDraft.routine, newPetDraft.care, newPetDraft.active !== false)} disabled={!newPetDraft.name.trim()} className="px-4 py-2 text-xs font-bold bg-amber-600 text-white rounded-lg hover:bg-amber-700 shadow-sm transition disabled:opacity-40">Add to Household Pets</button></div></div></div>}{editingPrintableChore && <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"><div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"><div className="p-4 bg-slate-900 text-white flex items-center justify-between"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs"><Pen className="w-4 h-4" /></div><div><h3 className="text-base font-bold">Edit Chore Details</h3><p className="text-[11px] text-slate-400">Update chore name, cadence, rotation group, or notes</p></div></div><button onClick={() => setEditingPrintableChore(null)} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs"><div><label className="block font-bold text-slate-800 mb-1">{"Chore Task Description "}<span className="text-rose-500">{"*"}</span></label><input type="text" value={editingPrintableChore.task} onChange={e => setEditingPrintableChore(prev => ({
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
          }))} placeholder="Operational details, supplies, or instructions..." className="w-full p-2 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:ring-1 focus:ring-indigo-500 resize-none leading-snug" /></div><div className="p-3 bg-amber-50/80 border border-amber-200/90 rounded-xl space-y-2.5"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"><label className="flex items-center gap-2 font-bold text-xs text-amber-950 cursor-pointer select-none"><input type="checkbox" checked={Boolean(editingPrintableChore.nudgeEnabled)} onChange={e => setEditingPrintableChore(prev => ({ ...prev, nudgeEnabled: e.target.checked }))} className="w-4 h-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500 cursor-pointer" /><span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-600" /><span>Enable Scheduled Auto-Nudge Reminder</span></span></label>{editingPrintableChore.nudgeEnabled && <div className="flex items-center gap-2 text-xs"><span className="font-bold text-amber-900">Reminder Time:</span><input type="time" value={editingPrintableChore.nudgeTime || "16:30"} onChange={e => setEditingPrintableChore(prev => ({ ...prev, nudgeTime: e.target.value }))} className="px-2 py-1 text-xs font-bold bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500" /><span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">{formatTime24To12(editingPrintableChore.nudgeTime || "16:30")}</span></div>}</div>{editingPrintableChore.nudgeEnabled && <div className="space-y-2 pt-1 border-t border-amber-200/70 text-xs"><div className="flex items-center gap-1.5 flex-wrap"><span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mr-1">Quick Presets:</span>{QUICK_NUDGE_TIME_PRESETS.map(preset => <button key={preset.time} type="button" onClick={() => setEditingPrintableChore(prev => ({ ...prev, nudgeTime: preset.time, nudgeWindow: preset.window, nudgeMessage: prev?.nudgeMessage || `Friendly reminder: please ${prev?.task || "complete this chore"} (${preset.display})! ⏰` }))} className={`px-2 py-1 rounded-lg text-[10px] font-bold transition border ${editingPrintableChore.nudgeTime === preset.time ? "bg-amber-600 text-white border-amber-700 shadow-xs" : "bg-white text-amber-900 border-amber-200 hover:bg-amber-100/70"}`}>{preset.label} ({preset.display})</button>)}</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2"><div><label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">Target Time Window (shown on kid's chore card)</label><input type="text" value={editingPrintableChore.nudgeWindow || ""} onChange={e => setEditingPrintableChore(prev => ({ ...prev, nudgeWindow: e.target.value }))} placeholder="e.g. After School (3:30 – 5:30 PM), Before Supper..." className="w-full px-2.5 py-1 text-xs bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium" /></div><div><label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">Custom Nudge Message / Prompt</label><input type="text" value={editingPrintableChore.nudgeMessage || ""} onChange={e => setEditingPrintableChore(prev => ({ ...prev, nudgeMessage: e.target.value }))} placeholder="e.g. Friendly reminder to empty the dishwasher before supper! 🍽️" className="w-full px-2.5 py-1 text-xs bg-white border border-amber-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium" /></div></div></div>}</div><div className="pt-2 border-t border-slate-100 flex items-center justify-between"><div><div className="font-bold text-rose-900 text-xs">Delete this chore</div><div className="text-[10px] text-slate-500">Remove from Printable Weekly Schedule</div></div><button type="button" onClick={() => {
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
          }} className="px-4 py-1.5 font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition">Delete Chore</button></div></div></div>}
      {showInviteModal && (
        <InviteModal
          householdId={deviceSession.householdId || "household_family_hub"}
          familyMembers={familyMembers}
          onClose={() => setShowInviteModal(false)}
          onKidPairedLocally={(kName) => {
            const kidSession = { role: "kid", kidName: kName, householdId: deviceSession.householdId || "household_family_hub", deviceId: "local_dev", parentPin: "1234" };
            saveDeviceSession(kidSession);
            setDeviceSession(kidSession);
            setShowInviteModal(false);
          }}
        />
      )}
      {showFirebaseModal && (
        <FirebaseSettingsModal
          onClose={() => setShowFirebaseModal(false)}
          onConfigSaved={() => {
            setNotice("Firebase Cloud configuration updated successfully!");
            setTimeout(() => setNotice(null), 3500);
          }}
        />
      )}
      {showPwaModal && (
        <InstallPwaModal onClose={() => setShowPwaModal(false)} />
      )}
      {showInspectionModal && (
        <ParentInspectionModal
          isOpen={showInspectionModal}
          onClose={() => setShowInspectionModal(false)}
          activeSyncWeek={activeSyncWeek}
          activeWeekDays={activeWeekDays}
          familyMembers={familyMembers}
          allKidsList={allKidsList}
          monthSchedule={monthSchedule}
          signOffStatus={signOffStatus}
          onToggleWeeklySignOff={handleToggleWeeklySignOff}
          onToggleWeeklyKidChore={handleToggleWeeklyKidChore}
          getWeeklyKidsStatus={getWeeklyKidsStatus}
          onToggleKidChore={handleToggleKidChore}
          monthlyIncentive={monthlyIncentive}
          monthlyGoalTarget={monthlyGoalTarget || 25}
          topPerformer={topPerformer}
          activeParentAdmin={activeParentAdmin}
        />
      )}
      {/* Household Real-Time Activity Drawer */}
      <HouseholdActivityDrawer
        isOpen={showActivityDrawer}
        onClose={() => setShowActivityDrawer(false)}
        activities={activities}
        onClearActivities={() => {
          clearActivityLog();
          setActivities([]);
        }}
        familyMembers={familyMembers}
        allKidsList={allKidsList}
      />

      {/* Floating Real-Time Remote Activity Toast */}
      <ActivityToast
        event={activeToastEvent}
        familyMembers={familyMembers}
        onClose={() => setActiveToastEvent(null)}
        onOpenFeed={() => setShowActivityDrawer(true)}
      />

      {/* Household Allowance Ledger & History Modal */}
      {showAllowanceLedger && (
        <AllowanceLedgerModal
          isOpen={showAllowanceLedger}
          onClose={() => setShowAllowanceLedger(false)}
          familyMembers={familyMembers}
          onOpenRewardModal={(kName) => {
            setShowAllowanceLedger(false);
            setRewardPayoutKid(kName || allKidsList[0] || "Sydney");
            setShowRewardPayoutModal(true);
          }}
        />
      )}

      {/* Parent Digital Reward & Payout Modal */}
      {showRewardPayoutModal && (
        <ParentRewardPayoutModal
          isOpen={showRewardPayoutModal}
          onClose={() => setShowRewardPayoutModal(false)}
          allKidsList={allKidsList}
          initialKid={rewardPayoutKid}
          onOpenLedger={() => {
            setShowRewardPayoutModal(false);
            setShowAllowanceLedger(true);
          }}
          onPayoutRecorded={(kName, amt, platform) => {
            setNotice(`🎁 Recorded $${amt} ${platform} digital gift card payout for ${kName}!`);
            setTimeout(() => setNotice(null), 4000);
          }}
        />
      )}

      {/* Parent Nudge & Feedback Modal */}
      {showNudgeModal && (
        <ParentNudgeModal
          isOpen={showNudgeModal}
          onClose={() => {
            setShowNudgeModal(false);
            setNudgeModalTarget(null);
          }}
          allKidsList={allKidsList}
          initialKid={nudgeModalTarget?.kid}
          initialType={nudgeModalTarget?.type}
          onNudgeSent={(targetKid, type) => {
            setActivities(getStoredActivityLog());
            setNotice(type === "praise" ? `⭐ Praise sent to ${targetKid}!` : `🧹 Nudge sent to ${targetKid}!`);
            setTimeout(() => setNotice(null), 4000);
          }}
          onSwitchToKid={(targetKid) => {
            setLastInspectedKid(targetKid);
            const cur = getStoredDeviceSession();
            const parentAdmin = activeParentAdmin || cur.parentName || "Thom";
            const newSession: DeviceSession = {
              role: "kid",
              householdId: cur.householdId || "household_family_hub",
              kidName: targetKid,
              deviceId: cur.deviceId,
              parentPin: cur.parentPin || "1234",
              viewingAsParent: parentAdmin
            };
            saveDeviceSession(newSession);
            setDeviceSession(newSession);
            setShowNudgeModal(false);
            setNudgeModalTarget(null);
            try {
              const url = new URL(window.location.href);
              url.searchParams.delete("parent");
              url.searchParams.set("kid", targetKid);
              url.searchParams.set("fromParent", parentAdmin);
              window.history.replaceState({}, document.title, url.toString());
            } catch {}
            setNotice(`Viewing ${targetKid}'s Minion page as ${parentAdmin}! 🎒`);
            setTimeout(() => setNotice(null), 3500);
          }}
        />
      )}

      {/* Household Settings & Preferences Modal */}
      {showSettingsModal && (
        <HouseholdSettingsModal
          isOpen={showSettingsModal}
          onClose={() => setShowSettingsModal(false)}
          viewMode="parent"
          allKidsList={allKidsList}
          familyMembers={familyMembers}
          activeSyncWeek={activeSyncWeek}
          householdId={deviceSession.householdId || "household_family_hub"}
          onSwitchToKid={(kName) => {
            setShowSettingsModal(false);
            const kidSession: DeviceSession = {
              role: "kid",
              kidName: kName,
              householdId: deviceSession.householdId || "household_family_hub",
              deviceId: deviceSession.deviceId || "local_dev",
              parentPin: deviceSession.parentPin || "1234"
            };
            saveDeviceSession(kidSession);
            setDeviceSession(kidSession);
            setNotice(`👀 Switched to Minion view for ${kName}`);
            setTimeout(() => setNotice(null), 3500);
          }}
          onOpenRewardPayoutModal={(kName) => {
            setShowSettingsModal(false);
            setRewardPayoutKid(kName || allKidsList[0] || "Sydney");
            setShowRewardPayoutModal(true);
          }}
          onUnpairDevice={(kName) => {
            setNotice(`Unpaired ${kName}'s device`);
            setTimeout(() => setNotice(null), 3500);
          }}
        />
      )}

      {/* Parent Photo Proofs Review Modal (Detail View) */}
      {selectedReviewProof && (
        <ParentPhotoReviewModal
          isOpen={!!selectedReviewProof}
          onClose={() => setSelectedReviewProof(null)}
          proof={selectedReviewProof}
          parentName={activeParentAdmin}
          onProofUpdated={(updated) => setSelectedReviewProof(updated)}
        />
      )}

      {/* Parent Photo Proofs Inbox Modal (Batch Review) */}
      {showPhotoInboxModal && (
        <ParentPhotoInboxModal
          isOpen={showPhotoInboxModal}
          onClose={() => setShowPhotoInboxModal(false)}
          allKidsList={allKidsList}
          familyMembers={familyMembers}
          onSelectProofForDetail={(p) => {
            setSelectedReviewProof(p);
          }}
        />
      )}

      {/* User Profile Customization & Autonomy Modal */}
      {profileModalTarget && (
        <UserProfileModal
          isOpen={!!profileModalTarget}
          onClose={() => setProfileModalTarget(null)}
          profile={getUserProfile(
            profileModalTarget,
            familyMembers.find(m => m.name.toLowerCase() === profileModalTarget.toLowerCase())
          )}
          isParentEditor={true}
          onSaveProfile={(updated) => {
            saveUserProfile(updated);
            setProfilesVersion(v => v + 1);
          }}
        />
      )}
    </div>
  );
}
var ErrorBoundary = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    window.parent.postMessage({
      type: "ERROR",
      payload: {
        error: error ? error.toString() : "Unknown rendering error",
        stack: error ? error.stack : ""
      }
    }, "*");
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 m-4 bg-red-50 border border-red-300 rounded-xl text-red-900 font-mono text-xs">
          <h2 className="text-base font-bold text-red-700 mb-2">Something went wrong</h2>
          <p className="font-semibold mb-2">{this.state.error ? String(this.state.error.message || this.state.error) : "Unknown Error"}</p>
          <pre className="overflow-auto max-h-60 p-2 bg-red-100 rounded text-[11px] whitespace-pre-wrap">{this.state.error?.stack || ""}</pre>
          <button onClick={() => this.setState({ hasError: false, error: null })} className="mt-3 px-3 py-1.5 bg-red-700 text-white rounded font-sans font-bold hover:bg-red-800">Retry</button>
        </div>
      );
    }
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
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const dataToSave = saved ? JSON.parse(saved) : sheetData;
      if (Array.isArray(dataToSave) && dataToSave.length > 0) {
        fetch('/__save-config?asDefault=true', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sheetData: dataToSave }),
        }).catch(() => {});
      }
    } catch (e) {}
  }, []);

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
