import type { MetadataRoute } from "next";
import type { PageSlug } from "@/lib/page-content";
import { PAGE_SLUGS } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site-config";

function trPath(slug: PageSlug): string {
  return slug === "index" ? "/" : `/${slug}`;
}

function enPath(slug: PageSlug): string {
  return slug === "index" ? "/en" : `/en/${slug}`;
}

function changeFrequency(
  slug: PageSlug,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (slug === "index" || slug === "haberler") return "weekly";
  if (slug === "statik") return "yearly";
  return "monthly";
}

function priority(slug: PageSlug): number {
  if (slug === "index") return 1;
  if (slug === "statik" || slug === "haber-detay") return 0.5;
  return 0.8;
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of PAGE_SLUGS) {
    const trUrl = absoluteUrl(trPath(slug));
    const enUrl = absoluteUrl(enPath(slug));
    const alternates = {
      languages: {
        tr: trUrl,
        en: enUrl,
        "x-default": trUrl,
      },
    };
    const shared = {
      lastModified,
      changeFrequency: changeFrequency(slug),
      priority: priority(slug),
      alternates,
    };

    entries.push({ url: trUrl, ...shared });
    entries.push({ url: enUrl, ...shared });
  }

  return entries;
}
