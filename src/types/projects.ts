// Types for Grant Project tracking (Phases 07-11)
// See PRD: /hisagen/PRD-GRANT-LIFECYCLE-RECORDS.md

import { Document, Note } from "./opportunities";

// Project-specific types
export type ProjectStatus = "setup" | "planning" | "active" | "reporting" | "closing" | "closed";
export type HealthIndicator = "green" | "amber" | "red";
export type MilestoneStatus = "not_started" | "in_progress" | "completed" | "delayed" | "at_risk";
export type ReportStatus = "not_started" | "drafting" | "review" | "submitted" | "accepted" | "revision_required";
export type IssueStatus = "open" | "in_progress" | "resolved" | "escalated";
export type IssuePriority = "low" | "medium" | "high" | "critical";
export type RiskProbability = "low" | "medium" | "high";
export type RiskImpact = "low" | "medium" | "high";
export type RiskStatus = "identified" | "mitigating" | "resolved" | "occurred";

export interface ReportingEvent {
  id: string;
  type: "narrative" | "financial" | "combined" | "audit" | "other";
  title: string;
  period: string; // e.g., "Q1 2026", "Year 1"
  dueDate: string;
  status: ReportStatus;
  submittedDate?: string;
  acceptedDate?: string;
  documentUrl?: string;
  funderFeedback?: string;
  notes: string;
}

export interface BudgetLine {
  id: string;
  category: string;
  description: string;
  budgeted: number;
  spent: number;
  committed: number;
  remaining: number;
  notes?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  organization: string;
  allocation: string; // e.g., "50%", "10 hours/month"
  responsibilities: string[];
  contact: string;
}

export interface Milestone {
  id: string;
  phase: 7 | 8 | 9 | 10 | 11;
  title: string;
  description: string;
  deliverables: string[];
  dueDate: string;
  completedDate?: string;
  status: MilestoneStatus;
  dependencies?: string[];
  notes: string;
}

export interface Risk {
  id: string;
  title: string;
  description: string;
  probability: RiskProbability;
  impact: RiskImpact;
  mitigation: string;
  owner: string;
  status: RiskStatus;
  notes: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  priority: IssuePriority;
  status: IssueStatus;
  raisedDate: string;
  raisedBy: string;
  assignedTo: string;
  resolution?: string;
  resolvedDate?: string;
}

export interface ChangeRequest {
  id: string;
  title: string;
  type: "scope" | "budget" | "timeline" | "other";
  description: string;
  justification: string;
  impact: string;
  requestedDate: string;
  requestedBy: string;
  status: "pending" | "approved" | "rejected" | "implemented";
  approvedBy?: string;
  approvedDate?: string;
  funderApprovalRequired: boolean;
  funderApprovalStatus?: string;
}

export interface GrantProject {
  // Identity
  id: string;
  slug: string;
  title: string;
  opportunityId: string; // Link to source opportunity

  // Funder Details
  funderName: string;
  grantAmount: number;
  currency: string;

  // Timeline
  awardDate: string;
  startDate: string;
  endDate: string;
  duration: string; // e.g., "24 months"

  // Current State
  status: ProjectStatus;
  currentPhase: 7 | 8 | 9 | 10 | 11;
  healthIndicator: HealthIndicator;
  healthNotes?: string;
  nextAction: string;
  nextActionDue?: string;
  owner: string;

  // Phase 07: Setup
  reportingCalendar: ReportingEvent[];
  budgetAllocation: BudgetLine[];
  teamAssignments: TeamMember[];
  setupComplete: boolean;
  setupCompletedDate?: string;
  setupNotes: string;

  // Phase 08: Planning
  milestones: Milestone[];
  riskRegister: Risk[];
  workplanUrl?: string;
  planningComplete: boolean;
  planningCompletedDate?: string;
  planningNotes: string;

  // Phase 09: Delivery
  progressPercentage: number;
  issues: Issue[];
  changeRequests: ChangeRequest[];
  deliveryNotes: string;

  // Phase 10: Reporting
  reports: ReportingEvent[];
  reportingNotes: string;

  // Phase 11: Closeout
  closeoutStatus: "not_started" | "in_progress" | "completed";
  finalReportStatus?: ReportStatus;
  lessonsLearned: string[];
  renewalStrategy?: string;
  closeoutNotes: string;

  // Budget Summary
  totalBudget: number;
  totalSpent: number;
  totalCommitted: number;
  burnRate?: number; // Percentage

  // Documents
  documents: Document[];

  // Notes
  notes: Note[];

  // Metadata
  createdDate: string;
  updatedDate: string;
  createdBy: string;
}

// Helper to get phase label
export const getProjectPhaseLabel = (phase: number): string => {
  switch (phase) {
    case 7: return "Setup";
    case 8: return "Planning";
    case 9: return "Delivery";
    case 10: return "Reporting";
    case 11: return "Closeout";
    default: return `Phase ${phase}`;
  }
};

// Helper to get status colors
export const getProjectStatusConfig = (status: ProjectStatus) => {
  switch (status) {
    case "setup":
      return { label: "Setup", bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-300" };
    case "planning":
      return { label: "Planning", bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" };
    case "active":
      return { label: "Active", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" };
    case "reporting":
      return { label: "Reporting", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" };
    case "closing":
      return { label: "Closing", bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300" };
    case "closed":
      return { label: "Closed", bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-300" };
  }
};

// Helper to get health indicator colors
export const getHealthConfig = (health: HealthIndicator) => {
  switch (health) {
    case "green":
      return { label: "On Track", icon: "🟢", bg: "bg-emerald-100", text: "text-emerald-700" };
    case "amber":
      return { label: "At Risk", icon: "🟡", bg: "bg-amber-100", text: "text-amber-700" };
    case "red":
      return { label: "Critical", icon: "🔴", bg: "bg-red-100", text: "text-red-700" };
  }
};

// Helper to get milestone status config
export const getMilestoneStatusConfig = (status: MilestoneStatus) => {
  switch (status) {
    case "not_started":
      return { label: "Not Started", bg: "bg-slate-100", text: "text-slate-700" };
    case "in_progress":
      return { label: "In Progress", bg: "bg-sky-100", text: "text-sky-700" };
    case "completed":
      return { label: "Completed", bg: "bg-emerald-100", text: "text-emerald-700" };
    case "delayed":
      return { label: "Delayed", bg: "bg-amber-100", text: "text-amber-700" };
    case "at_risk":
      return { label: "At Risk", bg: "bg-red-100", text: "text-red-700" };
  }
};

// Helper to get report status config
export const getReportStatusConfig = (status: ReportStatus) => {
  switch (status) {
    case "not_started":
      return { label: "Not Started", bg: "bg-slate-100", text: "text-slate-700" };
    case "drafting":
      return { label: "Drafting", bg: "bg-sky-100", text: "text-sky-700" };
    case "review":
      return { label: "Internal Review", bg: "bg-purple-100", text: "text-purple-700" };
    case "submitted":
      return { label: "Submitted", bg: "bg-amber-100", text: "text-amber-700" };
    case "accepted":
      return { label: "Accepted", bg: "bg-emerald-100", text: "text-emerald-700" };
    case "revision_required":
      return { label: "Revision Required", bg: "bg-red-100", text: "text-red-700" };
  }
};

// Helper to get issue priority config
export const getIssuePriorityConfig = (priority: IssuePriority) => {
  switch (priority) {
    case "low":
      return { label: "Low", bg: "bg-slate-100", text: "text-slate-700" };
    case "medium":
      return { label: "Medium", bg: "bg-amber-100", text: "text-amber-700" };
    case "high":
      return { label: "High", bg: "bg-orange-100", text: "text-orange-700" };
    case "critical":
      return { label: "Critical", bg: "bg-red-100", text: "text-red-700" };
  }
};

// Helper to generate URL-safe slug
export const generateProjectSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Calculate budget utilization percentage
export const calculateBudgetUtilization = (project: GrantProject): number => {
  if (project.totalBudget === 0) return 0;
  return Math.round(((project.totalSpent + project.totalCommitted) / project.totalBudget) * 100);
};

// Calculate days until next deadline
export const getDaysUntilDeadline = (dueDate: string): number => {
  const due = new Date(dueDate);
  const today = new Date();
  return Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

// Get upcoming reports (next 90 days)
export const getUpcomingReports = (project: GrantProject, days: number = 90): ReportingEvent[] => {
  const today = new Date();
  const cutoff = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);

  return [...project.reportingCalendar, ...project.reports]
    .filter((r) => {
      const dueDate = new Date(r.dueDate);
      return dueDate >= today && dueDate <= cutoff && r.status !== "accepted";
    })
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
};
