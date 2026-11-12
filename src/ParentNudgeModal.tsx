// Parent Nudge & Inspection Feedback Modal
// Allows Parents Thom & Meghan to dispatch playful "Meh" nudges and "Good Job" praise
// directly to kids' phones and tablets with animated GIFs and custom messages.

import React, { useState, useEffect } from "react";
import {
  Bell,
  Sparkles,
  X,
  Send,
  ThumbsUp,
  AlertCircle,
  CheckCircle2,
  Smile,
  Meh,
  Shuffle,
  Eye,
  Check,
  Search,
  Loader2
} from "lucide-react";
import {
  sendParentNudge,
  PRAISE_PRESETS,
  NUDGE_PRESETS,
  JUNIOR_NUDGE_PRESETS,
  type ParentNudgeEvent
} from "./nudgeSystem";
import {
  getRandomGoodJobGif,
  getRandomAlmostGif,
  getRandomMehGif,
  ORIGINAL_MEH_ITEMS,
  type OriginalMehGifItem
} from "./gifCelebrations";
import {
  getRandomGiphyOrFallbackGif,
  searchFamilyGiphyGifs,
  useGiphyUsage,
  type GiphyGifItem
} from "./giphyService";
import {
  getUserProfile,
  getEffectiveAgeTier,
  calculateAge
} from "./userProfiles";

interface ParentNudgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  allKidsList?: string[];
  initialKid?: string;
  initialType?: "praise" | "nudge";
  onNudgeSent?: (kidName: string, type: "praise" | "nudge", msg: string) => void;
  onSwitchToKid?: (kidName: string) => void;
}

export const ParentNudgeModal: React.FC<ParentNudgeModalProps> = ({
  isOpen,
  onClose,
  allKidsList = ["Sydney", "Cadence", "Mason"],
  initialKid,
  initialType = "nudge",
  onNudgeSent,
  onSwitchToKid
}) => {
  const [selectedKid, setSelectedKid] = useState<string>(() => initialKid || allKidsList[0] || "Sydney");
  const [nudgeType, setNudgeType] = useState<"praise" | "nudge">(initialType);
  const [headline, setHeadline] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [previewGif, setPreviewGif] = useState<string>("");
  const [sentNudge, setSentNudge] = useState<ParentNudgeEvent | null>(null);

  // Profile and age tier awareness
  const kidProfile = getUserProfile(selectedKid);
  const kidAgeTier = getEffectiveAgeTier(kidProfile);
  const isJunior = kidAgeTier === "junior";
  const kidAge = calculateAge(kidProfile.birthday);

  // Original Meh vault & Giphy search state
  const [showMehVault, setShowMehVault] = useState(false);
  const [showGiphySearch, setShowGiphySearch] = useState(false);
  const [giphySearchQuery, setGiphySearchQuery] = useState("");
  const [isSearchingGiphy, setIsSearchingGiphy] = useState(false);
  const [giphySearchResults, setGiphySearchResults] = useState<GiphyGifItem[]>([]);
  const giphyUsage = useGiphyUsage();

  // Synchronize state when opened with fresh props
  useEffect(() => {
    if (isOpen) {
      const kid = initialKid && allKidsList.includes(initialKid) ? initialKid : allKidsList[0] || "Sydney";
      setSelectedKid(kid);
      setNudgeType(initialType);
      setSentNudge(null);
      setShowMehVault(false);
      setShowGiphySearch(false);
      setGiphySearchQuery("");
      setGiphySearchResults([]);

      const targetProf = getUserProfile(kid);
      const targetIsJunior = getEffectiveAgeTier(targetProf) === "junior";

      // Default preset
      const presets = initialType === "praise"
        ? PRAISE_PRESETS
        : targetIsJunior
        ? JUNIOR_NUDGE_PRESETS
        : NUDGE_PRESETS;
      setHeadline(presets[0].headline);
      setMessage(presets[0].message);

      // Initial reaction GIF: Praise uses GoodJob, Junior Nudge uses upbeat positive encouragement (Almost There / cheer), Teen Nudge uses original Meh folder!
      const gif = initialType === "praise"
        ? getRandomGiphyOrFallbackGif("goodJob")
        : targetIsJunior
        ? getRandomAlmostGif()
        : getRandomMehGif();
      setPreviewGif(gif);
    }
  }, [isOpen, initialKid, initialType, allKidsList]);

  // When switching selected kid, adjust tone & presets if tier changes
  const handleSelectKid = (kid: string) => {
    setSelectedKid(kid);
    setShowMehVault(false);
    setShowGiphySearch(false);
    const targetProf = getUserProfile(kid);
    const targetIsJunior = getEffectiveAgeTier(targetProf) === "junior";

    if (nudgeType === "nudge") {
      const presets = targetIsJunior ? JUNIOR_NUDGE_PRESETS : NUDGE_PRESETS;
      setHeadline(presets[0].headline);
      setMessage(presets[0].message);
      setPreviewGif(targetIsJunior ? getRandomAlmostGif() : getRandomMehGif());
    }
  };

  // When changing type, pick a new preset & GIF
  const handleTypeChange = (type: "praise" | "nudge") => {
    setNudgeType(type);
    setShowMehVault(false);
    setShowGiphySearch(false);
    if (type === "praise") {
      setHeadline(PRAISE_PRESETS[0].headline);
      setMessage(PRAISE_PRESETS[0].message);
      setPreviewGif(getRandomGiphyOrFallbackGif("goodJob"));
    } else {
      const presets = isJunior ? JUNIOR_NUDGE_PRESETS : NUDGE_PRESETS;
      setHeadline(presets[0].headline);
      setMessage(presets[0].message);
      setPreviewGif(isJunior ? getRandomAlmostGif() : getRandomMehGif());
    }
  };

  const handleShuffleGif = () => {
    if (nudgeType === "praise") {
      setPreviewGif(getRandomGiphyOrFallbackGif("goodJob"));
    } else if (isJunior) {
      // In Junior mode, shuffle between positive cheering / Almost There encouragement!
      if (showGiphySearch) {
        setPreviewGif(getRandomGiphyOrFallbackGif("almost"));
      } else {
        setPreviewGif(getRandomAlmostGif());
      }
    } else {
      // In Teen Meh mode, if Giphy search is active, shuffle a fresh G-rated Meh from Giphy; otherwise shuffle from original Meh folder!
      if (showGiphySearch) {
        setPreviewGif(getRandomGiphyOrFallbackGif("meh", true));
      } else {
        setPreviewGif(getRandomMehGif());
      }
    }
  };

  const handlePerformGiphySearch = async (queryText?: string) => {
    const q = (queryText !== undefined ? queryText : giphySearchQuery).trim();
    if (!q) return;
    setIsSearchingGiphy(true);
    try {
      const results = await searchFamilyGiphyGifs(q, 15);
      setGiphySearchResults(results);
    } catch {
      setGiphySearchResults([]);
    } finally {
      setIsSearchingGiphy(false);
    }
  };

  const handleSelectPreset = (preset: { headline: string; message: string }) => {
    setHeadline(preset.headline);
    setMessage(preset.message);
  };

  const handleSend = () => {
    const defaultNudgeHeadline = isJunior ? "You Can Do It! 🌟" : "Minion Nudge! 🧹";
    const defaultNudgeMsg = isJunior ? "Almost done! A quick tidy up and you're all set!" : "Time for a quick chore touch-up!";
    const finalHeadline = headline.trim() || (nudgeType === "praise" ? "Awesome Job! ⭐" : defaultNudgeHeadline);
    const finalMsg = message.trim() || (nudgeType === "praise" ? "Keep up the fantastic work!" : defaultNudgeMsg);

    const dispatched = sendParentNudge({
      targetKid: selectedKid,
      type: nudgeType,
      headline: finalHeadline,
      message: finalMsg,
      fromParent: "Parents Thom & Meghan",
      gifUrl: previewGif
    });

    setSentNudge(dispatched);

    if (onNudgeSent) {
      onNudgeSent(selectedKid, nudgeType, finalMsg);
    }
  };

  if (!isOpen) return null;

  const currentPresets = nudgeType === "praise" ? PRAISE_PRESETS : isJunior ? JUNIOR_NUDGE_PRESETS : NUDGE_PRESETS;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div
          className={`p-4 sm:p-5 text-white flex items-center justify-between shrink-0 transition-colors ${
            sentNudge
              ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700"
              : nudgeType === "praise"
              ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700"
              : "bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-inner">
              {sentNudge ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
              ) : nudgeType === "praise" ? (
                <Sparkles className="w-5 h-5 text-amber-200" />
              ) : (
                <Bell className="w-5 h-5 text-amber-200" />
              )}
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full inline-block">
                Parent Remote Nudge & Feedback
              </div>
              <h3 className="text-lg font-black mt-0.5">
                {sentNudge
                  ? `Delivered to ${sentNudge.targetKid} ✓`
                  : nudgeType === "praise"
                  ? "Send Praise ⭐ (Good Job GIF)"
                  : "Send Nudge 🧹 (Meh GIF)"}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-4 text-slate-800 overflow-y-auto">
          {sentNudge ? (
            /* Successful Delivery Screen */
            <div className="text-center py-4 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900">
                  {sentNudge.type === "praise" ? "Praise Dispatched!" : "Nudge Dispatched!"}
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Sent to <strong className="text-slate-900">{sentNudge.targetKid}&apos;s device</strong> with the animated GIF and ambient household chime.
                </p>
              </div>

              {/* Message preview pill */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-left max-w-sm mx-auto">
                <div className="text-[10px] font-black uppercase text-slate-400">Delivered Note:</div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">{sentNudge.headline}</div>
                <div className="text-xs text-slate-600 mt-0.5">{sentNudge.message}</div>
              </div>

              {/* Animated GIF Preview Container */}
              <div className="max-w-xs mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-950/5 min-h-[140px] max-h-[200px] flex items-center justify-center">
                <img
                  src={sentNudge.gifUrl}
                  alt="Delivered Reaction GIF"
                  className="w-full h-auto max-h-[200px] object-contain"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                {onSwitchToKid && (
                  <button
                    type="button"
                    onClick={() => {
                      onSwitchToKid(sentNudge.targetKid);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview What {sentNudge.targetKid} Sees</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-800 transition cursor-pointer"
                >
                  Done ✓
                </button>
              </div>
            </div>
          ) : (
            /* Compose Screen */
            <>
              {/* Target Kid Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Send To Kid:
                  </label>
                  {isJunior && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span>🌟 Junior Mode Active</span>
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {allKidsList.map(kid => {
                    const prof = getUserProfile(kid);
                    const tier = getEffectiveAgeTier(prof);
                    const age = calculateAge(prof.birthday);
                    const isKidJunior = tier === "junior";
                    const isSelected = selectedKid === kid;
                    return (
                      <button
                        key={kid}
                        type="button"
                        onClick={() => handleSelectKid(kid)}
                        className={`py-2 px-2 rounded-xl font-extrabold text-xs transition cursor-pointer border flex flex-col items-center justify-center gap-0.5 ${
                          isSelected
                            ? isKidJunior
                              ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                              : "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          {isKidJunior && <span className="text-amber-300 text-xs">🌟</span>}
                          <span>{kid}</span>
                        </span>
                        <span className={`text-[9px] font-bold ${
                          isSelected ? (isKidJunior ? "text-amber-100" : "text-indigo-200") : "text-slate-400"
                        }`}>
                          {isKidJunior ? `Age ${age || "≤11"}` : `Teen (${age || "12+"})`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Type Toggle */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                  Message Style & GIF Type:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleTypeChange("praise")}
                    className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
                      nudgeType === "praise"
                        ? "bg-emerald-50 border-emerald-400 ring-2 ring-emerald-500/20"
                        : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Smile className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-emerald-950 flex items-center gap-1">
                        <span>Praise</span>
                        <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1 rounded">Good Job GIF</span>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-medium">Spotless room, great work</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTypeChange("nudge")}
                    className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
                      nudgeType === "nudge"
                        ? isJunior
                          ? "bg-amber-50 border-amber-400 ring-2 ring-amber-500/20"
                          : "bg-orange-50 border-orange-400 ring-2 ring-orange-500/20"
                        : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isJunior ? "bg-amber-100 text-amber-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {isJunior ? <Sparkles className="w-4 h-4" /> : <Meh className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className={`text-xs font-black flex items-center gap-1 ${
                        isJunior ? "text-amber-950" : "text-orange-950"
                      }`}>
                        <span>{isJunior ? "Gentle Nudge" : "Meh Nudge"}</span>
                        <span className={`text-[10px] px-1 rounded ${
                          isJunior ? "bg-amber-200 text-amber-900" : "bg-orange-200 text-orange-900"
                        }`}>
                          {isJunior ? "Cheer 🌟" : "Meh GIF"}
                        </span>
                      </div>
                      <div className={`text-[11px] font-medium leading-tight ${
                        isJunior ? "text-amber-700" : "text-orange-700"
                      }`}>
                        {isJunior ? "Positive encouragement & cheers" : "Playful reminder for chores"}
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Quick 1-Tap Presets */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Quick 1-Tap Presets:
                  </label>
                  <span className="text-[11px] text-slate-400">Tap to auto-fill</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentPresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`text-xs px-2.5 py-1.5 rounded-xl border font-bold transition cursor-pointer text-left ${
                        headline === preset.headline
                          ? nudgeType === "praise"
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                            : "bg-orange-600 text-white border-orange-600 shadow-2xs"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {preset.headline}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message Field */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
                  Message to {selectedKid}:
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={nudgeType === "praise" ? "e.g. Great job cleaning your room!" : "e.g. Bed needs to be made before screen time!"}
                  className="w-full text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Live GIF Reaction Preview with Shuffle, Original Meh Vault & Giphy Search */}
              {previewGif && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1 gap-1 flex-wrap">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span>Reaction:</span>
                      {previewGif.includes("/gifs/Meh/") || previewGif.includes("Meh/") ? (
                        <span className="text-[9px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.5 rounded-md flex items-center gap-1">
                          <span>📂 Original Meh Vault</span>
                        </span>
                      ) : (
                        <span className="text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-1.5 py-0.5 rounded-md flex items-center gap-1">
                          <span>🛡️ G-Rated</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {nudgeType === "nudge" && (
                        <button
                          type="button"
                          onClick={() => {
                            setShowMehVault(v => !v);
                            if (!showMehVault) setShowGiphySearch(false);
                          }}
                          className={`text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 transition cursor-pointer ${
                            showMehVault
                              ? "bg-amber-600 text-white shadow-2xs"
                              : "bg-amber-100 hover:bg-amber-200 text-amber-900"
                          }`}
                          title="Browse the 17 original curated Meh reaction GIFs"
                        >
                          <span>📂 Original Meh ({ORIGINAL_MEH_ITEMS.length})</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          const nextShow = !showGiphySearch;
                          setShowGiphySearch(nextShow);
                          if (nextShow) {
                            setShowMehVault(false);
                            if (giphySearchResults.length === 0) {
                              handlePerformGiphySearch(
                                nudgeType === "praise"
                                  ? "great job celebration"
                                  : isJunior
                                  ? "you can do it cheering"
                                  : "meh reaction"
                              );
                            }
                          }
                        }}
                        className={`text-[11px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 transition cursor-pointer ${
                          showGiphySearch
                            ? "bg-indigo-600 text-white shadow-2xs"
                            : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                        }`}
                        title="Search family-friendly Giphy GIFs"
                      >
                        <Search className="w-3 h-3" />
                        <span>Search Giphy</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleShuffleGif}
                        className="text-[11px] text-indigo-600 hover:text-indigo-800 font-extrabold flex items-center gap-1 cursor-pointer px-2 py-1 rounded-lg hover:bg-indigo-50 transition"
                      >
                        <Shuffle className="w-3.5 h-3.5" />
                        <span>Shuffle 🎲</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Selected GIF Preview Container */}
                  <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white min-h-[140px] max-h-[180px] flex items-center justify-center shadow-inner">
                    <img
                      src={previewGif}
                      alt="Reaction GIF"
                      className="w-full h-auto max-h-[180px] object-contain"
                    />
                  </div>

                  {/* Expandable Original Meh Vault Drawer */}
                  {nudgeType === "nudge" && showMehVault && (
                    <div className="pt-2 border-t border-amber-200 space-y-2 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between text-[11px] font-extrabold text-amber-900 px-0.5">
                        <span>Original Meh Vault ({ORIGINAL_MEH_ITEMS.length} Classic Reactions):</span>
                        <span className="text-[10px] font-semibold text-slate-500">Tap to select</span>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-52 overflow-y-auto p-1.5 bg-amber-50/70 rounded-xl border border-amber-200">
                        {ORIGINAL_MEH_ITEMS.map((item) => {
                          const itemEncoded = encodeURI(item.url);
                          const isSelected =
                            previewGif === item.url ||
                            previewGif === itemEncoded ||
                            previewGif.includes(encodeURI(item.name)) ||
                            decodeURI(previewGif).includes(item.name);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setPreviewGif(itemEncoded)}
                              className={`p-1 rounded-xl border flex flex-col items-center gap-1 transition cursor-pointer group bg-white ${
                                isSelected
                                  ? "border-amber-500 ring-2 ring-amber-400 shadow-sm"
                                  : "border-slate-200 hover:border-amber-300"
                              }`}
                            >
                              <div className="w-full h-14 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                                <img
                                  src={itemEncoded}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  loading="lazy"
                                />
                              </div>
                              <span className="text-[10px] font-bold text-slate-700 truncate w-full text-center px-0.5">
                                {item.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Expandable Giphy Family Search Panel */}
                  {showGiphySearch && (
                    <div className="pt-1.5 border-t border-slate-200 space-y-2 animate-in fade-in duration-150">
                      {/* Quota & Rate Limit Status Header */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold px-0.5">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-indigo-500" />
                          <span>Family-Safe G-Rated Search</span>
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded-md font-bold text-[9.5px] border ${
                            giphyUsage.isThrottled
                              ? "bg-rose-50 text-rose-700 border-rose-200"
                              : giphyUsage.isNearLimit
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                          title={`Hourly Quota: ${giphyUsage.callsInLastHour}/100 calls used in past 60 min. Oldest call drops off in ~${giphyUsage.resetInMinutes}m.`}
                        >
                          {giphyUsage.isThrottled
                            ? "⛔ Limit Reached (Local Safe Mode)"
                            : `⚡ ${giphyUsage.remaining}/100 calls left this hr`}
                        </span>
                      </div>

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handlePerformGiphySearch();
                        }}
                        className="flex items-center gap-1.5"
                      >
                        <div className="relative flex-1">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={giphySearchQuery}
                            onChange={(e) => setGiphySearchQuery(e.target.value)}
                            placeholder={
                              nudgeType === "praise"
                                ? "Search G-rated celebration GIFs..."
                                : isJunior
                                ? "Search cheering GIFs (e.g. you got this, high five, cartoon cheer)..."
                                : "Search G-rated Meh reactions (e.g. eye roll, facepalm, shrug)..."
                            }
                            className="w-full text-xs pl-8 pr-2.5 py-1.5 rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500 font-medium"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSearchingGiphy}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl transition cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          {isSearchingGiphy ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <span>Find</span>
                          )}
                        </button>
                      </form>

                      {/* Quick Family Search Chips - Aligned to Mode & Tier */}
                      <div className="flex flex-wrap gap-1">
                        {(nudgeType === "praise"
                          ? [
                              "⭐ Celebration",
                              "👏 High Five",
                              "💃 Dance",
                              "🎉 Winner",
                              "🎮 Gaming",
                              "🐶 Cute Pets"
                            ]
                          : isJunior
                          ? [
                              "🌟 You Got This",
                              "👏 Cheering",
                              "🚀 Super Minion",
                              "🐶 Cute Pets",
                              "🎮 Level Up",
                              "🧹 Quick Clean",
                              "⭐ Almost There",
                              "😄 Thumbs Up"
                            ]
                          : [
                              "😒 Meh",
                              "🙄 Eye Roll",
                              "🤷 Shrug / Whatever",
                              "🤦 Facepalm",
                              "🤨 Unimpressed",
                              "🐕 Disappointed Pet",
                              "🐸 Kermit No",
                              "🥱 Bored",
                              "🛑 Do Better"
                            ]
                        ).map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => {
                              const clean = tag.replace(/^[^\w\s]+\s*/, "");
                              setGiphySearchQuery(clean);
                              handlePerformGiphySearch(clean);
                            }}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition cursor-pointer"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>

                      {/* Search Results Gallery */}
                      {giphySearchResults.length > 0 && (
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 -mx-0.5 px-0.5 scrollbar-thin">
                          {giphySearchResults.map((item) => {
                            const isSelected = previewGif === item.url;
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setPreviewGif(item.url)}
                                className={`relative rounded-xl overflow-hidden shrink-0 border-2 transition cursor-pointer w-20 h-16 bg-slate-200 flex items-center justify-center ${
                                  isSelected
                                    ? "border-indigo-600 ring-2 ring-indigo-500/40"
                                    : "border-transparent hover:border-slate-400"
                                }`}
                                title={item.title}
                              >
                                <img
                                  src={item.previewUrl || item.url}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                                {isSelected && (
                                  <div className="absolute inset-0 bg-indigo-600/30 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                                    </div>
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Send Action */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black text-white transition flex items-center gap-2 cursor-pointer shadow-md hover:opacity-95 ${
                    nudgeType === "praise"
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send to {selectedKid} 🚀</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
