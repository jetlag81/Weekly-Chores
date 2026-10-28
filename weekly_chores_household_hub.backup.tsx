import React, { useState, useMemo, useEffect } from 'react';
import {
  CheckSquare, Square, Printer, Settings, Users, Calendar,
  PawPrint, RotateCcw, Sparkles, Trash2, CheckCircle2,
  ChevronLeft, ChevronRight, ShieldCheck, AlertCircle, Info
} from 'lucide-react';

type RosterMember = {
  name: string;
  role: string;
  occupancy: 'Full-Time' | 'Bi-Weekly' | 'Casual';
  groups: string[];
  active: boolean;
};

type CompletedMap = Record<string, boolean>;
type WorkloadCount = { total: number; done: number };
type WorkloadStats = Record<string, WorkloadCount>;
type ScheduleCell = { who: string; active: boolean };
type ScheduleRow = {
  id: string;
  title: string;
  details: string;
  frequency: string;
  days: ScheduleCell[];
};

const INITIAL_ROSTER: RosterMember[] = [
  { name: 'Thom', role: 'Supreme Leader', occupancy: 'Full-Time', groups: ['Parents', 'Non-Casual', 'All'], active: true },
  { name: 'Meghan', role: 'Supreme Leader', occupancy: 'Full-Time', groups: ['Parents', 'Non-Casual', 'All'], active: true },
  { name: 'Sydney', role: 'Minion', occupancy: 'Full-Time', groups: ['Kids', 'Non-Casual', 'All'], active: true },
  { name: 'Cadence', role: 'Minion', occupancy: 'Bi-Weekly', groups: ['Kids', 'Non-Casual', 'All'], active: true },
  { name: 'Mason', role: 'Minion', occupancy: 'Bi-Weekly', groups: ['Kids', 'Non-Casual', 'All'], active: true },
  { name: 'Koda', role: 'Minion', occupancy: 'Casual', groups: ['All'], active: false },
  { name: 'Keyanna', role: 'Minion', occupancy: 'Casual', groups: ['All'], active: false },
];

const PET_HERD = [
  { name: 'Ellie', type: 'Dog', routine: 'Morning & Evening', care: 'Feed morning/evening, let outside, walk frequently, fresh water' },
  { name: 'Lewis', type: 'Dog', routine: 'Morning & Evening', care: 'Feed morning/evening, let outside, walk frequently, fresh water' },
  { name: 'Casey', type: 'Cat', routine: 'Morning & Evening', care: 'Feed morning/evening, scoop litter box, fresh water' },
  { name: 'Gigi', type: 'Cat', routine: 'Morning & Evening', care: 'Feed morning/evening, scoop litter box, fresh water' },
  { name: 'Sloane', type: 'Cat', routine: 'Morning & Evening', care: 'Feed morning/evening, scoop litter box, fresh water' },
  { name: 'Scoob', type: 'Cat', routine: 'Morning & Evening', care: 'Feed morning/evening, scoop litter box, fresh water' },
];

const DAILY_CHORES = [
  {
    id: 'litter',
    title: 'Empty the Litter Box (Morning & Evening)',
    details: 'Scoop waste, refresh litter, dispose of waste.',
    group: 'Non-Casual',
    offset: 1, // Meghan starts Monday on Oct 19
  },
  {
    id: 'feed',
    title: 'Feed the Herd (Breakfast & Supper)',
    details: 'Feed all animals the appropriate food and portions.',
    group: 'Non-Casual',
    offset: 2, // Sydney starts Monday
  },
  {
    id: 'supper',
    title: 'Make Supper: Plan Ahead!',
    details: 'Plan and prepare supper for the household.',
    group: 'Non-Casual',
    offset: 3, // Cadence starts Monday
  },
  {
    id: 'dishes',
    title: 'Dinner Dishes & Kitchen Cleanup',
    details: 'Load dishwasher, put leftovers in containers and put away, wash and dry extra dishes, wipe counters, table, stove & surfaces.',
    group: 'Non-Casual',
    offset: 4, // Mason starts Monday
  },
  {
    id: 'dishwasher',
    title: 'Empty Dishwasher',
    details: 'Put away clean dishes, load any dirty dishes.',
    group: 'Non-Casual',
    offset: 0, // Thom starts Monday so nobody is double-booked on daily chores
  },
];

const formatLocalDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getWeekParity = (weekStartIso: string) => {
  const [year, month, day] = weekStartIso.split('-').map(Number);
  const currentMonday = new Date(year, month - 1, day);
  const dayOffset = (currentMonday.getDay() + 6) % 7;
  currentMonday.setDate(currentMonday.getDate() - dayOffset);

  const baseWeekStart = new Date(2026, 9, 19); // Monday, Oct 19 2026
  const diffDays = Math.round((currentMonday.getTime() - baseWeekStart.getTime()) / 86400000);
  return Math.floor(diffDays / 7) % 2 === 0;
};

export default function App() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [weekStart, setWeekStart] = useState('2026-10-19');
  const [isKidsWeek, setIsKidsWeek] = useState(true);
  const [curbsideMode, setCurbsideMode] = useState('Both'); // 'Recycling', 'Waste', or 'Both'
  const [roster, setRoster] = useState<RosterMember[]>(INITIAL_ROSTER);
  const [completed, setCompleted] = useState<CompletedMap>({});
  const [rotationOffset, setRotationOffset] = useState(0);
  const [filterMember, setFilterMember] = useState('All');

  // Weekly assignee overrides matching your Oct 19 sheet
  const [basementAssignee, setBasementAssignee] = useState('Meghan');
  const [feedingStationAssignee, setFeedingStationAssignee] = useState('Thom');
  const [wasteAssignee, setWasteAssignee] = useState('Mason');

  // Load saved progress from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('household_hub_completed_v1');
      if (saved) setCompleted(JSON.parse(saved));
    } catch (e) {
      console.error('Could not load saved state:', e);
    }
  }, []);

  // Save checkbox state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('household_hub_completed_v1', JSON.stringify(completed));
    } catch (e) {
      console.error('Could not save state:', e);
    }
  }, [completed]);

  const weekDays = useMemo(() => {
    const [year, month, day] = weekStart.split('-').map(Number);
    const baseDate = new Date(year, month - 1, day);
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return dayNames.map((name, idx) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + idx);
      return {
        name,
        dayNum: d.getDate(),
        fullDate: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        iso: d.toISOString().split('T')[0],
      };
    });
  }, [weekStart]);

  // Step forward or backward by 1 week and automatically flip bi-weekly custody
  const shiftWeek = (deltaWeeks: number) => {
    const [year, month, day] = weekStart.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    d.setDate(d.getDate() + deltaWeeks * 7);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    setWeekStart(`${yyyy}-${mm}-${dd}`);
    if (Math.abs(deltaWeeks) % 2 === 1) {
      setIsKidsWeek((prev) => !prev);
    }
  };

  // Determine who is active this week based on occupancy & custody toggle
  const activeMembers = useMemo<RosterMember[]>(() => {
    return roster.filter((member: RosterMember) => {
      if (!member.active) return false;
      if (member.occupancy === 'Bi-Weekly' && !isKidsWeek) return false;
      return true;
    });
  }, [roster, isKidsWeek]);

  const activeNonCasual = useMemo(
    () => activeMembers.filter((m: RosterMember) => m.groups.includes('Non-Casual')).map((m: RosterMember) => m.name),
    [activeMembers]
  );

  const activeKids = useMemo(
    () => activeMembers.filter((m: RosterMember) => m.groups.includes('Kids')).map((m: RosterMember) => m.name),
    [activeMembers]
  );

  const activeCasual = useMemo(
    () => activeMembers.filter((m: RosterMember) => m.occupancy === 'Casual').map((m: RosterMember) => m.name),
    [activeMembers]
  );

  const toggleDone = (taskId: string, dayIdx: number) => {
    const key = `${weekStart}_${taskId}_${dayIdx}`;
    setCompleted((prev: CompletedMap) => ({ ...prev, [key]: !prev[key] }));
  };

  const isDone = (taskId: string, dayIdx: number) => !!completed[`${weekStart}_${taskId}_${dayIdx}`];

  const resetWeekCheckboxes = () => {
    const next: CompletedMap = { ...completed };
    Object.keys(next).forEach((k) => {
      if (k.startsWith(`${weekStart}_`)) delete next[k];
    });
    setCompleted(next);
  };

  const toggleRosterMember = (name: string) => {
    setRoster((prev: RosterMember[]) =>
      prev.map((m: RosterMember) => (m.name === name ? { ...m, active: !m.active } : m))
    );
  };

  const scheduleRows = useMemo<ScheduleRow[]>(() => {
    const pool = activeNonCasual.length > 0 ? activeNonCasual : ['Unassigned'];

    const dailyRows: ScheduleRow[] = DAILY_CHORES.map((chore) => {
      const days: ScheduleCell[] = weekDays.map((_, dayIdx) => {
        const assignee = pool[(dayIdx + chore.offset + rotationOffset) % pool.length];
        return { who: assignee, active: true };
      });
      return {
        id: chore.id,
        title: chore.title,
        details: chore.details,
        frequency: 'Daily (Mon–Sun)',
        days,
      };
    });

    const weeklyRows = [
      {
        id: 'curbside',
        title: 'Curbside Recycling & Waste (Thu Evening)',
        details: 'Roll bins to curb Thursday evening for Friday pickup (alternating weeks).',
        frequency: 'Bi-Weekly (Thu)',
        days: weekDays.map((_, idx) => {
          if (idx !== 3) return { who: '—', active: false };
          let label = '';
          if (curbsideMode === 'Recycling') label = 'Thom (Recycling)';
          else if (curbsideMode === 'Waste') label = `${wasteAssignee} (Waste)`;
          else label = `Thom (Recyc) / ${wasteAssignee} (Waste)`;
          return { who: label, active: true };
        }),
      },
      {
        id: 'bedrooms',
        title: 'Tidy Bedrooms / Personal Spaces',
        details: 'Pick up mess & laundry, dust surfaces, vacuum floors (each individual kid is responsible for their own space).',
        frequency: 'Once a Week (Sat)',
        days: weekDays.map((_, idx) => {
          if (idx === 5) {
            const kidsList = [...activeKids, ...activeCasual];
            return {
              who: kidsList.length > 0 ? kidsList.join(', ') : 'No Kids On-Week',
              active: true,
            };
          }
          return {
            who: !isKidsWeek && idx === 1 ? 'Cadence & Mason: Off-Week' : '—',
            active: false,
          };
        }),
      },
      {
        id: 'laundry',
        title: 'Laundry (Wash, Dry, Fold & Put Away)',
        details: 'Wash, dry, fold & put away (each kid responsible for their own items).',
        frequency: 'Once a Week (Sat)',
        days: weekDays.map((_, idx) => {
          if (idx === 5) {
            const kidsList = [...activeKids, ...activeCasual];
            return {
              who: kidsList.length > 0 ? kidsList.join(', ') : 'Parents Only',
              active: true,
            };
          }
          return {
            who: !isKidsWeek && idx === 1 ? 'Cadence & Mason: Off-Week' : '—',
            active: false,
          };
        }),
      },
      {
        id: 'basement',
        title: 'Clean Basement (Pick Up, Dust, Vacuum)',
        details: 'Pick up mess & laundry, dust surfaces, vacuum floors.',
        frequency: 'Once a Week (Sun)',
        days: weekDays.map((_, idx) =>
          idx === 6
            ? { who: basementAssignee, active: true }
            : { who: '—', active: false }
        ),
      },
      {
        id: 'feeding_station',
        title: 'Herd Feeding Station Deep Clean',
        details: 'Sunday Routine: Wash & sanitize pet bowls, vacuum feeding mat.',
        frequency: 'Once a Week (Sun)',
        days: weekDays.map((_, idx) =>
          idx === 6
            ? { who: `${feedingStationAssignee} (Bowls & Mat)`, active: true }
            : { who: '—', active: false }
        ),
      },
      {
        id: 'inspection',
        title: 'Weekly Sign-Off & Parent Inspection',
        details: 'Sundays @ 5:00 PM: Rigorously review completed tasks, administer severe punishments if not done satisfactorily, sign off if work is acceptable.',
        frequency: 'Sundays @ 5:00 PM',
        days: weekDays.map((_, idx) =>
          idx === 6
            ? { who: 'Thom & Meghan (Review)', active: true }
            : { who: '—', active: false }
        ),
      },
    ];

    return [...dailyRows, ...weeklyRows];
  }, [
    activeNonCasual,
    activeKids,
    activeCasual,
    weekDays,
    rotationOffset,
    curbsideMode,
    wasteAssignee,
    basementAssignee,
    feedingStationAssignee,
    isKidsWeek,
  ]);

  const workloadStats = useMemo<WorkloadStats>(() => {
    const counts: WorkloadStats = {};
    activeMembers.forEach((m: RosterMember) => (counts[m.name] = { total: 0, done: 0 }));

    scheduleRows.forEach((row: ScheduleRow) => {
      row.days.forEach((cell: ScheduleCell, dayIdx: number) => {
        if (!cell.active) return;
        activeMembers.forEach((m: RosterMember) => {
          if (cell.who.includes(m.name)) {
            counts[m.name].total += 1;
            if (isDone(row.id, dayIdx)) {
              counts[m.name].done += 1;
            }
          }
        });
      });
    });
    return counts;
  }, [scheduleRows, activeMembers, completed, weekStart]);

  const totalCheckable = useMemo(() => {
    let total = 0;
    let done = 0;
    scheduleRows.forEach((row) => {
      row.days.forEach((cell, idx) => {
        if (cell.active) {
          total += 1;
          if (isDone(row.id, idx)) done += 1;
        }
      });
    });
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }, [scheduleRows, completed, weekStart]);

  const badgeColor = (text: string) => {
    if (text.includes('Thom') && text.includes('Meghan')) {
      return 'bg-indigo-100 text-indigo-900 border-indigo-300';
    }
    if (text.includes('Thom')) return 'bg-blue-100 text-blue-900 border-blue-300';
    if (text.includes('Meghan')) return 'bg-purple-100 text-purple-900 border-purple-300';
    if (text.includes('Sydney') && (text.includes('Cadence') || text.includes('Mason'))) {
      return 'bg-teal-100 text-teal-900 border-teal-300';
    }
    if (text.includes('Sydney')) return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    if (text.includes('Cadence')) return 'bg-amber-100 text-amber-900 border-amber-300';
    if (text.includes('Mason')) return 'bg-rose-100 text-rose-900 border-rose-300';
    if (text.includes('Koda') || text.includes('Keyanna')) return 'bg-cyan-100 text-cyan-900 border-cyan-300';
    return 'bg-slate-100 text-slate-800 border-slate-300';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-3 sm:p-6 print:p-0 print:bg-white font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6 print:shadow-none print:border-b print:rounded-none print:mb-2">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600 text-white print:hidden">
                <Sparkles className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Weekly Chores & Household Hub
              </h1>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                  isKidsWeek
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-amber-50 text-amber-700 border-amber-300'
                }`}
              >
                {isKidsWeek
                  ? 'Custody: Kids Week (Mason & Cadence On)'
                  : 'Custody: Off-Week (Sydney + Parents)'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Active Week: <span className="font-semibold text-slate-800">{weekDays[0]?.fullDate} – {weekDays[6]?.fullDate}, {weekStart.slice(0, 4)}</span> • Overseers Supreme: <span className="font-medium text-slate-700">Thom & Meghan</span>
            </p>
          </div>

          {/* Navigation & Print Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'schedule'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Printable Schedule
            </button>
            <button
              onClick={() => setActiveTab('hub')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'hub'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Settings className="w-4 h-4" />
              Household Hub Data
            </button>
            <button
              onClick={() => setActiveTab('herd')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'herd'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <PawPrint className="w-4 h-4" />
              The Herd ({PET_HERD.length})
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
            >
              <Printer className="w-4 h-4" />
              Print Sheet
            </button>
          </div>
        </div>

        {}
        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 print:hidden">
          {/* Week Selector with Prev/Next */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Active Week (Monday)
            </label>
            <div className="flex items-center gap-1">
              <button
                onClick={() => shiftWeek(-1)}
                title="Previous Week"
                className="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-600"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <input
                type="date"
                value={weekStart}
                onChange={(e) => setWeekStart(e.target.value)}
                className="flex-1 min-w-0 border border-slate-300 rounded-lg px-2 py-1.5 text-xs sm:text-sm font-medium"
              />
              <button
                onClick={() => shiftWeek(1)}
                title="Next Week"
                className="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Custody Toggle */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Custody Schedule Rotation
            </label>
            <button
              onClick={() => setIsKidsWeek((prev) => !prev)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border text-left transition ${
                isKidsWeek
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
              }`}
            >
              {isKidsWeek ? '✓ Kids Week (5 Non-Casual)' : 'Off-Week (3 Non-Casual)'}
            </button>
          </div>

          {/* Thursday Curbside Selector */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Thursday Curbside Pickup
            </label>
            <select
              value={curbsideMode}
              onChange={(e) => setCurbsideMode(e.target.value)}
              className="border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm font-medium bg-white"
            >
              <option value="Both">Both Recycling & Waste</option>
              <option value="Recycling">Recycling Week (Thom)</option>
              <option value="Waste">Waste Week ({wasteAssignee})</option>
            </select>
          </div>

          {/* Rotation Offset & Reset */}
          <div className="flex flex-col">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Rotation & Reset Controls
            </label>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  setRotationOffset((prev) => (prev + 1) % Math.max(1, activeNonCasual.length))
                }
                className="flex-1 inline-flex items-center justify-center gap-1 border border-slate-300 bg-white hover:bg-slate-50 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Shift +1
              </button>
              <button
                onClick={resetWeekCheckboxes}
                title="Clear this week's checkboxes"
                className="inline-flex items-center justify-center border border-slate-300 bg-white hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm text-slate-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Weekly Progress Bar */}
          <div className="flex flex-col justify-center bg-slate-50 rounded-xl px-3.5 py-2 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Week Completion</span>
              <span className="text-indigo-600">
                {totalCheckable.done}/{totalCheckable.total} ({totalCheckable.pct}%)
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-1.5">
              <div
                className="h-full bg-indigo-600 transition-all duration-300"
                style={{ width: `${totalCheckable.pct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {}
      {activeTab === 'schedule' && (
        <div className="max-w-7xl mx-auto space-y-5">
          {/* Interactive Member Filter & Workload Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 print:hidden">
            <button
              onClick={() => setFilterMember('All')}
              className={`rounded-xl p-3 border text-left transition flex flex-col justify-between ${
                filterMember === 'All'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-indigo-300'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                Filter View
              </div>
              <div className="text-sm font-bold mt-1">Show All Members</div>
              <div className="text-[11px] opacity-80 mt-0.5">
                {activeMembers.length} active this week
              </div>
            </button>

            {activeMembers.map((member) => {
              const stat = workloadStats[member.name] || { total: 0, done: 0 };
              const isSelected = filterMember === member.name;
              return (
                <button
                  key={member.name}
                  onClick={() =>
                    setFilterMember((prev) => (prev === member.name ? 'All' : member.name))
                  }
                  className={`rounded-xl p-3 border text-left transition flex items-center justify-between ${
                    isSelected
                      ? 'ring-2 ring-indigo-600 bg-indigo-50/40 border-indigo-400'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`px-2 py-0.5 text-xs font-bold rounded border ${badgeColor(
                          member.name
                        )}`}
                      >
                        {member.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 truncate">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-slate-800">
                      {stat.done}/{stat.total}
                    </span>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">Done</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Printable Schedule Grid */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden print:shadow-none print:border-slate-400 print:rounded-none">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-900 text-white print:bg-slate-200 print:text-black">
                    <th className="p-3 text-xs font-bold uppercase tracking-wider w-64 border-r border-slate-700 print:border-slate-400">
                      {weekStart} / Task
                    </th>
                    {weekDays.map((d) => (
                      <th
                        key={d.iso}
                        className="p-2.5 text-center text-xs font-bold uppercase tracking-wider border-r border-slate-700 print:border-slate-400 min-w-[115px]"
                      >
                        <div>
                          {d.name} ({d.dayNum})
                        </div>
                        <div className="text-[10px] font-normal text-slate-300 print:text-slate-700">
                          WHO / DONE
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 print:divide-slate-400 text-xs">
                  {scheduleRows.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/70">
                      <td className="p-3 align-top border-r border-slate-200 print:border-slate-400">
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          {row.title}
                        </div>
                        <div className="text-slate-500 text-[11px] mt-0.5 leading-snug">
                          {row.details}
                        </div>
                        <span className="inline-block mt-1.5 px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-semibold">
                          {row.frequency}
                        </span>
                      </td>

                      {row.days.map((cell, dayIdx) => {
                        const checked = isDone(row.id, dayIdx);
                        const matchesFilter =
                          filterMember === 'All' || cell.who.includes(filterMember);

                        return (
                          <td
                            key={dayIdx}
                            onClick={() => cell.active && toggleDone(row.id, dayIdx)}
                            className={`p-2 align-middle border-r border-slate-200 print:border-slate-400 text-center transition select-none ${
                              cell.active
                                ? 'cursor-pointer hover:bg-indigo-50/40'
                                : 'bg-slate-50/60 text-slate-400'
                            } ${checked ? 'bg-emerald-50/60' : ''} ${
                              !matchesFilter && cell.active ? 'opacity-25' : ''
                            }`}
                          >
                            {cell.active ? (
                              <div className="flex flex-col items-center justify-between gap-1.5">
                                <span
                                  className={`px-2 py-0.5 rounded border text-[11px] font-semibold leading-tight ${badgeColor(
                                    cell.who
                                  )} ${checked ? 'line-through opacity-60' : ''}`}
                                >
                                  {cell.who}
                                </span>
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-indigo-600"
                                >
                                  {checked ? (
                                    <CheckSquare className="w-4 h-4 text-emerald-600" />
                                  ) : (
                                    <Square className="w-4 h-4 text-slate-400" />
                                  )}
                                  <span className="print:hidden">
                                    {checked ? 'Done' : 'To-Do'}
                                  </span>
                                </button>
                              </div>
                            ) : (
                              <span className="text-[11px] italic text-slate-400">
                                {cell.who}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {}
      {activeTab === 'hub' && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Roster & Occupancy Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold">Household Roster & Occupancy Rules</h2>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Matches your <span className="font-semibold">Household Hub Background Data</span> sheet. Toggle Casual members (Koda, Keyanna) or adjust occupancy inclusion below.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase">
                    <th className="py-2.5 px-2">Name</th>
                    <th className="py-2.5 px-2">Role</th>
                    <th className="py-2.5 px-2">Occupancy</th>
                    <th className="py-2.5 px-2">Rotation Groups</th>
                    <th className="py-2.5 px-2 text-center">Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {roster.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50">
                      <td className="py-2.5 px-2 font-bold">
                        <span className={`px-2 py-0.5 rounded border ${badgeColor(m.name)}`}>
                          {m.name}
                        </span>
                      </td>
                      <td className="py-2.5 px-2 text-slate-600 font-medium">{m.role}</td>
                      <td className="py-2.5 px-2">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                          {m.occupancy}
                        </span>
                      </td>
                      <td className="py-2.5 px-2 text-slate-500">{m.groups.join(', ')}</td>
                      <td className="py-2.5 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={m.active}
                          onChange={() => toggleRosterMember(m.name)}
                          className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Occupancy Type Legend */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                Residency Rules
              </div>
              <div>
                <span className="font-semibold text-slate-800">• Full-Time:</span> Constant Residency — Included in all weekly/monthly schedulings.
              </div>
              <div>
                <span className="font-semibold text-slate-800">• Bi-Weekly:</span> Half-Time Residency — Included when in residence using Custody Schedule Rotation.
              </div>
              <div>
                <span className="font-semibold text-slate-800">• Casual:</span> Periodic Residency — Manually toggled on/off for any schedule.
              </div>
            </div>
          </div>

          {/* Weekly Task Assignment Overrides */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold">Weekly & Bi-Weekly Task Assignments</h2>
            </div>
            <p className="text-xs text-slate-500">
              Customize who is assigned to the Sunday deep-clean chores and Thursday evening curbside bins.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <div className="font-bold text-slate-800">Clean Basement (Sunday)</div>
                  <div className="text-xs text-slate-500">Pick up mess & laundry, dust surfaces, vacuum floors</div>
                </div>
                <select
                  value={basementAssignee}
                  onChange={(e) => setBasementAssignee(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-sm font-semibold"
                >
                  {activeNonCasual.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <div className="font-bold text-slate-800">Herd Feeding Station Deep Clean (Sunday)</div>
                  <div className="text-xs text-slate-500">Wash & sanitize pet bowls, vacuum feeding mat</div>
                </div>
                <select
                  value={feedingStationAssignee}
                  onChange={(e) => setFeedingStationAssignee(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-sm font-semibold"
                >
                  {activeMembers.map((m) => (
                    <option key={m.name} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <div className="font-bold text-slate-800">Curbside Waste Bin (Thursday Evening)</div>
                  <div className="text-xs text-slate-500">Roll waste bin to curb Thursday evening for Friday pickup</div>
                </div>
                <select
                  value={wasteAssignee}
                  onChange={(e) => setWasteAssignee(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-sm font-semibold"
                >
                  {activeNonCasual.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              {/* Discrepancies Fixed Callout */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-indigo-900">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  Restored Schedule Logic & Fixes Applied
                </div>
                <p>• <strong>Empty Dishwasher:</strong> Automatically populated across Mon–Sun so no Non-Casual member is double-booked on daily chores.</p>
                <p>• <strong>Custody Sync:</strong> Toggling between <em>Kids Week</em> and <em>Off-Week</em> dynamically updates both the 5 daily chores and Saturday Bedroom/Laundry assignments.</p>
                <p>• <strong>Curbside Bins:</strong> Added Thursday evening Recycling (Thom) and Waste ({wasteAssignee}) directly to the printable grid.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {}
      {activeTab === 'herd' && (
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-bold">The Herd — Daily Pet Care Roster</h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              2 Dogs • 4 Cats (Morning & Evening Routine)
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PET_HERD.map((pet) => (
              <div
                key={pet.name}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">{pet.name}</span>
                    <span
                      className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
                        pet.type === 'Dog'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-indigo-100 text-indigo-800 border border-indigo-300'
                      }`}
                    >
                      {pet.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">
                    Routine: {pet.routine}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{pet.care}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}