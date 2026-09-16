import { buildSitemapEntries } from "@/lib/sitemap-entries";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateSitemapXml(): string {
  const entries = buildSitemapEntries();

  const urls = entries
    .map((entry) => {
      const lastmod =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : entry.lastModified
            ? new Date(entry.lastModified).toISOString()
            : null;

      const alternateLinks = entry.alternates?.languages
        ? Object.entries(entry.alternates.languages)
            .filter((entry): entry is [string, string] => Boolean(entry[1]))
            .map(
              ([lang, href]) =>
                `  <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}" />`,
            )
            .join("\n")
        : "";

      const lines = [
        "<url>",
        `  <loc>${escapeXml(entry.url)}</loc>`,
        alternateLinks,
        lastmod ? `  <lastmod>${lastmod}</lastmod>` : "",
        entry.changeFrequency
          ? `  <changefreq>${entry.changeFrequency}</changefreq>`
          : "",
        entry.priority != null ? `  <priority>${entry.priority}</priority>` : "",
        "</url>",
      ].filter(Boolean);

      return lines.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
