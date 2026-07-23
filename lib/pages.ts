import type { PageSlug } from "@/lib/page-content";

export const PAGE_SLUGS: PageSlug[] = [
  "index",
  "hakkimizda",
  "havacilik",
  "misyon-vizyon",
  "yonetim-kurulu",
  "politikalar",
  "sosyal-sorumluluk",
  "turizm",
  "insaat-gayrimenkul",
  "perakende",
  "hizmet",
  "enerji",
  "tarim",
  "haberler",
  "haber-detay",
  "kariyer",
  "iletisim",
  "statik",
];

export function isPageSlug(value: string): value is PageSlug {
  return (PAGE_SLUGS as string[]).includes(value);
}
