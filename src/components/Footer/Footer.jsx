import React from "react";
import "./Footer.css";
import SocialBox from "../Shared/SocialBox";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/assets/nav/signature.png" alt="logo" className="logo" />
        </div>
        {/* <div className="social">
          <div className="skill-image-container">
            <img src="/assets/social/mail.png" alt="" />
          </div>
          <div className="skill-image-container">
            <img src="/assets/social/github.png" alt="" />
          </div>
          <div className="skill-image-container">
            <img src="/assets/social/linkedin.png" alt="" />
          </div>
        </div> */}
        <SocialBox />
        <div className="footer-contact">
          <p className="project-card-description color-special">Ondrej Synek</p>
          <p className="project-card-description">731 637 722</p>
          <p className="project-card-description">synekjbc@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
