"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import StageBreadcrumb from "../../components/StageBreadcrumb";
import { SearchBar, SectionCard, EntryCard, TagBadge, useSelection } from "../../components/knowledge-base";
import {
  communications,
  research,
  ecosystem,
  evidence,
  milestones,
  searchEntries,
  getRecentEntries,
  getAllTags,
  getKnowledgeBaseStats,
} from "../../data";

export default function ResourcesHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const { selectionCount } = useSelection();

  // Stats
  const stats = getKnowledgeBaseStats();
  const allTags = getAllTags();

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchEntries(searchQuery);
  }, [searchQuery]);

  // Recent entries for each section
  const recentCommunications = communications
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
    .map((c) => ({ title: c.title, date: c.date }));

  const recentResearch = research
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
    .map((r) => ({ title: r.title, date: r.date }));

  const recentMilestones = milestones
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
    .map((m) => ({ title: m.title, date: m.date }));

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
      <StageBreadcrumb stage="Knowledge Base" />

      {/* Header Section */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Knowledge Base
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Knowledge Base
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "This is the institutional source of truth. We consolidate key
          communications, data trials, and technical briefs into this dossier to
          inform HISAGEN's growth."
        </p>

        {/* Stats Bar */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="px-4 py-2 rounded-lg bg-white border border-mist">
            <span className="text-2xl font-bold text-secondary">{stats.total}</span>
            <span className="ml-2 text-xs text-slate/60">Total Entries</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-white border border-mist">
            <span className="text-2xl font-bold text-secondary">{stats.uniqueTags}</span>
            <span className="ml-2 text-xs text-slate/60">Tags</span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="mt-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search all entries by title, summary, or tag..."
          className="max-w-2xl"
        />

        {/* Active filters */}
        {isFiltering && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
              Filters:
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

      {/* Search Results (if searching) */}
      {searchQuery.trim() && (
        <section className="mt-8">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
              Search Results
            </h2>
            <div className="h-px flex-1 bg-mist" />
            <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
              {searchResults.length} matches
            </span>
          </div>
          {searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((entry) => (
                <EntryCard
                  key={entry.id}
                  entry={entry}
                  onTagClick={handleTagClick}
                  compact={true}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate/60 italic">
              No entries found matching "{searchQuery}"
            </p>
          )}
        </section>
      )}

      {/* Section Cards (when not searching) */}
      {!searchQuery.trim() && (
        <>
          <section className="mt-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
                Browse by Section
              </h2>
              <div className="h-px flex-1 bg-mist" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <SectionCard
                type="communication"
                title="Communications"
                description="Emails, calls, meetings, and messages capturing key discussions and decisions."
                count={stats.communications}
                href="/knowledge-base/communications"
                recentItems={recentCommunications}
              />
              <SectionCard
                type="research"
                title="Research"
                description="Decks, reports, analysis, and market data informing strategy."
                count={stats.research}
                href="/knowledge-base/research"
                recentItems={recentResearch}
              />
              <SectionCard
                type="evidence"
                title="Evidence"
                description="Trial data, MRV metrics, certifications, and verification records."
                count={stats.evidence}
                href="/knowledge-base/evidence"
                recentItems={[]}
              />
              <SectionCard
                type="milestone"
                title="Milestones"
                description="Regulatory, commercial, and operational milestones tracking progress."
                count={stats.milestones}
                href="/knowledge-base/milestones"
                recentItems={recentMilestones}
              />
              <SectionCard
                type="ecosystem"
                title="Ecosystem"
                description="Partner profiles, stakeholder relationships, and ecosystem mapping."
                count={stats.ecosystem}
                href="/ecosystem"
                recentItems={[]}
              />
            </div>
          </section>

          {/* Synthesis Engine CTA */}
          <section className="mt-8">
            <Link
              href="/knowledge-base/synthesis"
              className="block p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-parchment border border-secondary/20 hover:border-secondary/40 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <DocumentTextIcon className="size-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-secondary group-hover:text-secondary/80 transition-colors">
                      Synthesis Engine
                    </h3>
                    {selectionCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold">
                        {selectionCount} selected
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate">
                    Generate funder reports, board briefings, and partner updates from selected knowledge base entries.
                  </p>
                </div>
                <div className="text-secondary/30 group-hover:text-secondary/60 transition-colors">
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex gap-3 text-[10px] text-slate/60">
                <span className="px-2 py-1 rounded bg-white border border-mist">Funder Reports</span>
                <span className="px-2 py-1 rounded bg-white border border-mist">Board Briefings</span>
                <span className="px-2 py-1 rounded bg-white border border-mist">Partner Updates</span>
                <span className="px-2 py-1 rounded bg-white border border-mist">Custom Export</span>
              </div>
            </Link>
          </section>

          {/* Quick Access: Recent Entries */}
          <section className="mt-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
                Recent Activity
              </h2>
              <div className="h-px flex-1 bg-mist" />
              <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
                Last 5 entries
              </span>
            </div>

            <div className="space-y-4">
              {getRecentEntries(5).map((entry) => (
                <EntryCard
                  key={entry.id}
                  entry={entry}
                  onTagClick={handleTagClick}
                  compact={true}
                />
              ))}
            </div>
          </section>

          {/* Popular Tags */}
          <section className="mt-12 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">
                Browse by Tag
              </h2>
              <div className="h-px flex-1 bg-mist" />
            </div>

            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <TagBadge
                  key={tag}
                  tag={tag}
                  onClick={(t) => setSearchQuery(`#${t}`)}
                  size="md"
                />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Footer CTA */}
      <section className="my-16 flex flex-col items-center text-center p-12 rounded-2xl bg-parchment/30 border border-mist border-dashed">
        <h2 className="text-xl font-bold text-secondary mb-4 uppercase tracking-[0.2em]">
          Strategy Gaps & Discovery
        </h2>
        <p className="text-sm text-slate max-w-2xl leading-relaxed mb-6">
          The Knowledge Base above identifies what we have verified—the "white
          space" in our strategy will be filled through active AI synthesis
          based on these sources.
        </p>
        <div className="flex gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded">
            Next: Revenue Model Scenarios
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded">
            Next: Legal Structure Synthesis
          </span>
        </div>
      </section>
    </div>
  );
}
