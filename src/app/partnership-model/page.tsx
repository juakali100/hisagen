import StageBreadcrumb from "../../components/StageBreadcrumb";

export default function PartnershipModelPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 1", href: "/stage-1" }, { label: "Partnership Model" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Partnership Model
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Collaboration pathways for Stage 1
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This section outlines how delivery partners, technical partners, and funders align in
          Stage 1. It will evolve once Stage 2 implementation is ready.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Core Partnership Stack</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Technology partner (Locus AG)</li>
            <li>Research validation partner (Uganda NARO)</li>
            <li>Carbon pathway partner (3Degrees)</li>
            <li>Local delivery partner (TBD)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 1 Needs</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            <li>Delivery partner identification and onboarding</li>
            <li>Governance and decision rights agreement</li>
            <li>Funding partner alignment with Stage 1 scope</li>
          </ul>
        </div>
      </section>
    </div>
  );
}


