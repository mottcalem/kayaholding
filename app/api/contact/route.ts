import { NextResponse } from "next/server";
import { sendSiteMail } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

const sendFailedMessage = (locale: "tr" | "en") =>
  locale === "en"
    ? "We could not send your message right now. Please try again later or email us directly."
    : "Mesajınız şu an gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan e-posta ile ulaşın.";

export async function POST(request: Request) {
  let locale: "tr" | "en" = "tr";
  try {
    const body = await request.json();
    locale = body.locale === "en" ? "en" : "tr";

    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 200);
    const email = clean(body.email, 320);
    const phone = clean(body.phone, 50);
    const subject = clean(body.subject, 300);
    const message = clean(body.message, 8000);
    const kvkk = body.kvkk === true || body.kvkk === "on";
    if (!name || !email || !phone || !subject) {
      return NextResponse.json(
        { error: locale === "en" ? "Please fill in all required fields." : "Lütfen zorunlu alanları doldurun." },
        { status: 400 },
      );
    }

    if (!kvkk) {
      return NextResponse.json(
        {
          error:
            locale === "en"
              ? "Please confirm that you have read the personal data protection information."
              : "Kişisel Verilerin Korunması bilgilendirmesini okuduğunuzu onaylamanız gerekmektedir.",
        },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: locale === "en" ? "Please enter a valid email address." : "Geçerli bir e-posta adresi girin." },
        { status: 400 },
      );
    }

    const mailSubject =
      locale === "en"
        ? `[Kaya Holding Contact] ${subject}`
        : `[Kaya Holding İletişim] ${subject}`;

    const text = [
      locale === "en" ? "Contact form submission" : "İletişim formu gönderimi",
      "",
      `${locale === "en" ? "Name" : "Ad Soyad / Kurum"}: ${name}`,
      `${locale === "en" ? "Email" : "E-posta"}: ${email}`,
      `${locale === "en" ? "Phone" : "Telefon"}: ${phone}`,
      `${locale === "en" ? "Subject" : "Konu"}: ${subject}`,
      "",
      locale === "en" ? "Message:" : "Mesaj:",
      message || "—",
      "",
      locale === "en" ? "Personal data notice: confirmed" : "KVKK bilgilendirme: okundu / onaylandı",
    ].join("\n");

    await sendSiteMail({ subject: mailSubject, text, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json({ error: sendFailedMessage(locale) }, { status: 500 });
  }
}
