import Link from "next/link";
import { agenda, siteConfig } from "@/data/site";

const sections = [
  {
    number: "01",
    title: "Participantes",
    body: [
      "Educación media superior.",
      "Educación superior, de la UAGro u otras instituciones.",
      "Profesionistas, egresados y público general.",
      "Los equipos podrán integrar hasta seis personas con perfiles diversos.",
    ],
  },
  {
    number: "02",
    title: "Normativa general",
    body: [
      "Los proyectos deberán responder a un reto publicado para la edición.",
      "Se aceptan soluciones de software, hardware, modelos, narrativas y visualizaciones.",
      "El trabajo debe ser original y reconocer cualquier material previo.",
      "El uso de herramientas de inteligencia artificial deberá declararse.",
    ],
  },
  {
    number: "03",
    title: "Entregables",
    body: [
      "Repositorio o enlace público del proyecto.",
      "Descripción del problema, solución, proceso e impacto.",
      "Presentación final frente al jurado local.",
      "Material suficiente para comprender y evaluar el prototipo.",
    ],
  },
  {
    number: "04",
    title: "Evaluación",
    body: [
      "Creatividad e innovación: 30%.",
      "Impacto y factibilidad: 30%.",
      "Calidad técnica: 20%.",
      "Presentación y narrativa: 20%.",
    ],
  },
];

export default function Convocatoria() {
  return (
    <main className="call-page">
      <section className="call-hero">
        <div className="call-hero__inner">
          <p className="hero__date">
            Convocatoria local · {siteConfig.year}
          </p>
          <h1>Construye una solución desde Guerrero.</h1>
          <p>
            Participa en un fin de semana de ciencia, creatividad, tecnología y
            colaboración multidisciplinaria.
          </p>
          <div className="call-hero__meta">
            <span>{siteConfig.dateLabel}</span>
            <span>{siteConfig.venue.name}</span>
            <span>{siteConfig.venue.city}</span>
          </div>
        </div>
      </section>

      <section className="call-content section">
        <div className="section__inner">
          <div className="call-intro">
            <p className="eyebrow">Objetivo</p>
            <h2>
              Impulsar habilidades STEM y el uso creativo de datos abiertos.
            </h2>
            <p>
              La convocatoria está dirigida a personas mayores de 16 años. No
              es necesario llegar con un equipo completo ni dominar una sola
              disciplina.
            </p>
          </div>

          <div className="call-grid">
            {sections.map((section) => (
              <article className="call-card" key={section.number}>
                <span>{section.number}</span>
                <h3>{section.title}</h3>
                <ul>
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="call-timeline">
            <div>
              <p className="eyebrow">Agenda general</p>
              <h2>{siteConfig.dateLabel}</h2>
            </div>
            <div>
              {agenda.map((day) => (
                <article key={day.day}>
                  <strong>{day.day}</strong>
                  {day.entries.map(([time, activity]) => (
                    <p key={`${day.day}-${time}`}>
                      <time>{time}</time>
                      {activity}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>

          <div className="call-cta">
            <div>
              <p className="eyebrow eyebrow--light">Siguiente paso</p>
              <h2>Prepárate para registrar tu equipo.</h2>
              <p>
                La liga oficial de registro se publicará en este espacio cuando
                esté habilitada para la edición {siteConfig.year}.
              </p>
            </div>
            <Link className="button button--aqua" href="/#contact">
              Recibir información <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
