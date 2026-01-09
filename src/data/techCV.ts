import { CV } from './types';

export const techCV: CV = {
  id: 'tech',
  label: 'Tech CV',
  sections: [
    {
      type: 'profile',
      title: 'Profile',
      content: `Since joining the industry in 2021, I've worked with amazing people who helped me grow, and I've had the opportunity to help them grow in return. I'm currently working as a Senior Software Engineer at TrashLab, but in previous roles I've also been an interviewer, mentor, platform lead, project manager, and the technical counterpart for diverse stakeholders.

What I'd most like to be known for is being a team multiplier. I focus on understanding the team I work in and the value it can deliver, then work to optimize for it by being empathetic and acting as a team player. I put strong emphasis on communication.`,
    },
    {
      type: 'experience',
      title: 'Experience',
      content: [
        {
          title: 'Senior Software Engineer',
          organization: 'TrashLab',
          organizationType: 'Full-time',
          location: 'Montevideo, Uruguay',
          dateRange: 'Jul 2025 - Present',
          description:
            'Contributing to a fast-growing product with a focus on logistics and mapping.',
        },
        {
          title: 'Senior Software Developer I',
          organization: 'Qubika',
          organizationType: 'Full-time',
          location: 'Uruguay',
          dateRange: 'Jan 2024 - Jul 2025',
          description:
            'A position requiring autonomy and technical depth while improving product quality as a team. Contributing to roadmap planning and helping others grow. Acting as a value multiplier.',
        },
        {
          title: 'Software Developer II',
          organization: 'Qubika (formerly Moove It)',
          organizationType: 'Full-time',
          location: 'Uruguay · Hybrid',
          dateRange: 'Aug 2021 - Jan 2024',
          description:
            'Development, SRE, management, and team leadership tasks. Initially started at Moove It before the merger with December Labs formed Qubika.',
        },
      ],
    },
    {
      type: 'education',
      title: 'Education',
      content: [
        {
          title: 'Universidad ORT Uruguay',
          dateRange: 'Mar 2021',
          degree: 'Systems Engineering',
          field: 'Computer and Information Sciences',
          note: 'Studies paused to focus on professional career',
        },
        {
          title: 'Universidad de la República (UdelaR)',
          dateRange: '2015 - 2019',
          degree: "Bachelor's degree in Biological Sciences",
          field: 'Cellular Biology',
          note: 'See Biology & Research CV for research background',
        },
      ],
    },
    {
      type: 'skills',
      title: 'Technical Skills',
      content: [
        { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Ruby', 'C'] },
        { category: 'Frontend', skills: ['React.js', 'Next.js', 'HTML'] },
        { category: 'Backend', skills: ['Node.js', 'Ruby on Rails', 'API Development'] },
        { category: 'Infrastructure & Cloud', skills: ['AWS (Lambda, etc.)', 'Docker'] },
        {
          category: 'Tools & Practices',
          skills: ['Git', 'Vim', 'SOLID principles', 'Code Review', 'Agile/Scrum', 'SDLC', 'CI/CD'],
        },
        { category: 'Databases', skills: ['Relational and non-relational databases'] },
      ],
    },
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
    {
      type: 'strengths',
      title: 'Core Strengths',
      content: [
        { label: 'Team multiplier mindset' },
        { label: 'Technical leadership & mentoring' },
        { label: 'Cross-functional communication' },
        { label: 'Problem solving & debugging' },
        { label: 'Requirements definition & project oversight' },
        { label: 'AI fluency and proficiency using several coding and general-purpose tools' },
      ],
    },
  ],
};
