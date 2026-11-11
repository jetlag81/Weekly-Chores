// Floating Activity Toast for Live Real-Time Chore Updates
// Pops up non-intrusively when another household device completes a chore.

import React, { useEffect, useState } from "react";
import { CheckCircle2, ShieldCheck, X, Sparkles, Bell, Camera, MessageSquare, Heart } from "lucide-react";
import { type HouseholdActivityEvent, formatRelativeTime } from "./activityFeed";

interface ActivityToastProps {
  event: HouseholdActivityEvent | null;
  familyMembers?: Array<{ name: string; color?: string }>;
  onClose: () => void;
  onOpenFeed?: () => void;
  autoDismissMs?: number;
}

export const ActivityToast: React.FC<ActivityToastProps> = ({
  event,
  familyMembers = [],
  onClose,
  onOpenFeed,
  autoDismissMs = 4500
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!event) return;
    setProgress(100);

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / autoDismissMs) * 100);
      setProgress(remaining);

      if (elapsed >= autoDismissMs) {
        clearInterval(interval);
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [event, autoDismissMs, onClose]);

  if (!event) return null;

  const member = familyMembers.find(m => m.name.toLowerCase() === event.kidName.toLowerCase());
  const memberColor = member?.color || "#6366F1";

  const isSignOff = event.action === "signoff";
  const isPhotoReq = event.action === "photo_requested";
  const isPhotoApproved = event.action === "photo_approved";
  const isNudge = event.action === "nudge";
  const isCheer = event.action === "cheer";

  const getActionBadge = () => {
    if (isSignOff) return "Weekly Sign-Off";
    if (isPhotoReq) return "Photo Requested 📸";
    if (isPhotoApproved) return "Photo Approved ⭐";
    if (isNudge) return "Parent Note 💬";
    if (isCheer) return "Family Cheer 🎉";
    return "Chore Finished!";
  };

  const getActionSubtitle = () => {
    if (isSignOff) return "approved the week";
    if (isPhotoReq) return "asked for photo proof";
    if (isPhotoApproved) return "approved photo proof";
    if (isNudge) return "sent a message";
    if (isCheer) return "sent a cheer";
    return "completed";
  };

  const isSpecial = isSignOff || isPhotoReq || isPhotoApproved;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full p-2 animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto">
      <div
        onClick={() => {
          onOpenFeed?.();
          onClose();
        }}
        className={`rounded-2xl shadow-2xl border p-3.5 backdrop-blur-md transition-all cursor-pointer relative overflow-hidden group ${
          isSignOff
            ? "bg-amber-900/95 text-white border-amber-500 shadow-amber-950/30"
            : isPhotoReq
            ? "bg-slate-900/95 text-white border-amber-500 shadow-amber-950/40 ring-1 ring-amber-500/40"
            : isPhotoApproved
            ? "bg-emerald-950/95 text-white border-emerald-500 shadow-emerald-950/30"
            : "bg-slate-900/95 text-white border-indigo-500/50 shadow-slate-950/40"
        }`}
      >
        <div className="flex items-start gap-3">
          {/* Member Avatar */}
          <div
            className="w-10 h-10 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 shadow-md ring-2 ring-white/20"
            style={{
              backgroundColor: isSignOff ? "#F59E0B" : isPhotoReq ? "#D97706" : memberColor,
              color: "#FFFFFF"
            }}
          >
            {isSignOff ? "✓" : isPhotoReq ? "📸" : isPhotoApproved ? "⭐" : isCheer ? "🎉" : event.kidName.slice(0, 2).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
              <span>{getActionBadge()}</span>
              <span className="text-white/60 font-normal lowercase tracking-normal">
                • {formatRelativeTime(event.timestamp)}
              </span>
            </div>

            <div className="font-extrabold text-sm text-white truncate mt-0.5">
              {event.kidName}{" "}
              <span className="font-normal text-white/80">
                {getActionSubtitle()}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mt-1 truncate bg-white/10 px-2 py-0.5 rounded-lg w-fit max-w-full">
              {isSignOff ? (
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              ) : isPhotoReq ? (
                <Camera className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              ) : isPhotoApproved ? (
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              ) : isNudge ? (
                <MessageSquare className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
              ) : isCheer ? (
                <Heart className="w-3.5 h-3.5 text-pink-300 shrink-0" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              )}
              <span className="truncate">{event.taskTitle}</span>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition cursor-pointer"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Auto-Dismiss Timer Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div
            className={`h-full transition-all duration-75 ${
              isSpecial
                ? "bg-gradient-to-r from-amber-400 to-yellow-300"
                : "bg-gradient-to-r from-emerald-400 to-indigo-400"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

