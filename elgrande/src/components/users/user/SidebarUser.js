import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../admin/Sidebar.css";
import "./User.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import { fetchUserData } from "../admin/ReturnNameUser";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const listLessons = [
  "1. Liczby i potęgi",
  "2. Logarytmy",
  "3. Procenty",
  "4. Równania",
  "5. Nierówności",
  "6. Funkcja liniowa",
  "7. Funkcja kwadratowa",
  "8. Funkcja wymierna",
  "9. Funkcja wykładnicza",
  "10.Funkcja logarytmiczna",
  "11. Wyrażenia algebraiczne",
  "12. Wielomiany",
  "13. Ciągi",
  "14. Trygonometria",
  "15. Geometria anlityczna",
  "16. Planimetria",
  "17. Stereometria",
  "18. Statystyka",
  "19. Prawdopodobieństwo",
  "20. Arkusz maturalny 1",
  "21. Arkusz maturalny 2",
  "22. Arkusz maturalny 3",
  "23. Arkusz maturalny 4",
  "24. Arkusz maturalny 5",
  "25. Arkusz maturalny 6",
  "26. Arkusz maturalny 7",
  "27. Arkusz maturalny 8",
  "28. Arkusz maturalny 9",
  "29. Arkusz maturalny 10",
  "30. Arkusz maturalny 11",
];
const SidebarUser = ({ click }) => {
  const [userData, setUserData] = useState(null);
  const [isClicked, setIsClicked] = useState(click);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      fetchUserData(email).then((userData) => setUserData(userData));
    }
    setIsClicked(click);
  }, [click]);

  const handleClick = () => setIsClicked(!isClicked);

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
              {" "}
              Cześć {userData ? userData.firstName : ""}
            </div>
          </div>
          <nav className="sidebarNavigationLesson">
            <ul className="sidebarNavList">
              <li className="sidebarNavItem">
                <Link
                  to="/user-profile"
                  className="sidebarNavLink"
                  id="profileId"
                >
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
                  id="lessonsId"
                >
                  <span>
                    <FontAwesomeIcon icon={faChalkboard} />
                  </span>
                  <span className="sidebarNavLinkText">Lekcje</span>

                  {isClicked === false ? (
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} id="caretDown" />
                    </span>
                  ) : (
                    <span>
                      <FontAwesomeIcon icon={faCaretUp} id="caretUp" />
                    </span>
                  )}
                </Link>
                {isClicked === true ? (
                  <div className="sidebarNavigationLessons">
                    {listLessons.map((lesson, index) => {
                      return (
                        <ul key={index}>
                          <Link
                            to={`/user-lesson-${index + 1}`}
                            className="sidebarNavLinkUser"
                            id={`id-${index + 1}`}
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
                <Link
                  to="/user-settings"
                  className="sidebarNavLink"
                  id="settingsId"
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
export default SidebarUser;
