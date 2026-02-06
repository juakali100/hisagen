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
        deliverables: ["Rhizolizer® Deployment", "Yield Improvement (15-30%)", "Plant Health Data"],
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
        targets: ["5,000 hectares under management", "15-30% yield improvement for farmers", "Soil health data collection established"],
        status: "active",
        progress: "In Progress"
    },
    {
        phase: "Medium-Term",
        timeline: "Year 3-5",
        targets: ["50,000+ hectares", "Measurable farmer income improvement", "Second geography deployed"],
        status: "upcoming",
        progress: "Planned"
    },
    {
        phase: "Long-Term",
        timeline: "Year 5-10",
        targets: ["4M+ farmers reached", "Model proven for global replication", "Sustainable farmer livelihoods established"],
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
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Regenerative Agriculture Program</p>
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
                            <p className="text-xs font-bold text-secondary">Build Resilient Crops</p>
                        </div>
                        <p className="text-[11px] text-slate leading-relaxed">Healthier soil biology produces stronger plants that better withstand drought, pests, and climate stress — protecting farmer harvests.</p>
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

            {/* Technology Deep Dive Callout */}
            <a href="/ecosystem/locus-ag" className="block mt-6 group">
                <div className="rounded-xl border-2 border-emerald-300 bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-5 hover:border-emerald-400 hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center">
                                <span className="text-emerald-700 text-xl">🧬</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">The Science</p>
                                <h3 className="text-base font-bold text-secondary">Locus AG Technology Deep Dive</h3>
                                <p className="text-xs text-slate mt-1">Endophytic microbes, product specifications, validated yield data & more</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 text-emerald-600 group-hover:translate-x-1 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </a>

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
                        <a href="/ecosystem/locus-ag" className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
                            View Full Locus AG Profile →
                        </a>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-blue-100">
                        <p className="text-sm font-bold text-secondary mb-2">HISAGEN</p>
                        <p className="text-sm text-slate leading-relaxed">
                            <em>High Impact Seed Application for a Greener Environment.</em> Partnership bringing Locus AG technology to new markets, starting with East Africa (Uganda → Rwanda → Kenya). Dual entity structure: HISAGEN USA + HISAGEN Africa.
                        </p>
                    </div>
                </div>

                {/* Team narrative */}
                <div className="mt-6 pt-6 border-t border-blue-200 flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-500 text-sm">●</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-slate leading-relaxed">
                            <strong>Exceptional Team:</strong> An unusual event brought together a diverse and complementary team — <em>a banker, an entrepreneur, agronomists and farming experts</em> — united by a unique vision to bring this technology to Africa.
                        </p>
                        <a href="/organization" className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary hover:underline">
                            Meet the team →
                        </a>
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

                {/* Business Opportunity - Why East Africa */}
                <div className="mb-6 p-4 rounded-lg border border-primary/20 bg-white">
                    <p className="text-sm text-slate leading-relaxed">
                        <strong>East Africa presents a compelling entry point</strong>, with strong local demand for sustainable yield improvement and national research partners like <strong>NARO</strong> already engaged in field trials. With proven results and regulatory approvals, this model can be rapidly scaled across the continent to improve livelihoods for millions of smallholder farmers.
                    </p>
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

            {/* Page 6: East Africa GDP and Agriculture Summary */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-globe-seedling.png" alt="" width={28} height={28} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">East Africa</p>
                        <h2 className="text-lg font-bold text-secondary">GDP and Agriculture Summary</h2>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed mb-6">
                    We'll launch in <strong>Uganda</strong> in partnership with NARO and MAAIF, using it as our operational base to strategically scale across East Africa.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-mist">
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Country</th>
                                <th className="text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Ag % GDP</th>
                                <th className="text-center py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Subsistence %</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Key Exports</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 text-slate">Kenya</td>
                                <td className="py-2 px-3 text-center text-slate">21%</td>
                                <td className="py-2 px-3 text-center text-slate">32%</td>
                                <td className="py-2 px-3 text-slate text-xs">Tea, flowers, coffee</td>
                            </tr>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 text-slate">Tanzania</td>
                                <td className="py-2 px-3 text-center text-slate">23%</td>
                                <td className="py-2 px-3 text-center text-slate">65%</td>
                                <td className="py-2 px-3 text-slate text-xs">Tobacco, coffee, cashew</td>
                            </tr>
                            <tr className="border-b border-mist/50 bg-primary/5">
                                <td className="py-2 px-3 font-bold text-secondary">Uganda</td>
                                <td className="py-2 px-3 text-center font-bold text-secondary">25%</td>
                                <td className="py-2 px-3 text-center font-bold text-secondary">66%</td>
                                <td className="py-2 px-3 text-xs font-bold text-secondary">Coffee, cocoa</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-3 text-slate">Rwanda</td>
                                <td className="py-2 px-3 text-center text-slate">25%</td>
                                <td className="py-2 px-3 text-center text-slate">55%</td>
                                <td className="py-2 px-3 text-slate text-xs">Tea, coffee</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 text-[10px] text-slate/60 text-right">
                    Source: World Bank WDI 2023, CIA Factbook 2024
                </p>
            </section>

            {/* Page 7: Regulatory Strategy */}
            <section className="mt-6 rounded-xl border border-blue-200 bg-blue-50/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-lg">→</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Regulatory Strategy</p>
                        <h2 className="text-lg font-bold text-secondary">Uganda as Regional Precedent</h2>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed">
                    Once we secure regulatory approval in Uganda through <strong>UNBS</strong> and obtain the required commercial license, we will use that approval as a <strong>strong precedent</strong> to streamline subsequent government approvals across the wider East African region — improving efficiency, reducing time-to-market, and accelerating regional rollout.
                </p>

                <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                    {[
                        { country: "Kenya", pop: "51M", gdp: "$108B" },
                        { country: "Tanzania", pop: "56M", gdp: "$79B" },
                        { country: "Uganda", pop: "49M", gdp: "$49B" },
                        { country: "Rwanda", pop: "12M", gdp: "$14B" },
                    ].map((c) => (
                        <div key={c.country} className={`p-2 rounded-lg ${c.country === 'Uganda' ? 'bg-blue-100 border border-blue-200' : 'bg-white border border-mist'}`}>
                            <p className={`text-xs font-bold ${c.country === 'Uganda' ? 'text-blue-700' : 'text-secondary'}`}>{c.country}</p>
                            <p className="text-[10px] text-slate">{c.pop}</p>
                            <p className="text-[10px] text-slate">{c.gdp}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Page 8: Pan-Africa Expansion Strategy */}
            <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-globe-seedling.png" alt="" width={28} height={28} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">5-Year Plan</p>
                        <h2 className="text-lg font-bold text-secondary">Pan-Africa Expansion Strategy</h2>
                    </div>
                </div>

                <p className="text-sm text-slate leading-relaxed mb-6">
                    We've structured our Africa expansion strategy into <strong>four quarters/phases</strong>, recognizing the continent's significant geographic and cultural diversity — each quarter focusing on distinct markets, operating environments, and customer needs.
                </p>

                <div className="grid gap-3 md:grid-cols-4">
                    <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Phase 1: East</p>
                        <p className="text-xs font-bold text-secondary">Launch</p>
                        <p className="text-[11px] text-slate mt-2">Uganda, Kenya, Rwanda, Tanzania, Ethiopia</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-mist">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-1">Phase 2: South</p>
                        <p className="text-xs font-bold text-secondary">Expand</p>
                        <p className="text-[11px] text-slate mt-2">South Africa, Botswana, Zambia, Zimbabwe</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-mist">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-1">Phase 3: West</p>
                        <p className="text-xs font-bold text-secondary">Scale</p>
                        <p className="text-[11px] text-slate mt-2">Nigeria, Ghana</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-mist">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-1">Phase 4: North</p>
                        <p className="text-xs font-bold text-secondary">Complete</p>
                        <p className="text-[11px] text-slate mt-2">Egypt, Tunisia, Morocco</p>
                    </div>
                </div>

                <p className="mt-6 text-sm text-slate leading-relaxed p-4 bg-white rounded-lg border border-emerald-100">
                    This broader pan-African rollout will be executed through a <strong>separate, dedicated five-year plan</strong> to ensure disciplined sequencing, regulatory alignment, and scalable execution.
                </p>
            </section>

            {/* Page 9: Uganda Opportunity (Project-Level) */}
            <section className="mt-8 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-parchment p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-lg font-bold">UG</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">First Project</p>
                            <h2 className="text-lg font-bold text-secondary">Uganda Pilot</h2>
                        </div>
                    </div>
                    <a href="/project/hisagen-uganda" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                        View Full Project →
                    </a>
                </div>

                <p className="text-sm text-slate leading-relaxed mb-6">
                    East Africa presents a compelling entry point, with strong local demand for sustainable yield improvement and national research partners like <strong>NARO</strong> already engaged in field trials. With proven results and regulatory approvals, this farmer-first model can be rapidly scaled to improve livelihoods across the continent.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 rounded-lg bg-white border border-primary/20">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">Partnership</p>
                        <p className="text-sm font-bold text-secondary">NARO + MAAIF</p>
                        <p className="text-xs text-slate mt-1">National Agricultural Research Organization under Ministry of Agriculture</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-primary/20">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">Farmer Impact</p>
                        <p className="text-sm font-bold text-secondary">Better Livelihoods</p>
                        <p className="text-xs text-slate mt-1">Improved yields + Reduced input costs + Resilient crops</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white border border-primary/20">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">Scale Potential</p>
                        <p className="text-sm font-bold text-secondary">Millions of Farmers</p>
                        <p className="text-xs text-slate mt-1">Replicable model for continental rollout</p>
                    </div>
                </div>
            </section>

            {/* Page 10: Uganda Trials, Results and Next Steps */}
            <section className="mt-6 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/icons/icon-leaf-check.png" alt="" width={28} height={28} className="opacity-70" />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">Field Trials</p>
                        <h2 className="text-lg font-bold text-secondary">Uganda Trials, Results & Next Steps</h2>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">2025 Trial Timeline</p>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-center min-w-[100px]">
                            <p className="text-[10px] font-bold text-emerald-700">Feb 2025</p>
                            <p className="text-[11px] text-slate mt-1">Prep & Planting</p>
                        </div>
                        <span className="text-slate/40">→</span>
                        <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-center min-w-[100px]">
                            <p className="text-[10px] font-bold text-emerald-700">Mar-Aug</p>
                            <p className="text-[11px] text-slate mt-1">Data Collection</p>
                        </div>
                        <span className="text-slate/40">→</span>
                        <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-center min-w-[100px]">
                            <p className="text-[10px] font-bold text-emerald-700">Sep 2025</p>
                            <p className="text-[11px] text-slate mt-1">Harvest</p>
                        </div>
                        <span className="text-slate/40">→</span>
                        <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 border border-primary/30 text-center min-w-[100px]">
                            <p className="text-[10px] font-bold text-primary">Results</p>
                            <p className="text-[11px] text-slate mt-1">Highly Positive</p>
                        </div>
                    </div>
                </div>

                {/* Trial Scope */}
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Crops Tested</p>
                        <div className="flex flex-wrap gap-2">
                            {["Maize", "Irish Potatoes", "Peanuts", "Sweet Potatoes"].map((crop) => (
                                <span key={crop} className="text-xs bg-white px-2 py-1 rounded border border-mist text-secondary">{crop}</span>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Regions</p>
                        <div className="flex flex-wrap gap-2">
                            {["Western", "Northern", "Eastern", "Central"].map((region) => (
                                <span key={region} className="text-xs bg-white px-2 py-1 rounded border border-mist text-secondary">{region} Uganda</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Quote */}
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                    <p className="text-sm text-slate leading-relaxed italic">
                        "The results from these initial trials were <strong>highly positive</strong>, demonstrating strong crop response and overall effectiveness of the Rhizolizer Duo product. This success has led to the current phase, which aims to secure official approval of the Rhizolizer product range for use in Uganda."
                    </p>
                </div>

                {/* Field Photos - Pending */}
                <div className="mt-4 p-4 rounded-lg bg-amber-50 border-2 border-amber-300 border-dashed">
                    <div className="flex items-center gap-3">
                        <span className="text-amber-500 text-lg">📷</span>
                        <div>
                            <p className="text-sm font-bold text-amber-700">Field Photos Needed</p>
                            <p className="text-xs text-amber-600 mt-1">Request high-resolution field trial photos from HISAGEN team: crop rows, farmers, land preparation, product application, planting activities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pages 11-12: Uganda Regulatory Timeline */}
            <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50/30 p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <span className="text-amber-600 text-sm">📋</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600">Regulatory Path</p>
                            <h2 className="text-lg font-bold text-secondary">Uganda Approvals Timeline</h2>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-amber-100 text-amber-700">Q1 2026</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-amber-200">
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Milestone</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Timeline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { milestone: "Initial observation results submission to MAAIF", date: "Oct 2025" },
                                { milestone: "Dossier compilation (technical data, trial results, safety & efficacy)", date: "Jan 2026" },
                                { milestone: "Submission to MAAIF for registration", date: "Jan 2026" },
                                { milestone: "MAAIF review process", date: "Jan-Feb 2026" },
                                { milestone: "Response to queries / additional data requests", date: "Feb-Mar 2026" },
                                { milestone: "Approval notification received", date: "Feb-Mar 2026" },
                                { milestone: "Certificate & license issued", date: "Feb-Mar 2026" },
                                { milestone: "Final labeling & packaging approval", date: "Mar 2026" },
                                { milestone: "Market launch preparation", date: "Apr-Jun 2026", highlight: true },
                            ].map((item, idx) => (
                                <tr key={idx} className={`border-b border-amber-100/50 ${item.highlight ? 'bg-primary/10' : ''}`}>
                                    <td className={`py-2 px-3 ${item.highlight ? 'font-bold text-secondary' : 'text-slate'}`}>{item.milestone}</td>
                                    <td className={`py-2 px-3 ${item.highlight ? 'font-bold text-primary' : 'text-slate'}`}>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex items-center justify-between p-3 rounded-lg bg-white border border-amber-200">
                    <p className="text-xs text-slate">
                        <strong>Regulatory Bodies:</strong> UNBS (Standards) + NARO (Research) + MAAIF (Ministry)
                    </p>
                    <a href="/project/hisagen-uganda" className="text-xs font-bold text-primary hover:underline">
                        Full Project Details →
                    </a>
                </div>
            </section>

            {/* Page 14: Glossary */}
            <section className="mt-8 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center">
                        <span className="text-slate text-sm">📖</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">Reference</p>
                        <h2 className="text-lg font-bold text-secondary">Glossary</h2>
                    </div>
                </div>

                <div>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-mist">
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Term</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Definition</th>
                                <th className="text-left py-2 px-3 text-[10px] font-bold uppercase tracking-wider text-secondary/60">Why It Matters</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 font-bold text-secondary align-top">NARO</td>
                                <td className="py-2 px-3 text-slate align-top">National Agricultural Research Organisation — Uganda's public agricultural research body that coordinates R&D and provides technical oversight for trials.</td>
                                <td className="py-2 px-3 text-xs text-slate/70 align-top">Adds credibility and technical validation for trial design, execution, and results.</td>
                            </tr>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 font-bold text-secondary align-top">UNBS</td>
                                <td className="py-2 px-3 text-slate align-top">Uganda National Bureau of Standards — certifies products for quality, safety, and compliance before entering the market.</td>
                                <td className="py-2 px-3 text-xs text-slate/70 align-top">Supports certification/standards compliance needed for commercialization and scale.</td>
                            </tr>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 font-bold text-secondary align-top">MAAIF</td>
                                <td className="py-2 px-3 text-slate align-top">Ministry of Agriculture, Animal Industry and Fisheries — lead government ministry for agriculture policy and regulation of agricultural inputs.</td>
                                <td className="py-2 px-3 text-xs text-slate/70 align-top">Key regulatory authority for approvals/registration pathways in Uganda.</td>
                            </tr>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 font-bold text-secondary align-top">EAC</td>
                                <td className="py-2 px-3 text-slate align-top">East African Community — regional bloc of 8 Partner States: Burundi, DR Congo, Kenya, Rwanda, Somalia, South Sudan, Tanzania, Uganda.</td>
                                <td className="py-2 px-3 text-xs text-slate/70 align-top">Provides regional scaling pathway once Uganda approvals are secured.</td>
                            </tr>
                            <tr className="border-b border-mist/50">
                                <td className="py-2 px-3 font-bold text-secondary align-top">HISAGEN USA</td>
                                <td className="py-2 px-3 text-slate align-top">U.S.-incorporated parent entity holding strategy, funding, IP/commercial agreements, and global coordination.</td>
                                <td className="py-2 px-3 text-xs text-slate/70 align-top">Enables capital formation, governance, and partner/investor structure.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-3 font-bold text-secondary align-top">HISAGEN Africa</td>
                                <td className="py-2 px-3 text-slate align-top">Africa operating company responsible for execution: regulatory coordination, trials, distribution, farmer rollout, and regional scaling.</td>
                                <td className="py-2 px-3 text-xs text-slate/70 align-top">Drives on-the-ground delivery and commercialization in East Africa.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                        <h2 className="mt-1 text-lg font-bold text-secondary">Better Plant Health → Better Livelihoods</h2>
                    </div>
                    <span className="text-[10px] border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded uppercase tracking-widest font-bold">Core Model</span>
                </div>

                <p className="text-sm text-slate mb-6 max-w-2xl">
                    Smallholder farmers see immediate benefits: healthier plants, more resilient crops, improved yields, and increased income. As soil health data accumulates, future revenue opportunities from carbon markets may become available.
                </p>

                {/* Simplified journey */}
                <div className="grid gap-3 md:grid-cols-5">
                    {[
                        { stage: "1", title: "Better Soil", outcome: "Foundation", color: "bg-emerald-50 border-emerald-200" },
                        { stage: "2", title: "Healthier Plants", outcome: "Stronger crops", color: "bg-emerald-50 border-emerald-200" },
                        { stage: "3", title: "Higher Yields", outcome: "+15-30%", color: "bg-emerald-50 border-emerald-200" },
                        { stage: "4", title: "More Income", outcome: "Improved livelihood", color: "bg-primary/10 border-primary/30" },
                        { stage: "5", title: "Future Revenue", outcome: "Carbon potential", color: "bg-slate-50 border-slate-200" },
                    ].map((step, idx) => (
                        <div key={idx} className={`p-4 rounded-xl border ${step.color} text-center`}>
                            <span className="text-[10px] font-bold text-slate/50">Stage {step.stage}</span>
                            <h3 className="text-sm font-bold text-secondary mt-1">{step.title}</h3>
                            <p className="text-[10px] text-slate mt-1">{step.outcome}</p>
                        </div>
                    ))}
                </div>

                {/* Primary Value Summary */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200/50">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                        <div className="px-3 py-2 bg-white rounded-lg border border-emerald-200 shadow-sm">
                            <p className="text-xs font-bold text-emerald-700">Better Plant Health</p>
                            <p className="text-[10px] text-slate">Stronger, resilient crops</p>
                        </div>
                        <span className="text-xl font-bold text-secondary">→</span>
                        <div className="px-3 py-2 bg-white rounded-lg border border-emerald-300 shadow-sm">
                            <p className="text-xs font-bold text-emerald-700">Higher Yields</p>
                            <p className="text-[10px] text-slate">↑ 15-30%</p>
                        </div>
                        <span className="text-xl font-bold text-secondary">→</span>
                        <div className="px-3 py-2 bg-secondary rounded-lg shadow-sm">
                            <p className="text-xs font-bold text-white">More Income</p>
                        </div>
                    </div>
                    <p className="text-[10px] text-slate text-center mt-3">
                        Future potential: Carbon credits as secondary revenue stream once field data established (12-18 month horizon)
                    </p>
                </div>
            </section>

            {/* Market Context - Future Opportunity */}
            <section className="mt-8 p-6 rounded-xl border border-mist bg-parchment/20">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Future Opportunity</p>
                    <span className="text-[10px] text-slate">12-18 month horizon</span>
                </div>
                <p className="text-sm text-slate mb-4">
                    As soil health data accumulates and certification pathways are assessed, carbon credits may provide a secondary revenue stream for farmers.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { metric: "$648M", label: "Soil Carbon Market", detail: "by 2034" },
                        { metric: "285%", label: "Sector Growth", detail: "2024 YoY" },
                        { metric: "$15-40", label: "Quality Premium", detail: "per tonne" },
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
