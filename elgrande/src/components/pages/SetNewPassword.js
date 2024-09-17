import React, { useState } from "react";
import "../../App.css";
import "./Login.css";
import "./SignUp.css";
import "../button/Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function SetNewPassword() {
  const email = window.localStorage.getItem("email");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleRepeated, setPasswordVisibleRepeated] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [repeatedPasswordFocused, setRepeatedPasswordFocused] = useState(false);

  const handleFocus = (inputName) => {
    if (inputName === "password") {
      setPasswordFocused(true);
    } else if (inputName === "repeatPassword") {
      setRepeatedPasswordFocused(true);
    }
  };

  const handleBlur = (inputName) => {
    if (inputName === "password") {
      setPasswordFocused(false);
    } else if (inputName === "repeatPassword") {
      setRepeatedPasswordFocused(false);
    }
  };

  const onSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSetRepeatPassword = (event) => {
    setRepeatPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const togglePasswordVisibilityRepeated = () => {
    setPasswordVisibleRepeated((prevState) => !prevState);
  };

  const onSubmitNewPassword = (e) => {
    e.preventDefault();
    onSubmitPassword(email, password, repeatPassword);
  };

  const onSubmitPassword = (email, password, repeatPassword) => {
    fetch(
      `http://localhost:8080/api/v1/forgotPassword/changePassword/${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, repeatPassword }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("Password has changed");

          setPassword("");
          setRepeatPassword("");
          setError("");

          document.getElementsByClassName("error")[0].textContent = "";

          window.location.href = "/login";
        } else {
          throw new Error("Failed to change Password");
        }
      })
      .catch((error) => {
        console.error("Error during change password:", error);
        setError("Failed to set new Password. Please try again.");
        console.log(error);
      });
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="loginWrapper">
            <ul className="loginItems">
              <div className="loginContainerLogin2">
                <li className="loginItemLogin2">
                  <img src="./picture/login1.png" alt="login to web app" />
                </li>
              </div>
              <div className="forgotPasswordContainer">
                <div className="loginWrapper">
                  <ul className="loginItems">
                    <div className="loginForgotPassword">
                      <h1 className="titleForgorPassword">Ustaw nowe hasło!</h1>
                      <div className="loginItemContainer">
                        <li className="loginItem">
                          <div className="containerFormLogin">
                            <span className="error">{error}</span>
                            <form onSubmit={onSubmitNewPassword}>
                              <div
                                id="newPasswordData"
                                className="personalData"
                              >
                                <input
                                  type={passwordVisible ? "text" : "password"}
                                  id="password"
                                  name="password"
                                  placeholder="Hasło"
                                  onChange={onSetPassword}
                                  onFocus={() => handleFocus("password")}
                                  onBlur={() => handleBlur("password")}
                                  focused={passwordFocused.toString()}
                                  required
                                  pattern="^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$"
                                ></input>

                                <div className="iconRegister">
                                  <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div
                                  className="iconRegisterEye"
                                  onClick={togglePasswordVisibility}
                                >
                                  {!passwordVisible ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                  ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                  )}
                                </div>
                                <span
                                  id="infoNewPassword"
                                  className="infoRegister"
                                >
                                  Min 6 char.,at least 1 number, 1 special char.
                                </span>
                              </div>

                              <div className="personalData">
                                <input
                                  type={
                                    passwordVisibleRepeated
                                      ? "text"
                                      : "password"
                                  }
                                  id="repeatPassword"
                                  name="repeatPassword"
                                  placeholder="Powtórz hasło"
                                  onChange={onSetRepeatPassword}
                                  onFocus={() => handleFocus("repeatPassword")}
                                  onBlur={() => handleBlur("repeatPassword")}
                                  focused={repeatedPasswordFocused.toString()}
                                  required
                                  pattern="^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$"
                                ></input>

                                <div className="iconRegister">
                                  <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div
                                  className="iconRegisterEye"
                                  onClick={togglePasswordVisibilityRepeated}
                                >
                                  {!passwordVisibleRepeated ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                  ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                  )}
                                </div>
                                <span
                                  id="infoNewPassword"
                                  className="infoRegister"
                                >
                                  Passwords don't match!
                                </span>
                              </div>
                              <div className="buttonContainerLogin">
                                <button
                                  id="newPasswordSubmit"
                                  type="submit"
                                  className="btn--outline--accept"
                                >
                                  WYŚLIJ
                                </button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetNewPassword;
