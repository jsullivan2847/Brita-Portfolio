import React from "react";
import Close from "./Close";
import "./DropDown.css";

export default function DropDown({ color }) {

  return (
    <>
      <div className="drop-down">
        <Close color={color}/>
      </div>
    </>
  );
}
