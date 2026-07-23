import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Bizden Haberler",
};

export default function Page() {
  return <SitePage slug="haberler" locale="tr" />;
}
