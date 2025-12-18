// File: src/components/background/PageBackground.jsx

import "./page-background.css";
import "./variants/dots.css";
import "./variants/grid.css";

export default function PageBackground({ variant = "dots", children }) {
  return (
    <div className="page-background">
      {/* Background layer (FULL SIZE OF PARENT) */}
      <div className={`background-layer bg-${variant}`} />

      {/* İçerik varsa render edilir */}
      {children && (
        <div className="page-content">
          {children}
        </div>
      )}
    </div>
  );
}
