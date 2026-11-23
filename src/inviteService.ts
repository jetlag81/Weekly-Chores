// Cross-platform Family Invite Service (calls Firebase Cloud Function -> Twilio SMS / Resend Email)

export interface InviteRecipientPayload {
  id: string;
  firstName: string;
  role: "Parent" | "Kid";
  inviteCode: string;
  phoneNumber?: string;
  email?: string;
}

export interface InviteDeliveryItemResult {
  id: string;
  firstName: string;
  smsSent: boolean;
  emailSent: boolean;
  errors?: string[];
}

export interface InviteBatchResponse {
  configured: boolean;
  ok: boolean;
  smsCount: number;
  emailCount: number;
  results: InviteDeliveryItemResult[];
  error?: string;
}

export function getInviteFunctionUrl(): string {
  try {
    return String((import.meta as any).env?.VITE_INVITE_FUNCTION_URL || "").trim();
  } catch {
    return "";
  }
}

export function getPublicHubBaseUrl(): string {
  try {
    const envUrl = String((import.meta as any).env?.VITE_PUBLIC_HUB_URL || "").trim();
    if (envUrl) return envUrl.replace(/\/+$/, "");
  } catch {
    // ignore
  }
  if (
    typeof window !== "undefined" &&
    window.location.origin &&
    !window.location.origin.startsWith("file:") &&
    !window.location.origin.includes("localhost")
  ) {
    return window.location.origin.replace(/\/+$/, "");
  }
  return "https://family-chores-hub.web.app";
}

export async function sendFamilyInvitesBatch(params: {
  householdName: string;
  adminName: string;
  recipients: InviteRecipientPayload[];
}): Promise<InviteBatchResponse> {
  const endpoint = getInviteFunctionUrl();
  const eligible = params.recipients.filter(
    r => Boolean((r.phoneNumber || "").trim() || (r.email || "").trim())
  );

  if (!endpoint) {
    return {
      configured: false,
      ok: false,
      smsCount: 0,
      emailCount: 0,
      results: []
    };
  }

  if (eligible.length === 0) {
    return {
      configured: true,
      ok: true,
      smsCount: 0,
      emailCount: 0,
      results: []
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        householdName: params.householdName,
        adminName: params.adminName,
        hubBaseUrl: getPublicHubBaseUrl(),
        recipients: eligible
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.ok) {
      return {
        configured: true,
        ok: false,
        smsCount: 0,
        emailCount: 0,
        results: [],
        error: data?.error || `HTTP ${res.status}`
      };
    }

    const results: InviteDeliveryItemResult[] = Array.isArray(data.results) ? data.results : [];
    const smsCount = results.filter(r => r.smsSent).length;
    const emailCount = results.filter(r => r.emailSent).length;
    return {
      configured: true,
      ok: true,
      smsCount,
      emailCount,
      results
    };
  } catch (err: any) {
    return {
      configured: true,
      ok: false,
      smsCount: 0,
      emailCount: 0,
      results: [],
      error: String(err?.message || err)
    };
  }
}
