// MetricCard - Individual metric display with value, label, unit, and optional change indicator
// Reusable component for displaying single metrics across the knowledge base

import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/20/solid";
import type { Metric } from "../../types/knowledge-base";

type MetricCardVariant = "default" | "highlight" | "compact" | "large";

interface MetricCardProps {
  metric: Metric;
  variant?: MetricCardVariant;
  className?: string;
}

const variantStyles: Record<MetricCardVariant, { container: string; value: string; label: string }> = {
  default: {
    container: "p-3 rounded-lg bg-parchment/50 border border-mist",
    value: "text-lg font-bold text-secondary",
    label: "text-[10px] text-slate/60",
  },
  highlight: {
    container: "p-4 rounded-xl bg-emerald-50 border border-emerald-100",
    value: "text-2xl font-bold text-emerald-700",
    label: "text-xs text-emerald-600",
  },
  compact: {
    container: "p-2 rounded-md bg-slate-50 border border-slate-100",
    value: "text-sm font-bold text-secondary",
    label: "text-[9px] text-slate/50",
  },
  large: {
    container: "p-6 rounded-2xl bg-white border border-mist shadow-sm",
    value: "text-3xl font-bold text-secondary",
    label: "text-sm text-slate/70",
  },
};

export default function MetricCard({ metric, variant = "default", className = "" }: MetricCardProps) {
  const styles = variantStyles[variant];

  // Determine if change is positive, negative, or neutral
  const changeType = metric.change
    ? metric.change.startsWith("+")
      ? "positive"
      : metric.change.startsWith("-")
      ? "negative"
      : "neutral"
    : null;

  return (
    <div className={`${styles.container} ${className}`}>
      <p className={styles.label}>{metric.label}</p>
      <p className={styles.value}>
        {metric.value}
        {metric.unit && (
          <span className="text-sm font-normal ml-1 text-slate/60">{metric.unit}</span>
        )}
      </p>
      {metric.change && (
        <div className="flex items-center gap-1 mt-1">
          {changeType === "positive" && (
            <ArrowTrendingUpIcon className="size-3 text-emerald-600" />
          )}
          {changeType === "negative" && (
            <ArrowTrendingDownIcon className="size-3 text-red-600" />
          )}
          <span
            className={`text-xs font-medium ${
              changeType === "positive"
                ? "text-emerald-600"
                : changeType === "negative"
                ? "text-red-600"
                : "text-slate/60"
            }`}
          >
            {metric.change}
          </span>
        </div>
      )}
      {metric.baseline && (
        <p className="text-[9px] text-slate/40 mt-0.5">vs {metric.baseline}</p>
      )}
    </div>
  );
}

// Grid wrapper for multiple metrics
interface MetricsGridProps {
  metrics: Metric[];
  variant?: MetricCardVariant;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function MetricsGrid({
  metrics,
  variant = "default",
  columns = 3,
  className = "",
}: MetricsGridProps) {
  const gridCols: Record<number, string> = {
    2: "grid-cols-2",
    3: "md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-5",
  };

  return (
    <div className={`grid gap-3 ${gridCols[columns]} ${className}`}>
      {metrics.map((metric, idx) => (
        <MetricCard key={idx} metric={metric} variant={variant} />
      ))}
    </div>
  );
}
