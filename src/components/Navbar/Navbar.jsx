import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

import "./Navbar.css";
// import SocialBox from "../Shared/SocialBox";
import Avatar from "../Shared/Avatar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      {/* <a className="title" href="/">
        <img className="logo" src="/assets/avatar/syny.png" alt="" />
      </a> */}
      {/* <SocialBox /> */}
      <div
        className={menuOpen ? "menu-btn-box menu-btn-box-open" : "menu-btn-box"}
      >
        <img
          className="menu-btn"
          src={
            menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className="menu">
          <Avatar />
          <ul
            // className={menuOpen ? "menu-items menu-open" : "menu-items"}
            className="menu-items"
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#gallery">Galerie</a>
            </li>
            <li>
              <a href="#price-list">Ceník</a>
            </li>
            <li>
              <a href="#testimonials">Reference</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
            <a className="go-to-top" href="#hero">
              <FaAngleUp />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
