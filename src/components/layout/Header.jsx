import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { portfolio } from "../../data/portfolioData";

const navigation = [
  { label: "Ana Sayfa", href: "#top", sections: ["top"], icon: "fluent:home-16-regular" },
  {
    label: "Hakkımda",
    href: "#about",
    sections: ["about", "capabilities"],
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
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!visibleSection) return;

        const sectionId = visibleSection.target.id;
        setActiveSection(sectionId);
        window.history.replaceState(null, "", `#${sectionId}`);
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0, 0.15, 0.35],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
              {item.label}
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
              <strong>CV’mi İndir</strong>
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
