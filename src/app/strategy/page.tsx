import StageBreadcrumb from "../../components/StageBreadcrumb";
import Image from "next/image";

// Mission & Vision - refined with "bankable" positioning
const missionVision = {
    mission: "HISAGEN makes agricultural carbon bankable. We integrate proven soil science, rigorous digital verification, and structured blended finance to connect smallholder farmers to carbon markets—starting in East Africa, designed for global scale.",
    vision: "A regenerative agricultural economy where land stewards earn sustainable income from the carbon they sequester—verified to the standards that institutional capital requires."
};

// Market opportunity data - validated Jan 2026
const marketData = [
    {
        metric: "$36M → $648M",
        label: "Agricultural Carbon Market",
        detail: "2024 to 2034 projection (31.9% CAGR)"
    },
    {
        metric: "285%",
        label: "Soil Carbon Growth",
        detail: "Fastest growing VCM segment in 2024"
    },
    {
        metric: "$15-40",
        label: "Per Tonne Premium",
        detail: "Soil carbon vs $4.80 market average"
    },
    {
        metric: "33M",
        label: "Smallholder Farms in SSA",
        detail: "80% of all farms, largely excluded from carbon markets"
    }
];

// Problem chain - the market failure
const problemChain = [
    {
        number: "01",
        title: "Smallholders Excluded",
        problem: "Traditional MRV costs $30-50+ per hectare. Average smallholder farm is 1-3 hectares.",
        result: "33 million SSA farms locked out of carbon revenue"
    },
    {
        number: "02",
        title: "Soil Degradation Accelerating",
        problem: "Low fertilizer use, 76% yield gap vs potential, declining productivity (-3.5%/year).",
        result: "Food insecurity and poverty cycle deepening"
    },
    {
        number: "03",
        title: "Carbon Demand Unmet",
        problem: "Corporate net-zero commitments accelerating. High-quality removal credits in short supply.",
        result: "Demand-supply gap widening for verified agricultural carbon"
    }
];

// Intervention chain - what HISAGEN does
const interventionChain = [
    {
        icon: "/icons/icon-micro.png",
        layer: "Technology Layer",
        title: "Soil Science",
        detail: "Locus AG Rhizolizer microbial technology. Proven 15-30% yield improvement. Accelerated soil organic carbon accumulation.",
        validation: "Uganda NARO field trials"
    },
    {
        icon: "/icons/icon-graph.png",
        layer: "Verification Layer",
        title: "Digital MRV",
        detail: "3Degrees platform with satellite + AI monitoring. Cost-effective at smallholder scale. Verra VM0042 methodology.",
        validation: "Institutional-grade verification"
    },
    {
        icon: "/icons/icon-hand-money.png",
        layer: "Finance Layer",
        title: "Capital Continuum",
        detail: "4-stage framework matching capital type to project maturity. De-risks for commercial investors.",
        validation: "Pathway from pilot to scale"
    },
    {
        icon: "/icons/icon-farmer.png",
        layer: "Operations Layer",
        title: "Local Implementation",
        detail: "Deep Six partnership provides farmer aggregation, training, and on-ground extension services.",
        validation: "Last-mile delivery capacity"
    }
];

// Outcome chain - what changes
const outcomeChain = [
    {
        phase: "Short-Term",
        timeline: "Year 1-2",
        outcomes: [
            "Farmers experience 15-30% yield improvement",
            "Soil health metrics improve (SOC baseline established)",
            "5,000 hectares under management",
            "First carbon credits issued under Verra VM0042"
        ]
    },
    {
        phase: "Medium-Term",
        timeline: "Year 3-5",
        outcomes: [
            "Carbon revenue flowing to farmers (70%+ of credit value)",
            "Scale to 50,000+ hectares",
            "Model replicated to second geography",
            "Commercial capital entering (Stage 3-4)"
        ]
    },
    {
        phase: "Long-Term",
        timeline: "Year 5-10",
        outcomes: [
            "Sustainable income stream for smallholders",
            "Regional soil health improvement",
            "1M+ tCO2e verified annually",
            "Model proven for global replication"
        ]
    }
];

// Key assumptions with risk levels
const assumptions = [
    { assumption: "Microbial technology performs in East African soils", evidence: "Uganda NARO trials underway", risk: "Medium" },
    { assumption: "Carbon prices remain viable ($15+/tonne)", evidence: "Current $15-40, forward $25-30", risk: "Low" },
    { assumption: "Farmers adopt when economics proven", evidence: "Indigo precedent: 75% to farmer", risk: "Low" },
    { assumption: "Verra/Gold Standard methodologies credible", evidence: "AgriCarbon first Africa VM0042", risk: "Low" },
    { assumption: "Corporate buyer demand continues", evidence: "SBTi, CSRD regulatory drivers", risk: "Low" }
];

// Uganda context
const ugandaContext = [
    { metric: "4M", label: "Smallholder Households", detail: "Average 1-3 hectare farms" },
    { metric: "70%+", label: "Agricultural Employment", detail: "24% of GDP, 42% of exports" },
    { metric: "80%", label: "Arable Land", detail: "Only 35% currently cultivated" },
    { metric: "76%", label: "Yield Gap", detail: "Massive unrealized potential" }
];

export default function StrategyPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink font-sans">
            <StageBreadcrumb stage="What We Do" />

            {/* Hero - Split diagonal with image */}
            <section className="relative rounded-2xl border border-mist overflow-hidden bg-white">
                <div className="relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 lg:w-full lg:max-w-2xl">
                            <svg
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                            >
                                <polygon points="0,0 90,0 50,100 0,100" />
                            </svg>

                            <div className="relative px-6 py-16 sm:py-20 lg:px-8 lg:py-24 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <div className="mb-6 flex">
                                        <div className="relative rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate ring-1 ring-mist">
                                            Strategy & Theory of Change
                                        </div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                                        Making Agricultural Carbon{' '}
                                        <span className="text-primary">Bankable</span>
                                    </h1>
                                    <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
                                        The problem isn't that soil carbon doesn't exist—it's that it can't be verified, priced, and traded at institutional standards. HISAGEN solves the bankability problem.
                                    </p>
                                    <div className="mt-8 flex items-center gap-x-4">
                                        <a
                                            href="/program"
                                            className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-primary/90 transition-colors"
                                        >
                                            Explore the Program
                                        </a>
                                        <a href="#theory-of-change" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-mist/30 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <Image
                            src="/images/heroes/hisagen-maize-roots-close.jpeg"
                            alt="Maize roots in Ugandan soil - making the invisible visible"
                            width={1920}
                            height={1080}
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mt-12 grid gap-6 md:grid-cols-2">
                <div className="p-8 rounded-xl border border-mist bg-white shadow-sm">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Mission</h2>
                    <p className="text-base text-slate leading-relaxed">
                        {missionVision.mission}
                    </p>
                </div>
                <div className="p-8 rounded-xl border border-mist bg-white shadow-sm">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Vision</h2>
                    <p className="text-base text-slate leading-relaxed">
                        {missionVision.vision}
                    </p>
                </div>
            </section>

            {/* Market Opportunity - validated data */}
            <section className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">Market Opportunity</h2>
                    <h3 className="text-4xl font-bold text-secondary">The Agricultural Carbon Gap</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto">
                        Agricultural carbon represents a fraction of the voluntary carbon market—but it's the fastest growing segment with the highest quality premium.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                    {marketData.map((d) => (
                        <div key={d.label} className="p-6 rounded-xl border border-mist bg-white text-center">
                            <p className="text-3xl font-black text-secondary">{d.metric}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mt-2">{d.label}</p>
                            <p className="text-[11px] text-slate mt-2">{d.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem Chain */}
            <section className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">The Problem</h2>
                    <h3 className="text-4xl font-bold text-secondary">Why the Status Quo Fails</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto">
                        Three interconnected problems keep smallholders out of carbon markets and limit supply of high-quality agricultural credits.
                    </p>
                </div>

                <div className="space-y-4">
                    {problemChain.map((p) => (
                        <div key={p.number} className="p-6 rounded-xl border border-mist bg-white hover:border-sunset-orange/40 transition-all">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sunset-orange/10 flex items-center justify-center text-sm font-black text-sunset-orange">
                                    {p.number}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-secondary mb-2">{p.title}</h4>
                                    <p className="text-sm text-slate mb-3">{p.problem}</p>
                                    <p className="text-xs font-bold text-sunset-orange uppercase tracking-wide">→ {p.result}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Intervention Chain */}
            <section className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">The Solution</h2>
                    <h3 className="text-4xl font-bold text-secondary">The HISAGEN Stack</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto">
                        Four integrated layers that solve the bankability problem—from soil biology to institutional capital.
                    </p>
                </div>

                <div className="space-y-4">
                    {interventionChain.map((layer, index) => (
                        <div key={layer.layer} className="relative flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-mist bg-white hover:border-primary/30 transition-all group shadow-sm">
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors p-2">
                                <Image src={layer.icon} alt={layer.title} width={40} height={40} className="object-contain" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{layer.layer}</span>
                                        <h4 className="text-lg font-bold text-secondary">{layer.title}</h4>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">{layer.validation}</span>
                                </div>
                                <p className="text-sm text-slate leading-relaxed">{layer.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Outcome Chain */}
            <section className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">Theory of Change</h2>
                    <h3 className="text-4xl font-bold text-secondary">What Changes</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto">
                        A clear pathway from pilot to scale—with measurable outcomes at each stage.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {outcomeChain.map((phase, index) => (
                        <div key={phase.phase} className={`p-6 rounded-xl border ${index === 0 ? 'border-primary bg-primary/5' : index === 1 ? 'border-mist bg-white' : 'border-secondary/20 bg-secondary/5'}`}>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-black uppercase tracking-widest text-secondary">{phase.phase}</span>
                                <span className="text-[10px] font-bold text-slate bg-white px-2 py-1 rounded border border-mist">{phase.timeline}</span>
                            </div>
                            <ul className="space-y-3">
                                {phase.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate">
                                        <Image src="/icons/icon-leaf-check.png" alt="check" width={16} height={16} className="mt-0.5 flex-shrink-0" />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Uganda Context */}
            <section className="mt-20 p-10 rounded-2xl border border-mist bg-parchment/20">
                <div className="mb-8">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-2">First Market</h2>
                    <h3 className="text-2xl font-bold text-secondary">Why Uganda</h3>
                    <p className="mt-2 text-sm text-slate max-w-xl">
                        First-mover advantage in East Africa—no scaled agricultural carbon programs yet. Government committed to climate-smart agriculture through NDC.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                    {ugandaContext.map((stat) => (
                        <div key={stat.label} className="p-4 rounded-lg bg-white border border-mist text-center">
                            <p className="text-2xl font-black text-secondary">{stat.metric}</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">{stat.label}</p>
                            <p className="text-[10px] text-slate mt-1">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Assumptions */}
            <section className="mt-20">
                <div className="mb-10 text-center">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/40 mb-4">Risk Management</h2>
                    <h3 className="text-4xl font-bold text-secondary">Key Assumptions</h3>
                    <p className="mt-4 text-slate max-w-2xl mx-auto">
                        What must be true for the model to work—with evidence supporting each assumption.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-mist">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary/5">
                            <tr>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-secondary">Assumption</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-secondary">Evidence</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-widest text-secondary">Risk</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-mist bg-white">
                            {assumptions.map((a, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 text-slate">{a.assumption}</td>
                                    <td className="px-4 py-3 text-slate/70">{a.evidence}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${a.risk === 'Low' ? 'bg-primary/10 text-primary' : 'bg-accent/20 text-soil-brown'}`}>
                                            {a.risk}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Differentiation */}
            <section className="mt-20 p-12 rounded-2xl bg-secondary text-parchment relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="relative z-10">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-parchment/60 mb-4">Competitive Advantage</h2>
                    <h3 className="text-2xl font-bold mb-6">Why HISAGEN Wins</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-primary">Geographic</p>
                            <p className="text-sm">First-mover in East Africa. No scaled agricultural carbon program in Uganda.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-primary">Full-Stack</p>
                            <p className="text-sm">Control entire value chain vs fragmented competitors. Technology + verification + capital + operations.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-primary">Smallholder-First</p>
                            <p className="text-sm">Economic model built for 1-3 hectare farms. Dual value: yield improvement + carbon revenue.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="my-20 flex flex-wrap justify-center gap-6">
                <a href="/program" className="px-8 py-3 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    Explore the Program
                </a>
                <a href="/project/hisagen-uganda" className="px-8 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    View Uganda Pilot
                </a>
                <a href="/funding-roadmap/capital-continuum" className="px-8 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    Capital Continuum
                </a>
            </section>
        </div>
    );
}
