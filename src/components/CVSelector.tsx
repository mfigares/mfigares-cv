import { CV } from '../data/types';

interface CVSelectorProps {
  cvs: CV[];
  selectedId: CV['id'];
  onSelect: (id: CV['id']) => void;
}

export function CVSelector({ cvs, selectedId, onSelect }: CVSelectorProps) {
  return (
    <div className="cv-selector">
      <label htmlFor="cv-select">Select CV: </label>
      <select
        id="cv-select"
        value={selectedId}
        onChange={(e) => onSelect(e.target.value as CV['id'])}
      >
        {cvs.map((cv) => (
          <option key={cv.id} value={cv.id}>
            {cv.label}
          </option>
        ))}
      </select>
    </div>
  );
}
