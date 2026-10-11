import React, { useState } from "react";
import { SPARE_PARTS, PART_CATEGORIES } from "../data/parts";
import { 
  Wrench, 
  ShieldCheck, 
  Search, 
  HelpCircle, 
  Filter, 
  ArrowRight, 
  Package, 
  MessageSquare,
  Sparkles
} from "lucide-react";

export function SparePartsPage({ navigate, onOpenPartsModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All Parts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredParts = SPARE_PARTS.filter((part) => {
    const matchesCategory = selectedCategory === "All Parts" || part.category === selectedCategory;
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          part.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          part.compatibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="spare-parts-page">
      {/* Banner */}
      <section className="section" style={{ padding: "48px 0 32px", background: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>Spare Parts & Accessories</span>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <span className="badge badge-gold" style={{ marginBottom: "12px" }}>
              <Wrench size={14} /> Genuine OEM Components
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              Spare Parts, Assemblies & Accessories
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Range Automobiles supplies genuine assembly replacement components for authorized dealers, certified mechanics, and fleet garages. We maintain strict manufacturing tolerances for electrical safety and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "32px", background: "var(--bg-surface)", padding: "16px 20px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)" }}>
            {/* Category tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {PART_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm ${selectedCategory === cat ? "btn-primary" : "btn-secondary"}`}
                  style={{ borderRadius: "var(--radius-full)" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <Search size={18} color="var(--text-muted)" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: "40px", fontSize: "0.88rem" }}
                placeholder="Search components or compatibility..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Parts Grid */}
          {filteredParts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "var(--bg-surface)", borderRadius: "var(--radius-lg)", border: "1px dashed var(--border-medium)" }}>
              <Package size={48} color="var(--text-muted)" style={{ margin: "0 auto 16px" }} />
              <h3>No parts found matching your filter</h3>
              <p style={{ color: "var(--text-secondary)", marginTop: "8px" }}>
                Looking for a specialized component? Contact our spare parts dispatch desk directly.
              </p>
              <button
                onClick={() => { setSelectedCategory("All Parts"); setSearchQuery(""); }}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: "16px" }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
              {filteredParts.map((part) => (
                <div key={part.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "200px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "16px", background: "#080B12" }}>
                    <img
                      src={part.image}
                      alt={part.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span className="badge badge-subtle">{part.category}</span>
                    <span className="badge badge-gold">{part.badge}</span>
                  </div>

                  <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{part.name}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "14px", flexGrow: 1 }}>
                    {part.description}
                  </p>

                  <div style={{ background: "rgba(0,0,0,0.25)", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border-subtle)", marginBottom: "18px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Confirmed Compatibility</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-white)", fontWeight: 600 }}>{part.compatibility}</div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                    <div style={{ fontSize: "0.78rem", color: "var(--brand-electric)", fontWeight: 600 }}>
                      Enquiry-based pricing
                    </div>
                    <button
                      onClick={() => onOpenPartsModal(part)}
                      className="btn btn-primary btn-sm"
                    >
                      Enquire Price & Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Ordering Policy Notice */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="card" style={{ padding: "32px", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <ShieldCheck size={28} color="#F59E0B" />
              <h3 style={{ fontSize: "1.3rem" }}>Transparent Spare Parts Policy</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
              In compliance with manufacturing credibility guidelines, Range Automobiles does not publish fictional live inventory counters or unverified retail pricing. All genuine CY Gold motors, controllers, and body spares are distributed through direct order verification to prevent unauthorized counterfeit parts from entering local fleets.
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Authorized regional dealers receive priority dispatch from our Faridabad facility within 24 to 48 hours of order confirmation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
