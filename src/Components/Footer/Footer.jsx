import React from "react";
import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <p>
        <FaRegCopyright /> 2024 Edusity . All right reserved .
      </p>
      <ul>
        <li>Term of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
