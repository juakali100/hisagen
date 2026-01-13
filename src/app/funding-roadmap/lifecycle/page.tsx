const phases = [
  {
    title: "Phase 01: Vision / Strategy / Program Design",
    status: "Early",
    summary: "Initial direction captured, needs structured strategy session.",
    done: [
      "Reviewed Keir’s early briefs and partner context (Locus AG, Uganda trials).",
    ],
    gaps: [
      "Clear theory of change and program goals.",
      "Defined MEL framework and multi-year funding targets.",
      "Positioning across Capital Continuum readiness stages.",
    ],
    next: "Run a strategy workshop to formalize program narrative, outcomes, and readiness stage.",
  },
  {
    title: "Phase 02: Landscape Scanning and Prospect Mapping",
    status: "Partial",
    summary: "Reviewed identified prospects; broader scan still required.",
    done: [
      "Funder Alignment Matrix created for top 6 candidates.",
    ],
    gaps: [
      "Broader landscape scan and scoring framework.",
      "Diversified pipeline with weighted probabilities.",
    ],
    next: "Expand scan and score prospects by fit, eligibility, size, and timeline.",
  },
  {
    title: "Phase 03: Donor and Sponsor Engagement",
    status: "Early",
    summary: "Light outreach ideas noted; engagement plan not built.",
    done: [
      "Potential outreach noted (e.g., MacKenzie Scott positioning).",
    ],
    gaps: [
      "Warm intro map and outreach cadence.",
      "Defined sponsor engagement sequence.",
    ],
    next: "Build a relationship plan and assign outreach ownership.",
  },
  {
    title: "Phase 04: Due Diligence and Eligibility",
    status: "Early",
    summary: "Gaps identified; formal eligibility checks not completed.",
    done: [
      "v0 proposal flags missing data and risk areas.",
    ],
    gaps: [
      "Compliance matrix and eligibility checks per funder.",
      "Go/no-go decision gates.",
    ],
    next: "Draft a compliance matrix and add explicit go/no-go criteria.",
  },
  {
    title: "Phase 05: Proposal Development and Submission",
    status: "Active",
    summary: "v0 proposal package complete; requires evidence and tailoring.",
    done: [
      "Concept Note drafted.",
      "v0 Grant Proposal drafted (10-section base narrative).",
      "Funder Alignment Matrix produced.",
    ],
    gaps: [
      "Logic model and budget narrative.",
      "Verified pilot evidence and unit economics.",
    ],
    next: "Deepen proposal using playbook structure and evidence inserts.",
  },
  {
    title: "Phase 06: Contracting and Handover",
    status: "Future",
    summary: "Not started; needs award pack and handover protocol.",
    done: [],
    gaps: [
      "Award terms summary and compliance obligations checklist.",
      "Handover pack template.",
    ],
    next: "Prepare award pack and handover checklist templates.",
  },
  {
    title: "Phase 07: Project Initiation and Grant Setup",
    status: "Future",
    summary: "Not started; requires reporting and tracking setup.",
    done: [],
    gaps: [
      "Reporting calendar and project tracking system.",
      "Ownership and compliance roles.",
    ],
    next: "Define reporting cadence and assign grant management roles.",
  },
  {
    title: "Phase 08: Delivery Prep and Project Planning",
    status: "Future",
    summary: "Future build; align with formal PM approach.",
    done: [],
    gaps: [
      "Implementation workplan and risk register.",
      "PRINCE2/PMP-aligned project governance.",
    ],
    next: "Draft a delivery prep methodology aligned to PM standards.",
  },
  {
    title: "Phase 09: Implementation and Delivery",
    status: "Future",
    summary: "Execution cadence and outcome tracking to be built.",
    done: [],
    gaps: [
      "Delivery cadence and outcome tracking templates.",
      "Change management and amendment workflow.",
    ],
    next: "Define delivery playbook for grant-funded implementation.",
  },
  {
    title: "Phase 10: Post-Project Follow-up and Reporting",
    status: "Future",
    summary: "Reporting and renewal positioning not yet defined.",
    done: [],
    gaps: [
      "Reporting templates and outcomes narrative guidance.",
      "Renewal positioning plan.",
    ],
    next: "Build reporting framework and renewal positioning checklist.",
  },
  {
    title: "Phase 11: Closeout and Reflection",
    status: "Future",
    summary: "Closeout workflow not yet built.",
    done: [],
    gaps: [
      "Closeout checklist and lessons learned capture.",
      "Pipeline refresh and knowledge capture.",
    ],
    next: "Draft closeout checklist and learning capture routine.",
  },
];

const statusStyles: Record<string, string> = {
  Early: "bg-amber-100 text-amber-800",
  Partial: "bg-blue-100 text-blue-800",
  Active: "bg-green-100 text-green-800",
  Future: "bg-slate-200 text-slate-700",
};

export default function FundingLifecyclePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Funding Roadmap
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Funding Lifecycle Alignment
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          A single view of the full funding lifecycle, showing what is complete, what is
          underway, and what comes next. Expand each phase to see current notes and gaps.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Long-Term Success Principles</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          <li>Anchor the program in ecological, social, and economic value beyond carbon.</li>
          <li>Design governance that can evolve over multi-decade horizons.</li>
          <li>Build adaptive management and iteration into delivery plans.</li>
          <li>Center community participation and fair benefit-sharing.</li>
          <li>Sequence patient capital from early risk to long-term investment.</li>
          <li>Invest in trust-based partnerships and local presence.</li>
        </ul>
        <p className="mt-4 text-xs text-slate">
          Source context: Edit Kiss, "Designing for long-term success in nature-based solutions"
          (Jan 13, 2026).
        </p>
      </section>

      <section className="mt-12 space-y-4">
        {phases.map((phase) => (
          <details
            key={phase.title}
            className="group rounded-xl border border-mist bg-white px-6 py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-secondary">{phase.title}</h2>
                <p className="text-sm text-slate">{phase.summary}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[phase.status]}`}>
                {phase.status}
              </span>
            </summary>
            <div className="mt-4 grid gap-4 text-sm text-slate md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Done</p>
                {phase.done.length > 0 ? (
                  <ul className="mt-2 space-y-1">
                    {phase.done.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-slate">Not started yet.</p>
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Gaps</p>
                <ul className="mt-2 space-y-1">
                  {phase.gaps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Next Step</p>
                <p className="mt-2">{phase.next}</p>
              </div>
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
