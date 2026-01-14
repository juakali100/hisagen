import StageBreadcrumb from "../../components/StageBreadcrumb";

const coreTeam = [
    {
        name: "Deep Six Consulting",
        role: "Operational Oversight",
        detail: "Strategic advisory, client relationship management, and local operational oversight. Starting with the Uganda flagship, Deep Six brings the 'ground-truth' experience required to navigate complex agricultural landscapes."
    },
    {
        name: "Pandion Studio",
        role: "Systems Architecture",
        detail: "Engineering the frameworks, digital infrastructure, and capital models (Capital Continuum) required to translate landscape outcomes into institutional carbon assets."
    }
];

const foundingPrinciples = [
    {
        title: "Steward-First",
        body: "We believe that for nature-based solutions to be permanent, they must be profitable for the individuals managing the land. Our model prioritizes yield increases and recurring income for producers, from smallholders to large estates."
    },
    {
        title: "Scientific Integrity",
        body: "We anchor every carbon claim in rigorous microbial baseline data and verified soil organic carbon (SOC) metrics. We do not shortcut the science of sequestration."
    },
    {
        title: "Radical Transparency",
        body: "Through our digital portal and the 'Evidence Vault', we provide our funding partners and stakeholders with a live, unvarnished view of our progress, data, and challenges."
    }
];

export default function OrganizationPage() {
    return (
        <div className="mx-auto max-w-5xl text-ink font-sans">
            <StageBreadcrumb stage="Who We Are" />

            <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/60">Organization</p>
                <h1 className="mt-6 text-5xl font-bold leading-tight text-secondary">
                    The Founding Team
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate italic font-medium">
                    HISAGEN is a strategic platform born from the intersection of agricultural operations and systems design.
                </p>
                <div className="mt-8 pt-6 border-t border-mist/50">
                    <p className="text-[10px] text-slate/60 uppercase tracking-[0.3em] text-center">
                        High Impact Soil/Seed Application for Greener Environments
                    </p>
                </div>
            </section>

            <section className="mt-12">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Our Founding Core</h2>
                    <div className="h-px flex-1 bg-mist" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {coreTeam.map((team) => (
                        <div key={team.name} className="p-8 rounded-2xl border border-mist bg-white shadow-sm group hover:border-primary/30 transition-all">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{team.role}</p>
                            <h3 className="text-xl font-bold text-secondary mb-4">{team.name}</h3>
                            <p className="text-sm text-slate leading-relaxed">
                                {team.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 p-12 rounded-2xl bg-parchment/30 border border-mist border-dashed">
                <h2 className="text-2xl font-bold text-secondary text-center mb-10">Founding Principles</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {foundingPrinciples.map((principle) => (
                        <div key={principle.title} className="text-center">
                            <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-secondary font-bold text-xs">{principle.title[0]}</span>
                            </div>
                            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">{principle.title}</h3>
                            <p className="text-xs text-slate leading-relaxed">
                                {principle.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Strategic Alliances</h2>
                    <div className="h-px flex-1 bg-mist" />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { org: "Locus AG", role: "Microbial Product Partner" },
                        { org: "3Degrees", role: "Accreditation & Audit" },
                        { org: "Uganda NARO", role: "Research Validation" }
                    ].map((partner) => (
                        <div key={partner.org} className="p-4 rounded-xl border border-mist bg-white flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-secondary">{partner.org}</p>
                                <p className="text-[10px] text-slate/60 uppercase tracking-tighter">{partner.role}</p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-20 text-center">
                <p className="text-sm text-slate italic mb-8 max-w-2xl mx-auto">
                    "We are currently establishing the formal legal and governance framework for HISAGEN, ensuring a structure that supports multi-stage institutional investment."
                </p>
                <a href="/strategy" className="px-8 py-3 bg-secondary text-parchment rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    View What We Do →
                </a>
            </section>
        </div>
    );
}
