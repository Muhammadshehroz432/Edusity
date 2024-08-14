import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Menu_icon from "../../assets/menu-icon.png";
const Navbar = () => {
  const [Sticky, setSticky] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [Mobilemenu, setMobilemenu] = useState(false);

  const Togglemenu = () => {
    {
      Mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
    }
  };

  return (
    <div>
      <nav className={`container ${Sticky ? "dark-nav" : ""} `}>
        <img src={logo} alt="logo-img" className="logo" />

        <ul className={Mobilemenu ? "" : "hide-mobile-menu"}>
          <li>
            {" "}
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About us{" "}
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <button className="btn">
              <Link to="contacts" smooth={true} offset={-260} duration={500}>
                Contact us
              </Link>
            </button>
          </li>
        </ul>
        <img
          src={Menu_icon}
          alt="menu-icon"
          className="menu-icon"
          onClick={Togglemenu}
        />
      </nav>
    </div>
  );
};

export default Navbar;
