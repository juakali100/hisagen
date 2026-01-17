import StageBreadcrumb from "../../../components/StageBreadcrumb";

export default function CommsSummaryPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Resources"
        trail={[{ label: "Overview", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Comms Summary" }]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Resources</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Comms summary
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Consolidated summary of HISAGEN communications and key updates.
        </p>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Latest Update: January 16, 2026</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          <li><strong>Locus CEO Meeting:</strong> John Uhran fully supportive of Uganda roadmap and expansion strategy.</li>
          <li><strong>Pan-Africa Strategy Confirmed:</strong> Uganda first → East Africa → South/West/North Africa rollout.</li>
          <li><strong>Locus USA:</strong> Fully committed, supportive, and engaged.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Q1 2026 Timeline</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          <li><strong>October 2025:</strong> Initial trial results submitted to MAAIF certification.</li>
          <li><strong>January 2026:</strong> Dossier compilation and submission to MAAIF.</li>
          <li><strong>Jan-Feb 2026:</strong> MAAIF technical review process.</li>
          <li><strong>Feb-Mar 2026:</strong> Approval notification and license issuance.</li>
          <li><strong>March 2026:</strong> Final labeling and packaging approval.</li>
          <li><strong>Apr-Jun 2026:</strong> Market launch preparation (sales training, distribution, awareness).</li>
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Key Evidence</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          <li><strong>Market Size:</strong> Africa bio-stimulants $138.8M (2025) → $233.85M (2031) at 9.08% CAGR.</li>
          <li><strong>Uganda Trials:</strong> Feb-Sep 2025 across 4 agro-ecological zones (maize, potatoes, peanuts, sweet potatoes).</li>
          <li><strong>Locus Yield Data:</strong> Corn +4-6%, Soybeans +5%, Wheat +5%, Potatoes +14-22%, Sweet Potatoes +18%.</li>
          <li><strong>Key Partners:</strong> NARO, MAAIF, UNBS for Uganda regulatory pathway.</li>
        </ul>
      </section>
    </div>
  );
}

