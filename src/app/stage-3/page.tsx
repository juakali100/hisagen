import StageBreadcrumb from "../../components/StageBreadcrumb";

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
      <StageBreadcrumb
        stage="Stage 3"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 3" }]}
      />

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
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Stabilization</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Timeline: Years 9-15</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: Revenue Engine</span>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Stage 3 Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage3Focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Capital Fit</p>
          <p className="mt-3 text-sm text-slate leading-relaxed">
            Stage 3 utilizes <strong>Commercial Capital</strong> (Carbon-collateralized loans, SPV preferred equity).
            Funding focuses on scaling the proven "Revenue Engine" as carbon credits are issued and merchantable.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-800">Commercial Capital</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">SPV Equity</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Impact Debt</span>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-mist bg-white p-6 mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Required Artifacts</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {stage3Artifacts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
