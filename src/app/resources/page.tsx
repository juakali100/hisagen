import StageBreadcrumb from "../../components/StageBreadcrumb";

type TimelineEntry = {
  date: string;
  channel: string;
  title: string;
  file?: string;
  notes?: string;
};

const timeline: TimelineEntry[] = [
  {
    date: "2025-11-07",
    channel: "Call",
    title: "Initial discovery call",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/call-notes-2025-11-07.md",
    notes: "HISAGEN identified as priority; grant funding need confirmed.",
  },
  {
    date: "2025-11-07",
    channel: "Email",
    title: "K follow-up email #1",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-1-followup.md",
    notes: "Locus AG partnership and Uganda pilot context; attachments DSC-001/002.",
  },
  {
    date: "2025-11-07",
    channel: "Email",
    title: "K follow-up email #2",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-2-followup.md",
    notes: "Additional HISAGEN / Carbon Zero details and sequencing notes.",
  },
  {
    date: "2025-11-07",
    channel: "Email",
    title: "Pandion initial response draft",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-2-n-initial-response.md",
  },
  {
    date: "2025-11-09",
    channel: "Draft",
    title: "Response email draft",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/drafts/2025-11-09-response-email-draft.md",
  },
  {
    date: "2025-11-10",
    channel: "Email",
    title: "K partnership offer",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-10-email-3-k-partnership-offer.md",
  },
  {
    date: "2025-11-10",
    channel: "Email",
    title: "Uganda maize trials results",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-10-email-4-k-uganda-maize-trials.md",
    notes: "Trial data attachments DSC-003/004/005.",
  },
  {
    date: "2025-11-10",
    channel: "Draft",
    title: "Corporate pitch deck questions",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/drafts/2025-11-10-corporate-pitch-deck-questions.md",
  },
  {
    date: "2025-11-14",
    channel: "Draft",
    title: "Partnership response (consolidated)",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/drafts/2025-11-14-partnership-response-CONSOLIDATED.md",
  },
  {
    date: "2025-12-23",
    channel: "WhatsApp",
    title: "K update: Uganda approval expected mid-Feb",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/README.md",
    notes: "Awaiting scheduling reply.",
  },
];

const attachmentHighlights = [
  {
    id: "DSC-002",
    title: "Locus AG Company Overview (Jun 2024)",
    source: "Email-1 (2025-11-07)",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf",
  },
  {
    id: "DSC-003",
    title: "Uganda Maize Trials Phase 2 Data (May 2025)",
    source: "Email-4 (2025-11-10)",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-003-uganda-maize-trials-phase2-may.pdf",
  },
  {
    id: "DSC-004",
    title: "Uganda Maize Trials Results 1 (PDF)",
    source: "Email-4 (2025-11-10)",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-004-uganda-maize-trials-results1.pdf",
  },
  {
    id: "DSC-005",
    title: "Uganda Maize Trials Results 1 (Excel)",
    source: "Email-4 (2025-11-10)",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-005-uganda-maize-trials-results1.xlsx",
  },
];

const referenceLinks = [
  {
    title: "Communications Hub",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/README.md",
  },
  {
    title: "Attachment Registry",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/ATTACHMENT-REGISTRY.md",
  },
  {
    title: "Comms Summary",
    file: "/resources/comms-summary",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Resources"
        trail={[{ label: "Overview", href: "/" }, { label: "Resources" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">
          Resources
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Communications timeline and source index
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
          This page is the chronological record of key communications plus the index of core
          attachments and reference documents.
        </p>
      </section>

      <section className="mt-12 rounded-xl border border-mist bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate">Communications Timeline</p>
        <div className="mt-4 space-y-4 text-sm text-slate">
          {timeline.map((entry) => (
            <div key={`${entry.date}-${entry.title}`} className="rounded-lg border border-mist/60 bg-white p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate">
                <span>{entry.date}</span>
                <span className="text-slate/50">•</span>
                <span>{entry.channel}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-secondary">{entry.title}</p>
              {entry.notes ? <p className="mt-1 text-sm text-slate">{entry.notes}</p> : null}
              {entry.file ? (
                <p className="mt-2 text-xs text-slate">Source: {entry.file}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Attachment Highlights</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {attachmentHighlights.map((item) => (
              <li key={item.id}>
                <p className="font-semibold text-secondary">{item.id}: {item.title}</p>
                <p className="text-xs text-slate">Source: {item.source}</p>
                <p className="text-xs text-slate">File: {item.file}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate">Reference Index</p>
          <ul className="mt-4 space-y-2 text-sm text-slate">
            {referenceLinks.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-secondary">{item.title}:</span> {item.file}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
