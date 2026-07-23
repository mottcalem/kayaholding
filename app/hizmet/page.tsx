import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Hizmet Sektörü",
};

export default function Page() {
  return <SitePage slug="hizmet" locale="tr" />;
}
