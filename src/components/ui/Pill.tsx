import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./Pill.module.css";

type Tone = "cyan" | "light" | "glass";

interface CommonProps {
  tone?: Tone;
  compact?: boolean;
  className?: string;
  children: ReactNode;
}

type PillProps =
  | (CommonProps & { as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | (CommonProps & { as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (CommonProps & { as: "link"; to: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">);

export function Pill(props: PillProps) {
  const { tone = "cyan", compact = false, className = "", children, as = "button", ...rest } = props;
  const cls = [styles.pill, styles[tone], compact ? styles.compact : "", className]
    .filter(Boolean)
    .join(" ");

  if (as === "link") {
    const { to, ...linkRest } = rest as { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={to} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
