// Mobile Web App "Press Back Again to Exit" Toast
// Displays a sleek, floating animated pill when the back button is pressed on root views.

import React from "react";
import { ArrowLeft } from "lucide-react";

interface BackToExitToastProps {
  visible: boolean;
  message?: string;
}

export const BackToExitToast: React.FC<BackToExitToastProps> = ({
  visible,
  message = "Press back again to exit"
}) => {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 sm:bottom-12 left-1/2 -translate-x-1/2 z-[99999] pointer-events-none transition-all duration-200 ease-out transform animate-fade-in"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), var(--safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex items-center gap-3 px-5 py-3 bg-slate-950/95 dark:bg-slate-900/95 text-white border-2 border-amber-400 dark:border-amber-400 rounded-full shadow-2xl backdrop-blur-md">
        <ArrowLeft className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
        <span className="text-sm font-extrabold tracking-wide text-slate-100 whitespace-nowrap">
          {message}
        </span>
      </div>
    </div>
  );
};

