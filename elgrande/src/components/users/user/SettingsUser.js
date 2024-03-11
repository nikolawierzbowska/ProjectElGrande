import React from "react";
import "../../../App.css";
import "./User.css";
import "../admin/Sidebar.css";
import SidebarUser from "../user/SidebarUser";

function SettingsUser() {
  return (
    <>
      <SidebarUser />
      <style>
        {`
        #settingsId{
 
          border: 1px solid black; ;
          background-color:#d33175;
          accent-color: black;
        }
          

      
          `}
      </style>
    </>
  );
}

export default SettingsUser;
