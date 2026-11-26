
import { useState } from "react";
import {
  Sparkles,
  X,
  Send,
  Bot,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

import "./AIFloatingButton.css";

function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const suggestions = [
    "Explore your services",
    "Tell me about fabrication",
    "I need a project quote"
  ];

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // AI API integration will be added later.
    console.log("User message:", message);

    setMessage("");
  };

  return (
    <div className="mars-ai-widget">

      {/* CHAT WINDOW */}

      <div className={`mars-ai-window ${isOpen ? "visible" : ""}`}>

        <div className="mars-ai-header">

          <div className="mars-ai-brand">
            <div className="mars-ai-avatar">
              <Bot size={23} />
              <span className="mars-ai-status"></span>
            </div>

            <div>
              <h3>Mars AI Assistant</h3>
              <p>How can we help you today?</p>
            </div>
          </div>

          <button
            className="mars-ai-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI assistant"
          >
            <X size={21} />
          </button>

        </div>

        <div className="mars-ai-body">

          <div className="mars-ai-welcome">
            <div className="mars-ai-welcome-icon">
              <Sparkles size={26} />
            </div>

            <h4>Hello! Welcome to Mars Power Controls.</h4>

            <p>
              I can help you explore our engineering,
              fabrication and solar solutions.
            </p>
          </div>

          <div className="mars-ai-suggestions">
            <span>QUICK QUESTIONS</span>

            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setMessage(item)}
                className="mars-ai-suggestion"
              >
                {item}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>

        </div>

        <form className="mars-ai-input-area" onSubmit={handleSend}>

          <input
            type="text"
            placeholder="Ask us anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message to AI assistant"
          />

          <button
            type="submit"
            disabled={!message.trim()}
            aria-label="Send message"
          >
            <Send size={19} />
          </button>

        </form>

        <div className="mars-ai-footer-note">
          Powered by Mars Power Controls
        </div>

      </div>

      {/* FLOATING BUTTON */}

      <button
        className={`mars-ai-floating-btn ${isOpen ? "opened" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={27} />
        ) : (
          <Sparkles size={27} />
        )}

        {!isOpen && <span className="mars-ai-pulse"></span>}
      </button>

      {!isOpen && (
        <div className="mars-ai-tooltip">
          <Sparkles size={14} />
          Ask Mars AI
        </div>
      )}

    </div>
  );
}

export default AIFloatingButton;
