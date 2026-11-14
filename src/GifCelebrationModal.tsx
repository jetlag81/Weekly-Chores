// Interactive Chore Celebration, Goal "Almost", and Parent Nudge/Feedback Modal
// Displays randomized "Good Job" (chore done / praise), "Almost" (approaching 90% goal),
// and "Meh" (inspection nudge / chore reminder) GIFs.

import React, { useEffect, useState } from "react";
import { Sparkles, X, CheckCircle2, ThumbsUp, Flame, AlertCircle, Bell, HeartHandshake } from "lucide-react";
import { getUserProfile, getEffectiveAgeTier } from "./userProfiles";

export type GifModalVariant = "good_job" | "almost" | "praise" | "nudge";

interface GifCelebrationModalProps {
  isOpen: boolean;
  gifUrl: string | null;
  kidName: string;
  taskTitle: string;
  variant?: GifModalVariant;
  headline?: string;
  message?: string;
  fromSender?: string;
  onClose: () => void;
  autoCloseMs?: number;
}

const GOOD_JOB_PHRASES = [
  "Awesome Job!",
  "Crushed It!",
  "Chore Knocked Out!",
  "Way to Go!",
  "High Five!",
  "Chore Hero!",
  "Superstar Move!"
];

const ALMOST_PHRASES = [
  "So Close! You're Almost There!",
  "90% Milestone Reached!",
  "Final Stretch!",
  "Nearly Done! Keep Pushing!",
  "Almost to the Finish Line!"
];

export const GifCelebrationModal: React.FC<GifCelebrationModalProps> = ({
  isOpen,
  gifUrl,
  kidName,
  taskTitle,
  variant = "good_job",
  headline: customHeadline,
  message,
  fromSender,
  onClose,
  autoCloseMs = 5000
}) => {
  const [headline, setHeadline] = useState("Awesome Job!");
  const [progressPct, setProgressPct] = useState(100);

  const isJunior = getEffectiveAgeTier(getUserProfile(kidName)) === "junior";

  // Pick a fresh energetic headline on open based on variant
  useEffect(() => {
    if (isOpen) {
      if (customHeadline) {
        setHeadline(customHeadline);
      } else if (variant === "almost") {
        const phrase = ALMOST_PHRASES[Math.floor(Math.random() * ALMOST_PHRASES.length)];
        setHeadline(phrase);
      } else if (variant === "praise") {
        setHeadline("Parent Praise! ⭐");
      } else if (variant === "nudge") {
        setHeadline(isJunior ? "Cheer Nudge! 🌟" : "Chore Nudge! 🧹");
      } else {
        const phrase = GOOD_JOB_PHRASES[Math.floor(Math.random() * GOOD_JOB_PHRASES.length)];
        setHeadline(phrase);
      }
      setProgressPct(100);
    }
  }, [isOpen, gifUrl, variant, customHeadline, isJunior]);

  // Handle auto-close timer and visual progress bar
  useEffect(() => {
    if (!isOpen || !gifUrl) return;

    const effectiveAutoClose = variant === "nudge" ? Math.max(autoCloseMs, 7000) : autoCloseMs;
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / effectiveAutoClose) * 100);
      setProgressPct(remaining);

      if (elapsed >= effectiveAutoClose) {
        clearInterval(interval);
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, gifUrl, autoCloseMs, variant, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !gifUrl) return null;

  // Variant-specific styling configuration
  const config = {
    good_job: {
      borderColor: "border-amber-300",
      badgeGradient: "from-amber-500 to-orange-500",
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-amber-200" />,
      subHeader: `${kidName} completed:`,
      actionBtn: "Next Chore 🚀",
      actionIcon: <ThumbsUp className="w-3.5 h-3.5" />,
      progressGradient: "from-amber-400 via-orange-500 to-emerald-500"
    },
    almost: {
      borderColor: "border-indigo-400",
      badgeGradient: "from-indigo-600 via-purple-600 to-pink-500",
      badgeIcon: <Flame className="w-3.5 h-3.5 text-amber-300" />,
      subHeader: `${kidName} is in the final stretch!`,
      actionBtn: "Finish Strong! 🔥",
      actionIcon: <Flame className="w-3.5 h-3.5 text-amber-300" />,
      progressGradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    praise: {
      borderColor: "border-emerald-400",
      badgeGradient: "from-emerald-600 to-teal-600",
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-emerald-200" />,
      subHeader: `${fromSender || "Parents Thom & Meghan"} says:`,
      actionBtn: "Thank You! 😄",
      actionIcon: <HeartHandshake className="w-3.5 h-3.5" />,
      progressGradient: "from-emerald-400 via-teal-500 to-cyan-500"
    },
    nudge: {
      borderColor: isJunior ? "border-amber-400" : "border-orange-400",
      badgeGradient: isJunior ? "from-amber-500 via-orange-500 to-rose-500" : "from-orange-600 to-rose-600",
      badgeIcon: isJunior ? <Sparkles className="w-3.5 h-3.5 text-amber-200" /> : <Bell className="w-3.5 h-3.5 text-amber-200" />,
      subHeader: isJunior
        ? `${fromSender || "Parents Thom & Meghan"} sent some cheer:`
        : `${fromSender || "Parents Thom & Meghan"} sent a reminder:`,
      actionBtn: isJunior ? "You Got This! 🌟" : "On it! 🫡",
      actionIcon: isJunior ? <Sparkles className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />,
      progressGradient: "from-orange-400 via-amber-500 to-rose-500"
    }
  }[variant];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 transition-all duration-200 cursor-pointer animate-in fade-in"
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`bg-white rounded-3xl max-w-sm sm:max-w-md w-full shadow-2xl border-2 ${config.borderColor} overflow-hidden flex flex-col items-center p-5 text-center relative cursor-default animate-in zoom-in-90 duration-200`}
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer z-10 shadow-2xs"
          title="Dismiss (or tap anywhere)"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Celebration / Alert Header Badge */}
        <div className={`flex items-center gap-1.5 bg-gradient-to-r ${config.badgeGradient} text-white px-3 py-1 rounded-full text-xs font-black shadow-xs mb-2`}>
          {config.badgeIcon}
          <span>{headline}</span>
        </div>

        <h3 className="text-lg font-black text-slate-900 leading-snug">
          {config.subHeader}
        </h3>

        {/* Highlighted Task / Message Box */}
        {variant === "almost" ? (
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-indigo-900 bg-indigo-50 px-3.5 py-1.5 rounded-xl border border-indigo-200 mt-1 mb-3.5 max-w-full">
            <Flame className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="truncate">{taskTitle || "90% of weekly chores completed!"}</span>
          </div>
        ) : variant === "nudge" ? (
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-orange-950 bg-orange-50 px-3.5 py-1.5 rounded-xl border border-orange-200 mt-1 mb-3.5 max-w-full">
            <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="truncate">{message || taskTitle}</span>
          </div>
        ) : variant === "praise" ? (
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-950 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 mt-1 mb-3.5 max-w-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">{message || taskTitle}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 mt-1 mb-3.5 max-w-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">{taskTitle}</span>
          </div>
        )}

        {/* Animated GIF Container */}
        <div className="w-full flex items-center justify-center bg-slate-950/5 rounded-2xl overflow-hidden border border-slate-200 min-h-[220px] max-h-[320px] sm:max-h-[360px] shadow-inner relative">
          <img
            src={gifUrl}
            alt="Chore Feedback Reaction"
            className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain rounded-2xl"
            loading="eager"
          />
        </div>

        {/* Action Button & Dismiss hint */}
        <div className="w-full mt-4 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium text-slate-400">
            Tap anywhere to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 bg-gradient-to-r ${config.badgeGradient} text-white font-extrabold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-1.5 hover:opacity-95`}
          >
            {config.actionIcon}
            <span>{config.actionBtn}</span>
          </button>
        </div>

        {/* Auto-Dismiss Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className={`bg-gradient-to-r ${config.progressGradient} h-full transition-all duration-75 rounded-full`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
};
