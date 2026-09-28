import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", style = {} }) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: isCenter ? "center" : "flex-start",
        textAlign: isCenter ? "center" : "left",
        ...style,
      }}
    >
      {eyebrow && (
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#3b82f6",
        }}>
          {eyebrow}
        </span>
      )}
      <h2 style={{
        fontSize: "clamp(26px, 4vw, 40px)",
        fontWeight: 800,
        color: "#fafafa",
        lineHeight: 1.15,
        letterSpacing: "-0.025em",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 16,
          color: "#71717a",
          maxWidth: 540,
          lineHeight: 1.65,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
