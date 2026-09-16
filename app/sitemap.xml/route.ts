import { generateSitemapXml } from "@/lib/generate-sitemap-xml";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const body = generateSitemapXml();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
