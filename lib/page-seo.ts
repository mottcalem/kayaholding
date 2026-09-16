import type { Metadata } from "next";
import type { PageSlug } from "@/lib/page-content";
import type { Locale } from "@/lib/locale";
import { pageTitle } from "@/lib/page-titles";
import { absoluteUrl } from "@/lib/site-config";

type SeoEntry = {
  /** Title segment before `| Kaya Holding` (non-index pages). */
  title?: string;
  /** Full document title for homepage. */
  titleAbsolute?: string;
  description: string;
};

const SEO: Record<Locale, Record<PageSlug, SeoEntry>> = {
  tr: {
    index: {
      titleAbsolute:
        "Kaya Holding | Turizm, İnşaat, Enerji ve Sürdürülebilir Yatırımlar",
      description:
        "Kaya Holding; turizm, inşaat, gayrimenkul, havacılık, enerji, tarım ve hizmet sektörlerinde Türkiye'den dünyaya uzanan köklü yatırımlarıyla faaliyet gösteren güçlü bir holding grubudur.",
    },
    hakkimizda: {
      description:
        "Yarım asrı aşan deneyim, güçlü finansal yapı ve sürdürülebilir büyüme anlayışıyla Kaya Holding'in kurumsal kimliği, değerleri ve yatırım vizyonu.",
    },
    havacilik: {
      description:
        "Burhanettin Kaya Havacılık; uçak bakım, hangar, charter ve havacılık hizmetlerinde güvenilir, uluslararası standartlarda çözümler sunar.",
    },
    "misyon-vizyon": {
      description:
        "Kaya Holding'in misyonu, vizyonu ve Türkiye'den dünyaya değer katma hedefi; güven, kalite ve sürdürülebilir büyüme ilkeleri.",
    },
    politikalar: {
      description:
        "İnsan kaynakları, sosyal sorumluluk, çevre ve kalite politikalarımız; etik, şeffaf ve sürdürülebilir kurumsal yönetim anlayışımızı yansıtır.",
    },
    "sosyal-sorumluluk": {
      description:
        "Eğitim, çevre, kültür-sanat ve sosyal dayanışma alanlarında sürdürülebilir kurumsal sosyal sorumluluk projeleri ve toplumsal katkı.",
    },
    turizm: {
      description:
        "Kaya Hotels & Resorts ve Kaya Palazzo; Türkiye, KKTC ve İngiltere'de 14 otel, 15.000 yatak kapasitesi ve turizmde öncü yatırımlar.",
    },
    "insaat-gayrimenkul": {
      description:
        "Kaya İnşaat; otel, kongre merkezi, konut ve iş merkezi projelerinde yarım asırlık tecrübe ve güçlü referanslar.",
    },
    perakende: {
      description:
        "Abant Doğal Kaynak Suyu; Bolu, Gölcük ve Burdur tesislerinde yüksek hijyen ve kalite standartlarıyla doğal kaynak suyu üretimi.",
    },
    hizmet: {
      description:
        "Havacılıktan akaryakıta, lojistikten kurumsal hizmetlere Kaya Holding'in hizmet sektöründeki yatırımları ve operasyonel gücü.",
    },
    enerji: {
      description:
        "Güneş ve rüzgar enerjisi yatırımları, sürdürülebilir üretim ve enerji verimliliği odaklı temiz enerji çözümleri.",
    },
    tarim: {
      description:
        "Trakya ve Antalya'da tarla ve meyve üretimi; buğday, kanola, nar ve avokado ile sürdürülebilir tarımsal yatırımlar.",
    },
    haberler: {
      description:
        "Kaya Holding'den güncel haberler, yatırım duyuruları ve basın yansımaları.",
    },
    "haber-detay": {
      description:
        "Kaya Holding haber detayı; kurumsal gelişmeler, yeni yatırımlar ve sektörel duyurular.",
    },
    kariyer: {
      description:
        "Kaya Holding kariyer fırsatları; global vizyon, gelişim programları, eşit fırsat ve açık pozisyonlar.",
    },
    iletisim: {
      description:
        "Kaya Holding iletişim; merkez ofis, fabrika ve tesis adresleri, telefon ve iletişim formu.",
    },
    statik: {
      description:
        "Kaya Holding kişisel verilerin korunması, gizlilik ve veri işleme politikası hakkında bilgilendirme.",
    },
  },
  en: {
    index: {
      titleAbsolute:
        "Kaya Holding | Tourism, Construction, Energy & Sustainable Investments",
      description:
        "Kaya Holding is a established investment group operating across tourism, construction, real estate, aviation, energy, agriculture, and services—from Turkey to the world.",
    },
    hakkimizda: {
      description:
        "Learn about Kaya Holding's corporate identity, values, and investment vision built on more than half a century of experience and sustainable growth.",
    },
    havacilik: {
      description:
        "Burhanettin Kaya Aviation delivers trusted aircraft maintenance, hangar, charter, and aviation services to international standards.",
    },
    "misyon-vizyon": {
      description:
        "Kaya Holding's mission and vision for adding value from Turkey to the world—grounded in trust, quality, and sustainable growth.",
    },
    politikalar: {
      description:
        "Our human resources, social responsibility, environmental, and quality policies reflect ethical, transparent, and sustainable corporate governance.",
    },
    "sosyal-sorumluluk": {
      description:
        "Sustainable corporate social responsibility across education, the environment, culture and the arts, and social solidarity.",
    },
    turizm: {
      description:
        "Kaya Hotels & Resorts and Kaya Palazzo: 14 hotels across Turkey, the TRNC, and the UK with 15,000 beds and pioneering tourism investments.",
    },
    "insaat-gayrimenkul": {
      description:
        "Kaya Construction: more than 50 years of experience in hotels, convention centers, residential, and business center projects.",
    },
    perakende: {
      description:
        "Abant Natural Spring Water produced at Bolu, Gölcük, and Burdur facilities to the highest hygiene and quality standards.",
    },
    hizmet: {
      description:
        "Kaya Holding's investments in services—from aviation and fuel retail to logistics and corporate operations.",
    },
    enerji: {
      description:
        "Solar and wind energy investments, sustainable production, and clean energy solutions focused on efficiency.",
    },
    tarim: {
      description:
        "Field and fruit production in Thrace and Antalya—wheat, canola, pomegranate, and avocado through sustainable agricultural investments.",
    },
    haberler: {
      description:
        "Latest news, investment announcements, and media coverage from Kaya Holding.",
    },
    "haber-detay": {
      description:
        "Kaya Holding news detail: corporate developments, new investments, and sector announcements.",
    },
    kariyer: {
      description:
        "Careers at Kaya Holding: global vision, development programs, equal opportunity, and open positions.",
    },
    iletisim: {
      description:
        "Contact Kaya Holding: head office, plant and facility addresses, phone numbers, and contact form.",
    },
    statik: {
      description:
        "Kaya Holding personal data protection, privacy, and data processing policy information.",
    },
  },
};

function localePaths(slug: PageSlug) {
  return {
    tr: slug === "index" ? "/" : `/${slug}`,
    en: slug === "index" ? "/en" : `/en/${slug}`,
  };
}

export const defaultSiteDescription =
  SEO.tr.index.description;

export function buildPageMetadata(locale: Locale, slug: PageSlug): Metadata {
  const entry = SEO[locale][slug];
  const paths = localePaths(slug);
  const canonical = absoluteUrl(locale === "tr" ? paths.tr : paths.en);
  const titleSegment = entry.title ?? pageTitle(locale, slug);
  const documentTitle =
    slug === "index"
      ? (entry.titleAbsolute ??
        `${pageTitle(locale, slug)} | Kaya Holding`)
      : `${titleSegment} | Kaya Holding`;

  return {
    title: slug === "index" ? { absolute: documentTitle } : titleSegment,
    description: entry.description,
    alternates: {
      canonical,
      languages: {
        tr: absoluteUrl(paths.tr),
        en: absoluteUrl(paths.en),
        "x-default": absoluteUrl(paths.tr),
      },
    },
    openGraph: {
      title: documentTitle,
      description: entry.description,
      url: canonical,
      siteName: "Kaya Holding",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: entry.description,
    },
  };
}
