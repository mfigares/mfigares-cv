import { Entry as EntryType, EducationEntry, ResearchEntry } from '../data/types';

type AnyEntry = EntryType | EducationEntry | ResearchEntry;

interface EntryProps {
  entry: AnyEntry;
}

export function Entry({ entry }: EntryProps) {
  const educationEntry = entry as EducationEntry;
  const researchEntry = entry as ResearchEntry;

  return (
    <div className="cv-entry">
      <div className="cv-entry-header">
        <div className="cv-entry-title-block">
          <span className="cv-entry-title">{entry.title}</span>
          {entry.organization && (
            <>
              , <span className="cv-entry-org">{entry.organization}</span>
            </>
          )}
          {entry.organizationType && (
            <span className="cv-entry-type"> · {entry.organizationType}</span>
          )}
        </div>
        <span className="cv-entry-date">{entry.dateRange}</span>
      </div>

      <div className="cv-entry-content">
        {researchEntry.department && (
          <div className="cv-entry-department">{researchEntry.department}</div>
        )}
        {entry.location && <div className="cv-entry-location">{entry.location}</div>}
        {entry.supervisor && (
          <div className="cv-entry-supervisor">Supervisor: {entry.supervisor}</div>
        )}
        {entry.link && (
          <a href={entry.link} className="cv-link" target="_blank" rel="noopener noreferrer">
            {entry.link}
          </a>
        )}

        {educationEntry.degree && (
          <div className="cv-entry-degree">
            {educationEntry.degree}
            {educationEntry.field && `, ${educationEntry.field}`}
          </div>
        )}
        {educationEntry.thesis && (
          <div className="cv-entry-thesis">
            <strong>Degree Thesis:</strong> {educationEntry.thesis}
          </div>
        )}

        {researchEntry.researchFocus && (
          <div className="cv-entry-focus">
            <strong>Research focus:</strong> {researchEntry.researchFocus}
          </div>
        )}

        {entry.description && <div className="cv-entry-description">{entry.description}</div>}

        {entry.note && <div className="cv-entry-note">{entry.note}</div>}

        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="cv-entry-bullets">
            {entry.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
