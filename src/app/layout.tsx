// app/layout.tsx
import './globals.css';
import { Orbitron, Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const metadata: Metadata = {
  title: 'NASA Space Apps Challenge 2025 | Atoyac de Álvarez',
  description: 'Hackathon internacional en Atoyac de Álvarez',
}

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${orbitron.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
