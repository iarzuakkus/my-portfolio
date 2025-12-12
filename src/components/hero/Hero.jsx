// src/components/hero/Hero.jsx

import "./hero.css";
import heroImage from "../../assets/images/hero-profile.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* LEFT TEXT */}
        <div className="hero-text">

          {/* 1. SATIR */}
          <div className="hero-row">
            <span className="hero-line yellow">Merhaba</span>
            <span className="hero-line purple">Ben Arzu</span>
          </div>

          {/* 2. SATIR */}
          <div className="hero-line green hero-wide">
            <span>Bilgisayar</span>
            <span>Mühendisiyim</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="İ. Arzu Akkuş" />
        </div>
      </div>
    </section>
  );
}
