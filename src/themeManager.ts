// Theme Management Service (System, Light, Dark)
// Supports System (Default), Light, and Dark modes with instant cross-tab synchronization,
// media query auto-detection, PWA status bar styling, and zero-flash initialization.

export type ThemeMode = "system" | "light" | "dark";
export type AppColorPalette = "plum-coral" | "warm-terracotta" | "deep-forest" | "classic-slate";

export const STORAGE_KEY_THEME = "weekly_chores_theme_mode_v1";
export const STORAGE_KEY_PALETTE = "weekly_chores_color_palette_v1";

export interface ColorPaletteOption {
  id: AppColorPalette;
  name: string;
  subtitle: string;
  canvasHex: string;
  surfaceHex: string;
  accentHex: string;
  secondaryHex: string;
}

export const COLOR_PALETTES: ColorPaletteOption[] = [
  {
    id: "plum-coral",
    name: "Midnight Plum & Coral",
    subtitle: "Playful night canvas with coral & cyan",
    canvasHex: "#13111C",
    surfaceHex: "#1C1829",
    accentHex: "#F43F5E",
    secondaryHex: "#22D3EE"
  },
  {
    id: "warm-terracotta",
    name: "Warm Charcoal & Terracotta",
    subtitle: "Cozy obsidian with terracotta & sage",
    canvasHex: "#121417",
    surfaceHex: "#1C1F24",
    accentHex: "#E07A5F",
    secondaryHex: "#14B8A6"
  },
  {
    id: "deep-forest",
    name: "Deep Forest & Warm Gold",
    subtitle: "Grounded pine with emerald & honey gold",
    canvasHex: "#0D1514",
    surfaceHex: "#14211F",
    accentHex: "#10B981",
    secondaryHex: "#F59E0B"
  },
  {
    id: "classic-slate",
    name: "Classic Slate & Indigo",
    subtitle: "Original cool slate & indigo theme",
    canvasHex: "#0F172A",
    surfaceHex: "#1E293B",
    accentHex: "#6366F1",
    secondaryHex: "#38BDF8"
  }
];

export function getStoredColorPalette(): AppColorPalette {
  if (typeof window === "undefined") return "plum-coral";
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PALETTE);
    if (
      raw === "plum-coral" ||
      raw === "warm-terracotta" ||
      raw === "deep-forest" ||
      raw === "classic-slate"
    ) {
      return raw;
    }
    return "plum-coral";
  } catch {
    return "plum-coral";
  }
}

export function applyColorPalette(palette?: AppColorPalette): AppColorPalette {
  const active = palette || getStoredColorPalette();
  if (typeof document === "undefined") return active;
  document.documentElement.dataset.palette = active;
  const option = COLOR_PALETTES.find(p => p.id === active) || COLOR_PALETTES[0];
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme && document.documentElement.classList.contains("dark")) {
    metaTheme.setAttribute("content", option.canvasHex);
  }
  return active;
}

export function setColorPalette(palette: AppColorPalette): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_PALETTE, palette);
    applyColorPalette(palette);
    window.dispatchEvent(new CustomEvent("household_palette_updated", { detail: palette }));
  } catch (err) {
    console.warn("Could not save color palette:", err);
  }
}

/**
 * Returns the stored theme preference ("system", "light", or "dark").
 * Defaults to "dark" as requested.
 */
export function getStoredThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  try {
    const raw = localStorage.getItem(STORAGE_KEY_THEME);
    if (raw === "light" || raw === "dark" || raw === "system") {
      return raw;
    }
    return "dark";
  } catch {
    return "dark";
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
  if (typeof document === "undefined") return "dark";
  const m = mode || getStoredThemeMode();
  const effective = getEffectiveTheme(m);
  const root = document.documentElement;

  if (effective === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Update mobile status bar theme color & active colour palette
  const activePalette = applyColorPalette();
  const paletteObj = COLOR_PALETTES.find(p => p.id === activePalette) || COLOR_PALETTES[0];
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", effective === "dark" ? paletteObj.canvasHex : "#002060");
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

