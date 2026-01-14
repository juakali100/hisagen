import StageBreadcrumb from "../../components/StageBreadcrumb";

const snapshot = [
  {
    title: "Project",
    detail:
      "Integrated agriculture and carbon model combining microbial biofertilizers with soil carbon verification.",
  },
  {
    title: "Product Scope",
    detail: "Rhizolizer® Duo (Maize) + new testing on Sweet/Irish Potatoes and Peanuts.",
  },
  {
    title: "Pilot Reach",
    detail: "Uganda NARO independent trials across 5 agro-ecological zones.",
  },
  {
    title: "Commercial Goal",
    detail: "Secure UNBS approval and generate local sales income to cover operational overheads.",
  },
];

const stage1Objectives = [
  "Confirm pilot evidence and MRV pathway.",
  "Clarify legal and governance structure (carbon rights, land tenure).",
  "Draft unit economics and the Stage 1 funding ask.",
  "Define the target funder segment for Stage 1 capital.",
];

const stage1Outputs = [
  "Evidence summary and data table (pilot).",
  "Stage 1 funding brief (1-2 pages).",
  "Updated concept note with filled gaps.",
  "Funder shortlist with eligibility notes.",
];

const decisionGates = [
  "Do we have enough evidence to approach funders?",
  "Is the funding ask sized to Stage 1 reality?",
  "Do legal and governance risks have a mitigation path?",
];

const evidenceOnHand = [
  "Phase 1 Maize Trial completed (v. promising results).",
  "NARO independent trials active in 5 zones (results pending).",
  "Regulatory pathway with UNBS identified for commercial entry.",
];

const stage1Gaps = [
  "Verified pilot metrics and outcomes summary.",
  "Unit economics and 3-5 year financial model.",
  "Carbon rights clarity and farmer agreement structure.",
  "Clear program narrative and theory of change.",
];

const stage2Unlock = [
  "MRV operational and verifiable.",
  "First credits issued or pathway confirmed with timelines.",
  "Delivery partners and operating capacity in place.",
];

export default function Stage1Page() {
  return (
    <div className="mx-auto max-w-5xl text-ink font-sans">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[
          { label: "Agri-Carbon Program", href: "/program" },
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60">
          Stage 1: Incubation
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Incubation Brief & Execution Plan
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "Proving the pilot, clarifying foundations, and defining the right Stage 1 capital ask."
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider">Stage: Incubation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider">Timeline: Years 1-3</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider">Focus: Uganda pilot</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider text-primary">Readiness: 13/25</span>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-secondary">Strategic Context: Laying the Foundations</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              The incubation stage is the most fragile period in a project’s lifecycle. Projects are not yet commercially viable
              and must rely on non-repayable funding such as grants, philanthropy, or official development assistance.
              At this stage, risks are high and private capital is scarce.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate italic border-l-2 border-secondary/20 pl-4">
              The focus is on establishing project foundations: area definition, feasibility assessments, carbon methodology
              selection, stakeholder engagement, and clarifying land/carbon tenure rights.
            </p>
          </div>
          <div className="md:w-2/5 rounded-xl bg-white p-6 border border-mist">
            <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">De-risking Milestones</h3>
            <ul className="space-y-3">
              {[
                "Project proponent & partners identified",
                "Stakeholders mapped & consultations conducted",
                "Early government endorsement secured",
                "Remote sensing & carbon potential curve",
                "Preliminary budget prepared"
              ].map((milestone) => (
                <li key={milestone} className="flex gap-3 text-[11px] text-slate leading-tight font-medium">
                  <span className="text-emerald-500 font-black">/</span>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {snapshot.map((item) => (
          <div key={item.title} className="rounded-xl border border-mist bg-white p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">{item.title}</p>
            <p className="text-sm text-slate leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Stage 1 Objectives</p>
          <ul className="space-y-3">
            {stage1Objectives.map((item) => (
              <li key={item} className="text-xs text-slate flex gap-3">
                <span className="text-secondary/30 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Stage 1 Required Outputs</p>
          <ul className="space-y-3">
            {stage1Outputs.map((item) => (
              <li key={item} className="text-xs text-slate flex gap-3">
                <span className="text-emerald-500/50 font-bold">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Evidence & Gaps</p>
          <div className="space-y-4">
            <div>
              <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mb-2">On Hand</p>
              <ul className="space-y-2">
                {evidenceOnHand.map((item) => (
                  <li key={item} className="text-[11px] text-slate leading-tight">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-mist/30">
              <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-2">Critical Gaps</p>
              <ul className="space-y-2">
                {stage1Gaps.map((item) => (
                  <li key={item} className="text-[11px] text-slate leading-tight">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Capital Fit & Strategy</p>
          <p className="text-xs text-slate leading-relaxed">
            Stage 1 utilizes <strong>Concessional Capital</strong> (Grants, Philanthropy, Sweat Equity).
            Funding focuses on land rights, technical baselines, and community Free, Prior and Informed Consent (FPIC).
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[9px] font-bold text-slate">
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-700 uppercase">Concessional</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase">Grant-ready</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-tighter">Accelerators</span>
          </div>
          <div className="mt-6 pt-4 border-t border-mist/30">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-3">Decision Gates</p>
            <ul className="space-y-2">
              {decisionGates.map((gate) => (
                <li key={gate} className="text-[11px] text-slate italic flex gap-2">
                  <span className="text-secondary/20">?</span>
                  {gate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-parchment/30 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-2">Transition Matrix</p>
            <h2 className="text-xl font-bold text-secondary">Stage 2 Unlock Criteria</h2>
            <p className="mt-2 text-sm text-slate max-w-xl">
              To move from Incubation to Implementation, the following "Gravity Gates" must be cleared to satisfy Stage 2 pre-financing partners.
            </p>
          </div>
          <ul className="grid gap-3 flex-1">
            {stage2Unlock.map((item) => (
              <li key={item} className="p-3 rounded-lg bg-white border border-mist text-xs font-bold text-secondary uppercase tracking-wider text-center group hover:border-primary/40 transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2 mb-20">
        {[
          {
            title: "Evidence Vault",
            description: "View pilot outcomes and source materials.",
            href: "/resources",
          },
          {
            title: "Capital Continuum",
            description: "Deep dive into the 4-stage funding framework.",
            href: "/funding-roadmap/capital-continuum",
          }
        ].map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50 group"
          >
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest group-hover:text-primary">{card.title}</h3>
            <p className="mt-2 text-xs text-slate leading-relaxed">{card.description}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
