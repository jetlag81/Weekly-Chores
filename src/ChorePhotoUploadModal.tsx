// Minion Chore Photo Proof Upload & Camera Capture Modal
// Allows kids to snap a picture of their completed chore, add an optional note,
// and transmit it directly to the Parent Command Hub with celebratory effects.

import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import {
  Camera,
  Image as ImageIcon,
  X,
  CheckCircle2,
  Sparkles,
  Upload,
  RefreshCw,
  Send,
  Loader2
} from "lucide-react";
import { compressImageFile, type ChorePhotoProof } from "./chorePhotoTypes";
import { playChoreCompletionSound } from "./firebaseSync";
import { playHouseholdRemoteChime } from "./activityFeed";

export interface ChorePhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  kidName: string;
  taskTitle: string;
  choreIndex: number;
  dateKey: string;
  existingProof?: ChorePhotoProof | null;
  onSubmitProof: (proof: ChorePhotoProof) => void;
}

export const ChorePhotoUploadModal: React.FC<ChorePhotoUploadModalProps> = ({
  isOpen,
  onClose,
  kidName,
  taskTitle,
  choreIndex,
  dateKey,
  existingProof,
  onSubmitProof
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(existingProof?.url || "");
  const [note, setNote] = useState<string>(existingProof?.note || "");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image format
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select a valid picture file.");
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);
    setIsProcessing(true);

    try {
      // Compress and preview
      const compressedDataUrl = await compressImageFile(file, 960, 0.78);
      setPreviewUrl(compressedDataUrl);
    } catch (err) {
      console.error("Compression error:", err);
      // Fallback to object URL
      setPreviewUrl(URL.createObjectURL(file));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewUrl) {
      setErrorMessage("Please take a photo or select an image first.");
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      let finalDataUrl = previewUrl;

      // If a new file was chosen, re-compress to ensure optimal quality and size
      if (selectedFile) {
        finalDataUrl = await compressImageFile(selectedFile, 960, 0.78);
      }

      const proof: ChorePhotoProof = {
        id: existingProof?.id || `proof-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        url: finalDataUrl,
        timestamp: Date.now(),
        kidName,
        taskTitle,
        dateKey,
        choreIndex,
        note: note.trim() || undefined,
        verified: false,
        redoRequested: false
      };

      // Confetti burst
      try {
        confetti({
          particleCount: 50,
          spread: 65,
          origin: { y: 0.65 }
        });
      } catch {}

      // Audio celebration
      playChoreCompletionSound();
      playHouseholdRemoteChime();

      onSubmitProof(proof);
      onClose();
    } catch (err) {
      console.error("Error submitting chore photo proof:", err);
      setErrorMessage("Failed to process image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-inner">
              <Camera className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="font-black text-sm sm:text-base text-white truncate">
                  Send Photo Proof
                </h3>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  {kidName}
                </span>
              </div>
              <p className="text-xs text-indigo-100 font-semibold truncate mt-0.5">
                {taskTitle}
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

        {/* Hidden Camera & File Inputs */}
        <input
          type="file"
          ref={cameraInputRef}
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="hidden"
        />
        <input
          type="file"
          ref={galleryInputRef}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold">
              {errorMessage}
            </div>
          )}

          {/* Photo Capture & Preview Area */}
          <div className="space-y-3">
            {previewUrl ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 bg-slate-950 shadow-inner group">
                <img
                  src={previewUrl}
                  alt={`Proof of ${taskTitle}`}
                  className="w-full max-h-72 object-contain mx-auto bg-slate-900"
                />

                {/* Retake / Change Button overlay */}
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-xs transition cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Retake</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => galleryInputRef.current?.click()}
                    className="px-2.5 py-1.5 rounded-xl bg-black/75 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-xs transition cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Gallery</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-200">
                    Snap a photo of your completed chore!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                    Show Thom &amp; Meghan your great work to earn approval stars and keep the streak going.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                    <span>Take Photo 📷</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => galleryInputRef.current?.click()}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-extrabold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Choose Picture 🖼️</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Optional Caption / Note */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Add a note for Mom &amp; Dad (optional):</span>
              <span className="text-[10px] text-slate-400 font-normal">Optional</span>
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Counters wiped and dishes put away! ✨"
              className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-medium"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2">
            <button
              type="submit"
              disabled={!previewUrl || isProcessing}
              className={`flex-1 py-3 px-4 rounded-2xl font-black text-xs transition flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
                previewUrl && !isProcessing
                  ? "bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white"
                  : "bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send to Parents 📸🚀</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 rounded-2xl font-bold text-xs bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
