import React, { useState } from "react";
import "../../../App.css";
import "../admin/Sidebar.css";
import "./User.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

const listLessons = [
  "Liczby i Potęgi",
  "Logarytmy",
  "Procenty",
  "Równania",
  "Nierówności",
  "Funkcja liniowa",
  "Funkcja kwadratowa",
  "Funkcja wymierna",
  "Funkcja wykładnicza",
  "Funkcja logarytmiczna",
  "Wyrażenia algebraiczne",
  "Wielomiany",
  "Ciągi",
  "Trygonometria",
  "Geometria anlityczna",
  "Planimetria",
  "Stereometria",
  "Statystyka",
  "Prawdopodobieństwo",
  "Arkusze maturalne",
];
const SidebarUser = () => {
  const nameFromLocalStorage = window.localStorage.getItem("name");
  const nameUser = "Cześć " + nameFromLocalStorage + " !";

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
            <div className="sidebarInfoName">{nameUser}</div>
          </div>
          <nav className="sidebarNavigation">
            <ul className="sidebarNavList">
              <li className="sidebarNavItem">
                <Link to="/user-profile" className="sidebarNavLink">
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span className="sidebarNavLinkText">Profil</span>
                </Link>
              </li>
              <li className="sidebarNavItem">
                <Link
                  to="/user-lessons"
                  className="sidebarNavLink"
                  onClick={handleClick}
                >
                  <span>
                    <FontAwesomeIcon icon={faChalkboard} />
                  </span>
                  <span className="sidebarNavLinkText">Lekcje</span>
                </Link>
                {click === true ? (
                  <div className="sidebarNavigationLessons">
                    {listLessons.map((lesson, index) => {
                      return (
                        <ul key={index}>
                          <Link
                            to={`/user-lesson-${index + 1}`}
                            className="sidebarNavLinkUser"
                          >
                            <li className="sidebarNavLinkTextUser">{lesson}</li>
                          </Link>
                        </ul>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </li>

              <li className="sidebarNavItem">
                <Link to="/user-settings" className="sidebarNavLink">
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
export default SidebarUser;
