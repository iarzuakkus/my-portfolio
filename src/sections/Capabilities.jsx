import { useState } from "react";
import { Icon } from "@iconify/react";
import { capabilityProfile } from "../data/portfolioData";

function SkillIcon({ icon, tone = "violet" }) {
  return (
    <span className={`skills-icon skills-icon--${tone}`} aria-hidden="true">
      <Icon icon={icon} />
    </span>
  );
}

function TechnologyCard({ group, index, isExpanded, onToggle }) {
  const contentId = `technology-card-${index}`;

  return (
    <article
      className={`skills-tech-card skills-tech-card--${group.tone}${isExpanded ? " is-expanded" : ""}`}
    >
      <button
        className="skills-card-toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={onToggle}
      >
        <span className="skills-card-heading">
          <SkillIcon icon={group.icon} tone={group.tone} />
          <h3>{group.title}</h3>
        </span>
        <Icon className="skills-card-chevron" icon="tabler:chevron-down" aria-hidden="true" />
      </button>
      <div className="skills-card-content" id={contentId}>
        <ul className="skills-chip-list" aria-label={`${group.title} yetenekleri`}>
          {group.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Capabilities({ embedded = false }) {
  const [expandedTechnology, setExpandedTechnology] = useState(null);

  const content = (
    <div className="skills-shell">
        <div className="skills-intro-grid">
          <div className="skills-copy">
            <h2>
              Yetkinliklerim<span>.</span>
            </h2>
            <p>{capabilityProfile.introduction}</p>
          </div>

          <article className="skills-focus-panel">
            <h3>Odak Alanlarım</h3>
            <div className="skills-focus-grid">
              {capabilityProfile.focusAreas.map((area) => (
                <div className="skills-focus-item" key={area.title}>
                  <SkillIcon icon={area.icon} tone={area.tone} />
                  <div>
                    <h4>{area.title}</h4>
                    <p>{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="skills-divider" aria-hidden="true">
          <span />
          <h2>Kullandığım Teknolojiler</h2>
          <span />
        </div>

        <div className="skills-tech-grid">
          {capabilityProfile.technologyGroups.map((group, index) => (
            <TechnologyCard
              group={group}
              index={index}
              isExpanded={expandedTechnology === index}
              key={group.title}
              onToggle={() => {
                setExpandedTechnology((current) => (current === index ? null : index));
              }}
            />
          ))}
        </div>

        <div className="skills-bottom-grid">
          <article className="skills-info-card skills-language-card">
            <header className="skills-card-heading">
              <SkillIcon icon="ph:globe-simple-bold" tone="blue" />
              <h3>Dil</h3>
            </header>
            <ul className="skills-chip-list">
              {capabilityProfile.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </article>

          <article className="skills-info-card skills-personal-card">
            <header className="skills-card-heading">
              <SkillIcon icon="material-symbols:star-rounded" />
              <h3>Kişisel Yetenekler</h3>
            </header>
            <ul className="skills-chip-list">
              {capabilityProfile.personalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="skills-info-card skills-approach-card">
            <header className="skills-card-heading">
              <SkillIcon icon="mingcute:target-line" tone="mint" />
              <h3>Çalışma Yaklaşımım</h3>
            </header>
            <ul className="skills-approach-list">
              {capabilityProfile.workingApproach.map((item) => (
                <li key={item}>
                  <Icon icon="material-symbols:check-circle-outline-rounded" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
    </div>
  );

  if (embedded) {
    return (
      <article
        className="about-page about-skills-page"
        id="capabilities"
        aria-label="Yeteneklerim"
      >
        {content}
      </article>
    );
  }

  return (
    <section className="section section-capabilities" id="capabilities">
      <div className="shell">{content}</div>
    </section>
  );
}
