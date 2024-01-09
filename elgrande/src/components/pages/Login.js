import React from "react";
import "../../App.css";
import "./Login.css";
import { ButtonLogin } from "../button/ButtonLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="loginWrapper">
            <ul className="loginItems">
              <div className="loginContainerLogin2">
                <li className="loginItemLogin2">
                  <img src="./picture/login.png" alt="login to web app photo" />
                </li>
              </div>
              <div className="loginContainerLogin2">
                <h1 className="titleLogin">WITAJ PONOWNIE!</h1>
                <div className="loginItemContainer">
                  <li className="loginItem">
                    <div className="containerFormLogin">
                      <p className="personalDataLogin">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                        ></input>
                        <p className="iconRegister">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </p>
                      </p>
                      <p className="personalDataLogin">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Hasło"
                        ></input>
                        <p className="iconRegister">
                          <FontAwesomeIcon icon={faLock} />
                        </p>
                        <p className="iconRegisterEye">
                          <FontAwesomeIcon icon={faEyeSlash} />
                        </p>
                      </p>
                      <p className="forgetPssord">Zapomniałeś hasło?</p>

                      <div className="buttonContainerLogin">
                        <ButtonLogin buttonStyle="btn--outline--accept" />
                      </div>
                      <p className="signUptext">Nie masz konta?</p>
                      <p className="signUpLink">Zapisz się</p>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
