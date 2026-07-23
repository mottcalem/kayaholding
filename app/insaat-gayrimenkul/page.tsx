import type { Metadata } from "next";
import { SitePage } from "@/lib/site-page";

export const metadata: Metadata = {
  title: "İnşaat ve Gayrimenkul",
};

export default function Page() {
  return <SitePage slug="insaat-gayrimenkul" locale="tr" />;
}
