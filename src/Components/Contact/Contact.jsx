import React, { useEffect } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c656fdc5-2256-4868-b4cc-738f0ee54853");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contacts" data-aos="fade-up">
      <div className="contact-col">
        <h3>
          Send a message <img src={msg_icon} alt="msg-icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below.your feedback,question, and suggestion are important
          to us as we strive to provide exceptional service to our university
          Community
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            alex.greenwood43@mailhaven.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 323-857-4629
          </li>
          <li>
            <img src={location_icon} alt="" />
            782 Maplewood Drive, Apt 4B, Greenfield, IN 46140, USA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your Mobile number here"
            required
          />
          <label>Enter your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
          ></textarea>
          <button type="sumbit" className=" btn dark-btn">
            Sumbit now
            <img src={white_arrow} alt="white-arrow" className="white-arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
