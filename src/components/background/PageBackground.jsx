// File: src/components/background/PageBackground.jsx

import "./page-background.css";
import "./variants/dots.css";
import "./variants/grid.css";


/*
  PageBackground
  - Wraps a page
  - Applies a background variant via className
*/
export default function PageBackground({ variant = "dots", children }) {
  return (
    <div className="page-background">
      {/* Decorative background layer */}
      <div className={`background-layer bg-${variant}`} />

      {/* Real page content */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
