import React, { useEffect } from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Campus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="campus"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
    >
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 1" />
        <img src={gallery_3} alt="Gallery 1" />
        <img src={gallery_4} alt="Gallery 1" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
