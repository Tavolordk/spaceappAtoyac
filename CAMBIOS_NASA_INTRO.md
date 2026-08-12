# Ajustes NASA Space Apps Guerrero

## Cambios incluidos

- Logo local corregido: el pin de ubicación está dentro del círculo y junto a `Guerrero`.
- `BrandMark` sigue usando `/logo.webp`, ahora con la versión corregida.
- Se eliminó la dependencia del video `intro.mp4`.
- Se eliminaron los archivos de video/GIF/poster antiguos de la intro.
- La intro ahora se reproduce con 8 frames WebP transparentes en `public/intro-frames/`.
- Los frames se precargan y hacen cross-fade para suavizar el doblado/desdoblado.
- Se conserva el botón `Saltar intro` y la lógica de `sessionStorage`.
- Se respeta `prefers-reduced-motion`.

## Ejecutar

```bash
npm install
npm run dev
```

Para build de producción:

```bash
npm run build
npm start
```

## Intro

La velocidad se controla en:

`src/components/IntroVideoGate.tsx`

Constantes principales:

- `FRAME_DURATION_MS`
- `FINAL_HOLD_MS`
- `EXIT_ANIMATION_MS`

No es necesario volver a generar ningún video externo.
