import React from "react";
import "./Footer.css";
import SocialBox from "../Shared/SocialBox";

function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-logo">
          <img src="/assets/logo/logo_signature.png" alt="" />
        </div>
        <SocialBox />
        <div className="footer-text">
          &copy; 2024 Marketa Synkova Fotografka
        </div>
      </div>
    </footer>
  );
}

export default Footer;
