import React, { useState } from "react";
import "./Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        <li>
          <a href="" onClick={() => setClick(false)}>
            Even voorstellen
          </a>
        </li>
        <li>
          <a href="" onClick={() => setClick(false)}>
            Beordelingen
          </a>
        </li>
        <li>
          <a href="" onClick={() => setClick(false)}>
            Duurzaamheid
          </a>
        </li>
      </ul>
    </>
  );
}
