import { CV } from './types';

export const biologyCV: CV = {
  id: 'biology',
  label: 'Biology & Research CV',
  sections: [
    {
      type: 'profile',
      title: 'Professional Profile',
      content:
        'Research professional with lab experience in cellular/developmental biology, neuroscience models, and reproductive physiology. Strong in hypothesis-driven, collaborative research, with hands-on work in microscopy (including confocal), ex-vivo models, in vitro cell culture, and live fish colony management.',
    },
    {
      type: 'research',
      title: 'Research Experience',
      content: [
        {
          title: 'Volunteer Research Assistant',
          organization: 'Cell Communication Laboratory',
          department: 'Department of Physiology, Facultad de Medicina, UdelaR',
          location: 'Montevideo, Uruguay',
          dateRange: 'Feb 2018 - Aug 2021',
          supervisor: 'V. Abudara, PhD',
          link: 'http://www.fmed.edu.uy/',
          researchFocus:
            'Investigated pannexin-1 involvement in pericyte permeability under vasoactive stimuli, clarifying its role in health and disease.',
          bullets: [
            'Planned and executed assays assessing pericyte response to AT-II, ET-1, and PGE2 treatments.',
            'Supported data collection, analysis, and reporting for ongoing lab research programs.',
          ],
        },
        {
          title: 'Research Assistant',
          organization: 'Neural Development and Evolution Laboratory',
          department: 'Department of Integrative and Computational Neuroscience',
          location: 'Instituto de Investigaciones Biológicas Clemente Estable (IIBCE), Montevideo, Uruguay',
          dateRange: 'Sep 2018 - Feb 2020',
          supervisor: 'M. Castelló, PhD',
          link: 'http://www.iibce.edu.uy/',
          researchFocus:
            'Studied growth and reproductive dynamics in Gymnotus and Campylomormyrus as models for electric-perception research.',
          bullets: [
            'Monitored breeding, development, and colony health through gonadaudescence protocols.',
            'Maintained records and supported lab workflows for longitudinal studies.',
          ],
        },
        {
          title: 'Volunteer Research Assistant',
          organization: 'Cellular and Developmental Biology Lab',
          department: 'Department of Cellular Biology, Facultad de Ciencias, UdelaR',
          location: 'Montevideo, Uruguay',
          dateRange: 'Sep 2017 - Feb 2018',
          supervisor: 'M. Arezo, PhD; N. Papa, MSc',
          researchFocus:
            'Assessed Chordin and related morphogen expression during Diapause I in Austrolebias charrua.',
          bullets: [
            'Performed mRNA assessments to characterize developmental-arrest stages.',
            'Contributed to results later presented in funded student research forums.',
          ],
        },
      ],
    },
    {
      type: 'education',
      title: 'Education',
      content: [
        {
          title: 'Facultad de Ciencias, Universidad de la República (UdelaR), Uruguay',
          dateRange: 'Feb 2015 - Jul 2019',
          degree: "Bachelor's degree in Biological Sciences",
          field: 'Cellular Biology',
          thesis:
            'Permeability modulation by vasoactive substances (AT-II, ET-1, and PGE2) in wild-type and Panx1-/- knockout pericytes (Facultad de Medicina, UdelaR).',
          note: 'Undergraduate thesis contributed to a research line later published in Nature.',
          link: 'https://www.fcien.edu.uy/',
        },
      ],
    },
    {
      type: 'publications',
      title: 'Selected Publications and Presentations',
      content: [
        {
          type: 'project',
          date: 'Dec 2018',
          authors: '**Figares, M.**; Marset, V.; Mai, S.; Abudara, V.',
          title: 'Pericyte permeability modulation of pannexins and connexins through vasoactive substances',
          venue: 'PAIE 2017 (ID 119), CSIC - Universidad de la República, Uruguay.',
        },
        {
          type: 'poster',
          date: 'Nov 2018',
          authors: 'Radmilovich, M.; Ivagnes, R.; Bravo-Nolla, R.; Campbell, V.; **Figares, M.**; Castelló, M. E.',
          title: 'Reproduction and development of African and American electric fish; I reproduction station in captivity',
          venue: 'VI Conferencia Latinoamericana sobre Cultivo de Peces Nativos / 1er Congreso Uruguayo de Acuicultura, Uruguay.',
          link: 'http://pecesnativos2018.fcien.edu.uy/',
        },
        {
          type: 'poster',
          date: 'May 2018',
          authors: '**Figares, M.**; González, I. D.; Herrera, M. L.; Schuleb, H.; Arezo, M. J.; Papa, N.',
          title: 'Expression of Chordin mRNA during diapause I in Austrolebias charrua',
          venue: 'Expo Cierre 2018, CSIC-funded projects (2016 cohort), Montevideo, Uruguay.',
          note: 'Awarded for academic excellence.',
        },
        {
          type: 'oral',
          date: 'May 2018',
          authors: '**Figares, M.**; González, I. D.; Herrera, M. L.; Schuleb, H.; Arezo, M. J.; Papa, N.',
          title: 'Expression of Chordin mRNA during diapause I in Austrolebias charrua',
          venue: 'Expo Cierre 2018, CSIC-funded projects (2016 cohort), Montevideo, Uruguay.',
          note: 'Awarded for academic excellence.',
        },
        {
          type: 'project',
          date: 'Dec 2016',
          authors: '**Figares, M.**; González, I. D.; Herrera, M. L.; Schuleb, H.; Arezo, M. J.; Papa, N.',
          title: 'Expression of Chordin mRNA during diapause I in Austrolebias charrua',
          venue: 'PAIE 2016 (ID 66), CSIC - Universidad de la República, Uruguay.',
          link: 'http://www.estudiantes.csic.edu.uy/category/proyectos-aprobados/proyectos-2016/',
        },
      ],
    },
    {
      type: 'teaching',
      title: 'Teaching Experience',
      content: [
        {
          title: 'Teaching Assistant',
          organization: 'Neural Development and Evolution Laboratory',
          department: 'Department of Integrative and Computational Neuroscience',
          location: 'Instituto de Investigaciones Biológicas Clemente Estable (IIBCE), Montevideo, Uruguay',
          dateRange: 'Sep 2018 - Feb 2020',
          supervisor: 'M. Castelló, PhD',
          bullets: [
            'Supported DIY microscopy and introductory neuroscience workshops for high school students.',
            'Collaborated on outreach activities linked to MIT partnership initiatives.',
          ],
        },
        {
          title: 'Volunteer Teaching Assistant',
          organization: 'Laboratorio de Biología Celular',
          department: 'Department of Cellular Biology, Facultad de Ciencias, UdelaR',
          location: 'Montevideo, Uruguay',
          dateRange: 'Apr 2018 - Aug 2018; May 2017 - Aug 2017',
          supervisor: 'N. Papa, MSc',
          bullets: [
            'Assisted practical sessions for undergraduate cell biology courses.',
            'Supported session prep and in-class lab guidance.',
          ],
        },
      ],
    },
    {
      type: 'funding',
      title: 'Funding and Awards',
      content: [
        {
          source: 'CSIC, Universidad de la República (PAIE), Uruguay',
          link: 'http://www.estudiantes.csic.edu.uy/',
          awards: [
            {
              id: 'PAIE 2017 ID 119',
              dateRange: 'Apr 2018 - Dec 2018',
              note: 'Team lead.',
            },
            {
              id: 'PAIE 2016 ID 66',
              dateRange: 'Mar 2017 - Feb 2018',
              note: 'Awarded for academic excellence; team lead.',
            },
          ],
        },
      ],
    },
    {
      type: 'training',
      title: 'Professional Training',
      content: [
        {
          name: 'Epifluorescence and Confocal Microscopy Basics',
          date: 'Dec 2018',
          description: 'Hands-on training on Olympus BX61 with FV300 confocal module (IIBCE, MEC).',
        },
        {
          name: 'Introduction to Bioinformatic Analysis',
          date: 'Feb 2018',
          description: 'Instituto de Higiene, UdelaR (4-week course).',
        },
        {
          name: 'Training in Hatching and Raising of Annual Killifish',
          date: 'Jun 2017',
          description: 'Cellular Biology Section, Facultad de Ciencias, UdelaR.',
        },
        {
          name: 'Genetic Engineering Tools for Unicellular Eukaryotic Parasites',
          date: 'Mar 2017',
          description: 'Institut Pasteur Montevideo, Uruguay (2-week course).',
        },
        {
          name: 'Training in Handling and Care of Annual Killifish and other fresh water fish in laboratory conditions',
          date: 'Feb 2017',
          description: 'Cellular Biology Section, Facultad de Ciencias, UdelaR.',
        },
      ],
    },
  ],
};
