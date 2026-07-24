import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__message">
          <BrandMark />
          <div>
            <h2>Tus ideas pueden transformar Guerrero.</h2>
            <p>
              Colabora. Innova. Impacta. El futuro se construye en comunidad.
            </p>
          </div>
        </div>

        <div className="footer__actions">
          <Link className="button button--aqua" href="/convocatoria">
            Regístrate ahora <span>→</span>
          </Link>
          <div className="footer__social">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>
          </div>
        </div>
      </div>

      <div className="footer__legal">
        <span>© {siteConfig.year} Space Apps Guerrero</span>
        <p>
          Sitio informativo de organización local. No representa oficialmente a
          NASA ni utiliza sus identificadores institucionales.
        </p>
      </div>
    </footer>
  );
}
