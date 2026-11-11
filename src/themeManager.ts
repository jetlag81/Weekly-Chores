// Theme Management Service (System, Light, Dark)
// Supports System (Default), Light, and Dark modes with instant cross-tab synchronization,
// media query auto-detection, PWA status bar styling, and zero-flash initialization.

export type ThemeMode = "system" | "light" | "dark";

export const STORAGE_KEY_THEME = "weekly_chores_theme_mode_v1";

/**
 * Returns the stored theme preference ("system", "light", or "dark").
 * Defaults to "system" as requested.
 */
export function getStoredThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  try {
    const raw = localStorage.getItem(STORAGE_KEY_THEME);
    if (raw === "light" || raw === "dark" || raw === "system") {
      return raw;
    }
    return "system";
  } catch {
    return "system";
  }
}

/**
 * Returns the current system OS color scheme preference.
 */
export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Resolves the effective theme ("light" or "dark") based on mode.
 */
export function getEffectiveTheme(mode?: ThemeMode): "light" | "dark" {
  const m = mode || getStoredThemeMode();
  if (m === "system") {
    return getSystemTheme();
  }
  return m;
}

/**
 * Applies the effective theme class to <html> and updates meta theme-color.
 */
export function applyTheme(mode?: ThemeMode): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  const m = mode || getStoredThemeMode();
  const effective = getEffectiveTheme(m);
  const root = document.documentElement;

  if (effective === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Update mobile status bar theme color
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", effective === "dark" ? "#0F172A" : "#002060");
  }

  return effective;
}

/**
 * Persists the user's theme selection and broadcasts across open tabs.
 */
export function setThemeMode(mode: ThemeMode): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_THEME, mode);
    applyTheme(mode);

    // Broadcast across windows / tabs
    if ("BroadcastChannel" in window) {
      try {
        const bc = new BroadcastChannel("weekly_chores_broadcast_v1");
        bc.postMessage({
          type: "THEME_CHANGED",
          mode,
          effective: getEffectiveTheme(mode),
          timestamp: Date.now()
        });
      } catch {}
    }
  } catch (err) {
    console.warn("Could not save theme preference:", err);
  }
}

/**
 * Subscribes to theme changes (user toggles or OS system dark mode changes).
 */
export function subscribeTheme(
  callback: (effective: "light" | "dark", mode: ThemeMode) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const handleMediaChange = () => {
    const currentMode = getStoredThemeMode();
    if (currentMode === "system") {
      const eff = applyTheme("system");
      callback(eff, "system");
    }
  };

  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY_THEME) {
      const newMode = (e.newValue as ThemeMode) || "system";
      const eff = applyTheme(newMode);
      callback(eff, newMode);
    }
  };

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", handleMediaChange);
  } else {
    mediaQuery.addListener(handleMediaChange);
  }

  window.addEventListener("storage", handleStorageChange);

  let bc: BroadcastChannel | null = null;
  if ("BroadcastChannel" in window) {
    try {
      bc = new BroadcastChannel("weekly_chores_broadcast_v1");
      bc.onmessage = (event) => {
        if (event.data?.type === "THEME_CHANGED") {
          const eff = applyTheme(event.data.mode);
          callback(eff, event.data.mode);
        }
      };
    } catch {}
  }

  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener("change", handleMediaChange);
    } else {
      mediaQuery.removeListener(handleMediaChange);
    }
    window.removeEventListener("storage", handleStorageChange);
    if (bc) {
      bc.close();
    }
  };
}
