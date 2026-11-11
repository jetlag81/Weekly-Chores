// Kid Reward Accounts & Wishlist Modal
// Allows Sydney, Cadence, and Mason to link their gaming (Roblox, Nintendo, Xbox, Steam),
// shopping (Amazon Wishlist, Apple ID), and cash tags for digital allowance rewards.

import React, { useState, useEffect } from "react";
import {
  Gift,
  X,
  Sparkles,
  Check,
  Save,
  ExternalLink,
  Copy,
  Gamepad2,
  ShoppingBag,
  Wallet,
  Trophy,
  DollarSign
} from "lucide-react";
import {
  REWARD_PLATFORMS,
  getKidRewardProfile,
  saveKidRewardProfile,
  type KidRewardProfile
} from "./rewardAccounts";

interface KidRewardAccountsModalProps {
  isOpen: boolean;
  onClose: () => void;
  kidName: string;
  onProfileSaved?: (profile: KidRewardProfile) => void;
}

export const KidRewardAccountsModal: React.FC<KidRewardAccountsModalProps> = ({
  isOpen,
  onClose,
  kidName,
  onProfileSaved
}) => {
  const [profile, setProfile] = useState<KidRewardProfile>(() => getKidRewardProfile(kidName));
  const [topWish, setTopWish] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<number>(15);
  const [platforms, setPlatforms] = useState<Record<string, string>>({});
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const p = getKidRewardProfile(kidName);
      setProfile(p);
      setTopWish(p.topWish || "");
      setGoalAmount(p.targetGoalAmount || 15);
      setPlatforms({ ...(p.platforms || {}) });
      setSavedSuccess(false);
    }
  }, [isOpen, kidName]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: KidRewardProfile = {
      kidName,
      topWish: topWish.trim(),
      targetGoalAmount: goalAmount,
      platforms,
      lastUpdated: Date.now()
    };
    saveKidRewardProfile(updated);
    setProfile(updated);
    setSavedSuccess(true);
    onProfileSaved?.(updated);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleCopyHandle = (key: string, val: string) => {
    if (!val) return;
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl shadow-inner">
              🎁
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight">
                  {kidName}&apos;s Reward Hub
                </h2>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  Minion Rewards
                </span>
              </div>
              <p className="text-[11px] text-white/80 font-medium">
                Link your gaming & shopping tags for parents Thom & Meghan
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/90 hover:text-white transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs text-slate-200 flex-1">
          {/* Top Wish & Goal Section */}
          <div className="bg-gradient-to-br from-amber-500/15 via-purple-500/10 to-transparent border border-amber-500/30 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <label className="font-extrabold text-sm text-white">
                  Current Top Wish / Reward Goal
                </label>
              </div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider bg-amber-500/20 px-2 py-0.5 rounded-md">
                Seen by Parents
              </span>
            </div>

            <input
              type="text"
              value={topWish}
              onChange={(e) => setTopWish(e.target.value)}
              placeholder="e.g. $15 Roblox Gift Card for Pet Simulator 99"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />

            {/* Quick Goal Presets */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-amber-400" /> Target:
              </span>
              {[10, 15, 20, 25, 50].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setGoalAmount(amt)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer ${
                    goalAmount === amt
                      ? "bg-amber-500 text-slate-950 shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Accounts List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-indigo-400" />
                <h3 className="font-extrabold text-sm text-white">
                  Connected Gaming & Shopping Accounts
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                Public handles only
              </span>
            </div>

            <div className="space-y-2.5">
              {REWARD_PLATFORMS.map((platform) => {
                const currentVal = platforms[platform.id] || "";
                const isCopied = copiedKey === platform.id;

                return (
                  <div
                    key={platform.id}
                    className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3 hover:border-slate-600 transition"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{platform.iconEmoji}</span>
                        <span className="font-black text-xs text-white">
                          {platform.name}
                        </span>
                      </div>

                      {currentVal && (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleCopyHandle(platform.id, currentVal)}
                            className="p-1 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1 text-[10px] font-semibold"
                            title="Copy handle"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400 font-bold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      value={currentVal}
                      onChange={(e) => {
                        const val = e.target.value;
                        setPlatforms((prev) => ({
                          ...prev,
                          [platform.id]: val
                        }));
                      }}
                      placeholder={platform.placeholder}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-slate-100 placeholder-slate-500 font-mono text-[11px] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />

                    <p className="text-[10px] text-slate-400 mt-1 pl-1">
                      {platform.helpText}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-3 text-[11px] text-indigo-200/90 leading-relaxed flex items-start gap-2">
            <span className="text-base shrink-0">🛡️</span>
            <div>
              <strong className="text-white font-bold">Safe & Private: </strong>
              Never enter account passwords. Only public gamertags, friend codes, and wishlist links are saved so parents can dispatch digital gift cards to you.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs transition flex items-center gap-1.5 shadow-md cursor-pointer ${
                savedSuccess
                  ? "bg-emerald-500 text-white"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black shadow-orange-500/20"
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved to Parents!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Reward Profile</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
