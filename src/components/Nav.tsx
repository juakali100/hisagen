import Link from "next/link";

const navItems = [
  {
    label: "HISAGEN Agri-Carbon Program",
    href: "/program",
    dropdown: [
      { href: "/project/hisagen-uganda", label: "HISAGEN Uganda Pilot" },
    ],
  },
  { href: "/funding-roadmap/capital-continuum", label: "Capital Continuum" },
  { href: "/stage-1", label: "Stage 1" },
  { href: "/stage-2", label: "Stage 2" },
  { href: "/stage-3", label: "Stage 3" },
  { href: "/stage-4", label: "Stage 4" },
  { href: "/resources", label: "Resources" },
];

export default function Nav() {
  return (
    <header className="mx-auto mb-10 flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 border-b border-mist pb-4 text-sm text-slate">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-xs font-medium uppercase tracking-[0.3em] text-secondary">
          HISAGEN
        </Link>
        <span className="rounded-full border border-mist bg-white px-3 py-1 text-xs font-medium text-slate">
          Program: Agri-Carbon
        </span>
      </div>
      <nav className="flex flex-wrap items-start gap-4">
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="relative inline-flex group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-semibold uppercase text-secondary tracking-[0.2em]"
              >
                {item.label}
                <span aria-hidden className="text-xs">
                  ▾
                </span>
              </Link>
              <div className="pointer-events-none absolute top-full z-10 mt-2 hidden w-56 flex-col rounded-xl border border-mist bg-white py-3 px-4 shadow-lg transition duration-200 group-hover:flex group-hover:pointer-events-auto group-focus-within:flex">
                {item.dropdown.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate transition hover:text-primary"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
