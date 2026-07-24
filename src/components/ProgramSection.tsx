const saturday = [
  ["08:30", "Registro y bienvenida"],
  ["09:30", "Apertura de la sede"],
  ["10:15", "Presentación de retos"],
  ["11:00", "Formación de equipos"],
  ["12:00", "Inicio del desarrollo"],
  ["18:30", "Revisión con mentores"],
];

const sunday = [
  ["09:00", "Continuación del desarrollo"],
  ["11:30", "Prueba de prototipos"],
  ["14:30", "Cierre de entregas"],
  ["16:00", "Presentaciones"],
  ["18:00", "Evaluación y cierre"],
];

function DaySchedule({
  day,
  date,
  items,
}: {
  day: string;
  date: string;
  items: string[][];
}) {
  return (
    <article className="day-schedule">
      <header>
        <p>{day}</p>
        <strong>{date}</strong>
      </header>
      <div>
        {items.map(([time, description]) => (
          <div className="schedule-row" key={`${time}-${description}`}>
            <time>{time}</time>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ProgramSection() {
  return (
    <section className="program" id="programa">
      <div className="section-label">
        <span>03</span>
        <p>Programa</p>
      </div>

      <header className="program__header">
        <p className="eyebrow">Una agenda de trabajo, no de espectadores.</p>
        <h2>Dos días para avanzar con ritmo y propósito.</h2>
      </header>

      <div className="program__days">
        <DaySchedule day="Sábado" date="10 OCT" items={saturday} />
        <DaySchedule day="Domingo" date="11 OCT" items={sunday} />
      </div>

      <p className="program__note">
        Horarios preliminares. La agenda detallada se publicará junto con la
        convocatoria final.
      </p>
    </section>
  );
}
