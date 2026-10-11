import React from "react";
import { COMPANY } from "../config/company";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export function LegalPage({ type = "privacy", navigate }) {
  const isPrivacy = type === "privacy";

  return (
    <div className="legal-page">
      <section className="section" style={{ padding: "48px 0 24px" }}>
        <div className="container">
          <div className="breadcrumbs">
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--text-white)" }}>
              {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
            </span>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <span className="badge badge-subtle" style={{ marginBottom: "12px" }}>
              {isPrivacy ? <Lock size={14} /> : <FileText size={14} />} Legal Notice
            </span>
            <h1 style={{ marginBottom: "16px" }}>
              {isPrivacy ? "Privacy Policy" : "Terms & Conditions of Service"}
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              Range Automobiles Pvt. Ltd. • Effective Date: October 2026
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="card" style={{ padding: "36px", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            {isPrivacy ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ color: "var(--text-white)" }}>1. Information We Collect</h3>
                <p>
                  Range Automobiles Pvt. Ltd. collects contact information (including your name, mobile phone number, WhatsApp number, email address, city, state, and business enterprise details) solely when you voluntarily submit an inquiry through our dealership application forms, vehicle quotation requests, spare parts inquiries, or contact forms.
                </p>

                <h3 style={{ color: "var(--text-white)" }}>2. Purpose of Data Processing</h3>
                <p>
                  We utilize submitted data strictly for legitimate automotive business purposes:
                </p>
                <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li>Responding to commercial vehicle price inquiries and fleet quotations.</li>
                  <li>Evaluating prospective dealer sales territories and appointing authorized regional distributors.</li>
                  <li>Providing genuine spare parts availability and technical workshop support.</li>
                  <li>Communicating via phone calls or verified WhatsApp messages regarding your requested vehicle model.</li>
                </ul>

                <h3 style={{ color: "var(--text-white)" }}>3. Third-Party Sharing & Security</h3>
                <p>
                  We do not sell, rent, or trade your personal or business data to third-party telemarketing firms. Data may only be shared with authorized regional Range Automobiles dealerships situated within your designated geographic territory to expedite your vehicle quotation and physical delivery.
                </p>

                <h3 style={{ color: "var(--text-white)" }}>4. Contact for Data Requests</h3>
                <p>
                  For any privacy inquiries or to request deletion of your submitted commercial application records, contact our Corporate Office at: <br />
                  <strong>Range Automobiles Pvt. Ltd.</strong> <br />
                  1st Floor, Shani Bajar, Kirari Suleman Nagar, Inder Enclave, New Delhi – 110086, India.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ color: "var(--text-white)" }}>1. Product Specifications & Provisional Disclaimers</h3>
                <p>
                  All technical specifications, vehicle driving ranges (e.g. 110 km per charge), charging durations (e.g. 4 hours lithium / 7 hours lead-acid), and listed speeds (25 km/h) published on this website are based on manufacturer baseline test configurations and user-provided preliminary data. Actual performance on public roads may vary depending on road gradient, gross vehicle weight, payload, weather conditions, tyre pressure, and driver acceleration habits.
                </p>

                <h3 style={{ color: "var(--text-white)" }}>2. Commercial Pricing & Quotations</h3>
                <p>
                  Prices displayed or quoted are ex-factory / ex-showroom and do not constitute a binding legal contract until confirmed via an official proforma invoice issued by Range Automobiles Pvt. Ltd. or an authorized territorial distributor. Statutory taxes, state EV subsidies, registration fees, and insurance charges are subject to respective state transport department guidelines.
                </p>

                <h3 style={{ color: "var(--text-white)" }}>3. Dealership Appointments</h3>
                <p>
                  Submission of an authorized dealership or distributorship application form does not guarantee territory appointment. Range Automobiles Pvt. Ltd. reserves the right to evaluate financial credentials, commercial showroom infrastructure, and territorial viability before executing formal dealer agreements.
                </p>

                <h3 style={{ color: "var(--text-white)" }}>4. Intellectual Property & Brand Rights</h3>
                <p>
                  "Range Automobiles", model designations (Sky Star, Sky Star Li, Sky Star Ldr), and all published vehicle photographs are the proprietary assets of Range Automobiles Pvt. Ltd. Unauthorized reproduction or commercial imitation is strictly prohibited.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
