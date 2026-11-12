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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none transition-all duration-200 ease-out transform animate-fade-in"
    >
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/95 dark:bg-slate-800/95 text-white border border-slate-700/80 dark:border-slate-600/80 rounded-full shadow-2xl backdrop-blur-md">
        <ArrowLeft className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
        <span className="text-xs font-bold tracking-wide text-slate-100 whitespace-nowrap">
          {message}
        </span>
      </div>
    </div>
  );
};
