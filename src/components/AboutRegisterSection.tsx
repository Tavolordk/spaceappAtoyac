import SectionIcon from "@/components/SectionIcon";
import { missionItems } from "@/data/site";

export default function AboutRegisterSection() {
  return (
    <section className="mission section" id="about">
      <div className="section__inner mission__grid">
        <div className="mission__intro">
          <p className="eyebrow">Nuestra misión</p>
          <h2>Talento local para desafíos que no conocen fronteras.</h2>
          <p>
            Reunimos a estudiantes, profesionistas, científicos, diseñadores,
            narradores y personas curiosas para convertir datos abiertos en
            soluciones útiles.
          </p>
          <p>
            Construimos propuestas con impacto social, ambiental, tecnológico y
            científico para Guerrero y el mundo.
          </p>
        </div>

        <div className="mission__items">
          {missionItems.map((item) => (
            <article className="mission-card" key={item.title}>
              <SectionIcon
                name={item.icon}
                size={46}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
