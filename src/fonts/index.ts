import localFont from "next/font/local";

/**
 * Fuentes autohospedadas (variables) — cero requests externos,
 * cero FOUT y funcionan sin conexión a Google Fonts en build.
 */
export const inter = localFont({
  src: "./InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const fraunces = localFont({
  src: [
    {
      path: "./Fraunces-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./Fraunces-Italic-Variable.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});
