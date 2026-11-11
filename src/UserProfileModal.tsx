// User Profile Modal: Age Tiers, Autonomy Controls, Birthdays & Contact Management
// Supports Teen Autonomy (12+) with Email, Junior Visual Stimulation (<=11),
// and Full Parent Administrative Oversight.

import React, { useState, useEffect } from "react";
import {
  X,
  User,
  Calendar,
  Mail,
  Sparkles,
  Lock,
  Unlock,
  Check,
  Shield,
  Cake,
  Palette,
  Award,
  Heart,
  HelpCircle,
  Clock
} from "lucide-react";
import {
  type UserProfile,
  type AgeTier,
  calculateAge,
  getAgeTier,
  generateInitials,
  canProfileManageEmail,
  canProfileSelfManage,
  getDaysUntilBirthday,
  saveUserProfile,
  getUserProfile
} from "./userProfiles";
import { DatePickerDropdown } from "./DatePickerDropdown";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetMemberName?: string;
  profile?: UserProfile;
  isParentViewer?: boolean;
  isParentEditor?: boolean;
  onProfileUpdated?: (updatedProfile: UserProfile) => void;
  onSaveProfile?: (updatedProfile: UserProfile) => void;
  allMembers?: any[];
}

const AVATAR_EMOJI_OPTIONS = [
  "✨", "🎒", "⭐", "🚀", "🦄", "⚡", "🐾", "🎮",
  "🎨", "🍕", "⚽", "🐶", "🐱", "👑", "🔥", "🌈"
];

const COLOR_OPTIONS = [
  { name: "Teal", color: "#0D9488" },
  { name: "Pink", color: "#EC4899" },
  { name: "Orange", color: "#EA580C" },
  { name: "Sky Blue", color: "#0284C7" },
  { name: "Amber", color: "#D97706" },
  { name: "Purple", color: "#8B5CF6" },
  { name: "Indigo", color: "#4F46E5" },
  { name: "Emerald", color: "#059669" }
];

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  targetMemberName,
  profile: initialProfileProp,
  isParentViewer = false,
  isParentEditor = false,
  onProfileUpdated,
  onSaveProfile,
  allMembers = []
}) => {
  const isParent = isParentViewer || isParentEditor;
  const effectiveMemberName = targetMemberName || initialProfileProp?.name || initialProfileProp?.displayName || initialProfileProp?.firstName || "";

  const [profile, setProfile] = useState<UserProfile>(() => {
    if (initialProfileProp) return initialProfileProp;
    return getUserProfile(effectiveMemberName, allMembers.find(m => m.name?.toLowerCase() === effectiveMemberName.toLowerCase()));
  });

  const [firstName, setFirstName] = useState(profile.firstName || "");
  const [lastName, setLastName] = useState(profile.lastName || "");
  const [birthday, setBirthday] = useState(profile.birthday || "");
  const [email, setEmail] = useState(profile.email || "");
  const [avatarEmoji, setAvatarEmoji] = useState(profile.avatarEmoji || "🎒");
  const [bio, setBio] = useState(profile.bio || "");
  const [favoriteColor, setFavoriteColor] = useState(profile.favoriteColor || "#4F46E5");
  const [savedNotice, setSavedNotice] = useState(false);

  // Sync when target member changes
  useEffect(() => {
    const current = initialProfileProp || getUserProfile(effectiveMemberName, allMembers.find(m => m.name?.toLowerCase() === effectiveMemberName.toLowerCase()));
    setProfile(current);
    setFirstName(current.firstName || "");
    setLastName(current.lastName || "");
    setBirthday(current.birthday || "");
    setEmail(current.email || "");
    setAvatarEmoji(current.avatarEmoji || (current.role === "Supreme Overlord" ? "👑" : "🎒"));
    setBio(current.bio || "");
    setFavoriteColor(current.favoriteColor || "#4F46E5");
    setSavedNotice(false);
  }, [effectiveMemberName, initialProfileProp, allMembers, isOpen]);

  if (!isOpen) return null;

  const currentAge = calculateAge(birthday);
  const ageTier = getAgeTier(currentAge, profile.role);
  const daysToBday = getDaysUntilBirthday(birthday);
  const liveInitials = generateInitials(firstName, lastName);

  // Autonomy rule: 12 and up or parent can manage email and profile details
  const hasEmailAutonomy = isParent || ageTier === "teen" || ageTier === "adult";
  const hasProfileAutonomy = isParent || canProfileSelfManage(profile);

  const handleSave = () => {
    const updated: UserProfile = {
      ...profile,
      firstName: firstName.trim() || profile.firstName,
      lastName: lastName.trim() || profile.lastName,
      displayName: `${firstName.trim()} ${lastName.trim()}`.trim(),
      initials: liveInitials,
      birthday: birthday || void 0,
      email: hasEmailAutonomy ? email.trim() : profile.email,
      avatarEmoji,
      bio: bio.trim(),
      favoriteColor
    };

    saveUserProfile(updated);
    setProfile(updated);
    setSavedNotice(true);
    if (onProfileUpdated) onProfileUpdated(updated);
    if (onSaveProfile) onSaveProfile(updated);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col my-auto transition-all">
        {/* Top Decorative Header */}
        <div
          className="p-5 text-white flex items-center justify-between relative overflow-hidden transition-colors"
          style={{ backgroundColor: favoriteColor }}
        >
          {/* Subtle background flair */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center gap-3.5 relative z-10">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30">
                {avatarEmoji}
              </div>
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-md bg-white text-slate-900 font-extrabold text-[10px] shadow-sm tracking-wider">
                {liveInitials}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight">{firstName || targetMemberName} {lastName}</h3>
                {ageTier === "adult" ? (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 shadow-xs">
                    👑 Supreme Overlord
                  </span>
                ) : ageTier === "teen" ? (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-950 shadow-xs">
                    ⚡ Teen Minion (12+)
                  </span>
                ) : (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-300 text-amber-950 shadow-xs animate-pulse">
                    🌟 Junior Minion (≤11)
                  </span>
                )}
              </div>
              <p className="text-xs text-white/80 font-medium">
                {currentAge !== null ? `Age ${currentAge} • ` : ""}{profile.residency} Occupant
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-black/20 transition cursor-pointer relative z-10"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Junior Visual Banner (≤11) */}
        {ageTier === "junior" && (
          <div className="p-3 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 border-b border-amber-200 flex items-center justify-between text-xs text-amber-950">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎈</span>
              <div>
                <span className="font-extrabold">Junior Explorer Mode!</span>
                <p className="text-[11px] text-amber-800">Visual stimulation active • High-energy chore badges & celebration effects enabled</p>
              </div>
            </div>
            {daysToBday !== null && daysToBday <= 30 && (
              <span className="px-2 py-1 rounded-lg bg-rose-500 text-white font-black text-[10px] flex items-center gap-1 shadow-xs">
                <Cake className="w-3 h-3" />
                <span>{daysToBday === 0 ? "Birthday Today! 🎉" : `${daysToBday}d to Birthday!`}</span>
              </span>
            )}
          </div>
        )}

        {/* Teen Autonomy Banner (12+) */}
        {ageTier === "teen" && (
          <div className="p-3 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:to-indigo-950/40 border-b border-indigo-100 dark:border-slate-800 flex items-center justify-between text-xs text-indigo-950 dark:text-indigo-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <div>
                <span className="font-extrabold">Teen Autonomy Mode Active</span>
                <p className="text-[11px] text-indigo-700 dark:text-indigo-300">You have full control to customize your profile, bio, and email address for chore alerts</p>
              </div>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto text-xs text-slate-700 dark:text-slate-200">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                First Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                disabled={!hasProfileAutonomy}
                placeholder="First Name..."
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  disabled={!hasProfileAutonomy}
                  placeholder="Last Name..."
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
                />
                <span className="absolute right-2.5 top-2.5 text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                  Initials: {liveInitials}
                </span>
              </div>
            </div>
          </div>

          {/* Birthday & Age Calculation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Cake className="w-3.5 h-3.5 text-pink-500" />
                  <span>Birthday</span>
                </span>
                {daysToBday !== null && (
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    {daysToBday === 0 ? "🎉 Today!" : `${daysToBday} days away`}
                  </span>
                )}
              </label>
              <DatePickerDropdown
                value={birthday}
                onChange={setBirthday}
                disabled={!isParent && ageTier === "junior"}
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                Calculated Age
              </label>
              <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {currentAge !== null ? `${currentAge} years` : "Unknown"}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  ageTier === "adult" ? "bg-amber-100 text-amber-800" :
                  ageTier === "teen" ? "bg-indigo-100 text-indigo-800" : "bg-emerald-100 text-emerald-800"
                }`}>
                  {ageTier === "adult" ? "Adult" : ageTier === "teen" ? "12+ Teen" : "≤11 Junior"}
                </span>
              </div>
            </div>
          </div>

          {/* Email Address (Autonomy Rule: 12 and Up or Parent) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <span>Email Address</span>
                {hasEmailAutonomy ? (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.2 rounded-full border border-emerald-200 dark:border-emerald-800">
                    Autonomy Enabled (12+)
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.2 rounded-full border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    <span>Restricted (≤11)</span>
                  </span>
                )}
              </label>
            </div>
            {hasEmailAutonomy ? (
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  Used for chore reminders, digital reward receipts, and important schedule updates.
                </p>
              </div>
            ) : (
              <div className="p-3 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-xs">Email input is locked for Junior Minions (under 12)</span>
                  <p className="text-[11px] text-amber-800 dark:text-amber-300">
                    To protect younger minions, contact email addresses can only be added or modified by parents (Supreme Overlords) in Household Settings.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Avatar Emoji Picker */}
          <div>
            <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
              <span>Choose Avatar Emoji</span>
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {AVATAR_EMOJI_OPTIONS.map(em => (
                <button
                  key={em}
                  type="button"
                  onClick={() => setAvatarEmoji(em)}
                  className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition border shrink-0 cursor-pointer ${
                    avatarEmoji === em
                      ? "bg-indigo-100 dark:bg-indigo-900/60 border-indigo-500 ring-2 ring-indigo-500/50 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:scale-105"
                  }`}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>

          {/* Favorite Color Accent */}
          <div>
            <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-purple-500" />
              <span>Favorite Profile Color</span>
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              {COLOR_OPTIONS.map(c => (
                <button
                  key={c.color}
                  type="button"
                  onClick={() => setFavoriteColor(c.color)}
                  className={`w-7 h-7 rounded-full transition flex items-center justify-center shadow-xs cursor-pointer ${
                    favoriteColor === c.color ? "ring-3 ring-offset-2 ring-indigo-600 scale-110" : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.color }}
                  title={c.name}
                >
                  {favoriteColor === c.color && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Motto / Bio */}
          <div>
            <label className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
              Personal Motto / Bio
            </label>
            <input
              type="text"
              value={bio}
              onChange={e => setBio(e.target.value)}
              placeholder="e.g. Chore Master & Robux Collector..."
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-[11px] font-medium text-slate-500">
            {savedNotice ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Profile saved!</span>
              </span>
            ) : (
              <span>Initials & profile sync across devices</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
