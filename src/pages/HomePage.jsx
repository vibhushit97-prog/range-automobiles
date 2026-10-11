import React from "react";
import { PRODUCTS } from "../data/products";
import { COMPANY } from "../config/company";
import { ProductCard } from "../components/ProductCard";
import { 
  Zap, 
  BatteryCharging, 
  Gauge, 
  ShieldCheck, 
  Truck, 
  Users, 
  Wrench, 
  MapPin, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink
} from "lucide-react";

export function HomePage({ navigate, onOpenQuoteModal }) {
  const featuredProducts = PRODUCTS;

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Hero Section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span className="badge badge-green">
                  <Zap size={14} /> Electric Vehicle Manufacturer
                </span>
                <span className="badge badge-electric">
                  <ShieldCheck size={14} /> CY Gold Powered
                </span>
              </div>

              <h1 className="hero-title">
                Reliable Electric Mobility for Everyday Business.
              </h1>

              <p className="hero-description">
                Range Automobiles Pvt. Ltd. manufactures and assembles heavy-duty commercial electric rickshaws in India. From our high-capacity Sky Star passenger carriers to the 310 kg Sky Star Ldr cargo loader, our fleet is engineered with reinforced steel chassis, genuine CY Gold powertrains, and dual battery options for maximum daily earning potential.
              </p>

              <div className="hero-actions">
                <button
                  onClick={() => navigate("passenger")}
                  className="btn btn-primary btn-lg"
                >
                  Explore Our Vehicles <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate("dealership")}
                  className="btn btn-secondary btn-lg"
                >
                  Become a Dealer
                </button>
              </div>

              {/* Verified Key Highlights */}
              <div className="hero-specs-row">
                <div className="spec-box">
                  <span className="spec-box-val">110 km</span>
                  <span className="spec-box-label">Listed Driving Range*</span>
                </div>
                <div className="spec-box">
                  <span className="spec-box-val">CY Gold</span>
                  <span className="spec-box-label">Motor & Controller</span>
                </div>
                <div className="spec-box">
                  <span className="spec-box-val">4 - 7 Hrs</span>
                  <span className="spec-box-label">Lithium / Lead Charging</span>
                </div>
              </div>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "4px" }}>
                * Provisional manufacturer listing. Operating range subject to operating conditions and driving style.
              </div>
            </div>

            {/* Hero Real Vehicle Photography Display */}
            <div className="hero-media-wrap">
              <div className="hero-image-frame">
                <img
                  src="/images/vehicles/sky-star-side-full.jpg"
                  alt="Range Automobiles Sky Star passenger electric rickshaw side view with heavy duty stainless steel frame"
                  width="720"
                  height="480"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-badge-overlay">
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--brand-green)", display: "flex", alignItems: "center", justifyContent: "center", color: "#171A18" }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>Range Sky Star</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>Actual Factory Assembly Photograph</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORY CARDS */}
      <section className="section section-dark" aria-label="Vehicle Categories">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Product Categories</span>
            <h2>Commercial Electric Vehicle Lineup</h2>
            <p className="section-subtitle">
              Engineered to serve mass urban transit and heavy last-mile goods distribution with zero tailpipe emissions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {/* Category 1: Passenger */}
            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "20px" }}>
                <img
                  src="/images/vehicles/sky-star-side-cabin.jpg"
                  alt="Passenger E-Rickshaw cabin and seating"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Users size={18} color="var(--brand-green)" />
                <span className="badge badge-green">Passenger Mobility</span>
              </div>
              <h3 style={{ marginBottom: "10px" }}>Passenger E-Rickshaws</h3>
              <p style={{ fontSize: "0.92rem", marginBottom: "20px", flexGrow: 1 }}>
                Designed for high passenger comfort, wide legroom, durable weather curtains, and maximum daily route stability. Available in Sky Star and Sky Star Li editions.
              </p>
              <button
                onClick={() => navigate("passenger")}
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                View Passenger Models <ChevronRight size={16} />
              </button>
            </div>

            {/* Category 2: Loader */}
            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "20px" }}>
                <img
                  src="/images/loader/sky-star-ldr-profile.jpg"
                  alt="Range Sky Star Ldr commercial cargo loader electric rickshaw side profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Truck size={18} color="var(--brand-green)" />
                <span className="badge badge-electric">Commercial Cargo</span>
              </div>
              <h3 style={{ marginBottom: "10px" }}>Loader E-Rickshaws</h3>
              <p style={{ fontSize: "0.92rem", marginBottom: "20px", flexGrow: 1 }}>
                Built with a reinforced steel cargo bed, diamond-plate floor, mounted spare wheel, and 310 kg listed payload capacity for reliable last-mile deliveries and industrial transport.
              </p>
              <button
                onClick={() => navigate("loader")}
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                View Loader Models <ChevronRight size={16} />
              </button>
            </div>

            {/* Category 3: Spare Parts */}
            <div className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "20px" }}>
                <img
                  src="/images/vehicles/sky-star-rear-view.jpg"
                  alt="Spare parts and rear wheel assembly of Range E-Rickshaw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Wrench size={18} color="var(--brand-gold)" />
                <span className="badge badge-gold">OEM Components</span>
              </div>
              <h3 style={{ marginBottom: "10px" }}>Spare Parts & Assemblies</h3>
              <p style={{ fontSize: "0.92rem", marginBottom: "20px", flexGrow: 1 }}>
                Genuine CY Gold motors, controllers, 25A chargers, shock absorbers, and chassis parts available for authorized regional dealers and maintenance workshops.
              </p>
              <button
                onClick={() => navigate("spare-parts")}
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                Browse Genuine Spares <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED MODELS SECTION */}
      <section className="section" aria-label="Featured Models">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-green">Featured Vehicle Models</span>
            <h2>Range Automobiles Core Production Models</h2>
            <p className="section-subtitle">
              Configured with verified CY Gold powertrains and tailored battery options.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                navigate={navigate}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPANY INTRODUCTION & MANUFACTURING OVERVIEW */}
      <section className="section section-dark" aria-label="About Manufacturing">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: "center" }}>
            <div>
              <span className="badge badge-electric" style={{ marginBottom: "16px" }}>
                Manufacturing & Assembly Operations
              </span>
              <h2 style={{ marginBottom: "20px" }}>
                Indian Engineering, Committed to Quality Assembly
              </h2>
              <p style={{ marginBottom: "16px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                <strong>Range Automobiles Pvt. Ltd.</strong> operates dedicated assembly facilities in Faridabad, Haryana, supported by administrative management from New Delhi. Our operations combine precision metal fabrication, robotic-assisted welding jigs, and systematic electrical loom testing.
              </p>
              <p style={{ marginBottom: "24px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Every vehicle is built on a heavy-gauge steel chassis, fitted with stainless steel passenger/cargo superstructures, and paired with genuine CY Gold electric motors and matched controllers to ensure steady torque on uphill road segments and heavily loaded daily routes.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>
                <div style={{ background: "var(--bg-card)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ color: "var(--brand-green-bright)", fontWeight: 700, fontSize: "1.1rem" }}>Faridabad Facility</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>Assembly line, chassis alignment & final dispatch unit.</div>
                </div>
                <div style={{ background: "var(--bg-card)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ color: "var(--brand-green)", fontWeight: 700, fontSize: "1.1rem" }}>New Delhi Office</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>Corporate administration, sales & dealer coordination.</div>
                </div>
              </div>

              <button
                onClick={() => navigate("manufacturing")}
                className="btn btn-secondary"
              >
                Learn More About Our Assembly Process <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <div className="hero-image-frame">
                <img
                  src="/images/vehicles/sky-star-fleet-lineup.jpg"
                  alt="Range Automobiles factory floor showing lineup of assembled passenger e-rickshaws"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED PRODUCT HIGHLIGHTS & TECHNICAL BENCHMARKS */}
      <section className="section" aria-label="Verified Features">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">Verified Engineering Benchmarks</span>
            <h2>Why Fleet Operators & Drivers Trust Range</h2>
            <p className="section-subtitle">
              Built specifically around the operational realities of Indian road infrastructure and transit requirements.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3 className="feature-title">Stainless Steel Superstructure</h3>
              <p className="feature-desc">
                High-grade stainless steel passenger cabin framing resistant to rust and monsoon waterlogging, ensuring long resale value.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Zap size={26} />
              </div>
              <h3 className="feature-title">CY Gold High-Torque Powertrain</h3>
              <p className="feature-desc">
                Integrated CY Gold motor and smart controller calibrated for smooth low-end pickup and low motor heat dissipation under continuous operation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <BatteryCharging size={26} />
              </div>
              <h3 className="feature-title">Dual Battery Configuration</h3>
              <p className="feature-desc">
                Choose between economical Lead-Acid configurations (approx. 7 hours charging) or rapid Lithium battery variants (approx. 4 hours charging).
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Gauge size={26} />
              </div>
              <h3 className="feature-title">Controlled 25 km/h Commercial Speed</h3>
              <p className="feature-desc">
                Factory governed to 25 km/h in accordance with Indian commercial three-wheeler regulations for optimal passenger safety and battery conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEALERSHIP & DISTRIBUTOR ACQUISITION BANNER */}
      <section className="section" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }} aria-label="Dealership Network">
        <div className="container">
          <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <span className="badge badge-electric">Pan-India Dealer Expansion</span>
            <h2>Partner With Range Automobiles as an Authorized Distributor</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              We are actively appointing authorized sales, service, and spare parts (3S) dealers across North and Central India. Secure exclusive territory rights, genuine OEM parts support, and competitive manufacturer supply pricing.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "8px" }}>
              <button
                onClick={() => navigate("dealership")}
                className="btn btn-primary btn-lg"
              >
                Apply for Dealership / Distributorship <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("contact")}
                className="btn btn-secondary btn-lg"
              >
                Contact Factory Sales Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONFIRMED FACTORY & OFFICE LOCATIONS */}
      <section className="section section-dark" aria-label="Locations">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Manufacturing & Corporate Presence</span>
            <h2>Our Operational Facilities</h2>
            <p className="section-subtitle">
              We welcome prospective dealers, fleet buyers, and distributors to visit our verified facilities.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ padding: "10px", background: "var(--brand-green-subtle)", borderRadius: "8px", color: "var(--brand-green)" }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem" }}>Manufacturing & Assembly Facility</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Faridabad, Haryana</div>
                </div>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                <strong>Address:</strong> Range Automobiles Pvt. Ltd., Faridabad, Haryana, India.
              </p>
              <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                Primary location for vehicle assembly, chassis fabrication, electrical harness fitment, and factory road testing.
              </p>
              <a
                href={COMPANY.factory.mapsSearchQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ width: "100%" }}
              >
                Directions to Factory <ExternalLink size={14} />
              </a>
            </div>

            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ padding: "10px", background: "rgba(16, 185, 129, 0.15)", borderRadius: "8px", color: "var(--brand-electric)" }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem" }}>Corporate & Sales Office</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>New Delhi</div>
                </div>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                <strong>Address:</strong> 1st Floor, Shani Bajar, Kirari Suleman Nagar, Inder Enclave, New Delhi – 110086, India.
              </p>
              <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                Administrative head office managing dealer onboarding, corporate procurement, financial documentation, and retail inquiries.
              </p>
              <a
                href={COMPANY.office.mapsSearchQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ width: "100%" }}
              >
                Directions to Delhi Office <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
