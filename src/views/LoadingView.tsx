"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoadingView.module.css";

const DURATION_MS = 1800;

function IconBars() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6.7 5v10M13.3 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPulse() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="6.7" r="3.3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.3 17.5c0-3.7 3-6.7 6.7-6.7s6.7 3 6.7 6.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1.7" y="1.7" width="16.7" height="16.7" rx="0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.7 10h16.7M8.5 1.7v16.7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ReplayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M12.3 7A5.3 5.3 0 1 1 10 2.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M9.9 1.6 10.2 3.9 7.8 4.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LoadingView() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [runId, setRunId] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>();

  const runAnimation = useCallback((timestamp: number) => {
    if (startRef.current === null) startRef.current = timestamp;
    const elapsed = timestamp - startRef.current;
    const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
    setProgress(pct);
    if (pct < 100) {
      frameRef.current = requestAnimationFrame(runAnimation);
    }
  }, []);

  useEffect(() => {
    startRef.current = null;
    setProgress(0);
    frameRef.current = requestAnimationFrame(runAnimation);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [runId, runAnimation]);

  const ready = progress >= 100;

  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.iconRow}>
          <span className={styles.iconGlass}>
            <IconBars />
          </span>
          <span className={styles.iconActive}>
            <IconPulse />
          </span>
          <span className={styles.iconGlass}>
            <IconCompass />
          </span>
        </div>

        <h1 className={styles.title}>
          <span>Welcome to my</span>
          <span>Portfolio Website</span>
        </h1>

        <div className={styles.urlPill}>
          <span className={styles.dot} aria-hidden="true" />
          www.julyan.dev
        </div>

        <div className={styles.buttonRow}>
          <button
            type="button"
            className={styles.enter}
            onClick={() => router.push("/home")}
            disabled={!ready}
          >
            Enter portfolio →
          </button>
          <button
            type="button"
            className={styles.replay}
            onClick={() => setRunId((id) => id + 1)}
          >
            <ReplayIcon />
            Replay
          </button>
        </div>
      </div>

      <div className={styles.progressWrap}>
        <div className={styles.progressLabels}>
          <span>{ready ? "Ready" : "Loading"}</span>
          <span>{progress}%</span>
        </div>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </main>
  );
}
