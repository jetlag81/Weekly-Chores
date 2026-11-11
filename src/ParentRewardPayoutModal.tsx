// Parent Reward & Digital Gift Card Payout Modal
// Allows Parents (Thom & Meghan) to view kids' linked gaming/shopping handles,
// 1-click copy gamertags, jump to digital gift card stores (Roblox, Nintendo, Xbox, Apple, Amazon),
// and record digital gift card payouts directly in the household ledger.

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
  Send,
  Edit2
} from "lucide-react";
import {
  REWARD_PLATFORMS,
  getKidRewardProfile,
  getStoredKidRewardProfiles,
  saveKidRewardProfile,
  type KidRewardProfile
} from "./rewardAccounts";
import { updateKidPayoutPayment, getStoredAllowanceLedger } from "./allowanceLedger";

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
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [recordSuccess, setRecordSuccess] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<number>(15);

  useEffect(() => {
    if (isOpen) {
      const kid = initialKid && allKidsList.includes(initialKid) ? initialKid : allKidsList[0] || "Sydney";
      setSelectedKid(kid);
      const p = getKidRewardProfile(kid);
      setProfile(p);
      setCustomAmount(p.targetGoalAmount || 15);
      setRecordSuccess(null);
    }
  }, [isOpen, initialKid, allKidsList]);

  const handleSelectKid = (kid: string) => {
    setSelectedKid(kid);
    const p = getKidRewardProfile(kid);
    setProfile(p);
    setCustomAmount(p.targetGoalAmount || 15);
    setRecordSuccess(null);
  };

  const handleCopyHandle = (key: string, val: string) => {
    if (!val) return;
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRecordLedgerPayout = (platformName: string) => {
    const ledger = getStoredAllowanceLedger();
    if (ledger.length === 0) {
      alert("No active allowance ledger record found. Complete a Sunday Inspection first!");
      return;
    }
    const latestRecord = ledger[0];
    updateKidPayoutPayment(latestRecord.id, selectedKid, true, "Other"); // Recorded as gift card
    setRecordSuccess(`Recorded $${customAmount} ${platformName} payout in ledger!`);
    onPayoutRecorded?.(selectedKid, customAmount, platformName);
    setTimeout(() => setRecordSuccess(null), 3500);
  };

  if (!isOpen) return null;

  const linkedPlatforms = REWARD_PLATFORMS.filter(
    (p) => Boolean(profile.platforms?.[p.id]?.trim())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
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
                Send digital gift cards & top-ups to Sydney, Cadence & Mason
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

        {/* Kid Selector Tabs */}
        <div className="px-4 pt-3 pb-2 bg-slate-900/90 border-b border-slate-800 flex items-center gap-2 shrink-0">
          {allKidsList.map((kid) => {
            const isSelected = kid === selectedKid;
            const kProfile = getKidRewardProfile(kid);
            const hasAccounts = Object.keys(kProfile.platforms || {}).length > 0;

            return (
              <button
                key={kid}
                type="button"
                onClick={() => handleSelectKid(kid)}
                className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/80"
                }`}
              >
                <span>{kid}</span>
                {hasAccounts && (
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-slate-950" : "bg-emerald-400"}`} />
                )}
              </button>
            );
          })}
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

            <div className="flex items-center gap-2 pt-1">
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

          {/* Linked Platforms List */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-indigo-400" />
                <span>Connected Accounts & 1-Click Cards</span>
              </h3>
              <span className="text-[10px] text-slate-400 font-medium">
                {linkedPlatforms.length} active
              </span>
            </div>

            {linkedPlatforms.length === 0 ? (
              <div className="p-6 bg-slate-800/40 border border-dashed border-slate-700 rounded-2xl text-center space-y-2">
                <span className="text-3xl">🎮</span>
                <p className="text-slate-300 font-bold text-xs">
                  {selectedKid} hasn&apos;t linked any gaming or shopping tags yet.
                </p>
                <p className="text-slate-500 text-[11px]">
                  They can add their Roblox, Switch, or Amazon tags from their Minion Dashboard.
                </p>
              </div>
            ) : (
              linkedPlatforms.map((platform) => {
                const handle = profile.platforms[platform.id];
                const isCopied = copiedKey === platform.id;
                const buyUrl = platform.giftCardUrl(handle);

                return (
                  <div
                    key={platform.id}
                    className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5 hover:border-slate-600 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{platform.iconEmoji}</span>
                        <div>
                          <div className="font-black text-xs text-white">
                            {platform.name}
                          </div>
                          <div className="font-mono text-amber-300 text-[11px] font-semibold flex items-center gap-1.5 mt-0.5">
                            <span>{handle}</span>
                          </div>
                        </div>
                      </div>

                      {/* 1-Click Copy Tag */}
                      <button
                        type="button"
                        onClick={() => handleCopyHandle(platform.id, handle)}
                        className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1 cursor-pointer ${
                          isCopied
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                        }`}
                        title="Copy handle"
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
                    </div>

                    {/* Action Row: Buy Digital Gift Card + Record in Ledger */}
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl font-bold text-[11px] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white flex items-center justify-center gap-1.5 shadow-md transition"
                      >
                        <span>{platform.giftCardLabel}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleRecordLedgerPayout(platform.name)}
                        className="py-2 px-3 rounded-xl font-bold text-[11px] bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 shadow-md transition cursor-pointer"
                        title="Mark this amount as paid via digital gift card in the Ledger"
                      >
                        <CreditCard className="w-3 h-3" />
                        <span>Record Paid (${customAmount})</span>
                      </button>
                    </div>
                  </div>
                );
              })
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
