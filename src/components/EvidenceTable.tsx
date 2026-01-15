"use client";

import { useMemo, useState } from "react";

type Attachment = {
  title: string;
  file: string;
  format: "PDF" | "Excel" | "Doc" | "Link";
};

export type IntelligenceEntry = {
  domain: "Context" | "Evidence" | "Ecosystem" | "Frameworks";
  format: "Email" | "PDF" | "Excel" | "Call" | "Doc" | "Link" | "WhatsApp";
  date: string;
  title: string;
  detail: string;
  file?: string;
  attachments?: Attachment[];
  tags: string[];
  synthesis?: string[];
};

type Props = {
  entries: IntelligenceEntry[];
  defaultDomain?: IntelligenceEntry["domain"] | "All";
  title?: string;
};

const domainOptions: Array<IntelligenceEntry["domain"] | "All"> = ["All", "Context", "Evidence", "Ecosystem", "Frameworks"];
const formatOptions: Array<IntelligenceEntry["format"] | "All"> = ["All", "Email", "PDF", "Excel", "Call", "Doc", "Link", "WhatsApp"];

function badgeClassesForFormat(format: IntelligenceEntry["format"]) {
  switch (format) {
    case "Email":
      return "bg-sky-50 text-sky-800 border-sky-100";
    case "PDF":
      return "bg-rose-50 text-rose-800 border-rose-100";
    case "Excel":
      return "bg-emerald-50 text-emerald-800 border-emerald-100";
    case "Call":
      return "bg-amber-50 text-amber-900 border-amber-100";
    case "Doc":
      return "bg-indigo-50 text-indigo-800 border-indigo-100";
    case "Link":
      return "bg-slate-50 text-slate-800 border-slate-100";
    case "WhatsApp":
      return "bg-green-50 text-green-800 border-green-100";
    default:
      return "bg-slate-50 text-slate-800 border-slate-100";
  }
}

export default function EvidenceTable({ entries, defaultDomain = "All", title = "Evidence Vault (Table View)" }: Props) {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<Props["defaultDomain"]>(defaultDomain);
  const [format, setFormat] = useState<(typeof formatOptions)[number]>("All");

  const tagOptions = useMemo(() => {
    const tags = new Set<string>();
    for (const entry of entries) for (const tag of entry.tags) tags.add(tag);
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [entries]);

  const [tag, setTag] = useState<string>("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return entries
      .filter((entry) => (domain === "All" ? true : entry.domain === domain))
      .filter((entry) => (format === "All" ? true : entry.format === format))
      .filter((entry) => (tag === "All" ? true : entry.tags.includes(tag)))
      .filter((entry) => {
        if (!normalized) return true;
        const haystack = [entry.title, entry.detail, entry.domain, entry.format, entry.date, entry.tags.join(" ")].join(" ").toLowerCase();
        return haystack.includes(normalized);
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [domain, entries, format, query, tag]);

  return (
    <section className="mt-10 rounded-2xl border border-mist bg-white shadow-sm overflow-hidden">
      <div className="p-6 border-b border-mist bg-parchment/40">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60">Evidence Vault</p>
            <h2 className="mt-2 text-2xl font-bold text-secondary">{title}</h2>
            <p className="mt-1 text-sm text-slate">
              Search and filter across intelligence items; use this view for fast retrieval and review.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full border border-mist bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate">
              Showing {filtered.length} / {entries.length}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-12">
          <div className="md:col-span-5">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate/60" htmlFor="evidence-search">
              Search
            </label>
            <input
              id="evidence-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Title, details, tags..."
              className="mt-1 w-full rounded-xl border border-mist bg-white px-3 py-2 text-sm text-secondary placeholder:text-slate/40 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate/60" htmlFor="evidence-domain">
              Domain
            </label>
            <select
              id="evidence-domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value as Props["defaultDomain"])}
              className="mt-1 w-full rounded-xl border border-mist bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {domainOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate/60" htmlFor="evidence-format">
              Format
            </label>
            <select
              id="evidence-format"
              value={format}
              onChange={(e) => setFormat(e.target.value as (typeof formatOptions)[number])}
              className="mt-1 w-full rounded-xl border border-mist bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {formatOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate/60" htmlFor="evidence-tag">
              Tag
            </label>
            <select
              id="evidence-tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="mt-1 w-full rounded-xl border border-mist bg-white px-3 py-2 text-sm text-secondary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <option value="All">All</option>
              {tagOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="sticky top-0 z-10 bg-white border-b border-mist">
            <tr className="text-[10px] uppercase tracking-widest text-slate/60">
              <th scope="col" className="px-4 py-3 text-left font-bold">
                Date
              </th>
              <th scope="col" className="px-4 py-3 text-left font-bold">
                Item
              </th>
              <th scope="col" className="px-4 py-3 text-left font-bold">
                Domain
              </th>
              <th scope="col" className="px-4 py-3 text-left font-bold">
                Format
              </th>
              <th scope="col" className="px-4 py-3 text-left font-bold">
                Tags
              </th>
              <th scope="col" className="px-4 py-3 text-right font-bold">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mist">
            {filtered.map((entry) => (
              <tr key={`${entry.date}-${entry.title}`} className="hover:bg-parchment/30 transition-colors motion-reduce:transition-none">
                <td className="px-4 py-4 align-top whitespace-nowrap text-[11px] font-bold text-slate/60">
                  {entry.date}
                </td>
                <td className="px-4 py-4 align-top">
                  <p className="font-bold text-secondary">{entry.title}</p>
                  <p className="mt-1 text-[13px] text-slate leading-relaxed max-w-[52ch]">
                    {entry.detail}
                  </p>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="inline-flex items-center rounded-full border border-mist bg-parchment/40 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary">
                    {entry.domain}
                  </span>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className={`inline-flex items-center rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeClassesForFormat(entry.format)}`}>
                    {entry.format}
                  </span>
                </td>
                <td className="px-4 py-4 align-top">
                  <div className="flex flex-wrap gap-1">
                    {entry.tags.slice(0, 4).map((tagLabel) => (
                      <span key={tagLabel} className="text-[10px] bg-parchment px-2 py-1 rounded-full text-slate/70 font-semibold">
                        {tagLabel}
                      </span>
                    ))}
                    {entry.tags.length > 4 && (
                      <span className="text-[10px] bg-parchment px-2 py-1 rounded-full text-slate/50 font-semibold">
                        +{entry.tags.length - 4}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 align-top text-right">
                  {entry.file ? (
                    <a
                      href={entry.file}
                      target={entry.file.startsWith("http") ? "_blank" : undefined}
                      rel={entry.file.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-lg border border-mist bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:border-secondary/20 hover:shadow-sm transition-all motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Open
                      <span aria-hidden className="text-secondary/40">
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate/40">—</span>
                  )}
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <p className="text-sm font-semibold text-secondary">No matches.</p>
                  <p className="mt-1 text-sm text-slate">Try clearing filters or broadening the search.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

