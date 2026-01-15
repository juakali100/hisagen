import StageBreadcrumb from "../../components/StageBreadcrumb";

const stage2Focus = [
  "Finalize MRV system and validation partners.",
  "Secure delivery partners and operating capacity.",
  "Confirm governance and legal structure at scale.",
  "Prepare for blended finance eligibility.",
];

const stage2Artifacts = [
  "Implementation plan and delivery milestones",
  "MRV protocol and verification pathway",
  "Partnership agreements and roles",
  "Risk register and mitigation plan",
];

export default function Stage2Page() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 2"
        trail={[
          { label: "Agri-Carbon Program", href: "/program" },
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 2: Implementation
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Implementation readiness overview
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Stage 2 focuses on operational rollout, MRV readiness, and delivery capacity. This
          section will be filled once Stage 1 evidence is complete.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Implementation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Timeline: Years 4-8</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: Operational Rollout</span>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-secondary">Strategic Context: Demonstrating Viability</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              Once feasibility milestones are achieved, projects move into registration with carbon standards.
              This stage focuses on establishing the Special Purpose Vehicle (SPV), scaling field activities, and
              deploying full MRV systems. Credits begin to be issued, and while revenues remain variable,
              private capital engagement increases through prepayment agreements or blended finance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate italic border-l-2 border-secondary/20 pl-4">
              Structuring integrity is central: the design of the SPV and the governance of benefit-sharing determine
              investor trust and long-term scalability.
            </p>
          </div>
          <div className="md:w-2/5 rounded-xl bg-white p-6 border border-mist text-ink">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Implementation Milestones</h3>
            <ul className="space-y-3">
              {[
                "First carbon credits generated and issued",
                "Community agreements formalized & carbon rights secured",
                "Verified MRV systems fully operational",
                "Initial and ongoing carbon credit sales executed"
              ].map((milestone) => (
                <li key={milestone} className="flex gap-3 text-xs text-slate leading-tight">
                  <span className="text-emerald-500 font-bold">✓</span>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Stage 2 Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage2Focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Capital Fit</p>
          <p className="mt-3 text-sm text-slate leading-relaxed">
            Stage 2 utilizes <strong>Carbon Finance</strong> (Prepayment contracts, Carbon streaming, Carbon-collateralized loans).
            Funding bridges the "Delivery Gap" between technical success and large-scale operational rollout.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">Carbon Finance</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Blended Finance</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Pre-financing</span>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-mist bg-white p-6 mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Required Artifacts</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {stage2Artifacts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
