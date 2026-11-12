// Household Allowance Ledger & History Archive Modal
// Displays cumulative and historical weekly chore earnings, payment fulfillment tracking (Cash, Bank, Savings, Venmo),
// and CSV/Printable export for household family bookkeeping.

import React, { useState } from "react";
import {
  DollarSign,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Printer,
  Trash2,
  X,
  CreditCard,
  Wallet,
  Sparkles,
  ChevronDown,
  ChevronUp,
  User,
  ShieldCheck,
  FileSpreadsheet
} from "lucide-react";
import {
  type AllowancePayoutRecord,
  getStoredAllowanceLedger,
  updateKidPayoutPayment,
  deleteAllowanceRecord,
  downloadAllowanceCsv
} from "./allowanceLedger";

interface AllowanceLedgerModalProps {
  isOpen: boolean;
  onClose: () => void;
  familyMembers?: Array<{ name: string; color?: string; age?: number }>;
  onOpenRewardModal?: (kidName: string) => void;
}

export const AllowanceLedgerModal: React.FC<AllowanceLedgerModalProps> = ({
  isOpen,
  onClose,
  familyMembers = [],
  onOpenRewardModal
}) => {
  const [records, setRecords] = useState<AllowancePayoutRecord[]>(() => getStoredAllowanceLedger());
  const [expandedWeekId, setExpandedWeekId] = useState<string | null>(() => {
    const list = getStoredAllowanceLedger();
    return list.length > 0 ? list[0].id : null;
  });

  if (!isOpen) return null;

  // Calculate Cumulative Summary Totals
  let totalAllTime = 0;
  let totalPaid = 0;
  let totalPending = 0;

  records.forEach(rec => {
    rec.items.forEach(item => {
      totalAllTime += item.finalAmount;
      if (item.paid) {
        totalPaid += item.finalAmount;
      } else {
        totalPending += item.finalAmount;
      }
    });
  });

  const handleTogglePayment = (
    recordId: string,
    kidName: string,
    currentPaid: boolean,
    method: "Cash" | "Savings" | "Bank" | "Venmo" | "Other" = "Cash"
  ) => {
    const updated = updateKidPayoutPayment(recordId, kidName, !currentPaid, method);
    setRecords(updated);
  };

  const handleDeleteRecord = (recordId: string) => {
    if (confirm("Are you sure you want to remove this week's allowance record from history?")) {
      const updated = deleteAllowanceRecord(recordId);
      setRecords(updated);
    }
  };

  const handlePrintSlips = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto modal-safe-area">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-full flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-inner">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                  Family Bookkeeping
                </span>
                <span className="text-xs text-emerald-100 font-medium hidden sm:inline">
                  Parents Thom & Meghan
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black mt-0.5 leading-tight">
                Weekly Allowance Ledger & History
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => downloadAllowanceCsv(records)}
              className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Download Allowance History as CSV Spreadsheet"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-3 gap-2.5 p-4 bg-slate-50 border-b border-slate-200 shrink-0 text-xs">
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Earned</div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">${totalAllTime}.00</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{records.length} weeks archived</div>
          </div>

          <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 shadow-2xs">
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Paid Out</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">${totalPaid}.00</div>
            <div className="text-[10px] text-emerald-600 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Fulfilled</span>
            </div>
          </div>

          <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 shadow-2xs">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Pending Payout</div>
            <div className="text-xl sm:text-2xl font-black text-amber-800 mt-1">${totalPending}.00</div>
            <div className="text-[10px] text-amber-700 mt-0.5 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Awaiting payment</span>
            </div>
          </div>
        </div>

        {/* Historical Weeks Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-800 flex-1">
          {records.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Wallet className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-800">No allowance history archived yet</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  When you conduct Sunday inspection and tap <strong>Approve & Sign (✓ TV / MG)</strong>, the finalized allowance payouts are automatically logged and tracked here.
                </p>
              </div>
            </div>
          ) : (
            records.map(rec => {
              const isExpanded = expandedWeekId === rec.id;
              const weekPaidCount = rec.items.filter(i => i.paid).length;
              const isWeekFullyPaid = weekPaidCount === rec.items.length;

              return (
                <div
                  key={rec.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-white transition hover:border-slate-300"
                >
                  {/* Week Card Header */}
                  <div
                    onClick={() => setExpandedWeekId(isExpanded ? null : rec.id)}
                    className="p-3.5 sm:px-4 bg-slate-50/80 hover:bg-slate-100/80 transition flex items-center justify-between cursor-pointer border-b border-slate-100 select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                        <Calendar className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-sm text-slate-900">{rec.weekLabel}</h4>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                              isWeekFullyPaid
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {isWeekFullyPaid ? "All Paid ✓" : `${weekPaidCount} / ${rec.items.length} Paid`}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Signed by {rec.signedBy} • Total:{" "}
                          <strong className="text-slate-800">${rec.totalAmount}.00</strong>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          handleDeleteRecord(rec.id);
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition rounded-lg hover:bg-slate-200 cursor-pointer"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Kid Payout Items */}
                  {isExpanded && (
                    <div className="p-3.5 sm:p-4 space-y-3 bg-white">
                      {rec.parentNotes && (
                        <div className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                          <strong>Parent Notes:</strong> {rec.parentNotes}
                        </div>
                      )}

                      <div className="space-y-2">
                        {rec.items.map(item => {
                          const mem = familyMembers.find(
                            m => m.name.toLowerCase() === item.kidName.toLowerCase()
                          );

                          return (
                            <div
                              key={item.kidName}
                              className={`p-3 rounded-xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
                                item.paid
                                  ? "bg-slate-50/80 border-slate-200"
                                  : "bg-white border-amber-200 shadow-2xs"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center shadow-xs"
                                  style={{
                                    backgroundColor: mem?.color ? `${mem.color}20` : "#EEF2FF",
                                    color: mem?.color || "#4F46E5"
                                  }}
                                >
                                  {item.kidName.slice(0, 2).toUpperCase()}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-slate-900">{item.kidName}</span>
                                    <span className="text-[10px] text-slate-400">
                                      ({item.completedChores} / {item.scheduledChores} chores • {item.completionPct}%)
                                    </span>
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    Base: ${item.baseAllowance}{" "}
                                    {item.bonusDelta !== 0 && (
                                      <span className="font-semibold text-slate-700">
                                        ({item.bonusDelta >= 0 ? `+$${item.bonusDelta}` : `-$${Math.abs(item.bonusDelta)}`})
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Amount & Paid Toggle */}
                              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                                <div className="text-base font-black text-emerald-700">
                                  ${item.finalAmount}.00
                                </div>

                                {item.paid ? (
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                      <CheckCircle2 className="w-3 h-3" />
                                      <span>Paid ({item.paymentMethod || "Cash"})</span>
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => handleTogglePayment(rec.id, item.kidName, true)}
                                      className="text-[10px] font-semibold text-slate-400 hover:text-slate-700 hover:underline cursor-pointer"
                                    >
                                      Undo
                                    </button>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
                                    {onOpenRewardModal && (
                                      <button
                                        type="button"
                                        onClick={() => onOpenRewardModal(item.kidName)}
                                        className="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[11px] rounded-lg shadow-2xs transition cursor-pointer flex items-center gap-1"
                                        title={`Open Digital Gift Card / Reward Hub for ${item.kidName}`}
                                      >
                                        <span>🎁</span>
                                        <span>Gift Card</span>
                                      </button>
                                    )}

                                    <select
                                      defaultValue="Cash"
                                      id={`method-${rec.id}-${item.kidName}`}
                                      className="text-[11px] py-1 px-1.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-semibold focus:outline-none cursor-pointer"
                                    >
                                      <option value="Cash">Cash</option>
                                      <option value="Savings">Savings</option>
                                      <option value="Bank">Bank</option>
                                      <option value="Venmo">Venmo</option>
                                      <option value="Gift Card">Gift Card 🎁</option>
                                    </select>

                                    <button
                                      type="button"
                                      onClick={() => {
                                        const select = document.getElementById(
                                          `method-${rec.id}-${item.kidName}`
                                        ) as HTMLSelectElement | null;
                                        const chosen = (select?.value || "Cash") as any;
                                        handleTogglePayment(rec.id, item.kidName, false, chosen);
                                      }}
                                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1"
                                    >
                                      <Wallet className="w-3 h-3" />
                                      <span>Mark Paid</span>
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            {records.length} weekly records archived
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

