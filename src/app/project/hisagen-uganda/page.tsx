"use client";

import { useState } from "react";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Image from "next/image";
import Link from "next/link";

// =============================================================================
// SUSTAINABILITY FRAMEWORK - Uganda Pilot Application
// =============================================================================

// L1: Planetary Foundations
const L1_planetary = {
  title: "Planetary Foundations",
  layer: "L1",
  description: "Global carbon cycle science and soil health fundamentals underpinning the project",
  items: [
    {
      topic: "Carbon Cycle Science",
      content: "Soil organic carbon (SOC) represents the largest terrestrial carbon pool. Agricultural soils have lost 50-70% of original carbon; restoration potential is 2-5 tCO2e/ha/year with regenerative practices.",
      status: "reference",
    },
    {
      topic: "Soil Microbiome",
      content: "Endophytic bacteria (Locus AG technology) enhance root systems and carbon sequestration. Symbiotic relationship increases both yield and SOC accumulation.",
      status: "active",
    },
    {
      topic: "Climate Context",
      content: "East Africa faces 1.5-2°C warming by 2050. Agricultural adaptation through soil health is both mitigation (carbon storage) and resilience (water retention, yield stability).",
      status: "reference",
    },
  ],
};

// L2: Landscape & Jurisdiction
const L2_landscape = {
  title: "Landscape & Jurisdiction",
  layer: "L2",
  description: "Uganda-specific geography, climate zones, and regulatory environment",
  pillars: [
    {
      name: "WHERE",
      subtitle: "Geography & Climate",
      items: [
        { label: "Country", value: "Uganda" },
        { label: "Agro-Ecological Zones", value: "4 target zones: Western, Northern, Eastern, Central" },
        { label: "Climate", value: "Tropical, bimodal rainfall (Mar-May, Sep-Nov)" },
        { label: "Soil Types", value: "Ferralsols, Nitisols - high carbon sequestration potential" },
      ],
    },
    {
      name: "WHAT",
      subtitle: "Agriculture Profile",
      items: [
        { label: "GDP from Agriculture", value: "24.7% - highest in East Africa" },
        { label: "Smallholder Base", value: "4M+ households, 66% subsistence farming" },
        { label: "Average Farm Size", value: "1-3 hectares" },
        { label: "Target Crops", value: "Maize, Irish Potatoes, Peanuts, Sweet Potatoes" },
      ],
    },
    {
      name: "HOW",
      subtitle: "Regulatory Framework",
      items: [
        { label: "Agricultural Authority", value: "MAAIF - Ministry of Agriculture, Animal Industry and Fisheries" },
        { label: "Research Partner", value: "NARO - National Agricultural Research Organisation" },
        { label: "Product Registration", value: "UNBS certification required for biologicals" },
        { label: "Carbon Rights", value: "Framework under development - key gap to resolve" },
      ],
    },
  ],
};

// L3: Ecosystem Services
const L3_ecosystem = {
  title: "Ecosystem Services",
  layer: "L3",
  description: "Measurable environmental outcomes from the intervention",
  services: [
    {
      category: "Provisioning",
      items: [
        { service: "Crop Yield", target: "20-30% increase with Locus AG biologicals", measurement: "Yield trials data" },
        { service: "Soil Fertility", target: "Reduced synthetic input dependency", measurement: "Input cost tracking" },
      ],
    },
    {
      category: "Regulating",
      items: [
        { service: "Carbon Sequestration", target: "2-5 tCO2e/ha/year", measurement: "SOC sampling, Verra VM0042" },
        { service: "Water Retention", target: "Improved soil water holding capacity", measurement: "Soil structure analysis" },
      ],
    },
    {
      category: "Supporting",
      items: [
        { service: "Soil Microbiome", target: "Enhanced microbial diversity", measurement: "eDNA analysis" },
        { service: "Root Health", target: "Deeper, more extensive root systems", measurement: "Root biomass sampling" },
      ],
    },
  ],
};

// L4: Policy & Governance
const L4_policy = {
  title: "Policy & Governance",
  layer: "L4",
  description: "Regulatory landscape and institutional relationships",
  domains: [
    {
      domain: "Agricultural Policy",
      status: "supportive",
      items: [
        "Uganda National Agricultural Policy - supports soil health initiatives",
        "MAAIF strategic plan includes climate-smart agriculture",
        "NARO mandate covers agricultural innovation",
      ],
    },
    {
      domain: "Carbon Market Policy",
      status: "gap",
      items: [
        "No national carbon rights legislation (key gap)",
        "Article 6 negotiations ongoing",
        "Voluntary market participation allowed",
      ],
    },
    {
      domain: "Land Tenure",
      status: "manageable",
      items: [
        "Customary land rights predominate",
        "Aggregation model respects existing tenure",
        "No land acquisition required",
      ],
    },
  ],
};

// L5: Corporate Action
const L5_corporate = {
  title: "Corporate Action",
  layer: "L5",
  description: "HISAGEN operating model and market positioning",
  elements: [
    {
      element: "Business Model",
      content: "Full-stack agricultural carbon: biologicals → aggregation → MRV → credits → revenue share",
    },
    {
      element: "Technology Partner",
      content: "Locus AG (USA) - exclusive Africa distribution for endophytic biologicals",
    },
    {
      element: "Carbon Standards",
      content: "Verra VM0042 (Soil Carbon) alignment - methodology designed for agricultural SOC",
    },
    {
      element: "Revenue Model",
      content: "Carbon credits as secondary revenue stream (structure TBC pending market development and certification pathway)",
    },
  ],
};

// Vertical Flows
const verticalFlows = {
  capitalFlow: {
    title: "Capital Flow",
    description: "Funding progression from grants to carbon markets",
    stages: [
      { stage: "IN", label: "Concessional", items: ["Grants", "Philanthropy", "Director investment"], status: "active" },
      { stage: "THROUGH", label: "Blended", items: ["Carbon prepayment", "Impact loans"], status: "planned" },
      { stage: "OUT", label: "Commercial", items: ["Carbon credits", "Premium pricing"], status: "future" },
    ],
  },
  dataFlow: {
    title: "Data Flow",
    description: "MRV and reporting infrastructure",
    layers: [
      { layer: "Collection", items: ["Soil sampling", "Yield measurement", "Practice verification"] },
      { layer: "Processing", items: ["SOC calculation", "Satellite validation", "eDNA analysis"] },
      { layer: "Reporting", items: ["Verra registry", "Funder reports", "Farmer dashboards"] },
    ],
  },
};

// Cross-cutting Enablers (inspired by Cultivo Social Framework)
const enablers = [
  {
    name: "Social Sustainability",
    icon: "👥",
    description: "Placing farmers at the center of soil regeneration",
    pillars: [
      {
        name: "Engagement",
        color: "emerald",
        items: [
          "Farmer network formation and recruitment",
          "Community buy-in and participation",
          "Communication and feedback channels",
          "Gender-inclusive outreach",
        ],
      },
      {
        name: "Safeguarding",
        color: "blue",
        items: [
          "Fair and transparent contracts",
          "Clear pricing mechanisms",
          "Grievance and dispute resolution (TBC)",
          "Opt-out rights and flexibility",
        ],
      },
      {
        name: "Impact Monitoring",
        color: "purple",
        items: [
          "Baseline: income, yields, food security, gender %",
          "Tracking: changes over time, attribution",
          "Reporting: integrated with environmental MRV",
        ],
      },
    ],
  },
  {
    name: "Enabling Systems",
    icon: "⚙️",
    description: "The infrastructure that makes the project work",
    pillars: [
      {
        name: "Science & Evidence",
        color: "amber",
        items: [
          "NARO trial data and field research",
          "Locus AG agronomic science",
          "Soil carbon measurement protocols",
        ],
      },
      {
        name: "Standards & Certification",
        color: "slate",
        items: [
          "Verra VM0042 pathway (future)",
          "Product registration (UNBS, MAAIF)",
          "Social safeguards alignment (TBC)",
        ],
      },
      {
        name: "Coordination",
        color: "cyan",
        items: [
          "HISAGEN-NARO-Locus AG network",
          "Carbon Zero Marketplace (future)",
          "Funder and partner relationships",
        ],
      },
    ],
  },
];

// Actors
const actors = [
  {
    category: "Demand Side",
    description: "Carbon credit buyers",
    entities: ["Corporate off-takers (SBTi commitments)", "Compliance markets (future)", "Insetting buyers"],
  },
  {
    category: "Enablers",
    description: "Funders and technical partners",
    entities: ["Grant funders (climate/agriculture)", "Locus AG (technology)", "MRV providers", "Carbon standards bodies"],
  },
  {
    category: "Connectors",
    description: "Aggregators and intermediaries",
    entities: ["HISAGEN Africa (local entity)", "NARO (research)", "Agri-dealers (distribution)"],
  },
  {
    category: "Value Creators",
    description: "On-ground implementation",
    entities: ["Smallholder farmers (4M+ households)", "Extension workers", "Community leaders"],
  },
];

// =============================================================================
// PROJECT OPERATIONS - Timeline and Funding
// =============================================================================

// Project phases grouped by Capital Continuum stage
const capitalStages = [
  {
    stage: 1,
    name: "Incubation",
    years: "Years 1-3",
    status: "active",
    capitalFit: "Concessional (Grants, Philanthropy, Sweat Equity)",
    description: "Foundations and proof of concept. The most fragile period, requiring non-repayable capital.",
    phases: [
      {
        phase: "Phase 0",
        name: "Genesis",
        period: "2024",
        status: "complete",
        description: "Team formation and technology partnership",
        milestones: [
          "Founding team brought together by Cedric (Uganda/Ireland)",
          "Locus AG partnership established - technology access secured",
          "HISAGEN USA + HISAGEN Africa entity structure defined",
          "Uganda identified as launch market",
        ],
        capitalIn: "Sweat equity, director investment",
        revenueOut: "—",
        mrvHorizontal: "Baseline research, Locus AG product specs",
        traceabilityVertical: "—",
        reporting: "Internal documentation",
        social: "Engagement approach defined; local partner relationships established",
      },
      {
        phase: "Phase 1",
        name: "NARO Trials",
        period: "Feb - Sep 2025",
        status: "complete",
        description: "Field validation with national research partner",
        milestones: [
          "NARO partnership formalized under MAAIF oversight",
          "4 crops tested: Maize, Irish Potatoes, Peanuts, Sweet Potatoes",
          "4 regions: Western, Northern, Eastern, Central Uganda",
          "Trial data collection completed",
          "Results: 'Highly positive' (quantitative data pending)",
        ],
        capitalIn: "Director investment, in-kind NARO contribution",
        revenueOut: "—",
        mrvHorizontal: "Yield measurements, soil sampling, trial protocols",
        traceabilityVertical: "Trial site → data collection",
        reporting: "NARO trial reports",
        social: "Trial farmer consent model; initial community engagement; social context documented",
      },
      {
        phase: "Phase 2",
        name: "Regulatory Approval",
        period: "Oct 2025 - Q2 2026",
        status: "active",
        description: "Securing market authorization (~3 weeks behind original schedule)",
        milestones: [
          "✓ Oct 2025: Initial UNBS submission",
          "✓ Jan 2026: Latest samples arrived in Uganda",
          "✓ Feb 2026: Submitted to UNBS for formal approval",
          "Feb 2026: Awaiting UNBS confirmation/feedback",
          "Feb 2026: Collecting latest yield and field data from trials",
          "Mar-Apr 2026: MAAIF approval expected",
          "Apr 2026: Product labeling finalization",
        ],
        capitalIn: "Director investment, seeking grant support",
        revenueOut: "—",
        mrvHorizontal: "Yield data compilation, field data synthesis",
        traceabilityVertical: "UNBS product batch tracking",
        reporting: "Regulatory dossiers (UNBS, MAAIF)",
        social: "Safeguarding framework design; contract templates drafted; early adopter identification",
      },
      {
        phase: "Phase 3",
        name: "Market Launch",
        period: "Q2 2026",
        status: "planned",
        description: "Commercial rollout and scale preparation",
        milestones: [
          "Apr-Jun 2026: Market launch preparation",
          "Initial commercial distribution",
          "Farmer network expansion",
          "Carbon MRV baseline establishment",
        ],
        capitalIn: "Grant funding, carbon pre-purchase",
        revenueOut: "Product sales (initial)",
        mrvHorizontal: "Baseline SOC measurements, practice verification",
        traceabilityVertical: "Farmer → aggregator registration",
        reporting: "Funder reports, grant compliance",
        social: "Farmer recruitment (gender targets); training delivery; BASELINE DATA COLLECTION (income, yields, food security)",
      },
    ],
  },
  {
    stage: 2,
    name: "Implementation",
    years: "Years 4-8",
    status: "future",
    capitalFit: "Blended Finance (Carbon Prepayment, Below-market Loans)",
    description: "Operational rollout and early delivery. Focus on technical feasibility and MRV setup.",
    phases: [
      {
        phase: "Phase 4",
        name: "Scale Operations",
        period: "2027-2028",
        status: "anticipated",
        description: "Expand from pilot to commercial scale",
        milestones: [
          "Scale to 5,000+ hectares under management",
          "Establish regional distribution hubs",
          "Deploy MRV infrastructure (ground-truth + satellite)",
          "First carbon credit registration (Verra VM0042)",
        ],
        capitalIn: "Carbon prepayment, impact investment",
        revenueOut: "Pilot carbon credits, product revenue",
        mrvHorizontal: "Ground-truth sampling, satellite validation",
        traceabilityVertical: "Farm → credit provenance chain",
        reporting: "Verra PDD, impact investor reports",
        social: "5,000+ farmers enrolled; gender tracking active; safeguarding mechanisms operational; FIRST IMPACT MEASUREMENT",
      },
      {
        phase: "Phase 5",
        name: "First Credits",
        period: "2029-2030",
        status: "anticipated",
        description: "Carbon credit issuance and market validation",
        milestones: [
          "First verified carbon credits issued",
          "Establish buyer relationships",
          "Validate unit economics at scale",
          "Expand to 50,000+ hectares",
        ],
        capitalIn: "Carbon finance, working capital facilities",
        revenueOut: "Carbon credits, product sales, improved crop yields",
        mrvHorizontal: "Continuous SOC monitoring, verification audits",
        traceabilityVertical: "Full chain of custody (farm → registry)",
        reporting: "Verra registry, buyer reports, audit trails",
        social: "50,000+ farmers; documented livelihood improvements; grievance mechanisms tested; community hubs established",
      },
    ],
  },
  {
    stage: 3,
    name: "Stabilization",
    years: "Years 9-15",
    status: "future",
    capitalFit: "Impact & Commercial Capital (Carbon-Collateralized Debt)",
    description: "Consistent performance and predictable delivery. Carbon credits function as loan collateral.",
    phases: [
      {
        phase: "Phase 6",
        name: "Revenue Engine",
        period: "2031-2035",
        status: "anticipated",
        description: "Steady-state operations with predictable cashflows",
        milestones: [
          "1M+ tCO2e sequestered annually",
          "Sustainable farmer income stream (product + yield benefits)",
          "Multi-year track record established",
          "Institutional-grade reporting and governance",
        ],
        capitalIn: "Commercial debt, carbon-backed facilities",
        revenueOut: "Carbon credits, product sales, improved crop yields",
        mrvHorizontal: "Continuous landscape monitoring, annual verification",
        traceabilityVertical: "Real-time farm → payment tracking",
        reporting: "Institutional reports, CSRD-ready data",
        social: "Mature social framework; continuous impact monitoring; transparent benefit flows; institutional-grade social reporting",
      },
      {
        phase: "Phase 7",
        name: "Regional Expansion",
        period: "2036-2040",
        status: "anticipated",
        description: "Replicate model to second geography",
        milestones: [
          "Kenya or Tanzania expansion",
          "Proven playbook for new market entry",
          "Regional hub infrastructure",
        ],
        capitalIn: "Preferred equity, regional development finance",
        revenueOut: "Multi-geography carbon + product revenue",
        mrvHorizontal: "MRV protocol replication, new baselines",
        traceabilityVertical: "Cross-border value chain tracking",
        reporting: "Multi-jurisdiction disclosure, regional dashboards",
        social: "Social framework adapted to new geography; engagement playbook replicated; just transition considerations",
      },
    ],
  },
  {
    stage: 4,
    name: "Maturity",
    years: "Years 16+",
    status: "future",
    capitalFit: "Commercial Capital (Institutional Debt, Green Bonds)",
    description: "Institutional capital readiness. Full transition to commercial instruments.",
    phases: [
      {
        phase: "Phase 8",
        name: "Institutional Scale",
        period: "2041+",
        status: "anticipated",
        description: "Pan-African platform with institutional backing",
        milestones: [
          "Regional hub for East Africa established",
          "Institutional investors active",
          "Green bond issuance potential",
          "Blueprint for global replication",
        ],
        capitalIn: "Green bonds, institutional equity",
        revenueOut: "Carbon credits, product sales, crop yields, platform fees",
        mrvHorizontal: "Pan-African monitoring network",
        traceabilityVertical: "Global replication playbook",
        reporting: "Institutional dashboards, ESG integration, CSRD/ISSB",
        social: "Pan-African social impact network; scalable engagement/safeguarding/monitoring model; global replication blueprint",
      },
    ],
  },
];

// Capital Continuum Assessment (HISAGEN-specific application)
const pillarScores = [
  { pillar: "Counterparty", score: 3.5, status: "Acceptable for incubation", color: "emerald" },
  { pillar: "Policy and Legal", score: 2.0, status: "Gap - needs resolution", color: "red" },
  { pillar: "ESG and SDG", score: 2.5, status: "Gap - needs data", color: "amber" },
  { pillar: "Technical", score: 3.0, status: "Acceptable for incubation", color: "emerald" },
  { pillar: "Commercial", score: 2.0, status: "Gap - critical", color: "red" },
];

// Quick reference stats (shown in header area)
const quickStats = [
  { label: "Current Phase", value: "Phase 2: UNBS Approval" },
  { label: "Status", value: "Samples submitted, awaiting feedback" },
  { label: "Timeline", value: "~3 weeks behind schedule" },
  { label: "Last Update", value: "Feb 5, 2026" },
];

export default function PilotPage() {
  const totalScore = pillarScores.reduce((sum, p) => sum + p.score, 0);
  const [expandedStages, setExpandedStages] = useState<number[]>([1]); // Stage 1 expanded by default

  const toggleStage = (stage: number) => {
    setExpandedStages(prev =>
      prev.includes(stage)
        ? prev.filter(s => s !== stage)
        : [...prev, stage]
    );
  };

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Uganda Pilot"
        trail={[{ label: "Agri-Carbon Program", href: "/program" }]}
      />

      {/* Hero Image */}
      <section className="mt-4 rounded-2xl border border-mist bg-white overflow-hidden shadow-sm">
        <div className="relative h-64 md:h-80">
          <Image
            src="/images/features/healthy-roots-soil-sample.jpeg"
            alt="Healthy roots and soil sample"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="border-t border-mist px-6 py-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">Field Evidence</p>
          <p className="text-xs text-slate">Roots, soil structure, and sampling integrity are the foundation of MRV credibility.</p>
        </div>
      </section>

      {/* Project Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Project</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary leading-tight">
          HISAGEN Uganda Pilot
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "Proving the full-stack agricultural carbon model with 4 million smallholder farmers."
        </p>
        <p className="mt-4 text-sm text-slate max-w-3xl leading-relaxed">
          This page documents the Uganda pilot through the <Link href="/strategy/sustainability-framework" className="text-secondary underline hover:text-primary">Sustainability Framework</Link> lens —
          from planetary foundations to corporate action, with capital and data flows, enabling systems, and actor mapping.
        </p>
      </section>

      {/* Quick Stats Bar */}
      <section className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-4">
        {quickStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-mist bg-white px-4 py-3 shadow-sm">
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate/60 font-bold">{stat.label}</p>
            <p className="mt-1 text-sm text-secondary font-medium">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Latest Status Update */}
      <section className="mt-6 rounded-xl border-2 border-secondary/30 bg-secondary/5 p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-secondary font-bold text-sm">📍</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-sm font-bold text-secondary">Latest Status Update</h3>
              <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full bg-secondary/20 text-secondary">
                Feb 5, 2026
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Regulatory Progress</p>
                <ul className="space-y-1 text-xs text-slate">
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Samples arrived in Uganda</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Submitted to UNBS for formal approval</li>
                  <li className="flex gap-2"><span className="text-secondary">○</span> Awaiting UNBS confirmation</li>
                  <li className="flex gap-2"><span className="text-secondary">○</span> Collecting yield/field data from trials</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Timeline & Support</p>
                <ul className="space-y-1 text-xs text-slate">
                  <li className="flex gap-2"><span className="text-amber-500">⚠</span> Running ~3 weeks behind schedule</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span> Locus US team fully supportive</li>
                  <li className="flex gap-2"><span className="text-secondary">○</span> Uganda team call scheduled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SUSTAINABILITY FRAMEWORK - Applied to Uganda Pilot
          ========================================================================= */}

      <section className="mt-16 border-t border-mist pt-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Sustainability Framework</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Five Layers Applied</h2>
          <p className="mt-3 text-sm text-slate max-w-2xl leading-relaxed">
            Understanding the Uganda pilot through concentric sustainability layers — from planetary science to corporate implementation.
          </p>
        </div>

        {/* L1: Planetary Foundations */}
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">L1</span>
            <div>
              <h3 className="text-lg font-bold text-secondary">{L1_planetary.title}</h3>
              <p className="text-xs text-slate">{L1_planetary.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {L1_planetary.items.map((item) => (
              <div key={item.topic} className="p-4 rounded-xl bg-white border border-blue-100">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">{item.topic}</p>
                <p className="text-xs text-slate leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* L2: Landscape & Jurisdiction */}
        <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">L2</span>
            <div>
              <h3 className="text-lg font-bold text-secondary">{L2_landscape.title}</h3>
              <p className="text-xs text-slate">{L2_landscape.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {L2_landscape.pillars.map((pillar) => (
              <div key={pillar.name} className="p-4 rounded-xl bg-white border border-emerald-100">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">{pillar.name}</p>
                <p className="text-[10px] text-slate/70 mb-3">{pillar.subtitle}</p>
                <div className="space-y-2">
                  {pillar.items.map((item) => (
                    <div key={item.label} className="flex justify-between text-xs">
                      <span className="text-slate/70">{item.label}</span>
                      <span className="text-slate font-medium text-right max-w-[60%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* L3: Ecosystem Services */}
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-sm font-bold">L3</span>
            <div>
              <h3 className="text-lg font-bold text-secondary">{L3_ecosystem.title}</h3>
              <p className="text-xs text-slate">{L3_ecosystem.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {L3_ecosystem.services.map((category) => (
              <div key={category.category} className="p-4 rounded-xl bg-white border border-teal-100">
                <p className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-3">{category.category}</p>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.service}>
                      <p className="text-xs font-medium text-secondary">{item.service}</p>
                      <p className="text-[10px] text-slate">{item.target}</p>
                      <p className="text-[9px] text-slate/60 italic">Measured: {item.measurement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* L4: Policy & Governance */}
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">L4</span>
            <div>
              <h3 className="text-lg font-bold text-secondary">{L4_policy.title}</h3>
              <p className="text-xs text-slate">{L4_policy.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {L4_policy.domains.map((domain) => (
              <div key={domain.domain} className={`p-4 rounded-xl bg-white border ${
                domain.status === "gap" ? "border-red-200" :
                domain.status === "supportive" ? "border-emerald-200" : "border-amber-200"
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700">{domain.domain}</p>
                  <span className={`px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest rounded-full ${
                    domain.status === "gap" ? "bg-red-100 text-red-700" :
                    domain.status === "supportive" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {domain.status}
                  </span>
                </div>
                <ul className="space-y-1">
                  {domain.items.map((item, i) => (
                    <li key={i} className="text-[11px] text-slate flex gap-2">
                      <span className="text-amber-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* L5: Corporate Action */}
        <div className="mb-8 rounded-2xl border border-violet-200 bg-violet-50/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-sm font-bold">L5</span>
            <div>
              <h3 className="text-lg font-bold text-secondary">{L5_corporate.title}</h3>
              <p className="text-xs text-slate">{L5_corporate.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {L5_corporate.elements.map((item) => (
              <div key={item.element} className="p-4 rounded-xl bg-white border border-violet-100">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-700 mb-2">{item.element}</p>
                <p className="text-xs text-slate leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERTICAL FLOWS - Capital & Data
          ========================================================================= */}

      <section className="mt-16 border-t border-mist pt-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Vertical Flows</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Capital & Data</h2>
          <p className="mt-3 text-sm text-slate max-w-2xl leading-relaxed">
            Two critical flows run through all layers: how capital moves in and value flows out, and how data enables trust and verification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Capital Flow */}
          <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-6">
            <h3 className="text-lg font-bold text-secondary mb-2">{verticalFlows.capitalFlow.title}</h3>
            <p className="text-xs text-slate mb-4">{verticalFlows.capitalFlow.description}</p>
            <div className="space-y-3">
              {verticalFlows.capitalFlow.stages.map((stage) => (
                <div key={stage.stage} className={`p-3 rounded-lg border ${
                  stage.status === "active" ? "border-secondary bg-white" :
                  stage.status === "planned" ? "border-slate-200 bg-slate-50" : "border-slate-100 bg-slate-50/50 opacity-60"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">{stage.stage}</span>
                    <span className="text-xs font-bold text-secondary">{stage.label}</span>
                    {stage.status === "active" && (
                      <span className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest rounded bg-secondary text-parchment">Now</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate">{stage.items.join(" • ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Flow */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-lg font-bold text-secondary mb-2">{verticalFlows.dataFlow.title}</h3>
            <p className="text-xs text-slate mb-4">{verticalFlows.dataFlow.description}</p>
            <div className="space-y-3">
              {verticalFlows.dataFlow.layers.map((layer, i) => (
                <div key={layer.layer} className="p-3 rounded-lg border border-primary/20 bg-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="text-xs font-bold text-secondary">{layer.layer}</span>
                  </div>
                  <p className="text-[11px] text-slate">{layer.items.join(" • ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CROSS-CUTTING ENABLERS & ACTORS
          ========================================================================= */}

      <section className="mt-16 border-t border-mist pt-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Cross-cutting</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Enablers & Actors</h2>
        </div>

        {/* Enablers - Pillar-based structure */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {enablers.map((enabler) => (
            <div key={enabler.name} className="rounded-2xl border border-mist bg-white p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{enabler.icon}</span>
                <h3 className="text-lg font-bold text-secondary">{enabler.name}</h3>
              </div>
              {enabler.description && (
                <p className="text-xs text-primary font-medium mb-4 italic">{enabler.description}</p>
              )}

              {/* Three Pillars */}
              <div className="space-y-4">
                {enabler.pillars.map((pillar) => (
                  <div key={pillar.name} className="border-l-2 border-slate-200 pl-3">
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
                      pillar.color === "emerald" ? "text-emerald-600" :
                      pillar.color === "blue" ? "text-blue-600" :
                      pillar.color === "purple" ? "text-purple-600" :
                      pillar.color === "amber" ? "text-amber-600" :
                      pillar.color === "cyan" ? "text-cyan-600" :
                      "text-slate-600"
                    }`}>
                      {pillar.name}
                    </p>
                    <ul className="space-y-0.5">
                      {pillar.items.map((item, i) => (
                        <li key={i} className="text-[11px] text-slate flex gap-2">
                          <span className={`${
                            pillar.color === "emerald" ? "text-emerald-400" :
                            pillar.color === "blue" ? "text-blue-400" :
                            pillar.color === "purple" ? "text-purple-400" :
                            pillar.color === "amber" ? "text-amber-400" :
                            pillar.color === "cyan" ? "text-cyan-400" :
                            "text-slate-400"
                          }`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Actors */}
        <div className="grid md:grid-cols-4 gap-4">
          {actors.map((actor) => (
            <div key={actor.category} className="rounded-xl border border-mist bg-parchment/30 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{actor.category}</p>
              <p className="text-[10px] text-slate/70 mb-3">{actor.description}</p>
              <ul className="space-y-1">
                {actor.entities.map((entity, i) => (
                  <li key={i} className="text-[11px] text-slate">• {entity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PROJECT OPERATIONS - Timeline and Funding (Condensed)
          ========================================================================= */}

      {/* PROJECT OPERATIONS - Timeline by Capital Stage */}
      <section className="mt-16 border-t border-mist pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Project Operations</p>
            <h2 className="mt-2 text-3xl font-bold text-secondary">Timeline & Milestones</h2>
            <p className="mt-3 text-sm text-slate max-w-2xl leading-relaxed">
              Project phases mapped to the <Link href="/capital-continuum" className="text-secondary underline hover:text-primary">Capital Continuum Framework</Link>. Each funding stage enables specific activities.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {capitalStages.map((stage) => {
            const isExpanded = expandedStages.includes(stage.stage);
            const isActive = stage.status === "active";
            const completedPhases = stage.phases.filter(p => p.status === "complete").length;
            const totalPhases = stage.phases.length;

            return (
              <div
                key={stage.stage}
                className={`rounded-2xl border-2 overflow-hidden transition-all ${
                  isActive
                    ? "border-secondary shadow-lg"
                    : "border-mist"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleStage(stage.stage)}
                  className={`w-full p-6 flex items-center justify-between text-left transition-colors ${
                    isActive ? "bg-secondary/5" : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                      isActive
                        ? "bg-secondary text-parchment"
                        : "bg-slate-100 text-slate-400"
                    }`}>
                      {stage.stage}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-secondary">Stage {stage.stage}: {stage.name}</h3>
                        {isActive && (
                          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full bg-secondary text-parchment animate-pulse">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate mt-1">{stage.years} • {stage.capitalFit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {isActive && (
                      <span className="text-xs text-slate hidden md:block">
                        {completedPhases}/{totalPhases} phases complete
                      </span>
                    )}
                    <svg
                      className={`w-5 h-5 text-slate transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="border-t border-mist bg-white">
                    <div className="p-6">
                      <p className="text-sm text-slate mb-6">{stage.description}</p>

                      {/* Phases within this stage */}
                      <div className="relative">
                        {/* Timeline connector */}
                        <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-mist" />

                        <div className="space-y-4">
                          {stage.phases.map((phase) => (
                            <div
                              key={phase.phase}
                              className={`relative pl-8 ${
                                phase.status === "anticipated" ? "opacity-60" : ""
                              }`}
                            >
                              {/* Status dot */}
                              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white ${
                                phase.status === "complete"
                                  ? "bg-emerald-500"
                                  : phase.status === "active"
                                  ? "bg-secondary"
                                  : "bg-slate-200"
                              }`} />

                              <div className={`p-4 rounded-xl border ${
                                phase.status === "active"
                                  ? "border-secondary/30 bg-secondary/5"
                                  : phase.status === "complete"
                                  ? "border-emerald-200 bg-emerald-50/30"
                                  : "border-mist bg-slate-50/50"
                              }`}>
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">
                                    {phase.phase}
                                  </span>
                                  <span className="text-sm font-bold text-secondary">{phase.name}</span>
                                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full bg-slate-100 text-slate-600">
                                    {phase.period}
                                  </span>
                                  {phase.status === "complete" && (
                                    <span className="text-emerald-500 text-xs">✓</span>
                                  )}
                                  {phase.status === "active" && (
                                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest rounded-full bg-secondary text-parchment">
                                      Current
                                    </span>
                                  )}
                                  {phase.status === "anticipated" && (
                                    <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest rounded-full bg-slate-200 text-slate-500">
                                      Anticipated
                                    </span>
                                  )}
                                </div>

                                <p className="text-xs text-slate mb-3">{phase.description}</p>

                                <div className="grid md:grid-cols-4 gap-4">
                                  {/* Milestones */}
                                  <div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
                                      Milestones
                                    </p>
                                    <ul className="space-y-0.5">
                                      {phase.milestones.map((m, i) => (
                                        <li key={i} className="flex gap-2 text-[11px] text-slate">
                                          <span className={phase.status === "complete" ? "text-emerald-500" : "text-slate/40"}>
                                            {phase.status === "complete" ? "✓" : "○"}
                                          </span>
                                          {m}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Capital Flows */}
                                  <div className="space-y-2">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
                                      Capital Flows
                                    </p>
                                    <div className="space-y-1.5">
                                      <div className="flex gap-2 items-start">
                                        <span className="text-[9px] text-emerald-600 font-medium whitespace-nowrap">IN:</span>
                                        <span className="text-[10px] text-slate">{phase.capitalIn}</span>
                                      </div>
                                      <div className="flex gap-2 items-start">
                                        <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap">OUT:</span>
                                        <span className="text-[10px] text-slate">{phase.revenueOut}</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Data Architecture */}
                                  <div className="space-y-2">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary/60 mb-1">
                                      Data Architecture
                                    </p>
                                    <div className="space-y-1.5">
                                      <div className="flex gap-2 items-start">
                                        <span className="text-[8px] bg-blue-100 text-blue-700 px-1 rounded font-medium whitespace-nowrap">MRV</span>
                                        <span className="text-[10px] text-slate">{phase.mrvHorizontal}</span>
                                      </div>
                                      <div className="flex gap-2 items-start">
                                        <span className="text-[8px] bg-purple-100 text-purple-700 px-1 rounded font-medium whitespace-nowrap">TRACE</span>
                                        <span className="text-[10px] text-slate">{phase.traceabilityVertical}</span>
                                      </div>
                                      <div className="flex gap-2 items-start">
                                        <span className="text-[8px] bg-slate-100 text-slate-600 px-1 rounded font-medium whitespace-nowrap">REPORT</span>
                                        <span className="text-[10px] text-slate">{phase.reporting}</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Social Sustainability */}
                                  <div className="space-y-2">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-pink-600/80 mb-1">
                                      Social
                                    </p>
                                    <div className="flex gap-2 items-start">
                                      <span className="text-[8px] bg-pink-100 text-pink-700 px-1 rounded font-medium whitespace-nowrap">👥</span>
                                      <span className="text-[10px] text-slate">{phase.social}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bootstrap acknowledgment */}
        <div className="mt-8 p-6 rounded-xl bg-amber-50 border border-amber-200">
          <p className="font-bold text-amber-800 text-sm">Founder-Funded to Date</p>
          <p className="text-amber-700 text-xs mt-1 leading-relaxed">
            Phases 0-2 have been funded through director investment and sweat equity.
            The NARO trials, regulatory submissions, and entity formation represent significant
            pre-investment that de-risks the project for future funders.
          </p>
        </div>
      </section>


      {/* CAPITAL CONTINUUM ASSESSMENT */}
      <section className="mt-16 border-t border-mist pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Investment Readiness</p>
            <h2 className="mt-2 text-3xl font-bold text-secondary">Capital Continuum Assessment</h2>
            <p className="mt-2 text-sm text-slate max-w-xl">
              Scoring HISAGEN Uganda against the 5-pillar investment readiness framework.
            </p>
          </div>
          <Link
            href="/capital-continuum"
            className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline"
          >
            View Full Framework →
          </Link>
        </div>

        <div className="rounded-2xl border border-mist bg-white p-8">
          {/* Summary Stats */}
          <div className="grid gap-6 md:grid-cols-3 text-center md:text-left mb-8 pb-8 border-b border-mist">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Current Stage</p>
              <p className="mt-2 text-xl font-bold text-secondary">Stage 1 - Incubation</p>
              <p className="mt-1 text-xs text-slate">Years 1-3</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Overall Score</p>
              <p className="mt-2 text-xl font-bold text-secondary">{totalScore} / 25</p>
              <p className="mt-1 text-xs text-slate">{Math.round((totalScore / 25) * 100)}% readiness</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Top Gap</p>
              <p className="mt-2 text-xl font-bold text-secondary">Legal Clarity</p>
              <p className="mt-1 text-xs text-red-600 font-bold">Carbon Rights resolution needed</p>
            </div>
          </div>

          {/* Pillar Scores */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate">
              <thead className="bg-slate-50 border-b border-mist text-xs uppercase tracking-[0.2em] text-slate">
                <tr>
                  <th className="p-3">Pillar</th>
                  <th className="p-3">Score /5</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist/50">
                {pillarScores.map((p) => (
                  <tr key={p.pillar} className="bg-white">
                    <td className="p-3 font-medium text-secondary">{p.pillar}</td>
                    <td className="p-3">{p.score}</td>
                    <td className={`p-3 text-[11px] font-bold ${
                      p.color === "red" ? "text-red-600" :
                      p.color === "amber" ? "text-amber-600" :
                      "text-emerald-600"
                    }`}>
                      {p.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[10px] text-slate italic">
            Source: HISAGEN 5-Pillar Investment Readiness Assessment (v.2025-11-30).
          </p>
        </div>

        {/* Stage-specific funding */}
        <div className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-bold text-secondary">Stage 1: Seeking Concessional Capital</span>
              </div>
              <p className="text-sm text-slate leading-relaxed">
                At Stage 1 Incubation, the appropriate capital mix is <strong>50% concessional (grants, philanthropy)</strong> and
                <strong> 50% sweat equity</strong>. Grant funding will enable transition from founder-funded pilot
                validation to formal implementation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/stage-1/funding"
                className="px-6 py-3 bg-secondary text-parchment rounded-xl text-xs font-bold uppercase tracking-widest text-center hover:bg-primary transition-colors"
              >
                Stage 1 Funding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Tracker */}
      <section className="mt-16 border-t border-mist pt-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Stage 1 Operations</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Funding Tracker</h2>
          <p className="mt-3 text-sm text-slate max-w-2xl">
            Track funding opportunities from identification through grant delivery for the Uganda pilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/project/hisagen-uganda/grant-progress"
            className="p-6 rounded-xl border-2 border-violet-500/20 bg-violet-50 hover:border-violet-500 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet-200 flex items-center justify-center">
                <span className="text-sm font-bold text-violet-700">1-11</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-violet-700">All Phases</p>
                <p className="text-lg font-bold text-secondary group-hover:text-violet-700 transition-colors">Grant Progress</p>
              </div>
            </div>
            <p className="text-sm text-slate">11-phase lifecycle progress with evidence and gaps.</p>
          </Link>

          <Link
            href="/stage-1/funding/funder-landscape"
            className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5 hover:border-primary hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">02</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Phase 02</p>
                <p className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Funder Landscape</p>
              </div>
            </div>
            <p className="text-sm text-slate">20+ funders tiered by alignment.</p>
          </Link>

          <Link
            href="/stage-1/funding/opportunities"
            className="p-6 rounded-xl border-2 border-emerald-500/20 bg-emerald-50 hover:border-emerald-500 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center">
                <span className="text-sm font-bold text-emerald-700">2-6</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Phases 02-06</p>
                <p className="text-lg font-bold text-secondary group-hover:text-emerald-700 transition-colors">Opportunities</p>
              </div>
            </div>
            <p className="text-sm text-slate">Track through proposal and award.</p>
          </Link>

          <Link
            href="/stage-1/projects"
            className="p-6 rounded-xl border-2 border-secondary/20 bg-secondary/5 hover:border-secondary hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-sm font-bold text-secondary">7-11</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/70">Phases 07-11</p>
                <p className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Grant Projects</p>
              </div>
            </div>
            <p className="text-sm text-slate">Delivery, reporting, and closeout.</p>
          </Link>
        </div>

        {/* Quick link to Stage 1 Funding hub */}
        <div className="mt-6 p-4 rounded-xl bg-parchment/50 border border-mist flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-secondary">Stage 1 Funding Hub</p>
            <p className="text-xs text-slate">Full funding strategy, capital mix, and active applications</p>
          </div>
          <Link
            href="/stage-1/funding"
            className="px-4 py-2 bg-secondary text-parchment rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            View Hub →
          </Link>
        </div>
      </section>

      {/* Evidence & Resources */}
      <section className="mt-16 border-t border-mist pt-12 mb-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Documentation</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Evidence & Resources</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/evidence"
            className="p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all group"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Evidence Vault</p>
            <p className="text-sm text-slate">Uganda trial data, Locus AG validation, carbon integrity documentation</p>
            <p className="mt-4 text-[10px] font-bold text-secondary group-hover:underline">View Evidence →</p>
          </Link>

          <Link
            href="/ecosystem/locus-ag"
            className="p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all group"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Technology Partner</p>
            <p className="text-sm text-slate">Locus AG biologicals - endophytic science, product line, yield data</p>
            <p className="mt-4 text-[10px] font-bold text-secondary group-hover:underline">View Locus AG →</p>
          </Link>

          <Link
            href="/knowledge-base"
            className="p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all group"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Knowledge Base</p>
            <p className="text-sm text-slate">Communications, research, milestones, and project intelligence</p>
            <p className="mt-4 text-[10px] font-bold text-secondary group-hover:underline">Open Vault →</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
