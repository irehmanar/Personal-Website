import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import AnchorLink after installing the package

import "./NavBar.css";
import logo from "../../Assets/logo.svg";
import underLine from "../../Assets/nav_underline.svg";
import menuClose from "../../Assets/menu_close.svg";
import menuOpen from "../../Assets/menu_open.svg";

function NavBar() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  const menuRef = useRef();

  const openMenu = () => {
    console.log("hello");
    menuRef.current.style.right = "0px";
    setOpen(false)

  };
  const closeMenu = () => {
    console.log("hello 12");
    menuRef.current.style.right = "-420px";
    setOpen(true)
  };

  return (
    <div className="navBar">
      <img src={logo} alt="Abdul Rehman" className="logo" />
      {open?<img onClick={openMenu} src={menuOpen} alt="" className="nav-mob-open"/>:''}
      <ul ref={menuRef} className="nav-menu">
        {!open?<img
          onClick={closeMenu}
          src={menuClose}
          alt=""
          className="nav-mob-close"
        />:''}

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && (
            <img src={underLine} alt="underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && (
            <img src={underLine} alt="underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && (
            <img src={underLine} alt="underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && (
            <img src={underLine} alt="underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img src={underLine} alt="underline" className="underline" />
          )}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Contact with me
        </AnchorLink>
      </div>
    </div>
  );
}

export default NavBar;
