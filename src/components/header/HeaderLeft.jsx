// src/components/header/HeaderLeft.jsx

export default function HeaderLeft() {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-left">
      {/* Name / Logo → HERO’ya scroll */}
      <button
        type="button"
        className="name-box"
        onClick={scrollToHero}
        aria-label="Go to hero section"
      >
        <span className="name-text">İ. Arzu Akkuş</span>
      </button>

      {/* Menu button */}
      <button
        type="button"
        className="btn btn-icon purple menu-btn"
        aria-label="Menu"
      >
        ☰
      </button>
    </div>
  );
}
