import React, { useEffect } from "react";
import "./About.css";
import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = ({ setPlaystate }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const playvideo = () => {
    setPlaystate(true);
  };
  return (
    <div
      className="about"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
    >
      <div className="about-left">
        <img src={about_image} alt="about-img" className="about-img" />
        <img
          src={play_icon}
          alt="play-icon"
          className="play-icon"
          onClick={playvideo}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste
          magni laborum fugit animi? Minus laudantium provident nobis sapiente
          illum! Dolores commodi vitae assumenda aliquid iusto fugit asperiores
          placeat atque ullam molestiae, quibusdam alias delectus amet ipsa
          autem in repellat est excepturi! Culpa aliquam aut tenetur suscipit
          aperiam iste, labore vitae quaerat illum placeat doloremque pariatur
          debitis, est inventore beatae perferendis excepturi. Blanditiis
          maiores corrupti aliquid eveniet excepturi? Voluptatum velit dolor
          nostrum nihil itaque architecto recusandae eum suscipit labore. Ex
          autem in incidunt quas quis earum doloremque optio eos blanditiis, et
          architecto dicta labore corrupti vel quod suscipit dolores.
        </p>
      </div>
    </div>
  );
};

export default About;
