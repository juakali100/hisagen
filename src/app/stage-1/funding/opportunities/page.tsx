"use client";

import Link from "next/link";
import StageBreadcrumb from "../../../../components/StageBreadcrumb";
import { opportunities } from "../../../../data/opportunities";
import { getStatusConfig, getPipelineStageConfig, getPhaseLabel } from "../../../../types/opportunities";

// Funder type display helpers (matching funder-landscape)
const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    multilateral: "Multilateral",
    bilateral: "Government",
    foundation: "Foundation",
    corporate: "Corporate",
    accelerator: "Accelerator",
    ngo: "NGO",
    philanthropy: "Philanthropy",
    family_office: "Family Office",
    trust: "Trust",
  };
  return labels[type] || type;
};

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    multilateral: "bg-blue-100 text-blue-700",
    bilateral: "bg-indigo-100 text-indigo-700",
    foundation: "bg-purple-100 text-purple-700",
    corporate: "bg-cyan-100 text-cyan-700",
    accelerator: "bg-orange-100 text-orange-700",
    ngo: "bg-teal-100 text-teal-700",
    philanthropy: "bg-rose-100 text-rose-700",
    family_office: "bg-amber-100 text-amber-700",
    trust: "bg-violet-100 text-violet-700",
  };
  return colors[type] || "bg-slate-100 text-slate-700";
};

// Calculate progress percentage based on phase
const getProgressPercentage = (phase: number, stage: string) => {
  if (stage === "submitted") return 95;
  switch (phase) {
    case 2: return 20;
    case 3: return 40;
    case 4: return 60;
    case 5: return 80;
    case 6: return 90;
    default: return 0;
  }
};

export default function OpportunitiesPage() {
  // Group by stage
  const engaging = opportunities.filter((o) => o.pipelineStage === "engaging" && o.status === "active");
  const dueDiligence = opportunities.filter((o) => o.pipelineStage === "due_diligence" && o.status === "active");
  const proposing = opportunities.filter((o) => o.pipelineStage === "proposing" && o.status === "active");
  const submitted = opportunities.filter((o) => o.pipelineStage === "submitted" && o.status === "active");
  const closed = opportunities.filter((o) => ["won", "lost", "withdrawn"].includes(o.status));

  const activeCount = opportunities.filter((o) => o.status === "active").length;

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Opportunities"
        trail={[
          { label: "Uganda Pilot", href: "/project/hisagen-uganda" },
          { label: "Funding Tracker", href: "/stage-1/funding" },
          { label: "Phases 02-06" },
        ]}
      />

      {/* Header */}
      <section className="rounded-2xl border border-mist bg-parchment/40 px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Grant Lifecycle Phases 02-06
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Opportunity Records
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          Track funding opportunities through the pre-award lifecycle: from qualification through engagement,
          due diligence, proposal development, and contracting.
        </p>
        <p className="mt-2 text-xs text-slate/60">
          {activeCount} active opportunities | Last updated: January 18, 2026
        </p>
      </section>

      {/* Stage Stats */}
      <section className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-5">
        <div className="p-4 rounded-xl border border-mist bg-white">
          <p className="text-3xl font-bold text-secondary">{opportunities.length}</p>
          <p className="text-xs uppercase tracking-widest text-slate/60 mt-1">Total Records</p>
        </div>
        <div className={`p-4 rounded-xl border-2 ${engaging.length > 0 ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-slate-50"}`}>
          <p className={`text-3xl font-bold ${engaging.length > 0 ? "text-amber-700" : "text-slate-400"}`}>{engaging.length}</p>
          <p className="text-xs uppercase tracking-widest text-amber-600 mt-1">Engaging</p>
        </div>
        <div className={`p-4 rounded-xl border-2 ${dueDiligence.length > 0 ? "border-sky-300 bg-sky-50" : "border-slate-200 bg-slate-50"}`}>
          <p className={`text-3xl font-bold ${dueDiligence.length > 0 ? "text-sky-700" : "text-slate-400"}`}>{dueDiligence.length}</p>
          <p className="text-xs uppercase tracking-widest text-sky-600 mt-1">Due Diligence</p>
        </div>
        <div className={`p-4 rounded-xl border-2 ${proposing.length > 0 ? "border-purple-300 bg-purple-50" : "border-slate-200 bg-slate-50"}`}>
          <p className={`text-3xl font-bold ${proposing.length > 0 ? "text-purple-700" : "text-slate-400"}`}>{proposing.length}</p>
          <p className="text-xs uppercase tracking-widest text-purple-600 mt-1">Proposing</p>
        </div>
        <div className={`p-4 rounded-xl border-2 ${closed.length > 0 ? "border-slate-300 bg-slate-50" : "border-slate-200 bg-slate-50"}`}>
          <p className={`text-3xl font-bold ${closed.length > 0 ? "text-slate-700" : "text-slate-400"}`}>{closed.length}</p>
          <p className="text-xs uppercase tracking-widest text-slate-600 mt-1">Closed</p>
        </div>
      </section>

      {/* Pipeline Flow Visual */}
      <section className="mt-8 p-4 rounded-xl border border-mist bg-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate/60 mb-3">Pipeline Flow</p>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-300"></span>
            <span className="text-slate-600">Landscape</span>
          </div>
          <span className="text-slate-300">→</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
            <span className="text-amber-700 font-medium">Engaging</span>
          </div>
          <span className="text-slate-300">→</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sky-400"></span>
            <span className="text-sky-700 font-medium">Due Diligence</span>
          </div>
          <span className="text-slate-300">→</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-400"></span>
            <span className="text-purple-700 font-medium">Proposing</span>
          </div>
          <span className="text-slate-300">→</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="text-emerald-700 font-medium">Submitted</span>
          </div>
        </div>
      </section>

      {/* Opportunity Cards */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Active Opportunities</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="space-y-4">
          {opportunities
            .filter((o) => o.status === "active")
            .sort((a, b) => {
              // Sort by deadline (soonest first), then by phase (furthest along first)
              if (a.deadline && b.deadline) {
                return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
              }
              if (a.deadline) return -1;
              if (b.deadline) return 1;
              return b.currentPhase - a.currentPhase;
            })
            .map((opp) => {
              const stageConfig = getPipelineStageConfig(opp.pipelineStage);
              const progress = getProgressPercentage(opp.currentPhase, opp.pipelineStage);

              // Calculate days left if deadline exists
              let daysLeft: number | undefined;
              if (opp.deadline) {
                const deadlineDate = new Date(opp.deadline);
                const today = new Date();
                daysLeft = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
              }

              return (
                <Link
                  key={opp.id}
                  href={`/stage-1/funding/opportunities/${opp.slug}`}
                  className="block p-6 rounded-2xl border-2 border-mist bg-white hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Left: Title and badges */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${stageConfig.bg} ${stageConfig.text} ${stageConfig.border}`}>
                          {stageConfig.label}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${getTypeColor(opp.funderType)}`}>
                          {getTypeLabel(opp.funderType)}
                        </span>
                        {daysLeft !== undefined && daysLeft <= 30 && (
                          <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${daysLeft <= 14 ? "bg-red-500 text-white" : "bg-amber-500 text-white"}`}>
                            {daysLeft} days
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                        {opp.funderName}
                      </h3>
                      <p className="text-sm text-slate mt-1">{opp.grantSize}</p>
                    </div>

                    {/* Center: Progress bar */}
                    <div className="lg:w-48">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate/60">Progress</span>
                        <span className="text-[10px] font-bold text-slate">{progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${stageConfig.bg.replace("bg-", "bg-").replace("-100", "-400")}`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Right: Owner and next action */}
                    <div className="lg:w-64 lg:text-right">
                      <p className="text-xs font-medium text-primary">{opp.owner}</p>
                      <p className="text-xs text-slate mt-1 truncate">{opp.nextAction}</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:block text-slate/30 group-hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      {/* Closed Opportunities (if any) */}
      {closed.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Closed</h2>
            <div className="h-px flex-1 bg-mist" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {closed.map((opp) => {
              const statusConfig = getStatusConfig(opp.status);
              return (
                <Link
                  key={opp.id}
                  href={`/stage-1/funding/opportunities/${opp.slug}`}
                  className="block p-4 rounded-xl border border-mist bg-white hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${statusConfig.bg} ${statusConfig.text}`}>
                      {statusConfig.label}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-secondary">{opp.funderName}</h3>
                  <p className="text-xs text-slate mt-1">{opp.outcomeNotes || opp.lessonsLearned || "No notes"}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="mt-16 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.15em]">Related</h2>
          <div className="h-px flex-1 bg-mist" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/stage-1/funding/funder-landscape"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 02</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Funder Landscape
            </h3>
            <p className="text-xs text-slate mt-2">Identify and tier potential funders</p>
          </Link>

          <Link
            href="/stage-1/funding/v0-grant-proposal"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Phase 05</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Base Proposal (V1.1)
            </h3>
            <p className="text-xs text-slate mt-2">Core narrative for tailoring</p>
          </Link>

          <Link
            href="/grant-lifecycle"
            className="group p-6 rounded-xl border border-mist bg-white hover:border-secondary/30 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60 mb-2">Reference</p>
            <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">
              Grant Lifecycle
            </h3>
            <p className="text-xs text-slate mt-2">11-phase methodology overview</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
