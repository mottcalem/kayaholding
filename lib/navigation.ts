export type NavContext = {
  pageId: string;
  parentPageId: string;
};

export const navLinks = {
  kurumsal: [
    { href: "/hakkimizda", label: "Hakkımızda", pageId: "hakkimizda" },
    { href: "/misyon-vizyon", label: "Misyon ve Vizyon", pageId: "misyon-vizyon" },
    { href: "/yonetim-kurulu", label: "Yönetim Kurulu", pageId: "yonetim-kurulu" },
    { href: "/politikalar", label: "Politikalar", pageId: "politikalar" },
    {
      href: "/sosyal-sorumluluk",
      label: "Sosyal Sorumluluk",
      pageId: "sosyal-sorumluluk",
    },
  ],
  faaliyetler: [
    { href: "/turizm", label: "Turizm", pageId: "turizm" },
    {
      href: "/insaat-gayrimenkul",
      label: "İnşaat & Gayrimenkul",
      pageId: "insaat-gayrimenkul",
    },
    { href: "/perakende", label: "Perakende", pageId: "perakende" },
    { href: "/hizmet", label: "Hizmet", pageId: "hizmet" },
    { href: "/enerji", label: "Enerji", pageId: "enerji" },
    { href: "/tarim", label: "Tarım", pageId: "tarim" },
  ],
} as const;

import type { CSSProperties } from "react";

export function activeStyle(active: boolean): CSSProperties | undefined {
  return active ? { color: "var(--primary)", opacity: 1 } : undefined;
}

export function activeDropdownStyle(active: boolean): CSSProperties | undefined {
  return active ? { color: "var(--primary)" } : undefined;
}
