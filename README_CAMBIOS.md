# Rediseño NASA Space Apps Challenge Guerrero 2026

Este paquete contiene archivos de reemplazo para el repositorio `Tavolordk/spaceappAtoyac`, rama `dev`.

## Qué cambia

- Nueva identidad oscura espacial, con acentos cian y amarillo.
- Hero editorial con planeta, satélite, telemetría y cuenta regresiva.
- Navegación fija y menú móvil accesible.
- Nueva sección de misión y registro oficial.
- Tarjetas de experiencia más profesionales y consistentes.
- Cronología 2026 basada en las fechas globales publicadas.
- Sección de aliados con aviso de no patrocinio oficial.
- Footer y metadatos actualizados a 2026.
- Sistema de diseño completo dentro de `globals.css`.
- Compatibilidad con `prefers-reduced-motion`.

## Archivos que debes reemplazar

Copia el contenido de este paquete sobre las mismas rutas de tu proyecto:

- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/AboutRegisterSection.tsx`
- `src/components/FeaturesSection.tsx`
- `src/components/SponsorsSection.tsx`
- `src/components/Footer.tsx`

Agrega este archivo nuevo:

- `src/components/MissionTimeline.tsx`

## Recursos utilizados

El rediseño conserva los recursos ya existentes:

- `/public/uagro.png`
- `/public/atex it.png`

No se reemplazó la ruta `/convocatoria`, por lo que seguirá funcionando con tu implementación actual.

## Ejecutar

```bash
npm install
npm run dev
```

## Datos que conviene personalizar

- Agrega tu correo o formulario real en los botones de colaboración y contacto.
- Modalidad y sede local aparecen como pendientes.
- Sustituye el isotipo CSS por el logo localizado oficial 2026 cuando NASA Space Apps lo entregue.
- Revisa que la ubicación aprobada se llame exactamente “Guerrero”, “Atoyac” o la denominación autorizada.

## Nota de marca

El diseño evita usar el logotipo institucional de NASA. Debes utilizar únicamente los materiales de NASA Space Apps autorizados y respetar las reglas de la organización global.

## Intro sin video de Gemini (2026-08-12)
- Se eliminó la dependencia de `public/intro.mp4` y del video generado externamente.
- La intro ahora usa una secuencia local de 8 frames PNG transparentes en `public/intro-frames/`.
- `IntroVideoGate.tsx` controla el avance de frames y mantiene el botón para saltar la intro.
- Se corrigió el logo local para mantener el pin de ubicación dentro del círculo y junto a `Guerrero`.
- Se eliminaron assets obsoletos de video/GIF/poster que ya no se usan.
