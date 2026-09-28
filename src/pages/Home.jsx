import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, Lightbulb, BookOpen, Users, TrendingUp } from "lucide-react";
import { events } from "../data/events";
import { stats, whyIEI, siteConfig } from "../data/siteData";
import { teamData } from "../data/team";
import EventCard from "../components/EventCard";
import TeamCard from "../components/TeamCard";
import SectionHeading from "../components/SectionHeading";
import SafeImage from "../components/SafeImage";

const ICON_MAP = { Lightbulb, BookOpen, Users, TrendingUp };

// Animated counter
function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 1800;
    const step = 16;
    const increment = (target / duration) * step;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const featuredEvent = events.find(e => e.status === "upcoming") || events[0];
const recentEvents  = events.filter(e => e.id !== featuredEvent?.id).slice(0, 4);
const leadershipPreview = teamData.leadership.slice(0, 4);

/* ──────────────────────────────────────────────────────────── */

function Section({ children, style = {} }) {
  return (
    <section style={{ padding: "96px 0", ...style }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {children}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main style={{ background: "#09090b" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: "92vh",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        background: "#09090b",
      }}>
        {/* Dot grid */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, #27272a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
        }} />

        {/* Glow orbs */}
        <div aria-hidden="true" style={{
          position: "absolute", top: "20%", right: "15%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", bottom: "10%", left: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ maxWidth: 760 }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 32,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", animation: "ping 1.5s infinite" }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60a5fa" }}>
                {siteConfig.name}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: "clamp(44px, 7vw, 80px)",
                fontWeight: 900,
                color: "#fafafa",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                marginBottom: 24,
              }}
            >
              Engineering{" "}
              <span style={{ color: "#3b82f6" }}>Ideas.</span>
              <br />
              Building{" "}
              <span style={{ color: "#3b82f6" }}>Impact.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              style={{
                fontSize: 18, color: "#71717a", lineHeight: 1.7,
                maxWidth: 560, marginBottom: 40,
              }}
            >
              The official student chapter of the Institution of Engineers (India) —
              where technical curiosity meets real-world application, collaboration,
              and professional growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <Link
                to="/events"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px",
                  background: "#3b82f6", color: "#fff",
                  fontWeight: 700, fontSize: 14, borderRadius: 12,
                  textDecoration: "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 32px rgba(59,130,246,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Explore Events <ArrowRight size={15} />
              </Link>
              <Link
                to="/about"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px",
                  border: "1px solid #27272a",
                  background: "transparent", color: "#a1a1aa",
                  fontWeight: 600, fontSize: 14, borderRadius: 12,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#3f3f46"; e.currentTarget.style.color = "#fafafa"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#27272a"; e.currentTarget.style.color = "#a1a1aa"; }}
              >
                About Chapter
              </Link>
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              position: "absolute", bottom: 24, left: 24,
              display: "flex", alignItems: "center", gap: 10,
            }}
            aria-hidden="true"
          >
            <div style={{
              width: 20, height: 32, borderRadius: 100,
              border: "1px solid #3f3f46",
              display: "flex", alignItems: "flex-start", justifyContent: "center",
              padding: "4px 0",
            }}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                style={{ width: 3, height: 6, borderRadius: 2, background: "#52525b" }}
              />
            </div>
            <span style={{ fontSize: 11, color: "#3f3f46", letterSpacing: "0.08em", textTransform: "uppercase" }}>Scroll</span>
          </motion.div>
        </div>

        <style>{`
          @keyframes ping { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }
        `}</style>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────── */}
      <Section style={{ background: "#09090b", borderTop: "1px solid #18181b" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3b82f6", display: "block", marginBottom: 16 }}>
              Who We Are
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
              The Official IE(I)<br />CSE Student Chapter
            </h2>
            <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.75, marginBottom: 16 }}>
              We operate under the Institution of Engineers (India) — India's largest
              multi-disciplinary professional engineering society. Our chapter connects
              CSE students with industry, research, and professional development through
              technical events, workshops, and competitive programs.
            </p>
            <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.75, marginBottom: 32 }}>
              From debugging competitions to AI seminars, every event we run is
              designed to go beyond the classroom.
            </p>
            <Link
              to="/about"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontWeight: 700, color: "#3b82f6",
                textDecoration: "none", transition: "gap 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.gap = "10px"}
              onMouseLeave={e => e.currentTarget.style.gap = "6px"}
            >
              Know More <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {[
              { num: "800K+", label: "IE(I) Members Nationwide" },
              { num: siteConfig.founded, label: "Chapter Established" },
              { num: "40+", label: "Events Conducted" },
              { num: "1200+", label: "Students Reached" },
            ].map(item => (
              <div key={item.label} style={{
                background: "#111113",
                border: "1px solid #27272a",
                borderRadius: 16, padding: "28px 20px",
              }}>
                <p style={{ fontSize: 32, fontWeight: 900, color: "#3b82f6", letterSpacing: "-0.03em", marginBottom: 6 }}>
                  {item.num}
                </p>
                <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.4 }}>{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── FEATURED EVENT ───────────────────────────────────── */}
      {featuredEvent && (
        <Section style={{ background: "#050507", borderTop: "1px solid #18181b", borderBottom: "1px solid #18181b" }}>
          <SectionHeading eyebrow="Don't Miss" title="Featured Event" style={{ marginBottom: 48 }} align="left" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              background: "#111113",
              border: "1px solid #27272a",
              borderRadius: 20,
              overflow: "hidden",
              transition: "border-color 0.25s, box-shadow 0.25s",
            }}
            whileHover={{ borderColor: "#3f3f46", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}
          >
            {/* Poster */}
            <div style={{ minHeight: 280, overflow: "hidden" }}>
              <SafeImage
                src={featuredEvent.poster}
                alt={`${featuredEvent.title} poster`}
                aspectRatio="landscape"
                style={{ height: "100%" }}
                placeholderLabel={`${featuredEvent.title}\n${featuredEvent.category}`}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                  padding: "4px 12px", borderRadius: 20,
                  background: "rgba(59,130,246,0.12)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.2)",
                }}>
                  {featuredEvent.category}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  padding: "4px 12px", borderRadius: 20,
                  background: "rgba(16,185,129,0.1)", color: "#34d399", border: "1px solid rgba(16,185,129,0.2)",
                }}>
                  Upcoming
                </span>
              </div>

              <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
                {featuredEvent.title}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { Icon: Calendar, text: featuredEvent.date },
                  { Icon: Clock,    text: featuredEvent.time },
                  { Icon: MapPin,   text: featuredEvent.venue },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#71717a" }}>
                    <Icon size={14} style={{ color: "#3b82f6", flexShrink: 0 }} /> {text}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {featuredEvent.description}
              </p>

              <Link
                to={`/events/${featuredEvent.id}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 24px", width: "fit-content",
                  background: "#3b82f6", color: "#fff",
                  fontSize: 14, fontWeight: 700, borderRadius: 10,
                  textDecoration: "none", transition: "background 0.2s, box-shadow 0.2s",
                  marginTop: 8,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 24px rgba(59,130,246,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.boxShadow = "none"; }}
              >
                View Event <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </Section>
      )}

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24 }}>
            {stats.map(stat => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: "center", padding: "12px 0" }}
              >
                <p style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT EVENTS ────────────────────────────────────── */}
      {recentEvents.length > 0 && (
        <Section style={{ background: "#09090b", borderTop: "1px solid #18181b" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
            <SectionHeading eyebrow="Explore" title="Recent Events" align="left" />
            <Link
              to="/events"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 700, color: "#3b82f6",
                textDecoration: "none", transition: "gap 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.gap = "10px"}
              onMouseLeave={e => e.currentTarget.style.gap = "6px"}
            >
              View All Events <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {recentEvents.map(event => <EventCard key={event.id} event={event} />)}
          </div>
        </Section>
      )}

      {/* ── POSTER SHOWCASE ──────────────────────────────────── */}
      <Section style={{ background: "#050507", borderTop: "1px solid #18181b" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3b82f6", display: "block", marginBottom: 12 }}>
              Visual Gallery
            </span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fafafa", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
              Event Posters
            </h2>
          </div>
          <Link
            to="/posters"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 700, color: "#3b82f6",
              textDecoration: "none",
            }}
          >
            View All Posters <ArrowRight size={13} />
          </Link>
        </div>

        {/* Asymmetric grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 12,
        }}>
          {events.slice(0, 6).map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              style={{
                gridColumn: idx === 0 ? "span 2" : idx === 3 ? "span 2" : "span 1",
                gridRow:    idx === 0 ? "span 2" : "span 1",
                borderRadius: 12, overflow: "hidden",
                border: "1px solid #27272a",
                cursor: "pointer",
              }}
            >
              <Link to="/posters" style={{ display: "block", position: "relative" }}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ overflow: "hidden" }}>
                  <SafeImage
                    src={event.poster}
                    alt={event.title}
                    aspectRatio="poster"
                    placeholderLabel={event.title}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                    display: "flex", alignItems: "flex-end", padding: 12,
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{event.title}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── WHY IE(I) ────────────────────────────────────────── */}
      <Section style={{ background: "#09090b", borderTop: "1px solid #18181b" }}>
        <SectionHeading
          eyebrow="Why Join"
          title="Why IE(I) CSE Chapter?"
          subtitle="More than a student club — a professional community built around real skills, real networks, and real impact."
          style={{ marginBottom: 56 }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
          {whyIEI.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
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
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                }}>
                  {Icon && <Icon size={20} style={{ color: "#3b82f6" }} />}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fafafa", marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── TEAM PREVIEW ─────────────────────────────────────── */}
      <Section style={{ background: "#050507", borderTop: "1px solid #18181b" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <SectionHeading eyebrow="Our People" title="Chapter Leadership" align="left" />
          <Link
            to="/team"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "#3b82f6", textDecoration: "none" }}
          >
            Meet the Team <ArrowRight size={13} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
          {leadershipPreview.map(member => <TeamCard key={member.id} member={member} />)}
        </div>
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{
        padding: "120px 24px",
        background: "#09090b",
        borderTop: "1px solid #18181b",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3b82f6", display: "block", marginBottom: 20 }}>
              Join the Chapter
            </span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Be part of what<br />we're building.
            </h2>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
              Every event we run, every workshop we host — it's built by students,
              for students. Come be part of it.
            </p>
            <Link
              to="/events"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 32px",
                background: "#3b82f6", color: "#fff",
                fontSize: 15, fontWeight: 700, borderRadius: 12,
                textDecoration: "none",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Explore Events <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
