export default function FundingRoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 1 Execution Plan
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Incubation funding roadmap for HISAGEN
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This page translates Stage 1 needs into specific actions, outputs, and funding
          targets. It is intentionally narrow so we finish Incubation before moving to Stage 2.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 Objectives</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Compile verified pilot outcomes and MRV pathway.</li>
            <li>Clarify legal structure, carbon rights, and land tenure.</li>
            <li>Draft unit economics and Stage 1 funding ask.</li>
            <li>Define the target funder segment and shortlist.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 Outputs</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Evidence summary and data table (pilot).</li>
            <li>Stage 1 funding brief (1-2 pages).</li>
            <li>Updated concept note with filled gaps.</li>
            <li>Funder shortlist with eligibility notes.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Fit (Stage 1)</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Grants and catalytic capital only.</li>
            <li>Accelerators where pilot evidence is sufficient.</li>
            <li>Blended finance and commercial capital are premature.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Decision Gates</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Do we have enough evidence to approach funders?</li>
            <li>Is the funding ask sized to Stage 1 reality?</li>
            <li>Do legal and governance risks have a mitigation path?</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <a
          href="/funding-roadmap/grant-proposal"
          className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Grant Playbook</p>
          <h2 className="mt-3 text-lg font-semibold text-secondary">Stage 1 Proposal</h2>
          <p className="mt-2 text-sm text-slate">
            Update the v0 grant package and fill critical gaps.
          </p>
        </a>
        <a
          href="/funding-roadmap/lifecycle"
          className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Funding Lifecycle</p>
          <h2 className="mt-3 text-lg font-semibold text-secondary">Phase Alignment</h2>
          <p className="mt-2 text-sm text-slate">
            Track readiness across the full grant lifecycle.
          </p>
        </a>
        <a
          href="/funding-roadmap/capital-continuum"
          className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum</p>
          <h2 className="mt-3 text-lg font-semibold text-secondary">Stage Logic</h2>
          <p className="mt-2 text-sm text-slate">
            Use the five pillars to validate Stage 1 readiness.
          </p>
        </a>
      </section>
    </div>
  );
}
