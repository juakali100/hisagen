// Types for Opportunity tracking (Grant Lifecycle Phases 02-06)
// See PRD: /hisagen/PRD-GRANT-LIFECYCLE-RECORDS.md

// Re-export funder types from landscape for consistency
export type FunderTier = "tier1" | "tier2" | "tier3" | "closed";
export type FunderType = "multilateral" | "bilateral" | "foundation" | "corporate" | "accelerator" | "ngo" | "philanthropy" | "family_office" | "trust";
export type PipelineStage = "prospect" | "engaging" | "due_diligence" | "proposing" | "submitted";

// Opportunity-specific types
export type OpportunityStatus = "active" | "paused" | "won" | "lost" | "withdrawn";
export type RelationshipTemperature = "cold" | "warming" | "warm" | "hot";
export type GoNoGoDecision = "pending" | "go" | "no-go";
export type ProposalStatus = "not_started" | "drafting" | "review" | "submitted" | "accepted" | "rejected";
export type ChecklistItemStatus = "unchecked" | "passed" | "failed" | "unclear" | "na";
export type ActivityType = "email" | "call" | "meeting" | "event" | "intro" | "submission" | "other";

export interface Contact {
  id: string;
  name: string;
  role: string;
  organization: string;
  email?: string;
  phone?: string;
  linkedIn?: string;
  notes: string;
  isPrimary: boolean;
}

export interface EngagementActivity {
  id: string;
  date: string;
  type: ActivityType;
  description: string;
  participants: string[];
  outcome: string;
  nextStep?: string;
}

export interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  status: ChecklistItemStatus;
  notes: string;
  verifiedDate?: string;
  verifiedBy?: string;
}

export interface Document {
  id: string;
  name: string;
  type: "proposal" | "budget" | "letter" | "form" | "guidelines" | "other";
  url: string;
  version?: string;
  uploadedDate: string;
  notes?: string;
}

export interface Note {
  id: string;
  date: string;
  author: string;
  content: string;
  phase?: number;
}

export interface Opportunity {
  // Identity
  id: string;
  slug: string;
  funderName: string;
  funderType: FunderType;

  // From Landscape (Phase 02)
  tier: FunderTier;
  alignmentScore: number;
  identifiedDate: string;
  qualifiedDate: string;
  qualificationRationale: string;
  landscapeNotes: string;

  // Funder Details
  grantSize: string;
  grantSizeMin?: number;
  grantSizeMax?: number;
  focus: string;
  geography: string;
  deadline?: string;
  url?: string;

  // Current State
  status: OpportunityStatus;
  currentPhase: 2 | 3 | 4 | 5 | 6;
  pipelineStage: PipelineStage;
  nextAction: string;
  nextActionDue?: string;
  owner: string;

  // Phase 03: Engagement
  contacts: Contact[];
  engagementHistory: EngagementActivity[];
  relationshipTemperature: RelationshipTemperature;
  warmIntroPath?: string;
  engagementNotes: string;

  // Phase 04: Due Diligence
  eligibilityChecklist: ChecklistItem[];
  complianceChecklist: ChecklistItem[];
  capacityChecklist: ChecklistItem[];
  goNoGoDecision: GoNoGoDecision;
  goNoGoDate?: string;
  goNoGoRationale?: string;
  dueDiligenceNotes: string;

  // Phase 05: Proposal
  proposalStatus: ProposalStatus;
  proposalUrl?: string;
  proposalVersions: string[];
  submissionDate?: string;
  proposalNotes: string;
  funderRequirements: ChecklistItem[];

  // Phase 06: Contracting (if won)
  outcome?: "won" | "lost" | "withdrawn";
  outcomeDate?: string;
  outcomeNotes?: string;
  awardAmount?: number;
  awardCurrency?: string;
  contractNotes?: string;
  handoverChecklist?: ChecklistItem[];
  grantProjectId?: string;

  // Lessons Learned (if lost/withdrawn)
  lessonsLearned?: string;
  feedbackReceived?: string;

  // Documents & Notes
  documents: Document[];
  notes: Note[];

  // Metadata
  createdDate: string;
  updatedDate: string;
}

// Standard checklist templates
export const ELIGIBILITY_CHECKLIST_TEMPLATE: Omit<ChecklistItem, "id">[] = [
  { category: "Eligibility", item: "Organization type accepted (non-profit/for-profit/hybrid)", status: "unchecked", notes: "" },
  { category: "Eligibility", item: "Geography eligible (Uganda/East Africa/Global)", status: "unchecked", notes: "" },
  { category: "Eligibility", item: "Focus area aligned (agriculture/climate/technology)", status: "unchecked", notes: "" },
  { category: "Eligibility", item: "Grant size range appropriate", status: "unchecked", notes: "" },
  { category: "Eligibility", item: "Timeline feasible", status: "unchecked", notes: "" },
  { category: "Eligibility", item: "Track record requirements met", status: "unchecked", notes: "" },
  { category: "Eligibility", item: "Partnership requirements met (if any)", status: "unchecked", notes: "" },
];

export const COMPLIANCE_CHECKLIST_TEMPLATE: Omit<ChecklistItem, "id">[] = [
  { category: "Compliance", item: "Entity registered and in good standing", status: "unchecked", notes: "" },
  { category: "Compliance", item: "Financial statements available", status: "unchecked", notes: "" },
  { category: "Compliance", item: "No conflicts of interest", status: "unchecked", notes: "" },
  { category: "Compliance", item: "Anti-terrorism/sanctions clearance", status: "unchecked", notes: "" },
  { category: "Compliance", item: "Environmental/social safeguards met", status: "unchecked", notes: "" },
];

export const CAPACITY_CHECKLIST_TEMPLATE: Omit<ChecklistItem, "id">[] = [
  { category: "Capacity", item: "Team capacity available for proposal", status: "unchecked", notes: "" },
  { category: "Capacity", item: "Implementation capacity confirmed", status: "unchecked", notes: "" },
  { category: "Capacity", item: "Financial management systems adequate", status: "unchecked", notes: "" },
  { category: "Capacity", item: "Reporting capacity confirmed", status: "unchecked", notes: "" },
  { category: "Capacity", item: "Partner commitments secured", status: "unchecked", notes: "" },
];

export const HANDOVER_CHECKLIST_TEMPLATE: Omit<ChecklistItem, "id">[] = [
  { category: "Handover", item: "Contract signed", status: "unchecked", notes: "" },
  { category: "Handover", item: "Bank details provided", status: "unchecked", notes: "" },
  { category: "Handover", item: "Reporting requirements documented", status: "unchecked", notes: "" },
  { category: "Handover", item: "Key contacts established", status: "unchecked", notes: "" },
  { category: "Handover", item: "Kick-off meeting scheduled", status: "unchecked", notes: "" },
  { category: "Handover", item: "Grant project record created", status: "unchecked", notes: "" },
];

// Helper to generate URL-safe slug
export const generateSlug = (funderName: string): string => {
  return funderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper to get phase label
export const getPhaseLabel = (phase: number): string => {
  switch (phase) {
    case 2: return "Landscape";
    case 3: return "Engagement";
    case 4: return "Due Diligence";
    case 5: return "Proposal";
    case 6: return "Contracting";
    default: return `Phase ${phase}`;
  }
};

// Helper to get status colors
export const getStatusConfig = (status: OpportunityStatus) => {
  switch (status) {
    case "active":
      return { label: "Active", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" };
    case "paused":
      return { label: "Paused", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" };
    case "won":
      return { label: "Won", bg: "bg-green-100", text: "text-green-700", border: "border-green-300" };
    case "lost":
      return { label: "Lost", bg: "bg-red-100", text: "text-red-700", border: "border-red-300" };
    case "withdrawn":
      return { label: "Withdrawn", bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-300" };
  }
};

// Helper to get pipeline stage colors
export const getPipelineStageConfig = (stage: PipelineStage) => {
  switch (stage) {
    case "prospect":
      return { label: "Prospecting", phase: 2, bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-300" };
    case "engaging":
      return { label: "Engaging", phase: 3, bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" };
    case "due_diligence":
      return { label: "Due Diligence", phase: 4, bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-300" };
    case "proposing":
      return { label: "Proposing", phase: 5, bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" };
    case "submitted":
      return { label: "Submitted", phase: 5, bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" };
  }
};
