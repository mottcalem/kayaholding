import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-seo";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = buildPageMetadata("tr", "iletisim");

export default function Page() {
  return <SitePage slug="iletisim" locale="tr" />;
}
