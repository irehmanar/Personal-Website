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
      body: formData,
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
    alert(result);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me via the form or contact details below.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="email icon" />
              <p>abrehman4163@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="phone icon" />
              <p>03024917963</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="location icon" />
              <p>NUST H-12 Islamabad</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label htmlFor="message">Write your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
