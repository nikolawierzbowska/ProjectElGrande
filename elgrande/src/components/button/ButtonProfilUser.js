import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--outline-panel"];
const NAME = ["PROFIL"];

const ButtonProfilUser = ({ children, buttonStyle }) => {
  const checkButtonStyle = buttonStyle || STYLES[0];
  const buttonName = children || NAME[0];

  return (
    <Link to="/user-profile">
      <button className={`btn ${checkButtonStyle}`}>{buttonName}</button>
    </Link>
  );
};
export default ButtonProfilUser;
