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
        content: "By integrating cutting-edge microbial technology (Nature) with robust digital systems architecture (Tech), we can lower the cost of carbon verification and increase yields globally. We create the vertical integration required to turn landscape-level outcomes into institutional-grade assets."
    },
    {
        title: "Strategic Positioning",
        content: "HISAGEN operates as a 'Full-Stack Navigator' within the global sustainability system. We connect the biophysical reality of the soil and local landscape management to the strategic requirements of corporate action and regulatory disclosure."
    }
];

const systemicStack = [
    {
        icon: "🔬",
        layer: "Soil Science & Technology",
        focus: "Biophysical Foundation",
        detail: "Everything anchors in soil science. We deploy proven microbial technology (Rhizolizer® Duo) to restore nutrient cycles, improve soil health, and sequester atmospheric carbon."
    },
    {
        icon: "🗺️",
        layer: "On-the-Ground Operations",
        focus: "Ground-Truth Reality",
        detail: "We manage pilot zones (starting in Uganda) where regenerative agriculture actually happens. This is where MRV data is captured, community relationships are built, and real environmental impact occurs."
    },
    {
        icon: "🌱",
        layer: "Ecological Outcomes",
        focus: "Value Creation",
        detail: "We convert soil health improvements and carbon sequestration into measurable, verifiable outcomes. Our technology increases crop yields (immediate value) while building soil carbon (long-term assets)."
    },
    {
        icon: "📜",
        layer: "Standards & Compliance",
        focus: "The Rules of the Game",
        detail: "We align with global carbon standards, verification protocols, and regulatory frameworks to ensure our credits meet institutional buyer requirements and future-proof compliance."
    },
    {
        icon: "💼",
        layer: "Corporate Buyers",
        focus: "Strategy & Execution",
        detail: "We provide corporations with high-integrity carbon credits and supply-chain traceability data to meet climate targets, transition plans, and mandatory disclosure requirements."
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

            <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-16 text-center">
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

            <section className="mt-20">
                <div className="mb-12 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">Vertical Integration</h2>
                    <h3 className="text-4xl font-bold text-secondary">From Soil to Markets</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto font-medium italic">
                        "HISAGEN bridges the gap between ground-truth ecological outcomes and institutional-grade carbon assets."
                    </p>
                </div>

                <div className="space-y-4">
                    {systemicStack.map((s, index) => (
                        <div key={s.layer} className="relative flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-mist bg-white hover:border-primary/30 transition-all group shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center text-sm font-black text-secondary/70 relative z-10 group-hover:bg-primary/10 group-hover:text-secondary transition-colors">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    <h4 className="text-lg font-bold text-secondary">{s.layer}</h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{s.focus}</span>
                                </div>
                                <p className="text-sm text-slate leading-relaxed">{s.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-20 p-12 rounded-3xl border border-mist bg-parchment/10">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold text-secondary mb-6 lowercase tracking-tight">The Data Flow<span className="text-primary font-black uppercase tracking-widest text-[9px] ml-3">producers → investors</span></h3>
                        <p className="text-sm text-slate leading-relaxed mb-6">
                            Evidence flows up through our system. We capture ground-truth MRV at the farm level, verify it through technical certifiers, and deliver it as a source of truth for corporate disclosure and ESG reporting.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Measurement</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Verification</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Disclosure</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-secondary mb-6 lowercase tracking-tight">The Capital Flow<span className="text-primary font-black uppercase tracking-widest text-[9px] ml-3">investors → stewards</span></h3>
                        <p className="text-sm text-slate leading-relaxed mb-6">
                            Capital flows down through our system. We aggregate investment and de-risking funding from global markets, shaping it through high-integrity frameworks to reach the land stewards who drive sequestration.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Blended Finance</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Insetting</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">PES</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">Execution Framework</h2>
                    <h3 className="text-4xl font-bold text-secondary">The HISAGEN Methodology</h3>
                    <p className="mt-4 text-slate max-w-xl mx-auto font-medium italic">How we translate strategy into landscape-scale execution.</p>
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

            <section className="mt-20 p-12 rounded-2xl bg-secondary text-parchment relative overflow-hidden">
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
