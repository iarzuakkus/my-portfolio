import { useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../i18n/LanguageContext";

function CourseMark({ course }) {
  const [hasError, setHasError] = useState(false);

  if (course.icon) {
    return (
      <span className="sector-course-mark" aria-hidden="true">
        <Icon icon={course.icon} />
      </span>
    );
  }

  return (
    <span className="sector-course-mark has-logo">
      {!hasError && (
        <img
          src={course.logo}
          alt={course.logoAlt}
          onError={() => setHasError(true)}
        />
      )}
      {hasError && <span>{course.fallback}</span>}
    </span>
  );
}

function openProject(projectId) {
  window.history.replaceState(null, "", "#work");
  window.dispatchEvent(
    new CustomEvent("portfolio:select-project", { detail: { id: projectId } }),
  );
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CourseCard({ course, expanded, condensed, onToggle }) {
  const { t } = useLanguage();
  const detailsId = `${course.id}-details`;

  return (
    <article
      className={[
        "sector-course-card",
        `is-${course.accent}`,
        expanded ? "is-expanded" : "",
        condensed ? "is-condensed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        className="sector-course-toggle"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={detailsId}
      >
        <CourseMark course={course} />

        <span className="sector-course-heading">
          <strong>{course.title}</strong>
          <span className="sector-course-facts">
            <span className="sector-course-provider">
              <Icon icon="mingcute:building-2-line" aria-hidden="true" />
              {course.provider}
            </span>
            <span aria-hidden="true">•</span>
            <span className="sector-course-date">
              <Icon icon="lets-icons:date-today" aria-hidden="true" />
              {course.date}
            </span>
          </span>
          {expanded && (
            <span
              className="sector-course-skills-inline"
              role="list"
              aria-label={`${course.title} ${t("kazanımları")}`}
            >
              {course.skills.map((skill) => (
                <span key={skill.label} role="listitem">
                  <Icon icon={skill.icon} aria-hidden="true" />
                  <span>{skill.label}</span>
                </span>
              ))}
            </span>
          )}
        </span>

        <Icon
          className="sector-course-chevron"
          icon="solar:alt-arrow-down-linear"
          aria-hidden="true"
        />
      </button>

      <div className="sector-course-details" id={detailsId} aria-hidden={!expanded}>
        <div className="sector-course-main">
          <p className="sector-course-description">{course.description}</p>
        </div>

        <div className="sector-course-outcome">
          <Icon icon={course.outcomeIcon} aria-hidden="true" />
          <span>
            <strong>{course.outcomeLabel}</strong>
            <small>{course.outcome}</small>
          </span>
          {course.projectId && (
            <button
              className="sector-course-project-link"
              type="button"
              onClick={() => openProject(course.projectId)}
              aria-label={course.projectLabel}
              title={course.projectLabel}
            >
              <Icon icon="lucide:arrow-right" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
