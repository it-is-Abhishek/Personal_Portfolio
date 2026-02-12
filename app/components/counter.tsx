"use client";

import { useEffect, useState } from "react";

export default function AgeCounter() {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const startDate = new Date(Date.UTC(2005, 5, 27));

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const calculatedYears = diff / (1000 * 60 * 60 * 24 * 365.25);

      setYears(calculatedYears);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-gray-400 font-mono tracking-wide tabular-nums">
      Been here for {years.toFixed(9)} years
    </p>
  );
}
