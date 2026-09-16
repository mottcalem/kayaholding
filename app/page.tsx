import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-seo";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = buildPageMetadata("tr", "index");

export default function HomePage() {
  return <SitePage slug="index" locale="tr" />;
}
