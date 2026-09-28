import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

export default function PosterCard({ event, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid #27272a",
      }}
      onClick={() => onClick && onClick(event)}
      role="button"
      tabIndex={0}
      aria-label={`View poster for ${event.title}`}
      onKeyDown={e => e.key === "Enter" && onClick && onClick(event)}
    >
      {/* Image */}
      <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
        <SafeImage
          src={event.poster}
          alt={`${event.title} event poster`}
          aspectRatio="poster"
          placeholderLabel={`${event.title}\n${event.category}`}
        />
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: 16,
        }}
      >
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#60a5fa", marginBottom: 6,
        }}>
          {event.category}
        </span>
        <h3 style={{
          fontSize: 14, fontWeight: 700, color: "#fff",
          lineHeight: 1.35, marginBottom: 10,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          margin: "0 0 10px",
        }}>
          {event.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#a1a1aa" }}>
            <Calendar size={10} /> {event.date}
          </span>
          <Link
            to={`/events/${event.id}`}
            onClick={e => e.stopPropagation()}
            style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              fontSize: 11, fontWeight: 700,
              background: "#3b82f6", color: "#fff",
              padding: "5px 10px", borderRadius: 6,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#2563eb"}
            onMouseLeave={e => e.currentTarget.style.background = "#3b82f6"}
            aria-label={`View event: ${event.title}`}
          >
            View <ArrowUpRight size={10} />
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}
