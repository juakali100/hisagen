"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  BeakerIcon,
  ChartBarIcon,
} from "@heroicons/react/20/solid";
import { TagBadge, MetricsGrid } from "../../../../components/knowledge-base";
import {
  getRwandaPilotEvidence,
  EvidenceEntry,
  EvidenceSubtype,
  EvidenceDataType,
  dataTypeLabels,
  dataTypeColors,
  subtypeToDataType,
} from "../../../../data";

const subtypeLabels: Record<EvidenceSubtype, string> = {
  "trial-data": "Trial Data",
  mrv: "MRV",
  certification: "Certification",
  "yield-data": "Yield Data",
  "soil-data": "Soil Data",
  validation: "Validation",
  "farmer-records": "Farmer Records",
  "product-tracking": "Product Tracking",
  regulatory: "Regulatory",
  reporting: "Reporting",
  additionality: "Additionality",
  social: "Social",
};

export default function RwandaPilotPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const rwandaEvidence = getRwandaPilotEvidence();

  // Get unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    rwandaEvidence.forEach((e: EvidenceEntry) => e.tags.forEach((t: string) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [rwandaEvidence]);

  // Filter by tag
  const filteredEvidence = useMemo(() => {
    if (!activeTag) return rwandaEvidence;
    return rwandaEvidence.filter((e: EvidenceEntry) => e.tags.includes(activeTag));
  }, [rwandaEvidence, activeTag]);

  // Sort by date descending
  const sortedEvidence = useMemo(() => {
    return [...filteredEvidence].sort((a, b) => b.date.localeCompare(a.date));
  }, [filteredEvidence]);

  // Group by data type for summary
  const evidenceByDataType = useMemo(() => {
    const result: Partial<Record<EvidenceDataType, EvidenceEntry[]>> = {};
    rwandaEvidence.forEach((e: EvidenceEntry) => {
      const dt = e.dataType || subtypeToDataType[e.subtype];
      if (!result[dt]) result[dt] = [];
      result[dt]!.push(e);
    });
    return result;
  }, [rwandaEvidence]);

  return (
    <div className="mx-auto max-w-5xl text-ink">

      {/* Back link */}
      <Link
        href="/knowledge-base/evidence"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Evidence
      </Link>

      {/* Hero Section */}
      <section className="rounded-2xl border border-mist bg-gradient-to-br from-amber-50 to-parchment/40 px-8 py-12">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-amber-100">
            <MapPinIcon className="size-8 text-amber-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Project Evidence
              </p>
              <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-800 text-[9px] font-bold uppercase tracking-widest">
                Early Stage
              </span>
            </div>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-secondary">
              Rwanda Pilot
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
              Planned expansion of Rhizolizer® Duo into Rwanda, targeting coffee, tea, and maize.
              Building on Uganda pilot success with NARO-validated results. RAB partnership and
              regulatory pathway scoping underway.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-amber-100">
            <p className="text-2xl font-bold text-secondary">{rwandaEvidence.length}</p>
            <p className="text-xs text-slate/60">Evidence Entries</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-amber-100">
            <p className="text-2xl font-bold text-amber-600">Planning</p>
            <p className="text-xs text-slate/60">Stage</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-amber-100">
            <p className="text-2xl font-bold text-secondary">Coffee, Tea, Maize</p>
            <p className="text-xs text-slate/60">Target Crops</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-amber-100">
            <p className="text-2xl font-bold text-secondary">Q3 2026</p>
            <p className="text-xs text-slate/60">Earliest Pilot Design</p>
          </div>
        </div>
      </section>

      {/* Early Stage Notice */}
      <section className="mt-8 rounded-xl border-2 border-dashed border-amber-200 bg-amber-50/50 p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-amber-100">
            <CalendarDaysIcon className="size-5 text-amber-700" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-800">Early Stage Project</h3>
            <p className="mt-1 text-sm text-slate">
              Rwanda is in the planning and scoping phase. Evidence will accumulate as the project
              progresses through feasibility assessment, RAB engagement, regulatory scoping, and
              eventually field trials. The Uganda pilot provides the validated methodology template.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence by Data Type Summary */}
      <section className="mt-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-bold text-secondary">Evidence by Data Type</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(["mrv", "traceability", "disclosure", "impact"] as EvidenceDataType[]).map((dt) => {
            const entries = evidenceByDataType[dt] || [];
            const colors = dataTypeColors[dt];
            return (
              <div
                key={dt}
                className={`p-4 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-sm transition-all`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${colors.accent}`}>
                    <BeakerIcon className={`size-5 ${colors.text}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${colors.text}`}>
                      {dataTypeLabels[dt]}
                    </p>
                    <p className="text-xs text-slate/60">
                      {entries.length > 0 ? `${entries.length} entries` : "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tag Filters */}
      {allTags.length > 0 && (
        <section className="mt-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">
              Filter by Tag
            </h2>
            <div className="h-px flex-1 bg-mist" />
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="text-[10px] font-medium text-secondary hover:text-secondary/80 underline underline-offset-2"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag: string) => (
              <TagBadge
                key={tag}
                tag={tag}
                onClick={(t: string) => setActiveTag(activeTag === t ? null : t)}
                isActive={activeTag === tag}
                size="md"
              />
            ))}
          </div>
        </section>
      )}

      {/* Evidence Entries */}
      <section className="mt-8 space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-bold text-secondary">All Evidence</h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
            {sortedEvidence.length} entries
          </span>
        </div>

        {sortedEvidence.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-mist p-12 text-center">
            <BeakerIcon className="mx-auto size-10 text-slate/20" />
            <p className="mt-4 text-sm text-slate/50">No evidence entries yet for Rwanda.</p>
            <p className="mt-1 text-xs text-slate/40">
              Evidence will appear here as the project progresses.
            </p>
          </div>
        ) : (
          sortedEvidence.map((entry) => (
            <div
              key={entry.id}
              className="p-6 rounded-xl border border-mist bg-white hover:border-amber-200 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {(() => {
                      const dt = entry.dataType || subtypeToDataType[entry.subtype];
                      const dtColors = dataTypeColors[dt];
                      return (
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${dtColors.accent} ${dtColors.text}`}>
                          {dataTypeLabels[dt]}
                        </span>
                      );
                    })()}
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                      {subtypeLabels[entry.subtype]}
                    </span>
                    {entry.verified && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-blue-100 text-blue-700 flex items-center gap-1">
                        <CheckBadgeIcon className="size-3" />
                        Verified
                      </span>
                    )}
                    <span className="text-[10px] text-slate/40 flex items-center gap-1">
                      <CalendarDaysIcon className="size-3" />
                      {entry.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{entry.title}</h3>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate mb-4">{entry.summary}</p>

              {/* Location & Period */}
              {(entry.location || entry.period) && (
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate/70">
                  {entry.location && (
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="size-3" />
                      {entry.location}
                    </span>
                  )}
                  {entry.period && (
                    <span className="flex items-center gap-1">
                      <CalendarDaysIcon className="size-3" />
                      {entry.period.start} → {entry.period.end}
                    </span>
                  )}
                </div>
              )}

              {/* Methodology */}
              {entry.methodology && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/50 mb-1">
                    Methodology
                  </p>
                  <p className="text-xs text-slate">{entry.methodology}</p>
                </div>
              )}

              {/* Metrics Grid */}
              {entry.metrics.length > 0 && (
                <div className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/50 mb-3">
                    Key Metrics
                  </p>
                  <MetricsGrid metrics={entry.metrics} columns={3} />
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag: string) => (
                  <TagBadge
                    key={tag}
                    tag={tag}
                    onClick={(t: string) => setActiveTag(activeTag === t ? null : t)}
                    isActive={activeTag === tag}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Planned Timeline */}
      <section className="mt-12 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-secondary">Planned Timeline</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-amber-200" />

          {/* Timeline items */}
          <div className="space-y-6">
            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-amber-400 border-4 border-amber-100" />
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">
                  Current Phase
                </p>
                <p className="text-sm font-bold text-secondary mt-1">Q1-Q2 2026</p>
                <p className="text-xs text-slate mt-1">
                  Feasibility assessment, RAB engagement, and regulatory pathway scoping
                </p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-slate-100" />
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Planned
                </p>
                <p className="text-sm font-bold text-secondary mt-1">Q3 2026</p>
                <p className="text-xs text-slate mt-1">
                  Pilot trial design — crop selection, site identification, farmer recruitment planning
                </p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-slate-100" />
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Future
                </p>
                <p className="text-sm font-bold text-secondary mt-1">2027+</p>
                <p className="text-xs text-slate mt-1">
                  Field trials, data collection, and validation — building on Uganda methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-16 p-6 rounded-xl bg-parchment/50 border border-mist">
        <h3 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
          Related Resources
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/knowledge-base/evidence/uganda-pilot"
            className="p-4 rounded-lg bg-white border border-mist hover:border-secondary/30 transition-colors group"
          >
            <p className="text-sm font-bold text-secondary group-hover:text-accent transition-colors">
              Uganda Pilot Evidence →
            </p>
            <p className="text-xs text-slate/60">Reference methodology and validated results</p>
          </Link>
          <Link
            href="/knowledge-base/milestones"
            className="p-4 rounded-lg bg-white border border-mist hover:border-secondary/30 transition-colors group"
          >
            <p className="text-sm font-bold text-secondary group-hover:text-accent transition-colors">
              Project Milestones →
            </p>
            <p className="text-xs text-slate/60">Rwanda regulatory and partnership milestones</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
