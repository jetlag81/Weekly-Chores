import React, { useState, useEffect } from "react";
import {
  X,
  Plus,
  Pencil,
  Trash2,
  Check,
  Users,
  ClipboardList,
  PawPrint,
  UserCircle
} from "lucide-react";
import { getUserProfile, getPreferredName, calculateAge, getEffectiveAgeTier } from "./userProfiles";

export type ManageTab = "chores" | "members" | "pets";

const CATEGORIES = [
  { id: "Household", label: "🏠 Household" },
  { id: "Kitchen", label: "🍽️ Kitchen" },
  { id: "Pets", label: "🐾 Pets" },
  { id: "Bedrooms", label: "🛏️ Bedrooms" },
  { id: "Bathrooms", label: "🛁 Bathrooms" },
  { id: "Laundry", label: "🧺 Laundry" },
  { id: "Outdoor", label: "🌿 Outdoor" },
  { id: "Other", label: "✨ Other" }
];

const PET_SPECIES = ["Dog", "Cat", "Bird", "Fish", "Small Pet", "Other"];

const SPECIES_EMOJI: Record<string, string> = {
  Dog: "🐕",
  Cat: "🐈",
  Bird: "🐦",
  Fish: "🐟",
  "Small Pet": "🐾",
  Other: "🐾"
};

export interface HouseholdManageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: ManageTab;
  hubMasterChores: Array<any>;
  familyMembers: Array<any>;
  rosterPets: Array<any>;
  onAddChore?: (
    choreName: string,
    details: {
      frequency: "daily" | "weekly" | "biweekly";
      category: string;
      defaultWho: string;
      notes: string;
      dayOfWeek?: number;
    }
  ) => void;
  onEditChore?: (
    choreIndex: number,
    editData: {
      task: string;
      oldTask: string;
      category: string;
      frequency: string;
      targetDay: string;
      rotationGroup: string;
      notes: string;
    }
  ) => void;
  onDeleteChore?: (choreIndex: number, taskTitle: string) => void;
  onAddMember?: (data: {
    firstName: string;
    lastName?: string;
    nickname?: string;
    birthday?: string;
    email?: string;
    role: "Parent" | "Kid";
    residency: string;
    active: boolean;
  }) => void;
  onUpdateMember?: (
    rowIndex_: number,
    patch: { name?: string; role?: string; residency?: string; active?: boolean }
  ) => void;
  onDeleteMember?: (rowIndex_: number, name: string) => void;
  onOpenMemberProfile?: (memberName: string) => void;
  onAddPet?: (name: string, type: string, routine: string, care: string, active: boolean) => void;
  onUpdatePet?: (
    rowIndex_: number,
    patch: { name?: string; type?: string; routine?: string; care?: string; active?: boolean }
  ) => void;
  onDeletePet?: (rowIndex_: number, petName: string) => void;
}

export const HouseholdManageModal: React.FC<HouseholdManageModalProps> = ({
  isOpen,
  onClose,
  initialTab = "chores",
  hubMasterChores = [],
  familyMembers = [],
  rosterPets = [],
  onAddChore,
  onEditChore,
  onDeleteChore,
  onAddMember,
  onUpdateMember,
  onDeleteMember,
  onOpenMemberProfile,
  onAddPet,
  onUpdatePet,
  onDeletePet
}) => {
  const [activeTab, setActiveTab] = useState<ManageTab>(initialTab);

  // Add Chore state
  const [showAddChoreForm, setShowAddChoreForm] = useState(false);
  const [newChoreTask, setNewChoreTask] = useState("");
  const [newChoreCategory, setNewChoreCategory] = useState("Household");
  const [newChoreFreq, setNewChoreFreq] = useState<"daily" | "weekly" | "biweekly">("daily");
  const [newChoreGroup, setNewChoreGroup] = useState("All Non-Casual");
  const [newChoreNotes, setNewChoreNotes] = useState("");

  // Edit Chore state
  const [editingChoreKey, setEditingChoreKey] = useState<string | null>(null);
  const [choreDraft, setChoreDraft] = useState<{
    index_: number;
    oldTask: string;
    task: string;
    category: string;
    frequency: string;
    targetDay: string;
    rotationGroup: string;
    notes: string;
  } | null>(null);

  // Add Member state
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [newMemberFirst, setNewMemberFirst] = useState("");
  const [newMemberLast, setNewMemberLast] = useState("");
  const [newMemberNickname, setNewMemberNickname] = useState("");
  const [newMemberBirthday, setNewMemberBirthday] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState<"Parent" | "Kid">("Kid");
  const [newMemberResidency, setNewMemberResidency] = useState("Full-Time");

  // Edit Member state
  const [editingMemberRow, setEditingMemberRow] = useState<number | null>(null);
  const [memberDraft, setMemberDraft] = useState<{
    name: string;
    role: string;
    residency: string;
    active: boolean;
  } | null>(null);

  // Add Pet state
  const [showAddPetForm, setShowAddPetForm] = useState(false);
  const [newPetName, setNewPetName] = useState("");
  const [newPetType, setNewPetType] = useState("Dog");
  const [newPetRoutine, setNewPetRoutine] = useState("Morning & Evening");
  const [newPetCare, setNewPetCare] = useState("");

  // Edit Pet state
  const [editingPetRow, setEditingPetRow] = useState<number | null>(null);
  const [petDraft, setPetDraft] = useState<{
    name: string;
    type: string;
    routine: string;
    care: string;
    active: boolean;
  } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setEditingChoreKey(null);
      setChoreDraft(null);
      setEditingMemberRow(null);
      setMemberDraft(null);
      setEditingPetRow(null);
      setPetDraft(null);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const handleSubmitNewChore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChoreTask.trim() || !onAddChore) return;
    onAddChore(newChoreTask.trim(), {
      frequency: newChoreFreq,
      category: newChoreCategory,
      defaultWho: newChoreGroup,
      notes: newChoreNotes.trim()
    });
    setNewChoreTask("");
    setNewChoreNotes("");
    setShowAddChoreForm(false);
  };

  const handleSaveChoreDraft = () => {
    if (!choreDraft || !choreDraft.task.trim() || !onEditChore) return;
    onEditChore(choreDraft.index_, {
      task: choreDraft.task.trim(),
      oldTask: choreDraft.oldTask,
      category: choreDraft.category,
      frequency: choreDraft.frequency,
      targetDay: choreDraft.targetDay,
      rotationGroup: choreDraft.rotationGroup,
      notes: choreDraft.notes
    });
    setEditingChoreKey(null);
    setChoreDraft(null);
  };

  const handleSubmitNewMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberFirst.trim() || !onAddMember) return;
    onAddMember({
      firstName: newMemberFirst.trim(),
      lastName: newMemberLast.trim() || undefined,
      nickname: newMemberNickname.trim() || undefined,
      birthday: newMemberBirthday || undefined,
      email: newMemberEmail.trim() || undefined,
      role: newMemberRole,
      residency: newMemberResidency,
      active: true
    });
    setNewMemberFirst("");
    setNewMemberLast("");
    setNewMemberNickname("");
    setNewMemberBirthday("");
    setNewMemberEmail("");
    setNewMemberRole("Kid");
    setNewMemberResidency("Full-Time");
    setShowAddMemberForm(false);
  };

  const handleSaveMemberDraft = (rowIndex_: number) => {
    if (!memberDraft || !memberDraft.name.trim() || !onUpdateMember) return;
    onUpdateMember(rowIndex_, {
      name: memberDraft.name.trim(),
      role: memberDraft.role,
      residency: memberDraft.residency,
      active: memberDraft.active
    });
    setEditingMemberRow(null);
    setMemberDraft(null);
  };

  const handleSubmitNewPet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPetName.trim() || !onAddPet) return;
    onAddPet(
      newPetName.trim(),
      newPetType,
      newPetRoutine.trim() || "Morning & Evening",
      newPetCare.trim(),
      true
    );
    setNewPetName("");
    setNewPetType("Dog");
    setNewPetRoutine("Morning & Evening");
    setNewPetCare("");
    setShowAddPetForm(false);
  };

  const handleSavePetDraft = (rowIndex_: number) => {
    if (!petDraft || !petDraft.name.trim() || !onUpdatePet) return;
    onUpdatePet(rowIndex_, {
      name: petDraft.name.trim(),
      type: petDraft.type,
      routine: petDraft.routine.trim(),
      care: petDraft.care.trim(),
      active: petDraft.active
    });
    setEditingPetRow(null);
    setPetDraft(null);
  };

  const rotationGroupOptions = [
    "All Non-Casual",
    "Kids Rotation",
    "Parents & Kids",
    "All Occupants",
    "All Kids",
    "Parents",
    "Each Child",
    "Full-Time Roster",
    ...familyMembers.map(m => m.name)
  ];

  return (
    <div className="modal-safe-area fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden max-h-full flex flex-col text-slate-100">
        {/* Header */}
        <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
          <div>
            <h3 className="text-sm sm:text-base font-black text-white tracking-tight">
              Manage Household
            </h3>
            <p className="text-[11px] text-slate-400">
              Add &amp; edit chores, family members, and pets • Live synced
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Tab Switcher */}
        <div className="p-2.5 bg-slate-900/95 border-b border-slate-800 grid grid-cols-3 gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("chores")}
            className={`py-2 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeTab === "chores"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Chores ({hubMasterChores.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("members")}
            className={`py-2 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeTab === "members"
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Members ({familyMembers.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pets")}
            className={`py-2 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeTab === "pets"
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <PawPrint className="w-3.5 h-3.5" />
            <span>Pets ({rosterPets.length})</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 space-y-3 overflow-y-auto flex-1 text-xs">
          {/* ===================== CHORES TAB ===================== */}
          {activeTab === "chores" && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Master Chore List
                </span>
                {onAddChore && (
                  <button
                    type="button"
                    onClick={() => setShowAddChoreForm(v => !v)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{showAddChoreForm ? "Close Form" : "Add Chore"}</span>
                  </button>
                )}
              </div>

              {showAddChoreForm && (
                <form
                  onSubmit={handleSubmitNewChore}
                  className="p-3 rounded-2xl bg-slate-800/90 border border-indigo-500/40 space-y-2.5"
                >
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Chore Title *
                    </label>
                    <input
                      type="text"
                      value={newChoreTask}
                      onChange={e => setNewChoreTask(e.target.value)}
                      placeholder="e.g. Empty Dishwasher, Take Out Recycling..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Category
                      </label>
                      <select
                        value={newChoreCategory}
                        onChange={e => setNewChoreCategory(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      >
                        {CATEGORIES.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Frequency
                      </label>
                      <select
                        value={newChoreFreq}
                        onChange={e => setNewChoreFreq(e.target.value as any)}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Once a Week</option>
                        <option value="biweekly">Bi-Weekly</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Assigned / Rotation Group
                    </label>
                    <select
                      value={newChoreGroup}
                      onChange={e => setNewChoreGroup(e.target.value)}
                      className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    >
                      {rotationGroupOptions.map(opt => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={newChoreNotes}
                      onChange={e => setNewChoreNotes(e.target.value)}
                      placeholder="Supplies, steps, or tips..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowAddChoreForm(false)}
                      className="px-3 py-1.5 rounded-xl bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!newChoreTask.trim()}
                      className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs disabled:opacity-40 cursor-pointer"
                    >
                      Save Chore
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-2">
                {hubMasterChores.length === 0 ? (
                  <div className="p-6 text-center text-slate-400 bg-slate-800/50 rounded-2xl border border-slate-800">
                    No chores configured yet. Tap &quot;Add Chore&quot; to create one!
                  </div>
                ) : (
                  hubMasterChores.map((chore, idx) => {
                    const cIndex = chore.index_ !== undefined ? chore.index_ : idx;
                    const rowKey = `${cIndex}-${chore.task}`;
                    const isEditing = editingChoreKey === rowKey && choreDraft;

                    if (isEditing && choreDraft) {
                      return (
                        <div
                          key={rowKey}
                          className="p-3 rounded-2xl bg-slate-800 border border-indigo-400/50 space-y-2"
                        >
                          <input
                            type="text"
                            value={choreDraft.task}
                            onChange={e => setChoreDraft({ ...choreDraft, task: e.target.value })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <select
                              value={choreDraft.category}
                              onChange={e => setChoreDraft({ ...choreDraft, category: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                            >
                              {CATEGORIES.map(c => (
                                <option key={c.id} value={c.id}>
                                  {c.label}
                                </option>
                              ))}
                            </select>
                            <select
                              value={choreDraft.frequency}
                              onChange={e => {
                                const val = e.target.value;
                                setChoreDraft({
                                  ...choreDraft,
                                  frequency: val,
                                  targetDay:
                                    val === "Daily"
                                      ? "Mon – Sun"
                                      : val === "Bi-Weekly"
                                      ? "Thursday Evening"
                                      : "Saturday"
                                });
                              }}
                              className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                            >
                              <option value="Daily">Daily</option>
                              <option value="Once a Week">Once a Week</option>
                              <option value="Bi-Weekly">Bi-Weekly</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={choreDraft.targetDay}
                              onChange={e => setChoreDraft({ ...choreDraft, targetDay: e.target.value })}
                              placeholder="Target Day"
                              className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                            />
                            <select
                              value={choreDraft.rotationGroup}
                              onChange={e => setChoreDraft({ ...choreDraft, rotationGroup: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                            >
                              {rotationGroupOptions.map(opt => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="text"
                            value={choreDraft.notes}
                            onChange={e => setChoreDraft({ ...choreDraft, notes: e.target.value })}
                            placeholder="Notes..."
                            className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setEditingChoreKey(null);
                                setChoreDraft(null);
                              }}
                              className="px-3 py-1 rounded-lg bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={handleSaveChoreDraft}
                              className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center gap-1 cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Save</span>
                            </button>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={rowKey}
                        className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-white text-xs truncate">{chore.task}</div>
                          <div className="text-[10px] text-slate-400 flex items-center gap-1.5 flex-wrap mt-0.5">
                            <span className="px-1.5 py-0.5 rounded bg-slate-700/80 text-slate-200 font-semibold">
                              {chore.frequency || "Daily"}
                            </span>
                            <span>{chore.rotationGroup || "All Non-Casual"}</span>
                            {chore.category && <span>• {chore.category}</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {onEditChore && (
                            <button
                              type="button"
                              onClick={() => {
                                setEditingChoreKey(rowKey);
                                setChoreDraft({
                                  index_: cIndex,
                                  oldTask: chore.task,
                                  task: chore.task || "",
                                  category: chore.category || "Household",
                                  frequency: chore.frequency || "Daily",
                                  targetDay: chore.targetDay || "Mon – Sun",
                                  rotationGroup: chore.rotationGroup || "All Non-Casual",
                                  notes: chore.notes || ""
                                });
                              }}
                              className="p-1.5 rounded-lg bg-slate-700/80 hover:bg-indigo-600 text-slate-200 hover:text-white transition cursor-pointer"
                              title="Edit Chore"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {onDeleteChore && (
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Remove "${chore.task}" from the chore list?`)) {
                                  onDeleteChore(cIndex, chore.task);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-slate-700/80 hover:bg-rose-600 text-slate-300 hover:text-white transition cursor-pointer"
                              title="Delete Chore"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}

          {/* ===================== MEMBERS TAB ===================== */}
          {activeTab === "members" && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Household Roster
                </span>
                {onAddMember && (
                  <button
                    type="button"
                    onClick={() => setShowAddMemberForm(v => !v)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{showAddMemberForm ? "Close Form" : "Add Member"}</span>
                  </button>
                )}
              </div>

              {showAddMemberForm && (
                <form
                  onSubmit={handleSubmitNewMember}
                  className="p-3 rounded-2xl bg-slate-800/90 border border-indigo-500/40 space-y-2.5"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={newMemberFirst}
                        onChange={e => setNewMemberFirst(e.target.value)}
                        placeholder="e.g. Sydney"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={newMemberLast}
                        onChange={e => setNewMemberLast(e.target.value)}
                        placeholder="Optional"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Role
                      </label>
                      <select
                        value={newMemberRole}
                        onChange={e => setNewMemberRole(e.target.value as "Parent" | "Kid")}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      >
                        <option value="Kid">Kid</option>
                        <option value="Parent">Parent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Occupancy
                      </label>
                      <select
                        value={newMemberResidency}
                        onChange={e => setNewMemberResidency(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Casual">Casual</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Birthday
                      </label>
                      <input
                        type="date"
                        value={newMemberBirthday}
                        onChange={e => setNewMemberBirthday(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Nickname
                      </label>
                      <input
                        type="text"
                        value={newMemberNickname}
                        onChange={e => setNewMemberNickname(e.target.value)}
                        placeholder="Optional"
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={newMemberEmail}
                      onChange={e => setNewMemberEmail(e.target.value)}
                      placeholder="member@family.com"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowAddMemberForm(false)}
                      className="px-3 py-1.5 rounded-xl bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!newMemberFirst.trim()}
                      className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs disabled:opacity-40 cursor-pointer"
                    >
                      Add Member
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-2">
                {familyMembers.map(member => {
                  const prof = getUserProfile(member.name, member);
                  const pref = getPreferredName(prof, member.name);
                  const age = calculateAge(prof.birthday) ?? member.age;
                  const tier = getEffectiveAgeTier(prof);
                  const isEditing = editingMemberRow === member.index_ && memberDraft;

                  if (isEditing && memberDraft) {
                    return (
                      <div
                        key={`${member.index_}-${member.name}`}
                        className="p-3 rounded-2xl bg-slate-800 border border-indigo-400/50 space-y-2"
                      >
                        <input
                          type="text"
                          value={memberDraft.name}
                          onChange={e => setMemberDraft({ ...memberDraft, name: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <select
                            value={memberDraft.role}
                            onChange={e => setMemberDraft({ ...memberDraft, role: e.target.value })}
                            className="px-2 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                          >
                            <option value="Parent">Parent</option>
                            <option value="Kid">Kid</option>
                          </select>
                          <select
                            value={memberDraft.residency}
                            onChange={e => setMemberDraft({ ...memberDraft, residency: e.target.value })}
                            className="px-2 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                          >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                            <option value="Casual">Casual</option>
                          </select>
                          <select
                            value={memberDraft.active ? "true" : "false"}
                            onChange={e =>
                              setMemberDraft({ ...memberDraft, active: e.target.value === "true" })
                            }
                            className="px-2 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                          >
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                          </select>
                        </div>
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMemberRow(null);
                              setMemberDraft(null);
                            }}
                            className="px-3 py-1 rounded-lg bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSaveMemberDraft(member.index_)}
                            className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center gap-1 cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`${member.index_}-${member.name}`}
                      className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-base shrink-0 overflow-hidden">
                          {prof.avatarUrl && (prof.role === "Parent" || tier === "adult" || tier === "teen") ? (
                            <img
                              src={prof.avatarUrl}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span>{prof.avatarEmoji || (member.role === "Parent" ? "👑" : "🌟")}</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-white text-xs truncate flex items-center gap-1.5">
                            <span>{pref}</span>
                            {age !== null && age !== undefined && (
                              <span className="text-[10px] font-semibold text-slate-400">
                                ({age}y)
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                            <span className="px-1.5 py-0.5 rounded bg-slate-700/80 text-slate-200 font-semibold">
                              {member.role || "Kid"}
                            </span>
                            <span>{member.residency || (member.type === "biweekly" ? "Bi-Weekly" : "Full-Time")}</span>
                            {member.active === false && (
                              <span className="text-rose-400 font-bold">• Inactive</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {onOpenMemberProfile && (
                          <button
                            type="button"
                            onClick={() => onOpenMemberProfile(member.name)}
                            className="p-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition cursor-pointer"
                            title="Edit Profile, Birthday & Photo Avatar"
                          >
                            <UserCircle className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {onUpdateMember && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMemberRow(member.index_);
                              setMemberDraft({
                                name: member.name || "",
                                role: member.role === "Parent" ? "Parent" : "Kid",
                                residency:
                                  member.residency ||
                                  (member.type === "biweekly"
                                    ? "Bi-Weekly"
                                    : member.type === "casual"
                                    ? "Casual"
                                    : "Full-Time"),
                                active: member.active !== false
                              });
                            }}
                            className="p-1.5 rounded-lg bg-slate-700/80 hover:bg-indigo-600 text-slate-200 hover:text-white transition cursor-pointer"
                            title="Edit Member Role & Residency"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {onDeleteMember && (
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Remove "${member.name}" from the household roster?`)) {
                                onDeleteMember(member.index_, member.name);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-slate-700/80 hover:bg-rose-600 text-slate-300 hover:text-white transition cursor-pointer"
                            title="Remove Member"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* ===================== PETS TAB ===================== */}
          {activeTab === "pets" && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Household Pets
                </span>
                {onAddPet && (
                  <button
                    type="button"
                    onClick={() => setShowAddPetForm(v => !v)}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{showAddPetForm ? "Close Form" : "Add Pet"}</span>
                  </button>
                )}
              </div>

              {showAddPetForm && (
                <form
                  onSubmit={handleSubmitNewPet}
                  className="p-3 rounded-2xl bg-slate-800/90 border border-amber-500/40 space-y-2.5"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Pet Name *
                      </label>
                      <input
                        type="text"
                        value={newPetName}
                        onChange={e => setNewPetName(e.target.value)}
                        placeholder="e.g. Buster, Milo..."
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Species
                      </label>
                      <select
                        value={newPetType}
                        onChange={e => setNewPetType(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                      >
                        {PET_SPECIES.map(sp => (
                          <option key={sp} value={sp}>
                            {SPECIES_EMOJI[sp] || "🐾"} {sp}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Feeding Routine
                    </label>
                    <input
                      type="text"
                      value={newPetRoutine}
                      onChange={e => setNewPetRoutine(e.target.value)}
                      placeholder="e.g. Morning & Evening"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Care Responsibilities
                    </label>
                    <textarea
                      rows={2}
                      value={newPetCare}
                      onChange={e => setNewPetCare(e.target.value)}
                      placeholder="e.g. Feed breakfast & supper, fresh water bowls, outdoor walk..."
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs resize-none"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowAddPetForm(false)}
                      className="px-3 py-1.5 rounded-xl bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!newPetName.trim()}
                      className="px-4 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs disabled:opacity-40 cursor-pointer"
                    >
                      Add Pet
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-2">
                {rosterPets.length === 0 ? (
                  <div className="p-6 text-center text-slate-400 bg-slate-800/50 rounded-2xl border border-slate-800">
                    No pets registered yet. Tap &quot;Add Pet&quot; to add one!
                  </div>
                ) : (
                  rosterPets.map(pet => {
                    const isEditing = editingPetRow === pet.index_ && petDraft;

                    if (isEditing && petDraft) {
                      return (
                        <div
                          key={`${pet.index_}-${pet.name}`}
                          className="p-3 rounded-2xl bg-slate-800 border border-amber-400/50 space-y-2"
                        >
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={petDraft.name}
                              onChange={e => setPetDraft({ ...petDraft, name: e.target.value })}
                              className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                            />
                            <select
                              value={petDraft.type}
                              onChange={e => setPetDraft({ ...petDraft, type: e.target.value })}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                            >
                              {PET_SPECIES.map(sp => (
                                <option key={sp} value={sp}>
                                  {sp}
                                </option>
                              ))}
                            </select>
                          </div>
                          <input
                            type="text"
                            value={petDraft.routine}
                            onChange={e => setPetDraft({ ...petDraft, routine: e.target.value })}
                            placeholder="Feeding Routine"
                            className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs"
                          />
                          <textarea
                            rows={2}
                            value={petDraft.care}
                            onChange={e => setPetDraft({ ...petDraft, care: e.target.value })}
                            placeholder="Care Responsibilities"
                            className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs resize-none"
                          />
                          <div className="flex items-center justify-between">
                            <select
                              value={petDraft.active ? "true" : "false"}
                              onChange={e =>
                                setPetDraft({ ...petDraft, active: e.target.value === "true" })
                              }
                              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs"
                            >
                              <option value="true">Active</option>
                              <option value="false">Inactive</option>
                            </select>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingPetRow(null);
                                  setPetDraft(null);
                                }}
                                className="px-3 py-1 rounded-lg bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={() => handleSavePetDraft(pet.index_)}
                                className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center gap-1 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5" />
                                <span>Save</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={`${pet.index_}-${pet.name}`}
                        className="p-3 rounded-2xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-base shrink-0">
                            {SPECIES_EMOJI[pet.type] || "🐾"}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-xs truncate">
                              {pet.name}{" "}
                              <span className="text-[10px] font-semibold text-amber-300">
                                ({pet.type})
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400 truncate mt-0.5">
                              {pet.routine || "Daily routine"}
                              {pet.care ? ` • ${pet.care}` : ""}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {onUpdatePet && (
                            <button
                              type="button"
                              onClick={() => {
                                setEditingPetRow(pet.index_);
                                setPetDraft({
                                  name: pet.name || "",
                                  type: pet.type || "Dog",
                                  routine: pet.routine || "",
                                  care: pet.care || "",
                                  active: pet.active !== false
                                });
                              }}
                              className="p-1.5 rounded-lg bg-slate-700/80 hover:bg-amber-600 text-slate-200 hover:text-white transition cursor-pointer"
                              title="Edit Pet"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {onDeletePet && (
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Remove pet "${pet.name}" from the household?`)) {
                                  onDeletePet(pet.index_, pet.name);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-slate-700/80 hover:bg-rose-600 text-slate-300 hover:text-white transition cursor-pointer"
                              title="Remove Pet"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
