// Kid Device Pairing & Welcome Screen

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Shield, Smartphone, AlertCircle, HeartHandshake, QrCode } from "lucide-react";
import { redeemKidInvite, saveDeviceSession, getStoredDeviceSession, type DeviceSession } from "./firebaseSync";

interface KidPairingScreenProps {
  onPairedSuccess: (session: DeviceSession) => void;
  onContinueAsParent: (parentName?: "Thom" | "Meghan") => void;
}

export const KidPairingScreen: React.FC<KidPairingScreenProps> = ({
  onPairedSuccess,
  onContinueAsParent
}) => {
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("join") || params.get("code") || params.get("invite");
    if (code) {
      const cleanCode = code.toUpperCase().trim();
      setInviteCode(cleanCode);
      const currentSession = getStoredDeviceSession();
      setLoading(true);
      redeemKidInvite(cleanCode, currentSession.deviceId).then(res => {
        if (res.success && res.invite) {
          const newSession: DeviceSession = {
            role: "kid",
            householdId: res.invite.householdId,
            kidName: res.invite.kidName,
            deviceId: currentSession.deviceId,
            parentPin: "1234"
          };
          saveDeviceSession(newSession);
          try {
            sessionStorage.setItem("household_just_paired_kid", newSession.kidName || "");
          } catch {}
          onPairedSuccess(newSession);
        } else {
          setError(res.error || "Invite code expired or invalid. Please check with your parent.");
        }
      }).finally(() => {
        setLoading(false);
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteCode.trim()) {
      setError("Please enter the 6-character code provided by your parent.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const currentSession = getStoredDeviceSession();
      const res = await redeemKidInvite(inviteCode, currentSession.deviceId);
      if (!res.success || !res.invite) {
        setError(res.error || "Invalid invite code. Ask your parent to generate a fresh code.");
        return;
      }

      const newSession: DeviceSession = {
        role: "kid",
        householdId: res.invite.householdId,
        kidName: res.invite.kidName,
        deviceId: currentSession.deviceId,
        parentPin: "1234"
      };

      saveDeviceSession(newSession);
      try {
        sessionStorage.setItem("household_just_paired_kid", newSession.kidName || "");
      } catch {}
      onPairedSuccess(newSession);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 flex items-center justify-center p-4 text-white font-sans">
      <div className="max-w-md w-full bg-white text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-md">
            <Sparkles className="w-7 h-7 text-amber-200" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Household Chores Hub
          </h1>
          <p className="text-xs text-slate-500">
            Cross-platform multi-user family chore & incentive tracker
          </p>
        </div>

        {/* Kid Invite Code Entry Form */}
        <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-indigo-950 font-extrabold text-xs">
            <Smartphone className="w-4 h-4 text-indigo-600" />
            <span>Join With Kid Invite Code</span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Enter the 6-character code shown on your parent's phone or computer (e.g. <strong>HERD-82</strong>):
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={inviteCode}
              onChange={e => {
                setInviteCode(e.target.value.toUpperCase());
                setError("");
              }}
              placeholder="e.g. HERD-84"
              className="w-full text-center text-2xl font-mono font-black tracking-widest py-3 px-4 bg-white border border-indigo-300 rounded-xl uppercase placeholder:normal-case placeholder:tracking-normal placeholder:font-normal placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            {error && (
              <div className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold p-2 bg-rose-50 rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs cursor-pointer"
            >
              <span>{loading ? "Connecting to Household..." : "Start My Chores (Kid Mode)"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full" />
          <span className="bg-white px-3 text-[10px] uppercase font-bold text-slate-400 shrink-0">
            Or
          </span>
        </div>

        {/* Parent Command Pages Direct Access */}
        <div className="space-y-2 pt-1 text-center">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Parent Command Pages
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onContinueAsParent("Thom")}
              className="py-2.5 px-3 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 font-extrabold rounded-xl text-xs transition flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-1 font-black text-xs">
                <span>👑</span>
                <span>Thom's Page</span>
              </div>
              <span className="text-[10px] text-amber-800 font-medium">Parent</span>
            </button>
            <button
              type="button"
              onClick={() => onContinueAsParent("Meghan")}
              className="py-2.5 px-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-950 font-extrabold rounded-xl text-xs transition flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-1 font-black text-xs">
                <span>👑</span>
                <span>Meghan's Page</span>
              </div>
              <span className="text-[10px] text-purple-800 font-medium">Parent</span>
            </button>
          </div>
          <p className="text-[10px] text-slate-400">
            Default parent PIN is <strong>1234</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

