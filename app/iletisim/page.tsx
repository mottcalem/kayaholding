import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "İletişim",
};

export default function Page() {
  return <SitePage slug="iletisim" locale="tr" />;
}
