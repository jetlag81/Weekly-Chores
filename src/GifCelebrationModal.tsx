// Interactive Chore Celebration GIF Popup Modal
// Displays a randomized, animated "Good Job" GIF whenever a kid checks off a chore.

import React, { useEffect, useState } from "react";
import { Sparkles, X, CheckCircle2, ThumbsUp } from "lucide-react";

interface GifCelebrationModalProps {
  isOpen: boolean;
  gifUrl: string | null;
  kidName: string;
  taskTitle: string;
  onClose: () => void;
  autoCloseMs?: number;
}

const ENCOURAGING_PHRASES = [
  "Awesome Job!",
  "Crushed It!",
  "Chore Knocked Out!",
  "Way to Go!",
  "High Five!",
  "Chore Hero!",
  "Superstar Move!"
];

export const GifCelebrationModal: React.FC<GifCelebrationModalProps> = ({
  isOpen,
  gifUrl,
  kidName,
  taskTitle,
  onClose,
  autoCloseMs = 4000
}) => {
  const [headline, setHeadline] = useState("Awesome Job!");
  const [progressPct, setProgressPct] = useState(100);

  // Pick a fresh energetic headline on open
  useEffect(() => {
    if (isOpen) {
      const phrase = ENCOURAGING_PHRASES[Math.floor(Math.random() * ENCOURAGING_PHRASES.length)];
      setHeadline(phrase);
      setProgressPct(100);
    }
  }, [isOpen, gifUrl]);

  // Handle auto-close timer and visual progress bar
  useEffect(() => {
    if (!isOpen || !gifUrl) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / autoCloseMs) * 100);
      setProgressPct(remaining);

      if (elapsed >= autoCloseMs) {
        clearInterval(interval);
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, gifUrl, autoCloseMs, onClose]);

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

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 transition-all duration-200 cursor-pointer animate-in fade-in"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-sm sm:max-w-md w-full shadow-2xl border-2 border-amber-300 overflow-hidden flex flex-col items-center p-5 text-center relative cursor-default animate-in zoom-in-90 duration-200"
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

        {/* Celebration Header */}
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>{headline}</span>
        </div>

        <h3 className="text-lg font-black text-slate-900 leading-snug">
          {kidName} completed:
        </h3>

        <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 mt-1 mb-3.5 max-w-full">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="truncate">{taskTitle}</span>
        </div>

        {/* The Animated Good Job GIF */}
        <div className="w-full flex items-center justify-center bg-slate-950/5 rounded-2xl overflow-hidden border border-slate-200 min-h-[220px] max-h-[320px] sm:max-h-[360px] shadow-inner relative">
          <img
            src={gifUrl}
            alt="Good Job Celebration"
            className="w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain rounded-2xl"
            loading="eager"
          />
        </div>

        {/* Action Button */}
        <div className="w-full mt-4 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium text-slate-400">
            Tap anywhere to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-1.5"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Next Chore 🚀</span>
          </button>
        </div>

        {/* Auto-Dismiss Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className="bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-500 h-full transition-all duration-75 rounded-full"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
};

