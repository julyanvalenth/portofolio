import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Jakarta",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

function readTime() {
  return formatter.format(new Date());
}

// placeholder first, otherwise the server and client markup don't match
export function useJakartaClock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    setTime(readTime());
    const id = window.setInterval(() => setTime(readTime()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
