import { Search, X } from "lucide-react";

const FILTERS = [
  { label: "All",          value: "all" },
  { label: "Upcoming",     value: "upcoming" },
  { label: "Past",         value: "past" },
  { label: "Workshops",    value: "Workshop" },
  { label: "Hackathons",   value: "Hackathon" },
  { label: "Competitions", value: "Competition" },
  { label: "Seminars",     value: "Seminar" },
  { label: "Technical",    value: "Technical" },
  { label: "Other",        value: "Other" },
];

export default function EventFilters({ active, onFilterChange, search, onSearchChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Search */}
      <div style={{ position: "relative", maxWidth: 480 }}>
        <Search size={15} style={{
          position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
          color: "#52525b", pointerEvents: "none",
        }} aria-hidden="true" />
        <input
          type="search"
          placeholder="Search events by title, category or tag…"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          aria-label="Search events"
          style={{
            width: "100%",
            padding: "10px 40px 10px 40px",
            background: "#111113",
            border: "1px solid #27272a",
            borderRadius: 10,
            fontSize: 14,
            color: "#fafafa",
            outline: "none",
            transition: "border-color 0.2s",
            fontFamily: "inherit",
          }}
          onFocus={e => e.target.style.borderColor = "#3b82f6"}
          onBlur={e => e.target.style.borderColor = "#27272a"}
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              color: "#52525b", background: "none", border: "none", cursor: "pointer", padding: 2,
              display: "flex", alignItems: "center",
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter chips */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} role="group" aria-label="Filter events">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            aria-pressed={active === f.value}
            style={{
              padding: "8px 16px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 500,
              border: "1px solid",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "inherit",
              background: active === f.value ? "#3b82f6" : "#111113",
              color:      active === f.value ? "#fff"    : "#71717a",
              borderColor: active === f.value ? "#3b82f6" : "#27272a",
            }}
            onMouseEnter={e => {
              if (active !== f.value) {
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.color = "#fafafa";
              }
            }}
            onMouseLeave={e => {
              if (active !== f.value) {
                e.currentTarget.style.borderColor = "#27272a";
                e.currentTarget.style.color = "#71717a";
              }
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
