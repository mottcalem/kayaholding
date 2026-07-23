import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Ana Sayfa",
};

export default function HomePage() {
  return <SitePage slug="index" locale="tr" />;
}
