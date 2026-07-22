import type { NavContext } from "@/lib/navigation";

const kurumsalIds = new Set([
  "hakkimizda",
  "havacilik",
  "misyon-vizyon",
  "yonetim-kurulu",
  "politikalar",
  "sosyal-sorumluluk",
]);

const faaliyetIds = new Set([
  "turizm",
  "insaat-gayrimenkul",
  "perakende",
  "hizmet",
  "enerji",
  "tarim",
]);

const pathToPageId: Record<string, string> = {
  "/": "index",
  "/hakkimizda": "hakkimizda",
  "/havacilik": "havacilik",
  "/misyon-vizyon": "misyon-vizyon",
  "/yonetim-kurulu": "yonetim-kurulu",
  "/politikalar": "politikalar",
  "/sosyal-sorumluluk": "sosyal-sorumluluk",
  "/turizm": "turizm",
  "/insaat-gayrimenkul": "insaat-gayrimenkul",
  "/perakende": "perakende",
  "/hizmet": "hizmet",
  "/enerji": "enerji",
  "/tarim": "tarim",
  "/haberler": "haberler",
  "/haber-detay": "haber-detay",
  "/kariyer": "kariyer",
  "/iletisim": "iletisim",
  "/statik": "statik",
};

export function pathToNavContext(pathname: string): NavContext {
  const pageId = pathToPageId[pathname] ?? "";
  let parentPageId = "";
  if (kurumsalIds.has(pageId)) parentPageId = "kurumsal";
  if (faaliyetIds.has(pageId)) parentPageId = "faaliyetler";
  return { pageId, parentPageId };
}
