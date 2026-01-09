import {
  CVSection,
  Entry as EntryType,
  EducationEntry,
  ResearchEntry,
  SkillGroup as SkillGroupType,
  PublicationEntry,
  TrainingEntry,
  FundingEntry,
  SimpleListItem,
} from '../data/types';
import { Entry } from './Entry';
import { SkillGroup } from './SkillGroup';
import { Publication } from './Publication';

interface SectionProps {
  section: CVSection;
}

export function Section({ section }: SectionProps) {
  const renderContent = () => {
    const { type, content } = section;

    // Profile - string content
    if (type === 'profile' && typeof content === 'string') {
      return <div className="cv-profile-text">{content}</div>;
    }

    // Experience, Education, Research, Teaching - Entry-based
    if (['experience', 'education', 'research', 'teaching'].includes(type)) {
      const entries = content as (EntryType | EducationEntry | ResearchEntry)[];
      return entries.map((entry, index) => <Entry key={index} entry={entry} />);
    }

    // Skills - SkillGroup based
    if (type === 'skills') {
      const groups = content as SkillGroupType[];
      return groups.map((group, index) => <SkillGroup key={index} group={group} />);
    }

    // Publications
    if (type === 'publications') {
      const pubs = content as PublicationEntry[];
      return pubs.map((pub, index) => <Publication key={index} publication={pub} />);
    }

    // Training/Certifications
    if (type === 'training' || type === 'certifications') {
      const items = content as TrainingEntry[];
      return items.map((item, index) => (
        <div key={index} className="cv-training-item">
          <div className="cv-training-header">
            <span className="cv-training-name">{item.name}</span>
            <span className="cv-entry-date">{item.date}</span>
          </div>
          {item.description && <div className="cv-training-desc">{item.description}</div>}
        </div>
      ));
    }

    // Funding
    if (type === 'funding') {
      const fundings = content as FundingEntry[];
      return fundings.map((funding, index) => (
        <div key={index} className="cv-funding">
          <div className="cv-funding-source">
            <strong>{funding.source}</strong>
          </div>
          {funding.link && (
            <a href={funding.link} className="cv-link" target="_blank" rel="noopener noreferrer">
              {funding.link}
            </a>
          )}
          <ul className="cv-funding-awards">
            {funding.awards.map((award, i) => (
              <li key={i}>
                {award.id} | {award.dateRange}
                {award.note && <span className="cv-funding-note"> ({award.note})</span>}
              </li>
            ))}
          </ul>
        </div>
      ));
    }

    // Simple list items (languages, activities, strengths)
    if (['languages', 'activities', 'strengths'].includes(type)) {
      const items = content as SimpleListItem[];
      return (
        <ul className="cv-simple-list">
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.label}</strong>
              {item.detail && <span> - {item.detail}</span>}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <section className="cv-section">
      <h2 className="cv-section-header">{section.title}</h2>
      <div className="cv-section-content">{renderContent()}</div>
    </section>
  );
}
