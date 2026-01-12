// File: src/components/background/PageBackground.jsx

import "./variants/dots.css";

export default function PageBackground({ children }) {
  return (
    <>
      {/* Fixed decorative background (does not affect layout/scroll) */}
      <div className="page-background" aria-hidden="true">
        <div className="dot-layer" />
      </div>

      {/* Real page content */}
      {children}
    </>
  );
}
