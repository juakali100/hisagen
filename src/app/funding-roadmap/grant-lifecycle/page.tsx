import Link from "next/link";
import StageBreadcrumb from "../../../components/StageBreadcrumb";

type PhaseStatus = "active" | "partial" | "sparse" | "early" | "not-started" | "future";

interface Phase {
  number: string;
  title: string;
  status: PhaseStatus;
  statusLabel: string;
  description: string;
  evidence: string[];
  gaps: string[];
  nextStep: string;
}

const phases: Phase[] = [
  {
    number: "01",
    title: "Vision / Strategy / Program Design",
    status: "partial",
    statusLabel: "Light",
    description: "Define theory of change, program goals, MEL outline, and multi-year targets.",
    evidence: [
      "Early concept direction from Keir (emails, briefs)",
      "Partner context established (Locus AG, Uganda trials, NARO)",
    ],
    gaps: [
      "Clear theory of change document",
      "Program goals and MEL outline",
      "Multi-year targets",
    ],
    nextStep: "Dedicated strategy session to formalize program narrative and outcomes.",
  },
  {
    number: "02",
    title: "Landscape Scanning & Prospect Mapping",
    status: "partial",
    statusLabel: "Partial",
    description: "Identify and score potential funders by fit, eligibility, size, competitiveness, and timeline.",
    evidence: [
      "Funder Alignment Matrix (first pass, top 6 priority funders)",
      "Keir's identified prospects reviewed",
    ],
    gaps: [
      "Broader landscape scan (100+ funders)",
      "Scored prospect pipeline",
    ],
    nextStep: "Expand scan and score by fit, eligibility, size, competitiveness, timeline.",
  },
  {
    number: "03",
    title: "Donor & Sponsor Engagement",
    status: "sparse",
    statusLabel: "Sparse",
    description: "Build relationships with target funders through warm intros and structured outreach.",
    evidence: [
      "Noted potential outreach (e.g., MacKenzie Scott positioning)",
    ],
    gaps: [
      "Outreach plan",
      "Warm intro map",
      "Engagement cadence",
    ],
    nextStep: "Build relationship plan and decide who approaches which contacts.",
  },
  {
    number: "04",
    title: "Due Diligence & Eligibility",
    status: "early",
    statusLabel: "Early",
    description: "Verify eligibility, build compliance matrices, and establish go/no-go criteria per funder.",
    evidence: [
      "v0 proposal gaps signal missing evidence and eligibility questions",
    ],
    gaps: [
      "Compliance matrix",
      "Eligibility checks per funder",
      "Go/no-go criteria gates",
    ],
    nextStep: "Build light compliance matrix and add explicit go/no-go gates.",
  },
  {
    number: "05",
    title: "Proposal Development & Submission",
    status: "active",
    statusLabel: "Active",
    description: "Develop and submit proposals following structured playbook: Executive Summary, Statement of Need, Project Description, MEL, Sustainability, Budget.",
    evidence: [
      "Concept Note (one-page summary)",
      "v0 Grant Proposal (10-section base narrative)",
      "Funder Alignment Matrix (tailoring guidance)",
    ],
    gaps: [
      "Logic model",
      "Budget narrative",
      "Evidence inserts",
    ],
    nextStep: "Apply proposal framework rigorously using playbook structure.",
  },
  {
    number: "06",
    title: "Contracting & Handover",
    status: "not-started",
    statusLabel: "Not Started",
    description: "Negotiate terms, sign agreements, and hand over to implementation team.",
    evidence: [],
    gaps: [
      "Award pack template",
      "Handover checklist",
      "Contract negotiation playbook",
    ],
    nextStep: "Prepare award pack template and handover checklist.",
  },
  {
    number: "07",
    title: "Project Initiation & Grant Setup",
    status: "not-started",
    statusLabel: "Not Started",
    description: "Set up reporting calendar, assign owner, establish budget tracking systems.",
    evidence: [],
    gaps: [
      "Reporting calendar template",
      "Owner assignment matrix",
      "Budget tracking system",
    ],
    nextStep: "Define reporting calendar, assign owner, set up budget tracking.",
  },
  {
    number: "08",
    title: "Delivery Prep & Project Planning",
    status: "future",
    statusLabel: "Future",
    description: "Align with formal project management method (PRINCE2 or PMP), develop workplan and risk register.",
    evidence: [],
    gaps: [
      "Implementation workplan",
      "Risk register",
      "PM methodology alignment",
    ],
    nextStep: "Develop implementation workplan and risk register using PM framework.",
  },
  {
    number: "09",
    title: "Implementation & Delivery",
    status: "future",
    statusLabel: "Future",
    description: "Execute grant-funded activities with standard delivery and monitoring cadence.",
    evidence: [],
    gaps: [
      "Delivery cadence templates",
      "Monitoring protocols",
      "Issue escalation process",
    ],
    nextStep: "Build standard delivery and monitoring cadence for grant-funded programs.",
  },
  {
    number: "10",
    title: "Post-Project Follow-up & Reporting",
    status: "future",
    statusLabel: "Future",
    description: "Complete funder reports, document outcomes, and position for renewal.",
    evidence: [],
    gaps: [
      "Reporting templates",
      "Outcomes narrative framework",
      "Renewal positioning strategy",
    ],
    nextStep: "Create reporting templates, outcomes narrative, and renewal positioning.",
  },
  {
    number: "11",
    title: "Closeout & Reflection",
    status: "future",
    statusLabel: "Future",
    description: "Complete closeout, document lessons learned, and refresh pipeline for next cycle.",
    evidence: [],
    gaps: [
      "Closeout checklist",
      "Lessons learned template",
      "Pipeline refresh process",
    ],
    nextStep: "Develop closeout checklist, lessons learned, and pipeline refresh.",
  },
];

const getStatusColor = (status: PhaseStatus) => {
  switch (status) {
    case "active":
      return { bg: "bg-emerald-50", border: "border-emerald-500/30", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" };
    case "partial":
      return { bg: "bg-amber-50", border: "border-amber-500/30", text: "text-amber-700", badge: "bg-amber-100 text-amber-800" };
    case "sparse":
      return { bg: "bg-orange-50", border: "border-orange-500/30", text: "text-orange-700", badge: "bg-orange-100 text-orange-800" };
    case "early":
      return { bg: "bg-sky-50", border: "border-sky-500/30", text: "text-sky-700", badge: "bg-sky-100 text-sky-800" };
    case "not-started":
      return { bg: "bg-slate-50", border: "border-slate-300", text: "text-slate-600", badge: "bg-slate-200 text-slate-700" };
    case "future":
      return { bg: "bg-white", border: "border-mist", text: "text-slate-400", badge: "bg-slate-100 text-slate-500" };
  }
};

const currentDeliverables = [
  { name: "Concept Note", phase: "05", description: "One-page project summary" },
  { name: "v0 Grant Proposal", phase: "05", description: "10-section base narrative" },
  { name: "Funder Alignment Matrix", phase: "02 & 04", description: "Prospect mapping + due diligence" },
];

export default function GrantLifecyclePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Grant Lifecycle"
        trail={[
          { label: "Capital Continuum", href: "/funding-roadmap/capital-continuum" },
          { label: "Grant Delivery Methodology" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Funding Roadmap
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Grant Writing & Delivery Lifecycle
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          An 11-phase methodology for grant writing delivery - from vision and strategy through
          to closeout and reflection. Maps HISAGEN work to each phase with gaps, evidence, and next steps.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-slate/60 font-medium">Scope:</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">
            Grants, Accelerators, Venture Capital, Strategic Philanthropy
          </span>
        </div>
      </section>

      {/* Status Legend */}
      <section className="mt-8 p-6 rounded-xl border border-mist bg-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Phase Status Legend</p>
        <div className="flex flex-wrap gap-4">
          {[
            { status: "active" as PhaseStatus, label: "Active", desc: "Foundation work underway" },
            { status: "partial" as PhaseStatus, label: "Partial", desc: "Some evidence, gaps remain" },
            { status: "sparse" as PhaseStatus, label: "Sparse", desc: "Minimal activity" },
            { status: "early" as PhaseStatus, label: "Early", desc: "Just starting" },
            { status: "not-started" as PhaseStatus, label: "Not Started", desc: "Awaiting earlier phases" },
            { status: "future" as PhaseStatus, label: "Future", desc: "Post-award phases" },
          ].map((item) => {
            const colors = getStatusColor(item.status);
            return (
              <div key={item.status} className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${colors.badge}`}>
                  {item.label}
                </span>
                <span className="text-[10px] text-slate/60">{item.desc}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Position */}
      <section className="mt-8 p-6 rounded-xl border-2 border-emerald-500/30 bg-emerald-50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center justify-center shrink-0">
            <span className="text-emerald-800 font-bold text-lg">05</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-1">Current Focus</p>
            <h2 className="text-xl font-bold text-emerald-900">Phase 05: Proposal Development & Submission</h2>
            <p className="mt-2 text-sm text-emerald-800">
              HISAGEN has Concept Note and v0 Grant Proposal drafted. Focus is on deepening proposal structure,
              adding logic model, budget narrative, and evidence inserts.
            </p>
          </div>
        </div>
      </section>

      {/* Phase Cards */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">11-Phase Lifecycle</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="space-y-4">
          {phases.map((phase) => {
            const colors = getStatusColor(phase.status);
            return (
              <div
                key={phase.number}
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 transition-all hover:shadow-md`}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Phase Header */}
                  <div className="lg:w-80 shrink-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        phase.status === "active" ? "bg-emerald-600 text-white" :
                        phase.status === "partial" ? "bg-amber-500 text-white" :
                        phase.status === "sparse" ? "bg-orange-500 text-white" :
                        phase.status === "early" ? "bg-sky-500 text-white" :
                        "bg-slate-300 text-slate-600"
                      }`}>
                        {phase.number}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-secondary">{phase.title}</h3>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${colors.badge}`}>
                          {phase.statusLabel}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate leading-relaxed">{phase.description}</p>
                  </div>

                  {/* Evidence & Gaps */}
                  <div className="flex-1 grid gap-4 md:grid-cols-2">
                    {/* Evidence */}
                    <div className="p-4 rounded-xl bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Evidence So Far</p>
                      {phase.evidence.length > 0 ? (
                        <ul className="space-y-1">
                          {phase.evidence.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-slate">
                              <span className="text-emerald-500 shrink-0">+</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-slate/50 italic">No evidence yet</p>
                      )}
                    </div>

                    {/* Gaps */}
                    <div className="p-4 rounded-xl bg-white/60 border border-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">Gaps</p>
                      <ul className="space-y-1">
                        {phase.gaps.map((gap, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-slate">
                            <span className="text-amber-500 shrink-0">-</span>
                            <span>{gap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Next Step */}
                  <div className="lg:w-64 shrink-0">
                    <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10 h-full">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">Next Step</p>
                      <p className="text-xs text-secondary leading-relaxed">{phase.nextStep}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Deliverables */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Current HISAGEN Deliverables</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {currentDeliverables.map((item) => (
            <div key={item.name} className="p-6 rounded-xl border border-mist bg-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                  Phase {item.phase}
                </span>
              </div>
              <h3 className="text-base font-bold text-secondary">{item.name}</h3>
              <p className="mt-2 text-xs text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Next Build */}
      <section className="mt-16 p-8 rounded-2xl bg-secondary text-parchment">
        <h2 className="text-2xl font-bold mb-6">Recommended Next Build (Repeatable)</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { step: 1, action: "Strategy workshop to close Phase 01 gaps" },
            { step: 2, action: "Expanded prospect scan + scoring (Phase 02)" },
            { step: 3, action: "Compliance matrix + go/no-go gate (Phase 04)" },
            { step: 4, action: "Proposal deepening using playbook structure (Phase 05)" },
            { step: 5, action: "Define Phase 08-11 delivery standards using PM framework" },
          ].map((item) => (
            <div key={item.step} className="p-4 rounded-xl bg-white/10 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <p className="text-sm">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">Related Resources</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Link
            href="/stage-1/funding"
            className="group p-6 rounded-xl border-2 border-emerald-500/20 bg-white hover:border-emerald-500 hover:shadow-xl transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Current Focus</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-emerald-700 transition-colors">
              Stage 1 Funding Hub
            </h3>
          </Link>

          <Link
            href="/stage-1/funding/v0-grant-proposal"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 05</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              v0 Grant Proposal
            </h3>
          </Link>

          <Link
            href="/stage-1/funding/v0-concept-note"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 05</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Concept Note
            </h3>
          </Link>

          <Link
            href="/funding-roadmap/capital-continuum"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Framework</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Capital Continuum
            </h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
