const milestones = [
  {
    date: '26 AGO 2026',
    title: 'Apertura de registros',
    description: 'Crea tu cuenta, revisa las ubicaciones disponibles y elige tu evento local.',
  },
  {
    date: '17 SEP 2026',
    title: 'Formación de equipos',
    description: 'Se publican los resúmenes de desafíos y comienza la búsqueda de colaboradores.',
  },
  {
    date: '28 OCT 2026',
    title: 'Retos completos',
    description: 'Analiza los enunciados, identifica datos relevantes y prepara tu estrategia.',
  },
  {
    date: '14–15 NOV 2026',
    title: 'Hackathon global',
    description: 'Diseña, desarrolla, documenta y presenta una solución durante el fin de semana.',
  },
];

export default function MissionTimeline() {
  return (
    <section className="section timeline-section" id="timeline" aria-labelledby="timeline-title">
      <div className="site-shell">
        <span className="section-kicker">Ruta 2026</span>
        <h2 className="section-title" id="timeline-title">
          Del primer registro al lanzamiento del proyecto.
        </h2>
        <p className="section-copy">
          Fechas globales publicadas por NASA Space Apps. La agenda específica de Guerrero podrá agregar
          sesiones locales de preparación y mentoría.
        </p>

        <div className="timeline-grid">
          {milestones.map((milestone) => (
            <article className="timeline-card" key={milestone.title}>
              <span className="timeline-date">{milestone.date}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
