"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  KnowledgeEntry,
  EntryType,
  entryTypeColors,
  entryTypeLabels,
  isCommunicationEntry,
  isMilestoneEntry,
  milestoneStatusColors,
} from "../../types/knowledge-base";
import TagBadge from "./TagBadge";

// ============================================
// Types
// ============================================

type TimelineGrouping = "month" | "quarter" | "year";

type TimelineProps = {
  entries: KnowledgeEntry[];
  onTagClick?: (tag: string) => void;
  initialGrouping?: TimelineGrouping;
  showFilters?: boolean;
};

type GroupedEntries = {
  label: string;
  sortKey: string;
  entries: KnowledgeEntry[];
};

// ============================================
// Helper Functions
// ============================================

function getMonthLabel(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function getQuarterLabel(dateStr: string): string {
  const date = new Date(dateStr);
  const quarter = Math.floor(date.getMonth() / 3) + 1;
  return `Q${quarter} ${date.getFullYear()}`;
}

function getYearLabel(dateStr: string): string {
  return new Date(dateStr).getFullYear().toString();
}

function getGroupKey(dateStr: string, grouping: TimelineGrouping): string {
  const date = new Date(dateStr);
  switch (grouping) {
    case "month":
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    case "quarter":
      const quarter = Math.floor(date.getMonth() / 3) + 1;
      return `${date.getFullYear()}-Q${quarter}`;
    case "year":
      return date.getFullYear().toString();
  }
}

function getGroupLabel(dateStr: string, grouping: TimelineGrouping): string {
  switch (grouping) {
    case "month":
      return getMonthLabel(dateStr);
    case "quarter":
      return getQuarterLabel(dateStr);
    case "year":
      return getYearLabel(dateStr);
  }
}

function groupEntriesByTime(
  entries: KnowledgeEntry[],
  grouping: TimelineGrouping
): GroupedEntries[] {
  const groups = new Map<string, { label: string; entries: KnowledgeEntry[] }>();

  entries.forEach((entry) => {
    const key = getGroupKey(entry.date, grouping);
    const label = getGroupLabel(entry.date, grouping);

    if (!groups.has(key)) {
      groups.set(key, { label, entries: [] });
    }
    groups.get(key)!.entries.push(entry);
  });

  // Sort groups by key (descending - newest first)
  return Array.from(groups.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([sortKey, { label, entries }]) => ({
      label,
      sortKey,
      // Sort entries within group by date (descending)
      entries: entries.sort((a, b) => b.date.localeCompare(a.date)),
    }));
}

// ============================================
// Sub-components
// ============================================

function TimelineEntryCard({
  entry,
  onTagClick,
  isLast,
}: {
  entry: KnowledgeEntry;
  onTagClick?: (tag: string) => void;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const typeColor = entryTypeColors[entry.type];

  const getSubtypeLabel = (): string | null => {
    if (isCommunicationEntry(entry)) {
      return entry.subtype.charAt(0).toUpperCase() + entry.subtype.slice(1);
    }
    if (isMilestoneEntry(entry)) {
      return entry.subtype.charAt(0).toUpperCase() + entry.subtype.slice(1);
    }
    return null;
  };

  const subtypeLabel = getSubtypeLabel();

  return (
    <div className="relative flex gap-4 pb-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 w-0.5 h-[calc(100%-12px)] bg-mist" />
      )}

      {/* Timeline dot */}
      <div
        className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${typeColor.bg} border-2 border-white shadow-sm`}
      >
        <div className={`w-2 h-2 rounded-full ${typeColor.bg.replace("100", "500")}`} />
      </div>

      {/* Entry content */}
      <div
        className={`flex-1 p-4 rounded-xl border border-mist bg-white hover:border-secondary/30 transition-all cursor-pointer ${
          expanded ? "shadow-sm" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span
            className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${typeColor.bg} ${typeColor.text}`}
          >
            {entry.type}
          </span>
          {subtypeLabel && (
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              {subtypeLabel}
            </span>
          )}
          {isMilestoneEntry(entry) && (
            <span
              className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                milestoneStatusColors[entry.status].bg
              } ${milestoneStatusColors[entry.status].text}`}
            >
              {entry.status}
            </span>
          )}
          <span className="text-[10px] text-slate/40 ml-auto">
            {new Date(entry.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-secondary">{entry.title}</h3>

        {/* Summary (always visible) */}
        <p className="text-xs text-slate mt-1 line-clamp-2">{entry.summary}</p>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-mist space-y-3">
            {/* Full summary */}
            <p className="text-sm text-slate leading-relaxed">{entry.summary}</p>

            {/* Communication-specific info */}
            {isCommunicationEntry(entry) && (
              <div className="text-xs text-slate/60">
                <span className="font-medium">{entry.from}</span>
                <span className="mx-1">→</span>
                <span>
                  {Array.isArray(entry.to) ? entry.to.join(", ") : entry.to}
                </span>
              </div>
            )}

            {/* Milestone-specific info */}
            {isMilestoneEntry(entry) && entry.targetDate && (
              <div className="text-xs text-slate/60">
                <span className="font-medium">Target:</span> {entry.targetDate}
                {entry.completedDate && (
                  <span className="ml-3">
                    <span className="font-medium">Completed:</span>{" "}
                    {entry.completedDate}
                  </span>
                )}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <TagBadge
                  key={tag}
                  tag={tag}
                  onClick={(t) => {
                    if (onTagClick) onTagClick(t);
                  }}
                  size="sm"
                />
              ))}
            </div>
          </div>
        )}

        {/* Expand indicator */}
        <div className="flex items-center justify-center mt-2">
          <span className="text-[9px] text-slate/40 uppercase tracking-widest">
            {expanded ? "Click to collapse" : "Click to expand"}
          </span>
        </div>
      </div>
    </div>
  );
}

function TimelineGroup({
  group,
  onTagClick,
}: {
  group: GroupedEntries;
  onTagClick?: (tag: string) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="mb-8">
      {/* Group header */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-3 mb-4 w-full text-left group"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-secondary">{group.label}</span>
          <span className="text-xs font-medium text-slate/40 bg-slate-50 px-2 py-0.5 rounded">
            {group.entries.length} {group.entries.length === 1 ? "entry" : "entries"}
          </span>
        </div>
        <div className="h-px flex-1 bg-mist" />
        <span
          className={`text-slate/40 transition-transform ${
            collapsed ? "rotate-0" : "rotate-180"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </span>
      </button>

      {/* Entries */}
      {!collapsed && (
        <div className="pl-1">
          {group.entries.map((entry, idx) => (
            <TimelineEntryCard
              key={entry.id}
              entry={entry}
              onTagClick={onTagClick}
              isLast={idx === group.entries.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export default function Timeline({
  entries,
  onTagClick,
  initialGrouping = "month",
  showFilters = true,
}: TimelineProps) {
  const [grouping, setGrouping] = useState<TimelineGrouping>(initialGrouping);
  const [selectedTypes, setSelectedTypes] = useState<EntryType[]>([]);

  // Filter entries by selected types
  const filteredEntries = useMemo(() => {
    if (selectedTypes.length === 0) return entries;
    return entries.filter((e) => selectedTypes.includes(e.type));
  }, [entries, selectedTypes]);

  // Group entries by time period
  const groupedEntries = useMemo(
    () => groupEntriesByTime(filteredEntries, grouping),
    [filteredEntries, grouping]
  );

  // Get unique types from entries
  const availableTypes = useMemo(() => {
    const types = new Set<EntryType>();
    entries.forEach((e) => types.add(e.type));
    return Array.from(types);
  }, [entries]);

  // Toggle type filter
  const toggleType = (type: EntryType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Date range for display
  const dateRange = useMemo(() => {
    if (entries.length === 0) return null;
    const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
    const oldest = new Date(sorted[0].date);
    const newest = new Date(sorted[sorted.length - 1].date);
    return {
      start: oldest.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      end: newest.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };
  }, [entries]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      {showFilters && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-parchment/40 border border-mist">
          {/* Grouping selector */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
              Group by:
            </span>
            <div className="flex gap-1 bg-white rounded-lg p-1 border border-mist">
              {(["month", "quarter", "year"] as TimelineGrouping[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGrouping(g)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    grouping === g
                      ? "bg-secondary text-white"
                      : "text-slate hover:bg-slate-100"
                  }`}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Type filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
              Filter:
            </span>
            {availableTypes.map((type) => {
              const colors = entryTypeColors[type];
              const isSelected = selectedTypes.includes(type);
              return (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-all ${
                    isSelected
                      ? `${colors.bg} ${colors.text} ring-2 ring-offset-1 ring-secondary/30`
                      : "bg-white border border-mist text-slate/60 hover:border-secondary/30"
                  }`}
                >
                  {entryTypeLabels[type]}
                </button>
              );
            })}
            {selectedTypes.length > 0 && (
              <button
                onClick={() => setSelectedTypes([])}
                className="text-[10px] font-medium text-secondary underline underline-offset-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {/* Stats bar */}
      <div className="flex items-center gap-4 text-xs text-slate/60">
        <span>
          <strong className="text-secondary">{filteredEntries.length}</strong> entries
        </span>
        <span className="w-1 h-1 rounded-full bg-slate/30" />
        <span>
          <strong className="text-secondary">{groupedEntries.length}</strong> time periods
        </span>
        {dateRange && (
          <>
            <span className="w-1 h-1 rounded-full bg-slate/30" />
            <span>
              {dateRange.start} — {dateRange.end}
            </span>
          </>
        )}
      </div>

      {/* Timeline */}
      <div className="mt-6">
        {groupedEntries.length > 0 ? (
          groupedEntries.map((group) => (
            <TimelineGroup key={group.sortKey} group={group} onTagClick={onTagClick} />
          ))
        ) : (
          <div className="text-center py-12 text-slate/60">
            <p className="text-sm">No entries match the current filters.</p>
            {selectedTypes.length > 0 && (
              <button
                onClick={() => setSelectedTypes([])}
                className="mt-2 text-xs text-secondary underline underline-offset-2"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
