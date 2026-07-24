"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "El encuentro", href: "#encuentro" },
  { label: "Retos", href: "#retos" },
  { label: "Programa", href: "#programa" },
  { label: "Sede", href: "#sede" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const update = () => setCompact(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <Link className="wordmark" href="/" aria-label="Ir al inicio">
        <span className="wordmark__edition">GRO / 26</span>
        <span className="wordmark__name">
          Space Apps
          <small>Guerrero</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <Link className="header-cta" href="/convocatoria">
          Convocatoria
        </Link>
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <p>Índice</p>
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={close}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
        <Link href="/convocatoria" onClick={close}>
          <span>05</span>
          Convocatoria
        </Link>
      </div>
    </header>
  );
}
