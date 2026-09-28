import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import IEILogo from "./IEILogo";
import { navLinks } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: scrolled || menuOpen
            ? "rgba(9,9,11,0.92)"
            : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled || menuOpen
            ? "1px solid #27272a"
            : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}>
            {/* Logo */}
            <Link to="/" aria-label="IE(I) CSE Student Chapter — Home">
              <IEILogo size="md" />
            </Link>

            {/* Desktop nav */}
            <nav
              style={{ display: "flex", alignItems: "center", gap: 4 }}
              className="hidden-mobile"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  style={({ isActive }) => ({
                    padding: "8px 16px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                    color: isActive ? "#3b82f6" : "#a1a1aa",
                    background: isActive ? "rgba(59,130,246,0.1)" : "transparent",
                  })}
                  onMouseEnter={e => {
                    if (!e.currentTarget.classList.contains("active"))
                      e.currentTarget.style.color = "#fafafa";
                  }}
                  onMouseLeave={e => {
                    if (!e.currentTarget.classList.contains("active"))
                      e.currentTarget.style.color = "#a1a1aa";
                  }}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div style={{ display: "flex", gap: 12 }} className="hidden-mobile">
              <Link
                to="/events"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "9px 20px",
                  background: "#3b82f6",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#2563eb";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.35)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "#3b82f6";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Explore Events <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{
                padding: 8,
                borderRadius: 8,
                color: "#a1a1aa",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              className="show-mobile"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: "flex" }}>
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: "flex" }}>
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid #27272a",
                background: "rgba(9,9,11,0.98)",
              }}
            >
              <nav style={{ padding: "12px 16px 20px", display: "flex", flexDirection: "column", gap: 4 }} aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    style={({ isActive }) => ({
                      padding: "12px 16px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 500,
                      textDecoration: "none",
                      color: isActive ? "#3b82f6" : "#a1a1aa",
                      background: isActive ? "rgba(59,130,246,0.1)" : "transparent",
                    })}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div style={{ paddingTop: 12, borderTop: "1px solid #27272a", marginTop: 8 }}>
                  <Link
                    to="/events"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "13px 20px",
                      background: "#3b82f6",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      borderRadius: 10,
                      textDecoration: "none",
                    }}
                  >
                    Explore Events <ArrowRight size={14} />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div style={{ height: 68 }} aria-hidden="true" />

      {/* Inline responsive helpers — only what we need */}
      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media (max-width: 1023px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
