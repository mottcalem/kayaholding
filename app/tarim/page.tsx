import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Tarım Sektörü",
};

export default function Page() {
  return <SitePage slug="tarim" locale="tr" />;
}
