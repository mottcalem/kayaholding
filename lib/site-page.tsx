import { AirPhotoGallery } from "@/components/AirPhotoGallery";
import type { Locale } from "@/lib/locale";
import { PageContent, type PageSlug } from "@/lib/page-content";

type Props = {
  slug: PageSlug;
  locale: Locale;
};

export function SitePage({ slug, locale }: Props) {
  return (
    <>
      <PageContent slug={slug} locale={locale} />
      {slug === "havacilik" && <AirPhotoGallery locale={locale} />}
    </>
  );
}
