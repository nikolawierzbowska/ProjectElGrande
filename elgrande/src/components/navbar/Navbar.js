import React, { useState, useEffect } from "react";
import { ButtonSignUp } from "../button/ButtonSignUp";
import { ButtonLogin } from "../button/ButtonLogin";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ButtonLogout from "../button/ButtonLogout";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState({
    loginButton: true,
    signButton: true,
    logoutButton: false,
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      setButton((prevState) => ({
        ...prevState,
        loginButton: false,
        signButton: false,
        logoutButton: true,
      }));
    } else {
      setButton((prevState) => ({
        ...prevState,
        loginButton: true,
        signButton: true,
        logoutButton: false,
      }));
    }
  }, []);

  const handleClickLogoutButton = (e) => {
    setButton({
      loginButton: true,
      signButton: true,
      logoutButton: false,
    });
    localStorage.removeItem("auth_token");

    // window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img className="navbar-logo" src="logo.png" alt="logo MATAMA 5.0" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/opinion"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                OPINIE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/more-info"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ZAKRES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/price" className="nav-links" onClick={closeMobileMenu}>
                CENA
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                KONTAKT
              </Link>
            </li>

            <li className="activeButton">
              <span onClick={closeMobileMenu} id="loginButtonMain">
                {button.loginButton && <ButtonLogin />}
              </span>
            </li>
            <li className="activeButton">
              <span onClick={closeMobileMenu} id="signButtonMain">
                {button.signButton && <ButtonSignUp />}
              </span>
            </li>

            <li className="activeButton">
              <span onClick={handleClickLogoutButton} id="logoutButtonMain">
                {button.logoutButton && <ButtonLogout />}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
