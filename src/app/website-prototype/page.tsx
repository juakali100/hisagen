import StageBreadcrumb from "../../components/StageBreadcrumb";
import { stages } from "../capital-continuum/variables";

const prototypeSections = [
  {
    label: "Company story",
    description:
      "Explain HISAGEN’s organisational mission (nature-plus-tech carbon stewardship) and position the portal, pilot, and partners as part of a larger entity.",
    purpose: "Frame HISAGEN as a standalone company with strategy, values, and leadership.",
  },
  {
    label: "Uganda pilot spotlight",
    description:
      "Show the Uganda project as the flagship case—its objectives, community partners, and the way it fits into the broader capital strategy.",
    purpose: "Give the pilot a front-and-centre presence while clarifying that it is the first of many initiatives.",
  },
  {
    label: "Services & programs",
    description:
      "Outline the delivery model (grant writing, carbon finance structuring, co-design, and community engagement) with links to execution artifacts.",
    purpose: "Tell visitors how HISAGEN works with funders, landowners, and investors.",
  },
  {
    label: "Partners & resources",
    description:
      "List the collaborators, attach the comms/attachment registry, and signpost the portal’s evidence pages so transparency is maintained.",
    purpose: "Surface provenance for every claim and keep the documentation accessible.",
  },
  {
    label: "Updates & next steps",
    description:
      "Turn portal updates into a live newsroom or progress journal that explains the next funding asks and milestones.",
    purpose: "Make the site feel active without tying every message strictly to the continuum.",
  },
];

const referenceAssets = [
  {
    title: "Stage 1 Brief",
    detail: "Execution plan, de-risking milestones, and capital fit.",
    href: "/stage-1",
  },
  {
    title: "Resources Timeline",
    detail: "Chronological comms, attachments, and discovery summaries.",
    href: "/resources",
  },
  {
    title: "Program Strategy",
    detail: "Operating architecture and partner ecosystem.",
    href: "/program",
  },
];

export default function WebsitePrototypePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Site Prototype"
        trail={[{ label: "Overview", href: "/" }, { label: "Website Prototype" }]}
      />

      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          HISAGEN Draft Web Experience
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary">
          Showcase HISAGEN as a company, with the Uganda pilot as the first proof point.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Build a lightweight marketing site that tells the organisational story, highlights the capital strategy where relevant,
          and gives visitors a sense of the work underway in Uganda before layering in additional pilots.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Prototype sections</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {prototypeSections.map((section) => (
            <div key={section.label} className="rounded-xl border border-mist/60 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">{section.label}</p>
              <p className="mt-2 text-sm text-slate">{section.description}</p>
              <p className="mt-3 text-xs font-semibold text-secondary">{section.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Pilot spotlight</p>
        <h2 className="mt-2 text-2xl font-semibold text-secondary">Uganda as the flagship HISAGEN project</h2>
        <p className="mt-2 text-sm text-slate">
          Position the Uganda pilot as the first live manifestation of the company’s nature-based carbon thesis.
          Outline key partners (Locus AG, carbon rights stakeholders), pilot objectives (maize trials, community mapping, financial model),
          and the ask (grant funding to finalize the proof of concept).
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate">
          <li>Project stage: Incubation with managed pilots and community engagement under the Capital Continuum Stage 1 focus.</li>
          <li>Deliverables: carbon rights clarity, MRV roadmap, pilot data (maize trials) and capital structure narrative.</li>
          <li>Next move: translate this story into a proposal page, dedicated resource downloads, and a donor-friendly narrative.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum anchors (supporting context)</p>
        <div className="grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <div key={stage.title} className="rounded-xl border border-mist p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">{stage.title}</p>
              <p className="mt-2 text-sm text-slate">{stage.focus}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate">Capital fit</p>
              <p className="text-sm text-slate">{stage.capital}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate">
                {stage.milestones.map((milestone) => (
                  <li key={milestone}>{milestone}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {referenceAssets.map((asset) => (
          <div key={asset.title} className="rounded-xl border border-mist bg-white p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">{asset.title}</p>
            <p className="mt-2 text-sm text-slate">{asset.detail}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-secondary">
              Link
            </p>
            <p className="text-sm text-secondary">
              <a href={asset.href} className="underline-offset-4 hover:underline">
                View page
              </a>
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Next steps for the prototype</p>
        <ol className="mt-4 space-y-2 text-sm text-slate">
          <li>Develop dedicated pages for the hero/company story, Uganda pilot, and service menu so the website feels like a standalone destination.</li>
          <li>Use the portal’s resources to keep partner information, attachments, and communications up to date without duplicating content.</li>
          <li>Offer clear CTAs for funders (grant pipeline) and partners (contact, collaboration brief) so the site supports next funding asks.</li>
        </ol>
      </section>
    </div>
  );
}
