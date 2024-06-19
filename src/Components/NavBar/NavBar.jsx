import React from "react";

import "./NavBar.css";
// import Logo from '../../Assets/Logo.png'
function NavBar() {
  return (
    <div className="navBar">
      {/* <img src={Logo} alt='Abdul Rehman'/> */}

      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect with me</div>
    </div>
  );
}

export default NavBar;
