import React, { useState } from "react";
import "../../App.css";
import "./Login.css";
import "../button/Button.css";

function ResetPassword() {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const email = window.localStorage.getItem("email");

  const onChangeHandler = (event) => {
    setOtp(event.target.value);
  };

  const onSubmitSetOtp = (e) => {
    e.preventDefault();
    onSubmitOtp(email, otp);
  };

  const onSubmitOtp = (email, otp) => {
    fetch(
      `http://localhost:8080/api/v1/forgotPassword/verifyOtp/${otp}/${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, email }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("Otp is correct");

          setOtp("");
          setError("");

          document.getElementsByClassName("error")[0].textContent = "";
          window.location.href = "/setNewPassword";
        } else {
          throw new Error("Otp not correct");
        }
      })
      .catch((error) => {
        console.error("Error during check otp:", error);
        setOtp("Failed to send otp. Please try again.");
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
                        Odczytaj OTP z email i zresetuj hasło!
                      </h3>
                      <div className="loginItemContainer">
                        <li className="loginItem">
                          <div className="containerFormLogin">
                            <span className="error">{error}</span>
                            <form onSubmit={onSubmitSetOtp}>
                              <div className="personalDataLogin">
                                <input
                                  type="text"
                                  id="otp"
                                  name="otp"
                                  placeholder="OTP"
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

export default ResetPassword;
