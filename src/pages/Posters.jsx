import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import PosterGallery from "../components/PosterGallery";
import { events } from "../data/events";

const FILTERS = [
  { label: "All",          value: "all" },
  { label: "2026",         value: "2026" },
  { label: "2025",         value: "2025" },
  { label: "Workshops",    value: "Workshop" },
  { label: "Competitions", value: "Competition" },
  { label: "Hackathons",   value: "Hackathon" },
  { label: "Seminars",     value: "Seminar" },
];

function filterPosters(all, filter, search) {
  let r = [...all];
  if (filter === "2026") r = r.filter(e => e.dateISO?.startsWith("2026"));
  else if (filter === "2025") r = r.filter(e => e.dateISO?.startsWith("2025"));
  else if (filter !== "all") r = r.filter(e => e.category.toLowerCase() === filter.toLowerCase());
  if (search.trim()) {
    const q = search.toLowerCase();
    r = r.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      e.tags?.some(t => t.toLowerCase().includes(q))
    );
  }
  return r;
}

export default function Posters() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => filterPosters(events, activeFilter, search), [activeFilter, search]);

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
          width: 500, height: 300, borderRadius: "50%",
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
            Visual Archive
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Event Posters
          </h1>
          <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, maxWidth: 400, margin: "0 auto" }}>
            A visual record of every event we've hosted. Click any poster to view details.
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section style={{ padding: "48px 24px 96px", maxWidth: 1280, margin: "0 auto" }}>
        {/* Filters */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {/* Search */}
          <div style={{ position: "relative", maxWidth: 400 }}>
            <Search size={14} style={{
              position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
              color: "#52525b", pointerEvents: "none",
            }} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search posters…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search posters"
              style={{
                width: "100%",
                padding: "10px 40px 10px 38px",
                background: "#111113", border: "1px solid #27272a",
                borderRadius: 10, fontSize: 14, color: "#fafafa",
                outline: "none", fontFamily: "inherit",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#3b82f6"}
              onBlur={e => e.target.style.borderColor = "#27272a"}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear"
                style={{
                  position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                  color: "#52525b", background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center",
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filter chips */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
                style={{
                  padding: "8px 16px", borderRadius: 10,
                  fontSize: 13, fontWeight: 500,
                  border: "1px solid",
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.2s",
                  background:    activeFilter === f.value ? "#3b82f6" : "#111113",
                  color:         activeFilter === f.value ? "#fff"    : "#71717a",
                  borderColor:   activeFilter === f.value ? "#3b82f6" : "#27272a",
                }}
                onMouseEnter={e => { if (activeFilter !== f.value) { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#fafafa"; } }}
                onMouseLeave={e => { if (activeFilter !== f.value) { e.currentTarget.style.borderColor = "#27272a"; e.currentTarget.style.color = "#71717a"; } }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {(search || activeFilter !== "all") && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 13, color: "#52525b" }}>
              {filtered.length === 0 ? "No posters match." : `${filtered.length} poster${filtered.length !== 1 ? "s" : ""} found`}
            </motion.p>
          )}
        </div>

        <PosterGallery events={filtered} />
      </section>
    </main>
  );
}
