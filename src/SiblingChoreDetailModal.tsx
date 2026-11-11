// Sibling Chore Status & Detail Check-In Modal
// Allows minions to view their siblings' daily chore progress, completed tasks,
// wish goals, and send celebratory cheers/high-fives without switching sessions.

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle2,
  Circle,
  Sparkles,
  Trophy,
  PartyPopper,
  Flame,
  Clock,
  Heart,
  Gift
} from "lucide-react";
import { getKidRewardProfile } from "./rewardAccounts";
import { playHouseholdRemoteChime, saveActivityEvent } from "./activityFeed";

export interface SiblingChoreItem {
  task: string;
  choreIndex: number;
  done: boolean;
  timeOfDay: string;
  category?: string;
  points?: number;
}

export interface SiblingChoreDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  sibling: {
    name: string;
    color?: string;
    id?: string;
  };
  currentKidName: string;
  dateKey: string;
  chores: SiblingChoreItem[];
}

export const SiblingChoreDetailModal: React.FC<SiblingChoreDetailModalProps> = ({
  isOpen,
  onClose,
  sibling,
  currentKidName,
  dateKey,
  chores
}) => {
  const [cheerSent, setCheerSent] = useState<boolean>(false);

  if (!isOpen) return null;

  const isSelf = sibling.name.toLowerCase() === currentKidName.toLowerCase();
  const rewardProfile = getKidRewardProfile(sibling.name);

  const doneChores = chores.filter(c => c.done);
  const pendingChores = chores.filter(c => !c.done);
  const total = chores.length;
  const done = doneChores.length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  const allDone = total > 0 && done === total;

  // Format date display
  const formatDateLabel = (dKey: string) => {
    try {
      const parts = dKey.split("-");
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        return d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric"
        });
      }
    } catch {}
    return dKey;
  };

  const handleSendCheer = () => {
    if (cheerSent) return;

    // Confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}

    // Audio chime
    playHouseholdRemoteChime();

    // Log to household activity feed
    saveActivityEvent({
      id: `cheer-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: Date.now(),
      kidName: currentKidName,
      taskTitle: `Sent a high-five cheer to ${sibling.name}! 🎉`,
      action: "signoff",
      dateKey
    });

    setCheerSent(true);
    setTimeout(() => {
      setCheerSent(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="p-4 sm:p-5 flex items-center justify-between text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${sibling.color || "#6366F1"}, #1E293B)`
          }}
        >
          <div className="flex items-center gap-3 relative z-10">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md ring-2 ring-white/30"
              style={{ backgroundColor: sibling.color || "#6366F1" }}
            >
              {sibling.name.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-black text-lg text-white">
                  {sibling.name}'s Chores
                </h3>
                {isSelf && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                    You
                  </span>
                )}
              </div>
              <p className="text-xs text-white/80 font-medium">
                {formatDateLabel(dateKey)}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer relative z-10"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Progress Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Daily Progress
                </span>
              </div>
              <span className="text-xs font-mono font-black text-slate-900 dark:text-white">
                {done} / {total} Done ({percent}%)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  allDone
                    ? "bg-emerald-500"
                    : "bg-indigo-600 dark:bg-indigo-500"
                }`}
                style={{
                  width: `${percent}%`,
                  backgroundColor: allDone ? undefined : sibling.color
                }}
              />
            </div>

            {allDone ? (
              <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                <PartyPopper className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>All chores completed today! Amazing work! 🎉</span>
              </div>
            ) : total === 0 ? (
              <p className="text-xs text-slate-500 text-center py-1">
                No chores assigned for this day.
              </p>
            ) : (
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {total - done} chore{total - done === 1 ? "" : "s"} remaining today.
              </p>
            )}
          </div>

          {/* Sibling Top Wish / Reward Goal (if configured) */}
          {rewardProfile.topWish && (
            <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    {sibling.name}'s Wish Goal
                  </span>
                  {rewardProfile.targetGoalAmount && (
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">
                      ${rewardProfile.targetGoalAmount}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate mt-0.5">
                  {rewardProfile.topWish}
                </p>
              </div>
            </div>
          )}

          {/* Chore Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
              Today's Chore Checklist ({total})
            </h4>

            {chores.length === 0 ? (
              <div className="p-6 text-center text-slate-400 text-xs">
                No chores on the schedule for this day.
              </div>
            ) : (
              <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                {/* Pending Chores First */}
                {pendingChores.map((item, idx) => (
                  <div
                    key={`pending-${item.choreIndex}-${idx}`}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2.5 shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        {item.task}
                      </span>
                    </div>
                    {item.timeOfDay && (
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded-md shrink-0 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {item.timeOfDay}
                      </span>
                    )}
                  </div>
                ))}

                {/* Completed Chores */}
                {doneChores.map((item, idx) => (
                  <div
                    key={`done-${item.choreIndex}-${idx}`}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-2.5 opacity-80"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 line-through truncate">
                        {item.task}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md shrink-0">
                      Done
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Action Button */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center gap-2">
          {!isSelf ? (
            <button
              type="button"
              onClick={handleSendCheer}
              className={`flex-1 py-3 px-4 rounded-2xl font-black text-xs transition cursor-pointer flex items-center justify-center gap-2 shadow-xs ${
                cheerSent
                  ? "bg-emerald-600 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {cheerSent ? (
                <>
                  <PartyPopper className="w-4 h-4" />
                  High Five Sent to {sibling.name}! 🎉
                </>
              ) : (
                <>
                  <PartyPopper className="w-4 h-4" />
                  Send Cheer & High Five to {sibling.name} ✋
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-2xl font-black text-xs bg-indigo-600 hover:bg-indigo-700 text-white transition cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <Flame className="w-4 h-4" />
              Let's Crush My Chores! 💪
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="py-3 px-4 rounded-2xl font-bold text-xs bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
