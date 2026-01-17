import StageBreadcrumb from "../../components/StageBreadcrumb";

const snapshot = [
  {
    title: "Project",
    detail:
      "Integrated agriculture and carbon model combining microbial biofertilizers with soil carbon verification.",
  },
  {
    title: "Product Scope",
    detail: "Rhizolizer® Duo (Maize) + new testing on Sweet/Irish Potatoes and Peanuts.",
  },
  {
    title: "Pilot Reach",
    detail: "Uganda NARO independent trials across 4 agro-ecological zones.",
  },
  {
    title: "Commercial Goal",
    detail: "Secure UNBS approval and generate local sales income to cover operational overheads.",
  },
];

// Uganda Opportunity - from PDF Page 5
const ugandaOpportunity = {
  headline: "East Africa represents a compelling entry point for HISAGEN's integrated model.",
  points: [
    "Strong local demand for sustainable yield improvement solutions",
    "Government commitment to climate-smart agriculture through NDC",
    "NARO actively engaged in independent validation trials",
    "Carbon credit revenue stream alongside product sales",
    "Co-investment opportunities with development finance institutions",
  ],
};

// Uganda Trials - from PDF Pages 9-10
const ugandaTrials = {
  timeline: [
    { phase: "Preparation", period: "Feb 2025", detail: "Site selection, baseline soil sampling, farmer recruitment" },
    { phase: "Data Collection", period: "Mar-Aug 2025", detail: "Crop monitoring, growth measurements, soil health tracking" },
    { phase: "Harvest & Analysis", period: "Sep 2025", detail: "Yield comparison, results documentation, NARO review" },
  ],
  crops: [
    { name: "Maize", icon: "🌽", status: "Complete" },
    { name: "Irish Potatoes", icon: "🥔", status: "Complete" },
    { name: "Peanuts", icon: "🥜", status: "Complete" },
    { name: "Sweet Potatoes", icon: "🍠", status: "Complete" },
  ],
  regions: ["Western Uganda", "Northern Uganda", "Eastern Uganda", "Central Uganda"],
  result: "Highly positive crop response across all trial sites",
};

// Uganda Approvals Timeline - from PDF Pages 11-12
const approvalsTimeline = [
  { step: 1, date: "Oct 2025", milestone: "Initial submission to UNBS", status: "complete" },
  { step: 2, date: "Nov 2025", milestone: "NARO trial results submitted", status: "complete" },
  { step: 3, date: "Jan 2026", milestone: "Full dossier submission to MAAIF", status: "current" },
  { step: 4, date: "Jan-Feb 2026", milestone: "Technical review period", status: "upcoming" },
  { step: 5, date: "Feb-Mar 2026", milestone: "Approval decision", status: "upcoming" },
  { step: 6, date: "Mar 2026", milestone: "Labeling and packaging compliance", status: "upcoming" },
  { step: 7, date: "Apr-Jun 2026", milestone: "Market launch preparation", status: "upcoming" },
];

// Glossary - from PDF Page 14
const glossary = [
  { term: "NARO", definition: "National Agricultural Research Organization - Uganda's primary agricultural research body conducting independent validation trials." },
  { term: "UNBS", definition: "Uganda National Bureau of Standards - Regulatory body for product standards and market entry certification." },
  { term: "MAAIF", definition: "Ministry of Agriculture, Animal Industry and Fisheries - Government ministry overseeing agricultural product approvals." },
  { term: "EAC", definition: "East African Community - 8 partner states: Burundi, DRC, Kenya, Rwanda, Somalia, South Sudan, Tanzania, Uganda. Uganda approval creates precedent for regional rollout." },
  { term: "HISAGEN USA", definition: "Parent entity handling funding, IP, and global strategy (Keir - CEO, Scott - COO)." },
  { term: "HISAGEN Africa", definition: "Operating entity for on-ground implementation and regulatory compliance (Daniel - CEO Africa, Israel - COO Africa)." },
];

const stage1Objectives = [
  "Confirm pilot evidence and MRV pathway.",
  "Clarify legal and governance structure (carbon rights, land tenure).",
  "Draft unit economics and the Stage 1 funding ask.",
  "Define the target funder segment for Stage 1 capital.",
];

const stage1Outputs = [
  "Evidence summary and data table (pilot).",
  "Stage 1 funding brief (1-2 pages).",
  "Updated concept note with filled gaps.",
  "Funder shortlist with eligibility notes.",
];

const decisionGates = [
  "Do we have enough evidence to approach funders?",
  "Is the funding ask sized to Stage 1 reality?",
  "Do legal and governance risks have a mitigation path?",
];

const evidenceOnHand = [
  "Phase 1 Maize Trial completed (v. promising results).",
  "NARO independent trials active in 5 zones (results pending).",
  "Regulatory pathway with UNBS identified for commercial entry.",
];

const stage1Gaps = [
  "Verified pilot metrics and outcomes summary.",
  "Unit economics and 3-5 year financial model.",
  "Carbon rights clarity and farmer agreement structure.",
  "Clear program narrative and theory of change.",
];

const stage2Unlock = [
  "MRV operational and verifiable.",
  "First credits issued or pathway confirmed with timelines.",
  "Delivery partners and operating capacity in place.",
];

export default function Stage1Page() {
  return (
    <div className="mx-auto max-w-5xl text-ink font-sans">
      <StageBreadcrumb
        stage="Stage 1"
        trail={[
          { label: "Agri-Carbon Program", href: "/program" },
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60">
          Stage 1: Incubation
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Incubation Brief & Execution Plan
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "Proving the pilot, clarifying foundations, and defining the right Stage 1 capital ask."
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold text-slate">
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider">Stage: Incubation</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider">Timeline: Years 1-3</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider">Focus: Uganda pilot</span>
          <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-wider text-primary">Readiness: 13/25</span>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-secondary/20 bg-secondary/5 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold text-secondary">Strategic Context: Laying the Foundations</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              The incubation stage is the most fragile period in a project’s lifecycle. Projects are not yet commercially viable
              and must rely on non-repayable funding such as grants, philanthropy, or official development assistance.
              At this stage, risks are high and private capital is scarce.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate italic border-l-2 border-secondary/20 pl-4">
              The focus is on establishing project foundations: area definition, feasibility assessments, carbon methodology
              selection, stakeholder engagement, and clarifying land/carbon tenure rights.
            </p>
          </div>
          <div className="md:w-2/5 rounded-xl bg-white p-6 border border-mist">
            <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">De-risking Milestones</h3>
            <ul className="space-y-3">
              {[
                "Project proponent & partners identified",
                "Stakeholders mapped & consultations conducted",
                "Early government endorsement secured",
                "Remote sensing & carbon potential curve",
                "Preliminary budget prepared"
              ].map((milestone) => (
                <li key={milestone} className="flex gap-3 text-[11px] text-slate leading-tight font-medium">
                  <span className="text-emerald-500 font-black">/</span>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {snapshot.map((item) => (
          <div key={item.title} className="rounded-xl border border-mist bg-white p-6 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2">{item.title}</p>
            <p className="text-sm text-slate leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Uganda Opportunity Section */}
      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Why Uganda</h2>
        <h3 className="text-xl font-bold text-secondary mb-4">The East Africa Opportunity</h3>
        <p className="text-sm text-slate italic mb-6 max-w-2xl">{ugandaOpportunity.headline}</p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {ugandaOpportunity.points.map((point, idx) => (
            <div key={idx} className="flex gap-3 p-3 rounded-lg bg-white border border-mist">
              <span className="text-primary font-bold">→</span>
              <span className="text-xs text-slate">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Uganda Trials Section */}
      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-2">Field Validation</h2>
          <h3 className="text-xl font-bold text-secondary">Uganda NARO Trials</h3>
          <p className="mt-2 text-sm text-slate max-w-xl">
            Independent validation conducted by Uganda's National Agricultural Research Organization across 4 agro-ecological zones.
          </p>
        </div>

        {/* Trial Timeline */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {ugandaTrials.timeline.map((item, idx) => (
            <div key={item.phase} className="relative p-5 rounded-xl border border-mist bg-white">
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-secondary text-parchment text-[9px] font-bold uppercase tracking-widest rounded">
                {item.period}
              </div>
              <h4 className="text-sm font-bold text-secondary mt-2 mb-2">{item.phase}</h4>
              <p className="text-xs text-slate">{item.detail}</p>
              {idx < ugandaTrials.timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 text-mist text-lg">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Crops & Regions Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 rounded-xl border border-mist bg-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Crops Tested</p>
            <div className="grid grid-cols-2 gap-3">
              {ugandaTrials.crops.map((crop) => (
                <div key={crop.name} className="flex items-center gap-3 p-3 rounded-lg bg-parchment/30 border border-mist">
                  <span className="text-2xl">{crop.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-secondary">{crop.name}</p>
                    <p className="text-[9px] text-emerald-600 font-bold uppercase">{crop.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-xl border border-mist bg-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Trial Regions</p>
            <div className="grid grid-cols-2 gap-3">
              {ugandaTrials.regions.map((region) => (
                <div key={region} className="p-3 rounded-lg bg-parchment/30 border border-mist text-center">
                  <p className="text-xs font-bold text-secondary">{region}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <p className="text-xs text-emerald-700 font-medium text-center">{ugandaTrials.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals Timeline Section */}
      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-2">Regulatory Pathway</h2>
          <h3 className="text-xl font-bold text-secondary">Q1 2026 Approvals Timeline</h3>
          <p className="mt-2 text-sm text-slate max-w-xl">
            Coordinated approval process through UNBS, NARO, and MAAIF for market entry.
          </p>
        </div>

        <div className="rounded-xl border border-mist overflow-hidden">
          <div className="grid gap-px bg-mist">
            {approvalsTimeline.map((item) => (
              <div
                key={item.step}
                className={`flex items-center gap-4 p-4 ${
                  item.status === 'complete' ? 'bg-emerald-50' :
                  item.status === 'current' ? 'bg-amber-50' : 'bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.status === 'complete' ? 'bg-emerald-500 text-white' :
                  item.status === 'current' ? 'bg-amber-500 text-white' : 'bg-mist text-secondary/50'
                }`}>
                  {item.status === 'complete' ? '✓' : item.step}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-secondary">{item.milestone}</p>
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  item.status === 'complete' ? 'bg-emerald-100 text-emerald-700' :
                  item.status === 'current' ? 'bg-amber-100 text-amber-700' : 'bg-mist text-slate'
                }`}>
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Stage 1 Objectives</p>
          <ul className="space-y-3">
            {stage1Objectives.map((item) => (
              <li key={item} className="text-xs text-slate flex gap-3">
                <span className="text-secondary/30 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Stage 1 Required Outputs</p>
          <ul className="space-y-3">
            {stage1Outputs.map((item) => (
              <li key={item} className="text-xs text-slate flex gap-3">
                <span className="text-emerald-500/50 font-bold">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Evidence & Gaps</p>
          <div className="space-y-4">
            <div>
              <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mb-2">On Hand</p>
              <ul className="space-y-2">
                {evidenceOnHand.map((item) => (
                  <li key={item} className="text-[11px] text-slate leading-tight">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-mist/30">
              <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-2">Critical Gaps</p>
              <ul className="space-y-2">
                {stage1Gaps.map((item) => (
                  <li key={item} className="text-[11px] text-slate leading-tight">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6 shadow-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4">Capital Fit & Strategy</p>
          <p className="text-xs text-slate leading-relaxed">
            Stage 1 utilizes <strong>Concessional Capital</strong> (Grants, Philanthropy, Sweat Equity).
            Funding focuses on land rights, technical baselines, and community Free, Prior and Informed Consent (FPIC).
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[9px] font-bold text-slate">
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-emerald-700 uppercase">Concessional</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase">Grant-ready</span>
            <span className="rounded-full border border-mist bg-white px-3 py-1 uppercase tracking-tighter">Accelerators</span>
          </div>
          <div className="mt-6 pt-4 border-t border-mist/30">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-3">Decision Gates</p>
            <ul className="space-y-2">
              {decisionGates.map((gate) => (
                <li key={gate} className="text-[11px] text-slate italic flex gap-2">
                  <span className="text-secondary/20">?</span>
                  {gate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-parchment/30 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-2">Transition Matrix</p>
            <h2 className="text-xl font-bold text-secondary">Stage 2 Unlock Criteria</h2>
            <p className="mt-2 text-sm text-slate max-w-xl">
              To move from Incubation to Implementation, the following "Gravity Gates" must be cleared to satisfy Stage 2 pre-financing partners.
            </p>
          </div>
          <ul className="grid gap-3 flex-1">
            {stage2Unlock.map((item) => (
              <li key={item} className="p-3 rounded-lg bg-white border border-mist text-xs font-bold text-secondary uppercase tracking-wider text-center group hover:border-primary/40 transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="mt-12 rounded-xl border border-mist bg-parchment/20 p-8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 mb-2">Reference</h2>
        <h3 className="text-xl font-bold text-secondary mb-6">Key Terms & Entities</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {glossary.map((item) => (
            <div key={item.term} className="p-4 rounded-lg bg-white border border-mist">
              <p className="text-sm font-bold text-primary mb-1">{item.term}</p>
              <p className="text-xs text-slate leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2 mb-20">
        {[
          {
            title: "Evidence Vault",
            description: "View pilot outcomes and source materials.",
            href: "/evidence",
          },
          {
            title: "Capital Continuum",
            description: "Deep dive into the 4-stage funding framework.",
            href: "/funding-roadmap/capital-continuum",
          }
        ].map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="rounded-xl border border-mist bg-white p-6 transition hover:border-primary/50 group"
          >
            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest group-hover:text-primary">{card.title}</h3>
            <p className="mt-2 text-xs text-slate leading-relaxed">{card.description}</p>
          </a>
        ))}
      </section>
    </div>
  );
}
