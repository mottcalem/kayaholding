import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Bizden Haberler",
};

export default function Page() {
  return <PageContent slug="haberler" />;
}
