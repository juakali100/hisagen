"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ProposalStatus,
  ChecklistItem,
  ChecklistItemStatus,
} from "../../types/opportunities";
import { ChecklistSection } from "./ChecklistSection";

interface ProposalSectionProps {
  status: ProposalStatus;
  proposalUrl?: string;
  proposalVersions: string[];
  submissionDate?: string;
  proposalNotes: string;
  funderRequirements: ChecklistItem[];
  onStatusChange?: (status: ProposalStatus) => void;
  onSubmissionDateChange?: (date: string) => void;
  onRequirementsUpdate?: (items: ChecklistItem[]) => void;
  onNotesChange?: (notes: string) => void;
}

// Inline hint component
const Hint = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs italic text-slate/50 mt-1">{children}</p>
);

const PROPOSAL_STATUS_OPTIONS: { value: ProposalStatus; label: string; color: string }[] = [
  { value: "not_started", label: "Not Started", color: "bg-slate-100 text-slate-700" },
  { value: "drafting", label: "Drafting", color: "bg-sky-100 text-sky-700" },
  { value: "review", label: "Internal Review", color: "bg-amber-100 text-amber-700" },
  { value: "submitted", label: "Submitted", color: "bg-purple-100 text-purple-700" },
  { value: "accepted", label: "Accepted", color: "bg-emerald-100 text-emerald-700" },
  { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-700" },
];

export function ProposalSection({
  status,
  proposalUrl,
  proposalVersions,
  submissionDate,
  proposalNotes,
  funderRequirements,
  onStatusChange,
  onSubmissionDateChange,
  onRequirementsUpdate,
  onNotesChange,
}: ProposalSectionProps) {
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [notesValue, setNotesValue] = useState(proposalNotes);
  const [showAddRequirement, setShowAddRequirement] = useState(false);
  const [newRequirement, setNewRequirement] = useState("");

  const currentStatus = PROPOSAL_STATUS_OPTIONS.find((s) => s.value === status);

  const handleSaveNotes = () => {
    onNotesChange?.(notesValue);
    setIsEditingNotes(false);
  };

  const handleAddRequirement = () => {
    if (!newRequirement.trim()) return;

    const newItem: ChecklistItem = {
      id: `req-${Date.now()}`,
      category: "Requirements",
      item: newRequirement.trim(),
      status: "unchecked",
      notes: "",
    };

    onRequirementsUpdate?.([...funderRequirements, newItem]);
    setNewRequirement("");
    setShowAddRequirement(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-secondary mb-4">Phase 05: Proposal Development</h3>
        <p className="text-sm text-slate">Develop and submit tailored proposal based on base narrative.</p>
        <Hint>Tailor 20-30% of base proposal to funder priorities. Keep core narrative consistent across applications.</Hint>
      </div>

      {/* Proposal Status */}
      <div className="p-4 rounded-lg border border-mist">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Proposal Status</p>
        <div className="flex items-center gap-4">
          <select
            value={status}
            onChange={(e) => onStatusChange?.(e.target.value as ProposalStatus)}
            className={`px-3 py-2 rounded-lg text-sm font-medium border-0 cursor-pointer ${currentStatus?.color || "bg-slate-100 text-slate-700"}`}
          >
            {PROPOSAL_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Submission Date (show when submitted or later) */}
          {(status === "submitted" || status === "accepted" || status === "rejected") && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate/60">Submitted:</span>
              <input
                type="date"
                value={submissionDate || ""}
                onChange={(e) => onSubmissionDateChange?.(e.target.value)}
                className="text-sm border border-mist rounded px-2 py-1"
              />
            </div>
          )}
        </div>
        <Hint>Track proposal through: Draft → Review → Submit. Each stage needs sign-off before proceeding.</Hint>
      </div>

      {/* Base Proposal Link */}
      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">Base Proposal</p>
        <Link href="/stage-1/funding/v0-grant-proposal" className="text-sm text-primary hover:underline">
          V1.1 Grant Proposal → Use as starting point for tailoring
        </Link>
        <Hint>Start here. Copy and adapt sections rather than starting from scratch each time.</Hint>
      </div>

      {/* Tailored Proposal Link / Add */}
      <div className="p-4 rounded-lg border border-mist">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Tailored Proposal</p>
        {proposalUrl ? (
          <Link href={proposalUrl} className="text-sm text-primary hover:underline">
            View funder-specific proposal →
          </Link>
        ) : (
          <p className="text-sm text-slate/60 italic">No tailored proposal linked yet</p>
        )}
        {proposalVersions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {proposalVersions.map((version, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-slate-100 rounded">
                {version}
              </span>
            ))}
          </div>
        )}
        <Hint>Link to Google Docs, SharePoint, or internal proposal page. Track versions as you iterate.</Hint>
      </div>

      {/* Funder Requirements Checklist */}
      <div className="p-4 rounded-lg border border-mist">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">Funder-Specific Requirements</p>
          <button
            onClick={() => setShowAddRequirement(true)}
            className="text-xs text-primary hover:underline"
          >
            + Add Requirement
          </button>
        </div>

        {showAddRequirement && (
          <div className="mb-4 p-3 bg-slate-50 rounded-lg">
            <input
              type="text"
              value={newRequirement}
              onChange={(e) => setNewRequirement(e.target.value)}
              placeholder="e.g., 'Budget breakdown by year'"
              className="w-full text-sm border border-mist rounded px-3 py-2 mb-2"
            />
            <div className="flex gap-2">
              <button
                onClick={handleAddRequirement}
                className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-primary/90"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setShowAddRequirement(false);
                  setNewRequirement("");
                }}
                className="px-3 py-1 text-xs border border-mist rounded hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {funderRequirements.length > 0 ? (
          <ChecklistSection
            title=""
            items={funderRequirements}
            onUpdate={onRequirementsUpdate}
            compact
          />
        ) : (
          <p className="text-sm text-slate/60 italic">No specific requirements added. Check funder guidelines.</p>
        )}
        <Hint>Add requirements from funder guidelines. Check each off as you address them in your proposal.</Hint>
      </div>

      {/* Proposal Notes */}
      <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-purple-700">Proposal Notes</p>
          {!isEditingNotes && (
            <button
              onClick={() => setIsEditingNotes(true)}
              className="text-xs text-purple-600 hover:underline"
            >
              Edit
            </button>
          )}
        </div>

        {isEditingNotes ? (
          <div>
            <textarea
              value={notesValue}
              onChange={(e) => setNotesValue(e.target.value)}
              className="w-full text-sm border border-purple-200 rounded px-3 py-2 min-h-[80px]"
              placeholder="Notes on tailoring approach, key messages, funder preferences..."
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={handleSaveNotes}
                className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setNotesValue(proposalNotes);
                  setIsEditingNotes(false);
                }}
                className="px-3 py-1 text-xs border border-purple-200 rounded hover:bg-purple-100"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-purple-900">
            {proposalNotes || <span className="italic text-purple-600/60">No notes yet. Click Edit to add.</span>}
          </p>
        )}
      </div>
    </div>
  );
}
