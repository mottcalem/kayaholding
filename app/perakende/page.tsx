import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Perakende Sektörü",
};

export default function Page() {
  return <SitePage slug="perakende" locale="tr" />;
}
