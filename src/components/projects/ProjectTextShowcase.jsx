import { Icon } from "@iconify/react";

export default function ProjectTextShowcase({ project }) {
  const showcase = project.showcase;

  if (!showcase) return null;

  return (
    <aside className="project-github-showcase" aria-label={showcase.title}>
      <div className="project-github-showcase-heading">
        <span aria-hidden="true">
          <Icon icon="mdi:github" />
        </span>
        <div>
          <small>DAHA FAZLA PROJE</small>
          <h4>{showcase.title}</h4>
        </div>
      </div>

      <p>{showcase.description}</p>

      <ul aria-label="GitHub çalışma alanları">
        {showcase.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <a
        href={showcase.href}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub hesabımı incele"
        title="GitHub hesabımı incele"
      >
        <Icon icon="mdi:github" aria-hidden="true" />
      </a>
    </aside>
  );
}
