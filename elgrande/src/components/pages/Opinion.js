import React from "react";
import "../../App.css";
import "./Opinion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Opinion() {
  return (
    <>
      <div className="opinions">
        <h1 className="title">Opinie naszych uczniów</h1>
        <div className="opinionsContainer">
          <div className="opinionsWrapper">
            <ul className="opinionItems">
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="nameStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="photoStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="photoStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="photoStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="photoStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="photoStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
              <div className="opinionContainer">
                <li className="opinionItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </p>
                  test test test test test test test test test test
                </li>
                <div className="photoStudent">
                  <div className="name">NAME</div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Opinion;
