/**
 * Relationship Graph Types
 * Phase 4, Task 13 - HISAGEN Knowledge Base
 */

export type NodeType = 'organization' | 'person' | 'project' | 'evidence' | 'milestone' | 'program';

export type EdgeType =
  | 'founder_of'           // Person → Organization
  | 'partner_of'           // Organization → Organization
  | 'communicated_with'    // Person → Person
  | 'part_of'              // Project → Organization
  | 'supports'             // Evidence → Milestone
  | 'involves'             // Project → Person/Organization
  | 'operates'             // Organization → Program
  | 'regulatory_for';      // Organization → Organization

export interface GraphNode {
  id: string;
  type: NodeType;
  label: string;
  description?: string;
  kbEntryIds?: string[];      // Links to KB entries
  metadata?: Record<string, string>;
}

export interface GraphEdge {
  id: string;
  source: string;          // Node ID
  target: string;          // Node ID
  type: EdgeType;
  label?: string;          // Display label
  weight?: number;         // For communication frequency
  kbEntryIds?: string[];   // Related KB entries
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Visual encoding configuration
export const NODE_COLORS: Record<NodeType, string> = {
  organization: '#3B82F6',  // Blue
  person: '#22C55E',        // Green
  project: '#A855F7',       // Purple
  evidence: '#F97316',      // Orange
  milestone: '#EAB308',     // Gold
  program: '#14B8A6',       // Teal
};

export const NODE_TYPE_LABELS: Record<NodeType, string> = {
  organization: 'Organization',
  person: 'Person',
  project: 'Project',
  evidence: 'Evidence',
  milestone: 'Milestone',
  program: 'Program',
};

export const EDGE_TYPE_LABELS: Record<EdgeType, string> = {
  founder_of: 'Founder of',
  partner_of: 'Partner of',
  communicated_with: 'Communicated with',
  part_of: 'Part of',
  supports: 'Supports',
  involves: 'Involves',
  operates: 'Operates',
  regulatory_for: 'Regulatory for',
};
