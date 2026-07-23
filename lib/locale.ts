export type Locale = "tr" | "en";

export const DEFAULT_LOCALE: Locale = "tr";

/** Persisted when the user picks TR/EN in the header (overrides Accept-Language). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

/** First Accept-Language tag; Turkish variants map to TR. */
export function acceptLanguagePrefersTurkish(
  acceptLanguage: string | null | undefined
): boolean {
  if (!acceptLanguage) return true;
  const primary = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  return primary.startsWith("tr");
}

export function resolveLocaleFromRequest(
  cookieValue: string | undefined,
  acceptLanguage: string | null | undefined
): Locale {
  if (cookieValue === "tr" || cookieValue === "en") return cookieValue;
  return acceptLanguagePrefersTurkish(acceptLanguage) ? "tr" : "en";
}

export function pathnameToEn(pathname: string): string {
  if (pathname === "/") return "/en";
  return `/en${pathname}`;
}

export function pathnameToTr(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

export function isEnglishPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "tr";
}

/** Strip /en prefix for slug lookup; returns path like `/hakkimizda` or `/`. */
export function pathnameWithoutLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizeHref(href: string, locale: Locale): string {
  if (
    href.startsWith("http") ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }
  const path = href.startsWith("/") ? href : `/${href}`;
  if (locale === "en") {
    return path === "/" ? "/en" : `/en${path}`;
  }
  return path;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const base = pathnameWithoutLocale(pathname);
  return localizeHref(base, target);
}
