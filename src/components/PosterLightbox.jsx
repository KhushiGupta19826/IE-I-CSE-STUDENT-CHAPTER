import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

export default function PosterLightbox({ event, events, onClose, onNavigate }) {
  const idx = events ? events.findIndex(e => e.id === event?.id) : -1;
  const hasPrev = idx > 0;
  const hasNext = idx < (events?.length ?? 0) - 1;

  const prev = useCallback(() => { if (hasPrev && events) onNavigate(events[idx - 1]); }, [hasPrev, events, idx, onNavigate]);
  const next = useCallback(() => { if (hasNext && events) onNavigate(events[idx + 1]); }, [hasNext, events, idx, onNavigate]);

  useEffect(() => {
    const h = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 16,
        }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Poster: ${event.title}`}
      >
        {/* Backdrop */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            position: "relative", zIndex: 10,
            display: "flex",
            background: "#111113",
            border: "1px solid #27272a",
            borderRadius: 20,
            overflow: "hidden",
            maxWidth: 860,
            width: "100%",
            maxHeight: "90vh",
            boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Poster side */}
          <div style={{ width: 300, flexShrink: 0 }}>
            <SafeImage
              src={event.poster}
              alt={`${event.title} poster`}
              aspectRatio="poster"
              style={{ height: "100%" }}
              placeholderLabel={`${event.title}\n${event.category}`}
            />
          </div>

          {/* Info side */}
          <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            padding: "28px 28px 28px",
            overflowY: "auto",
          }}>
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                alignSelf: "flex-end",
                padding: 8, borderRadius: 8,
                background: "#18181b", border: "1px solid #27272a",
                color: "#71717a", cursor: "pointer",
                display: "flex", alignItems: "center",
                transition: "color 0.2s, background 0.2s",
                marginBottom: 20,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fafafa"; e.currentTarget.style.background = "#27272a"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#71717a"; e.currentTarget.style.background = "#18181b"; }}
            >
              <X size={18} />
            </button>

            {/* Category */}
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#3b82f6",
              marginBottom: 12, display: "block",
            }}>
              {event.category}
            </span>

            <h2 style={{
              fontSize: 22, fontWeight: 800, color: "#fafafa",
              lineHeight: 1.25, letterSpacing: "-0.02em",
              marginBottom: 20,
            }}>
              {event.title}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {[
                { Icon: Calendar, text: `${event.date} · ${event.time}` },
                { Icon: MapPin,   text: event.venue },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#71717a" }}>
                  <Icon size={13} style={{ color: "#3b82f6", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>

            <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65, marginBottom: 20, flex: 1 }}>
              {event.description}
            </p>

            {event.tags?.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {event.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 11, padding: "4px 10px",
                    background: "#18181b", border: "1px solid #27272a",
                    borderRadius: 20, color: "#71717a",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Link
              to={`/events/${event.id}`}
              onClick={onClose}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 20px",
                background: "#3b82f6", color: "#fff",
                fontSize: 13, fontWeight: 700,
                borderRadius: 10, textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.background = "#3b82f6"}
            >
              View Full Details <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* Nav arrows */}
        {events && events.length > 1 && (
          <>
            {[
              { onClick: e => { e.stopPropagation(); prev(); }, disabled: !hasPrev, label: "Previous", Icon: ChevronLeft, side: "left" },
              { onClick: e => { e.stopPropagation(); next(); }, disabled: !hasNext, label: "Next",     Icon: ChevronRight, side: "right" },
            ].map(({ onClick, disabled, label, Icon, side }) => (
              <button
                key={side}
                onClick={onClick}
                disabled={disabled}
                aria-label={`${label} poster`}
                style={{
                  position: "absolute",
                  [side]: 16,
                  top: "50%", transform: "translateY(-50%)",
                  zIndex: 20,
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff", cursor: disabled ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: disabled ? 0.25 : 1,
                  transition: "background 0.2s",
                }}
              >
                <Icon size={20} />
              </button>
            ))}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
