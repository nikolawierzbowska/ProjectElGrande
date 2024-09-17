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
// import ProfileAdmin from "./users/admin/ProfileAdmin";

import CoursesAdmin from "./users/admin/CoursesAdmin";
import RolesAdmin from "./users/admin/RolesAdmin";
import UsersAdmin from "./users/admin/UsersAdmin";
import OpinionsAdmin from "./users/admin/OpinionsAdmin";
import Settings from "./users/admin/Settings";
import ProfileAdmin from "./users/admin/ProfileAdmin";
import { fetchUserData } from "./users/admin/ReturnNameUser";
import { request, setAuthToken, getAuthToken } from "../axios_helper";
import ProfileUser from "./users/user/ProfileUser";
import LessonUser from "./users/user/LessonUser";
import SettingsUser from "./users/user/SettingsUser";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";
import Lesson5 from "./lessons/Lesson5";
import Lesson6 from "./lessons/Lesson6";
import Lesson7 from "./lessons/Lesson7";
import Lesson8 from "./lessons/Lesson8";
import Lesson9 from "./lessons/Lesson9";
import Lesson10 from "./lessons/Lesson10";
import Lesson11 from "./lessons/Lesson11";
import Lesson12 from "./lessons/Lesson12";
import Lesson13 from "./lessons/Lesson13";
import Lesson14 from "./lessons/Lesson14";
import Lesson15 from "./lessons/Lesson15";
import Lesson16 from "./lessons/Lesson16";
import Lesson17 from "./lessons/Lesson17";
import Lesson18 from "./lessons/Lesson18";
import Lesson19 from "./lessons/Lesson19";
import Lesson20 from "./lessons/Lesson20";
import Lesson21 from "./lessons/Lesson21";
import Lesson22 from "./lessons/Lesson22";
import Lesson23 from "./lessons/Lesson23";
import Lesson24 from "./lessons/Lesson24";
import Lesson25 from "./lessons/Lesson25";
import Lesson26 from "./lessons/Lesson26";
import Lesson27 from "./lessons/Lesson27";
import Lesson28 from "./lessons/Lesson28";
import Lesson29 from "./lessons/Lesson29";
import Lesson30 from "./lessons/Lesson30";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SetNewPassword from "./pages/SetNewPassword";

class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      error: "",
      isLoggedIn: false,
      role: "",
    };
  }

  checkRoleUser = () => {
    const roleUser = localStorage.getItem("role");
    if (roleUser === "ADMIN") {
      this.setState({ role: "ADMIN" });
    } else if (roleUser === "USER") {
      this.setState({ role: "USER" });
    }
  };

  checkLoginStatus = () => {
    const loggedIn = getAuthToken();

    if (loggedIn !== null && loggedIn !== "null") {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  };

  componentDidMount() {
    this.checkLoginStatus();
    this.checkRoleUser();
    const role = localStorage.getItem("role");
    const isLoggedIn = !!getAuthToken();

    this.setState({ isLoggedIn, role });
  }

  onLogin = (e, email, password) => {
    e.preventDefault();
    request("POST", "http://localhost:8080/api/v1/auth/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setAuthToken(response.data.token);

          this.setState({ userEmail: email });
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("role", response.data.role);

          fetchUserData(email);

          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementsByClassName("error")[0].textContent = "";
          this.setState({ isLoggedIn: true, role: response.data.role });

          if (window.localStorage.getItem("email") === "nikola@gmail.com") {
            window.location.href = "/admin-profile";
          } else {
            window.location.href = "/user-profile";
          }
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");

          const errorInfo = document.getElementsByClassName("error");
          errorInfo[0].textContent = "Niepoprawny email lub hasło";
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
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("repeatedPassword").value = "";
        document.getElementById("signButtonMain").style.display = "none";
        document.getElementsByClassName("error")[0].textContent = "";
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: error.response.data.info });
      });
  };

  render() {
    const { error, isLoggedIn, role } = this.state;

    return (
      <>
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
              element={<SignUp onRegister={this.onRegister} error={error} />}
            />
            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="/how-to-sign-up" element={<Course />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/checkOtp" element={<ResetPassword />} />
            <Route path="/setNewPassword" element={<SetNewPassword />} />

            <Route
              path="/admin-profile"
              element={
                isLoggedIn && role === "ADMIN" ? <ProfileAdmin /> : <Login />
              }
            />
            <Route
              path="/admin-courses"
              element={
                isLoggedIn && role === "ADMIN" ? <CoursesAdmin /> : <Login />
              }
            />
            <Route
              path="/admin-roles"
              element={
                isLoggedIn && role === "ADMIN" ? <RolesAdmin /> : <Login />
              }
            />
            <Route
              path="/admin-users"
              element={
                isLoggedIn && role === "ADMIN" ? <UsersAdmin /> : <Login />
              }
            />
            <Route
              path="/admin-opinions"
              element={
                isLoggedIn && role === "ADMIN" ? <OpinionsAdmin /> : <Login />
              }
            />
            <Route
              path="/admin-settings"
              element={
                isLoggedIn && role === "ADMIN" ? <Settings /> : <Login />
              }
            />
            <Route
              path="/user-profile"
              element={
                isLoggedIn && role === "USER" ? <ProfileUser /> : <Login />
              }
            />

            <Route
              path="/user-lessons"
              element={
                isLoggedIn && role === "USER" ? <LessonUser /> : <Login />
              }
            />

            <Route
              path="/user-lesson-1"
              element={isLoggedIn && role === "USER" ? <Lesson1 /> : <Login />}
            />
            <Route
              path="/user-lesson-2"
              element={isLoggedIn && role === "USER" ? <Lesson2 /> : <Login />}
            />
            <Route
              path="/user-lesson-3"
              element={isLoggedIn && role === "USER" ? <Lesson3 /> : <Login />}
            />

            <Route
              path="/user-lesson-4"
              element={isLoggedIn && role === "USER" ? <Lesson4 /> : <Login />}
            />
            <Route
              path="/user-lesson-5"
              element={isLoggedIn && role === "USER" ? <Lesson5 /> : <Login />}
            />
            <Route
              path="/user-lesson-6"
              element={isLoggedIn && role === "USER" ? <Lesson6 /> : <Login />}
            />
            <Route
              path="/user-lesson-7"
              element={isLoggedIn && role === "USER" ? <Lesson7 /> : <Login />}
            />
            <Route
              path="/user-lesson-8"
              element={isLoggedIn && role === "USER" ? <Lesson8 /> : <Login />}
            />
            <Route
              path="/user-lesson-9"
              element={isLoggedIn && role === "USER" ? <Lesson9 /> : <Login />}
            />

            <Route
              path="/user-lesson-10"
              element={isLoggedIn && role === "USER" ? <Lesson10 /> : <Login />}
            />
            <Route
              path="/user-lesson-11"
              element={isLoggedIn && role === "USER" ? <Lesson11 /> : <Login />}
            />
            <Route
              path="/user-lesson-12"
              element={isLoggedIn && role === "USER" ? <Lesson12 /> : <Login />}
            />
            <Route
              path="/user-lesson-13"
              element={isLoggedIn && role === "USER" ? <Lesson13 /> : <Login />}
            />
            <Route
              path="/user-lesson-14"
              element={isLoggedIn && role === "USER" ? <Lesson14 /> : <Login />}
            />
            <Route
              path="/user-lesson-15"
              element={isLoggedIn && role === "USER" ? <Lesson15 /> : <Login />}
            />

            <Route
              path="/user-lesson-16"
              element={isLoggedIn && role === "USER" ? <Lesson16 /> : <Login />}
            />
            <Route
              path="/user-lesson-17"
              element={isLoggedIn && role === "USER" ? <Lesson17 /> : <Login />}
            />
            <Route
              path="/user-lesson-18"
              element={isLoggedIn && role === "USER" ? <Lesson18 /> : <Login />}
            />
            <Route
              path="/user-lesson-19"
              element={isLoggedIn && role === "USER" ? <Lesson19 /> : <Login />}
            />
            <Route
              path="/user-lesson-20"
              element={isLoggedIn && role === "USER" ? <Lesson20 /> : <Login />}
            />
            <Route
              path="/user-lesson-21"
              element={isLoggedIn && role === "USER" ? <Lesson21 /> : <Login />}
            />

            <Route
              path="/user-lesson-22"
              element={isLoggedIn && role === "USER" ? <Lesson22 /> : <Login />}
            />
            <Route
              path="/user-lesson-23"
              element={isLoggedIn && role === "USER" ? <Lesson23 /> : <Login />}
            />
            <Route
              path="/user-lesson-24"
              element={isLoggedIn && role === "USER" ? <Lesson24 /> : <Login />}
            />
            <Route
              path="/user-lesson-25"
              element={isLoggedIn && role === "USER" ? <Lesson25 /> : <Login />}
            />
            <Route
              path="/user-lesson-26"
              element={isLoggedIn && role === "USER" ? <Lesson26 /> : <Login />}
            />
            <Route
              path="/user-lesson-27"
              element={isLoggedIn && role === "USER" ? <Lesson27 /> : <Login />}
            />

            <Route
              path="/user-lesson-28"
              element={isLoggedIn && role === "USER" ? <Lesson28 /> : <Login />}
            />
            <Route
              path="/user-lesson-29"
              element={isLoggedIn && role === "USER" ? <Lesson29 /> : <Login />}
            />
            <Route
              path="/user-lesson-30"
              element={isLoggedIn && role === "USER" ? <Lesson30 /> : <Login />}
            />

            <Route
              path="/user-settings"
              element={
                isLoggedIn && role === "USER" ? <SettingsUser /> : <Login />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default AppContent;
