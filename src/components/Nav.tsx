import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
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
          HISAGEN Portal
        </Link>
        <span className="rounded-full border border-mist bg-white px-3 py-1 text-xs font-medium text-slate">
          Stage: Incubation
        </span>
      </div>
      <nav className="flex flex-wrap gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-slate transition hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
