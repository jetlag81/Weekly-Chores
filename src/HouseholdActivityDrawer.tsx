// Household Real-Time Activity Drawer
// Slide-over panel displaying the chronological feed of all family chore completions, audio chime settings, and filters.

import React, { useState, useEffect } from "react";
import {
  Bell,
  BellOff,
  CheckCircle2,
  ShieldCheck,
  X,
  Trash2,
  Filter,
  Sparkles,
  Clock,
  Volume2,
  VolumeX,
  Users,
  Camera,
  MessageSquare,
  Heart
} from "lucide-react";
import {
  type HouseholdActivityEvent,
  formatRelativeTime,
  isChimeSoundEnabled,
  setChimeSoundEnabled,
  playHouseholdRemoteChime
} from "./activityFeed";

interface HouseholdActivityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activities: HouseholdActivityEvent[];
  onClearActivities: () => void;
  familyMembers?: Array<{ name: string; color?: string; type?: string }>;
  allKidsList?: string[];
}

export const HouseholdActivityDrawer: React.FC<HouseholdActivityDrawerProps> = ({
  isOpen,
  onClose,
  activities = [],
  onClearActivities,
  familyMembers = [],
  allKidsList = ["Sydney", "Cadence", "Mason"]
}) => {
  const [selectedKidFilter, setSelectedKidFilter] = useState<string>("All");
  const [chimeEnabled, setChimeEnabled] = useState<boolean>(() => isChimeSoundEnabled());
  const [, setTick] = useState(0);

  // Re-render every 30 seconds to keep relative times ("2m ago") fresh
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => setTick(t => t + 1), 30000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleToggleChime = () => {
    const next = !chimeEnabled;
    setChimeEnabled(next);
    setChimeSoundEnabled(next);
    if (next) {
      playHouseholdRemoteChime(); // Play test chime
    }
  };

  const filteredActivities = activities.filter(act => {
    if (selectedKidFilter === "All") return true;
    if (selectedKidFilter === "Parents") {
      return (
        act.action === "signoff" ||
        act.kidName.toLowerCase().includes("parent") ||
        act.kidName.toLowerCase().includes("thom") ||
        act.kidName.toLowerCase().includes("meghan")
      );
    }
    return act.kidName.toLowerCase() === selectedKidFilter.toLowerCase();
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-250"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shrink-0 drawer-safe-header"
          style={{ paddingTop: "calc(1rem + max(env(safe-area-inset-top, 0px), var(--safe-area-inset-top, 0px)))" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shadow-inner">
                <Bell className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-base text-white">Live Activity Stream</h3>
                  <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                    Real-Time
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Recent chore completions across household devices
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Controls Bar */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/10 text-xs">
            {/* Chime Sound Toggle */}
            <button
              type="button"
              onClick={handleToggleChime}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl font-bold transition cursor-pointer text-xs border ${
                chimeEnabled
                  ? "bg-indigo-500/20 text-indigo-200 border-indigo-400/30 hover:bg-indigo-500/30"
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
              }`}
              title={chimeEnabled ? "Chimes enabled on chore check-offs" : "Chimes muted"}
            >
              {chimeEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Chimes: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Chimes: Off</span>
                </>
              )}
            </button>

            {activities.length > 0 && (
              <button
                type="button"
                onClick={onClearActivities}
                className="flex items-center gap-1 text-[11px] font-semibold text-rose-300 hover:text-rose-200 hover:underline transition cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Feed</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 shrink-0 overflow-x-auto flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setSelectedKidFilter("All")}
            className={`px-3 py-1 rounded-xl font-bold transition whitespace-nowrap cursor-pointer ${
              selectedKidFilter === "All"
                ? "bg-slate-900 dark:bg-indigo-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            All ({activities.length})
          </button>

          {allKidsList.map(name => {
            const count = activities.filter(a => a.kidName.toLowerCase() === name.toLowerCase()).length;
            const mem = familyMembers.find(m => m.name.toLowerCase() === name.toLowerCase());
            return (
              <button
                key={name}
                type="button"
                onClick={() => setSelectedKidFilter(name)}
                className={`px-2.5 py-1 rounded-xl font-bold transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  selectedKidFilter === name
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                <span>{name}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      selectedKidFilter === name ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setSelectedKidFilter("Parents")}
            className={`px-2.5 py-1 rounded-xl font-bold transition whitespace-nowrap cursor-pointer ${
              selectedKidFilter === "Parents"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            Parents
          </button>
        </div>

        {/* Activity Timeline List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-800 dark:text-white">No activities recorded yet</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                  When family members check off chores or parents sign off the week, they will appear here in real time.
                </p>
              </div>
            </div>
          ) : (
            filteredActivities.map((act, idx) => {
              const mem = familyMembers.find(m => m.name.toLowerCase() === act.kidName.toLowerCase());
              const isSignOff = act.action === "signoff";
              const isPhotoReq = act.action === "photo_requested";
              const isPhotoApproved = act.action === "photo_approved";
              const isNudge = act.action === "nudge";
              const isCheer = act.action === "cheer";

              return (
                <div
                  key={act.id || `${act.timestamp}-${idx}`}
                  className={`p-3 rounded-2xl border transition shadow-2xs ${
                    isSignOff
                      ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-600/50"
                      : isPhotoReq
                      ? "bg-amber-50/60 dark:bg-amber-950/30 border-amber-300 dark:border-amber-600/50"
                      : isPhotoApproved
                      ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-600/50"
                      : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shrink-0 shadow-xs"
                      style={{
                        backgroundColor: isSignOff ? "#F59E0B" : isPhotoReq ? "#D97706" : isPhotoApproved ? "#10B981" : mem?.color || "#6366F1",
                        color: "#FFFFFF"
                      }}
                    >
                      {isSignOff ? "✓" : isPhotoReq ? "📸" : isPhotoApproved ? "⭐" : isCheer ? "🎉" : act.kidName.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-extrabold text-xs text-slate-900 dark:text-white truncate">
                          {act.kidName}
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                          {formatRelativeTime(act.timestamp)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-200 mt-1 font-semibold">
                        {isSignOff ? (
                          <>
                            <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                            <span className="text-amber-900 dark:text-amber-200 font-bold truncate">{act.taskTitle}</span>
                          </>
                        ) : isPhotoReq ? (
                          <>
                            <Camera className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                            <span className="text-amber-900 dark:text-amber-200 font-bold truncate">{act.taskTitle}</span>
                          </>
                        ) : isPhotoApproved ? (
                          <>
                            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                            <span className="text-emerald-900 dark:text-emerald-200 font-bold truncate">{act.taskTitle}</span>
                          </>
                        ) : isNudge ? (
                          <>
                            <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                            <span className="text-indigo-900 dark:text-indigo-200 font-semibold truncate">{act.taskTitle}</span>
                          </>
                        ) : isCheer ? (
                          <>
                            <Heart className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />
                            <span className="text-slate-800 dark:text-slate-200 font-medium truncate">{act.taskTitle}</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="truncate">{act.taskTitle}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div
          className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 shrink-0 text-center text-xs text-slate-500 dark:text-slate-400 drawer-safe-footer"
          style={{ paddingBottom: "calc(1rem + max(env(safe-area-inset-bottom, 0px), var(--safe-area-inset-bottom, 0px)))" }}
        >
          Syncs live across connected household phones, tablets, and PCs.
        </div>
      </div>
    </div>
  );
};

