import React from "react";

import "./About.css";
import profileImg from "../../Assets/profile.jpeg";
import theme from "../../Assets/theme_pattern.svg";
import { BiCheck } from "react-icons/bi";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="Abdul Rehman" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am Abdul Rehman, a MERN stack developer currently pursuing a BS
              in Computer Science from NUST University. With a solid foundation in
              web development, I specialise in creating dynamic and responsive web
              applications.
            </p>
            <p>
              My journey in web development started a year ago, and I have since
              honed my skills in various technologies, striving to deliver
              efficient and scalable solutions. I am passionate about coding and
              continuously learning new technologies to stay updated in this
              ever-evolving field.
            </p>
          </div>
          <h2 className="SkillsHeading">Skills I Have</h2>

          <div className="about-skills">
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Git & GitHub</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Express</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Node JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>MongoDB</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
