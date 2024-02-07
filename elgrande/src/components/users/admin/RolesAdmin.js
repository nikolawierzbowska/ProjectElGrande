import React from "react";
import "../../../App.css";
import "./Sidebar.css";
import "./Admin.css";
import Sidebar from "./Sidebar";

function RolesAdmin() {
  return (
    <>
      <Sidebar />
      <div className="main-content-holder">
        <div className="content-grid-one">
          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Role użytkownika </h3>
            </div>
            <div className="grid-c1-content">
              <p> Istniejące role: </p>
              <li>1</li>
              <li>2</li>
            </div>
          </div>

          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Zarządzaj rolami </h3>
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

export default RolesAdmin;
