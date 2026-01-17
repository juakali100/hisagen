"use client";

import { useState } from "react";
import Link from "next/link";
import { ClockIcon, ArrowLeftIcon, QuestionMarkCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { Timeline, SearchBar, TagBadge } from "../../../components/knowledge-base";
import { getAllEntries, getAllTags, getKnowledgeBaseStats } from "../../../data";

export default function TimelinePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [showGuide, setShowGuide] = useState(false);

  const allEntries = getAllEntries();
  const allTags = getAllTags();
  const stats = getKnowledgeBaseStats();

  // Filter entries by search and tags
  const filteredEntries = allEntries.filter((entry) => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        entry.title.toLowerCase().includes(query) ||
        entry.summary.toLowerCase().includes(query) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // Tag filter
    if (activeTags.length > 0) {
      const hasTag = activeTags.some((tag) => entry.tags.includes(tag));
      if (!hasTag) return false;
    }

    return true;
  });

  // Tag toggle handler
  const handleTagClick = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setActiveTags([]);
  };

  const isFiltering = searchQuery.trim() || activeTags.length > 0;

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Timeline"
        trail={[{ label: "Knowledge Base", href: "/knowledge-base" }]}
      />

      {/* Header Section */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
              Knowledge Base
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary flex items-center gap-4">
              <ClockIcon className="w-10 h-10 text-secondary/60" />
              Timeline View
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
              "Chronological view of all knowledge base entries. See how HISAGEN's
              intelligence has developed over time."
            </p>
          </div>
          <Link
            href="/knowledge-base"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-secondary/80 bg-white border border-mist rounded-lg hover:border-secondary/30 transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Hub
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="px-4 py-2 rounded-lg bg-white border border-mist">
            <span className="text-2xl font-bold text-secondary">{stats.total}</span>
            <span className="ml-2 text-xs text-slate/60">Total Entries</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-white border border-mist">
            <span className="text-2xl font-bold text-secondary">
              {filteredEntries.length}
            </span>
            <span className="ml-2 text-xs text-slate/60">
              {isFiltering ? "Filtered" : "Showing"}
            </span>
          </div>
        </div>
      </section>

      {/* How to Use Guide */}
      <section className="mt-6">
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors group"
        >
          <QuestionMarkCircleIcon className="w-5 h-5" />
          <span className="font-medium">How to use the Timeline</span>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${showGuide ? "rotate-180" : ""}`}
          />
        </button>

        {showGuide && (
          <div className="mt-4 p-6 rounded-xl bg-white border border-mist">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Grouping */}
              <div>
                <h3 className="text-sm font-bold text-secondary mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary text-xs flex items-center justify-center">1</span>
                  Change Time Grouping
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Use the <strong>Month</strong>, <strong>Quarter</strong>, or <strong>Year</strong> buttons to change how entries are grouped. Month shows the most detail, Year gives a high-level overview.
                </p>
              </div>

              {/* Type Filters */}
              <div>
                <h3 className="text-sm font-bold text-secondary mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary text-xs flex items-center justify-center">2</span>
                  Filter by Type
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Click the type buttons (<strong>Communications</strong>, <strong>Research</strong>, <strong>Evidence</strong>, etc.) to show only specific entry types. Click again to remove the filter.
                </p>
              </div>

              {/* Expand Entries */}
              <div>
                <h3 className="text-sm font-bold text-secondary mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary text-xs flex items-center justify-center">3</span>
                  Expand Entries
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Click any entry card to expand it and see full details including tags, sender/recipient info, and related metadata. Click again to collapse.
                </p>
              </div>

              {/* Search & Tags */}
              <div>
                <h3 className="text-sm font-bold text-secondary mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary text-xs flex items-center justify-center">4</span>
                  Search & Tag Filters
                </h3>
                <p className="text-xs text-slate leading-relaxed">
                  Use the search bar to find entries by keyword. Click tag buttons below to filter by theme (e.g., #Uganda, #Locus AG). Multiple filters can be combined.
                </p>
              </div>
            </div>

            {/* Example Use Cases */}
            <div className="mt-6 pt-4 border-t border-mist">
              <h3 className="text-xs font-bold text-slate/60 uppercase tracking-widest mb-3">Example Questions This Helps Answer</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-slate-50 text-slate px-3 py-1.5 rounded-lg">"What happened in November 2025?"</span>
                <span className="text-xs bg-slate-50 text-slate px-3 py-1.5 rounded-lg">"Show me all milestones"</span>
                <span className="text-xs bg-slate-50 text-slate px-3 py-1.5 rounded-lg">"What communications mention Locus?"</span>
                <span className="text-xs bg-slate-50 text-slate px-3 py-1.5 rounded-lg">"Give me a quarterly overview"</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Search Section */}
      <section className="mt-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search timeline entries..."
          className="max-w-2xl"
        />

        {/* Active filters */}
        {isFiltering && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
              Filters:
            </span>
            {searchQuery.trim() && (
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                "{searchQuery}"
              </span>
            )}
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

      {/* Quick Tag Filter */}
      <section className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
            Quick filter by tag:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 12).map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              onClick={handleTagClick}
              isActive={activeTags.includes(tag)}
              size="sm"
            />
          ))}
          {allTags.length > 12 && (
            <span className="text-xs text-slate/40 py-1">
              +{allTags.length - 12} more
            </span>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-8 mb-16">
        <Timeline
          entries={filteredEntries}
          onTagClick={handleTagClick}
          initialGrouping="month"
          showFilters={true}
        />
      </section>
    </div>
  );
}
