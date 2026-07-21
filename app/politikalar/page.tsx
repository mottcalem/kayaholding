import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "Kurumsal Politikalar",
};

export default function Page() {
  return <PageContent slug="politikalar" />;
}
