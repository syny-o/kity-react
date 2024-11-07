import React, { useState } from "react";
import "./Navbar.css";
import SocialBox from "../Shared/SocialBox";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <a className="title" href="/">
        <img className="logo" src="/assets/logo/logo_signature.png" alt="" />
        {/* <SocialBox /> */}
      </a>
      <div className="menu">
        <img
          className="menu-btn"
          src={
            menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={menuOpen ? "menu-items menu-open" : "menu-items"}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Úvod</a>
          </li>
          <li>
            <a href="#experiences">Galerie</a>
          </li>
          <li>
            <a href="#projcets">Ceník</a>
          </li>
          <li>
            <a href="#contact" className="color-special">
              <span className="color-special"></span>Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
