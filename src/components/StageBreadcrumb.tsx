import React from "react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type StageBreadcrumbProps = {
  stage: string;
  trail?: BreadcrumbItem[];
};

export default function StageBreadcrumb({ stage, trail = [] }: StageBreadcrumbProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <span className="text-mist">/</span>
      {trail.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          {item.href ? (
            <Link href={item.href} className="text-secondary hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-secondary">{item.label}</span>
          )}
          <span className="text-mist">/</span>
        </React.Fragment>
      ))}
      <span className="rounded-full border border-mist bg-white px-3 py-1 text-secondary shadow-sm">
        {stage}
      </span>
    </div>
  );
}

