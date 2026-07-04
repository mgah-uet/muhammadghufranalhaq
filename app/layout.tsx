import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";
import { Analytics } from "@vercel/analytics/react";
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Muhammad Ghufran — Senior Electrical Engineer",
  description:
    "Senior Electrical Engineer with 10+ years designing electrical systems for hospitals, petrochemical facilities, and high-rise developments across Kuwait and Saudi Arabia. Specialist in single-line diagrams, ETAP, Revit MEP, and LEED-certified design.",
  keywords: [
    "electrical engineer",
    "senior electrical engineer",
    "Kuwait",
    "ETAP",
    "Revit MEP",
    "LEED",
    "single-line diagram",
    "SLD",
    "load flow",
    "electrical design",
    "GCC",
  ],
  authors: [{ name: "Muhammad Ghufran" }],
  creator: "Muhammad Ghufran",
  openGraph: {
    type: "website",
    title: "Muhammad Ghufran — Senior Electrical Engineer",
    description:
      "10+ years engineering electrical systems for hospitals, petrochemical facilities, and high-rise developments across Kuwait and Saudi Arabia.",
    siteName: "Muhammad Ghufran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ghufran — Senior Electrical Engineer",
    description:
      "10+ years engineering electrical systems for hospitals, petrochemical facilities, and high-rise developments across Kuwait and Saudi Arabia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full overflow-x-hidden`}
    >
      <body className="antialiased relative overflow-x-hidden">
        <ParticleBackground />
        <div className="top-glow-bg" />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
