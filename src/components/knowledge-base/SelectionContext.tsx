"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { KnowledgeEntry } from "../../types/knowledge-base";

type SelectionContextType = {
  selectedIds: Set<string>;
  selectedEntries: KnowledgeEntry[];
  isSelected: (id: string) => boolean;
  toggle: (entry: KnowledgeEntry) => void;
  selectAll: (entries: KnowledgeEntry[]) => void;
  clearSelection: () => void;
  selectionCount: number;
  isSelectionMode: boolean;
  setSelectionMode: (mode: boolean) => void;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectedMap, setSelectedMap] = useState<Map<string, KnowledgeEntry>>(new Map());
  const [isSelectionMode, setSelectionMode] = useState(false);

  const selectedIds = new Set(selectedMap.keys());
  const selectedEntries = Array.from(selectedMap.values());

  const isSelected = useCallback(
    (id: string) => selectedMap.has(id),
    [selectedMap]
  );

  const toggle = useCallback((entry: KnowledgeEntry) => {
    setSelectedMap((prev) => {
      const next = new Map(prev);
      if (next.has(entry.id)) {
        next.delete(entry.id);
      } else {
        next.set(entry.id, entry);
      }
      return next;
    });
  }, []);

  const selectAll = useCallback((entries: KnowledgeEntry[]) => {
    setSelectedMap((prev) => {
      const next = new Map(prev);
      entries.forEach((entry) => next.set(entry.id, entry));
      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedMap(new Map());
    setSelectionMode(false);
  }, []);

  return (
    <SelectionContext.Provider
      value={{
        selectedIds,
        selectedEntries,
        isSelected,
        toggle,
        selectAll,
        clearSelection,
        selectionCount: selectedMap.size,
        isSelectionMode,
        setSelectionMode,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within SelectionProvider");
  }
  return context;
}
