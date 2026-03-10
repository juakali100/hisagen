// HISAGEN Funding Landscape Data
// Source of truth: HISAGEN-FUNDER-PIPELINE.md (delivery/grants-fundraising/02-landscape-scanning/)
// Phase E: for-profit eligibility filter (2026-03-10) — 8 of 11 traditional funders ineligible
// Phase F: for-profit-friendly scan (2026-03-10) — 7 new funders from venture philanthropy, DFIs, accelerators, govt programmes
// Sync chain: Pipeline tracker -> this file -> page renders
// Last synced: 2026-03-10 (Phase F)

export type FunderTier = "tier1" | "tier2";
export type FunderCategory =
  | "climate-adaptation"
  | "agricultural-food"
  | "us-foundation"
  | "uk-trust"
  | "accelerator"
  | "venture-philanthropy"
  | "dfi-private-sector"
  | "government-innovation"
  | "impact-fund";

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
  // --- TIER 1 (Phase F: for-profit-friendly scan) ---
  {
    id: "start-ii",
    name: "Uganda START II (Strengthening Agricultural Resilience Through Trade)",
    shortName: "START II",
    tier: "tier1",
    category: "dfi-private-sector",
    grantRange: "EUR 50,000 - 200,000",
    grantMin: 50000,
    grantMax: 200000,
    currency: "EUR",
    deadline: "Rolling (current round open)",
    deadlineNote: "EU-funded via GIZ. Active now \u2014 rolling applications. Check Uganda registration requirements.",
    applyVia: "HISAGEN Africa Ltd (must be registered in Uganda)",
    whyStrongFit:
      "EU-funded programme explicitly targeting private sector agribusinesses in Uganda. Grants, not loans. Bio-fertilizer improving smallholder yields is exactly the mandate. Active NOW with rolling applications.",
    process: "Application through GIZ Uganda. Requires Uganda-registered entity.",
    url: "https://www.startfacility.org",
    eligibility: "eligible",
    eligibilityNote: "Explicitly targets for-profit agribusinesses. HISAGEN Africa Ltd qualifies. Active rolling applications.",
    score: 4.35,
  },
  {
    id: "village-capital",
    name: "Village Capital (VilCap) Africa Agtech Programme",
    shortName: "Village Capital",
    tier: "tier1",
    category: "accelerator",
    grantRange: "$50,000 - $100,000 (investment, not grant)",
    grantMin: 50000,
    grantMax: 100000,
    currency: "USD",
    deadlineNote: "Monitor for next Africa ag-tech cohort (typically Q2-Q3)",
    applyVia: "HISAGEN USA Inc. or HISAGEN Africa Ltd",
    whyStrongFit:
      "Venture-first accelerator model \u2014 explicitly funds for-profit companies. 12-week programme + investment. Past Africa cohorts included ag-tech and climate resilience. Peer-selection model (entrepreneurs choose who gets funded).",
    process: "Competitive application when cohort opens. 12-week programme.",
    url: "https://vilcap.com",
    eligibility: "eligible",
    eligibilityNote: "For-profit by design. Investment model (equity/convertible note), not grant. Monitor for next Africa ag-tech cohort.",
    score: 4.35,
  },
  {
    id: "acumen-araf",
    name: "Acumen Resilient Agriculture Fund (ARAF)",
    shortName: "Acumen/ARAF",
    tier: "tier1",
    category: "impact-fund",
    grantRange: "$250,000 - $1,500,000",
    grantMin: 250000,
    grantMax: 1500000,
    currency: "USD",
    deadlineNote: "Pipeline-driven. Proactive outreach recommended.",
    applyVia: "HISAGEN Africa Ltd (East Africa focus)",
    whyStrongFit:
      "GCF-backed fund explicitly targeting for-profit early-stage agribusinesses building climate resilience in East Africa. Patient capital (7-10 year horizon). Previous investments include Ugandan agribusinesses.",
    process: "Pipeline-driven \u2014 no open application window. Requires direct outreach to Acumen East Africa team.",
    url: "https://acumen.org/investment/acumen-resilient-agriculture-fund/",
    eligibility: "eligible",
    eligibilityNote: "Explicitly funds for-profit agribusinesses. Patient capital. Requires proactive outreach to Acumen East Africa.",
    score: 4.35,
  },
  {
    id: "div-fund",
    name: "Development Innovation Ventures (DIV) Fund",
    shortName: "DIV Fund",
    tier: "tier1",
    category: "government-innovation",
    grantRange: "$25,000 - $200,000 (Stage 1 Pilot)",
    grantMin: 25000,
    grantMax: 200000,
    currency: "USD",
    deadlineNote: "Monitor for next call. Previously USAID \u2014 now operates via INVEST mechanism.",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "Tiered evidence-based funding ($25K pilot \u2192 $200K test \u2192 $15M scale). Explicitly accepts for-profit. HISAGEN's NARO trial data positions well for Stage 1 entry. $48M in commitments to date.",
    process: "Open competition when calls announced. Evidence of impact required.",
    url: "https://www.usaid.gov/div",
    eligibility: "eligible",
    eligibilityNote: "Accepts for-profit. Status uncertain post-USAID reorganisation \u2014 monitor for updated call schedule.",
    score: 4.30,
  },
  {
    id: "draper-richards-kaplan",
    name: "Draper Richards Kaplan Foundation",
    shortName: "DRK Foundation",
    tier: "tier1",
    category: "venture-philanthropy",
    grantRange: "$100,000/year for 3 years ($300,000 total)",
    grantMin: 100000,
    grantMax: 300000,
    currency: "USD",
    deadline: "Rolling applications",
    deadlineNote: "Rolling. Highly competitive (~2,500 applications, 10-12 selected/year).",
    applyVia: "HISAGEN USA Inc.",
    whyStrongFit:
      "3-year unrestricted venture philanthropy. Explicitly accepts for-profit: 'We look for exceptional leaders... regardless of whether they've chosen a for-profit or nonprofit structure.' Past portfolio includes ag-tech and climate companies.",
    process: "Online application. Multi-stage review. Board-level decision.",
    url: "https://www.drkfoundation.org/apply/",
    eligibility: "eligible",
    eligibilityNote: "Explicitly accepts for-profit. Unrestricted $100K/year for 3 years. Highly competitive.",
    score: 4.10,
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
  // --- TIER 2 (Phase F: for-profit-friendly scan) ---
  {
    id: "sbir-sttr",
    name: "SBIR/STTR (Small Business Innovation Research)",
    shortName: "SBIR/STTR",
    tier: "tier2",
    category: "government-innovation",
    grantRange: "$50,000 - $275,000 (Phase I)",
    grantMin: 50000,
    grantMax: 275000,
    currency: "USD",
    deadlineNote: "Multiple agencies (USDA, EPA, DOE). Each has own cycle. Check SBIR.gov.",
    applyVia: "HISAGEN USA Inc. (US small business required)",
    whyStrongFit:
      "US government's primary for-profit R&D grant programme. USDA and EPA have relevant topic areas (agricultural innovation, environmental technology). Non-dilutive. HISAGEN USA Inc. qualifies as small business.",
    process: "Competitive application per agency topic. Phase I ($50-275K) \u2192 Phase II ($500K-1.5M).",
    url: "https://www.sbir.gov",
    eligibility: "eligible",
    eligibilityNote: "For-profit by design. Requires US entity (HISAGEN USA Inc.) and principal R&D in US. May need US-based research component.",
    score: 3.50,
  },
  {
    id: "eic-accelerator",
    name: "European Innovation Council (EIC) Accelerator",
    shortName: "EIC Accelerator",
    tier: "tier2",
    category: "government-innovation",
    grantRange: "EUR 500,000 - 2,500,000 (grant) + equity",
    grantMin: 500000,
    grantMax: 2500000,
    currency: "EUR",
    deadlineNote: "Requires EU/EEA entity. HISAGEN would need UK/EU partner or subsidiary.",
    applyVia: "Would require EU-registered entity",
    whyStrongFit:
      "Largest non-dilutive grant for deep-tech innovation in climate/agriculture. Blended grant + equity. For-profit by design. However, requires EU/EEA entity.",
    process: "Three-stage: short application \u2192 full proposal \u2192 interview. Highly competitive.",
    url: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en",
    eligibility: "conditional",
    eligibilityNote: "For-profit by design but requires EU/EEA registered entity. HISAGEN currently has no EU entity. Would need UK or EU partner.",
    score: 3.25,
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
    description: "40 funders researched, 18 shortlisted and scored across 8 categories including traditional grants, venture philanthropy, DFI windows, accelerators, and government innovation programmes.",
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
    description: "For-profit eligibility filter applied. Traditional grant funders largely ineligible. Pipeline rebuilt around for-profit-friendly capital: 6 Tier 1, 4 Tier 2 eligible funders.",
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
  // IMMEDIATE (Mar 2026)
  {
    when: "Mar 2026",
    what: "Register on START platform and prepare application",
    funder: "Uganda START II",
    funderId: "start-ii",
    urgency: "urgent",
  },
  {
    when: "Mar 2026",
    what: "Initiate contact with Acumen East Africa team",
    funder: "Acumen/ARAF",
    funderId: "acumen-araf",
    urgency: "urgent",
  },
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
  // SHORT TERM (Apr-Jun 2026)
  {
    when: "Apr 2026",
    what: "Apply to DRK Foundation (rolling applications)",
    funder: "DRK Foundation",
    funderId: "draper-richards-kaplan",
    urgency: "high",
  },
  {
    when: "Q2 2026",
    what: "Monitor for Africa ag-tech cohort opening",
    funder: "Village Capital",
    funderId: "village-capital",
    urgency: "high",
  },
  {
    when: "Q2 2026",
    what: "Monitor for DIV call (check post-USAID status)",
    funder: "DIV Fund",
    funderId: "div-fund",
    urgency: "medium",
  },
  // SUMMER 2026
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
  // ONGOING
  {
    when: "Monthly",
    what: "Monitor for new calls",
    funder: "IFAD",
    funderId: "ifad",
    urgency: "medium",
  },
  {
    when: "Ongoing",
    what: "Check SBIR.gov for USDA/EPA topics",
    funder: "SBIR/STTR",
    funderId: "sbir-sttr",
    urgency: "low",
  },
];

// ─────────────────────────────────────────────────────────────
// LANDSCAPE SUMMARY STATS
// ─────────────────────────────────────────────────────────────

export const landscapeStats = {
  totalResearched: 40,
  totalShortlisted: 18, // 11 Phase B + 7 Phase F
  // Phase B: traditional grant landscape
  phaseB: {
    scored: 11,
    eligibleAfterFilter: 3,
    ineligible: 8,
  },
  // Phase F: for-profit-friendly scan
  phaseF: {
    newFunders: 7,
    tier1Added: 5,
    tier2Added: 2,
  },
  // Combined pipeline (eligible + conditional only)
  eligibleTier1Count: 6,
  eligibleTier2Count: 4,
  conditionalCount: 2,
  ineligibleCount: 8,
  deprioritisedCount: 1,
  eligiblePipelineValue: "$500K - $4.5M+",
  categories: [
    "Climate Adaptation Funds",
    "Agricultural & Food Security Foundations",
    "US Private Foundations",
    "UK Trusts & Foundations",
    "Venture Philanthropy",
    "DFI Private Sector Windows",
    "Government Innovation Programmes",
    "Impact Funds & Accelerators",
  ],
};

// ─────────────────────────────────────────────────────────────
// STRATEGIC RECOMMENDATIONS (for-profit constraint)
// ─────────────────────────────────────────────────────────────

export const strategicRecommendations: StrategicRecommendation[] = [
  {
    id: "for-profit-capital",
    title: "Pursue For-Profit-Friendly Capital (Active)",
    description:
      "Venture philanthropy (DRK, Echoing Green), DFI windows (START II, Acumen/ARAF), government programmes (DIV, SBIR), and accelerators (Village Capital) form a $500K-$4.5M+ pipeline. These funders are designed for companies like HISAGEN.",
    impact: "Active pipeline: 6 Tier 1 + 4 Tier 2 eligible funders. START II and Acumen/ARAF actionable immediately.",
  },
  {
    id: "partner-led",
    title: "Partner-Led Applications (Secondary)",
    description:
      "NARO or university as lead applicant, HISAGEN as implementing partner. Opens some doors (AfDB TAAT, CFH Foundation) but dependent on relationship and slower.",
    impact: "Partial access to 2-3 traditional funders. Lower priority given for-profit-friendly pipeline now exists.",
  },
  {
    id: "nonprofit-entity",
    title: "Establish a Nonprofit Entity (Deferred)",
    description:
      "Create HISAGEN Foundation or Uganda-registered NGO for grant-eligible research work. Would reopen 8 traditional funders. But takes months and may not be a priority given for-profit pipeline.",
    impact: "Would add $370K-$7.7M traditional pipeline. Deferred pending Keir's view on entity structure.",
  },
];

// ─────────────────────────────────────────────────────────────
// KEIR ACTION ITEMS
// ─────────────────────────────────────────────────────────────

export const keirActionItems: KeirAction[] = [
  {
    id: "start-ii-register",
    action: "Register on START II platform and confirm HISAGEN Africa Ltd eligibility for current round.",
    funder: "Uganda START II",
    byWhen: "This week",
    status: "not-started",
  },
  {
    id: "acumen-outreach",
    action: "Initiate contact with Acumen East Africa team \u2014 ARAF is pipeline-driven, needs direct outreach.",
    funder: "Acumen/ARAF",
    byWhen: "This week",
    status: "not-started",
  },
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
    id: "drk-application",
    action: "Review DRK Foundation application requirements \u2014 rolling applications, strong fit for 3-year venture philanthropy.",
    funder: "DRK Foundation",
    byWhen: "April 2026",
    status: "not-started",
  },
  {
    id: "div-status",
    action: "Check DIV Fund status post-USAID reorganisation \u2014 is the programme still active?",
    funder: "DIV Fund",
    byWhen: "End of March",
    status: "not-started",
  },
];
