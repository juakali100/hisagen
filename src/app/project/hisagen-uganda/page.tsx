import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Image from "next/image";

const pilotFocus = [
  { label: "Location", value: "Uganda (Primary Landscapes)" },
  { label: "Crop Focus", value: "Maize & Intercropping" },
  { label: "Carbon Registry", value: "Verra VM0042" },
  { label: "Primary Partner", value: "Deep Six Consulting" },
];

const whyUganda = [
  {
    metric: "4M",
    label: "Smallholder Households",
    detail: "Average 1-3 hectare farms, ideal scale for HISAGEN model",
  },
  {
    metric: "80%",
    label: "Arable Land Available",
    detail: "Only 35% currently cultivated—massive expansion potential",
  },
  {
    metric: "76%",
    label: "Yield Gap",
    detail: "Unrealized productivity vs. potential—soil intervention needed",
  },
  {
    metric: "First",
    label: "Mover Advantage",
    detail: "No scaled agricultural carbon programs in East Africa",
  },
];

const outcomeTargets = {
  stage1: {
    outcomes: ["SOC baseline established", "5,000 hectares under management", "First Verra VM0042 credits issued"],
    timeline: "Years 1-3",
  },
  stage2: {
    outcomes: ["Scale to 50,000+ hectares", "70%+ of credit value to farmers", "Verified yield improvement (15-30%)"],
    timeline: "Years 4-8",
  },
  stage3: {
    outcomes: ["1M+ tCO2e sequestered annually", "Sustainable farmer income stream", "Model replicated to second geography"],
    timeline: "Years 9-15",
  },
  stage4: {
    outcomes: ["Regional hub for East Africa", "Institutional capital unlocked", "Blueprint for global replication"],
    timeline: "Years 16+",
  },
};

const pilotGaps = [
  {
    area: "Local Land Tenure",
    description: "Confirming the legal framework for carbon rights ownership between smallholder farmers and HISAGEN SPVs in Uganda.",
  },
  {
    area: "Baselines & Additionality",
    description: "Establishing the historical baseline for maize yields and soil organic carbon (SOC) in the target pilot zones.",
  },
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Uganda Pilot"
        trail={[{ label: "Agri-Carbon Program", href: "/program" }]}
      />

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

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Project</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary leading-tight">
          HISAGEN Uganda: Making Agricultural Carbon Bankable
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "Proving the full-stack model where it matters most—with 4 million smallholder farmers."
        </p>
      </section>

      <section className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
        {pilotFocus.map((item) => (
          <div key={item.label} className="rounded-xl border border-mist bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{item.label}</p>
            <p className="mt-2 text-sm text-slate font-medium">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Why Uganda Section */}
      <section className="mt-16 border-t border-mist pt-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Strategic Rationale</p>
          <h2 className="mt-2 text-3xl font-bold text-secondary">Why Uganda?</h2>
          <p className="mt-3 text-sm text-slate max-w-2xl leading-relaxed">
            Uganda represents the ideal first market for proving the HISAGEN model: massive smallholder scale, untapped agricultural potential, government commitment to climate-smart agriculture, and no incumbent competition.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {whyUganda.map((item) => (
            <div key={item.label} className="rounded-xl border border-secondary/20 bg-secondary/5 p-5 hover:border-secondary/40 transition-colors">
              <p className="text-3xl font-bold text-secondary">{item.metric}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-secondary/80">{item.label}</p>
              <p className="mt-3 text-xs text-slate leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-xl bg-parchment/60 border border-mist">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Government Alignment</p>
              <p className="text-sm text-slate leading-relaxed">
                Uganda has committed to climate-smart agriculture through its <strong>Nationally Determined Contributions (NDC)</strong>. Agriculture employs 70%+ of the population and contributes 24% of GDP—making soil carbon a national priority.
              </p>
            </div>
            <div className="flex-shrink-0 px-4 py-2 bg-secondary/10 rounded-lg text-center">
              <p className="text-2xl font-bold text-secondary">70%+</p>
              <p className="text-[9px] uppercase tracking-widest text-secondary/60">Employment in Agriculture</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-mist pt-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Uganda Implementation</p>
            <h2 className="mt-2 text-3xl font-bold text-secondary">Roadmap & Capital Alignment</h2>
            <p className="mt-2 text-sm text-slate max-w-xl">
              Mapping the <strong>Capital Continuum</strong> framework to the specific partner workstreams and funding types required to deliver the Uganda Pilot.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary text-parchment rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-nowrap">Status: Stage 1 Incubation</span>
          </div>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden border border-mist bg-slate-50 shadow-sm">
          {/* Stage Headers */}
          <div className="grid grid-cols-4 border-b border-mist">
            {[
              { years: "Years 1-3", stage: "Incubation" },
              { years: "Years 4-8", stage: "Implementation" },
              { years: "Years 9-15", stage: "Stabilization" },
              { years: "Years 16+", stage: "Maturity" }
            ].map((s, i) => (
              <div key={i} className={`p-4 text-center ${i < 3 ? 'border-r border-mist' : ''}`}>
                <p className="text-[10px] font-bold text-slate/60 uppercase tracking-widest">{s.years}</p>
                <p className="text-xs font-bold text-secondary uppercase tracking-tighter mt-1">{s.stage}</p>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="relative h-48 bg-secondary">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* Vertical Dividers */}
              <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.2)" />
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.2)" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.2)" />

              {/* Risk Curve (High to Low) */}
              <path
                d="M 0 30 C 250 30, 750 160, 1000 160"
                fill="none"
                stroke="#D8B75A"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
              {/* Value Curve (Low to High) */}
              <path
                d="M 0 160 C 250 160, 750 30, 1000 30"
                fill="none"
                stroke="#F7F8F5"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Floating Labels */}
            <div className="absolute top-4 left-4 bg-secondary text-parchment px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/10">High Risk</div>
            <div className="absolute bottom-4 right-4 bg-secondary text-parchment px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/10">Low Risk</div>
            <div className="absolute bottom-4 left-4 bg-white text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Low Value</div>
            <div className="absolute top-4 right-4 bg-white text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-secondary/20">High Value</div>
          </div>

          {/* Funding Labels */}
          <div className="grid grid-cols-4 bg-secondary text-parchment text-[10px] font-bold uppercase tracking-[0.1em]">
            {[
              "Grants & Concessions",
              "Blended Finance",
              "Impact & Equity",
              "Bonds & Equity"
            ].map((label, i) => (
              <div key={i} className={`p-3 text-center ${i < 3 ? 'border-r border-parchment/10' : ''}`}>
                {label}
              </div>
            ))}
          </div>

          {/* Activity / Capital Summary */}
          <div className="grid grid-cols-4 text-[9px] text-slate/80 bg-white">
            {[
              { act: "Feasibility, FPIC, Theory of Change", cap: "Grants, Dev Equity" },
              { act: "Nursery, Planting, Registration", cap: "Carbon Finance, Mezzanine" },
              { act: "First Verification, Ongoing MRV", cap: "Working Capital, Impact Debt" },
              { act: "Scale-up, Regional Exit", cap: "Green Bonds, SPV Balance Sheet" }
            ].map((item, i) => (
              <div key={i} className={`p-4 ${i < 3 ? 'border-r border-mist' : ''}`}>
                <p className="font-bold text-secondary mb-1">Activities:</p>
                <p className="leading-tight mb-2">{item.act}</p>
                <p className="font-bold text-secondary mb-1">Best Fit:</p>
                <p className="leading-tight">{item.cap}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-[9px] text-slate/50 text-right italic">
          Source: <a href="https://capital-continuum.com/resources/the-capital-continuum-fsg-7nj4f" target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline">Capital Continuum Advisors 2025</a>
        </p>

        <div className="grid gap-10">
          {/* STAGE 1 */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-secondary bg-white shadow-xl shadow-secondary/10">
            <div className="absolute top-0 right-0 bg-secondary text-parchment px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Active Implementation Phase</div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3">
                  <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target: Concessional (Grants, Philanthropy)</div>
                  <h3 className="text-2xl font-bold text-secondary">Stage 1: Incubation</h3>
                  <p className="text-[10px] font-bold text-slate/50 uppercase tracking-widest mt-0.5">Years 1-3</p>
                  <p className="mt-3 text-sm text-slate leading-relaxed italic">"Establishing the Ground Truth and securing the social license to operate."</p>
                  <div className="mt-6 flex flex-col gap-3">
                    <a href="/stage-1" className="text-xs font-bold text-secondary hover:underline flex items-center gap-2">
                      Review Full Stage 1 Criteria <span>→</span>
                    </a>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4 border-b border-mist pb-2">Primary Workstreams & Partners</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-parchment/30 rounded-xl border border-mist">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Domain 1: Originator</p>
                        <p className="text-xs text-slate mt-2 leading-relaxed"><strong>Deep Six</strong>: Land rights, local government MOUs, and community engagement to ensure additionality.</p>
                      </div>
                      <div className="p-4 bg-parchment/30 rounded-xl border border-mist">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Domain 5: Systems Architecture</p>
                        <p className="text-xs text-slate mt-2 leading-relaxed"><strong>Pandion Studio</strong>: Digital twin design, data orchestration, and funding bridge strategy.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-mist">
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-3">Outcome Targets</p>
                    <div className="flex flex-wrap gap-2">
                      {outcomeTargets.stage1.outcomes.map((outcome, i) => (
                        <span key={i} className="px-3 py-1.5 bg-secondary/10 text-secondary text-[10px] font-medium rounded-full">{outcome}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 2 */}
          <div className="rounded-2xl border border-mist bg-white shadow-sm p-8 transition-all hover:border-secondary/20">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="inline-block px-2 py-1 bg-mist/20 text-slate text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target: Carbon Finance (Prepayments, Streaming)</div>
                <h3 className="text-2xl font-bold text-secondary">Stage 2: Implementation</h3>
                <p className="text-[10px] font-bold text-slate/50 uppercase tracking-widest mt-0.5">Years 4-8</p>
                <p className="mt-2 text-sm text-slate leading-relaxed italic">"The Delivery Gap: Bridging technical success to large-scale operational rollout."</p>
                <div className="mt-4">
                  <a href="/stage-2" className="text-[10px] font-bold text-slate hover:text-secondary hover:underline">
                    View Stage 2 Readiness Criteria →
                  </a>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-2 border-b border-mist pb-2">Primary Workstreams & Partners</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-mist/5 rounded-xl border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase tracking-tighter">Domain 2: Implementation</p>
                    <p className="text-xs text-slate mt-2 leading-relaxed"><strong>Locus AG / HISAGEN</strong>: Field deployment of soil microbial technology and real-time MRV data collection.</p>
                  </div>
                  <div className="p-4 bg-mist/5 rounded-xl border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase tracking-tighter">Domain 3: Certification</p>
                    <p className="text-xs text-slate mt-2 leading-relaxed"><strong>3Degrees</strong>: Drafting PDD, coordinating with registries, and securing future-dated credits.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-mist">
                  <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-3">Outcome Targets</p>
                  <div className="flex flex-wrap gap-2">
                    {outcomeTargets.stage2.outcomes.map((outcome, i) => (
                      <span key={i} className="px-3 py-1.5 bg-mist/30 text-slate text-[10px] font-medium rounded-full">{outcome}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 3 */}
          <div className="rounded-2xl border border-mist bg-slate/5 shadow-sm p-8 opacity-80">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="inline-block px-2 py-1 bg-mist/20 text-slate text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target: Commercial (SPV Preferred Equity, Loans)</div>
                <h3 className="text-2xl font-bold text-secondary">Stage 3: Stabilization</h3>
                <p className="text-[10px] font-bold text-slate/50 uppercase tracking-widest mt-0.5">Years 9-15</p>
                <p className="mt-2 text-sm text-slate leading-relaxed italic">"The Revenue Engine: Credits are issued and the Soil-to-Sale cycle is merchantable."</p>
                <div className="mt-4">
                  <a href="/stage-3" className="text-[10px] font-bold text-slate hover:text-secondary hover:underline">
                    View Stage 3 Readiness Criteria →
                  </a>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-2 border-b border-mist pb-2">Primary Workstreams & Partners</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/80 rounded-xl border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase tracking-tighter">Domain 4: Monetization</p>
                    <p className="text-xs text-slate mt-2 leading-relaxed"><strong>CZMP</strong>: Listing credits on the global marketplace and managing wholesale offtake contracts.</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-xl border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase tracking-tighter">Domain 2: Field Ops</p>
                    <p className="text-xs text-slate mt-2 leading-relaxed"><strong>Hisagen</strong>: Managing steady-state 'biological harvest' and community dividend distributions.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-mist/50">
                  <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-3">Outcome Targets</p>
                  <div className="flex flex-wrap gap-2">
                    {outcomeTargets.stage3.outcomes.map((outcome, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/60 text-slate text-[10px] font-medium rounded-full">{outcome}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 4 */}
          <div className="rounded-2xl border border-mist bg-slate/5 shadow-sm p-8 opacity-60">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="inline-block px-2 py-1 bg-mist/20 text-slate text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target: Commercial (Institutional Debt, Green Bonds)</div>
                <h3 className="text-2xl font-bold text-secondary">Stage 4: Maturity</h3>
                <p className="text-[10px] font-bold text-slate/50 uppercase tracking-widest mt-0.5">Years 16+</p>
                <p className="mt-2 text-sm text-slate leading-relaxed italic">"Regional Expansion: The model is bankable for sovereign-backed scaling."</p>
                <div className="mt-4">
                  <a href="/stage-4" className="text-[10px] font-bold text-slate hover:text-secondary hover:underline">
                    View Stage 4 Readiness Criteria →
                  </a>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-2 border-b border-mist pb-2">Primary Workstreams & Partners</p>
                <div className="p-4 bg-white/50 rounded-xl border border-mist/50">
                  <p className="text-[10px] font-bold text-slate uppercase tracking-tighter">Domain 4: Institutional Monetization</p>
                  <p className="text-xs text-slate mt-2 leading-relaxed italic"><strong>HISAGEN / CZMP</strong>: Wholesale credit blocks, sovereign alignment, and regional hub expansion.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-mist/50">
                  <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-3">Outcome Targets</p>
                  <div className="flex flex-wrap gap-2">
                    {outcomeTargets.stage4.outcomes.map((outcome, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/40 text-slate text-[10px] font-medium rounded-full">{outcome}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 p-8 rounded-2xl border border-secondary/20 bg-secondary/5 text-center">
          <p className="text-sm text-secondary font-medium leading-relaxed">
            By aligning <strong>stage-specific capital</strong> with <strong>verified outcomes</strong>, Uganda becomes the proof point that makes agricultural carbon <strong>bankable</strong>—for institutional investors and smallholder farmers alike.
          </p>
        </div>
      </section>
    </div>
  );
}
