// Range Automobiles Pvt. Ltd. - Local-First Lead & Content Storage Service
// Handles quotation requests, dealership applications, and parts inquiries.
// Ensures data is stored persistently in the browser and ready to forward to external webhook/CRM if configured.

const STORAGE_KEYS = {
  ENQUIRIES: "range_enquiries_v1",
  CUSTOM_PARTS: "range_custom_parts_v1",
  ADMIN_SESSION: "range_admin_session_v1"
};

// Initial sample inquiries for demonstration so admin panel is immediately testable
const INITIAL_DEMO_ENQUIRIES = [
  {
    id: "ENQ-1001",
    type: "dealership",
    applicantName: "Rajesh Sharma",
    businessName: "Sharma EV Ventures",
    phone: "+91 98101 23456",
    email: "rajesh@sharmaev.com",
    state: "Uttar Pradesh",
    city: "Ghaziabad",
    businessType: "Automobile Dealership (Existing)",
    territory: "Western UP (Ghaziabad & Meerut)",
    comments: "Interested in setting up a 3S showroom for Sky Star passenger and cargo e-rickshaws.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: "Pending"
  },
  {
    id: "ENQ-1002",
    type: "quote",
    applicantName: "Sunil Kumar",
    phone: "+91 98234 56789",
    email: "sunil.k@gmail.com",
    modelName: "Sky Star Li",
    modelCategory: "Passenger E-Rickshaw",
    batteryPreference: "Lithium Battery Variant",
    state: "Delhi",
    city: "Kirari Suleman Nagar",
    comments: "Need pricing for 5 units for fleet passenger operations in West Delhi.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    status: "Contacted"
  },
  {
    id: "ENQ-1003",
    type: "parts",
    applicantName: "Amit Verma",
    phone: "+91 99345 67890",
    email: "amit.spares@autocare.in",
    partName: "CY Gold Intelligent Motor Controller",
    quantity: "10 pcs",
    state: "Haryana",
    city: "Faridabad",
    comments: "Request bulk trade discount for authorized repair garage.",
    createdAt: new Date().toISOString(),
    status: "Pending"
  }
];

export const getEnquiries = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_DEMO_ENQUIRIES));
      return INITIAL_DEMO_ENQUIRIES;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to read inquiries from storage", e);
    return INITIAL_DEMO_ENQUIRIES;
  }
};

export const saveEnquiry = (enquiryData) => {
  try {
    const list = getEnquiries();
    const newEnquiry = {
      ...enquiryData,
      id: "ENQ-" + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toISOString(),
      status: "Pending"
    };
    const updated = [newEnquiry, ...list];
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));

    // If an external webhook is configured in .env, forward asynchronously
    const webhookUrl = import.meta.env.VITE_ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEnquiry)
      }).catch((err) => console.warn("External enquiry forwarding failed:", err));
    }

    return { success: true, enquiry: newEnquiry };
  } catch (e) {
    console.error("Failed to save enquiry", e);
    return { success: false, error: e.message };
  }
};

export const updateEnquiryStatus = (id, newStatus) => {
  try {
    const list = getEnquiries();
    const updated = list.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error("Failed to update status", e);
    return false;
  }
};

export const deleteEnquiry = (id) => {
  try {
    const list = getEnquiries();
    const updated = list.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    return true;
  } catch (e) {
    console.error("Failed to delete enquiry", e);
    return false;
  }
};

// Admin authentication helpers
export const isAdminAuthenticated = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === "true";
  } catch {
    return false;
  }
};

export const authenticateAdmin = (pin) => {
  // Safe default demonstration PIN for portal preview
  if (pin === "range2026" || pin === "admin123") {
    localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, "true");
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
};
