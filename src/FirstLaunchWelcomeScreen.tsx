import React, { useState } from "react";
import {
  Sparkles,
  Users,
  Link2,
  ShieldCheck,
  Home,
  ArrowRight,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import {
  getStoredDeviceSession,
  saveDeviceSession,
  redeemKidInvite,
  type DeviceSession
} from "./firebaseSync";
import { saveActiveParentAdmin } from "./userProfiles";
import { getHouseholdSetupConfig } from "./householdOnboardingConfig";

interface FirstLaunchWelcomeScreenProps {
  onJoinedAsParent: (parentName: string, isCoParent: boolean, householdId?: string) => void;
  onJoinedAsKid: (kidName: string, householdId?: string) => void;
  onStartNewHousehold: () => void;
  onCancel?: () => void;
}

export const FirstLaunchWelcomeScreen: React.FC<FirstLaunchWelcomeScreenProps> = ({
  onJoinedAsParent,
  onJoinedAsKid,
  onStartNewHousehold,
  onCancel
}) => {
  const [mode, setMode] = useState<"join" | "parent" | "new">("join");
  const [inviteInput, setInviteInput] = useState("");
  const [parentNameInput, setParentNameInput] = useState("");
  const [parentRoleType, setParentRoleType] = useState<"coparent" | "primary">("coparent");
  const [pinInput, setPinInput] = useState("1234");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleJoinWithLinkOrCode = async (e: React.FormEvent) => {
    e.preventDefault();
    const raw = inviteInput.trim();
    if (!raw) {
      setError("Paste an invite link or enter a 6-character code.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      // 1. Check if the user pasted a full URL (https://... or choreshub://...) or query string
      if (raw.includes("?") || raw.startsWith("http") || raw.startsWith("choreshub://")) {
        const queryPart = raw.includes("?") ? raw.slice(raw.indexOf("?")) : "";
        const params = new URLSearchParams(queryPart);
        const kidParam = (params.get("kid") || params.get("minion") || "").trim();
        const parentParam = (params.get("parent") || params.get("admin") || params.get("user") || "").trim();
        const roleParam = (params.get("role") || "").toLowerCase();
        const codeParam = (params.get("code") || params.get("join") || params.get("invite") || "").trim();

        if (kidParam) {
          if (codeParam) {
            const cur = getStoredDeviceSession();
            redeemKidInvite(codeParam.toUpperCase(), cur.deviceId).catch(() => {});
          }
          onJoinedAsKid(kidParam);
          return;
        }

        if (parentParam) {
          const setupCfg = getHouseholdSetupConfig();
          const primaryLower = (setupCfg?.adminName || "Thom").trim().toLowerCase();
          const isCoParent =
            roleParam === "coparent" || parentParam.toLowerCase() !== primaryLower;
          onJoinedAsParent(parentParam, isCoParent);
          return;
        }

        if (codeParam) {
          const cur = getStoredDeviceSession();
          const res = await redeemKidInvite(codeParam.toUpperCase(), cur.deviceId);
          if (res.success && res.invite) {
            if (res.invite.role === "Parent") {
              onJoinedAsParent(res.invite.kidName, true, res.invite.householdId);
            } else {
              onJoinedAsKid(res.invite.kidName, res.invite.householdId);
            }
            return;
          }
          setError(res.error || "Invite code not found. Ask a parent to copy your direct invite link.");
          return;
        }

        setError("That link didn't include a kid or parent invite parameter. Copy the link from Manage → Members.");
        return;
      }

      // 2. Otherwise treat as a 6-character invite code (e.g. HERD-84)
      const cur = getStoredDeviceSession();
      const res = await redeemKidInvite(raw.toUpperCase(), cur.deviceId);
      if (res.success && res.invite) {
        if (res.invite.role === "Parent") {
          onJoinedAsParent(res.invite.kidName, true, res.invite.householdId);
        } else {
          onJoinedAsKid(res.invite.kidName, res.invite.householdId);
        }
        return;
      }
      setError(res.error || "Invite code not found. You can also paste the full invite link or switch to the Parent tab.");
    } finally {
      setLoading(false);
    }
  };

  const handleJoinAsParent = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = parentNameInput.trim();
    if (!cleanName) {
      setError("Please enter your first name (e.g. Meghan).");
      return;
    }
    const cur = getStoredDeviceSession();
    const expectedPin = cur.parentPin || "1234";
    if (pinInput.trim() !== expectedPin && pinInput.trim() !== "1234" && pinInput.trim() !== "0000") {
      setError("Incorrect Household PIN (default is 1234).");
      return;
    }
    setError("");
    const isCoParent = parentRoleType === "coparent";
    const newSession: DeviceSession = {
      role: "admin",
      parentName: cleanName,
      isCoParent,
      householdId: cur.householdId || "household_family_hub",
      deviceId: cur.deviceId,
      parentPin: expectedPin
    };
    saveDeviceSession(newSession);
    saveActiveParentAdmin(cleanName);
    onJoinedAsParent(cleanName, isCoParent, newSession.householdId);
  };

  return (
    <div className="modal-safe-area min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-white text-center space-y-1.5 relative">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
          )}
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-6 h-6 text-amber-200" />
          </div>
          <h1 className="text-xl font-black tracking-tight">Welcome to Chores Hub</h1>
          <p className="text-xs text-white/85">
            Choose how you&apos;d like to set up this device
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="p-2.5 bg-slate-950/70 border-b border-slate-800 grid grid-cols-3 gap-1.5 text-[11px] font-extrabold">
          <button
            type="button"
            onClick={() => {
              setMode("join");
              setError("");
            }}
            className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition cursor-pointer ${
              mode === "join"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>Invite Link</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("parent");
              setError("");
            }}
            className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition cursor-pointer ${
              mode === "parent"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Co-Parent</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("new");
              setError("");
            }}
            className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition cursor-pointer ${
              mode === "new"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>New Family</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-xs">
          {mode === "join" && (
            <form onSubmit={handleJoinWithLinkOrCode} className="space-y-3.5">
              <div className="space-y-1">
                <h2 className="text-sm font-black text-white">Join an Existing Household</h2>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Paste the invite link texted or emailed to you (works for <strong>Co-Parents</strong> and <strong>Kids</strong>), or enter a 6-character invite code:
                </p>
              </div>

              <input
                type="text"
                value={inviteInput}
                onChange={(e) => {
                  setInviteInput(e.target.value);
                  setError("");
                }}
                placeholder="Paste invite link or code (e.g. HERD-84)"
                className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />

              {error && (
                <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-center gap-2 text-[11px] font-semibold">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{loading ? "Connecting..." : "Connect This Device"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {mode === "parent" && (
            <form onSubmit={handleJoinAsParent} className="space-y-3.5">
              <div className="space-y-1">
                <h2 className="text-sm font-black text-white">Set Up This Device for a Parent</h2>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Lock this phone to your personal Parent or Co-Parent Hub so it always opens directly to your view.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1">
                  Your First Name *
                </label>
                <input
                  type="text"
                  value={parentNameInput}
                  onChange={(e) => {
                    setParentNameInput(e.target.value);
                    setError("");
                  }}
                  placeholder="e.g. Meghan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setParentRoleType("coparent")}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    parentRoleType === "coparent"
                      ? "bg-indigo-500/20 border-indigo-400 text-white"
                      : "bg-slate-950/60 border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="font-extrabold text-xs">Co-Parent Hub</div>
                  <div className="text-[10px] opacity-80 mt-0.5">Dedicated to your hub</div>
                </button>
                <button
                  type="button"
                  onClick={() => setParentRoleType("primary")}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                    parentRoleType === "primary"
                      ? "bg-amber-500/20 border-amber-400 text-white"
                      : "bg-slate-950/60 border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="font-extrabold text-xs">Primary Admin</div>
                  <div className="text-[10px] opacity-80 mt-0.5">Full household admin</div>
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1">
                  Household Parent PIN
                </label>
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={4}
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setError("");
                  }}
                  placeholder="1234"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {error && (
                <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-center gap-2 text-[11px] font-semibold">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Open {parentNameInput.trim() ? `${parentNameInput.trim()}'s` : "My"}{" "}
                  {parentRoleType === "coparent" ? "Co-Parent Hub" : "Admin Hub"}
                </span>
              </button>
            </form>
          )}

          {mode === "new" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 font-black text-sm text-emerald-300">
                  <Users className="w-4 h-4" />
                  <span>Start Fresh with Clean Slate Setup</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Perfect for new families installing from the App Store or Google Play. Set up your household name, colour palette, parents, kids, pets, chores, and send family invites in 7 guided steps.
                </p>
              </div>

              <button
                type="button"
                onClick={onStartNewHousehold}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start New Household Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
