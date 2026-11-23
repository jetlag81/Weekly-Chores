// Unified Cross-Platform Push Notification Service
// Supports Native Android (Capacitor LocalPushPlugin + POST_NOTIFICATIONS)
// and Web / PWA (ServiceWorkerRegistration.showNotification + Notification API)

import { Capacitor, registerPlugin } from "@capacitor/core";

export type PushPermissionStatus = "granted" | "denied" | "prompt" | "unsupported";

interface LocalPushPluginInterface {
  checkPermission(): Promise<{ status: PushPermissionStatus }>;
  requestPermission(): Promise<{ status: PushPermissionStatus }>;
  notify(options: { title: string; body: string; tag?: string }): Promise<{ sent: boolean }>;
}

const LocalPush = registerPlugin<LocalPushPluginInterface>("LocalPush");
const STORAGE_KEY_PUSH_ENABLED = "weekly_chores_push_enabled_v1";

export function isPushPreferenceEnabled(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY_PUSH_ENABLED) !== "false";
  } catch {
    return true;
  }
}

export async function getPushPermissionStatus(): Promise<PushPermissionStatus> {
  if (typeof window === "undefined") return "unsupported";
  if (Capacitor.isNativePlatform()) {
    try {
      const res = await LocalPush.checkPermission();
      return res?.status || "prompt";
    } catch {
      return "prompt";
    }
  }
  if (!("Notification" in window)) return "unsupported";
  const perm = Notification.permission;
  if (perm === "granted") return "granted";
  if (perm === "denied") return "denied";
  return "prompt";
}

export async function requestPushNotifications(): Promise<PushPermissionStatus> {
  if (typeof window === "undefined") return "unsupported";

  if (Capacitor.isNativePlatform()) {
    try {
      const res = await LocalPush.requestPermission();
      const status = res?.status || "denied";
      if (status === "granted") {
        try {
          localStorage.setItem(STORAGE_KEY_PUSH_ENABLED, "true");
        } catch {}
        await sendDeviceNotification({
          title: "Household Hub",
          body: "Push notifications are active! You'll get chore alerts, praises & nudges here.",
          tag: "push_enabled"
        });
      }
      return status;
    } catch (err) {
      console.warn("Native push permission request failed:", err);
      return "denied";
    }
  }

  if (!("Notification" in window)) return "unsupported";

  try {
    const perm = await Notification.requestPermission();
    const status: PushPermissionStatus =
      perm === "granted" ? "granted" : perm === "denied" ? "denied" : "prompt";
    if (status === "granted") {
      try {
        localStorage.setItem(STORAGE_KEY_PUSH_ENABLED, "true");
      } catch {}
      await sendDeviceNotification({
        title: "Household Hub",
        body: "Push notifications are active! You'll get chore alerts, praises & nudges here.",
        tag: "push_enabled"
      });
    }
    return status;
  } catch (err) {
    console.warn("Web Notification permission request failed:", err);
    return "denied";
  }
}

export async function sendDeviceNotification(options: {
  title: string;
  body: string;
  tag?: string;
}): Promise<boolean> {
  if (typeof window === "undefined" || !isPushPreferenceEnabled()) return false;

  const title = options.title || "Household Hub";
  const body = options.body || "";
  const tag = options.tag || "household_hub";

  if (Capacitor.isNativePlatform()) {
    try {
      const res = await LocalPush.notify({ title, body, tag });
      return Boolean(res?.sent);
    } catch {
      return false;
    }
  }

  if (!("Notification" in window) || Notification.permission !== "granted") {
    return false;
  }

  try {
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && typeof reg.showNotification === "function") {
        await reg.showNotification(title, {
          body,
          icon: "/icon.svg",
          badge: "/icon.svg",
          tag
        });
        return true;
      }
    }
  } catch {
    // Fallback to window Notification constructor
  }

  try {
    new Notification(title, {
      body,
      icon: "/icon.svg",
      tag
    });
    return true;
  } catch {
    return false;
  }
}
