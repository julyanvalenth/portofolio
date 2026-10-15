import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { PhotoCarousel } from "./PhotoCarousel";
import { ArrowLink } from "./ui/ArrowLink";
import type { Certificate } from "../data/content";
import styles from "./CertificateCard.module.css";

const categoryLabel: Record<Certificate["category"], string> = {
  course: "Course",
  competition: "Competition",
  event: "Event",
  organization: "Organization",
};

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {certificate.photos.length > 0 ? (
          <>
            <PhotoCarousel photos={certificate.photos} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            <span className={styles.badge}>{categoryLabel[certificate.category]}</span>
          </>
        ) : (
          <ImagePlaceholder caption="Drop certificate image" badge={categoryLabel[certificate.category]} />
        )}
      </div>

      <div className={styles.titleRow}>
        <span className={styles.index}>{certificate.index}</span>
        <div>
          <h3 className={styles.title}>{certificate.title}</h3>
          <span className={styles.issuer}>{certificate.issuer}</span>
        </div>
      </div>

      <div className={styles.footerRow}>
        <span className={styles.year}>{certificate.year}</span>
        {certificate.file ? (
          <ArrowLink to={encodeURI(certificate.file)} external>
            View PDF →
          </ArrowLink>
        ) : (
          <ArrowLink to="/certificates" disabled>
            Verify →
          </ArrowLink>
        )}
      </div>
    </article>
  );
}
