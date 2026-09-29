import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MapPin, Tag, Users, CheckCircle2, ExternalLink } from "lucide-react";
import { getEventById } from "../data/events";
import SafeImage from "../components/SafeImage";

const catColor = {
  Workshop:    { bg: "rgba(139,92,246,0.12)",  text: "#a78bfa", border: "rgba(139,92,246,0.2)" },
  Hackathon:   { bg: "rgba(249,115,22,0.12)",  text: "#fb923c", border: "rgba(249,115,22,0.2)" },
  Competition: { bg: "rgba(239,68,68,0.12)",   text: "#f87171", border: "rgba(239,68,68,0.2)" },
  Seminar:     { bg: "rgba(14,165,233,0.12)",  text: "#38bdf8", border: "rgba(14,165,233,0.2)" },
  Hiring:      { bg: "rgba(234,179,8,0.12)",   text: "#facc15", border: "rgba(234,179,8,0.2)" },
  Orientation: { bg: "rgba(168,85,247,0.12)",  text: "#c084fc", border: "rgba(168,85,247,0.2)" },
  Other:       { bg: "rgba(113,113,122,0.12)", text: "#a1a1aa", border: "rgba(113,113,122,0.2)" },
};
const statusStyle = {
  upcoming:  { bg: "rgba(16,185,129,0.12)", text: "#34d399", border: "rgba(16,185,129,0.25)" },
  ongoing:   { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  completed: { bg: "rgba(113,113,122,0.1)", text: "#71717a", border: "rgba(113,113,122,0.2)" },
};

const DETAIL_GRID_STYLE = `
  .event-detail-grid {
    display: grid;
    grid-template-columns: minmax(0, 360px) 1fr;
    gap: 48px;
    align-items: start;
  }
  @media (max-width: 720px) {
    .event-detail-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
`;

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = getEventById(eventId);

  if (!event) {
    return (
      <main style={{
        minHeight: "60vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "80px 24px", textAlign: "center",
        background: "#09090b",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: "#111113", border: "1px solid #27272a",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24,
        }}>
          <Calendar size={24} style={{ color: "#52525b" }} />
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: "#fafafa", marginBottom: 10 }}>Event Not Found</h1>
        <p style={{ fontSize: 14, color: "#52525b", marginBottom: 28, maxWidth: 300 }}>
          The event you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/events"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 24px", background: "#3b82f6", color: "#fff",
            fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none",
          }}
        >
          <ArrowLeft size={14} /> Back to Events
        </Link>
      </main>
    );
  }

  const cat  = catColor[event.category] || catColor.Other;
  const stat = statusStyle[event.status] || statusStyle.completed;

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      style={{ background: "#09090b", minHeight: "100vh" }}
    >
      {/* Back */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 24px 0" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 13, color: "#71717a", background: "none", border: "none",
            cursor: "pointer", fontFamily: "inherit",
            padding: "8px 0",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#fafafa"}
          onMouseLeave={e => e.currentTarget.style.color = "#71717a"}
        >
          <ArrowLeft size={14} /> Back to Events
        </button>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px 64px" }}>
        <style>{DETAIL_GRID_STYLE}</style>
        <div className="event-detail-grid">
          {/* Poster — constrained width + max-height so it doesn't dominate the page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid #27272a",
              background: "#09090b",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              maxHeight: 520,
            }}
          >
            <img
              src={event.poster}
              alt={`${event.title} poster`}
              loading="lazy"
              style={{
                display: "block",
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: 520,
                objectFit: "contain",
              }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ position: "sticky", top: 88 }}
          >
            {/* Badges */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", padding: "4px 12px", borderRadius: 20, background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}>
                {event.category}
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, background: stat.bg, color: stat.text, border: `1px solid ${stat.border}` }}>
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 28 }}>
              {event.title}
            </h1>

            {/* Meta card */}
            <div style={{
              background: "#111113", border: "1px solid #27272a",
              borderRadius: 14, padding: 20, marginBottom: 24,
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              {[
                { Icon: Calendar, text: event.date },
                { Icon: Clock,    text: event.time },
                { Icon: MapPin,   text: event.venue },
                event.organizers?.length && { Icon: Users, text: event.organizers.join(", ") },
              ].filter(Boolean).filter(({ text }) => text).map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#a1a1aa" }}>
                  <Icon size={14} style={{ color: "#3b82f6", flexShrink: 0 }} /> {text}
                </div>
              ))}
            </div>

            <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.75, marginBottom: 24 }}>
              {event.description}
            </p>

            {/* Tags */}
            {event.tags?.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  <Tag size={12} style={{ color: "#52525b" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#52525b" }}>Tags</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {event.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 12, padding: "5px 12px",
                      background: "#111113", border: "1px solid #27272a",
                      borderRadius: 20, color: "#71717a",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {event.status === "upcoming" && event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  width: "100%", padding: "14px 24px",
                  background: "#3b82f6", color: "#fff",
                  fontSize: 14, fontWeight: 700, borderRadius: 12,
                  textDecoration: "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 24px rgba(59,130,246,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Register Now <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      {event.highlights?.length > 0 && (
        <section style={{ padding: "64px 0", background: "#050507", borderTop: "1px solid #18181b" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fafafa", letterSpacing: "-0.02em", marginBottom: 28 }}>
              Event Highlights
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {event.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "16px 18px",
                    background: "#111113", border: "1px solid #27272a",
                    borderRadius: 12,
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: "#3b82f6", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.6 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {event.gallery?.length > 0 && (
        <section style={{ padding: "64px 0", background: "#09090b", borderTop: "1px solid #18181b" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fafafa", letterSpacing: "-0.02em", marginBottom: 24 }}>Gallery</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {event.gallery.map((img, idx) => (
                <div key={idx} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #27272a" }}>
                  <SafeImage src={img} alt={`Gallery ${idx + 1}`} aspectRatio="landscape" placeholderLabel="Gallery" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div style={{ padding: "48px 24px", textAlign: "center", borderTop: "1px solid #18181b" }}>
        <Link
          to="/events"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 24px",
            border: "1px solid #27272a", background: "transparent",
            color: "#a1a1aa", fontSize: 14, fontWeight: 600,
            borderRadius: 10, textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#3b82f6"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#27272a"; e.currentTarget.style.color = "#a1a1aa"; }}
        >
          <ArrowLeft size={14} /> Back to Events
        </Link>
      </div>
    </motion.main>
  );
}
