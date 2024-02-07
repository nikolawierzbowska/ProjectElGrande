import React from "react";
import "../../../App.css";
import "./Sidebar.css";
import "./Admin.css";
import Sidebar from "./Sidebar";
import "../../pages/Login.css";

function ProfileAdmin() {
  return (
    <>
      <Sidebar />

      <div className="main-content-holder">
        <div className="content-grid-one">
          <div className="grid-one-item grid-common grid-c1">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileAdmin;
