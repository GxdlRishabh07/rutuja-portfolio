"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import FlowerLogo from "./FlowerLogo";
import { navItems } from "@/data/portfolio";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-height)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: scrolled
            ? "rgba(253, 252, 240, 0.72)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 0, 255, 0.06)"
            : "none",
          transition: "background-color 0.5s ease, backdrop-filter 0.5s ease, border-bottom 0.5s ease",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            width: "100%",
            padding: "0 var(--container-padding)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Desktop Navigation */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {leftItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={isActive(item.href)} />
            ))}

            <Link href="/" style={{ margin: "0 24px", display: "flex" }} aria-label="Home">
              <FlowerLogo size={34} />
            </Link>

            {rightItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={isActive(item.href)} />
            ))}
          </div>

          {/* Mobile */}
          <div className="mobile-nav-toggle">
            <Link href="/" style={{ display: "flex", marginRight: "auto" }} aria-label="Home">
              <FlowerLogo size={30} />
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-primary)",
                padding: "8px",
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                zIndex: 1001,
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "260px",
                backgroundColor: "var(--color-bg-cream)",
                zIndex: 1002,
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-primary)",
                  padding: "8px",
                  marginBottom: "20px",
                }}
              >
                <X size={22} />
              </button>
              {navItems.map((item, i) => {
                const isResume = item.href.endsWith(".pdf");
                const linkStyle = {
                  display: "block" as const,
                  padding: "12px 16px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: isActive(item.href) ? 600 : 400,
                  color: isActive(item.href)
                    ? "var(--color-primary)"
                    : "var(--color-text-black)",
                  backgroundColor: isActive(item.href)
                    ? "rgba(0, 0, 255, 0.06)"
                    : "transparent",
                  textDecoration: "none" as const,
                  transition: "all 0.2s ease",
                };
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {isResume ? (
                      <a
                        href={item.href}
                        download
                        onClick={() => setMobileOpen(false)}
                        style={linkStyle}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={linkStyle}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .mobile-nav-toggle {
          display: none;
          width: 100%;
          align-items: center;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const style: React.CSSProperties = {
    padding: "6px 16px",
    borderRadius: "var(--pill-radius)",
    fontSize: "14px",
    fontWeight: 500,
    color: "var(--color-primary)",
    border: active ? "1.5px solid var(--color-primary)" : "1.5px solid transparent",
    textDecoration: "none",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
  };

  // Resume link triggers download
  if (href.endsWith(".pdf")) {
    return (
      <a href={href} download style={style}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} style={style}>
      {label}
    </Link>
  );
}
