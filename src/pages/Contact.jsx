import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "../components/SocialIcons";
import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../data/siteData";

const contactItems = [
  {
    Icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "For event enquiries, partnerships, and general queries.",
    action: "Send Email",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    value: "@iei_cse",
    href: siteConfig.instagram,
    description: "Follow us for event announcements and chapter updates.",
    action: "Visit Profile",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "IE(I) CSE Chapter",
    href: siteConfig.linkedin,
    description: "Connect with us professionally and follow our posts.",
    action: "Connect",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
    description: "Find us on campus at the CSE department block.",
    action: null,
  },
];

export default function Contact() {
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
            Get in Touch
          </span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Contact
          </h1>
          <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.7, maxWidth: 400, margin: "0 auto" }}>
            Have a question, partnership proposal, or just want to say hi?
            Reach out through any of the channels below.
          </p>
        </motion.div>
      </section>

      {/* Contact cards */}
      <section style={{ padding: "72px 0", background: "#09090b", borderTop: "1px solid #18181b" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {contactItems.map((item, idx) => {
              const { Icon } = item;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  style={{
                    background: "#111113",
                    border: "1px solid #27272a",
                    borderRadius: 16, padding: "24px",
                    display: "flex", flexDirection: "column",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    cursor: "default",
                  }}
                  whileHover={{ borderColor: "#3f3f46" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={18} style={{ color: "#3b82f6" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#a1a1aa", marginBottom: 2 }}>{item.label}</p>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#fafafa" }}>{item.value}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.65, flex: 1, marginBottom: 20 }}>
                    {item.description}
                  </p>
                  {item.href && item.action && (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        fontSize: 13, fontWeight: 700, color: "#3b82f6",
                        textDecoration: "none", transition: "gap 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                      onMouseLeave={e => e.currentTarget.style.gap = "6px"}
                    >
                      {item.action} <ArrowUpRight size={13} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapter info */}
      <section style={{ padding: "64px 0", background: "#050507", borderTop: "1px solid #18181b" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeading eyebrow="Chapter Info" title="About Our Chapter" style={{ marginBottom: 40 }} />
          <div style={{
            background: "#111113", border: "1px solid #27272a",
            borderRadius: 16, padding: "32px",
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 28,
          }}>
            {[
              { label: "Chapter Name",  value: siteConfig.name },
              { label: "Parent Body",   value: "Institution of Engineers (India)" },
              { label: "Department",    value: "Computer Science & Engineering" },
              { label: "Established",   value: siteConfig.founded },
              { label: "Location",      value: siteConfig.location },
              { label: "Email",         value: siteConfig.email },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 8 }}>
                  {item.label}
                </p>
                <p style={{ fontSize: 14, color: "#a1a1aa", fontWeight: 500 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section style={{
        padding: "80px 24px", textAlign: "center",
        background: "#3b82f6",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 440, margin: "0 auto" }}
        >
          <MessageCircle style={{ color: "rgba(255,255,255,0.7)", margin: "0 auto 16px", display: "block" }} size={36} />
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>
            Quick response on Instagram
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 28 }}>
            For the fastest response, DM us on Instagram.
            We typically respond within a day.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              background: "#fff", color: "#1d4ed8",
              fontSize: 14, fontWeight: 700, borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            <InstagramIcon size={15} /> Visit Instagram
          </a>
        </motion.div>
      </section>
    </main>
  );
}
