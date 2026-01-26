import Link from "next/link";
import StageBreadcrumb from "../../components/StageBreadcrumb";

// Key assumptions with evidence - kept for grant applications
const assumptions = [
    { assumption: "Microbial technology performs in East African soils", evidence: "Uganda NARO trials complete (Feb-Sep 2025) - Q1 2026 MAAIF approval pending", risk: "Low" },
    { assumption: "Carbon prices remain viable ($15+/tonne)", evidence: "Current $15-40, forward $25-30", risk: "Low" },
    { assumption: "Farmers adopt when economics proven", evidence: "Indigo precedent: 75% to farmer", risk: "Low" },
    { assumption: "Verra/Gold Standard methodologies credible", evidence: "AgriCarbon first Africa VM0042", risk: "Low" },
    { assumption: "Corporate buyer demand continues", evidence: "SBTi, CSRD regulatory drivers", risk: "Low" },
    { assumption: "Pan-Africa expansion pathway viable", evidence: "Locus CEO confirmed: Uganda → East Africa → South/West/North Africa", risk: "Low" }
];

// Gap indicator component
function GapIndicator({ title, description, needed }: { title: string; description: string; needed: string[] }) {
    return (
        <div className="p-5 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50/50">
            <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">○</span>
                <div className="flex-1">
                    <p className="text-sm font-bold text-amber-800">{title}</p>
                    <p className="text-xs text-amber-700 mt-1">{description}</p>
                    <div className="mt-3">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mb-2">Information needed:</p>
                        <ul className="space-y-1">
                            {needed.map((item, i) => (
                                <li key={i} className="text-xs text-amber-700 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Section header with "why it matters"
function SectionHeader({ title, why }: { title: string; why: string }) {
    return (
        <div className="mb-4">
            <h2 className="text-lg font-bold text-secondary">{title}</h2>
            <p className="text-xs text-slate/60 mt-1 italic">{why}</p>
        </div>
    );
}

export default function StrategyPage() {
    return (
        <div className="mx-auto max-w-4xl text-ink font-sans">
            <StageBreadcrumb stage="Strategy & Governance" />

            {/* Page Header */}
            <header className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Program Hub</p>
                <h1 className="text-3xl font-bold text-secondary">Strategy & Governance</h1>
                <p className="mt-2 text-sm text-slate">
                    Organizational foundation that sits above Program and Project levels.
                    Ensures alignment across all HISAGEN activities.
                </p>
            </header>

            {/* Framework Overview */}
            <section className="mb-8 p-4 rounded-lg border border-mist bg-parchment/20">
                <p className="text-xs text-slate">
                    <strong>Framework:</strong> Mission → Vision → Strategy → Theory of Change → Key Assumptions → Governance
                </p>
                <p className="text-xs text-slate/60 mt-1">
                    Each element builds on the previous. Gaps are marked with ○ indicators.
                </p>
            </section>

            {/* 1. MISSION */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="1. Mission"
                    why="Why HISAGEN exists. The core purpose that drives everything."
                />
                <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-secondary font-medium">
                        Make agricultural carbon bankable through proven soil science, rigorous digital verification,
                        and structured blended finance—starting in East Africa.
                    </p>
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete
                </p>
            </section>

            {/* 2. VISION */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="2. Vision"
                    why="The aspirational end state. Where HISAGEN is heading in 5-10 years."
                />
                <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-secondary font-medium">
                        A regenerative agricultural economy where land stewards earn sustainable income
                        from verified carbon sequestration.
                    </p>
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete
                </p>
            </section>

            {/* 3. STRATEGY */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="3. Strategy"
                    why="How we get from here to the Vision. The 3-5 year plan with clear priorities and milestones."
                />

                {/* What we have */}
                <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">Strategic Direction (High-Level)</p>
                    <div className="grid gap-3 md:grid-cols-3">
                        <div className="p-3 rounded bg-parchment/30 border border-mist">
                            <p className="text-xs font-bold text-secondary">Geographic</p>
                            <p className="text-xs text-slate mt-1">Uganda → East Africa → Pan-Africa</p>
                        </div>
                        <div className="p-3 rounded bg-parchment/30 border border-mist">
                            <p className="text-xs font-bold text-secondary">Capital</p>
                            <p className="text-xs text-slate mt-1">4-stage Capital Continuum</p>
                        </div>
                        <div className="p-3 rounded bg-parchment/30 border border-mist">
                            <p className="text-xs font-bold text-secondary">Model</p>
                            <p className="text-xs text-slate mt-1">Full-stack integrator</p>
                        </div>
                    </div>
                </div>

                {/* Gap */}
                <GapIndicator
                    title="Detailed Strategy Document Required"
                    description="A formal 3-5 year strategic plan would strengthen funding applications and align stakeholders."
                    needed={[
                        "Strategic objectives with timelines",
                        "Key milestones by year",
                        "Resource requirements",
                        "Risk mitigation approach",
                        "Success metrics / KPIs",
                        "Competitive positioning"
                    ]}
                />
            </section>

            {/* 4. THEORY OF CHANGE */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="4. Theory of Change"
                    why="The logical pathway from activities to impact. Shows HOW the work creates change."
                />

                {/* What we have - The Model */}
                <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">The HISAGEN Model (Operating Approach)</p>
                    <div className="space-y-2">
                        {[
                            { num: "1", label: "Technology", detail: "Locus AG Rhizolizer microbial tech (15-30% yield improvement)" },
                            { num: "2", label: "Verification", detail: "3Degrees MRV platform + Verra VM0042 methodology" },
                            { num: "3", label: "Finance", detail: "4-stage Capital Continuum framework" },
                            { num: "4", label: "Operations", detail: "Deep Six farmer aggregation + last-mile delivery" },
                        ].map((item) => (
                            <div key={item.num} className="flex items-start gap-3 p-3 rounded bg-parchment/20">
                                <span className="text-primary font-bold text-sm">{item.num}</span>
                                <div>
                                    <span className="text-sm font-bold text-secondary">{item.label}:</span>
                                    <span className="text-sm text-slate ml-1">{item.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gap */}
                <GapIndicator
                    title="Full Theory of Change Diagram Required"
                    description="A formal ToC showing the causal chain from inputs to long-term impact. Essential for funders."
                    needed={[
                        "Inputs (resources, funding, partnerships)",
                        "Activities (what HISAGEN does)",
                        "Outputs (immediate results)",
                        "Outcomes (short & medium-term changes)",
                        "Impact (long-term systemic change)",
                        "Assumptions at each stage"
                    ]}
                />
            </section>

            {/* 5. KEY ASSUMPTIONS */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="5. Key Assumptions"
                    why="What must be true for the strategy to work. Shows rigorous thinking to funders/investors."
                />
                <div className="overflow-hidden rounded-lg border border-mist">
                    <table className="w-full text-sm">
                        <thead className="bg-secondary/5">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-secondary">Assumption</th>
                                <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-secondary">Evidence</th>
                                <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-secondary">Risk</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-mist bg-white">
                            {assumptions.map((a, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-3 text-slate">{a.assumption}</td>
                                    <td className="px-4 py-3 text-slate/70 text-xs">{a.evidence}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${a.risk === 'Low' ? 'bg-primary/10 text-primary' : 'bg-accent/20 text-soil-brown'}`}>
                                            {a.risk}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-[10px] text-slate/50 mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Complete - useful for grant applications
                </p>
            </section>

            {/* 6. GOVERNANCE */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <SectionHeader
                    title="6. Governance"
                    why="How decisions are made. Organizational structure and accountability."
                />

                {/* What we have */}
                <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate/60 mb-3">Corporate Structure</p>
                    <div className="grid gap-3 md:grid-cols-2">
                        <div className="p-4 rounded-lg border border-mist bg-parchment/20">
                            <p className="text-sm font-bold text-secondary">HISAGEN USA</p>
                            <p className="text-xs text-slate mt-1">Limited company. Funding, IP, global coordination.</p>
                        </div>
                        <div className="p-4 rounded-lg border border-mist bg-parchment/20">
                            <p className="text-sm font-bold text-secondary">HISAGEN Africa</p>
                            <p className="text-xs text-slate mt-1">Limited company. Operations, regulatory, farmer rollout.</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <Link href="/organization" className="text-xs text-primary hover:underline">
                            → View full team and board details
                        </Link>
                    </div>
                </div>

                {/* Gap */}
                <GapIndicator
                    title="Governance Framework Required"
                    description="Formal governance documentation demonstrates institutional readiness to funders."
                    needed={[
                        "Board composition and roles",
                        "Decision-making authority matrix",
                        "Reporting lines between USA and Africa entities",
                        "Advisory board (if any)",
                        "Key policies (financial, conflict of interest)"
                    ]}
                />
            </section>

            {/* Market Context - Supplementary */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-parchment/20">
                <h2 className="text-lg font-bold text-secondary mb-4">Market Context</h2>
                <p className="text-xs text-slate/60 mb-4">Supporting data for the strategic rationale.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">$36M→$648M</p>
                        <p className="text-xs text-slate">Ag Carbon Market (2024-34)</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">$15-40</p>
                        <p className="text-xs text-slate">Per tonne premium</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">33M</p>
                        <p className="text-xs text-slate">SSA smallholder farms</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-mist">
                        <p className="text-xl font-bold text-secondary">76%</p>
                        <p className="text-xs text-slate">Uganda yield gap</p>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="mb-8 p-6 rounded-lg border border-mist bg-white">
                <h2 className="text-lg font-bold text-secondary mb-4">Related Resources</h2>
                <div className="grid gap-3 md:grid-cols-2">
                    <Link href="/organization" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        → Team & Organization
                    </Link>
                    <Link href="/capital-continuum" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        → Capital Continuum Framework
                    </Link>
                    <Link href="/program" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        → Agri-Carbon Program
                    </Link>
                    <Link href="/project/hisagen-uganda" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        → Uganda Pilot Project
                    </Link>
                </div>
            </section>

            {/* Gap Summary */}
            <section className="mb-8 p-6 rounded-lg border-2 border-amber-200 bg-amber-50">
                <h2 className="text-lg font-bold text-amber-800 mb-2">Gap Summary</h2>
                <p className="text-sm text-amber-700 mb-4">
                    Three areas need development to complete the Strategy & Governance framework:
                </p>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-amber-800">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <strong>Strategy:</strong> Formal 3-5 year strategic plan with milestones
                    </div>
                    <div className="flex items-center gap-3 text-sm text-amber-800">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <strong>Theory of Change:</strong> Full ToC diagram with causal chain
                    </div>
                    <div className="flex items-center gap-3 text-sm text-amber-800">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <strong>Governance:</strong> Decision-making framework and policies
                    </div>
                </div>
                <p className="text-xs text-amber-600 mt-4 italic">
                    Completing these gaps strengthens funding applications and demonstrates institutional readiness.
                </p>
            </section>

            {/* Footer */}
            <footer className="text-xs text-slate/60 border-t border-mist pt-4">
                <p>
                    <strong>Framework:</strong> Strategy & Governance sits above Program and Project levels.
                </p>
                <p className="mt-1">
                    For public-facing content, see the <Link href="/" className="underline">HISAGEN Website</Link>.
                </p>
            </footer>
        </div>
    );
}
