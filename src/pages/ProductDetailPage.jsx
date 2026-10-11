import React, { useState } from "react";
import { getProductById, PRODUCTS } from "../data/products";
import { COMPANY } from "../config/company";
import { 
  Zap, 
  BatteryCharging, 
  Gauge, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  PhoneCall
} from "lucide-react";

export function ProductDetailPage({ 
  productId, 
  navigate, 
  onOpenQuoteModal, 
  onOpenBrochureModal 
}) {
  const product = getProductById(productId) || PRODUCTS[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id);

  const currentImage = product.gallery && product.gallery[activeImageIndex] 
    ? product.gallery[activeImageIndex] 
    : { url: product.heroImage, caption: product.name };

  const getDirectWhatsAppUrl = () => {
    const rawNumber = COMPANY.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const text = `Hello Range Automobiles, I am requesting quotation and technical information for the ${product.name} (${product.category}).`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb Header */}
      <section className="section" style={{ padding: "40px 0 24px" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <a 
              href={`#/${product.categoryType}`} 
              onClick={(e) => { e.preventDefault(); navigate(product.categoryType); }}
            >
              {product.category}
            </a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>{product.name}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                <span className="badge badge-green">{product.badge}</span>
                <span className="badge badge-subtle">{product.category}</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>{product.name}</h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginTop: "4px" }}>
                {product.subtitle}
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => onOpenQuoteModal(product.id)}
                className="btn btn-primary"
              >
                Request a Quote
              </button>
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> Contact Sales via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase: Gallery & Key Highlights */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: "flex-start", gap: "40px" }}>
            {/* Gallery Column */}
            <div>
              <div className="passenger-image-container" style={{ height: "420px", marginBottom: "16px" }}>
                <img
                  src={currentImage.url}
                  alt={currentImage.caption || `${product.name} vehicle photograph`}
                  style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }}
                />
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "8px" }}>
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        width: "80px",
                        height: "60px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: activeImageIndex === idx ? "2px solid var(--brand-green)" : "1px solid var(--border-subtle)",
                        padding: 0,
                        background: "none",
                        cursor: "pointer",
                        opacity: activeImageIndex === idx ? 1 : 0.6,
                        transition: "all 0.2s"
                      }}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <img
                        src={img.url}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              )}

              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "10px", fontStyle: "italic" }}>
                * Genuine vehicle photograph taken at Range Automobiles manufacturing facility.
              </p>
            </div>

            {/* Overview & Quick Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="card">
                <h3 style={{ fontSize: "1.25rem", marginBottom: "12px" }}>Overview</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  {product.overview}
                </p>

                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {product.keyPoints.map((pt, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem" }}>
                      <CheckCircle2 size={18} color="var(--brand-electric)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "var(--text-primary)" }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Traction Motor</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-gold)" }}>CY Gold</div>
                </div>
                <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Controller</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-gold)" }}>CY Gold</div>
                </div>
                <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Governed Speed</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-white)" }}>25 km/h*</div>
                </div>
                <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Listed Driving Range</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-white)" }}>110 km / chg*</div>
                </div>
              </div>

              {/* Brochure and Dealership CTAs */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={() => onOpenBrochureModal(product.name)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <Download size={16} /> Technical Brochure
                </button>
                <button
                  onClick={() => navigate("dealership")}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  Dealership Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Model Specifications</span>
            <h2>{product.name} Technical Specifications</h2>
            <p className="section-subtitle">
              Configured per manufacturer specifications. Attributes are strictly verified or clearly identified as provisional.
            </p>
          </div>

          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <table className="spec-table" aria-label={`${product.name} Technical Specifications Table`}>
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>Technical Parameter</th>
                  <th style={{ width: "60%" }}>Factory Specification / Configuration</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong>{spec.label}</strong>
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                        <span>{spec.value}</span>
                        {spec.provisional && (
                          <span className="badge badge-provisional">Provisional</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: "16px", padding: "14px", background: "rgba(0,0,0,0.25)", borderRadius: "8px", border: "1px solid var(--border-subtle)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              <strong style={{ color: "#FCD34D" }}>Manufacturer Notice:</strong> The specifications listed above are user-provided and provisional until confirmed for each production batch. Dimensions, exact motor wattage, and certification certificates are subject to official confirmation and will be published upon regulatory filing.
            </div>
          </div>
        </div>
      </section>

      {/* Battery and Charging Section */}
      {product.batteryOptions && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="badge badge-electric">Energy Storage Compatibility</span>
              <h2>Battery Options & Charging Dynamics</h2>
              <p className="section-subtitle">
                Available power storage architectures for {product.name}.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", maxWidth: "900px", margin: "0 auto" }}>
              {product.batteryOptions.map((opt, i) => (
                <div key={i} className="card">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <BatteryCharging size={22} color="var(--brand-electric)" />
                    <h3 style={{ fontSize: "1.2rem" }}>{opt.type}</h3>
                  </div>

                  <table className="spec-table" style={{ marginBottom: "16px" }}>
                    <tbody>
                      <tr>
                        <td>Charging Duration</td>
                        <td><strong>{opt.chargingTime}</strong></td>
                      </tr>
                      <tr>
                        <td>Included Charger</td>
                        <td><strong>{opt.charger}</strong></td>
                      </tr>
                      <tr>
                        <td>Listed Range</td>
                        <td><strong>{opt.range}</strong></td>
                      </tr>
                    </tbody>
                  </table>

                  <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                    {opt.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Alternative Models</span>
            <h2>Explore Related Vehicles</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: "180px", borderRadius: "8px", overflow: "hidden", marginBottom: "14px" }}>
                  <img
                    src={rel.heroImage}
                    alt={rel.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span className="badge badge-subtle">{rel.category}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--brand-gold)" }}>CY Gold</span>
                </div>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>{rel.name}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "16px", flexGrow: 1 }}>
                  {rel.overview}
                </p>
                <button
                  onClick={() => navigate(`product-${rel.id}`)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: "100%" }}
                >
                  View {rel.name} Specs <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
