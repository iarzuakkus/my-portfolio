import { Icon } from "@iconify/react";
import heroImage from "../assets/images/hero-profile.png";
import { portfolio } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { language, t, localize } = useLanguage();
  const { person } = localize(portfolio);
  const cvHref = language === "en"
    ? "/Ilayda_Arzu_Akkus_CV_EN.pdf"
    : "/Ilayda-Arzu-Akkus-CV.pdf";

  return (
    <section className="hero" id="top">
      <div className="shell hero-content">
        <div className="hero-background-decorations" aria-hidden="true">
          <span className="hero-decoration decoration-ring" />
          <span className="hero-decoration decoration-green-dot" />
          <span className="hero-decoration decoration-squiggle">∿∿</span>
          <span className="hero-decoration decoration-plus">+</span>
          <span className="hero-decoration decoration-soft-circle" />
          <span className="hero-decoration decoration-cross">+</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-hello">
              <span className="hero-hello-mark" aria-hidden="true">
                <Icon icon="bitcoin-icons:cross-filled" />
                <Icon icon="bitcoin-icons:cross-filled" />
              </span>
              {t("Merhaba,")}
            </p>
            <h1>{t("Ben Arzu")}</h1>
            <p className="hero-role">
              <span className="hero-role-icon" aria-hidden="true">
                <Icon icon="icon-park-outline:code-one" />
              </span>
              <span className="role-typing">{t("Bilgisayar Mühendisiyim")}</span>
            </p>
            <p className="hero-summary">
              {t("Yazılım geliştirmeyi, problem çözmeyi ve teknoloji ile üretmeyi seviyorum. Yapay zekâ ve doğal dil işleme odağında kullanıcı dostu, anlaşılır ve etkili çözümler üretmeye odaklanıyorum.")}
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#work">
                <span className="hero-button-icon hero-button-leading" aria-hidden="true">
                  <Icon icon="mdi:eye-outline" />
                </span>
                <strong>{t("Projelerime Göz At")}</strong>
              </a>
              <a className="hero-button hero-button-secondary" href={cvHref} download>
                <span className="hero-button-icon hero-button-leading" aria-hidden="true">
                  <Icon icon="material-symbols:download-rounded" />
                </span>
                <strong>{t("CV’mi İndir")}</strong>
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label={`${person.name} ${t("portresi")}`}>
            <span className="hero-decoration decoration-coral-ring" aria-hidden="true" />
            <div className="portrait-shape shape-back" aria-hidden="true" />
            <div className="portrait-shape shape-line" aria-hidden="true" />
            <div className="portrait-blob">
              <img src={heroImage} alt={person.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
