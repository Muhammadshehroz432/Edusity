import React, { useEffect, useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const slider = useRef();
  let tx = 0;

  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div
      className="testimonials"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
    >
      <img
        src={next_icon}
        alt="next-btn"
        className="next-btn"
        onClick={slideforward}
      />
      <img
        src={back_icon}
        alt="back-btn"
        className="back-btn"
        onClick={slidebackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <h3>William Spencer</h3>
                <p>Edusity,USA</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                adipisci suscipit earum enim accusamus iste animi unde libero
                expedita quae. Aliquam eligendi obcaecati temporibus dolore
                culpa illo quae porro nisi suscipit, eius omnis illum tempora
                voluptates cum facere eum labore blanditiis molestias odio!
                Molestiae ipsam illum.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user1" />
                <h3>William Spencer</h3>
                <span>Edusity,USA</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                adipisci suscipit earum enim accusamus iste animi unde libero
                expedita quae. Aliquam eligendi obcaecati temporibus dolore
                culpa illo quae porro nisi suscipit, eius omnis illum tempora
                voluptates cum facere eum labore blanditiis molestias odio!
                Molestiae ipsam illum.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user1" />
                <h3>William Spencer</h3>
                <span>Edusity,USA</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                adipisci suscipit earum enim accusamus iste animi unde libero
                expedita quae. Aliquam eligendi obcaecati temporibus dolore
                culpa illo quae porro nisi suscipit, eius omnis illum tempora
                voluptates cum facere eum labore blanditiis molestias odio!
                Molestiae ipsam illum.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user1" />
                <h3>William Spencer</h3>
                <span>Edusity,USA</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                adipisci suscipit earum enim accusamus iste animi unde libero
                expedita quae. Aliquam eligendi obcaecati temporibus dolore
                culpa illo quae porro nisi suscipit, eius omnis illum tempora
                voluptates cum facere eum labore blanditiis molestias odio!
                Molestiae ipsam illum.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
