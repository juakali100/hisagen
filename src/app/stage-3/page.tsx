const stage3Focus = [
  "Prove consistent delivery and revenue stability.",
  "Validate risk-adjusted returns for investors.",
  "Prepare for structured debt or private equity.",
];

const stage3Artifacts = [
  "Multi-year performance report",
  "Audited financials and cashflow model",
  "Investor memo and risk analysis",
];

export default function Stage3Page() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 3: Stabilization
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Stabilization readiness overview
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Stage 3 is about predictable performance and investable stability. This section will
          be populated once Stage 2 execution is complete.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Stage 3 Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage3Focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Required Artifacts</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage3Artifacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
