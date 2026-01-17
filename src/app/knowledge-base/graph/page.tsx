"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import GraphFilters from "../../../components/knowledge-base/GraphFilters";
import { ArrowPathIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { graphData } from "@/data/relationships";
import { NodeType } from "@/types/graph";

// Dynamically import the graph component (no SSR - uses canvas)
const RelationshipGraph = dynamic(
  () => import("../../../components/knowledge-base/RelationshipGraph"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[500px] rounded-2xl border border-mist bg-parchment/40">
        <div className="flex items-center gap-2 text-slate">
          <ArrowPathIcon className="size-5 animate-spin" />
          <span>Loading graph...</span>
        </div>
      </div>
    ),
  }
);

export default function RelationshipGraphPage() {
  // Initialize with all node types active
  const [activeFilters, setActiveFilters] = useState<Set<NodeType>>(
    new Set(['organization', 'person', 'project', 'evidence', 'milestone', 'program'])
  );

  // Calculate node counts by type
  const nodeCounts = useMemo(() => {
    const counts: Record<NodeType, number> = {
      organization: 0,
      person: 0,
      project: 0,
      evidence: 0,
      milestone: 0,
      program: 0,
    };
    graphData.nodes.forEach(node => {
      counts[node.type]++;
    });
    return counts;
  }, []);

  // Handle filter toggle
  const handleFilterChange = (type: NodeType) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(type)) {
        // Don't allow removing all filters
        if (next.size > 1) {
          next.delete(type);
        }
      } else {
        next.add(type);
      }
      return next;
    });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setActiveFilters(new Set(['organization', 'person', 'project', 'evidence', 'milestone', 'program']));
  };

  return (
    <div className="mx-auto max-w-6xl text-ink">
      <StageBreadcrumb
        stage="Relationship Graph"
        trail={[{ label: "Knowledge Base", href: "/knowledge-base" }]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-6 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
              Knowledge Base
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-secondary">
              Relationship Graph
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate">
              Interactive visualization of HISAGEN's network. Click nodes to see details,
              hover to highlight connections.
            </p>
          </div>
          <Link
            href="/knowledge-base"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate hover:text-secondary bg-white border border-mist rounded-lg shadow-sm transition-colors"
          >
            <ArrowLeftIcon className="size-4" />
            Back to KB
          </Link>
        </div>

        {/* Filters */}
        <div className="mt-6 pt-4 border-t border-mist/50">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
              Filter by type
            </span>
            {activeFilters.size < 6 && (
              <button
                onClick={handleResetFilters}
                className="text-[10px] font-medium text-primary hover:underline"
              >
                Show all
              </button>
            )}
          </div>
          <GraphFilters
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            nodeCounts={nodeCounts}
          />
        </div>
      </section>

      {/* Graph */}
      <RelationshipGraph activeFilters={activeFilters} />
    </div>
  );
}
