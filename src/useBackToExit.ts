// Mobile Web App "Press Back Again to Exit" Hook
// Manages browser popstate history to intercept back button/gestures:
// 1. Closes active modals/drawers first if any are open.
// 2. Prompts with "Press back again to exit" toast if at root view.
// 3. Exits cleanly if pressed a second time within the timeout window (2000ms).

import { useState, useEffect, useRef } from "react";

export interface UseBackToExitOptions {
  /**
   * Called when back button/gesture is detected while modals/drawers might be open.
   * Return true if an open modal was closed, preventing the exit prompt.
   */
  onCloseOpenModals?: () => boolean;

  /**
   * Optional custom back action before exiting (e.g. exit Minion view back to Parent Hub).
   * Return true if handled.
   */
  onCustomBackAction?: () => boolean;

  /**
   * Custom toast message (default: "Press back again to exit")
   */
  message?: string;

  /**
   * Time window in milliseconds to register the second back press (default: 2000ms)
   */
  timeoutMs?: number;

  /**
   * Whether the back-to-exit handler is active (default: true)
   */
  enabled?: boolean;
}

export function useBackToExit({
  onCloseOpenModals,
  onCustomBackAction,
  message = "Press back again to exit",
  timeoutMs = 2000,
  enabled = true
}: UseBackToExitOptions = {}) {
  const [showExitToast, setShowExitToast] = useState(false);
  const lastBackPressRef = useRef<number>(0);
  const timerRef = useRef<any>(null);
  const onCloseOpenModalsRef = useRef(onCloseOpenModals);
  const onCustomBackActionRef = useRef(onCustomBackAction);

  useEffect(() => {
    onCloseOpenModalsRef.current = onCloseOpenModals;
  }, [onCloseOpenModals]);

  useEffect(() => {
    onCustomBackActionRef.current = onCustomBackAction;
  }, [onCustomBackAction]);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    let isExiting = false;

    // Push initial guard state to history
    const pushGuard = () => {
      try {
        window.history.pushState({ choresHubGuard: true, ts: Date.now() }, "");
      } catch {}
    };

    pushGuard();

    const handlePopState = () => {
      if (isExiting) return;

      // 1. Close open modal or drawer if active
      if (onCloseOpenModalsRef.current) {
        try {
          const handled = onCloseOpenModalsRef.current();
          if (handled) {
            pushGuard();
            setShowExitToast(false);
            lastBackPressRef.current = 0;
            return;
          }
        } catch (err) {
          console.warn("Error dismissing modal on back:", err);
        }
      }

      // 2. Custom action (e.g. exit Minion mode to Parent Hub)
      if (onCustomBackActionRef.current) {
        try {
          const handled = onCustomBackActionRef.current();
          if (handled) {
            pushGuard();
            setShowExitToast(false);
            lastBackPressRef.current = 0;
            return;
          }
        } catch (err) {
          console.warn("Error in custom back action:", err);
        }
      }

      // 3. User is on root view with no modal: check second press within window
      const now = Date.now();
      const timeSinceLast = now - lastBackPressRef.current;

      if (lastBackPressRef.current > 0 && timeSinceLast < timeoutMs) {
        // Second press: user confirmed exit!
        isExiting = true;
        setShowExitToast(false);
        lastBackPressRef.current = 0;

        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
          try { navigator.vibrate(60); } catch {}
        }

        try {
          window.close();
        } catch {}

        window.history.back();
        return;
      }

      // First press: prevent immediate exit and show toast
      lastBackPressRef.current = now;
      pushGuard();
      setShowExitToast(true);

      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try { navigator.vibrate(35); } catch {}
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setShowExitToast(false);
        lastBackPressRef.current = 0;
      }, timeoutMs);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [enabled, timeoutMs]);

  return {
    showExitToast,
    message
  };
}
