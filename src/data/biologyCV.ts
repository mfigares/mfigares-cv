import { CV } from './types';

export const biologyCV: CV = {
  id: 'biology',
  label: 'Biology & Research CV',
  sections: [
    {
      type: 'profile',
      title: 'Profile',
      content: `First and foremost, I am a team player, in research or otherwise. I excel at critical thinking, being analytical about hypotheses, and I do thorough research before formulating them. My areas of interest have always been signaling pathways in diverse models, but I've been part of research in varied topics: pericyte permeability and contractility, nature of sciences and teaching research, developmental biology and developmental arrest, and reproductive physiology among others. I like to think that shows my openness when tackling problems and adapting to new challenges.

Regarding experimental techniques, I've worked with several types of microscopy, ex-vivo models (acute brain slices), in-vivo cell cultures, and have maintained live fish colonies and eggs across different species.`,
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
            'Permeability modulation by vasoactive substances (AT-II, ET-1 and PGE2) in wild type and Knock-Out Panx1-/- pericytes. (At Facultad de Medicina, UdelaR)',
          note: 'This work contributed to ongoing research by the group that was later published in Nature.',
          link: 'https://www.fcien.edu.uy/',
        },
      ],
    },
    {
      type: 'research',
      title: 'Research Experience',
      content: [
        {
          title: 'Research Assistant',
          organization: 'Neural Development and Evolution Laboratory',
          department: 'Department of Integrative and Computational Neuroscience',
          location: 'Instituto de Investigaciones Biológicas Clemente Estable (IIBCE), Montevideo, Uruguay',
          dateRange: 'Sep 2018 - Feb 2020',
          supervisor: 'M. Castelló, PhD',
          link: 'http://www.iibce.edu.uy/',
          researchFocus:
            'Monitor growth and reproduction of native African and American electric fish (genus Gymnotus and Campylomormyrus, two experimental models used to study electrical perception) through gonadaudescence protocols.',
        },
        {
          title: 'Volunteer Research Assistant',
          organization: 'Cell Communication Laboratory',
          department: 'Department of Physiology, Facultad de Medicina, UdelaR',
          location: 'Montevideo, Uruguay',
          dateRange: 'Feb 2018 - Aug 2021',
          supervisor: 'V. Abudara, PhD',
          link: 'http://www.fmed.edu.uy/',
          researchFocus:
            "Measure pericyte permeability modulation through pannexin-1 channels after different vasoactive substance treatments to characterize this protein's function in health and disease.",
        },
        {
          title: 'Volunteer Research Assistant',
          organization: 'Cellular and Developmental Biology Lab',
          department: 'Department of Cellular Biology, Facultad de Ciencias, UdelaR',
          location: 'Montevideo, Uruguay',
          dateRange: 'Sep 2017 - Feb 2018',
          supervisor: 'M. Arezo, PhD; N. Papa, MSc',
          researchFocus:
            'Measure qualitative expression of Chordin (and other morphogens) mRNA during Diapause I (developmental arrest) in Austrolebias charrua.',
        },
      ],
    },
    {
      type: 'funding',
      title: 'Funding',
      content: [
        {
          source: 'CSIC, UdelaR, Uruguay - Proyecto de Apoyo a la Investigación Estudiantil (PAIE)',
          link: 'http://www.estudiantes.csic.edu.uy/',
          awards: [
            {
              id: 'PAIE 2016 ID# 66',
              dateRange: 'Mar 2017 - Feb 2018',
              note: 'awarded for academic excellence, team lead',
            },
            {
              id: 'PAIE 2017 ID# 119',
              dateRange: 'Apr 2018 - Dec 2018',
              note: 'team lead',
            },
          ],
        },
      ],
    },
    {
      type: 'publications',
      title: 'Projects, Posters and Oral Presentations',
      content: [
        {
          type: 'project',
          date: 'Dec 2018',
          authors: '**Figares, M.**, Marset, V., Mai, S., Abudara, V.',
          title: 'Pericyte permeability modulation of pannexins and connexins through vasoactive substances',
          venue: 'CSIC, UdelaR, Uruguay. PAIE 2017, ID# 119.',
        },
        {
          type: 'poster',
          date: 'Nov 2018',
          authors: 'Radmilovich, M., Ivagnes, R., Bravo-Nolla, R., Campbell, V., **Figares, M.**, Castelló, M. E.',
          title: 'Reproduction and development of African and American electric fish; I reproduction station in captivity',
          venue:
            'VI Conferencia Latinoamericana sobre Cultivo de Peces Nativos / 1er Congreso Uruguayo de Acuicultura',
          link: 'http://pecesnativos2018.fcien.edu.uy/',
        },
        {
          type: 'poster',
          date: 'May 2018',
          authors: '**Figares, M.**, González, I.D., Herrera, M. L., Schuleb, H., Arezo, M. J., Papa, N.',
          title: 'Expression of Chordin mRNA during diapause I in Austrolebias charrua',
          venue: 'CSIC, UdelaR, Montevideo, Uruguay. Presentation at "Expo Cierre 2018" for CSIC financed projects in 2016.',
          note: 'Awarded for Academic Excellence.',
        },
        {
          type: 'oral',
          date: 'May 2018',
          authors: '**Figares, M.**, González, I.D., Herrera, M. L., Schuleb, H., Arezo, M. J., Papa, N.',
          title: 'Expression of Chordin mRNA during diapause I in Austrolebias charrua',
          venue: 'CSIC, UdelaR, Montevideo, Uruguay. Presentation at "Expo Cierre 2018" for CSIC financed projects in 2016.',
          note: 'Awarded for Academic Excellence.',
        },
        {
          type: 'project',
          date: 'Dec 2016',
          authors: '**Figares, M.**, González, I.D., Herrera, M. L., Schuleb, H., Arezo, M. J., Papa, N.',
          title: 'Expression of Chordin mRNA during diapause I in Austrolebias charrua',
          venue: 'CSIC, UdelaR, Uruguay. PAIE 2016, ID# 66.',
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
          description:
            'Assists in workshops of "do it yourself" (DIY) microscopy and basic neuroscience given to high school students, in collaboration with MIT.',
        },
        {
          title: 'Volunteer Teaching Assistant',
          organization: 'Laboratorio de Biología Celular',
          department: 'Department of Cellular Biology, Facultad de Ciencias, UdelaR',
          location: 'Montevideo, Uruguay',
          dateRange: 'Apr 2018 - Aug 2018; May 2017 - Aug 2017',
          supervisor: 'N. Papa, MSc',
          description: 'Assisted in Cell Biology Course practical classes.',
        },
      ],
    },
    {
      type: 'training',
      title: 'Skills and Training',
      content: [
        {
          name: 'Epifluorescence and Confocal Microscopy Basics',
          date: 'Dec 2018',
          description:
            'Training in Handling of Olympus BX61 with FV300 confocal microscopy module. Confocal Microscopy Commission, IIBCE, Ministerio de Educación y Cultura (MEC)',
        },
        {
          name: 'Introduction to Bioinformatic Analysis',
          date: 'Feb 2018',
          description: 'Instituto de Higiene, UdelaR (4-week course)',
        },
        {
          name: 'Training in Hatching and Raising of Annual Killifish',
          date: 'Jun 2017',
          description: 'Cellular Biology Section, Facultad de Ciencias, UdelaR, Uruguay',
        },
        {
          name: 'Genetic Engineering Tools for Unicellular Eukaryotic Parasites',
          date: 'Mar 2017',
          description: 'Institut Pasteur Montevideo, Uruguay (2-week course)',
        },
        {
          name: 'Training in Handling and Care of Annual Killifish and other fresh water fish in laboratory conditions',
          date: 'Feb 2017',
          description: 'Cellular Biology Section, Facultad de Ciencias, UdelaR, Uruguay',
        },
      ],
    },
  ],
};
