import Image from "next/image";

const partners = [
  {
    name: "Universidad Autónoma de Guerrero",
    role: "Sede académica",
    image: "/uagro.png",
    width: 220,
    height: 110,
  },
  {
    name: "ATEX IT Solutions",
    role: "Tecnología y producción",
    image: "/atex it.png",
    width: 220,
    height: 110,
  },
];

export default function PartnersSection() {
  return (
    <section className="partners" id="aliados">
      <div className="section-label">
        <span>05</span>
        <p>Aliados</p>
      </div>

      <header className="partners__header">
        <p className="eyebrow">El trabajo local necesita infraestructura real.</p>
        <h2>Instituciones que hacen posible el encuentro.</h2>
      </header>

      <div className="partners__grid">
        {partners.map((partner) => (
          <article key={partner.name}>
            <div className="partners__logo">
              <Image
                src={partner.image}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p>{partner.role}</p>
            <strong>{partner.name}</strong>
          </article>
        ))}

        <article className="partners__invitation">
          <span>+</span>
          <div>
            <p>Convocatoria abierta</p>
            <strong>Participa como aliado local</strong>
          </div>
        </article>
      </div>
    </section>
  );
}
