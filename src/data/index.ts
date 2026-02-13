// HISAGEN Knowledge Base - Data Index
// Central export for all knowledge base data
// Created: 2026-01-17

// Type exports
export * from '../types/knowledge-base';

// Data exports
export { communications, getCommunicationsByYear, getCommunicationTags } from './communications';
export { research, getResearchByYear, getResearchTags, getResearchBySubtype } from './research';
export { ecosystem, getEcosystemByEngagement, getEcosystemTags, getEcosystemBySubtype } from './ecosystem';
export { evidence, getEvidenceByProject, getEvidenceBySubtype, getEvidenceTags, getVerifiedEvidence, getUgandaPilotEvidence, getEvidenceByDataType } from './evidence';
export { milestones, getMilestonesByStatus, getMilestonesBySubtype, getMilestoneTags, getCriticalPathMilestones, getMilestonesByProject } from './milestones';

// Import for combined operations
import { communications } from './communications';
import { research } from './research';
import { ecosystem } from './ecosystem';
import { evidence } from './evidence';
import { milestones } from './milestones';
import type { KnowledgeEntry } from '../types/knowledge-base';

// Combined data access
export function getAllEntries(): KnowledgeEntry[] {
  return [
    ...communications,
    ...research,
    ...ecosystem,
    ...evidence,
    ...milestones,
  ];
}

// Global tag collection
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getAllEntries().forEach(entry => entry.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Search across all entries
export function searchEntries(query: string): KnowledgeEntry[] {
  const lowerQuery = query.toLowerCase();
  return getAllEntries().filter(entry =>
    entry.title.toLowerCase().includes(lowerQuery) ||
    entry.summary.toLowerCase().includes(lowerQuery) ||
    entry.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Filter by tags
export function filterByTags(tags: string[]): KnowledgeEntry[] {
  if (tags.length === 0) return getAllEntries();
  return getAllEntries().filter(entry =>
    tags.some(tag => entry.tags.includes(tag))
  );
}

// Get entries by date range
export function getEntriesByDateRange(start: string, end: string): KnowledgeEntry[] {
  return getAllEntries().filter(entry => {
    const date = entry.date;
    return date >= start && date <= end;
  });
}

// Get recent entries (sorted by date, descending)
export function getRecentEntries(limit: number = 10): KnowledgeEntry[] {
  return getAllEntries()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

// Stats for dashboard
export function getKnowledgeBaseStats() {
  return {
    total: getAllEntries().length,
    communications: communications.length,
    research: research.length,
    ecosystem: ecosystem.length,
    evidence: evidence.length,
    milestones: milestones.length,
    uniqueTags: getAllTags().length,
  };
}
