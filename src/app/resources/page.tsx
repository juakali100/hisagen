import StageBreadcrumb from "../../components/StageBreadcrumb";

const resources = [
  {
    title: "Core Narrative",
    description: "One-page summaries and the project story in its current form.",
    items: [
      "Concept Note (v0)",
      "Executive Summary draft",
      "Stage 1 Brief (Incubation)",
    ],
  },
  {
    title: "Evidence & Data",
    description: "Pilot evidence, trial reports, and outcome metrics (in progress).",
    items: [
      "Uganda trial reports",
      "Pilot metrics table (to compile)",
      "Farmer adoption and engagement notes",
    ],
  },
  {
    title: "Capital Continuum",
    description: "Stage framing and readiness assessment materials.",
    items: [
      "Capital Continuum playbook",
      "HISAGEN 5-Pillar Investment Readiness Assessment",
      "Funding lifecycle alignment",
    ],
  },
  {
    title: "Grant Work",
    description: "Draft grant materials and supporting matrices.",
    items: ["Grant Proposal (v0)", "Funder Alignment Matrix", "Grant playbook notes"],
  },
  {
    title: "Partnerships",
    description: "Key partners, roles, and collaboration inputs.",
    items: [
      "Locus AG partnership materials",
      "Uganda NARO collaboration notes",
      "3Degrees carbon pathway notes",
    ],
  },
  {
    title: "Comms & Updates",
    description: "Timeline and communications for traceability.",
    items: ["Email threads", "WhatsApp updates", "Comms summary page"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Resources"
        trail={[{ label: "Overview", href: "/" }, { label: "Resources" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Complete reference library for HISAGEN
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This is the master index for all source materials, drafts, and working notes. Each
          section corresponds to a Stage 1 deliverable or evidence requirement.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {resources.map((section) => (
          <div key={section.title} className="rounded-xl border border-mist bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate">{section.title}</p>
            <p className="mt-3 text-sm text-slate">{section.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Need Something Specific?</p>
        <p className="mt-3 text-sm text-slate">
          If a document is missing, add it to the appropriate section above and note the gap in
          the Stage 1 brief. This keeps the funding pathway aligned to real evidence.
        </p>
      </section>
    </div>
  );
}
