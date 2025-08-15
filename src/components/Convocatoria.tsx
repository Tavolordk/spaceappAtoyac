"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/** Cambia esta ruta si tu fondo está en otra carpeta (ideal sin espacios) */
const BG = "/Fondo para página uagro-nasa.png";

/* === UI helpers === */
function Chip({
  children,
  color = "primary",
}: {
  children: React.ReactNode;
  color?: "primary" | "danger";
}) {
  const cls =
    color === "danger"
      ? "bg-[#e6262a] text-white"
      : "bg-[#152b55] text-white";
  return (
    <span className={`inline-block rounded-md px-3 py-1 text-sm font-semibold ${cls}`}>
      {children}
    </span>
  );
}

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

/* === Flip 3D para escritorio (≥ sm) === */
function DesktopBook({
  pages,
  bg,
  className = "",
}: {
  pages: React.ReactNode[];
  bg: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const [frontContent, setFrontContent] = useState(pages[0]);
  const [backContent, setBackContent] = useState(pages[1] ?? pages[0]);
  const total = pages.length;
  const anim = useRef(false);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (anim.current || nextIndex === index) return;
      anim.current = true;
      setDir(nextIndex > index ? 1 : -1);
      setBackContent(pages[nextIndex]);
      setFlipped((f) => !f);
    },
    [index, pages]
  );

  const next = useCallback(() => goTo((index + 1) % total), [goTo, index, total]);
  const prev = useCallback(() => goTo((index - 1 + total) % total), [goTo, index, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTransitionEnd = () => {
    const newIndex = pages.indexOf(backContent);
    setFrontContent(backContent);
    setIndex(newIndex >= 0 ? newIndex : index);
    setFlipped(false);
    anim.current = false;
  };

  const transformValue = useMemo(() => {
    if (!flipped) return "rotateY(0deg)";
    return dir === 1 ? "rotateY(180deg)" : "rotateY(-180deg)";
  }, [flipped, dir]);

  return (
    <section className={`hidden sm:flex w-full justify-center ${className}`}>
      <div
        className="relative w-full max-w-[900px] rounded-md shadow-xl overflow-hidden select-none cursor-pointer"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "141%", // relación 768x1083
          perspective: "1600px",
        }}
        onClick={next}
        role="button"
        title="Click o ←/→ para pasar de página"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: transformValue,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            {frontContent}
          </div>
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

        {/* Indicador */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="rounded px-1.5 py-0.5 hover:bg-white/20"
            aria-label="Anterior"
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
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

/* === Paginador móvil (< sm), apilado y con swipe === */
function MobilePager({
  pages,
  bg,
  className = "",
}: {
  pages: React.ReactNode[];
  bg: string;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const total = pages.length;
  const touch = useRef<{ x: number; y: number } | null>(null);

  const next = useCallback(() => setI((v) => (v + 1) % total), [total]);
  const prev = useCallback(() => setI((v) => (v - 1 + total) % total), [total]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = Math.abs(t.clientY - touch.current.y);
    touch.current = null;

    if (Math.abs(dx) > 40 && dy < 60) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
  }, [next, prev]);

  return (
    <section
      className={`sm:hidden w-full ${className}`}
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="mx-auto max-w-[640px] px-3 py-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="space-y-4">{pages[i]}</div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            className="rounded-lg bg-[#152b55] px-3 py-2 text-white text-xs"
            onClick={prev}
          >
            ← Anterior
          </button>
          <span className="text-xs text-[#1e2b45]">
            {i + 1} / {total}
          </span>
          <button
            className="rounded-lg bg-[#152b55] px-3 py-2 text-white text-xs"
            onClick={next}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </section>
  );
}


/* =================== Contenido por página =================== */
export default function Convocatoria() {
  /* ---------- PÁGINA 1 (Convocatoria) ---------- */
  const Page1_desktop = (
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
        <Chip color="danger">OBJETIVO:</Chip>
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
        <Chip color="danger">LUGAR Y FECHAS</Chip>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.7vw,18px)]">
          <li>Escuela Preparatoria No. 23</li>
          <li>San Jerónimo de Juárez, Guerrero</li>
          <li>4 y 5 de octubre de 2025</li>
        </ul>
      </Card>
    </>
  );

  // Versión móvil de la página 1 (apilado)
  const Page1_mobile = (
    <>
      <Card className="px-3 py-3">
        <p className="text-[15px] leading-relaxed">
          La NASA (Administración Nacional de Aeronáutica y del Espacio), a través de su
          Desafío Internacional Space Apps, en colaboración con la Universidad Autónoma de
          Guerrero (UAGro) y la empresa de tecnologías ATEX IT SOLUTIONS,
        </p>
      </Card>

      <div className="text-center">
        <span className="text-[22px] font-extrabold tracking-wide text-[#e6262a]">
          CONVOCAN A:
        </span>
      </div>

      <Card className="px-3 py-3">
        <p className="text-[15px] leading-relaxed">
          Estudiantes, profesionistas y público en general a participar en el{" "}
          <b>NASA Space Apps Challenge 2025 Guerrero</b>, una experiencia global de innovación y creatividad científica.
        </p>
      </Card>

      <Card className="px-3 py-3">
        <Chip color="danger">OBJETIVO:</Chip>
        <p className="mt-2 text-[15px] leading-relaxed">
          Impulsar el desarrollo de habilidades en ciencia, tecnología, ingeniería y
          matemáticas (STEM) entre estudiantes de la UAGro y público en general mayor de
          16 años…
        </p>
      </Card>

      <Card className="px-3 py-3">
        <Chip color="danger">LUGAR Y FECHAS</Chip>
        <ul className="mt-2 list-disc pl-5 text-[15px]">
          <li>Escuela Preparatoria No. 23</li>
          <li>San Jerónimo de Juárez, Guerrero</li>
          <li>4 y 5 de octubre de 2025</li>
        </ul>
      </Card>
    </>
  );

  /* ---------- PÁGINA 2 (BASES parte 1) ---------- */
  const Page2_desktop = (
    <>
      <div className="absolute left-1/2 top-[10.5%] -translate-x-1/2">
        <span className="rounded-md bg-[#e6262a] px-4 py-1.5 text-[clamp(14px,3.8vw,20px)] font-extrabold text-white shadow">
          BASES
        </span>
      </div>

      {/* 1. PARTICIPANTES */}
      <Card className="absolute left-[5.5%] top-[19%] w-[41.5%] px-4 py-4">
        <Chip>1. PARTICIPANTES</Chip>
        <p className="mt-2 text-[clamp(12px,2.6vw,16px)]">
          Podrán inscribirse personas mayores de 16 años, organizadas de manera individual o en equipos de 6 integrantes, en las siguientes categorías:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li><b>Educación Media Superior:</b> Estudiantes de todos los subsistemas.</li>
          <li><b>Educación Superior:</b> Estudiantes de la UAGro y otras instituciones.</li>
          <li><b>Profesional:</b> Público general, egresados y profesionales de áreas afines.</li>
        </ul>
        <p className="mt-2 text-[clamp(11px,2.4vw,14px)] text-gray-700">
          <b>Nota:</b> Menores de 16 años solo con tutor presente; menores de 18 con carta de autorización.
        </p>
      </Card>

      {/* 2. NORMATIVA GENERAL */}
      <Card className="absolute left-[53%] top-[19%] w-[41.5%] px-4 py-4">
        <Chip>2. NORMATIVA GENERAL</Chip>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li>Participación <b>presencial o virtual</b>.</li>
          <li>Desarrollo el <b>4 y 5 de octubre</b> respondiendo un desafío oficial.</li>
          <li>Se aceptan software, hardware, modelos, narrativas, visualizaciones con <b>datos abiertos de la NASA</b>.</li>
          <li>Originalidad; si hay material previo, indicar porcentaje y citar.</li>
          <li>Declarar uso de <b>IA</b> (tipo y porcentaje). Idiomas: español o inglés.</li>
          <li>Referencias en formato <b>APA</b> (normas-apa.org).</li>
        </ul>
        <div className="mt-3 rounded-lg border-l-8 border-[#c82333] bg-[#fff3f4] px-3 py-2 text-[clamp(11px,2.5vw,15px)]">
          <p className="font-semibold">Entrega final</p>
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>Repositorio público del proyecto.</li>
            <li>PDF (máx. 5 páginas) con descripción.</li>
            <li>Asesoría adicional para finalistas rumbo a etapa global.</li>
          </ul>
        </div>
      </Card>
    </>
  );

  const Page2_mobile = (
    <>
      <div className="text-center">
        <Chip color="danger">BASES</Chip>
      </div>
      <Card className="px-3 py-3">
        <Chip>1. PARTICIPANTES</Chip>
        <p className="mt-2 text-[15px]">
          Mayores de 16 años, individual o en equipos de hasta 6:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[15px] space-y-1">
          <li><b>Media Superior:</b> estudiantes de todos los subsistemas.</li>
          <li><b>Superior:</b> estudiantes UAGro y otras instituciones.</li>
          <li><b>Profesional:</b> público general, egresados y profesionales.</li>
        </ul>
        <p className="mt-2 text-[13px] text-gray-700">
          <b>Nota:</b> Menores de 16 con tutor presente; menores de 18 con carta.
        </p>
      </Card>
      <Card className="px-3 py-3">
        <Chip>2. NORMATIVA GENERAL</Chip>
        <ul className="mt-2 list-disc pl-5 text-[15px] space-y-1">
          <li>Presencial o virtual.</li>
          <li>Proyectos el 4 y 5 de octubre (desafíos oficiales NASA).</li>
          <li>Software / hardware / modelos / narrativas / visualizaciones con datos NASA.</li>
          <li>Originalidad y citación adecuada.</li>
          <li>Declarar uso de IA. Idiomas: ES o EN.</li>
          <li>Referencias en formato APA.</li>
        </ul>
        <div className="mt-3 rounded-lg border-l-8 border-[#c82333] bg-[#fff3f4] px-3 py-2 text-[14px]">
          <p className="font-semibold">Entrega final</p>
          <ul className="mt-1 list-disc pl-5">
            <li>Repositorio público.</li>
            <li>PDF (máx. 5 páginas).</li>
            <li>Asesoría para finalistas.</li>
          </ul>
        </div>
      </Card>
    </>
  );

  /* ---------- PÁGINA 3 (BASES parte 2) ---------- */
  const Page3_desktop = (
    <>
      <Card className="absolute left-[5.5%] top-[16%] w-[41.5%] px-4 py-4">
        <Chip>3. EJES TEMÁTICOS (LEARN, LAUNCH, LEAD)</Chip>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li><b>Aprende (LRN):</b> Educación y divulgación sobre el espacio.</li>
          <li><b>Lanza (LCH):</b> Soluciones basadas en datos NASA.</li>
          <li><b>Lidera (LDR):</b> Innovación y liderazgo con impacto.</li>
        </ul>
      </Card>

      <Card className="absolute left-[53%] top-[16%] w-[41.5%] px-4 py-4">
        <Chip>4. ETAPAS DEL PROCESO</Chip>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li>
            <b>Registro interno:</b> 17 julio – 20 septiembre 2025.{" "}
            <a className="underline" href="https://www.spaceappschallenge.org/" target="_blank" rel="noreferrer">
              spaceappschallenge.org
            </a>
          </li>
          <li>Formación: 21 agosto – 3 octubre 2025.</li>
          <li>Hackathon presencial: 4 y 5 de octubre (Prepa 23).</li>
          <li>Entrega: 5 de octubre, 12:00 h.</li>
          <li>Premiación: 5 de octubre, 14:00 h.</li>
        </ul>
      </Card>

      <Card className="absolute left-[5.5%] top-[58%] w-[41.5%] px-4 py-4">
        <Chip>5. EVALUACIÓN</Chip>
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

      <Card className="absolute left-[53%] top-[58%] w-[41.5%] px-4 py-4">
        <Chip>6. PREMIOS</Chip>
        <ul className="mt-2 list-disc pl-5 text-[clamp(12px,2.6vw,16px)] space-y-1.5">
          <li>Certificado oficial de participación (requiere registro y entrega en plataforma).</li>
          <li>Trofeos y reconocimientos a los tres mejores proyectos por temática.</li>
          <li>Mentorías y capacitaciones tecnológicas especializadas.</li>
        </ul>
      </Card>

      <Card className="absolute left-[5.5%] top-[85%] w-[70%] px-4 py-3">
        <Chip>7. INFORMES Y CONTACTO</Chip>
        <div className="mt-2 text-[clamp(11px,2.5vw,15px)] leading-snug">
          Sitio local:{" "}
          <a className="underline" href="https://www.spaceappschallenge.org/2025/local-events/guerrero/" target="_blank" rel="noreferrer">
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

  const Page3_mobile = (
    <>
      <Card className="px-3 py-3">
        <Chip>3. EJES TEMÁTICOS (LEARN, LAUNCH, LEAD)</Chip>
        <ul className="mt-2 list-disc pl-5 text-[15px] space-y-1">
          <li><b>Aprende (LRN):</b> Educación y divulgación científica.</li>
          <li><b>Lanza (LCH):</b> Soluciones basadas en datos NASA.</li>
          <li><b>Lidera (LDR):</b> Innovación y liderazgo comunitario.</li>
        </ul>
      </Card>

      <Card className="px-3 py-3">
        <Chip>4. ETAPAS DEL PROCESO</Chip>
        <ul className="mt-2 list-disc pl-5 text-[15px] space-y-1">
          <li>Registro: 17 julio – 20 septiembre 2025 (spaceappschallenge.org).</li>
          <li>Formación: 21 ago – 3 oct 2025.</li>
          <li>Hackathon: 4 y 5 de octubre (Prepa 23).</li>
          <li>Entrega: 5 de octubre, 12:00 h. · Premiación: 14:00 h.</li>
        </ul>
      </Card>

      <Card className="px-3 py-3">
        <Chip>5. EVALUACIÓN</Chip>
        <ul className="mt-2 list-disc pl-5 text-[15px]">
          <li>Creatividad e innovación: 30%</li>
          <li>Impacto y factibilidad: 30%</li>
          <li>Calidad técnica: 20%</li>
          <li>Presentación y storytelling: 20%</li>
        </ul>
      </Card>

      <Card className="px-3 py-3">
        <Chip>6. PREMIOS</Chip>
        <ul className="mt-2 list-disc pl-5 text-[15px] space-y-1">
          <li>Certificado oficial de participación (NASA).</li>
          <li>Trofeos y reconocimientos a los tres mejores.</li>
          <li>Mentorías y capacitaciones tecnológicas.</li>
        </ul>
      </Card>

      <Card className="px-3 py-3">
        <Chip>7. INFORMES Y CONTACTO</Chip>
        <p className="mt-2 text-[14px]">
          Sitio local:{" "}
          <a className="underline" href="https://www.spaceappschallenge.org/2025/local-events/guerrero/" target="_blank" rel="noreferrer">
            spaceappschallenge.org/2025/local-events/guerrero
          </a>
          <br />
          Correo: <a className="underline" href="mailto:octavio.olea@atex-it.com">octavio.olea@atex-it.com</a> ·
          Tel: <a className="underline" href="tel:+527473219876">(747) 321 9876</a> ·{" "}
          <a className="underline" href="tel:+529602445317">(960) 244 5317</a>
        </p>
      </Card>
    </>
  );

  /* Colecciones para escritorio vs móvil */
  const desktopPages = [Page1_desktop, Page2_desktop, Page3_desktop];
  const mobilePages = [Page1_mobile, Page2_mobile, Page3_mobile];

  return (
    <section id="convocatoria" className="mx-auto flex max-w-[1100px] flex-col gap-8 px-3 py-8 text-[#0a0a0a]">
      {/* Escritorio: póster + flip 3D */}
      <DesktopBook pages={desktopPages} bg={BG} className="mt-2" />

      {/* Móvil: apilado con swipe */}
      <MobilePager pages={mobilePages} bg={BG} className="mt-2" />

      {/* CTA común */}
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
    </section>
  );
}
