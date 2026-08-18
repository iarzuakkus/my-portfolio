// src/components/projects/ProjectWelcome.jsx
import { Icon } from "@iconify/react";
import { useLanguage } from "../../i18n/LanguageContext";

const welcomeTopics = [
  { icon: "mdi:web", label: "Web", position: "web", tone: "blue" },
  { icon: "tabler:code", label: "Yazılım", position: "software", tone: "purple" },
  { icon: "eos-icons:ai", label: "Yapay Zekâ", position: "ai", tone: "blue" },
  { icon: "hugeicons:ai-network", label: "RAG", position: "rag", tone: "mint" },
  { icon: "mdi:database-outline", label: "Veri", position: "data", tone: "green" },
  { icon: "mdi:paint-outline", label: "Tasarım", position: "design", tone: "coral" },
  { icon: "akar-icons:statistic-up", label: "Analiz", position: "analysis", tone: "orange" },
  { icon: "mdi:spider-web", label: "Scraping", position: "scraping", tone: "green" },
  { icon: "mdi:map-marker", label: "Harita", position: "map", tone: "blue" },
  { icon: "mdi:chart-pie", label: "Dashboard", position: "dashboard", tone: "cyan" },
  { icon: "mdi:robot-outline", label: "Robotik", position: "robotics", tone: "mint" },
  { icon: "mdi:cube-outline", label: "Prototipleme", position: "prototype", tone: "blue" },
  { icon: "mdi:cog-sync-outline", label: "Otomasyon", position: "automation", tone: "orange" },
  { icon: "mdi:pen", label: "UI/UX", position: "ui", tone: "rose" },
];

export default function ProjectWelcome() {
  const { t } = useLanguage();
  return (
    <article className="featured-project featured-project--welcome">
      <div className="project-welcome-visual">
        <span className="project-welcome-spark spark-left" aria-hidden="true">✦</span>
        <span className="project-welcome-spark spark-right" aria-hidden="true">✦</span>

        <span className="project-welcome-orbit orbit-1" aria-hidden="true" />
        <span className="project-welcome-orbit orbit-2" aria-hidden="true" />
        <span className="project-welcome-orbit orbit-3" aria-hidden="true" />

        <span className="project-welcome-node node-1" aria-hidden="true" />
        <span className="project-welcome-node node-2" aria-hidden="true" />
        <span className="project-welcome-node node-3" aria-hidden="true" />
        <span className="project-welcome-node node-4" aria-hidden="true" />

        <div className="project-welcome-topics">
          {welcomeTopics.map((topic) => (
            <span
              className={`project-welcome-topic topic-${topic.position} is-${topic.tone}`}
              key={topic.label}
            >
              <Icon icon={topic.icon} aria-hidden="true" />
              <small>{t(topic.label)}</small>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
