// Kid Reward Profiles & Digital Payout Accounts Service
// Allows kids to link their gaming (Roblox, Nintendo, Xbox, PlayStation, Steam),
// shopping (Amazon Wishlist, Apple ID), and wallet accounts so parents can send
// digital gift cards, top-ups, and wish items as chore rewards.

export type RewardRegion = "US" | "CA";

const STORAGE_KEY_REWARD_REGION = "weekly_chores_reward_store_region";

export function getStoredRewardRegion(): RewardRegion {
  if (typeof window === "undefined") return "US";
  try {
    const saved = localStorage.getItem(STORAGE_KEY_REWARD_REGION);
    return saved === "CA" ? "CA" : "US";
  } catch {
    return "US";
  }
}

export function saveStoredRewardRegion(region: RewardRegion) {
  try {
    localStorage.setItem(STORAGE_KEY_REWARD_REGION, region);
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
  officialUrl: (handle?: string, amount?: number) => string;
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
    officialUrl: () => "https://www.nintendo.com/us/store/products/nintendo-eshop-gift-cards/",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=nintendo+eshop+${amount}+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=nintendo+eshop+${amount}+digital+code&i=gift-cards`,
    giftCardUrl: (handle) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://www.nintendo.com/us/store/products/nintendo-eshop-gift-cards/";
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
    officialUrl: () => "https://www.microsoft.com/en-us/p/xbox-gift-card-digital-code/cfq7ttc0k64f",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=xbox+gift+card+${amount}+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=xbox+gift+card+${amount}+digital+code&i=gift-cards`,
    giftCardUrl: (handle) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://www.microsoft.com/en-us/p/xbox-gift-card-digital-code/cfq7ttc0k64f";
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
    officialUrl: () => "https://direct.playstation.com/en-us/buy-accessories/playstation-store-gift-card-digital-code",
    amazonUrl: (_handle, amount = 15, region = "US") =>
      region === "CA"
        ? `https://www.amazon.ca/s?k=playstation+store+gift+card+${amount}+digital+code&i=gift-cards`
        : `https://www.amazon.com/s?k=playstation+store+gift+card+${amount}+digital+code&i=gift-cards`,
    giftCardUrl: (handle) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://direct.playstation.com/en-us/buy-accessories/playstation-store-gift-card-digital-code";
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
    officialUrl: () => "https://www.apple.com/shop/buy-giftcard/giftcard",
    amazonUrl: (_handle, _amount, region = "US") =>
      region === "CA"
        ? "https://www.amazon.ca/s?k=apple+gift+card&i=gift-cards"
        : "https://www.amazon.com/s?k=apple+gift+card&i=gift-cards",
    giftCardUrl: (handle) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://www.apple.com/shop/buy-giftcard/giftcard";
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
    officialUrl: (handle, _amount = 15) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return "https://www.amazon.com/gift-cards/";
    },
    amazonUrl: (handle, _amount = 15, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA" ? "https://www.amazon.ca/gift-cards/" : "https://www.amazon.com/gift-cards/";
    },
    giftCardUrl: (handle, _amount, region = "US") => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) return handle;
      return region === "CA" ? "https://www.amazon.ca/gift-cards/" : "https://www.amazon.com/gift-cards/";
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

const STORAGE_KEY_REWARD_PROFILES = "weekly_chores_kid_reward_profiles_v1";

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
  if (all[kidName]) {
    return all[kidName];
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
    all[profile.kidName] = {
      ...profile,
      lastUpdated: Date.now()
    };
    localStorage.setItem(STORAGE_KEY_REWARD_PROFILES, JSON.stringify(all));

    // Broadcast update across windows & tabs
    if ("BroadcastChannel" in window) {
      try {
        const bc = new BroadcastChannel("weekly_chores_broadcast_v1");
        bc.postMessage({
          type: "REWARD_PROFILE_UPDATED",
          profile: all[profile.kidName],
          timestamp: Date.now()
        });
      } catch {}
    }
  } catch (err) {
    console.warn("Could not save kid reward profile:", err);
  }
}

