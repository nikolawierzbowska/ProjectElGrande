import * as React from "react";

import "../../App.css";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatedPassword: "",
      onRegister: props.onRegister,
      passwordVisible: false,
      passwordVisibleRepeated: false,
      passwordFocused: false,
      repeatedPasswordFocused: false,
      emailFocused: false,
      shouldRedirect: false,
      error: "",
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleFocus = (inputName) => {
    this.setState({ [`${inputName}Focused`]: true });
  };

  handleBlur = (inputName) => {
    this.setState({ [`${inputName}Focused`]: false });
  };

  onSubmitRegister = (e) => {
    this.state.onRegister(
      e,
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.repeatedPassword,
      this.state.error,
      this.setState({ shouldRedirect: true })
    );
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  togglePasswordVisibilityRepeated = () => {
    this.setState((prevState) => ({
      passwordVisibleRepeated: !prevState.passwordVisibleRepeated,
    }));
  };

  render() {
    const {
      passwordVisible,
      passwordVisibleRepeated,
      passwordFocused,
      repeatedPasswordFocused,
      emailFocused,
    } = this.state;

    return (
      <>
        <div className="signUp">
          <div className="signUpsContainer">
            <div className="signUpWrapper">
              <ul className="signUpItems">
                <div className="signUpContainer">
                  <li className="signUpItem">
                    <div className="containerFormRegister">
                      <span className="error">{this.props.error}</span>
                      <form onSubmit={this.onSubmitRegister}>
                        <div className="personalData">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Imię"
                            onChange={this.onChangeHandler}
                            required
                            pattern="^[A-Za][a-z]*$"
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                        </div>
                        <div className="personalData">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Nazwisko"
                            onChange={this.onChangeHandler}
                            required
                            pattern="^[A-Za][a-z]*$"
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                        </div>
                        <div className="personalData">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChangeHandler}
                            onFocus={() => this.handleFocus("email")}
                            onBlur={() => this.handleBlur("email")}
                            focused={emailFocused.toString()}
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                          <span className="infoRegister">
                            It should be a valid email address.
                          </span>
                        </div>

                        <div className="personalData">
                          <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Hasło"
                            onChange={this.onChangeHandler}
                            onFocus={() => this.handleFocus("password")}
                            onBlur={() => this.handleBlur("password")}
                            focused={passwordFocused.toString()}
                            required
                            pattern="^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$"
                          ></input>

                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faLock} />
                          </div>
                          <div
                            className="iconRegisterEye"
                            onClick={this.togglePasswordVisibility}
                          >
                            {!passwordVisible ? (
                              <FontAwesomeIcon icon={faEyeSlash} />
                            ) : (
                              <FontAwesomeIcon icon={faEye} />
                            )}
                          </div>
                          <span className="infoRegister">
                            Min 6 char.,at least 1 number, 1 special char.
                          </span>
                        </div>

                        <div className="personalData">
                          <input
                            type={passwordVisibleRepeated ? "text" : "password"}
                            id="repeatedPassword"
                            name="repeatedPassword"
                            placeholder="Powtórz hasło"
                            onChange={this.onChangeHandler}
                            onFocus={() => this.handleFocus("repeatedPassword")}
                            onBlur={() => this.handleBlur("repeatedPassword")}
                            focused={repeatedPasswordFocused.toString()}
                            required
                            pattern={this.state.password}
                          ></input>

                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faLock} />
                          </div>
                          <div
                            className="iconRegisterEye"
                            onClick={this.togglePasswordVisibilityRepeated}
                          >
                            {!passwordVisibleRepeated ? (
                              <FontAwesomeIcon icon={faEyeSlash} />
                            ) : (
                              <FontAwesomeIcon icon={faEye} />
                            )}
                          </div>
                          <span className="infoRegister">
                            Passwords don't match!
                          </span>
                        </div>
                        <div className="buttonContainerSignUp">
                          <button
                            type="submit"
                            className="btn--outline--accept"
                          >
                            ZATWIERDŹ
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                </div>
                <div className="signUpContainerRegister2">
                  <h1 className="titleSignUp">Zapisz się na kurs!</h1>
                  <li className="signUpItemRegister2">
                    <img
                      src="./picture/register.png"
                      alt="register to web app"
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
}

export default SignUp;
