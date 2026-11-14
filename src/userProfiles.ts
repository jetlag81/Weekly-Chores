// User Profiles Service: Roles, Age Tiers, Autonomy Rules, Birthdays & Contact Info
// - Roles: "Parent" | "Kid" (legacy "Supreme Overlord" / "Overseer Supreme" / "Minion" values are migrated)
// - Age split: 12 and up (Teen) get bio & email autonomy; 11 and under (Junior) get a simpler, more visual experience
// - Parents set up the legal name, birthday & residency; kids personalize nickname, emoji & color after accepting invites

export type AgeTier = "junior" | "teen" | "adult";
export type ProfileTierOverride = "auto" | "junior" | "teen" | "adult";
export type HouseholdRole = "Parent" | "Kid";

export interface UserProfile {
  id: string; // Unique identifier (e.g. "sydney", "thom")
  name?: string; // Convenience alias for displayName / member name
  firstName: string; // Legal first name — also the key used for chore assignments (parent-managed)
  lastName: string;
  nickname?: string; // Friendly name shown in greetings, profile cards, dashboards & chat
  displayName: string;
  initials: string;
  birthday?: string; // YYYY-MM-DD
  email?: string; // Only editable if age >= 12 or parent
  tierOverride?: ProfileTierOverride; // Parent admin override ("auto" | "junior" | "teen" | "adult")
  avatarEmoji?: string;
  bio?: string;
  role: HouseholdRole;
  residency: "Full-Time" | "Bi-Weekly" | "Casual";
  favoriteColor?: string;
  updatedAt?: number;
}

/**
 * True for parent roles, including legacy stored values from earlier app versions.
 */
export function isParentRole(role?: string | null): boolean {
  const r = String(role || "").toLowerCase();
  return r === "parent" || r.includes("parent") || r === "supreme overlord" || r === "overseer supreme" || r === "adult";
}

/**
 * Normalizes any stored/legacy role value to "Parent" | "Kid".
 */
export function normalizeRole(role?: string | null): HouseholdRole {
  return isParentRole(role) ? "Parent" : "Kid";
}

/**
 * Name to show in greetings, headers & chat: nickname if set, otherwise first name.
 * Chore assignments should keep using firstName.
 */
export function getPreferredName(profile?: Partial<UserProfile> | null, fallback = ""): string {
  if (!profile) return fallback;
  const nick = String(profile.nickname || "").trim();
  return nick || String(profile.firstName || "").trim() || fallback;
}

export type ProfileField =
  | "firstName" | "lastName" | "birthday" | "residency" | "role" | "tierOverride"
  | "nickname" | "avatarEmoji" | "favoriteColor"
  | "bio" | "email";

/**
 * Field-level edit permissions:
 * - Parents: everything
 * - All kids: nickname, avatar emoji, favorite color
 * - Teens (12+): additionally bio & email
 * - Legal name, birthday, residency, role & tier: parent-only
 */
export function canEditProfileField(field: ProfileField, editorIsParent: boolean, tier: AgeTier): boolean {
  if (editorIsParent) return true;
  switch (field) {
    case "nickname":
    case "avatarEmoji":
    case "favoriteColor":
      return true;
    case "bio":
    case "email":
      return tier === "teen" || tier === "adult";
    default:
      return false;
  }
}

const STORAGE_KEY_PROFILES = "weekly_chores_user_profiles_v1";

// Initial household profiles (parents can edit these in Household Settings):
// Thom (Parent)
// Meghan (Parent)
// Sydney (Age 14 -> Teen 12+ with autonomy & email)
// Cadence (Age 13 -> Teen 12+ with autonomy & email)
// Mason (Age 10 -> Junior <=11 with visual stimulation & locked email)
// Koda (Age 9 -> Junior <=11 with visual stimulation & locked email)
// Keyanna (Age 7 -> Junior <=11 with visual stimulation & locked email)
export const DEFAULT_USER_PROFILES: Record<string, UserProfile> = {
  thom: {
    id: "thom",
    firstName: "Thom",
    lastName: "Voth",
    displayName: "Thom Voth",
    initials: "TV",
    birthday: "1981-06-15",
    email: "thomvoth@gmail.com",
    avatarEmoji: "👑",
    bio: "",
    role: "Parent",
    residency: "Full-Time",
    favoriteColor: "#2563EB"
  },
  meghan: {
    id: "meghan",
    firstName: "Meghan",
    lastName: "Ginter",
    displayName: "Meghan Ginter",
    initials: "MG",
    birthday: "1983-09-20",
    email: "meghan@example.com",
    avatarEmoji: "👑",
    bio: "",
    role: "Parent",
    residency: "Full-Time",
    favoriteColor: "#8B5CF6"
  },
  sydney: {
    id: "sydney",
    firstName: "Sydney",
    lastName: "Voth",
    displayName: "Sydney Voth",
    initials: "SV",
    birthday: "2012-05-18", // 14 years old
    email: "sydney.voth@example.com",
    avatarEmoji: "✨",
    bio: "",
    role: "Kid",
    residency: "Full-Time",
    favoriteColor: "#0D9488"
  },
  cadence: {
    id: "cadence",
    firstName: "Cadence",
    lastName: "Voth",
    displayName: "Cadence Voth",
    initials: "CV",
    birthday: "2013-10-12", // 13 years old
    email: "cadence.voth@example.com",
    avatarEmoji: "🎨",
    bio: "",
    role: "Kid",
    residency: "Bi-Weekly",
    favoriteColor: "#EC4899"
  },
  mason: {
    id: "mason",
    firstName: "Mason",
    lastName: "Voth",
    displayName: "Mason Voth",
    initials: "MV",
    birthday: "2016-04-08", // 10 years old (Junior)
    email: "", // Under 12: restricted
    avatarEmoji: "⚡",
    bio: "",
    role: "Kid",
    residency: "Bi-Weekly",
    favoriteColor: "#EA580C"
  },
  koda: {
    id: "koda",
    firstName: "Koda",
    lastName: "Voth",
    displayName: "Koda Voth",
    initials: "KV",
    birthday: "2017-08-25", // 9 years old (Junior)
    email: "", // Under 12: restricted
    avatarEmoji: "🚀",
    bio: "",
    role: "Kid",
    residency: "Casual",
    favoriteColor: "#0284C7"
  },
  keyanna: {
    id: "keyanna",
    firstName: "Keyanna",
    lastName: "Voth",
    displayName: "Keyanna Voth",
    initials: "KV",
    birthday: "2019-11-14", // 7 years old (Junior)
    email: "", // Under 12: restricted
    avatarEmoji: "🦄",
    bio: "",
    role: "Kid",
    residency: "Casual",
    favoriteColor: "#D97706"
  }
};

/**
 * Calculates current age from a birthday string (YYYY-MM-DD)
 */
export function calculateAge(birthday?: string, referenceDate: Date = new Date()): number | null {
  if (!birthday) return null;
  const birth = new Date(birthday + "T00:00:00");
  if (isNaN(birth.getTime())) return null;

  let age = referenceDate.getFullYear() - birth.getFullYear();
  const mDiff = referenceDate.getMonth() - birth.getMonth();
  if (mDiff < 0 || (mDiff === 0 && referenceDate.getDate() < birth.getDate())) {
    age--;
  }
  return Math.max(0, age);
}

/**
 * Determines age tier based on age, role, and optional parent admin tierOverride:
 * - If tierOverride is set to junior/teen/adult, it takes precedence.
 * - Otherwise:
 *   - junior: <= 11
 *   - teen: 12 to 17
 *   - adult: >= 18 or Parent role
 */
export function getAgeTier(age: number | null, role?: string, tierOverride?: ProfileTierOverride): AgeTier {
  if (tierOverride && tierOverride !== "auto") {
    return tierOverride;
  }
  const isParent = isParentRole(role);
  if (isParent) return "adult";
  if (age === null) return "junior"; // Default safe tier if unknown
  if (age >= 18) return "adult";
  if (age >= 12) return "teen";
  return "junior";
}

/**
 * Returns the effective age tier for a profile, accounting for tierOverride
 */
export function getEffectiveAgeTier(profile: UserProfile): AgeTier {
  const age = calculateAge(profile.birthday);
  return getAgeTier(age, profile.role, profile.tierOverride);
}

/**
 * Generates clean two-letter uppercase initials from first and last name
 */
export function generateInitials(firstName: string, lastName: string): string {
  const first = (firstName || "").trim();
  const last = (lastName || "").trim();
  if (first && last) {
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  }
  if (first) {
    return first.slice(0, 2).toUpperCase();
  }
  return "??";
}

/**
 * Check if the user profile has autonomy to manage their email address:
 * True if effective tier is teen or adult
 */
export function canProfileManageEmail(profile: UserProfile): boolean {
  const tier = getEffectiveAgeTier(profile);
  return tier === "teen" || tier === "adult";
}

/**
 * Check if profile has self-management autonomy (effective tier is teen or adult)
 */
export function canProfileSelfManage(profile: UserProfile): boolean {
  const tier = getEffectiveAgeTier(profile);
  return tier === "teen" || tier === "adult";
}

const STORAGE_KEY_ACTIVE_ADMIN = "weekly_chores_active_parent_admin";

/**
 * Get the currently active parent administrator for this hub ("Thom" | "Meghan")
 */
export function getStoredActiveParentAdmin(): "Thom" | "Meghan" {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_ADMIN);
    if (saved === "Meghan" || saved === "Thom") return saved;
  } catch {}
  return "Thom";
}

/**
 * Set the currently active parent administrator for this hub ("Thom" | "Meghan")
 */
export function saveActiveParentAdmin(admin: "Thom" | "Meghan"): void {
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_ADMIN, admin);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("household_active_admin_updated", { detail: admin }));
    }
  } catch (err) {
    console.error("Error saving active admin:", err);
  }
}

/**
 * Days until next birthday
 */
export function getDaysUntilBirthday(birthday?: string): number | null {
  if (!birthday) return null;
  const birth = new Date(birthday + "T00:00:00");
  if (isNaN(birth.getTime())) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const thisYearBday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (thisYearBday < today) {
    thisYearBday.setFullYear(today.getFullYear() + 1);
  }

  const diffMs = thisYearBday.getTime() - today.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Load all stored user profiles from localStorage
 */
export function getStoredUserProfiles(): Record<string, UserProfile> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROFILES);
    if (!raw) return { ...DEFAULT_USER_PROFILES };
    const parsed = JSON.parse(raw);
    const merged: Record<string, UserProfile> = { ...DEFAULT_USER_PROFILES, ...parsed };
    // Migrate legacy role labels ("Supreme Overlord" / "Overseer Supreme" / "Minion") to Parent / Kid
    Object.keys(merged).forEach(key => {
      const p = merged[key];
      if (p) merged[key] = { ...p, role: normalizeRole(p.role) };
    });
    return merged;
  } catch {
    return { ...DEFAULT_USER_PROFILES };
  }
}

/**
 * Save user profile to storage and broadcast to peers
 */
export function saveUserProfile(profile: UserProfile): void {
  try {
    const existing = getStoredUserProfiles();
    const id = profile.id.toLowerCase().trim();
    const updated: UserProfile = {
      ...profile,
      id,
      role: normalizeRole(profile.role),
      nickname: (profile.nickname || "").trim() || undefined,
      displayName: `${profile.firstName.trim()} ${profile.lastName.trim()}`.trim() || profile.firstName.trim(),
      initials: generateInitials(profile.firstName, profile.lastName),
      updatedAt: Date.now()
    };

    existing[id] = updated;
    localStorage.setItem(STORAGE_KEY_PROFILES, JSON.stringify(existing));

    // Dispatch a local storage custom event for live multi-window sync
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("household_profile_updated", { detail: updated }));
    }
  } catch (err) {
    console.error("Error saving user profile:", err);
  }
}

/**
 * Get or synthesize a profile for a given name or member
 */
export function getUserProfile(nameOrId: string, memberInfo?: any): UserProfile {
  const profiles = getStoredUserProfiles();
  const cleanId = (nameOrId || "").toLowerCase().trim();
  if (profiles[cleanId]) {
    return profiles[cleanId];
  }

  // Synthesize from memberInfo if available
  const rawName = (memberInfo?.name || nameOrId || "").trim();
  const parts = rawName.split(" ");
  const firstName = parts[0] || rawName;
  const lastName = parts.slice(1).join(" ") || "Voth";
  const initials = generateInitials(firstName, lastName);
  const role = normalizeRole(memberInfo?.role);

  const synthetic: UserProfile = {
    id: cleanId || firstName.toLowerCase(),
    firstName,
    lastName,
    nickname: memberInfo?.nickname || undefined,
    displayName: `${firstName} ${lastName}`.trim(),
    initials,
    role,
    residency: memberInfo?.residency || (memberInfo?.type === "biweekly" ? "Bi-Weekly" : memberInfo?.type === "casual" ? "Casual" : "Full-Time"),
    avatarEmoji: role === "Parent" ? "🏠" : "🎒",
    favoriteColor: memberInfo?.color || "#6366F1"
  };

  return synthetic;
}
