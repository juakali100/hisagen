// HISAGEN Knowledge Base - Communications Data
// Migrated from intelligenceLedger (2026-01-17)

import { CommunicationEntry, StatusUpdateData } from '../types/knowledge-base';

export const communications: CommunicationEntry[] = [
  // 2026
  {
    id: 'comm-2026-02-12-keir-trial-results-invoice',
    type: 'communication',
    subtype: 'email',
    date: '2026-02-12',
    title: 'Keir → Nic: NARO Trial Results, Invoice Request & Logo Greenlight',
    summary: 'Major milestone email: NARO trial results attached (19-slide PDF), invoice requested to HISAGEN LTD, logo concepts greenlit for development, website confirmed as regulatory requirement for UNBS/MAAIF applications.',
    from: 'Keir',
    to: 'Nic',
    project: 'uganda-pilot',
    tags: ['Trial Results', 'NARO', 'Invoice', 'Logo', 'Regulatory', 'UNBS', 'MAAIF', 'Milestone'],
    synthesis: [
      'NARO trial results shared: 19-slide PDF by Ongua Fanuel (NARO-NARL Kawanda). Rhizolizer Duo +17-48% grain yield across 3 sites (Kawanda, Tororo, Bulindi). Outperformed NPK. All p < 0.05.',
      'Invoice requested: "Send invoice to HISAGEN LTD" — first paid engagement confirmed.',
      'Contract discussion initiated: Keir wants formal terms of service / agreement.',
      'Logo greenlit: AI-generated concepts approved for professional development.',
      'Website = regulatory requirement: UNBS and MAAIF applications require official website and email addresses. Domain: hisagen.com (set up by Keir).',
      'Raw data offered: Keir indicated underlying trial data available if needed.',
    ],
    attachments: [
      {
        title: 'NARO Trial Results — Rhizolizer Duo Multi-Site (19 slides)',
        file: 'content/programs/agri-carbon/uganda-pilot/2026-02-trial-results/PRESENTATION OF RESULTS_HISAGEN.pdf',
        format: 'PDF',
      },
      {
        title: 'HISAGEN Logo Concept — Roots Variations',
        file: 'brand/keir-logo-concepts/HISAGEN logo 2 variations roots.png',
        format: 'Image',
      },
      {
        title: 'HISAGEN Logo Concept 3',
        file: 'brand/keir-logo-concepts/HISAGEN logo 3 .png',
        format: 'Image',
      },
      {
        title: 'HISAGEN Logo Concept 4',
        file: 'brand/keir-logo-concepts/HISAGEN logo 4.png',
        format: 'Image',
      },
      {
        title: 'Nature-Inspired HISAGEN Logo Variations',
        file: 'brand/keir-logo-concepts/Nature-inspired HISAGEN logo variations.png',
        format: 'Image',
      },
    ],
    relatedIds: ['evidence-naro-5zone-trials-2025'],
    statusUpdate: {
      regulatory: {
        items: [
          { text: 'UNBS submission in progress', status: 'in-progress' },
          { text: 'MAAIF submission pending UNBS outcome', status: 'pending' },
          { text: 'Website required for UNBS/MAAIF applications', status: 'in-progress' },
          { text: 'Official email addresses set up (hisagen.com)', status: 'complete' },
        ],
      },
      fieldOps: {
        items: [
          { text: 'NARO trial results received (19-slide PDF)', status: 'complete' },
          { text: 'Grain yield: +17-48% across 3 sites (p < 0.05)', status: 'complete' },
          { text: 'Biomass: +35-65% improvement', status: 'complete' },
          { text: 'Outperformed NPK conventional fertilizer', status: 'complete' },
          { text: 'Raw data available from Keir if needed', status: 'pending' },
        ],
      },
      strategic: {
        items: [
          { text: 'Invoice requested to HISAGEN LTD', status: 'complete' },
          { text: 'Contract/terms of service discussion initiated', status: 'in-progress' },
          { text: 'Logo concepts greenlit for professional development', status: 'in-progress' },
          { text: 'Farmer-first yield story now data-backed', status: 'complete' },
        ],
      },
    },
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13',
  },
  {
    id: 'comm-2026-02-05-keir-strategic-update',
    type: 'communication',
    subtype: 'email',
    date: '2026-02-05',
    title: 'Keir → Nic: Strategic Update & Positioning Pivot',
    summary: 'Comprehensive status update with regulatory progress, strategic messaging pivot, and next steps alignment.',
    from: 'Keir',
    to: ['Nic', 'Scott Hermo'],
    project: 'uganda-pilot',
    tags: ['Strategy', 'Uganda', 'Regulatory', 'Positioning', 'Domains'],
    synthesis: [
      'Regulatory: Samples arrived in Uganda, submitted to UNBS for formal approval. Collecting latest yield/field data. Call with Uganda team Tuesday.',
      'Timeline: Running ~3 weeks behind schedule. Locus US team remains supportive and engaged.',
      'Strategic Pivot: Downplaying carbon credit angle for next 12-18 months. Emphasizing socio-economic impact for farmers: better plant health, resilient crops, improved yields, more income.',
      'Carbon credits repositioned as secondary revenue stream, to be developed after field data established and certification pathway assessed.',
      'Website/logo reviewed and approved: "all looks great".',
      'Domains confirmed: hisagen.com, hisagen-africa.com, hisagen-usa.com (registered via Wix).',
      'Call requested Feb 11-13 to align on next steps.',
    ],
    statusUpdate: {
      regulatory: {
        items: [
          { text: 'Samples arrived in Uganda', status: 'complete' },
          { text: 'Submitted to UNBS', status: 'complete' },
          { text: 'Awaiting UNBS confirmation', status: 'in-progress' },
          { text: 'MAAIF submission (next)', status: 'future' },
        ],
      },
      fieldOps: {
        items: [
          { text: 'Collecting latest yield data', status: 'in-progress' },
          { text: 'Gathering field trial results', status: 'in-progress' },
          { text: 'Uganda call: confirm timeline', status: 'complete' },
          { text: '~3 weeks behind schedule', status: 'warning' },
        ],
      },
      strategic: {
        items: [
          { text: 'Locus USA fully supportive', status: 'complete' },
          { text: 'Farmer impact as lead story', status: 'direction' },
          { text: 'Yields & income first', status: 'direction' },
          { text: 'Carbon credits: phase 2', status: 'future' },
        ],
      },
    },
    createdAt: '2026-02-06',
    updatedAt: '2026-02-06',
  },
  {
    id: 'comm-2026-01-27-website-proposal-exchange',
    type: 'communication',
    subtype: 'email',
    date: '2026-01-27',
    title: 'Nic ↔ Keir: Website & Logo Preview Exchange',
    summary: 'Website preview and logo concepts shared, with positive response from Keir and introduction of business partner Scott Hermo.',
    from: 'Nic',
    to: ['Keir', 'Scott Hermo'],
    project: 'uganda-pilot',
    tags: ['Website', 'Logo', 'Portal', 'Scott Hermo', 'UNBS'],
    synthesis: [
      'Website preview shared: 6 pages live (Home, About, Program, Uganda, Rwanda, Contact). Mobile-responsive, Next.js stack.',
      'Logo concepts shared via portal /logo page for feedback.',
      'Program Hub introduced as internal coordination hub for strategy, carbon model, funder landscape.',
      'Keir response: "Fantastic... All sounds great... Great work sir!"',
      'Scott Hermo (business partner) introduced, working directly with Locus AG.',
      'Uganda update: Samples sent for formal UNBS tests, then MAAIF approval submission.',
      'Access granted to both Keir and Scott for portal and preview site.',
    ],
    statusUpdate: {
      regulatory: {
        items: [
          { text: 'Samples sent for UNBS tests', status: 'complete' },
          { text: 'MAAIF approval submission planned', status: 'pending' },
        ],
      },
      fieldOps: {
        items: [
          { text: 'Scott Hermo engaged with Locus AG', status: 'complete' },
          { text: 'Portal and preview site access granted', status: 'complete' },
        ],
      },
      strategic: {
        items: [
          { text: 'Website direction approved', status: 'complete' },
          { text: 'Logo concepts under review', status: 'in-progress' },
          { text: 'Partnership model discussion ongoing', status: 'direction' },
        ],
      },
    },
    createdAt: '2026-02-06',
    updatedAt: '2026-02-06',
  },
  {
    id: 'comm-2026-01-21-keir-nic-checkin',
    type: 'communication',
    subtype: 'call',
    date: '2026-01-21',
    title: 'Keir ↔ Nic: HISAGEN Check-in Call',
    summary: 'Comprehensive status update including portal site walkthrough, Capital Continuum framework introduction, grant proposal review, and carbon market context discussion.',
    from: 'Keir',
    to: 'Nic',
    participants: ['Keir', 'Nic'],
    project: 'uganda-pilot',
    tags: ['Strategy', 'Portal', 'Capital Continuum', 'Grants', 'Carbon Market', 'Check-in'],
    synthesis: [
      'Carbon market context: US prices dropped ($25-42 to $12-15/tonne). Locus AG pivoted to full-price product with opt-in data program. EU/UK momentum continues (CSRD, SRS).',
      'Carbon Zero Marketplace positioned as future credit sales vehicle. Emerging services (biodiversity, water credits) noted as future phase potential.',
      'Portal site walkthrough: Covered Knowledge Base, Strategy, Program, Project sections. Capital Continuum 4-stage framework introduced - useful for positioning HISAGEN in Stage 1 (incubation).',
      'Grant proposal review: Identified info gaps. Keir estimated $2M ballpark budget (Stage 1 into Stage 2). Offered to help build budget template.',
      'Pandion 5-layer framework briefly introduced: Landscape positioning (ISEAL), MRV, traceability opportunities identified.',
      'HISAGEN model: Initially subsidise product to Uganda farmers to prove pilot. Longer-term commercial model TBC.',
      'Domains: 2-3 domains secured (HISAGEN US, HISAGEN UG - UG to cover Africa expansion).',
      'Immediate asks confirmed: Website, logo rebrand, grant funding support.',
    ],
    statusUpdate: {
      regulatory: {
        items: [
          { text: 'UNBS certification pathway confirmed', status: 'complete' },
          { text: '2-3 domains secured (HISAGEN US, UG)', status: 'complete' },
        ],
      },
      fieldOps: {
        items: [
          { text: 'Portal site introduced', status: 'complete' },
          { text: 'Capital Continuum framework mapped', status: 'complete' },
          { text: '$2M budget estimate (Stage 1→2)', status: 'pending' },
        ],
      },
      strategic: {
        items: [
          { text: 'Carbon market context understood', status: 'complete' },
          { text: 'Subsidised pilot model confirmed', status: 'direction' },
          { text: 'Website + logo + grants prioritised', status: 'direction' },
        ],
      },
    },
    createdAt: '2026-01-22',
    updatedAt: '2026-01-22',
  },
  {
    id: 'comm-2026-01-16-keir-locus-ceo',
    type: 'communication',
    subtype: 'email',
    date: '2026-01-16',
    title: 'Keir → Nic: Locus CEO Meeting & Uganda Roadmap Confirmed',
    summary: 'Keir reported positive meeting with John Uhran (Locus CEO) confirming full support for Uganda roadmap and pan-African expansion strategy.',
    from: 'Keir',
    to: 'Nic',
    project: 'uganda-pilot',
    tags: ['Locus AG', 'Uganda', 'Strategy', 'Milestone'],
    file: 'communications/2026/2026-01-16-email-keir-locus-ceo-meeting.md',
    synthesis: [
      'John Uhran (Locus CEO) fully supportive of proposed Uganda roadmap and path to approvals.',
      'Expansion strategy confirmed: Uganda first → East Africa → pan-African rollout.',
      'Locus USA remains fully committed, supportive, and engaged.',
      'Attached overview deck includes updated HISAGEN Uganda overview (14 pages) + Locus AG agronomy data (30 pages).',
    ],
    attachments: [
      {
        title: 'HISAGEN Uganda Overview + Locus AG Agronomy Data (44 pages)',
        file: 'hisagen-knowledge-base/research/2026/2026-01-16-deck-hisagen-uganda-overview-locus.pdf',
        format: 'PDF',
      },
    ],
    relatedIds: ['research-2026-01-16-uganda-deck'],
    statusUpdate: {
      regulatory: {
        items: [
          { text: 'Locus CEO meeting completed', status: 'complete' },
          { text: 'Uganda roadmap approved by Locus', status: 'complete' },
        ],
      },
      fieldOps: {
        items: [
          { text: 'HISAGEN Uganda overview (14 pages) shared', status: 'complete' },
          { text: 'Locus AG agronomy data (30 pages) shared', status: 'complete' },
        ],
      },
      strategic: {
        items: [
          { text: 'Pan-African expansion confirmed', status: 'direction' },
          { text: 'Locus USA fully committed', status: 'complete' },
        ],
      },
    },
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2026-01-16-nic-portal-intro',
    type: 'communication',
    subtype: 'email',
    date: '2026-01-16',
    title: 'Nic → Keir: HISAGEN Portal Site Introduction',
    summary: 'Introduced the HISAGEN founding stewardship portal to Keir - consolidating strategy, program model, capital framework, and evidence base into one coherent internal coordination hub.',
    from: 'Nic',
    to: 'Keir',
    project: 'uganda-pilot',
    tags: ['Portal', 'Strategy', 'Coordination'],
    file: 'communications/2026/2026-01-16-email-nic-portal-introduction.md',
    synthesis: [
      'Portal positioned as internal coordination hub (strategy → execution alignment).',
      'Foundation for investor-facing materials.',
      'Living reference that grows with the project.',
      'Key sections: Strategy & ToC, Program Model, Uganda Pilot, Capital Continuum, Knowledge Base.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },

  {
    id: 'comm-2026-01-21-rwanda-expansion-discussion',
    type: 'communication',
    subtype: 'call',
    date: '2026-01-21',
    title: 'Keir ↔ Nic: Rwanda Expansion Scoping',
    summary: 'Discussion on Rwanda as second pilot market. Coffee and tea identified as high-value target crops. RAB engagement to follow Uganda NARO model. Timeline: post-Uganda commercial launch.',
    from: 'Keir',
    to: 'Nic',
    participants: ['Keir', 'Nic'],
    tags: ['Rwanda', 'Expansion', 'Strategy', 'Coffee', 'Tea'],
    project: 'rwanda-pilot',
    synthesis: [
      'Rwanda confirmed as priority second market after Uganda. Strategic alignment with East Africa expansion roadmap.',
      'Target crops: coffee and tea (high-value export crops with strong sustainability demand from buyers). Maize also viable.',
      'RAB (Rwanda Agriculture Board) identified as key institutional partner — equivalent to NARO in Uganda.',
      'Regulatory pathway differs from Uganda: REMA (environment), RSB (standards), RAB (agriculture) — needs scoping.',
      'Timeline dependent on Uganda commercial launch success. Earliest pilot design: Q3 2026.',
    ],
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13',
  },

  // 2025
  {
    id: 'comm-2025-12-23-uganda-progress',
    type: 'communication',
    subtype: 'whatsapp',
    date: '2025-12-23',
    title: 'Uganda Progress Update',
    summary: 'End-of-year update on operational progress and government relations.',
    from: 'Keir',
    to: 'Nic',
    project: 'uganda-pilot',
    tags: ['WhatsApp', 'Timeline', 'Uganda'],
    synthesis: [
      'Progress remains strong on the Uganda microbes business development.',
      'Expect formal government approval for Uganda operations by mid-February 2026.',
      'Shifted focus to scheduling follow-up strategy sessions for early January.',
    ],
    statusUpdate: {
      regulatory: {
        items: [
          { text: 'Government approval on track', status: 'in-progress' },
          { text: 'Target: mid-February 2026', status: 'pending' },
        ],
      },
      fieldOps: {
        items: [
          { text: 'Uganda operations progressing', status: 'in-progress' },
        ],
      },
      strategic: {
        items: [
          { text: 'Strategy sessions planned for Jan', status: 'pending' },
        ],
      },
    },
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2025-11-14-partnership-framework',
    type: 'communication',
    subtype: 'document',
    date: '2025-11-14',
    title: 'Pandion Partnership Framework',
    summary: 'Consolidated response defining the performance-based partnership model and role of Pandion as systems architect.',
    from: 'Pandion',
    to: 'Deep Six / HISAGEN',
    project: 'uganda-pilot',
    tags: ['Partnership', 'Operating Model', 'Success Fee'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/drafts/2025-11-14-partnership-response-CONSOLIDATED.md',
    synthesis: [
      "Pandion's role defined as Systems Architect and operational support (grants & strategy).",
      'Established 12 immediate funding leads (Carbon Thirteen, YC, Bezos Earth Fund).',
      'Model: Performance-based success fees + small equity pool in HISAGEN.',
      "Identified 'Carbon Thirteen' as a top-priority early-stage accelerator with warm intro.",
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2025-11-10-commercial-shift',
    type: 'communication',
    subtype: 'email',
    date: '2025-11-10',
    title: 'Operational Status & Commercial Shift',
    summary: "Keir's reply clarifying the early-stage nature of the project and the immediate shift toward a commercial/self-sustaining model in Uganda.",
    from: 'Keir',
    to: 'Nic',
    project: 'uganda-pilot',
    tags: ['Pivot', 'Commercial', 'NARO', 'Kenya'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-10-email-4-reply-commercial.md',
    attachments: [
      { title: 'Uganda Maize Trials Results (Summary)', file: 'DSC-004-uganda-maize-trials-results1.pdf', format: 'PDF' },
      { title: 'Uganda Maize Phase 2 Data Collection', file: 'DSC-006-uganda-maize-phase2-data.pdf', format: 'PDF' },
      { title: 'Uganda Maize Trials Results 1 (Raw)', file: 'DSC-005-uganda-maize-trials-results1.xlsx', format: 'Excel' },
    ],
    synthesis: [
      "Strategic Pivot: Focus is on UNBS approval and selling microbial product in Uganda to generate income and cover site costs. 'This is a commercial venture.'",
      'Technical Expansion: Rhizolizer® Duo success led to new NARO trials across 5 zones (results pending) and expansion to sweet/Irish potatoes and peanuts.',
      "Agroforestry: Purely ag-focused for now; no agroforestry components designed yet ('No agroforestry even in USA').",
      "Kenya Blocker: Expansion stalled due to $10k 'review fee' (bribe) requested by local brokers.",
      'Data Sequencing: Formal modeling of cost-per-farmer and corporate frameworks deferred until harvest data is finalized.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2025-11-07-pilot-inquiry',
    type: 'communication',
    subtype: 'email',
    date: '2025-11-07',
    title: 'Strategic Inquiry: Pilot Scaling & Corporate Framework',
    summary: 'Direct follow-up to Keir with a structured list of questions regarding pilot metrics, cost per farmer, and carbon credit ownership models.',
    from: 'Nic',
    to: 'Keir',
    project: 'uganda-pilot',
    tags: ['Strategy', 'Inquiry', 'Corporate'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-3-pandion-followup.md',
    synthesis: [
      "Objective: To define the 'Minimum Viable Model' for corporate supply chain partnerships (e.g., Nestlé/Starbucks).",
      'Gaps Identified: Need to define credit ownership (Corporate vs. Farmer) and upfront vs. outcome-based funding.',
      'Scope Extension: Questioned the integration of agroforestry vs. pure microbial fertilizer reduction.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2025-11-07-marketplace-background',
    type: 'communication',
    subtype: 'email',
    date: '2025-11-07',
    title: 'Marketplace & Partner Background',
    summary: 'Technical and scientific background on Ken Alibek, Locus AG tech, and the Carbon Neutral Marketplace vision.',
    from: 'Keir',
    to: 'Nic',
    project: 'uganda-pilot',
    tags: ['Partners', 'Scientific', 'Marketplace'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-2-followup.md',
    synthesis: [
      'Scientific foundation led by Ken Alibek (former bioweapons researcher turned pioneer in microbial biotech).',
      'Locus AG flagship tech (Rhizolizer® Duo) improves nutrient uptake and soil health via beneficial microbes.',
      "Carbon Neutral Marketplace (Keir's platform) identified as the primary downstream exit for carbon credits.",
      '3-Degrees confirmed as the accreditation partner for Verra/Gold Standard pathways.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2025-11-07-project-sequencing',
    type: 'communication',
    subtype: 'email',
    date: '2025-11-07',
    title: 'Project Sequencing & Context',
    summary: 'Overview from Keir on Locus AG partnership, Uganda pilot context, and sequencing of the four ventures.',
    from: 'Keir',
    to: 'Nic',
    project: 'uganda-pilot',
    tags: ['Locus AG', 'Uganda', 'Operations'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/2025-11-07-email-1-followup.md',
    attachments: [
      {
        title: 'Carbon Zero Pitch Deck',
        file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-001-carbon-zero-pitch-jun23.pdf',
        format: 'PDF',
      },
      {
        title: 'Locus AG Company Overview',
        file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf',
        format: 'PDF',
      },
    ],
    synthesis: [
      'Follow-up from initial phone call confirming HISAGEN (High Impact Soil/Seed Application for Greener Environments) incorporation.',
      "Keir is actively in talks with potential investors but currently cash-constrained ('hold onto the day job for now').",
      'Partnership with Locus AG confirmed, starting with a test pilot of microbial products in Uganda.',
      'Core strategy: Leverage Scope 3 carbon credits via CarbonNow to record, capture, and trade credits.',
      'Kenya identified as a high-value target for coffee, tea, and roses; proposed pilot with AgriTecno leading to a formal JV.',
      "Integration: Carbon credits generated will be sold via Keir's US entity, the Carbon Zero Marketplace.",
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'comm-2025-11-07-venture-portfolio',
    type: 'communication',
    subtype: 'call',
    date: '2025-11-07',
    title: 'Venture Portfolio Analysis',
    summary: 'Analysis of the four parallel ventures (Deep 6, HISAGEN, Carbon Zero, Iced Coffee) and prioritization of HISAGEN.',
    from: 'Keir',
    to: 'Nic',
    participants: ['Keir', 'Nic'],
    project: 'uganda-pilot',
    tags: ['Strategy', 'Prioritization', 'Portfolio'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/call-notes-2025-11-07.md',
    synthesis: [
      'Venture 1: Deep 6 Consulting (AI Testing for LexisNexis) - Stability & Revenue track.',
      'Venture 2: HISAGEN (Microbes) - Highest potential for growth and grant funding.',
      'Venture 3: Carbon Zero Marketplace (B2C) - Passion project requiring downstream scale.',
      'Venture 4: Iced Coffee US - Side venture emerging from coffee bush carbon exploration.',
      "Strategy: HISAGEN is the 'Tip of the Spear' to build institutional credibility.",
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
];

// Helper: Get communications by year
export function getCommunicationsByYear(): Record<string, CommunicationEntry[]> {
  return communications.reduce((acc, comm) => {
    const year = comm.date.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(comm);
    return acc;
  }, {} as Record<string, CommunicationEntry[]>);
}

// Helper: Get all unique tags from communications
export function getCommunicationTags(): string[] {
  const tagSet = new Set<string>();
  communications.forEach(comm => comm.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Helper: Get project status updates (comms with statusUpdate field, filtered by project)
export function getProjectStatusUpdates(project: string): CommunicationEntry[] {
  return communications
    .filter(c => c.project === project && c.statusUpdate)
    .sort((a, b) => b.date.localeCompare(a.date));
}

// Helper: Get latest project status update
export function getLatestProjectStatus(project: string): CommunicationEntry | null {
  const updates = getProjectStatusUpdates(project);
  return updates.length > 0 ? updates[0] : null;
}

// Helper: Get historical project status updates (all except latest)
export function getHistoricalProjectStatus(project: string): CommunicationEntry[] {
  return getProjectStatusUpdates(project).slice(1);
}

// Helper: Format date for status update display
export function formatStatusDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
