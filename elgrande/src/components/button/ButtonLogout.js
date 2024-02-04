import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline-logout"];
const NAME = ["WYLOGUJ"];

const ButtonLogout = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    document.getElementById("logoutButtonMain").style.display = "none";
    document.getElementById("loginButtonMain").style.display = "block";
    document.getElementById("signButtonMain").style.display = "block";
  };

  return (
    <Link to="/">
      <button className={`btn ${checkButtonStyle} `} onClick={handleClick}>
        {buttonName}
      </button>
    </Link>
  );
};
export default ButtonLogout;
