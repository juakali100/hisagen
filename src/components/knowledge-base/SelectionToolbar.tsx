"use client";

import { useState } from "react";
import Link from "next/link";
import { XMarkIcon, DocumentTextIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useSelection } from "./SelectionContext";

export default function SelectionToolbar() {
  const { selectionCount, clearSelection, isSelectionMode, setSelectionMode, selectedEntries } = useSelection();

  // Don't render if no selection
  if (selectionCount === 0 && !isSelectionMode) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-secondary shadow-lg shadow-secondary/20 border border-secondary/20">
        {/* Selection count */}
        <div className="flex items-center gap-2 pr-3 border-r border-white/20">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-sm font-bold text-white">{selectionCount}</span>
          </div>
          <span className="text-sm text-white/90">
            {selectionCount === 1 ? "entry" : "entries"} selected
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {selectionCount > 0 && (
            <>
              <Link
                href="/knowledge-base/synthesis"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-secondary text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <DocumentTextIcon className="w-4 h-4" />
                Generate Report
              </Link>
            </>
          )}

          {/* Toggle selection mode */}
          {!isSelectionMode && selectionCount === 0 && (
            <button
              onClick={() => setSelectionMode(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors"
            >
              <ClipboardDocumentListIcon className="w-4 h-4" />
              Select entries
            </button>
          )}

          {/* Clear selection */}
          <button
            onClick={clearSelection}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-sm font-medium hover:bg-white/20 transition-colors"
            aria-label="Clear selection"
          >
            <XMarkIcon className="w-4 h-4" />
            {selectionCount > 0 ? "Clear" : "Done"}
          </button>
        </div>
      </div>
    </div>
  );
}
