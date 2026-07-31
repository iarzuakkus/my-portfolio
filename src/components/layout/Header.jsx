import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { portfolio } from "../../data/portfolioData";

const navigation = [
  { label: "Ana Sayfa", href: "#top", sections: ["top"], icon: "fluent:home-16-regular" },
  {
    label: "Hakkımda",
    href: "#about",
    sections: ["about"],
    icon: "mage:user",
  },
  {
    label: "Deneyim",
    href: "#experience",
    sections: ["experience"],
    icon: "mdi:work-outline",
  },
  {
    label: "Projelerim",
    href: "#work",
    sections: ["work"],
    icon: "griddy-icons:folder-code",
  },
  {
    label: "Yetkinliklerim",
    href: "#capabilities",
    sections: ["capabilities"],
    icon: "mingcute:star-line",
  },
  {
    label: "İletişim",
    href: "#contact",
    sections: ["contact"],
    icon: "material-symbols:mail-outline-rounded",
  },
];

export default function Header() {
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
            ✳
          </span>
          <span>{portfolio.person.shortName}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " is-open" : ""}`}
          aria-label="Ana menü"
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
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
          <div className="mobile-nav-actions" aria-label="Sosyal bağlantılar">
            <a
              href={portfolio.socialLinks[1].href}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon icon="ri:linkedin-fill" aria-hidden="true" />
              <span>LinkedIn</span>
              <Icon className="mobile-external-icon" icon="fluent:arrow-up-right-16-regular" />
            </a>
            <a
              href={portfolio.socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <Icon icon="mdi:github" aria-hidden="true" />
              <span>GitHub</span>
              <Icon className="mobile-external-icon" icon="fluent:arrow-up-right-16-regular" />
            </a>
            <a className="mobile-cv-link" href="/resume.pdf" download onClick={closeMenu}>
              <Icon icon="pepicons-pencil:cv" aria-hidden="true" />
              <span>CV’mi İndir</span>
            </a>
          </div>
        </nav>

        <div className="header-actions" aria-label="Hızlı bağlantılar">
          <a className="download-link" href="/resume.pdf" download aria-label="CV indir">
            <Icon icon="pepicons-pencil:cv" aria-hidden="true" />
          </a>
          <a
            href={portfolio.socialLinks[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon icon="ri:linkedin-fill" aria-hidden="true" />
          </a>
          <a
            href={portfolio.socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
