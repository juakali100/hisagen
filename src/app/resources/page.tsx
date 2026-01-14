import StageBreadcrumb from "../../components/StageBreadcrumb";

type IntelligenceEntry = {
  domain: "Context" | "Evidence" | "Ecosystem" | "Frameworks";
  format: "Email" | "PDF" | "Excel" | "Call" | "Doc" | "Link";
  date: string;
  title: string;
  detail: string;
  file?: string;
  tags: string[];
};

const intelligenceLedger: IntelligenceEntry[] = [
  // CONTEXT
  {
    domain: "Context",
    format: "Call",
    date: "2025-11-07",
    title: "Initial Discovery Session",
    detail: "Defined HISAGEN as the priority venture. Focus on agriculture-first carbon sequestration and grant funding needs.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/call-notes-2025-11-07.md",
    tags: ["Strategy", "Priority", "Grant"]
  },
  {
    domain: "Context",
    format: "Email",
    date: "2025-11-07",
    title: "Project Sequencing & Context",
    detail: "Overview from Keir on Locus AG partnership, Uganda pilot context, and sequencing of the four ventures.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-1-followup.md",
    tags: ["Locus AG", "Uganda", "Operations"]
  },
  {
    domain: "Context",
    format: "Email",
    date: "2025-11-10",
    title: "Partnership Framework Offer",
    detail: "Deep Six and Pandion's collaboration framework and role definition for HISAGEN's build phase.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-10-email-3-k-partnership-offer.md",
    tags: ["Partnership", "Structure"]
  },

  // EVIDENCE
  {
    domain: "Evidence",
    format: "PDF",
    date: "2024-06-01",
    title: "Locus AG Company Overview",
    detail: "Technical brief on microbial solutions (Rhizolizer® Duo) and their impact on soil health/yields.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf",
    tags: ["Technical", "Locus AG", "Product"]
  },
  {
    domain: "Evidence",
    format: "Excel",
    date: "2025-05-01",
    title: "Uganda Maize Trials Phase 2 Data",
    detail: "Raw yield data comparing Rhizolizer-treated plots vs. control plots in Uganda.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-005-uganda-maize-trials-results1.xlsx",
    tags: ["Data", "Uganda", "Yield"]
  },
  {
    domain: "Evidence",
    format: "PDF",
    date: "2025-11-10",
    title: "Maize Trials Results Summary",
    detail: "Synthesized report of the phase 2 trial outcomes and technical conclusions.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-004-uganda-maize-trials-results1.pdf",
    tags: ["Synthesis", "Uganda", "Technical"]
  },

  // ECOSYSTEM
  {
    domain: "Ecosystem",
    format: "Doc",
    date: "2025-11-30",
    title: "Partner Dossier: Locus AG",
    detail: "Overview of microbial tech + 'CarbonNOW' farmer sequestration program in the USA.",
    tags: ["Partner", "Microbial", "Agri-Carbon"]
  },
  {
    domain: "Ecosystem",
    format: "Doc",
    date: "2025-11-30",
    title: "Partner Dossier: 3-Degrees",
    detail: "Strategic advisory for carbon offset program design and Verra/Gold Standard accreditation.",
    tags: ["Accreditation", "Standards"]
  },
  {
    domain: "Ecosystem",
    format: "Doc",
    date: "2025-11-30",
    title: "Partner Dossier: Carbon Neutral Marketplace",
    detail: "Keir's platform for credit exchange. Current focus on tech stack upgrades and reforestation questionnaires.",
    tags: ["Marketplace", "Tech Upgrade"]
  },

  // FRAMEWORKS
  {
    domain: "Frameworks",
    format: "Doc",
    date: "Current",
    title: "The Capital Continuum Spine",
    detail: "The 4-Stage framework guiding projects from Incubation (Stage 1) to Institutional Maturity (Stage 4).",
    file: "/funding-roadmap/capital-continuum",
    tags: ["Funding", "Strategy", "Blueprints"]
  },
  {
    domain: "Frameworks",
    format: "Doc",
    date: "Current",
    title: "Grant Funding Lifecycle",
    detail: "An 11-phase roadmap for grant-specific journeys nested within Stage 1 & 2.",
    file: "/funding-roadmap/lifecycle",
    tags: ["Grant", "Operations", "Timeline"]
  }
];

export default function ResourcesPage() {
  const domains = ["Context", "Evidence", "Ecosystem", "Frameworks"];

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
          "This is the institutional source of truth. We consolidate every email, data trial, and technical brief into this dossier to inform HISAGEN's growth."
        </p>
      </section>

      <div className="mt-12 space-y-16">
        {domains.map((domain) => (
          <section key={domain} className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-secondary uppercase tracking-[0.2em]">{domain}</h2>
              <div className="h-px flex-1 bg-mist" />
              <span className="text-[10px] text-slate font-medium uppercase tracking-widest">
                {intelligenceLedger.filter(i => i.domain === domain).length} Items
              </span>
            </div>

            <div className="grid gap-4">
              {intelligenceLedger
                .filter((item) => item.domain === domain)
                .map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 rounded-xl border border-mist bg-white hover:border-secondary/40 transition-all hover:shadow-sm"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${item.format === 'Email' ? 'bg-blue-100 text-blue-700' :
                            item.format === 'PDF' ? 'bg-red-100 text-red-700' :
                              item.format === 'Excel' ? 'bg-emerald-100 text-emerald-700' :
                                'bg-slate-100 text-slate-700'
                          }`}>
                          {item.format}
                        </span>
                        <span className="text-[10px] text-slate/40">{item.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-secondary">{item.title}</h3>
                      <p className="text-sm text-slate leading-relaxed max-w-3xl">
                        {item.detail}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[9px] bg-parchment px-1.5 py-0.5 rounded text-slate/60 font-medium">#{tag}</span>
                        ))}
                      </div>
                    </div>

                    {item.file && (
                      <a
                        href={item.file}
                        target={item.file.startsWith('http') ? "_blank" : "_self"}
                        className="flex-shrink-0 flex items-center justify-center h-10 px-4 rounded-lg bg-secondary text-parchment text-[10px] uppercase tracking-widest font-bold hover:bg-secondary/90 transition-colors"
                      >
                        {item.format === 'Link' ? 'Open Link' : 'View Item'}
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      <section className="my-16 flex flex-col items-center text-center p-12 rounded-2xl bg-parchment/30 border border-mist border-dashed">
        <h2 className="text-xl font-bold text-secondary mb-4 uppercase tracking-[0.2em]">Strategy Gaps & Discovery</h2>
        <p className="text-sm text-slate max-w-2xl leading-relaxed mb-6">
          The Intelligence Ledger above identifies what we have verified—the "white space" in our strategy will be filled through active AI synthesis based on these sources.
        </p>
        <div className="flex gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded">Next: Revenue Model Scenarios</span>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary px-3 py-1 rounded">Next: Legal Structure Synthesis</span>
        </div>
      </section>
    </div>
  );
}
