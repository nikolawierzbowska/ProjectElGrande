import React from "react";
import "../../App.css";
import "./SignUp.css";
import { ButtonAccept } from "../button/ButtonAccept";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  return (
    <>
      <div className="signUp">
        <div className="signUpsContainer">
          <div className="signUpWrapper">
            <ul className="signUpItems">
              <div className="signUpContainer">
                <li className="signUpItem">
                  <div className="containerFormRegister">
                    <p className="personalData">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Imię"
                      ></input>
                      <p className="iconRegister">
                        <FontAwesomeIcon icon={faUser} />
                      </p>
                    </p>
                    <p className="personalData">
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Nazwisko"
                      ></input>
                      <p className="iconRegister">
                        <FontAwesomeIcon icon={faUser} />
                      </p>
                    </p>
                    <p className="personalData">
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
                    <p className="personalData">
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Telefon"
                      ></input>
                      <p className="iconRegister">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                      </p>
                    </p>
                    <p className="personalData">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Hasło"
                      ></input>
                      <p className="iconRegister">
                        <FontAwesomeIcon icon={faLock} />
                      </p>
                    </p>
                    <p className="personalData">
                      <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        placeholder="Powtórz hasło"
                      ></input>
                      <p className="iconRegister">
                        <FontAwesomeIcon icon={faLock} />
                      </p>
                    </p>
                    <div className="buttonContainerSignUp">
                      <ButtonAccept buttonStyle="btn--outline--accept" />
                    </div>
                  </div>
                </li>
              </div>
              <div className="signUpContainerRegister2">
                <h1 className="title">Zapisz się na kurs!</h1>
                <li className="signUpItemRegister2">
                  <img
                    src="./picture/register.png"
                    alt="register to web app photo"
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
