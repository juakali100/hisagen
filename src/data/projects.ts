// Grant Project Records Data
// See PRD: /hisagen/PRD-GRANT-LIFECYCLE-RECORDS.md

import { GrantProject } from "../types/projects";

export const projects: GrantProject[] = [
  // Sample Project: Created from won opportunity "Sample Climate Foundation (Demo)"
  {
    // Identity
    id: "proj-sample-001",
    slug: "sample-climate-foundation-grant",
    title: "HISAGEN Climate-Smart Agriculture Platform - Phase 1",
    opportunityId: "opp-sample-won", // Links to Sample Climate Foundation won opportunity

    // Funder Details
    funderName: "Sample Climate Foundation (Demo)",
    grantAmount: 75000,
    currency: "USD",

    // Timeline
    awardDate: "2026-01-05",
    startDate: "2026-03-01",
    endDate: "2027-08-31",
    duration: "18 months",

    // Current State
    status: "setup",
    currentPhase: 7,
    healthIndicator: "green",
    healthNotes: "Project setup on track. All key milestones identified.",
    nextAction: "Complete team assignments and finalize reporting calendar",
    nextActionDue: "2026-02-15",
    owner: "Keir / HISAGEN",

    // Phase 07: Setup
    reportingCalendar: [
      {
        id: "report-q1-2026",
        type: "narrative",
        title: "Q1 2026 Narrative Report",
        period: "Q1 2026 (Mar)",
        dueDate: "2026-05-15",
        status: "not_started",
        notes: "First report - focus on setup activities and early engagement",
      },
      {
        id: "report-h1-fin",
        type: "financial",
        title: "H1 2026 Financial Report",
        period: "H1 2026 (Mar-Aug)",
        dueDate: "2026-09-30",
        status: "not_started",
        notes: "Semi-annual financial report with expenditure breakdown",
      },
      {
        id: "report-q3-2026",
        type: "narrative",
        title: "Q3 2026 Narrative Report",
        period: "Q3 2026 (Jul-Sep)",
        dueDate: "2026-11-15",
        status: "not_started",
        notes: "Mid-project progress report",
      },
      {
        id: "report-annual",
        type: "combined",
        title: "Year 1 Annual Report",
        period: "Year 1 (Mar 2026 - Feb 2027)",
        dueDate: "2027-03-31",
        status: "not_started",
        notes: "Comprehensive annual report - narrative + financial",
      },
      {
        id: "report-final",
        type: "combined",
        title: "Final Project Report",
        period: "Full Project (Mar 2026 - Aug 2027)",
        dueDate: "2027-10-31",
        status: "not_started",
        notes: "Final report due 60 days after project end",
      },
    ],
    budgetAllocation: [
      {
        id: "budget-personnel",
        category: "Personnel",
        description: "Project staff salaries and benefits",
        budgeted: 30000,
        spent: 0,
        committed: 0,
        remaining: 30000,
        notes: "Includes Project Manager (50%), Technical Lead (30%), Field Coordinator (100%)",
      },
      {
        id: "budget-equipment",
        category: "Equipment",
        description: "Technology and field equipment",
        budgeted: 15000,
        spent: 0,
        committed: 0,
        remaining: 15000,
        notes: "Tablets for farmers, weather stations, soil sensors",
      },
      {
        id: "budget-activities",
        category: "Program Activities",
        description: "Training, workshops, farmer engagement",
        budgeted: 18000,
        spent: 0,
        committed: 0,
        remaining: 18000,
        notes: "Farmer training sessions, demonstration plots, community meetings",
      },
      {
        id: "budget-travel",
        category: "Travel",
        description: "Field visits and stakeholder meetings",
        budgeted: 5000,
        spent: 0,
        committed: 0,
        remaining: 5000,
      },
      {
        id: "budget-admin",
        category: "Administrative",
        description: "Office costs, communications, indirect",
        budgeted: 7000,
        spent: 0,
        committed: 0,
        remaining: 7000,
        notes: "Includes 10% indirect cost rate",
      },
    ],
    teamAssignments: [
      {
        id: "team-keir",
        name: "Keir",
        role: "Project Director",
        organization: "HISAGEN USA",
        allocation: "20%",
        responsibilities: ["Strategic oversight", "Funder relations", "Board reporting"],
        contact: "keir@hisagen.org",
      },
      {
        id: "team-daniel",
        name: "Daniel",
        role: "Project Manager",
        organization: "HISAGEN Uganda",
        allocation: "50%",
        responsibilities: ["Day-to-day management", "Team coordination", "Progress tracking"],
        contact: "daniel@hisagen.org",
      },
      {
        id: "team-tbd-tech",
        name: "TBD",
        role: "Technical Lead",
        organization: "HISAGEN",
        allocation: "30%",
        responsibilities: ["Platform development", "Data management", "Technical training"],
        contact: "",
      },
      {
        id: "team-tbd-field",
        name: "TBD",
        role: "Field Coordinator",
        organization: "HISAGEN Uganda",
        allocation: "100%",
        responsibilities: ["Farmer engagement", "Training delivery", "Data collection"],
        contact: "",
      },
    ],
    setupComplete: false,
    setupCompletedDate: undefined,
    setupNotes: "Setup phase initiated. Key priorities: (1) Finalize team hiring, (2) Complete bank setup for funds receipt, (3) Finalize M&E framework.",

    // Phase 08: Planning
    milestones: [
      {
        id: "ms-setup",
        phase: 7,
        title: "Project Setup Complete",
        description: "All administrative setup completed, team in place, systems ready",
        deliverables: ["Team hired", "Bank account set up", "Reporting calendar confirmed", "Kick-off meeting held"],
        dueDate: "2026-03-31",
        status: "in_progress",
        notes: "Target: Complete within first month of project",
      },
      {
        id: "ms-platform-v1",
        phase: 9,
        title: "Platform MVP Launch",
        description: "Core platform functionality deployed and tested with pilot farmers",
        deliverables: ["Web application deployed", "Mobile app beta", "50 farmers onboarded"],
        dueDate: "2026-06-30",
        status: "not_started",
        dependencies: ["ms-setup"],
        notes: "Key technical milestone - enables farmer engagement",
      },
      {
        id: "ms-training-r1",
        phase: 9,
        title: "Training Round 1 Complete",
        description: "First cohort of farmers trained on climate-smart practices",
        deliverables: ["100 farmers trained", "Training materials finalized", "Feedback collected"],
        dueDate: "2026-07-31",
        status: "not_started",
        dependencies: ["ms-platform-v1"],
        notes: "Focus on early adopters in target communities",
      },
      {
        id: "ms-midpoint",
        phase: 9,
        title: "Mid-Project Review",
        description: "Comprehensive review of progress, lessons learned, adjustments",
        deliverables: ["Progress report", "Lessons learned document", "Revised workplan if needed"],
        dueDate: "2026-11-30",
        status: "not_started",
        notes: "Coincides with Q3 narrative report",
      },
      {
        id: "ms-scale",
        phase: 9,
        title: "Scale-Up Phase Complete",
        description: "Expanded reach to full target farmer population",
        deliverables: ["500 farmers active on platform", "Community champions identified", "Partnership agreements signed"],
        dueDate: "2027-04-30",
        status: "not_started",
        dependencies: ["ms-training-r1"],
        notes: "Major scale milestone",
      },
      {
        id: "ms-closeout",
        phase: 11,
        title: "Project Closeout",
        description: "Final activities, reporting, and handover",
        deliverables: ["Final report submitted", "Assets transferred", "Lessons documented"],
        dueDate: "2027-08-31",
        status: "not_started",
        notes: "Project end date",
      },
    ],
    riskRegister: [
      {
        id: "risk-hiring",
        title: "Delayed hiring",
        description: "Difficulty finding qualified Technical Lead or Field Coordinator",
        probability: "medium",
        impact: "high",
        mitigation: "Start recruitment immediately; have backup candidates identified; consider consultants short-term",
        owner: "Daniel",
        status: "identified",
        notes: "Critical for setup phase",
      },
      {
        id: "risk-tech",
        title: "Technology adoption challenges",
        description: "Farmers may struggle with digital tools or have limited connectivity",
        probability: "medium",
        impact: "medium",
        mitigation: "Design for offline-first; provide hands-on training; have local champions",
        owner: "Technical Lead",
        status: "identified",
        notes: "Monitor during pilot phase",
      },
      {
        id: "risk-weather",
        title: "Adverse weather events",
        description: "Climate events could disrupt farming activities or damage equipment",
        probability: "low",
        impact: "high",
        mitigation: "Build climate resilience into training; have contingency funds; insurance for equipment",
        owner: "Daniel",
        status: "identified",
        notes: "Inherent risk in agriculture projects",
      },
      {
        id: "risk-currency",
        title: "Currency fluctuation",
        description: "USD/UGX exchange rate changes could affect budget",
        probability: "medium",
        impact: "low",
        mitigation: "Convert funds strategically; budget in local currency where possible",
        owner: "Keir",
        status: "identified",
        notes: "Standard funder risk",
      },
    ],
    workplanUrl: undefined,
    planningComplete: false,
    planningCompletedDate: undefined,
    planningNotes: "Detailed workplan to be developed during setup phase. Will align with M&E framework.",

    // Phase 09: Delivery
    progressPercentage: 0,
    issues: [],
    changeRequests: [],
    deliveryNotes: "Project not yet in delivery phase. Will begin tracking once setup complete.",

    // Phase 10: Reporting
    reports: [], // Will be populated as reports are submitted
    reportingNotes: "Reporting schedule aligned with funder requirements. Quarterly narrative + semi-annual financial.",

    // Phase 11: Closeout
    closeoutStatus: "not_started",
    finalReportStatus: undefined,
    lessonsLearned: [],
    renewalStrategy: "Target: Demonstrate impact to secure Phase 2 funding for scale-up across additional regions",
    closeoutNotes: "",

    // Budget Summary
    totalBudget: 75000,
    totalSpent: 0,
    totalCommitted: 0,
    burnRate: 0,

    // Documents
    documents: [
      {
        id: "doc-contract",
        name: "Grant Agreement",
        type: "letter",
        url: "#",
        version: "1.0",
        uploadedDate: "2026-01-10",
        notes: "Signed contract with foundation",
      },
      {
        id: "doc-budget",
        name: "Approved Budget",
        type: "budget",
        url: "#",
        version: "1.0",
        uploadedDate: "2026-01-10",
        notes: "Final approved budget breakdown",
      },
      {
        id: "doc-workplan",
        name: "Project Workplan (Draft)",
        type: "other",
        url: "#",
        version: "0.1",
        uploadedDate: "2026-01-15",
        notes: "Initial workplan - to be finalized during setup",
      },
    ],

    // Notes
    notes: [
      {
        id: "note-001",
        date: "2026-01-18",
        author: "Pandion",
        content: "Grant project record created from won opportunity. Setup phase initiated.",
        phase: 7,
      },
      {
        id: "note-002",
        date: "2026-01-18",
        author: "Keir",
        content: "Kick-off call with Sarah (funder) scheduled for Feb 15. Priority: finalize team and M&E framework before call.",
        phase: 7,
      },
    ],

    // Metadata
    createdDate: "2026-01-18",
    updatedDate: "2026-01-18",
    createdBy: "Pandion",
  },
];

// Helper to get project by slug
export const getProjectBySlug = (slug: string): GrantProject | undefined => {
  return projects.find((p) => p.slug === slug);
};

// Helper to get project by opportunity ID
export const getProjectByOpportunityId = (opportunityId: string): GrantProject | undefined => {
  return projects.find((p) => p.opportunityId === opportunityId);
};

// Helper to get projects by status
export const getProjectsByStatus = (status: GrantProject["status"]): GrantProject[] => {
  return projects.filter((p) => p.status === status);
};

// Helper to get active projects
export const getActiveProjects = (): GrantProject[] => {
  return projects.filter((p) => !["closed"].includes(p.status));
};

// Helper to get projects with upcoming deadlines
export const getProjectsWithUpcomingDeadlines = (days: number = 30): GrantProject[] => {
  const today = new Date();
  const cutoff = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);

  return projects.filter((p) => {
    // Check next action due
    if (p.nextActionDue) {
      const actionDue = new Date(p.nextActionDue);
      if (actionDue >= today && actionDue <= cutoff) return true;
    }

    // Check reporting calendar
    const hasUpcomingReport = [...p.reportingCalendar, ...p.reports].some((r) => {
      const dueDate = new Date(r.dueDate);
      return dueDate >= today && dueDate <= cutoff && r.status !== "accepted";
    });

    return hasUpcomingReport;
  });
};
