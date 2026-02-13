"use client";

import { getAvailableProjects } from "../../data";

const projectLabels: Record<string, string> = {
  "uganda-pilot": "Uganda",
  "rwanda-pilot": "Rwanda",
};

type ProjectFilterProps = {
  activeProject: string | null;
  onProjectChange: (project: string | null) => void;
};

export default function ProjectFilter({
  activeProject,
  onProjectChange,
}: ProjectFilterProps) {
  const projects = getAvailableProjects();

  if (projects.length <= 1) return null;

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">
        Project:
      </span>
      <button
        onClick={() => onProjectChange(null)}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
          activeProject === null
            ? "bg-secondary text-white"
            : "bg-white border border-mist text-slate hover:border-secondary/30"
        }`}
      >
        All Programs
      </button>
      {projects.map((project) => (
        <button
          key={project}
          onClick={() =>
            onProjectChange(activeProject === project ? null : project)
          }
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            activeProject === project
              ? "bg-secondary text-white"
              : "bg-white border border-mist text-slate hover:border-secondary/30"
          }`}
        >
          {projectLabels[project] || project}
        </button>
      ))}
    </div>
  );
}
