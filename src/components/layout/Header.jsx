import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { portfolio } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";

const navigation = [
  { label: "Ana Sayfa", englishLabel: "Home", href: "#top", sections: ["top"], icon: "fluent:home-16-regular" },
  {
    label: "Hakkımda",
    englishLabel: "About",
    href: "#about",
    sections: ["about"],
    icon: "mage:user",
  },
  {
    label: "Deneyim",
    englishLabel: "Experience",
    href: "#experience",
    sections: ["experience"],
    icon: "mdi:work-outline",
  },
  {
    label: "Projelerim",
    englishLabel: "Projects",
    href: "#work",
    sections: ["work"],
    icon: "griddy-icons:folder-code",
  },
  {
    label: "İletişim",
    englishLabel: "Contact",
    href: "#contact",
    sections: ["contact"],
    icon: "material-symbols:mail-outline-rounded",
  },
];

export default function Header() {
  const { language, setLanguage, t, localize } = useLanguage();
  const localizedPortfolio = localize(portfolio);
  const cvHref = language === "en"
    ? "/Ilayda_Arzu_Akkus_CV_EN.pdf"
    : "/Ilayda-Arzu-Akkus-CV.pdf";
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    window.location.hash.slice(1) || "top",
  );
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    let animationFrame = 0;

    const updateActiveSection = () => {
      const readingLine =
        window.scrollY + Math.min(window.innerHeight * 0.34, 260);
      const currentSection =
        [...sections]
          .reverse()
          .find((section) => section.offsetTop <= readingLine) ?? sections[0];

      if (!currentSection) return;

      const sectionId = currentSection.id;
      setActiveSection((current) => {
        if (current === sectionId) return current;
        window.history.replaceState(null, "", `#${sectionId}`);
        return sectionId;
      });
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <Icon icon="hugeicons:flower" />
          </span>
          <span>{localizedPortfolio.person.shortName}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? t("Menüyü kapat") : t("Menüyü aç")}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " is-open" : ""}`}
          aria-label={t("Ana menü")}
        >
          {navigation.map((item) => (
            <a
              className={item.sections.includes(activeSection) ? "is-active" : ""}
              key={item.href}
              href={item.href}
              aria-current={item.sections.includes(activeSection) ? "location" : undefined}
              onClick={() => {
                setActiveSection(item.sections[0]);
                closeMenu();
              }}
            >
              <Icon icon={item.icon} aria-hidden="true" />
              <span className="nav-label">{language === "en" ? item.englishLabel : item.label}</span>
            </a>
          ))}
          <div className="mobile-nav-actions" aria-label={t("Sosyal bağlantılar")}>
            <a
              href={localizedPortfolio.socialLinks[1].href}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon icon="ri:linkedin-fill" aria-hidden="true" />
              <span>LinkedIn</span>
              <Icon className="mobile-external-icon" icon="fluent:arrow-up-right-16-regular" />
            </a>
            <a
              href={localizedPortfolio.socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon icon="mdi:github" aria-hidden="true" />
              <span>GitHub</span>
              <Icon className="mobile-external-icon" icon="fluent:arrow-up-right-16-regular" />
            </a>
            <a
              className="mobile-cv-link"
              href={cvHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon icon="pepicons-pencil:cv" aria-hidden="true" />
              <span>{t("CV’mi Görüntüle")}</span>
            </a>
          </div>
          <div className="mobile-language-switch" aria-label={t("Dil seçimi")}>
            {['tr', 'en'].map((option) => (
              <button
                className={language === option ? "is-active" : ""}
                type="button"
                aria-pressed={language === option}
                aria-label={t(option === "tr" ? "Türkçe" : "İngilizce")}
                key={option}
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        <div className="header-actions" aria-label={t("Hızlı bağlantılar")}>
          <a
            className="download-link"
            href={cvHref}
            target="_blank"
            rel="noreferrer"
            aria-label={t("CV görüntüle")}
          >
            <Icon icon="pepicons-pencil:cv" aria-hidden="true" />
          </a>
          <a
            href={localizedPortfolio.socialLinks[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="ri:linkedin-fill" aria-hidden="true" />
          </a>
          <a
            href={localizedPortfolio.socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" aria-hidden="true" />
          </a>
          <div className="language-switch" aria-label={t("Dil seçimi")}>
            {['tr', 'en'].map((option) => (
              <button
                className={language === option ? "is-active" : ""}
                type="button"
                aria-pressed={language === option}
                aria-label={t(option === "tr" ? "Türkçe" : "İngilizce")}
                key={option}
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
