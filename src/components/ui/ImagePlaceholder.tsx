import styles from "./ImagePlaceholder.module.css";

interface ImagePlaceholderProps {
  caption: string;
  badge?: string;
  className?: string;
}

function PhotoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="9.7" cy="9.7" r="2.4" stroke="currentColor" strokeWidth="1.9" />
      <path d="M2 20.6 9 13l4.6 4.9 4-3.8 8.4 9.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImagePlaceholder({ caption, badge, className = "" }: ImagePlaceholderProps) {
  return (
    <div className={[styles.slot, className].filter(Boolean).join(" ")}>
      <div className={styles.empty}>
        <PhotoIcon />
        <span className={styles.caption}>{caption}</span>
      </div>
      <div className={styles.ring} aria-hidden="true" />
      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
  );
}
