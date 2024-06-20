import React from "react";

import "./About.css";
import profileImg from "../../Assets/profile.jpeg";
import theme from "../../Assets/theme_pattern.svg";
import { BiCheck } from "react-icons/bi";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="profileImg" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              numquam ipsa perferendis quae, facilis doloremque expedita
              explicabo at magni? Reiciendis amet odit nesciunt qui. Sit soluta
              assumenda ipsam commodi temporibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae, delectus. Maiores, odio. Provident assumenda
              consectetur autem veniam dicta fuga eius voluptate non possimus,
              libero aut, pariatur, voluptatibus unde nihil fugit.
            </p>
          </div>
          <h2 className="SkillsHeading">Skills I have</h2>

          <div className="about-skills">
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>HTMLL & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Git & Github</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Express </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Node Js </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <BiCheck className="service__list-icon" />
              <p>Mongo DB</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
