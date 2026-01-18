"use client";

import { useState } from "react";
import Link from "next/link";
import StageBreadcrumb from "../../../../components/StageBreadcrumb";

type FunderTier = "tier1" | "tier2" | "tier3" | "closed";
type FunderType = "multilateral" | "bilateral" | "foundation" | "corporate" | "accelerator" | "ngo";

interface Funder {
  name: string;
  type: FunderType;
  tier: FunderTier;
  focus: string;
  geography: string;
  grantSize: string;
  deadline?: string;
  daysLeft?: number;
  alignmentScore: number;
  status: string;
  url?: string;
  notes: string;
}

const funders: Funder[] = [
  // Tier 1: Apply Now (Open Deadlines)
  {
    name: "ESTDEV Green/Digital Transition",
    type: "bilateral",
    tier: "tier1",
    focus: "Green and digital transition",
    geography: "Uganda, Kenya, Tanzania, Botswana, Namibia, Zambia",
    grantSize: "EUR 50,000 - 150,000",
    deadline: "January 30, 2026",
    daysLeft: 12,
    alignmentScore: 7,
    status: "PRIORITY - Digital marketplace + green ag",
    notes: "Position digital platform + microbial products as green/digital transition.",
  },
  {
    name: "Japan Embassy Uganda - Grassroots",
    type: "bilateral",
    tier: "tier1",
    focus: "Grassroots community benefit",
    geography: "Uganda only",
    grantSize: "Up to USD 65,000",
    deadline: "February 15, 2026",
    daysLeft: 28,
    alignmentScore: 6,
    status: "Good for community component",
    notes: "Could fund farmer training/community components. Non-profit eligibility.",
  },
  // Tier 2: Cultivate (Rolling/Relationship-Based)
  {
    name: "Green Climate Fund (GCF)",
    type: "multilateral",
    tier: "tier2",
    focus: "Climate resilience, food systems",
    geography: "Global, strong Africa focus",
    grantSize: "$10M+ (via Accredited Entities)",
    alignmentScore: 9,
    status: "Need Accredited Entity partner",
    url: "https://www.greenclimate.fund",
    notes: "AGRA is accredited - potential pathway. $16.6B portfolio.",
  },
  {
    name: "Global Innovation Fund (GIF)",
    type: "foundation",
    tier: "tier2",
    focus: "Poverty, agriculture, carbon, innovation",
    geography: "Global",
    grantSize: "Up to $1M",
    alignmentScore: 9,
    status: "Strong soil-carbon-poverty nexus fit",
    url: "https://www.globalinnovation.fund",
    notes: "Specifically funding 'poverty/agriculture/carbon nexus' innovations.",
  },
  {
    name: "Mastercard Foundation - Agribusiness Challenge",
    type: "corporate",
    tier: "tier2",
    focus: "Agribusiness, food security",
    geography: "20 African focus countries (includes Uganda)",
    grantSize: "USD 500,000 - 2,500,000",
    alignmentScore: 8,
    status: "Strong fit - investigate eligibility",
    url: "https://frp.org/challenge-fund/the-agribusiness-challenge-fund",
    notes: "Significant funding for agribusiness scale. 3-year disbursement.",
  },
  {
    name: "AGRA RE-GAIN Program",
    type: "ngo",
    tier: "tier2",
    focus: "Food loss reduction, climate resilience",
    geography: "7 countries including Uganda, Kenya, Tanzania",
    grantSize: "Via AGRA as implementing partner",
    alignmentScore: 8,
    status: "Potential implementation partner pathway",
    notes: "$105M GCF initiative. AGRA is accredited - could be pathway to GCF funding.",
  },
  {
    name: "Science for Africa Foundation",
    type: "foundation",
    tier: "tier2",
    focus: "African ag climate adaptation research",
    geography: "Africa",
    grantSize: "Varies",
    alignmentScore: 7,
    status: "Research angle - NARO partnership",
    notes: "Could fund research component of HISAGEN.",
  },
  {
    name: "IKEA Foundation",
    type: "corporate",
    tier: "tier2",
    focus: "Smallholder livelihoods, climate",
    geography: "East Africa",
    grantSize: "Major grants ($1M+)",
    alignmentScore: 8,
    status: "Need intro pathway via One Acre Fund",
    notes: "Funds smallholder climate programs.",
  },
  {
    name: "Cartier Philanthropy",
    type: "corporate",
    tier: "tier2",
    focus: "Smallholder farmer innovation",
    geography: "East Africa",
    grantSize: "Multi-year grants",
    alignmentScore: 7,
    status: "Need intro pathway",
    notes: "Partners with One Acre Fund.",
  },
  // Tier 3: Monitor
  {
    name: "Africa Adaptation Acceleration Program",
    type: "multilateral",
    tier: "tier3",
    focus: "Climate-smart agriculture",
    geography: "26 African countries",
    grantSize: "Part of $25B mobilization",
    alignmentScore: 8,
    status: "Monitor for opportunities",
    notes: "Food Security pillar targeting 38M farmers.",
  },
  {
    name: "THRIVE Global Impact Challenge",
    type: "accelerator",
    tier: "tier3",
    focus: "AgTech startups",
    geography: "Global",
    grantSize: "Up to $1M investment",
    alignmentScore: 7,
    status: "Consider for visibility",
    notes: "Startup accelerator format.",
  },
  {
    name: "The Nature Conservancy - AFCC",
    type: "ngo",
    tier: "tier3",
    focus: "Forest carbon, communities",
    geography: "Africa",
    grantSize: "Partnership-based",
    alignmentScore: 6,
    status: "Potential learning",
    notes: "Africa Forest Carbon Catalyst. Different model.",
  },
  // Closed (Monitor for Next Cycle)
  {
    name: "African Development Bank - CAW",
    type: "multilateral",
    tier: "closed",
    focus: "Climate adaptation, agriculture",
    geography: "Africa LDCs including Uganda",
    grantSize: "Technical Assistance grants",
    deadline: "February 5, 2025 (CLOSED)",
    alignmentScore: 9,
    status: "MONITOR for CfP4 (expected mid-2026)",
    notes: "3rd Call closed. Perfect fit - sign up for alerts.",
  },
  {
    name: "IKI Small Grants Programme",
    type: "bilateral",
    tier: "closed",
    focus: "Climate and biodiversity action",
    geography: "Developing countries including Uganda",
    grantSize: "EUR 60,000 - 200,000",
    deadline: "January 15, 2026 (CLOSED)",
    alignmentScore: 8,
    status: "MONITOR for next cycle",
    notes: "Missed by 3 days. Subscribe to newsletter.",
  },
];

interface MatchFundingItem {
  contributor: string;
  activity: string;
  hours?: string;
  rate?: string;
  value: string;
}

const professionalServices: MatchFundingItem[] = [
  { contributor: "Deep Six Consulting (Keir)", activity: "Corporate strategy, partnerships, investor relations", hours: "TBC", rate: "$250/hr", value: "TBC" },
  { contributor: "HISAGEN USA", activity: "Locus AG coordination, US operations", hours: "TBC", rate: "$150/hr", value: "TBC" },
  { contributor: "HISAGEN Uganda", activity: "NARO relationship, field coordination, local operations", hours: "TBC", rate: "$50/hr", value: "TBC" },
  { contributor: "Pandion Studio", activity: "Strategy, grants, portal, brand (Nov 2025 - Jan 2026)", hours: "20", rate: "$150/hr*", value: "$3,000" },
];

const inKindContributions = [
  { contributor: "Locus AG", item: "Rhizolizer products for trials", value: "TBC (at cost)" },
  { contributor: "Locus AG", item: "Manufacturing equipment access", value: "TBC (at cost)" },
  { contributor: "NARO", item: "Research infrastructure, staff time", value: "TBC (in-kind)" },
  { contributor: "NARO", item: "Field trial sites (4 regions)", value: "TBC (in-kind)" },
];

const getTierConfig = (tier: FunderTier) => {
  switch (tier) {
    case "tier1":
      return {
        label: "Apply Now",
        bg: "bg-emerald-50",
        border: "border-emerald-500/30",
        badge: "bg-emerald-500 text-white",
        text: "text-emerald-700",
      };
    case "tier2":
      return {
        label: "Cultivate",
        bg: "bg-amber-50",
        border: "border-amber-500/30",
        badge: "bg-amber-500 text-white",
        text: "text-amber-700",
      };
    case "tier3":
      return {
        label: "Monitor",
        bg: "bg-slate-50",
        border: "border-slate-300",
        badge: "bg-slate-400 text-white",
        text: "text-slate-600",
      };
    case "closed":
      return {
        label: "Closed",
        bg: "bg-red-50",
        border: "border-red-300",
        badge: "bg-red-400 text-white",
        text: "text-red-600",
      };
  }
};

const getTypeLabel = (type: FunderType) => {
  switch (type) {
    case "multilateral": return "Multilateral";
    case "bilateral": return "Bilateral";
    case "foundation": return "Foundation";
    case "corporate": return "Corporate";
    case "accelerator": return "Accelerator";
    case "ngo": return "NGO";
  }
};

export default function FunderLandscapePage() {
  const [matchFundingOpen, setMatchFundingOpen] = useState(false);
  const [pandionScenarioOpen, setPandionScenarioOpen] = useState(false);
  const [deepSixScenarioOpen, setDeepSixScenarioOpen] = useState(false);
  const [locusScenarioOpen, setLocusScenarioOpen] = useState(false);

  const tier1 = funders.filter(f => f.tier === "tier1");
  const tier2 = funders.filter(f => f.tier === "tier2");
  const tier3 = funders.filter(f => f.tier === "tier3");
  const closed = funders.filter(f => f.tier === "closed");

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Funder Landscape"
        trail={[
          { label: "Stage 1 Funding", href: "/stage-1/funding" },
          { label: "Grant Lifecycle Phase 02-04" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 1 Funding
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Funder Landscape & Prospect Mapping
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Systematic identification and prioritization of grant funders aligned with HISAGEN's mission.
          Covers Grant Lifecycle Phases 02 (Landscape Scanning), 03 (Donor Engagement), and 04 (Due Diligence).
        </p>
        <p className="mt-2 text-xs text-slate/60">Last updated: January 18, 2026</p>
      </section>

      {/* Quick Stats */}
      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-5">
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-secondary">{funders.length}</p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">Total Identified</p>
        </div>
        <div className="p-4 rounded-xl border-2 border-emerald-500/30 bg-emerald-50">
          <p className="text-3xl font-bold text-emerald-700">{tier1.length}</p>
          <p className="text-xs uppercase tracking-widest text-emerald-600 mt-1">Apply Now</p>
        </div>
        <div className="p-4 rounded-xl border-2 border-amber-500/30 bg-amber-50">
          <p className="text-3xl font-bold text-amber-700">{tier2.length}</p>
          <p className="text-xs uppercase tracking-widest text-amber-600 mt-1">Cultivate</p>
        </div>
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-slate-600">{tier3.length}</p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">Monitor</p>
        </div>
        <div className="p-4 rounded-xl border border-red-300 bg-red-50">
          <p className="text-3xl font-bold text-red-600">{closed.length}</p>
          <p className="text-xs uppercase tracking-widest text-red-500 mt-1">Next Cycle</p>
        </div>
      </section>

      {/* Priority Deadline Alert */}
      <section className="mt-8 p-6 rounded-xl border-2 border-emerald-500/30 bg-emerald-50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center shrink-0">
            <span className="text-emerald-800 font-bold text-lg">12</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-1">Priority Deadline</p>
            <h2 className="text-xl font-bold text-emerald-900">ESTDEV Green/Digital Transition - January 30, 2026</h2>
            <p className="mt-2 text-sm text-emerald-800">
              EUR 50,000 - 150,000. Position digital platform + microbial products as green/digital transition for Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Tier 1: Apply Now */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest">
            Tier 1
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Apply Now</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Open deadlines. Prioritize for immediate action.</p>

        <div className="space-y-4">
          {tier1.map((funder) => {
            const config = getTierConfig(funder.tier);
            return (
              <div key={funder.name} className={`p-6 rounded-2xl border-2 ${config.border} ${config.bg}`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-96 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        {getTypeLabel(funder.type)}
                      </span>
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${config.badge}`}>
                        Score: {funder.alignmentScore}/10
                      </span>
                      {funder.daysLeft && (
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-red-500 text-white">
                          {funder.daysLeft} days
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-secondary">{funder.name}</h3>
                    <p className="text-sm text-slate mt-2">{funder.focus}</p>
                  </div>

                  <div className="flex-1 grid gap-4 md:grid-cols-3">
                    <div className="p-3 rounded-lg bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Geography</p>
                      <p className="text-xs text-slate">{funder.geography}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Grant Size</p>
                      <p className="text-xs text-slate">{funder.grantSize}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Deadline</p>
                      <p className="text-xs font-bold text-emerald-700">{funder.deadline || "Rolling"}</p>
                    </div>
                  </div>

                  <div className="lg:w-48 shrink-0">
                    <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/10 h-full">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Status</p>
                      <p className="text-xs text-secondary leading-relaxed">{funder.status}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate/80 italic">{funder.notes}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tier 2: Cultivate */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-widest">
            Tier 2
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Cultivate</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Relationship-based or rolling deadlines. Build connections and prepare applications.</p>

        <div className="grid gap-4 md:grid-cols-2">
          {tier2.map((funder) => {
            const config = getTierConfig(funder.tier);
            return (
              <div key={funder.name} className={`p-5 rounded-xl border-2 ${config.border} ${config.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    {getTypeLabel(funder.type)}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${config.badge}`}>
                    {funder.alignmentScore}/10
                  </span>
                </div>
                <h3 className="text-base font-bold text-secondary">{funder.name}</h3>
                <p className="text-xs text-slate mt-2">{funder.focus}</p>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold">
                    {funder.grantSize}
                  </p>
                  <p className="text-xs text-slate mt-1">{funder.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tier 3: Monitor */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-slate-400 text-white text-xs font-bold uppercase tracking-widest">
            Tier 3
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Monitor</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Future opportunities or lower alignment. Keep on radar.</p>

        <div className="grid gap-3 md:grid-cols-3">
          {tier3.map((funder) => (
            <div key={funder.name} className="p-4 rounded-lg border border-mist bg-white">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate/60 mb-1">
                {getTypeLabel(funder.type)} | {funder.alignmentScore}/10
              </p>
              <h3 className="text-sm font-bold text-secondary">{funder.name}</h3>
              <p className="text-xs text-slate mt-1">{funder.grantSize}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closed / Next Cycle */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-red-400 text-white text-xs font-bold uppercase tracking-widest">
            Closed
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Monitor for Next Cycle</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">High-alignment opportunities that have closed. Sign up for alerts.</p>

        <div className="grid gap-3 md:grid-cols-2">
          {closed.map((funder) => (
            <div key={funder.name} className="p-4 rounded-lg border-2 border-red-200 bg-red-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-red-400 text-white">
                  {funder.alignmentScore}/10 alignment
                </span>
              </div>
              <h3 className="text-sm font-bold text-secondary">{funder.name}</h3>
              <p className="text-xs text-red-700 mt-1">{funder.deadline}</p>
              <p className="text-xs text-slate mt-2">{funder.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Match Funding Summary with Accordion */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Match Funding & Commitment</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
          <p className="text-sm text-slate mb-6">
            Demonstrating commitment through sweat equity, in-kind contributions, and investment.
            This leverage strengthens grant applications and reduces funder risk.
          </p>

          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <div className="p-5 rounded-xl bg-white border border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Professional Services</p>
              <p className="text-2xl font-bold text-primary">$3,000</p>
              <p className="text-xs text-slate mt-2">Confirmed (Pandion: 20 hrs)</p>
              <p className="text-xs text-slate/60 mt-1">Nov 2025 - Jan 2026</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">In-Kind Contributions</p>
              <p className="text-2xl font-bold text-primary">TBC</p>
              <p className="text-xs text-slate mt-2">Locus AG + NARO</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Director Investment</p>
              <p className="text-2xl font-bold text-primary">TBC</p>
              <p className="text-xs text-slate mt-2">Seed funding</p>
            </div>
          </div>

          {/* Accordion */}
          <button
            onClick={() => setMatchFundingOpen(!matchFundingOpen)}
            className="w-full flex items-center justify-between p-4 rounded-lg bg-white border border-mist hover:border-primary/30 transition-colors"
          >
            <span className="text-sm font-bold text-secondary">View Detailed Breakdown</span>
            <span className={`text-primary transition-transform ${matchFundingOpen ? 'rotate-180' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>

          {matchFundingOpen && (
            <div className="mt-4 space-y-6">
              {/* Professional Services Table */}
              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">In-Kind Professional Services</p>
                <p className="text-[9px] text-slate/60 mb-3">Project costs - can be included in grant budgets as match funding</p>
                <p className="text-[9px] text-slate/60 mb-3 italic">* Startup/early-stage rate (standard: $200-250/hr)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-mist">
                        <th className="text-left py-2 text-slate/60 font-medium">Contributor</th>
                        <th className="text-left py-2 text-slate/60 font-medium">Activity</th>
                        <th className="text-left py-2 text-slate/60 font-medium">Hours</th>
                        <th className="text-left py-2 text-slate/60 font-medium">Rate</th>
                        <th className="text-right py-2 text-slate/60 font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {professionalServices.map((item, idx) => (
                        <tr key={idx} className="border-b border-mist/50">
                          <td className="py-2 font-medium text-secondary">{item.contributor}</td>
                          <td className="py-2 text-slate">{item.activity}</td>
                          <td className="py-2 text-slate">{item.hours}</td>
                          <td className="py-2 text-slate">{item.rate}</td>
                          <td className="py-2 text-right font-bold text-primary">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* In-Kind Table */}
              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-3">In-Kind Contributions</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-mist">
                        <th className="text-left py-2 text-slate/60 font-medium">Contributor</th>
                        <th className="text-left py-2 text-slate/60 font-medium">Contribution</th>
                        <th className="text-right py-2 text-slate/60 font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inKindContributions.map((item, idx) => (
                        <tr key={idx} className="border-b border-mist/50">
                          <td className="py-2 font-medium text-secondary">{item.contributor}</td>
                          <td className="py-2 text-slate">{item.item}</td>
                          <td className="py-2 text-right font-bold text-primary">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">
                Action Required
              </span>
            </div>
            <p className="text-sm text-amber-900">
              Capture contributed hours for Deep Six Consulting, HISAGEN USA, and HISAGEN Uganda. Get Locus AG in-kind contribution values. Discuss value capture options and formalize agreements with each contributor.
            </p>
          </div>
        </div>
      </section>

      {/* Reference: Match Funding Definitions */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Reference: Definitions & Value Capture</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="p-8 rounded-2xl border border-mist bg-slate-50/50">
          {/* Key Definitions */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Key Definitions</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-xs font-bold text-primary mb-1">Sweat Equity</p>
                <p className="text-xs text-slate">Work contributed in exchange for an <strong>ownership stake</strong> in the company. The contributor receives equity (shares) instead of payment. Common in startups/VC contexts.</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-xs font-bold text-primary mb-1">In-Kind Professional Services</p>
                <p className="text-xs text-slate"><strong>Project costs</strong> contributed by professionals at market rates. Can be included as match funding in grants, or potentially recovered if funding allows pre-award costs.</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-xs font-bold text-primary mb-1">In-Kind Contributions</p>
                <p className="text-xs text-slate"><strong>Non-cash resources</strong> provided to the project: equipment, facilities, materials, products. Valued at market rate or cost price.</p>
              </div>
              <div className="p-4 rounded-lg bg-white border border-mist">
                <p className="text-xs font-bold text-primary mb-1">Pre-Award Costs</p>
                <p className="text-xs text-slate">Costs incurred <strong>before a grant is awarded</strong>. Some funders allow these to be reimbursed if they were necessary for project preparation.</p>
              </div>
            </div>
          </div>

          {/* Funding Context Differences */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Funding Context: Grants vs. Commercial/VC</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-mist">
                    <th className="text-left py-2 text-slate/60 font-medium w-1/4">Aspect</th>
                    <th className="text-left py-2 text-slate/60 font-medium">Grant Funding</th>
                    <th className="text-left py-2 text-slate/60 font-medium">Commercial/VC Funding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist/50">
                    <td className="py-2 font-medium text-secondary">Return expectation</td>
                    <td className="py-2 text-slate">Impact outcomes, no financial return to funder</td>
                    <td className="py-2 text-slate">Financial return (ROI, equity appreciation)</td>
                  </tr>
                  <tr className="border-b border-mist/50">
                    <td className="py-2 font-medium text-secondary">Contributor value capture</td>
                    <td className="py-2 text-slate">Match funding, cost recovery, recognition</td>
                    <td className="py-2 text-slate">Equity stake, convertible notes, profit share</td>
                  </tr>
                  <tr className="border-b border-mist/50">
                    <td className="py-2 font-medium text-secondary">When to use "sweat equity"</td>
                    <td className="py-2 text-slate">Generally not applicable (no equity to give)</td>
                    <td className="py-2 text-slate">Appropriate - work exchanged for shares</td>
                  </tr>
                  <tr className="border-b border-mist/50">
                    <td className="py-2 font-medium text-secondary">When to use "in-kind"</td>
                    <td className="py-2 text-slate">Appropriate - demonstrates commitment</td>
                    <td className="py-2 text-slate">Less common (usually cash or equity)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Value Capture Options */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Value Capture Options for Contributors</h3>
            <p className="text-xs text-slate mb-4">When someone contributes time/services without immediate payment, how can they capture value?</p>

            <div className="grid gap-3">
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-bold uppercase rounded">If Company Equity Available</span>
                </div>
                <p className="text-xs font-bold text-emerald-800 mb-1">Equity Stake / Sweat Equity</p>
                <p className="text-xs text-emerald-700">Formal agreement converting work hours to company shares at agreed valuation. Requires cap table, vesting schedule, legal agreement.</p>
              </div>

              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase rounded">If Grant Funding Secured</span>
                </div>
                <p className="text-xs font-bold text-amber-800 mb-1">Deferred Payment / Cost Recovery</p>
                <p className="text-xs text-amber-700">Some grants allow pre-award cost reimbursement. Future work can be budgeted as project costs. Requires clear records of hours/rates.</p>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-blue-500 text-white text-[9px] font-bold uppercase rounded">Recognition & Portfolio Value</span>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold text-blue-800 mb-1">Formal Acknowledgment</p>
                    <ul className="text-xs text-blue-700 list-disc list-inside">
                      <li>Thank you letter (CV reference)</li>
                      <li>"Angel Supporter" or "Advisor" title</li>
                      <li>LinkedIn endorsement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-800 mb-1">Portfolio / Case Study Rights</p>
                    <ul className="text-xs text-blue-700 list-disc list-inside">
                      <li>Permission to use in client portfolio</li>
                      <li>Case study for marketing</li>
                      <li>Testimonial from founder</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-purple-500 text-white text-[9px] font-bold uppercase rounded">Sponsorship / Branding</span>
                </div>
                <p className="text-xs font-bold text-purple-800 mb-1">Visibility & Association</p>
                <p className="text-xs text-purple-700">Contributor logo on website/materials, "Supported by" acknowledgment, backlinks, speaking opportunities. Formalizable via sponsorship agreement.</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-100 border border-slate-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-slate-500 text-white text-[9px] font-bold uppercase rounded">Pro Bono / Volunteer</span>
                </div>
                <p className="text-xs font-bold text-slate-700 mb-1">Charitable Contribution</p>
                <p className="text-xs text-slate-600">Explicitly donated time with no expectation of return. Should be formalized with volunteer agreement. Contributor receives satisfaction + potential tax benefits (check jurisdiction).</p>
              </div>
            </div>
          </div>

          {/* HISAGEN Context */}
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-6">
            <p className="text-xs font-bold text-secondary mb-2">HISAGEN Context</p>
            <p className="text-xs text-slate mb-2">
              Currently seeking <strong>grant funding</strong> (not VC). Contributions framed as <strong>in-kind professional services</strong> (project costs) rather than sweat equity.
            </p>
            <ul className="text-xs text-slate list-disc list-inside space-y-1">
              <li><strong>Include in grant applications</strong> as match funding to demonstrate commitment</li>
              <li><strong>Track hours and rates</strong> for potential cost recovery if grants allow</li>
              <li><strong>Discuss value capture</strong> with each contributor (equity, recognition, portfolio, sponsorship)</li>
              <li><strong>Formalize agreements</strong> before significant work continues</li>
            </ul>
          </div>

          {/* Partner Scenarios Header */}
          <div className="mb-4">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Partner Contribution Scenarios</h3>
            <p className="text-xs text-slate">Click each partner to explore value capture options and considerations for discussion.</p>
          </div>

          {/* Deep Six Consulting Scenario (Accordion) */}
          <div className="mb-3">
            <button
              onClick={() => setDeepSixScenarioOpen(!deepSixScenarioOpen)}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-indigo-600 text-white text-[9px] font-bold uppercase tracking-widest rounded">Deep Six Consulting</span>
                <span className="text-xs text-indigo-700">Keir A-B | Corporate Strategy & Partnerships</span>
              </div>
              <span className={`text-indigo-600 transition-transform ${deepSixScenarioOpen ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>

            {deepSixScenarioOpen && (
              <div className="mt-2 p-5 rounded-xl border-2 border-indigo-200 bg-white">
                <p className="text-xs text-slate mb-4">
                  <strong>Role:</strong> Primary relationship holder, strategic advisor, co-founder/CEO HISAGEN USA.
                  <strong className="ml-2">Rate:</strong> $250/hr (Corporate Strategy) | <strong>Hours:</strong> TBC
                </p>

                {/* Deep Six Context */}
                <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200 mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 mb-2">Relationship Context</p>
                  <ul className="text-xs text-indigo-800 space-y-1">
                    <li>• <strong>Deep 6 Consulting</strong> acts as consultancy/advisory layer (similar to Big 4 model)</li>
                    <li>• Keir manages overall client relationship, coordinates delivery partners</li>
                    <li>• Other partners (Pandion, Locus AG) may subcontract via Deep 6 or direct to HISAGEN</li>
                    <li>• Deep 6 rates: $250/hr (Corporate Strategy), $220/hr (Project Mgmt), $200/hr (Digital), $150/hr (Ops)</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  {/* Value Capture Options */}
                  <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 mb-2">Value Capture Considerations</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-3 rounded bg-white border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-800 mb-1">Founder Equity</p>
                        <p className="text-[11px] text-indigo-700">Keir likely holds significant equity as co-founder. Time invested builds company value directly.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-800 mb-1">Advisory/Consulting Fees</p>
                        <p className="text-[11px] text-indigo-700">Deep 6 may invoice for consulting services if/when HISAGEN has funding.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-800 mb-1">Success Fees</p>
                        <p className="text-[11px] text-indigo-700">Finder's fees on investment rounds or partnerships Keir secures.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-800 mb-1">Grant Budget Inclusion</p>
                        <p className="text-[11px] text-indigo-700">Include Deep 6 advisory as project management cost in grant budgets.</p>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">Questions to Clarify</p>
                    <ul className="text-xs text-amber-800 space-y-1">
                      <li>• What is Deep 6's formal relationship to HISAGEN? (Consultancy, investment vehicle, or just Keir's entity?)</li>
                      <li>• How are partner contributions (Pandion, Locus AG) contracted? Via Deep 6 or direct to HISAGEN?</li>
                      <li>• What is the cap table structure? Who holds what %?</li>
                      <li>• How are Deep 6's pre-funding hours being tracked/valued?</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Locus AG Scenario (Accordion) */}
          <div className="mb-3">
            <button
              onClick={() => setLocusScenarioOpen(!locusScenarioOpen)}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-green-50 border-2 border-green-200 hover:border-green-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-green-600 text-white text-[9px] font-bold uppercase tracking-widest rounded">Locus AG</span>
                <span className="text-xs text-green-700">US AgTech Partner | Rhizolizer Technology</span>
              </div>
              <span className={`text-green-600 transition-transform ${locusScenarioOpen ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>

            {locusScenarioOpen && (
              <div className="mt-2 p-5 rounded-xl border-2 border-green-200 bg-white">
                <p className="text-xs text-slate mb-4">
                  <strong>Role:</strong> Technology partner providing Rhizolizer microbial products and manufacturing capability.
                  <strong className="ml-2">Contribution:</strong> Products, equipment access, technical expertise
                </p>

                {/* Locus AG Context */}
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-2">Partnership Context</p>
                  <ul className="text-xs text-green-800 space-y-1">
                    <li>• <strong>Locus AG</strong> is established US agtech company with proven products</li>
                    <li>• Rhizolizer shown to improve yields: +22.6% potatoes, +17.7% sweet potatoes (NARO trials)</li>
                    <li>• HISAGEN serves as East Africa market entry / distribution partner</li>
                    <li>• Relationship structured as technology licensing, joint venture, or strategic partnership</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  {/* In-Kind Contributions */}
                  <div className="p-4 rounded-lg bg-green-50/50 border border-green-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-2">In-Kind Contributions (Current)</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-3 rounded bg-white border border-green-100">
                        <p className="text-xs font-bold text-green-800 mb-1">Rhizolizer Products</p>
                        <p className="text-[11px] text-green-700">Products provided for NARO field trials. Value: TBC (at cost or discounted).</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-green-100">
                        <p className="text-xs font-bold text-green-800 mb-1">Manufacturing Access</p>
                        <p className="text-[11px] text-green-700">Equipment and facility access for local production development.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-green-100">
                        <p className="text-xs font-bold text-green-800 mb-1">Technical Expertise</p>
                        <p className="text-[11px] text-green-700">Microbial science knowledge, formulation support, quality control.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-green-100">
                        <p className="text-xs font-bold text-green-800 mb-1">IP Licensing</p>
                        <p className="text-[11px] text-green-700">Endophytic technology licensing for East Africa market.</p>
                      </div>
                    </div>
                  </div>

                  {/* Value Capture Options */}
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">Locus AG Value Capture</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Royalty / Licensing Fees</p>
                        <p className="text-[11px] text-emerald-700">Per-unit royalty on Rhizolizer products sold in East Africa.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Equity Stake in HISAGEN</p>
                        <p className="text-[11px] text-emerald-700">Technology contribution converted to equity in regional venture.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Market Expansion</p>
                        <p className="text-[11px] text-emerald-700">HISAGEN success opens East Africa market, validates product globally.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Grant Co-Funding</p>
                        <p className="text-[11px] text-emerald-700">In-kind contributions count as match funding in grant applications.</p>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">Questions to Clarify</p>
                    <ul className="text-xs text-amber-800 space-y-1">
                      <li>• What is the formal Locus AG-HISAGEN relationship? (License, JV, strategic partnership?)</li>
                      <li>• What is the value of products/equipment provided for trials?</li>
                      <li>• Does Locus AG hold or expect equity in HISAGEN?</li>
                      <li>• What are the commercialization terms? (Royalty rates, territory exclusivity?)</li>
                      <li>• Who are the key contacts at Locus AG? (For grant letters of support)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pandion Studio Scenario (Accordion) */}
          <div className="mb-3">
            <button
              onClick={() => setPandionScenarioOpen(!pandionScenarioOpen)}
              className="w-full flex items-center justify-between p-4 rounded-lg bg-primary/10 border-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-primary text-white text-[9px] font-bold uppercase tracking-widest rounded">Pandion Studio</span>
                <span className="text-xs text-primary">Strategy, Grants & Digital | 20 hrs / $3,000</span>
              </div>
              <span className={`text-primary transition-transform ${pandionScenarioOpen ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>

            {pandionScenarioOpen && (
              <div className="mt-2 p-5 rounded-xl border-2 border-primary/30 bg-white">
                <p className="text-xs text-slate mb-4">
                  <strong>Current contribution:</strong> 20 hrs / $3,000 in professional services (Nov 2025 - Jan 2026) at startup rate ($150/hr; standard $200-250/hr).
                </p>

                {/* Keir's Partnership Offer Context */}
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">Context: Partnership Offer (Nov 2025)</p>
                  <p className="text-xs text-amber-800 italic mb-2">
                    "Would you be interested in exploring a partnership? Perhaps a small sweat-equity stake in the company
                    and say a 10% commission on any successful funding (grants, investments, or co-investment) that you directly secure?"
                  </p>
                  <p className="text-[11px] text-amber-700">— Keir, email Nov 10, 2025. To be discussed and formalized.</p>
                </div>

                <div className="space-y-3">
                  {/* Tier 1: Monetary */}
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">Tier 1: Monetary Recovery</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Win Fee (if grant secured)</p>
                        <p className="text-[11px] text-emerald-700">3-5% of grant value for grants Pandion supported. E.g., $150K grant = $4,500-7,500 fee.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Pre-Award Cost Recovery</p>
                        <p className="text-[11px] text-emerald-700">If grant allows, include pre-award costs in budget. Partial or full recovery of $3,000.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Budgeted Future Work</p>
                        <p className="text-[11px] text-emerald-700">Include Pandion advisory/portal work in grant budget for funded period. Paid at $150/hr.</p>
                      </div>
                      <div className="p-3 rounded bg-white border border-emerald-100">
                        <p className="text-xs font-bold text-emerald-800 mb-1">Equity Conversion</p>
                        <p className="text-[11px] text-emerald-700">If HISAGEN raises VC/angel, convert contribution to equity at agreed valuation.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tier 2: Non-Monetary but Valuable */}
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700 mb-2">Tier 2: If No Monetary Recovery</p>
                    <p className="text-[11px] text-blue-600 mb-3">If grants don't allow cost recovery and no equity path, Pandion contribution recognized through:</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-3 rounded bg-white border border-blue-100">
                        <p className="text-xs font-bold text-blue-800 mb-1">Sponsorship / Visibility</p>
                        <ul className="text-[11px] text-blue-700 list-disc list-inside">
                          <li>Pandion logo on HISAGEN website</li>
                          <li>"Technology Partner" or "Digital Sponsor" title</li>
                          <li>Logo on grant materials (if funder allows)</li>
                          <li>Backlink from hisagen.org to pandion.studio</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded bg-white border border-blue-100">
                        <p className="text-xs font-bold text-blue-800 mb-1">Portfolio & Case Study</p>
                        <ul className="text-[11px] text-blue-700 list-disc list-inside">
                          <li>Permission to use HISAGEN in Pandion portfolio</li>
                          <li>Case study: "Building a grant-ready knowledge portal"</li>
                          <li>Testimonial from Keir for Pandion website</li>
                          <li>Speaking/presentation rights about the project</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded bg-white border border-blue-100">
                        <p className="text-xs font-bold text-blue-800 mb-1">Network & Referrals</p>
                        <ul className="text-[11px] text-blue-700 list-disc list-inside">
                          <li>Introductions to Keir's network</li>
                          <li>Referrals to similar projects</li>
                          <li>Invitation to HISAGEN events</li>
                          <li>Access to Locus AG / NARO contacts</li>
                        </ul>
                      </div>
                      <div className="p-3 rounded bg-white border border-blue-100">
                        <p className="text-xs font-bold text-blue-800 mb-1">Formal Acknowledgment</p>
                        <ul className="text-[11px] text-blue-700 list-disc list-inside">
                          <li>Letter of appreciation (CV reference)</li>
                          <li>"Founding Advisor" or "Angel Supporter" title</li>
                          <li>LinkedIn recommendation from Keir</li>
                          <li>Named in grant proposal acknowledgments</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-3 rounded-lg bg-slate-100 border border-slate-200">
                    <p className="text-xs text-slate"><strong>Minimum ask:</strong> If no monetary value captured, ensure Tier 2 recognition is formalized - sponsorship agreement, portfolio rights, testimonial, referrals. The work has value and should be acknowledged appropriately.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Note about HISAGEN USA and Uganda */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate">
              <strong>HISAGEN USA</strong> and <strong>HISAGEN Uganda</strong> are internal entities - their contributions are captured in the professional services table above.
              Separate scenario sections may be added as relationship structures are clarified.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Integration */}
      <section className="mt-16 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Grant Lifecycle Integration</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Link
            href="/funding-roadmap/grant-lifecycle"
            className="group p-6 rounded-xl border-2 border-amber-500/20 bg-amber-50 hover:border-amber-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-2">Phase 02</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-amber-700 transition-colors">
              Landscape Scanning
            </h3>
            <p className="text-xs text-slate mt-2">This page covers prospect mapping</p>
          </Link>

          <Link
            href="/funding-roadmap/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 03</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Donor Engagement
            </h3>
            <p className="text-xs text-slate mt-2">Relationship cultivation</p>
          </Link>

          <Link
            href="/funding-roadmap/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 04</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Due Diligence
            </h3>
            <p className="text-xs text-slate mt-2">Eligibility verification</p>
          </Link>

          <Link
            href="/stage-1/funding/v0-grant-proposal"
            className="group p-6 rounded-xl border-2 border-emerald-500/20 bg-emerald-50 hover:border-emerald-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Phase 05</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-emerald-700 transition-colors">
              V1.1 Proposal
            </h3>
            <p className="text-xs text-slate mt-2">Ready for tailoring</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
