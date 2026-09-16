import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-seo";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = buildPageMetadata("en", "index");

export default function EnHomePage() {
  return <SitePage slug="index" locale="en" />;
}
