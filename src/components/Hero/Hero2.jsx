import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero2.css";
import Carousel from "./Carousel";
import Button from "../Shared/Button";
import ArrowDown from "../Shared/ArrowDown";
import SocialBox from "../Shared/SocialBox";

function Hero2() {
  return (
    <section className="hero-container2">
      <div className="hero-content2">
        <SocialBox />
        {/* <img className="hero-img" src="/assets/logo/logo_signature.png" alt="" /> */}
        <h1 className="hero-title">Markéta Synková</h1>
        <p className="hero-subtitle">Fotografka</p>
        <p className="hero-services">
          <ReactTyped
            strings={["Portréty", "Rodiny a děti", "Svatební focení"]}
            typeSpeed={100}
            loop
          />
        </p>

        <Button text={"Moje práce"} href={"#"} />
        {/* <ArrowDown /> */}
      </div>

      <div className="hero-img-container">
        <img className="hero-img" src="/assets/hero/hero.jpg" alt="" />
      </div>
    </section>
  );
}

export default Hero2;
