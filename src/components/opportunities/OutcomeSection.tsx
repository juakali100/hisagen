"use client";

import { useState } from "react";
import Link from "next/link";
import { ChecklistItem } from "../../types/opportunities";
import { ChecklistSection } from "./ChecklistSection";

type Outcome = "won" | "lost" | "withdrawn" | undefined;

interface OutcomeSectionProps {
  outcome: Outcome;
  outcomeDate?: string;
  outcomeNotes?: string;
  awardAmount?: number;
  awardCurrency?: string;
  contractNotes?: string;
  handoverChecklist?: ChecklistItem[];
  grantProjectId?: string;
  lessonsLearned?: string;
  feedbackReceived?: string;
  funderName: string;
  onOutcomeChange?: (outcome: Outcome) => void;
  onOutcomeDateChange?: (date: string) => void;
  onAwardAmountChange?: (amount: number) => void;
  onAwardCurrencyChange?: (currency: string) => void;
  onContractNotesChange?: (notes: string) => void;
  onHandoverUpdate?: (items: ChecklistItem[]) => void;
  onLessonsLearnedChange?: (lessons: string) => void;
  onFeedbackChange?: (feedback: string) => void;
  onCreateGrantProject?: () => void;
}

// Inline hint component
const Hint = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs italic text-slate/50 mt-1">{children}</p>
);

const CURRENCIES = ["USD", "EUR", "GBP", "UGX", "KES"];

const DEFAULT_HANDOVER_CHECKLIST: ChecklistItem[] = [
  { id: "hand-1", category: "Handover", item: "Contract signed", status: "unchecked", notes: "" },
  { id: "hand-2", category: "Handover", item: "Bank details provided", status: "unchecked", notes: "" },
  { id: "hand-3", category: "Handover", item: "Reporting requirements documented", status: "unchecked", notes: "" },
  { id: "hand-4", category: "Handover", item: "Key contacts established", status: "unchecked", notes: "" },
  { id: "hand-5", category: "Handover", item: "Kick-off meeting scheduled", status: "unchecked", notes: "" },
  { id: "hand-6", category: "Handover", item: "Grant project record created", status: "unchecked", notes: "" },
];

export function OutcomeSection({
  outcome,
  outcomeDate,
  outcomeNotes,
  awardAmount,
  awardCurrency = "USD",
  contractNotes,
  handoverChecklist,
  grantProjectId,
  lessonsLearned,
  feedbackReceived,
  funderName,
  onOutcomeChange,
  onOutcomeDateChange,
  onAwardAmountChange,
  onAwardCurrencyChange,
  onContractNotesChange,
  onHandoverUpdate,
  onLessonsLearnedChange,
  onFeedbackChange,
  onCreateGrantProject,
}: OutcomeSectionProps) {
  const [isEditingContract, setIsEditingContract] = useState(false);
  const [contractValue, setContractValue] = useState(contractNotes || "");
  const [isEditingLessons, setIsEditingLessons] = useState(false);
  const [lessonsValue, setLessonsValue] = useState(lessonsLearned || "");
  const [isEditingFeedback, setIsEditingFeedback] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState(feedbackReceived || "");

  // Use default handover checklist if won but no checklist provided
  const effectiveHandover = handoverChecklist || (outcome === "won" ? DEFAULT_HANDOVER_CHECKLIST : undefined);

  const handleSetOutcome = (newOutcome: Outcome) => {
    onOutcomeChange?.(newOutcome);
    if (!outcomeDate) {
      onOutcomeDateChange?.(new Date().toISOString().split("T")[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-secondary mb-4">Phase 06: Contracting & Handover</h3>
        <p className="text-sm text-slate">Record outcome, manage contract negotiation, and hand over to delivery team.</p>
        <Hint>Win or lose, capture lessons. Funder feedback is gold for improving future proposals.</Hint>
      </div>

      {/* Outcome Selection */}
      <div className="p-4 rounded-lg border border-mist">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Outcome</p>

        {!outcome ? (
          <div className="space-y-3">
            <p className="text-sm text-slate/60 mb-3">Record the final outcome of this opportunity:</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleSetOutcome("won")}
                className="px-6 py-3 rounded-lg text-sm font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                🎉 WON
              </button>
              <button
                onClick={() => handleSetOutcome("lost")}
                className="px-6 py-3 rounded-lg text-sm font-bold bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                ❌ LOST
              </button>
              <button
                onClick={() => handleSetOutcome("withdrawn")}
                className="px-6 py-3 rounded-lg text-sm font-bold bg-slate-500 text-white hover:bg-slate-600 transition-colors"
              >
                ↩️ WITHDRAWN
              </button>
            </div>
            <Hint>Select outcome once the funder has made their decision, or if you choose to withdraw.</Hint>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <span className={`px-4 py-2 rounded-lg text-sm font-bold ${
              outcome === "won" ? "bg-emerald-500 text-white" :
              outcome === "lost" ? "bg-red-500 text-white" :
              "bg-slate-500 text-white"
            }`}>
              {outcome === "won" ? "🎉 WON" : outcome === "lost" ? "❌ LOST" : "↩️ WITHDRAWN"}
            </span>
            <input
              type="date"
              value={outcomeDate || ""}
              onChange={(e) => onOutcomeDateChange?.(e.target.value)}
              className="text-sm border border-mist rounded px-2 py-1"
            />
            <button
              onClick={() => handleSetOutcome(undefined)}
              className="text-xs text-slate/60 hover:text-red-500"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {/* WON: Award Details */}
      {outcome === "won" && (
        <>
          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-3">Award Details</p>
            <div className="flex items-center gap-4">
              <select
                value={awardCurrency}
                onChange={(e) => onAwardCurrencyChange?.(e.target.value)}
                className="text-sm border border-emerald-300 rounded px-2 py-2 bg-white"
              >
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input
                type="number"
                value={awardAmount || ""}
                onChange={(e) => onAwardAmountChange?.(Number(e.target.value))}
                placeholder="Amount"
                className="text-2xl font-bold text-emerald-800 border border-emerald-300 rounded px-3 py-1 w-48 bg-white"
              />
            </div>
            {awardAmount && (
              <p className="mt-2 text-lg font-semibold text-emerald-700">
                {awardCurrency} {awardAmount.toLocaleString()}
              </p>
            )}
            <Hint>Record the final awarded amount. This may differ from the requested amount.</Hint>
          </div>

          {/* Contract Notes */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">Contract Notes</p>
              {!isEditingContract && (
                <button onClick={() => setIsEditingContract(true)} className="text-xs text-primary hover:underline">
                  Edit
                </button>
              )}
            </div>
            {isEditingContract ? (
              <div>
                <textarea
                  value={contractValue}
                  onChange={(e) => setContractValue(e.target.value)}
                  placeholder="Contract terms, project period, reporting requirements..."
                  className="w-full text-sm border border-slate-300 rounded px-3 py-2 min-h-[80px]"
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      onContractNotesChange?.(contractValue);
                      setIsEditingContract(false);
                    }}
                    className="px-3 py-1 text-xs bg-primary text-white rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setContractValue(contractNotes || "");
                      setIsEditingContract(false);
                    }}
                    className="px-3 py-1 text-xs border border-mist rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate">
                {contractNotes || <span className="italic text-slate/60">No contract notes yet.</span>}
              </p>
            )}
            <Hint>Key contract terms: project period, reporting schedule, disbursement schedule, compliance requirements.</Hint>
          </div>

          {/* Handover Checklist */}
          {effectiveHandover && (
            <div>
              <ChecklistSection
                title="Handover Checklist"
                items={effectiveHandover}
                onUpdate={onHandoverUpdate}
              />
              <Hint>Complete all items before transitioning to delivery phase. Last item triggers Grant Project creation.</Hint>
            </div>
          )}

          {/* Create Grant Project Button */}
          <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3">Next Step: Delivery</p>
            {grantProjectId ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-emerald-600 font-medium">✓ Grant Project created</span>
                <Link
                  href={`/projects/${grantProjectId}`}
                  className="text-sm text-primary hover:underline"
                >
                  View Grant Project →
                </Link>
              </div>
            ) : (
              <div>
                <p className="text-sm text-slate mb-3">
                  Ready to transition to delivery? Create a Grant Project record to track phases 07-11.
                </p>
                <button
                  onClick={onCreateGrantProject}
                  className="px-6 py-3 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Create Grant Project →
                </button>
                <Hint>This creates a new project record linked to this opportunity, ready for post-award tracking.</Hint>
              </div>
            )}
          </div>

          {/* Funder Feedback (even for won) */}
          {feedbackReceived && (
            <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-700 mb-2">Funder Feedback</p>
              <p className="text-sm text-sky-900">{feedbackReceived}</p>
            </div>
          )}
        </>
      )}

      {/* LOST or WITHDRAWN: Lessons Learned */}
      {(outcome === "lost" || outcome === "withdrawn") && (
        <>
          {/* Lessons Learned */}
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Lessons Learned</p>
              {!isEditingLessons && (
                <button onClick={() => setIsEditingLessons(true)} className="text-xs text-amber-600 hover:underline">
                  Edit
                </button>
              )}
            </div>
            {isEditingLessons ? (
              <div>
                <textarea
                  value={lessonsValue}
                  onChange={(e) => setLessonsValue(e.target.value)}
                  placeholder="What did we learn? What would we do differently?"
                  className="w-full text-sm border border-amber-200 rounded px-3 py-2 min-h-[100px]"
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      onLessonsLearnedChange?.(lessonsValue);
                      setIsEditingLessons(false);
                    }}
                    className="px-3 py-1 text-xs bg-amber-600 text-white rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setLessonsValue(lessonsLearned || "");
                      setIsEditingLessons(false);
                    }}
                    className="px-3 py-1 text-xs border border-amber-200 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-amber-900">
                {lessonsLearned || <span className="italic text-amber-600/60">No lessons captured yet. Click Edit to add.</span>}
              </p>
            )}
            <Hint>Honest reflection improves future proposals. What worked? What didn&apos;t? What surprised you?</Hint>
          </div>

          {/* Funder Feedback */}
          <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-700">Funder Feedback</p>
              {!isEditingFeedback && (
                <button onClick={() => setIsEditingFeedback(true)} className="text-xs text-sky-600 hover:underline">
                  Edit
                </button>
              )}
            </div>
            {isEditingFeedback ? (
              <div>
                <textarea
                  value={feedbackValue}
                  onChange={(e) => setFeedbackValue(e.target.value)}
                  placeholder="Did the funder provide any feedback? What did they say?"
                  className="w-full text-sm border border-sky-200 rounded px-3 py-2 min-h-[80px]"
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      onFeedbackChange?.(feedbackValue);
                      setIsEditingFeedback(false);
                    }}
                    className="px-3 py-1 text-xs bg-sky-600 text-white rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setFeedbackValue(feedbackReceived || "");
                      setIsEditingFeedback(false);
                    }}
                    className="px-3 py-1 text-xs border border-sky-200 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-sky-900">
                {feedbackReceived || <span className="italic text-sky-600/60">No feedback received yet.</span>}
              </p>
            )}
            <Hint>Always ask for feedback, especially on rejections. Funders often share what would strengthen future applications.</Hint>
          </div>

          {/* Re-engage Option */}
          <div className="p-4 rounded-lg border border-mist">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Future Engagement</p>
            <p className="text-sm text-slate">
              Consider whether to re-engage with {funderName} in future funding cycles.
            </p>
            <Hint>Many successful grants come from repeat applications after building relationships and track record.</Hint>
          </div>
        </>
      )}

      {/* Outcome not yet recorded */}
      {!outcome && (
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate/60 italic text-center">
            Record an outcome above to see relevant fields for won/lost/withdrawn opportunities.
          </p>
        </div>
      )}
    </div>
  );
}
