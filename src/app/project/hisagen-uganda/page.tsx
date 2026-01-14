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

      <section className="mt-10 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Current Funding Status</p>
          </div>
          <h2 className="text-2xl font-bold text-secondary">Stage 1: Incubation</h2>
          <p className="mt-3 text-sm text-slate leading-relaxed">
            This project is currently executing the <strong>Incubation Phase</strong> of the HISAGEN Capital Continuum. We are securing foundational data, local partnerships, and initial "Soil-to-Sale" proof points.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <a
            href="/stage-1"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-parchment hover:bg-secondary/90 transition-all shadow-md group"
          >
            Review Stage 1 Criteria
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="/funding-roadmap/capital-continuum"
            className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-white px-6 py-3 text-sm font-bold text-secondary hover:bg-parchment/50 transition-all shadow-sm"
          >
            Institutional Blueprint
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Project Strategic Gaps</p>
          <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase tracking-widest font-bold">Field Research Required</span>
        </div>
        <div className="space-y-4">
          {pilotGaps.map((gap) => (
            <div key={gap.area} className="p-4 rounded-lg border border-mist/50 bg-parchment/10">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">{gap.area}</h3>
              <p className="text-sm text-slate mt-2 italic">"{gap.description}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Technical Architecture</p>
        <p className="mt-4 text-sm text-slate leading-relaxed">
          The Uganda pilot is designed around a multi-layered technical stack:
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-mist/50 bg-white">
            <h4 className="font-bold text-secondary text-xs uppercase tracking-widest mb-2">Soil Biology</h4>
            <p className="text-xs text-slate">Integrating Locus AG's specialized biologicals to accelerate soil carbon sequestration and yield resilience.</p>
          </div>
          <div className="p-4 rounded-lg border border-mist/50 bg-white">
            <h4 className="font-bold text-secondary text-xs uppercase tracking-widest mb-2">MRV Pipeline</h4>
            <p className="text-xs text-slate">Combining ground-truth soil sampling with regional satellite imagery for transparent verification.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Community & Resilience</p>
        <div className="mt-4 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="text-sm text-slate leading-relaxed">
              HISAGEN isn't just about carbon; it's about farmer livelihoods. Our pilot model includes educational workshops, yield optimization training, and direct community revenue participation from carbon sales.
            </p>
          </div>
          <div className="flex-1 rounded-lg bg-secondary p-6 text-parchment text-center flex flex-col justify-center">
            <p className="text-2xl font-bold italic">"Community First"</p>
            <p className="text-[10px] uppercase tracking-widest mt-2 opacity-60">The HISAGEN Social Promise</p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-mist pt-12 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Uganda Implementation</p>
            <h2 className="mt-2 text-3xl font-bold text-secondary">Roadmap & Ecosystem Alignment</h2>
            <p className="mt-2 text-sm text-slate max-w-xl">
              Applying the <strong>Capital Continuum</strong> framework to the specific partner workstreams required for the Uganda Pilot.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest text-nowrap">Current: Stage 1</span>
          </div>
        </div>

        <div className="grid gap-8">
          {/* STAGE 1 */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-secondary bg-white shadow-md shadow-secondary/5">
            <div className="absolute top-0 right-0 bg-secondary text-parchment px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Active Phase</div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Stage 1</span>
                  <h3 className="text-2xl font-bold text-secondary">Incubation</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">Focus on feasibility, local trust, and technical baselining.</p>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest border-b border-mist pb-1">Primary Deliverables & Partners</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-parchment/30 rounded-lg border border-mist/50">
                      <p className="text-[10px] font-bold text-secondary uppercase">Domain 1: Originator</p>
                      <p className="text-xs text-slate mt-1 italic"><strong>Deep Six</strong>: Securing land rights, community MOUs, and local government alignment in Uganda.</p>
                    </div>
                    <div className="p-3 bg-parchment/30 rounded-lg border border-mist/50">
                      <p className="text-[10px] font-bold text-secondary uppercase">Domain 5: Systems Architecture</p>
                      <p className="text-xs text-slate mt-1 italic"><strong>Pandion</strong>: Designing the funding bridge, data orchestration, and "Digital Twin" of the pilot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 2 */}
          <div className="rounded-2xl border border-mist bg-white shadow-sm p-6 transition-all hover:border-secondary/20">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold text-slate uppercase tracking-[0.2em]">Stage 2</span>
                <h3 className="text-2xl font-bold text-secondary">Implementation</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">Scaling from 500 farmers to full district coverage with biological tech.</p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-[10px] font-bold text-slate uppercase tracking-widest border-b border-mist pb-1">Primary Deliverables & Partners</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-mist/5 rounded-lg border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase">Domain 2: Implementation</p>
                    <p className="text-xs text-slate mt-1 italic"><strong>Locus AG / HISAGEN</strong>: Field deployment of soil microbial technology and real-time MRV data collection.</p>
                  </div>
                  <div className="p-3 bg-mist/5 rounded-lg border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase">Domain 3: Certification</p>
                    <p className="text-xs text-slate mt-1 italic"><strong>3Degrees</strong>: Drafting the Project Design Document (PDD) and coordinating with global registries (Verra/Gold Standard).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 3 */}
          <div className="rounded-2xl border border-mist bg-slate/5 shadow-sm p-6 opacity-80">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold text-slate uppercase tracking-[0.2em]">Stage 3</span>
                <h3 className="text-2xl font-bold text-secondary">Stabilization</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">Credits are issued and the "Soil-to-Sale" revenue engine is operational.</p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-[10px] font-bold text-slate uppercase tracking-widest border-b border-mist pb-1">Primary Deliverables & Partners</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white/80 rounded-lg border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase">Domain 4: Monetization</p>
                    <p className="text-xs text-slate mt-1 italic"><strong>CZMP</strong>: Listing credits on the global marketplace and managing wholesale offtake contracts.</p>
                  </div>
                  <div className="p-3 bg-white/80 rounded-lg border border-mist/50">
                    <p className="text-[10px] font-bold text-slate uppercase">Domain 2: Field Ops (Steady State)</p>
                    <p className="text-xs text-slate mt-1 italic"><strong>Hisagen</strong>: Managing the ongoing "biological harvest" and ensuring community dividend payouts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 4 */}
          <div className="rounded-2xl border border-mist bg-slate/5 shadow-sm p-6 opacity-60">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold text-slate uppercase tracking-[0.2em]">Stage 4</span>
                <h3 className="text-2xl font-bold text-secondary">Maturity</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">Institutional exit or sovereign-backed scaling across East Africa.</p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-[10px] font-bold text-slate uppercase tracking-widest border-b border-mist pb-1">Primary Deliverables & Partners</p>
                <div className="p-3 bg-white/50 rounded-lg border border-mist/50">
                  <p className="text-[10px] font-bold text-slate uppercase">Domain 4: Institutional Monetization</p>
                  <p className="text-xs text-slate mt-1 italic"><strong>HISAGEN / CZMP</strong>: Packaging pilot performance data for Green Bond issuance or sovereign portfolio inclusion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-xl border border-secondary/20 bg-secondary/5 text-center">
          <p className="text-sm text-secondary font-medium">
            Accountability within each domain ensures the <strong>Uganda Pilot</strong> transforms from a grant-funded incubation into a bankable institutional asset.
          </p>
        </div>
      </section>
    </div>
  );
}
