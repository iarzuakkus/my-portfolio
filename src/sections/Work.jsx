// src/sections/Work.jsx
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectWelcome from "../components/projects/ProjectWelcome";
import { projects } from "../data/projectData";

export default function Work() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedId) ?? null;

  useEffect(() => {
    const resetProjectSelection = () => {
      if (window.location.hash === "#work") setSelectedId(null);
    };

    window.addEventListener("hashchange", resetProjectSelection);
    return () => window.removeEventListener("hashchange", resetProjectSelection);
  }, []);

  return (
    <section className="section section-projects" id="work">
      <div className="shell projects-shell">
        <header className="projects-mobile-heading">
          <h2>
            Projelerim<span>.</span>
          </h2>
          <p>Yazılım, veri, yapay zekâ ve tasarım alanlarında ürettiğim çalışmaları burada bulabilirsin.</p>
        </header>

        <div className="projects-intro-grid">
          <header className="projects-heading">
            <h2>
              Projelerim<span>.</span>
            </h2>
            <p>
              Yazılım, veri, yapay zekâ ve tasarım alanlarında ürettiğim çalışmaları burada
              bulabilirsin.
            </p>
          </header>

          {selectedProject ? (
            <article className={`featured-project is-${selectedProject.tone}`}>
              <div className="featured-project-copy">
                <span className="featured-project-label">
                  {selectedProject.badgeLogo ? (
                    <img
                      className="featured-project-label-logo"
                      src={selectedProject.badgeLogo}
                      alt=""
                      aria-hidden="true"
                    />
                  ) : (
                    <Icon icon={selectedProject.icon} aria-hidden="true" />
                  )}
                  Seçili proje
                </span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <span className="featured-project-category">{selectedProject.category}</span>
                <div className="featured-project-meta">
                  <ul>
                    {selectedProject.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {selectedProject.github && (
                    <a
                      className="featured-project-github"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${selectedProject.title} GitHub deposunu aç`}
                      title="GitHub deposunu aç"
                    >
                      <Icon icon="mdi:github" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
              <ProjectMedia project={selectedProject} />
            </article>
          ) : (
            <ProjectWelcome />
          )}
        </div>

        <section className="projects-browser" aria-labelledby="projects-browser-title">
          <header className="projects-browser-heading">
            <span>
              <Icon icon="griddy-icons:folder-code" aria-hidden="true" />
              <span>
                <h3 id="projects-browser-title">
                  <span className="projects-browser-title-default">Projeler</span>
                  <span className="projects-browser-title-mobile">Diğer Projeler</span>
                </h3>
                <small>İncelemek istediğin projeyi seçebilirsin.</small>
              </span>
            </span>
          </header>

          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard
                project={project}
                selected={project.id === selectedId}
                key={project.id}
                onSelect={() => setSelectedId(project.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
