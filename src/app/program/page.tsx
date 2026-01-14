import StageBreadcrumb from "../../components/StageBreadcrumb";

import { ReactNode } from "react";

type Highlight = {
  title: string;
  body: ReactNode;
};

const programHighlights: Highlight[] = [
  {
    title: "The Agri-Carbon Thesis",
    body: "We believe that agriculture is the most scalable carbon sequestration technology. By providing the tools and capital for regenerative transitions, we unlock high-integrity credits and resilient community livelihoods.",
  },
  {
    title: "Operating Model",
    body: (
      <>
        HISAGEN acts as the 'Aggregator and Optimizer'. We find the landscapes, bring the technical partners, and structure the capital using the{" "}
        <a
          href="https://capital-continuum.com/resources/the-capital-continuum-fsg-7nj4f"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-secondary/30 hover:decoration-secondary transition-colors"
        >
          Capital Continuum
        </a>{" "}
        framework.
      </>
    ),
  },
  {
    title: "Scalability",
    body: "Our 'Programmatic' approach means that once the Uganda pilot proves the unit economics, we can deploy the same 'Skeleton' to any geography with local partners.",
  },
];

const programGaps = [
  {
    area: "Revenue Model Analysis",
    description: "Should HISAGEN take a % of credit upside, a management fee, or an equity stake in local delivery SPVs? We need to model these scenarios.",
  },
  {
    area: "MRV Tooling Stack",
    description: "Evaluating the trade-offs between remote sensing (satellite) and ground-truth data collection for the Locus AG product line.",
  },
];

export default function ProgramPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Program" trail={[{ label: "The Agri-Carbon Program" }]} />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Program</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary leading-tight">
          HISAGEN Agri-Carbon Program: Built to Scale
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "This is not just a project; it is a replicable system for financing nature-based solutions."
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-8 w-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center text-lg">📁</span>
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">Program Strategy</h3>
          </div>
          <p className="text-sm text-slate leading-relaxed">
            A <strong>Program</strong> is a thematic framework and long-term operating "Skeleton". It defines the technology stack, the methodology (PDD), and the capital structure that can be applied across multiple geographies.
          </p>
          <p className="text-xs text-secondary mt-3 font-medium italic">Example: The Hisagen Agri-Carbon Program</p>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg">📍</span>
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">Project Execution</h3>
          </div>
          <p className="text-sm text-slate leading-relaxed">
            A <strong>Project</strong> is a specific, time-bound implementation of a Program’s skeleton in a precise location. It involves local landholders, specific ground-truth data, and a dedicated capital allocation.
          </p>
          <p className="text-xs text-emerald-600 mt-3 font-medium italic">Example: The Uganda Maize Pilot (Stage 1)</p>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {programHighlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-xl border border-mist bg-white p-6 text-sm text-slate shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">{highlight.title}</p>
            <p className="mt-3 leading-relaxed">{highlight.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Tactical Roadmap: The 'Soil-to-Sale' Journey</p>
          <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase tracking-widest font-bold">Uganda Pilot Scenario</span>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-mist md:left-1/2 md:-ml-px md:block" />

          <div className="space-y-12">
            {[
              {
                stage: "1. Biological Deployment",
                actor: "Locus AG / Hisagen",
                detail: "Rhizolizer® Duo is applied to smallholder maize plots in Uganda to kickstart sequestration.",
                icon: "🌱"
              },
              {
                stage: "2. Ground-Truth MRV",
                actor: "Local Partners",
                detail: "Field data and yield comparisons are captured to establish the carbon baseline.",
                icon: "📊"
              },
              {
                stage: "3. Methodology Audit",
                actor: "3Degrees",
                detail: "Captured data is translated into a formal Verra/Gold Standard program design.",
                icon: "⚖️"
              },
              {
                stage: "4. Digital Issuance",
                actor: "Pandion / CZMP",
                detail: "Verified credits are issued and listed on the Carbon Neutral Marketplace storefront.",
                icon: "💻"
              },
              {
                stage: "5. Monetization & Feedback",
                actor: "Global Buyers",
                detail: "Credits are sold; proceeds flow back to the project to fund expansion to Kenya.",
                icon: "💰"
              }
            ].map((step, idx) => (
              <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 hidden md:block" />
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-mist bg-white text-xs font-bold shadow-sm">
                  {step.icon}
                </div>
                <div className="flex-1 rounded-xl border border-mist bg-parchment/5 p-5 hover:border-secondary/20 transition-colors">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{step.actor}</p>
                  <h3 className="text-sm font-bold text-secondary mt-1">{step.stage}</h3>
                  <p className="text-xs text-slate mt-2 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Programmatic Strategic Gaps</p>
          <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase tracking-widest font-bold">In-Depth Research Required</span>
        </div>
        <div className="space-y-4">
          {programGaps.map((gap) => (
            <div key={gap.area} className="p-4 rounded-lg border border-mist/50 bg-parchment/10">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">{gap.area}</h3>
              <p className="text-sm text-slate mt-2">{gap.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">The Revenue Model Wheel (Draft)</p>
        <p className="mt-4 text-sm text-slate">
          As founders, we are exploring multiple revenue streams to ensure HISAGEN's long-term sustainability:
        </p>
        <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4 text-center">
          <div className="p-4 border border-mist rounded-lg">
            <span className="block text-xl">💰</span>
            <p className="text-[10px] font-bold uppercase mt-2 text-slate">Management Fees</p>
          </div>
          <div className="p-4 border border-mist rounded-lg">
            <span className="block text-xl">🌱</span>
            <p className="text-[10px] font-bold uppercase mt-2 text-slate">Credit Upside</p>
          </div>
          <div className="p-4 border border-mist rounded-lg">
            <span className="block text-xl">🛠️</span>
            <p className="text-[10px] font-bold uppercase mt-2 text-slate">Technical Advisory</p>
          </div>
          <div className="p-4 border border-mist rounded-lg">
            <span className="block text-xl">🏗️</span>
            <p className="text-[10px] font-bold uppercase mt-2 text-slate">SPV Equity</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white overflow-hidden shadow-sm">
        <div className="bg-secondary p-6 text-white text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Infrastructure</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight">Integrated Operating Architecture</h2>
        </div>

        <div className="p-8">
          <p className="text-sm text-slate leading-relaxed text-center max-w-2xl mx-auto italic">
            "The program’s resilience comes from its vertical integration. We have secured Tier-1 partners for every segment of the carbon value chain, from soil microbes to global markets."
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                phase: "1. The Origin",
                org: "Deep Six Consulting",
                role: "Venture Origination",
                deliverables: ["Tech-Settle Strategy", "Site Identification", "Strategic Framing"],
                color: "bg-blue-50"
              },
              {
                phase: "2. The Engine",
                org: "Locus AG / Pilots",
                role: "Implementation & Ops",
                deliverables: ["Soil Microbe Deployment", "Biomass Monitoring", "Yield Ground-Truth"],
                color: "bg-emerald-50"
              },
              {
                phase: "3. The Validator",
                org: "3Degrees",
                role: "Design & Certification",
                deliverables: ["Methodology Design", "Accreditation PDD", "Compliance Audit"],
                color: "bg-amber-50"
              },
              {
                phase: "4. The Exit",
                org: "CZMP",
                role: "Monetization & Sale",
                deliverables: ["Retail Marketplace", "Wholesale Trading", "Proceeds Distribution"],
                color: "bg-indigo-50"
              }
            ].map((p, idx) => (
              <div key={idx} className={`rounded-xl border border-mist p-5 flex flex-col ${p.color}/30`}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{p.phase}</span>
                <h3 className="mt-2 text-base font-bold text-secondary">{p.org}</h3>
                <p className="text-xs font-medium text-slate/70 mt-1 uppercase tracking-wider">{p.role}</p>
                <div className="h-px bg-mist my-4 w-full" />
                <ul className="space-y-2 flex-grow">
                  {p.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="text-[11px] text-slate flex gap-2 items-start">
                      <span className="text-secondary/30 mt-0.5">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl border-2 border-dashed border-secondary/20 bg-secondary/5">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-xl">🏗️</div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.1em]">Connective Tissue: Systems Architecture</h4>
                <p className="text-xs text-secondary mt-1 font-bold">Pandion Studio</p>
                <p className="text-[11px] text-slate mt-2 leading-relaxed">
                  Responsible for the project’s <strong>Digital Twin</strong> and <strong>Funding Blueprint</strong>. Pandion provides the synthesis and scaffolding required to coordinate these specialized partners and prepare the program for Stage 2 (Institutional Scale) capital.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Funding Continuum", "Intelligence Ledger", "Strategic Synthesis", "MRV Tooling"].map((tag) => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-secondary/20 text-secondary/60 bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
