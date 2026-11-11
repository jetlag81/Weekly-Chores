// Dedicated Mobile-First Minion Mode (Kid Interface)

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Trophy,
  CheckCircle2,
  Circle,
  Lock,
  Gift,
  Flame,
  Calendar,
  Clock,
  Shirt,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  LogOut,
  RefreshCw,
  Volume2,
  VolumeX,
  Crown,
  Target,
  Medal,
  Award,
  Users,
  Smartphone,
  Download,
  ShieldCheck,
  Bell,
  Wallet,
  Settings,
  QrCode
} from "lucide-react";
import { isStandalone, subscribeInstallable } from "./pwaManager";
import { InstallPwaModal } from "./InstallPwaModal";
import { HouseholdSettingsModal, type SettingsTab } from "./HouseholdSettingsModal";
import { ParentInspectionModal } from "./ParentInspectionModal";
import { GifCelebrationModal, type GifModalVariant } from "./GifCelebrationModal";
import {
  getRandomGoodJobGif,
  getRandomAlmostGif,
  preloadNextGoodJobGifs,
  preloadNextAlmostGifs,
  preloadNextMehGifs
} from "./gifCelebrations";
import { getStoredParentNudges, markNudgeAcknowledged, type ParentNudgeEvent } from "./nudgeSystem";
import { HouseholdActivityDrawer } from "./HouseholdActivityDrawer";
import { ActivityToast } from "./ActivityToast";
import { getStoredAllowanceLedger } from "./allowanceLedger";
import {
  type HouseholdActivityEvent,
  getStoredActivityLog,
  saveActivityEvent,
  clearActivityLog,
  playHouseholdRemoteChime
} from "./activityFeed";
import {
  playChoreCompletionSound,
  saveDeviceSession,
  getStoredDeviceSession,
  broadcastLocalUpdate,
  subscribeToRealtimeSync,
  unpairKid,
  type DeviceSession
} from "./firebaseSync";
import { getChoreCanonicalKey, normalizeTaskName } from "./choreUtils";
import {
  speakKidDailySummary,
  speakSingleChore,
  speakChoreCelebration,
  stopSpeaking,
  isSpeaking,
  subscribeSpeechState,
  isSpeechSupported
} from "./voiceSpeech";
import { KidRewardAccountsModal } from "./KidRewardAccountsModal";
import {
  getKidRewardProfile,
  REWARD_PLATFORMS,
  type KidRewardProfile
} from "./rewardAccounts";
import { ThemeToggle } from "./ThemeToggle";

interface MinionDashboardProps {
  kidName: string;
  familyMembers: any[];
  monthSchedule: Record<string, Record<string | number, { who?: string; done?: boolean; kidsDone?: Record<string, boolean> }>>;
  hubMasterChores: any[];
  monthlyIncentive: string;
  monthlyGoalTarget?: number;
  rankedMembers?: any[];
  topPerformer?: any;
  selectedYear: number;
  selectedMonth: number;
  onUpdateChore: (dateKey: string, choreIndex: number, updates: { done?: boolean; who?: string }, taskTitle?: string) => void;
  onToggleWeeklyKidChore: (choreIndex: number, kidName: string, taskTitle: string) => void;
  getWeeklyKidsStatus: (choreIndex: number, taskTitle: string) => Record<string, boolean>;
  onExitMinionMode: () => void;
  onKidSwitched?: (kidName: string) => void;
  formatDateKey: (year: number, month: number, day: number) => string;
  activeSyncWeek?: string;
  getChoreStatus?: (dateKey: string, choreIndex: number, taskTitle?: string) => { who: string; done: boolean; kidsDone?: Record<string, boolean>; hasExplicitRecord?: boolean };
  signOffStatus?: { done: boolean; who?: string };
  onToggleWeeklySignOff?: () => void;
  activeWeekDays?: Array<{
    year: number;
    month: number;
    day: number;
    dateKey: string;
    dayOfWeekIndex: number;
  }>;
  allKidsList?: string[];
  onToggleKidChore?: (dateKey: string, choreIndex: number, kidName: string, taskTitle: string, dayIdx: number) => void;
}

export const MinionDashboard: React.FC<MinionDashboardProps> = ({
  kidName,
  familyMembers,
  monthSchedule,
  hubMasterChores,
  monthlyIncentive,
  monthlyGoalTarget = 25,
  rankedMembers,
  topPerformer,
  selectedYear,
  selectedMonth,
  onUpdateChore,
  onToggleWeeklyKidChore,
  getWeeklyKidsStatus,
  onExitMinionMode,
  onKidSwitched,
  formatDateKey,
  activeSyncWeek,
  getChoreStatus,
  signOffStatus = { done: false, who: "Parents" },
  onToggleWeeklySignOff,
  activeWeekDays = [],
  allKidsList = ["Sydney", "Cadence", "Mason"],
  onToggleKidChore
}) => {
  const kidMembers = React.useMemo(() => {
    return familyMembers.filter(
      m => m.active !== false &&
           m.role !== "Supreme Overlord" &&
           m.role !== "Overseer Supreme"
    );
  }, [familyMembers]);

  const currentKid = familyMembers.find(
    m => m.name.toLowerCase() === kidName.toLowerCase()
  ) || {
    name: kidName,
    role: "Minion",
    color: "#6366F1",
    bg: "#EEF2FF",
    text: "#4338CA"
  };

  // Date selection (default to today if within activeSyncWeek, or activeSyncWeek Monday)
  const [activeDate, setActiveDate] = useState(() => {
    const now = new Date();
    if (activeSyncWeek) {
      const parts = activeSyncWeek.split("-").map(Number);
      if (parts.length === 3) {
        const mon = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0);
        const sun = new Date(parts[0], parts[1] - 1, parts[2] + 6, 23, 59, 59);
        if (now >= mon && now <= sun) {
          return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
        }
        return mon;
      }
    }
    return new Date(selectedYear, selectedMonth, now.getDate() <= 31 ? now.getDate() : 19, 12, 0, 0);
  });

  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [canInstallPwa, setCanInstallPwa] = useState(false);
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState<"chores" | "leaderboard" | "rewards">("chores");
  const [showKidRewardModal, setShowKidRewardModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [settingsInitialTab, setSettingsInitialTab] = useState<SettingsTab>("appearance");
  const [rewardProfile, setRewardProfile] = useState<KidRewardProfile>(() => getKidRewardProfile(kidName));

  // Interactive Chore Celebration, Goal "Almost", and Parent Nudge/Praise State
  const [activeCelebration, setActiveCelebration] = useState<{
    gifUrl: string;
    taskTitle: string;
    variant?: GifModalVariant;
    headline?: string;
    message?: string;
    fromSender?: string;
    nudgeId?: string;
  } | null>(null);

  useEffect(() => {
    preloadNextGoodJobGifs(3);
    preloadNextAlmostGifs(3);
    preloadNextMehGifs(3);
  }, []);

  const triggerCelebration = (task: string, isNearGoal: boolean = false, goalDescription?: string) => {
    if (isNearGoal) {
      const gif = getRandomAlmostGif();
      setActiveCelebration({
        gifUrl: gif,
        taskTitle: task,
        variant: "almost",
        headline: "So Close! 90% Goal Reached!",
        message: goalDescription || "You're in the final stretch! Almost at 100%!"
      });
      preloadNextAlmostGifs(3);
    } else {
      const gif = getRandomGoodJobGif();
      setActiveCelebration({
        gifUrl: gif,
        taskTitle: task,
        variant: "good_job"
      });
      preloadNextGoodJobGifs(3);
    }
  };

  const handleCloseCelebration = () => {
    if (activeCelebration?.nudgeId) {
      markNudgeAcknowledged(activeCelebration.nudgeId);
    }
    setActiveCelebration(null);
  };

  // Household Real-Time Activity State
  const [activities, setActivities] = useState<HouseholdActivityEvent[]>(() => getStoredActivityLog());
  const [showActivityDrawer, setShowActivityDrawer] = useState(false);
  const [activeToastEvent, setActiveToastEvent] = useState<HouseholdActivityEvent | null>(null);

  const logHouseholdActivity = (event: Omit<HouseholdActivityEvent, "id" | "timestamp" | "deviceId">) => {
    const fullEvent: HouseholdActivityEvent = {
      ...event,
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      deviceId: currentKid.name
    };
    const updated = saveActivityEvent(fullEvent);
    setActivities(updated);
    broadcastLocalUpdate({
      type: "ACTIVITY_LOGGED",
      event: fullEvent
    });
  };

  useEffect(() => {
    return subscribeToRealtimeSync((msg: any) => {
      if (!msg) return;
      if (msg.type === "ACTIVITY_LOGGED" && msg.event) {
        setActivities(prev => {
          const updated = [msg.event, ...prev.filter(e => e.id !== msg.event.id)].slice(0, 100);
          try {
            localStorage.setItem("weekly_chores_activity_log_v1", JSON.stringify(updated));
          } catch {}
          return updated;
        });

        // Remote activity event from another family member
        if (msg.event.kidName?.toLowerCase() !== currentKid.name.toLowerCase() && msg.event.action !== "uncompleted") {
          playHouseholdRemoteChime();
          setActiveToastEvent(msg.event);
        }
      }

      // Live Parent Feedback & Nudge Event
      if (msg.type === "PARENT_NUDGE_SENT" && msg.nudge) {
        const nudge: ParentNudgeEvent = msg.nudge;
        if (nudge.targetKid?.toLowerCase() === currentKid.name.toLowerCase() && !nudge.acknowledged) {
          if (nudge.type === "praise") {
            playChoreCompletionSound();
            try {
              confetti({ particleCount: 70, spread: 75, origin: { y: 0.6 } });
            } catch {}
          } else {
            playHouseholdRemoteChime();
          }
          setActiveCelebration({
            gifUrl: nudge.gifUrl,
            taskTitle: nudge.headline,
            variant: nudge.type,
            headline: nudge.headline,
            message: nudge.message,
            fromSender: nudge.fromParent,
            nudgeId: nudge.id
          });
        }
      }
    });
  }, [currentKid.name]);

  // Check for recent unacknowledged parent nudge on initial load
  useEffect(() => {
    const recentNudges = getStoredParentNudges();
    const pending = recentNudges.find(
      n =>
        n.targetKid?.toLowerCase() === currentKid.name.toLowerCase() &&
        !n.acknowledged &&
        Date.now() - n.timestamp < 30 * 60 * 1000
    );
    if (pending) {
      setActiveCelebration({
        gifUrl: pending.gifUrl,
        taskTitle: pending.headline,
        variant: pending.type,
        headline: pending.headline,
        message: pending.message,
        fromSender: pending.fromParent,
        nudgeId: pending.id
      });
    }
  }, [currentKid.name]);

  useEffect(() => {
    return subscribeSpeechState(speaking => setIsSpeakingAudio(speaking));
  }, []);

  useEffect(() => {
    return subscribeInstallable(can => setCanInstallPwa(can));
  }, []);

  const activeDateKey = formatDateKey(
    activeDate.getFullYear(),
    activeDate.getMonth(),
    activeDate.getDate()
  );

  const formattedDayName = activeDate.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDateStr = activeDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Calculate monthly stats for this kid
  const kidMonthlyCompletions = React.useMemo(() => {
    let count = 0;
    Object.keys(monthSchedule).forEach(dKey => {
      const dayChores = monthSchedule[dKey] || {};
      Object.keys(dayChores).forEach(cIdx => {
        const item = dayChores[cIdx];
        if (item) {
          if (item.who === currentKid.name && item.done) count++;
          if (item.kidsDone && item.kidsDone[currentKid.name]) count++;
        }
      });
    });
    return count;
  }, [monthSchedule, currentKid.name]);

  // Ranked kids for the leaderboard
  const rankedKidsList = React.useMemo(() => {
    if (rankedMembers && rankedMembers.length > 0) {
      return rankedMembers;
    }
    // Fallback: compute dynamically from monthSchedule
    return kidMembers.map(m => {
      let done = 0;
      Object.keys(monthSchedule).forEach(dKey => {
        const dayChores = monthSchedule[dKey] || {};
        Object.keys(dayChores).forEach(cIdx => {
          const item = dayChores[cIdx];
          if (item) {
            if (item.who && item.who.toLowerCase() === m.name.toLowerCase() && item.done) done++;
            if (item.kidsDone && item.kidsDone[m.name]) done++;
          }
        });
      });
      return {
        id: m.id || m.name,
        name: m.name,
        color: m.color || "#6366F1",
        role: m.role || "Minion",
        residency: m.type === "biweekly" ? "Bi-Weekly" : m.type === "casual" ? "Casual" : "Full-Time",
        type: m.type,
        done,
        total: Math.max(done, 20),
        pct: Math.min(100, Math.round((done / Math.max(1, monthlyGoalTarget)) * 100))
      };
    }).sort((a, b) => {
      if (b.done !== a.done) return b.done - a.done;
      return b.pct - a.pct;
    });
  }, [rankedMembers, kidMembers, monthSchedule, monthlyGoalTarget]);

  // Allowance and Earnings Summary for this kid
  const kidAllowanceSummary = React.useMemo(() => {
    const records = getStoredAllowanceLedger();
    let totalEarned = 0;
    let totalPaid = 0;
    let latestPayout: {
      weekLabel: string;
      finalAmount: number;
      paid: boolean;
      paymentMethod?: string;
      completionPct: number;
    } | null = null;

    records.forEach(rec => {
      const item = rec.items.find(i => i.kidName.toLowerCase() === currentKid.name.toLowerCase());
      if (item) {
        totalEarned += item.finalAmount;
        if (item.paid) totalPaid += item.finalAmount;
        if (!latestPayout) {
          latestPayout = {
            weekLabel: rec.weekLabel,
            finalAmount: item.finalAmount,
            paid: item.paid,
            paymentMethod: item.paymentMethod,
            completionPct: item.completionPct
          };
        }
      }
    });

    return {
      totalEarned,
      totalPaid,
      pending: Math.max(0, totalEarned - totalPaid),
      latestPayout: latestPayout as {
        weekLabel: string;
        finalAmount: number;
        paid: boolean;
        paymentMethod?: string;
        completionPct: number;
      } | null
    };
  }, [currentKid.name]);

  const leaderKid = topPerformer || rankedKidsList[0] || null;
  const isMyKidLeading = leaderKid && leaderKid.name.toLowerCase() === currentKid.name.toLowerCase() && leaderKid.done > 0;
  const myRank = rankedKidsList.findIndex(k => k.name.toLowerCase() === currentKid.name.toLowerCase()) + 1 || 1;
  const choresBehind = leaderKid ? Math.max(0, leaderKid.done - kidMonthlyCompletions) : 0;
  const topScore = leaderKid ? leaderKid.done : 0;

  // Daily chores assigned to this kid for activeDateKey
  const dailyChoresForKid = React.useMemo(() => {
    const dayChores = monthSchedule[activeDateKey] || {};
    const list: Array<{ chore: any; choreIndex: number; done: boolean; isAssignedToMe: boolean; canonicalKey: string }> = [];

    hubMasterChores.forEach((chore, idx) => {
      const f = String(chore.frequency || "").toLowerCase();
      const isDaily = f.includes("daily") || (!f.includes("bi") && !f.includes("once") && !f.includes("week"));
      if (!isDaily) return;

      const cKey = getChoreCanonicalKey(chore.task);
      const norm = normalizeTaskName(chore.task);

      // Safe multi-key lookup: NEVER use idx!
      const statusFromProp = getChoreStatus ? getChoreStatus(activeDateKey, chore.index_, chore.task) : null;
      const choreStatus = (statusFromProp && (statusFromProp.hasExplicitRecord || statusFromProp.who || statusFromProp.done))
        ? statusFromProp
        : (cKey ? dayChores[cKey] : null) ||
          dayChores[chore.index_] ||
          (chore.task ? dayChores[chore.task] : null) ||
          (chore.task ? dayChores[chore.task.toLowerCase().trim()] : null) ||
          (norm ? dayChores[norm] : null) || {};

      const who = choreStatus.who || "";
      const isDone = !!choreStatus.done;

      const isDirectlyAssigned = who.toLowerCase() === currentKid.name.toLowerCase();
      const isGroupAssigned =
        who === "All Kids" ||
        who === "Each Child" ||
        (who === "Non-Casual" && currentKid.type !== "casual") ||
        (who === "All Non-Casual" && currentKid.type !== "casual");

      // Stable list inclusion:
      if (isDirectlyAssigned || isGroupAssigned || !who || isDone) {
        list.push({
          chore,
          choreIndex: chore.index_ !== undefined ? chore.index_ : idx,
          done: isDone,
          isAssignedToMe: isDirectlyAssigned || isGroupAssigned,
          canonicalKey: cKey
        });
      }
    });

    // Deterministic sorting by chore index so chores never jump or swap places!
    list.sort((a, b) => {
      const idxA = a.chore.index_ !== undefined ? a.chore.index_ : 0;
      const idxB = b.chore.index_ !== undefined ? b.chore.index_ : 0;
      return idxA - idxB;
    });

    return list;
  }, [hubMasterChores, monthSchedule, activeDateKey, currentKid, getChoreStatus]);

  // Weekly Checklist chores for this kid
  const weeklyChores = React.useMemo(() => {
    return hubMasterChores.filter(c => {
      const t = (c.task || "").toLowerCase();
      return t.includes("laundry") || t.includes("bedroom");
    });
  }, [hubMasterChores]);

  const DAY_SHORT_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const todayDateKey = formatDateKey(today.getFullYear(), today.getMonth(), today.getDate());

  const weekDaysToRender = React.useMemo(() => {
    if (activeWeekDays && activeWeekDays.length === 7) {
      return activeWeekDays;
    }
    const curr = new Date(activeDate);
    const day = curr.getDay();
    const diff = curr.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(curr.setDate(diff));
    const list = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      list.push({
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate(),
        dateKey: formatDateKey(d.getFullYear(), d.getMonth(), d.getDate()),
        dayOfWeekIndex: d.getDay()
      });
    }
    return list;
  }, [activeWeekDays, activeDate, formatDateKey]);

  const getMemberCompletionForDay = (memberName: string, dateKey: string) => {
    const dayChores = monthSchedule[dateKey] || {};
    let done = 0;
    let total = 0;

    hubMasterChores.forEach((chore, idx) => {
      const cKey = getChoreCanonicalKey(chore.task);
      const norm = normalizeTaskName(chore.task);

      const statusFromProp = getChoreStatus ? getChoreStatus(dateKey, chore.index_, chore.task) : null;
      const choreStatus = (statusFromProp && (statusFromProp.hasExplicitRecord || statusFromProp.who || statusFromProp.done))
        ? statusFromProp
        : (cKey ? dayChores[cKey] : null) ||
          dayChores[chore.index_] ||
          (chore.task ? dayChores[chore.task] : null) ||
          (chore.task ? dayChores[chore.task.toLowerCase().trim()] : null) ||
          (norm ? dayChores[norm] : null) || {};

      const who = choreStatus.who || "";
      const isShared = (chore.assignedTo || []).includes("All") || (chore.assignedTo || []).length > 1;
      const isDone = isShared && choreStatus.kidsDone ? !!choreStatus.kidsDone[memberName] : !!choreStatus.done;

      const mem = familyMembers.find(f => f.name.toLowerCase() === memberName.toLowerCase());
      const memType = mem?.type;

      const isDirectlyAssigned = who.toLowerCase() === memberName.toLowerCase();
      const isGroupAssigned =
        who === "All Kids" ||
        who === "Each Child" ||
        (who === "Non-Casual" && memType !== "casual") ||
        (who === "All Non-Casual" && memType !== "casual") ||
        (isShared && ((chore.assignedTo || []).includes("All") || (chore.assignedTo || []).includes(memberName)));

      if (isDirectlyAssigned || isGroupAssigned || isDone) {
        total++;
        if (isDone) done++;
      }
    });

    return { done, total, allDone: total > 0 && done === total };
  };

  const getKidCompletionForDay = (dateKey: string) => {
    return getMemberCompletionForDay(currentKid.name, dateKey);
  };

  const handleToggleDailyChore = (choreIndex: number, currentDone: boolean, taskTitle?: string) => {
    const nextDone = !currentDone;
    onUpdateChore(
      activeDateKey,
      choreIndex,
      {
        done: nextDone,
        who: currentKid.name
      },
      taskTitle
    );

    if (nextDone) {
      // Check if approaching 90% goal milestone
      const totalDaily = dailyChoresForKid.length;
      const nextDoneCount = completedTodayCount + 1;
      const dailyPct = totalDaily > 0 ? (nextDoneCount / totalDaily) * 100 : 0;

      const totalMonthlyTarget = Math.max(1, monthlyGoalTarget);
      const nextMonthlyCount = kidMonthlyCompletions + 1;
      const monthlyPct = (nextMonthlyCount / totalMonthlyTarget) * 100;

      const isNearDailyGoal = totalDaily >= 4 && ((dailyPct >= 85 && dailyPct < 100) || (totalDaily - nextDoneCount === 1));
      const isNearMonthlyGoal = monthlyPct >= 88 && monthlyPct < 100;

      const isNearGoal = isNearDailyGoal || isNearMonthlyGoal;
      const goalNote = isNearMonthlyGoal
        ? `90% Monthly Goal! ${nextMonthlyCount}/${monthlyGoalTarget} chores towards ${monthlyIncentive}!`
        : isNearDailyGoal
        ? `90% of today's chores done (${nextDoneCount}/${totalDaily})! Only 1 chore left!`
        : undefined;

      // Confetti burst & cheerful melodic chime!
      playChoreCompletionSound();
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.65 }
        });
      } catch {
        // Confetti fallback
      }
      speakChoreCelebration(currentKid.name, taskTitle || "Chore");
      triggerCelebration(taskTitle || "Chore", isNearGoal, goalNote);
      logHouseholdActivity({
        kidName: currentKid.name,
        taskTitle: taskTitle || "Chore",
        action: "completed",
        dateKey: activeDateKey
      });
    } else {
      logHouseholdActivity({
        kidName: currentKid.name,
        taskTitle: taskTitle || "Chore",
        action: "uncompleted",
        dateKey: activeDateKey
      });
    }
  };

  const handleToggleWeekly = (choreIndex: number, taskTitle: string, currentDone: boolean) => {
    onToggleWeeklyKidChore(choreIndex, currentKid.name, taskTitle);
    if (!currentDone) {
      const totalMonthlyTarget = Math.max(1, monthlyGoalTarget);
      const nextMonthlyCount = kidMonthlyCompletions + 1;
      const monthlyPct = (nextMonthlyCount / totalMonthlyTarget) * 100;
      const isNearMonthlyGoal = monthlyPct >= 88 && monthlyPct < 100;

      const goalNote = isNearMonthlyGoal
        ? `90% Monthly Goal! ${nextMonthlyCount}/${monthlyGoalTarget} chores towards ${monthlyIncentive}!`
        : "90% of weekly goal reached! Final push!";

      playChoreCompletionSound();
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
      speakChoreCelebration(currentKid.name, taskTitle);
      triggerCelebration(taskTitle, isNearMonthlyGoal, goalNote);
      logHouseholdActivity({
        kidName: currentKid.name,
        taskTitle,
        action: "completed"
      });
    } else {
      logHouseholdActivity({
        kidName: currentKid.name,
        taskTitle,
        action: "uncompleted"
      });
    }
  };


  const completedTodayCount = dailyChoresForKid.filter(c => c.done).length;

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16 font-sans transition-colors">
      {/* Top Mobile Bar */}
      <header className="sticky top-0 z-30 w-full max-w-full overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-3.5 sm:px-4 py-2.5 shadow-xs dark:shadow-md transition-colors">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
          {/* Avatar and Kid Name */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-white text-base shadow-sm ring-2 ring-white dark:ring-slate-700 shrink-0"
              style={{ backgroundColor: currentKid.color || "#6366F1" }}
            >
              {currentKid.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h1 className="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-tight truncate">
                  {currentKid.name}'s Chores
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
                  🎒 Minion
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium truncate">
                <span className="flex items-center gap-0.5 text-amber-600 dark:text-amber-400 font-bold shrink-0">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>3 Day Streak</span>
                </span>
                <span>•</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold truncate">
                  {kidMonthlyCompletions} finished
                </span>
              </div>
            </div>
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {!isStandalone() && (
              <button
                type="button"
                onClick={() => setShowInstallModal(true)}
                className="py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition flex items-center gap-1 text-xs font-black cursor-pointer shadow-xs"
                title="Install app to your home screen"
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-100" />
                <span className="hidden xs:inline">Install</span>
              </button>
            )}

            {/* Live Household Activity Feed Button */}
            <button
              type="button"
              onClick={() => setShowActivityDrawer(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition flex items-center justify-center cursor-pointer shadow-2xs relative"
              title="Live Household Activity Feed"
            >
              <Bell className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              {activities.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 rounded-full bg-indigo-600 text-white text-[9px] font-mono font-black flex items-center justify-center px-1 shadow-xs">
                  {activities.length > 9 ? "9+" : activities.length}
                </span>
              )}
            </button>

            {/* Household Settings Menu Button */}
            <button
              type="button"
              onClick={() => {
                setSettingsInitialTab("appearance");
                setShowSettingsModal(true);
              }}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition flex items-center justify-center cursor-pointer shadow-2xs"
              title="Household Settings & Preferences"
            >
              <Settings className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Kid Pages Segmented Switcher (Each Kid Has Their Own Dedicated Page) */}
      {kidMembers.length > 1 && (
        <div className="w-full max-w-xl mx-auto px-3 sm:px-4 pt-3 pb-0.5 overflow-hidden">
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900 rounded-2xl border border-slate-300/80 dark:border-slate-800 shadow-2xs overflow-x-auto no-scrollbar">
            {kidMembers.map(m => {
              const isCurrent = m.name.toLowerCase() === currentKid.name.toLowerCase();
              const mStats = getMemberCompletionForDay(m.name, activeDateKey);

              return (
                <button
                  key={m.id || m.name}
                  type="button"
                  onClick={() => {
                    if (!isCurrent) {
                      const cur = getStoredDeviceSession();
                      const updatedSession: DeviceSession = {
                        ...cur,
                        role: "kid",
                        kidName: m.name
                      };
                      saveDeviceSession(updatedSession);
                      try {
                        const url = new URL(window.location.href);
                        url.searchParams.set("kid", m.name);
                        window.history.replaceState({}, document.title, url.toString());
                      } catch {}
                      onKidSwitched?.(m.name);
                    }
                  }}
                  className={`flex-1 min-w-0 py-2 px-1.5 sm:px-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-2 select-none shrink ${
                    isCurrent
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-black ring-1 ring-slate-300 dark:ring-slate-700"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60 font-bold"
                  }`}
                  title={`Open ${m.name}'s Chore Page`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 ring-1 ring-white/50"
                    style={{ backgroundColor: m.color || "#6366F1" }}
                  />
                  <span className="text-xs truncate font-bold">{m.name}</span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                      isCurrent
                        ? "bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300"
                        : "bg-slate-300/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {mStats.done}/{mStats.total}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation Tab Bar */}
      <div className="w-full max-w-xl mx-auto px-3 sm:px-4 pt-2.5 pb-1 overflow-hidden">
        <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-black shadow-2xs gap-1">
          <button
            type="button"
            onClick={() => setActiveNavTab("chores")}
            className={`flex-1 py-2 px-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeNavTab === "chores"
                ? "bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">Chores</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
              {completedTodayCount}/{dailyChoresForKid.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveNavTab("leaderboard")}
            className={`flex-1 py-2 px-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeNavTab === "leaderboard"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-200 shrink-0" />
            <span className="truncate">Prize Race</span>
            {isMyKidLeading ? (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-600 text-white font-black shadow-2xs">
                #1
              </span>
            ) : (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                #{myRank}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveNavTab("rewards")}
            className={`flex-1 py-2 px-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
              activeNavTab === "rewards"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Gift className="w-4 h-4 text-purple-200 shrink-0" />
            <span className="truncate">Rewards</span>
          </button>
        </div>
      </div>

      <main className="max-w-xl mx-auto px-4 py-4 space-y-4">
        {activeNavTab === "leaderboard" ? (
          /* LEADERBOARD & MONTHLY RACE VIEW */
          <div className="space-y-4">
            {/* Hero Monthly Prize Card */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-3xl p-5 text-white shadow-md space-y-4">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-amber-100">
                <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
                  <Trophy className="w-4 h-4 text-amber-200" />
                  <span>Monthly Incentive Race</span>
                </span>
                <span className="bg-white/20 px-2.5 py-1 rounded-full text-[11px] font-extrabold">
                  {MONTH_NAMES[selectedMonth]} {selectedYear}
                </span>
              </div>

              <div className="flex items-center gap-3.5 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center shrink-0 shadow-inner">
                  <Gift className="w-8 h-8 text-amber-100" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-amber-100 font-bold uppercase tracking-wider">Top Performer Reward</div>
                  <div className="text-lg font-black text-white leading-tight">
                    {monthlyIncentive}
                  </div>
                </div>
              </div>

              {/* Monthly Target Progress for this Kid */}
              <div className="bg-black/20 p-3.5 rounded-2xl space-y-2 border border-white/10">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-amber-100 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-amber-300" />
                    <span>Your Target: {monthlyGoalTarget} Chores</span>
                  </span>
                  <span className="text-white font-black text-xs">
                    {kidMonthlyCompletions} / {monthlyGoalTarget} ({Math.min(100, Math.round((kidMonthlyCompletions / monthlyGoalTarget) * 100))}%)
                  </span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-3 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 transition-all duration-700 shadow-xs"
                    style={{ width: `${Math.min(100, Math.max(5, (kidMonthlyCompletions / monthlyGoalTarget) * 100))}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Current Minion's Status & Motivation Callout */}
            <div className={`p-4 rounded-2xl border transition-all ${
              isMyKidLeading
                ? "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border-amber-300 dark:border-amber-800 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xs"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-base shrink-0 shadow-xs ${
                  isMyKidLeading
                    ? "bg-amber-500 text-white"
                    : myRank === 2
                    ? "bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                    : myRank === 3
                    ? "bg-amber-700 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                }`}>
                  {isMyKidLeading ? <Crown className="w-5 h-5" /> : `#${myRank}`}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{isMyKidLeading ? "👑 You are currently in 1st Place!" : `You are ranked #${myRank}`}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                    {isMyKidLeading
                      ? `Amazing job, ${currentKid.name}! You're on track to win "${monthlyIncentive}"!`
                      : leaderKid
                      ? `You have ${kidMonthlyCompletions} chores done — only ${choresBehind} behind ${leaderKid.name} for 1st place!`
                      : `Keep completing your daily chores to climb the leaderboard!`}
                  </p>
                </div>
              </div>
            </div>

            {/* Minion Piggy Bank / Allowance Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-4 text-white shadow-md space-y-3">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-emerald-100">
                <span className="flex items-center gap-1.5 bg-black/20 px-2.5 py-0.5 rounded-full">
                  <Wallet className="w-3.5 h-3.5 text-emerald-200" />
                  <span>My Chore Allowance</span>
                </span>
                <span className="font-extrabold text-white text-xs">
                  ${kidAllowanceSummary.totalEarned}.00 Total Earned
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-black/15 p-2.5 rounded-2xl border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-emerald-200">Received</div>
                  <div className="text-xl font-black text-white mt-0.5">${kidAllowanceSummary.totalPaid}.00</div>
                  <div className="text-[10px] text-emerald-200/80">Paid in cash / bank</div>
                </div>

                <div className="bg-black/15 p-2.5 rounded-2xl border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-amber-200">Pending Payout</div>
                  <div className="text-xl font-black text-amber-300 mt-0.5">${kidAllowanceSummary.pending}.00</div>
                  <div className="text-[10px] text-amber-200/80">
                    {kidAllowanceSummary.latestPayout?.paid ? "All clear!" : "Awaiting parent payout"}
                  </div>
                </div>
              </div>

              {kidAllowanceSummary.latestPayout && (
                <div className="text-[11px] bg-black/20 px-3 py-1.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="truncate">Latest: {kidAllowanceSummary.latestPayout.weekLabel}</span>
                  <span className="font-bold shrink-0 ml-2">
                    ${kidAllowanceSummary.latestPayout.finalAmount}.00 ({kidAllowanceSummary.latestPayout.paid ? "Paid ✓" : "Pending"})
                  </span>
                </div>
              )}
            </div>

            {/* Minions Leaderboard Standings */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>Minions Leaderboard</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Live rankings for {MONTH_NAMES[selectedMonth]} {selectedYear}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (isSpeechSupported()) {
                      const msg = isMyKidLeading
                        ? `${currentKid.name} is in first place with ${kidMonthlyCompletions} chores completed! Keep rocking it!`
                        : leaderKid
                        ? `${leaderKid.name} leads the race with ${leaderKid.done} chores. ${currentKid.name} is in rank ${myRank} with ${kidMonthlyCompletions} chores!`
                        : `Check out the family leaderboard for this month!`;
                      window.speechSynthesis.cancel();
                      const u = new SpeechSynthesisUtterance(msg);
                      u.rate = 1.0;
                      window.speechSynthesis.speak(u);
                    }
                  }}
                  className="p-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition cursor-pointer flex items-center gap-1 text-[11px] font-bold"
                  title="Announce leaderboard"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Announce</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {rankedKidsList.map((k, idx) => {
                  const isLeader = idx === 0 && k.done > 0;
                  const isMe = k.name.toLowerCase() === currentKid.name.toLowerCase();
                  const rankBadge = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`;

                  return (
                    <div
                      key={k.id || k.name}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        isMe
                          ? "border-indigo-400 dark:border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 ring-2 ring-indigo-200 dark:ring-indigo-800/60 shadow-xs"
                          : isLeader
                          ? "border-amber-300 dark:border-amber-700/80 bg-amber-50/40 dark:bg-amber-950/30"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base font-black w-6 text-center">{rankBadge}</span>
                          <span
                            className="w-4 h-4 rounded-full shadow-2xs shrink-0"
                            style={{ backgroundColor: k.color }}
                          />
                          <span className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>{k.name}</span>
                            {isMe && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-indigo-600 text-white uppercase tracking-wider">
                                YOU
                              </span>
                            )}
                            {isLeader && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border border-amber-300 dark:border-amber-700 flex items-center gap-0.5">
                                <Crown className="w-2.5 h-2.5" />
                                <span>#1 Leader</span>
                              </span>
                            )}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-sm text-slate-900 dark:text-white">{k.done}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400"> chores</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${Math.min(100, Math.max(6, (k.done / Math.max(1, topScore, monthlyGoalTarget)) * 100))}%`,
                            backgroundColor: isLeader ? "#D97706" : k.color
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveNavTab("chores")}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-xs transition flex items-center justify-center gap-2 text-xs cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-200" />
                  <span>Back to My Daily Chores</span>
                </button>
              </div>
            </div>
          </div>
        ) : activeNavTab === "rewards" ? (
          /* REWARDS & WISHLIST VIEW */
          <div className="space-y-4">
            {/* Hero Top Wish Card */}
            <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 rounded-3xl p-5 text-white shadow-md space-y-4">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-purple-100">
                <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full">
                  <Gift className="w-4 h-4 text-amber-200" />
                  <span>My Reward Wishlist</span>
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-black font-mono">
                  {kidName}
                </span>
              </div>

              <div>
                <div className="text-xs text-purple-100 font-medium">Your Current Top Wish:</div>
                <div className="text-lg font-black text-white leading-snug mt-0.5">
                  {rewardProfile.topWish || "No specific wish added yet!"}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-lg shadow-xs">
                    Target Goal: ${rewardProfile.targetGoalAmount || 15}
                  </span>
                  <span className="text-xs text-purple-100 font-medium">
                    Seen by Parents Thom &amp; Meghan
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowKidRewardModal(true)}
                  className="w-full py-2.5 bg-white text-indigo-900 font-black rounded-2xl shadow-sm hover:bg-purple-50 transition flex items-center justify-center gap-2 text-xs cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Edit Wish &amp; Connected Accounts</span>
                </button>
              </div>
            </div>

            {/* Connected Accounts & Gaming Tags List */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="font-black text-sm text-slate-900 dark:text-white">
                    Connected Accounts &amp; Tags
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Parents use these to send digital gift cards &amp; Robux
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowKidRewardModal(true)}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline cursor-pointer"
                >
                  + Add / Edit
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {REWARD_PLATFORMS.map((platform) => {
                  const val = rewardProfile.platforms?.[platform.id];
                  return (
                    <div
                      key={platform.id}
                      className={`p-3 rounded-2xl border transition flex items-center justify-between gap-2 ${
                        val
                          ? "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700"
                          : "bg-slate-50/50 dark:bg-slate-800/40 border-dashed border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl shrink-0">{platform.iconEmoji}</span>
                        <div className="min-w-0">
                          <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                            {platform.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                            {val || "Not linked yet"}
                          </div>
                        </div>
                      </div>

                      {val ? (
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full shrink-0">
                          ✓ Linked
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setShowKidRewardModal(true)}
                          className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-lg shrink-0 cursor-pointer"
                        >
                          + Link
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Back to Chores button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveNavTab("chores")}
                className="w-full py-2.5 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-xs transition flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Back to My Daily Chores</span>
              </button>
            </div>
          </div>
        ) : (
          /* CHORES VIEW (Default) */
          <>
            {/* Unified Motivational Goal & Wish Strip */}
            <div
              onClick={() => setActiveNavTab(rewardProfile.topWish ? "rewards" : "leaderboard")}
              className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 dark:from-slate-900 dark:via-indigo-950/80 dark:to-purple-950/80 rounded-2xl p-3 text-white shadow-sm border border-indigo-500/30 cursor-pointer hover:border-indigo-400 transition"
              title="Click to view rewards, wish list and leaderboard"
            >
              <div className="flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 text-white flex items-center justify-center text-sm shrink-0 shadow-xs">
                    {rewardProfile.topWish ? "🎁" : "🏆"}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] uppercase font-black tracking-wider text-purple-300">
                        {rewardProfile.topWish ? "Reward Wish" : "Monthly Prize"}
                      </span>
                      <span className="text-[10px] font-black px-1.5 py-0.2 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {isMyKidLeading ? "👑 #1" : `#${myRank}`}
                      </span>
                    </div>
                    <div className="text-xs font-black text-white truncate leading-tight mt-0.5">
                      {rewardProfile.topWish || monthlyIncentive}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-[10px] text-indigo-200 font-semibold">
                    {kidMonthlyCompletions} / {monthlyGoalTarget} done
                  </div>
                  <div className="text-xs font-black text-amber-300">
                    {Math.min(100, Math.round((kidMonthlyCompletions / Math.max(1, monthlyGoalTarget)) * 100))}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden mt-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(5, (kidMonthlyCompletions / Math.max(1, monthlyGoalTarget)) * 100))}%` }}
                />
              </div>
            </div>

            {/* Horizontal 7-Day Switcher */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    {formattedDayName}, {formattedDateStr}
                  </span>
                  {activeDateKey === todayDateKey && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      Today
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      const prev = new Date(activeDate);
                      prev.setDate(prev.getDate() - 1);
                      setActiveDate(prev);
                    }}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    title="Previous Day"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const next = new Date(activeDate);
                      next.setDate(next.getDate() + 1);
                      setActiveDate(next);
                    }}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                    title="Next Day"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 7-Day Pills */}
              <div className="grid grid-cols-7 gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                {weekDaysToRender.map(day => {
                  const isSelected = day.dateKey === activeDateKey;
                  const isToday = day.dateKey === todayDateKey;
                  const dayStats = getKidCompletionForDay(day.dateKey);

                  return (
                    <button
                      key={day.dateKey}
                      type="button"
                      onClick={() => setActiveDate(new Date(day.year, day.month, day.day, 12, 0, 0))}
                      className={`py-2 rounded-xl flex flex-col items-center justify-center transition cursor-pointer relative ${
                        isSelected
                          ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-sm font-black"
                          : "hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider">
                        {DAY_SHORT_NAMES[day.dayOfWeekIndex]}
                      </span>
                      <span className="text-xs font-black mt-0.5">{day.day}</span>
                      {isToday ? (
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-0.5 ${
                            isSelected ? "bg-white" : "bg-emerald-500"
                          }`}
                        />
                      ) : dayStats.allDone ? (
                        <span
                          className={`text-[9px] leading-none mt-0.5 ${
                            isSelected ? "text-white" : "text-emerald-500 font-black"
                          }`}
                        >
                          ✓
                        </span>
                      ) : (
                        <span className="w-1.5 h-1.5 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Today's Daily Chores Section */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>Daily Routines</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {completedTodayCount} / {dailyChoresForKid.length}
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  {isSpeechSupported() && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isSpeakingAudio) {
                          stopSpeaking();
                        } else {
                          speakKidDailySummary(
                            currentKid.name,
                            formattedDayName,
                            dailyChoresForKid.map(c => ({
                              task: c.chore.task,
                              done: c.done,
                              notes: c.chore.notes
                            }))
                          );
                        }
                      }}
                      className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                        isSpeakingAudio
                          ? "bg-rose-100 text-rose-700 border border-rose-300 animate-pulse"
                          : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-800"
                      }`}
                      title={isSpeakingAudio ? "Stop reading" : "Read today's chores aloud"}
                    >
                      {isSpeakingAudio ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-rose-600" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>Read Aloud</span>
                        </>
                      )}
                    </button>
                  )}
                  {completedTodayCount === dailyChoresForKid.length && dailyChoresForKid.length > 0 && (
                    <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <span>🌟 All Done!</span>
                    </span>
                  )}
                </div>
              </div>

              {dailyChoresForKid.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-2 shadow-2xs">
                  <Sparkles className="w-8 h-8 text-indigo-400 mx-auto" />
                  <div className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">No Chores Scheduled Today!</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Take a breather, play outside, or get ahead on your weekly tasks below!
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {dailyChoresForKid.map(({ chore, choreIndex, done, isAssignedToMe, canonicalKey }) => {
                    const titleLines = String(chore.task || "Chore").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
                    const mainTitle = titleLines[0] || chore.task;
                    const subTitle = titleLines.slice(1).join(" ") || chore.notes;

                    return (
                      <div
                        key={`kid-chore-${canonicalKey || choreIndex}`}
                        onClick={() => handleToggleDailyChore(choreIndex, done, chore.task)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between gap-3 shadow-2xs ${
                          done
                            ? "bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 ring-1 ring-emerald-300/60 dark:ring-emerald-800/50"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xs active:scale-[0.99]"
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0 flex-1">
                          <div className="pt-0.5">
                            {done ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950 shrink-0" />
                            ) : (
                              <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 hover:text-indigo-400 shrink-0" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span
                                className={`font-bold text-sm leading-snug ${
                                  done ? "line-through text-slate-400 dark:text-slate-500 font-medium" : "text-slate-900 dark:text-white"
                                }`}
                              >
                                {mainTitle}
                              </span>
                              {chore.category && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                  {chore.category}
                                </span>
                              )}
                            </div>
                            {subTitle && (
                              <p className={`text-xs mt-1 leading-snug line-clamp-2 ${
                                done ? "line-through text-slate-400 dark:text-slate-600" : "text-slate-500 dark:text-slate-400"
                              }`}>
                                {subTitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1.5">
                          {isSpeechSupported() && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                speakSingleChore(chore.task, chore.notes, done);
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                              title="Listen to this chore"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          )}
                          <span
                            className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition ${
                              done
                                ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                                : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                            }`}
                          >
                            {done ? "Done ✓" : "Mark Done"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Weekly Minion Tasks (Personal Laundry & Bedroom Checklist) */}
            <div className="space-y-2.5 pt-2">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 px-1 flex items-center gap-1.5">
                <span>Weekly Minion Checklist</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">(Do Once a Week)</span>
              </h2>

              <div className="grid grid-cols-1 gap-2.5">
                {weeklyChores.map((wChore, wIdx) => {
                  const isLaundry = (wChore.task || "").toLowerCase().includes("laundry");
                  const isBedroom = (wChore.task || "").toLowerCase().includes("bedroom");
                  const wIndex = wChore.index_ !== undefined ? wChore.index_ : wIdx;
                  const statusMap = getWeeklyKidsStatus(wIndex, wChore.task);
                  const isDone = !!statusMap[currentKid.name];

                  return (
                    <div
                      key={`weekly-kid-${wIndex}`}
                      onClick={() => handleToggleWeekly(wIndex, wChore.task, isDone)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between gap-3 shadow-2xs ${
                        isDone
                          ? "bg-purple-50/80 dark:bg-purple-950/30 border-purple-300 dark:border-purple-800/80 ring-1 ring-purple-300/60 dark:ring-purple-800/50"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xs active:scale-[0.99]"
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isDone
                              ? "bg-purple-200 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200"
                              : "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300"
                          }`}
                        >
                          {isLaundry ? <Shirt className="w-5 h-5" /> : <BedDouble className="w-5 h-5" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                            {wChore.task}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                            {isLaundry
                              ? "Wash, dry, fold & put away your clothes"
                              : "Pick up floor, dust, vacuum & organize room"}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1.5">
                        {isSpeechSupported() && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakSingleChore(
                                wChore.task,
                                isLaundry
                                  ? "Wash, dry, fold and put away your clothes"
                                  : "Pick up floor, dust, vacuum and organize room",
                                isDone
                              );
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition cursor-pointer"
                            title="Listen to this task"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition ${
                            isDone
                              ? "bg-purple-700 text-white border-purple-700 shadow-2xs"
                              : "bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/40"
                          }`}
                        >
                          {isDone ? "Completed ✓" : "Check Off"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
      </>
    )}
  </main>


      {/* Parent Room Inspection & Weekly Sign-Off Modal */}
      {showInspectionModal && (
        <ParentInspectionModal
          isOpen={showInspectionModal}
          onClose={() => setShowInspectionModal(false)}
          activeSyncWeek={activeSyncWeek || "2026-10-12"}
          activeWeekDays={activeWeekDays}
          familyMembers={familyMembers}
          allKidsList={allKidsList}
          monthSchedule={monthSchedule}
          signOffStatus={signOffStatus}
          onToggleWeeklySignOff={onToggleWeeklySignOff || (() => {})}
          onToggleWeeklyKidChore={onToggleWeeklyKidChore}
          getWeeklyKidsStatus={getWeeklyKidsStatus}
          onToggleKidChore={onToggleKidChore}
          monthlyIncentive={monthlyIncentive}
          monthlyGoalTarget={monthlyGoalTarget}
          topPerformer={topPerformer}
        />
      )}

      {showInstallModal && (
        <InstallPwaModal onClose={() => setShowInstallModal(false)} />
      )}

      {/* Randomized Good Job / Almost 90% Goal / Parent Nudge & Praise GIF Modal */}
      {activeCelebration && (
        <GifCelebrationModal
          isOpen={!!activeCelebration}
          gifUrl={activeCelebration.gifUrl}
          kidName={currentKid.name}
          taskTitle={activeCelebration.taskTitle}
          variant={activeCelebration.variant}
          headline={activeCelebration.headline}
          message={activeCelebration.message}
          fromSender={activeCelebration.fromSender}
          onClose={handleCloseCelebration}
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
      {/* Kid Reward Accounts & Wishlist Modal */}
      {showKidRewardModal && (
        <KidRewardAccountsModal
          isOpen={showKidRewardModal}
          onClose={() => {
            setShowKidRewardModal(false);
            setRewardProfile(getKidRewardProfile(kidName));
          }}
          kidName={kidName}
          onProfileSaved={(p) => {
            setRewardProfile(p);
          }}
        />
      )}

      {/* Household Unified Settings Modal (Theme, Audio/Alerts, Rewards, Minion QR, Parent Access, Sync) */}
      {showSettingsModal && (
        <HouseholdSettingsModal
          isOpen={showSettingsModal}
          onClose={() => setShowSettingsModal(false)}
          viewMode="minion"
          currentKidName={currentKid.name}
          allKidsList={allKidsList}
          familyMembers={familyMembers}
          activeSyncWeek={activeSyncWeek}
          initialTab={settingsInitialTab}
          onUnlockParentMode={() => {
            setShowSettingsModal(false);
            onExitMinionMode();
          }}
          onOpenInspectionModal={() => {
            setShowSettingsModal(false);
            setShowInspectionModal(true);
          }}
          onUnpairDevice={(kName) => {
            setShowSettingsModal(false);
            unpairKid(kName || currentKid.name);
            onExitMinionMode();
          }}
          onSwitchToKid={(kName) => {
            setShowSettingsModal(false);
            onKidSwitched?.(kName);
          }}
        />
      )}
    </div>
  );
};

