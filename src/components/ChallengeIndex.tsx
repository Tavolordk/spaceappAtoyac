"use client";

import { useState } from "react";

type Route = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  questions: string[];
  skills: string[];
};

const routes: Route[] = [
  {
    id: "territorio",
    number: "01",
    title: "Leer el territorio",
    eyebrow: "Tierra · clima · agua",
    description:
      "Convierte observaciones y datos ambientales en herramientas que ayuden a comprender lo que sucede alrededor de nosotros.",
    questions: [
      "¿Cómo hacemos visible un cambio que ocurre lentamente?",
      "¿Qué dato puede ayudar a una comunidad a decidir mejor?",
    ],
    skills: ["Datos", "Geografía", "Ciencia", "Visualización"],
  },
  {
    id: "sistemas",
    number: "02",
    title: "Construir sistemas",
    eyebrow: "Software · automatización · IA",
    description:
      "Diseña productos y prototipos que conviertan información compleja en una herramienta clara, útil y verificable.",
    questions: [
      "¿Qué proceso puede ser más accesible?",
      "¿Dónde una automatización aporta valor real?",
    ],
    skills: ["Software", "IA", "Producto", "Ingeniería"],
  },
  {
    id: "exploracion",
    number: "03",
    title: "Imaginar exploraciones",
    eyebrow: "Espacio · misión · futuro",
    description:
      "Propón nuevas formas de estudiar, explicar o experimentar la exploración de la Tierra y el espacio.",
    questions: [
      "¿Cómo se prepara una misión con recursos limitados?",
      "¿Qué experiencia acerca la ciencia a más personas?",
    ],
    skills: ["Investigación", "Ingeniería", "Diseño", "Simulación"],
  },
  {
    id: "historias",
    number: "04",
    title: "Contar lo importante",
    eyebrow: "Narrativa · comunicación · educación",
    description:
      "Haz que los datos y hallazgos puedan ser comprendidos, discutidos y utilizados por audiencias distintas.",
    questions: [
      "¿Qué historia está escondida dentro de los datos?",
      "¿Cómo explicamos sin simplificar de más?",
    ],
    skills: ["Narrativa", "Diseño", "Video", "Educación"],
  },
];

export default function ChallengeIndex() {
  const [activeId, setActiveId] = useState(routes[0].id);
  const active = routes.find((route) => route.id === activeId) ?? routes[0];

  return (
    <section className="challenges" id="retos">
      <div className="section-label section-label--light">
        <span>02</span>
        <p>Rutas de trabajo</p>
      </div>

      <header className="challenges__header">
        <p className="eyebrow eyebrow--light">Un reto empieza con una buena pregunta.</p>
        <h2>Cuatro entradas. Ninguna solución predeterminada.</h2>
      </header>

      <div className="challenge-index">
        <div className="challenge-index__list" role="tablist" aria-label="Rutas de trabajo">
          {routes.map((route) => {
            const selected = route.id === activeId;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "is-active" : ""}
                key={route.id}
                onClick={() => setActiveId(route.id)}
              >
                <span>{route.number}</span>
                <strong>{route.title}</strong>
                <small>{route.eyebrow}</small>
              </button>
            );
          })}
        </div>

        <article className="challenge-detail" key={active.id}>
          <div className="challenge-detail__heading">
            <span>{active.number}</span>
            <p>{active.eyebrow}</p>
          </div>
          <h3>{active.title}</h3>
          <p className="challenge-detail__description">{active.description}</p>
          <div className="challenge-detail__questions">
            <small>Preguntas de partida</small>
            {active.questions.map((question) => (
              <p key={question}>{question}</p>
            ))}
          </div>
          <div className="challenge-detail__skills">
            {active.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
