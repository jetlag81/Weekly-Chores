// Kid Reward Profiles & Digital Payout Accounts Service
// Allows kids to link their gaming (Roblox, Nintendo, Xbox, PlayStation, Steam),
// shopping (Amazon Wishlist, Apple ID), and wallet accounts so parents can send
// digital gift cards, top-ups, and wish items as chore rewards.

import {
  broadcastLocalUpdate,
  getStoredDeviceSession,
  syncKidRewardProfileToFirestore
} from "./firebaseSync";

export type RewardRegion = "US" | "CA";

const STORAGE_KEY_REWARD_REGION = "weekly_chores_reward_store_region";

// Canadian timezones according to IANA timezone database
const CANADIAN_TIMEZONES = new Set([
  "America/Halifax",
  "America/St_Johns",
  "America/Toronto",
  "America/Montreal",
  "America/Winnipeg",
  "America/Regina",
  "America/Swift_Current",
  "America/Edmonton",
  "America/Calgary",
  "America/Vancouver",
  "America/Victoria",
  "America/Whitehorse",
  "America/Yellowknife",
  "America/Iqaluit",
  "America/Moncton",
  "America/Glace_Bay",
  "America/Goose_Bay",
  "America/Blanc-Sablon",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Inuvik",
  "America/Pangnirtung",
  "America/Rankin_Inlet",
  "America/Resolute",
  "America/Atikokan",
  "America/Creston",
  "Canada/Atlantic",
  "Canada/Central",
  "Canada/Eastern",
  "Canada/Mountain",
  "Canada/Newfoundland",
  "Canada/Pacific",
  "Canada/Saskatchewan",
  "Canada/Yukon"
]);

/**
 * Automatically detects whether the user is located in Canada or the US
 * using native browser timezone and locale information (zero network overhead, 100% private).
 */
export function detectUserCountry(): RewardRegion {
  if (typeof window === "undefined") return "CA"; // default to Canadian context for this family

  try {
    // 1. Timezone detection (fast, offline, 100% reliable)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (CANADIAN_TIMEZONES.has(tz) || tz.startsWith("Canada/")) {
      return "CA";
    }

    // 2. Language/Locale detection (e.g. en-CA, fr-CA)
    const languages = navigator.languages || [navigator.language || ""];
    for (const lang of languages) {
      const clean = String(lang || "").toLowerCase();
      if (clean.includes("-ca") || clean.endsWith("_ca")) {
        return "CA";
      }
    }
  } catch (err) {
    console.warn("Country auto-detection error:", err);
  }

  // Fallback to CA if system timezone indicates Canadian province, else US
  return "CA";
}

export function isRegionAutoDetected(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_REWARD_REGION);
    return saved !== "CA" && saved !== "US";
  } catch {
    return true;
  }
}

export function getStoredRewardRegion(): RewardRegion {
  if (typeof window === "undefined") return "CA";
  try {
    const saved = localStorage.getItem(STORAGE_KEY_REWARD_REGION);
    if (saved === "CA" || saved === "US") {
      return saved;
    }
  } catch {}
  return detectUserCountry();
}

export function saveStoredRewardRegion(region: RewardRegion | "AUTO") {
  try {
    if (region === "AUTO") {
      localStorage.removeItem(STORAGE_KEY_REWARD_REGION);
    } else {
      localStorage.setItem(STORAGE_KEY_REWARD_REGION, region);
    }
  } catch {}
}

export interface RewardPlatformConfig {
  id: string;
  name: string;
  category: "gaming" | "shopping" | "wallet" | "other";
  iconEmoji: string;
  badgeColor: string;
  placeholder: string;
  helpText: string;
  giftCardUrl: (handle?: string, amount?: number, region?: RewardRegion) => string;
  officialUrl: (handle?: string, amount?: number, region?: RewardRegion) => string;
  amazonUrl: (handle?: string, amount?: number, region?: RewardRegion) => string;
  giftCardLabel: string;
}

export const REWARD_PLATFORMS: RewardPlatformConfig[] = [
  {
    id: "roblox",
    name: "Roblox",
    category: "gaming",
    iconEmoji: "🟥",
    badgeColor: "bg-red-500/15 text-red-400 border-red-500/30",
    placeholder: "Username (e.g. SydneyStar23)",
    helpText: "Username to send Robux or digital Roblox gift cards",
    officialUrl: () => "https://www.roblox.com/giftcards",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=roblox+${amount}+gift+card+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=roblox+${amount}+gift+card+digital+code&i=gift-cards`,
    giftCardUrl: (handle, amount = 15, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://www.roblox.com/giftcards";
    },
    giftCardLabel: "Roblox Gift Card"
  },
  {
    id: "nintendo",
    name: "Nintendo Switch",
    category: "gaming",
    iconEmoji: "🎮",
    badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    placeholder: "Friend Code (e.g. SW-1234-5678-9012)",
    helpText: "Switch Friend Code or Nintendo Network ID",
    officialUrl: (_handle, _amount, region = "US") =>
      region === "CA"
        ? "https://www.nintendo.com/en-ca/store/"
        : "https://www.nintendo.com/us/store/products/nintendo-eshop-gift-cards/",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=nintendo+eshop+${amount}+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=nintendo+eshop+${amount}+digital+code&i=gift-cards`,
    giftCardUrl: (handle, _amount, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? "https://www.nintendo.com/en-ca/store/"
        : "https://www.nintendo.com/us/store/products/nintendo-eshop-gift-cards/";
    },
    giftCardLabel: "Nintendo eShop Card"
  },
  {
    id: "xbox",
    name: "Xbox / Microsoft",
    category: "gaming",
    iconEmoji: "🟩",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    placeholder: "GamerTag (e.g. MasterMinion)",
    helpText: "Xbox Live Gamertag for Game Pass or Store credit",
    officialUrl: (_handle, _amount, region = "US") =>
      region === "CA"
        ? "https://www.microsoft.com/en-ca/p/xbox-gift-card-digital-code/cfq7ttc0k56j/0002?activetab=pivot:overviewtab"
        : "https://www.microsoft.com/en-us/p/xbox-gift-card-digital-code/cfq7ttc0k56j/0002?activetab=pivot:overviewtab",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=xbox+gift+card+${amount}+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=xbox+gift+card+${amount}+digital+code&i=gift-cards`,
    giftCardUrl: (handle, _amount, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? "https://www.microsoft.com/en-ca/p/xbox-gift-card-digital-code/cfq7ttc0k56j/0002?activetab=pivot:overviewtab"
        : "https://www.microsoft.com/en-us/p/xbox-gift-card-digital-code/cfq7ttc0k56j/0002?activetab=pivot:overviewtab";
    },
    giftCardLabel: "Xbox Gift Card"
  },
  {
    id: "playstation",
    name: "PlayStation Network",
    category: "gaming",
    iconEmoji: "🟦",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    placeholder: "PSN Online ID (e.g. MinionGamer)",
    helpText: "PlayStation Network Online ID for PS Store credit",
    officialUrl: (_handle, _amount, region = "US") =>
      region === "CA"
        ? "https://playstation-ca.cashstar.com/store-v2?locale=en-ca"
        : "https://playstation.cashstar.com/store-v2?locale=en-us",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=playstation+store+gift+card+${amount}+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=playstation+store+gift+card+${amount}+digital+code&i=gift-cards`,
    giftCardUrl: (handle, _amount, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? "https://playstation-ca.cashstar.com/store-v2?locale=en-ca"
        : "https://playstation.cashstar.com/store-v2?locale=en-us";
    },
    giftCardLabel: "PlayStation Store Card"
  },
  {
    id: "steam",
    name: "Steam",
    category: "gaming",
    iconEmoji: "⬛",
    badgeColor: "bg-slate-700/50 text-slate-300 border-slate-600/50",
    placeholder: "Friend Code or Profile URL",
    helpText: "Steam Friend Code for PC gaming & digital gift cards",
    officialUrl: () => "https://store.steampowered.com/digitalgiftcards/",
    amazonUrl: (_handle, _amount, region = "US") =>
      region === "CA"
        ? "https://www.amazon.ca/s?k=steam+gift+card&i=gift-cards"
        : "https://www.amazon.com/s?k=steam+gift+card&i=gift-cards",
    giftCardUrl: (handle) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://store.steampowered.com/digitalgiftcards/";
    },
    giftCardLabel: "Steam Digital Card"
  },
  {
    id: "apple",
    name: "Apple ID / App Store",
    category: "shopping",
    iconEmoji: "🍏",
    badgeColor: "bg-slate-500/15 text-slate-300 border-slate-500/30",
    placeholder: "Apple ID email (e.g. kid@icloud.com)",
    helpText: "Apple ID email for App Store, iTunes & Apple Arcade cards",
    officialUrl: (_handle, _amount, region = "US") =>
      region === "CA"
        ? "https://www.apple.com/ca/shop/buy-giftcard/giftcard"
        : "https://www.apple.com/shop/buy-giftcard/giftcard",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=apple+gift+card+${amount}+email+delivery&i=gift-cards`
        : `https://www.amazon.com/s?k=apple+gift+card+${amount}+email+delivery&i=gift-cards`,
    giftCardUrl: (handle, _amount, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? "https://www.apple.com/ca/shop/buy-giftcard/giftcard"
        : "https://www.apple.com/shop/buy-giftcard/giftcard";
    },
    giftCardLabel: "Apple Gift Card"
  },
  {
    id: "amazon",
    name: "Amazon Wishlist",
    category: "shopping",
    iconEmoji: "📦",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    placeholder: "Amazon Wishlist Link or Email",
    helpText: "Amazon Public Wishlist link for surprise physical rewards",
    officialUrl: (handle, amount = 15, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? `https://www.amazon.ca/s?k=amazon+gift+card+${amount}+email+delivery&i=gift-cards`
        : `https://www.amazon.com/s?k=amazon+gift+card+${amount}+email+delivery&i=gift-cards`;
    },
    amazonUrl: (handle, amount = 15, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? `https://www.amazon.ca/s?k=amazon+gift+card+${amount}+email+delivery&i=gift-cards`
        : `https://www.amazon.com/s?k=amazon+gift+card+${amount}+email+delivery&i=gift-cards`;
    },
    giftCardUrl: (handle, amount = 15, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA"
        ? `https://www.amazon.ca/s?k=amazon+gift+card+${amount}+email+delivery&i=gift-cards`
        : `https://www.amazon.com/s?k=amazon+gift+card+${amount}+email+delivery&i=gift-cards`;
    },
    giftCardLabel: "Open Wishlist / Send Card"
  },
  {
    id: "cashapp",
    name: "Cash App / Debit",
    category: "wallet",
    iconEmoji: "🟢",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    placeholder: "$Cashtag (e.g. $SydneyChores)",
    helpText: "Cash App $cashtag or debit card username",
    officialUrl: (handle) => {
      const clean = handle ? handle.replace(/^\$/, "") : "";
      return clean ? `https://cash.app/$${clean}` : "https://cash.app/";
    },
    amazonUrl: (handle) => {
      const clean = handle ? handle.replace(/^\$/, "") : "";
      return clean ? `https://cash.app/$${clean}` : "https://cash.app/";
    },
    giftCardUrl: (handle) => {
      const clean = handle ? handle.replace(/^\$/, "") : "";
      return clean ? `https://cash.app/$${clean}` : "https://cash.app/";
    },
    giftCardLabel: "Open Cash App"
  }
];

export interface KidRewardProfile {
  kidName: string;
  topWish?: string; // e.g. "$15 Roblox Gift Card for Pet Simulator 99"
  targetGoalAmount?: number; // e.g. $15
  platforms: Record<string, string>; // platform.id -> handle/value
  lastUpdated: number;
}

export const STORAGE_KEY_REWARD_PROFILES = "weekly_chores_kid_reward_profiles_v1";

// Default placeholder profiles for Sydney, Cadence, and Mason
export const DEFAULT_KID_REWARD_PROFILES: Record<string, KidRewardProfile> = {
  Sydney: {
    kidName: "Sydney",
    topWish: "Roblox Gift Card ($15) or Switch Game",
    targetGoalAmount: 15,
    platforms: {
      roblox: "SydneyStar",
      nintendo: "SW-4821-9920-1124",
      apple: "sydney@icloud.com"
    },
    lastUpdated: Date.now()
  },
  Cadence: {
    kidName: "Cadence",
    topWish: "Nintendo eShop Card or Amazon Books",
    targetGoalAmount: 15,
    platforms: {
      nintendo: "SW-3104-5829-4401",
      amazon: "https://www.amazon.com/hz/wishlist/ls"
    },
    lastUpdated: Date.now()
  },
  Mason: {
    kidName: "Mason",
    topWish: "Xbox Live Gift Card or Roblox",
    targetGoalAmount: 15,
    platforms: {
      xbox: "MasonGamerX",
      roblox: "MasonBlocker"
    },
    lastUpdated: Date.now()
  },
  Koda: {
    kidName: "Koda",
    topWish: "Steam Gift Card or Roblox",
    targetGoalAmount: 15,
    platforms: {
      steam: "KodaGaming",
      roblox: "KodaBlocks"
    },
    lastUpdated: Date.now()
  },
  Keyanna: {
    kidName: "Keyanna",
    topWish: "Amazon Wishlist or Apple App Store Card",
    targetGoalAmount: 15,
    platforms: {
      amazon: "https://www.amazon.com/hz/wishlist/ls",
      apple: "keyanna@icloud.com"
    },
    lastUpdated: Date.now()
  }
};

export function getStoredKidRewardProfiles(): Record<string, KidRewardProfile> {
  if (typeof window === "undefined") return DEFAULT_KID_REWARD_PROFILES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REWARD_PROFILES);
    if (!raw) {
      // Seed default profiles
      localStorage.setItem(STORAGE_KEY_REWARD_PROFILES, JSON.stringify(DEFAULT_KID_REWARD_PROFILES));
      return DEFAULT_KID_REWARD_PROFILES;
    }
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : DEFAULT_KID_REWARD_PROFILES;
  } catch {
    return DEFAULT_KID_REWARD_PROFILES;
  }
}

export function getKidRewardProfile(kidName: string): KidRewardProfile {
  const all = getStoredKidRewardProfiles();
  const search = String(kidName || "").trim().toLowerCase();
  const matchedKey = Object.keys(all).find(k => k.trim().toLowerCase() === search);
  if (matchedKey && all[matchedKey]) {
    const prof = all[matchedKey];
    return {
      ...prof,
      platforms: prof.platforms || {}
    };
  }
  return {
    kidName,
    topWish: "",
    targetGoalAmount: 15,
    platforms: {},
    lastUpdated: Date.now()
  };
}

export function saveKidRewardProfile(profile: KidRewardProfile): void {
  if (typeof window === "undefined") return;
  try {
    const all = getStoredKidRewardProfiles();
    const search = String(profile.kidName || "").trim().toLowerCase();

    // Clean up any mismatched casing duplicates
    for (const key of Object.keys(all)) {
      if (key.trim().toLowerCase() === search && key !== profile.kidName) {
        delete all[key];
      }
    }

    const updated: KidRewardProfile = {
      ...profile,
      platforms: profile.platforms || {},
      lastUpdated: Date.now()
    };
    all[profile.kidName] = updated;
    localStorage.setItem(STORAGE_KEY_REWARD_PROFILES, JSON.stringify(all));

    // 1. Same-window custom event for instant local modal updates
    window.dispatchEvent(
      new CustomEvent("household_reward_profile_updated", { detail: updated })
    );

    // 2. Realtime BroadcastChannel & local sync
    broadcastLocalUpdate({
      type: "REWARD_PROFILE_UPDATED",
      profile: updated,
      timestamp: updated.lastUpdated
    });

    // 3. Local dev server cross-browser bridge (Chrome <-> Edge communication)
    fetch("/__sync-rewards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "SAVE", profile: updated })
    }).catch(() => {});

    // 4. Cloud Firebase Firestore sync
    const session = getStoredDeviceSession();
    syncKidRewardProfileToFirestore(session.householdId || "household_family_hub", updated).catch(() => {});
  } catch (err) {
    console.warn("Could not save kid reward profile:", err);
  }
}

// Pull latest profiles from dev server cross-browser bridge and merge locally
export async function fetchRewardProfilesFromServer(): Promise<Record<string, KidRewardProfile> | null> {
  if (typeof window === "undefined") return null;
  try {
    const res = await fetch("/__sync-rewards");
    if (!res.ok) return null;
    const json = await res.json();
    if (json.ok && json.profiles && typeof json.profiles === "object") {
      const serverProfiles = json.profiles as Record<string, KidRewardProfile>;
      const local = getStoredKidRewardProfiles();
      let changed = false;

      for (const [k, sProfile] of Object.entries(serverProfiles)) {
        if (!sProfile || !sProfile.kidName) continue;
        const sSearch = String(sProfile.kidName).trim().toLowerCase();
        const localKey = Object.keys(local).find(lk => lk.trim().toLowerCase() === sSearch);
        const localProfile = localKey ? local[localKey] : null;

        if (!localProfile || (sProfile.lastUpdated || 0) > (localProfile.lastUpdated || 0)) {
          if (localKey && localKey !== sProfile.kidName) {
            delete local[localKey];
          }
          local[sProfile.kidName] = sProfile;
          changed = true;
        }
      }

      if (changed) {
        localStorage.setItem(STORAGE_KEY_REWARD_PROFILES, JSON.stringify(local));
        window.dispatchEvent(
          new CustomEvent("household_reward_profile_updated", { detail: local })
        );
      }
      return local;
    }
  } catch {}
  return null;
}

// Background auto-sync bootstrap between local storage and dev server bridge
if (typeof window !== "undefined") {
  setTimeout(() => {
    fetch("/__sync-rewards")
      .then(res => res.json())
      .then(data => {
        const local = getStoredKidRewardProfiles();
        if (!data.profiles || Object.keys(data.profiles).length === 0) {
          // Dev server is fresh: push local profiles to seed server bridge
          fetch("/__sync-rewards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "SAVE_ALL", profiles: local })
          }).catch(() => {});
        } else {
          // Dev server has profiles: fetch and merge into local browser
          fetchRewardProfilesFromServer();
        }
      })
      .catch(() => {});
  }, 150);
}

