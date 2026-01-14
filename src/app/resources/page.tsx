import StageBreadcrumb from "../../components/StageBreadcrumb";

type Attachment = {
  title: string;
  file: string;
  format: "PDF" | "Excel" | "Doc" | "Link";
};

type IntelligenceEntry = {
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

const intelligenceLedger: IntelligenceEntry[] = [
  // CONTEXT
  {
    domain: "Context",
    format: "Call",
    date: "2025-11-07",
    title: "Venture Portfolio Analysis",
    detail: "Analysis of the four parallel ventures (Deep 6, HISAGEN, Carbon Zero, Iced Coffee) and prioritization of HISAGEN.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/call-notes-2025-11-07.md",
    tags: ["Strategy", "Prioritization", "Portfolio"],
    synthesis: [
      "Venture 1: Deep 6 Consulting (AI Testing for LexisNexis) - Stability & Revenue track.",
      "Venture 2: HISAGEN (Microbes) - Highest potential for growth and grant funding.",
      "Venture 3: Carbon Zero Marketplace (B2C) - Passion project requiring downstream scale.",
      "Venture 4: Iced Coffee US - Side venture emerging from coffee bush carbon exploration.",
      "Strategy: HISAGEN is the 'Tip of the Spear' to build institutional credibility.",
    ]
  },
  {
    domain: "Context",
    format: "Doc",
    date: "2025-11-14",
    title: "Pandion Partnership Framework",
    detail: "Consolidated response defining the performance-based partnership model and role of Pandion as systems architect.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/drafts/2025-11-14-partnership-response-CONSOLIDATED.md",
    tags: ["Partnership", "Operating Model", "Success Fee"],
    synthesis: [
      "Pandion's role defined as Systems Architect and operational support (grants & strategy).",
      "Established 12 immediate funding leads (Carbon Thirteen, YC, Bezos Earth Fund).",
      "Model: Performance-based success fees + small equity pool in HISAGEN.",
      "Identified 'Carbon Thirteen' as a top-priority early-stage accelerator with warm intro.",
    ]
  },
  {
    domain: "Evidence",
    format: "Doc",
    date: "2025-11-08",
    title: "Workstream 1: Grant Landscape",
    detail: "Initial findings from scanning 100+ global and regional climate/ag-tech funds.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/research/workstream-1-grant-landscape-findings.md",
    tags: ["Research", "Grants", "Landscape"],
    synthesis: [
      "Identified EU FLC (€100k) as highest urgency (Nov 30 deadline).",
      "AfDB ACCF ($200k) identified as high fit for 'readiness' grants.",
      "Strategic gap: Need for civil society/NGO partners to qualify for certain institutional funds.",
    ]
  },
  {
    domain: "Evidence",
    format: "Doc",
    date: "2025-11-08",
    title: "Workstream 2: AgriTecno Validation",
    detail: "Due diligence on the proposed Kenya distribution partner and sector fit.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/research/workstream-2-agritecno-validation-findings.md",
    tags: ["Due Diligence", "Partners", "Kenya"],
    synthesis: [
      "Validation of 'Agritecno East Africa Ltd' as a mid-tier Kenya distributor.",
      "Strong fit for coffee/tea sectors but limited public footprint requires further vetting.",
      "Identified alternative partners (Hygrow, Safi Organics) if AgriTecno fails DD.",
    ]
  },
  {
    domain: "Evidence",
    format: "Doc",
    date: "2025-11-08",
    title: "Workstream 3: Kenya Landscape Analysis",
    detail: "Mapping of Nyeri/Murang'a coffee and Nandi/Kericho tea regions for landscape scale.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/research/workstream-3-kenya-landscape-findings.md",
    tags: ["Landscape", "Kenya", "Coffee/Tea"],
    synthesis: [
      "Priority 1: Nyeri-Murang'a Coffee Belt (20k-50k ha) - High density, strong cooperatives.",
      "Priority 2: Rift Valley Tea Belt (100k+ ha) - Massive scale potential via KTDA factories.",
      "Corporate Targets: Starbucks C.A.F.E. Practices and Unilever Tea Estates identified as insetting partners.",
    ]
  },
  {
    domain: "Context",
    format: "Email",
    date: "2025-11-07",
    title: "Project Sequencing & Context",
    detail: "Overview from Keir on Locus AG partnership, Uganda pilot context, and sequencing of the four ventures.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-1-followup.md",
    attachments: [
      {
        title: "Carbon Zero Pitch Deck",
        file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-001-carbon-zero-pitch-jun23.pdf",
        format: "PDF"
      },
      {
        title: "Locus AG Company Overview",
        file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf",
        format: "PDF"
      }
    ],
    tags: ["Locus AG", "Uganda", "Operations"],
    synthesis: [
      "Follow-up from initial phone call confirming HISAGEN (High Impact Soil/Seed Application for Greener Environments) incorporation.",
      "Keir is actively in talks with potential investors but currently cash-constrained ('hold onto the day job for now').",
      "Partnership with Locus AG confirmed, starting with a test pilot of microbial products in Uganda.",
      "Core strategy: Leverage Scope 3 carbon credits via CarbonNow to record, capture, and trade credits.",
      "Kenya identified as a high-value target for coffee, tea, and roses; proposed pilot with AgriTecno leading to a formal JV.",
      "Integration: Carbon credits generated will be sold via Keir's US entity, the Carbon Zero Marketplace.",
    ]
  },
  {
    domain: "Context",
    format: "WhatsApp",
    date: "2025-12-23",
    title: "Uganda Progress Update",
    detail: "End-of-year update on operational progress and government relations.",
    tags: ["WhatsApp", "Timeline", "Uganda"],
    synthesis: [
      "Progress remains strong on the Uganda microbes business development.",
      "Expect formal government approval for Uganda operations by mid-February 2026.",
      "Shifted focus to scheduling follow-up strategy sessions for early January.",
    ]
  },
  {
    domain: "Context",
    format: "Email",
    date: "2025-11-07",
    title: "Marketplace & Partner Background",
    detail: "Technical and scientific background on Ken Alibek, Locus AG tech, and the Carbon Neutral Marketplace vision.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-2-followup.md",
    tags: ["Partners", "Scientific", "Marketplace"],
    synthesis: [
      "Scientific foundation led by Ken Alibek (former bioweapons researcher turned pioneer in microbial biotech).",
      "Locus AG flagship tech (Rhizolizer® Duo) improves nutrient uptake and soil health via beneficial microbes.",
      "Carbon Neutral Marketplace (Keir's platform) identified as the primary downstream exit for carbon credits.",
      "3-Degrees confirmed as the accreditation partner for Verra/Gold Standard pathways.",
    ]
  },
  {
    domain: "Context",
    format: "Email",
    date: "2025-11-10",
    title: "Uganda Maize Trials Results",
    detail: "Operational update confirming results of the first Uganda maize trial and expansion to NARO zones.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-10-email-4-k-uganda-maize-trials.md",
    tags: ["Data", "NARO", "Trial Results"],
    synthesis: [
      "Rhizolizer Duo maize trial in Uganda completed with 'very promising' results.",
      "National Agricultural Research Organization (NARO) independently testing across 5 Ugandan zones.",
      "Product testing expanded to potatoes and peanuts; focus is purely agricultural (no agroforestry yet).",
      "Commercial strategy: Get product approval/sales in Uganda to cover project overheads.",
      "Kenya expansion currently stalled due to local broker fee demands ($10k).",
    ]
  },

  // EVIDENCE
  {
    domain: "Evidence",
    format: "PDF",
    date: "2024-06-01",
    title: "Locus AG Company Overview",
    detail: "Technical brief on microbial solutions (Rhizolizer® Duo) and their impact on soil health/yields.",
    file: "03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf",
    tags: ["Technical", "Locus AG", "Product"],
    synthesis: [
      "Core technology: Rhizolizer® Duo microbial blend for nutrient uptake.",
      "Commercial program: 'CarbonNOW' provides a path for soil carbon sequestration credits.",
    ]
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
    title: "Partner Dossier: Deep Six Consulting",
    detail: "Core venture building partner and strategic lead. Dossier on digital transformation expertise and HISAGEN origin.",
    file: "/ecosystem/deep-six",
    tags: ["Strategy", "Venture Builder"]
  },
  {
    domain: "Ecosystem",
    format: "Doc",
    date: "2025-11-30",
    title: "Partner Dossier: Locus AG",
    detail: "Microbial technology partner. Detailed profile on Rhizolizer tech and 'CarbonNOW' methodology.",
    file: "/ecosystem/locus-ag",
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
                      {item.synthesis && (
                        <div className="mt-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            Key Context Synthesis
                          </p>
                          <ul className="space-y-1.5">
                            {item.synthesis.map((bullet, idx) => (
                              <li key={idx} className="text-xs text-slate flex gap-2">
                                <span className="text-secondary/50">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item.attachments && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          <p className="w-full text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-1">Related Evidence</p>
                          {item.attachments.map((attachment) => (
                            <a
                              key={attachment.title}
                              href={attachment.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-mist/30 border border-mist hover:border-secondary/20 transition-all"
                            >
                              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${attachment.format === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-secondary/10 text-secondary'}`}>
                                {attachment.format}
                              </span>
                              <span className="text-xs font-medium text-secondary">{attachment.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[9px] bg-parchment px-1.5 py-0.5 rounded text-slate/60 font-medium">#{tag}</span>
                        ))}
                      </div>
                    </div>

                    {item.file && (
                      <Link
                        href={item.file}
                        target={item.file.startsWith('http') ? "_blank" : "_self"}
                        className="flex-shrink-0 flex items-center justify-center h-10 px-4 rounded-lg bg-secondary text-parchment text-[10px] uppercase tracking-widest font-bold hover:bg-secondary/90 transition-colors"
                      >
                        {item.format === 'Link' ? 'Open Link' : item.domain === 'Ecosystem' ? 'View Dossier' : 'View Item'}
                      </Link>
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
