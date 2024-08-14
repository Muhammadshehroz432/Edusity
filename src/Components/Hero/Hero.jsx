import React, { useEffect } from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="hero container ">
      <div className="hero-text" data-aos="fade-right">
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
