"use client";

import { useState } from "react";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Image from "next/image";
import Link from "next/link";

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
        funding: "Sweat equity, director investment",
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
        funding: "Director investment, in-kind NARO contribution",
      },
      {
        phase: "Phase 2",
        name: "Regulatory Approval",
        period: "Oct 2025 - Q1 2026",
        status: "active",
        description: "Securing market authorization",
        milestones: [
          "Oct 2025: Initial UNBS submission",
          "Jan 2026: MAAIF dossier submission",
          "Jan-Feb 2026: Review period",
          "Feb-Mar 2026: Approval expected",
          "Mar 2026: Product labeling finalization",
        ],
        funding: "Director investment, seeking grant support",
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
        funding: "Grant funding, carbon pre-purchase",
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
        funding: "Carbon prepayment, impact investment",
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
        funding: "Carbon finance, working capital facilities",
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
          "Sustainable farmer income stream (70%+ to farmers)",
          "Multi-year track record established",
          "Institutional-grade reporting and governance",
        ],
        funding: "Commercial debt, carbon-backed facilities",
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
        funding: "Preferred equity, regional development finance",
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
        funding: "Green bonds, institutional equity",
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

const pilotFocus = [
  { label: "Location", value: "Uganda (4 Agro-Ecological Zones)" },
  { label: "Crop Focus", value: "Maize, Potatoes, Peanuts, Sweet Potatoes" },
  { label: "Research Partner", value: "NARO under MAAIF" },
  { label: "Current Phase", value: "Phase 2: Regulatory Approval" },
];

const whyUganda = [
  {
    metric: "24.7%",
    label: "GDP from Agriculture",
    detail: "Highest in East Africa - government priority sector",
  },
  {
    metric: "66%",
    label: "Subsistence Farming",
    detail: "Massive smallholder base ideal for HISAGEN model",
  },
  {
    metric: "4M+",
    label: "Smallholder Households",
    detail: "Average 1-3 hectare farms",
  },
  {
    metric: "First",
    label: "Mover Advantage",
    detail: "No scaled ag-carbon programs in East Africa yet",
  },
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
          HISAGEN Uganda: Making Agricultural Carbon Bankable
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "Proving the full-stack model where it matters most—with 4 million smallholder farmers."
        </p>
      </section>

      {/* Quick Stats */}
      <section className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
        {pilotFocus.map((item) => (
          <div key={item.label} className="rounded-xl border border-mist bg-white p-4 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{item.label}</p>
            <p className="mt-2 text-sm text-slate font-medium">{item.value}</p>
          </div>
        ))}
      </section>

      {/* PROJECT ROADMAP - Accordion by Capital Continuum Stage */}
      <section className="mt-16 border-t border-mist pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Project Roadmap</p>
            <h2 className="mt-2 text-3xl font-bold text-secondary">Timeline by Capital Stage</h2>
            <p className="mt-3 text-sm text-slate max-w-2xl leading-relaxed">
              Project phases mapped to the Capital Continuum framework. Each funding stage enables specific project activities.
            </p>
          </div>
          <Link
            href="/capital-continuum"
            className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline whitespace-nowrap"
          >
            View Framework →
          </Link>
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

                                <div className="grid md:grid-cols-2 gap-4">
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
                                  <div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-secondary/60 mb-1">
                                      Funding
                                    </p>
                                    <p className="text-[11px] text-slate italic">{phase.funding}</p>
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
          <div className="flex items-start gap-4">
            <span className="text-2xl">💪</span>
            <div>
              <p className="font-bold text-amber-800 text-sm">Founder-Funded to Date</p>
              <p className="text-amber-700 text-xs mt-1 leading-relaxed">
                Phases 0-2 have been funded through director investment and sweat equity.
                The NARO trials, regulatory submissions, and entity formation represent significant
                pre-investment that de-risks the project for future funders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Uganda - Condensed */}
      <section className="mt-16 border-t border-mist pt-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Strategic Rationale</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Why Uganda?</h2>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {whyUganda.map((item) => (
            <div key={item.label} className="rounded-xl border border-secondary/20 bg-secondary/5 p-5">
              <p className="text-3xl font-bold text-secondary">{item.metric}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-secondary/80">{item.label}</p>
              <p className="mt-3 text-xs text-slate leading-relaxed">{item.detail}</p>
            </div>
          ))}
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
                <span className="text-lg">📊</span>
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
                <span className="text-lg">🎯</span>
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
                <span className="text-lg">📋</span>
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
                <span className="text-lg">🚀</span>
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
