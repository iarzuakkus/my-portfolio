import { useState } from "react";
import { Icon } from "@iconify/react";
import { portfolio } from "../data/portfolioData";

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setFormStatus({ type: "sending", message: "Mesajınız gönderiliyor…" });

    try {
      const request = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const responseText = await request.text();
      let result = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          "E-posta servisine ulaşılamadı. Formu Netlify Dev adresinden açın.",
        );
      }

      if (!request.ok) throw new Error(result.message || "Mesaj gönderilemedi.");

      form.reset();
      setFormStatus({ type: "success", message: result.message });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
      });
    }
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

          <button type="submit" disabled={formStatus.type === "sending"}>
            {formStatus.type === "sending" ? "Gönderiliyor…" : "Mesaj Gönder"}
            <Icon icon="material-symbols:send-outline-rounded" aria-hidden="true" />
          </button>

          {formStatus.message && (
            <p className={`contact-form-status is-${formStatus.type}`} role="status" aria-live="polite">
              <Icon
                icon={
                  formStatus.type === "success"
                    ? "material-symbols:check-circle-outline-rounded"
                    : formStatus.type === "error"
                      ? "material-symbols:error-outline-rounded"
                      : "svg-spinners:3-dots-fade"
                }
                aria-hidden="true"
              />
              {formStatus.message}
            </p>
          )}

          <small className="contact-privacy">
            <Icon icon="material-symbols:lock-outline" aria-hidden="true" />
            Bilgileriniz yalnızca iletişim amacıyla kullanılır.
          </small>
        </form>
      </div>
    </section>
  );
}
