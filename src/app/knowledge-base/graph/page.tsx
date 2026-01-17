"use client";

import dynamic from "next/dynamic";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="mx-auto max-w-6xl text-ink">
      <StageBreadcrumb
        stage="Relationship Graph"
        trail={[{ label: "Knowledge Base", href: "/knowledge-base" }]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-8 mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Knowledge Base
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight text-secondary">
          Relationship Graph
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
          Interactive visualization of HISAGEN's network: organizations, people, projects,
          and how they connect. Click nodes to see details and related KB entries.
        </p>
      </section>

      {/* Graph */}
      <RelationshipGraph />
    </div>
  );
}
