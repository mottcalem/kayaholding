import nodemailer from "nodemailer";

function env(name: string): string | undefined {
  return process.env[name]?.trim();
}

function requireEnv(name: string): string {
  const value = env(name);
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

/** Google app passwords are 16 chars, often pasted with spaces. */
function smtpPassword(): string {
  return requireEnv("SMTP_PASS").replace(/\s+/g, "");
}

export function getSmtpHost(): string {
  return env("SMTP_HOST") ?? "smtp.gmail.com";
}

/** Gmail / Google Workspace: smtp.gmail.com, port 587 (STARTTLS) or 465 (SSL). */
export function getMailTransporter() {
  const host = getSmtpHost();
  const port = Number(env("SMTP_PORT") ?? "587");
  const secure =
    env("SMTP_SECURE") === "true" || env("SMTP_SECURE") === "1" || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    ...(secure ? {} : { requireTLS: true }),
    auth: {
      user: requireEnv("SMTP_USER"),
      pass: smtpPassword(),
    },
  });
}

function logAuthFailureHint(host: string, user: string) {
  console.error(`[mail] SMTP kimlik doğrulama başarısız (host=${host}, user=${user}).`);

  if (/office365|outlook\.com/i.test(host)) {
    console.error(
      "[mail] Hâlâ Microsoft SMTP kullanılıyor. Gmail’e geçtiyseniz .env.local içinde SMTP_HOST=smtp.gmail.com olmalı.",
    );
    return;
  }

  if (/gmail|google/i.test(host)) {
    console.error(
      "[mail] Gmail: SMTP_USER tam e-posta olmalı; SMTP_PASS Google Uygulama şifresi (16 karakter, boşluksuz). " +
        "Workspace’te admin SMTP erişimini kapatmış olabilir.",
    );
  }
}

export async function sendSiteMail(options: {
  subject: string;
  text: string;
  replyTo: string;
}) {
  const from = env("SMTP_FROM") ?? requireEnv("SMTP_USER");
  const to = requireEnv("SMTP_TO");
  const user = requireEnv("SMTP_USER");

  const transporter = getMailTransporter();
  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
    });
  } catch (err) {
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code?: string }).code)
        : "";
    if (code === "EAUTH") {
      logAuthFailureHint(getSmtpHost(), user);
    }
    throw err;
  }
}
