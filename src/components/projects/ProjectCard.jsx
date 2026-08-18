import ProjectMedia from "./ProjectMedia";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ProjectCard({ project, selected, onSelect }) {
  const { t } = useLanguage();
  return (
    <article className={`project-card is-${project.tone}${selected ? " is-selected" : ""}`}>
      <button type="button" className="project-card-select" onClick={onSelect}>
        <ProjectMedia project={project} compact />
        <span className="project-card-copy">
          <strong>{project.title}</strong>
          <span>{project.description}</span>
        </span>
      </button>

      <button className="project-card-action" type="button" onClick={onSelect}>
        {t("Detayları gör")}
      </button>
    </article>
  );
}
