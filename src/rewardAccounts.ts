// Kid Reward Profiles & Digital Payout Accounts Service
// Allows kids to link their gaming (Roblox, Nintendo, Xbox, PlayStation, Steam),
// shopping (Amazon Wishlist, Apple ID), and wallet accounts so parents can send
// digital gift cards, top-ups, and wish items as chore rewards.

export interface RewardPlatformConfig {
  id: string;
  name: string;
  category: "gaming" | "shopping" | "wallet" | "other";
  iconEmoji: string;
  badgeColor: string;
  placeholder: string;
  helpText: string;
  giftCardUrl: (handle?: string) => string;
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
    giftCardUrl: () => "https://www.amazon.com/dp/B07RN5DTM4?th=1", // Amazon Roblox Digital Card
    giftCardLabel: "Buy Roblox Card"
  },
  {
    id: "nintendo",
    name: "Nintendo Switch",
    category: "gaming",
    iconEmoji: "🎮",
    badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    placeholder: "Friend Code (e.g. SW-1234-5678-9012)",
    helpText: "Switch Friend Code or Nintendo Network ID",
    giftCardUrl: () => "https://www.amazon.com/dp/B01LXU5V3N", // Nintendo eShop Digital Code
    giftCardLabel: "Buy eShop Card"
  },
  {
    id: "xbox",
    name: "Xbox / Microsoft",
    category: "gaming",
    iconEmoji: "🟩",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    placeholder: "GamerTag (e.g. MasterMinion)",
    helpText: "Xbox Live Gamertag for Game Pass or Store credit",
    giftCardUrl: () => "https://www.amazon.com/dp/B00F4CF390", // Xbox Digital Code
    giftCardLabel: "Buy Xbox Card"
  },
  {
    id: "playstation",
    name: "PlayStation Network",
    category: "gaming",
    iconEmoji: "🟦",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    placeholder: "PSN Online ID (e.g. MinionGamer)",
    helpText: "PlayStation Network Online ID for PS Store credit",
    giftCardUrl: () => "https://www.amazon.com/dp/B004RMK4BC", // PlayStation Store Card
    giftCardLabel: "Buy PSN Card"
  },
  {
    id: "steam",
    name: "Steam",
    category: "gaming",
    iconEmoji: "⬛",
    badgeColor: "bg-slate-700/50 text-slate-300 border-slate-600/50",
    placeholder: "Friend Code or Profile URL",
    helpText: "Steam Friend Code for PC gaming & digital gift cards",
    giftCardUrl: () => "https://store.steampowered.com/digitalgiftcards/",
    giftCardLabel: "Send Steam Card"
  },
  {
    id: "apple",
    name: "Apple ID / App Store",
    category: "shopping",
    iconEmoji: "🍏",
    badgeColor: "bg-slate-500/15 text-slate-300 border-slate-500/30",
    placeholder: "Apple ID email (e.g. kid@icloud.com)",
    helpText: "Apple ID email for App Store, iTunes & Apple Arcade cards",
    giftCardUrl: () => "https://www.apple.com/shop/buy-giftcard/giftcard",
    giftCardLabel: "Send Apple Card"
  },
  {
    id: "amazon",
    name: "Amazon Wishlist",
    category: "shopping",
    iconEmoji: "📦",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    placeholder: "Amazon Wishlist Link or Email",
    helpText: "Amazon Public Wishlist link for surprise physical rewards",
    giftCardUrl: (handle) => {
      if (handle && (handle.startsWith("http://") || handle.startsWith("https://"))) {
        return handle;
      }
      return "https://www.amazon.com/gift-cards/";
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
