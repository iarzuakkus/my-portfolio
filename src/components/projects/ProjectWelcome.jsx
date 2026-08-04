import { Icon } from "@iconify/react";

const welcomeTopics = [
  { icon: "tabler:code", label: "Yazılım" },
  { icon: "eos-icons:ai", label: "Yapay zekâ" },
  { icon: "mdi:database-outline", label: "Veri" },
  { icon: "mdi:paint-outline", label: "Tasarım" },
];

export default function ProjectWelcome() {
  return (
    <article className="featured-project featured-project--welcome">
      <div className="project-welcome-copy">
        <span className="featured-project-label">
          <Icon icon="griddy-icons:folder-code" aria-hidden="true" />
          Proje vitrini
        </span>
        <h3>Çalışmalarımı keşfet.</h3>
        <p>
          Yazılım, yapay zekâ, veri ve tasarım alanlarındaki projelerimi incelemek için aşağıdaki
          kartlardan birini seçebilirsin.
        </p>
      </div>

      <div className="project-welcome-visual" aria-hidden="true">
        <div className="project-welcome-orbit" />
        {welcomeTopics.map((topic, index) => (
          <span className={`project-welcome-topic topic-${index + 1}`} key={topic.label}>
            <Icon icon={topic.icon} />
            <small>{topic.label}</small>
          </span>
        ))}
        <span className="project-welcome-center">
          <Icon icon="mingcute:star-line" />
          Bir proje seç
        </span>
      </div>
    </article>
  );
}
