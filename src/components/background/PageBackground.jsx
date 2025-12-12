// src/components/background/PageBackground.jsx

import "./page-background.css";

export default function PageBackground({ children }) {
  return (
    <div className="page-background">
      <div className="background-layer" />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
