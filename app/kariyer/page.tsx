import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Kariyer",
};

export default function Page() {
  return <PageContent slug="kariyer" />;
}
