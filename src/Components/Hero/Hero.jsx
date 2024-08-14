import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container ">
      <div className="hero-text">
        <h1>We Ensure a Better Education for a better world </h1>
        <p>
          Our Cutting edge Circulum is designed to Empower Student with the
          knowledge , skills and Experiences needed to excel in the dynamic
          feild of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
