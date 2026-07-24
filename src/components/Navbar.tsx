"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";

const navigation = [
  ["Inicio", "home"],
  ["Misión", "about"],
  ["Retos", "features"],
  ["Agenda", "agenda"],
  ["Sede", "venue"],
  ["Aliados", "sponsors"],
  ["Contacto", "contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hrefFor = (section: string) =>
    pathname === "/" ? `#${section}` : `/#${section}`;

  return (
    <header className={`site-nav ${compact ? "site-nav--compact" : ""}`}>
      <div className="site-nav__inner">
        <Link className="site-brand" href="/" onClick={() => setOpen(false)}>
          <BrandMark />
          <span>
            <strong>SPACE APPS</strong>
            <small>GUERRERO</small>
          </span>
        </Link>

        <nav className="site-nav__desktop" aria-label="Navegación principal">
          {navigation.map(([label, section]) => (
            <a key={section} href={hrefFor(section)}>
              {label}
            </a>
          ))}
        </nav>

        <Link className="site-nav__cta" href="/convocatoria">
          Regístrate ahora <span aria-hidden="true">→</span>
        </Link>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`site-nav__mobile ${open ? "site-nav__mobile--open" : ""}`}
        aria-label="Navegación móvil"
      >
        {navigation.map(([label, section]) => (
          <a
            key={section}
            href={hrefFor(section)}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <Link href="/convocatoria" onClick={() => setOpen(false)}>
          Consultar convocatoria
        </Link>
      </nav>
    </header>
  );
}
