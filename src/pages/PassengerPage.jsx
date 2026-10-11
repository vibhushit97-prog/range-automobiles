import React from "react";
import { getPassengerProducts } from "../data/products";
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  BatteryCharging, 
  Gauge, 
  CheckCircle2, 
  ChevronRight, 
  Clock 
} from "lucide-react";

export function PassengerPage({ navigate, onOpenQuoteModal }) {
  const passengerProducts = getPassengerProducts();

  return (
    <div className="passenger-page">
      {/* Banner */}
      <section className="section" style={{ padding: "48px 0 32px", background: "radial-gradient(circle at 80% 20%, rgba(118, 196, 66, 0.12) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>Passenger E-Rickshaws</span>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <span className="badge badge-electric" style={{ marginBottom: "12px" }}>
              <Users size={14} /> Passenger Mobility Series
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              Range Passenger Electric Rickshaws
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Built for maximum passenger safety, high driver earnings, and superior ride stability on crowded city avenues. Featuring reinforced stainless steel superstructures and factory-matched CY Gold powertrains.
            </p>
          </div>
        </div>
      </section>

      {/* Product List (Balanced Two-Column Layout: Image on Left, Details on Right) */}
      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {passengerProducts.map((product) => (
              <div 
                key={product.id} 
                className="passenger-showcase-card"
              >
                {/* Left Column: Complete Uncropped Vehicle Photography */}
                <div className="passenger-image-container">
                  <img
                    src={product.heroImage}
                    alt={`${product.name} Passenger E-Rickshaw`}
                    loading="lazy"
                  />
                </div>

                {/* Right Column: Model Details, Verified Specs & Aligned Actions */}
                <div className="passenger-details-col">
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span className="badge badge-green">{product.badge}</span>
                    <span className="badge badge-subtle">{product.category}</span>
                  </div>

                  <h2 style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.1rem)", margin: "4px 0" }}>{product.name}</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {product.overview}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "4px 0" }}>
                    {product.keyPoints.slice(0, 3).map((pt, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                        <CheckCircle2 size={16} color="var(--brand-green)" style={{ flexShrink: 0 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Grid */}
                  <div className="passenger-specs-strip">
                    <div className="passenger-spec-item">
                      <span className="passenger-spec-label">Powertrain</span>
                      <span className="passenger-spec-val">CY Gold</span>
                    </div>
                    <div className="passenger-spec-item">
                      <span className="passenger-spec-label">Speed Governed</span>
                      <span className="passenger-spec-val">25 km/h*</span>
                    </div>
                    <div className="passenger-spec-item">
                      <span className="passenger-spec-label">Listed Range</span>
                      <span className="passenger-spec-val">110 km*</span>
                    </div>
                  </div>

                  {/* Aligned Actions */}
                  <div className="passenger-card-actions">
                    <button
                      onClick={() => navigate(`product-${product.id}`)}
                      className="btn btn-secondary"
                    >
                      Detailed Specifications <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(product.id)}
                      className="btn btn-primary"
                    >
                      Request Quotation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Technology Comparison Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-electric">Energy Storage Options</span>
            <h2>Lead-Acid vs. Lithium Battery Options</h2>
            <p className="section-subtitle">
              Range Automobiles supports dual battery configurations depending on fleet investment budget and turnaround requirements.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <BatteryCharging size={24} color="#F59E0B" />
                <h3 style={{ fontSize: "1.3rem" }}>Lead-Acid Configuration</h3>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                Economical initial capital expenditure with widely accessible serviceability across every tier-2 and tier-3 city in India.
              </p>
              <table className="spec-table" style={{ marginBottom: "20px" }}>
                <tbody>
                  <tr>
                    <td>Charging Time</td>
                    <td><strong>Approx. 7 Hours</strong> (Overnight cycle)</td>
                  </tr>
                  <tr>
                    <td>Supplied Charger</td>
                    <td><strong>25 Amp Smart Charger</strong></td>
                  </tr>
                  <tr>
                    <td>Listed Range</td>
                    <td><strong>110 km per charge*</strong></td>
                  </tr>
                  <tr>
                    <td>Applicable Models</td>
                    <td>Sky Star, Sky Star Ldr (Subject to confirmation)</td>
                  </tr>
                </tbody>
              </table>
              <span className="badge badge-gold">Cost-Effective Initial Setup</span>
            </div>

            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Zap size={24} color="var(--brand-electric)" />
                <h3 style={{ fontSize: "1.3rem" }}>Lithium Battery Configuration</h3>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
                Rapid turnaround charging for high-intensity commercial passenger rounds, significantly reduced overall vehicle weight, and maintenance-free operation.
              </p>
              <table className="spec-table" style={{ marginBottom: "20px" }}>
                <tbody>
                  <tr>
                    <td>Charging Time</td>
                    <td><strong>Approx. 4 Hours</strong> (Fast turnaround)</td>
                  </tr>
                  <tr>
                    <td>Supplied Charger</td>
                    <td><strong>25 Amp Smart Charger</strong></td>
                  </tr>
                  <tr>
                    <td>Listed Range</td>
                    <td><strong>110 km per charge*</strong></td>
                  </tr>
                  <tr>
                    <td>Applicable Models</td>
                    <td>Sky Star Li, Sky Star, Sky Star Ldr</td>
                  </tr>
                </tbody>
              </table>
              <span className="badge badge-electric">Rapid Charging • High Daily Rounds</span>
            </div>
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "16px", textAlign: "center" }}>
            * Listed range and charging times are provisional manufacturer indicators subject to ambient temperature, road gradient, payload, and driving conditions.
          </div>
        </div>
      </section>
    </div>
  );
}
