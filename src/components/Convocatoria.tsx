"use client";

// app/convocatoria/page.tsx
import type { Metadata } from "next";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const metadata: Metadata = {
  title: "Convocatoria — NASA Space Apps Challenge 2025 Guerrero",
  description:
    "Convocatoria oficial del NASA Space Apps Challenge 2025 Guerrero — Preparatoria No. 23 “Prof. Jacob Nájera Hernández”, San Jerónimo de Juárez.",
  openGraph: {
    title: "Convocatoria — NASA Space Apps Challenge 2025 Guerrero",
    description:
      "Convocan, objetivo, lugar y fechas + bases del evento local en Guerrero, México.",
    type: "website",
  },
};

// ⚠️ Si puedes, evita espacios en nombres de archivo.
// Usa el mismo fondo para las 3 páginas o cámbialos si lo prefieres.
const BG = "/Fondo para página uagro-nasa.png";

// --------- Utilidades de UI ----------
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-white/92 shadow-sm ring-1 ring-black/5 ${className}`}>
      {children}
    </div>
  );
}

// --------- Book con flip 3D y múltiples páginas ----------
function Book({
  pages,
  bg,
  className = "",
}: {
  pages: React.ReactNode[];
  bg: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0); // página mostrada
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const [frontContent, setFrontContent] = useState(pages[0]);
  const [backContent, setBackContent] = useState(pages[1] ?? pages[0]);
  const isAnimatingRef = useRef(false);

  const total = pages.length;

  const goTo = useCallback(
    (nextIndex: number) => {
      if (isAnimatingRef.current || nextIndex === index) return;
      isAnimatingRef.current = true;
      const direction: 1 | -1 = nextIndex > index ? 1 : -1;
      setDir(direction);
      setBackContent(pages[nextIndex]);
      setFlipped((f) => !f);
    },
    [index, pages]
  );

  const next = useCallback(() => goTo((index + 1) % total), [goTo, index, total]);
  const prev = useCallback(() => goTo((index - 1 + total) % total), [goTo, index, total]);

  // teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // cuando termina la animación, consolidamos la página
  const onTransitionEnd = () => {
    const newIndex = pages.indexOf(backContent);
    setFrontContent(backContent);
    setIndex(newIndex >= 0 ? newIndex : index);
    setFlipped(false);
    isAnimatingRef.current = false;
  };

  const transformValue = useMemo(() => {
    if (!flipped) return "rotateY(0deg)";
    return dir === 1 ? "rotateY(180deg)" : "rotateY(-180deg)";
  }, [flipped, dir]);

  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div
        className="relative w-full max-w-[900px] rounded-md shadow-xl overflow-hidden select-none"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "141%", // relación 768x1083
          perspective: "1600px",
        }}
        onClick={next}
        role="button"
        title="Haz click para pasar de página (o usa ←/→)"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: transformValue,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {/* Cara frontal */}
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            {frontContent}
          </div>

          {/* Cara posterior */}
          <div
            className="absolute inset-0"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {backContent}
          </div>
        </div>

        {/* Indicador de página */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="rounded px-1.5 py-0.5 hover:bg-white/20"
            aria-label="Página anterior"
          >
            ←
          </button>
          <span>
            {index + 1}/{total}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="rounded px-1.5 py-0.5 hover:bg-white/20"
            aria-label="Página siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// --------- Contenido de cada página ----------
export default function Convocatoria() {
  // PÁGINA 1 — (no la toco)
  const Page1 = (
    <>
      {/* Intro + CONVOCAN A */}
      <div className="absolute left-[6%] top-[14%] w-[88%] text-[clamp(12px,2.7vw,18px)] leading-relaxed">
        <div className="inline-block rounded-lg bg-white/90 px-3 py-2 shadow-sm ring-1 ring-black/5">
          La NASA (Administración Nacional de Aeronáutica y del Espacio), a través de su
          Desafío Internacional Space Apps, en colaboración con la Universidad Autónoma de
          Guerrero (UAGro) y la empresa de tecnologías ATEX IT SOLUTIONS,
        </div>
        <div className="mt-3 text-center text-[clamp(16px,5vw,34px)] font-extrabold tracking-wide text-[#e6262a]">
          CONVOCAN A:
        </div>
        <div className="mt-2 rounded-lg bg-white/90 px-3 py-2 shadow-sm ring-1 ring-black/5">
          Estudiantes, profesionistas y público en general a participar en el{" "}
          <b>NASA Space Apps Challenge 2025 Guerrero</b>, una experiencia global de innovación y creatividad científica.
        </div>
      </div>

      {/* OBJETIVO */}
      <Card className="absolute left-[6%] top-[64%] w-[88%] px-4 py-4">
        <div className="inline-block rounded-md bg-[#e6262a] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-bold text-white">
          OBJETIVO:
        </div>
        <p className="mt-2 text-[clamp(12px,2.7vw,18px)] leading-relaxed">
          Impulsar el desarrollo de habilidades en ciencia, tecnología, ingeniería y
          matemáticas (STEM) entre estudiantes de la UAGro y público en general mayor de
          16 años, promoviendo la innovación colaborativa, el uso creativo de datos
          espaciales y el fortalecimiento de competencias técnicas y de resolución de
          problemas.
        </p>
      </Card>

      {/* LUGAR Y FECHAS */}
      <Card className="absolute left-[6%] top-[86%] w-[60%] px-4 py-3">
        <div className="inline-block rounded-md bg-[#e6262a] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-bold text-white">
          LUGAR Y FECHAS
        </div>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.7vw,18px)]">
          <li>Escuela Preparatoria No. 23</li>
          <li>San Jerónimo de Juárez, Guerrero</li>
          <li>4 y 5 de octubre de 2025</li>
        </ul>
      </Card>
    </>
  );

  // PÁGINA 2 — BASES (Parte 1): 1, 2
  const Page2 = (
    <>
      {/* Cinta "BASES" */}
      <div className="absolute left-1/2 top-[10.5%] -translate-x-1/2">
        <span className="rounded-md bg-[#e6262a] px-4 py-1.5 text-[clamp(14px,3.8vw,20px)] font-extrabold text-white shadow">
          BASES
        </span>
      </div>

      {/* 1. PARTICIPANTES */}
      <Card className="absolute left-[5.5%] top-[19%] w-[41.5%] px-4 py-4">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          1. PARTICIPANTES
        </div>
        <p className="mt-2 text-[clamp(12px,2.6vw,16px)]">
          Podrán inscribirse personas mayores de 16 años, organizadas de manera individual o en equipos de 6
          integrantes, en las siguientes categorías:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li><b>Categoría Educación Media Superior:</b> Estudiantes de todos los subsistemas educativos.</li>
          <li><b>Categoría Educación Superior:</b> Estudiantes universitarios de la UAGro y otras instituciones.</li>
          <li><b>Categoría Profesional:</b> Público general, egresados y profesionales del área tecnológica o afines.</li>
        </ul>
        <p className="mt-2 text-[clamp(11px,2.4vw,14px)] text-gray-700">
          <b>Nota:</b> Menores de 16 años solo con madre/padre/tutor presente. Menores de 18 con carta de autorización firmada.
        </p>
      </Card>

      {/* 2. NORMATIVA GENERAL + Entrega final */}
      <Card className="absolute left-[53%] top-[19%] w-[41.5%] px-4 py-4">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          2. NORMATIVA GENERAL
        </div>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li>Participación <b>presencial o virtual</b>.</li>
          <li>Proyectos desarrollados el <b>4 y 5 de octubre</b> respondiendo un desafío oficial de NASA.</li>
          <li>Se aceptan software, hardware, modelos físicos, narrativas interactivas, visualizaciones, etc., usando <b>datos abiertos de la NASA</b>.</li>
          <li>Originalidad obligatoria; si hay material previo, indicar porcentaje y citar fuentes.</li>
          <li>Declarar uso de <b>IA</b> (tipo y porcentaje). Idiomas: español o inglés.</li>
          <li>Referencias en formato <b>APA</b> (sugerido: normas-apa.org).</li>
        </ul>

        <div className="mt-3 rounded-lg border-l-8 border-[#c82333] bg-[#fff3f4] px-3 py-2 text-[clamp(11px,2.5vw,15px)]">
          <p className="font-semibold">Entrega final</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Enlace a <b>repositorio público</b> del proyecto.</li>
            <li>Documento <b>PDF (máx. 5 páginas)</b> con descripción del proyecto.</li>
            <li>Los finalistas podrán recibir asesoría adicional para reforzar su propuesta de cara a la etapa global.</li>
          </ul>
        </div>
      </Card>
    </>
  );

  // PÁGINA 3 — BASES (Parte 2): 3, 4, 5, 6, 7
  const Page3 = (
    <>
      {/* 3. EJES TEMÁTICOS */}
      <Card className="absolute left-[5.5%] top-[16%] w-[41.5%] px-4 py-4">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          3. EJES TEMÁTICOS (LEMA: LEARN, LAUNCH, LEAD)
        </div>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li><b>Aprende (LRN):</b> Educación y divulgación científica sobre el espacio.</li>
          <li><b>Lanza (LCH):</b> Soluciones tecnológicas basadas en datos de NASA.</li>
          <li><b>Lidera (LDR):</b> Innovación y liderazgo con impacto en la comunidad.</li>
        </ul>
      </Card>

      {/* 4. ETAPAS DEL PROCESO */}
      <Card className="absolute left-[53%] top-[16%] w-[41.5%] px-4 py-4">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          4. ETAPAS DEL PROCESO
        </div>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li>
            <b>Registro interno:</b> 17 julio – 20 septiembre 2025. Inscripción:{" "}
            <a className="underline" href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer">
              spaceappschallenge.org
            </a>.
          </li>
          <li><b>Formación de equipos:</b> 21 agosto – 3 octubre 2025.</li>
          <li><b>Hackathon presencial:</b> 4 y 5 de octubre 2025 (Preparatoria No. 23).</li>
          <li><b>Entrega de proyectos:</b> 5 de octubre, 12:00 h.</li>
          <li><b>Premiación local:</b> 5 de octubre, 14:00 h.</li>
        </ul>
      </Card>

      {/* 5. EVALUACIÓN */}
      <Card className="absolute left-[5.5%] top-[58%] w-[41.5%] px-4 py-4">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          5. EVALUACIÓN
        </div>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1">
          <li>Creatividad e innovación: <b>30 %</b></li>
          <li>Impacto y factibilidad: <b>30 %</b></li>
          <li>Calidad técnica: <b>20 %</b></li>
          <li>Presentación y storytelling: <b>20 %</b></li>
        </ul>
        <p className="mt-2 text-[clamp(11px,2.4vw,14px)] text-gray-700">
          La evaluación local se alinea con las guías globales del Space Apps Challenge.
        </p>
      </Card>

      {/* 6. PREMIOS */}
      <Card className="absolute left-[53%] top-[58%] w-[41.5%] px-4 py-4">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          6. PREMIOS
        </div>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li>Certificado oficial de participación emitido por la NASA (requiere registro y entrega en plataforma).</li>
          <li>Trofeos y reconocimientos a los tres mejores proyectos por temática.</li>
          <li>Acceso a mentorías y capacitaciones tecnológicas especializadas.</li>
        </ul>
      </Card>

      {/* 7. INFORMES Y CONTACTO */}
      <Card className="absolute left-[5.5%] top-[85%] w-[70%] px-4 py-3">
        <div className="inline-block rounded bg-[#152b55] px-3 py-1 text-[clamp(12px,2.8vw,16px)] font-semibold text-white">
          7. INFORMES Y CONTACTO
        </div>
        <div className="mt-2 text-[clamp(11px,2.5vw,15px)] leading-snug">
          Sitio oficial del evento local:{" "}
          <a
            className="underline"
            href="https://www.spaceappschallenge.org/2025/local-events/guerrero/"
            target="_blank"
            rel="noreferrer"
          >
            spaceappschallenge.org/2025/local-events/guerrero
          </a>
          <br />
          Correo: <a className="underline" href="mailto:octavio.olea@atex-it.com">octavio.olea@atex-it.com</a>{" "}
          <span className="text-xs text-gray-600">(pendiente confirmar correo institucional UAGro)</span>
          <br />
          Teléfonos: <a className="underline" href="tel:+527473219876">(747) 321 9876</a> ·{" "}
          <a className="underline" href="tel:+529602445317">(960) 244 5317</a>
        </div>
      </Card>
    </>
  );

  const pages = [Page1, Page2, Page3];

  return (
    <main className="mx-auto flex max-w-[1100px] flex-col gap-8 px-3 py-8 text-[#0a0a0a]">
      <Book pages={pages} bg={BG} className="mt-2" />

      {/* CTA */}
      <div className="mt-1 flex justify-center">
        <a
          className="inline-block rounded-xl bg-[#1e3a5f] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
          href="https://www.spaceappschallenge.org/"
          target="_blank"
          rel="noreferrer"
        >
          Conoce los desafíos oficiales
        </a>
      </div>
    </main>
  );
}
