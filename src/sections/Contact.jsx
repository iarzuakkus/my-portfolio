import { portfolio } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <div className="shell contact-layout">
        <div>
          <p className="eyebrow">05 / İletişim</p>
          <h2>İyi bir fikir, doğru bir konuşmayla başlar.</h2>
        </div>
        <div className="contact-copy">
          <p>
            Yapay zekâ, doğal dil işleme, veri odaklı ürünler veya yeni bir
            mühendislik fırsatı üzerine konuşmak isterseniz bana ulaşabilirsiniz.
          </p>
          <div className="contact-links">
            {portfolio.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
