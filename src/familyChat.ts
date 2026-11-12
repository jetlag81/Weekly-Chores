// Real-time Family Chat Module for Weekly Chores Household Hub
// Supports multi-device Firestore sync, local BroadcastChannel, audio chimes, G-rated GIFs, and quick chips

import {
  initFirebase,
  broadcastLocalUpdate,
  subscribeToRealtimeSync
} from "./firebaseSync";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { playHouseholdRemoteChime } from "./activityFeed";

export interface FamilyChatMessage {
  id: string;
  senderName: string;
  senderRole?: string;
  senderColor?: string;
  message: string;
  gifUrl?: string;
  timestamp: number;
  reactions?: Record<string, string[]>; // emoji -> array of user names
}

const STORAGE_KEY_CHAT = "weekly_chores_family_chat_messages_v1";
const STORAGE_KEY_LAST_READ = "weekly_chores_family_chat_last_read_v1";

// Default welcome message if chat history is empty
const DEFAULT_WELCOME_MESSAGES: FamilyChatMessage[] = [
  {
    id: "welcome-system-1",
    senderName: "Household Hub",
    senderRole: "Family System",
    senderColor: "#4F46E5",
    message: "👋 Welcome to Family Chat! Use this space to check in on chores, cheer each other on, or celebrate big milestones together!",
    timestamp: Date.now() - 3600000 * 24
  }
];

export function getStoredFamilyChatMessages(): FamilyChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CHAT);
    if (!raw) return DEFAULT_WELCOME_MESSAGES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error("Failed to parse family chat messages:", err);
  }
  return DEFAULT_WELCOME_MESSAGES;
}

export function saveFamilyChatMessagesLocally(messages: FamilyChatMessage[]): void {
  try {
    // Keep up to 200 most recent messages
    const trimmed = messages.slice(-200);
    localStorage.setItem(STORAGE_KEY_CHAT, JSON.stringify(trimmed));
    window.dispatchEvent(new CustomEvent("family_chat_updated", { detail: trimmed }));
  } catch (err) {
    console.error("Failed to save family chat messages locally:", err);
  }
}

export function getChatLastReadTimestamp(memberName: string): number {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_LAST_READ}_${memberName.toLowerCase().trim()}`);
    return raw ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

export function setChatLastReadTimestamp(memberName: string, timestamp: number = Date.now()): void {
  try {
    localStorage.setItem(`${STORAGE_KEY_LAST_READ}_${memberName.toLowerCase().trim()}`, String(timestamp));
    window.dispatchEvent(new CustomEvent("family_chat_read_updated", { detail: { memberName, timestamp } }));
  } catch {}
}

export function getUnreadChatCount(memberName: string, messages?: FamilyChatMessage[]): number {
  const msgs = messages || getStoredFamilyChatMessages();
  const lastRead = getChatLastReadTimestamp(memberName);
  const normalizedName = memberName.toLowerCase().trim();

  return msgs.filter(m => {
    // Don't count own messages as unread
    if (m.senderName.toLowerCase().trim() === normalizedName) return false;
    return m.timestamp > lastRead;
  }).length;
}

/**
 * Send a chat message with local storage save, BroadcastChannel broadcast, and Firebase sync
 */
export async function sendFamilyChatMessage(params: {
  senderName: string;
  senderRole?: string;
  senderColor?: string;
  message: string;
  gifUrl?: string;
}): Promise<FamilyChatMessage> {
  const newMessage: FamilyChatMessage = {
    id: `chat-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    senderName: params.senderName,
    senderRole: params.senderRole || "Family Member",
    senderColor: params.senderColor || "#4F46E5",
    message: params.message.trim(),
    gifUrl: params.gifUrl,
    timestamp: Date.now(),
    reactions: {}
  };

  const current = getStoredFamilyChatMessages();
  const updated = [...current, newMessage];
  saveFamilyChatMessagesLocally(updated);

  // Update own last read
  setChatLastReadTimestamp(params.senderName, newMessage.timestamp);

  // Broadcast instantly to other tabs/windows
  broadcastLocalUpdate({
    type: "FAMILY_CHAT_MESSAGE_SENT",
    message: newMessage
  });

  // Sync to Cloud Firestore if connected
  try {
    const { db } = initFirebase();
    if (db) {
      const chatDocRef = doc(db, "households", "household_family_hub", "chat", "main");
      await setDoc(chatDocRef, {
        messages: updated.slice(-150),
        lastUpdated: Date.now(),
        lastSender: params.senderName
      }, { merge: true });
    }
  } catch (err) {
    console.warn("Firestore family chat sync failed (saved locally):", err);
  }

  return newMessage;
}

/**
 * Toggle a reaction emoji on a message
 */
export async function toggleChatReaction(
  messageId: string,
  emoji: string,
  memberName: string
): Promise<void> {
  const current = getStoredFamilyChatMessages();
  const index = current.findIndex(m => m.id === messageId);
  if (index === -1) return;

  const target = { ...current[index] };
  const reactions = { ...(target.reactions || {}) };
  const usersForEmoji = Array.isArray(reactions[emoji]) ? [...reactions[emoji]] : [];
  const existingIdx = usersForEmoji.indexOf(memberName);

  if (existingIdx >= 0) {
    usersForEmoji.splice(existingIdx, 1);
  } else {
    usersForEmoji.push(memberName);
  }

  if (usersForEmoji.length > 0) {
    reactions[emoji] = usersForEmoji;
  } else {
    delete reactions[emoji];
  }

  target.reactions = reactions;
  const updated = [...current];
  updated[index] = target;
  saveFamilyChatMessagesLocally(updated);

  broadcastLocalUpdate({
    type: "FAMILY_CHAT_REACTION_TOGGLED",
    messageId,
    reactions
  });

  try {
    const { db } = initFirebase();
    if (db) {
      const chatDocRef = doc(db, "households", "household_family_hub", "chat", "main");
      await setDoc(chatDocRef, {
        messages: updated.slice(-150),
        lastUpdated: Date.now()
      }, { merge: true });
    }
  } catch (err) {
    console.warn("Firestore reaction sync warning:", err);
  }
}

/**
 * Clear family chat history
 */
export async function clearFamilyChat(): Promise<void> {
  saveFamilyChatMessagesLocally(DEFAULT_WELCOME_MESSAGES);
  broadcastLocalUpdate({
    type: "FAMILY_CHAT_CLEARED"
  });

  try {
    const { db } = initFirebase();
    if (db) {
      const chatDocRef = doc(db, "households", "household_family_hub", "chat", "main");
      await setDoc(chatDocRef, {
        messages: DEFAULT_WELCOME_MESSAGES,
        lastUpdated: Date.now()
      }, { merge: true });
    }
  } catch (err) {}
}

/**
 * Real-time subscription hook listener for Family Chat
 */
export function subscribeToFamilyChat(
  callback: (messages: FamilyChatMessage[]) => void,
  currentMemberName?: string
): () => void {
  // 1. Initial trigger with local messages
  callback(getStoredFamilyChatMessages());

  // 2. Custom event listener (within same tab)
  const handleLocalEvent = (e: any) => {
    if (e.detail && Array.isArray(e.detail)) {
      callback(e.detail);
    } else {
      callback(getStoredFamilyChatMessages());
    }
  };
  window.addEventListener("family_chat_updated", handleLocalEvent);

  // 3. Storage event listener (across browser tabs)
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY_CHAT && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (Array.isArray(parsed)) {
          callback(parsed);
        }
      } catch {}
    }
  };
  window.addEventListener("storage", handleStorage);

  // 4. BroadcastChannel sync listener
  const unsubscribeBroadcast = subscribeToRealtimeSync((payload: any) => {
    if (payload.type === "FAMILY_CHAT_MESSAGE_SENT" && payload.message) {
      const current = getStoredFamilyChatMessages();
      if (!current.some(m => m.id === payload.message.id)) {
        const updated = [...current, payload.message];
        saveFamilyChatMessagesLocally(updated);
        callback(updated);

        // Play chime if message came from another family member
        if (currentMemberName && payload.message.senderName.toLowerCase().trim() !== currentMemberName.toLowerCase().trim()) {
          playHouseholdRemoteChime();
        }
      }
    } else if (payload.type === "FAMILY_CHAT_REACTION_TOGGLED") {
      const current = getStoredFamilyChatMessages();
      const idx = current.findIndex(m => m.id === payload.messageId);
      if (idx >= 0) {
        current[idx].reactions = payload.reactions;
        saveFamilyChatMessagesLocally([...current]);
        callback([...current]);
      }
    } else if (payload.type === "FAMILY_CHAT_CLEARED") {
      callback(DEFAULT_WELCOME_MESSAGES);
    }
  });

  // 5. Cloud Firestore live listener
  let unsubscribeFirestore: (() => void) | null = null;
  try {
    const { db } = initFirebase();
    if (db) {
      const chatDocRef = doc(db, "households", "household_family_hub", "chat", "main");
      unsubscribeFirestore = onSnapshot(chatDocRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          if (Array.isArray(data.messages)) {
            const current = getStoredFamilyChatMessages();
            // Merge remote messages if newer or more extensive
            if (data.messages.length > current.length || data.lastUpdated > (current[current.length - 1]?.timestamp || 0)) {
              saveFamilyChatMessagesLocally(data.messages);
              callback(data.messages);

              if (currentMemberName && data.lastSender && data.lastSender.toLowerCase().trim() !== currentMemberName.toLowerCase().trim()) {
                playHouseholdRemoteChime();
              }
            }
          }
        }
      }, (err) => {
        console.warn("Firestore family chat onSnapshot error:", err);
      });
    }
  } catch (err) {
    console.warn("Failed to attach Firestore chat listener:", err);
  }

  return () => {
    window.removeEventListener("family_chat_updated", handleLocalEvent);
    window.removeEventListener("storage", handleStorage);
    unsubscribeBroadcast();
    if (unsubscribeFirestore) unsubscribeFirestore();
  };
}

