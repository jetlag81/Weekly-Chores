// Parent Photo Proofs Inbox & Batch Review Drawer/Modal
// Allows parents (Thom & Meghan) to view and approve chore photo proofs
// submitted across all household minions in one unified place.

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Camera,
  CheckCircle2,
  Star,
  Clock,
  Calendar,
  Filter,
  Check,
  RotateCcw,
  Sparkles,
  ExternalLink
} from "lucide-react";
import {
  getAllChorePhotoProofs,
  updateChorePhotoVerification,
  type ChorePhotoProof
} from "./chorePhotoTypes";
import { playHouseholdRemoteChime, saveActivityEvent } from "./activityFeed";
import { playChoreCompletionSound } from "./firebaseSync";

export interface ParentPhotoInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  allKidsList: string[];
  familyMembers: Array<{ name: string; color?: string }>;
  onSelectProofForDetail: (proof: ChorePhotoProof) => void;
}

export const ParentPhotoInboxModal: React.FC<ParentPhotoInboxModalProps> = ({
  isOpen,
  onClose,
  allKidsList,
  familyMembers,
  onSelectProofForDetail
}) => {
  const [proofs, setProofs] = useState<ChorePhotoProof[]>(() => getAllChorePhotoProofs());
  const [selectedKidFilter, setSelectedKidFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved">("pending");

  React.useEffect(() => {
    if (isOpen) {
      setProofs(getAllChorePhotoProofs());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProofs = proofs.filter(p => {
    if (selectedKidFilter !== "All" && p.kidName.toLowerCase() !== selectedKidFilter.toLowerCase()) {
      return false;
    }
    if (statusFilter === "pending") return !p.verified && !p.redoRequested;
    if (statusFilter === "approved") return !!p.verified;
    return true;
  });

  const handleQuickApprove = (proof: ChorePhotoProof, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.6 }
      });
    } catch {}

    playChoreCompletionSound();
    playHouseholdRemoteChime();

    const updated = updateChorePhotoVerification(proof.id, true, "Parents");
    if (updated) {
      setProofs(getAllChorePhotoProofs());
      saveActivityEvent({
        id: `proof-approved-${Date.now()}`,
        timestamp: Date.now(),
        kidName: proof.kidName,
        taskTitle: `Photo proof approved for "${proof.taskTitle}"! ⭐`,
        action: "signoff",
        dateKey: proof.dateKey
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-base text-white">
                  Chore Photo Proofs Inbox
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                  Parent Review
                </span>
              </div>
              <p className="text-xs text-indigo-200 font-semibold mt-0.5">
                Verify pictures submitted by minions upon task completion
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

        {/* Filter Bar */}
        <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
          {/* Status Tabs */}
          <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold gap-1">
            <button
              type="button"
              onClick={() => setStatusFilter("pending")}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                statusFilter === "pending"
                  ? "bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs font-black"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Pending ({proofs.filter(p => !p.verified && !p.redoRequested).length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("approved")}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                statusFilter === "approved"
                  ? "bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs font-black"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Approved ({proofs.filter(p => p.verified).length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                statusFilter === "all"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-black"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All ({proofs.length})
            </button>
          </div>

          {/* Kid Selector Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedKidFilter("All")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                selectedKidFilter === "All"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
              }`}
            >
              All Kids
            </button>
            {allKidsList.map(kid => (
              <button
                key={kid}
                type="button"
                onClick={() => setSelectedKidFilter(kid)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                  selectedKidFilter === kid
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
                }`}
              >
                {kid}
              </button>
            ))}
          </div>
        </div>

        {/* Proofs List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {filteredProofs.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <Camera className="w-10 h-10 text-slate-400 mx-auto" />
              <div className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                {statusFilter === "pending"
                  ? "No photo proofs waiting for review!"
                  : "No chore photos found for this filter."}
              </div>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                When kids mark chores done and attach photos in Minion Mode, they will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProofs.map(proof => {
                const mem = familyMembers.find(m => m.name.toLowerCase() === proof.kidName.toLowerCase());
                const formattedTime = new Date(proof.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                });

                return (
                  <div
                    key={proof.id}
                    onClick={() => onSelectProofForDetail(proof)}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-2xs hover:border-indigo-400 dark:hover:border-indigo-600 transition flex flex-col justify-between gap-3 cursor-pointer group"
                  >
                    <div>
                      {/* Top Bar: Kid name & time */}
                      <div className="flex items-center justify-between gap-2 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full ring-1 ring-white/50"
                            style={{ backgroundColor: mem?.color || "#6366F1" }}
                          />
                          <span className="text-xs font-black text-slate-900 dark:text-white">
                            {proof.kidName}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {proof.dateKey} • {formattedTime}
                        </span>
                      </div>

                      {/* Photo Thumbnail */}
                      <div className="relative rounded-xl overflow-hidden bg-slate-950 h-36 flex items-center justify-center border border-slate-200/50 dark:border-slate-700">
                        <img
                          src={proof.url}
                          alt={proof.taskTitle}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {proof.verified && (
                          <div className="absolute top-2 right-2 bg-emerald-600 text-white p-1 rounded-lg shadow-sm">
                            <Star className="w-3.5 h-3.5 fill-white" />
                          </div>
                        )}
                      </div>

                      {/* Task title & note */}
                      <div className="mt-2.5">
                        <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 truncate">
                          {proof.taskTitle}
                        </h4>
                        {proof.note && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 italic truncate mt-0.5">
                            "{proof.note}"
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-750 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 group-hover:underline">
                        <span>View Full</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>

                      {!proof.verified ? (
                        <button
                          type="button"
                          onClick={(e) => handleQuickApprove(proof, e)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[11px] transition flex items-center gap-1 shadow-2xs cursor-pointer"
                        >
                          <Star className="w-3 h-3 fill-white" />
                          <span>Approve ⭐</span>
                        </button>
                      ) : (
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Approved
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-5 rounded-2xl font-bold text-xs bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
