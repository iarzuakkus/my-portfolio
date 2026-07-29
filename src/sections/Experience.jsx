import { Icon } from "@iconify/react";
import SectionHeading from "../components/ui/SectionHeading";
import { portfolio } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section section-experience" id="experience">
      <div className="shell">
        <SectionHeading
          eyebrow="03 / Yolculuk"
          title="Öğrenmeyi, uygulamayı ve gelişimi aynı çizgide tutuyorum."
        />
        <div className="timeline">
          {portfolio.experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-marker" aria-hidden="true">
                <Icon icon="mdi:work-outline" />
              </span>
              <p className="timeline-type">{item.type}</p>
              <div className="timeline-content">
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
