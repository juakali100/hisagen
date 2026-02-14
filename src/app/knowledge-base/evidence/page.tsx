"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, BeakerIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { SearchBar, TagBadge, ProjectFilter, useSelection } from "../../../components/knowledge-base";
import {
  evidence,
  EvidenceSubtype,
  EvidenceDataType,
  EvidenceEntry,
  dataTypeLabels,
  dataTypeDescriptions,
  dataTypeColors,
  subtypeToDataType,
} from "../../../data";

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

const dataTypeOrder: EvidenceDataType[] = ["mrv", "traceability", "disclosure", "impact"];

const emptyStateDescriptions: Record<EvidenceDataType, string> = {
  mrv: "",
  traceability: "Farmer registration records, input distribution logs, and product tracking will appear here as the supply chain scales.",
  disclosure: "Regulatory filings (MAAIF, UNBS), carbon credit certifications, and ESG reporting will be captured here.",
  impact: "",
};

export default function EvidencePage() {
  return (
    <Suspense>
      <EvidenceContent />
    </Suspense>
  );
}

function EvidenceContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<string | null>(searchParams.get("project"));
  const { selectAll, setSelectionMode, isSelected, toggle, isSelectionMode } = useSelection();

  // Project-filtered evidence base
  const projectEvidence = useMemo(() => {
    if (!activeProject) return evidence;
    return evidence.filter((e) => e.project === activeProject);
  }, [activeProject]);

  // Group by data type (respects project filter)
  const evidenceByDataType = useMemo(() => {
    const result: Record<EvidenceDataType, EvidenceEntry[]> = {
      mrv: [], traceability: [], disclosure: [], impact: [],
    };
    for (const entry of projectEvidence) {
      const dt = entry.dataType || subtypeToDataType[entry.subtype];
      if (result[dt]) result[dt].push(entry);
    }
    return result;
  }, [projectEvidence]);

  const ugandaPilotCount = evidence.filter(e => e.project === "uganda-pilot").length;
  const rwandaPilotCount = evidence.filter(e => e.project === "rwanda-pilot").length;

  // Filter evidence by search query (also respects project filter)
  const filteredEvidence = searchQuery
    ? projectEvidence.filter(
        (e) =>
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : null;

  return (
    <div className="mx-auto max-w-5xl text-ink">

      {/* Back link */}
      <Link
        href="/knowledge-base"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Knowledge Base
      </Link>

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Knowledge Base
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Evidence
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Trial data, MRV metrics, certifications, and verification records — organised by HISAGEN&apos;s four data architecture types.
        </p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">{projectEvidence.length}</span>
            <span className="ml-2 text-xs text-slate/60">Total Entries</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">
              {dataTypeOrder.filter((dt) => evidenceByDataType[dt].length > 0).length}
            </span>
            <span className="ml-2 text-xs text-slate/60">Active Data Types</span>
          </div>
          {projectEvidence.length > 0 && (
            <button
              onClick={() => {
                setSelectionMode(true);
                selectAll(projectEvidence);
              }}
              className="px-3 py-1.5 rounded-lg bg-parchment border border-mist text-xs font-medium text-secondary hover:bg-secondary/10 transition-colors"
            >
              Select all ({projectEvidence.length})
            </button>
          )}
        </div>

        {/* Project Filter */}
        <div className="mt-6">
          <ProjectFilter activeProject={activeProject} onProjectChange={setActiveProject} />
        </div>
      </section>

      {/* Data Type Overview Grid */}
      <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {dataTypeOrder.map((dt) => {
          const colors = dataTypeColors[dt];
          const count = evidenceByDataType[dt].length;
          return (
            <div
              key={dt}
              className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}
            >
              <p className={`text-2xl font-bold ${count > 0 ? colors.text : "text-slate/30"}`}>
                {count}
              </p>
              <p className={`text-xs font-bold uppercase tracking-widest ${colors.text}`}>
                {dataTypeLabels[dt]}
              </p>
              {count === 0 && (
                <p className="text-[10px] text-slate/40 mt-1">Coming soon</p>
              )}
            </div>
          );
        })}
      </section>

      {/* Search */}
      <section className="mt-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search evidence..."
          className="max-w-lg"
        />
      </section>

      {/* Search Results (if searching) */}
      {filteredEvidence && (
        <section className="mt-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-lg font-bold text-secondary">
              Search Results
            </h2>
            <div className="h-px flex-1 bg-mist" />
            <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
              {filteredEvidence.length} matches
            </span>
          </div>
          {filteredEvidence.length === 0 ? (
            <p className="text-sm text-slate/60 py-8 text-center">No evidence matches your search.</p>
          ) : (
            <div className="grid gap-4">
              {filteredEvidence.map((entry) => (
                <EvidenceCard
                  key={entry.id}
                  entry={entry}
                  isSelected={isSelected(entry.id)}
                  isSelectionMode={isSelectionMode}
                  onToggle={() => toggle(entry)}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Featured Project: Uganda Pilot */}
      {!filteredEvidence && (
        <>
          <section className="mt-8">
            <Link
              href="/knowledge-base/evidence/uganda-pilot"
              className="block p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-parchment/40 border border-emerald-100 hover:border-emerald-300 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                  <MapPinIcon className="size-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-emerald-700 transition-colors">
                    Uganda Pilot Evidence
                  </h3>
                  <p className="mt-2 text-sm text-slate">
                    Comprehensive evidence roll-up for the flagship 10,000 farmer implementation.
                    Includes maize trial data, yield validation, SOC baseline, and market analysis.
                  </p>
                  <div className="mt-4 flex items-center gap-6 text-xs text-slate/70">
                    <span>{ugandaPilotCount} entries</span>
                    <span>3 NARO sites (Kawanda, Tororo, Bulindi)</span>
                    <span className="text-emerald-600 font-medium">+17-48% grain yield (NARO validated)</span>
                  </div>
                </div>
                <ArrowRightIcon className="size-5 text-slate/30 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </Link>
          </section>

          {/* Rwanda Pilot Card */}
          <section className="mt-4">
            <Link
              href="/knowledge-base/evidence/rwanda-pilot"
              className="block p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-parchment/40 border border-amber-100 hover:border-amber-300 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors">
                  <MapPinIcon className="size-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                      Early Stage
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-amber-700 transition-colors">
                    Rwanda Pilot Evidence
                  </h3>
                  <p className="mt-2 text-sm text-slate">
                    Planned expansion targeting coffee, tea, and maize. Feasibility assessment
                    and RAB partnership scoping in progress.
                  </p>
                  <div className="mt-4 flex items-center gap-6 text-xs text-slate/70">
                    <span>{rwandaPilotCount} entries</span>
                    <span>Target crops: Coffee, Tea, Maize</span>
                    <span className="text-amber-600 font-medium">Planning phase</span>
                  </div>
                </div>
                <ArrowRightIcon className="size-5 text-slate/30 group-hover:text-amber-600 group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </Link>
          </section>

          {/* Data Type Sections */}
          {dataTypeOrder.map((dt) => {
            const colors = dataTypeColors[dt];
            const entries = evidenceByDataType[dt];
            const isEmpty = entries.length === 0;

            return (
              <section key={dt} className="mt-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-3 h-3 rounded-full ${colors.accent} border ${colors.border}`} />
                  <h2 className="text-lg font-bold text-secondary">
                    {dataTypeLabels[dt]}
                  </h2>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${colors.accent} ${colors.text}`}>
                    {entries.length} {entries.length === 1 ? "entry" : "entries"}
                  </span>
                  <div className="h-px flex-1 bg-mist" />
                </div>

                <p className="text-sm text-slate/60 mb-4">
                  {dataTypeDescriptions[dt]}
                </p>

                {isEmpty ? (
                  <div className={`rounded-xl border-2 border-dashed ${colors.border} ${colors.bg} p-8 text-center`}>
                    <BeakerIcon className="mx-auto size-8 text-slate/20" />
                    <p className="mt-3 text-sm font-medium text-slate/50">
                      No {dataTypeLabels[dt].toLowerCase()} evidence yet
                    </p>
                    <p className="mt-1 text-xs text-slate/40 max-w-md mx-auto">
                      {emptyStateDescriptions[dt]}
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {entries.map((entry) => (
                      <EvidenceCard
                        key={entry.id}
                        entry={entry}
                        isSelected={isSelected(entry.id)}
                        isSelectionMode={isSelectionMode}
                        onToggle={() => toggle(entry)}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}

          {/* Strategic Gap Callout */}
          <section className="mt-10 rounded-xl border border-mist bg-parchment/10 p-8 text-center border-dashed">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2">Evidence Strategic Gap</p>
            <h3 className="text-xl font-semibold text-secondary mb-4 italic">
              &ldquo;How do we prove 10-year soil carbon permanence with 1-year pilot data?&rdquo;
            </h3>
            <p className="text-sm text-slate max-w-2xl mx-auto mb-6">
              This is our most critical evidence challenge. We will use Gemini and deep literature review to synthesize proxy indicators that satisfy institutional carbon buyers.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 text-[10px] rounded font-bold uppercase tracking-widest">
              High Priority Research
            </div>
          </section>
        </>
      )}

      {/* Knowledge Base Link */}
      <section className="mt-12 mb-16 p-6 rounded-xl bg-emerald-50 border border-emerald-100">
        <p className="text-sm text-emerald-800">
          <strong>Data Source:</strong> Evidence entries are structured in the{" "}
          <code className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs">
            hisagen-knowledge-base/evidence/
          </code>{" "}
          folder. Use the <code className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs">
            add-knowledge-entry
          </code> playbook to add new evidence.
        </p>
      </section>
    </div>
  );
}

// Extracted card component for reuse in search results and data type sections
function EvidenceCard({
  entry,
  isSelected,
  isSelectionMode,
  onToggle,
}: {
  entry: EvidenceEntry;
  isSelected: boolean;
  isSelectionMode: boolean;
  onToggle: () => void;
}) {
  const dt = entry.dataType || subtypeToDataType[entry.subtype];
  const colors = dataTypeColors[dt];

  return (
    <div
      className={`relative group/selectable p-5 rounded-xl border border-mist bg-white ${isSelected ? "ring-2 ring-secondary/30" : ""}`}
    >
      {/* Selection checkbox */}
      <div
        className={`absolute left-3 top-3 z-10 transition-opacity ${
          isSelectionMode || isSelected ? "opacity-100" : "opacity-0 group-hover/selectable:opacity-100"
        }`}
      >
        <button
          onClick={onToggle}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            isSelected
              ? "bg-secondary border-secondary text-white"
              : "bg-white border-slate/30 hover:border-secondary/50"
          }`}
        >
          {isSelected && (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${colors.accent} ${colors.text}`}>
          {dataTypeLabels[dt]}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
          {subtypeLabels[entry.subtype]}
        </span>
        <span className="text-[10px] text-slate/40">{entry.date}</span>
      </div>
      <h3 className="text-base font-bold text-secondary">{entry.title}</h3>
      <p className="mt-1 text-sm text-slate">{entry.summary}</p>
      {entry.metrics.length > 0 && (
        <div className="mt-4 grid gap-2 md:grid-cols-3">
          {entry.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-parchment/50 border border-mist"
            >
              <p className="text-[10px] text-slate/60">{metric.label}</p>
              <p className="text-lg font-bold text-secondary">
                {metric.value}
                {metric.unit && (
                  <span className="text-sm font-normal ml-1">{metric.unit}</span>
                )}
              </p>
              {metric.change && (
                <p className="text-xs text-emerald-600">{metric.change}</p>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
