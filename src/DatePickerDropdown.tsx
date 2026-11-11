// Dropdown Calendar Date Picker with Automatic Slash Formatting & Quick Month/Year Selectors
// Supports direct MM/DD/YYYY typing (with auto-slash insertion) and interactive dropdown calendar.
// Outputs standard ISO YYYY-MM-DD format for storage and age calculations.

import React, { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Check } from "lucide-react";

interface DatePickerDropdownProps {
  value?: string; // YYYY-MM-DD
  onChange: (isoDate: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  minYear?: number;
  maxYear?: number;
  autoFocus?: boolean;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Convert ISO YYYY-MM-DD -> MM/DD/YYYY
export function isoToDisplayDate(iso: string): string {
  if (!iso) return "";
  const parts = iso.split("-");
  if (parts.length === 3 && parts[0].length === 4) {
    const [y, m, d] = parts;
    return `${m.padStart(2, "0")}/${d.padStart(2, "0")}/${y}`;
  }
  return iso;
}

// Convert MM/DD/YYYY -> ISO YYYY-MM-DD
export function displayDateToIso(display: string): string | null {
  if (!display) return "";
  const cleaned = display.replace(/\D/g, "");
  if (cleaned.length !== 8) return null;
  const m = parseInt(cleaned.slice(0, 2), 10);
  const d = parseInt(cleaned.slice(2, 4), 10);
  const y = parseInt(cleaned.slice(4, 8), 10);

  if (m < 1 || m > 12) return null;
  if (d < 1 || d > 31) return null;
  if (y < 1900 || y > 2100) return null;

  // Basic month day bounds
  const daysInMonth = new Date(y, m, 0).getDate();
  if (d > daysInMonth) return null;

  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

// Automatically format user input with slashes: MM/DD/YYYY
export function formatWithSlashes(input: string): string {
  const digits = input.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) {
    return digits;
  }
  if (digits.length <= 4) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export const DatePickerDropdown: React.FC<DatePickerDropdownProps> = ({
  value = "",
  onChange,
  disabled = false,
  placeholder = "MM/DD/YYYY",
  className = "",
  minYear = 1940,
  maxYear = new Date().getFullYear(),
  autoFocus = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [textValue, setTextValue] = useState(() => isoToDisplayDate(value));
  const containerRef = useRef<HTMLDivElement>(null);

  // Active view date for calendar navigation
  const [viewYear, setViewYear] = useState(() => {
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts[0]) return parts[0];
    }
    return new Date().getFullYear() - 12; // default to sensible youth/teen year
  });

  const [viewMonth, setViewMonth] = useState(() => {
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts[1]) return parts[1] - 1;
    }
    return new Date().getMonth();
  });

  // Sync when prop value changes
  useEffect(() => {
    setTextValue(isoToDisplayDate(value));
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        setViewYear(parts[0]);
        setViewMonth(parts[1] - 1);
      }
    }
  }, [value]);

  // Click outside listener to close dropdown
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle typing with automatic slash assumption
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatWithSlashes(raw);
    setTextValue(formatted);

    const iso = displayDateToIso(formatted);
    if (iso) {
      onChange(iso);
      const parts = iso.split("-").map(Number);
      setViewYear(parts[0]);
      setViewMonth(parts[1] - 1);
    } else if (formatted === "") {
      onChange("");
    }
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => Math.max(minYear, y - 1));
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => Math.min(maxYear, y + 1));
    } else {
      setViewMonth(m => m + 1);
    }
  };

  // Generate calendar days for viewMonth and viewYear
  const calendarCells = React.useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInCurrMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const cells: Array<{
      day: number;
      month: number;
      year: number;
      isCurrentMonth: boolean;
      iso: string;
    }> = [];

    // Prev month padding
    for (let i = firstDay - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      const m = viewMonth === 0 ? 11 : viewMonth - 1;
      const y = viewMonth === 0 ? viewYear - 1 : viewYear;
      const iso = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ day: d, month: m, year: y, isCurrentMonth: false, iso });
    }

    // Current month days
    for (let d = 1; d <= daysInCurrMonth; d++) {
      const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ day: d, month: viewMonth, year: viewYear, isCurrentMonth: true, iso });
    }

    // Next month padding (complete grid of 35 or 42)
    const totalCells = cells.length > 35 ? 42 : 35;
    const remaining = totalCells - cells.length;
    for (let d = 1; d <= remaining; d++) {
      const m = viewMonth === 11 ? 0 : viewMonth + 1;
      const y = viewMonth === 11 ? viewYear + 1 : viewYear;
      const iso = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ day: d, month: m, year: y, isCurrentMonth: false, iso });
    }

    return cells;
  }, [viewYear, viewMonth]);

  const handleSelectDay = (cell: { iso: string; day: number; month: number; year: number }) => {
    onChange(cell.iso);
    setTextValue(isoToDisplayDate(cell.iso));
    setViewYear(cell.year);
    setViewMonth(cell.month);
    setIsOpen(false);
  };

  const handleSetToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const now = new Date();
    const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    onChange(iso);
    setTextValue(isoToDisplayDate(iso));
    setViewYear(now.getFullYear());
    setViewMonth(now.getMonth());
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setTextValue("");
    setIsOpen(false);
  };

  // Generate Year options descending for quick birthday selection
  const yearOptions = React.useMemo(() => {
    const list: number[] = [];
    for (let y = maxYear; y >= minYear; y--) {
      list.push(y);
    }
    return list;
  }, [minYear, maxYear]);

  return (
    <div ref={containerRef} className={`relative inline-block w-full ${className}`}>
      {/* Input Field Bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={textValue}
          onChange={handleInputChange}
          onClick={() => {
            if (!disabled) setIsOpen(true);
          }}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={10}
          autoFocus={autoFocus}
          className="w-full py-2.5 pl-3 pr-10 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition"
        />
        <button
          type="button"
          onClick={() => {
            if (!disabled) setIsOpen(prev => !prev);
          }}
          disabled={disabled}
          className="absolute right-2 p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer disabled:opacity-50"
          title="Open calendar picker"
        >
          <CalendarIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Dropdown Calendar Popover */}
      {isOpen && (
        <div className="absolute left-0 mt-2 z-50 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3.5 space-y-3 animate-fadeIn">
          {/* Header Controls: Month & Year Dropdowns */}
          <div className="flex items-center justify-between gap-1 pb-2 border-b border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Month & Year Selects */}
            <div className="flex items-center gap-1.5 min-w-0">
              <select
                value={viewMonth}
                onChange={e => setViewMonth(Number(e.target.value))}
                className="py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500 cursor-pointer"
              >
                {MONTH_NAMES.map((mName, idx) => (
                  <option key={mName} value={idx}>
                    {mName}
                  </option>
                ))}
              </select>

              <select
                value={viewYear}
                onChange={e => setViewYear(Number(e.target.value))}
                className="py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500 cursor-pointer"
              >
                {yearOptions.map(yr => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Weekday Row */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {DAYS_OF_WEEK.map(dName => (
              <span
                key={dName}
                className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"
              >
                {dName}
              </span>
            ))}
          </div>

          {/* Day Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarCells.map(cell => {
              const isSelected = cell.iso === value;
              const isToday =
                cell.iso ===
                `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;

              return (
                <button
                  key={cell.iso}
                  type="button"
                  onClick={() => handleSelectDay(cell)}
                  className={`h-8 rounded-lg text-xs font-bold transition flex items-center justify-center relative cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs font-extrabold"
                      : cell.isCurrentMonth
                      ? "text-slate-800 dark:text-slate-100 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400"
                      : "text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                  } ${isToday && !isSelected ? "ring-1 ring-indigo-400 font-extrabold" : ""}`}
                >
                  <span>{cell.day}</span>
                  {isToday && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-indigo-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Controls: Today & Clear */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleClear}
              className="text-[11px] font-semibold text-rose-500 hover:text-rose-700 px-2 py-1 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
            >
              Clear
            </button>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleSetToday}
                className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline px-2 py-1 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition cursor-pointer"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-2.5 py-1 bg-slate-900 dark:bg-slate-800 text-white rounded-lg text-[11px] font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
