import { useState } from "react";

const ratios = {
  poster:    "2 / 3",
  square:    "1 / 1",
  landscape: "16 / 9",
  card:      "4 / 3",
  wide:      "3 / 1",
};

export default function SafeImage({
  src,
  alt = "",
  aspectRatio = "landscape",
  style = {},
  placeholderLabel = "",
  objectFit = "cover",
}) {
  const [status, setStatus] = useState(src ? "loading" : "empty");

  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: ratios[aspectRatio] || ratios.landscape,
      overflow: "hidden",
      background: "#18181b",
      ...style,
    }}>
      {/* Skeleton */}
      {status === "loading" && (
        <div className="skeleton" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
      )}

      {/* Image */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit,
            transition: "opacity 0.35s",
            opacity: status === "loaded" ? 1 : 0,
          }}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}

      {/* Placeholder */}
      {(status === "error" || status === "empty") && (
        <PosterPlaceholder label={placeholderLabel || alt} />
      )}
    </div>
  );
}

function PosterPlaceholder({ label }) {
  const lines = label ? label.split("\n") : [];
  return (
    <div style={{
      position: "absolute", inset: 0,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: 16,
      background: "linear-gradient(160deg, #18181b 0%, #111113 100%)",
      border: "1px solid #27272a",
    }}>
      {/* Decorative grid */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        opacity: 0.35,
      }} />
      <div style={{ position: "relative", textAlign: "center" }}>
        <div style={{
          width: 44, height: 44,
          borderRadius: 10,
          background: "rgba(59,130,246,0.15)",
          border: "1px solid rgba(59,130,246,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 12px",
        }}>
          <span style={{ fontSize: 18, color: "#3b82f6" }}>✦</span>
        </div>
        {lines.map((line, i) => (
          <p key={i} style={{
            fontSize: i === 0 ? 13 : 11,
            fontWeight: i === 0 ? 600 : 400,
            color: i === 0 ? "#a1a1aa" : "#52525b",
            marginBottom: 2,
            letterSpacing: "0.02em",
            lineHeight: 1.4,
          }}>
            {line}
          </p>
        ))}
        {lines.length === 0 && (
          <p style={{ fontSize: 11, color: "#52525b" }}>Image</p>
        )}
      </div>
    </div>
  );
}
