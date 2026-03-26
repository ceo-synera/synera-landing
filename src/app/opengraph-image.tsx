import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Synera Technologies — Automatización con IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1917",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative diagonal shape */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 600,
            height: 600,
            background: "#185FA5",
            opacity: 0.15,
            borderRadius: "80px",
            transform: "rotate(30deg)",
          }}
        />

        {/* Top: icon + brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Icon */}
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              width: 72,
              height: 72,
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3.5" fill="white" />
              <circle cx="2.5" cy="4" r="1.5" fill="white" opacity="0.6" />
              <circle cx="15.5" cy="4" r="1.5" fill="white" opacity="0.6" />
              <circle cx="2.5" cy="14" r="1.5" fill="white" opacity="0.6" />
              <circle cx="15.5" cy="14" r="1.5" fill="white" opacity="0.6" />
              <line x1="4" y1="4.5" x2="6.5" y2="7" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="11.5" y1="7" x2="14" y2="4.5" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="4" y1="13.5" x2="6.5" y2="11" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="11.5" y1="11" x2="14" y2="13.5" stroke="white" strokeWidth="1" opacity="0.6" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              color: "white",
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Synera Technologies
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 26,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Automatización con IA para negocios que quieren crecer
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Pills */}
          <div style={{ display: "flex", gap: "12px" }}>
            {["Bots de IA", "Automatización", "24/7"].map((pill) => (
              <div
                key={pill}
                style={{
                  background: "rgba(24, 95, 165, 0.25)",
                  color: "white",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "8px 20px",
                  borderRadius: "99px",
                  border: "1px solid rgba(24, 95, 165, 0.5)",
                }}
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              color: "#378ADD",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            syneratechnologies.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
