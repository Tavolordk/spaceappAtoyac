// File: app/convocatoria/page.tsx
// Next.js (App Router) page — responsive, Tailwind-based, palette per UAGro banner
// Drop this into your Next.js 13/14/15 project using the app/ directory.

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Convocatoria — NASA Space Apps Challenge 2025 Guerrero",
  description:
    "Convocatoria oficial del NASA Space Apps Challenge 2025 Guerrero — Preparatoria No. 23 Jacobo Nájera Hernández, San Jerónimo de Juárez.",
  openGraph: {
    title: "Convocatoria — NASA Space Apps Challenge 2025 Guerrero",
    description:
      "Detalles de participación, bases, temáticas, etapas, evaluación, premios y contacto.",
    type: "website",
  },
};

const Convocatoria = ()=> {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Hero */}
      <header className="bg-[#152b55] bg-gradient-to-tr from-[#152b55] to-[#1f3a73] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <span className="inline-block rounded-full bg-[#c82333] px-3 py-1 text-xs font-semibold tracking-wide">
            Convocatoria
          </span>
          <h1 className="mt-3 text-2xl sm:text-4xl font-semibold leading-tight">
                <Image
      src="https://guerrero.quadratin.com.mx/www/wp-content/uploads/2024/05/uagro-1-1160x700.jpg" // ruta relativa a public
      alt="Descripción de la imagen"
      width={800}
      height={600}
      className="rounded-lg shadow-md"
    />
            NASA Space Apps Challenge 2025 — Guerrero
          </h1>
          <p className="mt-1 text-sm sm:text-base opacity-90">
            Preparatoria No. 23 “Jacobo Nájera Hernández”, San Jerónimo de Juárez · 4 y 5 de octubre de 2025
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <a
              href="#bases"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
            >
              Bases
            </a>
            <a
              href="#tematicas"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
            >
              Temáticas
            </a>
            <a
              href="#etapas"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
            >
              Etapas
            </a>
            <a
              href="#contacto"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4">
        {/* Convocan */}
        <section id="convocan" className="py-8 sm:py-10">
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p className="leading-relaxed">
              NASA, a través de su Desafío Internacional Space Apps, junto con la Universidad Autónoma de Guerrero (UAGro), la Preparatoria No. 23 “Jacobo Nájera Hernández” de San Jerónimo de Juárez, la Secretaría de Educación del Estado de Guerrero, el H. Ayuntamiento de San Jerónimo de Juárez y ATEX IT SOLUTIONS, empresa de tecnología, <strong>convocan</strong> a estudiantes de la UAGro (medio superior, superior y posgrado), alumnos de la Preparatoria No. 23 y al público en general (mayores de 16 años) a formar equipos y participar en el <strong>NASA Space Apps Challenge 2025 Guerrero</strong>.
            </p>
            <p className="mt-3 leading-relaxed">
              La sede será la Preparatoria No. 23 “Jacobo Nájera Hernández”, ubicada en Calle Niños Héroes S/N, Col. Centro, San Jerónimo de Juárez, Guerrero. El evento se realizará los días <strong>4 y 5 de octubre de 2025</strong>.
            </p>
          </div>
        </section>

        {/* Bases */}
        <section id="bases" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">BASES</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr,2fr]">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[#152b55]">1. Participantes</h3>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Categoría Estudiantil Media Superior:</strong> Alumnos de todos los niveles del medio superior (16–19 años).
                </li>
                <li>
                  <strong>Categoría Estudiantil Superior:</strong> Estudiantes de la UAGro u otra institución universitaria del estado (todas las carreras, todos los niveles).
                </li>
                <li>
                  <strong>Categoría Profesional:</strong> Público en general, egresados y profesionales (mayores de 16 años).
                </li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed">
                <em>Integración de equipos:</em> de 1 a 6 integrantes. Menores de 18 años deberán presentar autorización firmada por madre/padre o tutor legal antes del evento.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1fr,2fr]">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[#152b55]">2. Normativa General</h3>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Asistencia de externos:</strong> Invitados especiales, concursantes y jueces que no residan en San Jerónimo de Juárez podrán asistir solo el <strong>5 de octubre (09:00–14:00)</strong> por capacidad limitada de hospedaje.
                </li>
                <li><strong>Desarrollo de proyectos:</strong> durante el hackathon, 4 y 5 de octubre de 2025.</li>
                <li>
                  <strong>Desafíos:</strong> se deberá abordar al menos uno de los desafíos oficiales de
                  <a className="ml-1 underline" href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer">NASA Space Apps 2025</a>.
                </li>
                <li>
                  <strong>Formatos aceptados:</strong> software, hardware, visualizaciones de datos, modelos físicos, narrativas interactivas, o cualquier formato creativo con datos abiertos de la NASA.
                </li>
                <li><strong>Originalidad:</strong> proyectos originales; se permite reutilizar material preexistente hasta en un 20% con citación adecuada.</li>
                <li><strong>Idioma:</strong> español o inglés.</li>
                <li>
                  <strong>Entrega final:</strong> repositorio público (GitHub/GitLab/otro) y PDF (máx. 5 páginas, Arial 11, márgenes 2.5 cm) con portada, resumen, metodología, resultados y conclusiones.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Temáticas */}
        <section id="tematicas" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">
            3. Temáticas <span className="text-sm font-normal text-gray-600">(Lema: Learn, Launch, Lead)</span>
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#152b55] text-white">
                  <th className="px-4 py-3">Temática</th>
                  <th className="px-4 py-3">Descripción</th>
                  <th className="px-4 py-3">Código</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3">Aprende</td>
                  <td className="px-4 py-3">Proyectos de educación y divulgación espacial</td>
                  <td className="px-4 py-3 font-semibold">LRN</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3">Lanza</td>
                  <td className="px-4 py-3">Soluciones prácticas basadas en datos de NASA</td>
                  <td className="px-4 py-3 font-semibold">LCH</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3">Lidera</td>
                  <td className="px-4 py-3">Iniciativas de innovación y liderazgo comunitario</td>
                  <td className="px-4 py-3 font-semibold">LDR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Etapas */}
        <section id="etapas" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">4. Etapas</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Registro interno:</strong> 17 julio – 20 septiembre 2025. Inscripción en la página oficial:
                <a className="ml-1 underline" href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer">spaceappschallenge.org</a>.
                Selecciona el evento local de Atoyac de Álvarez:
                <a className="ml-1 underline" href="https://www.spaceappschallenge.org/2025/local-events/atoyac-de-alvarez/" target="_blank" rel="noreferrer">Evento Atoyac de Álvarez</a>.
              </li>
              <li>
                <strong>Formación de equipos:</strong> 21 agosto – 3 octubre 2025. Enviar lista de integrantes y autorizaciones (si aplica) al correo de coordinación.
              </li>
              <li>
                <strong>Hackathon presencial:</strong> 4–5 octubre 2025 (Prepa 23). <strong>5 octubre, 12:00 h</strong>: cierre de entregables (repositorio + PDF).
              </li>
              <li>
                <strong>Evaluación y premiación:</strong> 5 octubre: 12:00–13:00 deliberación; 14:00 ceremonia de clausura y anuncio de ganadores.
              </li>
            </ul>
            <p className="mt-3 rounded-lg border-l-8 border-[#c82333] bg-[#fff3f4] p-3 text-sm">
              También puedes consultar el evento de Guerrero aquí:
              <a className="ml-1 font-semibold underline" href="https://spaceappschallenge.org/2025/local-events/guerrero" target="_blank" rel="noreferrer">spaceappschallenge.org/2025/local-events/guerrero</a>.
            </p>
          </div>
        </section>

        {/* Evaluación */}
        <section id="evaluacion" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">5. Evaluación</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Creatividad e innovación:</strong> 30%</li>
              <li><strong>Impacto y factibilidad:</strong> 30%</li>
              <li><strong>Calidad técnica:</strong> 20%</li>
              <li><strong>Presentación y storytelling:</strong> 20%</li>
            </ul>
          </div>
        </section>

        {/* Premios */}
        <section id="premios" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">6. Premios</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>Certificado de participación para todos los equipos.</li>
              <li>Trofeos y reconocimientos oficiales de NASA para los 3 mejores proyectos de cada temática.</li>
              <li>Mentorías personalizadas con especialistas de NASA, AEM y ATEX IT SOLUTIONS.</li>
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">7. Informes y Contacto</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <p className="text-sm">
                <strong>Sitio oficial:</strong><br />
                <a className="underline" href="https://spaceappschallenge.org/2025/local-events/guerrero" target="_blank" rel="noreferrer">
                  spaceappschallenge.org/2025/local-events/guerrero
                </a>
              </p>
              <p className="mt-3 text-sm">
                <strong>Registro al evento local (Atoyac de Álvarez):</strong><br />
                <a
                  className="inline-block rounded-xl bg-[#152b55] px-4 py-2 font-semibold text-white hover:opacity-90"
                  href="https://www.spaceappschallenge.org/2025/local-events/atoyac-de-alvarez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ir al registro
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <p className="text-sm">
                <strong>Correos:</strong> <a className="underline" href="mailto:octavio.olea@atex-it.com">octavio.olea@atex-it.com</a> · {" "}
                <a className="underline" href="mailto:spaceapps.uagro@uagu.ro.mx">spaceapps.uagro@uagu.ro.mx</a>
              </p>
              <p className="mt-2 text-sm">
                <strong>Teléfonos:</strong> <a className="underline" href="tel:+527473219876">(747) 321 9876</a> · {" "}
                <a className="underline" href="tel:+529602445317">(960) 244 5317</a>
              </p>
              <p className="mt-3 text-xs text-gray-600">
                Únete, innova con datos reales de la NASA y demuestra el talento de Guerrero. ATEX IT SOLUTIONS te invita a ser parte de esta experiencia única.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <a
            className="inline-block rounded-xl bg-[#c82333] px-4 py-2 font-semibold text-white hover:opacity-95"
            href="https://www.spaceappschallenge.org/"
            target="_blank"
            rel="noreferrer"
          >
            Conoce los desafíos oficiales
          </a>
        </section>
      </div>

      {/* Footer (local para esta página) */}
      <footer className="mt-6 bg-[#152b55] py-6 text-white">
        <div className="mx-auto max-w-6xl px-4 text-sm">
          © 2025 NASA Space Apps Challenge — Evento Local Guerrero. Paleta azul #152b55 con acentos #c82333.
        </div>
      </footer>
    </main>
  );
}
export default Convocatoria;