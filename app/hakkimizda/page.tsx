import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Hakkımızda",
};

export default function Page() {
  return <SitePage slug="hakkimizda" locale="tr" />;
}
