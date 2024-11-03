import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import Carousel from "./Carousel";
import Button from "../Shared/Button";
import ArrowDown from "../Shared/ArrowDown";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Markéta Synková</h1>
        <p className="hero-subtitle">Fotografka</p>
        <p className="hero-technologies">
          <ReactTyped
            strings={["Portréty", "Rodiny a děti", "Svatební focení"]}
            typeSpeed={100}
            loop
          />
        </p>

        <Button text={"Moje práce"} href={"#"} />
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
