import React from "react";

import "./style.scss";

const Footer = () => {
  //ecrire le code ici
  return (
    <div className="footer">
      <h3 className="footer__title">Me contacter</h3>
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__li">
            <a
              href="https://twitter.com/Yan_Coquoz"
              rel="noreferre"
              target="_blank"
            >
              <span className="fab fa-twitter"></span>
            </a>
          </li>
          <li className="footer__li">
            <a
              href="https://www.linkedin.com/in/yan-coquoz-41081b194/"
              rel="noreferre"
              target="_blank"
            >
              <span className="fab fa-linkedin"></span>
            </a>
          </li>
          <li className="footer__li">
            <a
              href="https://github.com/Yan-Coquoz"
              rel="noreferre"
              target="_blank"
            >
              <span className="fab fa-github"></span>
            </a>
          </li>
          <li className="footer__li">
            <a href="tel:+33615999614" rel="noreferrer">
              <span className="fab fa-whatsapp"></span>
            </a>
          </li>
          <li className="footer__li">
            <a href="mailto:yan.coquoz@gmail.com">
              <span className="far fa-paper-plane"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
