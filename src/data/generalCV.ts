import { CVSection } from './types';

// Shared sections that get appended to all CVs
export const sharedSections: CVSection[] = [
  {
    type: 'strengths',
    title: 'Core Strengths',
    content: [
      { label: 'Team multiplier mindset', detail: 'Onboarded numerous developers; identifies and amplifies team potential' },
      { label: 'Technical leadership & mentoring', detail: 'Naturally steps into leadership; mentors teammates, identifies bottlenecks, and drives consensus on technical decisions' },
      { label: 'Cross-functional communication', detail: 'Acted as de-facto PM and technical counterpart to stakeholders for teams of 3-7 developers' },
      { label: 'Problem solving & debugging', detail: 'Optimized performance and resolved production incidents with fixes shipped within 20-40 minutes' },
      { label: 'Requirements definition & project oversight', detail: 'Transforms business needs into actionable roadmaps (e.g., built a developer portal for AWS infrastructure under tight resources, adopted across multiple projects)' },
      { label: 'AI fluency', detail: 'Daily use of Cursor, Claude, and Claude Code; manages parallel workloads across multiple agents' },
    ],
  },
  {
    type: 'languages',
    title: 'Languages',
    content: [
      { label: 'Spanish', detail: 'Native fluency' },
      { label: 'English', detail: 'C1-C2 proficiency' },
    ],
  },
  /*
  {
    type: 'certifications',
    title: 'Certifications',
    content: [
      {
        name: 'EF Standard English Test',
        date: 'Jan 2022',
        description: 'EF',
      },
      {
        name: 'Typing Certificate',
        date: 'Feb 2023',
        description: 'Ratatype (Credential ID: 5724851)',
      },
    ],
  },
  */
  {
    type: 'activities',
    title: 'Off-Hours Activities',
    content: [
      { label: 'Choir singing, composing, arranging, and conducting',
        detail: 'Member & director in several choirs, also arranging and leading vocal training | May 2012 - Dec 2022' },
      {
        label: 'Lyrical Singing studies - Soloist at EUMUS',
        detail: 'Ciclo Introductorio a la Música (CIM), Escuela Universitaria de Música (EUMUS), UdelaR | Feb 2016 - Dec 2019',
      },
    ],
  },
];
