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
  ShieldCheck
} from "lucide-react";
import { isStandalone, subscribeInstallable } from "./pwaManager";
import { InstallPwaModal } from "./InstallPwaModal";
import { ParentInspectionModal } from "./ParentInspectionModal";
import { GifCelebrationModal } from "./GifCelebrationModal";
import { getRandomGoodJobGif, preloadNextGoodJobGifs } from "./gifCelebrations";
import {
  playChoreCompletionSound,
  saveDeviceSession,
  getStoredDeviceSession,
  broadcastLocalUpdate,
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
      m => m.active !== false && m.role !== "Supreme Overlord" && m.role !== "Overseer Supreme"
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

  const [showExitPinModal, setShowExitPinModal] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [pinAction, setPinAction] = useState<"menu" | "inspection" | "exit">("menu");
  const [canInstallPwa, setCanInstallPwa] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState<"chores" | "leaderboard">("chores");

  // Chore completion Good Job GIF celebration popup state
  const [activeCelebrationGif, setActiveCelebrationGif] = useState<string | null>(null);
  const [celebrationTaskTitle, setCelebrationTaskTitle] = useState<string>("");

  useEffect(() => {
    preloadNextGoodJobGifs(3);
  }, []);

  const triggerGoodJobCelebration = (task: string) => {
    const gif = getRandomGoodJobGif();
    setActiveCelebrationGif(gif);
    setCelebrationTaskTitle(task);
    preloadNextGoodJobGifs(3);
  };

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
      triggerGoodJobCelebration(taskTitle || "Chore");
    }
  };

  const handleToggleWeekly = (choreIndex: number, taskTitle: string, currentDone: boolean) => {
    onToggleWeeklyKidChore(choreIndex, currentKid.name, taskTitle);
    if (!currentDone) {
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
      triggerGoodJobCelebration(taskTitle);
    }
  };

  const handleExitPinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "1234" || pinInput === "0000") {
      setShowExitPinModal(false);
      if (pinAction === "inspection") {
        setShowInspectionModal(true);
      } else {
        onExitMinionMode();
      }
    } else {
      setPinError("Incorrect Parent PIN (Default is 1234)");
    }
  };

  const completedTodayCount = dailyChoresForKid.filter(c => c.done).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 font-sans">
      {/* Top Mobile Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white text-base shadow-sm ring-2 ring-white"
              style={{ backgroundColor: currentKid.color || "#6366F1" }}
            >
              {currentKid.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-extrabold text-base text-slate-900 leading-tight">
                  {currentKid.name}
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  🎒 Minion Mode
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5 font-medium">
                <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>3 Day Streak</span>
                </span>
                <span>•</span>
                <span className="text-emerald-700 font-bold">
                  {kidMonthlyCompletions} finished this month
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {kidMembers.length > 1 && (
              <div className="relative">
                <select
                  value={currentKid.name}
                  onChange={e => {
                    const targetName = e.target.value;
                    const cur = getStoredDeviceSession();
                    const updatedSession: DeviceSession = {
                      ...cur,
                      role: "kid",
                      kidName: targetName
                    };
                    saveDeviceSession(updatedSession);
                    onKidSwitched?.(targetName);
                  }}
                  className="text-xs font-bold py-1.5 px-2 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-xl cursor-pointer hover:bg-indigo-100 focus:outline-none shadow-2xs"
                  title="Switch active minion dashboard"
                >
                  {kidMembers.map(m => (
                    <option key={m.id || m.name} value={m.name}>
                      Minion: {m.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {!isStandalone() && (
              <button
                type="button"
                onClick={() => setShowInstallModal(true)}
                className="py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition flex items-center gap-1.5 text-xs font-black cursor-pointer shadow-xs"
                title="Install app to your home screen"
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-100" />
                <span>Install</span>
              </button>
            )}

            {/* Sunday Inspection Quick Access for Parents */}
            <button
              type="button"
              onClick={() => {
                setPinInput("");
                setPinError("");
                setPinAction("inspection");
                setShowExitPinModal(true);
              }}
              className={`p-1.5 sm:px-2.5 rounded-xl transition flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-2xs border ${
                signOffStatus?.done
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
                  : "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100"
              }`}
              title="Parent Sunday Inspection (PIN: 1234)"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="hidden sm:inline">Sunday Inspection</span>
              <span
                className={`text-[10px] font-mono px-1 py-0.2 rounded font-black ${
                  signOffStatus?.done ? "bg-emerald-200 text-emerald-950" : "bg-amber-200 text-amber-950"
                }`}
              >
                {signOffStatus?.done ? "✓ TV/MV" : "Inspect"}
              </span>
            </button>

            {/* Parent Lock / Exit Button */}
            <button
              type="button"
              onClick={() => {
                setPinInput("");
                setPinError("");
                setPinAction("menu");
                setShowExitPinModal(true);
              }}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition flex items-center gap-1 text-xs font-semibold cursor-pointer shadow-2xs"
              title="Parent Admin Unlock (PIN: 1234)"
            >
              <Lock className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Parent Mode</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tab Bar */}
      <div className="max-w-xl mx-auto px-4 pt-3 pb-1">
        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 text-xs font-black shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveNavTab("chores")}
            className={`flex-1 py-2 px-3 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 ${
              activeNavTab === "chores"
                ? "bg-white text-indigo-700 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>My Daily Chores</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700">
              {completedTodayCount}/{dailyChoresForKid.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveNavTab("leaderboard")}
            className={`flex-1 py-2 px-3 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 ${
              activeNavTab === "leaderboard"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-200" />
            <span>Leaderboard &amp; Prize</span>
            {isMyKidLeading ? (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-600 text-white font-black shadow-2xs">
                #1
              </span>
            ) : (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 font-bold">
                #{myRank}
              </span>
            )}
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
                ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-300 shadow-sm"
                : "bg-white border-slate-200 shadow-2xs"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-base shrink-0 shadow-xs ${
                  isMyKidLeading
                    ? "bg-amber-500 text-white"
                    : myRank === 2
                    ? "bg-slate-300 text-slate-800"
                    : myRank === 3
                    ? "bg-amber-700 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {isMyKidLeading ? <Crown className="w-5 h-5" /> : `#${myRank}`}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                    <span>{isMyKidLeading ? "👑 You are currently in 1st Place!" : `You are ranked #${myRank}`}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {isMyKidLeading
                      ? `Amazing job, ${currentKid.name}! You're on track to win "${monthlyIncentive}"!`
                      : leaderKid
                      ? `You have ${kidMonthlyCompletions} chores done — only ${choresBehind} behind ${leaderKid.name} for 1st place!`
                      : `Keep completing your daily chores to climb the leaderboard!`}
                  </p>
                </div>
              </div>
            </div>

            {/* Minions Leaderboard Standings */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>Minions Leaderboard</span>
                  </h3>
                  <p className="text-[11px] text-slate-500">Live rankings for {MONTH_NAMES[selectedMonth]} {selectedYear}</p>
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
                  className="p-1.5 rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 transition cursor-pointer flex items-center gap-1 text-[11px] font-bold"
                  title="Announce leaderboard"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-600" />
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
                          ? "border-indigo-400 bg-indigo-50/60 ring-2 ring-indigo-200 shadow-xs"
                          : isLeader
                          ? "border-amber-300 bg-amber-50/40"
                          : "border-slate-200 bg-slate-50/60"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base font-black w-6 text-center">{rankBadge}</span>
                          <span
                            className="w-4 h-4 rounded-full shadow-2xs shrink-0"
                            style={{ backgroundColor: k.color }}
                          />
                          <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                            <span>{k.name}</span>
                            {isMe && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-indigo-600 text-white uppercase tracking-wider">
                                YOU
                              </span>
                            )}
                            {isLeader && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 border border-amber-300 flex items-center gap-0.5">
                                <Crown className="w-2.5 h-2.5" />
                                <span>#1 Leader</span>
                              </span>
                            )}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-sm text-slate-900">{k.done}</span>
                          <span className="text-xs text-slate-500"> chores</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
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
        ) : (
          /* CHORES VIEW (Default) */
          <>
            {/* Interactive Monthly Incentive Reward Card */}
            <div
              onClick={() => setActiveNavTab("leaderboard")}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl p-4 text-white shadow-sm space-y-2 cursor-pointer hover:shadow-md transition active:scale-[0.99]"
              title="Click to view Family Leaderboard & Rankings"
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-100">
                <span className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-200" />
                  <span>Monthly Goal &amp; Incentive Prize</span>
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1">
                  <span>{isMyKidLeading ? "👑 Rank #1" : `Rank #${myRank}`}</span>
                  <span>↗</span>
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Gift className="w-5 h-5 text-amber-200" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-100 font-medium">Qualifying Prize:</div>
                    <div className="text-sm font-extrabold text-white leading-snug">
                      {monthlyIncentive}
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-amber-100 font-semibold">Your Progress:</div>
                  <div className="text-xs font-black text-white">
                    {kidMonthlyCompletions} / {monthlyGoalTarget} chores
                  </div>
                </div>
              </div>
              {/* Mini Progress Bar */}
              <div className="w-full bg-black/20 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-amber-200 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(5, (kidMonthlyCompletions / monthlyGoalTarget) * 100))}%` }}
                />
              </div>
            </div>

        {/* Date Selector Navigation */}
        <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs flex items-center justify-between">
          <button
            onClick={() => {
              const prev = new Date(activeDate);
              prev.setDate(prev.getDate() - 1);
              setActiveDate(prev);
            }}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600"
            title="Previous Day"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              {formattedDayName}
            </div>
            <div className="text-sm font-extrabold text-slate-900 mt-0.5">
              {formattedDateStr}
            </div>
          </div>

          <button
            onClick={() => {
              const next = new Date(activeDate);
              next.setDate(next.getDate() + 1);
              setActiveDate(next);
            }}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600"
            title="Next Day"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Today's Daily Chores Section */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span>Today's Daily Routines</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
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
                      : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200"
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
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Read Aloud</span>
                    </>
                  )}
                </button>
              )}
              {completedTodayCount === dailyChoresForKid.length && dailyChoresForKid.length > 0 && (
                <span className="text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
                  <span>🌟 All Done Today!</span>
                </span>
              )}
            </div>
          </div>

          {dailyChoresForKid.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2 shadow-2xs">
              <Sparkles className="w-8 h-8 text-indigo-400 mx-auto" />
              <div className="font-extrabold text-slate-800 text-sm">No Chores Scheduled Today!</div>
              <p className="text-xs text-slate-500">
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
                        ? "bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-300/60"
                        : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xs active:scale-[0.99]"
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="pt-0.5">
                        {done ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-300 hover:text-indigo-400 shrink-0" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span
                            className={`font-bold text-sm leading-snug ${
                              done ? "line-through text-slate-500 font-medium" : "text-slate-900"
                            }`}
                          >
                            {mainTitle}
                          </span>
                          {chore.category && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                              {chore.category}
                            </span>
                          )}
                        </div>
                        {subTitle && (
                          <p className="text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
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
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition cursor-pointer"
                          title="Listen to this chore"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      )}
                      <span
                        className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition ${
                          done
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100"
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
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 px-1 flex items-center gap-1.5">
            <span>Weekly Minion Checklist</span>
            <span className="text-[10px] text-slate-400 font-normal">(Do Once a Week)</span>
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
                      ? "bg-purple-50/80 border-purple-300 ring-1 ring-purple-300/60"
                      : "bg-white border-slate-200 hover:border-purple-300 hover:shadow-xs active:scale-[0.99]"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isDone ? "bg-purple-200 text-purple-800" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {isLaundry ? <Shirt className="w-5 h-5" /> : <BedDouble className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 leading-snug">
                        {wChore.task}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
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
                        className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 hover:bg-purple-50 transition cursor-pointer"
                        title="Listen to this task"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition ${
                        isDone
                          ? "bg-purple-700 text-white border-purple-700 shadow-2xs"
                          : "bg-white text-purple-700 border-purple-200 hover:bg-purple-50"
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

      {/* Parent PIN Unlock Modal for Inspections & Admin Access */}
      {showExitPinModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xs w-full p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="text-center space-y-1">
              <div
                className={`w-11 h-11 rounded-2xl mx-auto flex items-center justify-center ${
                  pinAction === "inspection"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {pinAction === "inspection" ? (
                  <ShieldCheck className="w-6 h-6" />
                ) : (
                  <Lock className="w-5 h-5" />
                )}
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                {pinAction === "inspection"
                  ? "Sunday Inspection"
                  : "Parent Admin Unlock"}
              </h3>
              <p className="text-xs text-slate-500">
                {pinAction === "inspection"
                  ? "Enter Parent PIN to inspect rooms and sign off weekly allowances:"
                  : "Enter Parent PIN to access inspection or return to Admin Hub:"}
              </p>
            </div>

            <form onSubmit={handleExitPinSubmit} className="space-y-3">
              <input
                type="password"
                maxLength={4}
                autoFocus
                placeholder="PIN (Default 1234)"
                value={pinInput}
                onChange={e => {
                  setPinInput(e.target.value);
                  setPinError("");
                }}
                className="w-full text-center text-xl tracking-widest font-mono font-bold py-2 px-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {pinError && (
                <div className="text-xs text-rose-600 font-semibold text-center">
                  {pinError}
                </div>
              )}

              {pinAction === "inspection" ? (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowExitPinModal(false)}
                    className="py-2.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition cursor-pointer shadow-xs"
                  >
                    Inspect Rooms
                  </button>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (pinInput === "1234" || pinInput === "0000") {
                          setShowExitPinModal(false);
                          setShowInspectionModal(true);
                        } else {
                          setPinError("Enter Parent PIN (1234) first");
                        }
                      }}
                      className="py-2.5 px-2 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xl transition cursor-pointer flex items-center justify-center gap-1 border border-amber-300"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                      <span>Inspect</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (pinInput === "1234" || pinInput === "0000") {
                          setShowExitPinModal(false);
                          onExitMinionMode();
                        } else {
                          setPinError("Enter Parent PIN (1234) first");
                        }
                      }}
                      className="py-2.5 px-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition cursor-pointer shadow-xs"
                    >
                      Admin Hub
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowExitPinModal(false)}
                    className="w-full py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => {
                    if (pinInput === "1234" || pinInput === "0000") {
                      unpairKid(currentKid.name);
                      setShowExitPinModal(false);
                      onExitMinionMode();
                    } else {
                      setPinError("Enter Parent PIN (1234) first to unpair");
                    }
                  }}
                  className="w-full py-1 text-[11px] font-bold text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                >
                  Unpair This Device ({currentKid.name})
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

      {/* Randomized Good Job Chore Completion GIF Celebration Modal */}
      {activeCelebrationGif && (
        <GifCelebrationModal
          isOpen={!!activeCelebrationGif}
          gifUrl={activeCelebrationGif}
          kidName={currentKid.name}
          taskTitle={celebrationTaskTitle}
          onClose={() => setActiveCelebrationGif(null)}
        />
      )}
    </div>
  );
};

