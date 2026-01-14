import Link from "next/link";

const navItems = [
  { href: "/organization", label: "Organization" },
  {
    label: "Program",
    href: "/program",
    dropdown: [
      { href: "/partnership-model", label: "Partnership Model" },
      { href: "/project/hisagen-uganda", label: "Uganda Pilot (Current Project)" },
      { href: "/evidence", label: "Evidence Review" },
    ],
  },
  {
    label: "Capital",
    href: "/funding-roadmap/capital-continuum",
    dropdown: [
      { href: "/funding-roadmap/capital-continuum", label: "Capital Continuum" },
      { href: "/funding-roadmap", label: "Funding Roadmap" },
      { href: "/stage-1", label: "Stage 1: Incubation" },
      { href: "/stage-2", label: "Stage 2: Implementation" },
      { href: "/stage-3", label: "Stage 3: Stabilization" },
      { href: "/stage-4", label: "Stage 4: Maturity" },
    ],
  },
  { href: "/resources", label: "Resources" },
];

export default function Nav() {
  return (
    <header className="mx-auto mb-10 border-b border-mist pb-4">
      <div className="flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-bold text-secondary hover:text-primary transition-colors">
            Hisagen
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="h-4 w-px bg-mist"></span>
            <span className="rounded-full border border-mist bg-parchment/50 px-3 py-0.5 text-[10px] font-bold text-slate">
              Founding Portal
            </span>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative inline-flex group py-1">
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                  <span aria-hidden className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </Link>
                {/* The "before" pseudo-element on this absolute div acts as a bridge to prevent hover loss */}
                <div className="pointer-events-none absolute top-full left-0 z-50 hidden min-w-[200px] flex-col pt-3 group-hover:flex group-hover:pointer-events-auto before:absolute before:inset-0 before:h-3 before:w-full before:-top-3 before:content-['']">
                  <div className="flex flex-col rounded-xl border border-mist bg-white py-2 shadow-xl shadow-secondary/5">
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="px-4 py-2.5 text-sm font-medium text-slate hover:bg-parchment/50 hover:text-primary transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-sm font-semibold text-slate hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

