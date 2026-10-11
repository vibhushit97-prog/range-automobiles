import React from "react";
import { COMPANY } from "../config/company";
import { 
  Wrench, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Layers, 
  Sparkles,
  Zap
} from "lucide-react";

export function ManufacturingPage({ navigate, onOpenQuoteModal }) {
  const workflowSteps = [
    {
      num: "01",
      title: "Chassis Fabrication & Frame Jig Alignment",
      desc: "Tubular steel chassis are aligned and MIG-welded on precision jigs to prevent chassis twist and guarantee straight-line wheel tracking under heavy load."
    },
    {
      num: "02",
      title: "Stainless Steel Superstructure Mounting",
      desc: "Passenger safety cages and cargo bodies are built with corrosion-resistant stainless steel framework, roof luggage racks, and grab handles."
    },
    {
      num: "03",
      title: "CY Gold Powertrain Integration",
      desc: "Installation of the high-torque CY Gold traction motor, matched intelligent controller, heavy-duty differential rear axle, and flame-retardant wiring harnesses."
    },
    {
      num: "04",
      title: "Suspension & Braking Fitment",
      desc: "Fitment of reinforced telescopic dual front hydraulic shock absorbers, heavy-duty rear multi-leaf springs, and drum brake linkage adjustments."
    },
    {
      num: "05",
      title: "Quality Assurance & Static Electrical Check",
      desc: "Complete electrical testing including controller throttle voltage curve check, 25A charger cutoff test, reverse horn check, and LED lighting verification."
    },
    {
      num: "06",
      title: "Final Assembly Inspection & Dispatch",
      desc: "Toughened windshield glass fitment, electric wiper inspection, protective seat wrapping, and dispatch clearance from the Faridabad unit."
    }
  ];

  const galleryImages = [
    {
      url: "/images/vehicles/sky-star-fleet-lineup.jpg",
      title: "Production Lineup Bay",
      subtitle: "Assembled passenger e-rickshaws awaiting final quality checks in Faridabad"
    },
    {
      url: "/images/vehicles/sky-star-side-full.jpg",
      title: "Full Body Assembly",
      subtitle: "Finished Sky Star unit showing stainless steel cage structure and roof carrier"
    },
    {
      url: "/images/vehicles/sky-star-front-duo.jpg",
      title: "Suspension Calibration",
      subtitle: "Front telescopic shock absorber and hydraulic steering fork alignment"
    },
    {
      url: "/images/vehicles/sky-star-side-cabin.jpg",
      title: "Passenger Cabin Fitment",
      subtitle: "Comfortable cushioned seating with protective plastic wrapping and side rails"
    },
    {
      url: "/images/vehicles/sky-star-rear-view.jpg",
      title: "Tailgate & Emblem Finishing",
      subtitle: "Spare wheel mounting, Make in India badge, and high-visibility rear reflectors"
    }
  ];

  return (
    <div className="manufacturing-page">
      {/* Banner */}
      <section className="section" style={{ padding: "48px 0 32px", background: "radial-gradient(circle at 80% 20%, rgba(118, 196, 66, 0.12) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>Manufacturing & Assembly</span>
          </div>

          <div style={{ maxWidth: "840px" }}>
            <span className="badge badge-electric" style={{ marginBottom: "12px" }}>
              <Wrench size={14} /> Industrial Operations
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              Manufacturing & Assembly at Range Automobiles
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              A disciplined, engineering-first approach to commercial three-wheeler assembly. Located in Faridabad, Haryana, our facility specializes in precision assembly of Sky Star passenger and cargo e-rickshaws.
            </p>
          </div>
        </div>
      </section>

      {/* Production Workflow */}
      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Step-by-Step Operations</span>
            <h2>Our Assembly Workflow</h2>
            <p className="section-subtitle">
              From bare chassis alignment to verified roll-out, every vehicle follows a standard quality protocol.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {workflowSteps.map((step) => (
              <div key={step.num} className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 900, color: "var(--brand-green-bright)" }}>
                    {step.num}
                  </span>
                  <span className="badge badge-subtle">Phase {step.num}</span>
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "var(--text-white)" }}>{step.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Photographic Gallery */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-green">Factory Photographic Record</span>
            <h2>Authentic Assembly Floor Photography</h2>
            <p className="section-subtitle">
              Unedited actual photographs of Range Automobiles vehicles and assembly stages at our plant.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {galleryImages.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: "16px", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "240px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "14px" }}>
                  <img
                    src={item.url}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control & Transparent Claims Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="card" style={{ padding: "36px", border: "1px solid var(--border-medium)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <ShieldCheck size={32} color="var(--brand-electric)" />
              <div>
                <h3 style={{ fontSize: "1.4rem" }}>Quality Control & Testing Discipline</h3>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Faridabad Facility Operations</div>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
              At Range Automobiles, we maintain a strict verification protocol before releasing vehicles to our dealer network:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="var(--brand-electric)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <strong>Powertrain Calibration:</strong> Every CY Gold motor and matched controller is bench-tested under simulated load before wheel fitment.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="var(--brand-electric)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <strong>Electrical Surge Protection:</strong> Flame-retardant wiring harnesses and 25A chargers undergo thermal and overvoltage checks.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <CheckCircle2 size={18} color="var(--brand-electric)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.92rem", color: "var(--text-primary)" }}>
                  <strong>Chassis Geometry:</strong> Laser and jig verification of front fork rake angle and rear axle symmetry for stable highway straight-tracking.
                </span>
              </div>
            </div>

            <div style={{ padding: "14px", background: "rgba(245, 158, 11, 0.08)", border: "1px dashed rgba(245, 158, 11, 0.4)", borderRadius: "8px", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              * Official third-party quality certifications (e.g. ARAI/ICAT certificates) and specific annual production capacity metrics will be published as official testing documentation is updated.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
