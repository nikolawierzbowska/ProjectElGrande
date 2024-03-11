import React, { useState, useEffect } from "react";
import "../../../App.css";
import { fetchUserData } from "../admin/ReturnNameUser";
import "./User.css";
import SidebarUser from "./SidebarUser";

import "../admin/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ProfileUser() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      fetchUserData(email).then((userData) => setUserData(userData));
    }
  }, []);

  return (
    <>
      <SidebarUser />
      <style>
        {`
        #profileId{
          border: 1px solid black; 
          background-color:#d33175;
          accent-color: black;
        }      
          `}
      </style>

      <div className="main-content-holder">
        <h1 className="titleAdmin"> PROFIL UŻYTKOWNIKA</h1>
        <div className="content-grid-one">
          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Dane użytkownika</h3>
            </div>
            <div className="grid-c1-content">
              <div className="personalData">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  defaultValue={userData ? userData.firstName : ""}
                  readOnly
                ></input>
                <div className="iconRegister">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <div className="personalData">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  defaultValue={userData ? userData.lastName : ""}
                  readOnly
                ></input>
                <div className="iconRegister">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <div className="personalData">
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={userData ? userData.email : ""}
                  readOnly
                ></input>
                <div className="iconRegister">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Tytuł 1 </h3>
            </div>
            <div className="grid-c1-content">
              <p> Istniejące role: </p>
              <li>1</li>
              <li>2</li>
            </div>
          </div> */}

      {/* <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Tytuł 1 </h3>
            </div>
            <div className="grid-c1-content">
              <p> Istniejące role: </p>
              <li>1</li>
              <li>2</li>
            </div>
          </div>

          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Tytuł 1 </h3>
            </div>
            <div className="grid-c1-content">
              <p> Istniejące role: </p>
              <li>1</li>
              <li>2</li>
            </div>
          </div> */}
    </>
  );
}
// }

export default ProfileUser;
