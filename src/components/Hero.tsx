import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/data/site";
import styles from "./HeroCosmic.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.papelTop} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.brandLockup} aria-label="NASA Space Apps Challenge Guerrero">
            <BrandMark />
            <div>
              <span>NASA</span>
              <strong>SPACE APPS</strong>
              <small>CHALLENGE · GUERRERO</small>
            </div>
          </div>

          <p className={styles.kicker}>{siteConfig.dateLabel} · {siteConfig.year}</p>

          <h1>
            El cosmos también
            <span>se mira desde Guerrero.</span>
          </h1>

          <p className={styles.lead}>
            Ciencia, datos abiertos y creatividad con una identidad nacida entre
            la costa, el folclor y las estrellas.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryButton} href={siteConfig.registrationHref}>
              Regístrate ahora <span aria-hidden="true">→</span>
            </Link>
            <a className={styles.secondaryButton} href="#features">
              Explorar retos
            </a>
          </div>

          <div className={styles.countdownWrap}>
            <span className={styles.countdownLabel}>Cuenta regresiva al hackathon</span>
            <Countdown targetDate={siteConfig.eventDate} />
          </div>

          <div className={styles.placeLine}>
            <span>GUERRERO · MÉXICO</span>
            <i aria-hidden="true" />
            <span>{siteConfig.venue.city}</span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow} aria-hidden="true" />
          <div className={styles.posterFrame}>
            <Image
              src="/guerrero-cosmic-folklore.png"
              alt="Folclor de Guerrero integrado con la costa y un paisaje cósmico"
              fill
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
              className={styles.posterImage}
            />
            <div className={styles.posterFade} aria-hidden="true" />
          </div>

          <div className={styles.folkloreTag}>FOLCLOR · COSTA · CIENCIA</div>
          <div className={styles.yearStamp}>{siteConfig.year}</div>
        </div>
      </div>

      <div className={styles.coastline} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
