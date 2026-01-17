// HISAGEN Knowledge Base - Type Definitions
// Based on PRD v1.2 (2026-01-17)

// ============================================
// Base Types
// ============================================

export type EntryType = 'communication' | 'research' | 'evidence' | 'milestone' | 'ecosystem';

export type BaseEntry = {
  id: string;                           // Unique identifier (slug)
  type: EntryType;                      // Entry type
  date: string;                         // ISO date (YYYY-MM-DD)
  title: string;                        // Display title
  summary: string;                      // 1-2 sentence summary
  tags: string[];                       // Cross-cutting themes
  project?: string;                     // Project association (e.g., "uganda-pilot")
  file?: string;                        // Reference to source file in folder
  relatedIds?: string[];                // Links to related entries
  createdAt: string;                    // When entry was added
  updatedAt: string;                    // Last modification
};

// ============================================
// Communication Entry
// ============================================

export type CommunicationSubtype = 'email' | 'call' | 'meeting' | 'whatsapp' | 'document';

export type Attachment = {
  title: string;
  file: string;
  format: 'PDF' | 'Excel' | 'Doc' | 'Link';
};

export type CommunicationEntry = BaseEntry & {
  type: 'communication';
  subtype: CommunicationSubtype;
  from: string;                         // Sender/initiator
  to: string | string[];                // Recipient(s)
  participants?: string[];              // For meetings
  synthesis: string[];                  // Key points extracted
  attachments?: Attachment[];
};

// ============================================
// Research Entry
// ============================================

export type ResearchSubtype = 'deck' | 'report' | 'analysis' | 'market-data' | 'literature';

export type DataPoint = {
  label: string;
  value: string;
  source?: string;
};

export type ResearchEntry = BaseEntry & {
  type: 'research';
  subtype: ResearchSubtype;
  source?: string;                      // Where it came from
  pages?: number;                       // For documents
  synthesis: string[];                  // Key findings
  dataPoints?: DataPoint[];
};

// ============================================
// Evidence Entry
// ============================================

export type EvidenceSubtype = 'trial-data' | 'mrv' | 'certification' | 'yield-data' | 'soil-data' | 'validation';

export type Metric = {
  label: string;
  value: number | string;
  unit?: string;
  baseline?: number | string;
  change?: string;                      // e.g., "+15%"
};

export type EvidenceEntry = BaseEntry & {
  type: 'evidence';
  subtype: EvidenceSubtype;
  project: string;                      // Required for evidence
  location?: string;                    // Geographic context
  period?: {                            // Time period covered
    start: string;
    end: string;
  };
  methodology?: string;                 // How data was collected
  metrics: Metric[];
  verified?: boolean;                   // Third-party verification
  verifiedBy?: string;
};

// ============================================
// Milestone Entry
// ============================================

export type MilestoneSubtype = 'regulatory' | 'commercial' | 'operational' | 'funding' | 'partnership';
export type MilestoneStatus = 'planned' | 'in-progress' | 'complete' | 'blocked';

export type MilestoneEntry = BaseEntry & {
  type: 'milestone';
  subtype: MilestoneSubtype;
  status: MilestoneStatus;
  targetDate?: string;
  completedDate?: string;
  dependencies?: string[];              // Related milestone IDs
  blockers?: string[];                  // What's preventing progress
  outcome?: string;                     // Result if complete
};

// ============================================
// Ecosystem Entry
// ============================================

export type EcosystemSubtype = 'partner' | 'regulator' | 'funder' | 'buyer' | 'advisor';
export type EngagementLevel = 'active' | 'potential' | 'historical';

export type Contact = {
  name: string;
  role: string;
  email?: string;
};

export type EcosystemEntry = BaseEntry & {
  type: 'ecosystem';
  subtype: EcosystemSubtype;
  organization: string;
  relationship: string;                 // Description of relationship
  contacts?: Contact[];
  engagement: EngagementLevel;
  portalPage?: string;                  // Link to /ecosystem/[id] page
};

// ============================================
// Union Type
// ============================================

export type KnowledgeEntry =
  | CommunicationEntry
  | ResearchEntry
  | EvidenceEntry
  | MilestoneEntry
  | EcosystemEntry;

// ============================================
// Helper Types for UI
// ============================================

export type FilterState = {
  search: string;
  types: EntryType[];
  tags: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  project?: string;
};

export type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

// ============================================
// Type Guards
// ============================================

export function isCommunicationEntry(entry: KnowledgeEntry): entry is CommunicationEntry {
  return entry.type === 'communication';
}

export function isResearchEntry(entry: KnowledgeEntry): entry is ResearchEntry {
  return entry.type === 'research';
}

export function isEvidenceEntry(entry: KnowledgeEntry): entry is EvidenceEntry {
  return entry.type === 'evidence';
}

export function isMilestoneEntry(entry: KnowledgeEntry): entry is MilestoneEntry {
  return entry.type === 'milestone';
}

export function isEcosystemEntry(entry: KnowledgeEntry): entry is EcosystemEntry {
  return entry.type === 'ecosystem';
}

// ============================================
// Display Helpers
// ============================================

export const entryTypeLabels: Record<EntryType, string> = {
  communication: 'Communications',
  research: 'Research',
  evidence: 'Evidence',
  milestone: 'Milestones',
  ecosystem: 'Ecosystem',
};

export const entryTypeColors: Record<EntryType, { bg: string; text: string }> = {
  communication: { bg: 'bg-blue-100', text: 'text-blue-700' },
  research: { bg: 'bg-purple-100', text: 'text-purple-700' },
  evidence: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  milestone: { bg: 'bg-amber-100', text: 'text-amber-700' },
  ecosystem: { bg: 'bg-slate-100', text: 'text-slate-700' },
};

export const communicationSubtypeLabels: Record<CommunicationSubtype, string> = {
  email: 'Email',
  call: 'Call',
  meeting: 'Meeting',
  whatsapp: 'WhatsApp',
  document: 'Document',
};

export const milestoneStatusColors: Record<MilestoneStatus, { bg: string; text: string }> = {
  planned: { bg: 'bg-slate-100', text: 'text-slate-600' },
  'in-progress': { bg: 'bg-blue-100', text: 'text-blue-700' },
  complete: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  blocked: { bg: 'bg-red-100', text: 'text-red-700' },
};
