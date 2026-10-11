import React, { useState } from "react";
import { COMPANY } from "../config/company";
import { 
  Menu, 
  X, 
  Phone, 
  Mail,
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  MapPin
} from "lucide-react";

export function Header({ currentRoute, navigate, onOpenQuoteModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Balanced navigation items with responsive labels for zero horizontal overflow
  const navItems = [
    { label: "Home", shortLabel: "Home", route: "home" },
    { label: "Passenger E-Rickshaws", shortLabel: "Passenger", route: "passenger" },
    { label: "Loader E-Rickshaws", shortLabel: "Loaders", route: "loader" },
    { label: "Spare Parts", shortLabel: "Spare Parts", route: "spare-parts" },
    { label: "About Us", shortLabel: "About", route: "about" },
    { label: "Manufacturing", shortLabel: "Manufacturing", route: "manufacturing" },
    { label: "Dealership", shortLabel: "Dealership", route: "dealership" },
    { label: "Contact", shortLabel: "Contact", route: "contact" }
  ];

  const handleNavClick = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. Slim Top Information Bar */}
      <div className="top-notice-banner">
        <div className="container top-notice-inner">
          <div className="top-notice-left">
            <span className="badge badge-electric">
              <ShieldCheck size={12} /> {COMPANY.name}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <MapPin size={12} color="var(--brand-green)" /> Plant: {COMPANY.factory.area}, {COMPANY.factory.state}
            </span>
          </div>

          <div className="top-notice-right">
            <a 
              href={`tel:${COMPANY.contact.phoneRaw}`} 
              className="top-notice-link"
              title="Call Customer Care"
            >
              <Phone size={12} color="var(--brand-green)" /> {COMPANY.contact.phoneDisplay}
            </a>
            <a 
              href={`https://wa.me/${COMPANY.contact.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-notice-link accent"
              title="Connect on WhatsApp"
            >
              <MessageSquare size={12} /> WhatsApp
            </a>
            <a 
              href={`mailto:${COMPANY.contact.email}`} 
              className="top-notice-link"
              title="Official Email"
            >
              <Mail size={12} /> {COMPANY.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="header" role="banner">
        <div className="header-inner">
          {/* Logo on Left */}
          <a 
            href="#/" 
            onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} 
            className="brand-logo"
            aria-label="Range Automobiles Pvt. Ltd. Homepage"
          >
            <img 
              src="/images/logo/range-official-logo-cropped.png" 
              alt="Range Automobiles Official Logo" 
              className="brand-logo-img"
              width="140"
              height="44"
            />
            <div className="logo-text-col">
              <div className="logo-title">
                <span>RANGE</span> AUTOMOBILES
              </div>
              <div className="logo-subtitle">
                PVT. LTD. • ELECTRIC VEHICLES
              </div>
            </div>
          </a>

          {/* Navigation in Centre (Single row, concise labels) */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route || 
                (item.route === "passenger" && currentRoute === "product-sky-star") ||
                (item.route === "passenger" && currentRoute === "product-sky-star-li") ||
                (item.route === "loader" && currentRoute === "product-sky-star-ldr");
              return (
                <a
                  key={item.route}
                  href={`#/${item.route}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.route); }}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-label-full">{item.label}</span>
                  <span className="nav-label-compact">{item.shortLabel}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons on Right (Balanced, un-crowded, zero-overflow) */}
          <div className="nav-actions">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm"
              aria-label="Request vehicle quotation"
            >
              <span className="quote-text-full">Request Quote</span>
              <span className="quote-text-short">Quote</span>
            </button>
            <button
              onClick={() => handleNavClick("dealership")}
              className="btn btn-secondary btn-sm desktop-only-btn"
              aria-label="Become an authorized dealer"
            >
              Become a Dealer
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Accessible, unified dark-grey & green theme) */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(23, 26, 24, 0.98)",
            zIndex: 999,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            overflowY: "auto",
            backdropFilter: "blur(16px)"
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img 
                src="/images/logo/range-official-logo-cropped.png" 
                alt="Range Automobiles Logo" 
                style={{ height: "34px", width: "auto" }}
              />
              <div className="logo-title" style={{ fontSize: "1.05rem" }}>
                <span>RANGE</span> AUTOMOBILES
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ background: "transparent", border: "1px solid var(--border-subtle)", color: "#F4F7F3", cursor: "pointer", padding: "6px", borderRadius: "6px" }}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
            {navItems.map((item) => {
              const isActive = currentRoute === item.route || 
                (item.route === "passenger" && currentRoute === "product-sky-star") ||
                (item.route === "passenger" && currentRoute === "product-sky-star-li") ||
                (item.route === "loader" && currentRoute === "product-sky-star-ldr");
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  style={{
                    background: isActive ? "var(--bg-surface)" : "transparent",
                    border: "none",
                    borderLeft: isActive ? "3px solid var(--brand-green)" : "3px solid transparent",
                    color: isActive ? "var(--brand-green-bright)" : "var(--text-white)",
                    fontSize: "0.98rem",
                    textAlign: "left",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    transition: "all var(--transition-fast)"
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} color={isActive ? "var(--brand-green)" : "var(--text-muted)"} />
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onOpenQuoteModal(); }} 
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Request a Vehicle Quote
            </button>
            <button
              onClick={() => handleNavClick("dealership")}
              className="btn btn-secondary"
              style={{ width: "100%" }}
            >
              Become an Authorized Dealer
            </button>
            <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
              <a 
                href={`tel:${COMPANY.contact.phoneRaw}`}
                className="btn btn-outline btn-sm"
                style={{ flex: 1, fontSize: "0.8rem", gap: "6px" }}
              >
                <Phone size={13} color="var(--brand-green)" /> Call Us
              </a>
              <a 
                href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ flex: 1, fontSize: "0.8rem", gap: "6px" }}
              >
                <MessageSquare size={13} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
