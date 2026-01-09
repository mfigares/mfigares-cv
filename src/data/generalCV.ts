import { CV } from './types';

export const generalCV: CV = {
  id: 'general',
  label: 'General Skills',
  sections: [
    {
      type: 'languages',
      title: 'Languages',
      content: [
        { label: 'Spanish', detail: 'Native fluency' },
        { label: 'English', detail: 'C1-C2 proficiency' },
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
      type: 'activities',
      title: 'Extracurricular Activities',
      content: [
        { label: 'Choir singing', detail: 'Coro Rapsodia | Aug 2017 - 2020' },
        {
          label: 'Lyrical Singing studies',
          detail: 'Ciclo Introductorio a la Música (CIM), Escuela Universitaria de Música (EUMUS), UdelaR | 2016 - 2020',
        },
      ],
    },
  ],
};
