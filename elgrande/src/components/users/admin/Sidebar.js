import React from "react";
import "../../../App.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
      <div className="sidebarMain">
        <div className="sidebar">
          <div className="sidebarInfoUser">
            <div className="sidebarInfoImage">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div className="sidebarInfoName">cześć, name!</div>
          </div>
          <nav className="sidebarNavigation">
            <ul className="sidebarNavList">
              <li className="sidebarNavItem">
                <Link to="/admin-profile" className="sidebarNavLink">
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span className="sidebarNavLinkText">Profil</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link to="/admin-courses" className="sidebarNavLink">
                  <span>
                    <FontAwesomeIcon icon={faTableColumns} />
                  </span>
                  <span className="sidebarNavLinkText">Kursy</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link to="/admin-roles" className="sidebarNavLink">
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <span className="sidebarNavLinkText">Role</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link to="/admin-users" className="sidebarNavLink">
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="sidebarNavLinkText">Użytkownicy</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link to="/admin-opinions" className="sidebarNavLink">
                  <span>
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                  <span className="sidebarNavLinkText">Opinie</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link to="/admin-settings" className="sidebarNavLink">
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
}

export default Sidebar;
