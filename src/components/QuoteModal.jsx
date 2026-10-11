import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import { saveEnquiry } from "../services/enquiryStore";
import { X, CheckCircle2, AlertCircle, ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY } from "../config/company";

export function QuoteModal({ isOpen, onClose, initialModelId }) {
  const [modelId, setModelId] = useState(initialModelId || "sky-star");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Delhi",
    batteryType: "Not Sure / Recommend Best Option",
    quantity: "1 Unit (Individual Driver)",
    comments: "",
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  if (!isOpen) return null;

  const selectedProduct = PRODUCTS.find((p) => p.id === modelId) || PRODUCTS[0];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid 10-digit mobile or telephone number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.city.trim()) errs.city = "City / District is required";
    if (!formData.consent) errs.consent = "Please agree to be contacted regarding your vehicle quotation";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const res = saveEnquiry({
        type: "quote",
        applicantName: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        state: formData.state,
        modelName: selectedProduct.name,
        modelCategory: selectedProduct.category,
        batteryPreference: formData.batteryType,
        quantity: formData.quantity,
        comments: formData.comments.trim(),
        createdAt: new Date().toISOString()
      });

      setIsSubmitting(false);
      setSubmitResult(res);
    }, 400);
  };

  const resetAndClose = () => {
    setSubmitResult(null);
    setErrors({});
    onClose();
  };

  const getDirectWhatsAppUrl = () => {
    const cleanNumber = COMPANY.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = `Hello Range Automobiles, I submitted a quotation request for ${selectedProduct.name}. My name is ${formData.name} from ${formData.city}, ${formData.state}. Phone: ${formData.phone}.`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className="modal-container">
        <div className="modal-header">
          <div>
            <h3 id="quote-modal-title" className="modal-title">Request Quotation & Technical Specs</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              Official pricing for Range Automobiles E-Rickshaws
            </p>
          </div>
          <button onClick={resetAndClose} className="modal-close-btn" aria-label="Close quote modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitResult ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <CheckCircle2 size={56} color="var(--brand-electric)" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ marginBottom: "8px" }}>Quotation Request Registered</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
                Enquiry Reference ID: <strong>{submitResult.enquiry.id}</strong>
              </p>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "24px", lineHeight: 1.5 }}>
                Your request for the <strong>{selectedProduct.name}</strong> has been logged in our system. A Range Automobiles sales executive will verify your territory and get in touch with you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a 
                  href={getDirectWhatsAppUrl()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-electric"
                  style={{ width: "100%" }}
                >
                  <MessageSquare size={18} /> Connect on WhatsApp Instantly
                </a>
                <button onClick={resetAndClose} className="btn btn-secondary" style={{ width: "100%" }}>
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group" style={{ marginBottom: "16px" }}>
                <label className="form-label" htmlFor="model-select">
                  Select Vehicle Model <span className="required">*</span>
                </label>
                <select
                  id="model-select"
                  className="form-select"
                  value={modelId}
                  onChange={(e) => setModelId(e.target.value)}
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-name">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-phone">
                    Mobile Number <span className="required">*</span>
                  </label>
                  <input
                    id="applicant-phone"
                    type="tel"
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-city">
                    City / Town <span className="required">*</span>
                  </label>
                  <input
                    id="applicant-city"
                    type="text"
                    className={`form-input ${errors.city ? "error" : ""}`}
                    placeholder="e.g. New Delhi, Faridabad, Patna"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  {errors.city && <span className="field-error-msg">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicant-state">
                    State / UT
                  </label>
                  <select
                    id="applicant-state"
                    className="form-select"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  >
                    <option value="Delhi">Delhi</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="battery-choice">
                    Battery Preference
                  </label>
                  <select
                    id="battery-choice"
                    className="form-select"
                    value={formData.batteryType}
                    onChange={(e) => setFormData({ ...formData, batteryType: e.target.value })}
                  >
                    <option value="Not Sure / Recommend Best Option">Not Sure / Recommend Best Option</option>
                    <option value="Lithium-Ion (Fast 4hr Charging)">Lithium-Ion (Fast 4hr Charging)</option>
                    <option value="Lead-Acid (Economical)">Lead-Acid (Economical)</option>
                    <option value="Without Battery (Vehicle Chassis Only)">Without Battery (Chassis Only)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="purchase-qty">
                    Planned Quantity
                  </label>
                  <select
                    id="purchase-qty"
                    className="form-select"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="1 Unit (Individual Driver)">1 Unit (Individual Driver)</option>
                    <option value="2 - 5 Units (Small Fleet)">2 - 5 Units (Small Fleet)</option>
                    <option value="5 - 10 Units (Fleet Operator)">5 - 10 Units (Fleet Operator)</option>
                    <option value="10+ Units (Commercial Bulk)">10+ Units (Commercial Bulk)</option>
                  </select>
                </div>

                <div className="form-group form-col-full">
                  <label className="form-label" htmlFor="applicant-email">
                    Email Address (Optional)
                  </label>
                  <input
                    id="applicant-email"
                    type="email"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="field-error-msg">{errors.email}</span>}
                </div>

                <div className="form-group form-col-full">
                  <label className="form-label" htmlFor="applicant-comments">
                    Additional Requirement or Financing Questions
                  </label>
                  <textarea
                    id="applicant-comments"
                    rows="2"
                    className="form-textarea"
                    placeholder="Specify any route details, loan enquiry, or body customization..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-group form-col-full">
                  <div className="form-checkbox-wrap">
                    <input
                      id="quote-consent"
                      type="checkbox"
                      className="form-checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="quote-consent" className="form-checkbox-label">
                      I agree to allow Range Automobiles Pvt. Ltd. and its authorized regional dealers to contact me regarding this vehicle quotation in accordance with the Privacy Policy.
                    </label>
                  </div>
                  {errors.consent && <span className="field-error-msg">{errors.consent}</span>}
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px", justifyContent: "flex-end" }}>
                <button type="button" onClick={resetAndClose} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                  {isSubmitting ? "Registering Request..." : "Submit Quotation Request"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
