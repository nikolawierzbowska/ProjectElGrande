import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonMoreInfo } from "../button/ButtonMoreInfo";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-continer">
          <div className="hero-title">
            <h1>
              Przygotujemy cię <br />
              do matury
              <br />z matematyki​
            </h1>
          </div>
          <div className="more-info-button">
            {<ButtonMoreInfo buttonStyle="btn--outline--color" />}
          </div>
          <div className="additional-text">
            <div className="first-line-text">
              Zdobywaj wiedzę
              <br />
            </div>
            <div className="other-line-text">
              <span className="tick">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
                każdego dnia
              </span>
              <span className="tick">
                {" "}
                <FontAwesomeIcon icon={faCheck} />o każdej porze
              </span>
              <span className="tick">
                {" "}
                <FontAwesomeIcon icon={faCheck} />w dowolnym miejscu
              </span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="mainImage.png"
            alt="girl is siting at the desk and studying"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
