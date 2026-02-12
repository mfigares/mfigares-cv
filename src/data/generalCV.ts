import { CVSection } from './types';

// Shared sections that get appended to all CVs
export const sharedSections: CVSection[] = [
  {
    type: 'strengths',
    title: 'Key Competencies',
    content: [
      { label: 'Team multiplier mindset', detail: 'Onboarded many developers; consistently identifies and amplifies team potential.' },
      { label: 'Technical leadership & mentoring', detail: 'Leads naturally; mentors teammates; drives technical consensus.' },
      { label: 'Cross-functional communication', detail: 'Technical counterpart for stakeholder-facing teams of 3-7 developers.' },
      { label: 'Problem solving & debugging', detail: 'Optimized performance to support 5x scale and shipped production fixes within 20-40 minutes of incident reports.' },
      { label: 'AI fluency', detail: 'Daily use of Cursor and Claude Code; manages parallel workloads across multiple agents.' },
    ],
  },
];
