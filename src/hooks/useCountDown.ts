"use client";

import { useEffect, useMemo, useState } from "react";

export type CountDownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const emptyValue: CountDownValue = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculate(target: number): CountDownValue {
  const difference = target - Date.now();

  if (difference <= 0) {
    return emptyValue;
  }

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function useCountDown(targetDate: string) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<CountDownValue>(() =>
    calculate(target),
  );

  useEffect(() => {
    const update = () => setTimeLeft(calculate(target));
    update();

    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, [target]);

  return timeLeft;
}
