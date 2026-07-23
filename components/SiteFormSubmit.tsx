"use client";

import { useEffect } from "react";
import type { PageSlug } from "@/lib/page-content";
import type { Locale } from "@/lib/locale";

type Props = {
  slug: PageSlug;
  locale: Locale;
};

const copy = {
  tr: {
    sending: "Gönderiliyor…",
    contactSuccess: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
    careerSuccess: "Başvurunuz alındı. Teşekkür ederiz.",
    errorGeneric: "Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin veya e-posta ile ulaşın.",
  },
  en: {
    sending: "Sending…",
    contactSuccess: "Your message has been received. We will get back to you as soon as possible.",
    careerSuccess: "Your application has been received. Thank you.",
    errorGeneric: "Something went wrong while sending. Please try again later or contact us by email.",
  },
} as const;

function ensureStatusEl(form: HTMLFormElement): HTMLElement {
  let el = form.querySelector<HTMLElement>("[data-form-status]");
  if (!el) {
    el = document.createElement("p");
    el.setAttribute("data-form-status", "");
    el.style.marginTop = "16px";
    el.style.fontSize = "14px";
    el.hidden = true;
    form.appendChild(el);
  }
  return el;
}

function showStatus(el: HTMLElement, message: string, kind: "success" | "error") {
  el.hidden = false;
  el.textContent = message;
  el.style.color = kind === "success" ? "#166534" : "#b91c1c";
}

export function SiteFormSubmit({ slug, locale }: Props) {
  useEffect(() => {
    if (slug !== "iletisim" && slug !== "kariyer") return;

    const form = document.querySelector<HTMLFormElement>(".app-form-box form");
    if (!form) return;

    const t = copy[locale];
    const apiPath = slug === "iletisim" ? "/api/contact" : "/api/career";
    const endpoint =
      typeof window !== "undefined"
        ? new URL(apiPath, window.location.origin).href
        : apiPath;
    const successMsg = slug === "iletisim" ? t.contactSuccess : t.careerSuccess;
    const statusEl = ensureStatusEl(form);
    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const defaultBtnText = submitBtn?.textContent ?? "";

    const honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "website";
    honeypot.tabIndex = -1;
    honeypot.autocomplete = "off";
    honeypot.setAttribute("aria-hidden", "true");
    honeypot.style.position = "absolute";
    honeypot.style.left = "-9999px";
    form.appendChild(honeypot);

    const onSubmit = async (event: Event) => {
      event.preventDefault();
      statusEl.hidden = true;

      const fd = new FormData(form);
      const payload: Record<string, unknown> = { locale, website: fd.get("website") ?? "" };

      for (const [key, value] of fd.entries()) {
        if (key === "website") continue;
        if (key === "kvkk") {
          payload.kvkk = true;
          continue;
        }
        payload[key] = typeof value === "string" ? value : "";
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = t.sending;
      }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        let data: { ok?: boolean; error?: string } = {};
        try {
          data = (await res.json()) as { ok?: boolean; error?: string };
        } catch {
          /* non-JSON (e.g. HTML error page) */
        }

        if (res.ok && data.ok) {
          showStatus(statusEl, successMsg, "success");
          form.reset();
        } else {
          showStatus(statusEl, data.error ?? t.errorGeneric, "error");
        }
      } catch {
        showStatus(statusEl, t.errorGeneric, "error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultBtnText;
        }
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, [slug, locale]);

  return null;
}
