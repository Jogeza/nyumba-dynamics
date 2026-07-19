import { useState, useEffect } from "react";
import "./WhatsAppWidget.css";
import LogoSvg from "../assets/images/svg/nyumba-dynamics-logo.svg";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showBubble && !open && (
        <div className="wa-bubble">
          👋 Need Help?
        </div>
      )}

      {open && (
        <div className="wa-chat-box">

          <div className="wa-header">

            <img
              src={LogoSvg}
              alt="Nyumba Dynamics"
            />

            <div>
              <h4>Nyumba Dynamics</h4>
              <p>Typically replies within minutes</p>
            </div>

            <button onClick={() => setOpen(false)}>
              ✕
            </button>

          </div>

          <div className="wa-body">

            <p>
              👋 Hello!
            </p>

            <p>
              Welcome to Nyumba Dynamics.
            </p>

            <p>
              How can we help you today?
            </p>

          </div>

          <a
            href="https://wa.me/2567XXXXXXXX?text=Hello%20Nyumba%20Dynamics"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-chat-btn"
          >
            Chat on WhatsApp
          </a>

        </div>
      )}

      <button
        className="wa-floating-btn"
        onClick={() => setOpen(!open)}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </button>

    </>
  );
}