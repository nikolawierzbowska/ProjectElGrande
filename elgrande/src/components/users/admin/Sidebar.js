import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { fetchUserData } from "../admin/ReturnNameUser";

const Sidebar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      fetchUserData(email).then((userData) => setUserData(userData));
    }
  }, []);

  return (
    <>
      <div className="sidebarMain">
        <div className="sidebar">
          <div className="sidebarInfoUser">
            <div className="contactContainerImageProfile">
              <div className="imgContainerProfile">
                <img src="./picture/login1.png" alt="opinion" />
              </div>
            </div>
            <div className="sidebarInfoName">
              Cześć {userData ? userData.firstName : ""}
            </div>
          </div>
          <nav className="sidebarNavigation">
            <ul className="sidebarNavList">
              <li className="sidebarNavItem">
                <Link
                  to="/admin-profile"
                  className="sidebarNavLink"
                  id="profileAdminId"
                >
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span className="sidebarNavLinkText">Profil</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link
                  to="/admin-courses"
                  className="sidebarNavLink"
                  id="coursesAdminId"
                >
                  <span>
                    <FontAwesomeIcon icon={faTableColumns} />
                  </span>
                  <span className="sidebarNavLinkText">Kursy</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link
                  to="/admin-roles"
                  className="sidebarNavLink"
                  id="rolesAdminId"
                >
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <span className="sidebarNavLinkText">Role</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link
                  to="/admin-users"
                  className="sidebarNavLink"
                  id="usersAdminId"
                >
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="sidebarNavLinkText">Użytkownicy</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link
                  to="/admin-opinions"
                  className="sidebarNavLink"
                  id="opinionsAdminId"
                >
                  <span>
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                  <span className="sidebarNavLinkText">Opinie</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link
                  to="/admin-settings"
                  className="sidebarNavLink"
                  id="settingsAdminId"
                >
                  <span>
                    <FontAwesomeIcon icon={faGear} />
                  </span>
                  <span className="sidebarNavLinkText"> Ustawienia</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
