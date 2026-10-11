import React, { useState } from "react";
import { X, CheckCircle2, PackageCheck, Send, MessageSquare } from "lucide-react";
import { saveEnquiry } from "../services/enquiryStore";
import { COMPANY } from "../config/company";

export function PartsInquiryModal({ isOpen, onClose, selectedPart }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Delhi",
    userType: "Authorized Garage / Mechanic",
    quantity: "1 unit",
    notes: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !selectedPart) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid 10-digit mobile number";
    }
    if (!formData.city.trim()) errs.city = "City / District is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      saveEnquiry({
        type: "parts",
        applicantName: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        state: formData.state,
        userType: formData.userType,
        partName: selectedPart.name,
        partCategory: selectedPart.category,
        quantity: formData.quantity,
        comments: formData.notes.trim()
      });

      setIsSubmitting(false);
      setSubmitted(true);
    }, 350);
  };

  const getDirectWhatsAppUrl = () => {
    const cleanNumber = COMPANY.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = `Hello Range Automobiles, I am requesting price and availability for spare part: "${selectedPart.name}". My name is ${formData.name} (${formData.city}, ${formData.state}). Mobile: ${formData.phone}. Quantity: ${formData.quantity}.`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="parts-modal-title">
      <div className="modal-container">
        <div className="modal-header">
          <div>
            <h3 id="parts-modal-title" className="modal-title">Part Availability & Pricing Enquiry</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              {selectedPart.name}
            </p>
          </div>
          <button onClick={handleClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <CheckCircle2 size={52} color="var(--brand-electric)" style={{ margin: "0 auto 16px" }} />
              <h3>Spare Part Enquiry Registered</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "8px", lineHeight: 1.5 }}>
                Your availability inquiry for <strong>{selectedPart.name}</strong> has been logged. Our spare parts dispatch team in Faridabad / New Delhi will provide wholesale and retail pricing.
              </p>
              
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-electric"
                  style={{ width: "100%" }}
                >
                  <MessageSquare size={18} /> Confirm via WhatsApp
                </a>
                <button onClick={handleClose} className="btn btn-secondary" style={{ width: "100%" }}>
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ background: "rgba(0, 0, 0, 0.2)", border: "1px solid var(--border-subtle)", padding: "12px 16px", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Selected Component</div>
                  <strong style={{ color: "var(--text-white)", fontSize: "0.95rem" }}>{selectedPart.name}</strong>
                </div>
                <span className="badge badge-subtle">{selectedPart.category}</span>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="parts-name">
                    Contact Name <span className="required">*</span>
                  </label>
                  <input
                    id="parts-name"
                    type="text"
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="Your Name / Workshop Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="field-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="parts-phone">
                    Phone / WhatsApp <span className="required">*</span>
                  </label>
                  <input
                    id="parts-phone"
                    type="tel"
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="parts-city">
                    City / District <span className="required">*</span>
                  </label>
                  <input
                    id="parts-city"
                    type="text"
                    className={`form-input ${errors.city ? "error" : ""}`}
                    placeholder="e.g. Faridabad, Delhi, Jaipur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  {errors.city && <span className="field-error-msg">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="parts-state">State</label>
                  <select
                    id="parts-state"
                    className="form-select"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  >
                    <option value="Delhi">Delhi</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="parts-type">Applicant Type</label>
                  <select
                    id="parts-type"
                    className="form-select"
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  >
                    <option value="Authorized Garage / Mechanic">Automobile Garage / Mechanic</option>
                    <option value="E-Rickshaw Fleet Operator">E-Rickshaw Fleet Operator</option>
                    <option value="Individual Vehicle Owner">Individual Vehicle Owner</option>
                    <option value="Regional Spare Parts Retailer">Regional Spare Parts Retailer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="parts-qty">Quantity Needed</label>
                  <select
                    id="parts-qty"
                    className="form-select"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="1 unit">1 unit (Immediate replacement)</option>
                    <option value="2 - 5 units">2 - 5 units</option>
                    <option value="10+ units (Wholesale lot)">10+ units (Wholesale lot)</option>
                  </select>
                </div>

                <div className="form-group form-col-full">
                  <label className="form-label" htmlFor="parts-notes">Comments / Vehicle Chassis Number (Optional)</label>
                  <textarea
                    id="parts-notes"
                    rows="2"
                    className="form-textarea"
                    placeholder="Enter any vehicle details or required delivery timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button type="button" onClick={handleClose} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                  {isSubmitting ? "Submitting..." : "Check Availability & Price"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
