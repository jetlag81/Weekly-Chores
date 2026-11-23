const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const twilioAccountSid = defineSecret("TWILIO_ACCOUNT_SID");
const twilioAuthToken = defineSecret("TWILIO_AUTH_TOKEN");
const twilioFromNumber = defineSecret("TWILIO_FROM_NUMBER");
const resendApiKey = defineSecret("RESEND_API_KEY");
const resendFromEmail = defineSecret("RESEND_FROM_EMAIL");

/**
 * Normalize North American phone numbers to E.164 (e.g. (204) 555-1234 -> +12045551234).
 */
function normalizeE164(raw) {
  const digits = String(raw || "").replace(/[^\d+]/g, "");
  if (!digits) return "";
  if (digits.startsWith("+")) return digits;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

async function sendTwilioSms({ sid, token, from, to, body }) {
  const auth = Buffer.from(`${sid}:${token}`).toString("base64");
  const form = new URLSearchParams({ From: from, To: to, Body: body });
  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(sid)}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: form.toString()
    }
  );
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Twilio ${res.status}: ${errText.slice(0, 180)}`);
  }
  return res.json();
}

async function sendResendEmail({ apiKey, from, to, subject, text, html }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ from, to: [to], subject, text, html })
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend ${res.status}: ${errText.slice(0, 180)}`);
  }
  return res.json();
}

/**
 * Cross-platform family invite dispatcher.
 * Sends SMS via Twilio (when phoneNumber + Twilio secrets are set)
 * and/or Email via Resend (when email + Resend secrets are set).
 */
exports.sendFamilyInvites = onRequest(
  {
    cors: true,
    region: "us-central1",
    secrets: [twilioAccountSid, twilioAuthToken, twilioFromNumber, resendApiKey, resendFromEmail]
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ ok: false, error: "Method Not Allowed" });
      return;
    }

    const { householdName, adminName, hubBaseUrl, recipients } = req.body || {};
    if (!Array.isArray(recipients) || recipients.length === 0) {
      res.status(400).json({ ok: false, error: "No recipients provided" });
      return;
    }

    const sid = twilioAccountSid.value();
    const token = twilioAuthToken.value();
    const fromPhone = twilioFromNumber.value();
    const emailKey = resendApiKey.value();
    const fromEmail = resendFromEmail.value() || "Household Hub <onboarding@resend.dev>";

    const safeHub = String(hubBaseUrl || "https://family-chores-hub.web.app").replace(/\/+$/, "");
    const safeHouse = String(householdName || "Household Hub");
    const safeAdmin = String(adminName || "Your family");

    const results = [];

    for (const r of recipients.slice(0, 15)) {
      const itemResult = {
        id: r.id,
        firstName: r.firstName,
        smsSent: false,
        emailSent: false,
        errors: []
      };

      const joinUrl =
        r.role === "Parent"
          ? `${safeHub}/?mode=parent`
          : `${safeHub}/?kid=${encodeURIComponent(r.firstName || "")}&code=${encodeURIComponent(r.inviteCode || "")}`;

      const textBody = `${safeAdmin} invited you to join ${safeHouse}! Open ${joinUrl} or enter invite code ${r.inviteCode}.`;

      // 1. Send SMS via Twilio if phoneNumber & Twilio secrets are configured
      const toPhone = normalizeE164(r.phoneNumber);
      if (toPhone && sid && token && fromPhone) {
        try {
          await sendTwilioSms({ sid, token, from: fromPhone, to: toPhone, body: textBody });
          itemResult.smsSent = true;
        } catch (err) {
          itemResult.errors.push(String(err.message || err));
        }
      }

      // 2. Send Email via Resend if email & Resend key are configured
      const toEmail = String(r.email || "").trim();
      if (toEmail && emailKey) {
        try {
          await sendResendEmail({
            apiKey: emailKey,
            from: fromEmail,
            to: toEmail,
            subject: `You're invited to ${safeHouse}`,
            text: `Hi ${r.firstName || "there"},\n\n${textBody}`,
            html: `
              <div style="font-family:system-ui,-apple-system,sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#0f172a;color:#f8fafc;border-radius:16px;">
                <h2 style="margin:0 0 12px;color:#38bdf8;">Join ${safeHouse}</h2>
                <p style="margin:0 0 16px;color:#cbd5e1;">Hi ${r.firstName || "there"}, ${safeAdmin} invited you to join your family's Weekly Chores &amp; Household Hub.</p>
                <p style="margin:0 0 16px;"><strong>Invite Code:</strong> <code style="background:#1e293b;padding:4px 8px;border-radius:6px;color:#a5b4fc;font-size:16px;">${r.inviteCode}</code></p>
                <a href="${joinUrl}" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 20px;border-radius:10px;">Open Household Hub</a>
              </div>
            `
          });
          itemResult.emailSent = true;
        } catch (err) {
          itemResult.errors.push(String(err.message || err));
        }
      }

      results.push(itemResult);
    }

    res.status(200).json({ ok: true, results });
  }
);
