// Realtime Firebase & Multi-User Household Synchronization Module

import { initializeApp, getApps, deleteApp, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  type Firestore,
  type Unsubscribe
} from "firebase/firestore";

export type UserRole = "admin" | "kid";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

export interface DeviceSession {
  role: UserRole;
  householdId: string;
  kidName?: string;
  kidMemberId?: string;
  deviceId: string;
  parentPin?: string;
}

export interface HouseholdInvite {
  code: string;
  householdId: string;
  kidName: string;
  createdAt: number;
  expiresAt: number;
  claimed: boolean;
  claimedByDeviceId?: string;
}

const STORAGE_KEY_FIREBASE_CONFIG = "household_hub_firebase_config";
const STORAGE_KEY_DEVICE_SESSION = "household_hub_device_session";
const STORAGE_KEY_LOCAL_INVITES = "household_hub_local_invites";

// BroadcastChannel for instant zero-latency multi-window & multi-tab sync
let broadcastChannel: BroadcastChannel | null = null;
try {
  if (typeof window !== "undefined" && "BroadcastChannel" in window) {
    broadcastChannel = new BroadcastChannel("household-hub-realtime");
  }
} catch {
  broadcastChannel = null;
}

let firebaseApp: FirebaseApp | null = null;
let firestoreDb: Firestore | null = null;

// Audio Chime using Web Audio API for rewarding kid chore completion
export function playChoreCompletionSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Play a happy 2-tone melodic chime (C5 -> G5)
    const now = ctx.currentTime;
    
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(523.25, now); // C5
    gain1.gain.setValueAtTime(0.15, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(783.99, now + 0.12); // G5
    gain2.gain.setValueAtTime(0.2, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.12);
    osc2.stop(now + 0.6);
  } catch (err) {
    console.warn("Audio chime not supported or muted:", err);
  }
}

// Generate an unambiguous random 6-character kid invite code (e.g. HERD-84)
export function generateKidInviteCode(prefix = "HERD"): string {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // exclude easily confused chars (0, O, 1, I)
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${code}`;
}

export function getStoredDeviceSession(): DeviceSession {
  if (typeof window === "undefined") {
    return { role: "admin", householdId: "household_family_hub", deviceId: "node_device" };
  }
  // Check sessionStorage first to isolate tab/window roles during testing
  const sessionRaw = sessionStorage.getItem(STORAGE_KEY_DEVICE_SESSION);
  if (sessionRaw) {
    try {
      return JSON.parse(sessionRaw);
    } catch {
      // fallback
    }
  }
  const raw = localStorage.getItem(STORAGE_KEY_DEVICE_SESSION);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      sessionStorage.setItem(STORAGE_KEY_DEVICE_SESSION, JSON.stringify(parsed));
      return parsed;
    } catch {
      // fallback
    }
  }
  const newDeviceId = "dev_" + Math.random().toString(36).substring(2, 9);
  const defaultSession: DeviceSession = {
    role: "admin",
    householdId: "household_family_hub",
    deviceId: newDeviceId,
    parentPin: "1234"
  };
  sessionStorage.setItem(STORAGE_KEY_DEVICE_SESSION, JSON.stringify(defaultSession));
  localStorage.setItem(STORAGE_KEY_DEVICE_SESSION, JSON.stringify(defaultSession));
  return defaultSession;
}

export function saveDeviceSession(session: DeviceSession) {
  if (typeof window === "undefined") return;
  // Save to both sessionStorage (tab-specific) and localStorage (device persistence)
  sessionStorage.setItem(STORAGE_KEY_DEVICE_SESSION, JSON.stringify(session));
  localStorage.setItem(STORAGE_KEY_DEVICE_SESSION, JSON.stringify(session));
  // Note: We intentionally do NOT broadcast SESSION_CHANGED to other windows,
  // allowing side-by-side Parent Hub & Kid Minion testing without window conflicts!
}

export function getStoredFirebaseConfig(): FirebaseConfig | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveFirebaseConfig(config: FirebaseConfig | null) {
  if (typeof window === "undefined") return;
  if (!config) {
    localStorage.removeItem(STORAGE_KEY_FIREBASE_CONFIG);
    firebaseApp = null;
    firestoreDb = null;
  } else {
    localStorage.setItem(STORAGE_KEY_FIREBASE_CONFIG, JSON.stringify(config));
    initFirebase(config);
  }
}

export function initFirebase(config?: FirebaseConfig | null): { app: FirebaseApp | null; db: Firestore | null } {
  const activeConfig = config || getStoredFirebaseConfig();
  if (!activeConfig || !activeConfig.apiKey || !activeConfig.projectId) {
    return { app: null, db: null };
  }

  try {
    if (!firebaseApp) {
      const existing = getApps();
      if (existing.length > 0) {
        firebaseApp = existing[0];
      } else {
        firebaseApp = initializeApp(activeConfig);
      }
      firestoreDb = getFirestore(firebaseApp);
    }
    return { app: firebaseApp, db: firestoreDb };
  } catch (err) {
    console.error("Firebase initialization failed:", err);
    return { app: null, db: null };
  }
}

// Parses string snippet from Firebase Console (JSON or JS object)
export function parseFirebaseConfigSnippet(text: string): FirebaseConfig | null {
  if (!text || !text.trim()) return null;
  const cleaned = text.trim();

  // Try direct JSON parse
  try {
    const parsed = JSON.parse(cleaned);
    if (parsed.apiKey && parsed.projectId) return parsed;
  } catch {}

  // Parse JavaScript object format e.g. apiKey: "AIza...", projectId: "my-app"
  const extract = (key: string): string => {
    const re = new RegExp(`['"]?${key}['"]?\\s*:\\s*['"\`]([^'"\`]+)['"\`]`, "i");
    const m = cleaned.match(re);
    return m ? m[1].trim() : "";
  };

  const apiKey = extract("apiKey");
  const projectId = extract("projectId");
  const authDomain = extract("authDomain") || (projectId ? `${projectId}.firebaseapp.com` : "");
  const storageBucket = extract("storageBucket");
  const messagingSenderId = extract("messagingSenderId");
  const appId = extract("appId");

  if (apiKey && projectId) {
    return {
      apiKey,
      projectId,
      authDomain,
      storageBucket,
      messagingSenderId,
      appId
    };
  }

  return null;
}

// Test Firebase connection by writing and deleting a test ping doc
export async function testFirebaseConnection(config: FirebaseConfig): Promise<{ success: boolean; error?: string }> {
  try {
    let testApp: FirebaseApp;
    const testAppName = "health_check_" + Date.now();
    testApp = initializeApp(config, testAppName);
    const db = getFirestore(testApp);

    const testDocRef = doc(db, "_health_check_", "ping");
    await setDoc(testDocRef, { timestamp: Date.now(), client: "household_hub_web" });
    await deleteDoc(testDocRef);

    await deleteApp(testApp);
    return { success: true };
  } catch (err: any) {
    console.error("Firebase connection test error:", err);
    return {
      success: false,
      error: err?.message || String(err) || "Failed to connect to Firebase. Check API key and project ID."
    };
  }
}

// Sync chore update to Firestore (called on each toggle)
export async function syncChoreToFirestore(
  householdId: string,
  dateKey: string,
  choreIndex: number,
  patch: Record<string, unknown>
): Promise<void> {
  const { db } = initFirebase();
  if (!db) return;

  try {
    const scheduleRef = doc(db, "households", householdId, "schedule", dateKey);
    await setDoc(
      scheduleRef,
      {
        [choreIndex]: patch,
        lastUpdated: Date.now()
      },
      { merge: true }
    );
  } catch (err) {
    console.warn("Firestore chore sync write failed (will use local):", err);
  }
}

// Subscribe to real-time Firestore schedule changes for cloud multi-device sync
export function subscribeToFirestoreSchedule(
  householdId: string,
  onRemoteScheduleUpdate: (dateKey: string, chores: Record<string, any>) => void
): Unsubscribe | null {
  const { db } = initFirebase();
  if (!db) return null;

  try {
    const scheduleCol = collection(db, "households", householdId, "schedule");
    return onSnapshot(
      scheduleCol,
      snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added" || change.type === "modified") {
            const dateKey = change.doc.id;
            const data = change.doc.data() || {};
            onRemoteScheduleUpdate(dateKey, data);
          }
        });
      },
      err => {
        console.warn("Firestore schedule subscription error:", err);
      }
    );
  } catch (err) {
    console.warn("Could not attach Firestore schedule listener:", err);
    return null;
  }
}

// Manage Invites (Stored in Firestore when connected, fallback to localStorage)
export async function createKidInvite(kidName: string, householdId: string): Promise<HouseholdInvite> {
  const code = generateKidInviteCode();
  const invite: HouseholdInvite = {
    code,
    householdId,
    kidName,
    createdAt: Date.now(),
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days validity
    claimed: false
  };

  // 1. ALWAYS persist to localStorage FIRST for instant local pairing (0ms)
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOCAL_INVITES);
    const invites: HouseholdInvite[] = raw ? JSON.parse(raw) : [];
    invites.push(invite);
    localStorage.setItem(STORAGE_KEY_LOCAL_INVITES, JSON.stringify(invites));
    broadcastLocalUpdate({ type: "INVITE_CREATED", invite });
  } catch (err) {
    console.error("Local invite save error:", err);
  }

  // 2. Background non-blocking sync to Firebase Firestore (with 2.5s timeout)
  const { db } = initFirebase();
  if (db) {
    const ref = doc(db, "households", householdId, "invites", code);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2500));
    Promise.race([setDoc(ref, invite), timeoutPromise]).catch(e => {
      console.warn("Firestore invite background sync skipped or timed out:", e);
    });
  }

  return invite;
}

export async function redeemKidInvite(
  code: string,
  deviceId: string
): Promise<{ success: boolean; invite?: HouseholdInvite; error?: string }> {
  const cleanCode = code.trim().toUpperCase();

  // 1. Check local invites FIRST (instant, zero network latency)
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOCAL_INVITES);
    const invites: HouseholdInvite[] = raw ? JSON.parse(raw) : [];
    const found = invites.find(i => i.code.toUpperCase() === cleanCode);
    if (found) {
      if (found.claimed) {
        return { success: false, error: "This invite code has already been claimed." };
      }
      found.claimed = true;
      found.claimedByDeviceId = deviceId;
      localStorage.setItem(STORAGE_KEY_LOCAL_INVITES, JSON.stringify(invites));
      broadcastLocalUpdate({ type: "INVITE_CLAIMED", code: cleanCode, deviceId });
      return { success: true, invite: found };
    }
  } catch (err) {
    console.warn("Local invite lookup warning:", err);
  }

  // 2. Check Firestore with a 3-second timeout if not in local cache
  const { db } = initFirebase();
  if (db) {
    try {
      const session = getStoredDeviceSession();
      const ref = doc(db, "households", session.householdId, "invites", cleanCode);
      const timeoutPromise = new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000));
      const snap = await Promise.race([getDoc(ref), timeoutPromise]);
      if (snap && snap.exists()) {
        const inv = snap.data() as HouseholdInvite;
        if (inv.claimed) {
          return { success: false, error: "This invite code has already been claimed." };
        }
        updateDoc(ref, { claimed: true, claimedByDeviceId: deviceId }).catch(() => {});
        return { success: true, invite: inv };
      }
    } catch (e) {
      console.warn("Firestore invite redeem fallback/timeout:", e);
    }
  }

  return { success: false, error: "Invalid invite code. Please check with your parents for a valid code." };
}

export function broadcastLocalUpdate(data: unknown) {
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage(data);
    } catch {
      // Ignore broadcast errors
    }
  }
}

// Inspect all locally generated or claimed invites
export function getLocalInvites(): HouseholdInvite[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOCAL_INVITES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Unpair a single kid and remove their pairing tokens/invites
export function unpairKid(kidName: string) {
  if (typeof window === "undefined") return;
  const cleanName = kidName.trim().toLowerCase();

  // 1. Remove from local invites list
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOCAL_INVITES);
    if (raw) {
      let invites: HouseholdInvite[] = JSON.parse(raw);
      invites = invites.filter(i => i.kidName.trim().toLowerCase() !== cleanName);
      localStorage.setItem(STORAGE_KEY_LOCAL_INVITES, JSON.stringify(invites));
    }
  } catch (err) {
    console.error("Failed to unpair kid locally:", err);
  }

  // 2. If the current device session belongs to this kid, reset it back to admin
  try {
    const currentSession = getStoredDeviceSession();
    if (currentSession.role === "kid" && currentSession.kidName?.trim().toLowerCase() === cleanName) {
      saveDeviceSession({
        role: "admin",
        householdId: currentSession.householdId || "household_family_hub",
        deviceId: currentSession.deviceId,
        parentPin: "1234"
      });
    }
  } catch {}

  // 3. Notify all listeners
  broadcastLocalUpdate({ type: "KID_UNPAIRED", kidName });
}

// Reset all device pairings across the household
export function resetAllDevicePairings() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY_LOCAL_INVITES);
  const session = getStoredDeviceSession();
  saveDeviceSession({
    role: "admin",
    householdId: "household_family_hub",
    deviceId: session.deviceId,
    parentPin: "1234"
  });
  broadcastLocalUpdate({ type: "ALL_DEVICES_RESET" });
}

// Reset all Firebase credentials and revert to pure local mode
export function clearAllFirebaseData() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY_FIREBASE_CONFIG);
  localStorage.removeItem(STORAGE_KEY_LOCAL_INVITES);
  if (firebaseApp) {
    try {
      deleteApp(firebaseApp);
    } catch {}
  }
  firebaseApp = null;
  firestoreDb = null;
  broadcastLocalUpdate({ type: "FIREBASE_DISCONNECTED" });
}

export function subscribeToRealtimeSync(
  onUpdate: (msg: unknown) => void
): () => void {
  const handler = (e: MessageEvent) => {
    onUpdate(e.data);
  };

  if (broadcastChannel) {
    broadcastChannel.addEventListener("message", handler);
  }

  // Also hook window storage event for cross-tab localStorage changes
  const storageHandler = (e: StorageEvent) => {
    if (e.key === "weekly_chores_month_schedule" || e.key === "weekly-chores-config") {
      onUpdate({ type: "STORAGE_SYNC", key: e.key });
    }
  };
  window.addEventListener("storage", storageHandler);

  return () => {
    if (broadcastChannel) {
      broadcastChannel.removeEventListener("message", handler);
    }
    window.removeEventListener("storage", storageHandler);
  };
}
