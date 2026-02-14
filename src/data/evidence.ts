// HISAGEN Knowledge Base - Evidence Data
// Structured trial data, MRV metrics, and verification records
// Created: 2026-01-17

import { EvidenceEntry, EvidenceDataType, subtypeToDataType, SourceFile } from '../types/knowledge-base';

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
    sourceFiles: [
      {
        title: 'NARO Trial Results — Rhizolizer Duo Multi-Site (19 slides)',
        url: '/documents/uganda-pilot/NARO-trial-results-rhizolizer-duo-2026.pdf',
        format: 'PDF',
        description: 'Independent NARO trial presentation by Ongua Fanuel, NARO-NARL Kawanda',
        sizeKb: 740,
      },
    ],
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
    project: 'global',
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
    project: 'global',
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

  // ===========================================
  // UGANDA PILOT - TRACEABILITY
  // ===========================================

  {
    id: 'evidence-uganda-farmer-registration-2025',
    type: 'evidence',
    subtype: 'farmer-records',
    dataType: 'traceability',
    date: '2025-09-01',
    title: 'Uganda Farmer Registration — Pilot Zone Records',
    summary: 'Smallholder farmer registration records from NARO pilot zones. Captures participant demographics, plot sizes, crop types, and baseline yields for traceability and impact measurement.',
    project: 'uganda-pilot',
    location: 'Uganda - Kawanda, Tororo, Bulindi pilot zones',
    period: {
      start: '2025-06-01',
      end: '2025-09-01',
    },
    methodology: 'Field-based registration by NARO extension officers. Data captured via standardised field sheets.',
    metrics: [
      { label: 'Registration Status', value: 'Pilot complete' },
      { label: 'Pilot Zones', value: 3, unit: 'zones' },
      { label: 'Data Captured', value: 'Demographics, plot size, crop type, baseline yield' },
    ],
    tags: ['Uganda', 'Traceability', 'Farmer Records', 'NARO', 'Registration'],
    verified: false,
    createdAt: '2026-02-14',
    updatedAt: '2026-02-14',
  },

  {
    id: 'evidence-uganda-input-distribution-2025',
    type: 'evidence',
    subtype: 'product-tracking',
    dataType: 'traceability',
    date: '2025-07-01',
    title: 'Uganda Input Distribution Tracking — Rhizolizer® Duo',
    summary: 'Tracking of Rhizolizer® Duo distribution to pilot farmers across 3 NARO sites. Records product batch, quantity per farmer, application timing, and dosage compliance.',
    project: 'uganda-pilot',
    location: 'Uganda - Kawanda, Tororo, Bulindi',
    period: {
      start: '2025-06-01',
      end: '2025-07-01',
    },
    methodology: 'Distribution log maintained by NARO field coordinators. Batch tracking from import through to farmer application.',
    metrics: [
      { label: 'Distribution Status', value: 'Complete' },
      { label: 'Sites Supplied', value: 3, unit: 'NARO sites' },
      { label: 'Tracking', value: 'Batch-to-farmer', change: 'Full chain recorded' },
    ],
    tags: ['Uganda', 'Traceability', 'Distribution', 'Rhizolizer', 'Supply Chain'],
    verified: false,
    createdAt: '2026-02-14',
    updatedAt: '2026-02-14',
  },

  // ===========================================
  // UGANDA PILOT - DISCLOSURE
  // ===========================================

  {
    id: 'evidence-uganda-unbs-certification-2025',
    type: 'evidence',
    subtype: 'certification',
    dataType: 'disclosure',
    date: '2025-10-01',
    title: 'UNBS Product Standards Submission — Rhizolizer® Duo',
    summary: 'Submission to Uganda National Bureau of Standards (UNBS) for product certification of Rhizolizer® Duo bio-fertilizer. Includes product composition, safety data, and labelling compliance documentation.',
    project: 'uganda-pilot',
    location: 'Uganda - UNBS, Kampala',
    methodology: 'Regulatory submission following UNBS bio-fertilizer standards. Dossier prepared with Locus AG technical support.',
    metrics: [
      { label: 'Submission Status', value: 'Filed' },
      { label: 'Regulatory Body', value: 'UNBS' },
      { label: 'Document Type', value: 'Product certification dossier' },
    ],
    tags: ['Uganda', 'Regulatory', 'UNBS', 'Certification', 'Disclosure'],
    verified: false,
    createdAt: '2026-02-14',
    updatedAt: '2026-02-14',
  },

  {
    id: 'evidence-uganda-maaif-registration-2026',
    type: 'evidence',
    subtype: 'regulatory',
    dataType: 'disclosure',
    date: '2026-01-15',
    title: 'MAAIF Bio-Fertilizer Registration — Dossier Submission',
    summary: 'Formal dossier submission to Ministry of Agriculture, Animal Industry and Fisheries (MAAIF) for Rhizolizer® Duo registration and market authorisation. Includes NARO trial results, product specifications, and proposed labelling.',
    project: 'uganda-pilot',
    location: 'Uganda - MAAIF, Entebbe',
    methodology: 'Regulatory pathway per Uganda National Bio-Fertilizer Policy. Dossier compiled with NARO trial data and Locus AG product specifications.',
    metrics: [
      { label: 'Submission Status', value: 'Under review' },
      { label: 'Regulatory Body', value: 'MAAIF' },
      { label: 'Expected Timeline', value: 'Feb-Mar 2026', change: 'Approval notification pending' },
    ],
    tags: ['Uganda', 'Regulatory', 'MAAIF', 'Registration', 'Disclosure', 'Q1-2026'],
    verified: false,
    createdAt: '2026-02-14',
    updatedAt: '2026-02-14',
  },

  // ===========================================
  // RWANDA PILOT - EARLY STAGE
  // ===========================================

  {
    id: 'evidence-rwanda-feasibility-2026',
    type: 'evidence',
    subtype: 'trial-data',
    dataType: 'mrv',
    date: '2026-02-01',
    title: 'Rwanda Pilot — Site Feasibility Assessment',
    summary: 'Initial feasibility assessment for Rhizolizer® Duo deployment in Rwanda. Evaluating agro-ecological zones, crop suitability (coffee, tea, maize), and partnership pathways with Rwanda Agriculture Board (RAB).',
    project: 'rwanda-pilot',
    location: 'Rwanda — target zones TBC',
    methodology: 'Desk-based assessment combining Locus AG crop compatibility data with Rwanda agro-ecological zone mapping. Field validation pending.',
    metrics: [
      { label: 'Assessment Status', value: 'Planning' },
      { label: 'Target Crops', value: 'Coffee, Tea, Maize' },
      { label: 'Priority Zones', value: 'TBC', change: 'Pending RAB engagement' },
    ],
    tags: ['Rwanda', 'Feasibility', 'Planning', 'Coffee', 'Tea'],
    verified: false,
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13',
  },

  {
    id: 'evidence-rwanda-regulatory-landscape-2026',
    type: 'evidence',
    subtype: 'regulatory',
    dataType: 'disclosure',
    date: '2026-02-01',
    title: 'Rwanda Regulatory Landscape — Initial Scoping',
    summary: 'Preliminary mapping of Rwanda regulatory requirements for bio-fertilizer import and registration. Key bodies: REMA (environment), RSB (standards), RAB (agriculture). Process expected to differ from Uganda UNBS/MAAIF pathway.',
    project: 'rwanda-pilot',
    location: 'Rwanda',
    methodology: 'Desk research and cross-referencing with Uganda regulatory experience.',
    metrics: [
      { label: 'Regulatory Bodies', value: '3', unit: '(REMA, RSB, RAB)' },
      { label: 'Scoping Status', value: 'Initial' },
      { label: 'Uganda Learnings', value: 'Applicable', change: 'Process differences expected' },
    ],
    tags: ['Rwanda', 'Regulatory', 'REMA', 'RSB', 'RAB', 'Scoping'],
    verified: false,
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13',
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

// Helper: Get evidence for Rwanda pilot
export function getRwandaPilotEvidence(): EvidenceEntry[] {
  return evidence.filter(entry => entry.project === 'rwanda-pilot');
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
