import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#060813",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Syed Sabirudeen B — Portfolio | Software Engineer & 3D Systems",
  description:
    "Portfolio of Syed Sabirudeen B — Computer Science Engineer specializing in fluid reactive web architectures, 3D spatial graphics, mobile platforms, and agentic AI systems.",
  keywords: [
    "Syed Sabirudeen B",
    "Software Engineer",
    "Portfolio",
    "Computer Science Engineer",
    "Next.js 16",
    "React 19",
    "WebGL",
    "Three.js",
    "Agentic AI",
    "Flutter",
    "Firebase",
    "Frontend Architect",
    "Chennai"
  ],
  authors: [{ name: "Syed Sabirudeen B", url: "https://github.com/sabir2006-10" }],
  creator: "Syed Sabirudeen B",
  openGraph: {
    title: "Syed Sabirudeen B — Portfolio & 3D Interactive Showcase",
    description:
      "Interactive portfolio featuring 40-frame canvas sequencer, 3D spatial project orbits, technical tooling capabilities, and hackathon honors.",
    type: "website",
    locale: "en_US",
    siteName: "Syed Sabirudeen B Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Sabirudeen B — Portfolio & 3D Interactive Showcase",
    description:
      "Interactive portfolio featuring 40-frame canvas sequencer, 3D spatial project orbits, and agentic AI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-[#060813] text-[#f5f5f7] font-sans antialiased selection:bg-[#00f0ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}
