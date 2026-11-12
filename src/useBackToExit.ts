// Mobile Web App "Press Back Again to Exit" Hook
// Production-grade, deterministic state-machine for mobile back navigation.
// Guarantees reliable 1st-press toast prompt and 2nd-press exit across Android & iOS browsers/PWAs.

import { useState, useEffect, useRef } from "react";

export interface UseBackToExitOptions {
  /**
   * Called when back button/gesture is detected while modals/drawers might be open.
   * Return true if an open modal was closed, preventing the exit prompt.
   */
  onCloseOpenModals?: () => boolean;

  /**
   * Custom toast message (default: "Press back again to exit")
   */
  message?: string;

  /**
   * Time window in milliseconds to register the second back press (default: 3000ms)
   */
  timeoutMs?: number;

  /**
   * Whether the back-to-exit handler is active (default: true)
   */
  enabled?: boolean;
}

export function useBackToExit({
  onCloseOpenModals,
  message = "Press back again to exit",
  timeoutMs = 3000,
  enabled = true
}: UseBackToExitOptions = {}) {
  const [showExitToast, setShowExitToast] = useState(false);
  const exitArmedRef = useRef(false);
  const timerRef = useRef<any>(null);
  const onCloseOpenModalsRef = useRef(onCloseOpenModals);

  useEffect(() => {
    onCloseOpenModalsRef.current = onCloseOpenModals;
  }, [onCloseOpenModals]);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    let isExiting = false;

    // Push initial guard state so the browser has a history entry to pop from
    try {
      window.history.pushState({ choresGuard: true, ts: Date.now() }, "", window.location.href);
    } catch {}

    const handlePopState = () => {
      if (isExiting) return;

      // 1. If any modal, drawer, or sheet is open, close it first
      if (onCloseOpenModalsRef.current) {
        try {
          const handled = onCloseOpenModalsRef.current();
          if (handled) {
            // Restore guard for next back press
            try {
              window.history.pushState({ choresGuard: true, ts: Date.now() }, "", window.location.href);
            } catch {}
            setShowExitToast(false);
            exitArmedRef.current = false;
            if (timerRef.current) clearTimeout(timerRef.current);
            return;
          }
        } catch (err) {
          console.warn("Error dismissing modal on back:", err);
        }
      }

      // 2. User is on root view with no modal open
      if (exitArmedRef.current) {
        // SECOND PRESS CONFIRMED! EXIT APP NOW!
        isExiting = true;
        exitArmedRef.current = false;
        setShowExitToast(false);
        if (timerRef.current) clearTimeout(timerRef.current);

        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
          try { navigator.vibrate([60, 40, 60]); } catch {}
        }

        try {
          window.close();
        } catch {}

        // Unwind the landing entry to exit the site/tab/PWA
        window.history.back();
        return;
      }

      // FIRST PRESS: Arm the exit state and show toast
      exitArmedRef.current = true;
      setShowExitToast(true);

      // Immediately push a fresh guard so the browser can catch the SECOND back press
      try {
        window.history.pushState({ choresGuard: true, ts: Date.now() }, "", window.location.href);
      } catch {}

      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try { navigator.vibrate(40); } catch {}
      }

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        exitArmedRef.current = false;
        setShowExitToast(false);
      }, timeoutMs);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [enabled, timeoutMs]);

  return {
    showExitToast,
    message
  };
}
