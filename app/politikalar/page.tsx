import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Kurumsal Politikalar",
};

export default function Page() {
  return <SitePage slug="politikalar" locale="tr" />;
}
