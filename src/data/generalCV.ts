import { CVSection } from './types';

// Shared sections that get appended to all CVs
export const sharedSections: CVSection[] = [
  {
    type: 'strengths',
    title: 'Key Competencies',
    content: [
      { label: 'Team multiplier mindset', detail: 'Onboarded many developers; identifies and amplifies team potential' },
      { label: 'Technical leadership & mentoring', detail: 'Leads naturally; mentors teammates; drives technical consensus' },
      { label: 'Cross-functional communication', detail: 'Technical counterpart of stakeholder-facing teams of 3-7 people' },
      { label: 'Problem solving & debugging', detail: 'Optimized performance and resolved production incidents with fixes that shipped within 20-40 minutes after reporting' },
      { label: 'AI fluency', detail: 'Daily use of Cursor and Claude Code; manages parallel workloads across multiple agents' },
    ],
  },
];
