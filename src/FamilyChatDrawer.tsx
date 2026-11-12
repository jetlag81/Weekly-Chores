// Slide-over Family Chat Drawer
// Real-time synchronization across Parent Hub and Minion Dashboard with audio notifications, G-rated GIFs, and quick chips

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  Sparkles,
  Smile,
  Heart,
  Image as ImageIcon,
  Trash2,
  Check,
  CheckCheck,
  MessageSquare,
  Users
} from "lucide-react";
import {
  FamilyChatMessage,
  getStoredFamilyChatMessages,
  sendFamilyChatMessage,
  toggleChatReaction,
  clearFamilyChat,
  subscribeToFamilyChat,
  setChatLastReadTimestamp
} from "./familyChat";
import { searchFamilyGiphyGifs, type GiphyGifItem } from "./giphyService";

interface FamilyChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: {
    name: string;
    role?: string;
    color?: string;
  };
  familyMembers?: Array<{
    name: string;
    role?: string;
    color?: string;
    initials?: string;
  }>;
}

const QUICK_CHIPS = [
  "🎉 All chores done!",
  "🐾 Feeding the herd!",
  "🙋 Need a hand please!",
  "⭐ Took over a parent chore!",
  "🎮 Screen time approved?",
  "🚗 On my way!",
  "❤️ Love you guys!"
];

const GIF_CATEGORIES = [
  { label: "Celebrate 🎉", query: "celebrate kid happy" },
  { label: "High Five 🙌", query: "high five kids" },
  { label: "Good Job 👍", query: "great job awesome" },
  { label: "Pets & Herd 🐾", query: "cute puppy kitten" },
  { label: "Dancing 💃", query: "happy dance kid cartoon" }
];

const REACTION_EMOJIS = ["❤️", "👍", "🔥", "👏", "😂"];

export const FamilyChatDrawer: React.FC<FamilyChatDrawerProps> = ({
  isOpen,
  onClose,
  currentUser,
  familyMembers = []
}) => {
  const [messages, setMessages] = useState<FamilyChatMessage[]>(() => getStoredFamilyChatMessages());
  const [inputText, setInputText] = useState("");
  const [selectedGifUrl, setSelectedGifUrl] = useState<string | null>(null);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [gifSearchQuery, setGifSearchQuery] = useState("celebrate kid");
  const [gifResults, setGifResults] = useState<GiphyGifItem[]>([]);
  const [loadingGifs, setLoadingGifs] = useState(false);
  const [activeGifCategory, setActiveGifCategory] = useState(GIF_CATEGORIES[0].label);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Subscribe to live chat messages
  useEffect(() => {
    const unsubscribe = subscribeToFamilyChat((updated) => {
      setMessages(updated);
      if (isOpen) {
        setChatLastReadTimestamp(currentUser.name);
      }
    }, currentUser.name);

    return () => unsubscribe();
  }, [currentUser.name, isOpen]);

  // Mark messages read when drawer opens
  useEffect(() => {
    if (isOpen) {
      setChatLastReadTimestamp(currentUser.name);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, currentUser.name]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length, isOpen]);

  // Load GIFs when GIF picker is opened
  useEffect(() => {
    if (!showGifPicker) return;

    let cancelled = false;
    const fetchGifs = async () => {
      setLoadingGifs(true);
      try {
        const results = await searchFamilyGiphyGifs(gifSearchQuery, 12);
        if (!cancelled) {
          setGifResults(results);
        }
      } catch (err) {
        console.error("Error loading chat GIFs:", err);
      } finally {
        if (!cancelled) setLoadingGifs(false);
      }
    };

    fetchGifs();
    return () => {
      cancelled = true;
    };
  }, [showGifPicker, gifSearchQuery]);

  const handleSendMessage = async (textToSend?: string, gifToSend?: string) => {
    const text = (textToSend !== undefined ? textToSend : inputText).trim();
    const gif = gifToSend !== undefined ? gifToSend : selectedGifUrl;

    if (!text && !gif) return;

    setInputText("");
    setSelectedGifUrl(null);
    setShowGifPicker(false);

    await sendFamilyChatMessage({
      senderName: currentUser.name,
      senderRole: currentUser.role || "Family Member",
      senderColor: currentUser.color || "#4F46E5",
      message: text || (gif ? "Sent a GIF 🎬" : ""),
      gifUrl: gif || undefined
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChipClick = (chipText: string) => {
    handleSendMessage(chipText);
  };

  const handleSelectGif = (item: GiphyGifItem) => {
    setSelectedGifUrl(item.url);
    setShowGifPicker(false);
    // Auto-send if there's already text, or prefill
    handleSendMessage(inputText, item.url);
  };

  const formatTimestamp = (ts: number) => {
    const d = new Date(ts);
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const timeStr = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

    if (isToday) return timeStr;
    const month = d.toLocaleDateString([], { month: "short", day: "numeric" });
    return `${month} ${timeStr}`;
  };

  const getMemberInitials = (name: string) => {
    if (name.toLowerCase() === "meghan") return "MG";
    if (name.toLowerCase() === "thom") return "TV";
    if (name.toLowerCase() === "sydney") return "SG";
    if (name.toLowerCase() === "cadence") return "CG";
    if (name.toLowerCase() === "mason") return "MV";
    if (name.toLowerCase() === "koda") return "KV";
    if (name.toLowerCase() === "keyanna") return "KG";
    return name.slice(0, 2).toUpperCase();
  };

  const isParent = currentUser.name.toLowerCase() === "thom" ||
                  currentUser.name.toLowerCase() === "meghan" ||
                  currentUser.role?.toLowerCase().includes("overlord") ||
                  currentUser.role?.toLowerCase().includes("overseer");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out border-l border-slate-200 dark:border-slate-800">
        
        {/* Drawer Header */}
        <div
          className="px-4 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white flex items-center justify-between shadow-md shrink-0 drawer-safe-header"
          style={{ paddingTop: "calc(0.875rem + max(env(safe-area-inset-top, 0px), var(--safe-area-inset-top, 0px)))" }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner shrink-0">
              <MessageSquare className="w-5 h-5 text-indigo-100" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-black tracking-tight leading-tight">Family Hub Chat</h2>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-400 text-slate-900 shadow-2xs">
                  Live
                </span>
              </div>
              <p className="text-[11px] text-indigo-100 truncate">
                Logged in as <span className="font-bold underline">{currentUser.name}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {isParent && (
              <button
                type="button"
                onClick={() => {
                  if (confirm("Are you sure you want to clear the family chat history?")) {
                    clearFamilyChat();
                  }
                }}
                className="p-1.5 rounded-xl hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer"
                title="Clear Chat History (Parent Only)"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white/20 text-white transition cursor-pointer"
              title="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Family Members Pill Strip */}
        {familyMembers.length > 0 && (
          <div className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-xs">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Family:
            </span>
            {familyMembers.map((m) => {
              const isMe = m.name.toLowerCase() === currentUser.name.toLowerCase();
              return (
                <div
                  key={m.name}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0 transition ${
                    isMe
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: m.color || "#6366F1" }}
                  />
                  <span>{m.name}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5">
          {messages.map((msg) => {
            const isMe = msg.senderName.toLowerCase().trim() === currentUser.name.toLowerCase().trim();
            const reactionsMap = msg.reactions || {};
            const hasReactions = Object.keys(reactionsMap).length > 0;

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
              >
                {/* Sender Header (if not me) */}
                {!isMe && (
                  <div className="flex items-center gap-1.5 mb-1 px-1">
                    <span
                      className="w-5 h-5 rounded-full text-[9px] font-black text-white flex items-center justify-center shadow-2xs"
                      style={{ backgroundColor: msg.senderColor || "#4F46E5" }}
                    >
                      {getMemberInitials(msg.senderName)}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {msg.senderName}
                    </span>
                    {msg.senderRole && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                        {msg.senderRole}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {formatTimestamp(msg.timestamp)}
                    </span>
                  </div>
                )}

                {/* Bubble Container */}
                <div className="relative group max-w-[85%]">
                  <div
                    className={`rounded-2xl px-3.5 py-2 text-sm shadow-xs leading-relaxed transition-all ${
                      isMe
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-xs"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-xs border border-slate-200 dark:border-slate-700/60"
                    }`}
                  >
                    {msg.message && <p className="whitespace-pre-wrap break-words">{msg.message}</p>}

                    {/* Attached G-Rated GIF */}
                    {msg.gifUrl && (
                      <div className="mt-1.5 rounded-xl overflow-hidden border border-black/10 shadow-xs max-h-52">
                        <img
                          src={msg.gifUrl}
                          alt="Family GIF"
                          className="w-full h-auto object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Timestamp for my messages */}
                  {isMe && (
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 text-right mt-0.5 px-1 flex items-center justify-end gap-1">
                      <span>{formatTimestamp(msg.timestamp)}</span>
                      <Check className="w-3 h-3 text-indigo-500" />
                    </div>
                  )}

                  {/* Reaction Pill Row */}
                  {hasReactions && (
                    <div className="flex flex-wrap gap-1 mt-1 px-1">
                      {Object.entries(reactionsMap).map(([emoji, users]) => {
                        const hasReacted = users.includes(currentUser.name);
                        return (
                          <button
                            key={emoji}
                            type="button"
                            onClick={() => toggleChatReaction(msg.id, emoji, currentUser.name)}
                            className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full border transition cursor-pointer shadow-2xs ${
                              hasReacted
                                ? "bg-indigo-100 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-700 text-indigo-900 dark:text-indigo-200 font-bold"
                                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                            title={`Reacted by: ${users.join(", ")}`}
                          >
                            <span>{emoji}</span>
                            <span className="text-[10px] font-bold">{users.length}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Hover Reaction Toolbar */}
                  <div
                    className={`absolute -top-3.5 ${
                      isMe ? "left-0 -translate-x-full pr-1.5" : "right-0 translate-x-full pl-1.5"
                    } opacity-0 group-hover:opacity-100 transition-opacity flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-1.5 py-0.5 shadow-md z-10`}
                  >
                    {REACTION_EMOJIS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => toggleChatReaction(msg.id, emoji, currentUser.name)}
                        className="text-xs hover:scale-125 px-1 py-0.5 transition cursor-pointer"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Kid Quick Reply Chips */}
        <div className="px-3 pt-2 pb-1 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition cursor-pointer shadow-2xs"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* GIF Picker Panel (Expandable) */}
        {showGifPicker && (
          <div className="bg-slate-100 dark:bg-slate-850 p-3 border-t border-slate-200 dark:border-slate-800 space-y-2 max-h-60 overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Kid-Safe G-Rated GIFs</span>
              </span>
              <button
                type="button"
                onClick={() => setShowGifPicker(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Close ✕
              </button>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {GIF_CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => {
                    setActiveGifCategory(cat.label);
                    setGifSearchQuery(cat.query);
                  }}
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full transition whitespace-nowrap cursor-pointer ${
                    activeGifCategory === cat.label
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* GIF Grid */}
            {loadingGifs ? (
              <div className="py-6 text-center text-xs text-slate-400 animate-pulse">
                Loading fun GIFs...
              </div>
            ) : gifResults.length > 0 ? (
              <div className="grid grid-cols-3 gap-1.5">
                {gifResults.map((gif) => (
                  <button
                    key={gif.id}
                    type="button"
                    onClick={() => handleSelectGif(gif)}
                    className="aspect-video rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 hover:scale-105 hover:border-indigo-500 transition cursor-pointer relative bg-slate-200 dark:bg-slate-800"
                  >
                    <img
                      src={gif.previewUrl || gif.url}
                      alt={gif.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-4 text-center text-xs text-slate-400">
                No GIFs found for this query.
              </div>
            )}
          </div>
        )}

        {/* Input Bar */}
        <div
          className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0 drawer-safe-footer"
          style={{ paddingBottom: "calc(0.875rem + max(env(safe-area-inset-bottom, 0px), var(--safe-area-inset-bottom, 0px)))" }}
        >
          <button
            type="button"
            onClick={() => setShowGifPicker(!showGifPicker)}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              showGifPicker
                ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-indigo-600"
            }`}
            title="Add a kid-friendly Giphy GIF"
          >
            <ImageIcon className="w-5 h-5" />
          </button>

          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message family as ${currentUser.name}...`}
            className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="button"
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() && !selectedGifUrl}
            className={`p-2 rounded-xl transition cursor-pointer flex items-center justify-center shrink-0 ${
              inputText.trim() || selectedGifUrl
                ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"
                : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
            }`}
            title="Send Message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

