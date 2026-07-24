export default function VenueSection() {
  return (
    <section className="venue" id="sede">
      <div className="venue__coordinate" aria-hidden="true">
        <span>17.206°</span>
        <span>−100.433°</span>
      </div>

      <div className="venue__graphic" aria-hidden="true">
        <svg viewBox="0 0 900 680" preserveAspectRatio="none">
          {Array.from({ length: 16 }).map((_, index) => (
            <path
              key={index}
              d={`M -40 ${590 - index * 24} C 100 ${410 - index * 8}, 210 ${670 - index * 14}, 360 ${460 - index * 5} S 620 ${220 + index * 8}, 950 ${390 - index * 7}`}
            />
          ))}
        </svg>
        <span className="venue__point" />
      </div>

      <div className="venue__content">
        <div className="section-label section-label--light">
          <span>04</span>
          <p>Sede</p>
        </div>
        <p className="eyebrow eyebrow--light">Costa Grande de Guerrero</p>
        <h2>Atoyac de Álvarez</h2>
        <p className="venue__lead">
          Un encuentro local debe sentirse local. La sede conecta estudiantes,
          profesionistas, instituciones y comunidades de la región con un reto
          compartido.
        </p>

        <dl className="venue__details">
          <div>
            <dt>Sede académica</dt>
            <dd>Preparatoria No. 23, UAGro</dd>
          </div>
          <div>
            <dt>Modalidad</dt>
            <dd>Presencial</dd>
          </div>
          <div>
            <dt>Fechas</dt>
            <dd>10 y 11 de octubre de 2026</dd>
          </div>
        </dl>

        <a className="button button--paper" href="#contacto">
          Solicitar información de la sede
        </a>
      </div>
    </section>
  );
}
