import { ImageResponse } from "next/og";

export const alt = "Vijay Goyal, machine learning research and systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#f5f1e8",
        color: "#292822",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px 84px",
        width: "100%",
      }}
    >
      <div style={{ color: "#36594a", display: "flex", fontSize: 26, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        Machine learning research &amp; systems
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontFamily: "serif", fontSize: 92 }}>Vijay Goyal</div>
        <div style={{ display: "flex", fontSize: 32, maxWidth: 800 }}>
          Efficient models, inference scheduling, and first-principles implementations.
        </div>
      </div>
      <div style={{ background: "#36594a", display: "flex", height: 8, width: 180 }} />
    </div>,
    size,
  );
}
