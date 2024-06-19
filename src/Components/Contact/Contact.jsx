import React from "react";

import "./Contact.css";
import theme from "../../Assets/theme_pattern.svg";
import call from "../../Assets/call_icon.svg";
import location from "../../Assets/location_icon.svg";
import mail from "../../Assets/mail_icon.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            pariatur deserunt
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>abrehman4163@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>03024917965</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>CA, United State Okara</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name='email'/>
            <label htmlFor="">Write your Message</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button className="contact-submit">
                Submit now
            </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
