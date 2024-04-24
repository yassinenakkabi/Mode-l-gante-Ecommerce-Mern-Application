import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Good Time !</h1>
        <div>
          <div className="hero-hand-icon">
            <h2>-25%</h2>
          </div>
          <p>sur la Mode & Chaussures</p>
        </div>
        <div className="hero-latest-btn">
          <div>Nouvelle Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
