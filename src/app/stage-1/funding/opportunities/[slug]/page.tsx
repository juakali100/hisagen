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
  Contact,
  EngagementActivity,
  Note,
  GoNoGoDecision,
  ProposalStatus,
} from "../../../../../types/opportunities";
import {
  ChecklistSection,
  ContactManager,
  ActivityTimeline,
  GoNoGoGate,
  NotesSection,
  ProposalSection,
  OutcomeSection,
} from "../../../../../components/opportunities";

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

// Inline hint component
const Hint = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs italic text-slate/50 mt-1">{children}</p>
);

export default function OpportunityPage() {
  const params = useParams();
  const slug = params.slug as string;
  const opportunity = getOpportunityBySlug(slug);

  const [activePhase, setActivePhase] = useState<number>(opportunity?.currentPhase || 2);

  // Local state for interactive components (would persist via API in production)
  const [contacts, setContacts] = useState<Contact[]>(opportunity?.contacts || []);
  const [activities, setActivities] = useState<EngagementActivity[]>(opportunity?.engagementHistory || []);
  const [notes, setNotes] = useState<Note[]>(opportunity?.notes || []);
  const [eligibilityChecklist, setEligibilityChecklist] = useState<ChecklistItem[]>(
    opportunity?.eligibilityChecklist || []
  );
  const [complianceChecklist, setComplianceChecklist] = useState<ChecklistItem[]>(
    opportunity?.complianceChecklist || []
  );
  const [capacityChecklist, setCapacityChecklist] = useState<ChecklistItem[]>(
    opportunity?.capacityChecklist || []
  );
  const [goNoGoDecision, setGoNoGoDecision] = useState<GoNoGoDecision>(
    opportunity?.goNoGoDecision || "pending"
  );
  const [goNoGoRationale, setGoNoGoRationale] = useState<string>(
    opportunity?.goNoGoRationale || ""
  );

  // Phase 05: Proposal state
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus>(
    opportunity?.proposalStatus || "not_started"
  );
  const [submissionDate, setSubmissionDate] = useState<string>(
    opportunity?.submissionDate || ""
  );
  const [funderRequirements, setFunderRequirements] = useState<ChecklistItem[]>(
    opportunity?.funderRequirements || []
  );
  const [proposalNotes, setProposalNotes] = useState<string>(
    opportunity?.proposalNotes || ""
  );

  // Phase 06: Outcome state
  const [outcome, setOutcome] = useState<"won" | "lost" | "withdrawn" | undefined>(
    opportunity?.outcome
  );
  const [outcomeDate, setOutcomeDate] = useState<string>(
    opportunity?.outcomeDate || ""
  );
  const [awardAmount, setAwardAmount] = useState<number | undefined>(
    opportunity?.awardAmount
  );
  const [awardCurrency, setAwardCurrency] = useState<string>(
    opportunity?.awardCurrency || "USD"
  );
  const [contractNotes, setContractNotes] = useState<string>(
    opportunity?.contractNotes || ""
  );
  const [handoverChecklist, setHandoverChecklist] = useState<ChecklistItem[] | undefined>(
    opportunity?.handoverChecklist
  );
  const [lessonsLearned, setLessonsLearned] = useState<string>(
    opportunity?.lessonsLearned || ""
  );
  const [feedbackReceived, setFeedbackReceived] = useState<string>(
    opportunity?.feedbackReceived || ""
  );

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

  // Calculate checklist summary for Go/No-Go gate
  const calculateChecklistStats = (items: ChecklistItem[]) => {
    const checkable = items.filter((i) => i.status !== "na");
    const passed = items.filter((i) => i.status === "passed");
    return { passed: passed.length, total: checkable.length };
  };

  const checklistSummary = {
    eligibility: calculateChecklistStats(eligibilityChecklist),
    compliance: calculateChecklistStats(complianceChecklist),
    capacity: calculateChecklistStats(capacityChecklist),
  };

  // Handle Go/No-Go decision update
  const handleGoNoGoUpdate = (decision: GoNoGoDecision, rationale: string) => {
    setGoNoGoDecision(decision);
    setGoNoGoRationale(rationale);
    // In production, this would save to API
    console.log("Go/No-Go decision updated:", { decision, rationale });
  };

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
            <Hint>The single most important thing to move this opportunity forward. Keep it specific and actionable.</Hint>
          </div>
          <div className="text-xs text-primary font-medium">{opportunity.owner}</div>
        </div>
      </section>

      {/* Phase Tabs */}
      <section className="mt-8">
        <div className="flex gap-1 border-b border-mist overflow-x-auto">
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
                <Hint>Reference material from funder research. This context informs how to tailor engagement and proposals.</Hint>
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
                <Hint>Build relationships before asking for money. Warm leads convert 3-5x better than cold applications.</Hint>
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
                <Hint>Cold = no contact yet. Warming = initial outreach made. Warm = established dialogue. Hot = active champion inside.</Hint>
              </div>

              {/* Interactive Contact Manager */}
              <ContactManager
                contacts={contacts}
                onUpdate={setContacts}
              />

              {/* Interactive Activity Timeline */}
              <ActivityTimeline
                activities={activities}
                onUpdate={setActivities}
              />

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
                <Hint>Complete this phase before investing proposal effort. A thorough Go/No-Go saves wasted work.</Hint>
              </div>

              {/* Interactive Go/No-Go Decision Gate */}
              <div>
                <GoNoGoGate
                  decision={goNoGoDecision}
                  date={opportunity.goNoGoDate}
                  rationale={goNoGoRationale}
                  onUpdate={handleGoNoGoUpdate}
                  checklistSummary={checklistSummary}
                />
                <Hint>GO = all major blockers cleared, worth investing proposal effort. NO-GO = fundamental mismatch, don&apos;t pursue.</Hint>
              </div>

              {/* Interactive Eligibility Checklist */}
              <div>
                <ChecklistSection
                  title="Eligibility Checklist"
                  items={eligibilityChecklist}
                  onUpdate={setEligibilityChecklist}
                />
                <Hint>Must-pass criteria. Any &quot;Failed&quot; item typically means No-Go unless it can be mitigated.</Hint>
              </div>

              {/* Interactive Compliance Checklist */}
              <div>
                <ChecklistSection
                  title="Compliance Checklist"
                  items={complianceChecklist}
                  onUpdate={setComplianceChecklist}
                />
                <Hint>Organizational readiness items. Can often be addressed in parallel with proposal development.</Hint>
              </div>

              {/* Interactive Capacity Checklist */}
              <div>
                <ChecklistSection
                  title="Capacity Checklist"
                  items={capacityChecklist}
                  onUpdate={setCapacityChecklist}
                />
                <Hint>Delivery feasibility. Be honest here - overpromising damages future funder relationships.</Hint>
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
            <ProposalSection
              status={proposalStatus}
              proposalUrl={opportunity.proposalUrl}
              proposalVersions={opportunity.proposalVersions}
              submissionDate={submissionDate}
              proposalNotes={proposalNotes}
              funderRequirements={funderRequirements}
              onStatusChange={setProposalStatus}
              onSubmissionDateChange={setSubmissionDate}
              onRequirementsUpdate={setFunderRequirements}
              onNotesChange={setProposalNotes}
            />
          )}

          {/* Phase 06: Contracting */}
          {activePhase === 6 && (
            <OutcomeSection
              outcome={outcome}
              outcomeDate={outcomeDate}
              outcomeNotes={opportunity.outcomeNotes}
              awardAmount={awardAmount}
              awardCurrency={awardCurrency}
              contractNotes={contractNotes}
              handoverChecklist={handoverChecklist}
              grantProjectId={opportunity.grantProjectId}
              lessonsLearned={lessonsLearned}
              feedbackReceived={feedbackReceived}
              funderName={opportunity.funderName}
              onOutcomeChange={setOutcome}
              onOutcomeDateChange={setOutcomeDate}
              onAwardAmountChange={setAwardAmount}
              onAwardCurrencyChange={setAwardCurrency}
              onContractNotesChange={setContractNotes}
              onHandoverUpdate={setHandoverChecklist}
              onLessonsLearnedChange={setLessonsLearned}
              onFeedbackChange={setFeedbackReceived}
              onCreateGrantProject={() => {
                // In production, this would create a new grant project record
                console.log("Create Grant Project triggered for:", opportunity.funderName);
                alert(`Grant Project creation would be triggered here.\n\nThis will create a new project record linked to this opportunity.\n\nFunder: ${opportunity.funderName}\nAward: ${awardCurrency} ${awardAmount?.toLocaleString()}`);
              }}
            />
          )}
        </div>
      </section>

      {/* Notes & Documents */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Interactive Notes Section */}
        <NotesSection
          notes={notes}
          currentPhase={activePhase}
          onUpdate={setNotes}
        />

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

      {/* Data Persistence Notice */}
      <section className="mt-6 p-4 rounded-lg bg-amber-50 border border-amber-200">
        <p className="text-xs text-amber-700">
          <strong>Note:</strong> Changes made on this page are stored locally in this session.
          In production, data would persist to the backend. Contact your administrator for data persistence setup.
        </p>
      </section>

      {/* Navigation */}
      <section className="mt-8 mb-20">
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
