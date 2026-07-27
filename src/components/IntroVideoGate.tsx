"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./IntroVideoGate.module.css";

type IntroVideoGateProps = {
  children: ReactNode;
};

type IntroPhase = "playing" | "leaving" | "finished";

/**
 * Velocidad del video: 1 = normal, 2 = doble, etc.
 */
const VIDEO_PLAYBACK_RATE = 3;
const EXIT_ANIMATION_MS = 250;
const SAFETY_TIMEOUT_MS = 5_000;
const STORAGE_KEY = "sag-intro-seen";

export default function IntroVideoGate({ children }: IntroVideoGateProps) {
  // Arranca "finished" en SSR; el efecto decide si toca mostrar la intro.
  const [phase, setPhase] = useState<IntroPhase>("finished");
  const [hydrated, setHydrated] = useState(false);

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

    let alreadySeen = true;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Modo privado estricto: mejor no bloquear al visitante.
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
      // Ignorar: la intro simplemente se mostraría de nuevo.
    }

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
          <video
            className={styles.video}
            src="/intro.mp4"
            poster="/intro-poster.jpg"
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(event) => {
              const video = event.currentTarget;

              video.defaultPlaybackRate = VIDEO_PLAYBACK_RATE;
              video.playbackRate = VIDEO_PLAYBACK_RATE;

              void video.play().catch(() => {
                // El navegador puede bloquear temporalmente el autoplay.
              });
            }}
            onCanPlay={(event) => {
              event.currentTarget.playbackRate = VIDEO_PLAYBACK_RATE;
            }}
            onEnded={finishIntro}
            onError={finishIntro}
          />

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
