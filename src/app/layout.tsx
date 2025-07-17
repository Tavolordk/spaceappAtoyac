import "@/app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "NASA Space Apps Challenge",
  description: "Official site for the 2025 NASA Space Apps Challenge in Mexico",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#FFFCF6]`}>{children}</body>
    </html>
  );
}
