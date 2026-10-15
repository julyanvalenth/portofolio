"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pill } from "./ui/Pill";
import { nav, wordmark } from "../data/content";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/home" className={styles.wordmark}>
          <span>{wordmark.line1}</span>
          <span>{wordmark.line2}</span>
        </Link>

        <ul className={styles.links}>
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[styles.link, active ? styles.active : ""].filter(Boolean).join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.actions}>
          <Pill as="link" to="/home#contact" tone="cyan" compact className={styles.cta}>
            Say hello ✚
          </Pill>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? styles.active : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/home#contact">Say hello ✚</Link>
        </div>
      )}
    </header>
  );
}
