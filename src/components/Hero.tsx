import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import SectionIcon from "@/components/SectionIcon";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__topography" aria-hidden="true" />
      <div className="hero__visual" aria-hidden="true">
        <Image
          src="/hero-jaguar-opt.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 820px) 100vw, 58vw"
        />
        <div className="hero__visual-fade" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__date">
            {siteConfig.dateLabel} · {siteConfig.year}
          </p>
          <h1>
            Space Apps
            <span>Guerrero {siteConfig.year}</span>
          </h1>
          <div className="hero__rule" />
          <h2>Ciencia, datos, innovación y comunidad para un mejor futuro.</h2>
          <p className="hero__description">
            Dos días para colaborar, crear y resolver retos con datos abiertos
            en beneficio de Guerrero y del planeta.
          </p>

          <div className="hero__actions">
            <Link className="button button--aqua" href={siteConfig.registrationHref}>
              Regístrate ahora <span aria-hidden="true">→</span>
            </Link>
            <a className="button button--text" href="#features">
              Conoce los retos <span className="button__circle">→</span>
            </a>
          </div>

          <Countdown targetDate={siteConfig.eventDate} />
        </div>
      </div>

      <div className="hero__wave hero__wave--one" aria-hidden="true" />
      <div className="hero__wave hero__wave--two" aria-hidden="true" />
      <div className="hero__microcopy">
        <SectionIcon name="pin" size={18} />
        {siteConfig.venue.city}
      </div>
    </section>
  );
}
