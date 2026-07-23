import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
};

export default function Page() {
  return <SitePage slug="statik" locale="tr" />;
}
