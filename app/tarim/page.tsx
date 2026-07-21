import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Tarım Sektörü",
};

export default function Page() {
  return <PageContent slug="tarim" />;
}
