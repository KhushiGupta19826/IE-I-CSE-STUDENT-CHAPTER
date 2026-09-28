import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import EventFilters from "../components/EventFilters";
import EventGrid from "../components/EventGrid";
import { events } from "../data/events";

function filterEvents(all, filter, search) {
  let r = [...all];
  if (filter === "upcoming") r = r.filter(e => e.status === "upcoming");
  else if (filter === "past") r = r.filter(e => e.status === "completed" || e.status === "ongoing");
  else if (filter !== "all") r = r.filter(e => e.category.toLowerCase() === filter.toLowerCase());
  if (search.trim()) {
    const q = search.toLowerCase();
    r = r.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.tags?.some(t => t.toLowerCase().includes(q))
    );
  }
  return r;
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => filterEvents(events, activeFilter, search), [activeFilter, search]);

  const upcoming  = events.filter(e => e.status === "upcoming").length;
  const completed = events.filter(e => e.status === "completed").length;

  return (
    <main style={{ background: "#09090b", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{
        background: "#09090b",
        borderBottom: "1px solid #18181b",
        padding: "72px 24px 56px",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: "relative" }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3b82f6", display: "block", marginBottom: 16 }}>
            All Events
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Events
          </h1>
          <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 28px" }}>
            Technical workshops, hackathons, competitions, and seminars — designed to
            challenge you, connect you, and grow you.
          </p>

          {/* Quick stats */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { dot: "#34d399", count: upcoming,       label: "Upcoming" },
              { dot: "#71717a", count: completed,      label: "Completed" },
              { dot: "#60a5fa", count: events.length,  label: "Total" },
            ].map(({ dot, count, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#71717a" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />
                <span><strong style={{ color: "#fafafa" }}>{count}</strong> {label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section style={{ padding: "48px 24px 96px", maxWidth: 1280, margin: "0 auto" }}>
        {/* Filters */}
        <div style={{ marginBottom: 40 }}>
          <EventFilters
            active={activeFilter}
            onFilterChange={setActiveFilter}
            search={search}
            onSearchChange={setSearch}
          />
        </div>

        {/* Result count */}
        {(search || activeFilter !== "all") && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontSize: 13, color: "#52525b", marginBottom: 24 }}
          >
            {filtered.length === 0
              ? "No events match your search."
              : `${filtered.length} event${filtered.length !== 1 ? "s" : ""} found`}
          </motion.p>
        )}

        <EventGrid
          events={filtered}
          emptyMessage={{
            title: "No events found",
            subtitle: activeFilter !== "all" || search
              ? "Try a different filter or search term."
              : "We're preparing something exciting. Check back soon.",
          }}
        />
      </section>
    </main>
  );
}
