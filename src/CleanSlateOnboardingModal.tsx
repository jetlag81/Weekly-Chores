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
  onRegisterBackHandler?: (fn: (() => boolean) | null) => void;
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
  onRestoreThomPreset,
  onRegisterBackHandler
}) => {
  const [step, setStep] = useState<number>(1);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const totalSteps = 6;

  // Step 1: Admin & Address State
  const [householdName, setHouseholdName] = useState("Our Family Hub");
  const [adminFirstName, setAdminFirstName] = useState("");
  const [adminLastName, setAdminLastName] = useState("");
  const [adminNickname, setAdminNickname] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
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
  const [familyStructure, setFamilyStructure] = useState<"Traditional" | "Blended" | "Single Parent">("Traditional");
  const [coParentMode, setCoParentMode] = useState<"choose" | "manual">("choose");
  const [coParentFirstName, setCoParentFirstName] = useState("");
  const [coParentLastName, setCoParentLastName] = useState("");
  const [coParentNickname, setCoParentNickname] = useState("");
  const [coParentPhone, setCoParentPhone] = useState("");
  const [coParentContactNote, setCoParentContactNote] = useState<string | null>(null);
  const [kidMode, setKidMode] = useState<"choose" | "manual">("manual");
  const [kidFirstName, setKidFirstName] = useState("");
  const [kidLastName, setKidLastName] = useState("");
  const [kidNickname, setKidNickname] = useState("");
  const [kidPhone, setKidPhone] = useState("");
  const [kidBirthday, setKidBirthday] = useState("");
  const [kidAgeOverride, setKidAgeOverride] = useState<"auto" | "teen" | "junior">("auto");
  const [kidContactNote, setKidContactNote] = useState<string | null>(null);
  const [justAddedKid, setJustAddedKid] = useState(false);
  const [showPetsSection, setShowPetsSection] = useState(false);
  const [batchMemberInput, setBatchMemberInput] = useState("");
  const [batchAddFeedback, setBatchAddFeedback] = useState<string | null>(null);

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

  // Register Android hardware Back button handler:
  // - Steps 2..6 -> go back 1 step
  // - Step 1 -> open "Do you want to exit the setup wizard?" prompt
  // - If exit prompt is already open -> dismiss prompt
  useEffect(() => {
    if (!onRegisterBackHandler) return;
    if (!isOpen) {
      onRegisterBackHandler(null);
      setShowExitConfirm(false);
      return;
    }
    onRegisterBackHandler(() => {
      if (showExitConfirm) {
        setShowExitConfirm(false);
        return true;
      }
      if (step > 1) {
        setStep(s => Math.max(1, s - 1));
        return true;
      }
      setShowExitConfirm(true);
      return true;
    });
    return () => onRegisterBackHandler(null);
  }, [isOpen, step, showExitConfirm, onRegisterBackHandler]);

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

  const calculateAgeFromBirthday = (birthdayStr: string): number => {
    if (!birthdayStr) return 12;
    const birth = new Date(birthdayStr + "T00:00:00");
    if (Number.isNaN(birth.getTime())) return 12;
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age -= 1;
    }
    return Math.max(3, Math.min(25, age));
  };

  const handleAddCoParent = () => {
    const cleanFirst = coParentFirstName.trim();
    if (!cleanFirst) return;
    const idx = members.length + 1;
    const newParent: OnboardingMemberDraft = {
      id: `${cleanFirst.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}`,
      firstName: cleanFirst,
      lastName: coParentLastName.trim() || adminLastName.trim() || "",
      nickname: coParentNickname.trim(),
      role: "Parent",
      age: 35,
      residency: "Full-Time",
      color: MEMBER_COLORS[idx % MEMBER_COLORS.length],
      avatarEmoji: "🏠",
      inviteCode: generateInviteCodeForMember(cleanFirst, idx),
      phoneNumber: coParentPhone.trim() || undefined
    };
    // Keep Parents directly below initial user and before Kids
    setMembers(prev => {
      const parents = prev.filter(m => m.role === "Parent");
      const kids = prev.filter(m => m.role !== "Parent");
      return [...parents, newParent, ...kids];
    });
    setCoParentFirstName("");
    setCoParentLastName("");
    setCoParentNickname("");
    setCoParentPhone("");
    setCoParentContactNote(null);
  };

  const handlePickCoParentContact = async () => {
    const nav = navigator as Navigator & {
      contacts?: {
        select?: (props: string[], opts?: { multiple?: boolean }) => Promise<Array<{ name?: string[]; tel?: string[] }>>;
      };
    };
    if (!nav.contacts?.select) {
      setCoParentContactNote("Contact picker isn't available in this WebView — enter Co-Parent details below.");
      setCoParentMode("manual");
      return;
    }
    try {
      const picked = await nav.contacts.select(["name", "tel"], { multiple: false });
      const fullName = (picked[0]?.name?.[0] || "").trim();
      const phone = (picked[0]?.tel?.[0] || "").trim();
      if (fullName || phone) {
        if (fullName) {
          const parts = fullName.split(/\s+/);
          setCoParentFirstName(parts[0] || "");
          setCoParentLastName(parts.slice(1).join(" ") || adminLastName.trim() || "");
        }
        if (phone) setCoParentPhone(phone);
        setCoParentContactNote(`Loaded "${fullName || phone}" from contacts — review & tap Add.`);
        setCoParentMode("manual");
      }
    } catch {
      setCoParentMode("manual");
    }
  };

  const handlePickKidContact = async () => {
    const nav = navigator as Navigator & {
      contacts?: {
        select?: (props: string[], opts?: { multiple?: boolean }) => Promise<Array<{ name?: string[]; tel?: string[] }>>;
      };
    };
    if (!nav.contacts?.select) {
      setKidContactNote("Contact picker isn't available in this WebView — enter Kid details below.");
      setKidMode("manual");
      return;
    }
    try {
      const picked = await nav.contacts.select(["name", "tel"], { multiple: false });
      const fullName = (picked[0]?.name?.[0] || "").trim();
      const phone = (picked[0]?.tel?.[0] || "").trim();
      if (fullName || phone) {
        if (fullName) {
          const parts = fullName.split(/\s+/);
          setKidFirstName(parts[0] || "");
          setKidLastName(parts.slice(1).join(" ") || adminLastName.trim() || "");
        }
        if (phone) setKidPhone(phone);
        setKidContactNote(`Loaded "${fullName || phone}" — pick their Birthday & tap Add to Household.`);
        setKidMode("manual");
      }
    } catch {
      setKidMode("manual");
    }
  };

  const handleAddKidToHousehold = () => {
    const cleanFirst = kidFirstName.trim();
    if (!cleanFirst) return;
    const idx = members.length + 1;
    const computedAge = calculateAgeFromBirthday(kidBirthday);
    const effectiveIsTeen =
      kidAgeOverride === "teen" ? true : kidAgeOverride === "junior" ? false : computedAge >= 12;

    const newKid: OnboardingMemberDraft = {
      id: `${cleanFirst.toLowerCase().replace(/\s+/g, "_")}_${Date.now()}`,
      firstName: cleanFirst,
      lastName: kidLastName.trim() || adminLastName.trim() || "",
      nickname: kidNickname.trim(),
      role: "Kid",
      age: computedAge,
      birthday: kidBirthday || undefined,
      ageStatusOverride: kidAgeOverride,
      phoneNumber: kidPhone.trim() || undefined,
      residency: "Full-Time",
      color: MEMBER_COLORS[idx % MEMBER_COLORS.length],
      avatarEmoji: effectiveIsTeen ? "🎧" : "🚀",
      inviteCode: generateInviteCodeForMember(cleanFirst, idx)
    };
    setMembers(prev => [...prev, newKid]);
    setKidFirstName("");
    setKidLastName("");
    setKidNickname("");
    setKidPhone("");
    setKidBirthday("");
    setKidAgeOverride("auto");
    setKidContactNote(null);
    setJustAddedKid(true);
  };

  const handleBatchAddMembers = () => {
    const tokens = batchMemberInput
      .split(/[\n,;]+/)
      .map(t => t.trim())
      .filter(Boolean);
    if (tokens.length === 0) return;

    const baseIdx = members.length + 1;
    const timestamp = Date.now();
    const added: OnboardingMemberDraft[] = [];

    tokens.forEach((token, i) => {
      const isParent = /\bparent\b/i.test(token);
      const ageMatch = token.match(/(?:^|\s|\(|:)(\d{1,2})(?:\)|\s|$)/);
      const parsedAge = ageMatch ? Number(ageMatch[1]) : 12;
      const cleanName = token
        .replace(/\(?\bparent\b\)?/gi, "")
        .replace(/\(?\b\d{1,2}\)?/g, "")
        .replace(/[:\-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      if (!cleanName) return;
      const idx = baseIdx + added.length;
      const role: "Parent" | "Kid" = isParent ? "Parent" : "Kid";
      const age = role === "Parent" ? 35 : Math.max(3, Math.min(25, parsedAge || 12));

      added.push({
        id: `${cleanName.toLowerCase().replace(/\s+/g, "_")}_${timestamp}_${i}`,
        firstName: cleanName,
        lastName: adminLastName.trim() || "",
        nickname: "",
        role,
        age,
        residency: "Full-Time",
        color: MEMBER_COLORS[idx % MEMBER_COLORS.length],
        avatarEmoji: role === "Parent" ? "🏠" : age >= 12 ? "🎧" : "🚀",
        inviteCode: generateInviteCodeForMember(cleanName, idx)
      });
    });

    if (added.length > 0) {
      setMembers(prev => [...prev, ...added]);
      setBatchMemberInput("");
      setBatchAddFeedback(`Added ${added.length} member${added.length === 1 ? "" : "s"}.`);
      setTimeout(() => setBatchAddFeedback(null), 3500);
    }
  };

  const handlePickDeviceContacts = async () => {
    const nav = navigator as Navigator & {
      contacts?: { select?: (props: string[], opts?: { multiple?: boolean }) => Promise<Array<{ name?: string[] }>> };
    };
    if (!nav.contacts?.select) {
      setBatchAddFeedback("Contact picker isn't supported in this WebView — use Quick Batch Add above.");
      setTimeout(() => setBatchAddFeedback(null), 4000);
      return;
    }
    try {
      const picked = await nav.contacts.select(["name"], { multiple: true });
      const names = picked
        .map(c => (c.name?.[0] || "").trim().split(/\s+/)[0])
        .filter(Boolean);
      if (names.length === 0) return;

      const baseIdx = members.length + 1;
      const timestamp = Date.now();
      const added: OnboardingMemberDraft[] = names.map((cleanName, i) => {
        const idx = baseIdx + i;
        return {
          id: `${cleanName.toLowerCase().replace(/\s+/g, "_")}_${timestamp}_c${i}`,
          firstName: cleanName,
          lastName: adminLastName.trim() || "",
          nickname: "",
          role: "Kid",
          age: 12,
          residency: "Full-Time",
          color: MEMBER_COLORS[idx % MEMBER_COLORS.length],
          avatarEmoji: "🎧",
          inviteCode: generateInviteCodeForMember(cleanName, idx)
        };
      });
      setMembers(prev => [...prev, ...added]);
      setBatchAddFeedback(`Imported ${added.length} from contacts (adjust ages below if needed).`);
      setTimeout(() => setBatchAddFeedback(null), 4000);
    } catch {
      // User cancelled contact picker
    }
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
      phoneNumber: adminPhone.trim() || undefined,
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
      adminPhone: adminPhone.trim() || undefined,
      adminPin: adminPin.trim() || "1234",
      familyStructure,
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
      onClick={() => setShowExitConfirm(true)}
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
                onClick={() => setShowExitConfirm(true)}
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
                      Admin Email (for Google/Apple Family &amp; Wallets)
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
                      Admin Phone Number
                    </label>
                    <input
                      type="tel"
                      value={adminPhone}
                      onChange={(e) => setAdminPhone(e.target.value)}
                      placeholder="(555) 123-4567"
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
                    <span>2. Home Street Address</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                    {selectedAddress.countryCode === "CA" ? "🇨🇦 Canada" : "🇺🇸 United States"}
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
                      <option value="CA">🇨🇦 Canada</option>
                      <option value="US">🇺🇸 United States</option>
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
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-emerald-300 shrink-0">
                            {s.countryCode === "CA" ? "🇨🇦 CA" : "🇺🇸 US"}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                    House Number &amp; Street Name (for Household &amp; Emergency Info)
                  </label>
                  <input
                    type="text"
                    value={selectedAddress.street}
                    onChange={(e) =>
                      setSelectedAddress(prev => ({ ...prev, street: e.target.value }))
                    }
                    placeholder="e.g. 123 Portage Ave"
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                  />
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
              </div>
            </div>
          )}

          {/* STEP 2: FAMILY STRUCTURE, CO-PARENT SETUP, KIDS & PETS */}
          {step === 2 && (
            <div className="space-y-4">
              {/* 1. Parenting Structure Question */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 font-black uppercase tracking-wider text-[11px]">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <span>Family Structure</span>
                </div>
                <label className="block text-xs font-bold text-slate-200">
                  What best describes your family?
                </label>
                <select
                  value={familyStructure}
                  onChange={(e) => setFamilyStructure(e.target.value as "Traditional" | "Blended" | "Single Parent")}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-indigo-400"
                >
                  <option value="Traditional" className="bg-slate-900 text-white">Traditional (Two-Parent Household)</option>
                  <option value="Blended" className="bg-slate-900 text-white">Blended (Co-Parenting / Step-Family)</option>
                  <option value="Single Parent" className="bg-slate-900 text-white">Single Parent Household</option>
                </select>
              </div>

              {/* 2. Co-Parent Setup (if applicable) */}
              {familyStructure !== "Single Parent" && (
                <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-amber-300 font-black uppercase tracking-wider text-[11px]">
                      <Users className="w-4 h-4 text-amber-400" />
                      <span>Co-Parent Setup</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Added below your profile</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handlePickCoParentContact}
                      className="py-2 px-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-sky-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <span>📇 Choose Existing Contact</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCoParentMode("manual")}
                      className={`py-2 px-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer ${
                        coParentMode === "manual"
                          ? "bg-amber-500/20 border-amber-400 text-amber-200"
                          : "bg-slate-900/70 border-slate-700 text-slate-300 hover:border-slate-500"
                      }`}
                    >
                      <span>✏️ Create New</span>
                    </button>
                  </div>

                  {coParentContactNote && (
                    <div className="text-[11px] text-sky-300 bg-sky-500/10 border border-sky-400/30 rounded-lg px-2.5 py-1.5">
                      {coParentContactNote}
                    </div>
                  )}

                  {coParentMode === "manual" && (
                    <div className="space-y-2 pt-1">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-0.5">First Name *</label>
                          <input
                            type="text"
                            value={coParentFirstName}
                            onChange={(e) => setCoParentFirstName(e.target.value)}
                            placeholder="e.g. Meghan"
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Last Name</label>
                          <input
                            type="text"
                            value={coParentLastName}
                            onChange={(e) => setCoParentLastName(e.target.value)}
                            placeholder={adminLastName || "Last Name"}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Nickname (Opt)</label>
                          <input
                            type="text"
                            value={coParentNickname}
                            onChange={(e) => setCoParentNickname(e.target.value)}
                            placeholder="e.g. Meg"
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                        <div className="sm:col-span-9">
                          <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Phone Number</label>
                          <input
                            type="tel"
                            value={coParentPhone}
                            onChange={(e) => setCoParentPhone(e.target.value)}
                            placeholder="(555) 123-4567"
                            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <button
                            type="button"
                            onClick={handleAddCoParent}
                            disabled={!coParentFirstName.trim()}
                            className="w-full py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Co-Parent</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Kids Setup */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-indigo-300 font-black uppercase tracking-wider text-[11px]">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Add Kids</span>
                  </div>
                  <span className="text-[10px] text-amber-300 font-bold">
                    Age 12+ unlocks Gamertags, Wallets &amp; Wishlists
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handlePickKidContact}
                    className="py-2 px-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-sky-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <span>📇 Existing Contact</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setKidMode("manual")}
                    className={`py-2 px-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer ${
                      kidMode === "manual"
                        ? "bg-indigo-500/20 border-indigo-400 text-indigo-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>✏️ Create Manually</span>
                  </button>
                </div>

                {kidContactNote && (
                  <div className="text-[11px] text-sky-300 bg-sky-500/10 border border-sky-400/30 rounded-lg px-2.5 py-1.5">
                    {kidContactNote}
                  </div>
                )}

                {kidMode === "manual" && (
                  <div className="space-y-2.5 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-0.5">First Name *</label>
                        <input
                          id="onboarding-kid-firstname"
                          type="text"
                          value={kidFirstName}
                          onChange={(e) => setKidFirstName(e.target.value)}
                          placeholder="e.g. Sydney"
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Last Name</label>
                        <input
                          type="text"
                          value={kidLastName}
                          onChange={(e) => setKidLastName(e.target.value)}
                          placeholder={adminLastName || "Last Name"}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-0.5">Nickname (Opt)</label>
                        <input
                          type="text"
                          value={kidNickname}
                          onChange={(e) => setKidNickname(e.target.value)}
                          placeholder="e.g. Syd"
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                          Phone Number (If Applicable)
                        </label>
                        <input
                          type="tel"
                          value={kidPhone}
                          onChange={(e) => setKidPhone(e.target.value)}
                          placeholder="(555) 123-4567"
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                          Birthday {kidBirthday ? `(Age ${calculateAgeFromBirthday(kidBirthday)})` : "(Calendar Picker)"}
                        </label>
                        <input
                          type="date"
                          value={kidBirthday}
                          onChange={(e) => setKidBirthday(e.target.value)}
                          max={new Date().toISOString().split("T")[0]}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-0.5">
                          Override Auto Age Status
                        </label>
                        <select
                          value={kidAgeOverride}
                          onChange={(e) => setKidAgeOverride(e.target.value as "auto" | "teen" | "junior")}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                        >
                          <option value="auto" className="bg-slate-900 text-white">
                            Auto ({kidBirthday ? (calculateAgeFromBirthday(kidBirthday) >= 12 ? "12+ Teen Profile" : "11 & Under Basic") : "From Birthday"})
                          </option>
                          <option value="teen" className="bg-slate-900 text-white">
                            Override: 12+ Teen (Social/Shopping/Gamertags)
                          </option>
                          <option value="junior" className="bg-slate-900 text-white">
                            Override: 11 &amp; Under (Basic Kid-Safe)
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddKidToHousehold}
                      disabled={!kidFirstName.trim()}
                      className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Household</span>
                    </button>
                  </div>
                )}

                {/* Quick Next Action Options */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setKidMode("manual");
                      setKidFirstName("");
                      setKidLastName("");
                      setKidNickname("");
                      setKidBirthday("");
                      setKidAgeOverride("auto");
                      setJustAddedKid(false);
                      setTimeout(() => document.getElementById("onboarding-kid-firstname")?.focus(), 50);
                    }}
                    className={`py-1.5 px-2 rounded-xl border text-[11px] font-bold transition cursor-pointer ${
                      justAddedKid
                        ? "bg-indigo-500/20 border-indigo-400 text-indigo-200"
                        : "bg-slate-900/70 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    + Add Another Kid
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPetsSection(true);
                      setTimeout(() => document.getElementById("onboarding-pets-card")?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 60);
                    }}
                    className="py-1.5 px-2 rounded-xl border bg-amber-500/15 border-amber-400/40 text-amber-200 hover:bg-amber-500/25 text-[11px] font-bold transition cursor-pointer"
                  >
                    🐾 Add Pets
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="py-1.5 px-2 rounded-xl border bg-emerald-600/20 border-emerald-400/50 text-emerald-200 hover:bg-emerald-600/30 text-[11px] font-bold transition cursor-pointer"
                  >
                    Finish Step →
                  </button>
                </div>
              </div>

              {/* 4. Household Members Hierarchy */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-slate-300">
                  Household Members ({1 + members.length})
                </div>

                {/* Initial User */}
                <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/40">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-indigo-500/25 border border-indigo-400">
                      👑
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-white text-xs">
                          {adminName.trim() || "Primary Parent"} {adminLastName.trim()}
                        </span>
                        {adminNickname.trim() && (
                          <span className="text-[10px] text-slate-400">({adminNickname.trim()})</span>
                        )}
                        <span className="text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Primary Parent Admin (You)
                        </span>
                      </div>
                      {adminPhone.trim() && (
                        <div className="text-[10px] text-slate-400">📞 {adminPhone.trim()}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Co-Parent(s) listed just below initial user */}
                {members.filter(m => m.role === "Parent").map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-amber-500/30"
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
                          <span className="font-bold text-white text-xs">
                            {m.firstName} {m.lastName}
                          </span>
                          {m.nickname && (
                            <span className="text-[10px] text-slate-400">({m.nickname})</span>
                          )}
                          <span className="text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Co-Parent Admin
                          </span>
                        </div>
                        {m.phoneNumber && (
                          <div className="text-[10px] text-slate-400">📞 {m.phoneNumber}</div>
                        )}
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
                ))}

                {/* Kids Subsection */}
                <div className="pt-1 space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-purple-300 px-1">
                    Kids ({members.filter(m => m.role === "Kid").length})
                  </div>
                  {members.filter(m => m.role === "Kid").length === 0 ? (
                    <div className="text-center py-2.5 px-3 text-[11px] text-slate-400 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
                      No kids added yet — use Existing Contact or Create Manually above.
                    </div>
                  ) : (
                    members.filter(m => m.role === "Kid").map((m) => {
                      const isTeen =
                        m.ageStatusOverride === "teen"
                          ? true
                          : m.ageStatusOverride === "junior"
                          ? false
                          : m.age >= 12;
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
                                <span className="font-bold text-white text-xs">
                                  {m.firstName} {m.lastName}
                                </span>
                                {m.nickname && (
                                  <span className="text-[10px] text-slate-400">({m.nickname})</span>
                                )}
                                <span
                                  className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-md ${
                                    isTeen
                                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                      : "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                                  }`}
                                >
                                  {isTeen
                                    ? `Age ${m.age}${m.ageStatusOverride && m.ageStatusOverride !== "auto" ? " (Overridden)" : ""} • 12+ Teen`
                                    : `Age ${m.age}${m.ageStatusOverride && m.ageStatusOverride !== "auto" ? " (Overridden)" : ""} • 11 & Under Basic`}
                                </span>
                              </div>
                              {(m.birthday || m.phoneNumber) && (
                                <div className="text-[10px] text-slate-400 flex items-center gap-2 flex-wrap">
                                  {m.birthday && <span>DOB: {m.birthday}</span>}
                                  {m.phoneNumber && <span>📞 {m.phoneNumber}</span>}
                                </div>
                              )}
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

              {/* 5. Add Pets */}
              {(showPetsSection || pets.length > 0) && (
                <div id="onboarding-pets-card" className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5">
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
              )}
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

              {/* Municipal Curbside Waste & Recycling Schedule */}
              <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5">
                <div className="flex items-center gap-2 text-sky-300 font-black uppercase tracking-wider text-[11px]">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Municipal Curbside Waste &amp; Recycling Schedule</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">
                      Curbside Bin Night
                    </label>
                    <select
                      value={curbsidePickupDay}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCurbsidePickupDay(val);
                        setHasInitializedChores(false);
                      }}
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

                  {/* Link Payment Apps */}
                  <div className="sm:col-span-2 pt-1 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                        Link Payment Apps for Allowance Payouts
                      </label>
                      <span className="text-[10px] text-slate-400">Tap to enable</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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

                      {selectedAddress.countryCode === "CA" && (
                        <button
                          type="button"
                          onClick={() => setInteracLinked(v => !v)}
                          className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${
                            interacLinked
                              ? "bg-amber-500/20 border-amber-400 text-amber-200"
                              : "bg-slate-900/70 border-slate-700 text-slate-400"
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs">🏦 Interac e-Transfer</div>
                            <div className="text-[10px] opacity-80">CAD Bank Transfers</div>
                          </div>
                          {interacLinked && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                        </button>
                      )}
                    </div>
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
              onClick={() => setShowExitConfirm(true)}
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

      {/* Exit Setup Wizard Confirmation Prompt */}
      {showExitConfirm && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 modal-safe-area"
          onClick={(e) => {
            e.stopPropagation();
            setShowExitConfirm(false);
          }}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-5 shadow-2xl space-y-4 text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1.5">
              <h3 className="text-base font-black text-white">
                Exit Setup Wizard?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Do you want to exit the Clean Slate Setup Wizard? Any unsaved entries from this session will be discarded.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition cursor-pointer"
              >
                Keep Editing
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitConfirm(false);
                  onClose();
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs transition cursor-pointer"
              >
                Exit Wizard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
