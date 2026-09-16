import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-seo";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = buildPageMetadata("tr", "insaat-gayrimenkul");

export default function Page() {
  return <SitePage slug="insaat-gayrimenkul" locale="tr" />;
}
