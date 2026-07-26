"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./IntroVideoGate.module.css";

type IntroVideoGateProps = {
  children: ReactNode;
};

type IntroPhase = "playing" | "leaving" | "finished";

/**
 * Velocidad del video:
 * 1 = velocidad normal
 * 1.5 = 50% más rápido
 * 1.75 = 75% más rápido
 * 2 = doble de rápido
 */
const VIDEO_PLAYBACK_RATE = 10;
const EXIT_ANIMATION_MS = 250;
const SAFETY_TIMEOUT_MS = 5_000;

export default function IntroVideoGate({
  children,
}: IntroVideoGateProps) {
  const [phase, setPhase] = useState<IntroPhase>("playing");

  const phaseRef = useRef<IntroPhase>("playing");
  const originalBodyOverflowRef = useRef("");
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishIntro = useCallback(() => {
    if (phaseRef.current !== "playing") {
      return;
    }

    phaseRef.current = "leaving";
    setPhase("leaving");

    exitTimerRef.current = setTimeout(() => {
      phaseRef.current = "finished";
      setPhase("finished");
    }, EXIT_ANIMATION_MS);
  }, []);

  useEffect(() => {
    originalBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    safetyTimerRef.current = setTimeout(
      finishIntro,
      SAFETY_TIMEOUT_MS
    );

    return () => {
      document.body.style.overflow =
        originalBodyOverflowRef.current;

      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
      }

      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }
    };
  }, [finishIntro]);

  useEffect(() => {
    if (phase !== "finished") {
      return;
    }

    document.body.style.overflow =
      originalBodyOverflowRef.current;

    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
    }
  }, [phase]);

  const introIsMounted = phase !== "finished";
  const pageIsVisible = phase !== "playing";

  return (
    <>
      <div
        className={`${styles.pageContent} ${
          pageIsVisible
            ? styles.pageContentVisible
            : styles.pageContentHidden
        }`}
        aria-hidden={!pageIsVisible}
      >
        {children}
      </div>

      {introIsMounted && (
        <div
          className={`${styles.intro} ${
            phase === "leaving"
              ? styles.introLeaving
              : ""
          }`}
          aria-label="Animación de introducción de NASA Space Apps Guerrero"
        >
<video
  className={styles.video}
  src="/genera_esta_imagen_empezando_c.mp4"
  autoPlay
  muted
  playsInline
  preload="auto"
  onLoadedMetadata={(event) => {
    const video = event.currentTarget;

    video.defaultPlaybackRate = VIDEO_PLAYBACK_RATE;
    video.playbackRate = VIDEO_PLAYBACK_RATE;
  }}
  onCanPlay={(event) => {
    event.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE;
  }}
  onEnded={finishIntro}
  onError={finishIntro}
/>
        </div>
      )}
    </>
  );
}