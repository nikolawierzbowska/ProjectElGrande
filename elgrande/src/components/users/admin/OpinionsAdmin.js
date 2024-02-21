import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { request } from "../../../axios_helper";
import "../../../App.css";
import "./Sidebar.css";
import Sidebar from "./Sidebar";
import ButtonDelete from "../../button/ButtonDelete.js";

function OpinionAdmin() {
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

  const handleDeleteOpinion = (id) => {
    request(
      "DELETE",
      `http://localhost:8080/api/v1/admin/courses/078dbf81-162c-48fd-8cfa-e04d53882fae/opinions/${id}`,
      {}
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setOpinion(
            opinions.filter((opinion) => {
              return opinion.id !== id;
            })
          );
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");
        }
      });
  };

  return (
    <>
      <Sidebar />
      <div className="main-content-holder">
        <div className="content-grid-three">
          {opinions.map((opinion) => (
            <div className="grid-one-item grid-common grid-c1" key={opinion.id}>
              <div className="grid-c1-contentOpinion">
                <li className="opinionLine">
                  <ul>
                    <div className="opinionText">{opinion.description}</div>

                    <div className="userNameOpinion">{opinion.userName}</div>
                    <ButtonDelete
                      onClick={() => handleDeleteOpinion(opinion.id)}
                    />
                  </ul>
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OpinionAdmin;
