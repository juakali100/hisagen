import StageBreadcrumb from "../../components/StageBreadcrumb";
import { pillars, stages } from "./variables";

export default function CapitalContinuumPlaybookPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[{ label: "Overview", href: "/" }, { label: "Stage 1", href: "/stage-1" }, { label: "Capital Continuum" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Funding Roadmap
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Capital Continuum Playbook
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          A structured template for staging nature-based projects across the Capital Continuum
          and assessing investment readiness through five pillars. Use alongside the Funding
          Lifecycle Alignment page to track progress and gaps.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">How to Use</p>
        <ol className="mt-4 space-y-2 text-sm text-slate">
          <li>Identify the current stage on the continuum (1-4).</li>
          <li>Score each pillar (1-5) relative to that stage.</li>
          <li>Capture the most critical gaps and next actions.</li>
          <li>Align funding tactics to the stage-specific capital fit.</li>
        </ol>
      </section>

      <section className="mt-12 space-y-4">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Four Stages of Development
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <div key={stage.title} className="rounded-xl border border-mist bg-white p-6">
              <h2 className="text-lg font-semibold text-secondary">{stage.title}</h2>
              <p className="mt-2 text-sm text-slate">{stage.focus}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate">Capital Fit</p>
              <p className="mt-2 text-sm text-slate">{stage.capital}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate">Key Milestones</p>
              <ul className="mt-2 space-y-1 text-sm text-slate">
                {stage.milestones.map((milestone) => (
                  <li key={milestone}>{milestone}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-secondary">
          <span className="h-px w-12 bg-mist" />
          Five Pillars of Investment Readiness
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-mist bg-white p-6">
              <h3 className="text-lg font-semibold text-secondary">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate">{pillar.focus}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate">
                {pillar.prompts.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">HISAGEN Draft Assessment</p>
        <div className="mt-4 grid gap-4 text-sm text-slate md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Stage</p>
            <p className="mt-2 text-lg font-semibold text-secondary">Stage 1 - Incubation</p>
            <p className="mt-2">Grant-ready, pre-blended finance</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Overall Score</p>
            <p className="mt-2 text-lg font-semibold text-secondary">13 / 25</p>
            <p className="mt-2">52% readiness based on the 5-pillar scan.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Top Gaps</p>
            <ul className="mt-2 space-y-1">
              <li>Policy and legal clarity on carbon rights</li>
              <li>Quantified ESG outcomes and safeguards</li>
              <li>Commercial model and unit economics</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm text-slate">
            <thead className="border-b border-mist text-xs uppercase tracking-[0.2em] text-slate">
              <tr>
                <th className="py-2">Pillar</th>
                <th className="py-2">Score /5</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist/60">
                <td className="py-2 font-medium text-secondary">Counterparty</td>
                <td className="py-2">3.5</td>
                <td className="py-2">Acceptable for incubation</td>
              </tr>
              <tr className="border-b border-mist/60">
                <td className="py-2 font-medium text-secondary">Policy and Legal</td>
                <td className="py-2">2</td>
                <td className="py-2">Gap - needs resolution</td>
              </tr>
              <tr className="border-b border-mist/60">
                <td className="py-2 font-medium text-secondary">ESG and SDG</td>
                <td className="py-2">2.5</td>
                <td className="py-2">Gap - needs data</td>
              </tr>
              <tr className="border-b border-mist/60">
                <td className="py-2 font-medium text-secondary">Technical</td>
                <td className="py-2">3</td>
                <td className="py-2">Acceptable for incubation</td>
              </tr>
              <tr className="border-b border-mist/60">
                <td className="py-2 font-medium text-secondary">Commercial</td>
                <td className="py-2">2</td>
                <td className="py-2">Gap - critical</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate">
          Source: HISAGEN 5-Pillar Investment Readiness Assessment (2025-11-30).
        </p>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Assessment Template</p>
        <div className="mt-4 grid gap-4 text-sm text-slate md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Project</p>
            <p className="mt-2">Project name: ____________________</p>
            <p>Date: ____________________</p>
            <p>Assessed by: ____________________</p>
            <p>Current stage: [ ] 1 [ ] 2 [ ] 3 [ ] 4</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Readiness Summary</p>
            <p className="mt-2">Overall score: ____ / 25</p>
            <p>Stage-appropriate readiness: ____________________</p>
            <p>Top 3 gaps: ____________________</p>
            <p>Next actions: ____________________</p>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm text-slate">
            <thead className="border-b border-mist text-xs uppercase tracking-[0.2em] text-slate">
              <tr>
                <th className="py-2">Pillar</th>
                <th className="py-2">Score /5</th>
                <th className="py-2">Strengths</th>
                <th className="py-2">Gaps</th>
                <th className="py-2">Priority Actions</th>
              </tr>
            </thead>
            <tbody>
              {pillars.map((pillar) => (
                <tr key={pillar.title} className="border-b border-mist/60">
                  <td className="py-2 font-medium text-secondary">{pillar.title}</td>
                  <td className="py-2">__</td>
                  <td className="py-2">____________________</td>
                  <td className="py-2">____________________</td>
                  <td className="py-2">____________________</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate">
          Source framework: Capital Continuum Advisers, "Unlocking Finance for Nature-based
          Carbon Projects along the Capital Continuum" (2025).
        </p>
      </section>
    </div>
  );
}

