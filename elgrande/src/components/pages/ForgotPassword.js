import React, { useState } from "react";
import "../../App.css";
import "./Login.css";
import "../button/Button.css";

function ForgotPassword() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const onChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitEmail = (e) => {
    e.preventDefault();
    onSubmitEmailToResetPassword(email);
  };

  const onSubmitEmailToResetPassword = (email) => {
    fetch(`http://localhost:8080/api/v1/forgotPassword/verifyMail/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Email sent successfully");

          setEmail("");
          window.localStorage.setItem("email", email);
          setError("");

          document.getElementById("email").value = "";
          document.getElementsByClassName("error")[0].textContent = "";

          window.location.href = "/checkOtp";
        } else {
          throw new Error("Failed to send email");
        }
      })
      .catch((error) => {
        console.error("Error during reset password:", error);
        setError("Failed to send email. Please try again.");
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
                      <h1 className="titleForgorPassword">
                        Zapomniałeś hasło?
                      </h1>
                      <h3 className="forgorPasswordText">
                        Podaj email i zresetuj hasło!
                      </h3>
                      <div className="loginItemContainer">
                        <li className="loginItem">
                          <div className="containerFormLogin">
                            <span className="error">{error}</span>
                            <form onSubmit={onSubmitEmail}>
                              <div className="personalDataLogin">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Email"
                                  onChange={onChangeHandler}
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
}

export default ForgotPassword;
