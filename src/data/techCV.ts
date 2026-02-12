import { CV } from './types';

export const techCV: CV = {
  id: 'tech',
  label: 'Tech CV',
  sections: [
    {
      type: 'profile',
      title: 'Professional Profile',
      content:
        'Senior Software Engineer with 5+ years leading the delivery of full-stack products across backend, web, and React Native, recently in logistics and mapping. I turn ambiguous requirements into clear plans, safe iterations, and cross-functional alignment.',
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
          dateRange: 'Jul 2025 - Present',
          bullets: [
            'Own Route Manager and Maintenance modules across backend, web, and React Native.',
            'Articulate with stakeholders to turn business requirements into architecture desitions and a roadmap.',
          ],
        },
        {
          title: 'Software Developer and Team Lead',
          organization: 'Qubika (formerly Moove It)',
          organizationType: 'Full-time',
          location: 'Montevideo, Uruguay (Hybrid)',
          dateRange: 'Aug 2021 - Jul 2025',
          bullets: [
            'Contributed and led multiple projects, including a mapping platform and real-time products.',
            'Aligned stakeholders and technical teams by clarifying requirements, dependencies, and trade-offs.',
            'Led initiatives ranging from performance improvements to the rollout of a dev portal for custom IaC.',
            'Mentored engineers, ran and improved technical interviews, improving confidence in candidates.',
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
        { category: 'Frontend & Mobile', skills: ['React', 'Next.js', 'React Native'] },
        { category: 'Backend', skills: ['Node.js (Express, Koa)', 'Ruby on Rails'] },
        { category: 'API', skills: ['REST', 'GraphQL (Apollo)', 'tRPC'] },
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
