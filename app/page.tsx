import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Ana Sayfa",
};

export default function HomePage() {
  return <PageContent slug="index" />;
}
