import React from "react";
import { FaInstagram, FaLinkedin, FaInternetExplorer } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../assets/tclogo.png";

function Footer() {
  return (
    <div className="footer">
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>
                      Pipeline Rd, near Ravi Shankar Guruji
                      Ashram,Thataguni,Karnataka 560082
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Made with Love</h4>
                    <span>by TechClub of JyothyIT</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <a href="mailto:jithack@jyothyit.ac.in">
                      <span>jithack@jyothyit.ac.in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img src={Logo} class="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div class="footer-text"></div>
                  <div class="footer-social-icon">
                    <span></span>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
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
                      <a href="#faqs">FAQ</a>
                    </li>
                    {/* <li>
                      <a href="#">Team</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2022, All Right Reserved{" "}
                    <a href="https://jithack.netlify.app">JITHack</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="https://instagram.com/techclubjit?igshid=YmMyMTA2M2Y=">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/school/jyothyit/">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="jitit.ac.in">
                        <FaInternetExplorer />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
