import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-seo";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = buildPageMetadata("tr", "hizmet");

export default function Page() {
  return <SitePage slug="hizmet" locale="tr" />;
}
