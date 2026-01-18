"use client";

import { useState } from "react";
import { Note } from "../../types/opportunities";

interface NotesSectionProps {
  notes: Note[];
  currentPhase?: number;
  onUpdate?: (notes: Note[]) => void;
  readonly?: boolean;
}

export default function NotesSection({
  notes,
  currentPhase,
  onUpdate,
  readonly = false,
}: NotesSectionProps) {
  const [localNotes, setLocalNotes] = useState<Note[]>(notes);
  const [isAdding, setIsAdding] = useState(false);
  const [noteContent, setNoteContent] = useState("");
  const [notePhase, setNotePhase] = useState<number | undefined>(currentPhase);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteContent.trim()) return;

    const newNote: Note = {
      id: `note-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      author: "User", // Could be dynamic based on auth
      content: noteContent.trim(),
      phase: notePhase,
    };

    const updated = [newNote, ...localNotes]; // Add to top (most recent first)
    setLocalNotes(updated);
    onUpdate?.(updated);
    setIsAdding(false);
    setNoteContent("");
    setNotePhase(currentPhase);
  };

  const handleDelete = (noteId: string) => {
    const updated = localNotes.filter((n) => n.id !== noteId);
    setLocalNotes(updated);
    onUpdate?.(updated);
  };

  const getPhaseColor = (phase?: number) => {
    switch (phase) {
      case 2: return "bg-slate-200 text-slate-600";
      case 3: return "bg-amber-200 text-amber-700";
      case 4: return "bg-sky-200 text-sky-700";
      case 5: return "bg-purple-200 text-purple-700";
      case 6: return "bg-emerald-200 text-emerald-700";
      default: return "bg-slate-200 text-slate-500";
    }
  };

  return (
    <div className="p-6 rounded-xl border border-mist bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
          Activity Notes
        </p>
        {!readonly && !isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="text-xs font-medium text-primary hover:text-primary/80"
          >
            + Add Note
          </button>
        )}
      </div>

      {/* Add Note Form */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <div className="mb-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Note
            </label>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              rows={3}
              placeholder="Add a note about this opportunity..."
              autoFocus
              required
            />
          </div>

          <div className="mb-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate/60 block mb-1">
              Phase (optional)
            </label>
            <select
              value={notePhase || ""}
              onChange={(e) => setNotePhase(e.target.value ? Number(e.target.value) : undefined)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">No specific phase</option>
              <option value="2">Phase 02 - Landscape</option>
              <option value="3">Phase 03 - Engagement</option>
              <option value="4">Phase 04 - Due Diligence</option>
              <option value="5">Phase 05 - Proposal</option>
              <option value="6">Phase 06 - Contracting</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium bg-primary text-white rounded hover:bg-primary/90"
            >
              Add Note
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setNoteContent("");
                setNotePhase(currentPhase);
              }}
              className="px-4 py-2 text-xs font-medium text-slate hover:text-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Notes List */}
      {localNotes.length > 0 ? (
        <div className="space-y-3">
          {localNotes.map((note) => (
            <div
              key={note.id}
              className="p-3 rounded-lg bg-slate-50 border border-slate-200 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-secondary">{note.date}</span>
                    <span className="text-[9px] text-slate/60">{note.author}</span>
                    {note.phase && (
                      <span
                        className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded ${getPhaseColor(
                          note.phase
                        )}`}
                      >
                        Phase {note.phase}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate whitespace-pre-wrap">{note.content}</p>
                </div>
                {!readonly && (
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="opacity-0 group-hover:opacity-100 ml-2 text-red-400 hover:text-red-600 text-xs transition-opacity"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate/60 italic">No notes yet</p>
      )}
    </div>
  );
}
