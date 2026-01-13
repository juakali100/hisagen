export default function FundingRoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Funding Roadmap
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Sequenced Funding Pathways
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          A staged approach that aligns HISAGEN's readiness with the right type of capital,
          balancing near-term grants with longer-term strategic positioning.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
            <span className="h-px w-12 bg-mist" />
            Near-Term Targets
          </div>
          <ul className="space-y-3 text-sm text-slate">
            <li>Accelerators with strong ag-tech fit and low application friction.</li>
            <li>Grants aligned to pilot outcomes and early-stage validation.</li>
            <li>Strategic positioning for longer-cycle philanthropic funds.</li>
            <li>Corporate co-investment aligned to supply chain decarbonization.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Readiness Milestones</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Finalize unit economics and budget model.</li>
            <li>Confirm trial metrics and verification partners.</li>
            <li>Clarify legal structure and governance.</li>
            <li>Define carbon methodology pathway and measurement plan.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Roadmap Snapshot
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Phase 1: Validation",
              detail: "Grant-ready capital to fund trials and regulatory approval.",
            },
            {
              title: "Phase 2: Scale Prep",
              detail: "Pilot expansion, financial model, and system readiness.",
            },
            {
              title: "Phase 3: Strategic Capital",
              detail: "Position for larger philanthropic or blended finance.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-mist bg-white p-6">
              <h3 className="text-lg font-semibold text-secondary">{card.title}</h3>
              <p className="mt-2 text-sm text-slate">{card.detail}</p>
            </div>
          ))}
        </div>
        <div className="border-l-4 border-primary bg-primary/5 px-4 py-3 text-sm text-secondary">
          Assessment snapshot: current readiness aligns best with grant and accelerator funding,
          with strategic positioning underway for larger philanthropic opportunities.
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum</p>
        <p className="mt-3 text-sm text-slate">
          We use the Capital Continuum playbook to position HISAGEN across four development
          stages and assess the five pillars of investment readiness.
        </p>
        <a
          href="/funding-roadmap/capital-continuum"
          className="mt-3 inline-block text-sm text-primary hover:text-primary/80 underline"
        >
          Open the Capital Continuum playbook
        </a>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <a
          href="/funding-roadmap/grant-proposal"
          className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Grant Proposal</p>
          <h2 className="mt-3 text-lg font-semibold text-secondary">v0 Summary + Gaps</h2>
          <p className="mt-2 text-sm text-slate">
            A concise overview of the v0 proposal foundation and the highest-priority inputs
            needed to tailor funder-specific submissions.
          </p>
        </a>
        <a
          href="/funding-roadmap/lifecycle"
          className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Funding Lifecycle</p>
          <h2 className="mt-3 text-lg font-semibold text-secondary">Phase Alignment</h2>
          <p className="mt-2 text-sm text-slate">
            Expand each phase to see status, completed work, gaps, and the next step.
          </p>
        </a>
        <a
          href="/funding-roadmap/capital-continuum"
          className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum</p>
          <h2 className="mt-3 text-lg font-semibold text-secondary">4 Stages + 5 Pillars</h2>
          <p className="mt-2 text-sm text-slate">
            Use the playbook template to align project stage, gaps, and capital fit.
          </p>
        </a>
      </section>
    </div>
  );
}
