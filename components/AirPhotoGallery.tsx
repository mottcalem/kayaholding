"use client";

import { useCallback, useEffect, useState } from "react";

const PHOTOS = [
  { src: "/img/air/ucak1.jpg", alt: "Havacılık filosu" },
  { src: "/img/air/ucak2.jpg", alt: "Havacılık operasyonları" },
  { src: "/img/air/ucak3.jpg", alt: "Uçak bakım ve hazırlık" },
  { src: "/img/air/ucak4.jpg", alt: "Havacılık tesisleri" },
  { src: "/img/air/ucak5.jpg", alt: "Kabin ve kokpit" },
  { src: "/img/air/ucak6.jpg", alt: "Uçuş operasyonu" },
  { src: "/img/air/ucak7.jpg", alt: "Havacılık yatırımları" },
  { src: "/img/air/ucak8.jpg", alt: "Burhanettin Kaya Havacılık" },
] as const;

export function AirPhotoGallery() {
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
        setIndex((i) => (i > 0 ? i - 1 : PHOTOS.length - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => (i < PHOTOS.length - 1 ? i + 1 : 0));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const current = PHOTOS[index];
  const goPrev = () =>
    setIndex((i) => (i > 0 ? i - 1 : PHOTOS.length - 1));
  const goNext = () =>
    setIndex((i) => (i < PHOTOS.length - 1 ? i + 1 : 0));

  return (
    <>
      <section className="about-intro-section air-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Fotoğraflar</h2>
            <p>Havacılık faaliyetlerimizden seçilmiş görüntüler.</p>
          </div>
          <div className="air-gallery">
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className="air-gallery-item"
                aria-label={`${photo.alt} — büyüt`}
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
            aria-label="Kapat"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            &times;
          </button>
          {PHOTOS.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-nav--prev"
                aria-label="Önceki görsel"
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
                aria-label="Sonraki görsel"
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
