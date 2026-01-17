// HISAGEN Knowledge Base - Evidence Data
// Future data structure for trial data, MRV, certifications
// Created: 2026-01-17

import { EvidenceEntry } from '../types/knowledge-base';

export const evidence: EvidenceEntry[] = [
  // Uganda Pilot - Maize Trials (placeholder based on existing research entries)
  // When trial data is structured, add entries here
  // {
  //   id: 'evidence-uganda-maize-2025-phase2',
  //   type: 'evidence',
  //   subtype: 'yield-data',
  //   date: '2025-05-01',
  //   title: 'Uganda Maize Trials - Phase 2 Results',
  //   summary: 'Yield comparison between Rhizolizer-treated and control plots in Uganda.',
  //   project: 'uganda-pilot',
  //   location: 'Uganda - Multiple NARO zones',
  //   tags: ['Yield', 'Maize', 'Uganda'],
  //   metrics: [
  //     { label: 'Yield improvement', value: 'TBD', unit: '%' },
  //   ],
  //   createdAt: '2026-01-17',
  //   updatedAt: '2026-01-17',
  // },
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
