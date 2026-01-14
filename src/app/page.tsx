import StageBreadcrumb from "../components/StageBreadcrumb";

const strategicFocus = [
  {
    title: "Who We Are",
    label: "Organization",
    description: "The founding mission, team governance, and strategic DNA of HISAGEN.",
    href: "/organization",
  },
  {
    title: "What We Do",
    label: "Strategy",
    description: "Our Theory of Change: Bridging the gap between smallholder potential and institutional markets.",
    href: "/strategy",
  },
];

const executionTracks = [
  {
    title: "Programs",
    label: "Operating Model",
    description: "The Agri-Carbon operating architecture, revenue wheel, and partner ecosystem.",
    href: "/program",
  },
  {
    title: "Projects",
    label: "Implementation",
    description: "Landscape-scale execution starting with the Uganda Agri-Carbon Pilot.",
    href: "/project/hisagen-uganda",
  },
];

const homeStats = [
  { label: "Phase", value: "Founding" },
  { label: "Focus", value: "Agri-Carbon" },
  { label: "Pilot", value: "Uganda" },
  { label: "Market", value: "Sub-Saharan" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink font-sans">
      <StageBreadcrumb stage="Dashboard" />

      {/* Hero Section */}
      <section className="relative rounded-3xl border border-mist bg-white overflow-hidden shadow-2xl shadow-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-br from-parchment/50 via-white to-white" />
        <div className="relative px-8 py-20 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary/40">Founding Stewardship Portal</p>
          <h1 className="mt-8 text-6xl font-black leading-tight text-secondary tracking-tight">
            Regenerative Carbon <br />
            <span className="text-primary italic">for Sub-Saharan Agriculture</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-xl leading-relaxed text-slate font-medium">
            HISAGEN is a systems architect for the agricultural transition, building the infrastructure to make soil carbon bankable at scale.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            {homeStats.map((stat) => (
              <div key={stat.label} className="px-5 py-3 rounded-xl border border-mist bg-white/80 shadow-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/40 mb-1">{stat.label}</p>
                <p className="text-sm font-bold text-secondary uppercase tracking-wider">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Anchors */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {strategicFocus.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group p-10 rounded-2xl border border-mist bg-white hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-secondary/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-3">{item.label}</p>
            <h2 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
              {item.title}
            </h2>
            <p className="text-base text-slate leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </section>

      {/* Execution Tracks */}
      <div className="mt-16 text-center">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/30 mb-8">Operational Tracks</h2>
      </div>
      <section className="grid gap-6 md:grid-cols-2">
        {executionTracks.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group p-8 rounded-2xl border border-mist bg-parchment/10 hover:bg-white border-dashed hover:border-solid hover:border-mist transition-all hover:shadow-lg"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-3">{item.label}</p>
            <h3 className="text-xl font-bold text-secondary mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-slate leading-relaxed">
              {item.description}
            </p>
          </a>
        ))}
      </section>

      {/* Master Strategy */}
      <section className="mt-20 rounded-3xl border border-secondary bg-secondary text-parchment p-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mb-48 -mr-48" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 italic leading-snug">
            "We are not just a carbon developer. We are a platform company that integrates capital, technology, and community."
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10">
            Our objective is to prove the HISAGEN method in Uganda before replicating across high-potential landscapes globally. This portal serves as the live blueprint for our first proof point.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/strategy" className="px-6 py-3 bg-parchment text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
              The Strategy Stack
            </a>
            <a href="/stage-1" className="px-6 py-3 border border-parchment/30 text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-parchment/10 transition-colors">
              Current Ops: Stage 1
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="my-16 border-t border-mist pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
          &copy; 2026 HISAGEN. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="/resources" className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Evidence Vault</a>
          <a href="/website-prototype" className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Prototype</a>
        </div>
      </section>
    </div>
  );
}
