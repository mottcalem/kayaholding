import type { Metadata } from "next";
import { PageContent } from "@/lib/page-content";

export const metadata: Metadata = {
  title: "İnşaat ve Gayrimenkul",
};

export default function Page() {
  return <PageContent slug="insaat-gayrimenkul" />;
}
