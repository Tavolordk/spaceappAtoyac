import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Space Apps Guerrero 2026",
    template: "%s | Space Apps Guerrero",
  },
  description:
    "Encuentro local de ciencia, datos, innovación y comunidad en Guerrero.",
  metadataBase: new URL("https://spaceapp-atoyac.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
