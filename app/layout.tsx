import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TargetCursor from "@/components/ui/TargetCursor";
import { SITE } from "@/data/site";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description:
    "Desarrollador Full Stack JR y AI Builder. Construyo soluciones web modernas, interfaces atractivas y productos digitales funcionales, con IA como aliado.",
  keywords: ["Full Stack Developer", "Next.js", "React", "AI", "Portfolio", "Ricardo García"],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Portfolio interactivo: desarrollo web moderno, 3D y experiencias conectadas al futuro.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${space.variable} ${mono.variable}`}>
      <body className="grain relative min-h-screen font-sans antialiased">
        <TargetCursor
          spinDuration={2.8}
          hoverDuration={0.3}
          cursorColor="#ffc23d"
          cursorColorOnTarget="#7dffb0"
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
