import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function EditorialHero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__margin-note" aria-hidden="true">
        <span>17° 12′ N</span>
        <i />
        <span>100° 26′ O</span>
      </div>

      <div className="hero__content">
        <p className="overline">Edición local · Guerrero · 2026</p>
        <h1>
          Ideas desde
          <span>el sur</span>
          para problemas
          <em>sin fronteras.</em>
        </h1>

        <div className="hero__intro">
          <p>
            Dos días para investigar, diseñar y construir soluciones con datos
            abiertos, perspectivas distintas y conocimiento del territorio.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/convocatoria">
              Consultar convocatoria
            </Link>
            <a className="text-link" href="#encuentro">
              Conocer el encuentro <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <aside className="field-poster" aria-label="Información principal del evento">
        <div className="field-poster__top">
          <span>Bitácora 01</span>
          <span>Atoyac de Álvarez</span>
        </div>

        <div className="field-poster__mark" aria-hidden="true">
          <span className="field-poster__sun" />
          <svg viewBox="0 0 560 420" preserveAspectRatio="none">
            {Array.from({ length: 10 }).map((_, index) => (
              <path
                key={index}
                d={`M -30 ${330 - index * 18} C 70 ${200 - index * 4}, 170 ${390 - index * 10}, 280 ${260 - index * 4} S 440 ${130 + index * 6}, 600 ${230 - index * 5}`}
              />
            ))}
          </svg>
          <strong>17°</strong>
        </div>

        <div className="field-poster__date">
          <span>10—11</span>
          <p>
            Octubre
            <small>2026</small>
          </p>
        </div>

        <div className="field-poster__footer">
          <span>48 horas</span>
          <span>Ciencia · Datos · Diseño</span>
        </div>
      </aside>

      <div className="hero__countdown">
        <span>Faltan</span>
        <Countdown />
      </div>
    </section>
  );
}
