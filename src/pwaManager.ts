// PWA Installation & Lifecycle Manager

let deferredPrompt: any = null;
const listeners = new Set<(canInstall: boolean) => void>();

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e: any) => {
    // Prevent Chrome from automatically dismissing or auto-prompting
    e.preventDefault();
    deferredPrompt = e;
    listeners.forEach(fn => fn(true));
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    listeners.forEach(fn => fn(false));
  });
}

export function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes("android-app://")
  );
}

export function isIOS(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
}

export function isAndroid(): boolean {
  if (typeof window === "undefined") return false;
  return /android/.test(window.navigator.userAgent.toLowerCase());
}

export function subscribeInstallable(callback: (canInstall: boolean) => void): () => void {
  listeners.add(callback);
  callback(!!deferredPrompt);
  return () => {
    listeners.delete(callback);
  };
}

export async function promptPwaInstall(): Promise<"accepted" | "dismissed" | "unsupported"> {
  if (!deferredPrompt) {
    return "unsupported";
  }
  try {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    listeners.forEach(fn => fn(false));
    return outcome;
  } catch (err) {
    console.warn("PWA Prompt error:", err);
    return "unsupported";
  }
}

