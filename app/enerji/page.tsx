import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Enerji Sektörü",
};

export default function Page() {
  return <SitePage slug="enerji" locale="tr" />;
}
