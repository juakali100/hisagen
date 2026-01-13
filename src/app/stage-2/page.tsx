import StageBreadcrumb from "../../components/StageBreadcrumb";

const stage2Focus = [
  "Finalize MRV system and validation partners.",
  "Secure delivery partners and operating capacity.",
  "Confirm governance and legal structure at scale.",
  "Prepare for blended finance eligibility.",
];

const stage2Artifacts = [
  "Implementation plan and delivery milestones",
  "MRV protocol and verification pathway",
  "Partnership agreements and roles",
  "Risk register and mitigation plan",
];

export default function Stage2Page() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 2"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 2" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 2: Implementation
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Implementation readiness overview
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Stage 2 focuses on operational rollout, MRV readiness, and delivery capacity. This
          section will be filled once Stage 1 evidence is complete.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 2 Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage2Focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Required Artifacts</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage2Artifacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

