import { Link, NavLink } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import IEILogo from "./IEILogo";
import { navLinks, siteConfig } from "../data/siteData";

export default function Footer() {
  return (
    <footer style={{
      background: "#050507",
      borderTop: "1px solid #18181b",
      marginTop: 120,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48,
          marginBottom: 64,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2", maxWidth: 380 }}>
            <IEILogo size="md" />
            <p style={{ color: "#52525b", fontSize: 14, lineHeight: 1.7, marginTop: 16, marginBottom: 24 }}>
              {siteConfig.description}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: siteConfig.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: siteConfig.linkedin,  Icon: LinkedinIcon,  label: "LinkedIn" },
                { href: `mailto:${siteConfig.email}`, Icon: MailIcon, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36, height: 36,
                    borderRadius: 8,
                    border: "1px solid #27272a",
                    background: "#111113",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#71717a",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#3b82f6";
                    e.currentTarget.style.color = "#3b82f6";
                    e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#27272a";
                    e.currentTarget.style.color = "#71717a";
                    e.currentTarget.style.background = "#111113";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 20 }}>
              Navigation
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    style={({ isActive }) => ({
                      fontSize: 14, color: isActive ? "#3b82f6" : "#71717a",
                      textDecoration: "none", transition: "color 0.2s",
                    })}
                    onMouseEnter={e => e.currentTarget.style.color = "#fafafa"}
                    onMouseLeave={e => e.currentTarget.style.color = "#71717a"}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 20 }}>
              Contact
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { Icon: MailIcon, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { Icon: MapPinIcon, text: siteConfig.location, href: null },
                { Icon: InstagramIcon, text: "@iei_cse", href: siteConfig.instagram },
              ].map(({ Icon, text, href }, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <Icon size={13} style={{ color: "#3b82f6", marginTop: 2, flexShrink: 0 }} />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      style={{ fontSize: 13, color: "#71717a", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#fafafa"}
                      onMouseLeave={e => e.currentTarget.style.color = "#71717a"}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ fontSize: 13, color: "#71717a" }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: 32,
          borderTop: "1px solid #18181b",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "#3f3f46" }}>
            © {siteConfig.year} {siteConfig.name}. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "#3f3f46" }}>
            A student chapter of{" "}
            <a
              href="https://www.ieindia.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#52525b", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fafafa"}
              onMouseLeave={e => e.currentTarget.style.color = "#52525b"}
            >
              The Institution of Engineers (India)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Inline icon wrappers to avoid lucide import issues
function MailIcon(props) {
  return <Mail {...props} />;
}
function MapPinIcon(props) {
  return <MapPin {...props} />;
}
