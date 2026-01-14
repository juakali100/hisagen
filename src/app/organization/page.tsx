import StageBreadcrumb from "../../components/StageBreadcrumb";

const foundingPillars = [
    {
        title: "Mission & Purpose",
        body: "HISAGEN exists to bridge the gap between applied regenerative agriculture and institutional carbon finance. We build the infrastructure that allows landscape-scale restoration to be bankable, transparent, and community-led.",
    },
    {
        title: "Governance & Ethics",
        body: "We are establishing a governance framework that prioritises local leadership and data sovereignty. Our ethics are rooted in the 'Capital Continuum'—ensuring that value flows to those doing the work on the ground.",
    },
    {
        title: "The Partnership Model",
        body: "We don't work alone. HISAGEN is a partnership between Deep Six Consulting, technical product partners (Locus AG), and downstream marketplace innovators. This site maps those intersections.",
    },
];

const strategicGaps = [
    {
        area: "Legal Entity Structure",
        status: "Research Needed",
        description: "Evaluate the benefits of a B-Corp vs. a traditional Ltd structure for HISAGEN. How does this impact our ability to raise Stage 2/3 capital?",
    },
    {
        area: "Advisory Board Selection",
        status: "In Progress",
        description: "Identifying key voices in sub-Saharan agriculture and carbon policy to anchor our program's credibility.",
    },
    {
        area: "Strategic Positioning",
        status: "To be Defined",
        description: "Developing the 'Founder Story'—why HISAGEN? Why now? How do we differentiate from standard carbon developers?",
    },
];

export default function OrganizationPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink">
            <StageBreadcrumb stage="Organization" trail={[{ label: "The Founding Story" }]} />

            <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Organization</p>
                <h1 className="mt-4 text-4xl font-semibold text-secondary">
                    Building HISAGEN
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
                    We are acting as the foundational architects of HISAGEN. This section documents our mission, our founding team, and the core strategic questions we are answering as we design the program's DNA.
                </p>
            </section>

            <section className="mt-10 grid gap-4 md:grid-cols-3">
                {foundingPillars.map((pillar) => (
                    <div
                        key={pillar.title}
                        className="rounded-xl border border-mist bg-white p-6 text-sm text-slate shadow-sm"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">{pillar.title}</p>
                        <p className="mt-3 leading-relaxed">{pillar.body}</p>
                    </div>
                ))}
            </section>

            <section className="mt-10 rounded-xl border border-mist bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Strategic Research Gaps</p>
                    <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase tracking-widest font-bold">Discovery Phase</span>
                </div>
                <p className="text-sm text-slate mb-6">
                    These are the 'white spaces' in our organizational design. We will use specialized AI tools (Gemini, NotebookLM, Deep Research) to synthesize answers to these questions.
                </p>
                <div className="space-y-4">
                    {strategicGaps.map((gap) => (
                        <div key={gap.area} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-mist/50 hover:border-secondary/30 transition-colors">
                            <div className="max-w-xl">
                                <h3 className="text-base font-semibold text-secondary">{gap.area}</h3>
                                <p className="text-sm text-slate mt-1">{gap.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${gap.status === 'Research Needed' ? 'bg-amber-100 text-amber-700' :
                                        gap.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                                    }`}>
                                    {gap.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-10 rounded-xl border border-mist bg-white p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Founding Partnership</p>
                <p className="mt-4 text-sm text-slate leading-relaxed">
                    HISAGEN is not being built in a vacuum. It is a strategic vehicle designed to house and scale the collaborative efforts of:
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist/50">
                        <h4 className="font-semibold text-secondary italic">Deep Six Consulting</h4>
                        <p className="text-xs text-slate mt-2">Strategic advisory, client relationship management, and local operational oversight for the Uganda pilot.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-parchment/30 border border-mist/50">
                        <h4 className="font-semibold text-secondary italic">Pandion Studio</h4>
                        <p className="text-xs text-slate mt-2">Building the 'Self-Building Crane'—designing the systems, frameworks (Capital Continuum), and technical infrastructure.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
