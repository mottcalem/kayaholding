import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Havacılık",
};

export default function Page() {
  return <SitePage slug="havacilik" locale="tr" />;
}
