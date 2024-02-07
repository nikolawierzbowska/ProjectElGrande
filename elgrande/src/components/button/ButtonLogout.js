import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline-logout"];
const NAME = ["WYLOGUJ"];

const ButtonLogout = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="/">
      <button className={`btn ${checkButtonStyle}`}>{buttonName}</button>
    </Link>
  );
};
export default ButtonLogout;
