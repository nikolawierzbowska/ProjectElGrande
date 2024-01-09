import React from "react";
import "../../App.css";
import "./Opinion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Opinion() {
  return (
    <>
      <div className="opinions">
        <h1 className="titleOpinion">
          Dowiedz się, Co Myślą Nasi Uczniowie o Kursie
        </h1>
        <div className="opinionsContainer">
          <div className="opinionsWrapper">
            <ul className="opinionItems">
              <div className="contactContainerImage">
                <div className="imgContainerOpinion">
                  <img src="./picture/comment.png" alt="opinion photo" />
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test testest test test
                  test test testtest test testtest test test
                </li>
                <div className="name">NAME</div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="name">NAME</div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="name">NAME</div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="name">NAME</div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="name">NAME</div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="name">NAME</div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="name">NAME</div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Opinion;
