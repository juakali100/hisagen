// HISAGEN Knowledge Base - Ecosystem Data
// Migrated from intelligenceLedger (2026-01-17)

import { EcosystemEntry } from '../types/knowledge-base';

export const ecosystem: EcosystemEntry[] = [
  {
    id: 'eco-deep-six',
    type: 'ecosystem',
    subtype: 'partner',
    date: '2025-11-30',
    title: 'Partner Dossier: Deep Six Consulting',
    summary: 'Core venture building partner and strategic lead. Dossier on digital transformation expertise and HISAGEN origin.',
    organization: 'Deep Six Consulting',
    relationship: 'Founding partner - venture originator and strategic direction. Keir Garrett leads HISAGEN as co-founder.',
    tags: ['Strategy', 'Venture Builder'],
    engagement: 'active',
    portalPage: '/ecosystem/deep-six',
    contacts: [
      { name: 'Keir Garrett', role: 'Founder / HISAGEN Co-founder' },
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'eco-locus-ag',
    type: 'ecosystem',
    subtype: 'partner',
    date: '2025-11-30',
    title: 'Partner Dossier: Locus AG',
    summary: "Microbial technology partner. Detailed profile on Rhizolizer tech and 'CarbonNOW' methodology.",
    organization: 'Locus AG',
    relationship: "Technology partner providing Rhizolizer® Duo microbial solutions. Licensed for Africa distribution through HISAGEN. Access to 'CarbonNOW' carbon credit methodology.",
    tags: ['Partner', 'Microbial', 'Agri-Carbon'],
    engagement: 'active',
    portalPage: '/ecosystem/locus-ag',
    contacts: [
      { name: 'John Uhran', role: 'CEO' },
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'eco-3degrees',
    type: 'ecosystem',
    subtype: 'partner',
    date: '2025-11-30',
    title: 'Partner Dossier: 3Degrees',
    summary: 'Technical auditor and program designer for Verra/Gold Standard accreditation.',
    organization: '3Degrees',
    relationship: 'MRV methodology partner. Provides pathway to Verra/Gold Standard certification for carbon credits generated through HISAGEN programs.',
    tags: ['Accreditation', 'Standards', 'Validator'],
    engagement: 'active',
    portalPage: '/ecosystem/3-degrees',
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'eco-czmp',
    type: 'ecosystem',
    subtype: 'partner',
    date: '2025-11-30',
    title: 'Partner Dossier: Carbon Neutral Marketplace',
    summary: "Keir's platform for credit exchange. Analysis includes a potential pivot from general NBS exchange to dedicated 'Hisagen Storefront'.",
    organization: 'Carbon Zero Marketplace',
    relationship: 'Downstream marketplace for HISAGEN carbon credits. Owned by Keir, provides B2C channel for verified credits.',
    tags: ['Marketplace', 'Tech Upgrade'],
    engagement: 'active',
    portalPage: '/ecosystem/czmp',
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'eco-pandion',
    type: 'ecosystem',
    subtype: 'partner',
    date: '2025-11-30',
    title: 'Partner Dossier: Pandion Studio',
    summary: 'Strategic venture architecture firm. Responsible for operational scaffolding, funding blueprints, and field intelligence synthesis.',
    organization: 'Pandion Studio',
    relationship: 'Systems architect and operational support. Performance-based partnership model with success fees. Provides strategy, grants research, and operational tooling.',
    tags: ['Scaffolding', 'Strategy', 'Systems Architect'],
    engagement: 'active',
    portalPage: '/ecosystem/pandion',
    contacts: [
      { name: 'Nick', role: 'Principal' },
    ],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
];

// Helper: Get ecosystem by engagement level
export function getEcosystemByEngagement(): Record<string, EcosystemEntry[]> {
  return ecosystem.reduce((acc, entry) => {
    if (!acc[entry.engagement]) acc[entry.engagement] = [];
    acc[entry.engagement].push(entry);
    return acc;
  }, {} as Record<string, EcosystemEntry[]>);
}

// Helper: Get all unique tags from ecosystem
export function getEcosystemTags(): string[] {
  const tagSet = new Set<string>();
  ecosystem.forEach(entry => entry.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Helper: Get ecosystem by subtype
export function getEcosystemBySubtype(): Record<string, EcosystemEntry[]> {
  return ecosystem.reduce((acc, entry) => {
    if (!acc[entry.subtype]) acc[entry.subtype] = [];
    acc[entry.subtype].push(entry);
    return acc;
  }, {} as Record<string, EcosystemEntry[]>);
}
