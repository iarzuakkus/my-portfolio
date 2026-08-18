import { useState } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), language };

    setFormStatus({ type: "sending", message: t("Mesajınız gönderiliyor…") });

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
          t("E-posta servisine ulaşılamadı. Formu Netlify Dev adresinden açın."),
        );
      }

      if (!request.ok) throw new Error(result.message || t("Mesaj gönderilemedi."));

      form.reset();
      setFormStatus({ type: "success", message: result.message });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || t("Mesaj gönderilemedi. Lütfen tekrar deneyin."),
      });
    }
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="shell contact-shell">
        <div className="contact-copy">
          <h2>
            {t("Bana")}
            <br />
            {t("Ulaşın")}<span>.</span>
          </h2>
          <p>
            {t("Yeni projeler, iş birlikleri veya sorularınız için benimle iletişime geçebilirsiniz.")}
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              <span>{t("Adınız Soyadınız")}</span>
              <input name="name" type="text" placeholder={t("Adınız Soyadınız")} autoComplete="name" required />
            </label>
            <label>
              <span>{t("E-posta Adresiniz")}</span>
              <input name="email" type="email" placeholder={t("E-posta Adresiniz")} autoComplete="email" required />
            </label>
          </div>

          <label>
            <span>{t("Konu")}</span>
            <input name="subject" type="text" placeholder={t("Konu")} required />
          </label>

          <label className="contact-message-field">
            <span>{t("Mesajınız")}</span>
            <textarea name="message" placeholder={t("Mesajınız")} required />
          </label>

          <button type="submit" disabled={formStatus.type === "sending"}>
            {formStatus.type === "sending" ? t("Gönderiliyor…") : t("Mesaj Gönder")}
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
            {t("Bilgileriniz yalnızca iletişim amacıyla kullanılır.")}
          </small>
        </form>
      </div>
    </section>
  );
}
