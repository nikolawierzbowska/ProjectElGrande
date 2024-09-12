import * as React from "react";
import "../../App.css";
import "./Login.css";
import "../button/Button.css";
import ForgotPassword from "./ForgotPassword";

import { Link } from "react-router-dom";

import { ButtonSignUp } from "../button/ButtonSignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordVisible: false,
      onLogin: props.onLogin,
      forgotPassword: false,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitLogin = (e) => {
    this.state.onLogin(e, this.state.email, this.state.password);
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  booleanForgotPassword = () => {
    console.log("klik");

    document.getElementsByClassName(
      "loginContainerLogin2Input"
    )[0].textContent = "";
    this.setState({ forgotPassword: true });
    console.log(this.forgotPassword);
  };

  render() {
    const { passwordVisible, forgotPassword } = this.state;

    return (
      <>
        <div className="login">
          <div className="loginContainer">
            <div className="loginWrapper">
              <ul className="loginItems">
                <div className="loginContainerLogin2">
                  <li className="loginItemLogin2">
                    <img src="./picture/login.png" alt="login to web app" />
                  </li>
                </div>
                <div className="loginContainerLogin2Input">
                  <h1 className="titleLogin">MIŁO CIĘ WIDZIEĆ!</h1>
                  <div className="loginItemContainer">
                    <li className="loginItem">
                      <div className="containerFormLogin">
                        <span className="error"></span>
                        <form onSubmit={this.onSubmitLogin}>
                          <div className="personalDataLogin">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email"
                              onChange={this.onChangeHandler}
                              required
                            ></input>
                            <div className="iconLogin">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                          </div>
                          <div className="personalDataLogin">
                            <input
                              type={passwordVisible ? "text" : "password"}
                              id="password"
                              name="password"
                              placeholder="Hasło"
                              onChange={this.onChangeHandler}
                              required
                            ></input>

                            <div className="iconLogin">
                              <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div
                              className="iconLoginEye"
                              onClick={this.togglePasswordVisibility}
                            >
                              {!passwordVisible ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                              ) : (
                                <FontAwesomeIcon icon={faEye} />
                              )}
                            </div>
                          </div>

                          <div className="buttonContainerLogin">
                            <button
                              type="submit"
                              className="btn--outline--accept"
                            >
                              ZALOGUJ
                            </button>
                          </div>
                          <div className="signUptext">Nie masz konta?</div>
                          <div className="signUpLink">
                            <ButtonSignUp buttonStyle="signUpLink">
                              Zapisz się
                            </ButtonSignUp>
                          </div>
                        </form>
                      </div>
                    </li>
                  </div>
                </div>
                <div
                  className="forgetPassword"
                  onClick={this.booleanForgotPassword}
                >
                  {forgotPassword ? <ForgotPassword /> : ""}
                  <Link to="/password">Zapomniałeś hasło? </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
