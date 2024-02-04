import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "../components/pages/Home";
import Opinion from "../components/pages/Opinion";
import Price from "../components/pages/Price";
import Contact from "../components/pages/Contact";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import MoreInfo from "../components/pages/MoreInfo";
import Course from "../components/pages/Course";
import NotFound from "../components/button/NotFound";
import Payment from "../components/pages/Payment";
import AuthContent from "../components/AuthContent";

import { request, setAuthToken } from "../axios_helper";
import ButtonLogout from "./button/ButtonLogout";

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin = (e, email, password, errorMessage) => {
    e.preventDefault();
    request("POST", "http://localhost:8080/api/v1/auth/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        setAuthToken(response.data.token);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("loginButtonMain").style.display = "none";
        document.getElementById("signButtonMain").style.display = "none";
        document.getElementById("logoutButtonMain").style.display = "block";
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");
          this.setState({ errorMessage: error.message });
        }
      });
  };

  onRegister = (e, firstName, lastName, email, password, repeatedPassword) => {
    e.preventDefault();
    request("POST", "http://localhost:8080/api/v1/auth/sign-up", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      repeatedPassword: repeatedPassword,
    })
      .then((response) => {
        setAuthToken(response.data.token);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repeatedPassword").value = "";
        document.getElementById("signButtonMain").style.display = "none";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <AuthContent />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opinion" element={<Opinion />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/login"
              element={
                <Login
                  onLogin={(e, email, password, errorMessage) =>
                    this.onLogin(e, email, password, errorMessage)
                  }
                />
              }
            />
            <Route
              path="/sign-up"
              element={<SignUp onRegister={this.onRegister} />}
            />
            <Route path="/" element={<ButtonLogout />} />

            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="/how-to-sign-up" element={<Course />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}
