import { PublicationEntry } from '../data/types';

interface PublicationProps {
  publication: PublicationEntry;
}

function formatAuthors(authors: string): React.ReactNode {
  // Replace **text** with bold
  const parts = authors.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function getTypeLabel(type: PublicationEntry['type']): string {
  switch (type) {
    case 'project':
      return 'Project';
    case 'poster':
      return 'Poster';
    case 'oral':
      return 'Oral Presentation';
    default:
      return type;
  }
}

export function Publication({ publication }: PublicationProps) {
  return (
    <div className="cv-publication">
      <div className="cv-publication-header">
        <span className="cv-publication-type">{getTypeLabel(publication.type)}</span>
        <span className="cv-entry-date">{publication.date}</span>
      </div>
      <div className="cv-publication-content">
        <div className="cv-publication-authors">{formatAuthors(publication.authors)}</div>
        <div className="cv-publication-title">"{publication.title}"</div>
        {publication.venue && <div className="cv-publication-venue">{publication.venue}</div>}
        {publication.link && (
          <a href={publication.link} className="cv-link" target="_blank" rel="noopener noreferrer">
            {publication.link}
          </a>
        )}
        {publication.note && <div className="cv-entry-note">{publication.note}</div>}
      </div>
    </div>
  );
}
