import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  ShieldCheck
} from 'lucide-react';
import {
  DAY_STYLES,
  MONTH_NAMES,
  parseDateKey,
  formatDateKey,
  toFirstName,
  isDescriptionOrPlaceholderText,
  isSignOffChore,
  isKidsChecklistChore,
  isStreamlinedWeeklyTask,
  getChoreFreq,
  getBiWeeklyStatus,
  isLaundryChore
} from './householdTypes';

interface SwipeableScheduleDayViewProps {
  selectedDayIdx: number;
  onSelectDayIdx: (idx: number | ((prev: number) => number)) => void;
  activeSyncWeek: string;
  sheetStartDateStr: string;
  printableScheduleItems: any[];
  choreEdits: any;
  monthSchedule: any;
  isDark: boolean;
  searchQuery: string;
  standardWhoOptions: string[];
  signOffStatus: { done: boolean };
  onUpdateCell: (rowIndex_: number, dayIdx: number, field: "who" | "done", value: any, taskTitle?: string) => void;
  onToggleWeeklyKidChore: (choreIndex: number, kidName: string, taskTitle: string) => void;
  onUpdateSingleWeeklyChore: (choreIndex: number, taskTitle: string, updates: any) => void;
  onOpenInspectionModal: () => void;
  getChoreStatus: (dateKey: string, choreIndex: number, taskTitle?: string) => any;
  getWeeklyKidsStatus: (index_: number, taskTitle: string) => Record<string, boolean>;
  getSingleWeeklyStatus: (index_: number, taskTitle: string) => { who: string; done: boolean };
  getMember: (name: string) => any;
  getMemberBadgeStyle: (member: any, isDark: boolean) => any;
}

export const SwipeableScheduleDayView: React.FC<SwipeableScheduleDayViewProps> = ({
  selectedDayIdx,
  onSelectDayIdx,
  activeSyncWeek,
  sheetStartDateStr,
  printableScheduleItems,
  choreEdits,
  isDark,
  searchQuery,
  standardWhoOptions,
  signOffStatus,
  onUpdateCell,
  onToggleWeeklyKidChore,
  onUpdateSingleWeeklyChore,
  onOpenInspectionModal,
  getChoreStatus,
  getWeeklyKidsStatus,
  getSingleWeeklyStatus,
  getMember,
  getMemberBadgeStyle
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const parsedStart = parseDateKey(activeSyncWeek || sheetStartDateStr) || { year: 2026, month: 9, day: 19 };
  const colDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + selectedDayIdx);
  const colDateKey = formatDateKey(colDate.getFullYear(), colDate.getMonth(), colDate.getDate());
  const activeDayStyle = DAY_STYLES[selectedDayIdx];

  // Filter tasks based on searchQuery
  const dayChoresList = printableScheduleItems.filter(item => {
    if (item.isSectionHeader) return false;
    if (searchQuery && !(item.task || "").toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (isSignOffChore(item.task)) return false;
    return true;
  });

  const dailyItems = dayChoresList.filter(item => !isKidsChecklistChore(item.task || item.row?.[0] || "") && !isStreamlinedWeeklyTask(item.task || item.row?.[0] || "", getChoreFreq(item)));
  const weeklyItems = dayChoresList.filter(item => isKidsChecklistChore(item.task || item.row?.[0] || "") || isStreamlinedWeeklyTask(item.task || item.row?.[0] || "", getChoreFreq(item)));

  const dailyDoneCount = dailyItems.filter(cr => {
    const doneCol = 2 + selectedDayIdx * 2;
    const taskTitle = cr.task || cr.row?.[0] || "Chore";
    const cellStatus = getChoreStatus(colDateKey, cr.index_, taskTitle);
    const editRow = choreEdits[cr.index_]?.row || (taskTitle ? choreEdits[taskTitle.toLowerCase().trim()]?.row : null);
    const curRowDone = editRow?.[doneCol] !== undefined ? editRow[doneCol] : cr.row?.[doneCol];
    return (cellStatus && cellStatus.hasExplicitRecord)
      ? !!cellStatus.done
      : curRowDone !== undefined && curRowDone !== null
        ? curRowDone === true || String(curRowDone).toLowerCase() === "true"
        : (cellStatus ? !!cellStatus.done : false);
  }).length;

  const dailyTotal = dailyItems.length;
  const dailyPct = dailyTotal > 0 ? Math.round((dailyDoneCount / dailyTotal) * 100) : 0;

  return (
    <div
      className="p-3 sm:p-5 space-y-4 touch-pan-y"
      onTouchStart={(e) => setTouchStartX(e.targetTouches[0].clientX)}
      onTouchMove={(e) => setTouchEndX(e.targetTouches[0].clientX)}
      onTouchEnd={() => {
        if (touchStartX === null || touchEndX === null) return;
        const diff = touchStartX - touchEndX;
        if (diff > 50 && selectedDayIdx < 6) {
          onSelectDayIdx(prev => prev + 1);
        } else if (diff < -50 && selectedDayIdx > 0) {
          onSelectDayIdx(prev => prev - 1);
        }
        setTouchStartX(null);
        setTouchEndX(null);
      }}
    >
      {/* Day Selector Pill Track */}
      <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-1">
        {DAY_STYLES.map((d, dayIdx) => {
          const pillDate = new Date(parsedStart.year, parsedStart.month, parsedStart.day + dayIdx);
          const dayNumber = pillDate.getDate();
          const isSelected = dayIdx === selectedDayIdx;

          // Check if all chores for this day are completed
          const pillDateKey = formatDateKey(pillDate.getFullYear(), pillDate.getMonth(), pillDate.getDate());
          const dayDailyChores = printableScheduleItems.filter(item => !item.isSectionHeader && !isKidsChecklistChore(item.task || item.row?.[0] || "") && !isStreamlinedWeeklyTask(item.task || item.row?.[0] || "", getChoreFreq(item)));
          const isDayAllDone = dayDailyChores.length > 0 && dayDailyChores.every(item => {
            const whoCol = 1 + dayIdx * 2;
            const doneCol = 2 + dayIdx * 2;
            const cellStatus = getChoreStatus(pillDateKey, item.index_, item.task);
            const editRow = choreEdits[item.index_]?.row || (item.task ? choreEdits[item.task.toLowerCase().trim()]?.row : null);
            const curRowDone = editRow?.[doneCol] !== undefined ? editRow[doneCol] : item.row?.[doneCol];
            return (cellStatus && cellStatus.hasExplicitRecord)
              ? !!cellStatus.done
              : curRowDone !== undefined && curRowDone !== null
                ? curRowDone === true || String(curRowDone).toLowerCase() === "true"
                : (cellStatus ? !!cellStatus.done : false);
          });

          return (
            <button
              key={d.name}
              type="button"
              onClick={() => onSelectDayIdx(dayIdx)}
              className={`flex-1 min-w-[42px] py-1.5 px-1 rounded-xl text-center transition cursor-pointer flex flex-col items-center justify-center relative ${
                isSelected
                  ? "text-white shadow-md font-black scale-105 z-10"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold"
              }`}
              style={{
                backgroundColor: isSelected ? d.color : undefined,
                border: isSelected ? `2px solid ${d.color}` : "1px solid transparent"
              }}
            >
              <span className="text-[10px] uppercase tracking-wider">{d.short}</span>
              <span className="text-sm font-extrabold leading-none mt-0.5">{dayNumber}</span>
              {isDayAllDone && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold shadow-xs">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Day Banner & Navigation Arrows */}
      <div className="space-y-3">
        {/* Day Header Card */}
        <div
          className="rounded-2xl p-3.5 text-white shadow-md relative overflow-hidden transition-all"
          style={{ backgroundColor: activeDayStyle.color }}
        >
          <div className="flex items-center justify-between gap-2 relative z-10">
            <button
              type="button"
              onClick={() => onSelectDayIdx(prev => Math.max(0, prev - 1))}
              disabled={selectedDayIdx === 0}
              className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Previous Day (or swipe right)"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="text-center min-w-0">
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-lg font-black tracking-tight">{activeDayStyle.name}</span>
                <span className="text-xs font-semibold opacity-90">({MONTH_NAMES[colDate.getMonth()]} {colDate.getDate()})</span>
              </div>
              <div className="text-[11px] font-medium opacity-90 mt-0.5">
                {dailyDoneCount} of {dailyTotal} Daily Chores Completed ({dailyPct}%)
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectDayIdx(prev => Math.min(6, prev + 1))}
              disabled={selectedDayIdx === 6}
              className="p-1.5 rounded-xl bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Next Day (or swipe left)"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-black/20 rounded-full h-2 mt-2.5 overflow-hidden">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${dailyPct}%` }}
            />
          </div>

          {/* Subtle swipe hint */}
          <div className="text-center text-[10px] font-medium opacity-80 mt-1.5 flex items-center justify-center gap-1">
            <span>👈</span>
            <span>Swipe left or right to change day</span>
            <span>👉</span>
          </div>
        </div>

        {/* Daily Chores List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Daily Tasks ({dailyDoneCount}/{dailyTotal})
            </span>
            {dailyPct === 100 && dailyTotal > 0 && (
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span>🎉</span>
                <span>All Done for {activeDayStyle.name}!</span>
              </span>
            )}
          </div>

          {dailyItems.map((cr) => {
            const taskTitle = cr.task || cr.row?.[0] || "Chore";
            const titleLines = String(taskTitle).split(/\r?\n/).map(s => s.trim()).filter(Boolean);
            const mainTitle = titleLines[0] || taskTitle;
            const subTitle = titleLines.slice(1).join(" ");
            const whoCol = 1 + selectedDayIdx * 2;
            const doneCol = 2 + selectedDayIdx * 2;

            const cellStatus = getChoreStatus(colDateKey, cr.index_, taskTitle);
            const editRow = choreEdits[cr.index_]?.row || (taskTitle ? choreEdits[taskTitle.toLowerCase().trim()]?.row : null);
            const curRowWho = editRow?.[whoCol] !== undefined ? editRow[whoCol] : cr.row?.[whoCol];
            const curRowDone = editRow?.[doneCol] !== undefined ? editRow[doneCol] : cr.row?.[doneCol];

            let whoVal = (cellStatus && cellStatus.who !== undefined && cellStatus.who !== "")
              ? String(cellStatus.who).trim()
              : curRowWho !== undefined && curRowWho !== null
                ? String(curRowWho).trim()
                : "";
            whoVal = toFirstName(whoVal);
            if (whoVal === "Cadence" || whoVal === "Mason") {
              const bw = getBiWeeklyStatus(colDate.getFullYear(), colDate.getMonth(), colDate.getDate());
              if (!bw.isFullStay && !bw.isDepartureDay) {
                whoVal = "";
              }
            }

            const isDone = (cellStatus && cellStatus.hasExplicitRecord)
              ? !!cellStatus.done
              : curRowDone !== undefined && curRowDone !== null
                ? curRowDone === true || String(curRowDone).toLowerCase() === "true"
                : (cellStatus ? !!cellStatus.done : false);

            const cellMember = getMember(whoVal);
            const badgeStyle = cellMember ? getMemberBadgeStyle(cellMember, isDark) : undefined;

            return (
              <div
                key={`day-chore-${cr.index_}-${taskTitle}`}
                className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isDone
                    ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs"
                }`}
              >
                {/* Left: Large 36px Checkbox */}
                <button
                  type="button"
                  onClick={() => onUpdateCell(cr.index_, selectedDayIdx, "done", !isDone, taskTitle)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition cursor-pointer active:scale-90 ${
                    isDone
                      ? "bg-emerald-500 text-white shadow-sm ring-2 ring-emerald-300 dark:ring-emerald-700"
                      : "border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 bg-slate-50 dark:bg-slate-800 text-transparent"
                  }`}
                  title={isDone ? "Mark as incomplete" : "Mark as completed"}
                >
                  <Check className={`w-5 h-5 font-bold ${isDone ? "block" : "hidden"}`} />
                </button>

                {/* Middle: Chore Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className={`text-sm font-bold truncate ${isDone ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-900 dark:text-white"}`}>
                      {mainTitle}
                    </h4>
                  </div>
                  {subTitle && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {subTitle}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400 dark:text-slate-500">
                    <span>Daily Routine</span>
                    {cr.points > 0 && (
                      <span className="text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-0.5">
                        <span>★</span>
                        <span>{cr.points} pts</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Who Assigned Selector */}
                <div className="shrink-0">
                  <div
                    className={`rounded-xl px-2 py-1 text-xs font-bold transition flex items-center gap-1 ${
                      cellMember ? "border shadow-2xs" : "border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                    }`}
                    style={badgeStyle}
                  >
                    <select
                      value={whoVal}
                      onChange={(e) => onUpdateCell(cr.index_, selectedDayIdx, "who", toFirstName(e.target.value), taskTitle)}
                      className="text-xs bg-transparent font-bold focus:outline-none cursor-pointer"
                      style={{ color: cellMember ? (isDark ? cellMember.darkText || "#F1F5F9" : cellMember.text || "#334155") : (isDark ? "#F1F5F9" : "#0F172A") }}
                    >
                      <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Unassigned</option>
                      {standardWhoOptions.map(name => (
                        <option key={name} value={name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-semibold">
                          {name}
                        </option>
                      ))}
                      {whoVal && !standardWhoOptions.includes(whoVal) && !isDescriptionOrPlaceholderText(whoVal) && (
                        <option key={whoVal} value={whoVal} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-semibold">
                          {whoVal}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weekly Chores Section */}
        {weeklyItems.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 px-1">
              Weekly & Special Tasks
            </span>

            {weeklyItems.map((cr) => {
              const taskTitle = cr.task || cr.row?.[0] || "Weekly Chore";
              const isKidsChecklist = isKidsChecklistChore(taskTitle);
              const isStreamlined = isStreamlinedWeeklyTask(taskTitle, getChoreFreq(cr));

              if (isKidsChecklist) {
                const weeklyKidsDone = getWeeklyKidsStatus(cr.index_, taskTitle);
                const minionInitials = [
                  { code: "SG", name: "Sydney" },
                  { code: "CV", name: "Cadence" },
                  { code: "MV", name: "Mason" },
                  { code: "KV", name: "Koda" },
                  { code: "KG", name: "Keyanna" }
                ];

                return (
                  <div
                    key={`weekly-kid-${cr.index_}`}
                    className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {taskTitle}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                        All Kids
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {isLaundryChore(taskTitle) ? "Each kid washes, dries, folds & puts away own laundry" : "Pick up mess, organize, dust & vacuum room"}
                    </p>
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {minionInitials.map(m => {
                        const isDone = !!weeklyKidsDone[m.name];
                        const kidMember = getMember(m.name);
                        return (
                          <button
                            key={m.code}
                            type="button"
                            onClick={() => onToggleWeeklyKidChore(cr.index_, m.name, taskTitle)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-bold border transition cursor-pointer hover:opacity-85 shadow-2xs"
                            style={getMemberBadgeStyle(kidMember, isDark)}
                            title={`${m.name} (${m.code}) — Click to toggle`}
                          >
                            <span>{m.code}</span>
                            <span className={`inline-block min-w-[14px] text-center ${isDone ? "text-emerald-700 dark:text-emerald-300 font-black" : "opacity-40"}`}>
                              {isDone ? "✓" : "—"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (isStreamlined) {
                const singleStatus = getSingleWeeklyStatus(cr.index_, taskTitle);
                const cleanWho = toFirstName(singleStatus.who);
                const streamlinedMember = getMember(cleanWho);

                return (
                  <div
                    key={`weekly-streamlined-${cr.index_}`}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      singleStatus.done
                        ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onUpdateSingleWeeklyChore(cr.index_, taskTitle, { done: !singleStatus.done })}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition cursor-pointer active:scale-90 ${
                        singleStatus.done
                          ? "bg-emerald-500 text-white shadow-sm ring-2 ring-emerald-300 dark:ring-emerald-700"
                          : "border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 bg-slate-50 dark:bg-slate-800 text-transparent"
                      }`}
                      title={singleStatus.done ? "Mark as incomplete" : "Mark as completed"}
                    >
                      <Check className={`w-5 h-5 font-bold ${singleStatus.done ? "block" : "hidden"}`} />
                    </button>

                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-bold truncate ${singleStatus.done ? "line-through text-slate-400 dark:text-slate-500" : "text-slate-900 dark:text-white"}`}>
                        {taskTitle}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        Weekly Household Chore
                      </p>
                    </div>

                    <div className="shrink-0">
                      <div
                        className={`rounded-xl px-2 py-1 text-xs font-bold transition flex items-center gap-1 ${
                          streamlinedMember ? "border shadow-2xs" : "border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        }`}
                        style={streamlinedMember ? getMemberBadgeStyle(streamlinedMember, isDark) : undefined}
                      >
                        <select
                          value={cleanWho}
                          onChange={(e) => onUpdateSingleWeeklyChore(cr.index_, taskTitle, { who: toFirstName(e.target.value) })}
                          className="text-xs bg-transparent font-bold focus:outline-none cursor-pointer"
                          style={{ color: streamlinedMember ? (isDark ? streamlinedMember.darkText || "#F1F5F9" : streamlinedMember.text || "#334155") : (isDark ? "#F1F5F9" : "#0F172A") }}
                        >
                          <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Unassigned</option>
                          {standardWhoOptions.map(name => (
                            <option key={name} value={name} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-semibold">
                              {name}
                            </option>
                          ))}
                          {cleanWho && !standardWhoOptions.includes(cleanWho) && !isDescriptionOrPlaceholderText(cleanWho) && (
                            <option key={cleanWho} value={cleanWho} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-semibold">
                              {cleanWho}
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        )}

        {/* Sunday Inspection Banner on Sunday */}
        {selectedDayIdx === 6 && (
          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-800/60 flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-amber-950 dark:text-amber-100">Sunday Room Inspection</h4>
                <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80">
                  {signOffStatus.done ? "✓ Completed: Weekly allowances signed off" : "Inspect kids' bedrooms & sign off allowances"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenInspectionModal}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition cursor-pointer shrink-0 active:scale-95"
            >
              {signOffStatus.done ? "View Report" : "Inspect Rooms"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

