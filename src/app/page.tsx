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
    section: "Frameworks",
    description: "Methodologies that apply across programs and projects",
    tier: "supporting",
    items: [
      { title: "Capital Continuum Framework", href: "/capital-continuum", description: "4-stage funding model — grants to carbon markets" },
      { title: "Sustainability Framework", href: "/strategy/sustainability-framework", description: "5-Layer template — biosphere to corporate, flows, actors" },
      { title: "Grant Lifecycle Methodology", href: "/grant-lifecycle", description: "11-stage grant process — Stage 1 playbook" },
    ],
  },
  {
    section: "Stage 1 Operations",
    description: "Current funding landscape and active proposals",
    tier: "supporting",
    items: [
      { title: "Funder Landscape", href: "/stage-1/funding", description: "Grant opportunities, funder mapping, deadlines" },
      { title: "Uganda Proposals", href: "/stage-1/proposals/uganda", description: "Base proposal and funder-specific versions" },
    ],
  },
  {
    section: "Knowledge",
    description: "Evidence, communications, research",
    tier: "supporting",
    items: [
      { title: "Knowledge Base", href: "/knowledge-base", description: "Comms, research, milestones, evidence vault" },
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
    <div className="mx-auto max-w-5xl text-ink font-sans">
      {/* Header */}
      <header className="py-8 border-b border-mist">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60 mb-1">
              Program Hub
            </p>
            <h1 className="text-2xl font-bold text-secondary">HISAGEN</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
              Stage 1 Active
            </span>
          </div>
        </div>
        {/* Intro explainer */}
        <p className="mt-4 text-sm text-slate/70 max-w-2xl">
          Strategy, programs, projects, and capital lifecycle for HISAGEN team and stakeholders.
          Foundation for grant applications, investor materials, and donor reporting.
          Public website content derives from this hub.
        </p>
        <p className="mt-2 text-xs text-slate/50">
          Not an ERP — no finance ops, HR, or org admin.
        </p>
      </header>

      {/* Primary Navigation - Full Width (Hierarchy) */}
      <section className="mt-10 space-y-8">
        {coreNavigation.filter(s => s.tier === "primary").map((section) => (
          <div key={section.section} className="p-6 rounded-lg border border-mist bg-white">
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
      <section className="mt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40 mb-4">Cross-cutting</p>
        <div className="grid gap-6 md:grid-cols-2">
          {coreNavigation.filter(s => s.tier === "supporting").map((section) => (
            <div key={section.section}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate/60 mb-1">
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
                    className="block p-4 rounded-lg border border-mist bg-white hover:border-primary/30 hover:bg-parchment/20 transition-colors group"
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
        <div className="rounded-lg border border-mist bg-white overflow-hidden">
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
                    ? "bg-primary/10 text-primary"
                    : update.type === "deliverable"
                    ? "bg-sky-teal/10 text-sky-teal"
                    : "bg-slate/10 text-slate"
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
          {quickStatus.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-lg border border-mist bg-white"
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.status === "active" ? "bg-emerald-500" : "bg-amber-400"
                  }`}
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate/50">
                  {item.label}
                </p>
              </div>
              <p className="text-sm font-medium text-secondary">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Footer */}
      <section className="mt-10 py-6 border-t border-mist">
        <div className="flex flex-wrap gap-6 text-xs">
          <Link href="/knowledge-base" className="text-slate hover:text-primary transition-colors">
            Knowledge Base
          </Link>
          <Link href="/stage-1" className="text-slate hover:text-primary transition-colors">
            Stage 1 Operations
          </Link>
          <Link href="/grant-lifecycle" className="text-slate hover:text-primary transition-colors">
            Grant Lifecycle
          </Link>
          <Link href="/evidence" className="text-slate hover:text-primary transition-colors">
            Evidence Vault
          </Link>
        </div>
        <p className="text-[10px] text-slate/40 mt-4">
          HISAGEN Program Hub. For external communications, see Website.
        </p>
      </section>
    </div>
  );
}
