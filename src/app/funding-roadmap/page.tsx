import Link from "next/link";
import StageBreadcrumb from "../../components/StageBreadcrumb";

const frameworks = [
  {
    title: "Capital Continuum",
    subtitle: "4-Stage Project Lifecycle",
    href: "/funding-roadmap/capital-continuum",
    description: "Maps HISAGEN's journey from concessional grants through to institutional investment across 15+ years.",
    stages: [
      { name: "Incubation", years: "1-3", mix: "50% Grants" },
      { name: "Implementation", years: "4-8", mix: "65% Carbon Finance" },
      { name: "Stabilization", years: "9-15", mix: "70% Commercial" },
      { name: "Maturity", years: "16+", mix: "95% Institutional" },
    ],
    color: "emerald",
  },
  {
    title: "Grant Lifecycle",
    subtitle: "11-Phase Delivery Methodology",
    href: "/funding-roadmap/grant-lifecycle",
    description: "Methodology for grant writing delivery - from vision and strategy through to closeout and reflection.",
    stages: [
      { name: "Vision & Strategy", years: "Phase 01", mix: "Program Design" },
      { name: "Prospect Mapping", years: "Phase 02-04", mix: "Due Diligence" },
      { name: "Proposal & Submit", years: "Phase 05", mix: "Active Focus" },
      { name: "Delivery & Close", years: "Phase 06-11", mix: "Post-Award" },
    ],
    color: "secondary",
  },
];

const stageFunding = [
  { stage: 1, name: "Stage 1: Grants", href: "/stage-1/funding", mix: "50%", type: "Grants & Philanthropy", status: "Active" },
  { stage: 2, name: "Stage 2: Carbon Finance", href: "/stage-2/funding", mix: "65%", type: "Pre-purchase & Impact", status: "Preparatory" },
  { stage: 3, name: "Stage 3: Commercial", href: "/stage-3/funding", mix: "70%", type: "Working Capital & Debt", status: "Preparatory" },
  { stage: 4, name: "Stage 4: Institutional", href: "/stage-4/funding", mix: "95%", type: "Green Bonds & SPV", status: "Preparatory" },
];

export default function FundingRoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Funding Roadmap"
        trail={[{ label: "Capital Strategy" }]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Capital Strategy
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          HISAGEN Funding Roadmap
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Two complementary frameworks guide HISAGEN's capital strategy: the <strong>Capital Continuum</strong> for
          project lifecycle funding, and the <strong>Grant Lifecycle</strong> for delivery methodology per funding application.
        </p>
      </section>

      {/* Two Frameworks */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Strategic Frameworks</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {frameworks.map((framework) => (
            <Link
              key={framework.title}
              href={framework.href}
              className={`group rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${
                framework.color === "emerald"
                  ? "border-emerald-500/30 bg-emerald-50/30 hover:border-emerald-500"
                  : "border-secondary/20 bg-secondary/5 hover:border-secondary"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                    framework.color === "emerald" ? "text-emerald-600" : "text-secondary/60"
                  }`}>
                    {framework.subtitle}
                  </p>
                  <h3 className={`text-2xl font-bold transition-colors ${
                    framework.color === "emerald"
                      ? "text-emerald-800 group-hover:text-emerald-600"
                      : "text-secondary group-hover:text-primary"
                  }`}>
                    {framework.title}
                  </h3>
                </div>
                <svg className="w-6 h-6 text-slate/30 group-hover:text-slate/60 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <p className="text-sm text-slate leading-relaxed mb-6">{framework.description}</p>

              <div className="grid grid-cols-2 gap-2">
                {framework.stages.map((stage) => (
                  <div key={stage.name} className="p-3 rounded-lg bg-white/60 border border-white">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate/50">{stage.years}</p>
                    <p className="text-xs font-bold text-secondary mt-0.5">{stage.name}</p>
                    <p className="text-[10px] text-slate mt-1">{stage.mix}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stage-Specific Funding */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage-Specific Funding</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="rounded-2xl border border-mist overflow-hidden">
          <div className="grid gap-px bg-mist">
            {stageFunding.map((item) => (
              <Link
                key={item.stage}
                href={item.href}
                className="flex items-center gap-6 p-6 bg-white hover:bg-parchment/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  item.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {item.stage}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate mt-0.5">{item.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-secondary">{item.mix}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${
                    item.status === "Active" ? "text-emerald-600" : "text-slate/50"
                  }`}>
                    {item.status}
                  </p>
                </div>
                <svg className="w-5 h-5 text-slate/30 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Position */}
      <section className="mt-16 p-8 rounded-2xl bg-secondary text-parchment">
        <h2 className="text-2xl font-bold mb-6">Current Position: Stage 1 Incubation</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">Capital Focus</p>
            <p className="text-lg font-bold">Grants & Philanthropy</p>
            <p className="text-sm opacity-80 mt-2">50% target mix for Stage 1</p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">Grant Lifecycle Phase</p>
            <p className="text-lg font-bold">Phase 05: Proposal Development</p>
            <p className="text-sm opacity-80 mt-2">v0 Proposal and Concept Note drafted</p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">Target Raise</p>
            <p className="text-lg font-bold">$200k - $500k</p>
            <p className="text-sm opacity-80 mt-2">Stage 1 funding target range</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Quick Links</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/stage-1/funding"
            className="group p-6 rounded-xl border-2 border-emerald-500/20 bg-white hover:border-emerald-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Current Focus</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-emerald-700 transition-colors">
              Stage 1 Funding Hub
            </h3>
            <p className="text-xs text-slate mt-2">Grant applications, funder landscape, capital strategy</p>
          </Link>

          <Link
            href="/stage-1/funding/v0-grant-proposal"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Active Document</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              v0 Grant Proposal
            </h3>
            <p className="text-xs text-slate mt-2">10-section base narrative</p>
          </Link>

          <Link
            href="/stage-1/funding/v0-concept-note"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Active Document</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Concept Note
            </h3>
            <p className="text-xs text-slate mt-2">One-page project summary</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
