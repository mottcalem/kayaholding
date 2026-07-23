import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Turizm",
};

export default function Page() {
  return <SitePage slug="turizm" locale="tr" />;
}
