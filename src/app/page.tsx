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
      <StageBreadcrumb stage="HISAGEN" trail={[{ label: "Overview" }]} />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">HISAGEN private portal</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          HISAGEN is a nature-plus-technology venture unlocking carbon finance for rural landscapes.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This site is the internal working hub we share with the core team and the client. It captures the capital
          strategy, partner context, and pilot evidence that will inform the Uganda proof of concept and the broader
          HISAGEN program.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Type: Private portal</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: HISAGEN company</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Pilot: Uganda (Stage 1)</span>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">HISAGEN company story</p>
          <h2 className="mt-2 text-2xl font-semibold text-secondary">Our organisational journey</h2>
          <p className="mt-3 text-sm text-slate">
            HISAGEN is building a platform to finance nature-based carbon solutions through blended capital, community-integrated
            delivery, and transparent partner networks. This portal is the working version of that platform; it documents the capital
            continuum logic, partner briefs, and the evidence piles as we shape the wider business.
          </p>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Uganda pilot spotlight</p>
          <h2 className="mt-2 text-2xl font-semibold text-secondary">Flagship project for HISAGEN</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li>Location: Uganda, maize trials for nature-based carbon and community resilience.</li>
            <li>Partners: Locus AG (Product + Carbon Now initiative) and Keir’s Carbon Marketplace venture.</li>
            <li>Deliverables: carbon rights clarity, pilot data (MRV), community engagement, and a funder-ready proposal.</li>
            <li>Objective: prove the HISAGEN method before replicating across landscapes.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Partners & products</p>
          <p className="mt-2 text-sm text-slate">
            Locus AG contributes commercial product depth and the Carbon Now program, while Keir’s carbon marketplace organisation
            is shaping downstream demand and buyer narratives. This portal keeps those relationships transparent through the
            communications timeline, attachments, and partner pages.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum Stages</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className={`rounded-xl border p-6 ${stage.status ? stageStyles[stage.status] : stageStyles.default}`}
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
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum overview</p>
        <p className="mt-3 text-sm text-slate">
          Capital Continuum is the spine of our funding strategy. Start at the dedicated overview page, then browse the stage links
          (1-4) in the navigation as the project grows.
        </p>
        <div className="mt-4 grid gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
          <a href="/funding-roadmap/capital-continuum" className="text-secondary underline-offset-4 hover:underline">
            Open Capital Continuum overview
          </a>
          <span>Stage 1: /stage-1</span>
          <span>Stage 2: /stage-2</span>
          <span>Stage 3: /stage-3</span>
          <span>Stage 4: /stage-4</span>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Resources (cross-cutting)</p>
        <p className="mt-3 text-sm text-slate">
          The Resources page pulls comms, attachments, and partner summaries. Think of it as the evidence vault behind this portal—always
          in sync with what we present to clients and partners.
        </p>
        <a
          href="/resources"
          className="mt-3 inline-flex items-center rounded-full border border-mist bg-white px-4 py-2 text-xs font-medium text-secondary hover:border-primary/50"
        >
          Open Resources
        </a>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
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
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 priorities</p>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            {stage1Priorities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
