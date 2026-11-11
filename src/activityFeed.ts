// Real-Time Household Activity Feed & Audio Chime Service
// Captures and broadcasts family chore events with persistent local storage and multi-tone ambient chimes.

export interface HouseholdActivityEvent {
  id: string;
  timestamp: number;
  kidName: string;
  taskTitle: string;
  action: "completed" | "uncompleted" | "signoff";
  dateKey?: string;
  deviceId?: string;
}

const STORAGE_KEY_ACTIVITY_LOG = "weekly_chores_activity_log_v1";
const STORAGE_KEY_CHIME_ENABLED = "weekly_chores_chime_enabled_v1";

// 1. Storage Helpers
export function getStoredActivityLog(): HouseholdActivityEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACTIVITY_LOG);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveActivityEvent(event: HouseholdActivityEvent): HouseholdActivityEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getStoredActivityLog();
    // Prepend new event and keep latest 100 entries
    const updated = [event, ...current.filter(e => e.id !== event.id)].slice(0, 100);
    localStorage.setItem(STORAGE_KEY_ACTIVITY_LOG, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function clearActivityLog(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY_ACTIVITY_LOG);
  } catch {}
}

// 2. Chime Sound Setting
export function isChimeSoundEnabled(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const val = localStorage.getItem(STORAGE_KEY_CHIME_ENABLED);
    return val !== "false"; // Default to enabled
  } catch {
    return true;
  }
}

export function setChimeSoundEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_CHIME_ENABLED, String(enabled));
  } catch {}
}

// 3. Multi-Tone Web Audio Chime for Remote Activity Alerts
export function playHouseholdRemoteChime(): void {
  if (!isChimeSoundEnabled()) return;
  if (typeof window === "undefined") return;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // Sweet 3-tone ambient household chime (E5 -> G#5 -> B5) - warm and gentle
    const notes = [
      { freq: 659.25, time: now, duration: 0.35, gain: 0.12 },        // E5
      { freq: 830.61, time: now + 0.11, duration: 0.4, gain: 0.14 },  // G#5
      { freq: 987.77, time: now + 0.22, duration: 0.6, gain: 0.16 }   // B5
    ];

    notes.forEach(note => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(note.freq, note.time);

      gain.gain.setValueAtTime(0.001, note.time);
      gain.gain.linearRampToValueAtTime(note.gain, note.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, note.time + note.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(note.time);
      osc.stop(note.time + note.duration);
    });
  } catch {
    // Audio context may be restricted before user gesture
  }
}

// 4. Relative Timestamp Formatter
export function formatRelativeTime(timestamp: number): string {
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  if (diffSec < 5) return "Just now";
  if (diffSec < 60) return `${diffSec}s ago`;

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour}h ago`;

  const diffDay = Math.floor(diffHour / 24);
  if (diffDay === 1) return "Yesterday";
  if (diffDay < 7) return `${diffDay}d ago`;

  return new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

