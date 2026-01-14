import StageBreadcrumb from "../../components/StageBreadcrumb";

const strategyPillars = [
    {
        title: "Mission",
        content: "To unlock the climate and commercial potential of global soil through high-integrity carbon stewardship and regenerative agricultural systems."
    },
    {
        title: "Vision",
        content: "A future where land stewards are the primary engine of global carbon sequestration, supported by bankable, technology-driven ecological systems."
    },
    {
        title: "The Problem",
        content: "Agricultural carbon is often unbankable due to high MRV costs and a lack of verified soil-health data. This gap prevents producers—from smallholders to large estates—from participating in the global carbon economy."
    },
    {
        title: "The Theory of Change",
        content: "By integrating cutting-edge microbial technology (Nature) with robust digital systems architecture (Tech), we can lower the cost of carbon verification and increase yields globally, creating a universal model for ecological and economic value."
    }
];

const methodology = [
    {
        step: "01. Design",
        title: "Systems Architecture",
        detail: "We design the legal, financial, and digital frameworks required to make soil carbon bankable."
    },
    {
        step: "02. Deploy",
        title: "Microbial Tech",
        detail: "Partnering with Locus AG to deploy Rhizolizer® Duo across pilot zones to baseline yield and SOC impact."
    },
    {
        step: "03. Verify",
        title: "Digital MRV",
        detail: "Using 3Degrees and custom data pipelines to ground-truth carbon sequestration for institutional credit buyers."
    },
    {
        step: "04. Scale",
        title: "Capital Continuun",
        detail: "Sequencing grants, concessional capital, and eventual commercial investment through our 4-stage roadmap."
    }
];

export default function StrategyPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink font-sans">
            <StageBreadcrumb stage="What We Do" />

            <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-16 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/60">Strategy & Impact</p>
                <h1 className="mt-6 text-5xl font-bold leading-tight text-secondary">
                    Our Theory of Change
                </h1>
                <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-slate italic font-medium">
                    "HISAGEN exists to bridge the gap between nature's complexity and capital's requirements."
                </p>
            </section>

            <section className="mt-12 grid gap-8 md:grid-cols-2">
                {strategyPillars.map((pillar) => (
                    <div key={pillar.title} className="p-8 rounded-xl border border-mist bg-white shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-4">{pillar.title}</h2>
                        <p className="text-base text-slate leading-relaxed font-normal">
                            {pillar.content}
                        </p>
                    </div>
                ))}
            </section>

            <section className="mt-16">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-secondary">The HISAGEN Methodology</h2>
                    <p className="mt-4 text-slate max-w-xl mx-auto italic">How we translate strategy into landscape-scale execution.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                    {methodology.map((m) => (
                        <div key={m.step} className="p-6 rounded-xl border border-mist bg-parchment/10 relative overflow-hidden group hover:bg-white transition-colors">
                            <span className="text-5xl font-black text-secondary/5 absolute -right-2 top-0 group-hover:text-secondary/10 transition-colors uppercase">{m.step.split('.')[1]}</span>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">{m.step}</p>
                            <h3 className="text-sm font-bold text-secondary mb-2">{m.title}</h3>
                            <p className="text-[11px] text-slate leading-relaxed">{m.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 p-12 rounded-2xl bg-secondary text-parchment relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-6">Steward-First Approach</h2>
                    <p className="text-lg opacity-90 leading-relaxed max-w-3xl mb-8">
                        Our model ensures that carbon value flows back to the producer. By increasing yields through microbial technology, we provide immediate economic relief while the multi-year carbon accreditation process matures.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Ecological</p>
                            <p className="text-sm">Restored soil biomes & increased SOC.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Economic</p>
                            <p className="text-sm">Diversified income & food security.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Institutional</p>
                            <p className="text-sm">Bankable, low-risk carbon assets.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-20 flex flex-wrap justify-center gap-6">
                <a href="/program" className="px-8 py-3 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    Explore the Program Track
                </a>
                <a href="/project/hisagen-uganda" className="px-8 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    View Uganda Pilot
                </a>
            </section>
        </div>
    );
}
