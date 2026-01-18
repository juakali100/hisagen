import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Link from "next/link";

const stage3FundingTypes = [
  {
    type: "Working Capital Loans & Commercial Debt",
    mix: "70% of Stage 3 funding",
    description: "Market-rate commercial financing backed by recurring carbon revenues",
    instruments: [
      "Asset-backed revolving credit facilities",
      "Term loans secured by carbon contracts",
      "Supply chain finance for farmer inputs",
      "Trade finance for credit delivery"
    ]
  },
  {
    type: "SPV Preferred Equity",
    mix: "20% of Stage 3 funding",
    description: "Growth capital from commercial investors targeting environmental returns",
    instruments: [
      "Preferred equity in project SPV",
      "Venture debt with equity kickers",
      "Growth equity from climate funds",
      "Strategic corporate investment"
    ]
  },
  {
    type: "Carbon Finance (Tail)",
    mix: "10% of Stage 3 funding",
    description: "Continued pre-purchase agreements for expansion regions",
    instruments: [
      "Regional expansion pre-purchase contracts",
      "New crop/geography carbon streaming",
      "Future vintage forward sales",
      "Carbon-backed working capital"
    ]
  }
];

export default function Stage3FundingPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 3 Funding"
        trail={[
          { label: "Capital Continuum", href: "/capital-continuum" },
          { label: "Stage 3: Stabilization", href: "/stage-3" },
          { label: "Funding Strategy" }
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 px-4 py-1 bg-slate-400/20 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
          Preparatory
        </div>
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full border border-slate-500/20 bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-700">
            Stage 3: Stabilization
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">Years 9-15</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          Stage 3 Funding Strategy: Commercial Capital & Working Capital
        </h1>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          This section outlines the funding landscape for Stage 3 (Stabilization Phase). Credits are issued,
          revenue is flowing, and the project transitions to <strong>commercial debt, working capital loans,
          and market-rate financing</strong>.
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
            <h2 className="text-xl font-bold text-teal-900 mb-3">Stage 3 Preparatory Framework</h2>
            <p className="text-sm text-teal-800 leading-relaxed mb-4">
              HISAGEN is currently in <strong>Stage 1 (Incubation)</strong>. This page provides a preparatory framework
              for Stage 3 funding to inform long-term capital strategy and demonstrate bankability trajectory to early funders.
            </p>
            <p className="text-xs text-teal-700 italic">
              Stage 3 funding becomes relevant once credits are issued and revenue history is established (target: 8-10 years).
            </p>
          </div>
        </div>
      </section>

      {/* Stage 3 Funding Types */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage 3 Funding Types</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-6">
          {stage3FundingTypes.map((funding) => (
            <div
              key={funding.type}
              className="rounded-2xl border border-slate-500/20 bg-white p-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                    <h3 className="text-xl font-bold text-secondary">{funding.type}</h3>
                  </div>
                  <p className="text-base text-slate leading-relaxed mb-4">{funding.description}</p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 mb-2">Capital Mix</p>
                    <p className="text-sm font-bold text-secondary">{funding.mix}</p>
                  </div>
                </div>
                <div className="md:w-80">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Typical Instruments</p>
                  <ul className="space-y-2">
                    {funding.instruments.map((instrument, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate">
                        <span className="text-slate-600 font-bold shrink-0">→</span>
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

      {/* Stage 3 Characteristics */}
      <section className="mt-16 p-8 rounded-2xl bg-secondary text-parchment">
        <h2 className="text-2xl font-bold mb-6">The "Revenue Engine": Stage 3 Inflection Point</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              By Stage 3, carbon credits are issued and sold, creating predictable revenue. This transforms the project
              from "development-stage" to "operating asset" - unlocking commercial capital at market rates.
            </p>
            <p className="text-sm leading-relaxed opacity-90">
              Working capital loans backed by offtake contracts enable expansion, farmer input financing,
              and regional scaling without diluting founder equity.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Stage 3 Key Characteristics</p>
            <ul className="space-y-2 text-sm">
              <li>• Credits issued and revenue flowing</li>
              <li>• CZMP marketplace operational</li>
              <li>• Multi-year offtake contracts secured</li>
              <li>• Community dividend distributions</li>
              <li>• Regional expansion to Kenya/Tanzania</li>
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
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Current</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 1 Funding
            </h3>
          </Link>

          <Link
            href="/stage-2/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Previous</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 2 Funding
            </h3>
          </Link>

          <Link
            href="/stage-4/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Next</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stage 4 Funding
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
