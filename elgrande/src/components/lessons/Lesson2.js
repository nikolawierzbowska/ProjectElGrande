import React from "react";
import "../../App.css";
import "./../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";

function Lesson2() {
  return (
    <>
      <SidebarUser />

      <div className="main-content-holder">
        <h1 className="titleAdmin"> LEKCJA 2 - LOGARYTMY</h1>
        <div className="content-grid-three"></div>
      </div>
    </>
  );
}

export default Lesson2;
