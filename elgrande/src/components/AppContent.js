import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useHistory,
  useNavigate,
} from "react-router-dom";
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
import ProfileAdmin from "./users/admin/ProfileAdmin";

import CoursesAdmin from "./users/admin/CoursesAdmin";
import RolesAdmin from "./users/admin/RolesAdmin";
import UsersAdmin from "./users/admin/UsersAdmin";
import OpinionsAdmin from "./users/admin/OpinionsAdmin";
import Settings from "./users/admin/Settings";

import { request, setAuthToken } from "../axios_helper";

class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
    };
    this.errorRef = React.createRef();
  }

  onLogin = (e, email, password) => {
    e.preventDefault();
    request("POST", "http://localhost:8080/api/v1/auth/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.status === 200) {
          setAuthToken(response.data.token);

          this.setState({ userEmail: email });

          if (email === "nikola@gmail.com") {
            window.location.href = "/admin-profile";
          } else {
            window.location.href = "/";
          }

          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementsByClassName("error")[0].textContent = "";
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");

          const errorInfo = document.getElementsByClassName("error");
          errorInfo[0].textContent = "Niepoprawnyy email lub hasło";
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
                  onLogin={(e, email, password) =>
                    this.onLogin(e, email, password)
                  }
                />
              }
            />
            <Route
              path="/sign-up"
              element={<SignUp onRegister={this.onRegister} />}
            />

            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="/how-to-sign-up" element={<Course />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/admin-profile" element={<ProfileAdmin />} />
            <Route path="/admin-courses" element={<CoursesAdmin />} />
            <Route path="/admin-roles" element={<RolesAdmin />} />
            <Route path="/admin-users" element={<UsersAdmin />} />
            <Route path="/admin-opinions" element={<OpinionsAdmin />} />
            <Route path="/admin-settings" element={<Settings />} />

            {/* <Route path="/user-page" element={<UserPage />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default AppContent;
