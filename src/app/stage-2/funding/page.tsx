import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Link from "next/link";

const stage2FundingTypes = [
  {
    type: "Carbon Finance & Pre-Payment",
    mix: "65% of Stage 2 funding",
    description: "Capital structured against future carbon credit delivery",
    instruments: [
      "Carbon credit pre-purchase agreements",
      "Streaming contracts ($/tCO2e upfront)",
      "Carbon-collateralized loans",
      "Future receivables financing"
    ]
  },
  {
    type: "Impact Investors & Mezzanine",
    mix: "10% of Stage 2 funding",
    description: "Patient capital from impact-focused institutions",
    instruments: [
      "Convertible notes with carbon warrants",
      "Preferred equity in project SPV",
      "Revenue-based financing",
      "Impact debt with flexible terms"
    ]
  },
  {
    type: "Concessional (Tail Funding)",
    mix: "25% of Stage 2 funding",
    description: "Continued grant support for specific de-risking activities",
    instruments: [
      "Technical assistance grants for MRV",
      "Capacity building for community partners",
      "PDD development support",
      "First-loss capital from DFIs"
    ]
  }
];

const stage2Readiness = [
  {
    criteria: "MRV Operational",
    requirement: "Verified soil carbon measurement system operational and third-party validated",
    status: "Future"
  },
  {
    criteria: "PDD Approved",
    requirement: "Project Design Document approved by Verra or Gold Standard registry",
    status: "Future"
  },
  {
    criteria: "First Credits Pathway",
    requirement: "Clear timeline to first credit issuance (typically 2-3 years)",
    status: "Future"
  },
  {
    criteria: "Field Operations Proven",
    requirement: "Demonstrated capacity to deploy at 100+ farmer scale",
    status: "Future"
  },
  {
    criteria: "Legal Framework Complete",
    requirement: "Carbon rights, farmer agreements, and SPV structure finalized",
    status: "Future"
  }
];

export default function Stage2FundingPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 2 Funding"
        trail={[
          { label: "Capital Continuum", href: "/capital-continuum" },
          { label: "Stage 2: Implementation", href: "/stage-2" },
          { label: "Funding Strategy" }
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 px-4 py-1 bg-slate-400/20 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
          Preparatory
        </div>
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-100/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-800">
            Stage 2: Implementation
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">Years 4-8</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          Stage 2 Funding Strategy: Carbon Finance & Impact Capital
        </h1>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          This section outlines the funding landscape for Stage 2 (Implementation Phase). Focus shifts to
          <strong> carbon finance, impact investors, and mezzanine instruments</strong> as the project transitions
          from incubation to active field deployment and credit generation.
        </p>
      </section>

      {/* Preparatory Notice */}
      <section className="mt-12 rounded-2xl border-2 border-teal-500/30 bg-teal-50 p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-teal-900 mb-3">Stage 2 Preparatory Framework</h2>
            <p className="text-sm text-teal-800 leading-relaxed mb-4">
              HISAGEN is currently in <strong>Stage 1 (Incubation)</strong>. This page provides a preparatory framework
              for Stage 2 funding to guide current strategy and inform funder conversations about the project's trajectory.
            </p>
            <p className="text-xs text-teal-700 italic">
              Full Stage 2 applications will be developed once Stage 1 → Stage 2 readiness criteria are met (target: 12-24 months).
            </p>
          </div>
        </div>
      </section>

      {/* Stage 2 Funding Types */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage 2 Funding Types</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-6">
          {stage2FundingTypes.map((funding) => (
            <div
              key={funding.type}
              className="rounded-2xl border border-emerald-500/20 bg-white p-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-emerald-600" />
                    <h3 className="text-xl font-bold text-secondary">{funding.type}</h3>
                  </div>
                  <p className="text-base text-slate leading-relaxed mb-4">{funding.description}</p>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">Capital Mix</p>
                    <p className="text-sm font-bold text-secondary">{funding.mix}</p>
                  </div>
                </div>
                <div className="md:w-80">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Typical Instruments</p>
                  <ul className="space-y-2">
                    {funding.instruments.map((instrument, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate">
                        <span className="text-emerald-600 font-bold shrink-0">→</span>
                        <span>{instrument}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stage 2 Readiness Criteria */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage 1 → Stage 2 Transition Criteria</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="rounded-2xl border border-mist bg-white p-8">
          <p className="text-sm text-slate leading-relaxed mb-8 italic">
            To access Stage 2 carbon finance and impact capital, HISAGEN must demonstrate completion of Stage 1
            incubation activities and readiness for scaled field operations.
          </p>

          <div className="space-y-4">
            {stage2Readiness.map((item) => (
              <div key={item.criteria} className="p-6 rounded-xl border border-mist bg-parchment/10 flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-600">?</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-secondary">{item.criteria}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-slate-200 text-slate-600">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate leading-relaxed">{item.requirement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Continuum Context */}
      <section className="mt-16 p-8 rounded-2xl bg-secondary text-parchment">
        <h2 className="text-2xl font-bold mb-6">The "Delivery Gap": Why Stage 2 Matters</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              Stage 2 is often called the "Delivery Gap" because it's where many nature-based projects stall.
              Technical success in Stage 1 doesn't automatically translate to operational scale without the right capital structure.
            </p>
            <p className="text-sm leading-relaxed opacity-90">
              Carbon finance is the bridge: it provides working capital against future credit revenues,
              allowing projects to deploy at scale before credits are issued and sold.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Stage 2 Typical Activities</p>
            <ul className="space-y-2 text-sm">
              <li>• Field deployment across 500+ farmers</li>
              <li>• Real-time MRV data collection & verification</li>
              <li>• PDD submission and validation process</li>
              <li>• SPV establishment and farmer onboarding</li>
              <li>• First credit pre-sale negotiations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Related Resources</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Link
            href="/stage-1/funding"
            className="group p-6 rounded-xl border-2 border-emerald-500/20 bg-white hover:border-emerald-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Current Focus</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-emerald-700 transition-colors">
              Stage 1 Funding Hub
            </h3>
          </Link>

          <Link
            href="/stage-2"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Overview</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 2 Brief
            </h3>
          </Link>

          <Link
            href="/stage-3/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Next Stage</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 3 Funding
            </h3>
          </Link>

          <Link
            href="/capital-continuum"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Framework</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Capital Continuum
            </h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
