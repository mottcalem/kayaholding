import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Haber Detayı",
};

export default function Page() {
  return <PageContent slug="haber-detay" />;
}
