"use client";

import { useEffect, useRef } from "react";
import styles from "./AmbientExperience.module.css";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: string;
};

const COLORS = ["#63bdca", "#a9dce1", "#dba77f", "#f7f0e7", "#f2c14e"];

export default function FireworksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;

    if (reduceMotion || saveData) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame = 0;
    let raf = 0;
    let destroyed = false;
    const particles: Particle[] = [];
    const triggered = new Set<number>();
    const isSmall = () => window.innerWidth < 768;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const burst = (x: number, y: number, amount?: number) => {
      const count = amount ?? (isSmall() ? 22 : 38);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.2;
        const speed = 1.2 + Math.random() * 3.2;
        const life = 52 + Math.random() * 35;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life,
          maxLife: life,
          size: 1.1 + Math.random() * 1.8,
          hue: Math.random() > 0.18 ? color : COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }

      const cap = isSmall() ? 110 : 210;
      if (particles.length > cap) particles.splice(0, particles.length - cap);
    };

    const launchScene = (scene: number) => {
      const top = height * (isSmall() ? 0.23 : 0.2);
      const spread = isSmall() ? 0.62 : 0.72;
      const x1 = width * (0.5 - spread / 2 + Math.random() * 0.08);
      const x2 = width * (0.5 + spread / 2 - Math.random() * 0.08);

      burst(x1, top + Math.random() * height * 0.13);
      window.setTimeout(() => {
        if (!destroyed) burst(x2, top + Math.random() * height * 0.12);
      }, scene === 0 ? 280 : 180);

      if (!isSmall() && scene === 0) {
        window.setTimeout(() => {
          if (!destroyed) burst(width * 0.68, height * 0.15, 30);
        }, 520);
      }
    };

    const onScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / maxScroll;
      const checkpoints = [0.14, 0.42, 0.7, 0.9];

      checkpoints.forEach((checkpoint, index) => {
        if (progress >= checkpoint && !triggered.has(index + 1)) {
          triggered.add(index + 1);
          launchScene(index + 1);
        }
      });
    };

    const tick = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        particle.life -= 1;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy = particle.vy * 0.985 + 0.025;

        const alpha = Math.max(particle.life / particle.maxLife, 0);
        ctx.globalAlpha = alpha * 0.82;
        ctx.fillStyle = particle.hue;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * (0.65 + alpha * 0.45), 0, Math.PI * 2);
        ctx.fill();

        if (frame % 2 === 0 && alpha > 0.35) {
          ctx.globalAlpha = alpha * 0.22;
          ctx.beginPath();
          ctx.arc(particle.x - particle.vx * 2.3, particle.y - particle.vy * 2.3, particle.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      raf = window.requestAnimationFrame(tick);
    };

    resize();
    const introTimer = window.setTimeout(() => launchScene(0), 900);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      destroyed = true;
      window.clearTimeout(introTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.fireworks} />;
}
