export default function GrantProposalPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Funding Roadmap
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Grant Proposal v0 Summary
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          The v0 proposal is a foundation document designed to be tailored to specific funders.
          It captures the core narrative, identifies gaps, and supports rapid customization.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
            <span className="h-px w-12 bg-mist" />
            Proposal Structure
          </div>
          <ul className="space-y-3 text-sm text-slate">
            <li>Executive summary and problem statement.</li>
            <li>Project description: goals, activities, partnerships, M&amp;E.</li>
            <li>Organizational information and delivery capacity.</li>
            <li>Budget framework and sustainability pathway.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Primary Purpose</p>
          <p className="mt-3 text-sm text-slate">
            Provide a reusable narrative base for philanthropic, government, and blended-funding
            applications, while surfacing the highest-priority data gaps.
          </p>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Priority Gaps to Close
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Confirmed pilot metrics (yield uplift, cost reduction, farmer income).",
            "Unit economics per farmer and overall financial model.",
            "Carbon methodology pathway and verification partner.",
            "Legal structure, governance, and ownership clarity.",
            "Budget allocation for Phase 1 implementation.",
            "Team composition and operational roles.",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-mist bg-white p-5 text-sm text-slate">
              {item}
            </div>
          ))}
        </div>
        <div className="border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm text-secondary">
          Once gaps are filled, the v0 can be adapted quickly for individual funders without
          rebuilding the core narrative.
        </div>
      </section>
    </div>
  );
}
