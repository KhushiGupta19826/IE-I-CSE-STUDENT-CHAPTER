import { AnimatePresence, motion } from "framer-motion";
import EventCard from "./EventCard";
import { EventCardSkeleton } from "./Skeleton";
import { CalendarX } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventGrid({ events, loading = false, emptyMessage }) {
  if (loading) {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 24,
      }}>
        {Array.from({ length: 8 }).map((_, i) => <EventCardSkeleton key={i} />)}
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "96px 24px", textAlign: "center", gap: 16,
        }}
      >
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: "#111113", border: "1px solid #27272a",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <CalendarX size={24} style={{ color: "#52525b" }} />
        </div>
        <div>
          <p style={{ color: "#fafafa", fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
            {emptyMessage?.title || "No events found"}
          </p>
          <p style={{ color: "#52525b", fontSize: 14, maxWidth: 320 }}>
            {emptyMessage?.subtitle || "Try adjusting your filters or search term."}
          </p>
        </div>
        {emptyMessage?.cta && (
          <Link
            to="/events"
            style={{ color: "#3b82f6", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
          >
            {emptyMessage.cta}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 24,
      }}
    >
      <AnimatePresence mode="popLayout">
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </AnimatePresence>
    </motion.div>
  );
}
