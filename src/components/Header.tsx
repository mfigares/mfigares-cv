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
    </header>
  );
}
