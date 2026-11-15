// Household Clean Slate Onboarding & Family Ecosystem Configuration Service
// Manages first-run household initialization, Full Street Address autocomplete (auto-detecting Country/Currency),
// Google Pay / Apple Pay / Family Ecosystem links, Occupancy schedules, Reward Structure, and Thom's Family Preset backup/restore.

import { saveStoredRewardRegion, type RewardRegion } from "./rewardAccounts";
import { DEFAULT_USER_PROFILES, type UserProfile } from "./userProfiles";

export type WeekStartDay = "Monday" | "Sunday" | "Saturday" | "Friday";
export type RewardMode = "monetary" | "screentime" | "points" | "hybrid" | "custom";
export type RewardCadence = "weekly" | "biweekly" | "monthly";
export type PayoutRail = "gpay" | "applepay" | "interac" | "venmo" | "cashapp" | "cash";

export interface HouseholdAddressConfig {
  formattedAddress: string;
  street: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  countryCode: RewardRegion; // "CA" | "US"
  currency: "CAD" | "USD";
  curbsidePickupDay: string; // e.g., "Thursday Evening (Friday Pickup)"
  curbsideBiWeekly: boolean;
  curbsideCurrentWeekType: "recycling" | "waste";
  municipalNotes?: string;
}

export interface FamilyEcosystemConfig {
  googlePayLinked: boolean;
  googlePayHandle?: string;
  applePayLinked: boolean;
  applePayHandle?: string;
  interacLinked: boolean;
  interacEmail?: string;
  googleFamilyLink: boolean;
  googleCalendarEmail?: string;
  appleFamilySharing: boolean;
  xboxFamily: boolean;
  playstationFamily: boolean;
  nintendoSwitchParental: boolean;
}

export interface CustodyScheduleConfig {
  pattern: "biweekly" | "weekends" | "fulltime";
  transitionDay: string; // e.g. "Sunday"
  transitionTime: string; // e.g. "17:00"
  isHereThisWeek: boolean;
}

export interface HouseholdRewardStructure {
  mode: RewardMode;
  cadence: RewardCadence;
  baseAllowanceAmount: number;
  screenTimeMinutes: number;
  pointsPerChore: number;
  monthlyBonusPrize: string;
  monthlyGoalTarget: number;
  customUnitName: string; // e.g. "Chore Bucks", "Robux", "Marble Jar"
  customUnitIcon: string; // e.g. "🎟️"
  customGoalTarget: number;
  preferredPayoutRail: PayoutRail;
}

export interface OnboardingMemberDraft {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  role: "Parent" | "Kid";
  age: number;
  residency: "Full-Time" | "Bi-Weekly" | "Weekends" | "Casual";
  color: string;
  avatarEmoji: string;
  inviteCode: string;
  birthday?: string;
  ageStatusOverride?: "auto" | "teen" | "junior";
  phoneNumber?: string;
  gpayHandle?: string;
  applePayHandle?: string;
}

export interface OnboardingPetDraft {
  id: string;
  name: string;
  type: "Dog" | "Cat" | "Other";
  routine: string;
  care: string;
}

export interface OnboardingChoreDraft {
  id: string;
  task: string;
  description: string;
  frequency: "Daily" | "Weekly" | "Bi-Weekly";
  targetDay: string;
  rotationGroup: "All Non-Casual" | "All Kids" | "Each Child" | "Parents";
  requirePhotoProof: boolean;
  points: number;
  enabled: boolean;
  packId?: string;
}

export interface HouseholdSetupConfig {
  isCleanSlateActive: boolean;
  hasCompletedOnboarding: boolean;
  hasCompletedSpotlightTour: boolean;
  householdName: string;
  adminName: string;
  adminLastName: string;
  adminNickname: string;
  adminEmail: string;
  adminPhone?: string;
  adminPin: string;
  familyStructure?: "Traditional" | "Blended" | "Single Parent";
  address: HouseholdAddressConfig;
  ecosystem: FamilyEcosystemConfig;
  weekStartDay: WeekStartDay;
  inspectionDay: string;
  custodyConfig: CustodyScheduleConfig;
  rewardStructure: HouseholdRewardStructure;
  kidWelcomeCompleted: Record<string, boolean>;
  updatedAt: number;
}

const STORAGE_KEY_SETUP_CONFIG = "weekly_chores_household_setup_config_v1";
const STORAGE_KEY_THOM_BACKUP = "weekly_chores_thom_preset_backup_v1";

export const DEFAULT_HOUSEHOLD_SETUP_CONFIG: HouseholdSetupConfig = {
  isCleanSlateActive: false,
  hasCompletedOnboarding: true,
  hasCompletedSpotlightTour: true,
  householdName: "Thom's Household Hub",
  adminName: "Thom",
  adminLastName: "Voth",
  adminNickname: "Thom",
  adminEmail: "thomvoth@gmail.com",
  adminPin: "1234",
  address: {
    formattedAddress: "Winnipeg, MB, Canada",
    street: "",
    city: "Winnipeg",
    stateProvince: "MB",
    postalCode: "",
    countryCode: "CA",
    currency: "CAD",
    curbsidePickupDay: "Thursday Evening (Friday Pickup)",
    curbsideBiWeekly: true,
    curbsideCurrentWeekType: "recycling",
    municipalNotes: "Roll bin to curb Thursday evening for Friday pickup"
  },
  ecosystem: {
    googlePayLinked: true,
    googlePayHandle: "thomvoth@gmail.com",
    applePayLinked: false,
    applePayHandle: "",
    interacLinked: true,
    interacEmail: "thomvoth@gmail.com",
    googleFamilyLink: true,
    googleCalendarEmail: "thomvoth@gmail.com",
    appleFamilySharing: false,
    xboxFamily: true,
    playstationFamily: false,
    nintendoSwitchParental: true
  },
  weekStartDay: "Monday",
  inspectionDay: "Sunday",
  custodyConfig: {
    pattern: "biweekly",
    transitionDay: "Sunday",
    transitionTime: "17:00",
    isHereThisWeek: true
  },
  rewardStructure: {
    mode: "hybrid",
    cadence: "weekly",
    baseAllowanceAmount: 10,
    screenTimeMinutes: 45,
    pointsPerChore: 5,
    monthlyBonusPrize: "$15 Allowance Bonus & Pizza Night Pick",
    monthlyGoalTarget: 25,
    customUnitName: "Chore Stars",
    customUnitIcon: "⭐",
    customGoalTarget: 20,
    preferredPayoutRail: "gpay"
  },
  kidWelcomeCompleted: {},
  updatedAt: Date.now()
};

export function getHouseholdSetupConfig(): HouseholdSetupConfig {
  if (typeof window === "undefined") return DEFAULT_HOUSEHOLD_SETUP_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SETUP_CONFIG);
    if (!raw) return DEFAULT_HOUSEHOLD_SETUP_CONFIG;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_HOUSEHOLD_SETUP_CONFIG,
      ...parsed,
      address: {
        ...DEFAULT_HOUSEHOLD_SETUP_CONFIG.address,
        ...(parsed.address || {})
      },
      ecosystem: {
        ...DEFAULT_HOUSEHOLD_SETUP_CONFIG.ecosystem,
        ...(parsed.ecosystem || {})
      },
      custodyConfig: {
        ...DEFAULT_HOUSEHOLD_SETUP_CONFIG.custodyConfig,
        ...(parsed.custodyConfig || {})
      },
      rewardStructure: {
        ...DEFAULT_HOUSEHOLD_SETUP_CONFIG.rewardStructure,
        ...(parsed.rewardStructure || {})
      },
      kidWelcomeCompleted: parsed.kidWelcomeCompleted || {}
    };
  } catch {
    return DEFAULT_HOUSEHOLD_SETUP_CONFIG;
  }
}

export function saveHouseholdSetupConfig(patch: Partial<HouseholdSetupConfig>): HouseholdSetupConfig {
  const current = getHouseholdSetupConfig();
  const next: HouseholdSetupConfig = {
    ...current,
    ...patch,
    address: patch.address ? { ...current.address, ...patch.address } : current.address,
    ecosystem: patch.ecosystem ? { ...current.ecosystem, ...patch.ecosystem } : current.ecosystem,
    custodyConfig: patch.custodyConfig ? { ...current.custodyConfig, ...patch.custodyConfig } : current.custodyConfig,
    rewardStructure: patch.rewardStructure ? { ...current.rewardStructure, ...patch.rewardStructure } : current.rewardStructure,
    kidWelcomeCompleted: patch.kidWelcomeCompleted
      ? { ...current.kidWelcomeCompleted, ...patch.kidWelcomeCompleted }
      : current.kidWelcomeCompleted,
    updatedAt: Date.now()
  };

  try {
    localStorage.setItem(STORAGE_KEY_SETUP_CONFIG, JSON.stringify(next));
    if (next.address?.countryCode) {
      saveStoredRewardRegion(next.address.countryCode);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("household_setup_config_updated", { detail: next }));
    }
  } catch (err) {
    console.warn("Failed to save household setup config:", err);
  }
  return next;
}

export interface AddressSuggestion {
  formattedAddress: string;
  street: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  countryCode: RewardRegion;
  currency: "CAD" | "USD";
}

// Curated instant fallback suggestions + live OpenStreetMap Photon geocoder
const OFFLINE_ADDRESS_SUGGESTIONS: AddressSuggestion[] = [
  {
    formattedAddress: "123 Portage Ave, Winnipeg, MB R3B 2E9, Canada",
    street: "123 Portage Ave",
    city: "Winnipeg",
    stateProvince: "MB",
    postalCode: "R3B 2E9",
    countryCode: "CA",
    currency: "CAD"
  },
  {
    formattedAddress: "450 Main St, Winnipeg, MB R3B 1B2, Canada",
    street: "450 Main St",
    city: "Winnipeg",
    stateProvince: "MB",
    postalCode: "R3B 1B2",
    countryCode: "CA",
    currency: "CAD"
  },
  {
    formattedAddress: "200 Bay St, Toronto, ON M5J 2J2, Canada",
    street: "200 Bay St",
    city: "Toronto",
    stateProvince: "ON",
    postalCode: "M5J 2J2",
    countryCode: "CA",
    currency: "CAD"
  },
  {
    formattedAddress: "888 Dunsmuir St, Vancouver, BC V6C 3K4, Canada",
    street: "888 Dunsmuir St",
    city: "Vancouver",
    stateProvince: "BC",
    postalCode: "V6C 3K4",
    countryCode: "CA",
    currency: "CAD"
  },
  {
    formattedAddress: "350 Fifth Ave, New York, NY 10118, USA",
    street: "350 Fifth Ave",
    city: "New York",
    stateProvince: "NY",
    postalCode: "10118",
    countryCode: "US",
    currency: "USD"
  },
  {
    formattedAddress: "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
    street: "1600 Amphitheatre Pkwy",
    city: "Mountain View",
    stateProvince: "CA",
    postalCode: "94043",
    countryCode: "US",
    currency: "USD"
  }
];

export async function searchStreetAddressAutocomplete(
  query: string,
  countryFilter?: RewardRegion,
  biasCoords?: { lat: number; lon: number } | null
): Promise<AddressSuggestion[]> {
  const clean = (query || "").trim();
  if (clean.length < 3) return [];

  // Detect if user typed a Canadian postal code pattern (e.g. R3B) vs US ZIP
  const looksCanadian =
    /[A-Za-z]\d[A-Za-z]/.test(clean) ||
    /\b(MB|ON|BC|AB|SK|QC|NS|NB|NL|PE|Manitoba|Ontario|Canada|Winnipeg|Toronto|Vancouver|Calgary)\b/i.test(clean);

  const looksUS =
    /\b\d{5}\b/.test(clean) ||
    /\b(NY|CA|TX|FL|WA|IL|USA|United States)\b/i.test(clean);

  const activeCountry: RewardRegion =
    countryFilter || (looksUS && !looksCanadian ? "US" : "CA");
  const ccLower = activeCountry.toLowerCase();
  const leadingNumMatch = clean.match(/^\s*(\d+[A-Za-z]?)\s+(.+)/);
  const typedHouseNum = leadingNumMatch ? leadingNumMatch[1] : "";

  const ensureHouseNumber = (returnedHouseNum: string | undefined, roadName: string): string => {
    const rawNum = (returnedHouseNum || "").trim();
    const road = (roadName || "").trim();
    if (rawNum) return `${rawNum} ${road}`.trim();
    if (typedHouseNum && road && !road.toLowerCase().startsWith(typedHouseNum.toLowerCase())) {
      return `${typedHouseNum} ${road}`.trim();
    }
    return road || clean;
  };

  // 1. Primary: Nominatim strictly filtered by selected country (ca / us)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    let url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=5&countrycodes=${ccLower}&accept-language=en&q=${encodeURIComponent(clean)}`;
    if (biasCoords) {
      // Soft ~50km viewbox bias around user's GPS coordinates without strictly locking out other cities
      const dLat = 0.6;
      const dLon = 0.8;
      url += `&viewbox=${biasCoords.lon - dLon},${biasCoords.lat + dLat},${biasCoords.lon + dLon},${biasCoords.lat - dLat}`;
    }
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const items = await res.json();
      if (Array.isArray(items) && items.length > 0) {
        const mapped: AddressSuggestion[] = items.map((item: any) => {
          const a = item.address || {};
          const road = a.road || a.pedestrian || a.residential || "";
          const street = ensureHouseNumber(a.house_number, road);
          const city = a.city || a.town || a.village || a.municipality || a.county || "";
          const stateProvince = a.state || a.province || "";
          const postalCode = a.postcode || "";
          const rawCC = String(a.country_code || ccLower).toUpperCase();
          const countryCode: RewardRegion = rawCC === "US" ? "US" : "CA";
          const currency = countryCode === "CA" ? "CAD" : "USD";
          const parts = [street, city, stateProvince, postalCode, countryCode === "CA" ? "Canada" : "USA"].filter(Boolean);
          return {
            formattedAddress: parts.join(", "),
            street,
            city,
            stateProvince,
            postalCode,
            countryCode,
            currency
          };
        });
        return mapped;
      }
    }
  } catch {
    // Fall through to Photon
  }

  // 2. Secondary: Photon (appending country name + optional GPS bias)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const countryName = activeCountry === "CA" ? "Canada" : "United States";
    const biasedQuery = clean.toLowerCase().includes("canada") || clean.toLowerCase().includes("usa")
      ? clean
      : `${clean}, ${countryName}`;
    let photonUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(biasedQuery)}&limit=6&lang=en`;
    if (biasCoords) {
      photonUrl += `&lat=${biasCoords.lat}&lon=${biasCoords.lon}`;
    }
    const res = await fetch(photonUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data?.features) && data.features.length > 0) {
        const mapped: AddressSuggestion[] = data.features
          .map((f: any) => {
            const p = f.properties || {};
            const street = ensureHouseNumber(p.housenumber, p.street || p.name || "");
            const city = p.city || p.town || p.locality || p.county || "";
            const stateProvince = p.state || "";
            const postalCode = p.postcode || "";
            const rawCountry = String(p.countrycode || p.country || "").toUpperCase();
            const isCA = rawCountry === "CA" || rawCountry.includes("CANADA");
            const isUS = rawCountry === "US" || rawCountry.includes("UNITED STATES");
            const countryCode: RewardRegion = isUS ? "US" : isCA ? "CA" : activeCountry;
            const currency = countryCode === "CA" ? "CAD" : "USD";
            const parts = [street, city, stateProvince, postalCode, countryCode === "CA" ? "Canada" : "USA"].filter(Boolean);
            return {
              formattedAddress: parts.join(", "),
              street: street || clean,
              city,
              stateProvince,
              postalCode,
              countryCode,
              currency
            };
          })
          .filter((s: AddressSuggestion) => s.countryCode === activeCountry);

        if (mapped.length > 0) return mapped.slice(0, 5);
      }
    }
  } catch {
    // Fallback to smart local synthesis below
  }

  const qLower = clean.toLowerCase();
  const matches = OFFLINE_ADDRESS_SUGGESTIONS.filter(
    s => s.countryCode === activeCountry && s.formattedAddress.toLowerCase().includes(qLower)
  );

  const synthesized: AddressSuggestion = {
    formattedAddress: `${clean} (${activeCountry === "CA" ? "Canada • CAD" : "United States • USD"})`,
    street: clean,
    city: activeCountry === "CA" ? "Winnipeg" : "",
    stateProvince: activeCountry === "CA" ? "MB" : "",
    postalCode: "",
    countryCode: activeCountry,
    currency: activeCountry === "CA" ? "CAD" : "USD"
  };

  return [synthesized, ...matches].slice(0, 5);
}

/**
 * Reverse-geocodes device GPS coordinates into a structured household street address.
 */
export async function reverseGeocodeCoordinates(
  lat: number,
  lon: number
): Promise<AddressSuggestion | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=en`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      const a = data?.address || {};
      const houseNum = a.house_number ? `${a.house_number} ` : "";
      const road = a.road || a.pedestrian || a.residential || "";
      const street = `${houseNum}${road}`.trim();
      const city = a.city || a.town || a.village || a.municipality || a.county || "";
      const stateProvince = a.state || a.province || "";
      const postalCode = a.postcode || "";
      const rawCC = String(a.country_code || "CA").toUpperCase();
      const countryCode: RewardRegion = rawCC === "US" ? "US" : "CA";
      const currency = countryCode === "CA" ? "CAD" : "USD";
      const parts = [street, city, stateProvince, postalCode, countryCode === "CA" ? "Canada" : "USA"].filter(Boolean);
      return {
        formattedAddress: parts.join(", ") || data?.display_name || "",
        street: street || data?.display_name || "",
        city,
        stateProvince,
        postalCode,
        countryCode,
        currency
      };
    }
  } catch {
    // Fallback to Photon reverse
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(
      `https://photon.komoot.io/reverse?lat=${lat}&lon=${lon}`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      const p = data?.features?.[0]?.properties || {};
      const houseNum = p.housenumber ? `${p.housenumber} ` : "";
      const road = p.street || p.name || "";
      const street = `${houseNum}${road}`.trim();
      const city = p.city || p.town || p.locality || p.county || "";
      const stateProvince = p.state || "";
      const postalCode = p.postcode || "";
      const rawCC = String(p.countrycode || "CA").toUpperCase();
      const countryCode: RewardRegion = rawCC === "US" ? "US" : "CA";
      const currency = countryCode === "CA" ? "CAD" : "USD";
      const parts = [street, city, stateProvince, postalCode, countryCode === "CA" ? "Canada" : "USA"].filter(Boolean);
      return {
        formattedAddress: parts.join(", "),
        street,
        city,
        stateProvince,
        postalCode,
        countryCode,
        currency
      };
    }
  } catch {}

  return null;
}

/**
 * Generates starter chore templates dynamically tailored to the pets & curbside schedule configured in Steps 1 & 2.
 */
export function buildSmartStarterChores(
  pets: OnboardingPetDraft[],
  address: HouseholdAddressConfig
): OnboardingChoreDraft[] {
  const dogs = pets.filter(p => p.type === "Dog").map(p => p.name).filter(Boolean);
  const cats = pets.filter(p => p.type === "Cat").map(p => p.name).filter(Boolean);
  const hasPets = pets.length > 0;

  const petFeedDesc = hasPets
    ? `Feed ${[
        dogs.length > 0 ? `${dogs.join(" & ")} (dogs)` : "",
        cats.length > 0 ? `${cats.join(", ")} (cats)` : ""
      ].filter(Boolean).join(", ")} — Morning & Evening + fresh water`
    : "Morning & evening pet feeding and fresh water bowls";

  const litterDesc = cats.length > 0
    ? `Scoop litter boxes for ${cats.join(", ")} — Morning & Evening`
    : "Scoop & refresh cat litter boxes daily";

  return [
    // Pack 1: Pet Care Pack
    {
      id: "starter-feed-herd",
      task: "1. Feed Pets (Breakfast & Supper)",
      description: petFeedDesc,
      frequency: "Daily",
      targetDay: "Mon – Sun",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 5,
      enabled: hasPets,
      packId: "pets"
    },
    {
      id: "starter-litter-boxes",
      task: "2. Scoop Litter Boxes / Yard Patrol",
      description: litterDesc,
      frequency: "Daily",
      targetDay: "Mon – Sun",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 5,
      enabled: cats.length > 0 || hasPets,
      packId: "pets"
    },
    {
      id: "starter-feeding-station",
      task: "Deep Clean Pet Feeding Station",
      description: "Clean & sanitize bowls, vacuum & wipe feeding area, dispose of waste",
      frequency: "Weekly",
      targetDay: "Sunday",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: true,
      points: 10,
      enabled: hasPets,
      packId: "pets"
    },

    // Pack 2: Daily Kitchen & Living Pack
    {
      id: "starter-dishwasher",
      task: "3. Unload / Load Dishwasher",
      description: "Empty clean dishes & load dirty dishes from sink",
      frequency: "Daily",
      targetDay: "Mon – Sun",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 5,
      enabled: true,
      packId: "kitchen"
    },
    {
      id: "starter-counters",
      task: "4. Wipe Kitchen Counters & Table",
      description: "Clear clutter, wipe down counters, island, and dining table",
      frequency: "Daily",
      targetDay: "Mon – Sun",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 5,
      enabled: true,
      packId: "kitchen"
    },
    {
      id: "starter-floors",
      task: "5. Sweep High-Traffic Floors",
      description: "Sweep kitchen, entryway, and living room crumbs",
      frequency: "Daily",
      targetDay: "Mon – Sun",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 5,
      enabled: true,
      packId: "kitchen"
    },

    // Pack 3: Weekly Kid Checklist Pack
    {
      id: "starter-bedrooms",
      task: "Tidy Bedrooms / Personal Spaces",
      description: "(Each Kid Does Their Own) - Pick up mess & laundry, organize, dust & vacuum",
      frequency: "Weekly",
      targetDay: "Saturday",
      rotationGroup: "Each Child",
      requirePhotoProof: true,
      points: 15,
      enabled: true,
      packId: "kids_weekly"
    },
    {
      id: "starter-laundry",
      task: "Kids Laundry",
      description: "(Each Kid Does Their Own) - Wash, dry, fold & put away clothes",
      frequency: "Weekly",
      targetDay: "Saturday",
      rotationGroup: "Each Child",
      requirePhotoProof: false,
      points: 15,
      enabled: true,
      packId: "kids_weekly"
    },

    // Pack 4: Weekly Household & Curbside Pack
    {
      id: "starter-basement",
      task: "Clean Basement / Shared Rec Room",
      description: "Pick up, organize, dust & vacuum shared family area",
      frequency: "Weekly",
      targetDay: "Saturday",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: true,
      points: 15,
      enabled: true,
      packId: "curbside"
    },
    {
      id: "starter-recycling",
      task: "Curbside Recycling",
      description: `Roll recycling bin to curb (${address.curbsidePickupDay || "Thursday evening"})`,
      frequency: address.curbsideBiWeekly ? "Bi-Weekly" : "Weekly",
      targetDay: "Thursday",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 10,
      enabled: true,
      packId: "curbside"
    },
    {
      id: "starter-waste",
      task: "Curbside Waste",
      description: `Roll waste bin to curb (${address.curbsidePickupDay || "Thursday evening"})`,
      frequency: address.curbsideBiWeekly ? "Bi-Weekly" : "Weekly",
      targetDay: "Thursday",
      rotationGroup: "All Non-Casual",
      requirePhotoProof: false,
      points: 10,
      enabled: true,
      packId: "curbside"
    }
  ];
}

/**
 * Backs up current Thom's Family data so testing Clean Slate never loses anything.
 */
export function backupCurrentHouseholdBeforeCleanSlate(): void {
  if (typeof window === "undefined") return;
  try {
    // Only create initial backup if one doesn't already exist
    if (!localStorage.getItem(STORAGE_KEY_THOM_BACKUP)) {
      const snapshot = {
        profiles: localStorage.getItem("weekly_chores_user_profiles_v1"),
        rewardProfiles: localStorage.getItem("weekly_chores_kid_reward_profiles_v1"),
        activeAdmin: localStorage.getItem("weekly_chores_active_parent_admin"),
        monthlyIncentive: localStorage.getItem("weekly_chores_monthly_incentive"),
        monthlyTarget: localStorage.getItem("weekly_chores_monthly_target"),
        savedAt: Date.now()
      };
      localStorage.setItem(STORAGE_KEY_THOM_BACKUP, JSON.stringify(snapshot));
    }
  } catch {}
}

/**
 * Restores Thom's Family Preset in 1 tap.
 */
export function restoreThomsFamilyPresetConfig(): HouseholdSetupConfig {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("weekly_chores_user_profiles_v1", JSON.stringify(DEFAULT_USER_PROFILES));
      localStorage.setItem("weekly_chores_active_parent_admin", "Thom");
    } catch {}
  }
  return saveHouseholdSetupConfig({
    ...DEFAULT_HOUSEHOLD_SETUP_CONFIG,
    isCleanSlateActive: false,
    hasCompletedOnboarding: true,
    hasCompletedSpotlightTour: true
  });
}

export function generateInviteCodeForMember(name: string, index: number): string {
  const clean = (name || "FAM").replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 3).padEnd(3, "X");
  const digits = String(((index + 1) * 237 + clean.charCodeAt(0) * 13) % 900 + 100);
  return `${clean}-${digits}`;
}

/**
 * Builds the 2-sheet structure (`Printable Weekly Schedule` + `Household Hub (Background Data)`)
 * from the completed Clean Slate Onboarding Wizard inputs.
 */
export function buildSheetDataFromOnboarding(
  config: HouseholdSetupConfig,
  members: OnboardingMemberDraft[],
  pets: OnboardingPetDraft[],
  chores: OnboardingChoreDraft[],
  activeWeekDateKey: string = "2026-10-19"
): any[] {
  const activeChores = chores.filter(c => c.enabled);
  const dailyChores = activeChores.filter(c => c.frequency === "Daily");
  const weeklyChores = activeChores.filter(c => c.frequency !== "Daily");

  const nonCasualNames = members
    .filter(m => m.occupancyPreset !== "casual")
    .map(m => m.firstName || "Member");
  const kidNames = members
    .filter(m => m.role === "kid")
    .map(m => m.firstName || "Kid");
  const parentNames = members
    .filter(m => m.role !== "kid")
    .map(m => m.firstName || "Parent");
  const biWeeklyKids = members
    .filter(m => m.occupancyPreset === "biweekly")
    .map(m => m.firstName);

  const workerPool = nonCasualNames.length > 0 ? nonCasualNames : [config.adminName || "Admin"];

  // Sheet 0: Printable Weekly Schedule
  const sheet0Rows: any[] = [
    {
      index_: 0,
      row: ["Chore Schedule", null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    },
    {
      index_: 1,
      row: ["FOR THE WEEK OF:", "MON", null, "TUE", null, "WED", null, "THU", null, "FRI", null, "SAT", null, "SUN", null]
    },
    {
      index_: 2,
      row: [activeWeekDateKey, "19", null, "20", null, "21", null, "22", null, "23", null, "24", null, "25", null]
    },
    {
      index_: 3,
      row: [
        "TASK",
        "WHO\nDay 1", "DONE \nDay 1",
        "WHO \nDAY 2", "DONE \nDAY 2",
        "WHO \nDAY 3", "DONE  \nDAY 3",
        "WHO \nDAY 4", "DONE\nDAY 4",
        "WHO\nDAY 5", "DONE\nDAY 5",
        "WHO\nDAY 6", "DONE\nDAY 6",
        "WHO\nDAY 7", "DONE \nDAY 7"
      ]
    },
    {
      index_: 4,
      row: ["Daily Tasks", null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
  ];

  let nextRowIdx = 5;
  dailyChores.forEach((c, cIdx) => {
    const rowArr: any[] = [c.task];
    for (let d = 0; d < 7; d++) {
      const who = c.rotationGroup === "Bonus / Optional"
        ? ""
        : workerPool[(cIdx + d) % workerPool.length];
      rowArr.push(who, false);
    }
    sheet0Rows.push({
      index_: nextRowIdx++,
      row: rowArr
    });
  });

  const weeklySectionIdx = Math.max(10, nextRowIdx);
  sheet0Rows.push({
    index_: weeklySectionIdx,
    row: ["Weekly Tasks", "Description", null, null, null, null, null, null, null, "Initials / Assigned", null, null, null, null, null]
  });

  nextRowIdx = weeklySectionIdx + 1;
  weeklyChores.forEach((c, wIdx) => {
    const isKidChecklist = c.rotationGroup === "Each Child" || c.task.toLowerCase().includes("laundry") || c.task.toLowerCase().includes("bedroom");
    const initialsStr = kidNames.length > 0
      ? kidNames.map(k => `${k.slice(0, 2).toUpperCase()}: ____`).join("  ")
      : "Initials: ____";
    const assignedWho = isKidChecklist
      ? initialsStr
      : workerPool[wIdx % workerPool.length];
    sheet0Rows.push({
      index_: nextRowIdx++,
      row: [
        c.task,
        c.description || "Complete weekly task",
        false, null, false, null, false, null, null,
        assignedWho,
        null, null, false,
        isKidChecklist ? null : "Done: ______",
        false
      ]
    });
  });

  sheet0Rows.push({
    index_: Math.max(18, nextRowIdx + 1),
    row: ["Weekly Sign-Off", "Parent Initials:", null, null, null, null, null, null, null, null, null, null, null, "_________", false]
  });

  // Sheet 1: Household Hub (Background Data)
  const sheet1Rows: any[] = [
    {
      index_: 0,
      row: ["HOUSEHOLD HUB & MASTER DIRECTORY", null, null, null, null, null, null, null, null, null, null, null]
    },
    {
      index_: 1,
      row: ["Centralized household administration: Family member roster & occupancy, chore allocation master rules, and pet care routines.", null, null, null, null, null, null, null, null, null, null, null]
    },
    {
      index_: 3,
      row: ["HOUSEHOLD MEMBERS", null, null, null, null, null, "MASTER CHORE REGISTRY & ALLOCATION RULES", null, null, null, null, null]
    },
    {
      index_: 4,
      row: ["Name", "Role", "Occupancy", "Special Rotation Groups", "Active Status", null, "Chore", "Member / Group", "Frequency", "Suggested Days", "Details / Notes", null]
    }
  ];

  const maxPairedRows = Math.max(members.length, activeChores.length, 8);
  for (let i = 0; i < maxPairedRows; i++) {
    const m = members[i];
    const c = activeChores[i];
    const mOccupancy = m
      ? m.occupancyPreset === "biweekly"
        ? "Bi-Weekly"
        : m.occupancyPreset === "casual"
          ? "Casual"
          : "Full-Time"
      : null;
    const mGroups = m
      ? m.role === "kid"
        ? m.occupancyPreset === "casual"
          ? "All"
          : "Kids, Non-Casual, All"
        : "Parents, Non-Casual, All"
      : null;
    const mRoleTitle = m
      ? m.role === "admin"
        ? "Supreme Overlord"
        : m.role === "coparent"
          ? "Overseer Supreme"
          : "Minion"
      : null;

    sheet1Rows.push({
      index_: 5 + i,
      row: [
        m ? m.firstName : null,
        mRoleTitle,
        mOccupancy,
        mGroups,
        m ? true : null,
        m ? "MEMBER_ROW" : null,
        c ? c.task : null,
        c ? (c.rotationGroup === "Bonus / Optional" ? "Bonus" : c.rotationGroup === "Each Child" ? "Kids" : "Non-Casual") : null,
        c ? (c.frequency === "Weekly" ? "Once a Week" : c.frequency) : null,
        c ? c.targetDay : null,
        c ? c.description : null,
        null
      ]
    });
  }

  const baseMetaIdx = 5 + maxPairedRows + 1;
  sheet1Rows.push(
    {
      index_: baseMetaIdx,
      row: ["OCCUPANCY CATEGORIES", null, null, null, null, null, null, null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 1,
      row: ["Full-Time", "Constant Residency", "Included in all weekly/monthly schedulings", null, true, null, null, null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 2,
      row: ["Bi-Weekly", "Half-Time Residency", "Included in weekly/monthly schedulings when in residence", null, true, null, null, null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 3,
      row: ["Casual", "Periodic Residency", "Manually added to any schedules", null, true, null, "SCHEDULE CONFIGURATIONS", null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 4,
      row: ["SPECIAL ROTATION GROUPS", null, null, null, null, null, "Active Week Start Date", activeWeekDateKey, "Printable Weekly Schedule", null, null, null]
    },
    {
      index_: baseMetaIdx + 5,
      row: ["All", members.map(m => m.firstName).join(", "), null, null, true, null, "Custody Schedule Rotation", "Kids Week", "Bi-Weekly Schedule", null, biWeeklyKids.join(", ") || kidNames.join(", "), null]
    },
    {
      index_: baseMetaIdx + 6,
      row: ["Kids", kidNames.join(", "), null, null, true, null, null, null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 7,
      row: ["Parents", parentNames.join(", "), null, null, true, null, null, null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 8,
      row: ["Non-Casual", nonCasualNames.join(", "), null, null, true, null, null, null, null, null, null, null]
    },
    {
      index_: baseMetaIdx + 10,
      row: ["Pet Name", "Dog / Cat", "Routine", "Care Responsibilities", "Active Status", null, null, null, null, null, null, null]
    }
  );

  pets.forEach((p, pIdx) => {
    sheet1Rows.push({
      index_: baseMetaIdx + 11 + pIdx,
      row: [
        p.name,
        p.type,
        "Morning & Evening",
        p.careNotes || "Feed morning/evening & fresh water",
        true,
        null, null, null, null, null, null, null
      ]
    });
  });

  return [
    {
      index_: 0,
      name: "Printable Weekly Schedule",
      data: sheet0Rows
    },
    {
      index_: 1,
      name: "Household Hub (Background Data)",
      data: sheet1Rows
    }
  ];
}
