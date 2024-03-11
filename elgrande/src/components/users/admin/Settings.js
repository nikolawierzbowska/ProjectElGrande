import React from "react";
import "../../../App.css";
import "./Sidebar.css";
import Sidebar from "./Sidebar";

function Settings() {
  return (
    <>
      <Sidebar />
      <style>
        {`
        #settingsAdminId{
          border: 1px solid black; 
          background-color:#d33175;
          accent-color: black;
        }      
          `}
      </style>
    </>
  );
}

export default Settings;
