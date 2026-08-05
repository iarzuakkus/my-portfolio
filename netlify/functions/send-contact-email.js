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

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { message: "Yalnızca POST istekleri kabul edilir." });
  }

  let payload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return response(400, { message: "Geçersiz form verisi." });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const subject = String(payload.subject ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (
    name.length < 2 ||
    name.length > 80 ||
    !EMAIL_PATTERN.test(email) ||
    subject.length < 3 ||
    subject.length > 140 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return response(400, { message: "Lütfen form alanlarını geçerli bilgilerle doldurun." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !contactEmail) {
    console.error("Contact function environment variables are missing.");
    return response(500, { message: "E-posta servisi henüz yapılandırılmamış." });
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
      return response(502, { message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." });
    }

    return response(200, { message: "Mesajınız başarıyla gönderildi." });
  } catch (error) {
    console.error("Contact email error:", error);
    return response(500, { message: "Mesaj gönderilirken beklenmeyen bir hata oluştu." });
  }
};
