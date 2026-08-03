import { useState } from "react";
import ExperienceCard from "../components/experience/ExperienceCard";
import { experienceItems } from "../data/experienceData";

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section
      className={`section section-experience${expandedId ? " has-expanded" : ""}`}
      id="experience"
    >
      <div className="shell experience-shell">
        <header className="experience-heading">
          <h2>
          Deneyim<span>.</span>
          </h2>
          <p>
            Yazılım, veri ve tasarım alanlarında edindiğim deneyimleri gerçek problemlere
            dokunan çalışmalara dönüştürüyorum.
          </p>
        </header>

        <div className="experience-timeline">
          {experienceItems.map((item) => (
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
          <span>Bu deneyimlerden doğan çalışmaları Projelerim sayfasında inceleyebilirsin.</span>
          <strong>Projelerime git →</strong>
        </a>
      </div>
    </section>
  );
}

function IconText() {
  return <span aria-hidden="true">✦</span>;
}
