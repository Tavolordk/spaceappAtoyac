import type { Metadata } from "next";
import { fraunces, inter } from "@/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Space Apps Guerrero 2026",
    template: "%s | Space Apps Guerrero",
  },
  description:
    "Encuentro local de ciencia, datos, innovación y comunidad en Guerrero.",
  metadataBase: new URL("https://spaceapp-atoyac.vercel.app"),
  openGraph: {
    title: "Space Apps Guerrero 2026",
    description:
      "Dos días para colaborar, crear y resolver retos con datos abiertos en beneficio de Guerrero y del planeta.",
    url: "https://spaceapp-atoyac.vercel.app",
    siteName: "Space Apps Guerrero",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Space Apps Guerrero 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Apps Guerrero 2026",
    description:
      "Ciencia, datos, innovación y comunidad para un mejor futuro.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
