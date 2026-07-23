import { NextResponse } from "next/server";
import { sendSiteMail } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

const sendFailedMessage = (locale: "tr" | "en") =>
  locale === "en"
    ? "We could not submit your application right now. Please try again later."
    : "Başvurunuz şu an iletilemedi. Lütfen daha sonra tekrar deneyin.";

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
    const city = clean(body.city, 120);
    const message = clean(body.message, 8000);
    const kvkk = body.kvkk === true || body.kvkk === "on";
    if (!name || !email || !phone || !city) {
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
              ? "You must accept the personal data processing statement."
              : "KVKK açık rıza metnini onaylamanız gerekmektedir.",
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
        ? `[Kaya Holding Careers] General application — ${name}`
        : `[Kaya Holding Kariyer] Genel başvuru — ${name}`;

    const text = [
      locale === "en" ? "Career application form" : "Kariyer başvuru formu",
      "",
      `${locale === "en" ? "Name" : "Ad Soyad"}: ${name}`,
      `${locale === "en" ? "Email" : "E-posta"}: ${email}`,
      `${locale === "en" ? "Phone" : "Telefon"}: ${phone}`,
      `${locale === "en" ? "City / district" : "İlçe / Şehir"}: ${city}`,
      "",
      locale === "en" ? "Message / cover letter:" : "Mesaj / ön yazı:",
      message || "—",
      "",
      locale === "en" ? "KVKK consent: accepted" : "KVKK açık rıza: onaylandı",
    ].join("\n");

    await sendSiteMail({ subject: mailSubject, text, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/career]", err);
    return NextResponse.json({ error: sendFailedMessage(locale) }, { status: 500 });
  }
}
