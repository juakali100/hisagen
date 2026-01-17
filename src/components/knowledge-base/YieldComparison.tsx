// YieldComparison - Visual comparison component for yield improvements
// Shows crop yields with visual bars representing improvement percentages

import { ChartBarIcon } from "@heroicons/react/20/solid";

interface YieldData {
  crop: string;
  improvement: string; // e.g., "+4-6%", "+18%"
  minPercent?: number; // For bar width calculation
  maxPercent?: number;
}

interface YieldComparisonProps {
  data: YieldData[];
  title?: string;
  subtitle?: string;
  source?: string;
  variant?: "bars" | "cards" | "table";
  className?: string;
}

// Parse improvement string to get numeric value for bar width
function parseImprovement(improvement: string): { min: number; max: number } {
  const cleaned = improvement.replace(/[+%]/g, "");
  if (cleaned.includes("-")) {
    const [min, max] = cleaned.split("-").map(Number);
    return { min, max };
  }
  const value = Number(cleaned);
  return { min: value, max: value };
}

export default function YieldComparison({
  data,
  title = "Yield Improvements",
  subtitle,
  source,
  variant = "bars",
  className = "",
}: YieldComparisonProps) {
  // Find max for scale
  const maxValue = Math.max(...data.map((d) => parseImprovement(d.improvement).max));
  const scale = 100 / Math.max(maxValue, 25); // Ensure at least 25% scale

  if (variant === "cards") {
    return (
      <div className={className}>
        {title && (
          <div className="flex items-center gap-2 mb-4">
            <ChartBarIcon className="size-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-secondary">{title}</h3>
          </div>
        )}
        {subtitle && <p className="text-sm text-slate/70 mb-4">{subtitle}</p>}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center"
            >
              <p className="text-2xl font-bold text-emerald-700">{item.improvement}</p>
              <p className="text-xs text-emerald-600 mt-1">{item.crop}</p>
            </div>
          ))}
        </div>
        {source && (
          <p className="mt-3 text-xs text-slate/60 italic">{source}</p>
        )}
      </div>
    );
  }

  if (variant === "table") {
    return (
      <div className={className}>
        {title && (
          <div className="flex items-center gap-2 mb-4">
            <ChartBarIcon className="size-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-secondary">{title}</h3>
          </div>
        )}
        {subtitle && <p className="text-sm text-slate/70 mb-4">{subtitle}</p>}
        <div className="overflow-hidden rounded-xl border border-mist">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left text-xs font-bold text-slate/70 uppercase tracking-wider px-4 py-3">
                  Crop
                </th>
                <th className="text-right text-xs font-bold text-slate/70 uppercase tracking-wider px-4 py-3">
                  Yield Improvement
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {data.map((item, idx) => (
                <tr key={idx} className="bg-white hover:bg-emerald-50/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-secondary">
                    {item.crop}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-lg font-bold text-emerald-600">
                      {item.improvement}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {source && (
          <p className="mt-3 text-xs text-slate/60 italic">{source}</p>
        )}
      </div>
    );
  }

  // Default: bars variant
  return (
    <div className={className}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          <ChartBarIcon className="size-5 text-emerald-600" />
          <h3 className="text-lg font-bold text-secondary">{title}</h3>
        </div>
      )}
      {subtitle && <p className="text-sm text-slate/70 mb-4">{subtitle}</p>}
      <div className="space-y-3">
        {data.map((item, idx) => {
          const { min, max } = parseImprovement(item.improvement);
          const barWidth = max * scale;
          const minBarWidth = min * scale;
          const isRange = min !== max;

          return (
            <div key={idx} className="group">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate">{item.crop}</span>
                <span className="text-sm font-bold text-emerald-600">{item.improvement}</span>
              </div>
              <div className="h-6 bg-slate-100 rounded-full overflow-hidden relative">
                {isRange ? (
                  <>
                    {/* Min bar (lighter) */}
                    <div
                      className="absolute inset-y-0 left-0 bg-emerald-200 rounded-full transition-all duration-500"
                      style={{ width: `${barWidth}%` }}
                    />
                    {/* Max bar (darker) */}
                    <div
                      className="absolute inset-y-0 left-0 bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${minBarWidth}%` }}
                    />
                  </>
                ) : (
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-500 group-hover:from-emerald-500 group-hover:to-emerald-600"
                    style={{ width: `${barWidth}%` }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {source && (
        <p className="mt-4 text-xs text-slate/60 italic">{source}</p>
      )}
    </div>
  );
}

// Helper to convert Metric array to YieldData array
export function metricsToYieldData(
  metrics: { label: string; value: number | string; change?: string }[]
): YieldData[] {
  return metrics
    .filter((m) => m.label.includes("Yield") && m.change)
    .map((m) => ({
      crop: m.label.replace(" Yield", ""),
      improvement: m.change!,
    }));
}
