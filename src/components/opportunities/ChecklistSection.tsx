"use client";

import { useState } from "react";
import { ChecklistItem, ChecklistItemStatus } from "../../types/opportunities";

interface ChecklistSectionProps {
  title: string;
  items: ChecklistItem[];
  onUpdate?: (items: ChecklistItem[]) => void;
  readonly?: boolean;
}

const statusOptions: { value: ChecklistItemStatus; label: string; color: string }[] = [
  { value: "unchecked", label: "Not Checked", color: "bg-slate-200 text-slate-600" },
  { value: "passed", label: "Passed", color: "bg-emerald-100 text-emerald-700" },
  { value: "failed", label: "Failed", color: "bg-red-100 text-red-700" },
  { value: "unclear", label: "Unclear", color: "bg-amber-100 text-amber-700" },
  { value: "na", label: "N/A", color: "bg-slate-100 text-slate-500" },
];

const StatusIcon = ({ status }: { status: ChecklistItemStatus }) => {
  switch (status) {
    case "passed":
      return <span className="text-emerald-500 font-bold">✓</span>;
    case "failed":
      return <span className="text-red-500 font-bold">✗</span>;
    case "unclear":
      return <span className="text-amber-500 font-bold">?</span>;
    case "na":
      return <span className="text-slate-400">—</span>;
    default:
      return <span className="text-slate-300">○</span>;
  }
};

export default function ChecklistSection({ title, items, onUpdate, readonly = false }: ChecklistSectionProps) {
  const [localItems, setLocalItems] = useState<ChecklistItem[]>(items);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [noteText, setNoteText] = useState("");

  const handleStatusChange = (itemId: string, newStatus: ChecklistItemStatus) => {
    const updated = localItems.map((item) =>
      item.id === itemId
        ? { ...item, status: newStatus, verifiedDate: new Date().toISOString().split("T")[0] }
        : item
    );
    setLocalItems(updated);
    onUpdate?.(updated);
  };

  const handleNoteSave = (itemId: string) => {
    const updated = localItems.map((item) =>
      item.id === itemId ? { ...item, notes: noteText } : item
    );
    setLocalItems(updated);
    onUpdate?.(updated);
    setEditingNotes(null);
    setNoteText("");
  };

  const startEditingNotes = (item: ChecklistItem) => {
    setEditingNotes(item.id);
    setNoteText(item.notes);
  };

  // Calculate summary stats
  const passedCount = localItems.filter((i) => i.status === "passed").length;
  const totalCheckable = localItems.filter((i) => i.status !== "na").length;

  return (
    <div className="p-4 rounded-lg border border-mist">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">{title}</p>
        <span className="text-xs text-slate">
          {passedCount}/{totalCheckable} verified
        </span>
      </div>

      <div className="space-y-2">
        {localItems.map((item) => (
          <div key={item.id} className="rounded bg-slate-50 border border-slate-200">
            <div
              className="flex items-start gap-3 p-3 cursor-pointer hover:bg-slate-100 transition-colors"
              onClick={() => !readonly && setExpandedItem(expandedItem === item.id ? null : item.id)}
            >
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <StatusIcon status={item.status} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-secondary">{item.item}</p>
                {item.notes && !editingNotes && (
                  <p className="text-xs text-slate mt-1 truncate">{item.notes}</p>
                )}
              </div>
              {!readonly && (
                <span className="text-xs text-slate/40 shrink-0">
                  {expandedItem === item.id ? "▼" : "▶"}
                </span>
              )}
            </div>

            {/* Expanded edit view */}
            {expandedItem === item.id && !readonly && (
              <div className="px-3 pb-3 border-t border-slate-200 bg-white">
                <div className="pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">
                    Status
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {statusOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(item.id, opt.value);
                        }}
                        className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                          item.status === opt.value
                            ? `${opt.color} ring-2 ring-offset-1 ring-current`
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-2">
                      Notes
                    </p>
                    {editingNotes === item.id ? (
                      <div className="space-y-2">
                        <textarea
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          rows={3}
                          placeholder="Add notes about this item..."
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNoteSave(item.id);
                            }}
                            className="px-3 py-1.5 text-xs font-medium bg-primary text-white rounded hover:bg-primary/90"
                          >
                            Save
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingNotes(null);
                            }}
                            className="px-3 py-1.5 text-xs font-medium text-slate hover:text-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditingNotes(item);
                        }}
                        className="p-2 text-sm text-slate bg-white border border-dashed border-slate-300 rounded cursor-pointer hover:border-primary/50"
                      >
                        {item.notes || "Click to add notes..."}
                      </div>
                    )}
                  </div>

                  {item.verifiedDate && (
                    <p className="mt-3 text-[10px] text-slate/60">
                      Last verified: {item.verifiedDate}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
