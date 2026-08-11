import { Icon } from "@iconify/react";

function openProject(event, projectId) {
  if (!projectId) return;

  event.preventDefault();
  window.history.replaceState(null, "", "#work");
  window.dispatchEvent(
    new CustomEvent("portfolio:select-project", { detail: { id: projectId } }),
  );
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
            <span>
              <Icon icon="ph:buildings" aria-hidden="true" />
              {item.organization}
            </span>
            <span>
              <Icon icon="solar:calendar-linear" aria-hidden="true" />
              {item.period}
            </span>
            <span>
              <Icon icon="solar:map-point-linear" aria-hidden="true" />
              {item.location}
            </span>
          </span>

          <span className="experience-tag-list" aria-label="Kullanılan teknolojiler ve yetkinlikler">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </span>

        <span
          className="experience-toggle-label"
          aria-label={expanded ? "Detayı kapat" : "Detayı aç"}
        >
          <Icon icon="tabler:chevron-down" aria-hidden="true" />
        </span>
      </button>

      <div className="experience-card-details" id={detailId} aria-hidden={!expanded}>
        <p>{item.description}</p>
        <a
          href={item.actionHref}
          tabIndex={expanded ? 0 : -1}
          onClick={(event) => openProject(event, item.projectId)}
        >
          {item.actionLabel}
          <Icon icon="tabler:arrow-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
