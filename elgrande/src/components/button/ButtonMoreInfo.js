import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline"];
const NAME = ["Więcej informacji"];

export const ButtonMoreInfo = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="/more-info">
      <button className={`btn ${checkButtonStyle} `} onClick={onClick}>
        {buttonName}
      </button>
    </Link>
  );
};

export default ButtonMoreInfo;
