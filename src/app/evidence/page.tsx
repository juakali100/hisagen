import StageBreadcrumb from "../../components/StageBreadcrumb";
import Link from "next/link";

// Uganda Pilot Trial Data (HISAGEN's own field trials)
const ugandaTrials = {
  timeline: "Feb 2025 (prep) → Mar-Aug 2025 (data collection) → Sep 2025 (harvest)",
  partner: "NARO (National Agricultural Research Organisation) under MAAIF",
  crops: [
    { name: "Maize", icon: "🌽", regions: ["Western", "Northern", "Eastern", "Central"] },
    { name: "Irish Potatoes", icon: "🥔", regions: ["Western", "Central"] },
    { name: "Peanuts", icon: "🥜", regions: ["Northern", "Eastern"] },
    { name: "Sweet Potatoes", icon: "🍠", regions: ["Eastern", "Central"] },
  ],
  status: "Results submitted Oct 2025 - described as 'highly positive'",
  nextSteps: "Full yield data pending NARO final report",
};

// Locus AG US Trial Data (Technology validation - NOT Uganda)
const locusAgData = [
  {
    crop: "Potatoes",
    improvement: "+22.6%",
    baseline: "49,559",
    treated: "60,776",
    unit: "lb/ac",
    product: "Duo WP + Unpac",
    location: "Whitewater, WI (USA)",
    year: "2023",
    icon: "🥔",
  },
  {
    crop: "Sweet Potatoes",
    improvement: "+17.7%",
    baseline: "15,365",
    treated: "18,078",
    unit: "lb/ac",
    product: "Duo WP",
    location: "Tidewater, NC (USA)",
    year: "2023",
    icon: "🍠",
  },
  {
    crop: "Peanuts",
    improvement: "+6.2%",
    baseline: "3,838",
    treated: "4,077",
    unit: "lb/ac",
    product: "Prime BA",
    location: "USA",
    year: "2024",
    icon: "🥜",
  },
  {
    crop: "Corn",
    improvement: "+4.6%",
    baseline: "194",
    treated: "203",
    unit: "bu/ac",
    product: "Duo BA",
    location: "28 CROs/Universities (USA)",
    year: "Multi-year",
    icon: "🌽",
  },
  {
    crop: "Soybeans",
    improvement: "+5.3%",
    baseline: "59.5",
    treated: "62.6",
    unit: "bu/ac",
    product: "Prime BA",
    location: "USA",
    year: "14 trials",
    icon: "🫘",
  },
  {
    crop: "Wheat",
    improvement: "+5.4%",
    baseline: "76.6",
    treated: "80.7",
    unit: "bu/ac",
    product: "Duo BA",
    location: "USA",
    year: "11 trials",
    icon: "🌾",
  },
];

const evidenceCategories = [
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

      {/* SECTION 1: Uganda Pilot Field Evidence */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary">Uganda Pilot Field Evidence</h2>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[9px] rounded font-bold uppercase tracking-widest">
            HISAGEN Project Data
          </span>
        </div>

        <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Trial Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Trial Overview</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate/60 text-[10px] uppercase tracking-wider">Timeline</p>
                  <p className="text-slate font-medium">{ugandaTrials.timeline}</p>
                </div>
                <div>
                  <p className="text-slate/60 text-[10px] uppercase tracking-wider">Research Partner</p>
                  <p className="text-slate font-medium">{ugandaTrials.partner}</p>
                </div>
                <div>
                  <p className="text-slate/60 text-[10px] uppercase tracking-wider">Status</p>
                  <p className="text-amber-700 font-semibold">{ugandaTrials.status}</p>
                </div>
              </div>
            </div>

            {/* Crops Tested */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Crops Under Trial</h3>
              <div className="grid grid-cols-2 gap-3">
                {ugandaTrials.crops.map((crop) => (
                  <div key={crop.name} className="p-3 rounded-xl bg-white border border-amber-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{crop.icon}</span>
                      <span className="font-bold text-secondary text-sm">{crop.name}</span>
                    </div>
                    <p className="text-[10px] text-slate/60">{crop.regions.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Data Notice */}
          <div className="mt-6 pt-4 border-t border-amber-200">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-100/50 border border-dashed border-amber-300">
              <span className="text-amber-600 text-lg">⏳</span>
              <div>
                <p className="font-semibold text-amber-800 text-sm">Quantitative Results Pending</p>
                <p className="text-amber-700 text-xs mt-1">
                  NARO trial results described as "highly positive." Full yield comparison data (treated vs control)
                  will be available upon completion of NARO final report. This section will be updated with specific
                  percentage improvements once data is released.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Locus AG Technology Validation */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary">Technology Partner Validation</h2>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] rounded font-bold uppercase tracking-widest">
              Locus AG US Trials
            </span>
          </div>
          <Link
            href="/ecosystem/locus-ag"
            className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
          >
            View Locus AG Dossier →
          </Link>
        </div>

        <p className="text-sm text-slate mb-4">
          These results demonstrate validated performance of Rhizolizer® products in US field trials.
          They provide technology validation supporting the Uganda pilot hypothesis.
        </p>

        {/* Crops Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {locusAgData.map((data) => (
            <div
              key={data.crop}
              className="rounded-xl border border-mist bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{data.icon}</span>
                <h3 className="text-sm font-bold text-secondary">{data.crop}</h3>
              </div>
              <p className="text-2xl font-bold text-emerald-600">{data.improvement}</p>
              <p className="text-[10px] text-slate mt-1">{data.baseline} → {data.treated} {data.unit}</p>
              <div className="mt-2 pt-2 border-t border-mist/50">
                <p className="text-[9px] text-slate/60">{data.product}</p>
                <p className="text-[9px] text-slate/60">{data.location}, {data.year}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-slate/60 text-center italic">
          All Locus AG data from third-party validated US trials. Statistically significant results across 28+ CROs and universities.
          These are NOT Uganda results - they demonstrate that the underlying technology delivers consistent yield improvements.
        </p>
      </section>

      {/* SECTION 3: Evidence Categories (Other requirements) */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary">Additional Evidence Requirements</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
        </div>
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
