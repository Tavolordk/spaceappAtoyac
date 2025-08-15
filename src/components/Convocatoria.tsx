// File: app/convocatoria/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Convocatoria — NASA Space Apps Challenge 2025 Guerrero",
  description:
    "Convocatoria oficial del NASA Space Apps Challenge 2025 Guerrero — Preparatoria No. 23 “Prof. Jacob Nájera Hernández”, San Jerónimo de Juárez.",
  openGraph: {
    title: "Convocatoria — NASA Space Apps Challenge 2025 Guerrero",
    description:
      "Bases, participantes, normativa, ejes temáticos, etapas, evaluación, premios e informes del evento local en Guerrero.",
    type: "website",
  },
};

const Convocatoria = () => {
  return (
    <main className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Hero */}
      <header className="bg-[#152b55] bg-gradient-to-tr from-[#152b55] to-[#1f3a73] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <span className="inline-block rounded-full bg-[#c82333] px-3 py-1 text-xs font-semibold tracking-wide">
            Convocatoria
          </span>

          <h1 className="mt-3 text-2xl sm:text-4xl font-semibold leading-tight">
            NASA Space Apps Challenge 2025 — Guerrero
          </h1>

          <p className="mt-1 text-sm sm:text-base opacity-90">
            Preparatoria No. 23 “Prof. Jacob Nájera Hernández”, San Jerónimo de Juárez · 4 y 5 de octubre de 2025
          </p>

          <div className="mt-6">
            <Image
              src="https://guerrero.quadratin.com.mx/www/wp-content/uploads/2024/05/uagro-1-1160x700.jpg"
              alt="Universidad Autónoma de Guerrero"
              width={800}
              height={460}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <a href="#bases" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">
              Bases
            </a>
            <a href="#tematicas" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">
              Temáticas
            </a>
            <a href="#etapas" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">
              Etapas
            </a>
            <a href="#contacto" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">
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
              La NASA (Administración Nacional de Aeronáutica y del Espacio), a través de su Desafío Internacional Space
              Apps, en colaboración con la Universidad Autónoma de Guerrero (UAGro) y la empresa de tecnologías ATEX IT
              SOLUTIONS, <strong>convocan a</strong> estudiantes, profesionistas y público en general a participar en el{" "}
              <strong>NASA Space Apps Challenge 2025 Guerrero</strong>, una experiencia global de innovación y creatividad
              científica.
            </p>
          </div>
        </section>

        {/* Objetivo */}
        <section id="objetivo" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">OBJETIVO</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p className="leading-relaxed">
              Impulsar el desarrollo de habilidades en ciencia, tecnología, ingeniería y matemáticas (STEM) entre
              estudiantes de la UAGro y público en general mayor de 16 años, mediante su participación activa en el NASA
              Space Apps Challenge 2025 en Guerrero, promoviendo la innovación colaborativa, el uso creativo de datos
              espaciales y el fortalecimiento de competencias técnicas y de resolución de problemas.
            </p>
          </div>
        </section>

        {/* Lugar y fechas */}
        <section id="lugar-fechas" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">LUGAR Y FECHAS</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <ul className="space-y-2 text-sm">
                <li>🏫 <strong>Escuela Preparatoria No. 23</strong></li>
                <li>📍 San Jerónimo de Juárez, Guerrero</li>
                <li>🗓️ <strong>4 y 5 de octubre de 2025</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* BASES */}
        <section id="bases" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">BASES</h2>

          {/* 1. Participantes */}
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr,2fr]">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[#152b55]">1. Participantes</h3>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <p className="mb-3">
                Podrán inscribirse personas mayores de 16 años, organizadas de manera individual o en equipos de 6
                integrantes, en las siguientes categorías:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Categoría Educación Media Superior:</strong> Estudiantes de todos los subsistemas educativos.
                </li>
                <li>
                  <strong>Categoría Educación Superior:</strong> Estudiantes universitarios de la UAGro y otras
                  instituciones.
                </li>
                <li>
                  <strong>Categoría Profesional:</strong> Público general, egresados y profesionales del área tecnológica
                  o afines.
                </li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed">
                <strong>Nota:</strong> Menores de 16 años podrán participar únicamente bajo la supervisión de su madre,
                padre o tutor legal, quien deberá estar presente durante el evento y asumir la responsabilidad
                correspondiente. En el caso de menores de 18 años, será obligatoria la entrega de una carta de autorización
                firmada por el tutor legal.
              </p>
            </div>
          </div>

          {/* 2. Normativa general */}
          <div className="mt-4 grid gap-4 sm:grid-cols-[1fr,2fr]">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[#152b55]">2. Normativa general</h3>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Se aceptará la participación <strong>presencial o virtual</strong> de personas que residan en San
                  Jerónimo de Juárez.
                </li>
                <li>
                  Los proyectos deberán desarrollarse durante el hackathon (<strong>4 y 5 de octubre</strong>) y responder
                  al menos uno de los desafíos oficiales publicados por la NASA.
                </li>
                <li>
                  Se aceptan prototipos en diversas formas: software, hardware, modelos físicos, narrativas interactivas,
                  visualizaciones, entre otros, siempre que utilicen <strong>datos abiertos de la NASA</strong>.
                </li>
                <li>
                  El proyecto debe ser original. Si incluye material preexistente, deberá indicarse el porcentaje estimado
                  y consultarlo con jueces o asesores.
                </li>
                <li>
                  Es obligatorio declarar el uso de <strong>Inteligencia Artificial</strong> (porcentaje y tipo). El uso de
                  IA no será penalizado, pero su omisión puede afectar la evaluación.
                </li>
                <li>
                  Las referencias deberán citarse en formato <strong>APA</strong>:{" "}
                  <a className="underline" href="https://normas-apa.org" target="_blank" rel="noreferrer">
                    normas-apa.org
                  </a>
                  .
                </li>
                <li>Idioma aceptado: español o inglés.</li>
              </ul>

              <div className="mt-4 rounded-lg border-l-8 border-[#c82333] bg-[#fff3f4] p-3">
                <p className="font-semibold">Entrega final:</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Enlace a repositorio público del proyecto.</li>
                  <li>Documento PDF (máx. 5 páginas) con descripción del proyecto.</li>
                  <li>
                    Los finalistas podrán recibir asesoría adicional para reforzar su propuesta de cara a la etapa global.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Temáticas */}
        <section id="tematicas" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">
            3. Ejes temáticos <span className="text-sm font-normal text-gray-600">(Lema: Learn, Launch, Lead)</span>
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
                  <td className="px-4 py-3">Aprende (Learn)</td>
                  <td className="px-4 py-3">Educación y divulgación científica sobre el espacio</td>
                  <td className="px-4 py-3 font-semibold">LRN</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3">Lanza (Launch)</td>
                  <td className="px-4 py-3">Soluciones tecnológicas con base en datos abiertos de la NASA</td>
                  <td className="px-4 py-3 font-semibold">LCH</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3">Lidera (Lead)</td>
                  <td className="px-4 py-3">Innovación y liderazgo con impacto en la comunidad</td>
                  <td className="px-4 py-3 font-semibold">LDR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Etapas */}
        <section id="etapas" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">4. Etapas del proceso</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Registro interno:</strong> 17 julio al 20 septiembre 2025. Inscripción:{" "}
                <a className="underline" href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer">
                  spaceappschallenge.org
                </a>
                .
              </li>
              <li>
                <strong>Formación de equipos:</strong> 21 agosto al 3 de octubre de 2025.
              </li>
              <li>
                <strong>Hackathon presencial:</strong> 4 y 5 de octubre de 2025 (Presencial en la Preparatoria No. 23).
              </li>
              <li>
                <strong>Entrega de proyectos:</strong> 5 de octubre, 12:00 horas. <strong>Premiación local:</strong> 5 de
                octubre, 14:00 horas.
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Evaluación */}
        <section id="evaluacion" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">5. Evaluación</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Creatividad e innovación:</strong> 30 %
              </li>
              <li>
                <strong>Impacto y factibilidad:</strong> 30 %
              </li>
              <li>
                <strong>Calidad técnica:</strong> 20 %
              </li>
              <li>
                <strong>Presentación y storytelling:</strong> 20 %
              </li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>Nota:</strong> La evaluación local estará alineada con las guías globales del Space Apps Challenge.
              Los criterios detallados estarán disponibles a partir del 3 de octubre de 2025 en la sección de Recursos del
              sitio oficial.
            </p>
          </div>
        </section>

        {/* 6. Premios */}
        <section id="premios" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">6. Premios</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Certificado oficial de participación emitido por la NASA (requiere registro y entrega en plataforma).
              </li>
              <li>Trofeos y reconocimientos a los tres mejores proyectos por temática.</li>
              <li>Acceso a mentorías y capacitaciones tecnológicas especializadas.</li>
            </ul>
          </div>
        </section>

        {/* 7. Informes y contacto */}
        <section id="contacto" className="border-t-8 border-[#e6e6e6] py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#152b55]">7. Informes y contacto</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <p className="text-sm">
                <strong>Sitio oficial del evento local:</strong>
                <br />
                <a
                  className="underline"
                  href="https://www.spaceappschallenge.org/2025/local-events/guerrero/"
                  target="_blank"
                  rel="noreferrer"
                >
                  spaceappschallenge.org/2025/local-events/guerrero
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <p className="text-sm">
                <strong>Contacto:</strong>{" "}
                <a className="underline" href="mailto:octavio.olea@atex-it.com">
                  octavio.olea@atex-it.com
                </a>{" "}
                <span className="text-xs text-gray-600">(pendiente confirmar correo institucional UAGro)</span>
              </p>
              <p className="mt-2 text-sm">
                <strong>Teléfonos:</strong>{" "}
                <a className="underline" href="tel:+527473219876">
                  (747) 321 9876
                </a>{" "}
                ·{" "}
                <a className="underline" href="tel:+529602445317">
                  (960) 244 5317
                </a>
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
    </main>
  );
};

export default Convocatoria;
