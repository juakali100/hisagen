import StageBreadcrumb from "../components/StageBreadcrumb";

const foundingPillars = [
  {
    title: "01. Organization",
    description: "The founding mission, team governance, and strategic DNA of HISAGEN.",
    href: "/organization",
  },
  {
    title: "02. Program",
    description: "The Agri-Carbon operating model, revenue wheel, and partner ecosystem.",
    href: "/program",
  },
  {
    title: "03. Project",
    description: "Real-world execution starting with the Uganda Agri-Carbon Pilot.",
    href: "/project/hisagen-uganda",
  },
];

const homeStats = [
  { label: "Phase", value: "Founding" },
  { label: "Focus", value: "Agri-Carbon" },
  { label: "Pilot", value: "Uganda" },
  { label: "Pillar", value: "3-Track" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="HISAGEN" trail={[{ label: "The Founding Dashboard" }]} />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-16 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/60">Agri-Carbon Platform</p>
        <h1 className="mt-6 text-5xl font-bold leading-tight text-secondary">
          Architecting HISAGEN
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-slate italic font-medium">
          "We are building the crane while lifting the load. This portal is the live blueprint for the HISAGEN organization, program, and projects."
        </p>
        <div className="mt-10 flex justify-center gap-4">
          {homeStats.map((stat) => (
            <div key={stat.label} className="px-4 py-2 rounded-lg border border-mist bg-white/50">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate/60">{stat.label}</p>
              <p className="text-sm font-bold text-secondary">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {foundingPillars.map((pillar) => (
          <a
            key={pillar.title}
            href={pillar.href}
            className="group rounded-xl border border-mist bg-white p-8 transition-all hover:bg-parchment/30 hover:shadow-xl hover:shadow-secondary/5"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4 group-hover:text-primary transition-colors">
              {pillar.title}
            </h2>
            <p className="text-base text-slate leading-relaxed">
              {pillar.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              Explore Pillar →
            </div>
          </a>
        ))}
      </section>

      <section className="mt-12 space-y-6">
        <div className="rounded-xl border border-mist bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-bold">The Founding Narrative</p>
            <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded font-bold uppercase tracking-widest">Master Strategy</span>
          </div>
          <p className="text-lg text-slate leading-relaxed">
            HISAGEN is more than a carbon developer. We are a **systems architect** for the agricultural transition. By acting as founders, we are designing a platform that integrates capital, technology, and community to make regenerative agriculture bankable at scale.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-lg bg-parchment/20 border border-mist/50">
              <h3 className="font-bold text-secondary uppercase text-xs tracking-widest mb-3">Our Objective</h3>
              <p className="text-sm text-slate">To prove the HISAGEN Agri-Carbon method in Uganda before replicating across sub-Saharan landscapes and beyond.</p>
            </div>
            <div className="p-6 rounded-lg bg-parchment/20 border border-mist/50">
              <h3 className="font-bold text-secondary uppercase text-xs tracking-widest mb-3">The Partnership</h3>
              <p className="text-sm text-slate">A collaboration between Deep Six Consulting (Operations) and Pandion Studio (Systems) to build a global leader in agri-carbon.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-secondary text-parchment p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Stage 1: Incubation</h2>
        <p className="max-w-2xl mx-auto opacity-80 text-lg mb-8 italic">
          "We are currently consolidating pilot data, clarifying carbon rights, and drafting the unit economics that will anchor our first funding ask."
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/stage-1" className="px-6 py-3 bg-parchment text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
            View Stage 1 Brief
          </a>
          <a href="/funding-roadmap/capital-continuum" className="px-6 py-3 border border-parchment/30 text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-parchment/10 transition-colors">
            Capital Continuum
          </a>
        </div>
      </section>

      <section className="my-16 border-t border-mist pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate font-medium">
            &copy; 2026 HISAGEN. Built using the Self-Building Crane Protocol.
          </p>
          <div className="flex gap-4">
            <a href="/resources" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Resources</a>
            <a href="/website-prototype" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Website Prototype</a>
          </div>
        </div>
      </section>
    </div>
  );
}

