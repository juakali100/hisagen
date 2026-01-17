import StageBreadcrumb from "../../components/StageBreadcrumb";
import Link from "next/link";

// Locus AG validated yield data from 44-page deck (Pages 22-44)
const yieldData = [
  {
    crop: "Potatoes",
    improvement: "+22.6%",
    baseline: "49,559",
    treated: "60,776",
    unit: "lb/ac",
    product: "Duo WP + Unpac",
    trials: "Whitewater, WI 2023",
    highlight: true,
    icon: "🥔",
  },
  {
    crop: "Sweet Potatoes",
    improvement: "+17.7%",
    baseline: "15,365",
    treated: "18,078",
    unit: "lb/ac",
    product: "Duo WP",
    trials: "Tidewater, NC 2023",
    highlight: true,
    icon: "🍠",
  },
  {
    crop: "Peanuts",
    improvement: "+6.2%",
    baseline: "3,838",
    treated: "4,077",
    unit: "lb/ac",
    product: "Prime BA",
    trials: "2024 trials, 2 CROs",
    highlight: false,
    icon: "🥜",
  },
  {
    crop: "Corn",
    improvement: "+4.6%",
    baseline: "194",
    treated: "203",
    unit: "bu/ac",
    product: "Duo BA",
    trials: "28 CROs/Universities",
    highlight: false,
    icon: "🌽",
  },
  {
    crop: "Soybeans",
    improvement: "+5.3%",
    baseline: "59.5",
    treated: "62.6",
    unit: "bu/ac",
    product: "Prime BA",
    trials: "14 trials",
    highlight: false,
    icon: "🫘",
  },
  {
    crop: "Wheat",
    improvement: "+5.4%",
    baseline: "76.6",
    treated: "80.7",
    unit: "bu/ac",
    product: "Duo BA",
    trials: "11 trials",
    highlight: false,
    icon: "🌾",
  },
];

const evidenceCategories = [
  {
    title: "Pilot Proof Points",
    items: [
      "Yield impact summary (Actual vs. Control maize trials).",
      "Farmer adoption metrics from 4 agro-ecological zones: maize, potatoes, peanuts, sweet potatoes.",
      "Soil Organic Carbon (SOC) baseline indicators.",
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

      {/* Validated Yield Data - Locus AG */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary/60">Validated Yield Data</h2>
            <p className="text-xs text-slate mt-1">Locus AG biologicals - multi-year, multi-site trials</p>
          </div>
          <Link
            href="/ecosystem/locus-ag"
            className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
          >
            View Locus AG Dossier →
          </Link>
        </div>

        {/* Highlight Cards - Potatoes & Sweet Potatoes (Uganda trial crops) */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {yieldData.filter(d => d.highlight).map((data) => (
            <div
              key={data.crop}
              className="relative overflow-hidden rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">{data.icon}</div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] rounded font-bold uppercase tracking-widest mb-3">
                Uganda Trial Crop
              </div>
              <h3 className="text-2xl font-bold text-secondary">{data.crop}</h3>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-bold text-emerald-600">{data.improvement}</span>
                <span className="text-sm text-slate mb-2">yield improvement</span>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate/60 uppercase tracking-wider text-[9px]">Control</p>
                  <p className="font-semibold text-slate">{data.baseline} {data.unit}</p>
                </div>
                <div>
                  <p className="text-slate/60 uppercase tracking-wider text-[9px]">Treated</p>
                  <p className="font-semibold text-emerald-700">{data.treated} {data.unit}</p>
                </div>
              </div>
              <p className="mt-3 text-[10px] text-slate/60">{data.product} • {data.trials}</p>
            </div>
          ))}
        </div>

        {/* Other Crops Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {yieldData.filter(d => !d.highlight).map((data) => (
            <div
              key={data.crop}
              className="rounded-xl border border-mist bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{data.icon}</span>
                <h3 className="text-sm font-bold text-secondary">{data.crop}</h3>
              </div>
              <p className="text-2xl font-bold text-secondary">{data.improvement}</p>
              <p className="text-[10px] text-slate mt-1">{data.baseline} → {data.treated} {data.unit}</p>
              <p className="text-[9px] text-slate/60 mt-2">{data.trials}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-slate/60 text-center italic">
          All data from Locus AG third-party validated trials. Statistically significant results across 28+ CROs and universities.
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
          <a href="/knowledge-base" className="px-6 py-2 bg-secondary text-parchment rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors">
            Open Vault →
          </a>
        </div>
      </section>
    </div>
  );
}

