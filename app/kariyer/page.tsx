import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "Kariyer",
};

export default function Page() {
  return <SitePage slug="kariyer" locale="tr" />;
}
