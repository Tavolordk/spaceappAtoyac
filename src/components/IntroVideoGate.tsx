"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./IntroVideoGate.module.css";

type IntroVideoGateProps = {
  children: ReactNode;
};

type IntroPhase = "loading" | "playing" | "leaving" | "finished";

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
const SAFETY_TIMEOUT_MS = 12_000;
const STORAGE_KEY = "sag-intro-seen";

function preloadFrame(src: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new window.Image();
    let settled = false;

    const finish = async () => {
      if (settled) {
        return;
      }

      settled = true;

      try {
        // Espera también a que el navegador decodifique la imagen.
        // Así evitamos que el primer recorrido salte frames aunque el archivo
        // ya haya terminado de descargarse.
        await image.decode();
      } catch {
        // onload ya confirma que el recurso está disponible; algunos
        // navegadores pueden rechazar decode() aun cuando pueden pintarlo.
      }

      resolve();
    };

    image.onload = () => {
      void finish();
    };

    // No bloqueamos toda la página por un frame corrupto o una respuesta
    // temporalmente fallida. El timeout de seguridad sigue siendo el último
    // respaldo de la intro.
    image.onerror = () => {
      if (!settled) {
        settled = true;
        resolve();
      }
    };

    image.src = src;

    if (image.complete && image.naturalWidth > 0) {
      void finish();
    }
  });
}

async function preloadFrames(): Promise<void> {
  await Promise.all(FRAMES.map((src) => preloadFrame(src)));
}

export default function IntroVideoGate({ children }: IntroVideoGateProps) {
  const [phase, setPhase] = useState<IntroPhase>("finished");
  const [hydrated, setHydrated] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  const phaseRef = useRef<IntroPhase>("finished");
  const originalBodyOverflowRef = useRef("");
  const bodyLockedRef = useRef(false);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const unlockBody = useCallback(() => {
    if (!bodyLockedRef.current) {
      return;
    }

    document.body.style.overflow = originalBodyOverflowRef.current;
    bodyLockedRef.current = false;
  }, []);

  const leaveIntro = useCallback(
    (rememberAsSeen: boolean) => {
      if (
        phaseRef.current === "finished" ||
        phaseRef.current === "leaving"
      ) {
        return;
      }

      if (rememberAsSeen) {
        try {
          // Se guarda únicamente cuando la intro terminó correctamente o el
          // usuario decidió saltarla; nunca al comenzar la precarga.
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // Ignorar restricciones de almacenamiento del navegador.
        }
      }

      phaseRef.current = "leaving";
      setPhase("leaving");

      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
        safetyTimerRef.current = null;
      }

      exitTimerRef.current = setTimeout(() => {
        phaseRef.current = "finished";
        setPhase("finished");
        unlockBody();
      }, EXIT_ANIMATION_MS);
    },
    [unlockBody]
  );

  const finishIntro = useCallback(() => {
    leaveIntro(true);
  }, [leaveIntro]);

  useEffect(() => {
    setHydrated(true);

    let alreadySeen = true;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // En almacenamiento restringido no bloqueamos al visitante.
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadySeen || prefersReducedMotion) {
      phaseRef.current = "finished";
      setPhase("finished");
      return;
    }

    let cancelled = false;

    originalBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    bodyLockedRef.current = true;

    setFrameIndex(0);
    phaseRef.current = "loading";
    setPhase("loading");

    // Si la red se queda colgada, liberamos la página. No marcamos la intro
    // como vista para que pueda volver a intentarse en una sesión posterior.
    safetyTimerRef.current = setTimeout(() => {
      leaveIntro(false);
    }, SAFETY_TIMEOUT_MS);

    void preloadFrames().then(() => {
      if (cancelled || phaseRef.current !== "loading") {
        return;
      }

      // Todos los frames están descargados y decodificados antes de iniciar.
      setFrameIndex(0);
      phaseRef.current = "playing";
      setPhase("playing");
    });

    return () => {
      cancelled = true;

      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }

      if (safetyTimerRef.current) {
        clearTimeout(safetyTimerRef.current);
        safetyTimerRef.current = null;
      }

      unlockBody();
    };
  }, [leaveIntro, unlockBody]);

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

  const introIsMounted = hydrated && phase !== "finished";
  const pageIsVisible = phase === "leaving" || phase === "finished";

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
          <div
            className={`${styles.mediaWrap} ${
              phase === "loading" ? styles.mediaWrapLoading : ""
            }`}
          >
            {FRAMES.map((src, index) => (
              <img
                key={src}
                className={`${styles.frameImage} ${
                  phase === "playing" && index === frameIndex
                    ? styles.frameImageActive
                    : ""
                }`}
                src={src}
                alt=""
                aria-hidden="true"
                draggable={false}
              />
            ))}

            {phase === "loading" && (
              <span className={styles.loadingIndicator} aria-hidden="true" />
            )}
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
