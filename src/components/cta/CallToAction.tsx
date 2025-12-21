import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="speech-bubble">
        <p className="cta-text">Send me a message!</p>
        <div className="cta-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="envelope-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div className="envelope-rays">
            <div className="ray ray-1"></div>
            <div className="ray ray-2"></div>
            <div className="ray ray-3"></div>
            <div className="ray ray-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

