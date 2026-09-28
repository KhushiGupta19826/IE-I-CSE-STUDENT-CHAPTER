import { useState } from "react";

export default function IEILogo({ size = "md" }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const heights = { sm: 32, md: 40, lg: 52, xl: 72 };
  const h = heights[size] || 40;

  const logoSrc = "/assets/logos/iei-logo.png";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {!imgError && (
        <img
          src={logoSrc}
          alt="IE(I) CSE Student Chapter Logo"
          style={{ height: h, width: "auto", objectFit: "contain", display: imgLoaded ? "block" : "none" }}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}
      {(!imgLoaded || imgError) && <LogoMark size={size} />}
    </div>
  );
}

function LogoMark({ size = "md" }) {
  const box = { sm: 30, md: 36, lg: 44, xl: 60 }[size] || 36;
  const fs  = { sm: 9,  md: 10, lg: 12, xl: 15 }[size] || 10;
  const nameFs = { sm: 12, md: 13, lg: 16, xl: 20 }[size] || 13;
  const subFs  = { sm: 9,  md: 10, lg: 11, xl: 13 }[size] || 10;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* Icon mark */}
      <div style={{
        width: box, height: box,
        borderRadius: 8,
        background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 0 16px rgba(59,130,246,0.3)",
      }}>
        <span style={{ color: "#fff", fontSize: fs, fontWeight: 900, letterSpacing: "-0.02em", userSelect: "none" }}>
          IE(I)
        </span>
      </div>
      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <span style={{ color: "#fafafa", fontSize: nameFs, fontWeight: 700, letterSpacing: "-0.02em", userSelect: "none" }}>
          IE(I) CSE
        </span>
        <span style={{ color: "#71717a", fontSize: subFs, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", userSelect: "none" }}>
          Student Chapter
        </span>
      </div>
    </div>
  );
}
