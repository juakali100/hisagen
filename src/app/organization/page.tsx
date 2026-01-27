import StageBreadcrumb from "../../components/StageBreadcrumb";

// HISAGEN Board of Directors
const boardOfDirectors = [
    {
        name: "Keir Austen-Brown",
        role: "Co-Founder / CEO",
        entity: "HISAGEN USA",
        credentials: "25 years at Merrill Lynch | BSc & MBA (London) | MIT Digital Transformation",
        detail: "British-Kenyan finance professional with over two decades of leadership experience. Currently based in Brooklyn, New York."
    },
    {
        name: "Scott Hermo",
        role: "Co-Founder / COO",
        entity: "HISAGEN USA",
        credentials: "30 years Fixed Income & Capital Markets | 7 years in Renewables & Agriculture",
        detail: "Seasoned financial professional and entrepreneur. Introduced to Locus AG and, with support of the team, formed HISAGEN to bring the technology to Africa."
    },
    {
        name: "Daniel Pattersson",
        role: "Co-Founder / CEO Africa",
        entity: "HISAGEN Africa",
        credentials: "12 years Lafarge (7 as CEO/MD) | INSEAD MBA | Stockholm School of Economics",
        detail: "Swedish-Nigerian entrepreneur and investor focused on East Africa. Experience across France, DRC, South Africa, and East Africa."
    },
    {
        name: "Israel Tinkasimiire",
        role: "Co-Founder / COO Africa",
        entity: "HISAGEN Africa",
        credentials: "17 years Lafarge/Holcim | Makerere University | GIBS & Strathmore Executive Programs",
        detail: "Ugandan executive with focus on commercial leadership, strategy, and CO2 reduction through innovative alternative fuels. Entrepreneur with interests in logistics and agriculture."
    }
];

// Cedric tribute
const cedricTribute = {
    name: "Cedric",
    role: "Founding Inspiration",
    period: "Deceased June 2025",
    detail: "Cedric was our close friend and brought this team together. A Ugandan/Irish entrepreneur based in Uganda, he was a former national athlete (tennis) and Davis Cup Captain, serving as President of the Uganda Tennis Association. His vision united us around the opportunity to bring transformative agricultural technology to Africa."
};

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

            <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/60">Organization</p>
                <h1 className="mt-6 text-5xl font-bold leading-tight text-secondary">
                    The Team
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

            {/* Cedric Tribute - The Founding Story */}
            <section className="mt-12 p-8 rounded-2xl border-2 border-secondary/20 bg-secondary/5">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-xl font-serif font-bold text-secondary/40">C</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60 mb-1">{cedricTribute.role}</p>
                        <h3 className="text-xl font-bold text-secondary mb-1">{cedricTribute.name}</h3>
                        <p className="text-xs text-slate/60 mb-4">{cedricTribute.period}</p>
                        <p className="text-sm text-slate leading-relaxed italic">
                            "{cedricTribute.detail}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="mt-12">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Board of Directors</h2>
                    <div className="h-px flex-1 bg-mist" />
                </div>

                {/* Dual Entity Structure */}
                <div className="mb-8 p-4 rounded-xl bg-parchment/30 border border-mist">
                    <p className="text-xs text-slate text-center">
                        <span className="font-bold text-secondary">HISAGEN USA</span> (funding, IP, global coordination) + <span className="font-bold text-secondary">HISAGEN Africa</span> (operations, regulatory, farmer rollout)
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {boardOfDirectors.map((director) => (
                        <div key={director.name} className="p-6 rounded-2xl border border-mist bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">{director.role}</p>
                                    <h3 className="text-lg font-bold text-secondary">{director.name}</h3>
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-wide text-slate/60 bg-mist px-2 py-1 rounded">{director.entity}</span>
                            </div>
                            <p className="text-[10px] text-primary/80 font-medium mb-3">{director.credentials}</p>
                            <p className="text-sm text-slate leading-relaxed">
                                {director.detail}
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
                        <div key={partner.org} className="p-4 rounded-xl border border-mist bg-white flex items-center justify-between hover:shadow-sm hover:border-secondary/20 transition-colors motion-reduce:transition-none">
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
