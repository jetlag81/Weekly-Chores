// Mobile Web App "Press Back Again to Exit" Hook
// Production-grade hash-guard strategy for mobile browsers (Android Chrome, Samsung Internet, iOS Safari, PWA):
// 1. Employs a URL fragment guard (#app) so mobile browser history intervention never ignores/skips back navigation.
// 2. Dual-listens to both `popstate` and `hashchange` with touch-activation re-priming.
// 3. Closes active modals/drawers first on back press.
// 4. Prompts with high-contrast floating toast "Press back again to exit" when on root view.
// 5. Exits cleanly on second back press within 2000ms.

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

const HASH_GUARD = "#app";

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
  const isHandlingRef = useRef<boolean>(false);
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

    const getBaseUrl = () => {
      return window.location.pathname + window.location.search;
    };

    // Re-pushes the hash guard so the next back button press can be captured
    const pushGuard = () => {
      if (isExiting) return;
      try {
        const base = getBaseUrl();
        if (window.location.hash !== HASH_GUARD) {
          window.history.pushState({ choresHubGuard: true, ts: Date.now() }, "", base + HASH_GUARD);
        }
      } catch {}
    };

    // Prime the history stack with [Base, Base#app]
    try {
      const base = getBaseUrl();
      if (window.location.hash !== HASH_GUARD) {
        window.history.replaceState({ choresBase: true }, "", base);
        window.history.pushState({ choresHubGuard: true, ts: Date.now() }, "", base + HASH_GUARD);
      } else {
        // If loaded directly with #app, synthesize base entry before it
        window.history.replaceState({ choresBase: true }, "", base);
        window.history.pushState({ choresHubGuard: true, ts: Date.now() }, "", base + HASH_GUARD);
      }
    } catch {}

    // User touch interaction ensures hash guard stays primed even after in-app touches
    const handleUserInteraction = () => {
      if (isExiting) return;
      if (window.location.hash !== HASH_GUARD) {
        pushGuard();
      }
    };

    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("pointerdown", handleUserInteraction, { passive: true });
    window.addEventListener("click", handleUserInteraction, { passive: true });

    // Handle back navigation (both popstate and hashchange)
    const handleBackNavigation = () => {
      if (isExiting) return;

      // Debounce duplicate events fired in same tick (e.g. popstate + hashchange)
      if (isHandlingRef.current) return;
      isHandlingRef.current = true;
      setTimeout(() => {
        isHandlingRef.current = false;
      }, 120);

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
          try { navigator.vibrate([60, 40, 60]); } catch {}
        }

        try {
          window.close();
        } catch {}

        // We are currently at base URL (without hash).
        // Navigating back once more pops out of the app.
        window.history.back();
        return;
      }

      // First press: prevent immediate exit, show toast, and re-prime hash guard
      lastBackPressRef.current = now;
      pushGuard();
      setShowExitToast(true);

      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try { navigator.vibrate(40); } catch {}
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setShowExitToast(false);
        lastBackPressRef.current = 0;
      }, timeoutMs);
    };

    window.addEventListener("popstate", handleBackNavigation);
    window.addEventListener("hashchange", handleBackNavigation);

    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
      window.removeEventListener("hashchange", handleBackNavigation);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
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
