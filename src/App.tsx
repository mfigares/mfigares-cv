import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CVDocument, CVSelector, ExportButton } from './components';
import { personalInfo, techCV, biologyCV, generalCV, CV } from './data';
import './App.css';
import './styles/cv.css';
import './styles/print.css';

const cvs: CV[] = [techCV, biologyCV, generalCV];

function App() {
  const [selectedCVId, setSelectedCVId] = useState<CV['id']>('tech');
  const cvRef = useRef<HTMLDivElement>(null);

  const selectedCV = cvs.find((cv) => cv.id === selectedCVId) || techCV;

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `${selectedCV.label} - ${personalInfo.name}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 15mm 20mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
  });

  return (
    <div className="app">
      <div className="app-controls">
        <CVSelector cvs={cvs} selectedId={selectedCVId} onSelect={setSelectedCVId} />
        <ExportButton onClick={handlePrint} />
      </div>
      <CVDocument ref={cvRef} cv={selectedCV} personalInfo={personalInfo} />
    </div>
  );
}

export default App;
