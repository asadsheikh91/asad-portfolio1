import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

// Instrument Sans is a true variable font — one file covers 400–700.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Sole engineer on ParchiVisa, a live visa-assessment platform running four country-specific scoring engines in production. Backend engineer in Islamabad working in Python, FastAPI, and PostgreSQL, from schema design through deployment. Open to remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://asadamadsh.me"),
  title: "Asad Amad Sheikh — Backend Engineer",
  description,
  keywords: [
    "Backend Engineer",
    "FastAPI Developer",
    "Python Developer",
    "PostgreSQL",
    "API Development",
    "ParchiVisa",
    "Remote Backend Developer",
    "Asad Amad Sheikh",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: "Asad Amad Sheikh" }],
  creator: "Asad Amad Sheikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asadamadsh.me",
    title: "Asad Amad Sheikh — Backend Engineer",
    description,
    siteName: "Asad Amad Sheikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asad Amad Sheikh — Backend Engineer",
    description,
    creator: "@asadamadsheikh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://asadamadsh.me",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${plexMono.variable}`}>
      <body className="relative min-h-screen">
        {/*
          Ambient warm glows. Decorative only — kept at low alpha because the deep-teal
          accent sits at 5.1:1 on paper, so a heavier wash would drag accent text under
          WCAG AA. Clipped to the viewport so they can never cause horizontal scroll.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          {/* orange — top left */}
          <div
            style={{
              position: "absolute",
              top: "-170px",
              left: "-170px",
              width: "640px",
              height: "640px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />

          {/* yellow — bottom right */}
          <div
            style={{
              position: "absolute",
              bottom: "-190px",
              right: "-150px",
              width: "660px",
              height: "660px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(250,204,21,0.18) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* amber — mid right, smallest and faintest */}
          <div
            style={{
              position: "absolute",
              top: "36%",
              right: "4%",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="relative z-10">
          <SmoothScroll />
          {children}
        </div>
      </body>
    </html>
  );
}
