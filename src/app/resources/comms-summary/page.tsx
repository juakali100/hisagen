export default function CommsSummaryPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Communication Summary
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Snapshot of key communications and the information provided by Keir to date.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Key Points Captured
        </div>
        <ul className="space-y-3 text-sm text-slate">
          <li>HISAGEN is an agriculture-first venture (no agroforestry component).</li>
          <li>Uganda is the primary focus; Kenya is secondary due to regulatory friction.</li>
          <li>Locus AG partnership is central for microbial inputs and technology support.</li>
          <li>Carbon pathway involves verification partners and registry considerations.</li>
          <li>Formal Uganda approval targeted for mid-Feb 2026.</li>
        </ul>
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Outstanding Gaps from Communications
        </div>
        <ul className="space-y-3 text-sm text-slate">
          <li>Confirmed pilot results, yield uplift, and cost reduction evidence.</li>
          <li>Unit economics and financial model detail.</li>
          <li>Formal legal structure and governance clarity.</li>
          <li>Specific funder prioritization and outreach commitments.</li>
        </ul>
      </section>
    </div>
  );
}
