import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1917",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
        }}
      >
        <svg width="110" height="110" viewBox="0 0 18 18" fill="none">
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
    ),
    { ...size }
  );
}
