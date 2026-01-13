import StageBreadcrumb from "../../../components/StageBreadcrumb";

const pilotFocus = [
  { label: "Location", value: "Uganda" },
  { label: "Pilot name", value: "HISAGEN Uganda Pilot" },
  { label: "Sector", value: "Agroforestry & agriculture" },
  { label: "Purpose", value: "Proof end-to-end agri-carbon delivery" },
];

const pilotNotes = [
  "Applying the Capital Continuum at the project level keeps funding asks and risks stage-specific.",
  "Stage 1 focuses on incubation: pilot data, carbon rights, and grant-proof narrative.",
  "Stage 2+ pages will log implementation, stabilization, and maturity as the pilot matures.",
];

export default function PilotPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="HISAGEN Uganda Pilot"
        trail={[
          { label: "HISAGEN Agri-Carbon Program", href: "/program" },
          { label: "HISAGEN Uganda Pilot" },
        ]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Project
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary">HISAGEN Uganda Pilot</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          The pilot tests the HISAGEN Agri-Carbon Program thesis—demonstrating how agricultural partners
          can deliver carbon outcomes, how blended finance closes the gap, and how early-stage grants give
          the team runway to validate the business case.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {pilotFocus.map((item) => (
          <div key={item.label} className="rounded-xl border border-mist bg-white p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">{item.label}</p>
            <p className="mt-2 text-sm text-slate">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">Pilot notes</p>
        <ul className="mt-4 space-y-2 text-sm text-slate">
          {pilotNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate">
          Capital Continuum framework cards and stage-specific resources live in their respective pages—but each project page like this is the narrative front door for funders and partners.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-secondary">Related links</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          <a href="/funding-roadmap/capital-continuum" className="underline-offset-4 hover:underline">
            Capital Continuum landing
          </a>
          <a href="/stage-1" className="underline-offset-4 hover:underline">
            Stage 1 details
          </a>
          <a href="/resources" className="underline-offset-4 hover:underline">
            Resources
          </a>
        </div>
      </section>
    </div>
  );
}
