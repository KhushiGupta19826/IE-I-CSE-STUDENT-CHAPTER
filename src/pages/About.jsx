import { motion } from "framer-motion";
import { Code, Trophy, Mic, Network, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { aboutContent } from "../data/siteData";

const ICON_MAP = { Code, Trophy, Mic, Network };

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section style={{
      background: "#09090b",
      borderBottom: "1px solid #18181b",
      padding: "80px 24px 72px",
      textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3b82f6", display: "block", marginBottom: 16 }}>
            {eyebrow}
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Section({ children, dark = false }) {
  return (
    <section style={{
      padding: "80px 0",
      background: dark ? "#050507" : "#09090b",
      borderTop: "1px solid #18181b",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {children}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main style={{ background: "#09090b" }}>
      <PageHeader
        eyebrow="Our Story"
        title="About the Chapter"
        subtitle="Learn about who we are, what we stand for, and the community we're building."
      />

      {/* About IE(I) + Chapter */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          {[
            { eyebrow: "The Parent Body", ...aboutContent.iei },
            { eyebrow: "Our Chapter", ...aboutContent.chapter },
          ].map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3b82f6", display: "block", marginBottom: 16 }}>
                {block.eyebrow}
              </span>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fafafa", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>
                {block.title}
              </h2>
              {block.body.map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: "#71717a", lineHeight: 1.75, marginBottom: 14 }}>{para}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section dark>
        <SectionHeading eyebrow="Direction" title="Vision & Mission" style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {[
            { letter: "V", label: "Vision", text: aboutContent.vision, accent: false },
            { letter: "M", label: "Mission", text: aboutContent.mission, accent: true },
          ].map(({ letter, label, text, accent }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              style={{
                padding: 36,
                background: accent ? "#3b82f6" : "#111113",
                border: `1px solid ${accent ? "transparent" : "#27272a"}`,
                borderRadius: 18,
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: accent ? "rgba(255,255,255,0.15)" : "rgba(59,130,246,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <span style={{ fontSize: 16, fontWeight: 900, color: accent ? "#fff" : "#3b82f6" }}>{letter}</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: accent ? "#fff" : "#fafafa", marginBottom: 14, letterSpacing: "-0.015em" }}>
                {label}
              </h3>
              <p style={{ fontSize: 15, color: accent ? "rgba(255,255,255,0.8)" : "#71717a", lineHeight: 1.7 }}>
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Objectives */}
      <Section>
        <SectionHeading eyebrow="Goals" title="Our Objectives" style={{ marginBottom: 48 }} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 12, maxWidth: 900, margin: "0 auto",
        }}>
          {aboutContent.objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: "16px 18px",
                background: "#111113",
                border: "1px solid #27272a",
                borderRadius: 12,
              }}
            >
              <CheckCircle2 size={16} style={{ color: "#3b82f6", flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.6 }}>{obj}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What We Do */}
      <Section dark>
        <SectionHeading
          eyebrow="Activities"
          title="What We Do"
          subtitle="A diverse program of technical and professional development activities."
          style={{ marginBottom: 52 }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {aboutContent.whatWeDo.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                style={{
                  padding: "28px 24px",
                  background: "#111113",
                  border: "1px solid #27272a",
                  borderRadius: 16,
                  transition: "border-color 0.25s",
                }}
                whileHover={{ borderColor: "#3b82f6" }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                }}>
                  {Icon && <Icon size={20} style={{ color: "#3b82f6" }} />}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fafafa", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.65 }}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Why Participate CTA */}
      <section style={{
        padding: "96px 24px", textAlign: "center",
        background: "#3b82f6",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 640, margin: "0 auto" }}
        >
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 16 }}>
            Go beyond the curriculum.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
            Academic marks tell part of the story. The projects you build, the competitions
            you enter, the professionals you meet — those define the engineer you become.
            IE(I) CSE Chapter is the space where that transformation happens.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
