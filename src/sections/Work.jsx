// src/sections/Work.jsx
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectMedia from "../components/projects/ProjectMedia";
import ProjectWelcome from "../components/projects/ProjectWelcome";
import { projects } from "../data/projectData";
import { useLanguage } from "../i18n/LanguageContext";

export default function Work() {
  const { t, localize } = useLanguage();
  const localizedProjects = localize(projects);
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = localizedProjects.find((project) => project.id === selectedId) ?? null;
  const showProjectOverview = () => setSelectedId(null);

  useEffect(() => {
    const resetProjectSelection = () => {
      if (window.location.hash === "#work") setSelectedId(null);
    };

    const selectProject = (event) => {
      const projectId = event.detail?.id;
      if (localizedProjects.some((project) => project.id === projectId)) {
        setSelectedId(projectId);
      }
    };

    window.addEventListener("hashchange", resetProjectSelection);
    window.addEventListener("portfolio:select-project", selectProject);
    return () => {
      window.removeEventListener("hashchange", resetProjectSelection);
      window.removeEventListener("portfolio:select-project", selectProject);
    };
  }, [localizedProjects]);

  return (
    <section className="section section-projects" id="work">
      <div className="shell projects-shell">
        <header className="projects-mobile-heading">
          <h2>
            <button
              className="projects-heading-reset"
              type="button"
              onClick={showProjectOverview}
              aria-label={t("Projelerin başlangıç görünümünü göster")}
            >
              {t("Projelerim.").replace(".", "")}<span>.</span>
            </button>
          </h2>
          <p>{t("Yazılım, veri, yapay zekâ ve tasarım alanlarında ürettiğim çalışmaları burada bulabilirsin.")}</p>
        </header>

        <div className="projects-intro-grid">
          <header className="projects-heading">
            <h2>
              <button
                className="projects-heading-reset"
                type="button"
                onClick={showProjectOverview}
                aria-label={t("Projelerin başlangıç görünümünü göster")}
              >
                {t("Projelerim.").replace(".", "")}<span>.</span>
              </button>
            </h2>
            <p>
              {t("Yazılım, veri, yapay zekâ ve tasarım alanlarında ürettiğim çalışmaları burada bulabilirsin.")}
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
                  {t("Seçili proje")}
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
                      aria-label={`${selectedProject.title} ${t("GitHub deposunu aç")}`}
                      title={t("GitHub deposunu aç")}
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
                  <span className="projects-browser-title-default">{t("Projeler")}</span>
                  <span className="projects-browser-title-mobile">{t("Diğer Projeler")}</span>
                </h3>
                <small>{t("İncelemek istediğin projeyi seçebilirsin.")}</small>
              </span>
            </span>
          </header>

          <div className="projects-list">
            {localizedProjects.map((project) => (
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
