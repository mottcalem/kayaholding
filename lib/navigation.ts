import type { CSSProperties } from "react";
import type { Locale } from "@/lib/locale";
import { localizeHref } from "@/lib/locale";

export type NavContext = {
  pageId: string;
  parentPageId: string;
};

type NavItem = { href: string; label: string; pageId: string };

const navData = {
  tr: {
    home: "Ana Sayfa",
    kurumsal: "Kurumsal",
    faaliyetler: "Faaliyetler",
    news: "Bizden Haberler",
    career: "Kariyer",
    contact: "İletişim",
    kurumsalLinks: [
      { path: "/hakkimizda", label: "Hakkımızda", pageId: "hakkimizda" },
      { path: "/misyon-vizyon", label: "Misyon ve Vizyon", pageId: "misyon-vizyon" },
      { path: "/yonetim-kurulu", label: "Yönetim Kurulu", pageId: "yonetim-kurulu" },
      { path: "/politikalar", label: "Politikalar", pageId: "politikalar" },
      {
        path: "/sosyal-sorumluluk",
        label: "Sosyal Sorumluluk",
        pageId: "sosyal-sorumluluk",
      },
    ],
    faaliyetLinks: [
      { path: "/turizm", label: "Turizm", pageId: "turizm" },
      {
        path: "/insaat-gayrimenkul",
        label: "İnşaat & Gayrimenkul",
        pageId: "insaat-gayrimenkul",
      },
      { path: "/perakende", label: "Perakende", pageId: "perakende" },
      { path: "/hizmet", label: "Hizmet", pageId: "hizmet" },
      { path: "/enerji", label: "Enerji", pageId: "enerji" },
      { path: "/tarim", label: "Tarım", pageId: "tarim" },
    ],
  },
  en: {
    home: "Home",
    kurumsal: "Corporate",
    faaliyetler: "Business",
    news: "News",
    career: "Careers",
    contact: "Contact",
    kurumsalLinks: [
      { path: "/hakkimizda", label: "About Us", pageId: "hakkimizda" },
      { path: "/misyon-vizyon", label: "Mission & Vision", pageId: "misyon-vizyon" },
      { path: "/yonetim-kurulu", label: "Board of Directors", pageId: "yonetim-kurulu" },
      { path: "/politikalar", label: "Policies", pageId: "politikalar" },
      {
        path: "/sosyal-sorumluluk",
        label: "Social Responsibility",
        pageId: "sosyal-sorumluluk",
      },
    ],
    faaliyetLinks: [
      { path: "/turizm", label: "Tourism", pageId: "turizm" },
      {
        path: "/insaat-gayrimenkul",
        label: "Construction & Real Estate",
        pageId: "insaat-gayrimenkul",
      },
      { path: "/perakende", label: "Retail", pageId: "perakende" },
      { path: "/hizmet", label: "Services", pageId: "hizmet" },
      { path: "/enerji", label: "Energy", pageId: "enerji" },
      { path: "/tarim", label: "Agriculture", pageId: "tarim" },
    ],
  },
} as const;

export function getNavLabels(locale: Locale) {
  return navData[locale];
}

export function getNavLinks(locale: Locale): {
  kurumsal: NavItem[];
  faaliyetler: NavItem[];
} {
  const data = navData[locale];
  const mapItems = (items: readonly { path: string; label: string; pageId: string }[]) =>
    items.map((item) => ({
      href: localizeHref(item.path, locale),
      label: item.label,
      pageId: item.pageId,
    }));
  return {
    kurumsal: mapItems(data.kurumsalLinks),
    faaliyetler: mapItems(data.faaliyetLinks),
  };
}

/** @deprecated use getNavLinks(locale) */
export const navLinks = getNavLinks("tr");

export function activeStyle(active: boolean): CSSProperties | undefined {
  return active ? { color: "var(--primary)", opacity: 1 } : undefined;
}

export function activeDropdownStyle(active: boolean): CSSProperties | undefined {
  return active ? { color: "var(--primary)" } : undefined;
}
