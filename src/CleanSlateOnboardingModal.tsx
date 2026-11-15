// 7-Step Clean Slate First-Run Onboarding Wizard
// Guides a brand-new parent admin through setting up their Household Hub from scratch:
// 1. Admin Account & Full Street Address Autocomplete (auto-sets Country/Currency & Curbside schedule)
// 2. Family Ecosystem (G-Pay, Apple Pay, Google Family Link, Apple Family, Gaming consoles) + Members (Age 12+ vs <=11 split) & Pets
// 3. Special Occupancy & Shared Custody Schedules (Full-Time, Alternating Bi-Weekly, Weekends, Casual)
// 4. Week Start Day & Smart Starter Chore Packs + Custom Chore Builder
// 5. Weekly/Monthly Reward Structure (Monetary, Screen Time, Points, Hybrid, or Custom Unit)
// 6. Roll Out Invites -> Launches Step 7 (Live Interactive Spotlight Coachmark Tour on the Hub)

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  MapPin,
  Users,
  PawPrint,
  Calendar,
  ListTodo,
  Gift,
  Send,
  ChevronRight,
  ChevronLeft,
  Check,
  Plus,
  Trash2,
  Shield,
  CreditCard,
  Smartphone,
  Gamepad2,
  RotateCcw,
  Copy,
  X,
  Camera,
  LocateFixed
} from "lucide-react";
import {
  getHouseholdSetupConfig,
  saveHouseholdSetupConfig,
  searchStreetAddressAutocomplete,
  reverseGeocodeCoordinates,
  buildSmartStarterChores,
  backupCurrentHouseholdBeforeCleanSlate,
  restoreThomsFamilyPresetConfig,
  generateInviteCodeForMember,
  type AddressSuggestion,
  type OnboardingMemberDraft,
  type OnboardingPetDraft,
  type OnboardingChoreDraft,
  type WeekStartDay,
  type RewardMode,
  type RewardCadence,
  type PayoutRail
} from "./householdOnboardingConfig";
import { saveUserProfile, generateInitials, type UserProfile } from "./userProfiles";
import { saveKidRewardProfile } from "./rewardAccounts";

interface CleanSlateOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteOnboarding: (payload: {
    householdName: string;
    adminName: string;
    members: OnboardingMemberDraft[];
    pets: OnboardingPetDraft[];
    chores: OnboardingChoreDraft[];
    weekStartDay: WeekStartDay;
    monthlyIncentive: string;
    monthlyGoalTarget: number;
    startSpotlightTour: boolean;
  }) => void;
  onRestoreThomPreset?: () => void;
}

const MEMBER_COLORS = [
  "#2563EB", // Blue
  "#8B5CF6", // Purple
  "#0D9488", // Teal
  "#EC4899", // Pink
  "#EA580C", // Orange
  "#0284C7", // Sky
  "#D97706", // Amber
  "#10B981"  // Emerald
];

export const CleanSlateOnboardingModal: React.FC<CleanSlateOnboardingModalProps> = ({
  isOpen,
  onClose,
  onCompleteOnboarding,
  onRestoreThomPreset
}) => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 6;

  // Step 1: Admin & Address State
  const [householdName, setHouseholdName] = useState("Our Family Hub");
  const [adminFirstName, setAdminFirstName] = useState("");
  const [adminLastName, setAdminLastName] = useState("");
  const [adminNickname, setAdminNickname] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPin, setAdminPin] = useState("1234");

  const [addressQuery, setAddressQuery] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [isSearchingAddress, setIsSearchingAddress] = useState(false);
  const [isLocatingDevice, setIsLocatingDevice] = useState(false);
  const [locationNotice, setLocationNotice] = useState<string | null>(null);
  const [deviceCoords, setDeviceCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<AddressSuggestion>({
    formattedAddress: "",
    street: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    countryCode: "CA",
    currency: "CAD"
  });
  const [curbsidePickupDay, setCurbsidePickupDay] = useState("Thursday Evening (Friday Pickup)");
  const [curbsideBiWeekly, setCurbsideBiWeekly] = useState(true);
  const [curbsideCurrentWeekType, setCurbsideCurrentWeekType] = useState<"recycling" | "waste">("recycling");

  // Step 2: Ecosystem, Wallets, Members & Pets
  const [googlePayLinked, setGooglePayLinked] = useState(true);
  const [googlePayHandle, setGooglePayHandle] = useState("");
  const [applePayLinked, setApplePayLinked] = useState(false);
  const [applePayHandle, setApplePayHandle] = useState("");
  const [interacLinked, setInteracLinked] = useState(true);
  const [googleFamilyLink, setGoogleFamilyLink] = useState(true);
  const [appleFamilySharing, setAppleFamilySharing] = useState(false);
  const [xboxFamily, setXboxFamily] = useState(false);
  const [playstationFamily, setPlaystationFamily] = useState(false);
  const [nintendoSwitchParental, setNintendoSwitchParental] = useState(false);

  const [members, setMembers] = useState<OnboardingMemberDraft[]>([]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberNickname, setNewMemberNickname] = useState("");
  const [newMemberRole, setNewMemberRole] = useState<"Parent" | "Kid">("Kid");
  const [newMemberAge, setNewMemberAge] = useState<number>(13);

  const [pets, setPets] = useState<OnboardingPetDraft[]>([]);
  const [newPetName, setNewPetName] = useState("");
  const [newPetType, setNewPetType] = useState<"Dog" | "Cat" | "Other">("Dog");
  const [newPetRoutine, setNewPetRoutine] = useState("Morning & Evening");

  // Step 3: Occupancy & Bi-Weekly Custody Config
  const [custodyTransitionDay, setCustodyTransitionDay] = useState("Sunday");
  const [custodyTransitionTime, setCustodyTransitionTime] = useState("17:00");
  const [custodyIsHereThisWeek, setCustodyIsHereThisWeek] = useState(true);

  // Step 4: Week Start Day & Smart Chores
  const [weekStartDay, setWeekStartDay] = useState<WeekStartDay>("Monday");
  const [chores, setChores] = useState<OnboardingChoreDraft[]>([]);
  const [hasInitializedChores, setHasInitializedChores] = useState(false);
  const [newChoreTask, setNewChoreTask] = useState("");
  const [newChoreDesc, setNewChoreDesc] = useState("");
  const [newChoreFreq, setNewChoreFreq] = useState<"Daily" | "Weekly" | "Bi-Weekly">("Daily");
  const [newChoreGroup, setNewChoreGroup] = useState<"All Non-Casual" | "All Kids" | "Each Child" | "Parents">("All Non-Casual");
  const [newChorePhoto, setNewChorePhoto] = useState(false);

  // Step 5: Reward Structure
  const [rewardMode, setRewardMode] = useState<RewardMode>("hybrid");
  const [rewardCadence, setRewardCadence] = useState<RewardCadence>("weekly");
  const [baseAllowanceAmount, setBaseAllowanceAmount] = useState<number>(10);
  const [screenTimeMinutes, setScreenTimeMinutes] = useState<number>(45);
  const [pointsPerChore, setPointsPerChore] = useState<number>(5);
  const [monthlyBonusPrize, setMonthlyBonusPrize] = useState<string>("$15 Bonus & Pizza Night Pick");
  const [monthlyGoalTarget, setMonthlyGoalTarget] = useState<number>(25);
  const [customUnitName, setCustomUnitName] = useState<string>("Chore Stars");
  const [customUnitIcon, setCustomUnitIcon] = useState<string>("⭐");
  const [customGoalTarget, setCustomGoalTarget] = useState<number>(20);
  const [preferredPayoutRail, setPreferredPayoutRail] = useState<PayoutRail>("gpay");

  // Step 6: Invites & Tour
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [launchTourAfterFinish, setLaunchTourAfterFinish] = useState<boolean>(true);

  // Address autocomplete effect (strictly filtered by selected country + optional GPS bias)
  useEffect(() => {
    if (!addressQuery || addressQuery.trim().length < 3) {
      setAddressSuggestions([]);
      return;
    }
    let cancelled = false;
    setIsSearchingAddress(true);
    const timer = setTimeout(async () => {
      const results = await searchStreetAddressAutocomplete(
        addressQuery,
        selectedAddress.countryCode,
        deviceCoords
      );
      if (!cancelled) {
        setAddressSuggestions(results);
        setIsSearchingAddress(false);
      }
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [addressQuery, selectedAddress.countryCode, deviceCoords]);

  const handleUseCurrentLocation = () => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      setLocationNotice("Location services are unavailable on this device. Please select your country and type your address.");
      return;
    }
    setIsLocatingDevice(true);
    setLocationNotice(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        setDeviceCoords(coords);
        const resolved = await reverseGeocodeCoordinates(coords.lat, coords.lon);
        setIsLocatingDevice(false);
        if (resolved) {
          setSelectedAddress(resolved);
          setAddressQuery(resolved.formattedAddress || resolved.street);
          setAddressSuggestions([]);
          if (resolved.countryCode === "CA") {
            setInteracLinked(true);
          }
        } else {
          setLocationNotice("Located your GPS coordinates! Now start typing your street name to narrow down local results.");
        }
      },
      (err) => {
        setIsLocatingDevice(false);
        if (err.code === 1) {
          setLocationNotice("Location permission denied. Select your Country below and type your street address.");
        } else {
          setLocationNotice("Could not get GPS fix right now. Select your Country below and type your address.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  // Populate smart starter chores when entering Step 4
  useEffect(() => {
    if (step === 4 && !hasInitializedChores) {
      const built = buildSmartStarterChores(pets, {
        ...selectedAddress,
        curbsidePickupDay,
        curbsideBiWeekly,
        curbsideCurrentWeekType
      });
      setChores(built);
      setHasInitializedChores(true);
    }
  }, [step, hasInitializedChores, pets, selectedAddress, curbsidePickupDay, curbsideBiWeekly, curbsideCurrentWeekType]);

  if (!isOpen) return null;

  const handleSelectSuggestion = (s: AddressSuggestion) => {
    setSelectedAddress(s);
    setAddressQuery(s.formattedAddress);
    setAddressSuggestions([]);
    if (s.countryCode === "CA") {
      setInteracLinked(true);
    }
  };

  const handleAddMember = () => {
    const cleanName = newMemberName.trim();
    if (!cleanName) return;
    const idx = members.length + 1;
    const newMem: OnboardingMemberDraft = {
      id: `${cleanName.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}`,
      firstName: cleanName,
      lastName: adminLastName.trim() || "",
      nickname: newMemberNickname.trim(),
      role: newMemberRole,
      age: newMemberRole === "Parent" ? 35 : Math.max(3, Math.min(25, Number(newMemberAge) || 12)),
      residency: "Full-Time",
      color: MEMBER_COLORS[idx % MEMBER_COLORS.length],
      avatarEmoji: newMemberRole === "Parent" ? "🏠" : newMemberAge >= 12 ? "🎧" : "🚀",
      inviteCode: generateInviteCodeForMember(cleanName, idx)
    };
    setMembers(prev => [...prev, newMem]);
    setNewMemberName("");
    setNewMemberNickname("");
  };

  const handleRemoveMember = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  const handleUpdateMemberResidency = (
    id: string,
    residency: "Full-Time" | "Bi-Weekly" | "Weekends" | "Casual"
  ) => {
    setMembers(prev => prev.map(m => (m.id === id ? { ...m, residency } : m)));
  };

  const handleAddPet = () => {
    const cleanName = newPetName.trim();
    if (!cleanName) return;
    const newPet: OnboardingPetDraft = {
      id: `pet_${Date.now()}`,
      name: cleanName,
      type: newPetType,
      routine: newPetRoutine,
      care:
        newPetType === "Dog"
          ? "Feed breakfast & supper, outdoor walk/yard routine, fresh water"
          : newPetType === "Cat"
          ? "Feed morning & evening, scoop litter box daily, fresh water"
          : "Daily feeding, habitat check & fresh water"
    };
    setPets(prev => [...prev, newPet]);
    setNewPetName("");
    // Re-sync starter chores next time Step 4 opens
    setHasInitializedChores(false);
  };

  const handleRemovePet = (id: string) => {
    setPets(prev => prev.filter(p => p.id !== id));
    setHasInitializedChores(false);
  };

  const handleTogglePack = (packId: string) => {
    const packChores = chores.filter(c => c.packId === packId);
    const allEnabled = packChores.length > 0 && packChores.every(c => c.enabled);
    setChores(prev =>
      prev.map(c => (c.packId === packId ? { ...c, enabled: !allEnabled } : c))
    );
  };

  const handleAddCustomChore = () => {
    const cleanTask = newChoreTask.trim();
    if (!cleanTask) return;
    const custom: OnboardingChoreDraft = {
      id: `custom_${Date.now()}`,
      task: cleanTask,
      description: newChoreDesc.trim() || "Household routine task",
      frequency: newChoreFreq,
      targetDay: newChoreFreq === "Daily" ? "Mon – Sun" : "Saturday",
      rotationGroup: newChoreGroup,
      requirePhotoProof: newChorePhoto,
      points: newChoreFreq === "Daily" ? 5 : 15,
      enabled: true,
      packId: "custom"
    };
    setChores(prev => [...prev, custom]);
    setNewChoreTask("");
    setNewChoreDesc("");
    setNewChorePhoto(false);
  };

  const handleFinishWizard = () => {
    backupCurrentHouseholdBeforeCleanSlate();

    const finalAdminName = adminFirstName.trim() || "Admin";
    const finalAdminLast = adminLastName.trim() || "";
    const finalAdminNick = adminNickname.trim() || finalAdminName;

    // Build complete member list including the primary Admin
    const adminDraft: OnboardingMemberDraft = {
      id: finalAdminName.toLowerCase(),
      firstName: finalAdminName,
      lastName: finalAdminLast,
      nickname: finalAdminNick,
      role: "Parent",
      age: 38,
      residency: "Full-Time",
      color: "#2563EB",
      avatarEmoji: "👑",
      inviteCode: generateInviteCodeForMember(finalAdminName, 0),
      gpayHandle: googlePayHandle.trim() || adminEmail.trim(),
      applePayHandle: applePayHandle.trim()
    };

    const allMembers = [
      adminDraft,
      ...members.filter(m => m.firstName.toLowerCase() !== finalAdminName.toLowerCase())
    ];

    // Save UserProfile records with age-based birthdates for 12+ vs <=11 split
    const currentYear = new Date().getFullYear();
    const newProfilesMap: Record<string, UserProfile> = {};
    allMembers.forEach(m => {
      const birthYear = currentYear - (m.age || 12);
      const bday = `${birthYear}-06-15`;
      const prof: UserProfile = {
        id: m.firstName.toLowerCase().trim(),
        firstName: m.firstName.trim(),
        lastName: m.lastName.trim() || finalAdminLast,
        nickname: m.nickname.trim() || undefined,
        displayName: `${m.firstName.trim()} ${m.lastName.trim() || finalAdminLast}`.trim(),
        initials: generateInitials(m.firstName, m.lastName || finalAdminLast),
        birthday: bday,
        email: m.role === "Parent" ? adminEmail : "",
        avatarEmoji: m.avatarEmoji,
        bio: "",
        role: m.role,
        residency: m.residency === "Weekends" ? "Bi-Weekly" : m.residency,
        favoriteColor: m.color,
        tierOverride: m.role === "Parent" ? "adult" : m.age >= 12 ? "teen" : "junior",
        updatedAt: Date.now()
      };
      newProfilesMap[prof.id] = prof;
      saveUserProfile(prof);

      if (m.role === "Kid") {
        saveKidRewardProfile({
          kidName: m.firstName.trim(),
          topWish:
            rewardMode === "screentime"
              ? `${screenTimeMinutes} mins Bonus Screen Time`
              : rewardMode === "custom"
              ? `${customGoalTarget} ${customUnitName}`
              : `$${baseAllowanceAmount} Weekly Allowance`,
          targetGoalAmount: baseAllowanceAmount || 15,
          platforms: {
            ...(m.gpayHandle ? { gpay: m.gpayHandle } : {}),
            ...(m.applePayHandle ? { applepay: m.applePayHandle } : {})
          },
          lastUpdated: Date.now()
        });
      }
    });

    try {
      localStorage.setItem("weekly_chores_user_profiles_v1", JSON.stringify(newProfilesMap));
    } catch {}

    const inspectionDay =
      weekStartDay === "Monday"
        ? "Sunday"
        : weekStartDay === "Sunday"
        ? "Saturday"
        : weekStartDay === "Saturday"
        ? "Friday"
        : "Thursday";

    saveHouseholdSetupConfig({
      isCleanSlateActive: true,
      hasCompletedOnboarding: true,
      hasCompletedSpotlightTour: !launchTourAfterFinish,
      householdName: householdName.trim() || `${finalAdminName}'s Hub`,
      adminName: finalAdminName,
      adminLastName: finalAdminLast,
      adminNickname: finalAdminNick,
      adminEmail: adminEmail.trim(),
      adminPin: adminPin.trim() || "1234",
      address: {
        formattedAddress: selectedAddress.formattedAddress || addressQuery.trim() || "Canada",
        street: selectedAddress.street || addressQuery.trim(),
        city: selectedAddress.city,
        stateProvince: selectedAddress.stateProvince,
        postalCode: selectedAddress.postalCode,
        countryCode: selectedAddress.countryCode,
        currency: selectedAddress.currency,
        curbsidePickupDay,
        curbsideBiWeekly,
        curbsideCurrentWeekType
      },
      ecosystem: {
        googlePayLinked,
        googlePayHandle: googlePayHandle.trim() || adminEmail.trim(),
        applePayLinked,
        applePayHandle: applePayHandle.trim(),
        interacLinked,
        interacEmail: adminEmail.trim(),
        googleFamilyLink,
        googleCalendarEmail: adminEmail.trim(),
        appleFamilySharing,
        xboxFamily,
        playstationFamily,
        nintendoSwitchParental
      },
      weekStartDay,
      inspectionDay,
      custodyConfig: {
        pattern: "biweekly",
        transitionDay: custodyTransitionDay,
        transitionTime: custodyTransitionTime,
        isHereThisWeek: custodyIsHereThisWeek
      },
      rewardStructure: {
        mode: rewardMode,
        cadence: rewardCadence,
        baseAllowanceAmount,
        screenTimeMinutes,
        pointsPerChore,
        monthlyBonusPrize,
        monthlyGoalTarget,
        customUnitName,
        customUnitIcon,
        customGoalTarget,
        preferredPayoutRail
      },
      kidWelcomeCompleted: {}
    });

    onCompleteOnboarding({
      householdName: householdName.trim() || `${finalAdminName}'s Hub`,
      adminName: finalAdminName,
      members: allMembers,
      pets,
      chores: chores.filter(c => c.enabled),
      weekStartDay,
      monthlyIncentive:
        rewardMode === "custom"
          ? `${customUnitIcon} ${customGoalTarget} ${customUnitName} (${monthlyBonusPrize})`
          : rewardMode === "screentime"
          ? `🎮 ${screenTimeMinutes}m Screen Time + ${monthlyBonusPrize}`
          : monthlyBonusPrize,
      monthlyGoalTarget,
      startSpotlightTour: launchTourAfterFinish
    });
  };

  const stepTitles = [
    { num: 1, label: "Admin & Address", icon: MapPin },
    { num: 2, label: "Family, Pets & Apps", icon: Users },
    { num: 3, label: "Occupancy & Custody", icon: Calendar },
    { num: 4, label: "Chores & Start Day", icon: ListTodo },
    { num: 5, label: "Rewards & Wallets", icon: Gift },
    { num: 6, label: "Roll Out Invites", icon: Send }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto modal-safe-area"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto flex flex-col max-h-full text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                <Sparkles className="w-5 h-5 text-amber-200" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-black tracking-tight truncate">
                    Clean Slate Household Setup
                  </h2>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full shrink-0">
                    Step {step} of {totalSteps}
                  </span>
                </div>
                <p className="text-[11px] text-white/85 truncate">
                  {stepTitles[step - 1]?.label} • First-Run Household Initialization
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {onRestoreThomPreset && (
                <button
                  type="button"
                  onClick={() => {
                    restoreThomsFamilyPresetConfig();
                    onRestoreThomPreset();
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-[10px] font-bold flex items-center gap-1 transition cursor-pointer"
                  title="Restore Thom's Family Preset"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Thom&apos;s Preset</span>
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition cursor-pointer"
                title="Close Wizard"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Progress Pills */}
          <div className="grid grid-cols-6 gap-1 mt-3">
            {stepTitles.map((s) => {
              const isActive = step === s.num;
              const isDone = step > s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setStep(s.num)}
                  className={`py-1 px-1.5 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer truncate ${
                    isActive
                      ? "bg-white text-indigo-950 shadow-xs font-black"
                      : isDone
                      ? "bg-emerald-500/30 text-emerald-100 border border-emerald-400/40"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  <span>{isDone ? "✓" : s.num}</span>
                  <span className="hidden sm:inline truncate">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 text-xs">
          {/* STEP 1: ADMIN ACCOUNT & FULL STREET ADDRESS AUTOCOMPLETE */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-black uppercase tracking-wider text-[11px]">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>1. Primary Parent / Admin Profile</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={adminFirstName}
                      onChange={(e) => setAdminFirstName(e.target.value)}
                      placeholder="e.g. Thom"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={adminLastName}
                      onChange={(e) => setAdminLastName(e.target.value)}
                      placeholder="e.g. Smith"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Nickname (Optional — shown in Hub greeting)
                    </label>
                    <input
                      type="text"
                      value={adminNickname}
                      onChange={(e) => setAdminNickname(e.target.value)}
                      placeholder="e.g. Dad, Captain, Mom..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Household Hub Name
                    </label>
                    <input
                      type="text"
                      value={householdName}
                      onChange={(e) => setHouseholdName(e.target.value)}
                      placeholder="e.g. Our Family Hub"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Admin Email (for Google/Apple Family & Wallets)
                    </label>
                    <input
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="parent@gmail.com"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      4-Digit Parent Security PIN
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      value={adminPin}
                      onChange={(e) => setAdminPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="1234"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 font-mono font-bold tracking-widest focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Full Street Address with Country Filter, GPS Location & Autocomplete */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-black uppercase tracking-wider text-[11px]">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>2. Home Street Address (Country &amp; Currency)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                    {selectedAddress.countryCode === "CA" ? "🇨🇦 Canada (CAD $)" : "🇺🇸 USA (USD $)"}
                  </span>
                </div>

                {/* Step 2a: Country Dropdown First + Use Current Location Button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      1. Select Country First
                    </label>
                    <select
                      value={selectedAddress.countryCode}
                      onChange={(e) => {
                        const code = e.target.value === "US" ? "US" : "CA";
                        setSelectedAddress(prev => ({
                          ...prev,
                          countryCode: code,
                          currency: code === "CA" ? "CAD" : "USD"
                        }));
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-emerald-500"
                    >
                      <option value="CA">🇨🇦 Canada (CAD $)</option>
                      <option value="US">🇺🇸 United States (USD $)</option>
                    </select>
                  </div>

                  <div className="flex flex-col justify-end">
                    <button
                      type="button"
                      onClick={handleUseCurrentLocation}
                      disabled={isLocatingDevice}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-60"
                    >
                      <LocateFixed className={`w-4 h-4 ${isLocatingDevice ? "animate-spin" : ""}`} />
                      <span>{isLocatingDevice ? "Detecting Location..." : "Use My Current Location"}</span>
                    </button>
                  </div>
                </div>

                {locationNotice && (
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 font-semibold">
                    {locationNotice}
                  </div>
                )}

                <div className="relative">
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">
                    2. Search Street Address in {selectedAddress.countryCode === "CA" ? "Canada" : "the United States"}
                  </label>
                  <input
                    type="text"
                    value={addressQuery}
                    onChange={(e) => setAddressQuery(e.target.value)}
                    placeholder={
                      selectedAddress.countryCode === "CA"
                        ? "Start typing address (e.g. 123 Portage Ave, Winnipeg...)"
                        : "Start typing address (e.g. 350 Fifth Ave, New York...)"
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold focus:outline-none focus:border-emerald-500"
                  />
                  {isSearchingAddress && (
                    <span className="absolute right-3 top-8 text-[10px] text-slate-400 animate-pulse">
                      Searching...
                    </span>
                  )}

                  {addressSuggestions.length > 0 && (
                    <div className="mt-1 bg-slate-950 border border-slate-700 rounded-xl shadow-xl overflow-hidden divide-y divide-slate-800 z-20">
                      {addressSuggestions.map((s, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectSuggestion(s)}
                          className="w-full px-3 py-2 text-left hover:bg-slate-800/90 flex items-center justify-between gap-2 transition cursor-pointer"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate font-semibold text-slate-200">
                              {s.formattedAddress}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 shrink-0">
                            {s.countryCode === "CA" ? "🇨🇦 CAD" : "🇺🇸 USD"}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-0.5">City</label>
                    <input
                      type="text"
                      value={selectedAddress.city}
                      onChange={(e) =>
                        setSelectedAddress(prev => ({ ...prev, city: e.target.value }))
                      }
                      placeholder="City"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                      Province / State
                    </label>
                    <input
                      type="text"
                      value={selectedAddress.stateProvince}
                      onChange={(e) =>
                        setSelectedAddress(prev => ({ ...prev, stateProvince: e.target.value }))
                      }
                      placeholder="MB / ON / NY"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                      {selectedAddress.countryCode === "CA" ? "Postal Code" : "ZIP Code"}
                    </label>
                    <input
                      type="text"
                      value={selectedAddress.postalCode}
                      onChange={(e) =>
                        setSelectedAddress(prev => ({ ...prev, postalCode: e.target.value }))
                      }
                      placeholder={selectedAddress.countryCode === "CA" ? "R3B 2E9" : "10001"}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Municipal Curbside Schedule */}
                <div className="pt-2 border-t border-slate-700/70 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">
                      Municipal Curbside Bin Night
                    </label>
                    <select
                      value={curbsidePickupDay}
                      onChange={(e) => setCurbsidePickupDay(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                    >
                      <option value="Sunday Evening (Monday Pickup)" className="bg-slate-900 text-white">Sunday Evening (Mon Pickup)</option>
                      <option value="Monday Evening (Tuesday Pickup)" className="bg-slate-900 text-white">Monday Evening (Tue Pickup)</option>
                      <option value="Tuesday Evening (Wednesday Pickup)" className="bg-slate-900 text-white">Tuesday Evening (Wed Pickup)</option>
                      <option value="Wednesday Evening (Thursday Pickup)" className="bg-slate-900 text-white">Wednesday Evening (Thu Pickup)</option>
                      <option value="Thursday Evening (Friday Pickup)" className="bg-slate-900 text-white">Thursday Evening (Fri Pickup)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">
                      This Week&apos;s Alternating Bin
                    </label>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCurbsideCurrentWeekType("recycling")}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                          curbsideCurrentWeekType === "recycling"
                            ? "bg-sky-500/20 border-sky-400 text-sky-300"
                            : "bg-slate-900 border-slate-700 text-slate-400"
                        }`}
                      >
                        ♻️ Recycling Week
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurbsideCurrentWeekType("waste")}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                          curbsideCurrentWeekType === "waste"
                            ? "bg-amber-500/20 border-amber-400 text-amber-300"
                            : "bg-slate-900 border-slate-700 text-slate-400"
                        }`}
                      >
                        🗑️ Waste Week
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: FAMILY ECOSYSTEM (G-PAY / APPLE PAY / APPS), MEMBERS (12+ vs <=11) & PETS */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Mobile Wallets & Family Ecosystem Links */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-300 font-black uppercase tracking-wider text-[11px]">
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span>Link Wallets & Family Ecosystem Apps</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Tap to enable for your household</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGooglePayLinked(v => !v)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      googlePayLinked
                        ? "bg-sky-500/20 border-sky-400 text-sky-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">💳 Google Pay</div>
                      <div className="text-[10px] opacity-80">1-Tap G-Pay Transfers</div>
                    </div>
                    {googlePayLinked && <Check className="w-4 h-4 text-sky-400 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setApplePayLinked(v => !v)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      applePayLinked
                        ? "bg-slate-200/20 border-slate-300 text-white"
                        : "bg-slate-900/70 border-slate-700 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">🍎 Apple Pay</div>
                      <div className="text-[10px] opacity-80">Apple Cash / Wallet</div>
                    </div>
                    {applePayLinked && <Check className="w-4 h-4 text-white shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoogleFamilyLink(v => !v)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      googleFamilyLink
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">👨‍👩‍👧 Google Family</div>
                      <div className="text-[10px] opacity-80">Family Link & Calendar</div>
                    </div>
                    {googleFamilyLink && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setAppleFamilySharing(v => !v)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      appleFamilySharing
                        ? "bg-indigo-500/20 border-indigo-400 text-indigo-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">☁️ Apple Family</div>
                      <div className="text-[10px] opacity-80">iOS Screen Time & iCloud</div>
                    </div>
                    {appleFamilySharing && <Check className="w-4 h-4 text-indigo-400 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setXboxFamily(v => !v)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      xboxFamily
                        ? "bg-emerald-600/20 border-emerald-500 text-emerald-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">🟩 Xbox / MS Family</div>
                      <div className="text-[10px] opacity-80">Console Screen Time</div>
                    </div>
                    {xboxFamily && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setNintendoSwitchParental(v => !v)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                      nintendoSwitchParental
                        ? "bg-rose-500/20 border-rose-400 text-rose-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">🎮 Switch / PSN</div>
                      <div className="text-[10px] opacity-80">Console Bonus Time</div>
                    </div>
                    {nintendoSwitchParental && <Check className="w-4 h-4 text-rose-400 shrink-0" />}
                  </button>
                </div>
              </div>

              {/* Add Household Members (Split Kid Profiles: 12 & Up vs 11 & Under) */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-300 font-black uppercase tracking-wider text-[11px]">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Add Co-Parents & Kids (No Invites Sent Yet)</span>
                  </div>
                  <span className="text-[10px] text-amber-300 font-bold">
                    Age 12+ unlocks Gamertags, Wallets & Wishlists
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                  <div className="sm:col-span-4">
                    <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={newMemberName}
                      onChange={(e) => setNewMemberName(e.target.value)}
                      placeholder="e.g. Sydney"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                      Nickname (Opt)
                    </label>
                    <input
                      type="text"
                      value={newMemberNickname}
                      onChange={(e) => setNewMemberNickname(e.target.value)}
                      placeholder="e.g. Syd"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Role</label>
                    <select
                      value={newMemberRole}
                      onChange={(e) => setNewMemberRole(e.target.value === "Parent" ? "Parent" : "Kid")}
                      className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                    >
                      <option value="Kid" className="bg-slate-900 text-white">Kid</option>
                      <option value="Parent" className="bg-slate-900 text-white">Parent</option>
                    </select>
                  </div>
                  {newMemberRole === "Kid" && (
                    <div className="sm:col-span-1">
                      <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Age</label>
                      <input
                        type="number"
                        min={3}
                        max={22}
                        value={newMemberAge}
                        onChange={(e) => setNewMemberAge(Number(e.target.value) || 10)}
                        className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold text-center"
                      />
                    </div>
                  )}
                  <div className={newMemberRole === "Kid" ? "sm:col-span-2" : "sm:col-span-3"}>
                    <button
                      type="button"
                      onClick={handleAddMember}
                      className="w-full py-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

                {/* Member List */}
                <div className="space-y-1.5 pt-1">
                  {members.length === 0 ? (
                    <div className="text-center py-3 text-slate-400 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
                      Add your co-parent and kids above. Kids 12 &amp; up get full profile customization (gamertags, shopping wishlists, G-Pay/Apple Pay); 11 &amp; under get kid-safe basic settings.
                    </div>
                  ) : (
                    members.map((m) => {
                      const isTeen = m.role === "Kid" && m.age >= 12;
                      return (
                        <div
                          key={m.id}
                          className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0"
                              style={{ backgroundColor: m.color + "30", border: `1.5px solid ${m.color}` }}
                            >
                              {m.avatarEmoji}
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-white">{m.firstName}</span>
                                {m.nickname && (
                                  <span className="text-[10px] text-slate-400">({m.nickname})</span>
                                )}
                                <span
                                  className={`text-[9.5px] font-extrabold px-1.5 py-0.2 rounded-md ${
                                    m.role === "Parent"
                                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                      : isTeen
                                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                      : "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                                  }`}
                                >
                                  {m.role === "Parent"
                                    ? "Parent Admin"
                                    : isTeen
                                    ? `Age ${m.age} • 12+ Teen (Social/Shopping/Gamertags/Wallets)`
                                    : `Age ${m.age} • 11 & Under (Basic Kid-Safe Settings)`}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(m.id)}
                            className="p-1 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Add Pets */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5">
                <div className="flex items-center gap-2 text-amber-300 font-black uppercase tracking-wider text-[11px]">
                  <PawPrint className="w-4 h-4 text-amber-400" />
                  <span>Household Pets (Auto-Suggests Pet Care Chores in Step 4)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                  <div className="sm:col-span-5">
                    <input
                      type="text"
                      value={newPetName}
                      onChange={(e) => setNewPetName(e.target.value)}
                      placeholder="Pet Name (e.g. Ellie, Casey)"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <select
                      value={newPetType}
                      onChange={(e) => setNewPetType(e.target.value as any)}
                      className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                    >
                      <option value="Dog" className="bg-slate-900 text-white">🐶 Dog</option>
                      <option value="Cat" className="bg-slate-900 text-white">🐱 Cat</option>
                      <option value="Other" className="bg-slate-900 text-white">🐾 Other Pet</option>
                    </select>
                  </div>
                  <div className="sm:col-span-4">
                    <button
                      type="button"
                      onClick={handleAddPet}
                      className="w-full py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Pet</span>
                    </button>
                  </div>
                </div>

                {pets.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pets.map((p) => (
                      <span
                        key={p.id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-amber-200"
                      >
                        <span>{p.type === "Dog" ? "🐶" : p.type === "Cat" ? "🐱" : "🐾"}</span>
                        <span>{p.name}</span>
                        <button
                          type="button"
                          onClick={() => handleRemovePet(p.id)}
                          className="text-slate-400 hover:text-rose-400 ml-1 cursor-pointer"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: SPECIAL OCCUPANCY & CUSTODY SCHEDULES */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center gap-2 text-pink-300 font-black uppercase tracking-wider text-[11px]">
                  <Calendar className="w-4 h-4 text-pink-400" />
                  <span>Set Member Occupancy & Shared Custody Schedules</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Auto-Assign automatically skips Bi-Weekly members on their away weeks and pro-rates their monthly leaderboard goals by 50%.
                </p>

                <div className="space-y-2">
                  {members.length === 0 ? (
                    <div className="text-center py-4 text-slate-400 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
                      No additional members added yet in Step 2 (you can still configure default custody rules below or go back to Step 2).
                    </div>
                  ) : (
                    members.map((m) => (
                      <div
                        key={m.id}
                        className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{m.avatarEmoji}</span>
                          <div>
                            <div className="font-bold text-white text-xs">{m.firstName}</div>
                            <div className="text-[10px] text-slate-400">{m.role}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-1">
                          {(["Full-Time", "Bi-Weekly", "Weekends", "Casual"] as const).map((preset) => (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => handleUpdateMemberResidency(m.id, preset)}
                              className={`px-2 py-1.5 rounded-lg text-[10px] font-bold border transition cursor-pointer ${
                                m.residency === preset
                                  ? "bg-pink-500/25 border-pink-400 text-pink-200 font-black"
                                  : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                              }`}
                            >
                              {preset}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Bi-Weekly Custody Transition Settings */}
                <div className="pt-3 border-t border-slate-700/70 space-y-2.5">
                  <div className="text-[11px] font-bold text-pink-300">
                    Bi-Weekly Transition Day, Time &amp; Current Week Status:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        Transition Day
                      </label>
                      <select
                        value={custodyTransitionDay}
                        onChange={(e) => setCustodyTransitionDay(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                      >
                        <option value="Sunday" className="bg-slate-900 text-white">Sunday</option>
                        <option value="Friday" className="bg-slate-900 text-white">Friday</option>
                        <option value="Monday" className="bg-slate-900 text-white">Monday</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        Transition Time
                      </label>
                      <select
                        value={custodyTransitionTime}
                        onChange={(e) => setCustodyTransitionTime(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                      >
                        <option value="16:00" className="bg-slate-900 text-white">4:00 PM</option>
                        <option value="17:00" className="bg-slate-900 text-white">5:00 PM</option>
                        <option value="18:00" className="bg-slate-900 text-white">6:00 PM</option>
                        <option value="09:00" className="bg-slate-900 text-white">9:00 AM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        Status This Week
                      </label>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setCustodyIsHereThisWeek(true)}
                          className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold border transition cursor-pointer ${
                            custodyIsHereThisWeek
                              ? "bg-emerald-500/25 border-emerald-400 text-emerald-200"
                              : "bg-slate-900 border-slate-700 text-slate-400"
                          }`}
                        >
                          🏠 Here
                        </button>
                        <button
                          type="button"
                          onClick={() => setCustodyIsHereThisWeek(false)}
                          className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-bold border transition cursor-pointer ${
                            !custodyIsHereThisWeek
                              ? "bg-amber-500/25 border-amber-400 text-amber-200"
                              : "bg-slate-900 border-slate-700 text-slate-400"
                          }`}
                        >
                          👋 Away
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: WEEK START DAY & SMART CHORE PACKS */}
          {step === 4 && (
            <div className="space-y-4">
              {/* Preferred Week Start Day */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-300 font-black uppercase tracking-wider text-[11px]">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>Preferred Chore Week Start Day</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Inspection defaults to end of cycle
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {(["Monday", "Sunday", "Saturday", "Friday"] as WeekStartDay[]).map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setWeekStartDay(day)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        weekStartDay === day
                          ? "bg-indigo-600 border-indigo-400 text-white shadow-sm"
                          : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* 1-Tap Starter Packs */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-300 font-black uppercase tracking-wider text-[11px]">
                    <ListTodo className="w-4 h-4 text-emerald-400" />
                    <span>Smart Starter Chore Packs (Tap to Toggle or Edit)</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 font-bold">
                    {chores.filter(c => c.enabled).length} active chores
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {[
                    { id: "pets", label: "🐾 Pet Care Pack" },
                    { id: "kitchen", label: "🍽️ Daily Kitchen" },
                    { id: "kids_weekly", label: "🛏️ Kid Rooms/Laundry" },
                    { id: "curbside", label: "🏡 Basement & Bins" }
                  ].map((pk) => {
                    const packItems = chores.filter(c => c.packId === pk.id);
                    const anyOn = packItems.some(c => c.enabled);
                    return (
                      <button
                        key={pk.id}
                        type="button"
                        onClick={() => handleTogglePack(pk.id)}
                        className={`py-1.5 px-2 rounded-xl text-[11px] font-bold border transition cursor-pointer ${
                          anyOn
                            ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                            : "bg-slate-900 border-slate-700 text-slate-400"
                        }`}
                      >
                        {pk.label}
                      </button>
                    );
                  })}
                </div>

                {/* Chore List with Editable Descriptions & Photo Proof Toggle */}
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {chores.map((c) => (
                    <div
                      key={c.id}
                      className={`p-2.5 rounded-xl border transition ${
                        c.enabled
                          ? "bg-slate-900 border-slate-700"
                          : "bg-slate-900/40 border-slate-800 opacity-50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <label className="flex items-start gap-2 cursor-pointer flex-1 min-w-0">
                          <input
                            type="checkbox"
                            checked={c.enabled}
                            onChange={() =>
                              setChores(prev =>
                                prev.map(item =>
                                  item.id === c.id ? { ...item, enabled: !item.enabled } : item
                                )
                              )
                            }
                            className="mt-0.5 rounded accent-emerald-500"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-white text-xs truncate">{c.task}</div>
                            <input
                              type="text"
                              value={c.description}
                              onChange={(e) =>
                                setChores(prev =>
                                  prev.map(item =>
                                    item.id === c.id ? { ...item, description: e.target.value } : item
                                  )
                                )
                              }
                              className="w-full mt-1 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] text-slate-300"
                            />
                          </div>
                        </label>

                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300">
                            {c.frequency}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setChores(prev =>
                                prev.map(item =>
                                  item.id === c.id
                                    ? { ...item, requirePhotoProof: !item.requirePhotoProof }
                                    : item
                                )
                              )
                            }
                            className={`p-1 rounded-lg border text-[10px] transition cursor-pointer ${
                              c.requirePhotoProof
                                ? "bg-amber-500/20 border-amber-400 text-amber-300"
                                : "bg-slate-800 border-slate-700 text-slate-500"
                            }`}
                            title="Require Photo Proof"
                          >
                            <Camera className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Custom Chore */}
                <div className="pt-2 border-t border-slate-700/70 grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      value={newChoreTask}
                      onChange={(e) => setNewChoreTask(e.target.value)}
                      placeholder="+ Custom Chore Title..."
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      value={newChoreDesc}
                      onChange={(e) => setNewChoreDesc(e.target.value)}
                      placeholder="Tasks / steps involved..."
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      value={newChoreFreq}
                      onChange={(e) => setNewChoreFreq(e.target.value as any)}
                      className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                    >
                      <option value="Daily" className="bg-slate-900 text-white">Daily</option>
                      <option value="Weekly" className="bg-slate-900 text-white">Weekly</option>
                      <option value="Bi-Weekly" className="bg-slate-900 text-white">Bi-Weekly</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      onClick={handleAddCustomChore}
                      className="w-full py-1.5 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: WEEKLY / MONTHLY REWARD STRUCTURE */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-black uppercase tracking-wider text-[11px]">
                  <Gift className="w-4 h-4 text-amber-400" />
                  <span>Choose Your Household Reward Structure</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "monetary", title: "💵 Monetary Allowance", desc: `Weekly/Monthly ${selectedAddress.currency} payout` },
                    { id: "screentime", title: "🎮 Screen Time / Gaming", desc: "Bonus console or device minutes" },
                    { id: "points", title: "⭐ Points & Prize Store", desc: "Earn points per chore for prizes" },
                    { id: "hybrid", title: "🔥 Hybrid (Allowance + Bonus)", desc: "Base allowance + Monthly Top Prize" },
                    { id: "custom", title: "🛠️ Custom Reward System", desc: "Define your own unit (Robux, Stars, etc.)" }
                  ].map((rm) => (
                    <button
                      key={rm.id}
                      type="button"
                      onClick={() => setRewardMode(rm.id as RewardMode)}
                      className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                        rewardMode === rm.id
                          ? "bg-amber-500/20 border-amber-400 text-amber-100 shadow-xs"
                          : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="font-bold text-xs">{rm.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{rm.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Dynamic Fields Based on Selected Reward Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-700/70">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">
                      Payout / Reset Cadence
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(["weekly", "biweekly", "monthly"] as RewardCadence[]).map((cad) => (
                        <button
                          key={cad}
                          type="button"
                          onClick={() => setRewardCadence(cad)}
                          className={`py-1.5 px-2 rounded-lg text-[11px] font-bold capitalize border transition cursor-pointer ${
                            rewardCadence === cad
                              ? "bg-indigo-600 border-indigo-400 text-white"
                              : "bg-slate-900 border-slate-700 text-slate-400"
                          }`}
                        >
                          {cad}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">
                      Preferred Payout Wallet / Method
                    </label>
                    <select
                      value={preferredPayoutRail}
                      onChange={(e) => setPreferredPayoutRail(e.target.value as PayoutRail)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                    >
                      <option value="gpay" className="bg-slate-900 text-white">💳 Google Pay (G-Pay)</option>
                      <option value="applepay" className="bg-slate-900 text-white">🍎 Apple Pay / Apple Cash</option>
                      {selectedAddress.countryCode === "CA" && (
                        <option value="interac" className="bg-slate-900 text-white">🏦 Interac e-Transfer (CAD)</option>
                      )}
                      <option value="cashapp" className="bg-slate-900 text-white">🟢 Cash App / Venmo</option>
                      <option value="cash" className="bg-slate-900 text-white">💵 Cash / In-Person</option>
                    </select>
                  </div>

                  {(rewardMode === "monetary" || rewardMode === "hybrid") && (
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        Base Allowance Amount ({selectedAddress.currency} $)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={200}
                        value={baseAllowanceAmount}
                        onChange={(e) => setBaseAllowanceAmount(Number(e.target.value) || 10)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold"
                      />
                    </div>
                  )}

                  {rewardMode === "screentime" && (
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-1">
                        Daily / Weekly Bonus Screen Time (Minutes)
                      </label>
                      <input
                        type="number"
                        min={15}
                        max={300}
                        step={15}
                        value={screenTimeMinutes}
                        onChange={(e) => setScreenTimeMinutes(Number(e.target.value) || 45)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold"
                      />
                    </div>
                  )}

                  {rewardMode === "custom" && (
                    <>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">
                          Custom Reward Unit Name
                        </label>
                        <input
                          type="text"
                          value={customUnitName}
                          onChange={(e) => setCustomUnitName(e.target.value)}
                          placeholder="e.g. Chore Bucks, Robux, Marble Jar..."
                          className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">
                            Icon Emoji
                          </label>
                          <input
                            type="text"
                            value={customUnitIcon}
                            onChange={(e) => setCustomUnitIcon(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-center"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">
                            Target Goal
                          </label>
                          <input
                            type="number"
                            value={customGoalTarget}
                            onChange={(e) => setCustomGoalTarget(Number(e.target.value) || 20)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">
                      Monthly Top Performer Bonus Prize
                    </label>
                    <input
                      type="text"
                      value={monthlyBonusPrize}
                      onChange={(e) => setMonthlyBonusPrize(e.target.value)}
                      placeholder="e.g. $15 Bonus & Pizza Night Pick"
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: ROLL OUT INVITES & LAUNCH INTERACTIVE HUB TOUR */}
          {step === 6 && (
            <div className="space-y-4">
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-300 font-black uppercase tracking-wider text-[11px]">
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Roll Out Family Invites (Or Invite Later)</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Kids customize their profile when they join
                  </span>
                </div>

                {members.length === 0 ? (
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300">
                    You can invite family members anytime from <strong>Household Hub → Invite Device</strong>.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {members.map((m) => {
                      const isTeen = m.role === "Kid" && m.age >= 12;
                      return (
                        <div
                          key={m.id}
                          className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{m.avatarEmoji}</span>
                              <span className="font-bold text-white">{m.firstName}</span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono font-bold">
                                Code: {m.inviteCode}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-1">
                              {m.role === "Parent"
                                ? "Full Co-Parent Admin Hub access"
                                : isTeen
                                ? "Age 12+ Welcome Flow: Nickname, Theme, G-Pay/Apple Pay, Gamertags & Wishlists"
                                : "Age 11 & Under Welcome Flow: Kid-safe Nickname, Emoji & Favorite Color"}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              try {
                                navigator.clipboard.writeText(
                                  `Join ${householdName}! Enter invite code ${m.inviteCode} for ${m.firstName}.`
                                );
                                setCopiedCodeId(m.id);
                                setTimeout(() => setCopiedCodeId(null), 2000);
                              } catch {}
                            }}
                            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-[11px] flex items-center gap-1 shrink-0 cursor-pointer"
                          >
                            {copiedCodeId === m.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Invite</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Interactive Spotlight Tour Toggle */}
                <label className="flex items-center justify-between gap-3 p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/40 cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
                    <div>
                      <div className="font-bold text-white text-xs">
                        Launch 6-Stop Interactive Hub Tour After Setup
                      </div>
                      <div className="text-[10px] text-indigo-200/80">
                        Points out Weekly Schedule, Auto-Assign, Monthly Calendar, Photo Proofs, Nudge &amp; Sunday Inspection.
                      </div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={launchTourAfterFinish}
                    onChange={(e) => setLaunchTourAfterFinish(e.target.checked)}
                    className="w-4 h-4 accent-indigo-500 rounded"
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Pinned Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between gap-2 shrink-0">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(s => Math.max(1, s - 1))}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 font-bold text-xs transition cursor-pointer"
            >
              Cancel
            </button>
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
            >
              <span>Next: {stepTitles[step]?.label}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinishWizard}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Finish &amp; Launch Hub 🚀</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
