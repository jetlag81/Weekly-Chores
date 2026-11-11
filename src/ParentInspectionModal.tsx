// Mobile & Desktop Parent Room Inspection & Weekly Sign-Off Modal
// Allows Parents (Thom & Meghan) to walk the house on Sunday, inspect bedrooms, laundry,
// and routines, calculate allowances, and stamp the official sign-off (✓ TV / MV) across all devices.

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  CheckCircle2,
  Circle,
  X,
  Sparkles,
  BedDouble,
  Shirt,
  DollarSign,
  Trophy,
  Volume2,
  AlertCircle,
  UserCheck,
  Award,
  Calendar,
  ThumbsUp,
  Check,
  RotateCcw
} from "lucide-react";
import { playChoreCompletionSound } from "./firebaseSync";
import { speakInspectionApproval, isSpeaking, stopSpeaking } from "./voiceSpeech";
import { getChoreCanonicalKey } from "./choreUtils";

interface ParentInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSyncWeek: string;
  activeWeekDays: Array<{
    year: number;
    month: number;
    day: number;
    dateKey: string;
    dayOfWeekIndex: number;
  }>;
  familyMembers: Array<{
    name: string;
    role?: string;
    age?: number;
    type?: string;
    color?: string;
  }>;
  allKidsList?: string[];
  monthSchedule: Record<string, Record<string | number, { who?: string; done?: boolean; kidsDone?: Record<string, boolean> }>>;
  signOffStatus: { done: boolean; who?: string };
  onToggleWeeklySignOff: () => void;
  onToggleWeeklyKidChore?: (choreIndex: number, kidName: string, taskTitle: string) => void;
  getWeeklyKidsStatus?: (choreIndex: number, taskTitle: string) => Record<string, boolean>;
  onToggleKidChore?: (dateKey: string, choreIndex: number, kidName: string, taskTitle: string, dayIdx: number) => void;
  monthlyIncentive?: string;
  monthlyGoalTarget?: number;
  topPerformer?: { name: string; done: number; total: number; pct: number } | null;
}

const DEFAULT_BASE_ALLOWANCES: Record<string, number> = {
  Sydney: 15,
  Cadence: 12,
  Mason: 10,
  Koda: 5,
  Keyanna: 5
};

export const ParentInspectionModal: React.FC<ParentInspectionModalProps> = ({
  isOpen,
  onClose,
  activeSyncWeek,
  activeWeekDays = [],
  familyMembers = [],
  allKidsList = ["Sydney", "Cadence", "Mason"],
  monthSchedule = {},
  signOffStatus,
  onToggleWeeklySignOff,
  onToggleWeeklyKidChore,
  getWeeklyKidsStatus,
  onToggleKidChore,
  monthlyIncentive = "$15 Allowance Bonus & Pizza Night Pick",
  monthlyGoalTarget = 25,
  topPerformer
}) => {
  // Local state for parent inspection room approval per child
  const [inspectedRooms, setInspectedRooms] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`parent_inspection_rooms_${activeSyncWeek}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Local state for custom allowance adjustments (bonuses or deductions)
  const [allowanceAdjustments, setAllowanceAdjustments] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(`parent_inspection_allowance_${activeSyncWeek}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [parentNotes, setParentNotes] = useState<string>(() => {
    try {
      return localStorage.getItem(`parent_inspection_notes_${activeSyncWeek}`) || "";
    } catch {
      return "";
    }
  });

  // Save room inspections when changed
  const handleToggleRoomInspection = (kidName: string) => {
    setInspectedRooms(prev => {
      const next = { ...prev, [kidName]: !prev[kidName] };
      try {
        localStorage.setItem(`parent_inspection_rooms_${activeSyncWeek}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleAdjustAllowance = (kidName: string, delta: number) => {
    setAllowanceAdjustments(prev => {
      const cur = prev[kidName] || 0;
      const next = { ...prev, [kidName]: Math.max(-15, Math.min(25, cur + delta)) };
      try {
        localStorage.setItem(`parent_inspection_allowance_${activeSyncWeek}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleSaveNotes = (val: string) => {
    setParentNotes(val);
    try {
      localStorage.setItem(`parent_inspection_notes_${activeSyncWeek}`, val);
    } catch {}
  };

  // Calculate week range label (e.g. "Oct 12 – Oct 18, 2026")
  const weekLabel = useMemo(() => {
    if (!activeWeekDays || activeWeekDays.length === 0) return activeSyncWeek;
    const first = activeWeekDays[0];
    const last = activeWeekDays[activeWeekDays.length - 1];
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${MONTHS[first.month]} ${first.day} – ${MONTHS[last.month]} ${last.day}, ${last.year}`;
  }, [activeWeekDays, activeSyncWeek]);

  // Sunday dateKey for bedroom / laundry inspections
  const sundayDay = useMemo(() => {
    return activeWeekDays.find(d => d.dayOfWeekIndex === 6) || activeWeekDays[activeWeekDays.length - 1];
  }, [activeWeekDays]);

  // Compute chore completion stats for each kid across the active week
  const kidStats = useMemo(() => {
    const stats: Record<string, { scheduled: number; completed: number; pct: number; bedroomDone: boolean; laundryDone: boolean }> = {};

    allKidsList.forEach(kid => {
      let scheduled = 0;
      let completed = 0;
      let bedroomDone = false;
      let laundryDone = false;

      activeWeekDays.forEach(day => {
        const dayData = monthSchedule[day.dateKey] || {};

        // Loop through chore entries
        Object.keys(dayData).forEach(key => {
          const entry = dayData[key];
          if (!entry) return;

          const isGroupChore = entry.kidsDone !== undefined;
          const assignedWho = String(entry.who || "").toLowerCase();
          const kidLower = kid.toLowerCase();

          if (isGroupChore) {
            // Group chore (e.g. Tidy Bedrooms, Laundry, Feeding Station)
            const cKey = getChoreCanonicalKey(key);
            if (cKey === "tidy_bedrooms" || key === "10" || key === "12") {
              if (day.dateKey === sundayDay?.dateKey && entry.kidsDone?.[kid]) {
                bedroomDone = true;
              }
            }
            if (cKey === "laundry" || key === "11") {
              if (day.dateKey === sundayDay?.dateKey && entry.kidsDone?.[kid]) {
                laundryDone = true;
              }
            }

            scheduled += 1;
            if (entry.kidsDone?.[kid]) {
              completed += 1;
            }
          } else if (assignedWho.includes(kidLower)) {
            // Personally assigned chore
            scheduled += 1;
            if (entry.done) {
              completed += 1;
            }
          }
        });
      });

      // Also check weekly checklist fallback if getWeeklyKidsStatus is available
      if (getWeeklyKidsStatus) {
        const bedWeekly = getWeeklyKidsStatus(10, "Tidy Bedrooms & Morning Routine");
        if (bedWeekly[kid]) bedroomDone = true;
        const lndWeekly = getWeeklyKidsStatus(11, "Personal Laundry & Fold/Put Away");
        if (lndWeekly[kid]) laundryDone = true;
      }

      // Default baseline if no chores scheduled yet
      const finalScheduled = Math.max(scheduled, 7);
      const pct = Math.round((completed / finalScheduled) * 100);

      stats[kid] = {
        scheduled: finalScheduled,
        completed,
        pct,
        bedroomDone,
        laundryDone
      };
    });

    return stats;
  }, [allKidsList, activeWeekDays, monthSchedule, sundayDay, getWeeklyKidsStatus]);

  // Handle master sign-off action with confetti & speech
  const handlePerformSignOff = () => {
    const nextDone = !signOffStatus.done;
    onToggleWeeklySignOff();

    if (nextDone) {
      playChoreCompletionSound();
      confetti({
        particleCount: 85,
        spread: 80,
        origin: { y: 0.6 }
      });
      speakInspectionApproval(weekLabel, allKidsList);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-4 sm:p-5 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                  Sunday Inspection
                </span>
                <span className="text-xs text-amber-100 font-medium hidden sm:inline">
                  Parents Thom & Meghan (TV / MV)
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black mt-0.5 leading-tight">
                Weekly Inspection & Sign-Off
              </h2>
              <p className="text-xs text-amber-100/90 flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                {weekLabel}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Callout Banner */}
        <div
          className={`p-3.5 sm:px-5 flex items-center justify-between gap-3 text-xs border-b ${
            signOffStatus.done
              ? "bg-emerald-50/90 border-emerald-200 text-emerald-900"
              : "bg-amber-50/90 border-amber-200 text-amber-900"
          }`}
        >
          <div className="flex items-center gap-2.5">
            {signOffStatus.done ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            )}
            <div>
              <div className="font-extrabold flex items-center gap-1.5">
                <span>{signOffStatus.done ? "Official Sign-Off Approved" : "Inspection Pending"}</span>
                <span
                  className={`px-1.5 py-0.2 rounded font-mono text-[11px] ${
                    signOffStatus.done
                      ? "bg-emerald-200 text-emerald-950 font-black"
                      : "bg-amber-200 text-amber-950"
                  }`}
                >
                  {signOffStatus.done ? "✓ TV / MV" : "Initials Needed"}
                </span>
              </div>
              <p className="text-[11px] opacity-80">
                {signOffStatus.done
                  ? "Parents Thom & Meghan verified all rooms and approved weekly allowances."
                  : "Walk bedrooms & laundry, verify checklists, then sign off below."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePerformSignOff}
            className={`px-3 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5 ${
              signOffStatus.done
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-amber-600 hover:bg-amber-700 text-white"
            }`}
          >
            {signOffStatus.done ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Signed ✓</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Sign Off Now</span>
              </>
            )}
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-800 flex-1">
          {/* Kids Inspection List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Child Room Inspections & Allowances
              </h3>
              <span className="text-[11px] text-slate-400">Sunday Payout Calculation</span>
            </div>

            {allKidsList.map(kidName => {
              const mem = familyMembers.find(m => m.name.toLowerCase() === kidName.toLowerCase());
              const stats = kidStats[kidName] || {
                scheduled: 7,
                completed: 0,
                pct: 0,
                bedroomDone: false,
                laundryDone: false
              };
              const isRoomApproved = !!inspectedRooms[kidName];
              const baseAllowance = DEFAULT_BASE_ALLOWANCES[kidName] || 10;
              const bonusDelta = allowanceAdjustments[kidName] || 0;

              // Calculate suggested allowance
              const earnedMultiplier = stats.pct >= 80 ? 1 : Math.max(0.2, stats.pct / 100);
              const calculatedPayout = Math.max(0, Math.round(baseAllowance * earnedMultiplier) + bonusDelta);

              return (
                <div
                  key={kidName}
                  className={`rounded-2xl border p-4 transition shadow-xs ${
                    isRoomApproved
                      ? "bg-slate-50/70 border-emerald-300"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl font-bold flex items-center justify-center text-sm shadow-xs"
                        style={{
                          backgroundColor: mem?.color ? `${mem.color}20` : "#E0E7FF",
                          color: mem?.color || "#4F46E5",
                          border: `1.5px solid ${mem?.color || "#C7D2FE"}`
                        }}
                      >
                        {kidName.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-sm text-slate-900">{kidName}</h4>
                          {mem?.age && (
                            <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded">
                              Age {mem.age}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                              mem?.type === "biweekly"
                                ? "bg-pink-100 text-pink-700"
                                : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            {mem?.type === "biweekly" ? "Bi-Weekly" : "Full-Time"}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Weekly Chores:{" "}
                          <strong className="text-slate-800">
                            {stats.completed} / {stats.scheduled}
                          </strong>{" "}
                          ({stats.pct}%)
                        </div>
                      </div>
                    </div>

                    {/* Room Inspection Pass / Fail Checkbox */}
                    <button
                      type="button"
                      onClick={() => handleToggleRoomInspection(kidName)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer self-start sm:self-auto ${
                        isRoomApproved
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {isRoomApproved ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Room Inspected ✓</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4 text-slate-400" />
                          <span>Inspect Room</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Quick Inspection Checklist + Allowance Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs">
                    {/* Checklist Status */}
                    <div className="space-y-1.5 bg-white p-2.5 rounded-xl border border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Checklist Verifications
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <BedDouble className="w-3.5 h-3.5 text-indigo-500" />
                          <span>Bed Made & Room Tidy</span>
                        </span>
                        <span
                          className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                            stats.bedroomDone
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {stats.bedroomDone ? "Verified ✓" : "Needs Tidy"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <Shirt className="w-3.5 h-3.5 text-sky-500" />
                          <span>Laundry Folded & Away</span>
                        </span>
                        <span
                          className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                            stats.laundryDone
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {stats.laundryDone ? "Clean & Away ✓" : "Check Hamper"}
                        </span>
                      </div>
                    </div>

                    {/* Allowance Calculator */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 p-2.5 rounded-xl border border-emerald-200 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                        <span>Weekly Allowance Payout</span>
                        <span>Base: ${baseAllowance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-black text-emerald-700 flex items-center">
                          <DollarSign className="w-5 h-5 text-emerald-600 -mr-0.5" />
                          {calculatedPayout}.00
                        </div>

                        {/* Quick +/- Allowance adjustment */}
                        <div className="flex items-center gap-1 text-[11px]">
                          <button
                            type="button"
                            onClick={() => handleAdjustAllowance(kidName, -1)}
                            className="w-6 h-6 rounded bg-white hover:bg-slate-100 border border-emerald-300 text-emerald-800 font-bold flex items-center justify-center cursor-pointer shadow-2xs"
                            title="Deduct $1"
                          >
                            -
                          </button>
                          <span className="text-[10px] font-bold text-emerald-900 min-w-[28px] text-center">
                            {bonusDelta >= 0 ? `+$${bonusDelta}` : `-$${Math.abs(bonusDelta)}`}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleAdjustAllowance(kidName, 1)}
                            className="w-6 h-6 rounded bg-white hover:bg-slate-100 border border-emerald-300 text-emerald-800 font-bold flex items-center justify-center cursor-pointer shadow-2xs"
                            title="Add $1 bonus"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-[10px] text-emerald-700/90 flex items-center justify-between">
                        <span>{stats.pct >= 80 ? "100% Payout Earned 🎉" : `${stats.pct}% Chores Completed`}</span>
                        {bonusDelta !== 0 && <span className="font-semibold text-emerald-900">Custom adjusted</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Household Collective Checklists */}
          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-2 text-xs">
            <h4 className="font-extrabold text-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Collective Household Sunday Checklist</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pet Care: Litter scoop & Herd feeding station clean</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Kitchen: Dishwasher emptied & dishes clean</span>
              </div>
            </div>
          </div>

          {/* Parent Encouragement / Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              Parent Inspection Notes / Feedback for Kids:
            </label>
            <input
              type="text"
              value={parentNotes}
              onChange={e => handleSaveNotes(e.target.value)}
              placeholder="e.g. Awesome job cleaning the basement and keeping rooms tidy! Keep up the great work!"
              className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Monthly Incentive Preview */}
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 p-3 rounded-2xl border border-amber-200/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="font-extrabold text-amber-950">Active Monthly Incentive: </span>
                <span className="text-amber-900 font-medium">{monthlyIncentive}</span>
              </div>
            </div>
            {topPerformer && (
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full shrink-0">
                Leader: {topPerformer.name} ({topPerformer.done})
              </span>
            )}
          </div>
        </div>

        {/* Modal Footer / Master Action */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span className="font-bold text-slate-700">Official Stamp:</span> Stamping{" "}
            <span className="font-mono font-bold text-slate-900">✓ TV / MV</span> updates row 18 in the printable
            matrix across all synced devices.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition cursor-pointer"
            >
              Done / Close
            </button>

            <button
              type="button"
              onClick={handlePerformSignOff}
              className={`w-1/2 sm:w-auto px-5 py-2.5 rounded-xl font-extrabold text-xs text-white shadow-md transition flex items-center justify-center gap-2 cursor-pointer ${
                signOffStatus.done
                  ? "bg-slate-700 hover:bg-slate-800"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
              }`}
            >
              {signOffStatus.done ? (
                <>
                  <RotateCcw className="w-4 h-4" />
                  <span>Revoke Sign-Off</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Approve & Sign (✓ TV / MV)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

