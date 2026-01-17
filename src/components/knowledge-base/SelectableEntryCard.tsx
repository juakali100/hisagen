"use client";

import { KnowledgeEntry } from "../../types/knowledge-base";
import EntryCard from "./EntryCard";
import { useSelection } from "./SelectionContext";

type SelectableEntryCardProps = {
  entry: KnowledgeEntry;
  onTagClick?: (tag: string) => void;
  showType?: boolean;
  compact?: boolean;
};

export default function SelectableEntryCard({
  entry,
  onTagClick,
  showType = true,
  compact = false,
}: SelectableEntryCardProps) {
  const { isSelected, toggle, isSelectionMode } = useSelection();
  const selected = isSelected(entry.id);

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle(entry);
  };

  return (
    <div className="relative group/selectable">
      {/* Checkbox - always visible in selection mode, or on hover */}
      <div
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 transition-opacity ${
          isSelectionMode || selected ? "opacity-100" : "opacity-0 group-hover/selectable:opacity-100"
        }`}
      >
        <button
          onClick={handleCheckboxClick}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            selected
              ? "bg-secondary border-secondary text-white"
              : "bg-white border-slate/30 hover:border-secondary/50"
          }`}
          aria-label={selected ? "Deselect entry" : "Select entry"}
        >
          {selected && (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>

      {/* Entry card with left padding for checkbox */}
      <div
        className={`transition-all ${
          isSelectionMode || selected ? "pl-10" : "group-hover/selectable:pl-10"
        } ${selected ? "ring-2 ring-secondary/30 rounded-xl" : ""}`}
      >
        <EntryCard
          entry={entry}
          onTagClick={onTagClick}
          showType={showType}
          compact={compact}
        />
      </div>
    </div>
  );
}
