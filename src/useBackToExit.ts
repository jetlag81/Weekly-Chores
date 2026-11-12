// Universal "Press Back Again to Exit" Hook
// Supports both Native Mobile (Capacitor on Android / iOS) and Web Browsers / PWAs:
// 1. In Native Android/iOS: Uses native Capacitor App.addListener('backButton') with App.exitApp().
//    This gives 100% deterministic, instant control over the physical Android back button.
// 2. In Web Browser / PWA: Uses standard popstate history fallback.

import { useState, useEffect, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import { App as CapApp } from "@capacitor/app";

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

    // =========================================================================
    // 1. Native Mobile Platform (Android / iOS via Capacitor)
    // =========================================================================
    if (Capacitor.isNativePlatform()) {
      let isSubscribed = true;

      const setupNativeBack = async () => {
        const handle = await CapApp.addListener("backButton", () => {
          if (!isSubscribed) return;

          // 1. If any modal, drawer, or sheet is open, close it first
          if (onCloseOpenModalsRef.current) {
            try {
              const handled = onCloseOpenModalsRef.current();
              if (handled) {
                setShowExitToast(false);
                exitArmedRef.current = false;
                if (timerRef.current) clearTimeout(timerRef.current);
                return;
              }
            } catch (err) {
              console.warn("Error dismissing modal on native back:", err);
            }
          }

          // 2. User is on root view with no modal open
          if (exitArmedRef.current) {
            // Second press within window -> NATIVE EXIT!
            exitArmedRef.current = false;
            setShowExitToast(false);
            if (timerRef.current) clearTimeout(timerRef.current);
            CapApp.exitApp();
            return;
          }

          // First press: arm exit state and show toast
          exitArmedRef.current = true;
          setShowExitToast(true);

          if (typeof navigator !== "undefined" && "vibrate" in navigator) {
            try { navigator.vibrate(40); } catch {}
          }

          if (timerRef.current) clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            exitArmedRef.current = false;
            setShowExitToast(false);
          }, timeoutMs);
        });

        return handle;
      };

      const handlePromise = setupNativeBack();

      return () => {
        isSubscribed = false;
        handlePromise.then(h => h.remove()).catch(() => {});
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    // =========================================================================
    // 2. Web Browser & PWA Fallback (popstate)
    // =========================================================================
    let isExiting = false;

    // Push initial guard state
    try {
      window.history.pushState({ choresGuard: true, ts: Date.now() }, "", window.location.href);
    } catch {}

    const armOnFirstGesture = () => {
      if (isExiting) return;
      try {
        window.history.pushState({ choresGuard: true, ts: Date.now() }, "", window.location.href);
      } catch {}
    };

    window.addEventListener("pointerdown", armOnFirstGesture, { once: true, capture: true, passive: true });
    window.addEventListener("touchstart", armOnFirstGesture, { once: true, capture: true, passive: true });
    window.addEventListener("click", armOnFirstGesture, { once: true, capture: true, passive: true });
    window.addEventListener("scroll", armOnFirstGesture, { once: true, capture: true, passive: true });

    const handlePopState = () => {
      if (isExiting) return;

      // 1. If any modal, drawer, or sheet is open, close it first
      if (onCloseOpenModalsRef.current) {
        try {
          const handled = onCloseOpenModalsRef.current();
          if (handled) {
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

        window.history.back();
        return;
      }

      // First press: arm exit state and show toast
      exitArmedRef.current = true;
      setShowExitToast(true);

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
      window.removeEventListener("pointerdown", armOnFirstGesture);
      window.removeEventListener("touchstart", armOnFirstGesture);
      window.removeEventListener("click", armOnFirstGesture);
      window.removeEventListener("scroll", armOnFirstGesture);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [enabled, timeoutMs]);

  return {
    showExitToast,
    message
  };
}
