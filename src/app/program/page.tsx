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

      <section className="mt-10 rounded-xl border border-mist bg-white p-6 text-ink">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Partner Ecosystem Strategy</p>
        <p className="mt-4 text-sm text-slate">
          The program scales by integrating specialized partners into a unified value chain:
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="h-6 w-6 rounded bg-secondary/10 text-secondary text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="text-xs font-bold text-secondary">Discovery & Tech-Settle</p>
                <p className="text-[10px] text-slate mt-1 italic">Deep Six Consulting + Locus AG</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="h-6 w-6 rounded bg-secondary/10 text-secondary text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="text-xs font-bold text-secondary">Operational Scaffolding</p>
                <p className="text-[10px] text-slate mt-1 italic">Pandion Studio</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="h-6 w-6 rounded bg-secondary/10 text-secondary text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="text-xs font-bold text-secondary">Accreditation Architecture</p>
                <p className="text-[10px] text-slate mt-1 italic">3Degrees</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="h-6 w-6 rounded bg-secondary/10 text-secondary text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <p className="text-xs font-bold text-secondary">Direct Monetization</p>
                <p className="text-[10px] text-slate mt-1 italic">Carbon Neutral Marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
