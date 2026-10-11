import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import { COMPANY } from "../config/company";
import { 
  Truck, 
  ShieldCheck, 
  Zap, 
  Weight, 
  BatteryCharging, 
  Gauge, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  PackageCheck,
  MessageSquare,
  Phone
} from "lucide-react";

export function LoaderPage({ navigate, onOpenQuoteModal }) {
  const loaderProduct = PRODUCTS.find((p) => p.id === "sky-star-ldr");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const loaderGallery = [
    {
      url: "/images/loader/sky-star-ldr-profile.jpg",
      title: "Full Side Profile",
      caption: "Range Sky Star Ldr with high-gauge steel drop gates and driver rain canopy"
    },
    {
      url: "/images/loader/sky-star-ldr-side-angle.jpg",
      title: "Three-Quarter Cargo Bed",
      caption: "Rear perspective highlighting diamond-plate floor, cabin-mounted spare wheel, and embossed Range branding"
    },
    {
      url: "/images/loader/sky-star-ldr-rear-bed.jpg",
      title: "Rear Cargo Gate & Lights",
      caption: "Heavy-duty lockable tailgate with commercial taillight clusters and EV green plate holder"
    },
    {
      url: "/images/vehicles/sky-star-front-duo.jpg",
      title: "Front Suspension & Chassis",
      caption: "Reinforced front shock absorbers and steering column designed for heavy payloads"
    }
  ];

  const getDirectWhatsAppUrl = () => {
    const cleanNumber = COMPANY.contact.whatsappNumber;
    const msg = `Hello Range Automobiles, I want to inquire about purchasing the Sky Star Ldr (310 kg Cargo Loader). Please share fleet pricing and dispatch details.`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="loader-page">
      {/* Banner */}
      <section className="section" style={{ padding: "48px 0 32px", background: "radial-gradient(circle at 80% 20%, rgba(122, 193, 66, 0.15) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>Loader E-Rickshaws</span>
          </div>

          <div style={{ maxWidth: "840px" }}>
            <span className="badge badge-electric" style={{ marginBottom: "12px" }}>
              <Truck size={14} /> Commercial Cargo Logistics
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              Sky Star Ldr: Commercial Cargo Electric Loader
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Purpose-built for demanding last-mile delivery, industrial parcel transit, wholesale marketplace logistics, and agricultural haulage with a listed 310 kg payload rating.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature Showcase with Actual Photos */}
      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: "flex-start", gap: "48px" }}>
            {/* Interactive Photo Showcase */}
            <div>
              <div className="hero-image-frame" style={{ marginBottom: "16px" }}>
                <img
                  src={loaderGallery[selectedPhotoIndex].url}
                  alt={loaderGallery[selectedPhotoIndex].title}
                  style={{ height: "460px", width: "100%", objectFit: "cover" }}
                  loading="eager"
                />
              </div>

              {/* Thumbnails */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                {loaderGallery.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    style={{
                      height: "75px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: selectedPhotoIndex === idx ? "2px solid var(--brand-green)" : "1px solid var(--border-subtle)",
                      padding: 0,
                      background: "#080B12",
                      cursor: "pointer",
                      opacity: selectedPhotoIndex === idx ? 1 : 0.65,
                      transition: "all 0.2s"
                    }}
                    aria-label={`View ${photo.title}`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </button>
                ))}
              </div>

              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "12px", background: "rgba(0,0,0,0.3)", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                <strong style={{ color: "var(--brand-green)" }}>{loaderGallery[selectedPhotoIndex].title}:</strong> {loaderGallery[selectedPhotoIndex].caption}
              </div>
            </div>

            {/* Specifications & Ordering */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span className="badge badge-electric">Commercial Loader</span>
                <span className="badge badge-gold">CY Gold Powertrain</span>
                <span className="badge badge-subtle">310 kg Rated Payload</span>
              </div>

              <h2>High-Payload Urban Freight Carrier</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                The Sky Star Ldr transforms urban commercial logistics. By replacing expensive diesel and petrol cargo three-wheelers with a dedicated CY Gold electric powertrain, delivery businesses cut fuel running expenses by up to 80% while retaining high carrying capacity and robust steel body construction.
              </p>

              {/* Verified Spec Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
                <div style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Listed Payload Capacity</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--brand-green)" }}>310 kg</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Heavy load-bearing steel chassis</div>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Powertrain System</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--brand-gold)" }}>CY Gold</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Calibrated motor & controller</div>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Listed Range</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-white)" }}>110 km</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Per single full charge*</div>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Charging Cycle</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-white)" }}>4 / 7 Hrs</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Lithium / Lead-acid with 25A charger</div>
                </div>
              </div>

              {/* Direct Official Contact Actions */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                <button
                  onClick={() => onOpenQuoteModal("sky-star-ldr")}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Request Commercial Fleet Quote
                </button>
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, justifyContent: "center" }}
                >
                  <MessageSquare size={16} color="#25D366" /> WhatsApp Sales
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", background: "rgba(122, 193, 66, 0.1)", borderRadius: "8px", border: "1px solid rgba(122, 193, 66, 0.3)" }}>
                <Phone size={18} color="var(--brand-green)" />
                <div style={{ fontSize: "0.85rem" }}>
                  Official Sales Desk: <strong>{COMPANY.contact.phoneDisplay}</strong> | <strong>{COMPANY.contact.email}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Applications Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Target Commercial Applications</span>
            <h2>Where Does Sky Star Ldr Excel?</h2>
            <p className="section-subtitle">
              Engineered specifically for short and mid-radius delivery environments in Indian metro and Tier-2 clusters.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card">
              <PackageCheck size={28} color="var(--brand-green)" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>E-Commerce & Courier Hubs</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Ideal for hub-to-spoke parcels transit across crowded inner-city lanes where larger commercial trucks face parking and entry restrictions.
              </p>
            </div>

            <div className="card">
              <Truck size={28} color="var(--brand-green)" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Wholesale FMCG & Mandi Goods</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Transports agricultural sacks, packaged goods, vegetables, and beverage crates with 310 kg capacity and heavy leaf springs.
              </p>
            </div>

            <div className="card">
              <ShieldCheck size={28} color="var(--brand-gold)" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Hardware & Building Supplies</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Rigid steel cargo container floor allows moving paint containers, sanitary ware, electrical supplies, and retail construction materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
