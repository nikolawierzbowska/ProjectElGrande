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
        <div className="content-grid-three">
          <div className="grid-one-item grid-common grid-c1">
            {/* <div className="grid-c-title">
                <h3 className="grid-c-title-text">Lista użytkowników:</h3>
              </div> */}
            <div className="grid-c1-content">
              <li className="userLine"></li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson2;
