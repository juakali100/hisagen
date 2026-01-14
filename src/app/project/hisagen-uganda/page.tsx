import StageBreadcrumb from "../../../components/StageBreadcrumb";

const pilotFocus = [
  { label: "Location", value: "Uganda (Primary Landscapes)" },
  { label: "Crop Focus", value: "Maize & Intercropping" },
  { label: "Carbon Registry", value: "TBD (Targeting High-Integrity)" },
  { label: "Primary Partner", value: "Deep Six Consulting" },
];

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
        stage="HISAGEN Uganda Pilot"
        trail={[
          { label: "HISAGEN Agri-Carbon Program", href: "/program" },
          { label: "HISAGEN Uganda Pilot" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Project</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary leading-tight">
          HISAGEN Uganda Pilot: Flagship Implementation
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "Proving the end-to-end Agri-Carbon cycle in the field."
        </p>
      </section>

      <section className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-4">
        {pilotFocus.map((item) => (
          <div key={item.label} className="rounded-xl border border-mist bg-white p-4 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{item.label}</p>
            <p className="mt-2 text-sm text-slate font-medium">{item.value}</p>
          </div>
        ))}
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

        <div className="grid gap-10">
          {/* STAGE 1 */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-secondary bg-white shadow-xl shadow-secondary/10">
            <div className="absolute top-0 right-0 bg-secondary text-parchment px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Active Implementation Phase</div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3">
                  <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target Capital: Grants & Philanthropy</div>
                  <h3 className="text-2xl font-bold text-secondary">Stage 1: Incubation</h3>
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
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 2 */}
          <div className="rounded-2xl border border-mist bg-white shadow-sm p-8 transition-all hover:border-secondary/20">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="inline-block px-2 py-1 bg-mist/20 text-slate text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target Capital: Blended Finance</div>
                <h3 className="text-2xl font-bold text-secondary">Stage 2: Implementation</h3>
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
              </div>
            </div>
          </div>

          {/* STAGE 3 */}
          <div className="rounded-2xl border border-mist bg-slate/5 shadow-sm p-8 opacity-80">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="inline-block px-2 py-1 bg-mist/20 text-slate text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target Capital: Impact Debt/Equity</div>
                <h3 className="text-2xl font-bold text-secondary">Stage 3: Stabilization</h3>
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
              </div>
            </div>
          </div>

          {/* STAGE 4 */}
          <div className="rounded-2xl border border-mist bg-slate/5 shadow-sm p-8 opacity-60">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="inline-block px-2 py-1 bg-mist/20 text-slate text-[10px] font-bold uppercase tracking-widest rounded mb-3">Target Capital: Institutional / Green Bonds</div>
                <h3 className="text-2xl font-bold text-secondary">Stage 4: Maturity</h3>
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 p-8 rounded-2xl border border-secondary/20 bg-secondary/5 text-center">
          <p className="text-sm text-secondary font-medium leading-relaxed">
            By mapping the <strong>types of capital</strong> to our <strong>ecosystem accountability</strong>, we ensure that the Uganda Pilot remains focused on the technical and social rigour required to unlock institutional-scale financing.
          </p>
        </div>
      </section>
    </div>
  );
}
