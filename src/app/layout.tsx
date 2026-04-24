import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Asad Portfolio",
  description: "Backend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {/* Blue orb — top left */}
        <div
          style={{
            position: "fixed",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(29,78,216,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Purple orb — bottom right */}
        <div
          style={{
            position: "fixed",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(109,40,217,0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Teal accent — mid right */}
        <div
          style={{
            position: "fixed",
            top: "40%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)",
            filter: "blur(50px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* All page content sits above the background */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <SmoothScroll />
          {children}
        </div>
      </body>
    </html>
  );
}
