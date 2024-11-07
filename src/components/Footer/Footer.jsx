import React from "react";
import "./Footer.css";
import SocialBox from "../Shared/SocialBox";

function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-logo">
          <img src="/assets/logo/logo_signature.png" width={500} alt="" />
        </div>
        <div className="footer-text">
          &copy; 2024 Marketa Synkova Fotografka
        </div>
        <SocialBox />
      </div>
    </footer>
  );
}

export default Footer;
