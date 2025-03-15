"use client";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const handleRegister = (): void => {
    alert('¡Gracias por tu interés! Pronto abriremos el registro oficial.');
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NASA Space Apps Challenge 2025 | Atoyac de Álvarez</title>
        <meta
          name="description"
          content="Únete al hackathon espacial más grande del mundo en Atoyac de Álvarez. Vive una experiencia única de innovación y colaboración para resolver desafíos relacionados con la Tierra y el espacio."
        />
        <meta
          name="keywords"
          content="NASA, Space Apps Challenge, hackathon, espacial, Atoyac de Álvarez, tecnología, innovación, ciencia, colaboración"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tusitioweb.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NASA Space Apps Challenge 2025 | Atoyac de Álvarez" />
        <meta
          property="og:description"
          content="Únete al hackathon espacial más grande del mundo en Atoyac de Álvarez. Descubre desafíos innovadores y colabora con talentos globales."
        />
        <meta property="og:image" content="https://www.tusitioweb.com/NASA_Space_Apps_Challenge_2025_Atoyac_logo.png" />
        <meta property="og:url" content="https://www.tusitioweb.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NASA Space Apps Challenge 2025 | Atoyac de Álvarez" />
        <meta
          name="twitter:description"
          content="Únete al hackathon espacial más grande del mundo en Atoyac de Álvarez. Descubre desafíos innovadores y colabora con talentos globales."
        />
        <meta name="twitter:image" content="https://www.tusitioweb.com/NASA_Space_Apps_Challenge_2025_Atoyac_logo.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "NASA Space Apps Challenge 2025 | Atoyac de Álvarez",
            "startDate": "2025-XX-XXT00:00:00Z",
            "endDate": "2025-XX-XXT00:00:00Z",
            "location": {
              "@type": "Place",
              "name": "Atoyac de Álvarez",
              "address": "Atoyac de Álvarez, México"
            },
            "description": "Únete al hackathon espacial más grande del mundo. Comparte tu talento y creatividad para resolver desafíos relacionados con la Tierra y el espacio."
          }
          `
          }}
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            NASA Space Apps 2025 Atoyac
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#acerca">Acerca</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#agenda">Agenda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <Image
            src="/NASA Space Apps Challenge 2025 ATOYAC LOGO.png"
            alt="NASA Space Apps Challenge 2025 Atoyac"
            width={300}
            height={300}
            className="hero-logo img-fluid"
          />
          <h2 className="section-title">Únete al mayor hackathon espacial</h2>
          <p className="mb-4">
            Vive la experiencia de innovación y colaboración más grande del mundo.
            Comparte tu talento y creatividad para resolver desafíos relacionados con la Tierra y el espacio.
          </p>
          <button className="btn btn-custom" onClick={handleRegister}>
            Regístrate Ahora
          </button>
        </div>
      </section>

      {/* Acerca de */}
      <section id="acerca" className="py-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h3 className="section-title text-center">Acerca del Evento</h3>
          <p className="text-center">
            NASA Space Apps Challenge es un hackathon internacional de 48 horas donde participantes de todo el mundo trabajan juntos para crear soluciones a problemas relacionados con la Tierra y el espacio. En la edición 2025, Atoyac de Álvarez será la sede de este encuentro que combina ciencia, tecnología y creatividad.
          </p>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-5">
        <div className="container">
          <h3 className="section-title text-center">Agenda</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="agenda-item">
                <h4>Día 1 - Apertura</h4>
                <p>Presentación de proyectos, formación de equipos y taller de introducción.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="agenda-item">
                <h4>Día 2 - Desarrollo</h4>
                <p>Trabajo colaborativo, mentorías y avances de proyectos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="agenda-item">
                <h4>Día 3 - Presentaciones</h4>
                <p>Demostraciones finales, premiación y cierre oficial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container text-center">
          <h3 className="section-title">Contacto</h3>
          <p>
            ¿Tienes dudas o quieres más información? Escríbenos a:<br />
            <strong>spaceapps.atoyac@example.com</strong>
          </p>
          <div className="mt-3">
            <a href="#" className="btn btn-outline-light me-2">Facebook</a>
            <a href="#" className="btn btn-outline-light">Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-center">
          © 2025 NASA Space Apps Challenge Atoyac de Álvarez | Todos los derechos reservados
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --color-primary: #7A5FFF;
          --color-secondary: #00FFD1;
          --color-dark: #0F0E1C;
          --font-futuristic: 'Orbitron', sans-serif;
          --font-body: 'Poppins', sans-serif;
        }

        body {
          font-family: var(--font-body);
          background: var(--color-dark) url('https://4kwallpapers.com/images/wallpapers/stars-galaxy-3840x2160-10307.jpg') no-repeat center center/cover;
          color: #fff;
          overflow-x: hidden;
        }

        .hero {
          padding: 4rem 0;
          text-align: center;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 60%,
            rgba(15,14,28,0.9) 100%
          );
        }

        .hero-logo {
          max-width: 300px;
          margin-bottom: 2rem;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .btn-custom {
          background: var(--color-primary);
          border: none;
          padding: 1rem 2rem;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease;
          border-radius: 4px;
        }

        .btn-custom:hover {
          background: var(--color-secondary);
        }

        .section-title {
          font-family: var(--font-futuristic);
          font-size: 2rem;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }

        .agenda-item {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .agenda-item h4 {
          margin-bottom: 0.5rem;
          color: var(--color-primary);
        }

        footer {
          background: rgba(15,14,28,0.8);
          padding: 1rem 0;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
};

export default Home;
