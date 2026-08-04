import { Icon } from "@iconify/react";
import { portfolio } from "../data/portfolioData";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = [`Gönderen: ${name}`, `E-posta: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="shell contact-shell">
        <div className="contact-copy">
          <h2>
            Bana
            <br />
            Ulaşın<span>.</span>
          </h2>
          <p>
            Yeni projeler, iş birlikleri veya sorularınız için benimle iletişime
            geçebilirsiniz.
          </p>

          <div className="contact-accent-line" aria-hidden="true" />

          <div className="contact-links">
            <a href={`mailto:${portfolio.contact.email}`}>
              <span aria-hidden="true">
                <Icon icon="material-symbols:mail-outline-rounded" />
              </span>
              <span>
                <strong>E-posta</strong>
                <small>{portfolio.contact.email}</small>
              </span>
            </a>

            <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
              <span className="is-linkedin" aria-hidden="true">
                <Icon icon="ri:linkedin-fill" />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <small>Profesyonel profilimi görüntüle</small>
              </span>
              <Icon className="contact-link-arrow" icon="fi:rr-arrow-small-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              <span>Adınız Soyadınız</span>
              <input name="name" type="text" placeholder="Adınız Soyadınız" autoComplete="name" required />
            </label>
            <label>
              <span>E-posta Adresiniz</span>
              <input name="email" type="email" placeholder="E-posta Adresiniz" autoComplete="email" required />
            </label>
          </div>

          <label>
            <span>Konu</span>
            <input name="subject" type="text" placeholder="Konu" required />
          </label>

          <label className="contact-message-field">
            <span>Mesajınız</span>
            <textarea name="message" placeholder="Mesajınız" required />
          </label>

          <button type="submit">
            Mesaj Gönder
            <Icon icon="material-symbols:send-outline-rounded" aria-hidden="true" />
          </button>

          <small className="contact-privacy">
            <Icon icon="material-symbols:lock-outline" aria-hidden="true" />
            Bilgileriniz yalnızca iletişim amacıyla kullanılır.
          </small>
        </form>
      </div>
    </section>
  );
}
