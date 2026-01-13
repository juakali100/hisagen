import StageBreadcrumb from "../../components/StageBreadcrumb";

const programHighlights = [
  {
    title: "Mission",
    body: "Unlock sustainable finance for working landscapes by combining applied agriculture, high-integrity carbon pathways, and Indigenous stewardship.",
  },
  {
    title: "Scope",
    body: "The HISAGEN Agri-Carbon Program connects pilots, partnerships, and capital partners under a single operating model that prioritises learning, replicability, and community agency.",
  },
  {
    title: "Governance",
    body: "Core team + advisors coordinate the pro forma, compliance, and partner engagement. The portal you see here is the internal instance that tracks decisions, evidence, and next actions.",
  },
];

const programStarts = [
  "HISAGEN Uganda Pilot (Stage 1) — proving the agriculture-to-carbon thesis and layering in Locus AG’s Carbon Now expertise.",
  "Future landscapes to be mapped once the Uganda proof-of-concept demonstrates robust unit economics and partner readiness.",
];

export default function ProgramPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Program" trail={[{ label: "HISAGEN Agri-Carbon Program" }]} />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Program</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary">
          HISAGEN Agri-Carbon Program
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This is the organisational level of the portal. Each pilot (Uganda, future landscapes) reports into this program structure, which ensures the capital continuum framework and partner intelligence scale across projects.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {programHighlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-xl border border-mist bg-white p-6 text-sm text-slate"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">{highlight.title}</p>
            <p className="mt-2">{highlight.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">Pilot ladder</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {programStarts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate">
          The Capital Continuum model is applied at the project level (e.g., HISAGEN Uganda Pilot) so each pilot can map its own milestones, pillars, and funding asks while the program keeps an overseeing narrative and replicability plan.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">Next steps</p>
        <ol className="mt-4 space-y-2 text-sm text-slate">
          <li>Track each pilot’s progress through the stage pages (Stage 1–4) so the Capital Continuum is always current.</li>
          <li>Use this program page as the launchpad for future project dossiers and partner directories.</li>
          <li>Consider gating sensitive sections once we bring additional stakeholders into the pilot review.</li>
        </ol>
      </section>
    </div>
  );
}
