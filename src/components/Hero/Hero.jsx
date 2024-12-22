import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import Carousel from "./Carousel";
import Button from "../Shared/Button";
import ArrowDown from "../Shared/ArrowDown";
import SocialBox from "../Shared/SocialBox";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <SocialBox />
        {/* <img className="hero-img" src="/assets/logo/logo_signature.png" alt="" /> */}
        <h1 className="hero-title">Markéta Synková</h1>
        <p className="hero-subtitle">Fotografka</p>
        <p className="hero-technologies">
          <ReactTyped
            strings={["Portréty", "Rodiny a děti", "Svatební focení"]}
            typeSpeed={100}
            loop
          />
        </p>

        <Button text={"Moje práce"} onclick="location.href='#gallery'" />
        {/* <ArrowDown /> */}
      </div>

      <div className="carousel">
        <Carousel />
      </div>

      <div className="top-blur"></div>
      {/* <div className="bottom-blur"></div> */}
    </section>
  );
}

export default Hero;
