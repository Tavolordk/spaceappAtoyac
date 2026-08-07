"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./AmbientExperience.module.css";

const LEFT_FRAMES = [
  "/ambient/cosmic-jaguar/left/frame-01-dust.webp",
  "/ambient/cosmic-jaguar/left/frame-02-reform.webp",
  "/ambient/cosmic-jaguar/left/frame-03-dance-a.webp",
  "/ambient/cosmic-jaguar/left/frame-04-dance-b.webp",
  "/ambient/cosmic-jaguar/left/frame-05-dissolve.webp",
] as const;

const RIGHT_FRAMES = [
  "/ambient/cosmic-jaguar/right/frame-01-dust.webp",
  "/ambient/cosmic-jaguar/right/frame-02-reform.webp",
  "/ambient/cosmic-jaguar/right/frame-03-dance-a.webp",
  "/ambient/cosmic-jaguar/right/frame-04-dance-b.webp",
  "/ambient/cosmic-jaguar/right/frame-05-dissolve.webp",
] as const;

/*
 * Ciclo completo de ~1.6 s:
 * polvo -> formación -> baile A/B/A/B -> disolución -> polvo -> oculto.
 */
const FRAME_SEQUENCE = [0, 1, 2, 3, 2, 3, 2, 4, 0] as const;
const FRAME_DURATION_MS = 180;
const FINAL_HIDE_DELAY_MS = 90;

type DancerFramesProps = {
  frames: readonly string[];
  activeFrame: number;
  className: string;
  sizes: string;
};

function DancerFrames({ frames, activeFrame, className, sizes }: DancerFramesProps) {
  return (
    <div className={className}>
      {frames.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          unoptimized
          loading="eager"
          draggable={false}
          sizes={sizes}
          className={`${styles.dancerFrame} ${index === activeFrame ? styles.dancerFrameActive : ""}`}
        />
      ))}
    </div>
  );
}

export default function CosmicDanceInterlude() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const playingRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [activeFrame, setActiveFrame] = useState(FRAME_SEQUENCE[0]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let hasPlayedForCurrentEntry = false;

    const clearSequenceTimer = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const play = () => {
      if (playingRef.current) return;

      clearSequenceTimer();
      playingRef.current = true;
      setPlaying(true);

      let position = 0;
      setActiveFrame(FRAME_SEQUENCE[position]);

      const advance = () => {
        position += 1;

        if (position >= FRAME_SEQUENCE.length) {
          timerRef.current = window.setTimeout(() => {
            playingRef.current = false;
            setPlaying(false);
            setActiveFrame(FRAME_SEQUENCE[0]);
            timerRef.current = null;
          }, FINAL_HIDE_DELAY_MS);
          return;
        }

        setActiveFrame(FRAME_SEQUENCE[position]);
        timerRef.current = window.setTimeout(advance, FRAME_DURATION_MS);
      };

      timerRef.current = window.setTimeout(advance, FRAME_DURATION_MS);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
          if (!hasPlayedForCurrentEntry) {
            hasPlayedForCurrentEntry = true;
            play();
          }
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.08) {
          // Al salir de verdad de la franja, queda listo para reproducirse
          // otra vez cuando el usuario vuelva a pasar por ella.
          hasPlayedForCurrentEntry = false;
        }
      },
      {
        threshold: [0, 0.08, 0.28, 0.55],
        rootMargin: "-4% 0px -6% 0px",
      },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      clearSequenceTimer();
      playingRef.current = false;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`${styles.cosmicInterlude} ${playing ? styles.cosmicInterludePlaying : ""}`}
      aria-hidden="true"
    >
      <DancerFrames
        frames={LEFT_FRAMES}
        activeFrame={activeFrame}
        className={`${styles.inlineDancer} ${styles.inlineDancerLeft}`}
        sizes="(max-width: 560px) 105px, (max-width: 900px) 145px, 220px"
      />

      <div className={styles.cosmicTrail}>
        <span className={styles.cosmicStar}>✦</span>
        <span className={styles.cosmicStar}>·</span>
        <span className={styles.cosmicStar}>✧</span>
        <span className={styles.cosmicStar}>·</span>
        <span className={styles.cosmicStar}>✦</span>
      </div>

      <DancerFrames
        frames={RIGHT_FRAMES}
        activeFrame={activeFrame}
        className={`${styles.inlineDancer} ${styles.inlineDancerRight}`}
        sizes="(max-width: 560px) 110px, (max-width: 900px) 150px, 230px"
      />
    </div>
  );
}
