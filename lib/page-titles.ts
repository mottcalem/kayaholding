import type { Locale } from "@/lib/locale";
import type { PageSlug } from "@/lib/page-content";

const titles: Record<Locale, Record<PageSlug, string>> = {
  tr: {
    index: "Ana Sayfa",
    hakkimizda: "Hakkımızda",
    havacilik: "Havacılık",
    "misyon-vizyon": "Misyon ve Vizyon",
    "yonetim-kurulu": "Yönetim Kurulu",
    politikalar: "Kurumsal Politikalar",
    "sosyal-sorumluluk": "Sosyal Sorumluluk",
    turizm: "Turizm",
    "insaat-gayrimenkul": "İnşaat ve Gayrimenkul",
    perakende: "Perakende Sektörü",
    hizmet: "Hizmet Sektörü",
    enerji: "Enerji Sektörü",
    tarim: "Tarım Sektörü",
    haberler: "Bizden Haberler",
    "haber-detay": "Haber Detayı",
    kariyer: "Kariyer",
    iletisim: "İletişim",
    statik: "Kişisel Verilerin Korunması",
  },
  en: {
    index: "Home",
    hakkimizda: "About Us",
    havacilik: "Aviation",
    "misyon-vizyon": "Mission & Vision",
    "yonetim-kurulu": "Board of Directors",
    politikalar: "Corporate Policies",
    "sosyal-sorumluluk": "Social Responsibility",
    turizm: "Tourism",
    "insaat-gayrimenkul": "Construction & Real Estate",
    perakende: "Retail",
    hizmet: "Services",
    enerji: "Energy",
    tarim: "Agriculture",
    haberler: "News",
    "haber-detay": "News Detail",
    kariyer: "Careers",
    iletisim: "Contact",
    statik: "Personal Data Protection",
  },
};

export function pageTitle(locale: Locale, slug: PageSlug): string {
  return titles[locale][slug];
}
