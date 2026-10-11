import React, { useState, useEffect } from "react";
import { 
  getEnquiries, 
  updateEnquiryStatus, 
  deleteEnquiry, 
  isAdminAuthenticated, 
  authenticateAdmin, 
  logoutAdmin 
} from "../services/enquiryStore";
import { PRODUCTS } from "../data/products";
import { SPARE_PARTS } from "../data/parts";
import { COMPANY } from "../config/company";
import { 
  ShieldCheck, 
  Lock, 
  LogOut, 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  ExternalLink,
  MessageSquare,
  Users,
  Wrench,
  FileSpreadsheet
} from "lucide-react";

export function AdminPage({ navigate }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [enquiries, setEnquiries] = useState([]);
  const [activeTab, setActiveTab] = useState("dealership");
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const auth = isAdminAuthenticated();
    setIsAuthenticated(auth);
    if (auth) {
      setEnquiries(getEnquiries());
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (authenticateAdmin(pinInput.trim())) {
      setIsAuthenticated(true);
      setLoginError("");
      setEnquiries(getEnquiries());
    } else {
      setLoginError("Invalid Security PIN. (Hint for development preview: range2026)");
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
    setPinInput("");
  };

  const handleStatusChange = (id, newStatus) => {
    updateEnquiryStatus(id, newStatus);
    setEnquiries(getEnquiries());
  };

  const handleDelete = (id) => {
    if (window.confirm(`Delete enquiry reference ${id}?`)) {
      deleteEnquiry(id);
      setEnquiries(getEnquiries());
    }
  };

  const exportToCSV = (type) => {
    const items = enquiries.filter((e) => !type || e.type === type);
    if (items.length === 0) {
      alert("No records to export.");
      return;
    }

    const headers = ["ID", "Type", "Applicant Name", "Business/Model", "Phone", "Email", "City", "State", "Status", "Date", "Comments"];
    const rows = items.map((i) => [
      i.id,
      i.type,
      `"${i.applicantName || ""}"`,
      `"${i.businessName || i.modelName || i.partName || ""}"`,
      `"${i.phone || ""}"`,
      `"${i.email || ""}"`,
      `"${i.city || ""}"`,
      `"${i.state || ""}"`,
      i.status || "Pending",
      i.createdAt ? new Date(i.createdAt).toLocaleDateString() : "",
      `"${(i.comments || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `range_automobiles_${type || "all"}_leads.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-page section" style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ maxWidth: "460px" }}>
          <div className="card" style={{ padding: "36px", textAlign: "center" }}>
            <div style={{ width: "56px", height: "56px", background: "rgba(118, 196, 66, 0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--brand-green)" }}>
              <Lock size={28} />
            </div>

            <h2 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>Dealer & Admin Portal</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
              Authorized Range Automobiles Operations Desk
            </p>

            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ marginBottom: "20px", textAlign: "left" }}>
                <label className="form-label" htmlFor="admin-pin">
                  Access PIN Code
                </label>
                <input
                  id="admin-pin"
                  type="password"
                  className="form-input"
                  placeholder="Enter administrator PIN"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  autoFocus
                />
                {loginError && (
                  <span className="field-error-msg" style={{ marginTop: "6px" }}>{loginError}</span>
                )}
                <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "6px" }}>
                  Demo preview passcode: <code>range2026</code>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Unlock Lead Management Desk
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Filter inquiries based on active tab and search
  const filteredList = enquiries.filter((item) => {
    const matchesTab = item.type === activeTab;
    const q = searchFilter.toLowerCase();
    const matchesQuery = !q || 
      (item.applicantName && item.applicantName.toLowerCase().includes(q)) ||
      (item.city && item.city.toLowerCase().includes(q)) ||
      (item.phone && item.phone.includes(q)) ||
      (item.businessName && item.businessName.toLowerCase().includes(q)) ||
      (item.modelName && item.modelName.toLowerCase().includes(q));
    return matchesTab && matchesQuery;
  });

  const dealershipCount = enquiries.filter((e) => e.type === "dealership").length;
  const quoteCount = enquiries.filter((e) => e.type === "quote").length;
  const partsCount = enquiries.filter((e) => e.type === "parts").length;

  return (
    <div className="admin-page section" style={{ paddingTop: "40px" }}>
      <div className="container">
        {/* Header Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "32px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="badge badge-red">Internal Portal</span>
              <span className="badge badge-electric">Live Local Store</span>
            </div>
            <h1 style={{ fontSize: "2rem", marginTop: "6px" }}>Lead Management & Operations Desk</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Range Automobiles Pvt. Ltd. • Real-time Enquiry Tracking
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button
              onClick={() => exportToCSV(activeTab)}
              className="btn btn-secondary btn-sm"
            >
              <FileSpreadsheet size={16} /> Export Tab to CSV
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Tab Switcher & Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "28px" }}>
          <button
            onClick={() => setActiveTab("dealership")}
            className="card"
            style={{
              textAlign: "left",
              cursor: "pointer",
              background: activeTab === "dealership" ? "var(--bg-card-hover)" : "var(--bg-surface)",
              borderColor: activeTab === "dealership" ? "var(--brand-green)" : "var(--border-subtle)",
              padding: "20px"
            }}
          >
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Dealership Applications</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-white)", margin: "4px 0" }}>{dealershipCount}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--brand-green-bright)" }}>Distributor Inquiries</div>
          </button>

          <button
            onClick={() => setActiveTab("quote")}
            className="card"
            style={{
              textAlign: "left",
              cursor: "pointer",
              background: activeTab === "quote" ? "var(--bg-card-hover)" : "var(--bg-surface)",
              borderColor: activeTab === "quote" ? "var(--brand-electric)" : "var(--border-subtle)",
              padding: "20px"
            }}
          >
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Vehicle Quotations</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-white)", margin: "4px 0" }}>{quoteCount}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--brand-electric)" }}>Customer Price Requests</div>
          </button>

          <button
            onClick={() => setActiveTab("parts")}
            className="card"
            style={{
              textAlign: "left",
              cursor: "pointer",
              background: activeTab === "parts" ? "var(--bg-card-hover)" : "var(--bg-surface)",
              borderColor: activeTab === "parts" ? "var(--brand-gold)" : "var(--border-subtle)",
              padding: "20px"
            }}
          >
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Spare Parts Inquiries</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-white)", margin: "4px 0" }}>{partsCount}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--brand-gold)" }}>Garage & Spares Requests</div>
          </button>
        </div>

        {/* Filter Input */}
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ position: "relative", minWidth: "320px", flex: 1 }}>
            <Search size={18} color="var(--text-muted)" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: "42px" }}
              placeholder={`Search ${activeTab} records by applicant, city, phone...`}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
            Showing <strong>{filteredList.length}</strong> record(s)
          </div>
        </div>

        {/* Records Table */}
        <div className="card" style={{ padding: 0, overflowX: "auto" }}>
          {filteredList.length === 0 ? (
            <div style={{ padding: "48px 20px", textAlign: "center", color: "var(--text-muted)" }}>
              No records found for the current filter.
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Ref ID</th>
                  <th>Applicant / Firm</th>
                  <th>Contact Details</th>
                  <th>Location</th>
                  <th>Requirement Details</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span style={{ fontWeight: 700, color: "var(--text-white)", fontFamily: "monospace" }}>{item.id}</span>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Recent"}
                      </div>
                    </td>

                    <td>
                      <strong style={{ color: "var(--text-white)", display: "block" }}>{item.applicantName}</strong>
                      {item.businessName && (
                        <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{item.businessName}</div>
                      )}
                      {item.businessType && (
                        <span className="badge badge-subtle" style={{ fontSize: "0.7rem", marginTop: "4px" }}>
                          {item.businessType}
                        </span>
                      )}
                    </td>

                    <td>
                      <div style={{ color: "var(--brand-electric)", fontWeight: 600 }}>{item.phone}</div>
                      {item.email && (
                        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{item.email}</div>
                      )}
                    </td>

                    <td>
                      <div>{item.city || "—"}</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{item.state || "Delhi"}</div>
                    </td>

                    <td>
                      {item.modelName && (
                        <div style={{ fontWeight: 600, color: "var(--text-white)" }}>Model: {item.modelName}</div>
                      )}
                      {item.partName && (
                        <div style={{ fontWeight: 600, color: "var(--text-white)" }}>Part: {item.partName}</div>
                      )}
                      {item.territory && (
                        <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Territory: {item.territory}</div>
                      )}
                      {item.comments && (
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", maxWidth: "240px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={item.comments}>
                          "{item.comments}"
                        </div>
                      )}
                    </td>

                    <td>
                      <select
                        value={item.status || "Pending"}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className="form-select"
                        style={{ padding: "4px 8px", fontSize: "0.8rem", width: "auto" }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Approved">Approved</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(item.id)}
                        style={{ background: "transparent", border: "none", color: "#F87171", cursor: "pointer", padding: "4px" }}
                        title="Delete record"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
