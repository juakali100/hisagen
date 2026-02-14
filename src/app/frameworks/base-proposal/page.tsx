import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function BaseProposalPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      {/* Back link */}
      <Link
        href="/frameworks"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Frameworks
      </Link>

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Frameworks
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Base Proposal Template
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Reusable grant proposal starting point designed to be adapted per
          project and funder. Captures HISAGEN&apos;s core narrative, evidence
          base, and impact methodology.
        </p>
      </section>

      {/* Planned state */}
      <section className="mt-8 p-8 rounded-2xl bg-white border border-dashed border-mist text-center">
        <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded bg-slate-100 text-slate-500 mb-4">
          Planned
        </span>
        <h2 className="text-lg font-bold text-secondary mb-2">
          Under Development
        </h2>
        <p className="text-sm text-slate max-w-lg mx-auto leading-relaxed">
          This template will consolidate HISAGEN&apos;s proven narrative,
          evidence from NARO trials, and impact methodology into a reusable
          starting point for grant and funding applications.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3 max-w-2xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate/40 mb-2">
              Narrative
            </p>
            <p className="text-xs text-slate">
              Problem statement, theory of change, and HISAGEN&apos;s unique
              positioning in regenerative agriculture.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate/40 mb-2">
              Evidence Base
            </p>
            <p className="text-xs text-slate">
              NARO trial results, yield data, and soil carbon metrics pulled
              from the Knowledge Base.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-parchment/40 border border-mist">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate/40 mb-2">
              Impact Model
            </p>
            <p className="text-xs text-slate">
              Measurable outcomes, MRV methodology, and scaling projections
              for funder confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="mt-8 mb-16 flex flex-wrap gap-4 justify-center">
        <Link
          href="/knowledge-base/evidence"
          className="text-xs font-medium text-secondary hover:text-primary underline underline-offset-2 transition-colors"
        >
          View Evidence Base
        </Link>
        <Link
          href="/grant-lifecycle"
          className="text-xs font-medium text-secondary hover:text-primary underline underline-offset-2 transition-colors"
        >
          Grant Lifecycle
        </Link>
        <Link
          href="/capital-continuum"
          className="text-xs font-medium text-secondary hover:text-primary underline underline-offset-2 transition-colors"
        >
          Capital Continuum
        </Link>
      </section>
    </div>
  );
}
