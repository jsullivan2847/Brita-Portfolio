import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import "./Hamburger.css";

export default function Hamburger({ color }) {
  const [active, setActive] = useState();

  function handleClick() {
    if (active) {
      setActive(false);
    } else setActive(true);
  }

  return (
    <div className="container">
      {active ? (
        <DropDown handleClick={handleClick} color={color} />
      ) : (
        <svg
          onClick={handleClick}
          className="hamburger special"
          viewBox="0 0 166 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_19)">
            <line
              x1="5"
              y1="5"
              x2="161"
              y2="5"
              stroke={color}
              stroke-width="20"
              stroke-linecap="round"
            />
            <line
              x1="5"
              y1="51"
              x2="161"
              y2="51"
              stroke={color}
              stroke-width="15"
              stroke-linecap="round"
            />
            <line
              x1="5"
              y1="97"
              x2="161"
              y2="97"
              stroke={color}
              stroke-width="20"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_19">
              <rect width="166" height="102" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
}
