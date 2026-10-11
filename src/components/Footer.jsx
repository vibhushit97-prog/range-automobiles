import React from "react";
import { COMPANY } from "../config/company";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  ExternalLink, 
  MessageSquare,
  Lock, 
  FileText 
} from "lucide-react";

export function Footer({ navigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Company Profile with Official Logo */}
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <img 
                src="/images/logo/range-official-logo.jpg" 
                alt="Range Automobiles Logo" 
                style={{ height: "48px", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}
              />
              <div>
                <div className="logo-title" style={{ fontSize: "1.2rem" }}>
                  <span style={{ color: "var(--brand-green)" }}>RANGE</span> <span>AUTOMOBILES</span>
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--brand-green-bright)", letterSpacing: "0.08em" }}>
                  PVT. LTD. • ELECTRIC VEHICLES
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
              Range Automobiles Pvt. Ltd. is an Indian automotive manufacturing enterprise specializing in passenger and cargo electric rickshaws powered by proven CY Gold powertrains.
            </p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
              <span className="badge badge-electric" style={{ fontSize: "0.72rem" }}>Make In India</span>
              <span className="badge badge-subtle" style={{ fontSize: "0.72rem" }}>Zero Emission</span>
              <span className="badge badge-gold" style={{ fontSize: "0.72rem" }}>CY Gold OEM</span>
            </div>
          </div>

          {/* Col 2: Products & Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Vehicle Models</h4>
            <ul className="footer-links">
              <li>
                <a href="#/passenger" onClick={(e) => { e.preventDefault(); navigate("passenger"); }}>
                  Sky Star (Passenger)
                </a>
              </li>
              <li>
                <a href="#/products/sky-star-li" onClick={(e) => { e.preventDefault(); navigate("product-sky-star-li"); }}>
                  Sky Star Li (Fast-Charging Lithium)
                </a>
              </li>
              <li>
                <a href="#/loader" onClick={(e) => { e.preventDefault(); navigate("loader"); }}>
                  Sky Star Ldr (310 kg Cargo Loader)
                </a>
              </li>
              <li>
                <a href="#/spare-parts" onClick={(e) => { e.preventDefault(); navigate("spare-parts"); }}>
                  CY Gold Spare Parts & Accessories
                </a>
              </li>
              <li>
                <a href="#/manufacturing" onClick={(e) => { e.preventDefault(); navigate("manufacturing"); }}>
                  Faridabad Assembly Facility
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Business & Partnership */}
          <div className="footer-col">
            <h4 className="footer-heading">Dealership & Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#/dealership" onClick={(e) => { e.preventDefault(); navigate("dealership"); }}>
                  Become an Authorized Dealer
                </a>
              </li>
              <li>
                <a href="#/about" onClick={(e) => { e.preventDefault(); navigate("about"); }}>
                  About Range Automobiles
                </a>
              </li>
              <li>
                <a href="#/manufacturing" onClick={(e) => { e.preventDefault(); navigate("manufacturing"); }}>
                  Assembly & QA Process
                </a>
              </li>
              <li>
                <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
                  Factory & Office Locations
                </a>
              </li>
              <li>
                <a href="#/admin" onClick={(e) => { e.preventDefault(); navigate("admin"); }}>
                  Internal Lead Desk (Admin)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Customer Care & Confirmed Channels */}
          <div className="footer-col">
            <h4 className="footer-heading">Official Support & Contact</h4>
            
            <div className="footer-contact-item">
              <Phone size={18} color="var(--brand-green)" />
              <div>
                <strong style={{ color: "var(--text-white)", display: "block" }}>Customer Care Calling:</strong>
                <a href={`tel:${COMPANY.contact.phoneRaw}`} style={{ color: "#FFFFFF", fontWeight: 700 }}>
                  {COMPANY.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="footer-contact-item" style={{ marginTop: "4px" }}>
              <MessageSquare size={18} color="#25D366" />
              <div>
                <strong style={{ color: "var(--text-white)", display: "block" }}>Dedicated Business WhatsApp:</strong>
                <a 
                  href={`https://wa.me/${COMPANY.contact.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: "#25D366", fontWeight: 700 }}
                >
                  {COMPANY.contact.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="footer-contact-item" style={{ marginTop: "4px" }}>
              <Mail size={18} color="var(--brand-green)" />
              <div>
                <strong style={{ color: "var(--text-white)", display: "block" }}>Official Email:</strong>
                <a href={`mailto:${COMPANY.contact.email}`} style={{ color: "var(--text-secondary)" }}>
                  {COMPANY.contact.email}
                </a>
              </div>
            </div>

            <div className="footer-contact-item" style={{ marginTop: "6px" }}>
              <MapPin size={18} color="var(--brand-green)" />
              <div>
                <span style={{ color: "var(--text-white)", fontWeight: 600 }}>Factory:</span> Faridabad, Haryana <br />
                <span style={{ color: "var(--text-white)", fontWeight: 600 }}>Office:</span> Kirari Suleman Nagar, New Delhi
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Legal */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Range Automobiles Pvt. Ltd. All rights reserved. Registered Indian EV Manufacturer.
          </div>
          <div className="footer-legal-links">
            <a href="#/privacy-policy" onClick={(e) => { e.preventDefault(); navigate("privacy-policy"); }}>
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#/terms" onClick={(e) => { e.preventDefault(); navigate("terms"); }}>
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
