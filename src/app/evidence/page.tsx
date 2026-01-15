import StageBreadcrumb from "../../components/StageBreadcrumb";

const evidenceCategories = [
  {
    title: "Pilot Proof Points",
    items: [
      "Yield impact summary (Actual vs. Control maize trials).",
      "Farmer adoption metrics from the Uganda pilot zones.",
      "Soil Organic Carbon (SOC) baseline indicators.",
      "Locus AG product performance validation.",
    ],
  },
  {
    title: "Carbon Integrity",
    items: [
      "Methodology selection (Verra/Gold Standard mapping).",
      "Draft MRV workflow (ground-truth + satellite).",
      "Carbon rights ownership legal framework.",
      "Buyer requirements checklist from Keir's network.",
    ],
  },
  {
    title: "Commercial Viability",
    items: [
      "Pro-forma unit economics for Stage 1 & 2.",
      "Revenue sharing model for smallholder participation.",
      "Operational cost breakdown for local delivery.",
    ],
  },
  {
    title: "Governance & Ethics",
    items: [
      "Entity structure map (Holding Co vs. Local SPV).",
      "Community impact scorecard (Social Safeguards).",
      "Risk mitigation strategy for seasonal volatility.",
    ],
  },
];

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Evidence Review"
        trail={[
          { label: "Agri-Carbon Program", href: "/program" },
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Project Intelligence</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary leading-tight">
          Evidence Review: The Uganda Dossier
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This is the "Evidence Vault" for the Uganda pilot. We are compiling the minimum viable proof required to transition from Stage 1 Incubation to Stage 2 Implementation.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {evidenceCategories.map((cat) => (
          <div key={cat.title} className="rounded-xl border border-mist bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none">
            <h2 className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">{cat.title}</h2>
            <ul className="space-y-3">
              {cat.items.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate">
                  <span className="text-secondary opacity-40 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-parchment/10 p-8 text-center border-dashed">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2">Evidence Strategic Gap</p>
        <h3 className="text-xl font-semibold text-secondary mb-4 italic">"How do we prove 10-year soil carbon permanence with 1-year pilot data?"</h3>
        <p className="text-sm text-slate max-w-2xl mx-auto mb-6">
          This is our most critical evidence challenge. We will use Gemini and deep literature review to synthesize proxy indicators that satisfy institutional carbon buyers.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 text-[10px] rounded font-bold uppercase tracking-widest">
          High Priority Research
        </div>
      </section>

      <section className="mt-10 border-t border-mist pt-8 mb-12">
        <div className="flex justify-between items-center">
          <p className="text-sm text-slate italic font-medium">Supporting documentation available in the Resources section.</p>
          <a href="/resources" className="px-6 py-2 bg-secondary text-parchment rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors">
            Open Vault →
          </a>
        </div>
      </section>
    </div>
  );
}

