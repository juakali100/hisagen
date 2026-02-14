"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { SearchBar, TagBadge, DateRangeFilter, filterByDateRange, ProjectFilter, useSelection } from "../../../components/knowledge-base";
import type { DateRange } from "../../../components/knowledge-base";
import {
  milestones,
  getMilestonesByStatus,
  getMilestoneTags,
  MilestoneStatus,
  MilestoneSubtype,
  milestoneStatusColors,
} from "../../../data";

const subtypeLabels: Record<MilestoneSubtype, string> = {
  regulatory: "Regulatory",
  commercial: "Commercial",
  operational: "Operational",
  funding: "Funding",
  partnership: "Partnership",
};

const statusOrder: MilestoneStatus[] = ["in-progress", "planned", "blocked", "complete"];

export default function MilestonesPage() {
  return (
    <Suspense>
      <MilestonesContent />
    </Suspense>
  );
}

function MilestonesContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<string | null>(searchParams.get("project"));
  const [activeStatus, setActiveStatus] = useState<MilestoneStatus | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>(null);
  const { selectAll, setSelectionMode, isSelected, toggle, isSelectionMode } = useSelection();

  const allTags = getMilestoneTags();
  const milestonesByStatus = getMilestonesByStatus();

  // Filter milestones
  const filteredMilestones = useMemo(() => {
    let result = [...milestones];

    // Filter by project
    if (activeProject) {
      result = result.filter((m) => m.project === activeProject);
    }

    // Filter by date range
    result = filterByDateRange(result, dateRange);

    // Filter by status
    if (activeStatus) {
      result = result.filter((m) => m.status === activeStatus);
    }

    // Filter by tags
    if (activeTags.length > 0) {
      result = result.filter((m) => activeTags.some((tag) => m.tags.includes(tag)));
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(query) ||
          m.summary.toLowerCase().includes(query) ||
          m.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [searchQuery, activeProject, activeStatus, activeTags, dateRange]);

  // Group filtered milestones by status
  const filteredByStatus = useMemo(() => {
    return filteredMilestones.reduce((acc, m) => {
      if (!acc[m.status]) acc[m.status] = [];
      acc[m.status].push(m);
      return acc;
    }, {} as Record<string, typeof milestones>);
  }, [filteredMilestones]);

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
    setActiveStatus(null);
    setActiveTags([]);
    setDateRange(null);
  };

  const isFiltering = searchQuery.trim() || activeProject || activeStatus || activeTags.length > 0 || dateRange;

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
          Milestones
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Regulatory, commercial, and operational milestones tracking HISAGEN's progress from pilot to market.
        </p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {statusOrder.map((status) => {
            const count = milestonesByStatus[status]?.length || 0;
            if (count === 0) return null;
            const colors = milestoneStatusColors[status];
            return (
              <div
                key={status}
                className={`px-3 py-1.5 rounded-lg border ${colors.bg} border-opacity-50`}
              >
                <span className={`text-lg font-bold ${colors.text}`}>{count}</span>
                <span className={`ml-2 text-xs ${colors.text} opacity-70 capitalize`}>
                  {status.replace("-", " ")}
                </span>
              </div>
            );
          })}
          <button
            onClick={() => {
              setSelectionMode(true);
              selectAll(filteredMilestones);
            }}
            className="px-3 py-1.5 rounded-lg bg-parchment border border-mist text-xs font-medium text-secondary hover:bg-secondary/10 transition-colors"
          >
            Select all {isFiltering ? "filtered" : ""} ({filteredMilestones.length})
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
          placeholder="Search milestones..."
          className="max-w-lg"
        />

        {/* Date range filter */}
        <DateRangeFilter value={dateRange} onChange={setDateRange} />

        {/* Status filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
            Status:
          </span>
          <button
            onClick={() => setActiveStatus(null)}
            className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
              !activeStatus
                ? "bg-secondary text-white"
                : "bg-parchment text-slate/60 hover:bg-secondary/10"
            }`}
          >
            All
          </button>
          {statusOrder.map((status) => {
            const count = milestonesByStatus[status]?.length || 0;
            if (count === 0) return null;
            const colors = milestoneStatusColors[status];
            return (
              <button
                key={status}
                onClick={() => setActiveStatus(activeStatus === status ? null : status)}
                className={`text-[10px] font-medium px-2 py-1 rounded transition-colors capitalize ${
                  activeStatus === status
                    ? `${colors.bg} ${colors.text}`
                    : "bg-parchment text-slate/60 hover:bg-secondary/10"
                }`}
              >
                {status.replace("-", " ")} ({count})
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

      {/* Milestones by Status */}
      <section className="mt-8 space-y-8">
        {filteredMilestones.length === 0 ? (
          <p className="text-sm text-slate/60 italic py-8 text-center">
            No milestones match your filters.
          </p>
        ) : (
          statusOrder.map((status) => {
            const statusMilestones = filteredByStatus[status];
            if (!statusMilestones || statusMilestones.length === 0) return null;
            const colors = milestoneStatusColors[status];

            return (
              <div key={status}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className={`text-lg font-bold capitalize ${colors.text}`}>
                    {status.replace("-", " ")}
                  </h2>
                  <div className="h-px flex-1 bg-mist" />
                  <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
                    {statusMilestones.length} milestones
                  </span>
                </div>

                <div className="grid gap-4">
                  {statusMilestones
                    .sort((a, b) => (a.targetDate || a.date).localeCompare(b.targetDate || b.date))
                    .map((milestone) => {
                      const selected = isSelected(milestone.id);
                      return (
                      <div
                        key={milestone.id}
                        className={`relative group/selectable p-5 rounded-xl border bg-white ${
                          status === "in-progress"
                            ? "border-blue-200"
                            : status === "blocked"
                            ? "border-red-200"
                            : status === "complete"
                            ? "border-emerald-200"
                            : "border-mist"
                        } ${selected ? "ring-2 ring-secondary/30" : ""}`}
                      >
                        {/* Selection checkbox */}
                        <div
                          className={`absolute left-3 top-3 z-10 transition-opacity ${
                            isSelectionMode || selected ? "opacity-100" : "opacity-0 group-hover/selectable:opacity-100"
                          }`}
                        >
                          <button
                            onClick={() => toggle(milestone)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                              selected
                                ? "bg-secondary border-secondary text-white"
                                : "bg-white border-slate/30 hover:border-secondary/50"
                            }`}
                          >
                            {selected && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        </div>
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span
                            className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}
                          >
                            {status.replace("-", " ")}
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {subtypeLabels[milestone.subtype]}
                          </span>
                          {milestone.targetDate && (
                            <span className="text-[10px] text-slate/40">
                              Target: {milestone.targetDate}
                            </span>
                          )}
                          {milestone.completedDate && (
                            <span className="text-[10px] text-emerald-600">
                              Completed: {milestone.completedDate}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-secondary">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate">{milestone.summary}</p>

                        {milestone.outcome && (
                          <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-1">
                              Outcome
                            </p>
                            <p className="text-xs text-emerald-800">{milestone.outcome}</p>
                          </div>
                        )}

                        {milestone.blockers && milestone.blockers.length > 0 && (
                          <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-red-700 mb-1">
                              Blockers
                            </p>
                            <ul className="space-y-1">
                              {milestone.blockers.map((blocker, idx) => (
                                <li key={idx} className="text-xs text-red-800">
                                  • {blocker}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mt-3 flex flex-wrap gap-2">
                          {milestone.tags.map((tag) => (
                            <TagBadge key={tag} tag={tag} onClick={handleTagClick} />
                          ))}
                        </div>
                      </div>
                    );})}
                </div>
              </div>
            );
          })
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
