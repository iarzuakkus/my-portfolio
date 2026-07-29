import SectionHeading from "../components/ui/SectionHeading";
import { portfolio } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section section-about" id="about">
      <div className="shell">
        <SectionHeading
          eyebrow="01 / Hakkımda"
          title="Teknik merakı, ürün düşüncesiyle birleştiriyorum."
        />

        <div className="about-layout">
          <div className="about-copy">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="principles">
            {portfolio.principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
