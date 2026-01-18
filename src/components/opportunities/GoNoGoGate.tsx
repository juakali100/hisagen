"use client";

import { useState } from "react";
import { GoNoGoDecision } from "../../types/opportunities";

interface GoNoGoGateProps {
  decision: GoNoGoDecision;
  date?: string;
  rationale?: string;
  onUpdate?: (decision: GoNoGoDecision, rationale: string) => void;
  readonly?: boolean;
  checklistSummary?: {
    eligibility: { passed: number; total: number };
    compliance: { passed: number; total: number };
    capacity: { passed: number; total: number };
  };
}

export default function GoNoGoGate({
  decision,
  date,
  rationale,
  onUpdate,
  readonly = false,
  checklistSummary,
}: GoNoGoGateProps) {
  const [localDecision, setLocalDecision] = useState<GoNoGoDecision>(decision);
  const [localRationale, setLocalRationale] = useState(rationale || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleDecision = (newDecision: GoNoGoDecision) => {
    setLocalDecision(newDecision);
    if (newDecision === "pending") {
      setLocalRationale("");
    }
  };

  const handleSave = () => {
    onUpdate?.(localDecision, localRationale);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalDecision(decision);
    setLocalRationale(rationale || "");
    setIsEditing(false);
  };

  // Calculate readiness score from checklists
  const calculateReadiness = () => {
    if (!checklistSummary) return null;
    const totalPassed =
      checklistSummary.eligibility.passed +
      checklistSummary.compliance.passed +
      checklistSummary.capacity.passed;
    const totalItems =
      checklistSummary.eligibility.total +
      checklistSummary.compliance.total +
      checklistSummary.capacity.total;
    return totalItems > 0 ? Math.round((totalPassed / totalItems) * 100) : 0;
  };

  const readiness = calculateReadiness();

  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        localDecision === "go"
          ? "border-emerald-300 bg-emerald-50"
          : localDecision === "no-go"
          ? "border-red-300 bg-red-50"
          : "border-amber-300 bg-amber-50"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-widest">Go/No-Go Decision Gate</p>
        {!readonly && !isEditing && localDecision !== "pending" && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-slate hover:text-secondary"
          >
            Edit
          </button>
        )}
      </div>

      {/* Readiness Score */}
      {checklistSummary && (
        <div className="mb-4 p-3 rounded bg-white/50 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate">Checklist Completion</span>
            <span
              className={`text-sm font-bold ${
                readiness && readiness >= 80
                  ? "text-emerald-600"
                  : readiness && readiness >= 50
                  ? "text-amber-600"
                  : "text-red-600"
              }`}
            >
              {readiness}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                readiness && readiness >= 80
                  ? "bg-emerald-500"
                  : readiness && readiness >= 50
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${readiness}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate">
            <span>Eligibility: {checklistSummary.eligibility.passed}/{checklistSummary.eligibility.total}</span>
            <span>Compliance: {checklistSummary.compliance.passed}/{checklistSummary.compliance.total}</span>
            <span>Capacity: {checklistSummary.capacity.passed}/{checklistSummary.capacity.total}</span>
          </div>
        </div>
      )}

      {/* Decision Display / Edit */}
      {isEditing || localDecision === "pending" ? (
        <div className="space-y-4">
          <div>
            <p className="text-xs text-slate mb-2">Select decision:</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleDecision("go")}
                className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  localDecision === "go"
                    ? "bg-emerald-500 text-white ring-2 ring-emerald-300"
                    : "bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                ✓ GO
              </button>
              <button
                onClick={() => handleDecision("no-go")}
                className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  localDecision === "no-go"
                    ? "bg-red-500 text-white ring-2 ring-red-300"
                    : "bg-white border border-red-300 text-red-700 hover:bg-red-50"
                }`}
              >
                ✗ NO-GO
              </button>
            </div>
          </div>

          {localDecision !== "pending" && (
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
                Rationale *
              </label>
              <textarea
                value={localRationale}
                onChange={(e) => setLocalRationale(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                rows={3}
                placeholder={
                  localDecision === "go"
                    ? "Why are we proceeding? Key factors supporting this decision..."
                    : "Why are we not proceeding? Key blockers or concerns..."
                }
              />
            </div>
          )}

          {!readonly && localDecision !== "pending" && (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={!localRationale.trim()}
                className="px-4 py-2 text-xs font-medium bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Decision
              </button>
              {isEditing && (
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-xs font-medium text-slate hover:text-secondary"
                >
                  Cancel
                </button>
              )}
            </div>
          )}

          {localDecision === "pending" && (
            <p className="text-xs text-amber-700 italic">
              Complete the checklists above before making a Go/No-Go decision.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span
              className={`px-6 py-3 rounded-lg text-lg font-bold ${
                localDecision === "go" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {localDecision === "go" ? "✓ GO" : "✗ NO-GO"}
            </span>
            {date && <span className="text-sm text-slate">Decided: {date}</span>}
          </div>
          {localRationale && (
            <div className="p-3 rounded bg-white/50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-widest text-slate/60 mb-1">
                Rationale
              </p>
              <p className="text-sm text-slate">{localRationale}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
