import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";
import { PageScripts } from "@/components/PageScripts";
import type { Locale } from "@/lib/locale";

const CONTENT_DIR = path.join(process.cwd(), "content");

/** Strip PHP include wrappers left from legacy migration (avoids hydration mismatches on `?>`). */
export function normalizeLegacyHtml(raw: string): string {
  let html = raw.trim();
  if (html.startsWith("?>")) {
    html = html.slice(2).trimStart();
  }
  html = html.replace(/<\?php\s*$/i, "").trimEnd();
  return html;
}

export type PageSlug =
  | "index"
  | "hakkimizda"
  | "havacilik"
  | "misyon-vizyon"
  | "yonetim-kurulu"
  | "politikalar"
  | "sosyal-sorumluluk"
  | "turizm"
  | "insaat-gayrimenkul"
  | "perakende"
  | "hizmet"
  | "enerji"
  | "tarim"
  | "haberler"
  | "haber-detay"
  | "kariyer"
  | "iletisim"
  | "statik";

function readHtml(slug: string, locale: Locale): string {
  const raw = fs.readFileSync(
    path.join(CONTENT_DIR, locale, `${slug}.html`),
    "utf8"
  );
  return normalizeLegacyHtml(raw);
}

function readScripts(slug: string, locale: Locale): string[] {
  const scriptPath = path.join(CONTENT_DIR, locale, `${slug}.scripts.json`);
  if (!fs.existsSync(scriptPath)) {
    const fallback = path.join(CONTENT_DIR, "tr", `${slug}.scripts.json`);
    if (locale !== "tr" && fs.existsSync(fallback)) {
      return JSON.parse(fs.readFileSync(fallback, "utf8")) as string[];
    }
    return [];
  }
  return JSON.parse(fs.readFileSync(scriptPath, "utf8")) as string[];
}

export function PageContent({
  slug,
  locale = "tr",
}: {
  slug: PageSlug;
  locale?: Locale;
}) {
  noStore();
  const html = readHtml(slug, locale);
  const scripts = readScripts(slug, locale);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {(scripts.length > 0 || slug === "iletisim" || slug === "politikalar") && (
        <PageScripts scripts={scripts} slug={slug} />
      )}
    </>
  );
}
