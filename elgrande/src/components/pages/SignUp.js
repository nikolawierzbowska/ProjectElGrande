import * as React from "react";
import "../../App.css";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitRegister = (e) => {
    this.state.onRegister(
      e,
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.repeatedPassword
    );
  };

  render() {
    return (
      <>
        <div className="signUp">
          <div className="signUpsContainer">
            <div className="signUpWrapper">
              <ul className="signUpItems">
                <div className="signUpContainer">
                  <li className="signUpItem">
                    <div className="containerFormRegister">
                      <form onSubmit={this.onSubmitRegister}>
                        <div className="personalData">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Imię"
                            onChange={this.onChangeHandler}
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
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                        </div>
                        <div className="personalData">
                          <input
                            type="login"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.onChangeHandler}
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </div>
                        </div>

                        <div className="personalData">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Hasło"
                            onChange={this.onChangeHandler}
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faLock} />
                          </div>
                        </div>
                        <div className="personalData">
                          <input
                            type="password"
                            id="repeatedPassword"
                            name="repeatedPassword"
                            placeholder="Powtórz hasło"
                            onChange={this.onChangeHandler}
                          ></input>
                          <div className="iconRegister">
                            <FontAwesomeIcon icon={faLock} />
                          </div>
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
