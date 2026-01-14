export type Stage = {
  title: string;
  years: string;
  focus: string;
  capital: string;
  milestones: string[];
  ecosystemDomains: string[];
  status: string;
};

export type Pillar = {
  title: string;
  focus: string;
  prompts: string[];
};

const stages: Stage[] = [
  {
    title: "Stage 1: Incubation",
    years: "Years 1-3",
    focus: "Foundations and proof of concept. The most fragile period, requiring non-repayable capital.",
    capital: "Concessional Capital (Grants, Philanthropy, Sweat Equity)",
    milestones: ["Feasibility complete", "Draft PDD or equivalent", "Pilot activity underway"],
    ecosystemDomains: ["Originator", "Systems Architecture"],
    status: "Active (Hisagen Uganda Pilot)",
  },
  {
    title: "Stage 2: Implementation",
    years: "Years 4-8",
    focus: "Operational rollout and early delivery. Focus on technical feasibility and MRV setup.",
    capital: "Blended Finance (Repayable Grants, Below-market Loans, Carbon Prepayment)",
    milestones: ["First credits issued", "MRV operational", "Delivery partners secured"],
    ecosystemDomains: ["Implementation", "Systems Architecture"],
    status: "Targeting Q3 2026",
  },
  {
    title: "Stage 3: Stabilization",
    years: "Years 9-15",
    focus: "Consistent performance and predictable delivery. Carbon credits function as loan collateral.",
    capital: "Impact & Commercial Capital (Carbon Collateralized Debt, Preferred Equity)",
    milestones: ["Multi-year track record", "Stable cashflows", "Scaled governance"],
    ecosystemDomains: ["Certification", "Monetization"],
    status: "Strategic Backlog",
  },
  {
    title: "Stage 4: Maturity",
    years: "Years 16+",
    focus: "Institutional capital readiness. Full transition to commercial and institutional instruments.",
    capital: "Commercial Capital (Institutional Debt, Green Bonds, Public Equity)",
    milestones: ["10+ years performance", "Taxonomy eligible", "Institutional investors active"],
    ecosystemDomains: ["Monetization"],
    status: "Strategic Backlog",
  },
];

const pillars: Pillar[] = [
  {
    title: "Counterparty",
    focus: "Track record, delivery capability, governance.",
    prompts: [
      "Do we have proven delivery leadership and partners?",
      "Is local implementation capacity in place?",
      "Are community stakeholders aligned?",
    ],
  },
  {
    title: "Policy and Legal",
    focus: "Rights, approvals, and regulatory clarity.",
    prompts: [
      "Are carbon and land rights clear?",
      "Are permits and approvals secured?",
      "Is the policy environment stable?",
    ],
  },
  {
    title: "ESG and SDG",
    focus: "Integrity, safeguards, and co-benefits.",
    prompts: [
      "Is community benefit sharing defined?",
      "Do we have safeguard and integrity systems?",
      "Are SDG outcomes measurable?",
    ],
  },
  {
    title: "Technical",
    focus: "Methodology, data, and MRV readiness.",
    prompts: [
      "Is the methodology proven and accepted?",
      "Is baseline data robust?",
      "Is MRV operational or planned with partners?",
    ],
  },
  {
    title: "Commercial",
    focus: "Unit economics, revenue model, and capital fit.",
    prompts: [
      "Are unit economics validated?",
      "Is the capital stack aligned to stage?",
      "Are revenue streams diversified?",
    ],
  },
];

export { pillars, stages };
