import React from "react";
import { COMPANY } from "../config/company";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Users, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

export function AboutPage({ navigate }) {
  return (
    <div className="about-page">
      {/* Banner */}
      <section className="section" style={{ padding: "48px 0 32px", background: "radial-gradient(circle at 80% 20%, rgba(118, 196, 66, 0.12) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>About Range Automobiles</span>
          </div>

          <div style={{ maxWidth: "820px" }}>
            <span className="badge badge-green" style={{ marginBottom: "12px" }}>
              <Building2 size={14} /> Corporate Profile
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              About Range Automobiles Pvt. Ltd.
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              An Indian enterprise dedicated to manufacturing and assembling dependable electric rickshaws engineered to endure rigorous road conditions and generate sustainable driver livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Narrative */}
      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: "center", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2>Empowering Everyday Commercial Transport</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Range Automobiles Pvt. Ltd. was incorporated to address the urgent need for robust, low-maintenance commercial electric vehicles in India. With primary assembly facilities based in Faridabad, Haryana and corporate offices in New Delhi, we bring together rigorous structural fabrication and verified electric powertrains.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Rather than relying on unverified claims, we focus on what matters most to vehicle operators: a heavy-duty stainless steel frame that doesn't deteriorate under continuous use, balanced chassis weight distribution, and genuine CY Gold motors calibrated for real-world operating loads.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "10px" }}>
                <button
                  onClick={() => navigate("manufacturing")}
                  className="btn btn-primary"
                >
                  Inspect Our Manufacturing Workflow <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate("dealership")}
                  className="btn btn-secondary"
                >
                  Join Our Dealership Network
                </button>
              </div>
            </div>

            <div>
              <div className="hero-image-frame" style={{ marginBottom: "16px" }}>
                <img
                  src="/images/logo/range-official-logo.jpg"
                  alt="Official Range Automobiles 3D Emblem and Brand Identity"
                  loading="lazy"
                />
              </div>
              <div style={{ textAlign: "center", fontSize: "0.84rem", color: "var(--brand-green)", fontWeight: 600 }}>
                Official Range Automobiles Emblem: Electric Mobility with Zero Emissions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Principles */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-electric">Core Manufacturing Principles</span>
            <h2>Our Operational Commitments</h2>
            <p className="section-subtitle">
              Building sustainable credibility through transparent engineering and dependable dealer support.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            <div className="card">
              <ShieldCheck size={28} color="var(--brand-green)" style={{ marginBottom: "14px" }} />
              <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>1. Structural Integrity</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Every chassis and body superstructure uses heavy-gauge tubular steel and stainless steel passenger framing capable of absorbing daily impact and potholes without structural fatigue.
              </p>
            </div>

            <div className="card">
              <Target size={28} color="var(--brand-electric)" style={{ marginBottom: "14px" }} />
              <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>2. Powertrain Reliability</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                By standardizing on proven CY Gold traction motors and controllers, we deliver predictable power curves, minimal electrical breakdowns, and universal spare parts compatibility.
              </p>
            </div>

            <div className="card">
              <Users size={28} color="var(--brand-gold)" style={{ marginBottom: "14px" }} />
              <h3 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>3. Dealer-First Growth</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Our growth strategy prioritizes sustainable, long-term distributor profitability through territorial protection, transparent dealer supply prices, and reliable dispatch from Faridabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Locations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Locations & Verification</span>
            <h2>Factory & Corporate Headquarters</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <MapPin size={22} color="var(--brand-green)" />
                <h3 style={{ fontSize: "1.2rem" }}>Manufacturing Facility</h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "8px" }}>
                <strong>{COMPANY.factory.fullAddress}</strong>
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", marginBottom: "16px" }}>
                Dedicated production bays for mechanical assembly, suspension fitment, electrical harness installation, and factory road testing.
              </p>
              <a
                href={COMPANY.factory.mapsSearchQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Open Google Maps <ExternalLink size={12} />
              </a>
            </div>

            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <MapPin size={22} color="var(--brand-electric)" />
                <h3 style={{ fontSize: "1.2rem" }}>Corporate Office</h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "8px" }}>
                <strong>{COMPANY.office.fullAddress}</strong>
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", marginBottom: "16px" }}>
                Executive management, sales operations, dealership agreement processing, and customer support coordination.
              </p>
              <a
                href={COMPANY.office.mapsSearchQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Open Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
