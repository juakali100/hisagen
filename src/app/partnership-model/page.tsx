export default function PartnershipModelPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Partnership Model
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Collaboration Pathways
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This section outlines possible collaboration structures, from advisory support to
          deeper co-build engagements. It is designed to help align expectations early.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
            <span className="h-px w-12 bg-mist" />
            Potential Structures
          </div>
          <ul className="space-y-3 text-sm text-slate">
            <li>Short-term advisory to close critical funding and evidence gaps.</li>
            <li>Co-build pilot plan with shared delivery and reporting.</li>
            <li>Longer-term partnership with revenue-share or hybrid compensation.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Focus Areas</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Funding strategy and proposal development.</li>
            <li>Impact measurement and carbon methodology framing.</li>
            <li>Go-to-market readiness and partner outreach.</li>
            <li>Operational templates for reporting and grant compliance.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Proposed Engagement Phases
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Phase 1: Clarity",
              detail: "Confirm scope, data gaps, and funding priorities.",
            },
            {
              title: "Phase 2: Build",
              detail: "Draft funder-ready materials and pilot readiness.",
            },
            {
              title: "Phase 3: Partnership",
              detail: "Position for long-term collaboration and scale.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-mist bg-white p-6">
              <h3 className="text-lg font-semibold text-secondary">{card.title}</h3>
              <p className="mt-2 text-sm text-slate">{card.detail}</p>
            </div>
          ))}
        </div>
        <div className="border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm text-secondary">
          Partnership focus: combine strategic advisory with delivery support so HISAGEN can
          move quickly from approval to scalable execution.
        </div>
      </section>
    </div>
  );
}
