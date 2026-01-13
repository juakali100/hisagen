import StageBreadcrumb from "../../components/StageBreadcrumb";

const stage4Focus = [
  "Institutional capital readiness and long-term governance.",
  "Taxonomy alignment and portfolio-grade reporting.",
  "Scale strategy beyond pilot geography.",
];

const stage4Artifacts = [
  "Institutional investor package",
  "Long-term governance and compliance framework",
  "Portfolio-scale growth plan",
];

export default function Stage4Page() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 4"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 4" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 4: Maturity
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Institutional capital readiness overview
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Stage 4 represents full maturity and institutional capital readiness. This section
          is a placeholder for future work once Stage 3 stabilization is complete.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 4 Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage4Focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Required Artifacts</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage4Artifacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

