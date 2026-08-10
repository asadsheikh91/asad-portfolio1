import { ImageResponse } from "next/og";

export const alt = "Asad Amad Sheikh — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#FBFAF7",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#0E7490",
            letterSpacing: "0.12em",
            marginBottom: 32,
          }}
        >
          BACKEND ENGINEER · ISLAMABAD, UTC+5
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#16191D",
            lineHeight: 1.15,
            marginBottom: 32,
          }}
        >
          I built a live product on my own, and I keep it running.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#5B6470",
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          Sole engineer on ParchiVisa — four country-specific scoring engines in production.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid #E3E0D8",
            paddingTop: 32,
            fontSize: 26,
            color: "#16191D",
          }}
        >
          Asad Amad Sheikh
          <span style={{ color: "#E3E0D8" }}>·</span>
          <span style={{ color: "#5B6470" }}>asadamadsh.me</span>
        </div>
      </div>
    ),
    size
  );
}
