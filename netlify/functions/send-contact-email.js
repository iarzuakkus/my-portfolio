import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const response = (statusCode, payload) => ({
  statusCode,
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const messages = {
  tr: {
    method: "Yalnızca POST istekleri kabul edilir.",
    invalidJson: "Geçersiz form verisi.",
    invalidForm: "Lütfen form alanlarını geçerli bilgilerle doldurun.",
    notConfigured: "E-posta servisi henüz yapılandırılmamış.",
    sendFailed: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.",
    success: "Mesajınız başarıyla gönderildi.",
    unexpected: "Mesaj gönderilirken beklenmeyen bir hata oluştu.",
  },
  en: {
    method: "Only POST requests are accepted.",
    invalidJson: "Invalid form data.",
    invalidForm: "Please fill in all form fields with valid information.",
    notConfigured: "The email service has not been configured yet.",
    sendFailed: "The message could not be sent. Please try again later.",
    success: "Your message was sent successfully.",
    unexpected: "An unexpected error occurred while sending the message.",
  },
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { message: messages.tr.method });
  }

  let payload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return response(400, { message: messages.tr.invalidJson });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const subject = String(payload.subject ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const language = payload.language === "en" ? "en" : "tr";
  const copy = messages[language];

  if (
    name.length < 2 ||
    name.length > 80 ||
    !EMAIL_PATTERN.test(email) ||
    subject.length < 3 ||
    subject.length > 140 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return response(400, { message: copy.invalidForm });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !contactEmail) {
    console.error("Contact function environment variables are missing.");
    return response(500, { message: copy.notConfigured });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `Portföy iletişim formu: ${subject}`,
      text: `Gönderen: ${name}\nE-posta: ${email}\n\n${message}`,
      html: `
        <h2>Yeni portföy mesajı</h2>
        <p><strong>Gönderen:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return response(502, { message: copy.sendFailed });
    }

    return response(200, { message: copy.success });
  } catch (error) {
    console.error("Contact email error:", error);
    return response(500, { message: copy.unexpected });
  }
};
