/** Canonical production origin (no trailing slash). */
export const SITE_URL = "https://kayaholding.com.tr";

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") {
    return `${SITE_URL}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
