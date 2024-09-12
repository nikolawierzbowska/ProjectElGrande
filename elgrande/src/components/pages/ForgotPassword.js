import * as React from "react";
import "../../App.css";
import "./Login.css";
import "../button/Button.css";

import { ButtonSignUp } from "../button/ButtonSignUp";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      sendEmail: props.sendEmail,
    };
  }

  onSubmitEmail = (e) => {
    this.state.onLogin(e, this.state.email);
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
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
                  <div className="forgotPasswordContainer">
                    <div className="loginWrapper">
                      <ul className="loginItems">
                        <div className="loginForgotPassword">
                          <h1 className="titleForgorPassword">
                            Zapomniałeś hasło?
                          </h1>
                          <h3 className="forgorPasswordText">
                            Podaj email i zresetuj hasło!
                          </h3>
                          <div className="loginItemContainer">
                            <li className="loginItem">
                              <div className="containerFormLogin">
                                <form onSubmit={this.onSubmitEmail}>
                                  <div className="personalDataLogin">
                                    <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      placeholder="Email"
                                      onChange={this.onChangeHandler}
                                      required
                                    ></input>
                                    <div className="iconLogin"></div>
                                  </div>

                                  <div className="buttonContainerLogin">
                                    <button
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
      </>
    );
  }
}

export default ForgotPassword;
