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
        trail={[
          { label: "Agri-Carbon Program", href: "/program" },
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
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
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1">Stage: Maturity</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Timeline: Years 16+</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1">Focus: Institutional Scale</span>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-secondary">Strategic Context: Institutional Capital & Long-term Exits</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              At maturity, projects become fully investable assets capable of attracting long-term institutional capital.
              With 10+ years of stable performance, projects can access green bonds, carbon-backed securities, or public
              equity. High-integrity structuring enables entry at scale without eroding additionality or community trust.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate italic border-l-2 border-secondary/20 pl-4">
              Transparent governance and compliance with international taxonomies (e.g., EU Sustainable Finance) ensure
              credibility is maintained over decades.
            </p>
          </div>
          <div className="md:w-2/5 rounded-xl bg-white p-6 border border-mist text-ink">
            <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Maturity Milestones</h3>
            <ul className="space-y-3">
              {[
                "Min 3-5 year track record of stable returns",
                "Transparent reporting with full ESG compliance",
                "Eligibility confirmed under finance taxonomies",
                "Portfolio-level strategy alignment"
              ].map((milestone) => (
                <li key={milestone} className="flex gap-3 text-xs text-slate leading-tight">
                  <span className="text-emerald-500 font-bold">✓</span>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Stage 4 Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {stage4Focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Capital Fit</p>
          <p className="mt-3 text-sm text-slate leading-relaxed">
            Stage 4 utilizes <strong>Commercial Capital</strong> (Institutional Debt, Green Bonds, Public Equity).
            Funding focuses on long-term institutional ownership and large-scale portfolio expansion.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate">
            <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-slate-900 font-bold">Institutional Capital</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Green Bonds</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1">Public Equity</span>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-mist bg-white p-6 mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate font-bold">Required Artifacts</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {stage4Artifacts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
