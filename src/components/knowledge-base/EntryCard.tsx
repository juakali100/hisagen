"use client";

import Link from "next/link";
import TagBadge from "./TagBadge";
import {
  KnowledgeEntry,
  Attachment,
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

        {/* Attachments (communications + research) */}
        {isCommunicationEntry(entry) && entry.attachments && entry.attachments.length > 0 && !compact && (
          <div className="mt-3 p-3 rounded-lg bg-amber-50/60 border border-amber-200/40">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700/70 mb-2 flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
              </svg>
              {entry.attachments.length} {entry.attachments.length === 1 ? "Attachment" : "Attachments"}
            </p>
            <div className="space-y-1">
              {entry.attachments.map((att: Attachment, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    att.format === 'PDF' ? 'bg-red-100 text-red-600' :
                    att.format === 'Excel' ? 'bg-green-100 text-green-600' :
                    att.format === 'Image' ? 'bg-violet-100 text-violet-600' :
                    att.format === 'Presentation' ? 'bg-orange-100 text-orange-600' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {att.format}
                  </span>
                  <span className="text-slate/80">{att.title}</span>
                </div>
              ))}
            </div>
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
