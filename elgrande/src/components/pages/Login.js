import * as React from "react";
import "../../App.css";
import "./Login.css";
import "../button/Button.css";

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

  render() {
    const { passwordVisible } = this.state;

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
                <div className="loginContainerLogin2">
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
                          <div className="forgetPssord">Zapomniałeś hasło?</div>

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
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
