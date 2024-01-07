import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline"];
const NAME = ["ZALOGUJ"];

export const ButtonLogin = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="/login">
      <button className={`btn ${checkButtonStyle} `} onClick={onClick}>
        {buttonName}
      </button>
    </Link>
  );
};
export default ButtonLogin;
