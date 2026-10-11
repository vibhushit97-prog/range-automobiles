import React, { useState } from "react";
import { COMPANY } from "../config/company";
import { saveEnquiry } from "../services/enquiryStore";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  CheckCircle2, 
  Clock,
  ArrowRight
} from "lucide-react";

export function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "Vehicle Sales & Pricing",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid 10-digit mobile number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Please write your query";
    if (!formData.consent) errs.consent = "Please agree to the privacy notice to proceed";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const res = saveEnquiry({
        type: "contact",
        applicantName: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        comments: `[${formData.enquiryType}] ${formData.message.trim()}`
      });

      setIsSubmitting(false);
      setSubmitResult(res);
    }, 350);
  };

  const getDirectWhatsAppUrl = () => {
    const cleanNumber = COMPANY.contact.whatsappNumber;
    const msg = `Hello Range Automobiles, my name is ${formData.name}. Regarding: ${formData.enquiryType}. My contact: ${formData.phone}.`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="contact-page">
      <section className="section" style={{ paddingTop: "36px", paddingBottom: "72px" }}>
        <div className="container">
          {/* 1. Compact Understated Breadcrumb */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span className="current">Contact Us</span>
          </nav>

          {/* 2. Page Introduction (Two-Column Desktop Layout) */}
          <div className="contact-hero-intro">
            <div className="contact-hero-left">
              <span className="badge badge-electric">
                Connect With Us
              </span>
              <h1 className="contact-hero-title">
                Contact Range Automobiles
              </h1>
              <p className="contact-hero-desc">
                Connect with our team for passenger and loader e-rickshaw enquiries, dealership opportunities, product information, and manufacturing-related enquiries.
              </p>
            </div>

            <div className="contact-hero-right">
              <div className="hero-image-frame" style={{ height: "260px" }}>
                <img
                  src="/images/vehicles/sky-star-fleet-lineup.jpg"
                  alt="Range Automobiles Manufacturing and Assembly facility lineup"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* 3. Balanced Location Cards (Factory vs Office) */}
          <div className="location-cards-grid">
            {/* Factory Card */}
            <div className="location-card">
              <div>
                <div className="location-card-header">
                  <div className="location-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="location-card-title">Manufacturing Facility</h3>
                    <div className="location-card-subtitle">Faridabad, Haryana</div>
                  </div>
                </div>

                <div className="location-card-address">
                  <strong>Range Automobiles Pvt. Ltd.</strong> <br />
                  Faridabad, Haryana, India.
                </div>

                <p className="location-card-desc">
                  Manufacturing and assembly enquiries, subject to the company's actual operations.
                </p>
              </div>

              <div className="location-card-action">
                <a
                  href={COMPANY.factory.mapsSearchQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%" }}
                >
                  View Factory Location <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Office Card */}
            <div className="location-card">
              <div>
                <div className="location-card-header">
                  <div className="location-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="location-card-title">Corporate & Sales Office</h3>
                    <div className="location-card-subtitle">New Delhi</div>
                  </div>
                </div>

                <div className="location-card-address">
                  <strong>Range Automobiles Pvt. Ltd.</strong> <br />
                  1st Floor, Shani Bajar, Kirari Suleman Nagar, Inder Enclave, New Delhi – 110086, India.
                </div>

                <p className="location-card-desc">
                  Sales enquiries, dealership discussions, and product information.
                </p>
              </div>

              <div className="location-card-action">
                <a
                  href={COMPANY.office.mapsSearchQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%" }}
                >
                  View Office Location <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* 4. Contact Channels Section */}
          <div className="contact-channels-grid">
            <a href={`tel:${COMPANY.contact.phoneRaw}`} className="contact-channel-item">
              <div className="contact-channel-icon">
                <Phone size={20} color="var(--brand-green)" />
              </div>
              <div>
                <div className="contact-channel-label">Customer Care & Sales Calling</div>
                <div className="contact-channel-val">{COMPANY.contact.phoneDisplay}</div>
              </div>
            </a>

            <a 
              href={`https://wa.me/${COMPANY.contact.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-channel-item"
            >
              <div className="contact-channel-icon">
                <MessageSquare size={20} color="#25D366" />
              </div>
              <div>
                <div className="contact-channel-label">Dedicated Business WhatsApp</div>
                <div className="contact-channel-val">{COMPANY.contact.whatsappDisplay}</div>
              </div>
            </a>

            <a href={`mailto:${COMPANY.contact.email}`} className="contact-channel-item">
              <div className="contact-channel-icon">
                <Mail size={20} color="var(--brand-green)" />
              </div>
              <div>
                <div className="contact-channel-label">Official Support & Sales Email</div>
                <div className="contact-channel-val" style={{ fontSize: "0.86rem" }}>{COMPANY.contact.email}</div>
              </div>
            </a>
          </div>

          {/* 5. Clean Enquiry Form */}
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="form-card">
              {submitResult ? (
                <div style={{ textAlign: "center", padding: "28px 16px" }}>
                  <CheckCircle2 size={54} color="var(--brand-green)" style={{ margin: "0 auto 16px" }} />
                  <h2 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>Enquiry Successfully Submitted</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "16px" }}>
                    Reference Number: <strong>{submitResult.enquiry.id}</strong>
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "560px", margin: "0 auto 24px", lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.name}</strong>. Your communication regarding <strong>{formData.enquiryType}</strong> has been recorded. Our team will contact you at <strong>{formData.phone}</strong>.
                  </p>
                  
                  <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <MessageSquare size={16} /> Connect on WhatsApp
                    </a>
                    <button
                      onClick={() => { setSubmitResult(null); setFormData({ name: "", phone: "", email: "", enquiryType: "Vehicle Sales & Pricing", message: "", consent: false }); }}
                      className="btn btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: "24px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "14px" }}>
                    <h2 style={{ fontSize: "1.5rem" }}>Send a Direct Message</h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: "4px" }}>
                      Fill out the form below and an authorized Range Automobiles representative will respond promptly.
                    </p>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cnt-name">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        id="cnt-name"
                        type="text"
                        className={`form-input ${errors.name ? "error" : ""}`}
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cnt-phone">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        id="cnt-phone"
                        type="tel"
                        className={`form-input ${errors.phone ? "error" : ""}`}
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cnt-email">
                        Email Address (Optional)
                      </label>
                      <input
                        id="cnt-email"
                        type="email"
                        className={`form-input ${errors.email ? "error" : ""}`}
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cnt-type">
                        Enquiry Type
                      </label>
                      <select
                        id="cnt-type"
                        className="form-select"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      >
                        <option value="Vehicle Sales & Pricing">Vehicle Sales & Pricing</option>
                        <option value="Dealership & Distribution">Dealership & Distribution</option>
                        <option value="Spare Parts Procurement">Spare Parts & Accessories</option>
                        <option value="Manufacturing & Plant Enquiry">Manufacturing & Plant Enquiry</option>
                        <option value="General Corporate Support">General Corporate Support</option>
                      </select>
                    </div>

                    <div className="form-group form-col-full">
                      <label className="form-label" htmlFor="cnt-message">
                        Message / Requirement <span className="required">*</span>
                      </label>
                      <textarea
                        id="cnt-message"
                        rows="3"
                        className={`form-textarea ${errors.message ? "error" : ""}`}
                        placeholder="Please describe your vehicle requirements, quantity, or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                      {errors.message && <span className="field-error-msg">{errors.message}</span>}
                    </div>

                    <div className="form-group form-col-full">
                      <div className="form-checkbox-wrap">
                        <input
                          id="cnt-consent"
                          type="checkbox"
                          className="form-checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        />
                        <label htmlFor="cnt-consent" className="form-checkbox-label">
                          I agree to Range Automobiles Pvt. Ltd. processing my contact details to reply to my query in accordance with the Privacy Notice.
                        </label>
                      </div>
                      {errors.consent && <span className="field-error-msg">{errors.consent}</span>}
                    </div>
                  </div>

                  <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
