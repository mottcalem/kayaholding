"use client";

import { useEffect } from "react";
import type { PageSlug } from "@/lib/page-content";
import type { Locale } from "@/lib/locale";
import { ContactLocations } from "@/components/ContactLocations";
import { SiteFormSubmit } from "@/components/SiteFormSubmit";

type Props = {
  slug: PageSlug;
  locale: Locale;
  scripts: string[];
};

export function PageScripts({ slug, locale, scripts }: Props) {
  useEffect(() => {
    if (slug === "politikalar") {
      const sections = document.querySelectorAll(".policy-article");
      const navLinks = document.querySelectorAll(".policy-nav a");

      const onScroll = () => {
        let current = "";
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id") ?? "";
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          const href = link.getAttribute("href") ?? "";
          if (href.includes(current)) {
            link.classList.add("active");
          }
        });
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [slug, scripts]);

  if (slug === "iletisim") {
    return (
      <>
        <SiteFormSubmit slug={slug} locale={locale} />
        <ContactLocations />
      </>
    );
  }

  if (slug === "kariyer") {
    return <SiteFormSubmit slug={slug} locale={locale} />;
  }

  return null;
}
