"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import StageBreadcrumb from "../../../../../components/StageBreadcrumb";
import { getOpportunityBySlug } from "../../../../../data/opportunities";
import {
  getStatusConfig,
  getPipelineStageConfig,
  getPhaseLabel,
  ChecklistItem,
  EngagementActivity,
  Note,
} from "../../../../../types/opportunities";

// Funder type helpers
const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    multilateral: "Multilateral",
    bilateral: "Government",
    foundation: "Foundation",
    corporate: "Corporate",
    accelerator: "Accelerator",
    ngo: "NGO",
    philanthropy: "Philanthropy",
    family_office: "Family Office",
    trust: "Trust",
  };
  return labels[type] || type;
};

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    multilateral: "bg-blue-100 text-blue-700",
    bilateral: "bg-indigo-100 text-indigo-700",
    foundation: "bg-purple-100 text-purple-700",
    corporate: "bg-cyan-100 text-cyan-700",
    accelerator: "bg-orange-100 text-orange-700",
    ngo: "bg-teal-100 text-teal-700",
    philanthropy: "bg-rose-100 text-rose-700",
    family_office: "bg-amber-100 text-amber-700",
    trust: "bg-violet-100 text-violet-700",
  };
  return colors[type] || "bg-slate-100 text-slate-700";
};

// Checklist status icon
const ChecklistStatusIcon = ({ status }: { status: ChecklistItem["status"] }) => {
  switch (status) {
    case "passed":
      return <span className="text-emerald-500">✓</span>;
    case "failed":
      return <span className="text-red-500">✗</span>;
    case "unclear":
      return <span className="text-amber-500">?</span>;
    case "na":
      return <span className="text-slate-400">—</span>;
    default:
      return <span className="text-slate-300">○</span>;
  }
};

// Phase tab component
const PhaseTab = ({
  phase,
  label,
  isActive,
  isCurrent,
  onClick,
}: {
  phase: number;
  label: string;
  isActive: boolean;
  isCurrent: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
      isActive
        ? "border-primary text-primary bg-primary/5"
        : "border-transparent text-slate hover:text-secondary hover:bg-slate-50"
    } ${isCurrent ? "ring-2 ring-primary/20" : ""}`}
  >
    <span className="text-[10px] text-slate/60 mr-1">{String(phase).padStart(2, "0")}</span>
    {label}
  </button>
);

export default function OpportunityPage() {
  const params = useParams();
  const slug = params.slug as string;
  const opportunity = getOpportunityBySlug(slug);

  const [activePhase, setActivePhase] = useState<number>(opportunity?.currentPhase || 2);

  if (!opportunity) {
    notFound();
  }

  const statusConfig = getStatusConfig(opportunity.status);
  const stageConfig = getPipelineStageConfig(opportunity.pipelineStage);

  // Calculate days left
  let daysLeft: number | undefined;
  if (opportunity.deadline) {
    const deadlineDate = new Date(opportunity.deadline);
    const today = new Date();
    daysLeft = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }

  // Progress indicator
  const phases = [2, 3, 4, 5, 6];
  const currentPhaseIndex = phases.indexOf(opportunity.currentPhase);

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage={opportunity.funderName}
        trail={[
          { label: "Stage 1 Funding", href: "/stage-1/funding" },
          { label: "Opportunities", href: "/stage-1/funding/opportunities" },
          { label: opportunity.funderName },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${getTypeColor(opportunity.funderType)}`}>
                {getTypeLabel(opportunity.funderType)}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${stageConfig.bg} ${stageConfig.text} ${stageConfig.border}`}>
                {stageConfig.label}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${statusConfig.bg} ${statusConfig.text}`}>
                {statusConfig.label}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-secondary">
              {opportunity.funderName}
            </h1>
            <p className="mt-2 text-lg text-slate">{opportunity.grantSize}</p>
            {opportunity.deadline && (
              <p className={`mt-2 text-sm font-medium ${daysLeft && daysLeft <= 14 ? "text-red-600" : "text-amber-600"}`}>
                Deadline: {opportunity.deadline}
                {daysLeft !== undefined && ` (${daysLeft} days)`}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:text-right">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Owner</p>
              <p className="text-sm font-bold text-primary">{opportunity.owner}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate/60">Alignment</p>
              <p className="text-sm font-bold text-secondary">{opportunity.alignmentScore}/10</p>
            </div>
            {opportunity.url && (
              <a
                href={opportunity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                Funder Website →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="mt-6 p-4 rounded-xl border border-mist bg-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Phase Progress</p>
        <div className="flex items-center justify-between">
          {phases.map((phase, idx) => {
            const isComplete = idx < currentPhaseIndex;
            const isCurrent = phase === opportunity.currentPhase;
            const isFuture = idx > currentPhaseIndex;

            return (
              <div key={phase} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isComplete
                        ? "bg-emerald-500 text-white"
                        : isCurrent
                        ? "bg-primary text-white ring-4 ring-primary/20"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {isComplete ? "✓" : String(phase).padStart(2, "0")}
                  </div>
                  <p className={`mt-1 text-[10px] ${isCurrent ? "font-bold text-primary" : "text-slate/60"}`}>
                    {getPhaseLabel(phase)}
                  </p>
                </div>
                {idx < phases.length - 1 && (
                  <div
                    className={`w-12 md:w-20 h-0.5 mx-2 ${
                      idx < currentPhaseIndex ? "bg-emerald-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Action */}
      <section className="mt-6 p-4 rounded-xl border-2 border-primary/30 bg-primary/5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-primary font-bold">!</span>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">Next Action</p>
            <p className="text-sm font-medium text-secondary">{opportunity.nextAction}</p>
            {opportunity.nextActionDue && (
              <p className="text-xs text-slate mt-1">Due: {opportunity.nextActionDue}</p>
            )}
          </div>
          <div className="text-xs text-primary font-medium">{opportunity.owner}</div>
        </div>
      </section>

      {/* Phase Tabs */}
      <section className="mt-8">
        <div className="flex gap-1 border-b border-mist">
          {phases.map((phase) => (
            <PhaseTab
              key={phase}
              phase={phase}
              label={getPhaseLabel(phase)}
              isActive={activePhase === phase}
              isCurrent={phase === opportunity.currentPhase}
              onClick={() => setActivePhase(phase)}
            />
          ))}
        </div>

        {/* Phase Content */}
        <div className="mt-6 p-6 rounded-b-xl border border-t-0 border-mist bg-white">
          {/* Phase 02: Landscape Summary */}
          {activePhase === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 02: Landscape Summary</h3>
                <p className="text-sm text-slate">How this opportunity was identified and qualified for pursuit.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Identified</p>
                  <p className="text-sm text-secondary">{opportunity.identifiedDate}</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Qualified</p>
                  <p className="text-sm text-secondary">{opportunity.qualifiedDate}</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">Qualification Rationale</p>
                <p className="text-sm text-emerald-900">{opportunity.qualificationRationale}</p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Landscape Notes</p>
                <p className="text-sm text-slate">{opportunity.landscapeNotes}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-3 rounded-lg border border-mist">
                  <p className="text-[10px] uppercase tracking-widest text-slate/60 mb-1">Tier</p>
                  <p className="text-sm font-bold text-secondary capitalize">{opportunity.tier.replace("tier", "Tier ")}</p>
                </div>
                <div className="p-3 rounded-lg border border-mist">
                  <p className="text-[10px] uppercase tracking-widest text-slate/60 mb-1">Focus</p>
                  <p className="text-sm text-secondary">{opportunity.focus}</p>
                </div>
                <div className="p-3 rounded-lg border border-mist">
                  <p className="text-[10px] uppercase tracking-widest text-slate/60 mb-1">Geography</p>
                  <p className="text-sm text-secondary">{opportunity.geography}</p>
                </div>
              </div>
            </div>
          )}

          {/* Phase 03: Engagement */}
          {activePhase === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 03: Engagement</h3>
                <p className="text-sm text-slate">Track contacts, outreach activities, and relationship development.</p>
              </div>

              {/* Relationship Temperature */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Relationship Status</p>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    opportunity.relationshipTemperature === "hot" ? "bg-red-100 text-red-700" :
                    opportunity.relationshipTemperature === "warm" ? "bg-amber-100 text-amber-700" :
                    opportunity.relationshipTemperature === "warming" ? "bg-yellow-100 text-yellow-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {opportunity.relationshipTemperature.charAt(0).toUpperCase() + opportunity.relationshipTemperature.slice(1)}
                  </span>
                  {opportunity.warmIntroPath && (
                    <span className="text-sm text-slate">{opportunity.warmIntroPath}</span>
                  )}
                </div>
              </div>

              {/* Contacts */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Contacts</p>
                {opportunity.contacts.length > 0 ? (
                  <div className="space-y-2">
                    {opportunity.contacts.map((contact) => (
                      <div key={contact.id} className="p-3 rounded bg-slate-50 border border-slate-200">
                        <p className="text-sm font-medium text-secondary">{contact.name}</p>
                        <p className="text-xs text-slate">{contact.role} - {contact.organization}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate/60 italic">No contacts added yet</p>
                )}
              </div>

              {/* Engagement History */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Engagement History</p>
                {opportunity.engagementHistory.length > 0 ? (
                  <div className="space-y-3">
                    {opportunity.engagementHistory.map((activity) => (
                      <div key={activity.id} className="p-3 rounded bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-secondary">{activity.date}</span>
                          <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-600">{activity.type}</span>
                        </div>
                        <p className="text-sm text-slate">{activity.description}</p>
                        {activity.outcome && (
                          <p className="text-xs text-emerald-700 mt-1">Outcome: {activity.outcome}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate/60 italic">No engagement activities logged yet</p>
                )}
              </div>

              {/* Engagement Notes */}
              {opportunity.engagementNotes && (
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">Notes</p>
                  <p className="text-sm text-amber-900">{opportunity.engagementNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 04: Due Diligence */}
          {activePhase === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 04: Due Diligence</h3>
                <p className="text-sm text-slate">Verify eligibility, compliance, and capacity before committing to proposal.</p>
              </div>

              {/* Go/No-Go Decision */}
              <div className={`p-4 rounded-lg border-2 ${
                opportunity.goNoGoDecision === "go" ? "border-emerald-300 bg-emerald-50" :
                opportunity.goNoGoDecision === "no-go" ? "border-red-300 bg-red-50" :
                "border-amber-300 bg-amber-50"
              }`}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2">Go/No-Go Decision</p>
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold ${
                    opportunity.goNoGoDecision === "go" ? "bg-emerald-500 text-white" :
                    opportunity.goNoGoDecision === "no-go" ? "bg-red-500 text-white" :
                    "bg-amber-500 text-white"
                  }`}>
                    {opportunity.goNoGoDecision === "go" ? "GO" :
                     opportunity.goNoGoDecision === "no-go" ? "NO-GO" : "PENDING"}
                  </span>
                  {opportunity.goNoGoRationale && (
                    <p className="text-sm text-slate">{opportunity.goNoGoRationale}</p>
                  )}
                </div>
              </div>

              {/* Eligibility Checklist */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Eligibility Checklist</p>
                <div className="space-y-2">
                  {opportunity.eligibilityChecklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-2 rounded bg-slate-50">
                      <ChecklistStatusIcon status={item.status} />
                      <div className="flex-1">
                        <p className="text-sm text-secondary">{item.item}</p>
                        {item.notes && <p className="text-xs text-slate mt-1">{item.notes}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Checklist */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Compliance Checklist</p>
                <div className="space-y-2">
                  {opportunity.complianceChecklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-2 rounded bg-slate-50">
                      <ChecklistStatusIcon status={item.status} />
                      <div className="flex-1">
                        <p className="text-sm text-secondary">{item.item}</p>
                        {item.notes && <p className="text-xs text-slate mt-1">{item.notes}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacity Checklist */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Capacity Checklist</p>
                <div className="space-y-2">
                  {opportunity.capacityChecklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-2 rounded bg-slate-50">
                      <ChecklistStatusIcon status={item.status} />
                      <div className="flex-1">
                        <p className="text-sm text-secondary">{item.item}</p>
                        {item.notes && <p className="text-xs text-slate mt-1">{item.notes}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Due Diligence Notes */}
              {opportunity.dueDiligenceNotes && (
                <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-sky-700 mb-2">Notes</p>
                  <p className="text-sm text-sky-900">{opportunity.dueDiligenceNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 05: Proposal */}
          {activePhase === 5 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 05: Proposal Development</h3>
                <p className="text-sm text-slate">Develop and submit tailored proposal based on base narrative.</p>
              </div>

              {/* Proposal Status */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Proposal Status</p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  opportunity.proposalStatus === "accepted" ? "bg-emerald-100 text-emerald-700" :
                  opportunity.proposalStatus === "submitted" ? "bg-purple-100 text-purple-700" :
                  opportunity.proposalStatus === "review" ? "bg-amber-100 text-amber-700" :
                  opportunity.proposalStatus === "drafting" ? "bg-sky-100 text-sky-700" :
                  "bg-slate-100 text-slate-700"
                }`}>
                  {opportunity.proposalStatus.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>

              {/* Base Proposal Link */}
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">Base Proposal</p>
                <Link href="/stage-1/funding/v0-grant-proposal" className="text-sm text-primary hover:underline">
                  V1.1 Grant Proposal → Use as starting point for tailoring
                </Link>
              </div>

              {/* Tailored Proposal Link */}
              {opportunity.proposalUrl && (
                <div className="p-4 rounded-lg border border-mist">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Tailored Proposal</p>
                  <Link href={opportunity.proposalUrl} className="text-sm text-primary hover:underline">
                    View funder-specific proposal →
                  </Link>
                </div>
              )}

              {/* Funder Requirements */}
              {opportunity.funderRequirements.length > 0 && (
                <div className="p-4 rounded-lg border border-mist">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Funder-Specific Requirements</p>
                  <div className="space-y-2">
                    {opportunity.funderRequirements.map((item) => (
                      <div key={item.id} className="flex items-start gap-3 p-2 rounded bg-slate-50">
                        <ChecklistStatusIcon status={item.status} />
                        <p className="text-sm text-secondary">{item.item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Proposal Notes */}
              {opportunity.proposalNotes && (
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-purple-700 mb-2">Notes</p>
                  <p className="text-sm text-purple-900">{opportunity.proposalNotes}</p>
                </div>
              )}
            </div>
          )}

          {/* Phase 06: Contracting */}
          {activePhase === 6 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Phase 06: Contracting & Handover</h3>
                <p className="text-sm text-slate">Record outcome, manage contract negotiation, and hand over to delivery team.</p>
              </div>

              {/* Outcome */}
              <div className="p-4 rounded-lg border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Outcome</p>
                {opportunity.outcome ? (
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-lg text-sm font-bold ${
                      opportunity.outcome === "won" ? "bg-emerald-500 text-white" :
                      opportunity.outcome === "lost" ? "bg-red-500 text-white" :
                      "bg-slate-500 text-white"
                    }`}>
                      {opportunity.outcome.toUpperCase()}
                    </span>
                    {opportunity.outcomeDate && (
                      <span className="text-sm text-slate">{opportunity.outcomeDate}</span>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-slate/60 italic">Outcome not yet recorded</p>
                )}
              </div>

              {/* Award Details (if won) */}
              {opportunity.outcome === "won" && opportunity.awardAmount && (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">Award Details</p>
                  <p className="text-2xl font-bold text-emerald-800">
                    {opportunity.awardCurrency || ""} {opportunity.awardAmount.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Lessons Learned (if lost/withdrawn) */}
              {(opportunity.outcome === "lost" || opportunity.outcome === "withdrawn") && opportunity.lessonsLearned && (
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">Lessons Learned</p>
                  <p className="text-sm text-amber-900">{opportunity.lessonsLearned}</p>
                </div>
              )}

              {/* Handover Checklist */}
              {opportunity.outcome === "won" && opportunity.handoverChecklist && (
                <div className="p-4 rounded-lg border border-mist">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Handover Checklist</p>
                  <div className="space-y-2">
                    {opportunity.handoverChecklist.map((item) => (
                      <div key={item.id} className="flex items-start gap-3 p-2 rounded bg-slate-50">
                        <ChecklistStatusIcon status={item.status} />
                        <p className="text-sm text-secondary">{item.item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contract Notes */}
              {opportunity.contractNotes && (
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">Contract Notes</p>
                  <p className="text-sm text-slate">{opportunity.contractNotes}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Notes & Documents */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Notes */}
        <div className="p-6 rounded-xl border border-mist bg-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-4">Activity Notes</p>
          {opportunity.notes.length > 0 ? (
            <div className="space-y-3">
              {opportunity.notes.map((note) => (
                <div key={note.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-secondary">{note.date}</span>
                    <span className="text-[9px] text-slate/60">{note.author}</span>
                    {note.phase && (
                      <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-200 text-slate-500">
                        Phase {note.phase}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate">{note.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate/60 italic">No notes yet</p>
          )}
        </div>

        {/* Documents */}
        <div className="p-6 rounded-xl border border-mist bg-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-4">Documents</p>
          {opportunity.documents.length > 0 ? (
            <div className="space-y-2">
              {opportunity.documents.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-primary/30 transition-colors"
                >
                  <span className="text-lg">📄</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-secondary">{doc.name}</p>
                    <p className="text-xs text-slate">{doc.type} • {doc.uploadedDate}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate/60 italic">No documents uploaded</p>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="mt-12 mb-20">
        <div className="flex gap-4">
          <Link
            href="/stage-1/funding/opportunities"
            className="px-6 py-3 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-sm font-medium text-secondary"
          >
            ← All Opportunities
          </Link>
          <Link
            href="/stage-1/funding/funder-landscape"
            className="px-6 py-3 rounded-lg border border-mist bg-white hover:border-secondary/30 transition-colors text-sm font-medium text-secondary"
          >
            Funder Landscape
          </Link>
        </div>
      </section>
    </div>
  );
}
