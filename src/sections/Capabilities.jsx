import SectionHeading from "../components/ui/SectionHeading";
import { portfolio } from "../data/portfolioData";

export default function Capabilities() {
  return (
    <section className="section section-capabilities" id="capabilities">
      <div className="shell">
        <SectionHeading
          eyebrow="02 / Yetkinlikler"
          title="Araştırmadan uygulamaya uzanan teknik bir araç seti."
          description="Tek bir teknolojiye değil, problemin tamamına bakıyorum: veriyi hazırlıyor, yaklaşımı kuruyor, sonucu değerlendiriyor ve kullanılabilir hâle getiriyorum."
        />
        <div className="capability-grid">
          {portfolio.capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <p className="card-index">0{index + 1}</p>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul aria-label={`${capability.title} yetenekleri`}>
                {capability.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
