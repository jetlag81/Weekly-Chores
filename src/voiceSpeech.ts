// Voice Narration & Speech Synthesis for Household Chores Hub
// Utilizes the browser's native Web Speech API (window.speechSynthesis)

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

let activeUtterance: SpeechSynthesisUtterance | null = null;
const listeners = new Set<(isSpeaking: boolean) => void>();

function notifyListeners(isSpeaking: boolean) {
  listeners.forEach(fn => {
    try {
      fn(isSpeaking);
    } catch {
      // Ignore listener error
    }
  });
}

export function subscribeSpeechState(callback: (isSpeaking: boolean) => void): () => void {
  listeners.add(callback);
  callback(isSpeaking());
  return () => {
    listeners.delete(callback);
  };
}

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function isSpeaking(): boolean {
  if (!isSpeechSupported()) return false;
  return window.speechSynthesis.speaking;
}

export function stopSpeaking(): void {
  if (!isSpeechSupported()) return;
  try {
    window.speechSynthesis.cancel();
    activeUtterance = null;
    notifyListeners(false);
  } catch (err) {
    console.warn("Error stopping speech:", err);
  }
}

function cleanTextForSpeech(text: string): string {
  if (!text) return "";
  return text
    .replace(/\r?\n+/g, ", ")
    .replace(/\s*•\s*/g, ", ")
    .replace(/SG:/gi, "Sydney:")
    .replace(/CV:/gi, "Cadence:")
    .replace(/MV:/gi, "Mason:")
    .replace(/KV:/gi, "Koda:")
    .replace(/KG:/gi, "Keyanna:")
    .replace(/&/g, " and ")
    .replace(/[\(\)\[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getBestVoice(): SpeechSynthesisVoice | null {
  if (!isSpeechSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Preferred friendly English voices across Edge, Chrome, Safari, and Windows
  const preferredNames = [
    "Microsoft Jenny",
    "Microsoft Aria",
    "Microsoft Guy",
    "Google US English",
    "Google UK English Female",
    "Samantha",
    "Karen",
    "Zira"
  ];

  for (const name of preferredNames) {
    const match = voices.find(v => v.name.includes(name) && v.lang.startsWith("en"));
    if (match) return match;
  }

  // Fallback to any English voice
  const anyEnglish = voices.find(v => v.lang.startsWith("en"));
  return anyEnglish || voices[0] || null;
}

export function speakText(rawText: string, options: SpeechOptions = {}): void {
  if (!isSpeechSupported()) {
    console.warn("Speech synthesis is not supported in this browser.");
    return;
  }

  const text = cleanTextForSpeech(rawText);
  if (!text) return;

  // Stop any currently ongoing speech
  stopSpeaking();

  const utterance = new SpeechSynthesisUtterance(text);
  activeUtterance = utterance;

  utterance.rate = options.rate ?? 0.95; // Slightly relaxed pace for kids and clarity
  utterance.pitch = options.pitch ?? 1.05; // Slightly cheerful, friendly pitch
  utterance.volume = options.volume ?? 1.0;

  const voice = getBestVoice();
  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => {
    notifyListeners(true);
    options.onStart?.();
  };

  utterance.onend = () => {
    activeUtterance = null;
    notifyListeners(false);
    options.onEnd?.();
  };

  utterance.onerror = (err) => {
    activeUtterance = null;
    notifyListeners(false);
    options.onError?.(err);
  };

  // Safari/Chrome voices sometimes load asynchronously
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      const v = getBestVoice();
      if (v) utterance.voice = v;
      window.speechSynthesis.speak(utterance);
    };
  } else {
    window.speechSynthesis.speak(utterance);
  }
}

// Pre-packaged kid routine narrations
export function speakKidDailySummary(
  kidName: string,
  dateLabel: string,
  chores: Array<{ task: string; done: boolean; notes?: string }>
): void {
  if (isSpeaking()) {
    stopSpeaking();
    return;
  }

  if (chores.length === 0) {
    speakText(`Hi ${kidName}! You have no chores scheduled for ${dateLabel}. Enjoy your day!`);
    return;
  }

  const pendingChores = chores.filter(c => !c.done);
  const completedChores = chores.filter(c => c.done);

  let speech = `Hey ${kidName}! Here are your chores for ${dateLabel}. `;

  if (pendingChores.length === 0) {
    speech += `Incredible work! You have finished all ${chores.length} of your daily chores today! High five!`;
  } else {
    speech += `You have ${pendingChores.length} ${pendingChores.length === 1 ? "chore" : "chores"} left to do. `;
    pendingChores.forEach((c, idx) => {
      const taskClean = cleanTextForSpeech(c.task);
      speech += `Number ${idx + 1}: ${taskClean}. `;
      if (c.notes && c.notes.trim()) {
        speech += `Remember: ${cleanTextForSpeech(c.notes)}. `;
      }
    });

    if (completedChores.length > 0) {
      speech += `You have already completed ${completedChores.length} ${completedChores.length === 1 ? "chore" : "chores"}. Keep up the great work!`;
    }
  }

  speakText(speech);
}

export function speakSingleChore(task: string, notes?: string, isDone?: boolean): void {
  if (isSpeaking()) {
    stopSpeaking();
    return;
  }

  const cleanTask = cleanTextForSpeech(task);
  let text = `${cleanTask}. `;
  if (notes && notes.trim()) {
    text += `Instructions: ${cleanTextForSpeech(notes)}. `;
  }
  if (isDone) {
    text += "Status: Completed!";
  } else {
    text += "Status: Still needs to be done.";
  }

  speakText(text);
}

export function speakChoreCelebration(kidName: string, task: string): void {
  const cleanTask = cleanTextForSpeech(task);
  const celebrations = [
    `Awesome job, ${kidName}! ${cleanTask} is finished!`,
    `Way to go, ${kidName}! You knocked out ${cleanTask}!`,
    `Great work, ${kidName}! Checked off ${cleanTask}!`,
    `High five, ${kidName}! ${cleanTask} is complete!`
  ];
  const choice = celebrations[Math.floor(Math.random() * celebrations.length)];
  speakText(choice, { rate: 1.05, pitch: 1.1 });
}

export function speakParentHouseholdSummary(
  activeWeek: string,
  choreCount: number,
  completedCount: number,
  topPerformerName?: string
): void {
  if (isSpeaking()) {
    stopSpeaking();
    return;
  }

  let text = `Welcome to the Household Chores Hub! For the week of ${activeWeek}, there are ${choreCount} scheduled chores across the family. `;
  if (completedCount > 0) {
    text += `${completedCount} chores have been completed so far. `;
  }
  if (topPerformerName) {
    text += `Current leading incentive performer is ${topPerformerName}. `;
  }
  text += "All chores and device pairing connections are active.";

  speakText(text, { rate: 0.98, pitch: 1.0 });
}

