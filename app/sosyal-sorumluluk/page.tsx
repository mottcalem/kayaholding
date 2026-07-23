import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Sosyal Sorumluluk",
};

export default function Page() {
  return <SitePage slug="sosyal-sorumluluk" locale="tr" />;
}
