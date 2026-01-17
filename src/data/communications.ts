// HISAGEN Knowledge Base - Communications Data
// Migrated from intelligenceLedger (2026-01-17)

import { CommunicationEntry } from '../types/knowledge-base';

export const communications: CommunicationEntry[] = [
  // 2026
  {
    id: 'comm-2026-01-16-keir-locus-ceo',
    type: 'communication',
    subtype: 'email',
    date: '2026-01-16',
    title: 'Keir → Nic: Locus CEO Meeting & Uganda Roadmap Confirmed',
    summary: 'Keir reported positive meeting with John Uhran (Locus CEO) confirming full support for Uganda roadmap and pan-African expansion strategy.',
    from: 'Keir',
    to: 'Nic',
    tags: ['Locus AG', 'Uganda', 'Strategy', 'Milestone'],
    file: 'communications/2026/2026-01-16-email-keir-locus-ceo-meeting.md',
    synthesis: [
      'John Uhran (Locus CEO) fully supportive of proposed Uganda roadmap and path to approvals.',
      'Expansion strategy confirmed: Uganda first → East Africa → pan-African rollout.',
      'Locus USA remains fully committed, supportive, and engaged.',
      'Attached overview deck includes updated HISAGEN Uganda overview (14 pages) + Locus AG agronomy data (30 pages).',
    ],
    relatedIds: ['research-2026-01-16-uganda-deck'],
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
    tags: ['WhatsApp', 'Timeline', 'Uganda'],
    synthesis: [
      'Progress remains strong on the Uganda microbes business development.',
      'Expect formal government approval for Uganda operations by mid-February 2026.',
      'Shifted focus to scheduling follow-up strategy sessions for early January.',
    ],
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
