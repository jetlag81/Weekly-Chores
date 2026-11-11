// Parent Invite Modal for Pairing & Managing Kid Devices

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  Users,
  Trash2,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Link as LinkIcon
} from "lucide-react";
import {
  createKidInvite,
  getLocalInvites,
  unpairKid,
  resetAllDevicePairings,
  type HouseholdInvite
} from "./firebaseSync";
import { QRCodeDisplay } from "./QRCodeDisplay";

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
    m => m.active !== false &&
         m.type !== "casual" &&
         m.residency !== "Casual" &&
         m.role !== "Supreme Overlord" &&
         m.role !== "Overseer Supreme"
  );

  const [activeTab, setActiveTab] = useState<"invite" | "manage">("invite");
  const [selectedKidName, setSelectedKidName] = useState(() => kidMembers[0]?.name || "Sydney");
  const [createdInvite, setCreatedInvite] = useState<HouseholdInvite | null>(null);
  const [tunnelUrl, setTunnelUrl] = useState<string>("https://quantitative-ethernet-definition-nominations.trycloudflare.com");
  const [targetDevice, setTargetDevice] = useState<"tunnel" | "local" | "wifi">("tunnel");
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [loading, setLoading] = useState(false);
  const [invitesList, setInvitesList] = useState<HouseholdInvite[]>(() => getLocalInvites());
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    fetch("/__tunnel-url")
      .then(r => r.json())
      .then(d => {
        if (d?.url) {
          setTunnelUrl(d.url);
        }
      })
      .catch(() => {});
  }, []);

  const refreshInvites = () => {
    setInvitesList(getLocalInvites());
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const inv = await createKidInvite(selectedKidName, householdId);
      setCreatedInvite(inv);
      setCopied(false);
      setCopiedLink(false);
      refreshInvites();
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

  const getInviteUrl = (code: string) => {
    const kidQuery = createdInvite?.kidName ? `&kid=${encodeURIComponent(createdInvite.kidName)}` : "";
    if (targetDevice === "tunnel" && tunnelUrl) {
      const cleanTunnel = tunnelUrl.replace(/\/+$/, "");
      return `${cleanTunnel}/?join=${code}${kidQuery}`;
    }
    if (typeof window === "undefined") return `http://localhost:5173/?join=${code}${kidQuery}`;
    const host = targetDevice === "wifi"
      ? "192.168.0.8:5173"
      : (window.location.host || "localhost:5173");
    return `${window.location.protocol}//${host}/?join=${code}${kidQuery}`;
  };

  const handleCopyLink = () => {
    if (!createdInvite) return;
    const url = getInviteUrl(createdInvite.code);
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleUnpairKid = (kName: string) => {
    unpairKid(kName);
    refreshInvites();
    setNotice(`${kName} has been unpaired. You can now create a fresh invite code for ${kName}.`);
    setTimeout(() => setNotice(null), 3500);
  };

  const handleResetAll = () => {
    if (confirm("Reset ALL paired kid devices and invite codes? All kids will need a new invite code to reconnect.")) {
      resetAllDevicePairings();
      refreshInvites();
      setCreatedInvite(null);
      setNotice("All devices and invites have been reset to clean slate.");
      setTimeout(() => setNotice(null), 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
              <Smartphone className="w-5 h-5 text-indigo-100" />
            </div>
            <div>
              <h3 className="text-base font-extrabold leading-tight">Device Pairing &amp; Minions</h3>
              <p className="text-xs text-indigo-100">Pair iOS, Android, or PC &bull; Manage Minion Devices</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-black/15 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 shrink-0 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab("invite")}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === "invite"
                ? "border-indigo-600 text-indigo-700 bg-white shadow-2xs"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create Invite Code</span>
          </button>
          <button
            type="button"
            onClick={() => {
              refreshInvites();
              setActiveTab("manage");
            }}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === "manage"
                ? "border-indigo-600 text-indigo-700 bg-white shadow-2xs"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Paired Minions ({kidMembers.length})</span>
          </button>
        </div>

        {notice && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2 text-xs font-bold text-emerald-800 flex items-center gap-1.5 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        <div className="p-6 space-y-5 text-xs overflow-y-auto flex-1">
          {activeTab === "invite" ? (
            !createdInvite ? (
              <div className="space-y-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1.5 text-xs">
                    Select Family Member to Invite:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {kidMembers.map(m => {
                      const isSelected = selectedKidName === m.name;
                      const hasInvite = invitesList.find(i => i.kidName.toLowerCase() === m.name.toLowerCase());
                      return (
                        <button
                          key={m.id || m.name}
                          type="button"
                          onClick={() => setSelectedKidName(m.name)}
                          className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? "border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500 shadow-2xs font-extrabold text-indigo-950"
                              : "border-slate-200 hover:border-slate-300 text-slate-700 font-semibold"
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full shadow-2xs"
                            style={{ backgroundColor: m.color || "#6366F1" }}
                          />
                          <span className="truncate w-full">{m.name}</span>
                          {hasInvite && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-indigo-100 text-indigo-700">
                              {hasInvite.claimed ? "Paired" : hasInvite.code}
                            </span>
                          )}
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
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Ready for {createdInvite.kidName}
                  </span>
                  <p className="text-xs text-slate-600">
                    Scan the QR code with <strong>{createdInvite.kidName}&apos;s</strong> tablet or phone camera, or enter the code:
                  </p>
                </div>

                {/* Target Device Selector */}
                <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={() => setTargetDevice("tunnel")}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-1 ${
                      targetDevice === "tunnel"
                        ? "bg-emerald-600 text-white shadow-xs font-black"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>📱 Phone (Instant Scan)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetDevice("local")}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-1 ${
                      targetDevice === "local"
                        ? "bg-white text-indigo-700 shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>💻 PC Tab</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetDevice("wifi")}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg transition cursor-pointer flex items-center justify-center gap-1 ${
                      targetDevice === "wifi"
                        ? "bg-white text-indigo-700 shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>📶 Local IP</span>
                  </button>
                </div>

                {/* QR Code and Quick Connect Card */}
                <div className="p-4 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50 rounded-2xl border-2 border-indigo-200 text-center space-y-3 shadow-2xs">
                  {/* QR Code */}
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <QRCodeDisplay value={getInviteUrl(createdInvite.code)} size={160} />
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider flex items-center gap-1 mt-1">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>
                        {targetDevice === "tunnel"
                          ? "🌐 Instant Phone QR (Works Anywhere)"
                          : targetDevice === "local"
                          ? "💻 PC / Local QR Code"
                          : "📶 Local Wi-Fi QR Code"}
                      </span>
                    </span>
                  </div>

                  {/* 6-Character Code Display */}
                  <div className="pt-2 border-t border-indigo-100 space-y-1.5">
                    <div className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                      Or Enter Pairing Code:
                    </div>
                    <div className="font-mono text-3xl font-black text-indigo-950 tracking-widest select-all">
                      {createdInvite.code}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                    <a
                      href={getInviteUrl(createdInvite.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-2xs transition cursor-pointer no-underline"
                    >
                      <span>Open Minion Mode ↗</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-white text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-50 shadow-2xs transition cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied Code!" : "Copy Code"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-indigo-50 text-indigo-800 border border-indigo-300 rounded-lg hover:bg-indigo-100 shadow-2xs transition cursor-pointer"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <LinkIcon className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? "Copied Link!" : "Copy Direct Link"}</span>
                    </button>
                  </div>

                  <div className="text-[10px] text-slate-400 font-mono truncate px-2" title={getInviteUrl(createdInvite.code)}>
                    {getInviteUrl(createdInvite.code)}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 text-[11px] leading-relaxed text-left space-y-1">
                  <div><strong>📱 Phone / Tablet:</strong> Use <strong>📱 Phone (Instant Scan)</strong> — it connects immediately with HTTPS across cellular data or Wi-Fi with zero firewall blocks.</div>
                  <div><strong>💻 Testing on PC:</strong> Click <em>&quot;Open Minion Mode ↗&quot;</em> to open in another browser tab or Edge.</div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCreatedInvite(null)}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition text-xs cursor-pointer"
                  >
                    Invite Another Kid
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onKidPairedLocally(createdInvite.kidName);
                      onClose();
                    }}
                    className="py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl transition text-xs cursor-pointer shadow-xs"
                  >
                    Preview Minion Mode
                  </button>
                </div>
              </div>
            )
          ) : (
            /* Manage Paired Minions Tab */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Kid Device Pairing Status</h4>
                  <p className="text-[11px] text-slate-500">Unpair any child to revoke their active device token or invite code.</p>
                </div>
                <button
                  type="button"
                  onClick={refreshInvites}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  title="Refresh status"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {kidMembers.map(m => {
                  const inv = invitesList.find(i => i.kidName.toLowerCase() === m.name.toLowerCase());
                  const isPaired = inv?.claimed;
                  const isPending = inv && !inv.claimed;

                  return (
                    <div
                      key={m.id || m.name}
                      className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-white text-[11px] shrink-0"
                          style={{ backgroundColor: m.color || "#6366F1" }}
                        >
                          {m.name.slice(0, 1)}
                        </span>
                        <div className="min-w-0">
                          <div className="font-extrabold text-slate-900 text-xs truncate">{m.name}</div>
                          <div className="flex items-center gap-1.5 text-[10px]">
                            {isPaired ? (
                              <span className="text-emerald-700 font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Paired &bull; Active Device
                              </span>
                            ) : isPending ? (
                              <span className="text-amber-700 font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                Invite Code: <code className="bg-amber-100 px-1 rounded">{inv.code}</code> (Pending)
                              </span>
                            ) : (
                              <span className="text-slate-400 font-medium">Not Paired</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1.5">
                        {inv ? (
                          <button
                            type="button"
                            onClick={() => handleUnpairKid(m.name)}
                            className="px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg font-bold text-[11px] transition flex items-center gap-1 cursor-pointer"
                            title={`Unpair ${m.name} and clear invite`}
                          >
                            <Trash2 className="w-3 h-3 text-rose-600" />
                            <span>Unpair {m.name}</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedKidName(m.name);
                              setCreatedInvite(null);
                              setActiveTab("invite");
                            }}
                            className="px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg font-bold text-[11px] transition flex items-center gap-1 cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-indigo-600" />
                            <span>Create Invite</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="w-full py-2 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 font-bold rounded-xl transition text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset All Paired Devices &amp; Invites (Start Clean)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
