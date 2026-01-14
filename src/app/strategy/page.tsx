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
        content: "HISAGEN operates as a 'Full-Stack Navigator' within the global sustainability system. We connect the biophysical reality of the soil (L1-L2) to the strategic requirements of corporate action and regulatory disclosure (L4-L5)."
    }
];

const systemicStack = [
    {
        layer: "L5: Corporate Action",
        focus: "Execution & Strategy",
        detail: "Providing the high-integrity credits and supply-chain data required for corporate transition plans and carbon targets."
    },
    {
        layer: "L4: Policy & Governance",
        focus: "The Rules of the Game",
        detail: "Aligning with mandatory disclosure (CSRD/EUDR) and voluntary standards (SBTi/TNFD) to ensure future-proof compliance."
    },
    {
        layer: "L3: Ecosystem Services",
        focus: "Value Translation",
        detail: "Converting soil health (Regulating Services) and crop yields (Provisioning Services) into bankable economic value."
    },
    {
        layer: "L2: Landscapes",
        focus: "Ground-Truth Reality",
        detail: "Direct management of pilot zones (e.g. Uganda) where environmental and social outcomes actually happen."
    },
    {
        layer: "L1: Foundations",
        focus: "Planetary Boundaries",
        detail: "Anchoring the model in biophysical science—restoring nutrient cycles and soil biomes to stay within safe operating limits."
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

            <section className="mt-20">
                <div className="mb-12 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">Vertical Integration</h2>
                    <h3 className="text-4xl font-bold text-secondary">The Systemic Stack</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto font-medium italic">
                        "HISAGEN solves the strategy-execution gap by operating across every layer of the sustainability system."
                    </p>
                </div>

                <div className="space-y-4">
                    {systemicStack.map((s, idx) => (
                        <div key={s.layer} className="relative flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-mist bg-white hover:border-primary/30 transition-all group shadow-sm">
                            <div className="md:w-px h-full bg-mist absolute left-12 top-0 -z-10 hidden md:block" />
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-parchment flex items-center justify-center font-bold text-xs relative z-10 shadow-lg group-hover:bg-primary transition-colors">
                                {5 - idx}
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
