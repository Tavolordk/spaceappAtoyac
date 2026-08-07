"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AmbientExperience.module.css";

const LEFT_FRAMES = [
  "/ambient/cosmic-sides/left/frame-01-dust.webp",
  "/ambient/cosmic-sides/left/frame-02-form-a.webp",
  "/ambient/cosmic-sides/left/frame-03-form-b.webp",
  "/ambient/cosmic-sides/left/frame-04-form-c.webp",
  "/ambient/cosmic-sides/left/frame-05-dance-a.webp",
  "/ambient/cosmic-sides/left/frame-06-dance-b.webp",
  "/ambient/cosmic-sides/left/frame-07-dissolve.webp",
  "/ambient/cosmic-sides/left/frame-08-firework.webp",
] as const;

const RIGHT_FRAMES = [
  "/ambient/cosmic-sides/right/frame-01-dust.webp",
  "/ambient/cosmic-sides/right/frame-02-form-a.webp",
  "/ambient/cosmic-sides/right/frame-03-form-b.webp",
  "/ambient/cosmic-sides/right/frame-04-form-c.webp",
  "/ambient/cosmic-sides/right/frame-05-dance-a.webp",
  "/ambient/cosmic-sides/right/frame-06-dance-b.webp",
  "/ambient/cosmic-sides/right/frame-07-dissolve.webp",
  "/ambient/cosmic-sides/right/frame-08-firework.webp",
] as const;

const FRAME_SEQUENCE = [0, 1, 2, 3, 4, 5, 4, 5, 6, 7] as const;
const FRAME_DURATION_MS = 235;
const REAPPEAR_COOLDOWN_MS = 1700;
const VISIBILITY_BUFFER_MS = 280;
const ROCKET_START_POSITION = FRAME_SEQUENCE.length - 2;
const BURST_DELAY_MS = 300;

type SideDancerProps = {
  frames: readonly string[];
  activeFrame: number;
  className: string;
};

function SideDancer({ frames, activeFrame, className }: SideDancerProps) {
  return (
    <div className={className}>
      {frames.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          unoptimized
          draggable={false}
          sizes="(max-width: 560px) 110px, (max-width: 900px) 150px, 220px"
          className={`${styles.dancerFrame} ${index === activeFrame ? styles.dancerFrameActive : ""}`}
        />
      ))}
    </div>
  );
}

export default function RegionalDancers() {
  const [visible, setVisible] = useState(false);
  const [frame, setFrame] = useState<number>(FRAME_SEQUENCE[0]);
  const [burstActive, setBurstActive] = useState(false);
  const [rocketActive, setRocketActive] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const stepTimer = useRef<number | null>(null);
  const burstDelayTimer = useRef<number | null>(null);
  const playingRef = useRef(false);
  const lastShowAt = useRef(0);

  const totalDuration = useMemo(
    () => FRAME_SEQUENCE.length * FRAME_DURATION_MS + VISIBILITY_BUFFER_MS,
    [],
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const sections = Array.from(
      document.querySelectorAll("main section, main [id]"),
    );
    if (sections.length === 0) return;

    const clearMotionTimers = () => {
      if (burstDelayTimer.current) {
        window.clearTimeout(burstDelayTimer.current);
        burstDelayTimer.current = null;
      }
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
      if (stepTimer.current) {
        window.clearInterval(stepTimer.current);
        stepTimer.current = null;
      }
    };

    const resetSequence = () => {
      setVisible(false);
      setRocketActive(false);
      setBurstActive(false);
      setFrame(FRAME_SEQUENCE[0]);
      playingRef.current = false;
      clearMotionTimers();
    };

    const startSequence = () => {
      const now = Date.now();
      if (playingRef.current || now - lastShowAt.current < REAPPEAR_COOLDOWN_MS)
        return;
      playingRef.current = true;
      lastShowAt.current = now;

      setVisible(true);
      setRocketActive(false);
      setBurstActive(false);
      setFrame(FRAME_SEQUENCE[0]);

      let position = 0;
      stepTimer.current = window.setInterval(() => {
        position += 1;
        if (position >= FRAME_SEQUENCE.length) {
          if (stepTimer.current) window.clearInterval(stepTimer.current);
          stepTimer.current = null;
          return;
        }

        const nextFrame = FRAME_SEQUENCE[position];
        setFrame(nextFrame);

        if (position >= ROCKET_START_POSITION) {
          setRocketActive(true);
          if (!burstDelayTimer.current) {
            burstDelayTimer.current = window.setTimeout(() => {
              setBurstActive(true);
            }, BURST_DELAY_MS);
          }
        }
      }, FRAME_DURATION_MS);

      hideTimer.current = window.setTimeout(() => {
        resetSequence();
      }, totalDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries.some(
            (entry) => entry.isIntersecting && entry.intersectionRatio > 0.22,
          )
        ) {
          startSequence();
        }
      },
      { threshold: [0.22, 0.42], rootMargin: "-10% 0px -16% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    const firstEntrance = window.setTimeout(startSequence, 1450);

    return () => {
      observer.disconnect();
      window.clearTimeout(firstEntrance);
      resetSequence();
    };
  }, [totalDuration]);

  return (
    <div
      className={`${styles.dancers} ${visible ? styles.dancersVisible : ""}`}
    >
      <div
        className={`${styles.skyRocket} ${styles.skyRocketLeft} ${rocketActive ? styles.skyRocketActive : ""}`}
        aria-hidden="true"
      >
        <span className={styles.skyRocketTrail} />
        <span className={styles.skyRocketHead} />
      </div>
      <div
        className={`${styles.skyRocket} ${styles.skyRocketRight} ${rocketActive ? styles.skyRocketActive : ""}`}
        aria-hidden="true"
      >
        <span className={styles.skyRocketTrail} />
        <span className={styles.skyRocketHead} />
      </div>

      <div
        className={`${styles.burst} ${styles.burstLeft} ${burstActive ? styles.burstVisible : ""}`}
      />
      <div
        className={`${styles.burst} ${styles.burstRight} ${burstActive ? styles.burstVisible : ""}`}
      />

      <SideDancer
        frames={LEFT_FRAMES}
        activeFrame={frame}
        className={`${styles.dancerStage} ${styles.dancerStageLeft}`}
      />

      <SideDancer
        frames={RIGHT_FRAMES}
        activeFrame={frame}
        className={`${styles.dancerStage} ${styles.dancerStageRight}`}
      />
    </div>
  );
}
