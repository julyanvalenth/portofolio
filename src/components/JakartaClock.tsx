"use client";

import { useJakartaClock } from "../hooks/useJakartaClock";

export function JakartaClock({ className }: { className?: string }) {
  return <span className={className}>{useJakartaClock()}</span>;
}
