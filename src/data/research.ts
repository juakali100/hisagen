// HISAGEN Knowledge Base - Research Data
// Migrated from intelligenceLedger (2026-01-17)

import { ResearchEntry } from '../types/knowledge-base';

export const research: ResearchEntry[] = [
  // 2026
  {
    id: 'research-2026-01-17-locus-ag-carbon-deep-dive',
    type: 'research',
    subtype: 'analysis',
    date: '2026-01-17',
    title: 'Locus AG Carbon Deep Dive: CarbonNOW Program & Carbon Credit Mechanics',
    summary: 'Comprehensive analysis of Locus AG\'s CarbonNOW carbon farming program, additionality concepts, and carbon credit infrastructure. Key partner intelligence for understanding MRV and commercialization pathways.',
    tags: ['Carbon', 'Locus AG', 'CarbonNOW', 'MRV', 'Research', 'Deep Dive'],
    file: 'research/2026/2026-01-17-locus-ag-carbon-deep-dive.md',
    synthesis: [
      'CarbonNOW: Biologicals approved as "additionality" - opens carbon markets to farmers already doing cover crops/no-till.',
      'Carbon claims: 121% more carbon sequestered vs untreated plots (third-party verified); 3.3-8.6 MT CO2eq/acre/year.',
      'Farmer economics: 100% product costs covered + up to 20% revenue share on carbon credit sales.',
      'Key partners: Anew (verification), Nori (marketplace), COMET-Farm (USDA accounting).',
      'MRV approach: Annual soil sampling for Bulk Density + SOC, control fields for comparison.',
      'HISAGEN relevance: Biochar permanence (100+ years) commands premium vs biological soil carbon (~20 years).',
    ],
    dataPoints: [
      { label: 'Carbon increase vs untreated', value: '121%' },
      { label: 'CO2 equivalents per acre/year', value: '3.3-8.6 MT' },
      { label: 'Carbon capture vs other regen practices', value: '3x more' },
      { label: 'Revenue share to farmers', value: 'Up to 20%' },
      { label: 'Minimum acreage requirement', value: '500 acres' },
    ],
    source: 'Firecrawl scrape of locusag.com (6 pages)',
    relatedIds: ['research-2024-06-01-locus-overview', 'comm-2026-01-16-keir-locus-ceo'],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2026-01-16-uganda-deck',
    type: 'research',
    subtype: 'deck',
    date: '2026-01-16',
    title: 'HISAGEN Uganda Overview for Locus (44 pages)',
    summary: 'Comprehensive deck shared with Locus CEO. Pages 1-15: HISAGEN strategy, team, market data, Uganda trials, Q1 2026 approvals timeline. Pages 16-44: Locus AG agronomy overview with yield data.',
    tags: ['Deck', 'Uganda', 'Locus AG', 'Timeline', 'Data'],
    file: 'research/2026/2026-01-16-deck-hisagen-uganda-overview-locus.pdf',
    pages: 44,
    synthesis: [
      'Africa bio-stimulants market: $138.8M (2025) → $233.85M (2031) at 9.08% CAGR.',
      'Q1 2026 Timeline: Jan submission to MAAIF → Feb-Mar approval → Apr-Jun market launch prep.',
      '4-phase pan-Africa strategy: East → South → West → North Africa.',
      'Locus yield data: Corn +4-6%, Soybeans +5%, Wheat +5%, Potatoes +14-22%, Sweet Potatoes +18%.',
      'Key partners: NARO, MAAIF, UNBS for Uganda regulatory pathway.',
    ],
    dataPoints: [
      { label: 'Africa bio-stimulants market (2025)', value: '$138.8M' },
      { label: 'Africa bio-stimulants market (2031)', value: '$233.85M' },
      { label: 'Market CAGR', value: '9.08%' },
      { label: 'Corn yield improvement', value: '+4-6%' },
      { label: 'Potato yield improvement', value: '+14-22%' },
      { label: 'Sweet potato yield improvement', value: '+18%' },
    ],
    relatedIds: ['comm-2026-01-16-keir-locus-ceo'],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },

  // 2025
  {
    id: 'research-2025-11-10-maize-trials-summary',
    type: 'research',
    subtype: 'report',
    date: '2025-11-10',
    title: 'Maize Trials Results Summary',
    summary: 'Synthesized report of the phase 2 trial outcomes and technical conclusions.',
    tags: ['Synthesis', 'Uganda', 'Technical'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-004-uganda-maize-trials-results1.pdf',
    synthesis: [],
    project: 'uganda-pilot',
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2025-11-10-maize-phase2-data',
    type: 'research',
    subtype: 'report',
    date: '2025-11-10',
    title: 'Uganda Maize Phase 2 Data Collection',
    summary: 'Standardized field data sheets and collection parameters used for the Uganda pilot.',
    tags: ['Data', 'Uganda', 'Field Sheets'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-006-uganda-maize-phase2-data.pdf',
    project: 'uganda-pilot',
    synthesis: [],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2025-11-08-grant-landscape',
    type: 'research',
    subtype: 'analysis',
    date: '2025-11-08',
    title: 'Workstream 1: Grant Landscape',
    summary: 'Initial findings from scanning 100+ global and regional climate/ag-tech funds.',
    tags: ['Research', 'Grants', 'Landscape'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/research/workstream-1-grant-landscape-findings.md',
    synthesis: [
      'Identified EU FLC (€100k) as highest urgency (Nov 30 deadline).',
      "AfDB ACCF ($200k) identified as high fit for 'readiness' grants.",
      'Strategic gap: Need for civil society/NGO partners to qualify for certain institutional funds.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2025-11-08-agritecno-validation',
    type: 'research',
    subtype: 'analysis',
    date: '2025-11-08',
    title: 'Workstream 2: AgriTecno Validation',
    summary: 'Due diligence on the proposed Kenya distribution partner and sector fit.',
    tags: ['Due Diligence', 'Partners', 'Kenya'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/research/workstream-2-agritecno-validation-findings.md',
    synthesis: [
      "Validation of 'Agritecno East Africa Ltd' as a mid-tier Kenya distributor.",
      'Strong fit for coffee/tea sectors but limited public footprint requires further vetting.',
      'Identified alternative partners (Hygrow, Safi Organics) if AgriTecno fails DD.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2025-11-08-kenya-landscape',
    type: 'research',
    subtype: 'analysis',
    date: '2025-11-08',
    title: 'Workstream 3: Kenya Landscape Analysis',
    summary: "Mapping of Nyeri/Murang'a coffee and Nandi/Kericho tea regions for landscape scale.",
    tags: ['Landscape', 'Kenya', 'Coffee/Tea'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/research/workstream-3-kenya-landscape-findings.md',
    synthesis: [
      "Priority 1: Nyeri-Murang'a Coffee Belt (20k-50k ha) - High density, strong cooperatives.",
      'Priority 2: Rift Valley Tea Belt (100k+ ha) - Massive scale potential via KTDA factories.',
      'Corporate Targets: Starbucks C.A.F.E. Practices and Unilever Tea Estates identified as insetting partners.',
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2025-05-01-maize-trials-raw',
    type: 'research',
    subtype: 'market-data',
    date: '2025-05-01',
    title: 'Uganda Maize Trials Phase 2 Data',
    summary: 'Raw yield data comparing Rhizolizer-treated plots vs. control plots in Uganda.',
    tags: ['Data', 'Uganda', 'Yield'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-005-uganda-maize-trials-results1.xlsx',
    project: 'uganda-pilot',
    synthesis: [],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'research-2024-06-01-locus-overview',
    type: 'research',
    subtype: 'report',
    date: '2024-06-01',
    title: 'Locus AG Company Overview',
    summary: 'Technical brief on microbial solutions (Rhizolizer® Duo) and their impact on soil health/yields.',
    tags: ['Technical', 'Locus AG', 'Product'],
    file: '03-pandion-business/operations/del/clients/deep-six-consulting/communications/source-materials/attachments/DSC-002-locus-ag-overview-jun24.pdf',
    synthesis: [
      'Core technology: Rhizolizer® Duo microbial blend for nutrient uptake.',
      "Commercial program: 'CarbonNOW' provides a path for soil carbon sequestration credits.",
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
];

// Helper: Get research by year
export function getResearchByYear(): Record<string, ResearchEntry[]> {
  return research.reduce((acc, entry) => {
    const year = entry.date.split('-')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(entry);
    return acc;
  }, {} as Record<string, ResearchEntry[]>);
}

// Helper: Get all unique tags from research
export function getResearchTags(): string[] {
  const tagSet = new Set<string>();
  research.forEach(entry => entry.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Helper: Get research by subtype
export function getResearchBySubtype(): Record<string, ResearchEntry[]> {
  return research.reduce((acc, entry) => {
    if (!acc[entry.subtype]) acc[entry.subtype] = [];
    acc[entry.subtype].push(entry);
    return acc;
  }, {} as Record<string, ResearchEntry[]>);
}
