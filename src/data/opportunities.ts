// Opportunity Records Data
// See PRD: /hisagen/PRD-GRANT-LIFECYCLE-RECORDS.md

import {
  Opportunity,
  ELIGIBILITY_CHECKLIST_TEMPLATE,
  COMPLIANCE_CHECKLIST_TEMPLATE,
  CAPACITY_CHECKLIST_TEMPLATE,
} from "../types/opportunities";

// Helper to add IDs to checklist items
const withIds = (items: Omit<typeof ELIGIBILITY_CHECKLIST_TEMPLATE[0], "id">[], prefix: string) =>
  items.map((item, idx) => ({ ...item, id: `${prefix}-${idx + 1}` }));

export const opportunities: Opportunity[] = [
  {
    // Identity
    id: "opp-001",
    slug: "estdev-green-digital-transition",
    funderName: "ESTDEV Green/Digital Transition",
    funderType: "bilateral",

    // From Landscape (Phase 02)
    tier: "tier1",
    alignmentScore: 7,
    identifiedDate: "2026-01-10",
    qualifiedDate: "2026-01-15",
    qualificationRationale: "Open deadline with strong alignment to HISAGEN's digital platform and green agriculture focus. EUR 50-150K range is appropriate for Stage 1.",
    landscapeNotes: "Estonian Development Cooperation program focusing on green and digital transition in target countries including Uganda.",

    // Funder Details
    grantSize: "EUR 50,000 - 150,000",
    grantSizeMin: 50000,
    grantSizeMax: 150000,
    focus: "Green and digital transition",
    geography: "Uganda, Kenya, Tanzania, Botswana, Namibia, Zambia",
    deadline: "January 30, 2026",
    url: "https://www.vm.ee/en/development-cooperation",

    // Current State
    status: "active",
    currentPhase: 4,
    pipelineStage: "due_diligence",
    nextAction: "Verify eligibility criteria and prepare application",
    nextActionDue: "2026-01-20",
    owner: "Keir / Pandion",

    // Phase 03: Engagement
    contacts: [],
    engagementHistory: [
      {
        id: "eng-001",
        date: "2026-01-15",
        type: "other",
        description: "Reviewed ESTDEV application guidelines and eligibility criteria",
        participants: ["Pandion"],
        outcome: "Clear understanding of requirements",
        nextStep: "Complete eligibility checklist",
      },
    ],
    relationshipTemperature: "cold",
    warmIntroPath: undefined,
    engagementNotes: "No direct contact yet. Application-based process.",

    // Phase 04: Due Diligence
    eligibilityChecklist: withIds(ELIGIBILITY_CHECKLIST_TEMPLATE, "estdev-elig"),
    complianceChecklist: withIds(COMPLIANCE_CHECKLIST_TEMPLATE, "estdev-comp"),
    capacityChecklist: withIds(CAPACITY_CHECKLIST_TEMPLATE, "estdev-cap"),
    goNoGoDecision: "pending",
    goNoGoDate: undefined,
    goNoGoRationale: undefined,
    dueDiligenceNotes: "Need to verify: (1) HISAGEN USA eligibility as applicant, (2) Digital platform component qualifies as 'digital transition', (3) Timeline alignment with Jan 30 deadline.",

    // Phase 05: Proposal
    proposalStatus: "not_started",
    proposalUrl: undefined,
    proposalVersions: [],
    submissionDate: undefined,
    proposalNotes: "Will tailor from V1.1 base proposal. Emphasize digital marketplace and green agriculture angles.",
    funderRequirements: [],

    // Phase 06: Not yet
    outcome: undefined,
    outcomeDate: undefined,
    outcomeNotes: undefined,
    awardAmount: undefined,
    awardCurrency: undefined,
    contractNotes: undefined,
    handoverChecklist: undefined,
    grantProjectId: undefined,
    lessonsLearned: undefined,
    feedbackReceived: undefined,

    // Documents & Notes
    documents: [],
    notes: [
      {
        id: "note-001",
        date: "2026-01-18",
        author: "Pandion",
        content: "Created opportunity record. Moving from landscape to active pursuit due to imminent deadline (12 days).",
        phase: 2,
      },
    ],

    // Metadata
    createdDate: "2026-01-18",
    updatedDate: "2026-01-18",
  },

  {
    // Identity
    id: "opp-002",
    slug: "japan-embassy-uganda-grassroots",
    funderName: "Japan Embassy Uganda - Grassroots",
    funderType: "bilateral",

    // From Landscape (Phase 02)
    tier: "tier1",
    alignmentScore: 6,
    identifiedDate: "2026-01-10",
    qualifiedDate: "2026-01-15",
    qualificationRationale: "Community-focused funding appropriate for farmer training component. Non-profit eligibility needs verification.",
    landscapeNotes: "Japanese government grassroots grant program through Embassy in Kampala. Focus on direct community benefit.",

    // Funder Details
    grantSize: "Up to USD 65,000",
    grantSizeMin: 0,
    grantSizeMax: 65000,
    focus: "Grassroots community benefit",
    geography: "Uganda only",
    deadline: "February 15, 2026",
    url: undefined,

    // Current State
    status: "active",
    currentPhase: 4,
    pipelineStage: "due_diligence",
    nextAction: "Confirm non-profit eligibility requirements",
    nextActionDue: "2026-01-25",
    owner: "Daniel / HISAGEN Uganda",

    // Phase 03: Engagement
    contacts: [],
    engagementHistory: [],
    relationshipTemperature: "cold",
    warmIntroPath: undefined,
    engagementNotes: "Daniel to lead as Uganda-based opportunity. May need HISAGEN Uganda entity or partner NGO.",

    // Phase 04: Due Diligence
    eligibilityChecklist: withIds(ELIGIBILITY_CHECKLIST_TEMPLATE, "japan-elig"),
    complianceChecklist: withIds(COMPLIANCE_CHECKLIST_TEMPLATE, "japan-comp"),
    capacityChecklist: withIds(CAPACITY_CHECKLIST_TEMPLATE, "japan-cap"),
    goNoGoDecision: "pending",
    goNoGoDate: undefined,
    goNoGoRationale: undefined,
    dueDiligenceNotes: "Key question: Does HISAGEN Uganda qualify, or do we need a registered NGO partner? Daniel to research.",

    // Phase 05: Proposal
    proposalStatus: "not_started",
    proposalUrl: undefined,
    proposalVersions: [],
    submissionDate: undefined,
    proposalNotes: "Would focus on farmer training and community benefit components. Smaller scope than full HISAGEN proposal.",
    funderRequirements: [],

    // Phase 06: Not yet
    outcome: undefined,
    outcomeDate: undefined,
    outcomeNotes: undefined,
    awardAmount: undefined,
    awardCurrency: undefined,
    contractNotes: undefined,
    handoverChecklist: undefined,
    grantProjectId: undefined,
    lessonsLearned: undefined,
    feedbackReceived: undefined,

    // Documents & Notes
    documents: [],
    notes: [
      {
        id: "note-001",
        date: "2026-01-18",
        author: "Pandion",
        content: "Created opportunity record. Daniel assigned as owner for Uganda-based opportunity.",
        phase: 2,
      },
    ],

    // Metadata
    createdDate: "2026-01-18",
    updatedDate: "2026-01-18",
  },

  {
    // Identity
    id: "opp-003",
    slug: "carbon-thirteen",
    funderName: "Carbon Thirteen",
    funderType: "accelerator",

    // From Landscape (Phase 02)
    tier: "tier2",
    alignmentScore: 8,
    identifiedDate: "2026-01-10",
    qualifiedDate: "2026-01-18",
    qualificationRationale: "Strong alignment with climate tech focus. Keir has warm connection - prioritize relationship-building.",
    landscapeNotes: "UK-based climate tech accelerator. Provides program support plus investment. Keir has existing connection.",

    // Funder Details
    grantSize: "Accelerator program + investment",
    grantSizeMin: undefined,
    grantSizeMax: undefined,
    focus: "Early-stage climate ventures",
    geography: "Global",
    deadline: undefined,
    url: "https://carbonthirteen.com",

    // Current State
    status: "active",
    currentPhase: 3,
    pipelineStage: "engaging",
    nextAction: "Keir to make warm intro",
    nextActionDue: undefined,
    owner: "Keir",

    // Phase 03: Engagement
    contacts: [],
    engagementHistory: [],
    relationshipTemperature: "warming",
    warmIntroPath: "Keir has existing connection - to be activated",
    engagementNotes: "Relationship-based opportunity. Keir to leverage connection for intro.",

    // Phase 04: Due Diligence
    eligibilityChecklist: withIds(ELIGIBILITY_CHECKLIST_TEMPLATE, "c13-elig"),
    complianceChecklist: withIds(COMPLIANCE_CHECKLIST_TEMPLATE, "c13-comp"),
    capacityChecklist: withIds(CAPACITY_CHECKLIST_TEMPLATE, "c13-cap"),
    goNoGoDecision: "pending",
    goNoGoDate: undefined,
    goNoGoRationale: undefined,
    dueDiligenceNotes: "Need to understand: cohort timing, equity terms, time commitment required.",

    // Phase 05: Proposal
    proposalStatus: "not_started",
    proposalUrl: undefined,
    proposalVersions: [],
    submissionDate: undefined,
    proposalNotes: "Accelerator applications typically different format. Wait for engagement before tailoring.",
    funderRequirements: [],

    // Phase 06: Not yet
    outcome: undefined,
    outcomeDate: undefined,
    outcomeNotes: undefined,
    awardAmount: undefined,
    awardCurrency: undefined,
    contractNotes: undefined,
    handoverChecklist: undefined,
    grantProjectId: undefined,
    lessonsLearned: undefined,
    feedbackReceived: undefined,

    // Documents & Notes
    documents: [],
    notes: [
      {
        id: "note-001",
        date: "2026-01-18",
        author: "Pandion",
        content: "Created opportunity record. Moved to Engaging phase - Keir to activate warm connection.",
        phase: 3,
      },
    ],

    // Metadata
    createdDate: "2026-01-18",
    updatedDate: "2026-01-18",
  },

  {
    // Identity
    id: "opp-004",
    slug: "mackenzie-scott-yield-giving",
    funderName: "MacKenzie Scott / Yield Giving",
    funderType: "philanthropy",

    // From Landscape (Phase 02)
    tier: "tier2",
    alignmentScore: 8,
    identifiedDate: "2026-01-18",
    qualifiedDate: "2026-01-18",
    qualificationRationale: "Major philanthropy with climate and equity focus. Keir has connection pathway. No traditional application - relationship-driven.",
    landscapeNotes: "MacKenzie Scott's philanthropy. Known for large unrestricted grants. No formal application - team identifies organizations. Can submit for consideration via yieldgiving.com.",

    // Funder Details
    grantSize: "Major unrestricted grants ($1M+)",
    grantSizeMin: 1000000,
    grantSizeMax: undefined,
    focus: "High-impact nonprofits, climate, equity",
    geography: "Global",
    deadline: undefined,
    url: "https://yieldgiving.com",

    // Current State
    status: "active",
    currentPhase: 3,
    pipelineStage: "engaging",
    nextAction: "Keir to explore connection pathway",
    nextActionDue: undefined,
    owner: "Keir",

    // Phase 03: Engagement
    contacts: [],
    engagementHistory: [],
    relationshipTemperature: "cold",
    warmIntroPath: "Keir has connection to explore",
    engagementNotes: "Non-traditional funder. Focus on visibility and being 'findable'. Keir to explore connection.",

    // Phase 04: Due Diligence
    eligibilityChecklist: withIds(ELIGIBILITY_CHECKLIST_TEMPLATE, "ms-elig"),
    complianceChecklist: withIds(COMPLIANCE_CHECKLIST_TEMPLATE, "ms-comp"),
    capacityChecklist: withIds(CAPACITY_CHECKLIST_TEMPLATE, "ms-cap"),
    goNoGoDecision: "pending",
    goNoGoDate: undefined,
    goNoGoRationale: undefined,
    dueDiligenceNotes: "Different model - they find you. Focus on: being visible, building track record, Keir's connection pathway.",

    // Phase 05: Proposal
    proposalStatus: "not_started",
    proposalUrl: undefined,
    proposalVersions: [],
    submissionDate: undefined,
    proposalNotes: "No traditional proposal. May submit to yieldgiving.com for consideration, but primarily relationship-driven.",
    funderRequirements: [],

    // Phase 06: Not yet
    outcome: undefined,
    outcomeDate: undefined,
    outcomeNotes: undefined,
    awardAmount: undefined,
    awardCurrency: undefined,
    contractNotes: undefined,
    handoverChecklist: undefined,
    grantProjectId: undefined,
    lessonsLearned: undefined,
    feedbackReceived: undefined,

    // Documents & Notes
    documents: [],
    notes: [
      {
        id: "note-001",
        date: "2026-01-18",
        author: "Pandion",
        content: "Created opportunity record. Keir suggested - has connection to explore. Long-term cultivation opportunity.",
        phase: 3,
      },
    ],

    // Metadata
    createdDate: "2026-01-18",
    updatedDate: "2026-01-18",
  },
];

// Helper to get opportunity by slug
export const getOpportunityBySlug = (slug: string): Opportunity | undefined => {
  return opportunities.find((opp) => opp.slug === slug);
};

// Helper to get opportunities by stage
export const getOpportunitiesByStage = (stage: Opportunity["pipelineStage"]): Opportunity[] => {
  return opportunities.filter((opp) => opp.pipelineStage === stage);
};

// Helper to get opportunities by status
export const getOpportunitiesByStatus = (status: Opportunity["status"]): Opportunity[] => {
  return opportunities.filter((opp) => opp.status === status);
};

// Helper to get active opportunities
export const getActiveOpportunities = (): Opportunity[] => {
  return opportunities.filter((opp) => opp.status === "active");
};
