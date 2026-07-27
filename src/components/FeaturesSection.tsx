import Link from "next/link";
import SectionIcon from "@/components/SectionIcon";
import { agenda, challenges, siteConfig } from "@/data/site";

export default function FeaturesSection() {
  return (
    <>
      <section className="challenges section" id="features">
        <div className="section__inner challenges__layout">
          <div className="challenges__intro">
            <p className="eyebrow">Retos {siteConfig.year}</p>
            <h2>
              Del mar a la montaña: problemas reales, soluciones abiertas.
            </h2>
            <p>
              Explora los desafíos, encuentra el que más te inspire y forma un
              equipo con perfiles complementarios.
            </p>
            <Link className="inline-link" href="/convocatoria">
              Ver convocatoria <span>→</span>
            </Link>
          </div>

          <div className="challenge-grid">
            {challenges.map((challenge) => (
              <article
                className={`challenge-card challenge-card--${challenge.tone}`}
                key={challenge.title}
              >
                <SectionIcon name={challenge.icon} size={52} />
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <span className="challenge-card__arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="schedule-venue" aria-label="Agenda y sede">
        <div className="schedule-panel" id="agenda">
          <div className="schedule-panel__inner">
            <p className="eyebrow eyebrow--light">Agenda</p>
            <h2>Un fin de semana para crear, probar y presentar.</h2>

            <div className="agenda-grid">
              {agenda.map((block) => (
                <article className="agenda-day" key={block.day}>
                  <div className="agenda-day__label">
                    <SectionIcon name="calendar" size={30} />
                    <strong>{block.day}</strong>
                  </div>
                  <div className="agenda-day__entries">
                    {block.entries.map(([time, activity]) => (
                      <p key={`${block.day}-${time}`}>
                        <time>{time}</time>
                        <span>{activity}</span>
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <small>
              Horarios sujetos a cambios. La agenda final se publicará antes del
              evento.
            </small>
          </div>
        </div>

        <div className="venue-panel" id="venue">
          <div className="venue-panel__copy">
            <p className="eyebrow">Sede</p>
            <h2>{siteConfig.venue.name}</h2>
            <div className="venue-panel__location">
              <SectionIcon name="pin" size={28} />
              <div>
                <strong>{siteConfig.venue.city}</strong>
                <span>Guerrero, México</span>
              </div>
            </div>
            <p>
              Un punto de encuentro para la colaboración, el aprendizaje y la
              creación de soluciones con sentido.
            </p>
            <a
              className="inline-link"
              href={siteConfig.venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
