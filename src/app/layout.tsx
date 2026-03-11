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
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}