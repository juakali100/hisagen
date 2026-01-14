export type Stage = {
  title: string;
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
    focus: "Foundations and proof of concept.",
    capital: "Grants, philanthropy, sweat equity.",
    milestones: ["Feasibility complete", "Draft PDD or equivalent", "Pilot activity underway"],
    ecosystemDomains: ["Originator", "Systems Architecture"],
    status: "Active (Hisagen Uganda Pilot)",
  },
  {
    title: "Stage 2: Implementation",
    focus: "Operational rollout and early delivery.",
    capital: "Blended finance, impact investors.",
    milestones: ["First credits issued", "MRV operational", "Delivery partners secured"],
    ecosystemDomains: ["Implementation", "Systems Architecture"],
    status: "Targeting Q3 2026",
  },
  {
    title: "Stage 3: Stabilization",
    focus: "Consistent performance and predictable delivery.",
    capital: "Private equity, structured debt.",
    milestones: ["Multi-year track record", "Stable cashflows", "Scaled governance"],
    ecosystemDomains: ["Certification", "Monetization"],
    status: "Strategic Backlog",
  },
  {
    title: "Stage 4: Maturity",
    focus: "Institutional capital readiness.",
    capital: "Green bonds, securities, public equity.",
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
