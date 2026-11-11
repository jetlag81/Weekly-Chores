// Weekly Allowance Ledger & History Archive Service
// Manages finalized weekly allowance payouts, payment fulfillment tracking (Cash, Savings, Bank),
// and CSV/Printable export for household family bookkeeping.

export interface KidPayoutDetail {
  kidName: string;
  completedChores: number;
  scheduledChores: number;
  completionPct: number;
  baseAllowance: number;
  bonusDelta: number;
  finalAmount: number;
  roomApproved: boolean;
  paid: boolean;
  paidAt?: number;
  paymentMethod?: "Cash" | "Savings" | "Bank" | "Venmo" | "Gift Card" | "Other";
}

export interface AllowancePayoutRecord {
  id: string; // e.g. "payout_2026-10-12"
  activeSyncWeek: string;
  weekLabel: string;
  timestamp: number;
  signedBy: string; // "Thom & Meghan (TV / MV)"
  parentNotes?: string;
  totalAmount: number;
  items: KidPayoutDetail[];
}

const STORAGE_KEY_ALLOWANCE_LEDGER = "weekly_chores_allowance_ledger_v1";

// 1. Storage Helpers
export function getStoredAllowanceLedger(): AllowancePayoutRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ALLOWANCE_LEDGER);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveAllowancePayout(record: AllowancePayoutRecord): AllowancePayoutRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getStoredAllowanceLedger();
    // Replace if week already exists, or prepend new
    const filtered = current.filter(r => r.id !== record.id && r.activeSyncWeek !== record.activeSyncWeek);
    const updated = [record, ...filtered];
    localStorage.setItem(STORAGE_KEY_ALLOWANCE_LEDGER, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function updateKidPayoutPayment(
  recordId: string,
  kidName: string,
  paid: boolean,
  paymentMethod: "Cash" | "Savings" | "Bank" | "Venmo" | "Other" = "Cash"
): AllowancePayoutRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getStoredAllowanceLedger();
    const updated = current.map(rec => {
      if (rec.id !== recordId) return rec;
      const nextItems = rec.items.map(item => {
        if (item.kidName.toLowerCase() !== kidName.toLowerCase()) return item;
        return {
          ...item,
          paid,
          paidAt: paid ? Date.now() : undefined,
          paymentMethod: paid ? paymentMethod : undefined
        };
      });
      return { ...rec, items: nextItems };
    });
    localStorage.setItem(STORAGE_KEY_ALLOWANCE_LEDGER, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function deleteAllowanceRecord(recordId: string): AllowancePayoutRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getStoredAllowanceLedger();
    const updated = current.filter(r => r.id !== recordId);
    localStorage.setItem(STORAGE_KEY_ALLOWANCE_LEDGER, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// 2. CSV Generation & Export
export function generateAllowanceCsv(records: AllowancePayoutRecord[]): string {
  const headers = [
    "Week Date Range",
    "Active Week Key",
    "Child Name",
    "Chores Completed",
    "Chores Scheduled",
    "Completion %",
    "Base Allowance ($)",
    "Bonus / Adj ($)",
    "Total Payout ($)",
    "Room Inspected",
    "Payment Status",
    "Payment Method",
    "Date Paid",
    "Signed By",
    "Parent Notes"
  ];

  const rows: string[] = [headers.join(",")];

  records.forEach(rec => {
    rec.items.forEach(item => {
      const escape = (val: string | number | undefined | null) => {
        const s = String(val ?? "");
        return `"${s.replace(/"/g, '""')}"`;
      };

      const paidDateStr = item.paidAt ? new Date(item.paidAt).toLocaleDateString() : "";

      rows.push(
        [
          escape(rec.weekLabel),
          escape(rec.activeSyncWeek),
          escape(item.kidName),
          item.completedChores,
          item.scheduledChores,
          `${item.completionPct}%`,
          item.baseAllowance.toFixed(2),
          item.bonusDelta.toFixed(2),
          item.finalAmount.toFixed(2),
          item.roomApproved ? "Yes" : "No",
          item.paid ? "Paid" : "Pending",
          escape(item.paymentMethod || ""),
          escape(paidDateStr),
          escape(rec.signedBy),
          escape(rec.parentNotes || "")
        ].join(",")
      );
    });
  });

  return rows.join("\r\n");
}

export function downloadAllowanceCsv(records?: AllowancePayoutRecord[]): void {
  if (typeof window === "undefined") return;
  const data = records || getStoredAllowanceLedger();
  const csvContent = generateAllowanceCsv(data);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `family_allowance_ledger_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

