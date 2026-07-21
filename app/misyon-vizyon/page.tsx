import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Misyon ve Vizyon",
};

export default function Page() {
  return <PageContent slug="misyon-vizyon" />;
}
