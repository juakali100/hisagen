import StageBreadcrumb from "@/components/StageBreadcrumb";

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 1", href: "/stage-1" }, { label: "Evidence" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 1 Evidence
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Evidence checklist for Incubation
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This checklist captures the minimum evidence required to complete Stage 1 and unlock
          a credible funding approach.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Pilot Evidence</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Yield impact summary (crop-level results).</li>
            <li>Farmer adoption numbers and engagement data.</li>
            <li>Soil health indicators and baseline comparison.</li>
            <li>Third-party validation or partner statements.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Carbon Pathway</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Methodology selection (Verra/Gold Standard/other).</li>
            <li>MRV plan with roles and timeline.</li>
            <li>Carbon rights and farmer agreement structure.</li>
            <li>3Degrees scope and validation responsibilities.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Commercial Evidence</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Unit economics draft (costs per farmer, pricing, margins).</li>
            <li>Revenue assumptions and downside scenarios.</li>
            <li>Supply chain and distribution readiness.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Governance Evidence</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Entity structure and governance roles.</li>
            <li>Local implementation partner commitment.</li>
            <li>Risk register and mitigation assumptions.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Source Materials</p>
        <p className="mt-3 text-sm text-slate">
          Use the Resources section to track PDFs, emails, and supporting documentation.
        </p>
        <a
          href="/resources"
          className="mt-3 inline-flex items-center rounded-full border border-mist bg-white px-4 py-2 text-xs font-medium text-secondary hover:border-primary/50"
        >
          Open Resources
        </a>
      </section>
    </div>
  );
}
