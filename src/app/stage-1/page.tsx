import StageBreadcrumb from "../../components/StageBreadcrumb";

const snapshot = [
  {
    title: "Project",
    detail:
      "Integrated agriculture and carbon model combining microbial biofertilizers, soil carbon credits, and a digital farmer platform.",
  },
  {
    title: "Primary focus",
    detail: "Uganda pilot (Kenya expansion deferred).",
  },
  {
    title: "Core partners",
    detail: "Locus AG (technology), Uganda NARO (research validation), 3Degrees (carbon pathway).",
  },
  {
    title: "Stage 1 status",
    detail: "Pilot underway; evidence and financial model not yet compiled.",
  },
];

const stage1Objectives = [
  "Confirm pilot evidence and MRV pathway.",
  "Clarify legal and governance structure (carbon rights, land tenure).",
  "Draft unit economics and the Stage 1 funding ask.",
  "Define the target funder segment for Stage 1 capital.",
];

const evidenceOnHand = [
  "Concept note and v0 grant package exist.",
  "Pilot progress described as encouraging, but data is not compiled.",
  "Capital Continuum assessment scored 13/25 (grant-ready).",
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
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[
          { label: "Agri-Carbon Program", href: "/program" },
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 1: Incubation
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Incubation brief for HISAGEN
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Stage 1 is about proving the pilot, clarifying legal and financial foundations, and
          defining the right Stage 1 capital ask.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Incubation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Timeline: Years 1-3</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: Uganda pilot</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Readiness: 13/25</span>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-secondary">Strategic Context: Laying the Foundations</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              The incubation stage is the most fragile period in a project’s lifecycle. Projects are not yet commercially viable
              and must rely on non-repayable funding such as grants, philanthropy, or official development assistance.
              At this stage, risks are high and private capital is scarce, with contributions typically limited to developer
              “sweat equity.”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate italic border-l-2 border-secondary/20 pl-4">
              The focus is on establishing project foundations: area definition, feasibility assessments, carbon methodology
              selection, stakeholder engagement, and clarifying land/carbon tenure rights.
            </p>
          </div>
          <div className="md:w-2/5 rounded-xl bg-white p-6 border border-mist">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">De-risking Milestones</h3>
            <ul className="space-y-3">
              {[
                "Project proponent & local implementing partners identified",
                "Stakeholders mapped & preliminary consultations conducted",
                "Early government endorsement secured",
                "Remote sensing completed & carbon potential curve developed",
                "Preliminary budget prepared"
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
        {snapshot.map((item) => (
          <div key={item.title} className="rounded-xl border border-mist bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate">{item.title}</p>
            <p className="mt-3 text-sm text-slate">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 Objectives</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage1Objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Evidence on Hand</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {evidenceOnHand.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Stage 1 Gaps</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage1Gaps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Capital Fit</p>
          <p className="mt-3 text-sm text-slate leading-relaxed">
            Stage 1 utilizes <strong>Concessional Capital</strong> (Grants, Philanthropy, Sweat Equity).
            Funding focuses on securing land rights, technical baselines, and community Free, Prior and Informed Consent (FPIC).
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate">
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-700">Concessional Capital</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Grant-ready</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Catalytic</span>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 2 Unlock Criteria</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {stage2Unlock.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Capital Continuum Playbook",
            description: "Stage logic, five pillars, and readiness assessment template.",
            href: "/funding-roadmap/capital-continuum",
          },
          {
            title: "Funding Roadmap",
            description: "Stage 1 sequencing and grant workflow.",
            href: "/funding-roadmap",
          },
          {
            title: "Evidence Review",
            description: "Pilot outcomes and source materials.",
            href: "/evidence",
          },
          {
            title: "Resources",
            description: "PDFs, links, and working notes.",
            href: "/resources",
          },
        ].map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
          >
            <h3 className="text-lg font-semibold text-secondary">{card.title}</h3>
            <p className="mt-2 text-sm text-slate">{card.description}</p>
          </a>
        ))}
      </section>
    </div>
  );
}

