import React from "react";
import "./Footer.css";
import SocialBox from "../Shared/SocialBox";

function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <SocialBox />
        <div>&copy; 2024 Marketa Synkova Fotografka</div>

        {/* <div>
          <img src="/assets/logo/logo_signature.png" width={300} alt="" />
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
