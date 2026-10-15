"use client";

import { useMemo, useState } from "react";
import { FilterTabs } from "../components/FilterTabs";
import { CertificateCard } from "../components/CertificateCard";
import { CTABand } from "../components/CTABand";
import { certificates, type CertCategory } from "../data/content";
import styles from "./Certificates.module.css";

type FilterValue = "all" | CertCategory;

const filterOptions: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "course", label: "Course" },
  { value: "competition", label: "Competition" },
  { value: "event", label: "Event" },
  { value: "organization", label: "Organization" },
];

export function Certificates() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(
    () => (filter === "all" ? certificates : certificates.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={["shell", styles.heroInner].join(" ")}>
          <span className={styles.eyebrow}>
            Credentials — {String(filtered.length).padStart(2, "0")} entries
          </span>
          <h1 className={styles.heading}>Certificates</h1>
          <p className={styles.description}>
            Courses, competitions, seminars and organization work outside my regular classes.
          </p>
          <div className={styles.filterRow}>
            <FilterTabs options={filterOptions} active={filter} onChange={setFilter} />
          </div>
        </div>
      </section>

      <section className={["shell", styles.grid].join(" ")}>
        {filtered.map((certificate) => (
          <CertificateCard key={certificate.index} certificate={certificate} />
        ))}
      </section>

      <CTABand
        heading="Want the work behind the credentials?"
        buttonLabel="View projects →"
        buttonTo="/projects"
        tone="light"
      />
    </main>
  );
}
