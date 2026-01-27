import StageBreadcrumb from "../../components/StageBreadcrumb";
import { ReactNode } from "react";
import Image from "next/image";

// Partnership status data
const partnerships = [
    {
        layer: "1. Technology",
        partner: "Locus AG / HISAGEN",
        role: "Soil Science & Data",
        status: "confirmed",
        statusLabel: "Active",
        deliverables: ["Rhizolizer® Deployment", "Yield Improvement (15-30%)", "SOC Accumulation"],
        color: "bg-emerald-50",
        border: "border-emerald-200"
    },
    {
        layer: "2. Operations",
        partner: "HISAGEN Africa",
        role: "Implementation",
        status: "confirmed",
        statusLabel: "Active",
        deliverables: ["Farmer Aggregation", "Extension Services", "Community Engagement"],
        color: "bg-emerald-50",
        border: "border-emerald-200"
    }
];

// Outcome targets with progress
const outcomeTargets = [
    {
        phase: "Short-Term",
        timeline: "Year 1-2",
        targets: ["5,000 hectares under management", "15-30% yield improvement", "First Verra VM0042 credits issued"],
        status: "active",
        progress: "In Progress"
    },
    {
        phase: "Medium-Term",
        timeline: "Year 3-5",
        targets: ["50,000+ hectares", "70%+ carbon revenue to farmers", "Second geography deployed"],
        status: "upcoming",
        progress: "Planned"
    },
    {
        phase: "Long-Term",
        timeline: "Year 5-10",
        targets: ["1M+ tCO2e verified annually", "Model proven for global replication", "Sustainable farmer income stream"],
        status: "future",
        progress: "Vision"
    }
];

// Strategic gaps with ownership
const strategicGaps = [
    {
        area: "Revenue Model Structure",
        description: "% of credit upside vs management fee vs SPV equity stake. Need financial modeling.",
        owner: "Keir / Finance",
        priority: "High",
        targetDate: "Q1 2026",
        status: "open"
    },
    {
        area: "MRV Tooling Decision",
        description: "Remote sensing (satellite) vs ground-truth data collection trade-offs for VM0042 compliance.",
        owner: "HISAGEN / Technical",
        priority: "Medium",
        targetDate: "Q1 2026",
        status: "in_progress"
    },
    {
        area: "Kenya Expansion Pathway",
        description: "Regulatory landscape review, partner identification, timeline for second geography.",
        owner: "HISAGEN Africa / Strategy",
        priority: "Low",
        targetDate: "Q2 2026",
        status: "not_started"
    },
];

// Revenue model options with decision status
const revenueOptions = [
    {
        model: "Management Fees",
        type: "Recurring",
        description: "Program coordination fee",
        status: "likely",
        statusLabel: "Likely"
    },
    {
        model: "Credit Upside",
        type: "Variable",
        description: "% of credit value",
        status: "under_review",
        statusLabel: "Under Review"
    },
    {
        model: "Technical Advisory",
        type: "Ad-hoc",
        description: "Methodology support",
        status: "confirmed",
        statusLabel: "Confirmed"
    },
    {
        model: "SPV Equity",
        type: "Long-term",
        description: "Project ownership",
        status: "under_review",
        statusLabel: "Under Review"
    }
];

// Key decisions tracker
const keyDecisions = [
    { decision: "Verra VM0042 as verification methodology", status: "decided", date: "Nov 2025" },
    { decision: "Uganda as pilot geography", status: "decided", date: "Oct 2025" },
    { decision: "Locus AG technology partnership", status: "decided", date: "Sep 2025" },
    { decision: "Revenue model structure", status: "open", date: "—" },
    { decision: "Kenya expansion timeline", status: "open", date: "—" },
];

export default function ProgramPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink">
            <StageBreadcrumb stage="Programs" />

            {/* Program Status Header */}
            <section className="rounded-2xl border border-mist bg-white overflow-hidden">
                <div className="bg-secondary p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Agri-Carbon Program</p>
                            <h1 className="mt-2 text-2xl font-bold tracking-tight">Program Overview & Status</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] uppercase tracking-widest opacity-50">Program Stage</p>
                            <p className="text-sm font-bold text-accent">Stage 1: Incubation</p>
                        </div>
                    </div>
                </div>

                {/* Quick Status Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-mist">
                    <div className="p-4 text-center">
                        <p className="text-2xl font-black text-secondary">2/2</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate mt-1">Partners Confirmed</p>
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-2xl font-black text-secondary">1</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate mt-1">Active Project</p>
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-2xl font-black text-amber-600">2</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate mt-1">Open Decisions</p>
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-2xl font-black text-emerald-600">3</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate mt-1">Decisions Made</p>
                    </div>
                </div>
            </section>

            {/* The Problem - Full Width */}
            <section className="mt-8 rounded-xl border border-terracotta-200 bg-terracotta-50/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-weather.png" alt="" width={32} height={32} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta-500">The Problem</p>
                        <h2 className="text-lg font-bold text-secondary">Global Soil Crisis</h2>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed mb-4">
                    Farmers worldwide face a compounding crisis. Soils are depleted, yields are declining, and the cost of synthetic fertilizers keeps rising. Climate volatility makes it worse — droughts, floods, and unpredictable seasons stress already weakened land.
                </p>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
                    <div className="p-4 rounded-lg bg-white border border-terracotta-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-roots.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Soil Degradation</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Intensive farming depletes organic matter. Degraded soil releases carbon into the atmosphere instead of storing it.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-terracotta-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-hand-money.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Fertilizer Dependency</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Synthetic fertilizers are expensive, energy-intensive to produce, and require more each year as soil health declines.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-terracotta-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-raindrop.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Water Pollution</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Fertilizer runoff contaminates rivers, groundwater, and coastal ecosystems — creating dead zones and health risks.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-terracotta-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-co2.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Climate Impact</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Agriculture contributes ~25% of global emissions. Healthy soil sequesters carbon; degraded soil releases it.</p>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed mt-6 p-4 bg-white rounded-lg border border-terracotta-100">
                    <strong>The cycle is unsustainable:</strong> degraded soil → more fertilizer needed → higher costs → more pollution → further soil damage. Breaking this cycle requires a fundamentally different approach.
                </p>
            </section>

            {/* The Solution */}
            <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-micro.png" alt="" width={32} height={32} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">The Solution</p>
                        <h2 className="text-lg font-bold text-secondary">Microbial Bio-Stimulants</h2>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed mb-4">
                    Natural, living soil treatments that restore soil biology from the ground up. Unlike synthetic inputs, they work with nature — improving root systems, nutrient absorption, and soil structure while regenerating long-term soil health.
                </p>

                <div className="grid gap-4 md:grid-cols-3 mt-6">
                    <div className="p-4 rounded-lg bg-white border border-emerald-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-leaf-check.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Reduce Fertilizer Dependency</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Plants absorb nutrients more efficiently, requiring less synthetic input — cutting costs and pollution.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-emerald-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-sequester.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Sequester Carbon</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Healthier soil biology stores carbon in the ground, creating carbon credit opportunities while fighting climate change.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-emerald-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Image src="/icons/icon-circular-arrows.png" alt="" width={20} height={20} className="opacity-60" />
                            <p className="text-xs font-bold text-secondary">Break the Cycle</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Regenerative, not extractive. Each season improves soil rather than depleting it — sustainable for the long term.</p>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-handshake.png" alt="" width={32} height={32} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">Who We Are</p>
                        <h2 className="text-lg font-bold text-secondary">HISAGEN + Locus AG</h2>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-white border border-blue-100">
                        <p className="text-sm font-bold text-secondary mb-2">Locus AG</p>
                        <p className="text-sm text-slate leading-relaxed">
                            US-based agricultural biotechnology company with patented microbial products (Rhizolizer). Proven across American farms with 15-30% yield improvements. The technology works — now it's ready for new markets.
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-blue-100">
                        <p className="text-sm font-bold text-secondary mb-2">HISAGEN</p>
                        <p className="text-sm text-slate leading-relaxed">
                            <em>High Impact Seed Application for a Greener Environment.</em> Partnership bringing Locus AG technology to new markets, starting with East Africa (Uganda → Rwanda → Kenya). Dual entity structure: HISAGEN USA + HISAGEN Africa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Executive Summary - The Opportunity */}
            <section className="mt-8 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-emerald-50 p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Image src="/icons/icon-globe-seedling.png" alt="" width={32} height={32} className="opacity-70" />
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">Executive Summary</p>
                            <h2 className="mt-1 text-lg font-bold text-secondary">The Opportunity</h2>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* Unique Product */}
                    <div className="p-4 rounded-lg border border-mist bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">●</span>
                            <h3 className="text-sm font-bold text-secondary">Unique Product</h3>
                        </div>
                        <p className="text-sm text-slate leading-relaxed">
                            First-of-its-kind, high-quality microbial bio-stimulant in simple ready-to-use <strong>powder and liquid format</strong>, creating a new niche in the African market.
                        </p>
                    </div>

                    {/* Proven & Scalable */}
                    <div className="p-4 rounded-lg border border-mist bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">●</span>
                            <h3 className="text-sm font-bold text-secondary">Proven & Scalable</h3>
                        </div>
                        <p className="text-sm text-slate leading-relaxed">
                            Product has <strong>demonstrated success in the United States</strong> through Locus AG. Scalable production line ready to meet Africa demand.
                        </p>
                    </div>

                    {/* Product Benefits */}
                    <div className="p-4 rounded-lg border border-mist bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">●</span>
                            <h3 className="text-sm font-bold text-secondary">Product Benefits</h3>
                        </div>
                        <p className="text-sm text-slate leading-relaxed">
                            Microbial-based products that improve <strong>crop yields, root development, and nutrient efficiency</strong> while reducing reliance on synthetic fertilizers.
                        </p>
                    </div>

                    {/* African Market Fit */}
                    <div className="p-4 rounded-lg border border-mist bg-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary">●</span>
                            <h3 className="text-sm font-bold text-secondary">African Market Fit</h3>
                        </div>
                        <p className="text-sm text-slate leading-relaxed">
                            Exceptionally well-suited to African markets, delivering productivity gains for <strong>smallholder and commercial farmers</strong> using low-input, climate-resilient practices.
                        </p>
                    </div>
                </div>

                {/* Market Stats Row */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/50 text-center">
                        <p className="text-xl font-black text-secondary">$138.8M → $233.85M</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mt-1">Africa Bio-Stimulants Market</p>
                        <p className="text-[10px] text-slate mt-1">2025 → 2031</p>
                    </div>
                    <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/50 text-center">
                        <p className="text-xl font-black text-secondary">9.08%</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mt-1">CAGR 2026-2031</p>
                        <p className="text-[10px] text-slate mt-1">Market Growth Rate</p>
                    </div>
                    <div className="p-4 rounded-lg border border-emerald-200 bg-emerald-50/50 text-center">
                        <p className="text-xl font-black text-secondary">Patented</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mt-1">Technology & IP</p>
                        <p className="text-[10px] text-slate mt-1">Strong margins</p>
                    </div>
                </div>

                <p className="mt-4 text-[10px] text-slate/60 text-right">
                    Source: Mordor Intelligence - Africa Biostimulants Market
                </p>
            </section>

            {/* Key Decisions Tracker */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">Key Decisions</h2>
                    <span className="text-[10px] text-slate">Strategic choices defining the program</span>
                </div>
                <div className="grid gap-2">
                    {keyDecisions.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 px-3 rounded-lg bg-parchment/30 hover:bg-parchment/50 transition-colors">
                            <span className="text-sm text-ink">{item.decision}</span>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] text-slate">{item.date}</span>
                                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                    item.status === 'decided'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-amber-100 text-amber-700'
                                }`}>
                                    {item.status === 'decided' ? 'Decided' : 'Open'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Strategic Gaps - ELEVATED */}
            <section className="mt-8 rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-amber-500">⚠️</span>
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">Strategic Gaps</h2>
                    </div>
                    <span className="text-[10px] border border-amber-300 bg-amber-100 text-amber-700 px-2 py-0.5 rounded uppercase tracking-widest font-bold">Needs Resolution</span>
                </div>
                <div className="space-y-3">
                    {strategicGaps.map((gap) => (
                        <div key={gap.area} className="p-4 rounded-lg border border-amber-200 bg-white">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-secondary">{gap.area}</h3>
                                    <p className="text-xs text-slate mt-1 leading-relaxed">{gap.description}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                        gap.priority === 'High' ? 'bg-terracotta-100 text-terracotta-700' :
                                        gap.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                                        'bg-slate-100 text-slate-600'
                                    }`}>
                                        {gap.priority}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-mist">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-slate/60">Owner:</span>
                                    <span className="text-[10px] font-bold text-secondary">{gap.owner}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-slate/60">Target:</span>
                                    <span className="text-[10px] font-bold text-secondary">{gap.targetDate}</span>
                                </div>
                                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                    gap.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                                    gap.status === 'open' ? 'bg-amber-100 text-amber-700' :
                                    'bg-slate-100 text-slate-600'
                                }`}>
                                    {gap.status === 'in_progress' ? 'In Progress' : gap.status === 'open' ? 'Open' : 'Not Started'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Program vs Project distinction */}
            <section className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">Program = The How</h3>
                    </div>
                    <p className="text-sm text-slate leading-relaxed">
                        A <strong>Program</strong> is the replicable operating model—the technology stack, partner ecosystem, methodology, and capital structure that can be deployed across multiple geographies.
                    </p>
                </div>
                <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">Project = The Where</h3>
                    </div>
                    <p className="text-sm text-slate leading-relaxed">
                        A <strong>Project</strong> is a specific implementation in a precise location—Uganda first, then Kenya, then regional scale. Each project inherits the Program skeleton.
                    </p>
                </div>
            </section>

            {/* Partnership Stack with Status */}
            <section className="mt-8 rounded-xl border border-mist bg-white overflow-hidden shadow-sm">
                <div className="bg-parchment/50 p-4 border-b border-mist">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/60">The HISAGEN Stack</p>
                            <h2 className="mt-1 text-lg font-bold text-secondary">Partnership Status</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 text-[9px]">
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                <span className="text-slate">Active</span>
                            </span>
                            <span className="flex items-center gap-1 text-[9px]">
                                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                <span className="text-slate">Framework</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {partnerships.map((p, idx) => (
                            <div key={idx} className={`rounded-xl border ${p.border} p-5 flex flex-col ${p.color}`}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{p.layer}</span>
                                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                                        p.status === 'confirmed' ? 'bg-emerald-200 text-emerald-700' : 'bg-blue-200 text-blue-700'
                                    }`}>
                                        {p.statusLabel}
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-secondary">{p.partner}</h3>
                                <p className="text-xs font-medium text-slate/70 mt-1 uppercase tracking-wider">{p.role}</p>
                                <div className="h-px bg-mist my-4 w-full" />
                                <ul className="space-y-2 flex-grow">
                                    {p.deliverables.map((d, dIdx) => (
                                        <li key={dIdx} className="text-[11px] text-slate flex gap-2 items-start">
                                            <span className="text-primary mt-0.5">✓</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcome Targets with Progress */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Program Outcomes</p>
                        <h2 className="mt-1 text-lg font-bold text-secondary">Target Metrics by Phase</h2>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {outcomeTargets.map((phase) => (
                        <div
                            key={phase.phase}
                            className={`p-5 rounded-xl border ${
                                phase.status === 'active'
                                    ? 'border-primary bg-primary/5'
                                    : phase.status === 'upcoming'
                                        ? 'border-mist bg-white'
                                        : 'border-slate/20 bg-slate/5'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-black uppercase tracking-widest text-secondary">{phase.phase}</span>
                                <span className="text-[9px] font-bold text-slate bg-white px-2 py-0.5 rounded border border-mist">{phase.timeline}</span>
                            </div>
                            <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-3 ${
                                phase.status === 'active' ? 'text-primary bg-primary/10' :
                                phase.status === 'upcoming' ? 'text-blue-600 bg-blue-100' :
                                'text-slate bg-slate/10'
                            }`}>
                                {phase.progress}
                            </span>
                            <ul className="space-y-2">
                                {phase.targets.map((target, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate">
                                        <span className="text-primary mt-0.5">→</span>
                                        <span>{target}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Revenue Model with Decision Status */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Revenue Model</p>
                        <h2 className="mt-1 text-lg font-bold text-secondary">Income Streams & Status</h2>
                    </div>
                    <span className="text-[10px] border border-amber-200 bg-amber-50 text-amber-700 px-2 py-0.5 rounded uppercase tracking-widest font-bold">Under Development</span>
                </div>
                <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
                    {revenueOptions.map((item, idx) => (
                        <div key={idx} className="p-4 border border-mist rounded-xl bg-parchment/10">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{item.model}</p>
                                <span className={`text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
                                    item.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' :
                                    item.status === 'likely' ? 'bg-blue-100 text-blue-700' :
                                    'bg-amber-100 text-amber-700'
                                }`}>
                                    {item.statusLabel}
                                </span>
                            </div>
                            <p className="text-[9px] text-slate/50 font-bold uppercase">{item.type}</p>
                            <p className="text-[10px] text-slate mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Farmer Value Journey - Kept as useful for all audiences */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">The Farmer Journey</p>
                        <h2 className="mt-1 text-lg font-bold text-secondary">From Soil Health to Dual Income</h2>
                    </div>
                    <span className="text-[10px] border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded uppercase tracking-widest font-bold">Core Model</span>
                </div>

                <p className="text-sm text-slate mb-6 max-w-2xl">
                    Smallholder farmers gain two revenue streams: improved crop yields from healthier soil, plus carbon credit income from the carbon their soil sequesters.
                </p>

                {/* Simplified journey */}
                <div className="grid gap-3 md:grid-cols-5">
                    {[
                        { stage: "1", title: "Soil Health", outcome: "Foundation", color: "bg-emerald-50 border-emerald-200" },
                        { stage: "2", title: "Better Yields", outcome: "+15-30%", color: "bg-emerald-50 border-emerald-200" },
                        { stage: "3", title: "Carbon Building", outcome: "SOC accrues", color: "bg-amber-50 border-amber-200" },
                        { stage: "4", title: "Verification", outcome: "VM0042", color: "bg-blue-50 border-blue-200" },
                        { stage: "5", title: "Carbon Revenue", outcome: "70%+ to farmer", color: "bg-primary/10 border-primary/30" },
                    ].map((step, idx) => (
                        <div key={idx} className={`p-4 rounded-xl border ${step.color} text-center`}>
                            <span className="text-[10px] font-bold text-slate/50">Stage {step.stage}</span>
                            <h3 className="text-sm font-bold text-secondary mt-1">{step.title}</h3>
                            <p className="text-[10px] text-slate mt-1">{step.outcome}</p>
                        </div>
                    ))}
                </div>

                {/* Dual Income Summary */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-primary/10 border border-emerald-200/50">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                        <div className="px-3 py-2 bg-white rounded-lg border border-emerald-200 shadow-sm">
                            <p className="text-xs font-bold text-emerald-700">Crop Revenue</p>
                            <p className="text-[10px] text-slate">↑ 15-30%</p>
                        </div>
                        <span className="text-xl font-bold text-secondary">+</span>
                        <div className="px-3 py-2 bg-white rounded-lg border border-primary/30 shadow-sm">
                            <p className="text-xs font-bold text-primary">Carbon Revenue</p>
                            <p className="text-[10px] text-slate">70%+ to farmer</p>
                        </div>
                        <span className="text-xl font-bold text-secondary">=</span>
                        <div className="px-3 py-2 bg-secondary rounded-lg shadow-sm">
                            <p className="text-xs font-bold text-white">Dual Income</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Context - Demoted */}
            <section className="mt-8 p-6 rounded-xl border border-mist bg-parchment/20">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Market Context</p>
                    <span className="text-[10px] text-slate">Reference data</span>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { metric: "$648M", label: "Market by 2034", detail: "31.9% CAGR" },
                        { metric: "285%", label: "Soil Carbon Growth", detail: "2024 YoY" },
                        { metric: "$15-40", label: "Per Tonne Premium", detail: "vs $4.80 avg" },
                    ].map((d) => (
                        <div key={d.label} className="p-4 rounded-lg border border-mist bg-white text-center">
                            <p className="text-xl font-black text-secondary">{d.metric}</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">{d.label}</p>
                            <p className="text-[10px] text-slate mt-1">{d.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTAs */}
            <section className="my-12 flex flex-wrap justify-center gap-4">
                <a href="/project/hisagen-uganda" className="px-6 py-2.5 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    View Uganda Pilot
                </a>
                <a href="/capital-continuum" className="px-6 py-2.5 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    Capital Continuum
                </a>
                <a href="/strategy" className="px-6 py-2.5 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    Strategy & Governance
                </a>
            </section>
        </div>
    );
}
