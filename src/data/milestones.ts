// HISAGEN Knowledge Base - Milestones Data
// Key regulatory, commercial, and operational milestones
// Created: 2026-01-17

import { MilestoneEntry } from '../types/knowledge-base';

export const milestones: MilestoneEntry[] = [
  {
    id: 'milestone-2026-q1-maaif-approval',
    type: 'milestone',
    subtype: 'regulatory',
    date: '2026-01-01',
    title: 'MAAIF Product Approval (Uganda)',
    summary: 'Formal approval from the Ministry of Agriculture, Animal Industry and Fisheries for Rhizolizer® Duo registration and commercial sale in Uganda.',
    tags: ['Regulatory', 'Uganda', 'MAAIF', 'Critical Path'],
    status: 'in-progress',
    targetDate: '2026-03-31',
    project: 'uganda-pilot',
    file: 'milestones/2026-q1-maaif-approval.md',
    dependencies: ['milestone-2026-q1-unbs-registration'],
    outcome: undefined,
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'milestone-2026-q1-unbs-registration',
    type: 'milestone',
    subtype: 'regulatory',
    date: '2026-01-01',
    title: 'UNBS Product Registration',
    summary: 'Uganda National Bureau of Standards registration for product quality and safety compliance.',
    tags: ['Regulatory', 'Uganda', 'UNBS', 'Critical Path'],
    status: 'in-progress',
    targetDate: '2026-02-28',
    project: 'uganda-pilot',
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'milestone-2026-q2-commercial-launch',
    type: 'milestone',
    subtype: 'commercial',
    date: '2026-04-01',
    title: 'Uganda Commercial Launch',
    summary: 'First commercial sales of Rhizolizer® Duo to Uganda farmers and cooperatives.',
    tags: ['Commercial', 'Uganda', 'Launch', 'Revenue'],
    status: 'planned',
    targetDate: '2026-06-30',
    project: 'uganda-pilot',
    dependencies: ['milestone-2026-q1-maaif-approval'],
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
  {
    id: 'milestone-2025-naro-trials',
    type: 'milestone',
    subtype: 'operational',
    date: '2025-01-01',
    title: 'NARO Field Trials - Phase 2',
    summary: 'Multi-zone field trials with National Agricultural Research Organisation across 5 zones for maize, potatoes, and peanuts.',
    tags: ['Trials', 'Uganda', 'NARO', 'Data'],
    status: 'complete',
    completedDate: '2025-11-10',
    project: 'uganda-pilot',
    outcome: 'Positive yield results across multiple crops. Data supports regulatory submission.',
    createdAt: '2026-01-17',
    updatedAt: '2026-01-17',
  },
];

// Helper: Get milestones by status
export function getMilestonesByStatus(): Record<string, MilestoneEntry[]> {
  return milestones.reduce((acc, entry) => {
    if (!acc[entry.status]) acc[entry.status] = [];
    acc[entry.status].push(entry);
    return acc;
  }, {} as Record<string, MilestoneEntry[]>);
}

// Helper: Get milestones by subtype
export function getMilestonesBySubtype(): Record<string, MilestoneEntry[]> {
  return milestones.reduce((acc, entry) => {
    if (!acc[entry.subtype]) acc[entry.subtype] = [];
    acc[entry.subtype].push(entry);
    return acc;
  }, {} as Record<string, MilestoneEntry[]>);
}

// Helper: Get all unique tags from milestones
export function getMilestoneTags(): string[] {
  const tagSet = new Set<string>();
  milestones.forEach(entry => entry.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Helper: Get critical path milestones (those blocking others)
export function getCriticalPathMilestones(): MilestoneEntry[] {
  const blockingIds = new Set<string>();
  milestones.forEach(m => {
    m.dependencies?.forEach(dep => blockingIds.add(dep));
  });
  return milestones.filter(m => blockingIds.has(m.id));
}

// Helper: Get milestones by project
export function getMilestonesByProject(): Record<string, MilestoneEntry[]> {
  return milestones.reduce((acc, entry) => {
    const project = entry.project || 'general';
    if (!acc[project]) acc[project] = [];
    acc[project].push(entry);
    return acc;
  }, {} as Record<string, MilestoneEntry[]>);
}
