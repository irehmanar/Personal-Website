import React from "react";

import "./Hero.css";
import profile from "../../Assets/profile.jpeg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile} alt="profile" />
      <h1>
        {" "}
        <span>I am Abdul Rehman,</span>frontend Developer from Pakistan.
      </h1>
      <p>I am frontend Developer from Islamabad with 1 year of exprience</p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
