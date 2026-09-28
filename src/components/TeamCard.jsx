import { motion } from "framer-motion";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import SafeImage from "./SafeImage";

function Initials({ name }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(29,78,216,0.15) 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      borderRadius: "50%",
    }}>
      <span style={{ fontSize: 22, fontWeight: 800, color: "#3b82f6", letterSpacing: "-0.02em" }}>
        {initials}
      </span>
    </div>
  );
}

export default function TeamCard({ member }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: "#111113",
        border: "1px solid #27272a",
        borderRadius: 16,
        padding: "24px 20px",
        textAlign: "center",
        display: "flex", flexDirection: "column", alignItems: "center",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      whileHover={{ borderColor: "#3f3f46", boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
    >
      {/* Photo */}
      <div style={{
        width: 80, height: 80,
        borderRadius: "50%",
        overflow: "hidden",
        marginBottom: 16,
        border: "2px solid #27272a",
        flexShrink: 0,
      }}>
        {member.photo
          ? <SafeImage src={`/assets/team/${member.photo}`} alt={member.name} aspectRatio="square" />
          : <Initials name={member.name} />
        }
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fafafa", marginBottom: 4, lineHeight: 1.3 }}>
        {member.name}
      </h3>
      <p style={{ fontSize: 11, fontWeight: 700, color: "#3b82f6", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
        {member.designation}
      </p>
      <p style={{
        fontSize: 13, color: "#52525b", lineHeight: 1.55,
        display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        marginBottom: 16, flex: 1,
      }}>
        {member.description}
      </p>

      {(member.linkedin || member.github) && (
        <div style={{ display: "flex", gap: 8 }}>
          {member.linkedin && (
            <a
              href={member.linkedin} target="_blank" rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              style={{
                width: 32, height: 32, borderRadius: 8,
                background: "#18181b", border: "1px solid #27272a",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#71717a", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#3b82f6"; e.currentTarget.style.background = "rgba(59,130,246,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#27272a"; e.currentTarget.style.color = "#71717a"; e.currentTarget.style.background = "#18181b"; }}
            >
              <LinkedinIcon size={13} />
            </a>
          )}
          {member.github && (
            <a
              href={member.github} target="_blank" rel="noopener noreferrer"
              aria-label={`${member.name} GitHub`}
              style={{
                width: 32, height: 32, borderRadius: 8,
                background: "#18181b", border: "1px solid #27272a",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#71717a", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#fafafa"; e.currentTarget.style.color = "#fafafa"; e.currentTarget.style.background = "#27272a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#27272a"; e.currentTarget.style.color = "#71717a"; e.currentTarget.style.background = "#18181b"; }}
            >
              <GithubIcon size={13} />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
