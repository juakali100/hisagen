import StageBreadcrumb from "../../components/StageBreadcrumb";

type TimelineEntry = {
  date: string;
  channel: string;
  title: string;
  file?: string;
  summary?: string;
  notes?: string;
};

const timeline: TimelineEntry[] = [
  {
    date: "2025-11-07",
    channel: "Call",
    title: "Initial discovery call",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/call-notes-2025-11-07.md",
    summary:
      "Discussed four ventures, agreed HISAGEN is the priority, and confirmed grant funding need.",
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

const foundationalKnowledge = [
  {
    category: "Organization Strategy",
    status: "Drafting",
    items: [
      { title: "Founding Mission & Purpose", detail: "The long-term vision for HISAGEN as a systems architect." },
      { title: "Deep Six & Pandion Partnership", detail: "Collaboration framework and roles." },
      { title: "Governance DNA", detail: "Ethics and community-first principles (Social Promise)." },
    ],
  },
  {
    category: "Program Design",
    status: "Active Research",
    items: [
      { title: "Agri-Carbon Thesis", detail: "Regenerative agriculture as a scalable sequestration tech." },
      { title: "Revenue Wheel Model", detail: "Scenario modeling for fees, equity, and credit upside." },
      { title: "MRV Tooling Stack", detail: "Remote sensing vs. ground-truth data strategy." },
    ],
  },
  {
    category: "Project Intelligence",
    status: "Evidence Compiling",
    items: [
      { title: "Uganda Maize Trials (Phase 2)", detail: "Actual vs. Control yield data (DSC-003)." },
      { title: "Carbon Rights Analysis", detail: "Local land tenure and registry mapping." },
      { title: "Partner Dossiers", detail: "Locus AG and Keir's Marketplace alignment." },
    ],
  },
];

const fundingBlueprints = [
  {
    title: "The Capital Continuum Spine",
    description: "The 4-Stage framework guiding the project from Incubation to Maturity.",
    href: "/funding-roadmap/capital-continuum",
  },
  {
    title: "Grant Funding Lifecycle",
    description: "An 11-phase roadmap nested under Stage 1 & 2 for grant-specific journeys.",
    href: "/funding-roadmap/lifecycle",
  },
  {
    title: "Early Pitch Templates",
    description: "Foundational narratives for donor and seed-stage accelerator engagement.",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl text-ink">
      <StageBreadcrumb
        stage="Resources"
        trail={[{ label: "Overview", href: "/" }, { label: "Foundation & Evidence Vault" }]}
      />

      <section className="rounded-2xl border border-mist bg-gradient-to-b from-parchment to-white px-8 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">Resources</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-secondary">
          Foundation & Evidence Vault
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate italic">
          "This is the source of truth for the HISAGEN DNA. We consolidate foundational intelligence here to inform the organization, program, and project strategy."
        </p>
      </section>

      <section className="mt-12 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {foundationalKnowledge.map((track) => (
            <div key={track.category} className="rounded-xl border border-mist bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">{track.category}</h3>
                <span className="text-[9px] bg-secondary/5 text-secondary px-2 py-0.5 rounded uppercase font-bold">{track.status}</span>
              </div>
              <ul className="space-y-4">
                {track.items.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold text-secondary">{item.title}</p>
                    <p className="text-xs text-slate mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-mist bg-secondary text-parchment p-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6">Funding & Capital Strategy</p>
          <div className="grid gap-4 md:grid-cols-3 text-center">
            {fundingBlueprints.map((blueprint) => (
              <a
                key={blueprint.title}
                href={blueprint.href}
                className="p-4 border border-parchment/20 rounded-lg bg-parchment/5 hover:bg-parchment/10 transition-colors"
              >
                <h4 className="text-sm font-bold mb-2 uppercase tracking-tighter">{blueprint.title}</h4>
                <p className="text-[10px] opacity-70 leading-relaxed">{blueprint.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">The Audit Trail (Comms & Attachments)</p>
          <p className="text-sm text-slate mb-6">
            The chronological record of all partner communications, emails, and source spreadsheets identifying the HISAGEN journey.
          </p>
          <div className="space-y-3">
            {timeline.slice(0, 5).map((entry) => (
              <div key={entry.title} className="flex items-center justify-between p-3 border border-mist/50 rounded-lg text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-slate/40">{entry.date}</span>
                  <span className="font-bold text-secondary">{entry.title}</span>
                </div>
                <span className="text-[10px] uppercase text-slate/60">{entry.channel}</span>
              </div>
            ))}
            <div className="text-center pt-2">
              <button className="text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-secondary">View Full Comms Timeline</button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-mist bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">Core Attachments List</p>
          <div className="grid gap-4 md:grid-cols-2">
            {attachmentHighlights.map((item) => (
              <div key={item.id} className="p-4 border border-mist/50 rounded-lg">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">{item.id}</p>
                <p className="text-sm text-slate mt-1">{item.title}</p>
                <p className="text-[10px] text-slate/40 mt-2 italic">Ref: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-16 flex flex-col items-center text-center p-12 rounded-2xl bg-parchment/30 border border-mist border-dashed">
        <h2 className="text-xl font-bold text-secondary mb-4 uppercase tracking-[0.2em]">Strategy Gaps & Discovery</h2>
        <p className="text-sm text-slate max-w-2xl leading-relaxed mb-6">
          We have significant "white space" in our organizational and program strategy. The vault above identifies what we have—but our next phase is to use AI synthesis to fill these gaps.
        </p>
        <div className="flex gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded">Next: Org Ethics Synthesis</span>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded">Next: Revenue Model Analysis</span>
        </div>
      </section>
    </div>
  );
}

