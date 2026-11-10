// Parent Invite Modal for Pairing Kid Devices

import React, { useState } from "react";
import { X, Sparkles, Copy, Check, QrCode, Smartphone, UserCheck, ShieldCheck } from "lucide-react";
import { createKidInvite, type HouseholdInvite } from "./firebaseSync";

interface InviteModalProps {
  householdId: string;
  familyMembers: any[];
  onClose: () => void;
  onKidPairedLocally: (kidName: string) => void;
}

export const InviteModal: React.FC<InviteModalProps> = ({
  householdId,
  familyMembers,
  onClose,
  onKidPairedLocally
}) => {
  const kidMembers = familyMembers.filter(
    m => m.active !== false && m.role !== "Supreme Overlord" && m.role !== "Overseer Supreme"
  );

  const [selectedKidName, setSelectedKidName] = useState(() => kidMembers[0]?.name || "Sydney");
  const [createdInvite, setCreatedInvite] = useState<HouseholdInvite | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const inv = await createKidInvite(selectedKidName, householdId);
      setCreatedInvite(inv);
      setCopied(false);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (!createdInvite) return;
    navigator.clipboard.writeText(createdInvite.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
              <Smartphone className="w-5 h-5 text-indigo-100" />
            </div>
            <div>
              <h3 className="text-base font-extrabold leading-tight">Invite Kid to App</h3>
              <p className="text-xs text-indigo-100">Pair iOS, Android, or PC device</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-black/15 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs">
          {!createdInvite ? (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1.5 text-xs">
                  Select Family Member to Invite:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {kidMembers.map(m => {
                    const isSelected = selectedKidName === m.name;
                    return (
                      <button
                        key={m.id || m.name}
                        type="button"
                        onClick={() => setSelectedKidName(m.name)}
                        className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center gap-1.5 ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500 shadow-2xs font-extrabold text-indigo-950"
                            : "border-slate-200 hover:border-slate-300 text-slate-700 font-semibold"
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full shadow-2xs"
                          style={{ backgroundColor: m.color || "#6366F1" }}
                        />
                        <span>{m.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 space-y-1 text-[11px] leading-relaxed">
                <div className="font-bold text-slate-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Kid-Safe Device Pairing</span>
                </div>
                <p>
                  No email or password needed for kids! Generates a unique 6-character code that securely pairs their device directly into <strong>Minion Mode</strong>.
                </p>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-200" />
                <span>{loading ? "Generating Code..." : `Create Device Invite for ${selectedKidName}`}</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Ready for {createdInvite.kidName}
                </span>
                <p className="text-xs text-slate-500">
                  Have <strong>{createdInvite.kidName}</strong> open the app on their phone or tablet and enter:
                </p>
              </div>

              {/* 6-Character Code Display */}
              <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200 text-center space-y-2">
                <div className="text-[10px] uppercase tracking-wider font-extrabold text-indigo-900">
                  Household Invite Code
                </div>
                <div className="font-mono text-3xl font-black text-indigo-950 tracking-widest select-all">
                  {createdInvite.code}
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-white text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-50 shadow-2xs transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 text-[11px] leading-relaxed text-left space-y-1">
                <div><strong>Step 1:</strong> Download / open the app on {createdInvite.kidName}'s device.</div>
                <div><strong>Step 2:</strong> Tap <em>"I Have an Invite Code"</em>.</div>
                <div><strong>Step 3:</strong> Enter <strong>{createdInvite.code}</strong>. They will immediately land in their personalized Minion Mode!</div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCreatedInvite(null)}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition text-xs"
                >
                  Invite Another Kid
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // Also allow instant switch on current device to test kid mode
                    onKidPairedLocally(createdInvite.kidName);
                    onClose();
                  }}
                  className="py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl transition text-xs"
                >
                  Test Kid Mode Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

