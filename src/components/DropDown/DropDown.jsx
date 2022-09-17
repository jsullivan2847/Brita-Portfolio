import React from "react";
import { Link } from "react-router-dom";
import Close from "./Close";
import "./DropDown.css";

export default function DropDown({ color, handleClick }) {

  return (
    <>
      <div className="drop-down">
        <Close handleClick={handleClick} color={color}/>
        <div className="links">
        <Link to='/'>
                <p className="page-link special">Home</p>
            </Link>
            <Link to='/Corsets'>
                <p className=" page-link special">Corsets</p>
            </Link>
            <Link to='/Projects'>
                <p className="page-link special">Projects</p>
            </Link>
            <Link to='/Professional'>
                <p className="page-link special">Professional</p>
            </Link>
        </div>
      </div>
    </>
  );
}
