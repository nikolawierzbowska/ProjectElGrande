import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonMoreInfo } from "../button/ButtonMoreInfo";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <h1>
                Przygotujemy cię <br />
                do matury
                <br />z matematyki​
              </h1>
            </div>

            <div className="more-info-button">
              {
                <ButtonMoreInfo buttonStyle="btn--outline">
                  Więcej informacji
                </ButtonMoreInfo>
              }
            </div>

            <div className="additional-text">
              <div className="first-line-text">
                Zdobywaj wiedzę
                <br />
              </div>
              <div className="other-line-text">
                <img className="tick" src="tick.jpg" /> każdego dnia
                <img className="tick" src="tick.jpg" /> o każdej porze
                <img className="tick" src="tick.jpg" /> w dowolnym miejscu
              </div>
            </div>
          </div>

          <div className="flexColStart hero-right">
            <img
              src="photoMainPage.jpg"
              alt="girl is siting at the desk and studying"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
