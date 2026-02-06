// HISAGEN Uganda - Status Updates History
// Chronological record of project status updates for tracking and reporting

export interface StatusUpdate {
  id: string;
  date: string;
  source: string;
  sourceType: 'email' | 'call' | 'meeting' | 'internal';
  summary: string;
  regulatory: {
    items: Array<{
      text: string;
      status: 'complete' | 'in-progress' | 'pending' | 'future';
    }>;
  };
  fieldOps: {
    items: Array<{
      text: string;
      status: 'complete' | 'in-progress' | 'pending' | 'warning';
    }>;
  };
  strategic: {
    items: Array<{
      text: string;
      status: 'complete' | 'in-progress' | 'direction' | 'future';
    }>;
  };
}

export const ugandaStatusUpdates: StatusUpdate[] = [
  // Most recent first
  {
    id: 'update-2026-02-05',
    date: '2026-02-05',
    source: 'Keir Austen-Brown',
    sourceType: 'email',
    summary: 'Product samples have reached Uganda and entered the formal UNBS approval process. The team is collecting the latest yield and field data from trials while awaiting regulatory confirmation. Timeline running approximately 3 weeks behind original schedule, with Locus AG USA remaining fully committed to the partnership.',
    regulatory: {
      items: [
        { text: 'Samples arrived in Uganda', status: 'complete' },
        { text: 'Submitted to UNBS', status: 'complete' },
        { text: 'Awaiting UNBS confirmation', status: 'in-progress' },
        { text: 'MAAIF submission (next)', status: 'future' },
      ],
    },
    fieldOps: {
      items: [
        { text: 'Collecting latest yield data', status: 'in-progress' },
        { text: 'Gathering field trial results', status: 'in-progress' },
        { text: 'Uganda call: confirm timeline', status: 'complete' },
        { text: '~3 weeks behind schedule', status: 'warning' },
      ],
    },
    strategic: {
      items: [
        { text: 'Locus USA fully supportive', status: 'complete' },
        { text: 'Farmer impact as lead story', status: 'direction' },
        { text: 'Yields & income first', status: 'direction' },
        { text: 'Carbon credits: phase 2', status: 'future' },
      ],
    },
  },
  {
    id: 'update-2026-01-27',
    date: '2026-01-27',
    source: 'Keir Austen-Brown',
    sourceType: 'email',
    summary: 'Website and logo preview shared with positive reception. Scott Hermo (business partner working with Locus AG) introduced. Samples sent for formal UNBS tests ahead of MAAIF submission.',
    regulatory: {
      items: [
        { text: 'Samples sent for UNBS tests', status: 'complete' },
        { text: 'MAAIF approval submission planned', status: 'pending' },
      ],
    },
    fieldOps: {
      items: [
        { text: 'Scott Hermo engaged with Locus AG', status: 'complete' },
        { text: 'Portal and preview site access granted', status: 'complete' },
      ],
    },
    strategic: {
      items: [
        { text: 'Website direction approved', status: 'complete' },
        { text: 'Logo concepts under review', status: 'in-progress' },
        { text: 'Partnership model discussion ongoing', status: 'direction' },
      ],
    },
  },
  {
    id: 'update-2026-01-21',
    date: '2026-01-21',
    source: 'Keir Austen-Brown',
    sourceType: 'call',
    summary: 'Comprehensive check-in call covering portal walkthrough, Capital Continuum framework introduction, and carbon market context. US prices dropped significantly ($25-42 to $12-15/tonne). Locus AG pivoted to full-price product with opt-in data program.',
    regulatory: {
      items: [
        { text: 'UNBS certification pathway confirmed', status: 'complete' },
        { text: '2-3 domains secured (HISAGEN US, UG)', status: 'complete' },
      ],
    },
    fieldOps: {
      items: [
        { text: 'Portal site introduced', status: 'complete' },
        { text: 'Capital Continuum framework mapped', status: 'complete' },
        { text: '$2M budget estimate (Stage 1→2)', status: 'pending' },
      ],
    },
    strategic: {
      items: [
        { text: 'Carbon market context understood', status: 'complete' },
        { text: 'Subsidised pilot model confirmed', status: 'direction' },
        { text: 'Website + logo + grants prioritised', status: 'direction' },
      ],
    },
  },
  {
    id: 'update-2026-01-16',
    date: '2026-01-16',
    source: 'Keir Austen-Brown',
    sourceType: 'email',
    summary: 'Positive meeting with John Uhran (Locus CEO) confirming full support for Uganda roadmap and pan-African expansion strategy. Uganda first → East Africa → pan-African rollout.',
    regulatory: {
      items: [
        { text: 'Locus CEO meeting completed', status: 'complete' },
        { text: 'Uganda roadmap approved by Locus', status: 'complete' },
      ],
    },
    fieldOps: {
      items: [
        { text: 'HISAGEN Uganda overview (14 pages) shared', status: 'complete' },
        { text: 'Locus AG agronomy data (30 pages) shared', status: 'complete' },
      ],
    },
    strategic: {
      items: [
        { text: 'Pan-African expansion confirmed', status: 'direction' },
        { text: 'Locus USA fully committed', status: 'complete' },
      ],
    },
  },
  {
    id: 'update-2025-12-23',
    date: '2025-12-23',
    source: 'Keir Austen-Brown',
    sourceType: 'email',
    summary: 'End-of-year update confirming strong progress on Uganda microbes business development. Formal government approval expected by mid-February 2026.',
    regulatory: {
      items: [
        { text: 'Government approval on track', status: 'in-progress' },
        { text: 'Target: mid-February 2026', status: 'pending' },
      ],
    },
    fieldOps: {
      items: [
        { text: 'Uganda operations progressing', status: 'in-progress' },
      ],
    },
    strategic: {
      items: [
        { text: 'Strategy sessions planned for Jan', status: 'pending' },
      ],
    },
  },
];

// Helper: Get the latest update
export function getLatestUpdate(): StatusUpdate {
  return ugandaStatusUpdates[0];
}

// Helper: Get all updates except the latest (for history section)
export function getHistoricalUpdates(): StatusUpdate[] {
  return ugandaStatusUpdates.slice(1);
}

// Helper: Get update by ID
export function getUpdateById(id: string): StatusUpdate | undefined {
  return ugandaStatusUpdates.find(update => update.id === id);
}

// Helper: Format date for display
export function formatUpdateDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
