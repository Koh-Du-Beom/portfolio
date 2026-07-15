import { ImageResponse } from "next/og";

export const alt = "Dubeom Koh - Full-stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 78% 22%, #1d4ed8 0%, #09090b 38%, #09090b 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#60a5fa" }}>
          DUBEOM.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 78, fontWeight: 700 }}>
            DUBEOM KOH
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#a1a1aa" }}>
            FULL-STACK DEVELOPER PORTFOLIO
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#71717a" }}>
          React · TypeScript · Next.js · Three.js · Spring Boot
        </div>
      </div>
    ),
    size,
  );
}
