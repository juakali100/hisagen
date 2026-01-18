import Link from "next/link";
import StageBreadcrumb from "../../../../components/StageBreadcrumb";

type FunderTier = "tier1" | "tier2" | "tier3";
type FunderType = "multilateral" | "bilateral" | "foundation" | "corporate" | "accelerator" | "ngo";

interface Funder {
  name: string;
  type: FunderType;
  tier: FunderTier;
  focus: string;
  geography: string;
  grantSize: string;
  deadline?: string;
  alignmentScore: number;
  status: string;
  url?: string;
  notes: string;
}

const funders: Funder[] = [
  // Tier 1: Apply Now
  {
    name: "African Development Bank - Climate Action Window",
    type: "multilateral",
    tier: "tier1",
    focus: "Climate adaptation, agriculture, forestry, land use",
    geography: "Africa LDCs including Uganda",
    grantSize: "Technical Assistance grants",
    deadline: "February 5, 2025",
    alignmentScore: 9,
    status: "URGENT - Application prep needed",
    url: "https://www.afdb.org/en/topics-and-sectors/initiatives-and-partnerships/adf-climate-action-window",
    notes: "3rd Call for Proposals. Perfect fit for HISAGEN Stage 1.",
  },
  {
    name: "IKI Small Grants Programme",
    type: "bilateral",
    tier: "tier1",
    focus: "Climate and biodiversity action",
    geography: "Developing countries including Uganda",
    grantSize: "EUR 60,000 - 200,000",
    deadline: "January 15, 2026",
    alignmentScore: 8,
    status: "Good fit - begin research",
    notes: "Local/regional projects. Soil health + biodiversity angle strong.",
  },
  {
    name: "ESTDEV Green/Digital Transition",
    type: "bilateral",
    tier: "tier1",
    focus: "Green and digital transition",
    geography: "Uganda, Kenya, Tanzania",
    grantSize: "EUR 50,000 - 150,000",
    deadline: "January 30, 2026",
    alignmentScore: 7,
    status: "Digital marketplace angle",
    notes: "Could position digital platform + green ag together.",
  },
  // Tier 2: Cultivate
  {
    name: "Green Climate Fund (GCF)",
    type: "multilateral",
    tier: "tier2",
    focus: "Climate resilience, food systems",
    geography: "Global, strong Africa focus",
    grantSize: "$10M+ (via Accredited Entities)",
    alignmentScore: 9,
    status: "Need Accredited Entity partner",
    url: "https://www.greenclimate.fund",
    notes: "AGRA is accredited - potential pathway. $16.6B portfolio.",
  },
  {
    name: "Global Innovation Fund (GIF)",
    type: "foundation",
    tier: "tier2",
    focus: "Poverty, agriculture, carbon, innovation",
    geography: "Global",
    grantSize: "Up to $1M",
    alignmentScore: 9,
    status: "Strong soil-carbon-poverty nexus fit",
    url: "https://www.globalinnovation.fund",
    notes: "Specifically funding 'poverty/agriculture/carbon nexus' innovations.",
  },
  {
    name: "Science for Africa Foundation",
    type: "foundation",
    tier: "tier2",
    focus: "African ag climate adaptation research",
    geography: "Africa",
    grantSize: "Varies",
    alignmentScore: 7,
    status: "Research angle - NARO partnership",
    notes: "Could fund research component of HISAGEN.",
  },
  {
    name: "IKEA Foundation",
    type: "corporate",
    tier: "tier2",
    focus: "Smallholder livelihoods, climate",
    geography: "East Africa",
    grantSize: "Major grants ($1M+)",
    alignmentScore: 8,
    status: "Need intro pathway",
    notes: "Funds smallholder climate programs via One Acre Fund.",
  },
  {
    name: "Cartier Philanthropy",
    type: "corporate",
    tier: "tier2",
    focus: "Smallholder farmer innovation",
    geography: "East Africa",
    grantSize: "Multi-year grants",
    alignmentScore: 7,
    status: "Need intro pathway",
    notes: "Partners with One Acre Fund.",
  },
  // Tier 3: Monitor
  {
    name: "Africa Adaptation Acceleration Program",
    type: "multilateral",
    tier: "tier3",
    focus: "Climate-smart agriculture",
    geography: "26 African countries",
    grantSize: "Part of $25B mobilization",
    alignmentScore: 8,
    status: "Monitor for opportunities",
    notes: "Food Security pillar targeting 38M farmers.",
  },
  {
    name: "THRIVE Global Impact Challenge",
    type: "accelerator",
    tier: "tier3",
    focus: "AgTech startups",
    geography: "Global",
    grantSize: "Up to $1M investment",
    alignmentScore: 7,
    status: "Consider for visibility",
    notes: "Startup accelerator format.",
  },
  {
    name: "The Nature Conservancy - AFCC",
    type: "ngo",
    tier: "tier3",
    focus: "Forest carbon, communities",
    geography: "Africa",
    grantSize: "Partnership-based",
    alignmentScore: 6,
    status: "Potential learning",
    notes: "Africa Forest Carbon Catalyst. Different model.",
  },
];

const matchFunding = {
  sweatEquity: {
    confirmed: 9600,
    pending: "TBC (Keir, HISAGEN team)",
  },
  inKind: {
    items: ["Locus AG products at cost", "NARO research infrastructure", "Field trial sites (4 regions)"],
    value: "TBC",
  },
  investment: {
    value: "TBC",
    source: "Director investment",
  },
};

const getTierConfig = (tier: FunderTier) => {
  switch (tier) {
    case "tier1":
      return {
        label: "Apply Now",
        bg: "bg-emerald-50",
        border: "border-emerald-500/30",
        badge: "bg-emerald-500 text-white",
        text: "text-emerald-700",
      };
    case "tier2":
      return {
        label: "Cultivate",
        bg: "bg-amber-50",
        border: "border-amber-500/30",
        badge: "bg-amber-500 text-white",
        text: "text-amber-700",
      };
    case "tier3":
      return {
        label: "Monitor",
        bg: "bg-slate-50",
        border: "border-slate-300",
        badge: "bg-slate-400 text-white",
        text: "text-slate-600",
      };
  }
};

const getTypeLabel = (type: FunderType) => {
  switch (type) {
    case "multilateral": return "Multilateral";
    case "bilateral": return "Bilateral";
    case "foundation": return "Foundation";
    case "corporate": return "Corporate";
    case "accelerator": return "Accelerator";
    case "ngo": return "NGO";
  }
};

export default function FunderLandscapePage() {
  const tier1 = funders.filter(f => f.tier === "tier1");
  const tier2 = funders.filter(f => f.tier === "tier2");
  const tier3 = funders.filter(f => f.tier === "tier3");

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Funder Landscape"
        trail={[
          { label: "Stage 1 Funding", href: "/stage-1/funding" },
          { label: "Grant Lifecycle Phase 02-04" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Stage 1 Funding
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Funder Landscape & Prospect Mapping
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Systematic identification and prioritization of grant funders aligned with HISAGEN's mission.
          Covers Grant Lifecycle Phases 02 (Landscape Scanning), 03 (Donor Engagement), and 04 (Due Diligence).
        </p>
      </section>

      {/* Quick Stats */}
      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-secondary">{funders.length}</p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">Funders Identified</p>
        </div>
        <div className="p-4 rounded-xl border-2 border-emerald-500/30 bg-emerald-50">
          <p className="text-3xl font-bold text-emerald-700">{tier1.length}</p>
          <p className="text-xs uppercase tracking-widest text-emerald-600 mt-1">Apply Now</p>
        </div>
        <div className="p-4 rounded-xl border-2 border-amber-500/30 bg-amber-50">
          <p className="text-3xl font-bold text-amber-700">{tier2.length}</p>
          <p className="text-xs uppercase tracking-widest text-amber-600 mt-1">Cultivate</p>
        </div>
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-slate-600">{tier3.length}</p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">Monitor</p>
        </div>
      </section>

      {/* Urgent Deadline Alert */}
      <section className="mt-8 p-6 rounded-xl border-2 border-red-500/30 bg-red-50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center shrink-0">
            <span className="text-red-800 font-bold text-lg">!</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-700 mb-1">Urgent Deadline</p>
            <h2 className="text-xl font-bold text-red-900">AfDB Climate Action Window - February 5, 2025</h2>
            <p className="mt-2 text-sm text-red-800">
              High alignment score (9/10). Eligibility research and application prep needed immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Tier 1: Apply Now */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest">
            Tier 1
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Apply Now</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">High alignment + open deadlines. Prioritize for immediate action.</p>

        <div className="space-y-4">
          {tier1.map((funder) => {
            const config = getTierConfig(funder.tier);
            return (
              <div key={funder.name} className={`p-6 rounded-2xl border-2 ${config.border} ${config.bg}`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-96 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        {getTypeLabel(funder.type)}
                      </span>
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${config.badge}`}>
                        Score: {funder.alignmentScore}/10
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary">{funder.name}</h3>
                    <p className="text-sm text-slate mt-2">{funder.focus}</p>
                  </div>

                  <div className="flex-1 grid gap-4 md:grid-cols-3">
                    <div className="p-3 rounded-lg bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Geography</p>
                      <p className="text-xs text-slate">{funder.geography}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Grant Size</p>
                      <p className="text-xs text-slate">{funder.grantSize}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1">Deadline</p>
                      <p className="text-xs font-bold text-red-700">{funder.deadline || "Rolling"}</p>
                    </div>
                  </div>

                  <div className="lg:w-48 shrink-0">
                    <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/10 h-full">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">Status</p>
                      <p className="text-xs text-secondary leading-relaxed">{funder.status}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate/80 italic">{funder.notes}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tier 2: Cultivate */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-widest">
            Tier 2
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Cultivate</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Relationship-based or rolling deadlines. Build connections and prepare applications.</p>

        <div className="grid gap-4 md:grid-cols-2">
          {tier2.map((funder) => {
            const config = getTierConfig(funder.tier);
            return (
              <div key={funder.name} className={`p-5 rounded-xl border-2 ${config.border} ${config.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    {getTypeLabel(funder.type)}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${config.badge}`}>
                    {funder.alignmentScore}/10
                  </span>
                </div>
                <h3 className="text-base font-bold text-secondary">{funder.name}</h3>
                <p className="text-xs text-slate mt-2">{funder.focus}</p>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-[10px] uppercase tracking-widest text-amber-700 font-bold">
                    {funder.grantSize}
                  </p>
                  <p className="text-xs text-slate mt-1">{funder.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tier 3: Monitor */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full bg-slate-400 text-white text-xs font-bold uppercase tracking-widest">
            Tier 3
          </span>
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Monitor</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <p className="text-sm text-slate mb-6">Future opportunities or lower alignment. Keep on radar.</p>

        <div className="grid gap-3 md:grid-cols-3">
          {tier3.map((funder) => (
            <div key={funder.name} className="p-4 rounded-lg border border-mist bg-white">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate/60 mb-1">
                {getTypeLabel(funder.type)} | {funder.alignmentScore}/10
              </p>
              <h3 className="text-sm font-bold text-secondary">{funder.name}</h3>
              <p className="text-xs text-slate mt-1">{funder.grantSize}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Match Funding Summary */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Match Funding & Commitment</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
          <p className="text-sm text-slate mb-6">
            Demonstrating commitment through sweat equity, in-kind contributions, and investment.
            This leverage strengthens grant applications and reduces funder risk.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-5 rounded-xl bg-white border border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Sweat Equity</p>
              <p className="text-2xl font-bold text-primary">${matchFunding.sweatEquity.confirmed.toLocaleString()}+</p>
              <p className="text-xs text-slate mt-2">Confirmed (Pandion Studio)</p>
              <p className="text-xs text-slate/60 mt-1">{matchFunding.sweatEquity.pending}</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">In-Kind Contributions</p>
              <p className="text-2xl font-bold text-primary">{matchFunding.inKind.value}</p>
              <ul className="mt-2 space-y-1">
                {matchFunding.inKind.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate flex gap-2">
                    <span className="text-primary">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white border border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Director Investment</p>
              <p className="text-2xl font-bold text-primary">{matchFunding.investment.value}</p>
              <p className="text-xs text-slate mt-2">{matchFunding.investment.source}</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-amber-100 border-2 border-amber-400">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest rounded">
                Action Required
              </span>
            </div>
            <p className="text-sm text-amber-900">
              Capture Keir's sweat equity hours and Locus AG in-kind contribution values to complete match funding picture.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Integration */}
      <section className="mt-16 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Grant Lifecycle Integration</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Link
            href="/funding-roadmap/grant-lifecycle"
            className="group p-6 rounded-xl border-2 border-amber-500/20 bg-amber-50 hover:border-amber-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-2">Phase 02</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-amber-700 transition-colors">
              Landscape Scanning
            </h3>
            <p className="text-xs text-slate mt-2">This page covers prospect mapping</p>
          </Link>

          <Link
            href="/funding-roadmap/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 03</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Donor Engagement
            </h3>
            <p className="text-xs text-slate mt-2">Relationship cultivation</p>
          </Link>

          <Link
            href="/funding-roadmap/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 04</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Due Diligence
            </h3>
            <p className="text-xs text-slate mt-2">Eligibility verification</p>
          </Link>

          <Link
            href="/stage-1/funding/v0-grant-proposal"
            className="group p-6 rounded-xl border-2 border-emerald-500/20 bg-emerald-50 hover:border-emerald-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Phase 05</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-emerald-700 transition-colors">
              V1.1 Proposal
            </h3>
            <p className="text-xs text-slate mt-2">Ready for tailoring</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
