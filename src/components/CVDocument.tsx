import { forwardRef } from 'react';
import { CV, PersonalInfo } from '../data/types';
import { Header } from './Header';
import { Section } from './Section';

interface CVDocumentProps {
  cv: CV;
  personalInfo: PersonalInfo;
  theme: 'dark' | 'light';
}

export const CVDocument = forwardRef<HTMLDivElement, CVDocumentProps>(
  ({ cv, personalInfo, theme }, ref) => {
    return (
      <div ref={ref} className="cv-document" data-theme={theme}>
        <span className="cv-updated">Updated {__LAST_UPDATED__}</span>
        <Header personalInfo={personalInfo} />
        {cv.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>
    );
  }
);

CVDocument.displayName = 'CVDocument';
