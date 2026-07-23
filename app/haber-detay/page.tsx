import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Haber Detayı",
};

export default function Page() {
  return <SitePage slug="haber-detay" locale="tr" />;
}
