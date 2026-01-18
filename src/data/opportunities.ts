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

  // SAMPLE: Completed/Won opportunity to demonstrate Phase 06
  {
    // Identity
    id: "opp-sample-won",
    slug: "sample-climate-foundation-won",
    funderName: "Sample Climate Foundation (Demo)",
    funderType: "foundation",

    // From Landscape (Phase 02)
    tier: "tier1",
    alignmentScore: 9,
    identifiedDate: "2025-09-15",
    qualifiedDate: "2025-09-20",
    qualificationRationale: "Strong alignment with climate-smart agriculture focus. Foundation specifically seeks East African projects with technology components.",
    landscapeNotes: "Sample foundation focused on climate adaptation in agriculture. This is a demonstration record showing a successfully won grant.",

    // Funder Details
    grantSize: "USD 75,000",
    grantSizeMin: 75000,
    grantSizeMax: 75000,
    focus: "Climate-smart agriculture technology",
    geography: "East Africa",
    deadline: "October 31, 2025",
    url: "https://example.com/sample-foundation",

    // Current State
    status: "won",
    currentPhase: 6,
    pipelineStage: "submitted",
    nextAction: "Complete handover to delivery team",
    nextActionDue: "2026-02-01",
    owner: "Keir / Pandion",

    // Phase 03: Engagement
    contacts: [
      {
        id: "contact-sample-1",
        name: "Sarah Johnson",
        role: "Program Officer",
        organization: "Sample Climate Foundation",
        email: "sjohnson@example.org",
        phone: "+1 (555) 123-4567",
        linkedIn: "https://linkedin.com/in/example",
        notes: "Primary contact. Very responsive. Championed our proposal internally.",
        isPrimary: true,
      },
      {
        id: "contact-sample-2",
        name: "Michael Chen",
        role: "Grants Manager",
        organization: "Sample Climate Foundation",
        email: "mchen@example.org",
        notes: "Handles contracts and reporting requirements.",
        isPrimary: false,
      },
    ],
    engagementHistory: [
      {
        id: "eng-sample-1",
        date: "2025-09-25",
        type: "intro",
        description: "Warm introduction via climate tech network",
        participants: ["Keir", "Sarah Johnson"],
        outcome: "Positive initial conversation. Invited to submit concept note.",
        nextStep: "Prepare concept note",
      },
      {
        id: "eng-sample-2",
        date: "2025-10-05",
        type: "meeting",
        description: "Virtual meeting to discuss concept note",
        participants: ["Keir", "Daniel", "Sarah Johnson"],
        outcome: "Strong interest. Encouraged to submit full proposal.",
        nextStep: "Develop full proposal",
      },
      {
        id: "eng-sample-3",
        date: "2025-10-28",
        type: "submission",
        description: "Full proposal submitted",
        participants: ["Pandion Team"],
        outcome: "Proposal received and acknowledged",
        nextStep: "Await review",
      },
      {
        id: "eng-sample-4",
        date: "2025-12-15",
        type: "call",
        description: "Due diligence call with foundation team",
        participants: ["Keir", "Sarah Johnson", "Michael Chen"],
        outcome: "Clarified budget questions. Very positive signals.",
        nextStep: "Await final decision",
      },
    ],
    relationshipTemperature: "hot",
    warmIntroPath: "Climate tech network introduction",
    engagementNotes: "Excellent relationship built through multiple touchpoints. Sarah was a strong internal champion.",

    // Phase 04: Due Diligence
    eligibilityChecklist: [
      { id: "sample-elig-1", category: "Eligibility", item: "Organization type accepted (non-profit/for-profit/hybrid)", status: "passed", notes: "501(c)(3) via fiscal sponsor accepted" },
      { id: "sample-elig-2", category: "Eligibility", item: "Geography eligible (Uganda/East Africa/Global)", status: "passed", notes: "East Africa focus confirmed" },
      { id: "sample-elig-3", category: "Eligibility", item: "Focus area aligned (agriculture/climate/technology)", status: "passed", notes: "Perfect alignment with climate-smart ag tech" },
      { id: "sample-elig-4", category: "Eligibility", item: "Grant size range appropriate", status: "passed", notes: "$75K within their $50-100K range" },
      { id: "sample-elig-5", category: "Eligibility", item: "Timeline feasible", status: "passed", notes: "18-month project timeline approved" },
      { id: "sample-elig-6", category: "Eligibility", item: "Track record requirements met", status: "passed", notes: "Pilot results demonstrated capability" },
      { id: "sample-elig-7", category: "Eligibility", item: "Partnership requirements met (if any)", status: "passed", notes: "Local partner MOU in place" },
    ],
    complianceChecklist: [
      { id: "sample-comp-1", category: "Compliance", item: "Entity registered and in good standing", status: "passed", notes: "Via fiscal sponsor" },
      { id: "sample-comp-2", category: "Compliance", item: "Financial statements available", status: "passed", notes: "Provided audited statements" },
      { id: "sample-comp-3", category: "Compliance", item: "No conflicts of interest", status: "passed", notes: "Declared and cleared" },
      { id: "sample-comp-4", category: "Compliance", item: "Anti-terrorism/sanctions clearance", status: "passed", notes: "Standard check completed" },
      { id: "sample-comp-5", category: "Compliance", item: "Environmental/social safeguards met", status: "passed", notes: "FPIC protocols in place" },
    ],
    capacityChecklist: [
      { id: "sample-cap-1", category: "Capacity", item: "Team capacity available for proposal", status: "passed", notes: "Dedicated team assembled" },
      { id: "sample-cap-2", category: "Capacity", item: "Implementation capacity confirmed", status: "passed", notes: "Uganda team ready" },
      { id: "sample-cap-3", category: "Capacity", item: "Financial management systems adequate", status: "passed", notes: "QuickBooks + FreeAgent setup" },
      { id: "sample-cap-4", category: "Capacity", item: "Reporting capacity confirmed", status: "passed", notes: "M&E framework developed" },
      { id: "sample-cap-5", category: "Capacity", item: "Partner commitments secured", status: "passed", notes: "MOU signed with local NGO" },
    ],
    goNoGoDecision: "go",
    goNoGoDate: "2025-10-10",
    goNoGoRationale: "Strong alignment, warm relationship, all eligibility criteria met. Clear path to proposal submission.",
    dueDiligenceNotes: "Thorough due diligence completed. All checklists passed. Foundation team very supportive throughout process.",

    // Phase 05: Proposal
    proposalStatus: "accepted",
    proposalUrl: "/stage-1/funding/proposals/sample-climate-foundation",
    proposalVersions: ["V1 Draft", "V2 Internal Review", "V3 Final Submitted"],
    submissionDate: "2025-10-28",
    proposalNotes: "Tailored from base proposal with emphasis on climate adaptation metrics and technology scalability.",
    funderRequirements: [
      { id: "sample-req-1", category: "Requirements", item: "Executive summary (2 pages max)", status: "passed", notes: "Completed" },
      { id: "sample-req-2", category: "Requirements", item: "Detailed budget with justification", status: "passed", notes: "Line-item budget approved" },
      { id: "sample-req-3", category: "Requirements", item: "Theory of change diagram", status: "passed", notes: "Visual ToC included" },
      { id: "sample-req-4", category: "Requirements", item: "Letters of support from partners", status: "passed", notes: "3 letters attached" },
      { id: "sample-req-5", category: "Requirements", item: "M&E framework", status: "passed", notes: "Included with KPIs" },
    ],

    // Phase 06: Contracting (WON!)
    outcome: "won",
    outcomeDate: "2026-01-05",
    outcomeNotes: "Proposal approved with minor budget modifications. Foundation impressed with farmer-centric approach and technology integration.",
    awardAmount: 75000,
    awardCurrency: "USD",
    contractNotes: "Standard foundation grant agreement. 18-month project period starting March 1, 2026. Quarterly narrative reports, semi-annual financial reports.",
    handoverChecklist: [
      { id: "sample-hand-1", category: "Handover", item: "Contract signed", status: "passed", notes: "Signed January 10, 2026", verifiedDate: "2026-01-10" },
      { id: "sample-hand-2", category: "Handover", item: "Bank details provided", status: "passed", notes: "Wire transfer details submitted", verifiedDate: "2026-01-12" },
      { id: "sample-hand-3", category: "Handover", item: "Reporting requirements documented", status: "passed", notes: "Quarterly narrative + semi-annual financial", verifiedDate: "2026-01-15" },
      { id: "sample-hand-4", category: "Handover", item: "Key contacts established", status: "passed", notes: "Sarah (program), Michael (grants)", verifiedDate: "2026-01-15" },
      { id: "sample-hand-5", category: "Handover", item: "Kick-off meeting scheduled", status: "unchecked", notes: "Targeting Feb 15, 2026" },
      { id: "sample-hand-6", category: "Handover", item: "Grant project record created", status: "unchecked", notes: "Pending - will create in Projects system" },
    ],
    grantProjectId: undefined, // Would link to /projects/sample-climate-foundation once created
    lessonsLearned: undefined,
    feedbackReceived: "Foundation particularly valued: (1) clear theory of change, (2) realistic budget, (3) strong local partnerships, (4) technology innovation angle.",

    // Documents & Notes
    documents: [
      { id: "doc-sample-1", name: "Final Proposal V3", type: "proposal", url: "#", version: "3.0", uploadedDate: "2025-10-28", notes: "Submitted version" },
      { id: "doc-sample-2", name: "Approved Budget", type: "budget", url: "#", uploadedDate: "2026-01-05", notes: "With foundation modifications" },
      { id: "doc-sample-3", name: "Grant Agreement", type: "letter", url: "#", uploadedDate: "2026-01-10", notes: "Signed contract" },
      { id: "doc-sample-4", name: "Foundation Guidelines", type: "guidelines", url: "#", uploadedDate: "2025-09-20", notes: "Reference for reporting" },
    ],
    notes: [
      { id: "note-sample-1", date: "2025-09-20", author: "Keir", content: "Promising lead from climate network. Strong alignment - moving to active pursuit.", phase: 2 },
      { id: "note-sample-2", date: "2025-10-10", author: "Pandion", content: "GO decision made. All checklists green. Proceeding to proposal.", phase: 4 },
      { id: "note-sample-3", date: "2025-10-28", author: "Pandion", content: "Proposal submitted on time. Good feedback from Sarah on draft.", phase: 5 },
      { id: "note-sample-4", date: "2026-01-05", author: "Keir", content: "WON! Great news to start the year. Minor budget mods accepted.", phase: 6 },
      { id: "note-sample-5", date: "2026-01-15", author: "Pandion", content: "Handover in progress. Most items complete. Kick-off call being scheduled.", phase: 6 },
    ],

    // Metadata
    createdDate: "2025-09-20",
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
