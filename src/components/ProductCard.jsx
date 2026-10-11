import React from "react";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export function ProductCard({ product, navigate, onOpenQuoteModal }) {
  // Model-specific verified highlights to ensure accuracy without false claims
  const getModelHighlights = () => {
    if (product.id === "sky-star-ldr") {
      return [
        { label: "Payload Capacity", value: "310 kg Rated" },
        { label: "Cargo Bed", value: "Reinforced Diamond Plate" },
        { label: "Powertrain", value: "CY Gold Motor & Controller" },
        { label: "Battery Config", value: "Lead-Acid (7h) / Lithium (4h)" },
      ];
    } else if (product.id === "sky-star-li") {
      return [
        { label: "Battery Chemistry", value: "Lithium-Ion Technology" },
        { label: "Recharge Time", value: "Approx. 4 Hours" },
        { label: "Powertrain", value: "CY Gold Motor & Controller" },
        { label: "Chassis & Frame", value: "Stainless Steel Superstructure" },
      ];
    } else {
      // Default: Sky Star Flagship Passenger
      return [
        { label: "Body Construction", value: "Stainless Steel Frame" },
        { label: "Powertrain", value: "CY Gold Motor & Controller" },
        { label: "Battery Support", value: "Lead-Acid & Lithium Options" },
        { label: "Included Charger", value: "25 Amp Smart Charger" },
      ];
    }
  };

  const highlights = getModelHighlights();

  return (
    <article className="product-card" aria-label={`${product.name} ${product.category}`}>
      <div className="product-thumb-wrap">
        <img
          src={product.heroImage}
          alt={`Range Automobiles ${product.name} ${product.category}`}
          loading="lazy"
        />
        {product.badge && (
          <div className="product-thumb-badge">
            <span className="badge badge-subtle">{product.badge}</span>
          </div>
        )}
      </div>

      <div className="product-body">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <span className="product-category-tag">{product.category}</span>
        </div>

        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.overview}</p>

        <div className="product-spec-pills" role="list" aria-label="Verified highlights">
          {highlights.map((h, i) => (
            <div key={i} className="spec-pill-item" role="listitem">
              <span className="spec-pill-label">{h.label}</span>
              <span className="spec-pill-val">{h.value}</span>
            </div>
          ))}
        </div>

        <div className="product-card-actions">
          <button
            onClick={() => navigate(`product-${product.id}`)}
            className="btn btn-secondary btn-sm"
            aria-label={`View details and specifications for ${product.name}`}
          >
            <FileText size={15} />
            View Details
          </button>
          <button
            onClick={() => onOpenQuoteModal(product.id)}
            className="btn btn-primary btn-sm"
            aria-label={`Request a quote for ${product.name}`}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </article>
  );
}
