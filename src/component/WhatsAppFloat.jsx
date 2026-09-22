import React from "react";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  const phoneNumber = "256761648679"; // replace with Nyumba WhatsApp number
  const message = "Hello Nyumba Dynamics, I would like to know more about your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3 8.8 3 15.94c0 2.52.74 4.98 2.12 7.08L3.73 28l5.12-1.34a13.1 13.1 0 0 0 7.18 2.05h.01C23.22 28.71 29 22.9 29 15.76 29 8.62 23.22 3 16.04 3Zm7.62 18.28c-.32.9-1.88 1.72-2.6 1.82-.66.1-1.5.14-2.42-.15-.56-.18-1.28-.42-2.2-.82-3.86-1.66-6.38-5.54-6.58-5.8-.2-.26-1.57-2.08-1.57-3.98 0-1.9.99-2.83 1.34-3.22.35-.39.77-.49 1.03-.49h.74c.24 0 .56-.09.88.67.32.78 1.1 2.68 1.2 2.88.1.19.16.42.03.68-.13.26-.2.42-.39.65-.2.23-.41.51-.58.68-.2.2-.4.41-.17.8.23.39 1.02 1.67 2.18 2.7 1.5 1.33 2.76 1.74 3.15 1.94.39.2.62.16.84-.1.23-.26.97-1.13 1.23-1.52.26-.39.52-.32.87-.19.36.13 2.26 1.06 2.65 1.26.39.2.65.29.74.45.1.16.1.94-.22 1.84Z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
