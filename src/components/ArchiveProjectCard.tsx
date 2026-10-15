import { ImagePlaceholder } from "./ui/ImagePlaceholder";
import { PhotoCarousel } from "./PhotoCarousel";
import { Chip } from "./ui/Chip";
import { ArrowLink } from "./ui/ArrowLink";
import type { Project } from "../data/content";
import styles from "./ArchiveProjectCard.module.css";

export function ArchiveProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {project.photos.length > 0 ? (
          <PhotoCarousel photos={project.photos} sizes="(max-width: 900px) 100vw, 50vw" />
        ) : (
          <ImagePlaceholder caption="Drop project shot" />
        )}
      </div>

      <div className={styles.titleRow}>
        <span className={styles.index}>{project.index}</span>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.meta}>{project.meta}</span>
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.table}>
        <div className={styles.cell}>
          <span className={styles.label}>Role</span>
          <span className={styles.value}>{project.role}</span>
        </div>
        <div className={styles.cell}>
          <span className={styles.label}>Focus</span>
          <span className={styles.value}>{project.focus}</span>
        </div>
        <div className={styles.cell}>
          <span className={styles.label}>Status</span>
          <span className={[styles.value, styles.status].join(" ")}>{project.status}</span>
        </div>
      </div>

      <div className={styles.footerRow}>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        {project.link ? (
          <ArrowLink to={project.link} external>
            View →
          </ArrowLink>
        ) : (
          <ArrowLink to="/projects" disabled>
            View →
          </ArrowLink>
        )}
      </div>
    </article>
  );
}
