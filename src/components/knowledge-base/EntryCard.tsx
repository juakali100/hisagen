"use client";

import Link from "next/link";
import TagBadge from "./TagBadge";
import {
  KnowledgeEntry,
  entryTypeColors,
  isCommunicationEntry,
  isResearchEntry,
  isMilestoneEntry,
  communicationSubtypeLabels,
  milestoneStatusColors,
} from "../../types/knowledge-base";

type EntryCardProps = {
  entry: KnowledgeEntry;
  onTagClick?: (tag: string) => void;
  showType?: boolean;
  compact?: boolean;
};

export default function EntryCard({
  entry,
  onTagClick,
  showType = true,
  compact = false,
}: EntryCardProps) {
  const typeColor = entryTypeColors[entry.type];

  // Get subtype label for communications
  const getSubtypeLabel = () => {
    if (isCommunicationEntry(entry)) {
      return communicationSubtypeLabels[entry.subtype];
    }
    if (isResearchEntry(entry)) {
      return entry.subtype.charAt(0).toUpperCase() + entry.subtype.slice(1).replace("-", " ");
    }
    if (isMilestoneEntry(entry)) {
      return entry.subtype.charAt(0).toUpperCase() + entry.subtype.slice(1);
    }
    return null;
  };

  // Get synthesis points if available
  const getSynthesis = (): string[] => {
    if (isCommunicationEntry(entry) || isResearchEntry(entry)) {
      return entry.synthesis || [];
    }
    return [];
  };

  const subtypeLabel = getSubtypeLabel();
  const synthesis = getSynthesis();

  return (
    <div className="group relative flex flex-col md:flex-row md:items-start justify-between gap-4 p-5 rounded-xl border border-mist bg-white hover:border-secondary/40 transition-all hover:shadow-sm motion-reduce:transition-none">
      <div className="flex-1 space-y-2">
        {/* Header row: type badge, subtype badge, date */}
        <div className="flex items-center gap-3 flex-wrap">
          {showType && (
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${typeColor.bg} ${typeColor.text}`}>
              {entry.type}
            </span>
          )}
          {subtypeLabel && (
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              {subtypeLabel}
            </span>
          )}
          {isMilestoneEntry(entry) && (
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${milestoneStatusColors[entry.status].bg} ${milestoneStatusColors[entry.status].text}`}>
              {entry.status}
            </span>
          )}
          <span className="text-[10px] text-slate/40">{entry.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-secondary">{entry.title}</h3>

        {/* Summary */}
        <p className="text-sm text-slate leading-relaxed max-w-3xl">
          {entry.summary}
        </p>

        {/* Synthesis (if available and not compact) */}
        {!compact && synthesis.length > 0 && (
          <div className="mt-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Key Points
            </p>
            <ul className="space-y-1.5">
              {synthesis.slice(0, compact ? 2 : undefined).map((bullet, idx) => (
                <li key={idx} className="text-xs text-slate flex gap-2">
                  <span className="text-secondary/50">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Communication-specific: from/to */}
        {isCommunicationEntry(entry) && (
          <div className="text-[10px] text-slate/60">
            <span className="font-medium">{entry.from}</span>
            <span className="mx-1">→</span>
            <span>{Array.isArray(entry.to) ? entry.to.join(", ") : entry.to}</span>
          </div>
        )}

        {/* Milestone-specific: target date */}
        {isMilestoneEntry(entry) && entry.targetDate && (
          <div className="text-[10px] text-slate/60">
            <span className="font-medium">Target:</span> {entry.targetDate}
            {entry.completedDate && (
              <span className="ml-3">
                <span className="font-medium">Completed:</span> {entry.completedDate}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {entry.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} onClick={onTagClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
