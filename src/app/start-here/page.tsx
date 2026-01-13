const snapshot = [
  {
    title: "What it is",
    detail:
      "An integrated agriculture and carbon project combining microbial biofertilizers, soil carbon credits, and a digital farmer platform.",
  },
  {
    title: "Who it serves",
    detail: "Smallholder farmers in East Africa, starting with Uganda.",
  },
  {
    title: "Key partners",
    detail: "Locus AG (technology), Uganda NARO (research validation), 3Degrees (carbon pathway).",
  },
  {
    title: "Current status",
    detail: "Pilot underway, evidence incomplete, funding path not yet confirmed.",
  },
];

const known = [
  "Concept note and v0 grant package exist.",
  "Pilot results are described as encouraging, but data is not compiled.",
  "Uganda is the focus; Kenya expansion is deferred.",
  "Capital Continuum assessment scored 13/25 (grant-ready).",
];

const gaps = [
  "Clear program narrative and theory of change.",
  "Verified pilot metrics and MRV plan.",
  "Legal clarity on carbon rights and land tenure.",
  "Unit economics and a 3-5 year financial model.",
  "Defined target funder segment and outreach plan.",
];

export default function StartHerePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Start Here
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          HISAGEN Project Definition
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This page orients the project before any funding strategy is chosen. Use it to
          confirm what HISAGEN is, what is known, and what is missing.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Incubation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Geography: Uganda pilot</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Audience: internal + partner view</span>
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
          <p className="text-xs uppercase tracking-[0.2em] text-slate">What We Know</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {known.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">What We Still Need</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {gaps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Direction</p>
        <p className="mt-3 text-sm text-slate">
          Funding choices should follow the project stage, not lead it. Use the Capital
          Continuum playbook to confirm the right capital type before moving into the
          grant lifecycle or investor outreach.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href="/funding-roadmap/capital-continuum"
            className="rounded-full border border-mist bg-white px-4 py-2 text-secondary hover:border-primary/50"
          >
            Open Capital Continuum Playbook
          </a>
          <a
            href="/funding-roadmap/lifecycle"
            className="rounded-full border border-mist bg-white px-4 py-2 text-secondary hover:border-primary/50"
          >
            Funding Lifecycle Alignment
          </a>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Evidence",
            description: "Pilot outcomes, documents, and proof points.",
            href: "/evidence",
          },
          {
            title: "Funding Roadmap",
            description: "Sequence of capital options and readiness checkpoints.",
            href: "/funding-roadmap",
          },
          {
            title: "Partnership Model",
            description: "Collaboration pathways and delivery roles.",
            href: "/partnership-model",
          },
          {
            title: "Resources",
            description: "Source materials, PDFs, and working notes.",
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
