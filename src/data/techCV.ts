import { CV } from './types';

export const techCV: CV = {
  id: 'tech',
  label: 'Tech CV',
  sections: [
    {
      type: 'profile',
      title: 'Professional Profile',
      content:
        'Senior Software Engineer with 6+ years delivering full-stack products across backend, web, and React Native, recently in logistics and mapping. I own stream planning and turn ambiguous requirements into clear roadmaps, safe iterations, and cross-functional alignment.',
    },
    {
      type: 'experience',
      title: 'Professional Experience',
      content: [
        {
          title: 'Senior Software Engineer',
          organization: 'TrashLab',
          organizationType: 'Full-time',
          location: 'San Francisco, USA (Remote)',
          dateRange: 'Jul 2025 - Jan 2026',
          bullets: [
            'Own Route Manager and Maintenance modules across backend, web, and React Native.',
            'Owned estimation, planning, and implementation, turning business needs into architecture and roadmaps.',
          ],
        },
        {
          title: 'Software Developer and Team Lead',
          organization: 'Qubika (formerly Moove It)',
          organizationType: 'Full-time',
          location: 'Montevideo, Uruguay (Hybrid)',
          dateRange: 'Aug 2021 - Jul 2025',
          bullets: [
            'Led multiple projects, including a mapping platform, real-time products, and a dev portal for custom IaC.',
            'Owned stream estimation and planning across requirements, dependencies, timelines, and stakeholders.',
            'Recommended staffing to match team capacity with roadmap goals, planned individual roadmaps, and led onboarding.',
            'Mentored engineers and improved technical interviews, increasing confidence in hiring evaluations.',
          ],
        },
      ],
    },
    {
      type: 'education',
      title: 'Education',
      content: [
        {
          title: 'Systems Engineering, Computer Science',
          organization: 'Universidad ORT Uruguay',
          dateRange: 'Mar 2021',
        },
        {
          title: 'BSc in Biological Sciences, Cell Biology',
          organization: 'Universidad de la República (UdelaR)',
          dateRange: 'Feb 2015 - Jul 2019',
        },
      ],
    },
    {
      type: 'skills',
      title: 'Technical Skills',
      content: [
        { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Ruby'] },
        { category: 'Frontend & Mobile', skills: ['React (class and functional components)', 'Redux', 'RTK', 'Next.js', 'React Native'] },
        { category: 'Backend', skills: ['Node.js (Express, Koa)', 'Ruby on Rails'] },
        { category: 'API & Realtime', skills: ['REST', 'GraphQL (Apollo)', 'tRPC', 'WebSocket (exposure)'] },
        {
          category: 'Data & ORM',
          skills: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQLite', 'DynamoDB', 'Prisma', 'TypeORM', 'Drizzle'],
        },
        {
          category: 'Cloud, Observability & Testing',
          skills: ['AWS (ECS, ECR, RDS, Lambda, CloudWatch, IAM)', 'Docker', 'Terraform (basic)', 'Datadog', 'Sentry', 'Jest', 'Vitest', 'RSpec', 'Cypress'],
        },
        { category: 'Geospatial', skills: ['Mapbox GL', 'react-map-gl', 'Google Places API'] },
        {
          category: 'Practices',
          skills: ['Git', 'Vim', 'SOLID principles', 'Code Review', 'Agile/Scrum', 'SDLC', 'CI/CD'],
        },
      ],
    },
  ],
};
