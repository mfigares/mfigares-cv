import { PersonalInfo } from '../data/types';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="cv-header">
      <h1 className="cv-name">{personalInfo.name}</h1>
      <div className="cv-personal-info">
        <span>{personalInfo.address}</span>
        <span>{personalInfo.phone}</span>
        <span>{personalInfo.email}</span>
      </div>
      <div className="cv-links">
        {personalInfo.linkedin && (
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cv-header-link">
            LinkedIn
          </a>
        )}
        {personalInfo.github && (
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cv-header-link">
            GitHub
          </a>
        )}
        {personalInfo.cvPage && (
          <a href={personalInfo.cvPage} target="_blank" rel="noopener noreferrer" className="cv-header-link">
            CV Page
          </a>
        )}
      </div>
    </header>
  );
}
