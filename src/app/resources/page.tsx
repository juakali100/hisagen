import StageBreadcrumb from "@/components/StageBreadcrumb";

const resources = [
  {
    title: "Strategic Briefs",
    description: "Foundational documents, synthesis notes, and internal framing.",
    items: [
      "HISAGEN Strategic Fundraising Foundation",
      "HISAGEN 5-Pillar Investment Readiness Assessment",
      "Capital Continuum Framework source notes",
    ],
  },
  {
    title: "Source Materials",
    description: "External PDFs, emails, and data extracts provided by Keir.",
    items: ["Locus AG partnership materials", "Uganda trial reports", "Email threads"],
  },
  {
    title: "Working Drafts",
    description: "Draft outputs used for grant or partner conversations.",
    items: ["Concept Note (v0)", "Grant Proposal (v0)", "Funder Alignment Matrix"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Resources"
        trail={[{ label: "Overview", href: "/" }, { label: "Resources" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Source materials and working drafts
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This section indexes source documents, PDFs, and draft outputs used during Stage 1.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {resources.map((section) => (
          <div key={section.title} className="rounded-xl border border-mist bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate">{section.title}</p>
            <p className="mt-3 text-sm text-slate">{section.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
