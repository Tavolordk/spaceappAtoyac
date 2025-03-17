import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="google-site-verification" content="FXLDrLf4nP7qfMs1lr1pAxpu-kU7Dpe-ynnBBkASQzE" />
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
      <link rel="canonical" href="https://www.atoyacspaceapps.org/" />
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="NASA Space Apps Challenge 2025 | Atoyac de Álvarez" />
      <meta
        property="og:description"
        content="Únete al hackathon espacial más grande del mundo en Atoyac de Álvarez. Descubre desafíos innovadores y colabora con talentos globales."
      />
      <meta property="og:image" content="https://www.atoyacspaceapps.org/NASA_Space_Apps_Challenge_2025_Atoyac_logo.png" />
      <meta property="og:url" content="https://www.atoyacspaceapps.org/" />
      <meta property="og:type" content="website" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NASA Space Apps Challenge 2025 | Atoyac de Álvarez" />
      <meta
        name="twitter:description"
        content="Únete al hackathon espacial más grande del mundo en Atoyac de Álvarez. Descubre desafíos innovadores y colabora con talentos globales."
      />
      <meta name="twitter:image" content="https://www.atoyacspaceapps.org/NASA_Space_Apps_Challenge_2025_Atoyac_logo.png" />
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
  );
};

export default SEO;