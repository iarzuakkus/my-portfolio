import { Icon } from "@iconify/react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ProjectTextShowcase({ project }) {
  const { t } = useLanguage();
  const showcase = project.showcase;

  if (!showcase) return null;

  return (
    <aside className="project-github-showcase" aria-label={showcase.title}>
      <div className="project-github-showcase-heading">
        <a
          className="project-github-showcase-title-link"
          href={showcase.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${showcase.title} GitHub`}
        >
          <span aria-hidden="true">
            <Icon icon="mdi:github" />
          </span>
          <div>
            <small>{t("DAHA FAZLA PROJE")}</small>
            <h4>{showcase.title}</h4>
          </div>
        </a>
      </div>

      <p>{showcase.description}</p>

      <ul aria-label={t("GitHub çalışma alanları")}>
        {showcase.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </aside>
  );
}
