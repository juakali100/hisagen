import StageBreadcrumb from "../../components/StageBreadcrumb";
import { stages } from "../funding-roadmap/capital-continuum/variables";

const prototypeSections = [
  {
    label: "Hero & mission",
    description:
      "Introduce HISAGEN, the pilot focus on Uganda, and orient visitors to the Capital Continuum spine right from the homepage.",
    purpose: "Stage 1 narrative + proof of concept spotlight",
  },
  {
    label: "Programs & pilots",
    description:
      "Surface the workstreams (nature-based credits, community restoration, learning partnerships) and link to evidence and cohort partners.",
    purpose: "Detail what gets delivered in incubation and how progress is tracked",
  },
  {
    label: "Capital Continuum map",
    description:
      "Explain how the four stages align with specific funding asks (grants, blended finance, structured debt, institutional capital).",
    purpose: "Educate visitors on the staged capital thesis and where HISAGEN sits today",
  },
  {
    label: "Partners & resources",
    description:
      "Showcase partner PDFs, communications, and the resources timeline so the story stays grounded in documented context.",
    purpose: "Provide transparency on collaborators and source materials",
  },
  {
    label: "Updates & next steps",
    description:
      "A news-style stream that links to live portal entries, funding proposals, and upcoming engagements so the website feels alive.",
    purpose: "Turn the portal’s rhythm into a live-fed newsroom",
  },
];

const referenceAssets = [
  {
    title: "Funding Roadmap",
    detail: "Lifecycle alignment + capital continuum reference.",
    href: "/funding-roadmap",
  },
  {
    title: "Resources timeline",
    detail: "Chronological comms, attachments, and discovery summaries.",
    href: "/resources",
  },
  {
    title: "Grant playbook",
    detail: "Stage 1 grant logic that could animate an application page.",
    href: "/funding-roadmap/grant-proposal",
  },
];

export default function WebsitePrototypePage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Site Prototype"
        trail={[{ label: "Overview", href: "/" }, { label: "Website Prototype" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          HISAGEN Draft Web Experience
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary">
          Build an early-entry website that mirrors the portal’s Capital Continuum intelligence.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Use this prototype space to script what a standalone HISAGEN site might feel like—complete with a hero narrative,
          program storytelling, a capital-stage map, and living evidence that pulls from the portal.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Prototype sections</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {prototypeSections.map((section) => (
            <div key={section.label} className="rounded-xl border border-mist/60 bg-gradient-to-b from-white to-parchment p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">{section.label}</p>
              <p className="mt-2 text-sm text-slate">{section.description}</p>
              <p className="mt-3 text-xs font-semibold text-secondary">{section.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Capital Continuum anchors</p>
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
          <li>Turn each prototype section into a dedicated page within this app, mirroring the nav hierarchy.</li>
          <li>Feed live data (communications, attachments, capital scores) into the prototype cards via shared JSON or markdown sources.</li>
          <li>Keep the site refreshed by linking updates to the portal’s news/timeline so it stays consistent with the operating context.</li>
        </ol>
      </section>
    </div>
  );
}
