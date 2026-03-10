// HISAGEN Funding Landscape Data
// Source of truth: HISAGEN-FUNDER-PIPELINE.md (delivery/grants-fundraising/02-landscape-scanning/)
// Phase E eligibility filter applied 2026-03-10: both HISAGEN entities are for-profit
// Sync chain: Pipeline tracker -> this file -> page renders
// Last synced: 2026-03-10

export type FunderTier = "tier1" | "tier2";
export type FunderCategory =
  | "climate-adaptation"
  | "agricultural-food"
  | "us-foundation"
  | "uk-trust"
  | "accelerator";

export type EligibilityStatus =
  | "eligible"
  | "ineligible"
  | "conditional"
  | "reclassified"
  | "deprioritised";

export interface CuratedFunder {
  id: string;
  name: string;
  shortName: string;
  tier: FunderTier;
  category: FunderCategory;
  grantRange: string;
  grantMin?: number;
  grantMax?: number;
  currency: string;
  deadline?: string;
  deadlineNote?: string;
  applyVia: string;
  whyStrongFit: string;
  process?: string;
  consideration?: string;
  url?: string;
  eligibility: EligibilityStatus;
  eligibilityNote: string;
  score: number;
}

export interface TimelineEntry {
  when: string;
  what: string;
  funder: string;
  funderId: string;
  urgency: "urgent" | "high" | "medium" | "low";
}

export type PhaseStatus = "complete" | "active" | "in-progress" | "not-started" | "foundation-ready";

export interface GrantPhase {
  number: number;
  name: string;
  status: PhaseStatus;
  statusLabel: string;
  description: string;
}

export interface StrategicRecommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
}

export interface KeirAction {
  id: string;
  action: string;
  funder?: string;
  byWhen: string;
  status: "not-started" | "in-progress" | "done";
}

// ─────────────────────────────────────────────────────────────
// ALL FUNDERS — with eligibility status from Phase E filter
// ─────────────────────────────────────────────────────────────

const allFundersRaw: CuratedFunder[] = [
  // --- TIER 1 ---
  {
    id: "cfh-foundation",
    name: "Conservation, Food & Health Foundation",
    shortName: "CFH Foundation",
    tier: "tier1",
    category: "us-foundation",
    grantRange: "$25,000 - $50,000",
    grantMin: 25000,
    grantMax: 50000,
    currency: "USD",
    deadline: "June 15, 2026",
    deadlineNote: "Concept note deadline",
    applyVia: "Either entity (non-US orgs accepted)",
    whyStrongFit:
      "Explicitly seeks seed money for organisations building track records in applied research and pilot projects in under-funded areas. HISAGEN's exact stage and profile.",
    process: "Short concept application via online portal. Invited proposals follow.",
    eligibility: "ineligible",
    eligibilityNote: "Nonprofit/NGO only. All IP must be public. Concept draft exists — usable if nonprofit entity established.",
    score: 4.35,
  },
  {
    id: "afcia",
    name: "AFCIA (Adaptation Fund Climate Innovation Accelerator)",
    shortName: "AFCIA",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "Up to $250,000",
    grantMax: 250000,
    currency: "USD",
    deadlineNote: "Confirm timing with UNDP Uganda",
    applyVia: "UNDP Uganda / UNEP CTCN",
    whyStrongFit:
      "Innovation in climate adaptation is the exact mandate. Designed to generate evidence for scaling. 44 grants in 33 countries. Open to entrepreneurs and young innovators.",
    process: "Through UNDP Uganda country office.",
    eligibility: "ineligible",
    eligibilityNote: "CSO/NGO only (despite 'entrepreneur' marketing). All 44 grants awarded to nonprofit entities.",
    score: 4.35,
  },
  {
    id: "aaap-gca",
    name: "AAAP (Africa Adaptation Acceleration Program)",
    shortName: "AAAP/YouthADAPT",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "Up to $30,000 (YouthADAPT)",
    grantMax: 30000,
    currency: "USD",
    deadline: "TBC",
    deadlineNote: "YouthADAPT — founder must be aged 18-35. Check with Keir.",
    applyVia: "Direct (YouthADAPT only)",
    whyStrongFit:
      "YouthADAPT In-Country Challenge: up to $30K + 12-month accelerator for youth-led MSMEs. For-profit eligible if founder aged 18-35.",
    consideration:
      "Main AAAP programme (EUR 500K-5M) routes through MDBs — not direct grants. YouthADAPT is the only for-profit entry point. Requires 2+ years revenue.",
    eligibility: "conditional",
    eligibilityNote: "YouthADAPT requires founder aged 18-35. Main AAAP programme routes through MDBs, not available directly. Keir must confirm age eligibility.",
    score: 4.10,
  },
  {
    id: "echoing-green",
    name: "Echoing Green Fellowship",
    shortName: "Echoing Green",
    tier: "tier1",
    category: "us-foundation",
    grantRange: "$100,000 (unrestricted) + 18 months support",
    grantMin: 100000,
    grantMax: 100000,
    currency: "USD",
    deadline: "September 2026",
    deadlineNote: "Opens Sep 2026 (2026 cycle closed; next likely early 2027)",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "Explicitly accepts for-profit: 'Does my organization need to be structured as a nonprofit? No, all organization structures are eligible.' For-profit funding as recoverable grants. Past fellows include Farmerline (ag-tech for smallholders in Africa).",
    process: "Open application. Highly competitive (~4,000 applications, 15-20 fellows selected).",
    url: "https://www.echoinggreen.org/fellowship",
    eligibility: "eligible",
    eligibilityNote: "Explicitly accepts for-profit. Recoverable grant — repayment only if valued >$5M or >$2M revenue with net profit within 5 years.",
    score: 4.05,
  },
  {
    id: "afdb-taat",
    name: "AfDB TAAT Phase II",
    shortName: "AfDB TAAT",
    tier: "tier1",
    category: "climate-adaptation",
    grantRange: "Variable (via Calls for Proposals)",
    currency: "USD",
    deadlineNote: "Monitor for CFP",
    applyVia: "HISAGEN Africa Ltd",
    whyStrongFit:
      "Technologies for African Agricultural Transformation \u2014 bio-fertilizer is exactly this. Perfect mandate alignment.",
    consideration: "No open application route currently. Need to monitor for Calls for Proposals.",
    eligibility: "ineligible",
    eligibilityNote: "Private sector as partner/implementer only, not direct recipient. Partner route possible alongside public institution.",
    score: 4.00,
  },
  // --- TIER 2 ---
  {
    id: "mulago",
    name: "Mulago Foundation",
    shortName: "Mulago",
    tier: "tier2",
    category: "us-foundation",
    grantRange: "$100K fellowship, potential $340K portfolio",
    grantMin: 100000,
    grantMax: 340000,
    currency: "USD",
    deadlineNote: "No direct applications \u2014 referral-sourced (Aug-Oct cycle)",
    applyVia: "Referral only",
    whyStrongFit:
      "Explicitly funds for-profits: 'We back both for-profits and nonprofits: mostly grants, sometimes debt or equity.' Portfolio includes for-profit companies (e.g. Pula \u2014 crop insurance). ~60% of fellows convert to long-term portfolio.",
    url: "https://www.mulagofoundation.org/",
    eligibility: "eligible",
    eligibilityNote: "Explicitly funds for-profits. Referral-sourced only — Keir needs to build network connections before Aug-Oct sourcing window.",
    score: 3.85,
  },
  {
    id: "rockefeller-filab",
    name: "Rockefeller Foundation Innovation Lab",
    shortName: "Rockefeller FILab",
    tier: "tier2",
    category: "us-foundation",
    grantRange: "$100K first round, follow-on to $2.5M",
    grantMin: 100000,
    grantMax: 2500000,
    currency: "USD",
    deadlineNote: "Q3 2026 expected opening",
    applyVia: "Open application (when announced)",
    whyStrongFit:
      "Food security innovation focus. Strong growth ladder if initial funding secured.",
    eligibility: "ineligible",
    eligibilityNote: "Nonprofit/community organisations only. 'Food Initiative Lab' not clearly active as distinct programme.",
    score: 3.80,
  },
  {
    id: "ifad",
    name: "IFAD (International Fund for Agricultural Development)",
    shortName: "IFAD",
    tier: "tier2",
    category: "agricultural-food",
    grantRange: "Up to $1.5M",
    grantMax: 1500000,
    currency: "USD",
    deadlineNote: "Monitor for new calls (AgriConnect closed)",
    applyVia: "Direct application when calls open",
    whyStrongFit:
      "Accepts private sector: eligibility extends to 'private sector entities, alongside consulting organizations, alliances of partner service providers, specialized NGOs.' 25% co-financing required.",
    consideration: "AgriConnect specifically is CLOSED (Ernst & Young selected). IFAD regularly issues new calls across similar themes.",
    url: "https://www.ifad.org/en/call-for-proposals",
    eligibility: "eligible",
    eligibilityNote: "Accepts private sector with 25% co-financing. No current open call — monitor monthly.",
    score: 3.75,
  },
  {
    id: "trustafrica",
    name: "TrustAfrica",
    shortName: "TrustAfrica",
    tier: "tier2",
    category: "agricultural-food",
    grantRange: "$20,000 - $30,000",
    grantMin: 20000,
    grantMax: 30000,
    currency: "USD",
    deadlineNote: "Register on Fluxx Grants platform now",
    applyVia: "Fluxx Grants platform",
    whyStrongFit:
      "Agroecology in Africa focus. Has funded Uganda projects previously.",
    eligibility: "ineligible",
    eligibilityNote: "CSO-focused. Funds civil society strengthening, not private sector.",
    score: 3.75,
  },
  {
    id: "climate-finance-lab",
    name: "Climate Finance Lab",
    shortName: "Climate Finance Lab",
    tier: "tier2",
    category: "climate-adaptation",
    grantRange: "$150,000 - $250,000 (milestone-based)",
    grantMin: 150000,
    grantMax: 250000,
    currency: "USD",
    deadlineNote: "2026 cycle closed (Nov 2025 deadline)",
    applyVia: "Open application",
    whyStrongFit:
      "Accepts for-profit but funds financial instruments, not projects/operations. Misaligned unless HISAGEN proposes a blended finance vehicle.",
    eligibility: "deprioritised",
    eligibilityNote: "Accepts for-profit but funds financial instruments only, not projects. 2026 cycle closed. Misaligned at Stage 1.",
    score: 3.25,
  },
  {
    id: "noel-buxton",
    name: "Noel Buxton Trust",
    shortName: "Noel Buxton Trust",
    tier: "tier2",
    category: "uk-trust",
    grantRange: "GBP 5,000/year for up to 3 years",
    grantMin: 5000,
    grantMax: 15000,
    currency: "GBP",
    deadlineNote: "Rolling applications, decisions take up to 6 months",
    applyVia: "Direct application",
    whyStrongFit:
      "One of the most accessible UK trusts for Uganda-based work.",
    eligibility: "ineligible",
    eligibilityNote: "Charity/NGO only. Max GBP 5K/year — not worth partner-route effort at this grant size.",
    score: 3.05,
  },
];

// ─────────────────────────────────────────────────────────────
// FILTERED VIEWS
// ─────────────────────────────────────────────────────────────

export const allCuratedFunders: CuratedFunder[] = allFundersRaw;

export const eligibleFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "eligible"
);

export const conditionalFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "conditional"
);

export const ineligibleFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "ineligible"
);

export const deprioritisedFunders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.eligibility === "deprioritised"
);

// Backward-compatible tier views (include all funders regardless of eligibility)
export const tier1Funders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.tier === "tier1"
);

export const tier2Funders: CuratedFunder[] = allFundersRaw.filter(
  (f) => f.tier === "tier2"
);

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

export const getFunderById = (id: string): CuratedFunder | undefined =>
  allCuratedFunders.find((f) => f.id === id);

export const getFundersByCategory = (category: FunderCategory): CuratedFunder[] =>
  allCuratedFunders.filter((f) => f.category === category);

// ─────────────────────────────────────────────────────────────
// GRANT PHASES (6-phase pre-award methodology)
// ─────────────────────────────────────────────────────────────

export const grantPhases: GrantPhase[] = [
  {
    number: 1,
    name: "Vision &amp; Strategy",
    status: "complete",
    statusLabel: "Substantial",
    description: "Theory of Change, funding strategy, adaptation narrative, and programme goals.",
  },
  {
    number: 2,
    name: "Landscape Scanning",
    status: "complete",
    statusLabel: "Complete",
    description: "Funder identification, scoring, tiering, and category mapping across 4 priority categories.",
  },
  {
    number: 3,
    name: "Case for Support",
    status: "active",
    statusLabel: "Active &mdash; Draft",
    description: "Master Case for Support and funder-adapted versions for grant applications.",
  },
  {
    number: 4,
    name: "Donor Engagement",
    status: "in-progress",
    statusLabel: "In Progress",
    description: "Outreach planning, relationship building, warm introductions, and Keir action items.",
  },
  {
    number: 5,
    name: "Due Diligence &amp; Eligibility",
    status: "complete",
    statusLabel: "Complete",
    description: "For-profit eligibility filter applied. 8 of 11 scored funders ineligible. Pipeline reduced to 3 eligible + 1 conditional.",
  },
  {
    number: 6,
    name: "Proposal Development",
    status: "foundation-ready",
    statusLabel: "Foundation Ready",
    description: "Base Proposal created (10 reusable blocks). Funder-specific proposals to follow for eligible funders.",
  },
];

// ─────────────────────────────────────────────────────────────
// APPLICATION TIMELINE (eligible funders only)
// ─────────────────────────────────────────────────────────────

export const applicationTimeline: TimelineEntry[] = [
  {
    when: "Mar 2026",
    what: "Confirm founder age (18-35 eligibility)",
    funder: "AAAP/YouthADAPT",
    funderId: "aaap-gca",
    urgency: "high",
  },
  {
    when: "Mar 2026",
    what: "Research Mulago network connections",
    funder: "Mulago Foundation",
    funderId: "mulago",
    urgency: "high",
  },
  {
    when: "Monthly",
    what: "Monitor for new calls",
    funder: "IFAD",
    funderId: "ifad",
    urgency: "medium",
  },
  {
    when: "Jul\u2013Aug 2026",
    what: "Prepare fellowship application",
    funder: "Echoing Green (Sep cycle or early 2027)",
    funderId: "echoing-green",
    urgency: "high",
  },
  {
    when: "Aug\u2013Oct 2026",
    what: "Build referral pathway",
    funder: "Mulago Foundation (sourcing window)",
    funderId: "mulago",
    urgency: "medium",
  },
];

// ─────────────────────────────────────────────────────────────
// LANDSCAPE SUMMARY STATS
// ─────────────────────────────────────────────────────────────

export const landscapeStats = {
  totalResearched: 40,
  totalShortlisted: 11,
  // Pre-filter counts (for context)
  tier1Count: 5,
  tier2Count: 6,
  tier1PipelineValue: "$175K - $5.6M",
  tier2PipelineValue: "$195K - $2.1M",
  totalPipelineValue: "$370K - $7.7M",
  // Post-filter counts (reality)
  eligibleTier1Count: 1,
  eligibleTier2Count: 2,
  conditionalCount: 1,
  ineligibleCount: 8,
  eligiblePipelineValue: "$200K - $1.7M",
  categories: [
    "Climate Adaptation Funds",
    "Agricultural & Food Security Foundations",
    "US Private Foundations",
    "UK Trusts & Foundations",
  ],
};

// ─────────────────────────────────────────────────────────────
// STRATEGIC RECOMMENDATIONS (for-profit constraint)
// ─────────────────────────────────────────────────────────────

export const strategicRecommendations: StrategicRecommendation[] = [
  {
    id: "nonprofit-entity",
    title: "Establish a Nonprofit Entity",
    description:
      "Create HISAGEN Foundation or Uganda-registered NGO specifically for grant-eligible research and farmer programme work. Common pattern in this space.",
    impact: "Would reopen the full grant pipeline (8 funders, $370K-$7.7M potential).",
  },
  {
    id: "partner-led",
    title: "Partner-Led Applications",
    description:
      "NARO or university as lead applicant, HISAGEN as implementing partner. Opens some doors (AfDB TAAT, CFH Foundation) but dependent on relationship and slower.",
    impact: "Partial access. 2-3 funders potentially accessible via partner route.",
  },
  {
    id: "for-profit-capital",
    title: "Pivot to For-Profit-Friendly Capital",
    description:
      "Impact investment, climate accelerators, venture philanthropy, blended finance. Different funders entirely \u2014 requires a new landscape scan.",
    impact: "New pipeline (not yet scanned). Significant gap in current research.",
  },
];

// ─────────────────────────────────────────────────────────────
// KEIR ACTION ITEMS
// ─────────────────────────────────────────────────────────────

export const keirActionItems: KeirAction[] = [
  {
    id: "confirm-age",
    action: "Confirm founder age \u2014 is any co-founder aged 18-35?",
    funder: "AAAP/YouthADAPT",
    byWhen: "Next call",
    status: "not-started",
  },
  {
    id: "mulago-network",
    action: "Research Mulago network connections \u2014 any contacts through Locus AG, NARO, or ag-tech circles?",
    funder: "Mulago Foundation",
    byWhen: "End of March",
    status: "not-started",
  },
  {
    id: "funding-tiers",
    action: "Confirm CfS funding tier amounts ($50-75K / $150-250K / $500K-1M). Still accurate?",
    byWhen: "Next call",
    status: "not-started",
  },
  {
    id: "nonprofit-entity",
    action: "Discuss nonprofit entity option \u2014 would HISAGEN consider establishing a nonprofit for grant-eligible research work?",
    byWhen: "Next call",
    status: "not-started",
  },
  {
    id: "afdb-contacts",
    action: "AfDB Uganda country office \u2014 any contacts for partner-route opportunities?",
    funder: "AfDB TAAT",
    byWhen: "When convenient",
    status: "not-started",
  },
];
