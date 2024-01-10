import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Opinion from "./components/pages/Opinion";
import Price from "./components/pages/Price";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import MoreInfo from "./components/pages/MoreInfo";
import Course from "./components/pages/Course";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/how-to-sign-up" element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
