import Image from "next/image";

const sponsors = [
  {
    name: "Universidad Autónoma de Guerrero",
    logo: "/uagro.png",
  },
  {
    name: "ATEX IT Solutions",
    logo: "/atex it.png",
  },
];

export default function SponsorsSection() {
  return (
    <section className="sponsors section" id="sponsors">
      <div className="section__inner">
        <div className="sponsors__heading">
          <p className="eyebrow">Aliados que hacen posible esto</p>
          <p>
            Academia, tecnología y comunidad trabajando para ampliar las
            oportunidades de innovación en Guerrero.
          </p>
        </div>

        <div className="sponsors__logos">
          {sponsors.map((sponsor) => (
            <article className="sponsor-logo" key={sponsor.name}>
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={220}
                height={96}
                style={{ objectFit: "contain" }}
              />
            </article>
          ))}
          <article className="sponsor-logo sponsor-logo--open">
            <span>+</span>
            <strong>Nuevos aliados</strong>
            <small>Instituciones, empresas y colectivos</small>
          </article>
        </div>
      </div>
    </section>
  );
}
