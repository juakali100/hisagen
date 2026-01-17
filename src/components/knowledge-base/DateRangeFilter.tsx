"use client";

import { useState } from "react";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/20/solid";

export type DateRange = {
  start: string;
  end: string;
} | null;

type PresetRange = {
  label: string;
  getValue: () => { start: string; end: string };
};

const presetRanges: PresetRange[] = [
  {
    label: "Last 30 days",
    getValue: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 30);
      return {
        start: start.toISOString().split("T")[0],
        end: end.toISOString().split("T")[0],
      };
    },
  },
  {
    label: "Last 90 days",
    getValue: () => {
      const end = new Date();
      const start = new Date();
      start.setDate(start.getDate() - 90);
      return {
        start: start.toISOString().split("T")[0],
        end: end.toISOString().split("T")[0],
      };
    },
  },
  {
    label: "This year",
    getValue: () => {
      const now = new Date();
      return {
        start: `${now.getFullYear()}-01-01`,
        end: now.toISOString().split("T")[0],
      };
    },
  },
  {
    label: "Last year",
    getValue: () => {
      const now = new Date();
      const lastYear = now.getFullYear() - 1;
      return {
        start: `${lastYear}-01-01`,
        end: `${lastYear}-12-31`,
      };
    },
  },
  {
    label: "2025",
    getValue: () => ({
      start: "2025-01-01",
      end: "2025-12-31",
    }),
  },
  {
    label: "2024",
    getValue: () => ({
      start: "2024-01-01",
      end: "2024-12-31",
    }),
  },
];

type DateRangeFilterProps = {
  value: DateRange;
  onChange: (range: DateRange) => void;
  className?: string;
};

export default function DateRangeFilter({ value, onChange, className = "" }: DateRangeFilterProps) {
  const [showCustom, setShowCustom] = useState(false);
  const [customStart, setCustomStart] = useState(value?.start || "");
  const [customEnd, setCustomEnd] = useState(value?.end || "");

  const handlePresetClick = (preset: PresetRange) => {
    const range = preset.getValue();
    onChange(range);
    setShowCustom(false);
  };

  const handleCustomApply = () => {
    if (customStart && customEnd) {
      onChange({ start: customStart, end: customEnd });
    }
  };

  const handleClear = () => {
    onChange(null);
    setCustomStart("");
    setCustomEnd("");
    setShowCustom(false);
  };

  const formatDateRange = (range: DateRange) => {
    if (!range) return null;
    const start = new Date(range.start).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" });
    const end = new Date(range.end).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" });
    return `${start} – ${end}`;
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40 flex items-center gap-1">
          <CalendarIcon className="size-3" />
          Date:
        </span>

        <button
          onClick={handleClear}
          className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
            !value
              ? "bg-secondary text-white"
              : "bg-parchment text-slate/60 hover:bg-secondary/10"
          }`}
        >
          All time
        </button>

        {presetRanges.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handlePresetClick(preset)}
            className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
              value && formatDateRange(value) === formatDateRange(preset.getValue())
                ? "bg-secondary text-white"
                : "bg-parchment text-slate/60 hover:bg-secondary/10"
            }`}
          >
            {preset.label}
          </button>
        ))}

        <button
          onClick={() => setShowCustom(!showCustom)}
          className={`text-[10px] font-medium px-2 py-1 rounded transition-colors ${
            showCustom
              ? "bg-secondary/20 text-secondary"
              : "bg-parchment text-slate/60 hover:bg-secondary/10"
          }`}
        >
          Custom
        </button>
      </div>

      {/* Custom date inputs */}
      {showCustom && (
        <div className="flex flex-wrap items-center gap-2 pl-12">
          <input
            type="date"
            value={customStart}
            onChange={(e) => setCustomStart(e.target.value)}
            className="text-[11px] px-2 py-1 rounded border border-mist bg-white text-slate focus:outline-none focus:ring-1 focus:ring-secondary"
          />
          <span className="text-slate/40 text-[10px]">to</span>
          <input
            type="date"
            value={customEnd}
            onChange={(e) => setCustomEnd(e.target.value)}
            className="text-[11px] px-2 py-1 rounded border border-mist bg-white text-slate focus:outline-none focus:ring-1 focus:ring-secondary"
          />
          <button
            onClick={handleCustomApply}
            disabled={!customStart || !customEnd}
            className="text-[10px] font-bold px-2 py-1 rounded bg-secondary text-white hover:bg-secondary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Apply
          </button>
        </div>
      )}

      {/* Active range indicator */}
      {value && (
        <div className="flex items-center gap-2 pl-12">
          <span className="text-[10px] text-secondary font-medium">
            Showing: {formatDateRange(value)}
          </span>
          <button
            onClick={handleClear}
            className="p-0.5 rounded hover:bg-secondary/10 transition-colors"
            aria-label="Clear date filter"
          >
            <XMarkIcon className="size-3 text-secondary/60" />
          </button>
        </div>
      )}
    </div>
  );
}

// Helper function to filter entries by date range
export function filterByDateRange<T extends { date: string }>(
  entries: T[],
  range: DateRange
): T[] {
  if (!range) return entries;
  return entries.filter((entry) => {
    const entryDate = entry.date;
    return entryDate >= range.start && entryDate <= range.end;
  });
}
