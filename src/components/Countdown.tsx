"use client";

import useCountDown from "@/hooks/useCountDown";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const time = useCountDown(targetDate);
  const units = [
    ["Días", time.days],
    ["Horas", time.hours],
    ["Min", time.minutes],
    ["Seg", time.seconds],
  ] as const;

  return (
    <div className="countdown" aria-label="Cuenta regresiva">
      {units.map(([label, value]) => (
        <div className="countdown__unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
