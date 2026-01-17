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
import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import { TagBadge, YieldComparison, MetricsGrid } from "../../../../components/knowledge-base";
import {
  getUgandaPilotEvidence,
  EvidenceEntry,
  EvidenceSubtype,
  Metric,
} from "../../../../data";

const subtypeLabels: Record<EvidenceSubtype, string> = {
  "trial-data": "Trial Data",
  mrv: "MRV",
  certification: "Certification",
  "yield-data": "Yield Data",
  "soil-data": "Soil Data",
  validation: "Validation",
};

const subtypeIcons: Record<EvidenceSubtype, typeof BeakerIcon> = {
  "trial-data": BeakerIcon,
  mrv: CheckBadgeIcon,
  certification: CheckBadgeIcon,
  "yield-data": ChartBarIcon,
  "soil-data": BeakerIcon,
  validation: CheckBadgeIcon,
};

// Group metrics by type for summary display
function getYieldMetrics(evidenceList: EvidenceEntry[]) {
  const locusData = evidenceList.find((e: EvidenceEntry) => e.id === 'evidence-locus-global-yield-data');
  if (!locusData) return [];
  return locusData.metrics.filter((m: { label: string }) => m.label.includes('Yield'));
}

export default function UgandaPilotPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const ugandaEvidence = getUgandaPilotEvidence();
  const yieldMetrics = getYieldMetrics(ugandaEvidence);

  // Get unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    ugandaEvidence.forEach((e: EvidenceEntry) => e.tags.forEach((t: string) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [ugandaEvidence]);

  // Filter by tag
  const filteredEvidence = useMemo(() => {
    if (!activeTag) return ugandaEvidence;
    return ugandaEvidence.filter((e: EvidenceEntry) => e.tags.includes(activeTag));
  }, [ugandaEvidence, activeTag]);

  // Sort by date descending
  const sortedEvidence = useMemo(() => {
    return [...filteredEvidence].sort((a, b) => b.date.localeCompare(a.date));
  }, [filteredEvidence]);

  // Group by subtype for summary
  const evidenceBySubtype = useMemo(() => {
    return ugandaEvidence.reduce((acc: Record<EvidenceSubtype, EvidenceEntry[]>, e: EvidenceEntry) => {
      if (!acc[e.subtype]) acc[e.subtype] = [];
      acc[e.subtype].push(e);
      return acc;
    }, {} as Record<EvidenceSubtype, EvidenceEntry[]>);
  }, [ugandaEvidence]);

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Uganda Pilot" />

      {/* Back link */}
      <Link
        href="/knowledge-base/evidence"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Evidence
      </Link>

      {/* Hero Section */}
      <section className="rounded-2xl border border-mist bg-gradient-to-br from-emerald-50 to-parchment/40 px-8 py-12">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-100">
            <MapPinIcon className="size-8 text-emerald-700" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
              Project Evidence
            </p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-secondary">
              Uganda Pilot
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
              Flagship implementation of Rhizolizer® Duo with 10,000 smallholder farmers across multiple
              agro-ecological zones. Evidence includes maize trials, yield validation data, and soil carbon
              baseline measurements.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-emerald-100">
            <p className="text-2xl font-bold text-secondary">{ugandaEvidence.length}</p>
            <p className="text-xs text-slate/60">Evidence Entries</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-emerald-100">
            <p className="text-2xl font-bold text-secondary">5</p>
            <p className="text-xs text-slate/60">NARO Zones</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-emerald-100">
            <p className="text-2xl font-bold text-secondary">10,000</p>
            <p className="text-xs text-slate/60">Target Farmers</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-emerald-100">
            <p className="text-2xl font-bold text-emerald-600">+4-22%</p>
            <p className="text-xs text-slate/60">Yield Range</p>
          </div>
        </div>
      </section>

      {/* Yield Improvements Summary - Using YieldComparison Component */}
      {yieldMetrics.length > 0 && (
        <section className="mt-8 space-y-8">
          {/* Cards View */}
          <YieldComparison
            data={yieldMetrics.map((m: { label: string; change?: string }) => ({
              crop: m.label.replace(' Yield', ''),
              improvement: m.change || '',
            }))}
            title="Validated Yield Improvements"
            subtitle="Locus AG Global Data"
            source="Third-party verified yield improvements across multi-year global trials by Locus AG"
            variant="cards"
          />

          {/* Bar Chart Visualization */}
          <div className="p-6 rounded-2xl bg-white border border-mist">
            <YieldComparison
              data={yieldMetrics.map((m: { label: string; change?: string }) => ({
                crop: m.label.replace(' Yield', ''),
                improvement: m.change || '',
              }))}
              title="Yield Comparison Chart"
              subtitle="Visual comparison of yield improvements by crop type"
              variant="bars"
            />
          </div>
        </section>
      )}

      {/* Evidence Type Summary */}
      <section className="mt-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-bold text-secondary">Evidence by Type</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(Object.entries(evidenceBySubtype) as [EvidenceSubtype, EvidenceEntry[]][]).map(([subtype, entries]) => {
            const Icon = subtypeIcons[subtype] || BeakerIcon;
            return (
              <div
                key={subtype}
                className="p-4 rounded-xl bg-white border border-mist hover:border-emerald-200 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50">
                    <Icon className="size-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">
                      {subtypeLabels[subtype]}
                    </p>
                    <p className="text-xs text-slate/60">{entries.length} entries</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tag Filters */}
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

      {/* Evidence Entries */}
      <section className="mt-8 space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-bold text-secondary">All Evidence</h2>
          <div className="h-px flex-1 bg-mist" />
          <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
            {sortedEvidence.length} entries
          </span>
        </div>

        {sortedEvidence.map((entry) => (
          <div
            key={entry.id}
            className="p-6 rounded-xl border border-mist bg-white hover:border-emerald-200 transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
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

            {/* Metrics Grid - Using MetricsGrid Component */}
            {entry.metrics.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate/50 mb-3">
                  Key Metrics
                </p>
                <MetricsGrid metrics={entry.metrics} columns={3} />
              </div>
            )}

            {/* Verification */}
            {entry.verifiedBy && (
              <div className="mb-4 p-3 rounded-lg bg-blue-50 border border-blue-100">
                <p className="text-xs text-blue-800">
                  <strong>Verified by:</strong> {entry.verifiedBy}
                </p>
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
        ))}
      </section>

      {/* Project Timeline */}
      <section className="mt-12 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-secondary">Project Timeline</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-200" />

          {/* Timeline items */}
          <div className="space-y-6">
            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-emerald-100" />
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  Phase 1 Complete
                </p>
                <p className="text-sm font-bold text-secondary mt-1">June - October 2024</p>
                <p className="text-xs text-slate mt-1">
                  Initial field trials of Rhizolizer® Duo on maize in Uganda NARO pilot zone
                </p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-emerald-100" />
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  Phase 2 Data Collection
                </p>
                <p className="text-sm font-bold text-secondary mt-1">January - May 2025</p>
                <p className="text-xs text-slate mt-1">
                  Expanded trials across 4 agro-ecological zones with standardized field sheets
                </p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100" />
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                  In Progress
                </p>
                <p className="text-sm font-bold text-secondary mt-1">NARO 5-Zone Independent Trials</p>
                <p className="text-xs text-slate mt-1">
                  Independent validation by NARO across 5 agro-ecological zones (Results: Q1 2026)
                </p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-slate-100" />
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Upcoming
                </p>
                <p className="text-sm font-bold text-secondary mt-1">Full Pilot Launch</p>
                <p className="text-xs text-slate mt-1">
                  Scale to 10,000 smallholder farmers with carbon credit integration
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
            href="/project/hisagen-uganda"
            className="p-4 rounded-lg bg-white border border-mist hover:border-secondary/30 transition-colors group"
          >
            <p className="text-sm font-bold text-secondary group-hover:text-accent transition-colors">
              Uganda Project Page →
            </p>
            <p className="text-xs text-slate/60">Full project overview and implementation details</p>
          </Link>
          <Link
            href="/knowledge-base/milestones"
            className="p-4 rounded-lg bg-white border border-mist hover:border-secondary/30 transition-colors group"
          >
            <p className="text-sm font-bold text-secondary group-hover:text-accent transition-colors">
              Project Milestones →
            </p>
            <p className="text-xs text-slate/60">Regulatory, commercial, and operational milestones</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
