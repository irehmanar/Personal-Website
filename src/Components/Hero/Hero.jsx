import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import AnchorLink after installing the package
import "./Hero.css";
import profile from "../../Assets/profilePic.jpg";
import CV from "../../Assets/CV_AbdulRehman.pdf";
function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="profile" />
      <h1>
        <span>I am Abdul Rehman,</span>frontend Developer from Pakistan.
      </h1>
      <p>I am frontend Developer from Islamabad with 1 year of exprience</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={CV} download className="btn">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
