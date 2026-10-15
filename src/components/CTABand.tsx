import { ReactNode } from "react";
import { Pill } from "./ui/Pill";
import styles from "./CTABand.module.css";

interface CTABandProps {
  heading: ReactNode;
  buttonLabel: string;
  buttonTo: string;
  tone?: "cyan" | "light";
}

export function CTABand({ heading, buttonLabel, buttonTo, tone = "cyan" }: CTABandProps) {
  return (
    <section className={styles.band}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={["shell", styles.inner].join(" ")}>
        <h2 className={styles.heading}>{heading}</h2>
        <Pill as="link" to={buttonTo} tone={tone}>
          {buttonLabel}
        </Pill>
      </div>
    </section>
  );
}
