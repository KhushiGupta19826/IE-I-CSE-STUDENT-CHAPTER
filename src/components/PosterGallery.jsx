import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PosterCard from "./PosterCard";
import PosterLightbox from "./PosterLightbox";
import { PosterCardSkeleton } from "./Skeleton";
import { ImageOff } from "lucide-react";

export default function PosterGallery({ events, loading = false }) {
  const [lightboxEvent, setLightboxEvent] = useState(null);

  if (loading) {
    return (
      <div style={{ columns: "4 200px", columnGap: 16 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{ breakInside: "avoid", marginBottom: 16 }}>
            <PosterCardSkeleton />
          </div>
        ))}
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
          <ImageOff size={24} style={{ color: "#52525b" }} />
        </div>
        <div>
          <p style={{ color: "#fafafa", fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
            No posters available yet
          </p>
          <p style={{ color: "#52525b", fontSize: 14 }}>
            We're preparing something exciting. Check back soon.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      {/* Responsive grid — each poster determines its own height naturally */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16,
        alignItems: "start",
      }}>
        {events.map(event => (
          <PosterCard key={event.id} event={event} onClick={setLightboxEvent} />
        ))}
      </div>

      <AnimatePresence>
        {lightboxEvent && (
          <PosterLightbox
            event={lightboxEvent}
            events={events}
            onClose={() => setLightboxEvent(null)}
            onNavigate={setLightboxEvent}
          />
        )}
      </AnimatePresence>
    </>
  );
}
