// Kid First-Run Welcome & Age-Tiered Profile Customization Modal
// - Kids 12 & Up (Teen Tier): Customize Nickname, Emoji, Theme Color, Bio, Email, G-Pay/Apple Pay handles, Shopping Wishlists & Gamertags
// - Kids 11 & Under (Junior Tier): Kid-safe basic settings only (Nickname, Emoji, Theme Color & Simple Prize Wish)

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Gamepad2,
  CreditCard,
  ShoppingBag,
  Smile,
  Check,
  ChevronRight,
  ChevronLeft,
  X
} from "lucide-react";
import {
  getUserProfile,
  saveUserProfile,
  getEffectiveAgeTier,
  calculateAge
} from "./userProfiles";
import {
  getKidRewardProfile,
  saveKidRewardProfile
} from "./rewardAccounts";
import {
  getHouseholdSetupConfig,
  saveHouseholdSetupConfig
} from "./householdOnboardingConfig";

interface KidWelcomeOnboardingModalProps {
  isOpen: boolean;
  kidName: string;
  onClose: () => void;
}

const KID_EMOJIS = ["✨", "🚀", "🎧", "🎨", "⚡", "🦄", "🐉", "🎮", "🏀", "🎸", "🐾", "🌟"];
const KID_COLORS = [
  { name: "Teal", hex: "#0D9488" },
  { name: "Pink", hex: "#EC4899" },
  { name: "Purple", hex: "#8B5CF6" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Orange", hex: "#EA580C" },
  { name: "Sky", hex: "#0284C7" },
  { name: "Emerald", hex: "#10B981" },
  { name: "Amber", hex: "#D97706" }
];

export const KidWelcomeOnboardingModal: React.FC<KidWelcomeOnboardingModalProps> = ({
  isOpen,
  kidName,
  onClose
}) => {
  const profile = getUserProfile(kidName);
  const age = calculateAge(profile.birthday);
  const tier = getEffectiveAgeTier(profile);
  const isTeen = tier === "teen" || tier === "adult" || (age !== null && age >= 12);

  const [step, setStep] = useState(1);
  const totalSteps = isTeen ? 3 : 1;

  // Step 1: Basic Profile (All Kids)
  const [nickname, setNickname] = useState(profile.nickname || profile.firstName || kidName);
  const [avatarEmoji, setAvatarEmoji] = useState(profile.avatarEmoji || "✨");
  const [favoriteColor, setFavoriteColor] = useState(profile.favoriteColor || "#0D9488");
  const [bio, setBio] = useState(profile.bio || "");
  const [email, setEmail] = useState(profile.email || "");
  const [topWish, setTopWish] = useState("");

  // Step 2 (12+ Teen only): Mobile Wallets & Shopping Wishlists
  const [gpayHandle, setGpayHandle] = useState("");
  const [applepayHandle, setApplepayHandle] = useState("");
  const [cashappHandle, setCashappHandle] = useState("");
  const [amazonWishlist, setAmazonWishlist] = useState("");
  const [appleId, setAppleId] = useState("");

  // Step 3 (12+ Teen only): Gamertags & Socials
  const [robloxTag, setRobloxTag] = useState("");
  const [nintendoTag, setNintendoTag] = useState("");
  const [xboxTag, setXboxTag] = useState("");
  const [psnTag, setPsnTag] = useState("");
  const [steamTag, setSteamTag] = useState("");
  const [socialHandle, setSocialHandle] = useState("");

  useEffect(() => {
    if (isOpen && kidName) {
      const p = getUserProfile(kidName);
      const r = getKidRewardProfile(kidName);
      setNickname(p.nickname || p.firstName || kidName);
      setAvatarEmoji(p.avatarEmoji || "✨");
      setFavoriteColor(p.favoriteColor || "#0D9488");
      setBio(p.bio || "");
      setEmail(p.email || "");
      setTopWish(r.topWish || "");
      setGpayHandle(r.platforms?.gpay || "");
      setApplepayHandle(r.platforms?.applepay || "");
      setCashappHandle(r.platforms?.cashapp || "");
      setAmazonWishlist(r.platforms?.amazon || "");
      setAppleId(r.platforms?.apple || "");
      setRobloxTag(r.platforms?.roblox || "");
      setNintendoTag(r.platforms?.nintendo || "");
      setXboxTag(r.platforms?.xbox || "");
      setPsnTag(r.platforms?.playstation || "");
      setSteamTag(r.platforms?.steam || "");
      setSocialHandle(r.platforms?.social || "");
      setStep(1);
    }
  }, [isOpen, kidName]);

  if (!isOpen) return null;

  const handleSaveAndFinish = () => {
    const p = getUserProfile(kidName);
    saveUserProfile({
      ...p,
      nickname: nickname.trim() || p.firstName,
      avatarEmoji,
      favoriteColor,
      bio: isTeen ? bio.trim() : p.bio,
      email: isTeen ? email.trim() : p.email
    });

    const existingReward = getKidRewardProfile(kidName);
    const updatedPlatforms: Record<string, string> = { ...(existingReward.platforms || {}) };

    if (isTeen) {
      const pairs: Array<[string, string]> = [
        ["gpay", gpayHandle],
        ["applepay", applepayHandle],
        ["cashapp", cashappHandle],
        ["amazon", amazonWishlist],
        ["apple", appleId],
        ["roblox", robloxTag],
        ["nintendo", nintendoTag],
        ["xbox", xboxTag],
        ["playstation", psnTag],
        ["steam", steamTag],
        ["social", socialHandle]
      ];
      pairs.forEach(([k, val]) => {
        if (val && val.trim()) {
          updatedPlatforms[k] = val.trim();
        } else {
          delete updatedPlatforms[k];
        }
      });
    }

    saveKidRewardProfile({
      ...existingReward,
      kidName,
      topWish: topWish.trim() || existingReward.topWish,
      platforms: updatedPlatforms,
      lastUpdated: Date.now()
    });

    const setup = getHouseholdSetupConfig();
    saveHouseholdSetupConfig({
      kidWelcomeCompleted: {
        ...(setup.kidWelcomeCompleted || {}),
        [kidName.toLowerCase()]: true
      }
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto modal-safe-area"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden my-auto flex flex-col max-h-full text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-4 sm:p-5 text-white flex items-center justify-between shrink-0"
          style={{
            background: `linear-gradient(135deg, ${favoriteColor}, #4F46E5)`
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shrink-0 shadow-inner">
              {avatarEmoji}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-black tracking-tight truncate">
                  Welcome, {nickname || kidName}!
                </h2>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-black/25 px-2 py-0.5 rounded-full">
                  {isTeen ? `12+ Teen Profile (Step ${step}/3)` : "Junior Profile (11 & Under)"}
                </span>
              </div>
              <p className="text-[11px] text-white/90 truncate">
                {isTeen
                  ? "Customize your nickname, wallets, wishlists & gamertags"
                  : "Pick your nickname, emoji, favorite color & top prize wish!"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 text-xs">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1">
                  Your Nickname (Shown on your dashboard &amp; leaderboard)
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder={`e.g. ${kidName}`}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Emoji Picker */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5">
                  Pick Your Profile Icon
                </label>
                <div className="grid grid-cols-6 gap-1.5">
                  {KID_EMOJIS.map((em) => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setAvatarEmoji(em)}
                      className={`py-2 rounded-xl text-lg flex items-center justify-center border transition cursor-pointer ${
                        avatarEmoji === em
                          ? "bg-indigo-600/30 border-indigo-400 scale-105 shadow-xs"
                          : "bg-slate-800 border-slate-700 hover:bg-slate-700"
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              {/* Favorite Color */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5">
                  Pick Your Theme Color
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {KID_COLORS.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => setFavoriteColor(c.hex)}
                      className={`py-1.5 px-2 rounded-xl text-[11px] font-bold border flex items-center gap-1.5 transition cursor-pointer ${
                        favoriteColor === c.hex
                          ? "border-white bg-slate-800 text-white shadow-xs"
                          : "border-slate-700 bg-slate-900 text-slate-400"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Reward Wish (All Kids) */}
              <div>
                <label className="block text-[11px] font-bold text-amber-300 mb-1">
                  🎁 What Reward Are You Saving Up For?
                </label>
                <input
                  type="text"
                  value={topWish}
                  onChange={(e) => setTopWish(e.target.value)}
                  placeholder="e.g. $15 Roblox Card, Lego Set, Movie Night..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* 12+ Teen Extra Bio & Email */}
              {isTeen && (
                <div className="pt-2 border-t border-slate-800 space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-purple-300 mb-1">
                      Personal Status / Bio (12+ Teen Perk)
                    </label>
                    <input
                      type="text"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="e.g. Saving up for a new headset 🎧"
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-purple-300 mb-1">
                      Your Email (for Digital Gift Cards &amp; Notifications)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 2 (12+ TEEN ONLY): WALLETS & SHOPPING WISHLISTS */}
          {step === 2 && isTeen && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sky-300 font-black uppercase tracking-wider text-[11px]">
                <CreditCard className="w-4 h-4 text-sky-400" />
                <span>Mobile Wallets &amp; Shopping Links (12+ Teen Tier)</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Link your mobile wallet or wishlist so your parents can send your allowance or gift cards in 1 tap.
              </p>

              <div className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    💳 Google Pay (G-Pay) Email or Phone
                  </label>
                  <input
                    type="text"
                    value={gpayHandle}
                    onChange={(e) => setGpayHandle(e.target.value)}
                    placeholder="Phone or Gmail for G-Pay"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🍎 Apple Pay / Apple Cash (Phone or Apple ID)
                  </label>
                  <input
                    type="text"
                    value={applepayHandle}
                    onChange={(e) => setApplepayHandle(e.target.value)}
                    placeholder="iMessage Phone or Apple ID"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🟢 Cash App / Venmo / e-Transfer Handle
                  </label>
                  <input
                    type="text"
                    value={cashappHandle}
                    onChange={(e) => setCashappHandle(e.target.value)}
                    placeholder="$Cashtag, @Venmo, or e-Transfer email"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    📦 Amazon Wishlist Link
                  </label>
                  <input
                    type="url"
                    value={amazonWishlist}
                    onChange={(e) => setAmazonWishlist(e.target.value)}
                    placeholder="https://www.amazon.ca/hz/wishlist/ls/..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🍏 Apple App Store / iTunes Email
                  </label>
                  <input
                    type="email"
                    value={appleId}
                    onChange={(e) => setAppleId(e.target.value)}
                    placeholder="kid@icloud.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 (12+ TEEN ONLY): GAMERTAGS & SOCIALS */}
          {step === 3 && isTeen && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-300 font-black uppercase tracking-wider text-[11px]">
                <Gamepad2 className="w-4 h-4 text-emerald-400" />
                <span>Gamertags &amp; Social Handles (12+ Teen Tier)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🟥 Roblox Username
                  </label>
                  <input
                    type="text"
                    value={robloxTag}
                    onChange={(e) => setRobloxTag(e.target.value)}
                    placeholder="e.g. SydneyStar"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🎮 Nintendo Switch Friend Code
                  </label>
                  <input
                    type="text"
                    value={nintendoTag}
                    onChange={(e) => setNintendoTag(e.target.value)}
                    placeholder="SW-1234-5678-9012"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🟩 Xbox Gamertag
                  </label>
                  <input
                    type="text"
                    value={xboxTag}
                    onChange={(e) => setXboxTag(e.target.value)}
                    placeholder="Xbox Live Tag"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    🟦 PlayStation Network ID
                  </label>
                  <input
                    type="text"
                    value={psnTag}
                    onChange={(e) => setPsnTag(e.target.value)}
                    placeholder="PSN Online ID"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    ⬛ Steam Username
                  </label>
                  <input
                    type="text"
                    value={steamTag}
                    onChange={(e) => setSteamTag(e.target.value)}
                    placeholder="Steam Account"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    💬 Discord / Social Handle
                  </label>
                  <input
                    type="text"
                    value={socialHandle}
                    onChange={(e) => setSocialHandle(e.target.value)}
                    placeholder="@handle"
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between gap-2 shrink-0">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(s => s - 1)}
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
              Skip for Now
            </button>
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={() => setStep(s => s + 1)}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center gap-1 shadow-md transition cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSaveAndFinish}
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg transition cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Save My Profile!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
