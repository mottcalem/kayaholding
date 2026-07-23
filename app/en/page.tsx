import type { Metadata } from "next";
import { pageTitle } from "@/lib/page-titles";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: pageTitle("en", "index"),
};

export default function EnHomePage() {
  return <SitePage slug="index" locale="en" />;
}
