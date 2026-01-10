import { CV } from './types';

export const techCV: CV = {
  id: 'tech',
  label: 'Tech CV',
  sections: [
    {
      type: 'profile',
      title: 'Profile',
      content: `I'm a Senior Software Engineer with 4+ years of experience building full-stack products, with a recent focus on logistics, mapping, and geospatial experiences. I take ownership end-to-end (backend, web, and React Native), and I’m comfortable turning ambiguous requirements into clear plans and fast, safe iterations.

I’m known for being a team multiplier: I communicate clearly across stakeholders, mentor and interview engineers, and help teams align on architecture and delivery by using empathy and critical thinking.`,
    },
    {
      type: 'experience',
      title: 'Experience',
      content: [
        {
          title: 'Senior Software Engineer',
          organization: 'TrashLab',
          organizationType: 'Full-time',
          location: 'San Francisco, USA (Remote)',
          dateRange: 'Jul 2025 - Present',
          description:
            'Contribute to a fast-growing logistics and mapping product, owning the Route Manager and Fleet Maintenance modules end-to-end (backend plus web and React Native mobile). Deliver features quickly by turning ambiguous product requirements into clear technical plans and shippable increments, collaborating closely with product and engineering to iterate safely.',
        },
        {
          title: 'Senior Software Developer I',
          organization: 'Qubika',
          organizationType: 'Full-time',
          location: 'Montevideo, Uruguay (Hybrid)',
          dateRange: 'Jan 2024 - Jul 2025',
          description:
            'Worked on a real estate and mapping platform, where the key challenge was aligning multiple teams, technical groups, and stakeholders. Took platform-lead responsibilities within a product-stream team focused on property and land discovery experiences, applying empathy, negotiation, and systems-level thinking to unblock delivery. Mentored engineers, conducted technical interviews, and helped improve interview processes at Qubika (600+ employees at the time).',
        },
        {
          title: 'Software Developer II',
          organization: 'Qubika (formerly Moove It)',
          organizationType: 'Full-time',
          location: 'Montevideo, Uruguay (Hybrid)',
          dateRange: 'Aug 2021 - Jan 2024',
          description:
            'Rotated across multiple projects with varied responsibilities: from Ruby development while acting as a technical PM interfacing with stakeholders, to owning performance-critical initiatives that helped deliver an MVP on time and reach strong user adoption. Became a technical reference point, ramping teammates and contributing a valued perspective to roadmap decisions. In collaboration with SRE, led the delivery of an internal developer portal to streamline access to AWS infrastructure via custom IaC templates and direct consumption of AWS state, owning architecture decisions and leading two semi-senior engineers despite tight resourcing.',
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
          dateRange: 'Feb 2015 - Jul 2019',
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
        { category: 'Languages', skills: ['TypeScript', 'JavaScript', 'Ruby'] },
        { category: 'Frontend & Mobile', skills: ['React', 'Next.js', 'React Native'] },
        { category: 'Backend', skills: ['Node.js (Express, Koa)', 'Ruby on Rails'] },
        { category: 'APIs', skills: ['REST', 'GraphQL (Apollo)', 'tRPC'] },
        { category: 'Data', skills: ['PostgreSQL (+ PostGIS)', 'MySQL', 'SQLite', 'DynamoDB', 'Supabase (Postgres)'] },
        { category: 'ORMs', skills: ['Prisma', 'TypeORM', 'Drizzle'] },
        { category: 'Cloud & Infra', skills: ['AWS (ECS, ECR, RDS, Lambda, CloudWatch, IAM)', 'Docker', 'Terraform (basic)'] },
        { category: 'Testing', skills: ['Jest', 'Vitest', 'RSpec', 'Cypress'] },
        { category: 'Observability', skills: ['Datadog', 'Sentry'] },
        { category: 'Mapping / Geo', skills: ['Mapbox GL', 'react-map-gl', 'Google Places API'] },
        {
          category: 'Tools & Practices',
          skills: ['Git', 'Vim', 'SOLID principles', 'Code Review', 'Agile/Scrum', 'SDLC', 'CI/CD'],
        },
      ],
    },
  ],
};
