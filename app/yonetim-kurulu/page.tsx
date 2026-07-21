import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
};

export default function Page() {
  return <PageContent slug="yonetim-kurulu" />;
}
