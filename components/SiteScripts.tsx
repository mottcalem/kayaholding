"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const heroVideo = document.querySelector<HTMLVideoElement>(".hero-video");
    const heroPoster = document.querySelector<HTMLElement>(".hero-poster");
    if (heroVideo && heroPoster) {
      const onPlaying = () => {
        heroVideo.classList.add("is-playing");
        heroPoster.classList.add("is-hidden");
      };
      if (heroVideo.readyState >= 3) {
        onPlaying();
      } else {
        heroVideo.addEventListener("playing", onPlaying);
        return () => heroVideo.removeEventListener("playing", onPlaying);
      }
    }
  }, [pathname]);

  return null;
}
