// File: C:\Users\ASUS\my-portfolio\src\components\header\Header.jsx
import { useState } from "react";
import "./header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <HeaderLeft />
        
        {/* Mobilde sağ tarafta görünecek Hamburger Butonu */}
        <button 
          className={`hamburger ${isOpen ? "is-active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menü durumunu HeaderRight'a gönderiyoruz */}
        <HeaderRight isOpen={isOpen} />
      </div>
    </header>
  );
}