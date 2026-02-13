/**
 * HISAGEN Program Hub - Internal Hub
 *
 * Strategy, programs, projects, capital lifecycle for HISAGEN team and stakeholders.
 * For public-facing content, see the HISAGEN Website (website/).
 */

import Link from "next/link";

interface NavItem {
  title: string;
  href: string;
  description: string;
  status?: "active" | "planned";
}

interface NavSection {
  section: string;
  description?: string;
  items: NavItem[];
  tier: "primary" | "supporting";
}

const quickStatus = [
  { label: "Entity", value: "HISAGEN USA + Africa", status: "active" },
  { label: "Stage", value: "1 - Incubation", status: "active" },
  { label: "Program", value: "Agri-Carbon", status: "active" },
  { label: "Regulatory", value: "MAAIF pending Q1 2026", status: "pending" },
];

const coreNavigation: NavSection[] = [
  {
    section: "Strategy & Governance",
    description: "Mission, Vision, Strategy, Theory of Change, Governance",
    tier: "primary",
    items: [
      { title: "Strategy & Governance", href: "/strategy", description: "Organizational foundation — 6-part framework with gap indicators" },
      { title: "Team & Organization", href: "/organization", description: "Board, core team, strategic alliances" },
    ],
  },
  {
    section: "Knowledge Base",
    description: "Intake funnel — capture, categorise, and process all incoming information",
    tier: "primary",
    items: [
      { title: "Knowledge Base", href: "/knowledge-base", description: "Communications, research, evidence, milestones — the institutional source of truth" },
      { title: "Ecosystem Partners", href: "/ecosystem", description: "Partner profiles, stakeholder relationships, ecosystem mapping" },
    ],
  },
  {
    section: "Agri-Carbon Program",
    description: "Locus AG tech + smallholder aggregation + carbon credits",
    tier: "primary",
    items: [
      { title: "Program Overview", href: "/program", description: "Operating model, partner ecosystem, revenue wheel" },
      { title: "Uganda Pilot", href: "/project/hisagen-uganda", description: "Timeline, milestones, capital assessment", status: "active" },
      { title: "Rwanda", href: "/project/rwanda", description: "East Africa expansion (planned)", status: "planned" },
      { title: "Kenya", href: "/project/kenya", description: "East Africa expansion (planned)", status: "planned" },
    ],
  },
  {
    section: "Communications & Brand",
    description: "External presence, brand identity, marketing materials",
    tier: "supporting",
    items: [
      { title: "Communications Hub", href: "/comms", description: "All comms functions — brand, website, social, PR, collateral" },
      { title: "Brand Guidelines", href: "/brand", description: "Visual identity, colors, typography, gap analysis" },
      { title: "Asset Library", href: "/assets", description: "Icons, photography — source of truth for all visual assets" },
    ],
  },
  {
    section: "Frameworks",
    description: "Blueprints, methodologies, and reference tools",
    tier: "supporting",
    items: [
      { title: "Frameworks Overview", href: "/frameworks", description: "All frameworks and methodologies in one place" },
      { title: "Capital Continuum Framework", href: "/capital-continuum", description: "4-stage funding model — grants to carbon markets" },
      { title: "Sustainability Framework", href: "/strategy/sustainability-framework", description: "5-Layer template — biosphere to corporate, flows, actors" },
      { title: "Grant Lifecycle Methodology", href: "/grant-lifecycle", description: "11-stage grant process — Stage 1 playbook" },
    ],
  },
];

const recentUpdates = [
  { date: "Jan 2026", item: "Regulatory submission to MAAIF", type: "milestone" },
  { date: "Jan 2026", item: "Pandion systems architecture review", type: "internal" },
  { date: "Nov 2025", item: "NARO trials data collection complete", type: "milestone" },
  { date: "Nov 2025", item: "Grant proposal v1.1 delivered", type: "deliverable" },
];

export default function HomePage() {
  return (
    <div className="text-ink font-sans min-h-screen bg-parchment">
      {/* Portal Header - Primary Green for contrast with nav */}
      <header className="bg-primary text-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-1">
                Internal Portal
              </p>
              <h1 className="text-2xl font-serif font-bold">HISAGEN</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs rounded-full bg-secondary text-white font-medium">
                Stage 1 Active
              </span>
            </div>
          </div>
          {/* Intro explainer */}
          <p className="mt-4 text-sm text-white/80 max-w-2xl">
            Strategy, programs, projects, and capital lifecycle for HISAGEN team and stakeholders.
            Foundation for grant applications, investor materials, and donor reporting.
          </p>
          <p className="mt-2 text-xs text-white/50">
            Internal hub — public website content derives from here.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-12">

      {/* Primary Navigation - Full Width (Hierarchy) */}
      <section className="mt-10 space-y-8">
        {coreNavigation.filter(s => s.tier === "primary").map((section, idx) => (
          <div key={section.section} className={`p-6 rounded-lg border-l-4 bg-white shadow-sm ${idx === 0 ? 'border-l-secondary' : 'border-l-primary'}`}>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-1">
              {section.section}
            </h3>
            {section.description && (
              <p className="text-xs text-slate/50 mb-4">{section.description}</p>
            )}
            <div className="grid gap-3 md:grid-cols-2">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block p-4 rounded-lg border bg-parchment/10 hover:border-primary/30 hover:bg-parchment/30 transition-colors group ${
                    item.status === "planned" ? "border-dashed border-slate/30" : "border-mist"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-secondary group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      {item.status === "active" && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">
                          active
                        </span>
                      )}
                      {item.status === "planned" && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate/10 text-slate/60 font-medium">
                          planned
                        </span>
                      )}
                    </div>
                    <span className="text-slate/40 group-hover:text-primary transition-colors">
                      &rarr;
                    </span>
                  </div>
                  <p className="text-sm text-slate/70 mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Supporting Navigation - 2 Column (Cross-cutting) */}
      <section className="mt-10 p-6 rounded-lg bg-mist/30">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-4">Cross-cutting Resources</p>
        <div className="grid gap-6 md:grid-cols-2">
          {coreNavigation.filter(s => s.tier === "supporting").map((section) => (
            <div key={section.section}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate/70 mb-1">
                {section.section}
              </h3>
              {section.description && (
                <p className="text-xs text-slate/50 mb-3">{section.description}</p>
              )}
              <div className="space-y-2">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block p-4 rounded-lg bg-white shadow-sm hover:shadow-md hover:border-l-2 hover:border-l-primary transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-secondary group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-slate/40 group-hover:text-primary transition-colors">
                        &rarr;
                      </span>
                    </div>
                    <p className="text-sm text-slate/70 mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Updates */}
      <section className="mt-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-4">
          Recent Updates
        </h2>
        <div className="rounded-lg bg-white shadow-sm overflow-hidden">
          {recentUpdates.map((update, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-4 py-3 ${
                i !== recentUpdates.length - 1 ? "border-b border-mist" : ""
              }`}
            >
              <span className="text-xs text-slate/50 w-20">{update.date}</span>
              <span
                className={`text-[9px] px-2 py-0.5 rounded font-medium ${
                  update.type === "milestone"
                    ? "bg-primary/15 text-primary border border-primary/20"
                    : update.type === "deliverable"
                    ? "bg-accent/15 text-accent border border-accent/20"
                    : "bg-secondary/10 text-secondary border border-secondary/20"
                }`}
              >
                {update.type}
              </span>
              <span className="text-sm text-secondary">{update.item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Status */}
      <section className="mt-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-4">
          Quick Status
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickStatus.map((item, idx) => (
            <div
              key={item.label}
              className="rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <div className={`h-1 ${idx % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`} />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === "active" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate/50">
                    {item.label}
                  </p>
                </div>
                <p className="text-sm font-medium text-secondary">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Footer */}
      <section className="mt-10 py-6 border-t-2 border-secondary/20">
        <div className="flex flex-wrap gap-6 text-xs">
          <Link href="/strategy" className="text-secondary hover:text-primary transition-colors">
            Strategy
          </Link>
          <Link href="/knowledge-base" className="text-secondary hover:text-primary transition-colors">
            Knowledge Base
          </Link>
          <Link href="/program" className="text-secondary hover:text-primary transition-colors">
            Program
          </Link>
          <Link href="/comms" className="text-secondary hover:text-primary transition-colors">
            Communications
          </Link>
          <Link href="/frameworks" className="text-secondary hover:text-primary transition-colors">
            Frameworks
          </Link>
        </div>
        <p className="text-[10px] text-slate/50 mt-4">
          HISAGEN Internal Portal • Deep Blue-Grey indicates internal context
        </p>
      </section>
      </div>
    </div>
  );
}
