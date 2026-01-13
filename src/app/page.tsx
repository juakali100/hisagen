const portalCards = [
  {
    title: "Project Definition",
    description: "Start here for project summary, knowns, and gaps.",
    href: "/start-here",
  },
  {
    title: "Evidence",
    description: "Pilot outcomes, trials, and proof points.",
    href: "/evidence",
  },
  {
    title: "Funding Roadmap",
    description: "Capital sequencing, plus Capital Continuum and Grant Playbook.",
    href: "/funding-roadmap",
  },
  {
    title: "Partnership Model",
    description: "Collaboration pathways, roles, and commercial framing.",
    href: "/partnership-model",
  },
  {
    title: "Resources",
    description: "Source materials, PDFs, and working notes.",
    href: "/resources",
  },
];

const flowSteps = [
  {
    step: "Step 1",
    title: "Define the project",
    description: "Clarify what HISAGEN is, who it serves, and what is known vs missing.",
    href: "/start-here",
    cta: "Open Project Definition",
  },
  {
    step: "Step 2",
    title: "Validate the evidence",
    description: "Review pilot data, proof points, and source materials.",
    href: "/evidence",
    cta: "Review Evidence",
  },
  {
    step: "Step 3",
    title: "Align the funding path",
    description: "Choose stage-appropriate capital and structure the proposal logic.",
    href: "/funding-roadmap",
    cta: "Open Funding Roadmap",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          HISAGEN Portal
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Project definition → evidence → funding path for the HISAGEN opportunity
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This portal translates raw inputs into a clear project, validates the evidence,
          and aligns the capital strategy to the right stage.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Incubation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: Uganda pilot</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">
            Status: Project definition in progress
          </span>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">How to Use This Portal</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {flowSteps.map((step) => (
            <div key={step.title} className="rounded-xl border border-mist bg-white p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">{step.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm text-slate">{step.description}</p>
              <a
                href={step.href}
                className="mt-4 inline-flex items-center rounded-full border border-mist bg-white px-4 py-2 text-xs font-medium text-secondary hover:border-primary/50"
              >
                {step.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">What This Portal Is For</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Translate raw inputs into a clear project definition.</li>
            <li>Track evidence, gaps, and readiness decisions.</li>
            <li>Align the funding path to the project stage.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">What Is Missing</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Verified pilot data and MRV plan.</li>
            <li>Legal clarity on carbon rights and land tenure.</li>
            <li>Unit economics and a multi-year financial model.</li>
            <li>Clear program narrative and target funder segment.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        {portalCards.map((card) => (
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
