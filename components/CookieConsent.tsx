"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLocaleFromPathname, localizeHref } from "@/lib/locale";

const STORAGE_KEY = "kaya_cookie_consent_v1";

const copy = {
  tr: {
    text: "Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.",
    link: "Kişisel Verilerin Korunması",
    accept: "Kabul Et",
  },
  en: {
    text: "We use cookies to improve your experience on our website.",
    link: "Personal Data Protection",
    accept: "Accept",
  },
} as const;

export function CookieConsent() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = copy[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label={t.text}>
      <p className="cookie-consent-text">
        {t.text}{" "}
        <Link href={localizeHref("/statik", locale)} className="cookie-consent-link">
          {t.link}
        </Link>
      </p>
      <button type="button" className="cookie-consent-btn" onClick={accept}>
        {t.accept}
      </button>
    </div>
  );
}
