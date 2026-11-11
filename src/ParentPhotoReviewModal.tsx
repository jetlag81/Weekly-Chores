// Parent Chore Photo Proof Review & Signoff Modal
// Allows parents (Thom & Meghan) to inspect full-resolution chore photos, read notes,
// award approval stars ⭐, or request a quick redo with actionable feedback 🔄.

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Clock,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Star,
  Check,
  AlertCircle
} from "lucide-react";
import { updateChorePhotoVerification, type ChorePhotoProof } from "./chorePhotoTypes";
import { playHouseholdRemoteChime, saveActivityEvent } from "./activityFeed";
import { playChoreCompletionSound } from "./firebaseSync";

export interface ParentPhotoReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  proof: ChorePhotoProof | null;
  parentName?: string;
  onProofUpdated?: (updatedProof: ChorePhotoProof) => void;
}

export const ParentPhotoReviewModal: React.FC<ParentPhotoReviewModalProps> = ({
  isOpen,
  onClose,
  proof,
  parentName = "Thom & Meghan",
  onProofUpdated
}) => {
  const [showRedoInput, setShowRedoInput] = useState<boolean>(false);
  const [redoFeedback, setRedoFeedback] = useState<string>("");
  const [currentProof, setCurrentProof] = useState<ChorePhotoProof | null>(proof);

  React.useEffect(() => {
    setCurrentProof(proof);
    setShowRedoInput(false);
    setRedoFeedback("");
  }, [proof]);

  if (!isOpen || !currentProof) return null;

  const handleApprove = () => {
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}

    playChoreCompletionSound();
    playHouseholdRemoteChime();

    const updated = updateChorePhotoVerification(currentProof.id, true, parentName);
    if (updated) {
      setCurrentProof(updated);
      onProofUpdated?.(updated);

      // Log praise in activity feed
      saveActivityEvent({
        id: `proof-approved-${Date.now()}`,
        timestamp: Date.now(),
        kidName: updated.kidName,
        taskTitle: `Photo proof approved for "${updated.taskTitle}"! ⭐`,
        action: "photo_approved",
        dateKey: updated.dateKey
      });
    }
  };

  const handleRequestRedo = () => {
    if (!showRedoInput) {
      setShowRedoInput(true);
      return;
    }

    const updated = updateChorePhotoVerification(
      currentProof.id,
      false,
      parentName,
      redoFeedback.trim() || "Please double check and touch up a few spots."
    );

    if (updated) {
      setCurrentProof(updated);
      onProofUpdated?.(updated);

      saveActivityEvent({
        id: `proof-redo-${Date.now()}`,
        timestamp: Date.now(),
        kidName: updated.kidName,
        taskTitle: `Redo requested for "${updated.taskTitle}": ${redoFeedback.trim() || "Needs touch-up"} 🔄`,
        action: "uncompleted",
        dateKey: updated.dateKey
      });
    }
    setShowRedoInput(false);
  };

  const formattedTime = new Date(currentProof.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
              {currentProof.kidName.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base text-white">
                  {currentProof.kidName}'s Photo Proof
                </h3>
                {currentProof.verified && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-emerald-300" />
                    Approved
                  </span>
                )}
                {currentProof.redoRequested && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <RotateCcw className="w-3 h-3" />
                    Redo Needed
                  </span>
                )}
              </div>
              <p className="text-xs text-indigo-200 font-semibold truncate mt-0.5">
                {currentProof.taskTitle}
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

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Photo Display */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center max-h-80 shadow-inner">
            <img
              src={currentProof.url}
              alt={`Proof submitted by ${currentProof.kidName}`}
              className="max-h-80 w-auto object-contain mx-auto"
            />
          </div>

          {/* Metadata & Kid Note */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentProof.dateKey}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Submitted at {formattedTime}</span>
              </span>
            </div>

            {currentProof.note && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {currentProof.kidName}'s Note:
                  </div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    "{currentProof.note}"
                  </p>
                </div>
              </div>
            )}

            {currentProof.redoRequested && currentProof.redoFeedback && (
              <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs">
                <span className="font-bold">Redo feedback sent:</span> {currentProof.redoFeedback}
              </div>
            )}
          </div>

          {/* Redo Input Prompt (Conditional) */}
          {showRedoInput && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25 space-y-2 animate-in fade-in">
              <label className="text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>What should {currentProof.kidName} touch up?</span>
              </label>
              <input
                type="text"
                value={redoFeedback}
                onChange={(e) => setRedoFeedback(e.target.value)}
                placeholder="e.g. Don't forget to wipe down the stove & put towels away!"
                className="w-full bg-white dark:bg-slate-800 border border-rose-300 dark:border-rose-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                autoFocus
              />
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowRedoInput(false)}
                  className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleRequestRedo}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition"
                >
                  Send Redo Request
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center gap-2">
          {!currentProof.verified ? (
            <>
              <button
                type="button"
                onClick={handleApprove}
                className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Star className="w-4 h-4 fill-white" />
                <span>Approve &amp; Star ⭐</span>
              </button>

              {!showRedoInput && (
                <button
                  type="button"
                  onClick={() => setShowRedoInput(true)}
                  className="py-3 px-3.5 rounded-2xl bg-rose-100 dark:bg-rose-950/60 hover:bg-rose-200 text-rose-700 dark:text-rose-300 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Request Redo</span>
                </button>
              )}
            </>
          ) : (
            <div className="flex-1 py-3 px-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>Approved by {currentProof.verifiedBy || "Parents"}</span>
            </div>
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

