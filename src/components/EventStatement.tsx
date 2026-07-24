const facts = [
  { value: "48 h", text: "para pasar de una pregunta a un prototipo" },
  { value: "+16", text: "edad mínima para participar en la sede local" },
  { value: "1 equipo", text: "con disciplinas que normalmente no se encuentran" },
];

const disciplines = [
  "Programación",
  "Ciencia",
  "Diseño",
  "Comunicación",
  "Ingeniería",
  "Educación",
  "Datos",
  "Narrativa",
];

export default function EventStatement() {
  return (
    <section className="statement" id="encuentro">
      <div className="section-label">
        <span>01</span>
        <p>El encuentro</p>
      </div>

      <div className="statement__copy">
        <p className="eyebrow">No es una conferencia.</p>
        <h2>
          Aquí no vienes a escuchar el futuro.
          <span>Vienes a trabajar en él.</span>
        </h2>
        <div className="statement__columns">
          <p>
            Un hackathon funciona cuando reúne personas que observan el mismo
            problema desde lugares distintos. La tecnología es una herramienta,
            no el punto de partida.
          </p>
          <p>
            Puedes participar aunque no programes. Investigar, organizar,
            visualizar, explicar, diseñar y contar una historia también construye
            una solución.
          </p>
        </div>
      </div>

      <div className="fact-strip">
        {facts.map((fact) => (
          <article key={fact.value}>
            <strong>{fact.value}</strong>
            <p>{fact.text}</p>
          </article>
        ))}
      </div>

      <div className="discipline-line" aria-label="Disciplinas participantes">
        {disciplines.map((discipline) => (
          <span key={discipline}>{discipline}</span>
        ))}
      </div>
    </section>
  );
}
