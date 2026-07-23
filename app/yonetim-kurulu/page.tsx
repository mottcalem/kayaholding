import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
};

export default function Page() {
  return <SitePage slug="yonetim-kurulu" locale="tr" />;
}
