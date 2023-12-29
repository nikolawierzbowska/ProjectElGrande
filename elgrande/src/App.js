import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />

        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
