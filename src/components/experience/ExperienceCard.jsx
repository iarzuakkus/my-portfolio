import { Icon } from "@iconify/react";

export default function ExperienceCard({ item, expanded, onToggle }) {
  const detailId = `experience-detail-${item.id}`;

  return (
    <article className={`experience-card is-${item.tone}${expanded ? " is-expanded" : ""}`}>
      <span className="experience-timeline-icon" aria-hidden="true">
        <Icon icon={item.icon} />
      </span>

      <button
        className="experience-card-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={detailId}
        onClick={onToggle}
      >
        <span className="experience-card-summary">
          <span className="experience-card-title-row">
            <strong>{item.title}</strong>
            <span>{item.organization}</span>
            <span>{item.period}</span>
            <span>{item.location}</span>
          </span>

          <span className="experience-tag-list" aria-label="Kullanılan teknolojiler ve yetkinlikler">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </span>

        <span className="experience-toggle-label">
          {expanded ? "Detayı kapat" : "Detayı aç"}
          <Icon icon="tabler:chevron-down" aria-hidden="true" />
        </span>
      </button>

      <div className="experience-card-details" id={detailId} aria-hidden={!expanded}>
        <p>{item.description}</p>
        <a href={item.actionHref} tabIndex={expanded ? 0 : -1}>
          {item.actionLabel}
          <Icon icon="tabler:arrow-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
