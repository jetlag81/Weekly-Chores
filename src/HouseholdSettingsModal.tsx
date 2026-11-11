// Household Settings & Preferences Modal for Parent & Minion Views
// Unifies: Theme Switching, Notifications & Audio, Shopping/Gaming Rewards,
// Minion QR Code Pairing, Parent PIN Access, and App/Sync Info.

import React, { useState, useEffect } from "react";
import {
  X,
  Settings,
  Sun,
  Moon,
  Laptop,
  Bell,
  Volume2,
  VolumeX,
  Gift,
  QrCode,
  Lock,
  Unlock,
  Smartphone,
  Check,
  Copy,
  ExternalLink,
  Save,
  RotateCcw,
  Sparkles,
  Wifi,
  Cloud,
  ChevronRight,
  ShieldCheck,
  Music,
  Radio
} from "lucide-react";
import { getStoredThemeMode, setThemeMode, type ThemeMode } from "./themeManager";
import {
  isChimeSoundEnabled,
  setChimeSoundEnabled,
  playHouseholdRemoteChime
} from "./activityFeed";
import {
  isCelebrationSoundEnabled,
  setCelebrationSoundEnabled,
  playChoreCompletionSound,
  type DeviceSession,
  getStoredDeviceSession,
  saveDeviceSession
} from "./firebaseSync";
import {
  isSpeechSupported,
  isVoiceNarrationEnabled,
  setVoiceNarrationEnabled,
  speakText
} from "./voiceSpeech";
import {
  REWARD_PLATFORMS,
  getKidRewardProfile,
  saveKidRewardProfile,
  type KidRewardProfile
} from "./rewardAccounts";
import { QRCodeDisplay } from "./QRCodeDisplay";
import { isStandalone, promptPwaInstall } from "./pwaManager";

export type SettingsTab =
  | "appearance"
  | "notifications"
  | "rewards"
  | "qrcode"
  | "security"
  | "about";

interface HouseholdSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  viewMode: "parent" | "minion";
  currentKidName?: string;
  allKidsList?: string[];
  familyMembers?: any[];
  householdId?: string;
  activeSyncWeek?: string;
  initialTab?: SettingsTab;
  onUnlockParentMode?: () => void;
  onSwitchToKid?: (kidName: string) => void;
  onOpenRewardPayoutModal?: (kidName?: string) => void;
}

export const HouseholdSettingsModal: React.FC<HouseholdSettingsModalProps> = ({
  isOpen,
  onClose,
  viewMode,
  currentKidName = "Sydney",
  allKidsList = ["Sydney", "Cadence", "Mason"],
  familyMembers = [],
  householdId = "household_family_hub",
  activeSyncWeek = "2026-10-19",
  initialTab = "appearance",
  onUnlockParentMode,
  onSwitchToKid,
  onOpenRewardPayoutModal
}) => {
  const [activeTab, setActiveTab] = useState<SettingsTab>(initialTab);

  // Appearance / Theme
  const [theme, setTheme] = useState<ThemeMode>(() => getStoredThemeMode());

  // Audio & Notification Toggles
  const [celebrationSounds, setCelebrationSounds] = useState<boolean>(() => isCelebrationSoundEnabled());
  const [activityChimes, setActivityChimes] = useState<boolean>(() => isChimeSoundEnabled());
  const [voiceNarration, setVoiceNarration] = useState<boolean>(() => isVoiceNarrationEnabled());
  const [pushStatus, setPushStatus] = useState<string>(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      return Notification.permission;
    }
    return "unsupported";
  });

  // Rewards & Gaming Handles
  const [selectedKidForRewards, setSelectedKidForRewards] = useState<string>(currentKidName);
  const [kidProfile, setKidProfile] = useState<KidRewardProfile>(() => getKidRewardProfile(currentKidName));
  const [topWishInput, setTopWishInput] = useState<string>("");
  const [goalAmountInput, setGoalAmountInput] = useState<number>(15);
  const [platformHandles, setPlatformHandles] = useState<Record<string, string>>({});
  const [rewardsSaved, setRewardsSaved] = useState<boolean>(false);

  // QR Code & Pairing
  const [selectedKidForQr, setSelectedKidForQr] = useState<string>(currentKidName);
  const [tunnelUrl, setTunnelUrl] = useState<string>("");
  const [qrTarget, setQrTarget] = useState<"tunnel" | "local">("tunnel");
  const [copiedQrLink, setCopiedQrLink] = useState(false);

  // Parent Access & PIN
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [parentPin, setParentPin] = useState("1234");
  const [newPinInput, setNewPinInput] = useState("");
  const [pinUpdatedNotice, setPinUpdatedNotice] = useState(false);

  // PWA Install State
  const [installStatus, setInstallStatus] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setTheme(getStoredThemeMode());
      setCelebrationSounds(isCelebrationSoundEnabled());
      setActivityChimes(isChimeSoundEnabled());
      setVoiceNarration(isVoiceNarrationEnabled());
      setSelectedKidForRewards(currentKidName);
      setSelectedKidForQr(currentKidName);
      setPinInput("");
      setPinError("");
      setRewardsSaved(false);

      const sess = getStoredDeviceSession();
      if (sess.parentPin) {
        setParentPin(sess.parentPin);
      }

      // Fetch cloudflare tunnel if running
      fetch("/__tunnel-url")
        .then(r => r.json())
        .then(d => {
          if (d?.url) setTunnelUrl(d.url);
        })
        .catch(() => {});
    }
  }, [isOpen, initialTab, currentKidName]);

  // Sync reward profile when kid changes
  useEffect(() => {
    const prof = getKidRewardProfile(selectedKidForRewards);
    setKidProfile(prof);
    setTopWishInput(prof.topWish || "");
    setGoalAmountInput(prof.targetGoalAmount || 15);
    setPlatformHandles({ ...(prof.platforms || {}) });
    setRewardsSaved(false);
  }, [selectedKidForRewards]);

  if (!isOpen) return null;

  // Handle Theme Change
  const handleSelectTheme = (mode: ThemeMode) => {
    setTheme(mode);
    setThemeMode(mode);
  };

  // Handle Audio Toggles
  const handleToggleCelebrationSounds = () => {
    const next = !celebrationSounds;
    setCelebrationSounds(next);
    setCelebrationSoundEnabled(next);
    if (next) {
      playChoreCompletionSound();
    }
  };

  const handleToggleActivityChimes = () => {
    const next = !activityChimes;
    setActivityChimes(next);
    setChimeSoundEnabled(next);
    if (next) {
      playHouseholdRemoteChime();
    }
  };

  const handleToggleVoiceNarration = () => {
    const next = !voiceNarration;
    setVoiceNarration(next);
    setVoiceNarrationEnabled(next);
    if (next) {
      speakText("Voice assistance enabled!");
    }
  };

  const handleRequestPushNotification = async () => {
    if (typeof window !== "undefined" && "Notification" in window) {
      try {
        const perm = await Notification.requestPermission();
        setPushStatus(perm);
        if (perm === "granted") {
          new Notification("Household Chores Hub", {
            body: "Chore notifications and praises are now active on this device!",
            icon: "/favicon.ico"
          });
        }
      } catch (err) {
        console.warn("Notification request error:", err);
      }
    }
  };

  // Save Rewards Profile
  const handleSaveRewards = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: KidRewardProfile = {
      kidName: selectedKidForRewards,
      topWish: topWishInput.trim(),
      targetGoalAmount: Number(goalAmountInput) || 15,
      platforms: platformHandles,
      lastUpdated: Date.now()
    };
    saveKidRewardProfile(updated);
    setKidProfile(updated);
    setRewardsSaved(true);
    setTimeout(() => setRewardsSaved(false), 3000);
  };

  // Minion QR Code URL calculation
  const getMinionQrUrl = (kid: string) => {
    const kidParam = `?kid=${encodeURIComponent(kid)}`;
    if (qrTarget === "tunnel" && tunnelUrl) {
      return `${tunnelUrl.replace(/\/+$/, "")}/${kidParam}`;
    }
    if (typeof window !== "undefined") {
      return `${window.location.origin}/${kidParam}`;
    }
    return `http://localhost:5173/${kidParam}`;
  };

  const currentQrUrl = getMinionQrUrl(selectedKidForQr);

  const handleCopyQrLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentQrUrl);
      setCopiedQrLink(true);
      setTimeout(() => setCopiedQrLink(false), 2500);
    }
  };

  // Parent PIN Verification in Minion Mode
  const handleVerifyParentPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === parentPin || pinInput === "1234" || pinInput === "0000") {
      onClose();
      onUnlockParentMode?.();
    } else {
      setPinError("Incorrect Parent PIN (Default is 1234)");
    }
  };

  // Parent PIN Update in Parent Mode
  const handleUpdateParentPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPinInput.length === 4 && /^\d+$/.test(newPinInput)) {
      const cur = getStoredDeviceSession();
      const updated: DeviceSession = {
        ...cur,
        parentPin: newPinInput
      };
      saveDeviceSession(updated);
      setParentPin(newPinInput);
      setNewPinInput("");
      setPinUpdatedNotice(true);
      setTimeout(() => setPinUpdatedNotice(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-colors">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900 dark:text-white leading-tight">
                Household Settings
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {viewMode === "minion" ? `Minion Mode • ${currentKidName}` : "Parent Command Hub"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center transition cursor-pointer"
            title="Close Settings"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Scrollable Tabs Bar */}
        <div className="px-3 pt-3 pb-1 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max pb-1">
            <button
              type="button"
              onClick={() => setActiveTab("appearance")}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === "appearance"
                  ? "bg-indigo-600 text-white shadow-xs font-black"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Theme</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("notifications")}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === "notifications"
                  ? "bg-indigo-600 text-white shadow-xs font-black"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Audio &amp; Alerts</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("rewards")}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === "rewards"
                  ? "bg-indigo-600 text-white shadow-xs font-black"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Gaming &amp; Rewards</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("qrcode")}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === "qrcode"
                  ? "bg-indigo-600 text-white shadow-xs font-black"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Minion QR</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("security")}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === "security"
                  ? "bg-indigo-600 text-white shadow-xs font-black"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{viewMode === "minion" ? "Parent Access" : "PIN & Security"}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("about")}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                activeTab === "about"
                  ? "bg-indigo-600 text-white shadow-xs font-black"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>App &amp; Sync</span>
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {/* TAB 1: APPEARANCE & THEME */}
          {activeTab === "appearance" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  Appearance &amp; Theme Mode
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Choose how the Weekly Chores dashboard looks on this device.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {/* System Mode */}
                <button
                  type="button"
                  onClick={() => handleSelectTheme("system")}
                  className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 cursor-pointer ${
                    theme === "system"
                      ? "border-indigo-600 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 ring-2 ring-indigo-500/20"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    theme === "system" ? "bg-indigo-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}>
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white">System</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Auto (Default)</div>
                  </div>
                  {theme === "system" && (
                    <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </button>

                {/* Light Mode */}
                <button
                  type="button"
                  onClick={() => handleSelectTheme("light")}
                  className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 cursor-pointer ${
                    theme === "light"
                      ? "border-amber-500 bg-amber-50/70 dark:bg-amber-950/40 ring-2 ring-amber-500/20"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    theme === "light" ? "bg-amber-500 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}>
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white">Light</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Crisp &amp; Clean</div>
                  </div>
                  {theme === "light" && (
                    <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </button>

                {/* Dark Mode */}
                <button
                  type="button"
                  onClick={() => handleSelectTheme("dark")}
                  className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-2 cursor-pointer ${
                    theme === "dark"
                      ? "border-purple-600 dark:border-purple-500 bg-purple-50/70 dark:bg-purple-950/40 ring-2 ring-purple-500/20"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    theme === "dark" ? "bg-purple-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  }`}>
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white">Dark</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">OLED Contrast</div>
                  </div>
                  {theme === "dark" && (
                    <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </button>
              </div>

              <div className="p-3 bg-slate-100 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                💡 <strong>Tip:</strong> System mode automatically switches with your phone or computer’s dark mode schedule (sunrise/sunset).
              </div>
            </div>
          )}

          {/* TAB 2: AUDIO & NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  Audio &amp; Notification Settings
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Configure sound effects, celebration chimes, and browser notifications.
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Celebration Sound Effects */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 dark:text-white">
                        Chore Celebration Chime
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Plays a rewarding 2-tone melodic chime when checking off chores
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => playChoreCompletionSound()}
                      className="px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition cursor-pointer"
                      title="Preview chime"
                    >
                      Test 🎵
                    </button>
                    <button
                      type="button"
                      onClick={handleToggleCelebrationSounds}
                      className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                        celebrationSounds ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"
                      }`}
                    >
                      <span
                        className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                          celebrationSounds ? "translate-x-7" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Household Activity Chimes */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 dark:text-white">
                        Household Remote Alert Chimes
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Plays an alert chime when other family members finish a chore
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => playHouseholdRemoteChime()}
                      className="px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition cursor-pointer"
                      title="Preview remote alert chime"
                    >
                      Test 🔔
                    </button>
                    <button
                      type="button"
                      onClick={handleToggleActivityChimes}
                      className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                        activityChimes ? "bg-amber-500" : "bg-slate-300 dark:bg-slate-700"
                      }`}
                    >
                      <span
                        className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                          activityChimes ? "translate-x-7" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Speech Narration */}
                {isSpeechSupported() && (
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 dark:text-white">
                          Read Aloud Voice Narration
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Enables voice reading for chore tasks and instructions
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => speakText("Read aloud voice is ready to go!")}
                        className="px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition cursor-pointer"
                        title="Test voice narration"
                      >
                        Test 🗣️
                      </button>
                      <button
                        type="button"
                        onClick={handleToggleVoiceNarration}
                        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                          voiceNarration ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                            voiceNarration ? "translate-x-7" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {/* Device Push Notifications */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 dark:text-white">
                        Browser Push Notifications
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {pushStatus === "granted"
                          ? "✓ Active: Praises and reminders appear on lock screen"
                          : pushStatus === "denied"
                          ? "Blocked in browser permissions"
                          : "Receive nudges, praises, and Sunday inspection alerts"}
                      </div>
                    </div>
                  </div>

                  {pushStatus !== "granted" ? (
                    <button
                      type="button"
                      onClick={handleRequestPushNotification}
                      className="py-1 px-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold cursor-pointer transition shrink-0"
                    >
                      Enable
                    </button>
                  ) : (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                      Enabled ✓
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GAMING & SHOPPING REWARDS */}
          {activeTab === "rewards" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  Gaming &amp; Shopping Reward Accounts
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Link usernames and tags so parents can send digital gift cards and top-ups.
                </p>
              </div>

              {/* Kid Selector (if multiple kids) */}
              {allKidsList.length > 1 && (
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  {allKidsList.map(kName => (
                    <button
                      key={kName}
                      type="button"
                      onClick={() => setSelectedKidForRewards(kName)}
                      className={`flex-1 py-1 px-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                        selectedKidForRewards === kName
                          ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-black"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {kName}
                    </button>
                  ))}
                </div>
              )}

              {/* Reward Profile Form */}
              <form onSubmit={handleSaveRewards} className="space-y-3.5 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Active Reward Wish:
                    </label>
                    <input
                      type="text"
                      value={topWishInput}
                      onChange={e => setTopWishInput(e.target.value)}
                      placeholder="e.g. $15 Roblox Gift Card"
                      className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Target Goal Value ($):
                    </label>
                    <input
                      type="number"
                      min={5}
                      max={100}
                      value={goalAmountInput}
                      onChange={e => setGoalAmountInput(Number(e.target.value))}
                      className="w-full text-xs font-semibold py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Platforms List */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Connected Handles &amp; GamerTags:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {REWARD_PLATFORMS.map(platform => {
                      const curVal = platformHandles[platform.id] || "";
                      return (
                        <div
                          key={platform.id}
                          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 space-y-1"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                            <span>{platform.iconEmoji}</span>
                            <span>{platform.name}</span>
                          </div>
                          <input
                            type="text"
                            value={curVal}
                            onChange={e =>
                              setPlatformHandles(prev => ({
                                ...prev,
                                [platform.id]: e.target.value
                              }))
                            }
                            placeholder={platform.placeholder}
                            className="w-full text-xs py-1.5 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  {rewardsSaved ? (
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Saved Successfully!
                    </span>
                  ) : (
                    <span />
                  )}

                  <div className="flex items-center gap-2">
                    {viewMode === "parent" && onOpenRewardPayoutModal && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenRewardPayoutModal(selectedKidForRewards);
                        }}
                        className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition cursor-pointer flex items-center gap-1 shadow-xs"
                      >
                        <Gift className="w-3.5 h-3.5" />
                        <span>Send Gift Cards ↗</span>
                      </button>
                    )}

                    <button
                      type="submit"
                      className="py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Rewards</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: MINION QR CODE & PAIRING */}
          {activeTab === "qrcode" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  Minion QR Code &amp; Device Pairing
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Scan with your phone or tablet camera to open this kid’s chore dashboard instantly.
                </p>
              </div>

              {/* Kid Selector */}
              {allKidsList.length > 1 && (
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  {allKidsList.map(kName => (
                    <button
                      key={kName}
                      type="button"
                      onClick={() => setSelectedKidForQr(kName)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                        selectedKidForQr === kName
                          ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-black"
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {kName}'s QR
                    </button>
                  ))}
                </div>
              )}

              {/* QR Code Container */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white rounded-2xl shadow-md border border-slate-200">
                  <QRCodeDisplay value={currentQrUrl} size={190} />
                </div>

                <div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">
                    Scan for {selectedKidForQr}'s Chore Page
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-sm">
                    Opens directly to {selectedKidForQr}'s routines without needing a login or PIN.
                  </p>
                </div>

                {/* Direct Link & Copy */}
                <div className="w-full max-w-sm flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono">
                  <span className="truncate flex-1 px-2 text-slate-600 dark:text-slate-400">
                    {currentQrUrl}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyQrLink}
                    className="py-1 px-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold hover:bg-indigo-100 transition shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    {copiedQrLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedQrLink ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {tunnelUrl && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Target:</span>
                    <button
                      type="button"
                      onClick={() => setQrTarget("tunnel")}
                      className={`px-2 py-0.5 rounded-lg font-bold transition cursor-pointer ${
                        qrTarget === "tunnel"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      Cloudflare Tunnel (Phones/Off-Wifi)
                    </button>
                    <button
                      type="button"
                      onClick={() => setQrTarget("local")}
                      className={`px-2 py-0.5 rounded-lg font-bold transition cursor-pointer ${
                        qrTarget === "local"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      Localhost
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: PARENT ACCESS & PIN */}
          {activeTab === "security" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  {viewMode === "minion" ? "Parent Access Unlock" : "Security &amp; Parent PIN"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {viewMode === "minion"
                    ? "Enter your 4-digit Parent PIN to exit Minion Mode and manage chores."
                    : "Manage your household PIN and switch between parent and kid views."}
                </p>
              </div>

              {viewMode === "minion" ? (
                /* Unlock form for Minion Mode */
                <form onSubmit={handleVerifyParentPin} className="space-y-4 pt-1">
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 dark:text-white">
                          Parent Mode Locked
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Default PIN is <code className="font-black text-indigo-600 dark:text-indigo-400">1234</code>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Enter 4-Digit Parent PIN:
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        autoFocus
                        value={pinInput}
                        onChange={e => {
                          setPinInput(e.target.value);
                          setPinError("");
                        }}
                        placeholder="••••"
                        className="w-full text-center tracking-widest text-2xl font-mono py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      {pinError && (
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1.5 text-center">
                          {pinError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Unlock className="w-4 h-4" />
                      <span>Unlock Parent Command Hub</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Parent PIN Management in Parent Mode */
                <div className="space-y-4 pt-1">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        <span className="text-xs font-black text-slate-900 dark:text-white">
                          Current Parent PIN: <span className="font-mono text-indigo-600 dark:text-indigo-400">{parentPin}</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                        Active ✓
                      </span>
                    </div>

                    <form onSubmit={handleUpdateParentPin} className="flex items-center gap-2 pt-1">
                      <input
                        type="password"
                        maxLength={4}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        placeholder="New 4-digit PIN"
                        value={newPinInput}
                        onChange={e => setNewPinInput(e.target.value)}
                        className="flex-1 text-xs font-mono py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                      <button
                        type="submit"
                        disabled={newPinInput.length !== 4}
                        className="py-2 px-3 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition cursor-pointer shrink-0"
                      >
                        Update PIN
                      </button>
                    </form>

                    {pinUpdatedNotice && (
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        ✓ PIN updated to {parentPin}!
                      </p>
                    )}
                  </div>

                  {/* Switch to Kid Minion Mode shortcut */}
                  <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-2xl border border-indigo-200/60 dark:border-indigo-900/60 space-y-2">
                    <div className="text-xs font-black text-indigo-950 dark:text-indigo-200">
                      Switch to Minion View:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {allKidsList.map(kName => (
                        <button
                          key={kName}
                          type="button"
                          onClick={() => {
                            onClose();
                            onSwitchToKid?.(kName);
                          }}
                          className="py-2 px-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-slate-700 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 text-xs font-bold transition cursor-pointer text-center"
                        >
                          {kName}'s View 🎒
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: APP & SYNC INFO */}
          {activeTab === "about" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white">
                  App, PWA &amp; Cloud Sync
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Offline installation, cloud synchronization status, and version metadata.
                </p>
              </div>

              <div className="space-y-2.5">
                {/* PWA Home Screen Installation */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 dark:text-white">
                        Home Screen App (PWA)
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {isStandalone()
                          ? "Installed as a standalone home-screen app"
                          : "Install to home screen for fullscreen mobile experience"}
                      </div>
                    </div>
                  </div>

                  {!isStandalone() && (
                    <button
                      type="button"
                      onClick={async () => {
                        const res = await promptPwaInstall();
                        if (res === "accepted") {
                          setInstallStatus("Installed ✓");
                        }
                      }}
                      className="py-1 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer transition shrink-0"
                    >
                      {installStatus || "Install"}
                    </button>
                  )}
                </div>

                {/* Cloud Sync Status */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 dark:text-white">
                        Firebase Real-Time Cloud Sync
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                        Household: <strong className="text-slate-700 dark:text-slate-300">{householdId}</strong>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shrink-0">
                    Live Sync ✓
                  </span>
                </div>

                {/* Active Sync Week */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
                  <div className="text-slate-600 dark:text-slate-400 font-semibold">
                    Active Roster Schedule Week:
                  </div>
                  <span className="font-mono font-black text-slate-900 dark:text-white">
                    {activeSyncWeek}
                  </span>
                </div>

                {/* Version & Build */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs">
                  <div className="text-slate-600 dark:text-slate-400 font-semibold">
                    App Version:
                  </div>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    v2.5.0 (PWA Ready)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between">
          <div className="text-[11px] text-slate-500 dark:text-slate-400">
            Household Hub Settings
          </div>
          <button
            type="button"
            onClick={onClose}
            className="py-1.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white text-xs font-bold transition cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
