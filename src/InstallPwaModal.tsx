// Modal & Banner for Installing the Chores Hub PWA App
import React, { useState } from "react";
import {
  Smartphone,
  Download,
  Share,
  PlusSquare,
  X,
  Sparkles,
  CheckCircle2,
  Check,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import {
  isIOS,
  isAndroid,
  isStandalone,
  promptPwaInstall
} from "./pwaManager";

interface InstallPwaModalProps {
  onClose: () => void;
}

export const InstallPwaModal: React.FC<InstallPwaModalProps> = ({ onClose }) => {
  const [installing, setInstalling] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);
  const onIOS = isIOS();
  const onAndroid = isAndroid();

  const handleInstallClick = async () => {
    setInstalling(true);
    try {
      const outcome = await promptPwaInstall();
      if (outcome === "accepted") {
        setInstalledSuccess(true);
        setTimeout(() => onClose(), 2500);
      }
    } finally {
      setInstalling(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
              <Smartphone className="w-5 h-5 text-indigo-100" />
            </div>
            <div>
              <h3 className="text-base font-extrabold leading-tight">Install Chores App</h3>
              <p className="text-xs text-indigo-100">Add to your Phone&apos;s Home Screen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-black/15 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs">
          {/* App Preview Card */}
          <div className="flex items-center gap-3.5 p-3.5 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50 rounded-2xl border border-indigo-100 shadow-2xs">
            <img
              src="/icon.svg"
              alt="Chores Hub App Icon"
              className="w-14 h-14 rounded-2xl shadow-sm shrink-0"
            />
            <div className="space-y-0.5">
              <div className="font-extrabold text-sm text-slate-900 leading-tight">
                Weekly Chores Hub
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Family &bull; Kid Mode &bull; Real-time Sync
              </div>
              <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 pt-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Fast &bull; Full Screen &bull; Offline Ready</span>
              </div>
            </div>
          </div>

          {installedSuccess ? (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-sm text-emerald-900">App Installed Successfully!</div>
              <p className="text-xs text-emerald-700">
                You can now open Weekly Chores directly from your phone&apos;s home screen.
              </p>
            </div>
          ) : onIOS ? (
            /* iOS Safari Instructions */
            <div className="space-y-3">
              <div className="text-slate-700 font-semibold text-xs">
                To install on your iPhone or iPad:
              </div>
              <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div className="text-slate-700 leading-snug">
                    Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 inline mx-0.5 text-indigo-600" /> at the bottom of Safari.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div className="text-slate-700 leading-snug">
                    Scroll down and tap <strong>&quot;Add to Home Screen&quot;</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-indigo-600" />.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div className="text-slate-700 leading-snug">
                    Tap <strong>Add</strong> in the top-right corner. Done!
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition cursor-pointer text-center text-xs"
              >
                Got It
              </button>
            </div>
          ) : (
            /* Android / Chrome One-Tap Install */
            <div className="space-y-3">
              <div className="space-y-1.5 text-slate-600 text-xs leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Why install as an app?</span>
                </div>
                <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-600">
                  <li>Opens in <strong>full screen</strong> without the browser address bar</li>
                  <li>Instant 1-tap launch from your home screen</li>
                  <li>Faster chore check-offs for Sydney, Cadence &amp; Mason</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleInstallClick}
                disabled={installing}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold rounded-2xl shadow-sm transition flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-100" />
                <span>{installing ? "Opening Install Dialog..." : "Install Chores App (1-Tap)"}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-1 text-slate-400 hover:text-slate-600 text-[11px] text-center font-medium"
              >
                Maybe later
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

