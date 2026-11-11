// Parent Reward & Digital Gift Card Payout Modal
// Allows Parents (Thom & Meghan) to view kids' linked gaming/shopping handles,
// 1-click copy gamertags, jump to guaranteed-working digital gift card stores (Roblox, Nintendo, Xbox, Apple, Amazon),
// toggle between US & Canadian regional retailers, and record payouts directly into the household ledger.

import React, { useState, useEffect } from "react";
import {
  Gift,
  X,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  CreditCard,
  Wallet,
  Gamepad2,
  DollarSign,
  Edit2,
  Globe,
  ShoppingCart,
  CheckCircle2,
  Save
} from "lucide-react";
import {
  REWARD_PLATFORMS,
  getKidRewardProfile,
  saveKidRewardProfile,
  getStoredRewardRegion,
  saveStoredRewardRegion,
  isRegionAutoDetected,
  fetchRewardProfilesFromServer,
  type KidRewardProfile,
  type RewardRegion,
  type RewardPlatformConfig
} from "./rewardAccounts";
import { updateKidPayoutPayment, getStoredAllowanceLedger } from "./allowanceLedger";
import { subscribeToRealtimeSync } from "./firebaseSync";

interface ParentRewardPayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  allKidsList?: string[];
  initialKid?: string;
  onPayoutRecorded?: (kidName: string, amount: number, platformName: string) => void;
  onOpenLedger?: () => void;
}

export const ParentRewardPayoutModal: React.FC<ParentRewardPayoutModalProps> = ({
  isOpen,
  onClose,
  allKidsList = ["Sydney", "Cadence", "Mason"],
  initialKid,
  onPayoutRecorded,
  onOpenLedger
}) => {
  const [selectedKid, setSelectedKid] = useState<string>(() => initialKid || allKidsList[0] || "Sydney");
  const [profile, setProfile] = useState<KidRewardProfile>(() => getKidRewardProfile(selectedKid));
  const [region, setRegion] = useState<RewardRegion>(() => getStoredRewardRegion());
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(() => isRegionAutoDetected());
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [recordSuccess, setRecordSuccess] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<number>(15);
  const [lastOpenedPlatform, setLastOpenedPlatform] = useState<string | null>(null);

  // Inline handle editing
  const [editingPlatformId, setEditingPlatformId] = useState<string | null>(null);
  const [editingHandleValue, setEditingHandleValue] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      const kid = initialKid && allKidsList.includes(initialKid) ? initialKid : allKidsList[0] || "Sydney";
      setSelectedKid(kid);
      const p = getKidRewardProfile(kid);
      setProfile(p);
      setCustomAmount(p.targetGoalAmount || 15);
      setRegion(getStoredRewardRegion());
      setIsAutoDetected(isRegionAutoDetected());
      setRecordSuccess(null);
      setNotice(null);
      setEditingPlatformId(null);
    }
  }, [isOpen, initialKid, allKidsList]);

  // Real-time synchronization across windows, tabs, and browsers (Chrome <-> Edge)
  useEffect(() => {
    if (!isOpen) return;

    // Immediately fetch latest from server bridge on open
    fetchRewardProfilesFromServer().then(profiles => {
      if (profiles) {
        const p = getKidRewardProfile(selectedKid);
        setProfile(p);
      }
    });

    const handleRewardUpdate = (e: any) => {
      const detail = e.detail;
      if (!detail) return;
      if (detail.kidName) {
        if (String(detail.kidName).toLowerCase().trim() === selectedKid.toLowerCase().trim()) {
          setProfile(detail);
        }
      } else {
        const p = getKidRewardProfile(selectedKid);
        setProfile(p);
      }
    };

    window.addEventListener("household_reward_profile_updated", handleRewardUpdate);

    const unsubRealtime = subscribeToRealtimeSync((msg: any) => {
      if (!msg) return;
      if (msg.type === "REWARD_PROFILE_UPDATED" && msg.profile) {
        if (String(msg.profile.kidName || "").toLowerCase().trim() === selectedKid.toLowerCase().trim()) {
          setProfile(msg.profile);
        }
      } else if (msg.type === "STORAGE_SYNC" && msg.key === "weekly_chores_kid_reward_profiles_v1") {
        const p = getKidRewardProfile(selectedKid);
        setProfile(p);
      }
    });

    // Cross-browser active bridge polling while parent modal is open (1.5s interval)
    const pollInterval = setInterval(() => {
      fetchRewardProfilesFromServer().then(profiles => {
        if (profiles) {
          const p = getKidRewardProfile(selectedKid);
          setProfile(prev => {
            if ((p.lastUpdated || 0) > (prev.lastUpdated || 0)) {
              return p;
            }
            if (
              JSON.stringify(p.platforms) !== JSON.stringify(prev.platforms) ||
              p.topWish !== prev.topWish ||
              p.targetGoalAmount !== prev.targetGoalAmount
            ) {
              return p;
            }
            return prev;
          });
        }
      });
    }, 1500);

    return () => {
      window.removeEventListener("household_reward_profile_updated", handleRewardUpdate);
      unsubRealtime();
      clearInterval(pollInterval);
    };
  }, [isOpen, selectedKid]);

  const handleSelectKid = (kid: string) => {
    setSelectedKid(kid);
    const p = getKidRewardProfile(kid);
    setProfile(p);
    setCustomAmount(p.targetGoalAmount || 15);
    setRecordSuccess(null);
    setNotice(null);
    setEditingPlatformId(null);
    fetchRewardProfilesFromServer().then(profiles => {
      if (profiles) {
        setProfile(getKidRewardProfile(kid));
      }
    });
  };

  const handleSwitchRegion = (newRegion: RewardRegion) => {
    setRegion(newRegion);
    saveStoredRewardRegion(newRegion);
    setIsAutoDetected(false);
  };

  const handleCopyHandle = (key: string, val: string) => {
    if (!val) return;
    try {
      navigator.clipboard.writeText(val);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {}
  };

  const handleOpenStoreLink = (platform: RewardPlatformConfig, url: string, handle?: string) => {
    // High-Efficiency Auto-Copy: automatically put the kid's tag in clipboard
    if (handle && !handle.startsWith("http")) {
      try {
        navigator.clipboard.writeText(handle);
        setCopiedKey(platform.id);
        setNotice(`📋 Copied ${selectedKid}'s tag "${handle}" to clipboard! Opening ${platform.name}...`);
      } catch {
        setNotice(`Opening ${platform.name}...`);
      }
    } else {
      setNotice(`Opening ${platform.name}...`);
    }

    // Safely open in a new tab
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = url;
    }

    setLastOpenedPlatform(platform.id);
    setTimeout(() => setNotice(null), 4000);
  };

  const handleStartEdit = (platformId: string, currentVal: string) => {
    setEditingPlatformId(platformId);
    setEditingHandleValue(currentVal || "");
  };

  const handleSaveEdit = (platformId: string) => {
    const clean = editingHandleValue.trim();
    const updatedPlatforms = { ...profile.platforms };
    if (clean) {
      updatedPlatforms[platformId] = clean;
    } else {
      delete updatedPlatforms[platformId];
    }
    const updatedProfile: KidRewardProfile = {
      ...profile,
      platforms: updatedPlatforms,
      lastUpdated: Date.now()
    };
    saveKidRewardProfile(updatedProfile);
    setProfile(updatedProfile);
    setEditingPlatformId(null);
    setNotice(`Updated ${selectedKid}'s ${platformId} handle! ✓`);
    setTimeout(() => setNotice(null), 3000);
  };

  const handleRecordLedgerPayout = (platformName: string) => {
    const ledger = getStoredAllowanceLedger();
    if (ledger.length === 0) {
      alert("No active allowance ledger record found. Complete a Sunday Inspection first to create a week record, or check Ledger.");
      return;
    }
    const latestRecord = ledger[0];
    updateKidPayoutPayment(latestRecord.id, selectedKid, true, "Other"); // Recorded as digital card payout
    setRecordSuccess(`Recorded $${customAmount} ${platformName} payout in ledger for ${selectedKid}!`);
    onPayoutRecorded?.(selectedKid, customAmount, platformName);
    setTimeout(() => setRecordSuccess(null), 4000);
  };

  if (!isOpen) return null;

  // Show both linked platforms and allow adding unlinked platforms
  const allPlatforms = REWARD_PLATFORMS;
  const linkedPlatforms = allPlatforms.filter(p => Boolean(profile.platforms?.[p.id]?.trim()));
  const unlinkedPlatforms = allPlatforms.filter(p => !profile.platforms?.[p.id]?.trim());

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl shadow-inner">
              🎁
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight">
                  Digital Reward & Payout Hub
                </h2>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  Parent Mode
                </span>
              </div>
              <p className="text-[11px] text-white/80 font-medium">
                1-Click buy cards & record payouts for {allKidsList.join(", ")}
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

        {/* Subheader: Top bar with Store Region Switcher & Dedicated Kid Selector Row */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 space-y-2.5 shrink-0">
          {/* Top Bar: Kid count / instruction & Store Region Switcher */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400">Viewing:</span>
              <span className="text-xs font-black text-amber-400 tracking-tight">{selectedKid}</span>
              <span className="text-[10px] text-slate-500 font-medium">({allKidsList.length} kids)</span>
            </div>

            {/* Region Switcher with Auto-Country Detection */}
            <div className="flex items-center gap-1 bg-slate-800/90 p-0.5 rounded-xl border border-slate-700/80">
              <span className="text-[10px] text-slate-400 font-bold px-1.5 flex items-center gap-1">
                <Globe className="w-3 h-3 text-slate-400" />
                <span className="hidden xs:inline">Store:</span>
              </span>
              <button
                type="button"
                onClick={() => handleSwitchRegion("CA")}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-black transition cursor-pointer flex items-center gap-1 ${
                  region === "CA"
                    ? "bg-amber-500 text-slate-950 shadow-2xs"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Canadian Stores (CAD) - Official & Amazon.ca"
              >
                <span>🇨🇦 CA</span>
                {region === "CA" && isAutoDetected && (
                  <span className="text-[8px] bg-slate-950/25 text-slate-900 px-1 rounded-sm uppercase tracking-tighter font-extrabold">
                    Auto
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => handleSwitchRegion("US")}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-black transition cursor-pointer flex items-center gap-1 ${
                  region === "US"
                    ? "bg-amber-500 text-slate-950 shadow-2xs"
                    : "text-slate-400 hover:text-white"
                }`}
                title="United States Stores (USD) - Official & Amazon.com"
              >
                <span>🇺🇸 US</span>
                {region === "US" && isAutoDetected && (
                  <span className="text-[8px] bg-slate-950/25 text-slate-900 px-1 rounded-sm uppercase tracking-tighter font-extrabold">
                    Auto
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Dedicated Kid Selector Tabs Row: Never covered, unclipped, smooth scrolling */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 -mx-1 px-1 scrollbar-none">
            {allKidsList.map((kid) => {
              const isSelected = kid === selectedKid;
              const kProfile = getKidRewardProfile(kid);
              const hasAccounts = Object.keys(kProfile.platforms || {}).length > 0;

              return (
                <button
                  key={kid}
                  type="button"
                  onClick={() => handleSelectKid(kid)}
                  className={`flex-1 min-w-[70px] py-1.5 px-3 rounded-xl font-extrabold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 ${
                    isSelected
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/80"
                  }`}
                >
                  <span>{kid}</span>
                  {hasAccounts && (
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-slate-950" : "bg-emerald-400"}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs text-slate-200 flex-1">
          {/* Success Banner */}
          {recordSuccess && (
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-2xl p-3 flex items-center gap-2 text-emerald-300 font-bold animate-in fade-in duration-200">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{recordSuccess}</span>
            </div>
          )}

          {/* Real-Time Auto-Copy Feedback Toast */}
          {notice && (
            <div className="bg-indigo-600/30 border border-indigo-500/50 rounded-2xl p-3 flex items-center justify-between gap-2 text-indigo-200 font-bold animate-in fade-in duration-200 shadow-lg">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-[11px]">{notice}</span>
              </div>
              <button
                type="button"
                onClick={() => setNotice(null)}
                className="text-indigo-300 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Kid's Top Wish Card */}
          <div className="bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-400 font-black uppercase text-[10px] tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedKid}&apos;s Top Reward Wish</span>
              </div>
              {profile.targetGoalAmount && (
                <span className="font-mono font-black text-amber-300 text-xs bg-amber-500/20 px-2 py-0.5 rounded-lg">
                  Target: ${profile.targetGoalAmount}
                </span>
              )}
            </div>

            <p className="text-sm font-black text-white leading-relaxed">
              {profile.topWish || "No specific wish added yet."}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-slate-400 font-medium">Payout Amount:</span>
              {[10, 15, 20, 25, 50].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setCustomAmount(amt)}
                  className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition cursor-pointer ${
                    customAmount === amt
                      ? "bg-amber-500 text-slate-950 font-black"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          {/* Connected Accounts & 1-Click Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-indigo-400" />
                <span>Connected Accounts & Purchase Portals</span>
              </h3>
              <span className="text-[10px] text-slate-400 font-medium">
                Auto-copies gamertag on click
              </span>
            </div>

            {linkedPlatforms.length === 0 ? (
              <div className="p-6 bg-slate-800/40 border border-dashed border-slate-700 rounded-2xl text-center space-y-2">
                <span className="text-3xl">🎮</span>
                <p className="text-slate-300 font-bold text-xs">
                  {selectedKid} hasn&apos;t linked any gaming or shopping tags yet.
                </p>
                <p className="text-slate-500 text-[11px]">
                  You can click below to link their Roblox, Switch, or Amazon tags immediately.
                </p>
              </div>
            ) : (
              linkedPlatforms.map((platform) => {
                const handle = profile.platforms[platform.id] || "";
                const isCopied = copiedKey === platform.id;
                const isEditing = editingPlatformId === platform.id;
                const isCustomUrl = handle.startsWith("http://") || handle.startsWith("https://");
                const officialUrl = platform.officialUrl(handle, customAmount, region);
                const amazonUrl = platform.amazonUrl(handle, customAmount, region);
                const isHighlighted = lastOpenedPlatform === platform.id;

                return (
                  <div
                    key={platform.id}
                    className={`bg-slate-800/80 border rounded-2xl p-3.5 space-y-2.5 transition shadow-sm ${
                      isHighlighted
                        ? "border-amber-500 ring-2 ring-amber-500/30"
                        : "border-slate-700/80 hover:border-slate-600"
                    }`}
                  >
                    {/* Platform Header & Handle */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className="text-xl shrink-0">{platform.iconEmoji}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-xs text-white truncate">
                              {platform.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleStartEdit(platform.id, handle)}
                              className="text-slate-400 hover:text-amber-300 p-0.5 rounded transition cursor-pointer"
                              title="Edit handle / link"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                          </div>

                          {isEditing ? (
                            <div className="flex items-center gap-1.5 mt-1">
                              <input
                                type="text"
                                value={editingHandleValue}
                                onChange={(e) => setEditingHandleValue(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") handleSaveEdit(platform.id);
                                  if (e.key === "Escape") setEditingPlatformId(null);
                                }}
                                placeholder={platform.placeholder}
                                className="w-full bg-slate-900 border border-indigo-400 rounded-lg px-2 py-1 text-[11px] font-mono text-white focus:outline-none"
                                autoFocus
                              />
                              <button
                                type="button"
                                onClick={() => handleSaveEdit(platform.id)}
                                className="p-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
                                title="Save"
                              >
                                <Save className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingPlatformId(null)}
                                className="p-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition cursor-pointer"
                                title="Cancel"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <div className="font-mono text-amber-300 text-[11px] font-semibold flex items-center gap-1.5 mt-0.5 truncate">
                              <span className="truncate">{handle}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 1-Click Copy Button */}
                      {!isEditing && (
                        <button
                          type="button"
                          onClick={() => handleCopyHandle(platform.id, handle)}
                          className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1 cursor-pointer shrink-0 ${
                            isCopied
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                          }`}
                          title="Copy gamertag/link"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Tag</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Action Row: Direct Reliable Purchase Links + 1-Click Record Paid */}
                    <div className="space-y-1.5 pt-0.5">
                      <div className="flex items-center gap-2">
                        {isCustomUrl ? (
                          <button
                            type="button"
                            onClick={() => handleOpenStoreLink(platform, handle, handle)}
                            className="flex-1 py-2 px-3 rounded-xl font-black text-[11px] bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer"
                          >
                            <span>Open Wishlist Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        ) : platform.id === "cashapp" ? (
                          <button
                            type="button"
                            onClick={() => handleOpenStoreLink(platform, officialUrl, handle)}
                            className="flex-1 py-2 px-3 rounded-xl font-black text-[11px] bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer"
                          >
                            <span>Open Cash App Pay</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        ) : (
                          <>
                            {/* Primary Button: Official Direct Store */}
                            <button
                              type="button"
                              onClick={() => handleOpenStoreLink(platform, officialUrl, handle)}
                              className="flex-1 py-2 px-2.5 rounded-xl font-black text-[11px] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer text-center"
                              title={`Open Official ${platform.name} portal (Copies tag automatically)`}
                            >
                              <span>Official Store</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>

                            {/* Secondary Button: Amazon Digital Code Search with Amount */}
                            <button
                              type="button"
                              onClick={() => handleOpenStoreLink(platform, amazonUrl, handle)}
                              className="py-2 px-2.5 rounded-xl font-black text-[11px] bg-slate-700 hover:bg-slate-600 text-amber-300 flex items-center justify-center gap-1 shadow-md transition cursor-pointer shrink-0"
                              title={`Search Amazon ${region} for $${customAmount} ${platform.name} digital codes`}
                            >
                              <ShoppingCart className="w-3 h-3 text-amber-400" />
                              <span>Amazon ({region})</span>
                              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                            </button>
                          </>
                        )}

                        {/* 1-Click Record in Allowance Ledger */}
                        <button
                          type="button"
                          onClick={() => handleRecordLedgerPayout(platform.name)}
                          className="py-2 px-3 rounded-xl font-bold text-[11px] bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 shadow-md transition cursor-pointer shrink-0"
                          title="Record payout in Allowance Ledger"
                        >
                          <CreditCard className="w-3 h-3" />
                          <span>Record Paid (${customAmount})</span>
                        </button>
                      </div>

                      {/* Post-Open Quick Follow-up Helper */}
                      {isHighlighted && (
                        <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-between gap-2 text-amber-200 text-[11px] font-semibold animate-in fade-in duration-150">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>Store opened & tag copied. Did you finish checkout?</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRecordLedgerPayout(platform.name)}
                            className="px-2 py-0.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-lg text-[10px] transition cursor-pointer shrink-0"
                          >
                            Mark Paid (${customAmount})
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}

            {/* Quick-Add for Unlinked Platforms */}
            {unlinkedPlatforms.length > 0 && (
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                  Add Other Platform Handles for {selectedKid}:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {unlinkedPlatforms.map(platform => (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => handleStartEdit(platform.id, "")}
                      className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/80 text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>{platform.iconEmoji}</span>
                      <span>+ {platform.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onOpenLedger}
            className="text-[11px] text-slate-400 hover:text-white font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <Wallet className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open Allowance Ledger</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
