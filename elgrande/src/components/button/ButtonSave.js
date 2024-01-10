import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline"];
const NAME = ["JAK SIĘ ZAPISAĆ?"];
export const ButtonSave = ({ children, type, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="/how-to-sign-up">
      <button className={`btn ${checkButtonStyle} `} onClick={onClick}>
        {buttonName}
      </button>
    </Link>
  );
};
export default ButtonSave;
