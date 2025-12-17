// File: src/components/hero/Hero.jsx

import "./hero.css";
import PageBackground from "../background/PageBackground";

import heroImage from "../../assets/images/hero-profile.png";
import leftWave1 from "../../assets/icons/leftwave1.svg";
import leftWave2 from "../../assets/icons/leftwave2.svg";
import rightWave from "../../assets/icons/rightwave.svg";
import shine from "../../assets/icons/shine.svg";

export default function Hero() {
  return (
    /* =========================================================
       HERO BACKGROUND
       - dots background is applied here
       - hero.css should NOT contain background styles
    ========================================================= */
    <PageBackground variant="dots">
      <section className="hero-section" id="hero">

        {/* Decorative elements (hero-only) */}
        <img src={shine} className="decor-shine shine-1" alt="" />
        <img src={shine} className="decor-shine shine-2" alt="" />

        <img src={leftWave1} className="decor-wave wave-1" alt="" />
        <img src={leftWave2} className="decor-wave wave-2" alt="" />
        <img src={rightWave} className="decor-wave wave-3" alt="" />

        <div className="hero-inner">

          {/* LEFT TEXT */}
          <div className="hero-text">
            <div className="hero-row">
              <span className="hero-line yellow">Merhaba</span>
              <span className="hero-line purple">Ben Arzu</span>
            </div>

            <div className="hero-line green hero-wide">
              <span>Bilgisayar Mühendisiyim</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="İ. Arzu Akkuş" />
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
