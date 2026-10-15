import { ReactNode } from "react";
import styles from "./Chip.module.css";

export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={[styles.chip, className].filter(Boolean).join(" ")}>{children}</span>;
}
