import Image from "next/image";
import Link from "next/link";
import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import type { Photo } from "../data/content";
import styles from "./ProjectTeaserCard.module.css";

interface ProjectTeaserCardProps {
  index: string;
  title: string;
  meta: string;
  to: string;
  photo?: Photo;
}

export function ProjectTeaserCard({ index, title, meta, to, photo }: ProjectTeaserCardProps) {
  return (
    <Link href={to} className={styles.card}>
      <div className={styles.imageWrap}>
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={photo.fit === "contain" ? [styles.photo, styles.contain].join(" ") : styles.photo}
          />
        ) : (
          <ImagePlaceholder caption="Drop project shot" />
        )}
      </div>
      <div className={styles.titleRow}>
        <span className={styles.index}>{index}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.arrow} aria-hidden="true">→</span>
      </div>
      <span className={styles.meta}>{meta}</span>
    </Link>
  );
}
