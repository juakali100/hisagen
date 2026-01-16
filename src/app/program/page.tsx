import StageBreadcrumb from "../../components/StageBreadcrumb";
import { ReactNode } from "react";
import Image from "next/image";

// Market data - aligned with Strategy
const marketHighlights = [
    { metric: "$648M", label: "Market by 2034", detail: "31.9% CAGR" },
    { metric: "285%", label: "Soil Carbon Growth", detail: "2024 YoY" },
    { metric: "$15-40", label: "Per Tonne Premium", detail: "vs $4.80 avg" },
];

// Outcome targets - from Strategy Outcome Chain
const outcomeTargets = [
    {
        phase: "Short-Term",
        timeline: "Year 1-2",
        targets: ["5,000 hectares under management", "15-30% yield improvement", "First Verra VM0042 credits issued"],
        status: "active"
    },
    {
        phase: "Medium-Term",
        timeline: "Year 3-5",
        targets: ["50,000+ hectares", "70%+ carbon revenue to farmers", "Second geography deployed"],
        status: "upcoming"
    },
    {
        phase: "Long-Term",
        timeline: "Year 5-10",
        targets: ["1M+ tCO2e verified annually", "Model proven for global replication", "Sustainable farmer income stream"],
        status: "future"
    }
];

type Highlight = {
    title: string;
    body: ReactNode;
};

const programHighlights: Highlight[] = [
    {
        title: "The Bankability Thesis",
        body: (
            <div className="space-y-3">
                <p>
                    Agricultural carbon is unbankable because traditional MRV costs $30-50+ per hectare—making smallholder participation uneconomic. HISAGEN solves this by integrating technology, verification, and capital into a single stack.
                </p>
            </div>
        ),
    },
    {
        title: "Operating Model",
        body: (
            <div className="space-y-3">
                <p>
                    HISAGEN acts as the 'Full-Stack Integrator'. We coordinate the value chain from soil biology to carbon markets, using the{" "}
                    <a
                        href="/funding-roadmap/capital-continuum"
                        className="underline decoration-secondary/30 hover:decoration-secondary transition-colors"
                    >
                        Capital Continuum
                    </a>{" "}
                    framework to sequence appropriate capital at each stage.
                </p>
            </div>
        ),
    },
    {
        title: "Scalability",
        body: "The Program is a replicable 'skeleton'. Once the Uganda pilot proves unit economics, we deploy the same stack to any geography with local partners—same technology, same verification, same capital structure.",
    },
];

const programGaps = [
    {
        area: "Revenue Model Analysis",
        description: "Should HISAGEN take a % of credit upside, a management fee, or an equity stake in local delivery SPVs? Modeling scenarios.",
    },
    {
        area: "MRV Tooling Stack",
        description: "Evaluating trade-offs between remote sensing (satellite) and ground-truth data collection for Verra VM0042 compliance.",
    },
    {
        area: "Regional Expansion",
        description: "Kenya pathway under review. Identifying regulatory-friendly corridors for Program skeleton deployment.",
    },
];

export default function ProgramPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink">
            <StageBreadcrumb stage="Programs" />

            {/* Hero - Split diagonal with image (matching Strategy) */}
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
                                            Program & Operating Model
                                        </div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                                        Making Agricultural Carbon Bankable—
                                        <span className="text-primary">At Scale</span>
                                    </h1>
                                    <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
                                        The HISAGEN Agri-Carbon Program is a replicable system for turning soil carbon into institutional-grade assets. We operationalize the full value chain—from microbial technology to carbon markets.
                                    </p>
                                    <div className="mt-8 flex items-center gap-x-4">
                                        <a
                                            href="/project/hisagen-uganda"
                                            className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm hover:bg-primary/90 transition-colors"
                                        >
                                            View Uganda Pilot
                                        </a>
                                        <a href="/strategy" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                                            Strategy & ToC <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-mist/30 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <Image
                            src="/images/heroes/program-aerial-farmland.jpeg"
                            alt="Aerial view of Ugandan smallholder farmland patchwork"
                            width={1920}
                            height={1080}
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Market Opportunity - lighter version of Strategy data */}
            <section className="mt-10 p-6 rounded-xl border border-mist bg-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Market Opportunity</p>
                        <p className="text-sm text-slate mt-1">Agricultural carbon is the fastest-growing segment of the voluntary carbon market.</p>
                    </div>
                    <a href="/strategy" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
                        Full market analysis →
                    </a>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {marketHighlights.map((d) => (
                        <div key={d.label} className="p-4 rounded-lg border border-mist bg-parchment/20 text-center">
                            <p className="text-2xl font-black text-secondary">{d.metric}</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">{d.label}</p>
                            <p className="text-[10px] text-slate mt-1">{d.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Program vs Project distinction */}
            <section className="mt-10 grid gap-6 md:grid-cols-2">
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

            {/* Integrated Operating Architecture - maps to Strategy Intervention Chain */}
            <section className="mt-10 rounded-xl border border-mist bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow motion-reduce:transition-none">
                <div className="bg-secondary p-6 text-white">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">The HISAGEN Stack</p>
                    <h2 className="mt-2 text-xl font-bold tracking-tight">Four Integrated Layers</h2>
                    <p className="mt-2 text-sm opacity-80">Each layer maps to a specialized partner. Together, they solve the bankability problem.</p>
                </div>

                <div className="p-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                phase: "1. Technology",
                                org: "Locus AG / HISAGEN",
                                role: "Soil Science & Data",
                                deliverables: ["Rhizolizer® Deployment", "Yield Improvement (15-30%)", "SOC Accumulation"],
                                color: "bg-emerald-50",
                                border: "border-emerald-200"
                            },
                            {
                                phase: "2. Verification",
                                org: "3Degrees",
                                role: "Digital MRV",
                                deliverables: ["Verra VM0042 Methodology", "Satellite + AI Monitoring", "Institutional Verification"],
                                color: "bg-blue-50",
                                border: "border-blue-200"
                            },
                            {
                                phase: "3. Finance",
                                org: "Capital Continuum",
                                role: "Blended Capital",
                                deliverables: ["4-Stage Framework", "Risk-Matched Funding", "Pilot → Scale Pathway"],
                                color: "bg-amber-50",
                                border: "border-amber-200"
                            },
                            {
                                phase: "4. Operations",
                                org: "Deep Six / Local Partners",
                                role: "Implementation",
                                deliverables: ["Farmer Aggregation", "Extension Services", "Community Engagement"],
                                color: "bg-slate-50",
                                border: "border-slate-200"
                            }
                        ].map((p, idx) => (
                            <div key={idx} className={`rounded-xl border ${p.border} p-5 flex flex-col ${p.color} hover:shadow-sm transition-shadow motion-reduce:transition-none`}>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{p.phase}</span>
                                <h3 className="mt-2 text-base font-bold text-secondary">{p.org}</h3>
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

                    <div className="mt-8 p-6 rounded-xl border border-mist bg-parchment/30">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="shrink-0">
                                <div className="h-10 w-10 rounded border border-mist bg-white flex items-center justify-center text-[10px] font-bold text-secondary">ARCH</div>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.1em]">Systems Architecture</h4>
                                <p className="text-xs text-secondary mt-1 font-bold">Pandion Studio</p>
                                <p className="text-[11px] text-slate mt-2 leading-relaxed">
                                    Responsible for the <strong>connective tissue</strong>—data flows, capital coordination, and systemic scaffolding across all four layers. Pandion provides the synthesis required to make the stack work as a unified system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcome Targets - from Strategy */}
            <section className="mt-10 rounded-xl border border-mist bg-white p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Program Outcomes</p>
                        <h2 className="mt-2 text-xl font-bold text-secondary">Target Metrics by Phase</h2>
                    </div>
                    <a href="/strategy" className="text-[10px] font-bold uppercase tracking-widest text-slate hover:text-primary">
                        From Theory of Change →
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
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
                            {phase.status === 'active' && (
                                <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded mb-3">Current Focus</span>
                            )}
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

            {/* Program Highlights */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
                {programHighlights.map((highlight) => (
                    <div
                        key={highlight.title}
                        className="rounded-xl border border-mist bg-white p-6 text-sm text-slate shadow-sm"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">{highlight.title}</p>
                        <div className="mt-3 leading-relaxed">{highlight.body}</div>
                    </div>
                ))}
            </div>

            {/* Soil-to-Sale Journey */}
            <section className="mt-10 rounded-xl border border-mist bg-white p-8">
                <div className="flex items-center justify-between mb-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Operational Roadmap: The 'Soil-to-Sale' Journey</p>
                    <span className="text-[10px] border border-secondary/20 text-secondary/60 px-2 py-0.5 rounded uppercase tracking-widest font-bold">Uganda Pilot</span>
                </div>

                <div className="relative">
                    <div className="absolute left-[15px] top-4 bottom-4 w-px bg-mist md:left-1/2 md:-ml-px md:block" />

                    <div className="space-y-12">
                        {[
                            {
                                stage: "1. Deploy Technology",
                                actor: "Locus AG / HISAGEN",
                                detail: "Rhizolizer® Duo applied to smallholder plots. Immediate yield improvement while SOC accumulates.",
                                label: "TECH"
                            },
                            {
                                stage: "2. Capture Data",
                                actor: "Local Partners / 3Degrees",
                                detail: "Ground-truth MRV captures field data. Satellite monitoring validates at scale.",
                                label: "DATA"
                            },
                            {
                                stage: "3. Verify & Certify",
                                actor: "3Degrees / Verra",
                                detail: "Data translated into formal VM0042 methodology. VVB coordination for credit issuance.",
                                label: "CERT"
                            },
                            {
                                stage: "4. Issue & List",
                                actor: "Registry / CZMP",
                                detail: "Verified credits issued and listed for institutional buyers.",
                                label: "LIST"
                            },
                            {
                                stage: "5. Monetize & Reinvest",
                                actor: "HISAGEN / Farmers",
                                detail: "Credits sold. 70%+ flows to farmers. Proceeds fund expansion.",
                                label: "EARN"
                            }
                        ].map((step, idx) => (
                            <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="flex-1 hidden md:block" />
                                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded border border-mist bg-white text-[8px] font-bold text-secondary shadow-sm">
                                    {step.label}
                                </div>
                                <div className="flex-1 rounded-xl border border-mist bg-parchment/5 p-5 hover:border-secondary/20 hover:shadow-sm transition-all duration-300 motion-reduce:transition-none">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{step.actor}</p>
                                    <h3 className="text-sm font-bold text-secondary mt-1">{step.stage}</h3>
                                    <p className="text-xs text-slate mt-2 leading-relaxed">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data & Capital Flows */}
            <section className="mt-10 p-8 rounded-2xl border border-mist bg-parchment/10">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-bold text-secondary mb-4">Data Flows Up</h3>
                        <p className="text-sm text-slate leading-relaxed mb-4">
                            Evidence flows from field to market. Ground-truth MRV at farm level → verification through 3Degrees → disclosure-ready data for corporate buyers.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Measurement</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Verification</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Disclosure</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-secondary mb-4">Capital Flows Down</h3>
                        <p className="text-sm text-slate leading-relaxed mb-4">
                            Investment flows from institutions to stewards. Capital Continuum matches funding type to project stage → reaches farmers via high-integrity frameworks.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Grants</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Carbon Finance</span>
                            <span className="text-[9px] bg-white border border-mist px-2 py-1 rounded font-bold uppercase tracking-widest text-secondary/60">Commercial</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Gaps */}
            <section className="mt-10 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Programmatic Gaps</p>
                    <span className="text-[10px] border border-amber-200 bg-amber-50 text-amber-700 px-2 py-0.5 rounded uppercase tracking-widest font-bold">Active Research</span>
                </div>
                <div className="space-y-4">
                    {programGaps.map((gap) => (
                        <div key={gap.area} className="p-4 rounded-lg border border-mist/50 bg-parchment/10 text-ink hover:bg-white hover:shadow-sm transition-all duration-300 motion-reduce:transition-none">
                            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">{gap.area}</h3>
                            <p className="text-sm text-slate mt-2 leading-relaxed">{gap.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Revenue Model */}
            <section className="mt-10 rounded-xl border border-mist bg-white p-6 mb-10 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold border-b border-mist pb-2 mb-6">Revenue Model (Draft)</p>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 text-center">
                    {[
                        { label: "Management Fees", sub: "Recurring", detail: "Program coordination" },
                        { label: "Credit Upside", sub: "Variable", detail: "% of credit value" },
                        { label: "Technical Advisory", sub: "Ad-hoc", detail: "Methodology support" },
                        { label: "SPV Equity", sub: "Long-term", detail: "Project ownership" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-5 border border-mist rounded-xl bg-parchment/10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{item.label}</p>
                            <p className="text-[9px] text-slate/50 font-bold uppercase mt-1">{item.sub}</p>
                            <p className="text-[10px] text-slate mt-2">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTAs */}
            <section className="my-16 flex flex-wrap justify-center gap-6">
                <a href="/project/hisagen-uganda" className="px-8 py-3 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    View Uganda Pilot
                </a>
                <a href="/funding-roadmap/capital-continuum" className="px-8 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    Capital Continuum
                </a>
                <a href="/strategy" className="px-8 py-3 border border-secondary text-secondary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-parchment transition-colors">
                    Strategy & ToC
                </a>
            </section>
        </div>
    );
}
