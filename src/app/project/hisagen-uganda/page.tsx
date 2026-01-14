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

      <section className="mt-10 border-t border-mist pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Jump To Stage</p>
        <div className="flex flex-wrap gap-3">
          <a href="/stage-1" className="px-4 py-2 border border-mist rounded-full text-[10px] font-bold uppercase tracking-widest text-slate hover:bg-parchment/50 transition-colors">Stage 1: Incubation</a>
          <a href="/funding-roadmap/capital-continuum" className="px-4 py-2 border border-mist rounded-full text-[10px] font-bold uppercase tracking-widest text-slate hover:bg-parchment/50 transition-colors">Capital Strategy</a>
          <a href="/resources" className="px-4 py-2 border border-mist rounded-full text-[10px] font-bold uppercase tracking-widest text-slate hover:bg-parchment/50 transition-colors">Evidence Vault</a>
        </div>
      </section>
    </div>
  );
}
