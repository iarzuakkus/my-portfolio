// File: C:\Users\ASUS\my-portfolio\src\components\header\HeaderLeft.jsx
export default function HeaderLeft() {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-left">
      <button
        type="button"
        className="name-box"
        onClick={scrollToHero}
        aria-label="Go to hero section"
      >
        <span className="name-text">İ. Arzu Akkuş</span>
      </button>
    </div>
  );
}