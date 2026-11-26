
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "919886038555";

  const message = encodeURIComponent(
    "Hello Mars Power Controls, I would like to know more about your services and solutions."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mars-whatsapp-button"
      aria-label="Chat with Mars Power Controls on WhatsApp"
    >
      <span className="mars-whatsapp-tooltip">
        Chat with us on WhatsApp
      </span>

      <FaWhatsapp className="mars-whatsapp-icon" />

      <span className="mars-whatsapp-pulse"></span>
    </a>
  );
}

export default WhatsAppButton;
