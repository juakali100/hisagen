import StageBreadcrumb from "../../components/StageBreadcrumb";

const programHighlights = [
  {
    title: "The Agri-Carbon Thesis",
    body: "We believe that agriculture is the most scalable carbon sequestration technology. By providing the tools and capital for regenerative transitions, we unlock high-integrity credits and resilient community livelihoods.",
  },
  {
    title: "Operating Model",
    body: "HISAGEN acts as the 'Aggregator and Optimizer'. We find the landscapes, bring the technical partners, and structure the capital using our Capital Continuum framework.",
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

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Partner Ecosystem Strategy</p>
        <p className="mt-4 text-sm text-slate">
          The program scales by integrating specialized partners into the HISAGEN framework:
        </p>
        <ul className="mt-4 space-y-3 text-sm text-slate">
          <li className="flex gap-3">
            <span className="text-secondary opacity-50 font-bold">01</span>
            <span><strong>Locus AG:</strong> Biological products + data pipelines for soil carbon.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary opacity-50 font-bold">02</span>
            <span><strong>Keir’s Marketplace:</strong> Distribution channels for high-integrity credits.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary opacity-50 font-bold">03</span>
            <span><strong>Capital Partners:</strong> Aligned funders for each stage of the continuum.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
