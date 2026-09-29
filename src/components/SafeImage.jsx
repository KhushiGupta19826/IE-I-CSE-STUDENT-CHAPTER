import { useState } from "react";

const ratios = {
  poster:    "2 / 3",
  square:    "1 / 1",
  landscape: "16 / 9",
  card:      "4 / 3",
  wide:      "3 / 1",
};

/**
 * SafeImage
 *
 * aspectRatio="natural" — lets the real image height drive the container height.
 *   Renders as width:100%, height:auto — no fixed-ratio box.
 *   Use this for portrait posters to avoid stretch/crop.
 *
 * All other aspectRatio values use a fixed-ratio box (position:absolute image inside).
 */
export default function SafeImage({
  src,
  alt = "",
  aspectRatio = "landscape",
  style = {},
  placeholderLabel = "",
  objectFit = "cover",
}) {
  const [status, setStatus] = useState(src ? "loading" : "empty");
  const isNatural = aspectRatio === "natural";

  if (isNatural) {
    // Natural mode: image determines height. No fixed-ratio wrapper.
    return (
      <div style={{ position: "relative", width: "100%", background: "#18181b", ...style }}>
        {/* Skeleton shimmer — shown until image loads */}
        {status === "loading" && (
          <div
            className="skeleton"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, minHeight: 120 }}
          />
        )}
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              transition: "opacity 0.35s",
              opacity: status === "loaded" ? 1 : 0,
            }}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
          />
        ) : null}
        {(status === "error" || status === "empty") && (
          <div style={{ minHeight: 200 }}>
            <PosterPlaceholder label={placeholderLabel || alt} inset />
          </div>
        )}
      </div>
    );
  }

  // Fixed-ratio mode (original behaviour)
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
        <PosterPlaceholder label={placeholderLabel || alt} inset />
      )}
    </div>
  );
}

function PosterPlaceholder({ label, inset = false }) {
  const lines = label ? label.split("\n") : [];
  return (
    <div style={{
      position: inset ? "absolute" : "relative",
      inset: inset ? 0 : undefined,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: 16,
      background: "linear-gradient(160deg, #18181b 0%, #111113 100%)",
      border: "1px solid #27272a",
      minHeight: inset ? undefined : 200,
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
