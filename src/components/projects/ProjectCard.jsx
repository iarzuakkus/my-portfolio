import ProjectMedia from "./ProjectMedia";

export default function ProjectCard({ project, selected, onSelect }) {
  return (
    <article className={`project-card is-${project.tone}${selected ? " is-selected" : ""}`}>
      <button type="button" className="project-card-select" onClick={onSelect}>
        <ProjectMedia project={project} compact />
        <span className="project-card-copy">
          <strong>{project.title}</strong>
          <span>{project.description}</span>
        </span>
      </button>

      {project.github ? (
        <a className="project-card-action" href={project.github} target="_blank" rel="noreferrer">
          GitHub'da incele
        </a>
      ) : (
        <button className="project-card-action" type="button" onClick={onSelect}>
          Detayları gör
        </button>
      )}
    </article>
  );
}
