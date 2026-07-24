# Space Apps Guerrero 2026 — adaptación Next.js

Adaptación del diseño del jaguar al proyecto `spaceappAtoyac` en Next.js 15.

## Incluye

- Navbar responsive.
- Hero con jaguar, mar, tierra y líneas topográficas.
- Cuenta regresiva.
- Sección `AboutRegisterSection`.
- Sección `FeaturesSection`, con retos, agenda y sede.
- Sección `SponsorsSection`.
- Formulario de contacto conectado al mismo Formspree del proyecto original.
- Footer.
- Ruta `/convocatoria`.
- Recursos optimizados en WebP.
- Diseño responsive y soporte para `prefers-reduced-motion`.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Datos editables

Los textos principales, fecha, sede, enlaces y agenda están centralizados en:

```text
src/data/site.ts
```

Cambia ahí la fecha definitiva, la ubicación o la liga de registro.

## Integración sobre el repositorio

Puedes copiar todo este proyecto, o reemplazar en tu rama `dev`:

```text
src/app
src/components
src/hooks
src/data
public/hero-jaguar.webp
public/venue.webp
public/agave.webp
```

Conservé los nombres de las secciones principales del repositorio:

- `Navbar`
- `Hero`
- `AboutRegisterSection`
- `FeaturesSection`
- `SponsorsSection`
- `ContactForm`
- `Footer`
- `Convocatoria`
