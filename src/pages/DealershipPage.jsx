import React, { useState } from "react";
import { saveEnquiry } from "../services/enquiryStore";
import { COMPANY } from "../config/company";
import { 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  MessageSquare,
  HelpCircle,
  FileCheck2
} from "lucide-react";

export function DealershipPage({ navigate }) {
  const [formData, setFormData] = useState({
    applicantName: "",
    businessName: "",
    phone: "",
    whatsapp: "",
    email: "",
    state: "Delhi",
    city: "",
    businessType: "Automobile Showroom / 2W / 3W Dealer",
    territory: "",
    investmentCapacity: "INR 15 - 30 Lakhs",
    comments: "",
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.applicantName.trim()) errs.applicantName = "Applicant name is required";
    if (!formData.businessName.trim()) errs.businessName = "Business or firm name is required";
    
    if (!formData.phone.trim()) {
      errs.phone = "Primary contact number is required";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.city.trim()) errs.city = "City / District is required";
    if (!formData.territory.trim()) errs.territory = "Expected sales territory or district is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.consent) errs.consent = "You must confirm agreement to the dealership enquiry terms";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const res = saveEnquiry({
        type: "dealership",
        applicantName: formData.applicantName.trim(),
        businessName: formData.businessName.trim(),
        phone: formData.phone.trim(),
        whatsapp: formData.whatsapp.trim() || formData.phone.trim(),
        email: formData.email.trim(),
        state: formData.state,
        city: formData.city.trim(),
        businessType: formData.businessType,
        territory: formData.territory.trim(),
        investmentCapacity: formData.investmentCapacity,
        comments: formData.comments.trim(),
        createdAt: new Date().toISOString()
      });

      setIsSubmitting(false);
      setSubmitResult(res);
    }, 450);
  };

  const getDirectWhatsAppUrl = () => {
    const cleanNumber = COMPANY.contact.whatsappNumber.replace(/[^0-9]/g, "");
    const msg = `Hello Range Automobiles, I submitted a dealership enquiry for ${formData.businessName} in ${formData.city}, ${formData.state} (Territory: ${formData.territory}). Applicant: ${formData.applicantName}, Phone: ${formData.phone}.`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="dealership-page">
      {/* Banner */}
      <section className="section" style={{ padding: "48px 0 32px", background: "radial-gradient(circle at 80% 20%, rgba(118, 196, 66, 0.12) 0%, transparent 60%)" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>Dealership Network</span>
          </div>

          <div style={{ maxWidth: "840px" }}>
            <span className="badge badge-green" style={{ marginBottom: "12px" }}>
              <Briefcase size={14} /> Partner Expansion
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              Become an Authorized Range Automobiles Dealer
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Join our growing network of commercial electric vehicle distributors across India. We offer transparent manufacturer supply terms, genuine CY Gold OEM spare parts support, and territorial exclusivity for qualified partners.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-subtle">Factual Partnership Advantages</span>
            <h2>Why Partner With Range Automobiles?</h2>
            <p className="section-subtitle">
              We focus on practical, sustainable business fundamentals without misleading or unsupported promises.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            <div className="card">
              <ShieldCheck size={28} color="var(--brand-green)" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Territory Exclusivity</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Clearly demarcated sales districts and tehsil territories to protect your local showroom marketing and sales investments.
              </p>
            </div>

            <div className="card">
              <TrendingUp size={28} color="var(--brand-electric)" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Direct Manufacturer Pricing</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Direct factory dispatches from Faridabad without intermediary brokers, maximizing your per-unit dealer margins.
              </p>
            </div>

            <div className="card">
              <Wrench size={28} color="var(--brand-gold)" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Genuine Spare Parts Supply</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Dedicated priority supply of original CY Gold motors, controllers, 25A chargers, and body panels for your workshop service desk.
              </p>
            </div>

            <div className="card">
              <FileCheck2 size={28} color="#93C5FD" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Flexible Fleet Lineup</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Offer both passenger (Sky Star / Sky Star Li) and commercial cargo loader (Sky Star Ldr) variants to capture diverse regional customer bases.
              </p>
            </div>
          </div>

          {/* Dealership Application Form Card */}
          <div className="form-card" style={{ maxWidth: "920px", margin: "0 auto" }}>
            {submitResult ? (
              <div style={{ textAlign: "center", padding: "32px 16px" }}>
                <CheckCircle2 size={64} color="var(--brand-electric)" style={{ margin: "0 auto 16px" }} />
                <h2 style={{ marginBottom: "12px" }}>Dealership Application Successfully Received</h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Application Reference ID: <strong>{submitResult.enquiry.id}</strong>
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 28px", lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.applicantName}</strong>. Your application for <strong>{formData.businessName}</strong> in <strong>{formData.city}, {formData.state}</strong> has been logged into our regional distributor review desk.
                </p>

                <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                  <a
                    href={getDirectWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-electric"
                  >
                    <MessageSquare size={18} /> Connect with Dealer Relations on WhatsApp
                  </a>
                  <button
                    onClick={() => { setSubmitResult(null); setFormData({ ...formData, applicantName: "", businessName: "", phone: "", comments: "" }); }}
                    className="btn btn-secondary"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: "28px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "16px" }}>
                  <h2>Dealership & Distributorship Registration Form</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginTop: "4px" }}>
                    Please provide accurate business details for territory evaluation. All information is handled confidentially.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-applicant-name">
                        Applicant / Proprietor Full Name <span className="required">*</span>
                      </label>
                      <input
                        id="dlr-applicant-name"
                        type="text"
                        className={`form-input ${errors.applicantName ? "error" : ""}`}
                        placeholder="e.g. Ramesh Chandra Verma"
                        value={formData.applicantName}
                        onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                      />
                      {errors.applicantName && <span className="field-error-msg">{errors.applicantName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-business-name">
                        Firm / Business Enterprise Name <span className="required">*</span>
                      </label>
                      <input
                        id="dlr-business-name"
                        type="text"
                        className={`form-input ${errors.businessName ? "error" : ""}`}
                        placeholder="e.g. Verma EV Enterprises"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                      {errors.businessName && <span className="field-error-msg">{errors.businessName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-phone">
                        Primary Calling Mobile Number <span className="required">*</span>
                      </label>
                      <input
                        id="dlr-phone"
                        type="tel"
                        className={`form-input ${errors.phone ? "error" : ""}`}
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-whatsapp">
                        WhatsApp Number (If different)
                      </label>
                      <input
                        id="dlr-whatsapp"
                        type="tel"
                        className="form-input"
                        placeholder="10-digit WhatsApp number"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-email">
                        Business Email Address
                      </label>
                      <input
                        id="dlr-email"
                        type="email"
                        className={`form-input ${errors.email ? "error" : ""}`}
                        placeholder="contact@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-state">
                        State / Union Territory <span className="required">*</span>
                      </label>
                      <select
                        id="dlr-state"
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
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Other">Other Region</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-city">
                        City / District <span className="required">*</span>
                      </label>
                      <input
                        id="dlr-city"
                        type="text"
                        className={`form-input ${errors.city ? "error" : ""}`}
                        placeholder="e.g. Aligarh, Panipat, Rohtak, Agra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                      {errors.city && <span className="field-error-msg">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dlr-business-type">
                        Existing Business Category
                      </label>
                      <select
                        id="dlr-business-type"
                        className="form-select"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      >
                        <option value="Automobile Showroom / 2W / 3W Dealer">Automobile Showroom / 2W / 3W Dealer</option>
                        <option value="Automotive Spare Parts Trader">Automotive Spare Parts Trader</option>
                        <option value="Tractor / Agricultural Equipment Dealer">Agricultural / Commercial Equipment</option>
                        <option value="Transport / Logistics Fleet Operator">Transport / Logistics Fleet Operator</option>
                        <option value="New Entrepreneur / First-Time Investor">New Entrepreneur / First-Time Investor</option>
                      </select>
                    </div>

                    <div className="form-group form-col-full">
                      <label className="form-label" htmlFor="dlr-territory">
                        Target Sales Territory / Tehsil / Region Desired <span className="required">*</span>
                      </label>
                      <input
                        id="dlr-territory"
                        type="text"
                        className={`form-input ${errors.territory ? "error" : ""}`}
                        placeholder="e.g. North West Delhi, Faridabad Rural, Western UP Cluster"
                        value={formData.territory}
                        onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
                      />
                      {errors.territory && <span className="field-error-msg">{errors.territory}</span>}
                    </div>

                    <div className="form-group form-col-full">
                      <label className="form-label" htmlFor="dlr-comments">
                        Existing Showroom / Workshop Infrastructure & Comments
                      </label>
                      <textarea
                        id="dlr-comments"
                        rows="3"
                        className="form-textarea"
                        placeholder="Mention showroom floor area, service bay availability, staff strength or target launch timeline..."
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="form-group form-col-full">
                      <div className="form-checkbox-wrap">
                        <input
                          id="dlr-consent"
                          type="checkbox"
                          className="form-checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        />
                        <label htmlFor="dlr-consent" className="form-checkbox-label">
                          I agree to share the above commercial information with Range Automobiles Pvt. Ltd. for territory verification and authorized dealership evaluation as per the Privacy Notice.
                        </label>
                      </div>
                      {errors.consent && <span className="field-error-msg">{errors.consent}</span>}
                    </div>
                  </div>

                  <div style={{ marginTop: "28px", display: "flex", justifyContent: "flex-end", gap: "14px" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg"
                    >
                      {isSubmitting ? "Submitting Application..." : "Submit Dealership Application"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
