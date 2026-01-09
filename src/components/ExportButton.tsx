interface ExportButtonProps {
  onClick: () => void;
}

export function ExportButton({ onClick }: ExportButtonProps) {
  return (
    <button className="export-button" onClick={onClick}>
      Export to PDF
    </button>
  );
}
