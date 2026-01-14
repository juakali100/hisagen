import { partners } from "../partner-data";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PartnerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const partner = partners.find((p) => p.id === id);

    if (!partner) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-5xl text-ink">
            <StageBreadcrumb
                stage="Ecosystem"
                trail={[
                    { label: "Overview", href: "/" },
                    { label: "Foundation & Evidence Vault", href: "/resources" },
                    { label: partner.name }
                ]}
            />

            {/* Header Section */}
            <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                            {partner.category} Partner
                        </span>
                        <h1 className="mt-4 text-4xl font-semibold text-secondary">{partner.name}</h1>
                        <p className="mt-2 text-xl text-slate">{partner.role}</p>
                    </div>
                    <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-mist bg-white hover:border-secondary/30 transition-all text-secondary text-xs font-bold uppercase tracking-widest"
                    >
                        Visit Website
                    </a>
                </div>
            </section>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Column: Summary & Context */}
                <div className="md:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-4 flex items-center gap-3">
                            Organization Summary
                            <div className="h-px flex-1 bg-mist/50" />
                        </h2>
                        <p className="text-lg leading-relaxed text-slate">{partner.organizationSummary}</p>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-4 flex items-center gap-3">
                            Strategic Context
                            <div className="h-px flex-1 bg-mist/50" />
                        </h2>
                        <ul className="space-y-4">
                            {partner.strategicContext.map((item, idx) => (
                                <li key={idx} className="flex gap-4 p-4 rounded-xl bg-mist/10 border border-mist/20">
                                    <span className="text-secondary/30 font-bold shrink-0">{idx + 1}.</span>
                                    <p className="text-medium text-slate leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-4 flex items-center gap-3">
                            Website Review & Analysis
                            <div className="h-px flex-1 bg-mist/50" />
                        </h2>
                        <div className="p-6 rounded-2xl bg-parchment/30 border border-mist border-dashed">
                            <p className="text-sm italic text-slate leading-relaxed">{partner.websiteReview}</p>
                        </div>
                    </section>
                </div>

                {/* Right Column: Personnel & Resources */}
                <div className="space-y-12">
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-6 flex items-center gap-3">
                            Key Personnel
                            <div className="h-px flex-1 bg-mist/50" />
                        </h2>
                        <div className="space-y-6">
                            {partner.personnel.map((person) => (
                                <div key={person.name} className="p-5 rounded-xl border border-mist bg-white shadow-sm">
                                    <h3 className="font-bold text-secondary">{person.name}</h3>
                                    <p className="text-[10px] font-bold uppercase text-secondary/40 mb-3">{person.role}</p>
                                    <p className="text-xs text-slate leading-relaxed">{person.bio}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-6 flex items-center gap-3">
                            Key Resources
                            <div className="h-px flex-1 bg-mist/50" />
                        </h2>
                        <div className="grid gap-3">
                            {partner.keyResources.map((resource) => (
                                <a
                                    key={resource.title}
                                    href={resource.file}
                                    target="_blank"
                                    className="flex items-center gap-3 p-4 rounded-xl border border-mist bg-white hover:border-secondary/30 transition-all group"
                                >
                                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${resource.format === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-secondary/10 text-secondary'}`}>
                                        {resource.format}
                                    </span>
                                    <span className="text-xs font-semibold text-secondary group-hover:text-black transition-colors">{resource.title}</span>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
