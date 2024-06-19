import React, { useState } from "react";
import "./Contact.css";
import theme from "../../Assets/theme_pattern.svg";
import call from "../../Assets/call_icon.svg";
import location from "../../Assets/location_icon.svg";
import mail from "../../Assets/mail_icon.svg";
function Contact() {
  const [result, setResult] = useState(""); // Define state for result
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setResult("Sending...."); // Update state to show sending status

    // Create FormData object from the form element
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    // Send POST request to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    // Parse response as JSON
    const data = await response.json();

    // Handle response based on success or error
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset form fields
    } else {
      console.log("Error", data);
      setResult(data.message); // Update state with error message
    }
    alert(result)
  };
  return (
    <div id="contact" className="contact">
      {/* Contact Title Section */}
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>

      {/* Contact Details and Form Section */}
      <div className="contact-section">
        {/* Left Section: Contact Details */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            pariatur deserunt
          </p>
          <div className="contact-details">
            {/* Contact Detail: Email */}
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>abrehman4163@gmail.com</p>
            </div>
            {/* Contact Detail: Phone */}
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>03024917965</p>
            </div>
            {/* Contact Detail: Location */}
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>CA, United State Okara</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="message">Write your Message</label>
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
