// Dropdown Calendar Date Picker with Automatic Slash Formatting & Quick Month/Day/Year Selectors
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

  // Parse existing value parts if available
  const parsedDate = React.useMemo(() => {
    if (!value) return null;
    const parts = value.split("-").map(Number);
    if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
      return { year: parts[0], month: parts[1] - 1, day: parts[2] };
    }
    return null;
  }, [value]);

  // Active view date for calendar navigation
  const [viewYear, setViewYear] = useState(() => {
    if (parsedDate) return parsedDate.year;
    return new Date().getFullYear() - 12; // default to sensible youth/teen year
  });

  const [viewMonth, setViewMonth] = useState(() => {
    if (parsedDate) return parsedDate.month;
    return new Date().getMonth();
  });

  const [selectedDay, setSelectedDay] = useState<number | null>(() => {
    return parsedDate ? parsedDate.day : null;
  });

  // Keep display and view state in sync when prop `value` changes
  useEffect(() => {
    const formatted = isoToDisplayDate(value);
    setTextValue(formatted);
    if (parsedDate) {
      setViewYear(parsedDate.year);
      setViewMonth(parsedDate.month);
      setSelectedDay(parsedDate.day);
    } else {
      setSelectedDay(null);
    }
  }, [value, parsedDate]);

  // Click outside listener to close dropdown
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Apply a year, month, day selection immediately
  const applyDateSelection = (year: number, month: number, day: number) => {
    const safeDay = Math.min(day, new Date(year, month + 1, 0).getDate());
    const iso = `${String(year).padStart(4, "0")}-${String(month + 1).padStart(2, "0")}-${String(safeDay).padStart(2, "0")}`;
    const display = isoToDisplayDate(iso);
    setTextValue(display);
    setViewYear(year);
    setViewMonth(month);
    setSelectedDay(safeDay);
    onChange(iso);
  };

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
      setSelectedDay(parts[2]);
    } else if (formatted === "") {
      onChange("");
      setSelectedDay(null);
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
    applyDateSelection(cell.year, cell.month, cell.day);
    setIsOpen(false);
  };

  const handleSetToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const now = new Date();
    applyDateSelection(now.getFullYear(), now.getMonth(), now.getDate());
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setTextValue("");
    setSelectedDay(null);
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

  // Generate Day options for currently selected viewMonth & viewYear
  const dayOptions = React.useMemo(() => {
    const daysCount = new Date(viewYear, viewMonth + 1, 0).getDate();
    const list: number[] = [];
    for (let d = 1; d <= daysCount; d++) {
      list.push(d);
    }
    return list;
  }, [viewYear, viewMonth]);

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
          className="w-full py-2.5 pl-3 pr-10 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono text-xs font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 transition shadow-2xs"
        />
        <button
          type="button"
          onClick={() => {
            if (!disabled) setIsOpen(prev => !prev);
          }}
          disabled={disabled}
          className="absolute right-2 p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer disabled:opacity-50"
          title="Open calendar dropdown"
        >
          <CalendarIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Dropdown Calendar Popover */}
      {isOpen && (
        <div
          onMouseDown={e => e.stopPropagation()}
          onTouchStart={e => e.stopPropagation()}
          className="absolute left-0 mt-2 z-50 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3.5 space-y-3 animate-fadeIn"
        >
          {/* Header Controls: Month, Day & Year Select Dropdowns */}
          <div className="flex items-center justify-between gap-1 pb-2 border-b border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer shrink-0"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Quick Dropdown Selectors for Month, Day, and Year */}
            <div className="flex items-center gap-1 min-w-0">
              {/* Month Select */}
              <select
                value={viewMonth}
                onChange={e => {
                  const m = Number(e.target.value);
                  setViewMonth(m);
                  if (selectedDay !== null) {
                    applyDateSelection(viewYear, m, selectedDay);
                  }
                }}
                className="py-1 px-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500 cursor-pointer max-w-[95px] sm:max-w-[110px]"
                title="Select month"
              >
                {MONTH_NAMES.map((mName, idx) => (
                  <option key={mName} value={idx}>
                    {mName}
                  </option>
                ))}
              </select>

              {/* Day Select */}
              <select
                value={selectedDay !== null ? selectedDay : 1}
                onChange={e => {
                  const d = Number(e.target.value);
                  applyDateSelection(viewYear, viewMonth, d);
                }}
                className="py-1 px-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500 cursor-pointer w-12"
                title="Select day"
              >
                {dayOptions.map(dNum => (
                  <option key={dNum} value={dNum}>
                    {dNum}
                  </option>
                ))}
              </select>

              {/* Year Select */}
              <select
                value={viewYear}
                onChange={e => {
                  const y = Number(e.target.value);
                  setViewYear(y);
                  if (selectedDay !== null) {
                    applyDateSelection(y, viewMonth, selectedDay);
                  }
                }}
                className="py-1 px-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500 cursor-pointer w-16"
                title="Select year"
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
              className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer shrink-0"
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
                  onMouseDown={e => {
                    e.stopPropagation();
                    handleSelectDay(cell);
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    handleSelectDay(cell);
                  }}
                  className={`h-8 rounded-lg text-xs font-bold transition flex items-center justify-center relative cursor-pointer select-none ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs font-extrabold"
                      : cell.isCurrentMonth
                      ? "text-slate-800 dark:text-slate-100 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400"
                      : "text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                  } ${isToday && !isSelected ? "ring-1 ring-indigo-400 font-extrabold" : ""}`}
                >
                  <span className="pointer-events-none">{cell.day}</span>
                  {isToday && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-indigo-500 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Controls: Today, Clear & Done */}
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
