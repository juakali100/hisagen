"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, BeakerIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { SearchBar, TagBadge } from "../../../components/knowledge-base";
import { evidence, getEvidenceByProject, EvidenceSubtype } from "../../../data";

const subtypeLabels: Record<EvidenceSubtype, string> = {
  "trial-data": "Trial Data",
  mrv: "MRV",
  certification: "Certification",
  "yield-data": "Yield Data",
  "soil-data": "Soil Data",
  validation: "Validation",
};

export default function EvidencePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const evidenceByProject = getEvidenceByProject();
  const projects = Object.keys(evidenceByProject);

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Evidence" />

      {/* Back link */}
      <Link
        href="/resources"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Back to Knowledge Base
      </Link>

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Knowledge Base
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Evidence
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Trial data, MRV metrics, certifications, and verification records supporting HISAGEN's claims and milestones.
        </p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">{evidence.length}</span>
            <span className="ml-2 text-xs text-slate/60">Total Entries</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white border border-mist">
            <span className="text-lg font-bold text-secondary">{projects.length}</span>
            <span className="ml-2 text-xs text-slate/60">Projects</span>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mt-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search evidence..."
          className="max-w-lg"
        />
      </section>

      {/* Featured Project: Uganda Pilot */}
      <section className="mt-8">
        <Link
          href="/resources/evidence/uganda-pilot"
          className="block p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-parchment/40 border border-emerald-100 hover:border-emerald-300 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
              <MapPinIcon className="size-6 text-emerald-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                  Featured Project
                </span>
              </div>
              <h3 className="text-xl font-bold text-secondary group-hover:text-emerald-700 transition-colors">
                Uganda Pilot Evidence
              </h3>
              <p className="mt-2 text-sm text-slate">
                Comprehensive evidence roll-up for the flagship 10,000 farmer implementation.
                Includes maize trial data, yield validation, SOC baseline, and market analysis.
              </p>
              <div className="mt-4 flex items-center gap-6 text-xs text-slate/70">
                <span>{evidenceByProject['uganda-pilot']?.length || 0} entries</span>
                <span>5 NARO zones</span>
                <span className="text-emerald-600 font-medium">+4-22% yield improvements</span>
              </div>
            </div>
            <ArrowRightIcon className="size-5 text-slate/30 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all mt-2" />
          </div>
        </Link>
      </section>

      {/* Evidence Content */}
      {evidence.length === 0 ? (
        <section className="mt-12">
          {/* Empty state - structured for future data */}
          <div className="rounded-2xl border-2 border-dashed border-mist bg-parchment/20 p-12 text-center">
            <BeakerIcon className="mx-auto size-12 text-secondary/30" />
            <h2 className="mt-4 text-lg font-bold text-secondary">
              Evidence Repository
            </h2>
            <p className="mt-2 text-sm text-slate max-w-md mx-auto">
              Structured evidence entries will appear here as trial data, MRV metrics, and certifications are added to the knowledge base.
            </p>

            {/* Structure preview */}
            <div className="mt-8 grid gap-4 md:grid-cols-3 max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-white border border-mist text-left">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
                  Uganda Pilot
                </p>
                <p className="text-xs text-slate">
                  Maize, potato, and peanut trial data from NARO zones
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-mist text-left">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
                  MRV Data
                </p>
                <p className="text-xs text-slate">
                  Soil carbon measurements, yield comparisons, verification records
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-mist text-left">
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
                  Certifications
                </p>
                <p className="text-xs text-slate">
                  MAAIF approval, UNBS registration, carbon credit validation
                </p>
              </div>
            </div>

            {/* Types reference */}
            <div className="mt-8 pt-8 border-t border-mist">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate/40 mb-3">
                Evidence Types
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {Object.entries(subtypeLabels).map(([key, label]) => (
                  <span
                    key={key}
                    className="text-[10px] px-2 py-1 rounded bg-emerald-50 text-emerald-700"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="mt-8">
          {/* Evidence entries grouped by project */}
          {projects.map((project) => (
            <div key={project} className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-lg font-bold text-secondary capitalize">
                  {project.replace("-", " ")}
                </h2>
                <div className="h-px flex-1 bg-mist" />
                <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
                  {evidenceByProject[project].length} entries
                </span>
              </div>
              <div className="grid gap-4">
                {evidenceByProject[project].map((entry) => (
                  <div
                    key={entry.id}
                    className="p-5 rounded-xl border border-mist bg-white"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                        {subtypeLabels[entry.subtype]}
                      </span>
                      <span className="text-[10px] text-slate/40">{entry.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-secondary">{entry.title}</h3>
                    <p className="mt-1 text-sm text-slate">{entry.summary}</p>
                    {entry.metrics.length > 0 && (
                      <div className="mt-4 grid gap-2 md:grid-cols-3">
                        {entry.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-parchment/50 border border-mist"
                          >
                            <p className="text-[10px] text-slate/60">{metric.label}</p>
                            <p className="text-lg font-bold text-secondary">
                              {metric.value}
                              {metric.unit && (
                                <span className="text-sm font-normal ml-1">{metric.unit}</span>
                              )}
                            </p>
                            {metric.change && (
                              <p className="text-xs text-emerald-600">{metric.change}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <TagBadge key={tag} tag={tag} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Knowledge Base Link */}
      <section className="mt-12 mb-16 p-6 rounded-xl bg-emerald-50 border border-emerald-100">
        <p className="text-sm text-emerald-800">
          <strong>Data Source:</strong> Evidence entries are structured in the{" "}
          <code className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs">
            hisagen-knowledge-base/evidence/
          </code>{" "}
          folder. Use the <code className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs">
            add-knowledge-entry
          </code> playbook to add new evidence.
        </p>
      </section>
    </div>
  );
}
