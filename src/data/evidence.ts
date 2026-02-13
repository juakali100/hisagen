// HISAGEN Knowledge Base - Evidence Data
// Structured trial data, MRV metrics, and verification records
// Created: 2026-01-17

import { EvidenceEntry, EvidenceDataType, subtypeToDataType } from '../types/knowledge-base';

export const evidence: EvidenceEntry[] = [
  // ===========================================
  // UGANDA PILOT - MAIZE TRIALS
  // ===========================================

  {
    id: 'evidence-uganda-maize-phase1-2024',
    type: 'evidence',
    subtype: 'trial-data',
    dataType: 'mrv',
    date: '2024-10-15',
    title: 'Uganda Maize Trial - Phase 1 Results',
    summary: 'Initial field trial of Rhizolizer® Duo on maize in Uganda, demonstrating promising yield improvements compared to control plots.',
    project: 'uganda-pilot',
    location: 'Uganda - NARO pilot zone',
    period: {
      start: '2024-06-01',
      end: '2024-10-15',
    },
    methodology: 'Randomized control trial comparing Rhizolizer-treated plots vs. untreated control plots. Managed by NARO field teams.',
    metrics: [
      { label: 'Trial Status', value: 'Completed' },
      { label: 'Trial Outcome', value: 'Promising', change: 'Supports Phase 2' },
      { label: 'Plots Tested', value: 'Multiple', unit: 'paired plots' },
    ],
    tags: ['Maize', 'Uganda', 'Trials', 'NARO', 'Phase 1'],
    verified: false,
    file: 'evidence/uganda-pilot/phase-1-maize-trial-summary.md',
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },

  {
    id: 'evidence-uganda-maize-phase2-2025',
    type: 'evidence',
    subtype: 'trial-data',
    dataType: 'mrv',
    date: '2025-05-01',
    title: 'Uganda Maize Trial - Phase 2 Data Collection',
    summary: 'Expanded field trials across multiple agro-ecological zones in Uganda. Standardized data collection using field sheets for yield comparison.',
    project: 'uganda-pilot',
    location: 'Uganda - Multiple NARO zones',
    period: {
      start: '2025-01-01',
      end: '2025-05-01',
    },
    methodology: 'Standardized field data sheets capturing yield per plot, plant health indicators, and environmental conditions.',
    metrics: [
      { label: 'Trial Status', value: 'Data collected' },
      { label: 'Zones Covered', value: 4, unit: 'agro-ecological zones' },
      { label: 'Crops Tested', value: 'Maize, Potatoes, Peanuts, Sweet Potatoes' },
    ],
    tags: ['Maize', 'Uganda', 'Trials', 'NARO', 'Phase 2', 'Data'],
    verified: false,
    file: 'research/2025/uganda-maize-phase2-data.xlsx',
    relatedIds: ['research-2025-11-10-maize-phase2-data', 'research-2025-05-01-maize-trials-raw'],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },

  {
    id: 'evidence-naro-5zone-trials-2025',
    type: 'evidence',
    subtype: 'trial-data',
    dataType: 'mrv',
    date: '2026-02-12',
    title: 'NARO Independent Multi-Site Trials — Results',
    summary: 'Independent trials by NARO across 3 Uganda sites (Kawanda, Tororo, Bulindi) validating Rhizolizer® Duo. Grain yield +17-48% over controls, biomass +35-65%. Outperformed NPK conventional fertilizer at all sites. All results statistically significant (p < 0.05).',
    project: 'uganda-pilot',
    location: 'Uganda - Kawanda, Tororo, Bulindi (NARO sites)',
    period: {
      start: '2025-06-01',
      end: '2026-01-31',
    },
    methodology: 'Randomized control trial across 3 agro-ecological zones. 5 treatments: Control, Rhizolizer Duo 0.5 oz (recommended), NPK Maize Blend, Rhizolizer Duo 1.0 oz, Vermipro. Metrics: grain weight (kg), biomass yield (kg), 1000-seed weight (g). Led by Ongua Fanuel, NARO-NARL Kawanda.',
    metrics: [
      { label: 'Trial Status', value: 'Completed' },
      { label: 'Sites', value: 3, unit: 'locations (Kawanda, Tororo, Bulindi)' },
      { label: 'Independence', value: 'NARO-managed' },
      { label: 'Grain Yield Improvement', value: '+17-48%', change: 'vs control, p < 0.05' },
      { label: 'Biomass Improvement', value: '+35-65%', change: 'vs control' },
      { label: 'vs NPK', value: 'Outperformed', change: 'Bio-fertilizer beat conventional at all sites' },
      { label: 'Kawanda Grain', value: '5,750 → 8,520 kg', change: '+48%' },
      { label: 'Bulindi Grain', value: '5,717 → 8,283 kg', change: '+45%' },
      { label: 'Tororo Grain', value: '7,023 → 8,209 kg', change: '+17%' },
      { label: 'Dose Response', value: '0.5 oz optimal', change: 'Higher dose (1.0 oz) did not improve results' },
    ],
    tags: ['Trials', 'NARO', 'Uganda', 'Independent', 'Validation', 'Results', 'Maize'],
    verified: true,
    verifiedBy: 'NARO Uganda (Ongua Fanuel, NARO-NARL Kawanda)',
    file: 'content/programs/agri-carbon/uganda-pilot/2026-02-trial-results/TRIAL-RESULTS-SYNTHESIS.md',
    createdAt: '2026-01-17',
    updatedAt: '2026-02-13',
  },

  // ===========================================
  // LOCUS AG - GLOBAL YIELD VALIDATION
  // ===========================================

  {
    id: 'evidence-locus-global-yield-data',
    type: 'evidence',
    subtype: 'yield-data',
    dataType: 'mrv',
    date: '2024-06-01',
    title: 'Locus AG Global Yield Validation Data',
    summary: 'Validated yield improvement data from Locus AG trials across multiple crops and geographies, demonstrating consistent performance of Rhizolizer® Duo.',
    project: 'uganda-pilot',
    location: 'Global - Locus AG trial sites',
    methodology: 'Multi-year, multi-geography field trials conducted by Locus AG with third-party verification.',
    metrics: [
      { label: 'Corn Yield', value: '+4-6', unit: '%', baseline: 'Control', change: '+4-6%' },
      { label: 'Soybean Yield', value: '+5', unit: '%', baseline: 'Control', change: '+5%' },
      { label: 'Wheat Yield', value: '+5', unit: '%', baseline: 'Control', change: '+5%' },
      { label: 'Potato Yield', value: '+14-22', unit: '%', baseline: 'Control', change: '+14-22%' },
      { label: 'Sweet Potato Yield', value: '+18', unit: '%', baseline: 'Control', change: '+18%' },
    ],
    tags: ['Locus AG', 'Yield', 'Global', 'Validation', 'Rhizolizer'],
    verified: true,
    verifiedBy: 'Locus AG',
    file: 'research/locus-ag-yield-data-summary.pdf',
    relatedIds: ['research-2024-06-01-locus-overview', 'research-2026-01-16-uganda-deck'],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },

  // ===========================================
  // SOIL ORGANIC CARBON (SOC)
  // ===========================================

  {
    id: 'evidence-soc-baseline-2025',
    type: 'evidence',
    subtype: 'soil-data',
    dataType: 'mrv',
    date: '2025-08-01',
    title: 'Uganda SOC Baseline Data Collection',
    summary: 'Soil Organic Carbon baseline measurements across pilot zones, establishing pre-treatment levels for carbon sequestration tracking.',
    project: 'uganda-pilot',
    location: 'Uganda - Pilot zones',
    period: {
      start: '2025-06-01',
      end: '2025-08-01',
    },
    methodology: 'Soil sampling at 0-30cm depth following Verra VM0042 methodology guidelines. Samples analyzed for organic carbon content.',
    metrics: [
      { label: 'Data Status', value: 'Baseline collected' },
      { label: 'Sampling Depth', value: '0-30', unit: 'cm' },
      { label: 'Methodology', value: 'Verra VM0042 aligned' },
    ],
    tags: ['SOC', 'Baseline', 'Uganda', 'Carbon', 'MRV'],
    verified: false,
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },

  // ===========================================
  // MARKET DATA
  // ===========================================

  {
    id: 'evidence-africa-biostimulants-market-2025',
    type: 'evidence',
    subtype: 'validation',
    dataType: 'impact',
    date: '2025-01-01',
    title: 'Africa Bio-Stimulants Market Validation',
    summary: 'Market research validating the growth trajectory of agricultural bio-stimulants in Africa, supporting HISAGEN commercial strategy.',
    project: 'uganda-pilot',
    location: 'Africa-wide',
    period: {
      start: '2025-01-01',
      end: '2031-12-31',
    },
    metrics: [
      { label: 'Market Size (2025)', value: '$138.8M', unit: 'USD' },
      { label: 'Market Size (2031)', value: '$233.85M', unit: 'USD' },
      { label: 'CAGR', value: '9.08', unit: '%', change: '2025-2031' },
    ],
    tags: ['Market', 'Africa', 'Bio-Stimulants', 'Commercial'],
    verified: true,
    verifiedBy: 'Industry research',
    relatedIds: ['research-2026-01-16-uganda-deck'],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
];

// Helper: Get evidence by project
export function getEvidenceByProject(): Record<string, EvidenceEntry[]> {
  return evidence.reduce((acc, entry) => {
    const project = entry.project || 'unassigned';
    if (!acc[project]) acc[project] = [];
    acc[project].push(entry);
    return acc;
  }, {} as Record<string, EvidenceEntry[]>);
}

// Helper: Get evidence by subtype
export function getEvidenceBySubtype(): Record<string, EvidenceEntry[]> {
  return evidence.reduce((acc, entry) => {
    if (!acc[entry.subtype]) acc[entry.subtype] = [];
    acc[entry.subtype].push(entry);
    return acc;
  }, {} as Record<string, EvidenceEntry[]>);
}

// Helper: Get all unique tags from evidence
export function getEvidenceTags(): string[] {
  const tagSet = new Set<string>();
  evidence.forEach(entry => entry.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Helper: Get verified evidence
export function getVerifiedEvidence(): EvidenceEntry[] {
  return evidence.filter(entry => entry.verified === true);
}

// Helper: Get evidence for Uganda pilot
export function getUgandaPilotEvidence(): EvidenceEntry[] {
  return evidence.filter(entry => entry.project === 'uganda-pilot');
}

// Helper: Get evidence grouped by data type (uses subtypeToDataType fallback)
export function getEvidenceByDataType(): Record<EvidenceDataType, EvidenceEntry[]> {
  const result: Record<EvidenceDataType, EvidenceEntry[]> = {
    mrv: [],
    traceability: [],
    disclosure: [],
    impact: [],
  };
  evidence.forEach(entry => {
    const dt = entry.dataType || subtypeToDataType[entry.subtype];
    result[dt].push(entry);
  });
  return result;
}
