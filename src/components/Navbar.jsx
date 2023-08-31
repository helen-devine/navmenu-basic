import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="main-navbar">
        <a className="nav-logo" href="">
          <img src="https://www.interfilter.nl/img/interfilter.svg" alt="" />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div onClick={closeMobileMenu}>Filtratie</div>
          </li>
          <li className="nav-item">
            <div onClick={closeMobileMenu}>Perslucht- & Gasbehandeling</div>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div href="" onClick={closeMobileMenu}>
              Over ons
            </div>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <a href="" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
          <li>
            <button>Button text!</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
