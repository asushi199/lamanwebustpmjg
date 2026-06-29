"use client";

import { useEffect, useState } from "react";
import { formatMalaysiaDateTime } from "@/lib/time";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const interval = window.setInterval(tick, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="live-clock" aria-label="Waktu semasa Malaysia">
      <span className="clock-pulse" aria-hidden="true" />
      <div>
        <span className="clock-label">WAKTU MALAYSIA</span>
        <time dateTime={now?.toISOString()}>
          {now ? formatMalaysiaDateTime(now) : "Menyelaras waktu…"}
        </time>
      </div>
    </div>
  );
}
