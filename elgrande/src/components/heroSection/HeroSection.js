import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonMoreInfo } from "../button/ButtonMoreInfo";
import "./HeroSection.css";
import "../button/ButtonMoreInfo.css";

function HeroSection() {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          <div className="flexColStart hero-left">
            <div className="main-text">
              Przygotujemy cię <br />
              do matury
              <br />z matematyki​
            </div>

            <div className="more-info-button">
              {
                <ButtonMoreInfo buttonStyle="btn--outline">
                  Więcej informacji
                </ButtonMoreInfo>
              }
            </div>

            <div className="additional-text">
              <div className="first-line-text">Zdobywaj wiedzę</div>
              <div className="other-line-text">
                <img className="tick" src="tick.jpg" /> każdego dnia
                <img className="tick" src="tick.jpg" /> o każdej porze
                <img className="tick" src="tick.jpg" /> w dowolnym miejscu
              </div>
            </div>
          </div>

          <div className="flexCenter hero-right">
            <div className="image-container">
              <img
                src="photoMainPage.jpg"
                alt="girl is siting at the desk and studying"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
