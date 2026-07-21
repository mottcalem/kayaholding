"use client";

import { useEffect } from "react";
import type { PageSlug } from "@/lib/page-content";
import { ContactLocations } from "@/components/ContactLocations";

type Props = {
  slug: PageSlug;
  scripts: string[];
};

export function PageScripts({ slug, scripts }: Props) {
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
    return <ContactLocations />;
  }

  return null;
}
