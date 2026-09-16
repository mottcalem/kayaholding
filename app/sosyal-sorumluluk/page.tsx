import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-seo";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = buildPageMetadata("tr", "sosyal-sorumluluk");

export default function Page() {
  return <SitePage slug="sosyal-sorumluluk" locale="tr" />;
}
