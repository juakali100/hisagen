import React from "react";
import Image from "next/image";
import Link from "next/link";
import StageBreadcrumb from "../../components/StageBreadcrumb";
import { pillars, stages } from "./variables";

export default function CapitalContinuumPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Capital Continuum"
        trail={[{ label: "Framework" }]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Framework
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
            Capital Continuum
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
            Making agricultural carbon <strong>bankable</strong> requires the right capital at the right stage.
            This framework maps the journey from concessional grants through to institutional
            investment—ensuring each stage has the funding architecture to de-risk and scale.
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

      {/* Visual Framework Diagram */}
      <section className="mt-12 rounded-2xl overflow-hidden border border-mist bg-slate-50 shadow-sm">
        <div className="p-6 border-b border-mist">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Visual Framework</p>
          <h2 className="mt-2 text-2xl font-bold text-secondary">Risk-Value Trajectory</h2>
          <p className="mt-2 text-sm text-slate max-w-2xl">
            As projects mature through the four stages, risk decreases while asset value increases.
            This inverse relationship determines which capital types are appropriate at each stage.
          </p>
        </div>

        {/* Stage Headers */}
        <div className="grid grid-cols-4 border-b border-mist">
          {[
            { years: "Years 1-3", stage: "Incubation" },
            { years: "Years 4-8", stage: "Implementation" },
            { years: "Years 9-15", stage: "Stabilization" },
            { years: "Years 16+", stage: "Maturity" }
          ].map((s, i) => (
            <div key={i} className={`p-4 text-center ${i < 3 ? 'border-r border-mist' : ''}`}>
              <p className="text-[10px] font-bold text-slate/60 uppercase tracking-widest">{s.years}</p>
              <p className="text-xs font-bold text-secondary uppercase tracking-tighter mt-1">{s.stage}</p>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="relative h-48 bg-secondary">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Vertical Dividers */}
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.2)" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.2)" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.2)" />

            {/* Risk Curve (High to Low) */}
            <path
              d="M 0 30 C 250 30, 750 160, 1000 160"
              fill="none"
              stroke="#D8B75A"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
            {/* Value Curve (Low to High) */}
            <path
              d="M 0 160 C 250 160, 750 30, 1000 30"
              fill="none"
              stroke="#F7F8F5"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Floating Labels */}
          <div className="absolute top-4 left-4 bg-secondary text-parchment px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/10">High Risk</div>
          <div className="absolute bottom-4 right-4 bg-secondary text-parchment px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white/10">Low Risk</div>
          <div className="absolute bottom-4 left-4 bg-white text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Low Value</div>
          <div className="absolute top-4 right-4 bg-white text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-secondary/20">High Value</div>
        </div>

        {/* Funding Labels */}
        <div className="grid grid-cols-4 bg-secondary text-parchment text-[10px] font-bold uppercase tracking-[0.1em]">
          {[
            "Grants & Concessions",
            "Blended Finance",
            "Impact & Equity",
            "Bonds & Equity"
          ].map((label, i) => (
            <div key={i} className={`p-3 text-center ${i < 3 ? 'border-r border-parchment/10' : ''}`}>
              {label}
            </div>
          ))}
        </div>

        {/* Activity / Capital Summary */}
        <div className="grid grid-cols-4 text-[9px] text-slate/80 bg-white">
          {[
            { act: "Feasibility, FPIC, Theory of Change", cap: "Grants, Dev Equity" },
            { act: "Nursery, Planting, Registration", cap: "Carbon Finance, Mezzanine" },
            { act: "First Verification, Ongoing MRV", cap: "Working Capital, Impact Debt" },
            { act: "Scale-up, Regional Exit", cap: "Green Bonds, SPV Balance Sheet" }
          ].map((item, i) => (
            <div key={i} className={`p-4 ${i < 3 ? 'border-r border-mist' : ''}`}>
              <p className="font-bold text-secondary mb-1">Activities:</p>
              <p className="leading-tight mb-2">{item.act}</p>
              <p className="font-bold text-secondary mb-1">Best Fit:</p>
              <p className="leading-tight">{item.cap}</p>
            </div>
          ))}
        </div>
        <p className="px-4 py-2 text-[9px] text-slate/60 text-right italic border-t border-mist bg-white">
          Source: <a href="https://capital-continuum.com/resources/the-capital-continuum-fsg-7nj4f" target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline">Capital Continuum Advisors 2025</a>
        </p>
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
                <div>
                  <h2 className="text-lg font-semibold text-secondary">{stage.title}</h2>
                  <p className="text-[10px] font-bold text-slate/50 uppercase tracking-widest mt-0.5">{stage.years}</p>
                </div>
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

      <section className="mt-12 rounded-2xl border border-mist bg-white overflow-hidden shadow-sm">
        <div className="p-8 bg-slate-50 border-b border-mist">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Framework Detail</p>
          <h2 className="mt-3 text-2xl font-bold text-secondary">Financing Type by Lifecycle Stage</h2>
          <p className="mt-3 text-sm text-slate max-w-2xl">
            As a project progresses, the mix of capital shifts from non-repayable grants to carbon-backed pre-financing,
            and finally to institutional commercial debt and equity.
          </p>
        </div>

        <div className="p-8 grid gap-8 md:grid-cols-3 border-b border-mist">
          {/* Concessional Capital */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-emerald-700"></div>
              <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Concessional</h3>
            </div>
            <p className="text-xs text-slate leading-relaxed mb-4">
              Non-repayable or below-market funding used to de-risk early phases.
            </p>
            <ul className="space-y-2">
              {["Grants / Repayable grants", "Below market loans"].map(item => (
                <li key={item} className="text-[10px] font-medium text-secondary bg-emerald-50 px-2 py-1 rounded border border-emerald-100/50">{item}</li>
              ))}
            </ul>
          </div>

          {/* Carbon Finance */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 bg-emerald-300 rounded-full border border-emerald-400"></div>
              <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Carbon Finance</h3>
            </div>
            <p className="text-xs text-slate leading-relaxed mb-4">
              Capital structured against future carbon credit delivery.
            </p>
            <ul className="space-y-2">
              {["Prepayment contracts", "Carbon-collateralized loans"].map(item => (
                <li key={item} className="text-[10px] font-medium text-secondary bg-emerald-50/50 px-2 py-1 rounded border border-emerald-100/30">{item}</li>
              ))}
            </ul>
          </div>

          {/* Commercial Capital */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 bg-slate-400 rounded-full"></div>
              <h3 className="text-sm font-bold text-secondary uppercase tracking-widest">Commercial</h3>
            </div>
            <p className="text-xs text-slate leading-relaxed mb-4">
              Institutional-grade capital for proven track records.
            </p>
            <ul className="space-y-2">
              {["Developer equity", "SPV preferred equity", "Commercial loans"].map(item => (
                <li key={item} className="text-[10px] font-medium text-secondary bg-slate-50 px-2 py-1 rounded border border-slate-100">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mix Table */}
        <div className="p-8">
          <p className="text-[10px] font-bold text-slate uppercase tracking-widest mb-6 text-center border-b border-mist pb-2">Standardized Capital Mix across Stages (%)</p>
          <div className="border border-mist rounded-2xl overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-secondary text-parchment uppercase tracking-[0.2em] font-bold">
                <tr>
                  <th className="p-4 border-r border-parchment/10">Type</th>
                  <th className="p-4 border-r border-parchment/10 text-center">Incubation<br /><span className="text-[9px] opacity-60 font-medium">1-3y</span></th>
                  <th className="p-4 border-r border-parchment/10 text-center">Implementation<br /><span className="text-[9px] opacity-60 font-medium">4-8y</span></th>
                  <th className="p-4 border-r border-parchment/10 text-center">Stabilization<br /><span className="text-[9px] opacity-60 font-medium">9-15y</span></th>
                  <th className="p-4 text-center">Maturity<br /><span className="text-[9px] opacity-60 font-medium">16y+</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist/30">
                <tr className="hover:bg-emerald-50/20 transition-colors">
                  <td className="p-4 font-bold text-secondary border-r border-mist/30 bg-slate-50/50">Concessional</td>
                  <td className="p-4 bg-emerald-50 text-emerald-800 font-black text-center border-r border-mist/30">50%</td>
                  <td className="p-4 text-center border-r border-mist/30">25%</td>
                  <td className="p-4 text-center border-r border-mist/30">10%</td>
                  <td className="p-4 text-center">5%</td>
                </tr>
                <tr className="hover:bg-emerald-50/20 transition-colors">
                  <td className="p-4 font-bold text-secondary border-r border-mist/30 bg-slate-50/50">Carbon Finance</td>
                  <td className="p-4 text-center border-r border-mist/30">0%</td>
                  <td className="p-4 bg-emerald-100 text-emerald-900 font-black text-center border-r border-mist/30">65%</td>
                  <td className="p-4 text-center border-r border-mist/30 text-emerald-700 font-bold">20%</td>
                  <td className="p-4 text-center">0%</td>
                </tr>
                <tr className="hover:bg-slate-50/40 transition-colors">
                  <td className="p-4 font-bold text-secondary border-r border-mist/30 bg-slate-50/50">Commercial</td>
                  <td className="p-4 italic text-slate/40 text-center border-r border-mist/30">50% (Sweat)</td>
                  <td className="p-4 text-center border-r border-mist/30">10%</td>
                  <td className="p-4 bg-slate-100 text-secondary font-black text-center border-r border-mist/30">70%</td>
                  <td className="p-4 bg-slate-200 text-secondary font-black text-center">95%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-[9px] uppercase tracking-widest text-slate/60 font-bold">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Core Funding Phase</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-slate-300 rounded-full"></div> Tail Capital Phase</div>
          </div>
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
              <div className="mt-4 pt-3 border-t border-mist/50">
                <p className="text-[9px] uppercase tracking-widest text-secondary/60 font-bold">Strategy Assumption</p>
                <p className="mt-1 text-xs text-secondary/80 italic">{pillar.strategyAssumption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-8 mb-20 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary font-bold border-b border-mist pb-4">Assessment Template</p>
        <div className="mt-6 grid gap-8 text-sm text-slate md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Project Information</p>
            <div className="mt-3 space-y-3">
              <div className="flex gap-2"><span>Project:</span> <div className="border-b border-mist flex-1"></div></div>
              <div className="flex gap-2"><span>Date:</span> <div className="border-b border-mist flex-1"></div></div>
              <div className="flex gap-2"><span>Assessor:</span> <div className="border-b border-mist flex-1"></div></div>
              <div className="flex gap-4 items-center">
                <span>Stage:</span>
                <div className="flex gap-4 text-xs font-bold">
                  {["1", "2", "3", "4"].map(n => <div key={n} className="flex items-center gap-1"><div className="w-3 h-3 rounded border border-mist"></div> {n}</div>)}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Readiness Summary</p>
            <div className="mt-3 space-y-3">
              <div className="flex gap-2"><span>Score:</span> <div className="border-b border-mist flex-1"></div> <span>/ 25</span></div>
              <div className="flex gap-2"><span>Top 3 Gaps:</span> <div className="border-b border-mist flex-1"></div></div>
              <div className="flex gap-2"><span>Next Actions:</span> <div className="border-b border-mist flex-1"></div></div>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto border border-mist rounded-xl">
          <table className="w-full text-left text-xs text-slate">
            <thead className="bg-slate-50 border-b border-mist text-[10px] uppercase tracking-widest text-secondary font-bold">
              <tr>
                <th className="p-3">Pillar</th>
                <th className="p-3 w-20">Score</th>
                <th className="p-3">Top Strength</th>
                <th className="p-3">Primary Gap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist/40">
              {pillars.map((pillar) => (
                <tr key={pillar.title}>
                  <td className="p-3 font-semibold text-secondary">{pillar.title}</td>
                  <td className="p-3">____ / 5</td>
                  <td className="p-3">________________________</td>
                  <td className="p-3">________________________</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
