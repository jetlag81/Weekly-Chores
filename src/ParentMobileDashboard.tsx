// Dedicated Mobile Parent Command Hub
// Streamlines the parent experience on smartphones and tablets with a modern, touch-friendly interface
// for Sunday inspections, chore verification, real-time nudges/praise, and allowance tracking.

import React, { useState, useMemo } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Circle,
  Calendar,
  Wallet,
  Bell,
  Sparkles,
  Trophy,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Users,
  Smartphone,
  LayoutGrid,
  Check,
  AlertCircle,
  Pizza,
  ArrowRight,
  UserCheck,
  Gift,
  Settings
} from "lucide-react";
import { getChoreCanonicalKey, normalizeTaskName } from "./choreUtils";
import { getKidRewardProfile } from "./rewardAccounts";
import { ThemeToggle } from "./ThemeToggle";
import { HouseholdSettingsModal, type SettingsTab } from "./HouseholdSettingsModal";

interface FamilyMember {
  name: string;
  role?: string;
  age?: number;
  type?: string;
  color?: string;
  active?: boolean;
}

interface ParentMobileDashboardProps {
  familyMembers: FamilyMember[];
  allKidsList: string[];
  activeSyncWeek: string;
  activeWeekDays: Array<{
    year: number;
    month: number;
    day: number;
    dateKey: string;
    dayOfWeekIndex: number;
  }>;
  monthSchedule: Record<string, Record<string | number, { who?: string; done?: boolean; kidsDone?: Record<string, boolean> }>>;
  hubMasterChores: Array<any>;
  signOffStatus: { done: boolean; who?: string };
  onToggleWeeklySignOff: () => void;
  onToggleKidChore: (dateKey: string, choreIndex: number, kidName: string, taskTitle: string, dayIdx: number) => void;
  onToggleWeeklyKidChore: (choreIndex: number, kidName: string, taskTitle: string) => void;
  getChoreStatus: (dateKey: string, choreIndex: number, taskTitle?: string) => any;
  getWeeklyKidsStatus: (choreIndex: number, taskTitle?: string) => Record<string, boolean>;
  monthlyIncentive?: string;
  monthlyGoalTarget?: number;
  topPerformer?: { name: string; done: number; total: number; pct: number } | null;
  onOpenInspection: () => void;
  onOpenLedger: () => void;
  onOpenNudgeModal: (kidName?: string, type?: "praise" | "nudge") => void;
  onOpenRewardModal?: (kidName?: string) => void;
  onOpenActivityFeed: () => void;
  onSwitchToMinionMode: (kidName?: string) => void;
  onToggleDesktopView: () => void;
  activitiesCount?: number;
}

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const FULL_DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const ParentMobileDashboard: React.FC<ParentMobileDashboardProps> = ({
  familyMembers = [],
  allKidsList = ["Sydney", "Cadence", "Mason"],
  activeSyncWeek,
  activeWeekDays = [],
  monthSchedule = {},
  hubMasterChores = [],
  signOffStatus,
  onToggleWeeklySignOff,
  onToggleKidChore,
  onToggleWeeklyKidChore,
  getChoreStatus,
  getWeeklyKidsStatus,
  monthlyIncentive = "$15 Allowance Bonus & Pizza Night Pick",
  monthlyGoalTarget = 25,
  topPerformer,
  onOpenInspection,
  onOpenLedger,
  onOpenNudgeModal,
  onOpenRewardModal,
  onOpenActivityFeed,
  onSwitchToMinionMode,
  onToggleDesktopView,
  activitiesCount = 0
}) => {
  // Determine today's dateKey to default selection
  const today = useMemo(() => new Date(), []);
  const todayDateKey = useMemo(() => {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    return `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
  }, [today]);

  // Selected day within the active week (defaults to today if present, or first day)
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(() => {
    const foundIdx = activeWeekDays.findIndex(d => d.dateKey === todayDateKey);
    return foundIdx >= 0 ? foundIdx : 0;
  });

  const activeDay = activeWeekDays[selectedDayIdx] || activeWeekDays[0];

  // Accordion state for expanded kid chore lists (defaults to all expanded for quick parent glance)
  const [expandedKids, setExpandedKids] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    allKidsList.forEach(k => { init[k] = true; });
    return init;
  });

  const [expandedWeeklyChecklist, setExpandedWeeklyChecklist] = useState<boolean>(true);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [settingsInitialTab, setSettingsInitialTab] = useState<SettingsTab>("appearance");

  const toggleKidExpanded = (kidName: string) => {
    setExpandedKids(prev => ({ ...prev, [kidName]: !prev[kidName] }));
  };

  // Human-readable week range label (e.g. "Oct 12 – Oct 18, 2026")
  const weekLabel = useMemo(() => {
    if (!activeWeekDays || activeWeekDays.length === 0) return activeSyncWeek;
    const first = activeWeekDays[0];
    const last = activeWeekDays[activeWeekDays.length - 1];
    return `${MONTH_NAMES[first.month]} ${first.day} – ${MONTH_NAMES[last.month]} ${last.day}, ${last.year}`;
  }, [activeWeekDays, activeSyncWeek]);

  // Daily chores for the selected day, grouped by family member
  const choresByKidForSelectedDay = useMemo(() => {
    if (!activeDay) return {};
    const dayData = monthSchedule[activeDay.dateKey] || {};
    const result: Record<string, Array<{ chore: any; choreIndex: number; done: boolean; taskTitle: string }>> = {};

    allKidsList.forEach(k => { result[k] = []; });

    hubMasterChores.forEach((chore, idx) => {
      const f = String(chore.frequency || "").toLowerCase();
      const isDaily = f.includes("daily") || (!f.includes("bi") && !f.includes("once") && !f.includes("week"));
      if (!isDaily) return;

      const cKey = getChoreCanonicalKey(chore.task);
      const choreIndex = chore.index_ !== undefined ? chore.index_ : idx;
      const statusFromProp = getChoreStatus ? getChoreStatus(activeDay.dateKey, choreIndex, chore.task) : null;
      const choreStatus = (statusFromProp && (statusFromProp.hasExplicitRecord || statusFromProp.who || statusFromProp.done || statusFromProp.kidsDone))
        ? statusFromProp
        : (cKey ? dayData[cKey] : null) || dayData[choreIndex] || {};

      const who = String(choreStatus.who || "").trim();
      const whoLower = who.toLowerCase();
      const hasKidsDone = choreStatus.kidsDone && Object.keys(choreStatus.kidsDone).length > 0;
      const isGroupChore = hasKidsDone || whoLower === "all kids" || whoLower === "each child" || whoLower === "all non-casual";

      allKidsList.forEach(kid => {
        const kidLower = kid.toLowerCase();
        let assigned = false;
        let isDone = false;

        if (isGroupChore) {
          assigned = true;
          isDone = !!(choreStatus.kidsDone && choreStatus.kidsDone[kid]);
        } else if (whoLower.includes(kidLower)) {
          assigned = true;
          isDone = !!choreStatus.done;
        } else if (!whoLower && chore.assignedTo && String(chore.assignedTo).toLowerCase().includes(kidLower)) {
          assigned = true;
          isDone = !!choreStatus.done;
        }

        if (assigned) {
          result[kid].push({
            chore,
            choreIndex,
            done: isDone,
            taskTitle: chore.task
          });
        }
      });
    });

    return result;
  }, [activeDay, monthSchedule, hubMasterChores, allKidsList, getChoreStatus]);

  // Weekly checklist items (e.g. Tidy Bedrooms, Personal Laundry)
  const weeklyChecklistItems = useMemo(() => {
    const items = [
      { choreIndex: 10, title: "Tidy Bedrooms & Morning Routine", category: "Bedrooms" },
      { choreIndex: 11, title: "Personal Laundry & Fold/Put Away", category: "Laundry" },
      { choreIndex: 12, title: "Feeding Station & Pet Care", category: "Pets" }
    ];
    return items.map(item => {
      const kidsStatus = getWeeklyKidsStatus ? getWeeklyKidsStatus(item.choreIndex, item.title) : {};
      return {
        ...item,
        kidsStatus
      };
    });
  }, [getWeeklyKidsStatus]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans pb-24 transition-colors">
      {/* Sticky Mobile Parent App Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-3.5 sm:px-4 py-3 shadow-xs dark:shadow-lg transition-colors">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Brand & Parent Persona */}
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-md shadow-orange-500/20 text-white shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-tight leading-tight truncate">
                Thom & Meghan
              </h1>
              <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">
                Parent Command Hub
              </div>
            </div>
          </div>

          {/* Top Actions: View Switcher Pill, Activity Feed & Settings Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* View Mode Toggle Pill: Mobile vs Desktop Table */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner">
              <button
                type="button"
                className="px-2 py-1 rounded-lg text-[11px] font-bold bg-amber-500 text-slate-950 shadow-xs flex items-center gap-1"
                title="Current: Mobile Streamlined View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Mobile</span>
              </button>
              <button
                type="button"
                onClick={onToggleDesktopView}
                className="px-2 py-1 rounded-lg text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1 cursor-pointer"
                title="Switch to Full Spreadsheet View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Table</span>
              </button>
            </div>

            {/* Live Household Activity Feed Button */}
            <button
              type="button"
              onClick={onOpenActivityFeed}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition cursor-pointer relative"
              title="Open Household Activity Feed"
            >
              <Bell className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              {activitiesCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 bg-indigo-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 font-mono shadow-xs">
                  {activitiesCount > 99 ? "99+" : activitiesCount}
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
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition cursor-pointer"
              title="Household Settings & Preferences"
            >
              <Settings className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Streamlined Mobile Content */}
      <main className="p-4 space-y-4 max-w-lg mx-auto w-full">
        {/* Streamlined Sunday Inspection Action Bar */}
        <div
          onClick={onOpenInspection}
          className={`p-3 rounded-2xl border transition cursor-pointer relative overflow-hidden shadow-md flex items-center justify-between gap-3 group ${
            signOffStatus.done
              ? "bg-slate-800/90 border-emerald-500/30 hover:border-emerald-500/50"
              : "bg-slate-800/90 border-amber-500/30 hover:border-amber-500/50"
          }`}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Status Icon */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm shrink-0 transition group-hover:scale-105 ${
                signOffStatus.done
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-black shadow-orange-500/20"
              }`}
            >
              {signOffStatus.done ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              )}
            </div>

            {/* Title & Status */}
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-extrabold text-xs text-white tracking-tight">
                  Sunday Inspection
                </span>
                <span
                  className={`inline-flex items-center text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-lg border ${
                    signOffStatus.done
                      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                      : "bg-amber-500/15 text-amber-300 border-amber-500/30"
                  }`}
                >
                  {signOffStatus.done ? "Verified ✓" : "Pending Sign-Off"}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                {weekLabel}
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div
            className={`py-1.5 px-3 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0 transition shadow-xs ${
              signOffStatus.done
                ? "bg-slate-700/70 text-emerald-300 border border-emerald-500/30 group-hover:bg-slate-700"
                : "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-orange-500/20 group-hover:brightness-105"
            }`}
          >
            <span>{signOffStatus.done ? "Review" : "Sign Off"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Quick Command Tiles (Nudge, Ledger, Rewards, Minion Mode) */}
        <div className="grid grid-cols-4 gap-2">
          {/* Nudge & Feedback (Meh & Good Job GIFs) */}
          <button
            type="button"
            onClick={() => onOpenNudgeModal()}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl flex flex-col items-center text-center transition cursor-pointer shadow-md group"
          >
            <div className="w-8 h-8 rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/20 flex items-center justify-center mb-1 group-hover:scale-105 transition">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-black text-white leading-tight">Nudges</span>
            <span className="text-[9px] text-orange-300 font-semibold mt-0.5">Praise</span>
          </button>

          {/* Allowance Ledger */}
          <button
            type="button"
            onClick={onOpenLedger}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl flex flex-col items-center text-center transition cursor-pointer shadow-md group"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-1 group-hover:scale-105 transition">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-black text-white leading-tight">Ledger</span>
            <span className="text-[9px] text-emerald-300 font-semibold mt-0.5">Payouts</span>
          </button>

          {/* Digital Rewards & Gift Cards */}
          <button
            type="button"
            onClick={() => onOpenRewardModal?.()}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl flex flex-col items-center text-center transition cursor-pointer shadow-md group"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-1 group-hover:scale-105 transition">
              <Gift className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-black text-white leading-tight">Rewards</span>
            <span className="text-[9px] text-amber-300 font-semibold mt-0.5">Gift Cards</span>
          </button>

          {/* Switch to Kid Minion Mode */}
          <button
            type="button"
            onClick={() => onSwitchToMinionMode()}
            className="p-2.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-2xl flex flex-col items-center text-center transition cursor-pointer shadow-md group"
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-1 group-hover:scale-105 transition">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-black text-white leading-tight">Minions</span>
            <span className="text-[9px] text-indigo-300 font-semibold mt-0.5">Kids View</span>
          </button>
        </div>

        {/* Monthly Incentive Bar */}
        <div className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-3 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-white text-[11px] leading-tight">
                {monthlyIncentive}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Leader: <strong className="text-amber-300 font-bold">{topPerformer ? `${topPerformer.name} (${topPerformer.done}/${monthlyGoalTarget})` : "Tied"}</strong>
              </div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-lg shrink-0">
            Goal: {monthlyGoalTarget}
          </span>
        </div>

        {/* Horizontal Day Selector Bar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">
                Chores for {FULL_DAY_NAMES[activeDay?.dayOfWeekIndex || 0]} ({MONTH_NAMES[activeDay?.month || 0]} {activeDay?.day})
              </h3>
            </div>
            {activeDay?.dateKey === todayDateKey && (
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Today
              </span>
            )}
          </div>

          <div className="grid grid-cols-7 gap-1.5 bg-slate-800/60 p-1.5 rounded-2xl border border-slate-700/70">
            {activeWeekDays.map((day, idx) => {
              const isSelected = idx === selectedDayIdx;
              const isToday = day.dateKey === todayDateKey;
              return (
                <button
                  key={day.dateKey}
                  type="button"
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`py-2 rounded-xl flex flex-col items-center justify-center transition cursor-pointer relative ${
                    isSelected
                      ? "bg-amber-500 text-slate-950 shadow-md font-black"
                      : "hover:bg-slate-700/60 text-slate-300 font-bold"
                  }`}
                >
                  <span className="text-[10px] uppercase">{DAY_NAMES[day.dayOfWeekIndex]}</span>
                  <span className="text-xs mt-0.5">{day.day}</span>
                  {isToday && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-0.5 ${
                        isSelected ? "bg-slate-950" : "bg-emerald-400"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Chores Grouped by Kid */}
        <div className="space-y-3">
          {allKidsList.map(kidName => {
            const mem = familyMembers.find(m => m.name.toLowerCase() === kidName.toLowerCase());
            const kidChores = choresByKidForSelectedDay[kidName] || [];
            const doneCount = kidChores.filter(c => c.done).length;
            const totalCount = kidChores.length;
            const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
            const isExpanded = !!expandedKids[kidName];

            return (
              <div
                key={kidName}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-md"
              >
                {/* Kid Card Header */}
                <div className="p-3.5 flex items-center justify-between gap-3 border-b border-slate-700/50 bg-slate-800/50">
                  <div
                    onClick={() => toggleKidExpanded(kidName)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div
                      className="w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center shadow-inner shrink-0"
                      style={{
                        backgroundColor: mem?.color ? `${mem.color}25` : "#E0E7FF",
                        color: mem?.color || "#4F46E5",
                        border: `1.5px solid ${mem?.color || "#C7D2FE"}`
                      }}
                    >
                      {kidName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-white text-sm leading-tight">{kidName}</h4>
                        {mem?.age && (
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-700/60 px-1.5 py-0.2 rounded">
                            Age {mem.age}
                          </span>
                        )}
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                            mem?.type === "biweekly"
                              ? "bg-pink-500/20 text-pink-300 border border-pink-500/30"
                              : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                          }`}
                        >
                          {mem?.type === "biweekly" ? "Bi-Weekly" : "Full-Time"}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                        <span className="font-extrabold text-white">
                          {doneCount} / {totalCount} Done
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className={pct === 100 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                          {pct}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Praise ⭐, Nudge 🧹, and Digital Cards 🎁 Buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onOpenNudgeModal(kidName, "praise")}
                      className="px-2 py-1 rounded-xl text-[11px] font-bold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition flex items-center gap-1 cursor-pointer"
                      title="Send Praise (Good Job GIF)"
                    >
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span className="hidden xs:inline">Praise</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenNudgeModal(kidName, "nudge")}
                      className="px-2 py-1 rounded-xl text-[11px] font-bold bg-orange-500/15 hover:bg-orange-500/25 text-orange-300 border border-orange-500/30 transition flex items-center gap-1 cursor-pointer"
                      title="Send Nudge (Meh GIF)"
                    >
                      <Bell className="w-3 h-3 text-orange-400" />
                      <span className="hidden xs:inline">Nudge</span>
                    </button>
                    {onOpenRewardModal && (
                      <button
                        type="button"
                        onClick={() => onOpenRewardModal(kidName)}
                        className="px-2 py-1 rounded-xl text-[11px] font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition flex items-center gap-1 cursor-pointer"
                        title={`Digital Cards & Reward Accounts for ${kidName}`}
                      >
                        <Gift className="w-3 h-3 text-amber-400" />
                        <span className="hidden xs:inline">Cards</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onSwitchToMinionMode(kidName)}
                      className="px-2 py-1 rounded-xl text-[11px] font-bold bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 transition flex items-center gap-1 cursor-pointer"
                      title={`Open ${kidName}'s Dedicated Minion Page`}
                    >
                      <Users className="w-3 h-3 text-indigo-400" />
                      <span className="hidden xs:inline">Page ↗</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleKidExpanded(kidName)}
                      className="w-7 h-7 rounded-lg text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-900/60 h-1 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      pct === 100 ? "bg-emerald-500" : "bg-gradient-to-r from-amber-500 to-orange-500"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                {/* Top Wish Summary Strip (if kid has a wish) */}
                {(() => {
                  const kProfile = getKidRewardProfile(kidName);
                  if (!kProfile?.topWish) return null;
                  return (
                    <div
                      onClick={() => onOpenRewardModal?.(kidName)}
                      className="mx-3 my-2 py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-semibold flex items-center justify-between cursor-pointer hover:border-amber-400/40 transition"
                      title="Click to view linked accounts and send digital gift card"
                    >
                      <span className="truncate flex items-center gap-1.5">
                        <span className="text-xs">🎁</span>
                        <span className="font-extrabold text-white">Wish:</span> {kProfile.topWish}
                      </span>
                      <span className="text-amber-400 font-mono font-bold shrink-0 ml-1.5 flex items-center gap-0.5 text-[10px] bg-amber-500/20 px-1.5 py-0.5 rounded-md">
                        <span>Send Card</span>
                        <span>↗</span>
                      </span>
                    </div>
                  );
                })()}

                {/* Expandable Chore List */}
                {isExpanded && (
                  <div className="p-2 space-y-1.5">
                    {kidChores.length === 0 ? (
                      <div className="p-3 text-center text-xs text-slate-400 font-medium">
                        No assigned chores for {kidName} on this day.
                      </div>
                    ) : (
                      kidChores.map(item => (
                        <div
                          key={`${item.choreIndex}_${item.taskTitle}`}
                          onClick={() =>
                            onToggleKidChore(
                              activeDay.dateKey,
                              item.choreIndex,
                              kidName,
                              item.taskTitle,
                              selectedDayIdx
                            )
                          }
                          className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                            item.done
                              ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                              : "bg-slate-900/40 border-slate-700/60 hover:border-slate-600 text-slate-200"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition ${
                                item.done
                                  ? "bg-emerald-500 text-slate-950 font-black"
                                  : "border-2 border-slate-500 hover:border-amber-400"
                              }`}
                            >
                              {item.done && <Check className="w-4 h-4 stroke-[3]" />}
                            </div>
                            <span
                              className={`text-xs font-semibold truncate ${
                                item.done ? "line-through text-slate-400" : "text-white"
                              }`}
                            >
                              {item.taskTitle}
                            </span>
                          </div>

                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                              item.done
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "bg-slate-700/50 text-slate-400"
                            }`}
                          >
                            {item.done ? "Done ✓" : "Pending"}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Weekly Household Checklists (Tidy Bedrooms, Laundry, Pets) */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-md">
          <div
            onClick={() => setExpandedWeeklyChecklist(!expandedWeeklyChecklist)}
            className="p-3.5 flex items-center justify-between cursor-pointer bg-slate-800/50"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-black text-white text-xs leading-tight">
                  Weekly Checklist Routines
                </h4>
                <div className="text-[10px] text-slate-400">
                  Bedrooms, Personal Laundry & Pet Station
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded-lg">
                Weekly
              </span>
              {expandedWeeklyChecklist ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </div>
          </div>

          {expandedWeeklyChecklist && (
            <div className="p-3 border-t border-slate-700/50 space-y-3">
              {weeklyChecklistItems.map(item => (
                <div key={item.choreIndex} className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/60">
                  <div className="text-xs font-bold text-slate-200 mb-2">
                    {item.title}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {allKidsList.map(kidName => {
                      const isDone = !!item.kidsStatus[kidName];
                      return (
                        <button
                          key={kidName}
                          type="button"
                          onClick={() => onToggleWeeklyKidChore(item.choreIndex, kidName, item.title)}
                          className={`p-2 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                            isDone
                              ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                              : "bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-500"
                          }`}
                        >
                          <span className="text-xs font-bold">{kidName}</span>
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${
                              isDone ? "bg-emerald-500 text-slate-950 font-black" : "border border-slate-600"
                            }`}
                          >
                            {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Floating Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 shadow-2xl">
        <div className="max-w-lg mx-auto flex items-center justify-around">
          {/* Sunday Inspection */}
          <button
            type="button"
            onClick={onOpenInspection}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-amber-400 transition cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] font-bold">Inspect</span>
          </button>

          {/* Send Nudge / Praise */}
          <button
            type="button"
            onClick={() => onOpenNudgeModal()}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-orange-400 transition cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-bold">Nudge</span>
          </button>

          {/* Allowance Ledger */}
          <button
            type="button"
            onClick={onOpenLedger}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-400 transition cursor-pointer"
          >
            <Wallet className="w-5 h-5" />
            <span className="text-[10px] font-bold">Ledger</span>
          </button>

          {/* Live Activity Feed */}
          <button
            type="button"
            onClick={onOpenActivityFeed}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-400 transition cursor-pointer relative"
          >
            <Bell className="w-5 h-5" />
            {activitiesCount > 0 && (
              <span className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-indigo-500" />
            )}
            <span className="text-[10px] font-bold">Activity</span>
          </button>

          {/* Toggle Full Desktop Spreadsheet */}
          <button
            type="button"
            onClick={onToggleDesktopView}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <LayoutGrid className="w-5 h-5" />
            <span className="text-[10px] font-bold">Table</span>
          </button>
        </div>
      </nav>

      {/* Household Unified Settings Modal */}
      {showSettingsModal && (
        <HouseholdSettingsModal
          isOpen={showSettingsModal}
          onClose={() => setShowSettingsModal(false)}
          viewMode="parent"
          allKidsList={allKidsList}
          familyMembers={familyMembers}
          activeSyncWeek={activeSyncWeek}
          initialTab={settingsInitialTab}
          onSwitchToKid={(kName) => {
            setShowSettingsModal(false);
            onSwitchToMinionMode(kName);
          }}
          onOpenRewardPayoutModal={(kName) => {
            setShowSettingsModal(false);
            onOpenRewardModal?.(kName);
          }}
        />
      )}
    </div>
  );
};

