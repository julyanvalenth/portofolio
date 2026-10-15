"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./PhotoCarousel.module.css";

export interface CarouselPhoto {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}

const photoClass = (photo: CarouselPhoto) =>
  photo.fit === "contain" ? [styles.photo, styles.contain].join(" ") : styles.photo;

interface PhotoCarouselProps {
  photos: CarouselPhoto[];
  sizes: string;
  intervalMs?: number;
}

export function PhotoCarousel({ photos, sizes, intervalMs = 4000 }: PhotoCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const isCarousel = photos.length > 1;

  useEffect(() => {
    if (!isCarousel || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => setActive((i) => (i + 1) % photos.length), intervalMs);
    return () => window.clearInterval(id);
    // active is in the deps on purpose, clicking a dot resets the timer
  }, [isCarousel, paused, photos.length, intervalMs, active]);

  if (!isCarousel) {
    const [photo] = photos;
    return <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className={photoClass(photo)} />;
  }

  return (
    <div
      className={styles.carousel}
      role="group"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          aria-hidden={i !== active}
          className={i === active ? [photoClass(photo), styles.slide, styles.slideActive].join(" ") : [photoClass(photo), styles.slide].join(" ")}
        />
      ))}

      <div className={styles.dots}>
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={styles.dotButton}
            aria-label={`Show photo ${i + 1} of ${photos.length}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
          >
            <span className={i === active ? [styles.dot, styles.dotActive].join(" ") : styles.dot} />
          </button>
        ))}
      </div>
    </div>
  );
}
