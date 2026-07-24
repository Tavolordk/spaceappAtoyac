"use client";

import { useEffect, useMemo, useState } from "react";

interface CountdownProps {
  targetDate?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEFAULT_EVENT_DATE = "2026-10-17T09:00:00-06:00";

const EMPTY_TIME: TimeRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculateTimeRemaining(targetDate: Date): TimeRemaining {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return EMPTY_TIME;
  }

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function Countdown({
  targetDate = DEFAULT_EVENT_DATE,
}: CountdownProps) {
  const parsedTargetDate = useMemo(() => new Date(targetDate), [targetDate]);

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(EMPTY_TIME);

  useEffect(() => {
    if (Number.isNaN(parsedTargetDate.getTime())) {
      console.error(`Fecha inválida para Countdown: ${targetDate}`);
      return;
    }

    const updateCountdown = () => {
      setTimeRemaining(calculateTimeRemaining(parsedTargetDate));
    };

    updateCountdown();

    const intervalId = window.setInterval(updateCountdown, 1_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [parsedTargetDate, targetDate]);

  const units = [
    {
      label: " Días",
      value: timeRemaining.days,
    },
    {
      label: " Horas",
      value: timeRemaining.hours,
    },
    {
      label: " Minutos",
      value: timeRemaining.minutes,
    },
    {
      label: " Segundos",
      value: timeRemaining.seconds,
    },
  ];

  return (
    <div className="countdown" aria-label="Cuenta regresiva para el evento">
      {units.map((unit) => (
        <div className="countdown__item" key={unit.label}>
          <strong>{String(unit.value).padStart(2, "0")}</strong>
          <span>{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
