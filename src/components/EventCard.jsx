import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import SafeImage from "./SafeImage";

const catColor = {
  Workshop:    { bg: "rgba(139,92,246,0.12)", text: "#a78bfa", border: "rgba(139,92,246,0.2)" },
  Hackathon:   { bg: "rgba(249,115,22,0.12)", text: "#fb923c", border: "rgba(249,115,22,0.2)" },
  Competition: { bg: "rgba(239,68,68,0.12)",  text: "#f87171", border: "rgba(239,68,68,0.2)" },
  Seminar:     { bg: "rgba(14,165,233,0.12)", text: "#38bdf8", border: "rgba(14,165,233,0.2)" },
  Technical:   { bg: "rgba(20,184,166,0.12)", text: "#2dd4bf", border: "rgba(20,184,166,0.2)" },
  Other:       { bg: "rgba(113,113,122,0.12)", text: "#a1a1aa", border: "rgba(113,113,122,0.2)" },
};

const statusStyle = {
  upcoming:  { bg: "rgba(16,185,129,0.12)", text: "#34d399", border: "rgba(16,185,129,0.25)" },
  ongoing:   { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  completed: { bg: "rgba(113,113,122,0.1)", text: "#71717a", border: "rgba(113,113,122,0.2)" },
};

export default function EventCard({ event }) {
  const cat = catColor[event.category] || catColor.Other;
  const stat = statusStyle[event.status] || statusStyle.completed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        background: "#111113",
        border: "1px solid #27272a",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        cursor: "default",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        borderColor: "#3f3f46",
      }}
    >
      {/* Poster */}
      <div style={{ overflow: "hidden" }}>
        <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
          <SafeImage
            src={event.poster}
            alt={`${event.title} poster`}
            aspectRatio="poster"
            placeholderLabel={`${event.title}\n${event.category}`}
          />
        </motion.div>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 20px 20px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {/* Badges */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
            padding: "4px 10px", borderRadius: 20,
            background: cat.bg, color: cat.text, border: `1px solid ${cat.border}`,
          }}>
            {event.category}
          </span>
          <span style={{
            fontSize: 11, fontWeight: 600,
            padding: "4px 10px", borderRadius: 20,
            background: stat.bg, color: stat.text, border: `1px solid ${stat.border}`,
          }}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 16, fontWeight: 700,
          color: "#fafafa",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          margin: 0,
        }}>
          {event.title}
        </h3>

        {/* Meta */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { Icon: Calendar, text: event.date },
            { Icon: Clock,    text: event.time },
            { Icon: MapPin,   text: event.venue },
          ].map(({ Icon, text }) => (
            <li key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#71717a" }}>
              <Icon size={13} style={{ color: "#3b82f6", flexShrink: 0 }} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{text}</span>
            </li>
          ))}
        </ul>

        {/* Description */}
        <p style={{
          fontSize: 13, color: "#52525b", lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          flex: 1, margin: 0,
        }}>
          {event.description}
        </p>

        {/* CTA */}
        <Link
          to={`/events/${event.id}`}
          style={{
            marginTop: 4,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            padding: "11px 16px",
            border: "1px solid #27272a",
            borderRadius: 10,
            fontSize: 13, fontWeight: 600,
            color: "#a1a1aa",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s, background 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "#3b82f6";
            e.currentTarget.style.color = "#3b82f6";
            e.currentTarget.style.background = "rgba(59,130,246,0.06)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#27272a";
            e.currentTarget.style.color = "#a1a1aa";
            e.currentTarget.style.background = "transparent";
          }}
          aria-label={`View details for ${event.title}`}
        >
          View Details <ArrowRight size={13} />
        </Link>
      </div>
    </motion.article>
  );
}
