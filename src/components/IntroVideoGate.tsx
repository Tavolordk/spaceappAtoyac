"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./IntroVideoGate.module.css";

type IntroVideoGateProps = {
  children: ReactNode;
};

type IntroPhase = "playing" | "leaving" | "finished";

const FRAMES = [
  "/intro-frames/frame-01.webp",
  "/intro-frames/frame-02.webp",
  "/intro-frames/frame-03.webp",
  "/intro-frames/frame-04.webp",
  "/intro-frames/frame-05.webp",
  "/intro-frames/frame-06.webp",
  "/intro-frames/frame-07.webp",
  "/intro-frames/frame-08.webp",
] as const;

const FRAME_DURATION_MS = 180;
const FINAL_HOLD_MS = 420;
const EXIT_ANIMATION_MS = 300;
const SAFETY_TIMEOUT_MS = 5_000;
const STORAGE_KEY = "sag-intro-seen";

export default function IntroVideoGate({ children }: IntroVideoGateProps) {
  const [phase, setPhase] = useState<IntroPhase>("finished");
  const [hydrated, setHydrated] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  const phaseRef = useRef<IntroPhase>("finished");
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
    setHydrated(true);

    FRAMES.forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });

    let alreadySeen = true;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Ignorar.
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadySeen || prefersReducedMotion) {
      return;
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignorar.
    }

    setFrameIndex(0);
    phaseRef.current = "playing";
    setPhase("playing");

    originalBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    safetyTimerRef.current = setTimeout(finishIntro, SAFETY_TIMEOUT_MS);

    return () => {
      document.body.style.overflow = originalBodyOverflowRef.current;

      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
      }

      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
      }
    };
  }, [finishIntro]);

  useEffect(() => {
    if (phase !== "playing") {
      return;
    }

    if (frameIndex >= FRAMES.length - 1) {
      const holdTimer = setTimeout(finishIntro, FINAL_HOLD_MS);
      return () => clearTimeout(holdTimer);
    }

    const frameTimer = setTimeout(() => {
      setFrameIndex((current) => Math.min(current + 1, FRAMES.length - 1));
    }, FRAME_DURATION_MS);

    return () => clearTimeout(frameTimer);
  }, [phase, frameIndex, finishIntro]);

  useEffect(() => {
    if (phase !== "finished") {
      return;
    }

    document.body.style.overflow = originalBodyOverflowRef.current;

    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
    }
  }, [phase]);

  const introIsMounted = hydrated && phase !== "finished";
  const pageIsVisible = phase !== "playing";

  return (
    <>
      <div
        className={`${styles.pageContent} ${
          pageIsVisible ? styles.pageContentVisible : styles.pageContentHidden
        }`}
        aria-hidden={!pageIsVisible}
      >
        {children}
      </div>

      {introIsMounted && (
        <div
          className={`${styles.intro} ${
            phase === "leaving" ? styles.introLeaving : ""
          }`}
          aria-label="Animación de introducción de NASA Space Apps Guerrero"
        >
          <div className={styles.mediaWrap}>
            {FRAMES.map((src, index) => (
              <img
                key={src}
                className={`${styles.frameImage} ${
                  index === frameIndex ? styles.frameImageActive : ""
                }`}
                src={src}
                alt=""
                aria-hidden="true"
                draggable={false}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.skipButton}
            onClick={finishIntro}
          >
            Saltar intro <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </>
  );
}
