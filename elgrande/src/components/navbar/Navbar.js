import React, { useState, useEffect } from "react";
import { ButtonSignUp } from "../button/ButtonSignUp";
import { ButtonLogin } from "../button/ButtonLogin";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 820) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu}>
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
            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                ZALOGUJ
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                ZAPISZ SIĘ
              </Link>
            </li>
          </ul>
          {button && <ButtonLogin />}

          {button && <ButtonSignUp />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
