/**
 * HISAGEN Relationship Graph Data
 * Phase 4, Task 13 - Knowledge Base
 *
 * Initial dataset: ~15 nodes, ~12 edges
 * Based on current KB content
 */

import { GraphNode, GraphEdge, GraphData } from '@/types/graph';

export const nodes: GraphNode[] = [
  // Organizations
  {
    id: 'hisagen',
    type: 'organization',
    label: 'HISAGEN',
    description: 'High-Value Soil Amendments from Agricultural Waste for Regenerative Agriculture',
    metadata: { role: 'Central Entity' },
  },
  {
    id: 'locus-ag',
    type: 'organization',
    label: 'Locus AG',
    description: 'US-based agricultural biologics company, CarbonNOW partner',
    kbEntryIds: ['eco-locus-ag'],
    metadata: { portalPage: '/ecosystem/locus-ag' },
  },
  {
    id: '3degrees',
    type: 'organization',
    label: '3Degrees',
    description: 'Carbon credit market partner',
    kbEntryIds: ['eco-3degrees'],
    metadata: { portalPage: '/ecosystem/3degrees' },
  },
  {
    id: 'deep-six',
    type: 'organization',
    label: 'Deep Six',
    description: 'Technology and data partner',
    kbEntryIds: ['eco-deep-six'],
    metadata: { portalPage: '/ecosystem/deep-six' },
  },
  {
    id: 'maaif',
    type: 'organization',
    label: 'MAAIF',
    description: 'Ministry of Agriculture, Animal Industry and Fisheries (Uganda)',
    metadata: { role: 'Regulatory Authority' },
  },
  {
    id: 'naro',
    type: 'organization',
    label: 'NARO',
    description: 'National Agricultural Research Organisation (Uganda)',
    metadata: { role: 'Research Partner' },
  },
  {
    id: 'unbs',
    type: 'organization',
    label: 'UNBS',
    description: 'Uganda National Bureau of Standards',
    metadata: { role: 'Standards Authority' },
  },

  // People
  {
    id: 'keir',
    type: 'person',
    label: 'Keir',
    description: 'HISAGEN Founder',
  },
  {
    id: 'locus-ceo',
    type: 'person',
    label: 'Locus CEO',
    description: 'CEO of Locus AG',
  },
  {
    id: 'nick',
    type: 'person',
    label: 'Nick',
    description: 'Pandion Advisor',
  },

  // Projects
  {
    id: 'uganda-pilot',
    type: 'project',
    label: 'Uganda Pilot',
    description: 'Initial pilot project in Uganda with 30 farmers',
    kbEntryIds: ['project-uganda'],
    metadata: { portalPage: '/project/hisagen-uganda' },
  },

  // Programs
  {
    id: 'carbonnow',
    type: 'program',
    label: 'CarbonNOW',
    description: 'Locus AG carbon credit program',
  },

  // Milestones
  {
    id: 'maaif-approval',
    type: 'milestone',
    label: 'MAAIF Approval',
    description: 'Regulatory approval from Ministry of Agriculture',
  },
  {
    id: 'market-launch',
    type: 'milestone',
    label: 'Market Launch',
    description: 'Commercial launch target',
  },

  // Evidence
  {
    id: 'trial-data',
    type: 'evidence',
    label: 'Trial Data',
    description: 'Field trial results from Uganda pilot',
    kbEntryIds: ['evidence-uganda'],
    metadata: { portalPage: '/knowledge-base/evidence/uganda-pilot' },
  },
];

export const edges: GraphEdge[] = [
  // Founder relationship
  {
    id: 'keir-hisagen',
    source: 'keir',
    target: 'hisagen',
    type: 'founder_of',
    label: 'Founded',
  },

  // Partner relationships
  {
    id: 'hisagen-locus',
    source: 'hisagen',
    target: 'locus-ag',
    type: 'partner_of',
    label: 'Partner',
  },
  {
    id: 'hisagen-3degrees',
    source: 'hisagen',
    target: '3degrees',
    type: 'partner_of',
    label: 'Partner',
  },
  {
    id: 'hisagen-deepsix',
    source: 'hisagen',
    target: 'deep-six',
    type: 'partner_of',
    label: 'Partner',
  },

  // Program operation
  {
    id: 'locus-carbonnow',
    source: 'locus-ag',
    target: 'carbonnow',
    type: 'operates',
    label: 'Operates',
  },

  // Project relationships
  {
    id: 'pilot-hisagen',
    source: 'uganda-pilot',
    target: 'hisagen',
    type: 'part_of',
    label: 'Part of',
  },
  {
    id: 'pilot-naro',
    source: 'uganda-pilot',
    target: 'naro',
    type: 'involves',
    label: 'Involves',
  },
  {
    id: 'pilot-locus',
    source: 'uganda-pilot',
    target: 'locus-ag',
    type: 'involves',
    label: 'Involves',
  },

  // Evidence supports milestone
  {
    id: 'trial-maaif',
    source: 'trial-data',
    target: 'maaif-approval',
    type: 'supports',
    label: 'Supports',
  },

  // Regulatory relationship
  {
    id: 'maaif-hisagen',
    source: 'maaif',
    target: 'hisagen',
    type: 'regulatory_for',
    label: 'Regulates',
  },

  // Communication
  {
    id: 'keir-locus-ceo',
    source: 'keir',
    target: 'locus-ceo',
    type: 'communicated_with',
    label: 'In contact',
  },
];

export const graphData: GraphData = {
  nodes,
  edges,
};

export default graphData;
