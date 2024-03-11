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
import CourseUser from "./users/user/CourseUser";
import LessonUser from "./users/user/LessonUser";
import SettingsUser from "./users/user/SettingsUser";
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson1";
import Lesson3 from "./lessons/Lesson1";

const listLessons = [
  "Liczby i Potęgi",
  "Logarytmy",
  "Procenty",
  "Równania",
  "Nierówności",
  "Funkcja liniowa",
  "Funkcja kwadratowa",
  "Funkcja wymierna",
  "Funkcja wykładnicza",
  "Funkcja logarytmiczna",
  "Wyrażenia algebraiczne",
  "Wielomiany",
  "Ciągi",
  "Trygonometria",
  "Geometria anlityczna",
  "Planimetria",
  "Stereometria",
  "Statystyka",
  "Prawdopodobieństwo",
  "Arkusze maturalne",
];

const LessonComponents = [<Lesson1 />, <Lesson2 />, <Lesson3 />];
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

          fetchUserData(email);

          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          document.getElementsByClassName("error")[0].textContent = "";
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
            {/* <Route
              path="/user-course"
              element={
                isLoggedIn && role === "USER" ? <CourseUser /> : <Login />
              } */}
            {/* /> */}
            <Route
              path="/user-lessons"
              element={
                isLoggedIn && role === "USER" ? <LessonUser /> : <Login />
              }
            />
            <Route
              path="/user-settings"
              element={
                isLoggedIn && role === "USER" ? <SettingsUser /> : <Login />
              }
            />
            {listLessons.map((lesson, index) => (
              <Route
                key={index}
                path={`/user-lesson-${index + 1}`}
                element={
                  isLoggedIn && role === "USER" ? (
                    LessonComponents[index]
                  ) : (
                    <Login />
                  )
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default AppContent;
