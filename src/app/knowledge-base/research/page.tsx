"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { SearchBar, SelectableEntryCard, TagBadge, DateRangeFilter, filterByDateRange, ProjectFilter, useSelection } from "../../../components/knowledge-base";
import type { DateRange } from "../../../components/knowledge-base";
import {
  research,
  getResearchTags,
  ResearchEntry,
  ResearchSubtype,
} from "../../../data";

const subtypeLabels: Record<ResearchSubtype, string> = {
  deck: "Deck",
  report: "Report",
  analysis: "Analysis",
  "market-data": "Market Data",
  literature: "Literature",
};

export default function ResearchPage() {
  return (
    <Suspense>
      <ResearchContent />
    </Suspense>
  );
}

function ResearchContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<string | null>(searchParams.get("project"));
  const [activeSubtype, setActiveSubtype] = useState<ResearchSubtype | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>(null);
  const { selectAll, setSelectionMode } = useSelection();

  const allTags = getResearchTags();
  const subtypes: ResearchSubtype[] = ["deck", "report", "analysis", "market-data", "literature"];

  // Filter research
  const filteredResearch = useMemo(() => {
    let result = [...research];

    // Filter by project
    if (activeProject) {
      result = result.filter((r) => r.project === activeProject);
    }

    // Filter by date range
    result = filterByDateRange(result, dateRange);

    // Filter by subtype
    if (activeSubtype) {
      result = result.filter((r) => r.subtype === activeSubtype);
    }

    // Filter by tags
    if (activeTags.length > 0) {
      result = result.filter((r) => activeTags.some((tag) => r.tags.includes(tag)));
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.summary.toLowerCase().includes(query) ||
          r.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort by date descending
    return result.sort((a, b) => b.date.localeCompare(a.date));
  }, [searchQuery, activeProject, activeSubtype, activeTags, dateRange]);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear filters
  const clearFilters = () => {
    setSearchQuery("");
    setActiveProject(null);
    setActiveSubtype(null);
    setActiveTags([]);
    setDateRange(null);
  };

  const isFiltering = searchQuery.trim() || activeProject || activeSubtype || activeTags.length > 0 || dateRange;

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Research" />

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
          Research
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Decks, reports, analysis, and market data informing HISAGEN's strategy and operations.
        </p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">{research.length}</span>
            <span className="ml-2 text-xs text-slate/60">Total</span>
          </div>
          {isFiltering && (
            <div className="px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20">
              <span className="text-lg font-bold text-secondary">{filteredResearch.length}</span>
              <span className="ml-2 text-xs text-secondary/60">Matching</span>
            </div>
          )}
          <button
            onClick={() => {
              setSelectionMode(true);
              selectAll(filteredResearch);
            }}
            className="px-3 py-1.5 rounded-lg bg-parchment border border-mist text-xs font-medium text-secondary hover:bg-secondary/10 transition-colors"
          >
            Select all {isFiltering ? "filtered" : ""} ({filteredResearch.length})
          </button>
        </div>

        {/* Project Filter */}
        <div className="mt-6">
          <ProjectFilter activeProject={activeProject} onProjectChange={setActiveProject} />
        </div>
      </section>

      {/* Filters */}
      <section className="mt-8 space-y-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search research..."
          className="max-w-lg"
        />

        {/* Date range filter */}
        <DateRangeFilter value={dateRange} onChange={setDateRange} />

        {/* Subtype filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
            Type:
          </span>
          <button
            onClick={() => setActiveSubtype(null)}
            className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
              !activeSubtype
                ? "bg-secondary text-white"
                : "bg-parchment text-slate/60 hover:bg-secondary/10"
            }`}
          >
            All
          </button>
          {subtypes.map((subtype) => {
            const count = research.filter((r) => r.subtype === subtype).length;
            if (count === 0) return null;
            return (
              <button
                key={subtype}
                onClick={() => setActiveSubtype(activeSubtype === subtype ? null : subtype)}
                className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
                  activeSubtype === subtype
                    ? "bg-secondary text-white"
                    : "bg-parchment text-slate/60 hover:bg-secondary/10"
                }`}
              >
                {subtypeLabels[subtype]} ({count})
              </button>
            );
          })}
        </div>

        {/* Active tag filters */}
        {activeTags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
              Tags:
            </span>
            {activeTags.map((tag) => (
              <TagBadge
                key={tag}
                tag={tag}
                onClick={handleTagClick}
                isActive={true}
                size="md"
              />
            ))}
            <button
              onClick={clearFilters}
              className="text-[10px] font-medium text-secondary hover:text-secondary/80 underline underline-offset-2"
            >
              Clear all
            </button>
          </div>
        )}
      </section>

      {/* Research entries */}
      <section className="mt-8 space-y-4">
        {filteredResearch.length === 0 ? (
          <p className="text-sm text-slate/60 italic py-8 text-center">
            No research entries match your filters.
          </p>
        ) : (
          filteredResearch.map((entry) => (
            <SelectableEntryCard
              key={entry.id}
              entry={entry}
              onTagClick={handleTagClick}
              showType={false}
            />
          ))
        )}
      </section>

      {/* Tag cloud */}
      <section className="mt-12 mb-16">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">
            Filter by Tag
          </h2>
          <div className="h-px flex-1 bg-mist" />
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              onClick={handleTagClick}
              isActive={activeTags.includes(tag)}
              size="md"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
