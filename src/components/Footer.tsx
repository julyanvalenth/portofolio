import { ArrowLink } from "./ui/ArrowLink";
import styles from "./Footer.module.css";

interface FooterProps {
  right:
    | { type: "text"; label: string }
    | { type: "link"; label: string; to: string };
}

export function Footer({ right }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={["shell", styles.inner].join(" ")}>
        <span className={styles.copy}>© 2026 Julyan Valenth</span>
        {right.type === "text" ? (
          <span className={styles.copy}>{right.label}</span>
        ) : (
          <ArrowLink to={right.to} className={styles.next}>
            {right.label}
          </ArrowLink>
        )}
      </div>
    </footer>
  );
}
