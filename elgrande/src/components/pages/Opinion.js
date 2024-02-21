import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Opinion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { request } from "../../axios_helper.js";

function Opinion() {
  const [opinions, setOpinion] = useState([]);

  useEffect(() => {
    request(
      "GET",
      "http://localhost:8080/api/v1/courses/078dbf81-162c-48fd-8cfa-e04d53882fae/opinions"
    )
      .then((response) => {
        setOpinion(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error during get all opinions:", error);
      });
  }, []);

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
                  <img src="./picture/comment.png" alt="opinion" />
                </div>
              </div>
              {opinions.map((opinion) => (
                <div className="opinionContainer" key={opinion.id}>
                  <li className="opinionItem">
                    <p className="quote">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </p>
                    <div className="opinionText">{opinion.description}</div>

                    <div className="name">{opinion.userName}</div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Opinion;
