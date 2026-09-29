import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../data/events";

/**
 * CoverflowCarousel
 * 3D Coverflow-style carousel for Featured Events poster section.
 * Pulls poster data from the shared events array so displayName and
 * time values are always consistent with the rest of the site.
 * Styled with the project existing dark zinc + blue (#3b82f6) theme.
 */

// Build slide list from shared event data (preserves order from events.js)
const POSTERS = events.map(e => ({
  src:   e.poster,
  title: e.displayName || e.title,
  time:  e.time,
}));

const N = POSTERS.length;

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getSlideConfig(offset) {
  if (offset === 0) {
    return { zIndex: 10, scale: 1, x: "0%", rotateY: 0, opacity: 1, blur: 0, brightness: 1 };
  }
  if (offset === -1) {
    return { zIndex: 5, scale: 0.72, x: "-62%", rotateY: 28, opacity: 0.55, blur: 2.5, brightness: 0.55 };
  }
  if (offset === 1) {
    return { zIndex: 5, scale: 0.72, x: "62%", rotateY: -28, opacity: 0.55, blur: 2.5, brightness: 0.55 };
  }
  if (offset <= -2) {
    return { zIndex: 1, scale: 0.5, x: "-130%", rotateY: 45, opacity: 0, blur: 8, brightness: 0.3 };
  }
  return { zIndex: 1, scale: 0.5, x: "130%", rotateY: -45, opacity: 0, blur: 8, brightness: 0.3 };
}

function NavArrow({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      id={`coverflow-arrow-${direction}`}
      aria-label={isLeft ? "Previous poster" : "Next poster"}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "42%",
        [isLeft ? "left" : "right"]: "clamp(4px, 2vw, 16px)",
        transform: "translateY(-50%)",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "1px solid #27272a",
        background: "rgba(9,9,11,0.85)",
        color: "#a1a1aa",
        cursor: "pointer",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "border-color 0.2s, color 0.2s, box-shadow 0.2s, background 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#3b82f6";
        e.currentTarget.style.color = "#3b82f6";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.3)";
        e.currentTarget.style.background = "rgba(59,130,246,0.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#27272a";
        e.currentTarget.style.color = "#a1a1aa";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "rgba(9,9,11,0.85)";
      }}
    >
      {isLeft ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

function Dots({ active, onDotClick }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}
      aria-label="Carousel indicators"
    >
      {POSTERS.map((_, i) => (
        <button
          key={i}
          id={`coverflow-dot-${i}`}
          aria-label={`Go to poster ${i + 1}`}
          onClick={() => onDotClick(i)}
          style={{
            width: i === active ? 24 : 8,
            height: 8,
            borderRadius: 4,
            border: "none",
            cursor: "pointer",
            background: i === active ? "#3b82f6" : "#27272a",
            transition: "width 0.3s ease, background 0.3s ease",
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function CoverflowCarousel() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((nextIdx) => {
    setActive(mod(nextIdx, N));
  }, []);

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <div
      id="featured-events-carousel"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 clamp(52px, 9vw, 88px)",
        boxSizing: "border-box",
        overflow: "visible",
      }}
    >
      {/* 3D stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(300px, 44vw, 520px)",
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {POSTERS.map((poster, i) => {
          let offset = i - active;
          if (offset > N / 2)  offset -= N;
          if (offset < -N / 2) offset += N;

          const visible = Math.abs(offset) <= 2;
          if (!visible) return null;

          const cfg = getSlideConfig(offset);
          const isActive = offset === 0;

          return (
            <motion.div
              key={poster.src}
              aria-hidden={!isActive}
              onClick={isActive ? undefined : () => goTo(i)}
              animate={{
                scale: cfg.scale,
                x: cfg.x,
                rotateY: cfg.rotateY,
                opacity: cfg.opacity,
                zIndex: cfg.zIndex,
                filter: `blur(${cfg.blur}px) brightness(${cfg.brightness})`,
              }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 28,
              }}
              style={{
                position: "absolute",
                width: "clamp(180px, 28vw, 320px)",
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
                cursor: isActive ? "default" : "pointer",
                userSelect: "none",
              }}
            >
              {/* Poster image — natural aspect ratio, no distortion */}
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: isActive
                    ? "1px solid rgba(59,130,246,0.4)"
                    : "1px solid #27272a",
                  boxShadow: isActive
                    ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.1)"
                    : "0 8px 32px rgba(0,0,0,0.4)",
                  transition: "border-color 0.5s, box-shadow 0.5s",
                }}
              >
                <img
                  src={poster.src}
                  alt={poster.title}
                  draggable={false}
                  loading="lazy"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Title + time below active slide */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  style={{ marginTop: 14, textAlign: "center" }}
                >
                  <p style={{
                    fontSize: "clamp(12px, 1.3vw, 15px)",
                    fontWeight: 600,
                    color: "#a1a1aa",
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    margin: 0,
                  }}>
                    {poster.title}
                  </p>
                  {poster.time && (
                    <p style={{
                      fontSize: "clamp(10px, 1.1vw, 12px)",
                      color: "#52525b",
                      marginTop: 4,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      margin: "4px 0 0",
                    }}>
                      {poster.time}
                    </p>
                  )}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Left / right navigation */}
      <NavArrow direction="left"  onClick={prev} />
      <NavArrow direction="right" onClick={next} />

      {/* Dot indicators */}
      <Dots active={active} onDotClick={i => goTo(i)} />
    </div>
  );
}
