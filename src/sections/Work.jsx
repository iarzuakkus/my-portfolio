import SectionHeading from "../components/ui/SectionHeading";
import { portfolio } from "../data/portfolioData";

export default function Work() {
  return (
    <section className="section section-work" id="work">
      <div className="shell">
        <SectionHeading
          eyebrow="04 / Çalışmalar"
          title="Üretmeyi sevdiğim problem alanları."
          description="Aşağıdaki başlıklar, deneyim ve proje çalışmalarımın ortak teknik odağını özetliyor."
        />
        <div className="work-list">
          {portfolio.workAreas.map((item) => (
            <article className="work-card" key={item.index}>
              <span className="work-index">{item.index}</span>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ul className="tag-list" aria-label={`${item.title} teknolojileri`}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <a
          className="work-link"
          href={portfolio.socialLinks[0].href}
          target="_blank"
          rel="noreferrer"
        >
          Kod çalışmalarını GitHub&apos;da incele <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
