import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type StageBreadcrumbProps = {
  stage: string;
  trail: BreadcrumbItem[];
};

export default function StageBreadcrumb({ stage, trail }: StageBreadcrumbProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate">
      <span className="rounded-full border border-mist bg-white px-3 py-1">{stage}</span>
      <span className="text-slate/60">/</span>
      {trail.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-secondary hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-secondary">{item.label}</span>
          )}
          {index < trail.length - 1 ? <span className="text-slate/60">/</span> : null}
        </span>
      ))}
    </div>
  );
}
