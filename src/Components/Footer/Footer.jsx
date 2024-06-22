import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <p className="footer__logo">Abdul Rehman</p>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/irehmanar">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abdul-rehman-aa0b5324b?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTqg0XSN2SOCBUApzBqHnTQ%3D%3D">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;AHM. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
