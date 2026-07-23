import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Misyon ve Vizyon",
};

export default function Page() {
  return <SitePage slug="misyon-vizyon" locale="tr" />;
}
