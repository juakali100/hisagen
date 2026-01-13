import StageBreadcrumb from "../components/StageBreadcrumb";

const stages = [
  {
    title: "Stage 1: Incubation",
    status: "Current",
    focus: "Foundations and proof of concept.",
    capital: "Grants, philanthropy, sweat equity.",
    needs: ["Pilot evidence compiled", "Unit economics draft", "Carbon rights clarity"],
    href: "/stage-1",
  },
  {
    title: "Stage 2: Implementation",
    focus: "Operational rollout and early delivery.",
    capital: "Blended finance, impact investors.",
    needs: ["MRV operational", "Delivery partners secured", "First credits issued"],
  },
  {
    title: "Stage 3: Stabilization",
    focus: "Consistent performance and predictable delivery.",
    capital: "Private equity, structured debt.",
    needs: ["Multi-year track record", "Stable cashflows", "Scaled governance"],
  },
  {
    title: "Stage 4: Maturity",
    focus: "Institutional capital readiness.",
    capital: "Green bonds, securities, public equity.",
    needs: ["10+ years performance", "Institutional capital fit", "Taxonomy alignment"],
  },
];

const stageStyles: Record<string, string> = {
  Current: "border-primary/60 bg-primary/5",
  default: "border-mist bg-white",
};

const stage1Links = [
  {
    title: "Stage 1 Brief",
    description: "Project summary, knowns, gaps, and current decision points.",
    href: "/stage-1",
  },
  {
    title: "Evidence Review",
    description: "Pilot data, proof points, and source materials.",
    href: "/evidence",
  },
  {
    title: "Funding Roadmap",
    description: "Capital sequencing and Stage 1 grant workflow.",
    href: "/funding-roadmap",
  },
  {
    title: "Capital Continuum",
    description: "Stage logic, five pillars, and readiness assessment.",
    href: "/funding-roadmap/capital-continuum",
  },
];

const stage1Priorities = [
  "Compile verified pilot data and MRV pathway.",
  "Clarify carbon rights and land tenure structure.",
  "Draft a simple unit economics model.",
  "Define the target funder segment for Stage 1.",
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Capital Continuum" trail={[{ label: "Overview" }]} />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          HISAGEN Capital Continuum
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Capital Continuum dashboard for the HISAGEN opportunity
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Use the four-stage continuum to keep the work focused. The only goal right now is
          to complete Stage 1 so the funding path becomes obvious.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Incubation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: Uganda pilot</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">
            Status: Stage 1 work in progress
          </span>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum Stages</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className={`rounded-xl border p-6 ${
                stage.status ? stageStyles[stage.status] : stageStyles.default
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-secondary">{stage.title}</h3>
                {stage.status ? (
                  <span className="rounded-full border border-primary/40 bg-white px-3 py-1 text-xs font-medium text-secondary">
                    {stage.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-slate">{stage.focus}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate">Capital fit</p>
              <p className="mt-2 text-sm text-slate">{stage.capital}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate">Key needs</p>
              <ul className="mt-2 space-y-1 text-sm text-slate">
                {stage.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
              {stage.href ? (
                <a
                  href={stage.href}
                  className="mt-4 inline-flex items-center rounded-full border border-mist bg-white px-4 py-2 text-xs font-medium text-secondary hover:border-primary/50"
                >
                  Open Stage 1 Brief
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 Priorities</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {stage1Priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Why Capital Continuum</p>
        <p className="mt-3 text-sm text-slate">
          HISAGEN needs stage-appropriate capital, not generic funding advice. The Capital
          Continuum keeps the project anchored in its current stage, pairs the right capital
          instruments with evolving risks, and uses the five-pillar readiness lens to surface
          the exact gaps that must be solved before scaling.
        </p>
      </section>

      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 Workbench</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {stage1Links.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
            >
              <h3 className="text-lg font-semibold text-secondary">{card.title}</h3>
              <p className="mt-2 text-sm text-slate">{card.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

