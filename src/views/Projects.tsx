"use client";

import { useMemo, useState } from "react";
import { FilterTabs } from "../components/FilterTabs";
import { ArchiveProjectCard } from "../components/ArchiveProjectCard";
import { CTABand } from "../components/CTABand";
import { projects, type ProjectCategory } from "../data/content";
import styles from "./Projects.module.css";

type FilterValue = "all" | ProjectCategory;

const filterOptions: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
  { value: "design", label: "Design" },
];

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={["shell", styles.heroTop].join(" ")}>
          <div>
            <span className={styles.eyebrow}>Archive — {String(filtered.length).padStart(2, "0")} entries</span>
            <h1 className={styles.heading}>
              Selected
              <br />
              Projects
            </h1>
          </div>
          <p className={styles.description}>
            Apps I&apos;ve built and interfaces I&apos;ve designed, mostly for class projects. Filter by
            mobile, web or design.
          </p>
        </div>
        <div className={["shell", styles.filterRow].join(" ")}>
          <FilterTabs options={filterOptions} active={filter} onChange={setFilter} />
        </div>
      </section>

      <section className={["shell", styles.grid].join(" ")}>
        {filtered.map((project) => (
          <ArchiveProjectCard key={project.index} project={project} />
        ))}
      </section>

      <CTABand
        heading={
          <>
            Have something you want built? <span className={styles.plus}>✚</span>
          </>
        }
        buttonLabel="Say hello ✚"
        buttonTo="/home#contact"
        tone="cyan"
      />
    </main>
  );
}
