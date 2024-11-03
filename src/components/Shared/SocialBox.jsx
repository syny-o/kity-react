import React from "react";
import "./SocialBox.css";

function SocialBox() {
  return (
    <div className="social">
      <div className="social-image-container">
        <img src="/assets/social/mail.png" alt="" />
      </div>
      <div className="social-image-container">
        <img src="/assets/social/github.png" alt="" />
      </div>
      <div className="social-image-container">
        <img src="/assets/social/linkedin.png" alt="" />
      </div>
    </div>
  );
}

export default SocialBox;
