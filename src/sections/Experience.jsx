import { useState } from "react";
import ExperienceCard from "../components/experience/ExperienceCard";
import { experienceItems } from "../data/experienceData";
import { useLanguage } from "../i18n/LanguageContext";

export default function Experience() {
  const { t, localize } = useLanguage();
  const localizedExperienceItems = localize(experienceItems);
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section
      className={`section section-experience${expandedId ? " has-expanded" : ""}`}
      id="experience"
    >
      <div className="shell experience-shell">
        <header className="experience-heading">
          <h2>
          {t("Deneyim.").replace(".", "")}<span>.</span>
          </h2>
          <p>
            {t("Yazılım, veri ve tasarım alanlarında edindiğim deneyimleri gerçek problemlere dokunan çalışmalara dönüştürüyorum.")}
          </p>
        </header>

        <div className="experience-timeline">
          {localizedExperienceItems.map((item) => (
            <ExperienceCard
              item={item}
              expanded={expandedId === item.id}
              key={item.id}
              onToggle={() => {
                setExpandedId((current) => (current === item.id ? null : item.id));
              }}
            />
          ))}
        </div>

        <a className="experience-projects-link" href="#work">
          <IconText />
          <span>{t("Bu deneyimlerden doğan çalışmaları Projelerim sayfasında inceleyebilirsin.")}</span>
          <strong>{t("Projelerime git →")}</strong>
        </a>
      </div>
    </section>
  );
}

function IconText() {
  return <span aria-hidden="true">✦</span>;
}
