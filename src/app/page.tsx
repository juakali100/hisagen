import Image from "next/image";
import StageBreadcrumb from "../components/StageBreadcrumb";

const strategicFocus = [
  {
    title: "Who We Are",
    label: "Organization",
    description: "The founding team, partner ecosystem, and governance structure behind HISAGEN.",
    href: "/organization",
  },
  {
    title: "What We Do",
    label: "Strategy",
    description: "Our Theory of Change: Making agricultural carbon bankable through integrated technology, verification, and finance.",
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
            src="/images/heroes/hisagen-hero-female-farmer-mrv.jpeg"
            alt="Female farmer in-field (MRV context)"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl">
        <section className="relative isolate mt-20 overflow-hidden rounded-3xl border border-mist bg-white shadow-md shadow-secondary/5">

          <div className="px-8 py-14 lg:flex lg:items-start lg:gap-12 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-2">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="rounded-full border border-primary/15 bg-parchment/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Founding Stewardship Portal
                </span>
                <a href="/stage-1" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate hover:text-secondary transition-colors">
                  <span>Current Ops: Stage 1</span>
                  <span aria-hidden="true" className="text-slate/60 group-hover:text-secondary transition-colors">
                    →
                  </span>
                </a>
              </div>

              <h1 className="mt-10 text-5xl font-black tracking-tight text-balance text-secondary sm:text-6xl">
                Agricultural Carbon.{" "}
                <span className="text-primary italic">Farmer-First.</span>
              </h1>
              <p className="mt-7 text-lg font-medium leading-relaxed text-pretty text-slate sm:text-xl">
                HISAGEN makes agricultural carbon bankable. We integrate proven soil science, rigorous verification, and structured finance to connect smallholder farmers to carbon markets—starting in East Africa.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="/program"
                  className="rounded-md bg-secondary px-4 py-2.5 text-sm font-bold text-parchment shadow-sm hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors"
                >
                  Explore programs
                </a>
                <a href="/resources" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                  Knowledge Base <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {homeStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-mist bg-white/90 px-4 py-3 shadow-sm">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate/50">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-wider text-secondary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Staggered image grid */}
            <div className="mt-14 flex justify-end gap-4 lg:mt-0 lg:pl-0">
              <div className="w-32 flex-none space-y-4 pt-24 lg:pt-32">
                <div className="relative">
                  <Image
                    src="/images/home/farmer-at-sunset.jpeg"
                    alt="Ugandan farmer surveying crops at sunset"
                    width={256}
                    height={384}
                    className="aspect-[2/3] w-full rounded-xl object-cover border border-mist"
                  />
                </div>
              </div>
              <div className="w-32 flex-none space-y-4 pt-12 lg:pt-16">
                <div className="relative">
                  <Image
                    src="/images/home/healthy-soil-in-hands.jpeg"
                    alt="Healthy soil held in farmer's hands"
                    width={256}
                    height={384}
                    className="aspect-[2/3] w-full rounded-xl object-cover border border-mist"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/home/healthy-maize-plant.jpeg"
                    alt="Healthy maize growing in Ugandan field"
                    width={256}
                    height={384}
                    className="aspect-[2/3] w-full rounded-xl object-cover border border-mist"
                  />
                </div>
              </div>
              <div className="w-32 flex-none space-y-4">
                <div className="relative">
                  <Image
                    src="/images/home/tablet-in-farmer-field.jpeg"
                    alt="Digital MRV technology in the field"
                    width={256}
                    height={384}
                    className="aspect-[2/3] w-full rounded-xl object-cover border border-mist"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/home/farmers-standing-in-field.jpeg"
                    alt="Farmer community surveying their land"
                    width={256}
                    height={384}
                    className="aspect-[2/3] w-full rounded-xl object-cover border border-mist"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence-ready delivery - standalone section */}
        <section className="mt-16 rounded-2xl border border-mist bg-white p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate/60">Evidence-ready delivery</p>
              <p className="mt-2 text-xl font-bold text-secondary">Institutional-grade MRV, without the noise.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { title: "Soil & practice data capture", detail: "Field-first, farmer-aligned" },
                { title: "Verification & audit trail", detail: "Standards-aligned" },
                { title: "Credit issuance & buyer readiness", detail: "Commercial value" },
              ].map((row) => (
                <div key={row.title} className="rounded-xl border border-mist bg-parchment/30 px-4 py-3">
                  <p className="text-sm font-bold text-secondary">{row.title}</p>
                  <p className="mt-1 text-xs text-slate">{row.detail}</p>
                </div>
              ))}
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
            "The problem isn't that soil carbon doesn't exist—it's that it can't be <span className="text-leaf-green">verified, priced, and traded</span> at institutional standards. We solve that."
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-10 font-medium">
            Our objective is to prove the HISAGEN model through our Uganda flagship—connecting smallholder farmers to carbon markets with verified, bankable credits—then replicate across high-potential landscapes globally.
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
            Knowledge Base
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
