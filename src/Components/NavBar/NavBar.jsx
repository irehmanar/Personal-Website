import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Import AnchorLink after installing the package

import './NavBar.css';
import logo from '../../Assets/logo.svg';
import underLine from '../../Assets/nav_underline.svg';

function NavBar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navBar">
      <img src={logo} alt='Abdul Rehman' className="logo"/>

      <ul className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underLine} alt="underline" className="underline"/>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underLine} alt="underline" className="underline"/>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underLine} alt="underline" className="underline"/>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underLine} alt="underline" className="underline"/>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underLine} alt="underline" className="underline"/>}
        </li>
      </ul>

      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
            Contact with me
          </AnchorLink></div>
    </div>
  );
}

export default NavBar;
