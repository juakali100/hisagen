"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { SearchBar, EntryCard, TagBadge, DateRangeFilter, filterByDateRange, ProjectFilter } from "../../../components/knowledge-base";
import type { DateRange } from "../../../components/knowledge-base";
import {
  communications,
  getCommunicationTags,
  CommunicationEntry,
  communicationSubtypeLabels,
  CommunicationSubtype,
} from "../../../data";

export default function CommunicationsPage() {
  return (
    <Suspense>
      <CommunicationsContent />
    </Suspense>
  );
}

function CommunicationsContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<string | null>(searchParams.get("project"));
  const [activeSubtype, setActiveSubtype] = useState<CommunicationSubtype | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>(null);
  const allTags = getCommunicationTags();
  const subtypes: CommunicationSubtype[] = ["email", "call", "meeting", "whatsapp", "document"];

  // Filter communications
  const filteredCommunications = useMemo(() => {
    let result = [...communications];

    // Filter by project
    if (activeProject) {
      result = result.filter((c) => c.project === activeProject);
    }

    // Filter by date range
    result = filterByDateRange(result, dateRange);

    // Filter by subtype
    if (activeSubtype) {
      result = result.filter((c) => c.subtype === activeSubtype);
    }

    // Filter by tags
    if (activeTags.length > 0) {
      result = result.filter((c) => activeTags.some((tag) => c.tags.includes(tag)));
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.summary.toLowerCase().includes(query) ||
          c.from.toLowerCase().includes(query) ||
          (Array.isArray(c.to) ? c.to.join(" ") : c.to).toLowerCase().includes(query) ||
          c.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [searchQuery, activeProject, activeSubtype, activeTags, dateRange]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // Group by year → month
  const groupedByYearMonth = useMemo(() => {
    const result: Record<string, Record<string, CommunicationEntry[]>> = {};
    for (const comm of filteredCommunications) {
      const [year, monthNum] = comm.date.split("-");
      if (!result[year]) result[year] = {};
      const monthKey = monthNum; // "01", "02", etc.
      if (!result[year][monthKey]) result[year][monthKey] = [];
      result[year][monthKey].push(comm);
    }
    return result;
  }, [filteredCommunications]);

  const years = Object.keys(groupedByYearMonth).sort((a, b) => b.localeCompare(a));

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
      <StageBreadcrumb stage="Communications" />

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
          Pandion Advisory Communications
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Emails, calls, meetings, and messages shared between HISAGEN (Keir/Scott) and Pandion (Nic) through the advisory relationship.
        </p>
        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate/50">
          Program-internal communications between HISAGEN team members, NARO, regulators, and other partners are managed separately.
          Items shared with Pandion through the advisory channel are captured here.
        </p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">{communications.length}</span>
            <span className="ml-2 text-xs text-slate/60">Total</span>
          </div>
          {isFiltering && (
            <div className="px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20">
              <span className="text-lg font-bold text-secondary">{filteredCommunications.length}</span>
              <span className="ml-2 text-xs text-secondary/60">Matching</span>
            </div>
          )}
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
          placeholder="Search communications..."
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
          {subtypes.map((subtype) => (
            <button
              key={subtype}
              onClick={() => setActiveSubtype(activeSubtype === subtype ? null : subtype)}
              className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
                activeSubtype === subtype
                  ? "bg-secondary text-white"
                  : "bg-parchment text-slate/60 hover:bg-secondary/10"
              }`}
            >
              {communicationSubtypeLabels[subtype]}
            </button>
          ))}
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

      {/* Communications by Year */}
      <section className="mt-8 space-y-4">
        {years.length === 0 ? (
          <p className="text-sm text-slate/60 italic py-8 text-center">
            No communications match your filters.
          </p>
        ) : (
          years.map((year) => {
            const months = Object.keys(groupedByYearMonth[year]).sort((a, b) => b.localeCompare(a));
            const yearTotal = months.reduce((sum, m) => sum + groupedByYearMonth[year][m].length, 0);

            return (
              <Disclosure key={year} defaultOpen={year === years[0]}>
                {({ open }) => (
                  <div className="rounded-xl border border-mist bg-parchment/20 overflow-hidden">
                    <DisclosureButton className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-parchment/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-secondary">{year}</span>
                        <span className="text-[10px] text-slate/60 font-medium">
                          {yearTotal} {yearTotal === 1 ? "item" : "items"}
                        </span>
                      </div>
                      <ChevronDownIcon
                        className={`size-5 text-secondary/50 transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pb-4 space-y-2 pt-2">
                      {months.map((monthKey) => {
                        const monthEntries = groupedByYearMonth[year][monthKey];
                        const monthLabel = monthNames[parseInt(monthKey, 10) - 1];

                        return (
                          <Disclosure key={monthKey} defaultOpen={months.indexOf(monthKey) === 0}>
                            {({ open: monthOpen }) => (
                              <div className="rounded-lg border border-mist/60 bg-white/60 overflow-hidden">
                                <DisclosureButton className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-parchment/30 transition-colors">
                                  <div className="flex items-center gap-3">
                                    <span className="text-xs font-semibold text-secondary/80">{monthLabel}</span>
                                    <span className="text-[10px] text-slate/50 font-medium">
                                      {monthEntries.length} {monthEntries.length === 1 ? "item" : "items"}
                                    </span>
                                  </div>
                                  <ChevronDownIcon
                                    className={`size-4 text-secondary/30 transition-transform duration-200 ${
                                      monthOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </DisclosureButton>
                                <DisclosurePanel className="px-3 pb-3">
                                  <div className="grid gap-3 pt-1">
                                    {monthEntries
                                      .sort((a, b) => b.date.localeCompare(a.date))
                                      .map((comm) => (
                                        <EntryCard
                                          key={comm.id}
                                          entry={comm}
                                          onTagClick={handleTagClick}
                                          showType={false}
                                        />
                                      ))}
                                  </div>
                                </DisclosurePanel>
                              </div>
                            )}
                          </Disclosure>
                        );
                      })}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
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
