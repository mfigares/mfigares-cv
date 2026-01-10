import { useRef, useState, useMemo, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CVDocument, CVSelector, ExportButton, ThemeToggle } from './components';
import { personalInfo, techCV, biologyCV, sharedSections, CV } from './data';
import './App.css';
import './styles/cv.css';
import './styles/print.css';

const cvs: CV[] = [techCV, biologyCV];

function App() {
  const [selectedCVId, setSelectedCVId] = useState<CV['id']>('tech');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const cvRef = useRef<HTMLDivElement>(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const baseCV = cvs.find((cv) => cv.id === selectedCVId) || techCV;

  // Merge the selected CV with shared sections
  const selectedCV = useMemo<CV>(() => ({
    ...baseCV,
    sections: [...baseCV.sections, ...sharedSections],
  }), [baseCV]);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `${selectedCV.label} - ${personalInfo.name}`,
  });

  return (
    <div className="app">
      <div className="app-controls">
        <CVSelector cvs={cvs} selectedId={selectedCVId} onSelect={setSelectedCVId} />
        <div className="app-controls-right">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <ExportButton onClick={handlePrint} />
        </div>
      </div>
      <CVDocument ref={cvRef} cv={selectedCV} personalInfo={personalInfo} />
    </div>
  );
}

export default App;
