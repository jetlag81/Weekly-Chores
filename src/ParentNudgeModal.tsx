// Parent Nudge & Inspection Feedback Modal
// Allows Parents Thom & Meghan to dispatch playful "Meh" nudges and "Good Job" praise
// directly to kids' phones and tablets with animated GIFs and custom messages.

import React, { useState } from "react";
import {
  Bell,
  Sparkles,
  X,
  Send,
  ThumbsUp,
  AlertCircle,
  CheckCircle2,
  Smile,
  Meh
} from "lucide-react";
import {
  sendParentNudge,
  PRAISE_PRESETS,
  NUDGE_PRESETS
} from "./nudgeSystem";

interface ParentNudgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  allKidsList?: string[];
  initialKid?: string;
  initialType?: "praise" | "nudge";
  onNudgeSent?: (kidName: string, type: "praise" | "nudge", msg: string) => void;
}

export const ParentNudgeModal: React.FC<ParentNudgeModalProps> = ({
  isOpen,
  onClose,
  allKidsList = ["Sydney", "Cadence", "Mason"],
  initialKid,
  initialType = "nudge",
  onNudgeSent
}) => {
  const [selectedKid, setSelectedKid] = useState<string>(() => initialKid || allKidsList[0] || "Sydney");
  const [nudgeType, setNudgeType] = useState<"praise" | "nudge">(initialType);
  const [headline, setHeadline] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [justSent, setJustSent] = useState<boolean>(false);

  // When changing type, initialize headline/message with top preset if empty
  const handleSelectPreset = (preset: { headline: string; message: string }) => {
    setHeadline(preset.headline);
    setMessage(preset.message);
  };

  const handleSend = () => {
    const finalHeadline = headline.trim() || (nudgeType === "praise" ? "Awesome Job! ⭐" : "Minion Nudge! 🧹");
    const finalMsg = message.trim() || (nudgeType === "praise" ? "Keep up the fantastic work!" : "Time for a quick chore touch-up!");

    sendParentNudge({
      targetKid: selectedKid,
      type: nudgeType,
      headline: finalHeadline,
      message: finalMsg,
      fromParent: "Parents Thom & Meghan"
    });

    if (onNudgeSent) {
      onNudgeSent(selectedKid, nudgeType, finalMsg);
    }

    setJustSent(true);
    setTimeout(() => {
      setJustSent(false);
      onClose();
    }, 1200);
  };

  if (!isOpen) return null;

  const currentPresets = nudgeType === "praise" ? PRAISE_PRESETS : NUDGE_PRESETS;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div
          className={`p-4 sm:p-5 text-white flex items-center justify-between transition-colors ${
            nudgeType === "praise"
              ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700"
              : "bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-inner">
              {nudgeType === "praise" ? (
                <Sparkles className="w-5 h-5 text-amber-200" />
              ) : (
                <Bell className="w-5 h-5 text-amber-200" />
              )}
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full inline-block">
                Parent Remote Nudge & Feedback
              </div>
              <h3 className="text-lg font-black mt-0.5">
                {nudgeType === "praise" ? "Send Praise ⭐ (Good Job GIF)" : "Send Nudge 🧹 (Meh GIF)"}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-4 text-slate-800">
          {/* Target Kid Selector */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              Send To Kid:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {allKidsList.map(kid => (
                <button
                  key={kid}
                  type="button"
                  onClick={() => setSelectedKid(kid)}
                  className={`py-2 px-3 rounded-xl font-extrabold text-xs transition cursor-pointer border flex items-center justify-center gap-1.5 ${
                    selectedKid === kid
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span>{kid}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Type Toggle */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              Message Style & GIF Type:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setNudgeType("praise")}
                className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
                  nudgeType === "praise"
                    ? "bg-emerald-50 border-emerald-400 ring-2 ring-emerald-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Smile className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-emerald-950 flex items-center gap-1">
                    <span>Praise</span>
                    <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1 rounded">Good Job GIF</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium">Spotless room, great work</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setNudgeType("nudge")}
                className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
                  nudgeType === "nudge"
                    ? "bg-orange-50 border-orange-400 ring-2 ring-orange-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                  <Meh className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-orange-950 flex items-center gap-1">
                    <span>Nudge</span>
                    <span className="text-[10px] bg-orange-200 text-orange-900 px-1 rounded">Meh GIF</span>
                  </div>
                  <div className="text-[11px] text-orange-700 font-medium">Unmade bed, messy room</div>
                </div>
              </button>
            </div>
          </div>

          {/* Quick 1-Tap Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                Quick 1-Tap Presets:
              </label>
              <span className="text-[11px] text-slate-400">Tap to auto-fill</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {currentPresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`text-xs px-2.5 py-1.5 rounded-xl border font-bold transition cursor-pointer text-left ${
                    headline === preset.headline
                      ? nudgeType === "praise"
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                        : "bg-orange-600 text-white border-orange-600 shadow-2xs"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {preset.headline}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Field */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
              Message to {selectedKid}:
            </label>
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={nudgeType === "praise" ? "e.g. Great job cleaning your room!" : "e.g. Bed needs to be made before screen time!"}
              className="w-full text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Send Action */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSend}
              disabled={justSent}
              className={`px-5 py-2.5 rounded-xl text-xs font-black text-white transition flex items-center gap-2 cursor-pointer shadow-md ${
                justSent
                  ? "bg-emerald-600"
                  : nudgeType === "praise"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              {justSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>Sent to {selectedKid}!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send to {selectedKid} 🚀</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

