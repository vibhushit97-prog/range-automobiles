import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { QuoteModal } from "./components/QuoteModal";
import { BrochureModal } from "./components/BrochureModal";
import { PartsInquiryModal } from "./components/PartsInquiryModal";

// Pages
import { HomePage } from "./pages/HomePage";
import { PassengerPage } from "./pages/PassengerPage";
import { LoaderPage } from "./pages/LoaderPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { SparePartsPage } from "./pages/SparePartsPage";
import { AboutPage } from "./pages/AboutPage";
import { ManufacturingPage } from "./pages/ManufacturingPage";
import { DealershipPage } from "./pages/DealershipPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { AdminPage } from "./pages/AdminPage";

export default function App() {
  // Hash-based routing to ensure 100% compatibility with static hosting (Vercel, Netlify, GitHub Pages)
  const getInitialRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (!hash) return "home";
    if (hash.startsWith("products/")) {
      return `product-${hash.replace("products/", "")}`;
    }
    return hash;
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);
  
  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialModel, setQuoteInitialModel] = useState("sky-star");

  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureProductName, setBrochureProductName] = useState("Sky Star");

  const [partsModalOpen, setPartsModalOpen] = useState(false);
  const [selectedPartForInquiry, setSelectedPartForInquiry] = useState(null);

  // Sync route with window hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      if (!hash) {
        setCurrentRoute("home");
      } else if (hash.startsWith("products/")) {
        setCurrentRoute(`product-${hash.replace("products/", "")}`);
      } else {
        setCurrentRoute(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update Page Title and Scroll to Top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const titles = {
      "home": "Range Automobiles Pvt. Ltd. | Indian Passenger & Loader E-Rickshaw Manufacturer",
      "passenger": "Passenger E-Rickshaws | Sky Star Series | Range Automobiles",
      "loader": "Loader E-Rickshaws | Sky Star Ldr (310 kg Payload) | Range Automobiles",
      "product-sky-star": "Sky Star Passenger E-Rickshaw Specifications | Range Automobiles",
      "product-sky-star-li": "Sky Star Li Fast-Charging Lithium E-Rickshaw | Range Automobiles",
      "product-sky-star-ldr": "Sky Star Ldr Cargo Loader E-Rickshaw | Range Automobiles",
      "spare-parts": "Genuine Spare Parts & Assemblies | CY Gold Powertrains | Range Automobiles",
      "about": "About Us | Electric Vehicle Manufacturing & Credibility | Range Automobiles",
      "manufacturing": "Manufacturing & Assembly Facility | Faridabad Plant | Range Automobiles",
      "dealership": "Become an Authorized Dealer / Distributor | Range Automobiles",
      "contact": "Contact Us | Faridabad Factory & New Delhi Corporate Office | Range Automobiles",
      "privacy-policy": "Privacy Policy | Range Automobiles Pvt. Ltd.",
      "terms": "Terms & Conditions | Range Automobiles Pvt. Ltd.",
      "admin": "Lead Operations Desk & Dealer Portal | Range Automobiles"
    };

    document.title = titles[currentRoute] || "Range Automobiles Pvt. Ltd. | Electric Rickshaws";
  }, [currentRoute]);

  const navigate = (route) => {
    if (route.startsWith("product-")) {
      const prodId = route.replace("product-", "");
      window.location.hash = `/products/${prodId}`;
    } else if (route === "home") {
      window.location.hash = "/";
    } else {
      window.location.hash = `/${route}`;
    }
    setCurrentRoute(route);
  };

  const handleOpenQuoteModal = (modelId = "sky-star") => {
    setQuoteInitialModel(modelId);
    setQuoteModalOpen(true);
  };

  const handleOpenBrochureModal = (productName = "Range Lineup") => {
    setBrochureProductName(productName);
    setBrochureModalOpen(true);
  };

  const handleOpenPartsModal = (part) => {
    setSelectedPartForInquiry(part);
    setPartsModalOpen(true);
  };

  // Determine active vehicle model for contextual WhatsApp messaging
  let contextualVehicle = null;
  if (currentRoute === "product-sky-star") contextualVehicle = "Sky Star";
  if (currentRoute === "product-sky-star-li") contextualVehicle = "Sky Star Li";
  if (currentRoute === "product-sky-star-ldr") contextualVehicle = "Sky Star Ldr";

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case "home":
        return <HomePage navigate={navigate} onOpenQuoteModal={handleOpenQuoteModal} />;
      case "passenger":
        return <PassengerPage navigate={navigate} onOpenQuoteModal={handleOpenQuoteModal} />;
      case "loader":
        return <LoaderPage navigate={navigate} onOpenQuoteModal={handleOpenQuoteModal} />;
      case "product-sky-star":
        return (
          <ProductDetailPage
            productId="sky-star"
            navigate={navigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        );
      case "product-sky-star-li":
        return (
          <ProductDetailPage
            productId="sky-star-li"
            navigate={navigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        );
      case "product-sky-star-ldr":
        return (
          <ProductDetailPage
            productId="sky-star-ldr"
            navigate={navigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenBrochureModal={handleOpenBrochureModal}
          />
        );
      case "spare-parts":
        return (
          <SparePartsPage
            navigate={navigate}
            onOpenPartsModal={handleOpenPartsModal}
          />
        );
      case "about":
        return <AboutPage navigate={navigate} />;
      case "manufacturing":
        return (
          <ManufacturingPage
            navigate={navigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case "dealership":
        return <DealershipPage navigate={navigate} />;
      case "contact":
        return <ContactPage navigate={navigate} />;
      case "privacy-policy":
        return <LegalPage type="privacy" navigate={navigate} />;
      case "terms":
        return <LegalPage type="terms" navigate={navigate} />;
      case "admin":
        return <AdminPage navigate={navigate} />;
      default:
        return (
          <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", textAlign: "center" }}>
            <div className="container" style={{ maxWidth: "600px" }}>
              <h1 style={{ fontSize: "3rem", marginBottom: "16px", color: "var(--brand-green)" }}>404</h1>
              <h2 style={{ marginBottom: "12px" }}>Page Not Found</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                The automotive page you are trying to visit does not exist or has been relocated.
              </p>
              <button onClick={() => navigate("home")} className="btn btn-primary">
                Return to Homepage
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-root">
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <main id="main-content" role="main">
        {renderCurrentPage()}
      </main>

      <Footer navigate={navigate} />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp selectedModel={contextualVehicle} />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialModelId={quoteInitialModel}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        productName={brochureProductName}
      />

      <PartsInquiryModal
        isOpen={partsModalOpen}
        onClose={() => setPartsModalOpen(false)}
        selectedPart={selectedPartForInquiry}
      />
    </div>
  );
}
