import React, { useState } from "react";
import { X, FileText, Download, CheckCircle2, Clock, Mail } from "lucide-react";
import { saveEnquiry } from "../services/enquiryStore";

export function BrochureModal({ isOpen, onClose, productName }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;

    saveEnquiry({
      type: "brochure_waitlist",
      applicantName: "Brochure Subscriber",
      phone: emailOrPhone,
      modelName: productName || "Range Automobiles Lineup",
      comments: "Requested verified technical brochure PDF upon official launch"
    });

    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="brochure-modal-title">
      <div className="modal-container" style={{ maxWidth: "520px" }}>
        <div className="modal-header">
          <div>
            <h3 id="brochure-modal-title" className="modal-title">Product Brochure Status</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
              Range Automobiles Technical Specifications Document
            </p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <CheckCircle2 size={48} color="var(--brand-electric)" style={{ margin: "0 auto 12px" }} />
              <h4>Subscription Logged</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "8px", lineHeight: 1.5 }}>
                You have been registered. As soon as Range Automobiles publishes the official verified high-resolution PDF brochure for <strong>{productName}</strong>, our team will dispatch it directly.
              </p>
              <button onClick={onClose} className="btn btn-secondary" style={{ marginTop: "18px", width: "100%" }}>
                Close
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(245, 158, 11, 0.08)", border: "1px dashed rgba(245, 158, 11, 0.4)", padding: "16px", borderRadius: "10px", marginBottom: "20px" }}>
                <Clock size={24} color="#F59E0B" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  <strong style={{ color: "#FCD34D" }}>Official Printed Brochure Pending</strong>
                  <br />
                  In compliance with transparent manufacturing standards, Range Automobiles does not publish simulated marketing brochures until the official factory technical documents are finalized.
                </div>
              </div>

              <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "16px" }}>
                Would you like us to email or WhatsApp you the official specification sheet for <strong>{productName}</strong> the moment it is released?
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: "16px" }}>
                  <label className="form-label" htmlFor="brochure-contact">
                    Mobile Number or Email Address
                  </label>
                  <input
                    id="brochure-contact"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter 10-digit mobile or email"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                  />
                </div>

                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                  <button type="button" onClick={onClose} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Download size={16} /> Notify Me on Release
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
