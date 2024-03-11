import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Opinion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { request } from "../../axios_helper.js";
import ButtonAccept from "../button/ButtonAccept.js";

function Opinion() {
  const [error, setError] = useState("");
  const [opinions, setOpinion] = useState([]);
  const [state, setState] = useState({ description: "" });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const [button, setButton] = useState({
    loginAddOpinion: false,
  });

  const checkLength = () => {
    const x = document.getElementById("description");
    if (x.value.length > 180) {
      setError("Opinia może zawierać max. 180 znaków");
    } else {
      setError("");
    }
  };

  const addNewOpinion = (e) => {
    request(
      "POST",
      "http://localhost:8080/api/v1/courses/078dbf81-162c-48fd-8cfa-e04d53882fae/opinions",
      {
        description: state.description,
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          document.getElementById("description").value = "";

          setOpinion([...opinions, response.data]);
          // document.getElementsByClassName("error")[0].value = "";
          // setError("");
        }
      })
      .catch((error) => {
        console.error("Error during add new opinion:", error);

        setError(error.response.data.info);
      });
  };

  useEffect(() => {
    const getRole = localStorage.getItem("role");
    const authToken = localStorage.getItem("auth_token");
    if (authToken && getRole === "USER") {
      setButton((prevState) => ({
        ...prevState,
        loginAddOpinion: true,
      }));
    } else {
      setButton((prevState) => ({
        ...prevState,
        loginAddOpinion: false,
      }));
    }
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

              {button.loginAddOpinion && <ButtonAccept /> ? (
                <div className="opinionContainer">
                  <li className="opinionItem">
                    <span className="error">{error}</span>
                    <div className="opinionText">
                      <div className="newOpinion">
                        <textarea
                          type="text"
                          id="description"
                          name="description"
                          placeholder="Co myślisz o kursie?"
                          onChange={onChangeHandler}
                          onInput={checkLength}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="name"></div>
                    <ButtonAccept onClick={() => addNewOpinion()} />
                  </li>
                </div>
              ) : (
                ""
              )}

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
