import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Link from "next/link";

const stage4FundingTypes = [
  {
    type: "SPV Balance Sheet & Green Bonds",
    mix: "95% of Stage 4 funding",
    description: "Institutional-scale debt and equity for regional expansion and sovereign partnerships",
    instruments: [
      "Green bonds for carbon projects",
      "Sovereign-backed development bonds",
      "SPV securitization of carbon streams",
      "Institutional debt facilities"
    ]
  },
  {
    type: "Strategic Corporate Investment",
    mix: "Included in balance sheet",
    description: "Corporate buyers taking equity stakes in HISAGEN for supply chain carbon",
    instruments: [
      "Corporate venture capital",
      "Strategic minority investments",
      "Joint venture structures",
      "Offtake + equity deals"
    ]
  },
  {
    type: "Philanthropic / Concessional (Minimal)",
    mix: "~5% tail funding",
    description: "Limited grant support for R&D and new methodology development",
    instruments: [
      "Innovation grants for new crops/regions",
      "Research partnerships with universities",
      "Pilot funding for new technologies",
      "Technical assistance for policy advocacy"
    ]
  }
];

export default function Stage4FundingPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 4 Funding"
        trail={[
          { label: "Capital Continuum", href: "/funding-roadmap/capital-continuum" },
          { label: "Stage 4: Maturity", href: "/stage-4" },
          { label: "Funding Strategy" }
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 px-4 py-1 bg-slate-400/20 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
          Preparatory
        </div>
        <div className="flex items-center gap-3 mb-6">
          <span className="rounded-full border border-slate-600/20 bg-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-800">
            Stage 4: Maturity
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">Years 16+</span>
        </div>
        <h1 className="text-4xl font-bold text-secondary leading-tight">
          Stage 4 Funding Strategy: Institutional Capital & Green Bonds
        </h1>
        <p className="mt-6 text-lg text-slate leading-relaxed max-w-3xl">
          This section outlines the funding landscape for Stage 4 (Maturity Phase). The model is proven,
          bankable, and ready for <strong>institutional-scale debt, green bonds, and sovereign-backed expansion</strong>.
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
            <h2 className="text-xl font-bold text-teal-900 mb-3">Stage 4 Preparatory Framework</h2>
            <p className="text-sm text-teal-800 leading-relaxed mb-4">
              HISAGEN is currently in <strong>Stage 1 (Incubation)</strong>. This page provides a preparatory framework
              for Stage 4 funding to articulate the long-term vision and demonstrate ultimate bankability to institutional investors.
            </p>
            <p className="text-xs text-teal-700 italic">
              Stage 4 funding becomes relevant after 15+ years of proven carbon revenue and regional expansion (long-term horizon).
            </p>
          </div>
        </div>
      </section>

      {/* Stage 4 Funding Types */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Stage 4 Funding Types</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-6">
          {stage4FundingTypes.map((funding) => (
            <div
              key={funding.type}
              className="rounded-2xl border border-slate-600/20 bg-white p-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <h3 className="text-xl font-bold text-secondary">{funding.type}</h3>
                  </div>
                  <p className="text-base text-slate leading-relaxed mb-4">{funding.description}</p>
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-300">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800 mb-2">Capital Mix</p>
                    <p className="text-sm font-bold text-secondary">{funding.mix}</p>
                  </div>
                </div>
                <div className="md:w-80">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-3">Typical Instruments</p>
                  <ul className="space-y-2">
                    {funding.instruments.map((instrument, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate">
                        <span className="text-slate-700 font-bold shrink-0">→</span>
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

      {/* Stage 4 Vision */}
      <section className="mt-16 p-8 rounded-2xl bg-secondary text-parchment">
        <h2 className="text-2xl font-bold mb-6">Regional Expansion & Institutional Scale</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              By Stage 4, HISAGEN is no longer a "project" - it's an <strong>operating carbon asset class</strong>
              with proven track record across multiple geographies, crops, and carbon methodologies.
            </p>
            <p className="text-sm leading-relaxed opacity-90">
              The model is bankable for sovereign-backed scaling. Green bonds can finance expansion across
              Sub-Saharan Africa at 100,000+ farmer scale, backed by multi-year corporate offtake contracts.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/10 border border-white/20">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Stage 4 Vision Elements</p>
            <ul className="space-y-2 text-sm">
              <li>• Multi-country operations (Uganda, Kenya, Tanzania, Ethiopia)</li>
              <li>• Multiple crop carbon programs (maize, coffee, tea, potatoes)</li>
              <li>• Sovereign partnerships with East African governments</li>
              <li>• Corporate supply chain carbon integration</li>
              <li>• Regional HISAGEN hubs replicating the Uganda model</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exit Scenarios */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Potential Exit / Scale Scenarios</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-mist bg-white">
            <h3 className="text-base font-bold text-secondary mb-3">Strategic Acquisition</h3>
            <p className="text-sm text-slate leading-relaxed mb-4">
              Major agribusiness or carbon marketplace acquires HISAGEN for vertical integration.
            </p>
            <div className="pt-4 border-t border-mist">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Potential Acquirers</p>
              <ul className="space-y-1 text-xs text-slate">
                <li>• Yara International (fertilizer + ag-tech)</li>
                <li>• Bayer / Syngenta (biologicals portfolio)</li>
                <li>• Verra / Gold Standard (registry integration)</li>
                <li>• Climate-focused PE funds</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-mist bg-white">
            <h3 className="text-base font-bold text-secondary mb-3">Sovereign Partnership</h3>
            <p className="text-sm text-slate leading-relaxed mb-4">
              East African governments take equity stake for national carbon strategy deployment.
            </p>
            <div className="pt-4 border-t border-mist">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Partnership Models</p>
              <ul className="space-y-1 text-xs text-slate">
                <li>• Public-private partnership (PPP)</li>
                <li>• National carbon credit aggregator</li>
                <li>• Regional hub operator</li>
                <li>• Sovereign wealth fund investment</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-mist bg-white">
            <h3 className="text-base font-bold text-secondary mb-3">IPO / Public Markets</h3>
            <p className="text-sm text-slate leading-relaxed mb-4">
              HISAGEN becomes first publicly traded Agri-Carbon operating company.
            </p>
            <div className="pt-4 border-t border-mist">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Public Market Rationale</p>
              <ul className="space-y-1 text-xs text-slate">
                <li>• ESG investor appetite</li>
                <li>• Recurring carbon revenue streams</li>
                <li>• Climate infrastructure asset class</li>
                <li>• Regional expansion capital needs</li>
              </ul>
            </div>
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
              Stage 1 Funding
            </h3>
          </Link>

          <Link
            href="/stage-2/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Stage 2</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Implementation
            </h3>
          </Link>

          <Link
            href="/stage-3/funding"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Stage 3</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Stabilization
            </h3>
          </Link>

          <Link
            href="/funding-roadmap/capital-continuum"
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
