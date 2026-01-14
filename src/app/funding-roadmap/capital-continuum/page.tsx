import Image from "next/image";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { pillars, stages } from "./variables";

export default function CapitalContinuumPlaybookPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Capital Strategy"
        trail={[
          { label: "Foundation & Evidence Vault", href: "/resources" },
          { label: "Capital Continuum" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
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
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-slate/60 font-medium">Source:</span>
            <a
              href="https://capital-continuum.com/resources/the-capital-continuum-fsg-7nj4f"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] uppercase tracking-widest font-bold text-secondary underline decoration-secondary/30 underline-offset-4 hover:decoration-secondary"
            >
              Capital Continuum Advisers
            </a>
          </div>
        </div>

        <a
          href="https://capital-continuum.com/resources/the-capital-continuum-fsg-7nj4f"
          target="_blank"
          rel="noreferrer"
          className="w-32 h-44 flex-shrink-0 group relative overflow-hidden rounded-lg border border-mist transition-transform hover:scale-105 shadow-sm"
        >
          <Image
            src="https://static1.squarespace.com/static/66350a8282caba1fcc6be72e/67d063d8688f107c1998573f/68d2e82c46497d779bfa8b76/1762186863231/CC2.jpg?format=1500w"
            alt="Capital Continuum Playbook"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors" />
        </a>
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
            <div key={stage.title} className="rounded-xl border border-mist bg-white p-6 flex flex-col">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-secondary">{stage.title}</h2>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-2 py-0.5 rounded">
                  {stage.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate flex-grow">{stage.focus}</p>

              <div className="mt-4 pt-4 border-t border-mist/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-bold">Capital Fit</p>
                <p className="mt-1 text-sm text-secondary font-medium">{stage.capital}</p>
              </div>

              <div className="mt-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-bold">Ecosystem Focus</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {stage.ecosystemDomains.map((domain) => (
                    <span key={domain} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-parchment border border-mist text-slate">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-bold">Key Milestones</p>
                <ul className="mt-2 space-y-1 text-[13px] text-slate leading-relaxed">
                  {stage.milestones.map((milestone) => (
                    <li key={milestone} className="flex gap-2">
                      <span className="text-secondary/40">•</span>
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Strategic Intelligence</p>
            <h2 className="mt-3 text-2xl font-bold text-secondary">Lifecycle Alignment & Revenue Lag</h2>
            <p className="mt-4 text-sm text-slate leading-relaxed">
              It is critical to recognize that <strong>Monetization (Domain 4)</strong> and <strong>Certification (Domain 3)</strong> primarily mature during <strong>Stage 3 (Stabilization)</strong> and <strong>Stage 4 (Maturity)</strong>.
            </p>
            <p className="mt-3 text-sm text-slate leading-relaxed">
              In Stages 1 and 2, the "revenue" from carbon credits is a future-dated asset. Funding during these phases must rely on <strong>Blended Finance</strong>: high-risk philanthropic or grant capital (Stage 1) and impact-driven debt/equity (Stage 2) that bridge the gap until carbon credits are issued and merchantable.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full md:w-80">
            <div className="p-4 bg-white rounded-xl border border-secondary/10">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Stage 1-2 Gap</p>
              <p className="mt-1 text-xs text-slate">"Unbankable" phase. Requires grants to secure Land Rights and baseline Technical data (MRV setup).</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-secondary/10">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Stage 3-4 Inflection</p>
              <p className="mt-1 text-xs text-slate">Marketplace (CZMP) and 3Degrees issuance creates the "Revenue Engine" for Institutional scaling.</p>
            </div>
          </div>
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
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">HISAGEN Draft Assessment</p>
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

      <section className="mt-12 rounded-xl border border-mist bg-white p-6 mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Assessment Template</p>
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
