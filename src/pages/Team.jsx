import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import SectionHeading from "../components/SectionHeading";
import { teamData } from "../data/team";

function TeamSection({ title, eyebrow, members, dark = false }) {
  return (
    <section style={{
      padding: "72px 0",
      background: dark ? "#050507" : "#09090b",
      borderTop: "1px solid #18181b",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeading eyebrow={eyebrow} title={title} align="left" style={{ marginBottom: 40 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
          {members.map(member => <TeamCard key={member.id} member={member} />)}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <main style={{ background: "#09090b" }}>
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
            The People
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Our Team
          </h1>
          <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Meet the students behind every event, every workshop, and every initiative
            that makes this chapter run.
          </p>
        </motion.div>
      </section>

      <TeamSection eyebrow="Chapter Head" title="Leadership" members={teamData.leadership} />
      <TeamSection eyebrow="Team" title="Core Team" members={teamData.coreTeam} dark />
      <TeamSection eyebrow="Volunteers" title="Coordinators" members={teamData.coordinators} />

      {/* Join CTA */}
      <section style={{
        padding: "80px 24px",
        textAlign: "center",
        background: "#050507",
        borderTop: "1px solid #18181b",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 440, margin: "0 auto" }}
        >
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fafafa", letterSpacing: "-0.02em", marginBottom: 12 }}>
            Want to be part of the team?
          </h2>
          <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.7, marginBottom: 28 }}>
            We're always looking for passionate students to join as coordinators
            and core members. Follow our Instagram for announcements.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              background: "#3b82f6", color: "#fff",
              fontSize: 14, fontWeight: 700, borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 24px rgba(59,130,246,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Follow @iei_cse
          </a>
        </motion.div>
      </section>
    </main>
  );
}
