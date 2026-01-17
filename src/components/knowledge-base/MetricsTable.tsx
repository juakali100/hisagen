// MetricsTable - Structured table display for metrics data
// Useful for detailed comparison views and data-heavy sections

import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, CheckBadgeIcon } from "@heroicons/react/20/solid";
import type { Metric } from "../../types/knowledge-base";

interface MetricsTableProps {
  metrics: Metric[];
  title?: string;
  showBaseline?: boolean;
  showChange?: boolean;
  verified?: boolean;
  verifiedBy?: string;
  className?: string;
}

export default function MetricsTable({
  metrics,
  title,
  showBaseline = true,
  showChange = true,
  verified,
  verifiedBy,
  className = "",
}: MetricsTableProps) {
  const hasBaseline = showBaseline && metrics.some((m) => m.baseline);
  const hasChange = showChange && metrics.some((m) => m.change);

  return (
    <div className={className}>
      {(title || verified) && (
        <div className="flex items-center justify-between mb-3">
          {title && (
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">
              {title}
            </h4>
          )}
          {verified && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-blue-100 text-blue-700">
              <CheckBadgeIcon className="size-3" />
              {verifiedBy ? `Verified by ${verifiedBy}` : "Verified"}
            </span>
          )}
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-mist bg-white">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-mist">
            <tr>
              <th className="text-left text-[10px] font-bold text-slate/60 uppercase tracking-wider px-4 py-3">
                Metric
              </th>
              <th className="text-right text-[10px] font-bold text-slate/60 uppercase tracking-wider px-4 py-3">
                Value
              </th>
              {hasBaseline && (
                <th className="text-right text-[10px] font-bold text-slate/60 uppercase tracking-wider px-4 py-3">
                  Baseline
                </th>
              )}
              {hasChange && (
                <th className="text-right text-[10px] font-bold text-slate/60 uppercase tracking-wider px-4 py-3">
                  Change
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-mist">
            {metrics.map((metric, idx) => {
              const changeType = metric.change
                ? metric.change.startsWith("+")
                  ? "positive"
                  : metric.change.startsWith("-")
                  ? "negative"
                  : "neutral"
                : null;

              return (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-secondary">
                      {metric.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-base font-bold text-secondary">
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="text-xs text-slate/60 ml-1">{metric.unit}</span>
                    )}
                  </td>
                  {hasBaseline && (
                    <td className="px-4 py-3 text-right">
                      {metric.baseline && (
                        <span className="text-sm text-slate/60">{metric.baseline}</span>
                      )}
                    </td>
                  )}
                  {hasChange && (
                    <td className="px-4 py-3 text-right">
                      {metric.change && (
                        <span
                          className={`inline-flex items-center gap-1 text-sm font-bold ${
                            changeType === "positive"
                              ? "text-emerald-600"
                              : changeType === "negative"
                              ? "text-red-600"
                              : "text-slate/60"
                          }`}
                        >
                          {changeType === "positive" && (
                            <ArrowTrendingUpIcon className="size-4" />
                          )}
                          {changeType === "negative" && (
                            <ArrowTrendingDownIcon className="size-4" />
                          )}
                          {metric.change}
                        </span>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Compact version for smaller spaces
interface CompactMetricsListProps {
  metrics: Metric[];
  className?: string;
}

export function CompactMetricsList({ metrics, className = "" }: CompactMetricsListProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 border border-slate-100"
        >
          <span className="text-xs font-medium text-slate">{metric.label}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-secondary">
              {metric.value}
              {metric.unit && (
                <span className="text-xs font-normal ml-0.5">{metric.unit}</span>
              )}
            </span>
            {metric.change && (
              <span
                className={`text-xs font-bold ${
                  metric.change.startsWith("+")
                    ? "text-emerald-600"
                    : metric.change.startsWith("-")
                    ? "text-red-600"
                    : "text-slate/60"
                }`}
              >
                {metric.change}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
