import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaInternetExplorer,
  FaFacebook,
} from "react-icons/fa";
import "./Footer.css";
import Logo from "../../assets/TCJIT.png";

function Footer() {
  return (
    <div className="footer" style={{ position: "relative" }}>
      <footer>
        <ul class="icons">
          <li>
            <img src={Logo} alt="logo" style={{ width: "150px" }} />
          </li>
        </ul>
        <ul class="icons">
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInternetExplorer />
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#sponsor">Sponsors</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
        <ul class="menu">
          <li>
            <a href="mailto:jithack@jyothyit.ac.in">jithack@jyothyit.ac.in</a>
          </li>
        </ul>
        <div class="footer-copyright">
          <p>Copyright @ 2022 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
