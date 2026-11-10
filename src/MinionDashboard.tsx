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
  RefreshCw
} from "lucide-react";
import {
  playChoreCompletionSound,
  saveDeviceSession,
  broadcastLocalUpdate,
  type DeviceSession
} from "./firebaseSync";

interface MinionDashboardProps {
  kidName: string;
  familyMembers: any[];
  monthSchedule: Record<string, Record<string | number, { who?: string; done?: boolean; kidsDone?: Record<string, boolean> }>>;
  hubMasterChores: any[];
  monthlyIncentive: string;
  selectedYear: number;
  selectedMonth: number;
  onUpdateChore: (dateKey: string, choreIndex: number, updates: { done?: boolean; who?: string }) => void;
  onToggleWeeklyKidChore: (choreIndex: number, kidName: string, taskTitle: string) => void;
  getWeeklyKidsStatus: (choreIndex: number, taskTitle: string) => Record<string, boolean>;
  onExitMinionMode: () => void;
  formatDateKey: (year: number, month: number, day: number) => string;
}

export const MinionDashboard: React.FC<MinionDashboardProps> = ({
  kidName,
  familyMembers,
  monthSchedule,
  hubMasterChores,
  monthlyIncentive,
  selectedYear,
  selectedMonth,
  onUpdateChore,
  onToggleWeeklyKidChore,
  getWeeklyKidsStatus,
  onExitMinionMode,
  formatDateKey
}) => {
  const currentKid = familyMembers.find(
    m => m.name.toLowerCase() === kidName.toLowerCase()
  ) || {
    name: kidName,
    role: "Minion",
    color: "#6366F1",
    bg: "#EEF2FF",
    text: "#4338CA"
  };

  // Date selection (default to today)
  const [activeDate, setActiveDate] = useState(() => {
    const now = new Date();
    // Default to the current month/year passed or fallback
    return new Date(selectedYear, selectedMonth, now.getDate() <= 31 ? now.getDate() : 19);
  });

  const [showExitPinModal, setShowExitPinModal] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

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

  // Daily chores assigned to this kid for activeDateKey
  const dailyChoresForKid = React.useMemo(() => {
    const dayChores = monthSchedule[activeDateKey] || {};
    const list: Array<{ chore: any; choreIndex: number; done: boolean; isAssignedToMe: boolean }> = [];

    hubMasterChores.forEach((chore, idx) => {
      const f = String(chore.frequency || "").toLowerCase();
      const isDaily = f.includes("daily") || (!f.includes("bi") && !f.includes("once") && !f.includes("week"));
      if (!isDaily) return;

      const choreStatus = dayChores[chore.index_] || dayChores[idx] || {};
      const who = choreStatus.who || "";
      const isDone = !!choreStatus.done;

      const isDirectlyAssigned = who.toLowerCase() === currentKid.name.toLowerCase();
      const isGroupAssigned =
        who === "All Kids" ||
        who === "Each Child" ||
        (who === "Non-Casual" && currentKid.type !== "casual") ||
        (who === "All Non-Casual" && currentKid.type !== "casual");

      if (isDirectlyAssigned || isGroupAssigned || !who) {
        list.push({
          chore,
          choreIndex: chore.index_ !== undefined ? chore.index_ : idx,
          done: isDone,
          isAssignedToMe: isDirectlyAssigned || isGroupAssigned
        });
      }
    });

    return list;
  }, [hubMasterChores, monthSchedule, activeDateKey, currentKid]);

  // Weekly Checklist chores for this kid
  const weeklyChores = React.useMemo(() => {
    return hubMasterChores.filter(c => {
      const t = (c.task || "").toLowerCase();
      return t.includes("laundry") || t.includes("bedroom");
    });
  }, [hubMasterChores]);

  const handleToggleDailyChore = (choreIndex: number, currentDone: boolean) => {
    const nextDone = !currentDone;
    onUpdateChore(activeDateKey, choreIndex, {
      done: nextDone,
      who: currentKid.name
    });

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
    }
  };

  const handleExitPinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "1234" || pinInput === "0000") {
      setShowExitPinModal(false);
      onExitMinionMode();
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

          {/* Parent Lock / Exit Button */}
          <button
            type="button"
            onClick={() => {
              setPinInput("");
              setPinError("");
              setShowExitPinModal(true);
            }}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition flex items-center gap-1 text-xs font-semibold"
            title="Parent Admin Unlock"
          >
            <Lock className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Parent Mode</span>
          </button>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-4 space-y-4">
        {/* Monthly Incentive Reward Card */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 rounded-2xl p-4 text-white shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-100">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-200" />
              <span>Monthly Goal & Incentive Prize</span>
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">
              Top Performer
            </span>
          </div>
          <div className="flex items-center gap-2.5 pt-1">
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
            {completedTodayCount === dailyChoresForKid.length && dailyChoresForKid.length > 0 && (
              <span className="text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
                <span>🌟 All Done Today!</span>
              </span>
            )}
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
              {dailyChoresForKid.map(({ chore, choreIndex, done, isAssignedToMe }) => {
                const titleLines = String(chore.task || "Chore").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
                const mainTitle = titleLines[0] || chore.task;
                const subTitle = titleLines.slice(1).join(" ") || chore.notes;

                return (
                  <div
                    key={`kid-chore-${choreIndex}`}
                    onClick={() => handleToggleDailyChore(choreIndex, done)}
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

                    <div className="shrink-0">
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

                  <div className="shrink-0">
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
      </main>

      {/* Parent PIN Unlock Modal to Exit Minion Mode */}
      {showExitPinModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xs w-full p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 mx-auto flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Parent Unlock</h3>
              <p className="text-xs text-slate-500">
                Enter your 4-digit Parent PIN to return to Admin Hub:
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
                className="w-full text-center text-xl tracking-widest font-mono font-bold py-2 px-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {pinError && (
                <div className="text-xs text-rose-600 font-semibold text-center">
                  {pinError}
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowExitPinModal(false)}
                  className="py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

