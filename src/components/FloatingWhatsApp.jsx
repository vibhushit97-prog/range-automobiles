import React from "react";
import { COMPANY } from "../config/company";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp({ selectedModel }) {
  // Construct context-specific prefilled message
  const getWhatsAppUrl = () => {
    const rawNumber = COMPANY.contact.whatsappNumber.replace(/[^0-9]/g, "");
    let text = "Hello Range Automobiles Pvt. Ltd., I am interested in learning more about your electric rickshaws.";
    
    if (selectedModel) {
      text = `Hello Range Automobiles, I would like to request vehicle pricing and technical specifications for the ${selectedModel} model.`;
    }
    
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Range Automobiles on WhatsApp"
      title="Chat on WhatsApp with Range Automobiles"
    >
      <span className="whatsapp-pulse"></span>
      <MessageCircle size={22} fill="#FFFFFF" color="#25D366" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
