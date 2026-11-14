// Interactive 6-Stop Spotlight Coachmark Tour ("Learn by Doing")
// Guides the Parent Admin through the live Household Hub after Clean Slate setup
// (or anytime from Household Settings -> "Replay Guided Hub Tour").

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  LayoutGrid,
  CalendarDays,
  Camera,
  Bell,
  ShieldCheck,
  Users,
  ChevronRight,
  ChevronLeft,
  X,
  Check
} from "lucide-react";
import { saveHouseholdSetupConfig } from "./householdOnboardingConfig";

interface HubSpotlightTourOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab?: (tab: "matrix" | "month" | "stats" | "roster") => void;
}

interface TourStop {
  id: string;
  title: string;
  badge: string;
  tab: "matrix" | "month" | "stats" | "roster";
  icon: any;
  color: string;
  description: string;
  proTip: string;
}

const TOUR_STOPS: TourStop[] = [
  {
    id: "weekly_schedule",
    title: "1. Weekly Schedule (Day & 7-Day Views)",
    badge: "Core Schedule",
    tab: "matrix",
    icon: LayoutGrid,
    color: "from-indigo-600 to-blue-600",
    description:
      "Switch between the swipeable mobile Day View (with big touch checkboxes) and the 7-Day Spreadsheet Table where the Task column stays pinned on the left while you scroll Mon–Sun.",
    proTip:
      "Off-week curbside bins are automatically greyed out so nobody rolls the wrong bin to the curb!"
  },
  {
    id: "auto_assign",
    title: "2. Smart 1-Tap Auto-Assign (✨ Distribute)",
    badge: "Fair Rotation",
    tab: "matrix",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
    description:
      "Tap 'Distribute' or 'Auto-Assign' to fairly rotate daily and weekly chores across everyone who is home this week.",
    proTip:
      "Auto-Assign automatically respects your Bi-Weekly custody schedule and skips members on their away weeks."
  },
  {
    id: "monthly_calendar",
    title: "3. Google Calendar-Style Month View",
    badge: "Month Overview",
    tab: "month",
    icon: CalendarDays,
    color: "from-pink-600 to-rose-600",
    description:
      "See the entire month at a glance! The current week is highlighted with a pink/magenta border, along with custody transition icons (🏠/👋) and Thursday curbside bin badges (♻️/🗑️).",
    proTip:
      "Tap any day cell in the Monthly Calendar to open that day's full interactive checklist!"
  },
  {
    id: "photos_and_nudge",
    title: "4. Photo Proof Inbox & Cartoon GIF Nudges",
    badge: "Accountability",
    tab: "matrix",
    icon: Camera,
    color: "from-purple-600 to-indigo-600",
    description:
      "In the top action bar, tap 'Photos' to verify before/after room photos submitted by your kids, or tap 'Nudge' to send a fun cartoon GIF reminder or praise toast straight to their phone.",
    proTip:
      "You can also request live photo proof on any specific chore with 1 tap."
  },
  {
    id: "sunday_inspection",
    title: "5. Weekly Room Inspection & Rewards",
    badge: "Sign-Off & Payouts",
    tab: "matrix",
    icon: ShieldCheck,
    color: "from-emerald-600 to-teal-600",
    description:
      "At the end of the week, tap 'Inspect' in the top bar to walk through each kid's checklist, sign off on the week, and send instant rewards via Google Pay, Apple Pay, Interac e-Transfer, or Gift Cards.",
    proTip:
      "Your home address automatically configures your store region and local digital wallets—no manual country switching needed!"
  },
  {
    id: "household_hub",
    title: "6. Household Hub, Profiles & Invites",
    badge: "Family Roster",
    tab: "roster",
    icon: Users,
    color: "from-sky-600 to-indigo-600",
    description:
      "Manage family members, nicknames, age-tiered profiles (12+ Teen vs 11 & Under Junior), pets, and 6-digit device invite codes anytime in the Household Hub tab.",
    proTip:
      "You can replay this tour or switch between Clean Slate and Thom's Family Preset anytime in Settings!"
  }
];

export const HubSpotlightTourOverlay: React.FC<HubSpotlightTourOverlayProps> = ({
  isOpen,
  onClose,
  onNavigateTab
}) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIdx(0);
      onNavigateTab?.(TOUR_STOPS[0].tab);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const stop = TOUR_STOPS[idx] || TOUR_STOPS[0];
  const IconComp = stop.icon;

  const handleGoStop = (nextIdx: number) => {
    const clamped = Math.max(0, Math.min(TOUR_STOPS.length - 1, nextIdx));
    setIdx(clamped);
    onNavigateTab?.(TOUR_STOPS[clamped].tab);
  };

  const handleCompleteTour = () => {
    saveHouseholdSetupConfig({ hasCompletedSpotlightTour: true });
    onNavigateTab?.("matrix");
    onClose();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 pointer-events-none flex justify-center modal-safe-area">
      <div className="pointer-events-auto w-full max-w-lg bg-slate-900/95 backdrop-blur-md border-2 border-indigo-500/70 rounded-3xl shadow-2xl overflow-hidden text-white animate-in slide-in-from-bottom-5 duration-200">
        {/* Top Gradient Banner */}
        <div className={`px-4 py-3 bg-gradient-to-r ${stop.color} flex items-center justify-between gap-2`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <IconComp className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-black/25 px-2 py-0.5 rounded-full">
                  {stop.badge}
                </span>
                <span className="text-[10px] font-bold text-white/80">
                  Stop {idx + 1} of {TOUR_STOPS.length}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black truncate mt-0.5">{stop.title}</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCompleteTour}
            className="px-2.5 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-[11px] font-bold text-white shrink-0 transition cursor-pointer"
          >
            Skip Tour
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3 text-xs">
          <p className="text-slate-200 leading-relaxed text-[12.5px]">{stop.description}</p>

          <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-start gap-2 text-[11px] text-indigo-200">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Pro Tip:</strong> {stop.proTip}
            </span>
          </div>

          {/* Progress Dots & Navigation */}
          <div className="pt-1 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {TOUR_STOPS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleGoStop(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === idx ? "w-6 bg-indigo-400" : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                  title={s.title}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {idx > 0 && (
                <button
                  type="button"
                  onClick={() => handleGoStop(idx - 1)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1 transition cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              )}

              {idx < TOUR_STOPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => handleGoStop(idx + 1)}
                  className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center gap-1 shadow-md transition cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCompleteTour}
                  className="px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1 shadow-md transition cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Done Tour!</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
