import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline"];
const NAME = ["ZAPISZ SIĘ"];
export const ButtonSignUp = ({ children, type, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="/sign-up">
      <button className={`btn ${checkButtonStyle} `} onClick={onClick}>
        {buttonName}
      </button>
    </Link>
  );
};
export default ButtonSignUp;
