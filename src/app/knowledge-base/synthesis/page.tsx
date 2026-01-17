"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, DocumentTextIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import StageBreadcrumb from "../../../components/StageBreadcrumb";
import { useSelection, EntryCard, TagBadge } from "../../../components/knowledge-base";
import { entryTypeLabels } from "../../../types/knowledge-base";

type ReportTemplate = "funder" | "board" | "partner" | "custom";

const templates: Record<ReportTemplate, { name: string; description: string }> = {
  funder: {
    name: "Funder Report",
    description: "Structured update for grant/investment reporting with milestone progress, evidence, and outcomes.",
  },
  board: {
    name: "Board Briefing",
    description: "Executive summary with key decisions, risks, and strategic updates.",
  },
  partner: {
    name: "Partner Update",
    description: "Relevant subset of project intelligence for external partners.",
  },
  custom: {
    name: "Custom Export",
    description: "Export selected entries as markdown for manual editing.",
  },
};

export default function SynthesisPage() {
  const { selectedEntries, clearSelection, selectionCount } = useSelection();
  const [selectedTemplate, setSelectedTemplate] = useState<ReportTemplate>("funder");
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Group entries by type
  const entriesByType = selectedEntries.reduce((acc, entry) => {
    if (!acc[entry.type]) acc[entry.type] = [];
    acc[entry.type].push(entry);
    return acc;
  }, {} as Record<string, typeof selectedEntries>);

  // Generate markdown report
  const generateReport = () => {
    const now = new Date().toISOString().split("T")[0];
    let markdown = "";

    if (selectedTemplate === "funder") {
      markdown = `# HISAGEN Funder Report
**Generated:** ${now}
**Entries Included:** ${selectionCount}

---

## Executive Summary

*[Add executive summary here]*

---

## Progress Update

`;
      // Add milestones first
      if (entriesByType["milestone"]) {
        markdown += `### Milestones\n\n`;
        entriesByType["milestone"].forEach((entry) => {
          markdown += `- **${entry.title}** (${entry.date})\n  ${entry.summary}\n\n`;
        });
      }

      // Add evidence
      if (entriesByType["evidence"]) {
        markdown += `### Evidence & Data\n\n`;
        entriesByType["evidence"].forEach((entry) => {
          markdown += `- **${entry.title}** (${entry.date})\n  ${entry.summary}\n\n`;
        });
      }

      // Add communications
      if (entriesByType["communication"]) {
        markdown += `### Key Communications\n\n`;
        entriesByType["communication"].forEach((entry) => {
          markdown += `- **${entry.title}** (${entry.date})\n  ${entry.summary}\n\n`;
        });
      }

      // Add research
      if (entriesByType["research"]) {
        markdown += `### Research & Analysis\n\n`;
        entriesByType["research"].forEach((entry) => {
          markdown += `- **${entry.title}** (${entry.date})\n  ${entry.summary}\n\n`;
        });
      }

      markdown += `---

## Next Steps

*[Add next steps here]*

---

*Report generated from HISAGEN Knowledge Base*
`;
    } else if (selectedTemplate === "board") {
      markdown = `# HISAGEN Board Briefing
**Date:** ${now}
**Prepared by:** *[Name]*

---

## Key Updates

`;
      selectedEntries
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 5)
        .forEach((entry) => {
          markdown += `### ${entry.title}\n*${entry.date} | ${entryTypeLabels[entry.type]}*\n\n${entry.summary}\n\n`;
        });

      markdown += `---

## Decisions Required

*[List decisions needed from board]*

## Risks & Issues

*[List key risks]*

---

*Briefing generated from HISAGEN Knowledge Base*
`;
    } else if (selectedTemplate === "partner") {
      markdown = `# HISAGEN Partner Update
**Date:** ${now}

---

## Recent Developments

`;
      selectedEntries
        .sort((a, b) => b.date.localeCompare(a.date))
        .forEach((entry) => {
          markdown += `### ${entry.title}\n*${entry.date}*\n\n${entry.summary}\n\n`;
        });

      markdown += `---

*Update generated from HISAGEN Knowledge Base*
`;
    } else {
      // Custom - just export all entries
      markdown = `# Knowledge Base Export
**Generated:** ${now}
**Entries:** ${selectionCount}

---

`;
      Object.entries(entriesByType).forEach(([type, entries]) => {
        markdown += `## ${entryTypeLabels[type as keyof typeof entryTypeLabels]}\n\n`;
        entries.forEach((entry) => {
          markdown += `### ${entry.title}\n*${entry.date}*\n\n${entry.summary}\n\n`;
          if (entry.tags.length > 0) {
            markdown += `**Tags:** ${entry.tags.join(", ")}\n\n`;
          }
          markdown += `---\n\n`;
        });
      });
    }

    setGeneratedMarkdown(markdown);
  };

  // Copy to clipboard
  const copyToClipboard = async () => {
    if (generatedMarkdown) {
      await navigator.clipboard.writeText(generatedMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Download as file
  const downloadMarkdown = () => {
    if (generatedMarkdown) {
      const blob = new Blob([generatedMarkdown], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `hisagen-${selectedTemplate}-${new Date().toISOString().split("T")[0]}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb stage="Synthesis" />

      {/* Back link */}
      <Link
        href="/knowledge-base"
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
          Synthesis Engine
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          Generate reports and briefings from selected knowledge base entries.
        </p>

        {/* Selection count */}
        <div className="mt-6 flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-lg bg-secondary text-white">
            <span className="text-lg font-bold">{selectionCount}</span>
            <span className="ml-2 text-xs opacity-80">entries selected</span>
          </div>
          {selectionCount > 0 && (
            <button
              onClick={clearSelection}
              className="text-xs text-secondary hover:text-secondary/80 underline underline-offset-2"
            >
              Clear selection
            </button>
          )}
        </div>
      </section>

      {selectionCount === 0 ? (
        /* Empty state with How It Works guide */
        <section className="mt-8">
          {/* Main empty state */}
          <div className="p-12 rounded-xl border border-dashed border-mist bg-parchment/20 text-center">
            <DocumentTextIcon className="w-12 h-12 mx-auto text-slate/30" />
            <h2 className="mt-4 text-lg font-semibold text-secondary">No entries selected</h2>
            <p className="mt-2 text-sm text-slate max-w-md mx-auto">
              Select entries from the Knowledge Base to generate reports and briefings.
            </p>
            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg bg-secondary text-white text-sm font-medium hover:bg-secondary/90 transition-colors"
            >
              Browse Knowledge Base
            </Link>
          </div>

          {/* How It Works */}
          <div className="mt-8 p-8 rounded-xl border border-mist bg-white">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-6">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold text-secondary mb-1">Select Entries</h4>
                <p className="text-xs text-slate">
                  Browse any KB section. Hover over entries to reveal checkboxes, or use "Select all" to choose multiple entries at once.
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold text-secondary mb-1">Choose Template</h4>
                <p className="text-xs text-slate">
                  Pick a report format: Funder Report for grants, Board Briefing for executives, Partner Update for collaborators, or Custom Export.
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold text-secondary mb-1">Generate & Export</h4>
                <p className="text-xs text-slate">
                  Click generate to create your report. Copy to clipboard or download as a markdown file for further editing.
                </p>
              </div>
            </div>
          </div>

          {/* Available Templates */}
          <div className="mt-6 p-6 rounded-xl border border-mist bg-parchment/30">
            <h3 className="text-xs font-bold text-slate/60 uppercase tracking-widest mb-4">
              Available Templates
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {(Object.entries(templates) as [ReportTemplate, typeof templates[ReportTemplate]][]).map(
                ([key, template]) => (
                  <div key={key} className="flex gap-3 p-3 rounded-lg bg-white border border-mist">
                    <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <DocumentTextIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">{template.name}</p>
                      <p className="text-[10px] text-slate mt-0.5">{template.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Template selection */}
          <section className="mt-8">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
              Choose Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.entries(templates) as [ReportTemplate, typeof templates[ReportTemplate]][]).map(
                ([key, template]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedTemplate(key);
                      setGeneratedMarkdown(null);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedTemplate === key
                        ? "border-secondary bg-secondary/5 ring-2 ring-secondary/20"
                        : "border-mist bg-white hover:border-secondary/40"
                    }`}
                  >
                    <h3 className="font-semibold text-secondary">{template.name}</h3>
                    <p className="mt-1 text-xs text-slate">{template.description}</p>
                  </button>
                )
              )}
            </div>
          </section>

          {/* Selected entries preview */}
          <section className="mt-8">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
              Selected Entries
            </h2>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {selectedEntries.map((entry) => (
                <EntryCard key={entry.id} entry={entry} compact showType />
              ))}
            </div>
          </section>

          {/* Generate button */}
          <section className="mt-8">
            <button
              onClick={generateReport}
              className="w-full py-4 rounded-xl bg-secondary text-white font-semibold hover:bg-secondary/90 transition-colors"
            >
              Generate {templates[selectedTemplate].name}
            </button>
          </section>

          {/* Generated output */}
          {generatedMarkdown && (
            <section className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">
                  Generated Report
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-parchment border border-mist text-xs font-medium text-secondary hover:bg-secondary/10 transition-colors"
                  >
                    <ClipboardDocumentIcon className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  <button
                    onClick={downloadMarkdown}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-white text-xs font-medium hover:bg-secondary/90 transition-colors"
                  >
                    <DocumentTextIcon className="w-4 h-4" />
                    Download .md
                  </button>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-mist bg-white">
                <pre className="whitespace-pre-wrap text-sm text-slate font-mono leading-relaxed">
                  {generatedMarkdown}
                </pre>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
