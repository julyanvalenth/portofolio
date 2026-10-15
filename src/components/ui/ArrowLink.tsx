import { ReactNode } from "react";
import Link from "next/link";
import styles from "./ArrowLink.module.css";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export function ArrowLink({ to, children, className = "", external, disabled }: ArrowLinkProps) {
  const cls = [styles.link, disabled ? styles.disabled : "", className].filter(Boolean).join(" ");

  if (disabled) {
    return (
      <span className={cls} aria-disabled="true">
        {children}
      </span>
    );
  }

  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={to} className={cls}>
      {children}
    </Link>
  );
}
