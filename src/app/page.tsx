import Image from "next/image";
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
  { label: "Flagship", value: "Uganda Pilot" },
  { label: "Market", value: "Global / SSA" },
];

export default function HomePage() {
  return (
    <div className="text-ink font-sans">
      <div className="mx-auto max-w-5xl">
        <StageBreadcrumb stage="Dashboard" />
      </div>

      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-y border-mist bg-white overflow-hidden">
        <div className="relative h-[52vh] min-h-[360px]">
          <Image
            src="/hisagen-hero-female-farmer-mrv.jpeg"
            alt="Female farmer in-field (MRV context)"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl">
        <section className="mt-10 rounded-3xl border border-mist bg-white shadow-sm overflow-hidden">
          <div className="relative px-8 py-14">
            <Image
              src="/healthy-roots-soil-sample.jpeg"
              alt="Healthy roots and soil sample"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/85" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary/40 animate-fade-in">Founding Stewardship Portal</p>
              <h1 className="mt-8 text-6xl font-black leading-tight text-secondary tracking-tight">
                Regenerative Carbon <br />
                <span className="text-primary italic">for Global Agriculture</span>
              </h1>
              <p className="mt-8 mx-auto max-w-2xl text-xl leading-relaxed text-slate font-medium">
                HISAGEN is a systems architect for the agricultural transition, starting in sub-Saharan landscapes to prove the model for universal deployment.
              </p>

              <div className="mt-12 flex justify-center gap-4 flex-wrap">
                {homeStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="px-5 py-3 rounded-xl border border-mist bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/40 mb-1">{stat.label}</p>
                    <p className="text-sm font-bold text-secondary uppercase tracking-wider">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {strategicFocus.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group p-10 rounded-2xl border border-mist bg-white hover:bg-parchment/30 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden motion-reduce:transition-none"
            >
              {/* Arrow icon */}
              <div className="absolute top-4 right-4 text-sky-teal opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-3 group-hover:text-sky-teal/60 transition-colors">{item.label}</p>
                <h2 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-base text-slate leading-relaxed group-hover:text-ink transition-colors">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </section>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-parchment/50 border border-mist">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/60">Operational Tracks</h2>
        </div>
      </div>
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {executionTracks.map((item, index) => (
          <a
            key={item.title}
            href={item.href}
            className="group p-8 rounded-2xl border-2 border-mist bg-parchment/20 hover:bg-white border-dashed hover:border-solid hover:border-primary/20 transition-all duration-500 hover:shadow-xl relative overflow-hidden motion-reduce:transition-none"
          >
            {/* Left accent bar that grows on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '32px 32px',
                color: index === 0 ? '#1F6A4A' : '#4BA0A6'
              }} />
            </div>

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-3 group-hover:text-primary transition-colors">{item.label}</p>
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-sky-teal transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed group-hover:text-ink transition-colors">
                {item.description}
              </p>
            </div>

            {/* Corner indicator */}
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-mist group-hover:border-sky-teal flex items-center justify-center transition-colors">
              <span className="text-xs text-secondary/40 group-hover:text-sky-teal transition-colors">→</span>
            </div>
          </a>
        ))}
        </section>

        {/* Master Strategy */}
        <section className="mt-20 rounded-3xl border-2 border-secondary bg-secondary text-parchment p-12 relative overflow-hidden shadow-2xl shadow-secondary/20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mb-48 -mr-48 animate-pulse" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -mt-32 -ml-32" />

        {/* Decorative lines */}
        <div className="absolute top-12 right-12 w-32 h-32 border border-parchment/10 rounded-full" />
        <div className="absolute top-16 right-16 w-24 h-24 border border-parchment/10 rounded-full" />

        <div className="relative z-10 max-w-3xl">
          {/* Accent bar */}
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          <h2 className="text-3xl font-bold mb-6 italic leading-snug">
            "We are not just a carbon developer. We are a <span className="text-leaf-green">platform company</span> that integrates capital, technology, and community."
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-10 font-medium">
            Our objective is to prove the HISAGEN platform through our Uganda flagship before replicating across high-potential landscapes globally—addressing both smallholders and landscape-scale commercial estates.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/strategy"
              className="group px-6 py-3 bg-parchment text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
            >
              The Strategy Stack
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/stage-1"
              className="group px-6 py-3 border-2 border-parchment/30 text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-parchment/10 hover:border-leaf-green transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Current Ops: Stage 1</span>
              <div className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>
        </div>
        </section>

        <section className="my-16 border-t border-mist pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
            &copy; 2026 HISAGEN. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            href="/resources"
            className="group text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300 relative"
          >
            Evidence Vault
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="/website-prototype"
            className="group text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-leaf-green transition-all duration-300 relative"
          >
            Prototype
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-leaf-green group-hover:w-full transition-all duration-300" />
          </a>
        </div>
        </section>
      </div>
    </div>
  );
}
