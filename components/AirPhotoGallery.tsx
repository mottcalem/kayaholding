"use client";

import { useCallback, useEffect, useState } from "react";

import type { Locale } from "@/lib/locale";

const copy = {
  tr: {
    title: "Fotoğraflar",
    subtitle: "Havacılık faaliyetlerimizden seçilmiş görüntüler.",
    zoom: "büyüt",
    close: "Kapat",
    prev: "Önceki görsel",
    next: "Sonraki görsel",
    alts: [
      "Havacılık filosu",
      "Havacılık operasyonları",
      "Uçak bakım ve hazırlık",
      "Havacılık tesisleri",
      "Kabin ve kokpit",
      "Uçuş operasyonu",
      "Havacılık yatırımları",
      "Burhanettin Kaya Havacılık",
    ],
  },
  en: {
    title: "Photos",
    subtitle: "Selected images from our aviation operations.",
    zoom: "enlarge",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    alts: [
      "Aviation fleet",
      "Aviation operations",
      "Aircraft maintenance and preparation",
      "Aviation facilities",
      "Cabin and cockpit",
      "Flight operation",
      "Aviation investments",
      "Burhanettin Kaya Aviation",
    ],
  },
} as const;

const PHOTO_SRC = [
  "/img/air/ucak1.jpg",
  "/img/air/ucak2.jpg",
  "/img/air/ucak3.jpg",
  "/img/air/ucak4.jpg",
  "/img/air/ucak5.jpg",
  "/img/air/ucak6.jpg",
  "/img/air/ucak7.jpg",
  "/img/air/ucak8.jpg",
] as const;

export function AirPhotoGallery({ locale = "tr" }: { locale?: Locale }) {
  const t = copy[locale];
  const photos = PHOTO_SRC.map((src, i) => ({ src, alt: t.alts[i] ?? "" }));
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft")
        setIndex((i) => (i > 0 ? i - 1 : photos.length - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => (i < photos.length - 1 ? i + 1 : 0));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const current = photos[index];
  const goPrev = () =>
    setIndex((i) => (i > 0 ? i - 1 : photos.length - 1));
  const goNext = () =>
    setIndex((i) => (i < photos.length - 1 ? i + 1 : 0));

  return (
    <>
      <section className="about-intro-section air-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>
          <div className="air-gallery">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className="air-gallery-item"
                aria-label={`${photo.alt} — ${t.zoom}`}
                onClick={() => openAt(i)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label={t.close}
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            &times;
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--prev"
                aria-label={t.prev}
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
              >
                &#8249;
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--next"
                aria-label={t.next}
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              >
                &#8250;
              </button>
            </>
          )}
          <img
            src={current.src}
            alt={current.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
