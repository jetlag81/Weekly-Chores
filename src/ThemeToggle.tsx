// Theme Selector & Toggle Component (System, Light, Dark)
// Provides touch-friendly, accessible switching between System (Default), Light, and Dark themes.

import React, { useState, useEffect } from "react";
import { Sun, Moon, Laptop, ChevronDown } from "lucide-react";
import {
  type ThemeMode,
  getStoredThemeMode,
  setThemeMode,
  getEffectiveTheme,
  subscribeTheme
} from "./themeManager";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "dropdown" | "compact";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  variant = "pill"
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => getStoredThemeMode());
  const [effective, setEffective] = useState<"light" | "dark">(() => getEffectiveTheme());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initial sync
    setMode(getStoredThemeMode());
    setEffective(getEffectiveTheme());

    // Subscribe to external/OS changes
    const unsubscribe = subscribeTheme((eff, newMode) => {
      setEffective(eff);
      setMode(newMode);
    });

    return unsubscribe;
  }, []);

  const handleSelectMode = (newMode: ThemeMode) => {
    setThemeMode(newMode);
    setMode(newMode);
    setEffective(getEffectiveTheme(newMode));
    setIsOpen(false);
  };

  // 1. Compact 3-way segmented pill selector
  if (variant === "pill") {
    return (
      <div
        className={`inline-flex items-center bg-slate-200/80 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-300 dark:border-slate-700 shadow-inner ${className}`}
        role="group"
        aria-label="Theme selection"
      >
        {/* Light */}
        <button
          type="button"
          onClick={() => handleSelectMode("light")}
          className={`flex-1 justify-center px-2 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
            mode === "light"
              ? "bg-white text-amber-600 shadow-xs dark:bg-slate-700 dark:text-amber-400"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
          title="Light Theme"
        >
          <Sun className="w-3.5 h-3.5" />
          <span>Light</span>
        </button>

        {/* System (Default) */}
        <button
          type="button"
          onClick={() => handleSelectMode("system")}
          className={`flex-1 justify-center px-2 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
            mode === "system"
              ? "bg-white text-indigo-600 shadow-xs dark:bg-slate-700 dark:text-indigo-400"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
          title="Auto / System Theme (Matches device settings)"
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>System</span>
        </button>

        {/* Dark */}
        <button
          type="button"
          onClick={() => handleSelectMode("dark")}
          className={`flex-1 justify-center px-2 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
            mode === "dark"
              ? "bg-white text-indigo-400 shadow-xs dark:bg-slate-900 dark:text-indigo-300"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
          title="Dark Theme"
        >
          <Moon className="w-3.5 h-3.5" />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  // 2. Compact single-tap cycling button
  if (variant === "compact") {
    const cycleNext = () => {
      if (mode === "dark") handleSelectMode("light");
      else if (mode === "light") handleSelectMode("system");
      else handleSelectMode("dark");
    };

    return (
      <button
        type="button"
        onClick={cycleNext}
        className={`w-8 h-8 sm:w-auto p-2 sm:px-2.5 sm:py-1.5 rounded-xl border transition flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer shadow-2xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 ${className}`}
        title={`Theme: ${mode.toUpperCase()} (Click to toggle Dark/Light/Auto)`}
      >
        {mode === "system" ? (
          <>
            <Laptop className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-indigo-500" />
            <span className="hidden sm:inline">Auto</span>
          </>
        ) : mode === "light" ? (
          <>
            <Sun className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Light</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Dark</span>
          </>
        )}
      </button>
    );
  }

  // 3. Dropdown Menu Variant
  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition"
      >
        {mode === "system" ? (
          <Laptop className="w-3.5 h-3.5 text-indigo-500" />
        ) : mode === "light" ? (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
        )}
        <span className="capitalize">{mode}</span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 z-40 w-36 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-1.5 space-y-0.5">
            <button
              type="button"
              onClick={() => handleSelectMode("system")}
              className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between transition cursor-pointer ${
                mode === "system"
                  ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5" />
                <span>System</span>
              </div>
              {mode === "system" && <span className="text-[10px]">✓</span>}
            </button>

            <button
              type="button"
              onClick={() => handleSelectMode("light")}
              className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between transition cursor-pointer ${
                mode === "light"
                  ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </div>
              {mode === "light" && <span className="text-[10px]">✓</span>}
            </button>

            <button
              type="button"
              onClick={() => handleSelectMode("dark")}
              className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center justify-between transition cursor-pointer ${
                mode === "dark"
                  ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </div>
              {mode === "dark" && <span className="text-[10px]">✓</span>}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

