import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline-update"];
const NAME = ["Edytuj"];

export const ButtonUpdate = ({ children, onClick, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="#">
      <button
        type="submit"
        className={`btn ${checkButtonStyle} `}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </Link>
  );
};
export default ButtonUpdate;
