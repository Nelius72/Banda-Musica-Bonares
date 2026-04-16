"use client";

import { useEffect, useState } from "react";

const statsData = [
  { label: "Músicos", value: 45, suffix: "+" },
  { label: "Actuaciones anuales", value: 87, suffix: "+" },
  { label: "Partituras en archivo", value: 1500, suffix: "+" },
  { label: "Grabaciones discográficas", value: 3, suffix: "" },
];

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;

    const timers = statsData.map((stat, i) => {
      const increment = stat.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < stat.value) {
            newCounts[i] = Math.min(
              stat.value,
              newCounts[i] + increment
            );
          }
          return newCounts;
        });
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-black py-20 border-t border-gold/20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-widest font-[Cinzel]">
          Nuestra trayectoria en cifras
        </h2>

        <p className="mt-3 text-amber-200 text-sm md:text-base">
          Más de un siglo de música, esfuerzo y tradición
        </p>

        {/* Stats grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">

          {statsData.map((stat, i) => (
            <div key={i} className="text-center">

              <div className="text-3xl md:text-5xl font-bold text-white">
                {Math.floor(counts[i])}
                {stat.suffix}
              </div>

              <p className="mt-2 text-amber-200 tracking-wide">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}